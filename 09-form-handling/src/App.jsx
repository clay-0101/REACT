import { useState } from "react"
const App = () => {
  const [title, settitle] = useState('')
  const submiting = (e) => {
    e.preventDefault()
    console.log("form submitted...")
  }
  return (
    <div>
      <form onSubmit={(e) => {
        submiting(e)
      }}>
        <input
          type="text"
          placeholder="Enter your name"
          value={title}
          onChange={(e) => {
          settitle(e.target.value)
          }}
        />
        <button>submit</button>
      </form>
    </div>
  )
}

export default App