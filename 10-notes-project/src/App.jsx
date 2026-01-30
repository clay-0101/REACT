import { useState } from "react"

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (elem) => {

    elem.preventDefault()
    if (title == '' && details == '') {
      alert("Add Something..")
    }
    else {
      console.log("Form Submited.")

      const copyTask = [...task]

      copyTask.push({ title, details })

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
          <button className='border-white border-2 w-full h-10 text-2xl bg-white text-black'>Add Note</button>
        </form>
      </div>
      {/*THIS IS SAVED NOTES*/}
      <div className='lg:border-l-2 px-5 py-5  border-white lg:w-1/2'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap mt-5 gap-10 lg:h-[94%]  h-[50vh] overflow-auto '>
          {task.map((ele, idx) => {
            return <div key={idx} className='h-60 w-50 bg-white text-black p-3 overflow-auto'>
              <h1 className="text-2xl font-bold">{ele.title}</h1>
              <p className="text-gray-600 font-medium">{ele.details}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App