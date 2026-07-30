# 讲解音频批量生成（edge-tts）

本文档说明如何用 [edge-tts](https://github.com/rany2/edge-tts)（微软 Edge 大声朗读语音，免费、无需 API key）把知识点的 `narration` 剧本批量合成为 mp3，供 `NarrationPlayer` 播放。

> 这是一份操作文档：请在本地手动执行，不要提交生成的音频以外的任何环境改动。

## 1. 准备

```bash
# 建议在独立虚拟环境中安装，避免污染系统 Python
python3 -m venv ~/.venvs/edge-tts
source ~/.venvs/edge-tts/bin/activate
pip install edge-tts
```

## 2. 输出目录约定

`NarrationPlayer` 按以下路径加载音频（相对于站点 base）：

```
public/audio/narrations/{kpId}/{lang}/{sectionId}.mp3
```

- `{kpId}`：知识点 id，如 `phy-kinematics-freefall`
- `{lang}`：`zh` 或 `en`
- `{sectionId}`：剧本段落 id（`NarrationSection.id`）

缺失的音频会在运行时自动回退到浏览器 speechSynthesis，因此可以只生成部分语言/段落。

## 3. 声线建议

| 语言 | 推荐声线 | 备选 |
| ---- | -------- | ---- |
| zh | `zh-CN-YunxiNeural`（男声，清晰沉稳） | `zh-CN-XiaoyiNeural`（女声）、`zh-CN-XiaoxiaoNeural`（女声，活泼） |
| en | `en-US-JennyNeural`（女声，教学风格） | `en-US-GuyNeural`（男声）、`en-GB-SoniaNeural`（英式） |

完整声线列表：`edge-tts --list-voices | grep -E '^(zh|en)-'`

## 4. 单条生成命令范式

```bash
edge-tts \
  --voice zh-CN-YunxiNeural \
  --text "欢迎来到自由落体的世界。今天我们来探索物体下落的秘密。" \
  --write-media public/audio/narrations/phy-kinematics-freefall/zh/intro.mp3
```

可选参数：`--rate=-10%`（放慢语速，适合初中生）、`--volume=+0%`。

## 5. 批量生成脚本范式

把每个知识点的 `narration.sections` 导出后循环调用即可。示例（bash + jq，假设已把剧本导出为 JSON）：

```bash
#!/usr/bin/env bash
# 用法：./gen-narration.sh <kpId> <script.json>
# script.json 形如：[{"id":"intro","zh":"……","en":"……"}, ...]
set -euo pipefail
KP="$1"; SCRIPT="$2"
ZH_VOICE="zh-CN-YunxiNeural"
EN_VOICE="en-US-JennyNeural"

jq -c '.[]' "$SCRIPT" | while read -r section; do
  id=$(jq -r '.id' <<<"$section")
  for lang in zh en; do
    voice=$([ "$lang" = zh ] && echo "$ZH_VOICE" || echo "$EN_VOICE")
    text=$(jq -r ".$lang" <<<"$section")
    out="public/audio/narrations/$KP/$lang/$id.mp3"
    mkdir -p "$(dirname "$out")"
    [ -f "$out" ] && continue   # 已生成则跳过，便于增量补跑
    edge-tts --voice "$voice" --rate=-5% --text "$text" --write-media "$out"
  done
done
```

也可以用几行 Node 直接从 `src/content/knowledge/*.ts` 读取剧本（`node -e` + 动态 import，Node ≥ 22.6 可直接加载 TS），思路同上。

## 6. 验收

1. `npm run dev` 后打开含 narration 的知识点页，点击播放；
2. 播放器命中 mp3 时走 `<audio>`，删掉某个 mp3 后应自动回退 speechSynthesis；
3. GitHub Pages 等静态托管直接部署 `public/` 产物即可，无额外服务端依赖。
