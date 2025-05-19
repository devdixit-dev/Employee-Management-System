const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Form submitted!`)
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-gray-700 p-20 rounded-lg'>
        <form action="" onSubmit={handleSubmit} className='flex flex-col items-center justify-center'>
          <input className='border-2 border-gray-700 py-3 px-6 text-white outline-none bg-transparent placeholder:text-gray-400 rounded-md' type="text" placeholder='Enter your email' required />
          <input className='border-2 border-gray-700 py-3 px-6 text-white outline-none bg-transparent placeholder:text-gray-400 rounded-md mt-4' type="password" placeholder='Enter your password' required />
          <button className='border-2 border-gray-700 py-3 px-6 text-white outline-none bg-black placeholder:text-white rounded-md mt-4 hover:cursor-pointer'>Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login