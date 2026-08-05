/**
 * 消除 "THREE.Clock: This module has been deprecated. Please use THREE.Timer instead."
 * 弃用警告（three r183+ 在 Clock 构造时告警）。
 *
 * 警告并非本项目代码触发：@react-three/fiber v8 在创建内部 store 时无条件
 * `new THREE.Clock()`（其 Canvas/store 未提供注入 Timer 的接口），而 three r183
 * 起每次构造 Clock 都会告警。在升级 fiber 大版本之前，用 three 官方的
 * `setConsoleFunction` 日志钩子精确过滤这一条弃用信息，其余 THREE 日志照常输出。
 */
import { setConsoleFunction } from 'three';

const CLOCK_DEPRECATION = 'Clock: This module has been deprecated';

let installed = false;

/** 安装 three 日志过滤器（幂等，模块加载时调用一次即可） */
export function suppressThreeClockDeprecation(): void {
  if (installed) return;
  installed = true;
  setConsoleFunction((type, message, ...params) => {
    if (type === 'warn' && message.includes(CLOCK_DEPRECATION)) return;
    // eslint-disable-next-line no-console -- three 日志钩子需按原级别转发（含 log/info）
    console[type](message, ...params);
  });
}
