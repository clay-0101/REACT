import Navbar from "./navbar"
import Content1 from "./content1"
const section1 = (props) => {
  return (
    <div className="h-screen w-full px-18 py-8">
      <Navbar/>
      <Content1 users={props.users}/>
    </div>
  )
}

export default section1