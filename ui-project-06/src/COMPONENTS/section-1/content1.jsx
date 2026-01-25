import LeftSection from "./leftSection"
import RightSection from "./rightSection"

const content1 = (props) => {
   
    return (
        <div className=" py-10 flex gap-12 w-full h-[90vh]">
            <LeftSection/>
            <RightSection users={props.users}/>
        </div>
    )
}

export default content1