import Nav2 from "./nav2"

const navbar = () => {
  return (
    <div className="flex justify-between items-center px-5 py-5 bg-gray-600 text-gray-950">
        <h1 className="font-bold tracking-widest">CODEKIDIARY</h1>
        <Nav2/>
    </div>
  )
}

export default navbar