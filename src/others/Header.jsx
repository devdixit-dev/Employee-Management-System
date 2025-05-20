const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-medium">Hello<br></br><span className="text-3xl font-semibold">Admin</span>👋</h1>
      <button className="bg-red-500 py-2 px-4 rounded-md font-semibold">Log out</button>
    </div>
  )
}

export default Header