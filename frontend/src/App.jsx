import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const DashboardRoutes = lazy(() => import('./pages'));
import ContextLayout from './context/ContextProvider';
import { CircularProgress } from '@mui/material';

function App() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <BrowserRouter>
        <Routes>
          <Route element={<ContextLayout />}>
            <Route path='*' element={<DashboardRoutes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
