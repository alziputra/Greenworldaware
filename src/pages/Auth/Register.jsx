import { Toaster } from 'react-hot-toast';
import FormRegister from '../../components/FormRegister';
import { UserContextProvider } from '../../context/UserContext';

function Register() {
  return (
    <div>
      <UserContextProvider>
        <FormRegister />
        <Toaster />
      </UserContextProvider>
    </div>
  );
}

export default Register;
