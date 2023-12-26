import { createContext, useState } from 'react';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';

export const defaultValues = {
  password: '',
};

export const AuthContext = createContext(defaultValues);

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [errorToastMessage, setErrorToastMessage] = useState(null);

  const formik = useFormik({
    initialValues: { ...defaultValues },
  });

  return (
    <AuthContext.Provider
      value={{
        ...formik,
        isAuthenticated,
        setIsAuthenticated,
        toastMessage,
        setToastMessage,
        errorToastMessage,
        setErrorToastMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

AuthContextProvider.propTypes = {
  children: PropTypes.element,
};
