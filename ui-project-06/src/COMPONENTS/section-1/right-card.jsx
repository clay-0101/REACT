import CardContent from "./card-content"
const image = (props) => {
    return (
        <div className='h-full w-60 shrink-0  rounded-3xl bg-amber-500 overflow-hidden relative'>
            <img className="h-full w-full object-cover" src={props.img} alt="01" />

            <CardContent about={props.about} situ={props.situ} id={props.id}/>
        </div>
    )
}

export default image 