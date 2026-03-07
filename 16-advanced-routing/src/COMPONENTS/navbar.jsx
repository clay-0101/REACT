import { Link } from "react-router-dom"

const navbar = () => {
  return (
    <div  className="flex items-center justify-between px-8 py-5 bg-cyan-950 text-white text-xl">
        <h2>CARRY</h2>
        <div className="flex items-center gap-8">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/product'>Product</Link>
        </div>
    </div>
  )
}

export default navbar