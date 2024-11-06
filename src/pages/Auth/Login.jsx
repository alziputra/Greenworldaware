import { Toaster } from 'react-hot-toast';
import FormLogin from '../../components/FormLogin';
import { UserContextProvider } from '../../context/UserContext';

function Login() {
  return (
    <div>
      <UserContextProvider>
        <FormLogin />
        <Toaster />
      </UserContextProvider>
    </div>
  );
}

export default Login;
