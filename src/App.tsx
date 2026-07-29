import { createBrowserRouter, Navigate } from 'react-router-dom';
import { LangLayout } from './components/layout/LangLayout';
import { HomePage } from './pages/HomePage';
import { SubjectPage } from './pages/SubjectPage';
import { KnowledgePointRoute } from './pages/KnowledgePointRoute';
import { NotFoundPage } from './pages/NotFoundPage';

export const router = createBrowserRouter([
  { path: '/', element: <Navigate to="/zh" replace /> },
  {
    path: '/:lang',
    element: <LangLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ':subject', element: <SubjectPage /> },
      { path: ':subject/:kpId', element: <KnowledgePointRoute /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
