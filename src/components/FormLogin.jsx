import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import Button from '../layout/Button';
import { Link, Navigate } from 'react-router-dom';

function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { userData, handleLogin, loading } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <div className="flex flex-row-reverse w-full ">
      {userData && <Navigate to="/" replace={true} />}

      <img className="relative filter bg-neutral-400 w-1/2 h-screen max-[980px]:hidden object-cover" src="https://source.unsplash.com/random/1920x1080/?trash" />
      <div className="absolute flex items-end w-1/2 h-screen max-[980px]:hidden overlay">
        <blockquote className="text-white p-10">&quot; Embrace the power of conscious choices, for every reduction in waste is a step towards a cleaner, greener tomorrow.&quot; #LessWasteMoreHope</blockquote>
      </div>
      <form className="flex flex-col m-auto gap-4 text-lg font-bold justify-center bg-neutral-100 p-10 rounded-lg max-[980px]:h-screen max-[980px]:mx-auto max-[980px]:my-20" onSubmit={handleSubmit}>
        <img className="pb-10" src="https://ik.imagekit.io/alzirahmana/Asset%20-%20mobile%20responsive%20web/main-logo-small.png?updatedAt=1697183029244" width={300} alt="logo" />
        <h1 className="text-2xl">Login</h1>

        <label>Email: </label>
        <input className="rounded-lg w-full" type="email" placeholder="Email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password: </label>
        <input className="rounded-lg w-full" type="password" placeholder="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <Button type="daftar" title="Masuk" disabled={loading} />

        <p className="text-sm font-medium">
          Belum punya akun?{' '}
          <Link to="/register" className="text-orange-300">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default FormLogin;
