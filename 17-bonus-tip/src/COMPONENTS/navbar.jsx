import React from 'react'

const navbar = (props) => {
  return (
    <div>
      <button
        className='py-3 px-5 bg-blue-600 m-2 rounded active:scale-95'
        onClick={() => {
          props.setTheme('dark')
        }}
      >Dark</button>
      <button
        className='py-3 px-5 bg-blue-600 m-2 rounded active:scale-95'
        onClick={() => {
          props.setTheme('light')
        }}
      >Light</button>
    </div>
  )
}

export default navbar