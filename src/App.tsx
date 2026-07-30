import { createBrowserRouter, Navigate } from 'react-router-dom';
import { LangLayout } from './components/layout/LangLayout';
import { HomePage } from './pages/HomePage';
import { SubjectPage } from './pages/SubjectPage';
import { KnowledgePointRoute } from './pages/KnowledgePointRoute';
import { LabListPage } from './pages/LabListPage';
import { LabBenchPage } from './pages/LabBenchPage';
import { NotFoundPage } from './pages/NotFoundPage';

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
      { path: ':subject', element: <SubjectPage /> },
      { path: ':subject/:kpId', element: <KnowledgePointRoute /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
