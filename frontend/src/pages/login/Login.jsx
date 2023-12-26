import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContextProvider';
import { Button, TextInput } from '../../components';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const {
    values,
    touched,
    handleBlur,
    setFieldValue,
    setIsAuthenticated,
    setErrorToastMessage,
    setFieldTouched,
  } = useContext(AuthContext);

  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (values.password === 'LY#startupIndia') {
      setIsAuthenticated(true);
      navigate('/');
      setLoginError('');
    } else {
      setIsAuthenticated(false);
      setFieldTouched('password');
      setLoginError('Incorrect Password');
      setErrorToastMessage('Incorrect Password');
    }
  };

  return (
    <div className='container2' aria-hidden='true'>
      <div className='top'></div>
      <div className='bottom'></div>
      <div className='center'>
        <h2>Please Enter Password</h2>
        <TextInput
          placeholder='Eg: 1234567890'
          name='password'
          value={values.password}
          onChange={(e) => setFieldValue('password', e.target.value)}
          error={loginError}
          touched={touched.password}
          onBlur={(e) => {
            handleBlur(e);
          }}
        />
        <Button primary link='/' onClick={handleLogin}>
          Submit
        </Button>
        <h2>&nbsp;</h2>
      </div>
    </div>
  );
}
