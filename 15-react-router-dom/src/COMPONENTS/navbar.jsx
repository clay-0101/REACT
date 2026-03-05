import { Link } from "react-router-dom"

const navbar = () => {
  return (
    <div className="h-[10vh] w-full bg-pink-800 text-white absolute top-0 left-0 flex gap-6">
      <Link to='/'>HOME</Link>  
      <Link to='/messege'>MESSEGE</Link>  
      <Link to='/profile'>PROFILE</Link>  
    </div>
  )
}

export default navbar