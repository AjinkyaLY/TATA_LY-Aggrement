import { Outlet } from 'react-router-dom';

import AuthContextProvider from './AuthContextProvider';

const ContextLayout = () => {
  return (
    <AuthContextProvider>
      <Outlet />
    </AuthContextProvider>
  );
};

export default ContextLayout;
