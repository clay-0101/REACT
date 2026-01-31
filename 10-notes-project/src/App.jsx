import { useState } from "react"
import note1 from "./assets/note1.png";
import note2 from "./assets/note2.png";
import note3 from "./assets/note3.png";
import note4 from "./assets/note4.png";
import note5 from "./assets/note5.png";

const App = () => {

const deleteNote = (idx)=>{
  let copyTask = [...task]
  copyTask.splice(idx,1)
  setTask(copyTask)
}
const notes = [note1, note2, note3, note4, note5];
let selected = 0



  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (elem) => {
    selected = Math.floor(Math.random()*notes.length)
    
    elem.preventDefault()
    if (title == '' && details == '') {
      alert("Add Something..")
    }
    else {
      console.log("Form Submited.")

      const copyTask = [...task]

      copyTask.push({ title, details, bg : notes[selected] })

      setTask(copyTask)

      setDetails('')
      setTitle('')
    }
  }
  return (
    // THIS IS THE PARENT DIV
    <div className='h-screen w-full lg:flex bg-black text-white'>
      {/* THIS IS MY FORM */}
      <div className='flex flex-col lg:w-1/2 px-10'>
        <h1 className='text-4xl font-bold py-5'>Add Notes</h1>
        <form
          className='flex flex-col items-center gap-5'
          onSubmit={(elem) => {
            submitHandler(elem)
          }}
        >
          <input
            type="text"
            placeholder='Enter Your Title'
            className='border-white border-2 w-full h-10 px-5 text-2xl'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
          <textarea
            className='border-white border-2 w-full h-25 px-5 py-3 text-2xl'
            placeholder='Tell Me Your Details...'
            value={details}
            onChange={(e) => {
              setDetails(e.target.value)
            }}

          >
          </textarea>
          <button className='border-white border-2 w-full h-10 text-2xl bg-white text-black active:scale-95'>Add Note</button>
        </form>
      </div>
      {/*THIS IS SAVED NOTES*/}
      <div className='lg:border-l-2 px-5 py-5  border-white lg:w-1/2'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap mt-5 gap-10 lg:h-[94%]  h-[50vh] overflow-auto '>
          {task.map((ele, idx) => {
            return <div 
            style={{backgroundImage:`url(${ele.bg})`}}
            key={idx} 
            className='h-60 w-50 bg-white text-black py-6 px-3 overflow-auto bg-cover rounded-2xl flex flex-col  wrap-break-word '>
              <h1 className="text-2xl font-bold">{ele.title}</h1>
              <p className="text-gray-600 font-medium ">{ele.details}</p>
              <button onClick={()=>{
                deleteNote(idx)
              }} className="bg-red-400 py-2 px-8 rounded-2xl text-white mt-auto active:scale-95">Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App