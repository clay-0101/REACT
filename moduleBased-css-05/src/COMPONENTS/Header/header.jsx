import style from "./header.module.css"

const header = () => {
  return (
    <div className={style.nav}>
        <p className={style.btn}>HOME</p>
        <p>CONTACT</p>
        <p>ABOUT</p>
        <p>PROJECTS</p>
    </div>
  )
}

export default header
