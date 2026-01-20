const card1 = (props) => {
    return (
        <div>
            <div className="child">
                <img src={props.img} alt="01" />
                <h1>{props.user}</h1>
                <p>{props.about}</p>
            </div>
        </div>
    )
}

export default card1