import { createBrowserRouter, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { LangLayout } from './components/layout/LangLayout';
import { HomePage } from './pages/HomePage';
import { SubjectPage } from './pages/SubjectPage';
import { KnowledgePointRoute } from './pages/KnowledgePointRoute';
import { LabListPage } from './pages/LabListPage';
import { LabBenchPage } from './pages/LabBenchPage';
import { NotFoundPage } from './pages/NotFoundPage';

// 3D 细胞查看器整页懒加载，首屏 bundle 不引入 three
const CellExplorerPage = lazy(() => import('./pages/CellExplorerPage'));

export const router = createBrowserRouter([
  { path: '/', element: <Navigate to="/zh" replace /> },
  {
    path: '/:lang',
    element: <LangLayout />,
    children: [
      { index: true, element: <HomePage /> },
      // 化学虚拟实验室（静态段优先于 :subject/:kpId 动态段匹配）
      { path: 'chemistry/lab', element: <LabListPage /> },
      { path: 'chemistry/lab/:slug', element: <LabBenchPage /> },
      // 3D 细胞查看器（静态段优先于 :subject 动态段匹配）
      {
        path: 'biology/cells',
        element: (
          <Suspense fallback={<div className="py-20 text-center text-sm text-slate-400">Loading 3D…</div>}>
            <CellExplorerPage />
          </Suspense>
        ),
      },
      { path: ':subject', element: <SubjectPage /> },
      { path: ':subject/:kpId', element: <KnowledgePointRoute /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
