import Card from "./right-card"

const rightSection = (props) => {
    return(
        <div className="h-full w-2/3 flex gap-5 overflow-x-auto py-5 px-5 ">
            {props.users.map((elem,idx)=>{
                return <Card key={idx} id={idx} img={elem.adr} about={elem.about} situ={elem.situ}/>
            })}
        </div>
    )
}

export default rightSection