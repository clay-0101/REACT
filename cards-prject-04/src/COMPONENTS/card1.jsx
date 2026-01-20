import { Bookmark } from "lucide-react"
const card1 = (props) => {
  return (
    <div>
      <div className="card">
        <div className="top">
          <img src={props.img} alt="01" />
          <button>Save<Bookmark height="1vw" /></button>
        </div>
        <div className="mid">
          <h3>{props.comp} <span>{props.time}</span></h3>
          <h1>{props.need}</h1>
          <div className="inner-part">
            <button>{props.job1}</button>
            <button>{props.job2}</button>
          </div>
        </div>
        <div className="bottom">
          <h1>{props.pay}<br /><span>{props.area}</span></h1>
          <button>Apply now</button>
        </div>
      </div>
    </div>
  )
}

export default card1