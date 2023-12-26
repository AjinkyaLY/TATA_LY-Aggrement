import { Route, Routes } from 'react-router-dom';
import Login from './login/Login';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContextProvider';
import PropTypes from 'prop-types';
import { ToastMessage } from '../components';
import ErrorTost from '../components/ToastMessage/ErrorTost';
import PDFViewer from './dashboard';

const DashboardRoutes = () => {
  const { toastMessage, setToastMessage, errorToastMessage, setErrorToastMessage } =
    useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);
    if (isAuthenticated) {
      return children;
    } else {
      return <Navigate to='/login' />;
    }
  };

  return (
    <>
      <ToastMessage message={toastMessage} setMessage={setToastMessage} />

      <ErrorTost message={errorToastMessage} setMessage={setErrorToastMessage} />
      <Routes>
        <Route path='/sample' element={<PDFViewer />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route
          path='/'
          element={
            <RequireAuth>
              <PDFViewer />
            </RequireAuth>
          }
        />
        <Route path='*' element={<h1>404, Page not found!</h1>} />
      </Routes>
    </>
  );
};

DashboardRoutes.propTypes = {
  children: PropTypes.any,
};

export default DashboardRoutes;
