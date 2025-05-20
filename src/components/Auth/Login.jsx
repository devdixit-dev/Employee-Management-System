import { useState } from "react";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Form submitted!`);
    setEmail('');
    setPassword('');
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-gray-700 p-20 rounded-lg'>
        <form action="" onSubmit={handleSubmit} className='flex flex-col items-center justify-center'>
          
          <input
            className='border-2 border-gray-700 py-3 px-5 text-white outline-none bg-black placeholder:text-gray-400 rounded-md'
            type="text"
            placeholder='Enter your email'
            required
            value={email}
            onChange={(e) => { setEmail(e.target.value) }} />

          <input
            className='border-2 border-gray-700 py-3 px-5 text-white outline-none bg-black placeholder:text-gray-400 rounded-md mt-4'
            type="password"
            placeholder='Enter your password'
            required
            value={password}
            onChange={(e) => { setPassword(e.target.value) }} />

          <button
            className='border-2 border-gray-700 py-2 px-6 text-white outline-none bg-black placeholder:text-white rounded-md mt-4 hover:cursor-pointer'>
            Log In
          </button>

        </form>
      </div>
    </div>
  )
}

export default Login