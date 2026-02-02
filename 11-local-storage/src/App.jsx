import React from 'react'

const App = () => {
const info = {
  userName:"Carry",
  age:18,
  place:"farrukhNagar"
}
// SET ITEMS IN LOCAL STORAGE SIMPLE
localStorage.setItem('name','carry')

// FOR GET ITEM AND USE IT IN ANYWHERE IN CODE
let data = localStorage.getItem('name')
console.log(data)

// IF YOU WANT TO STORE AN OBJECT
localStorage.setItem('userInfo',JSON.stringify(info)) //CONVERT THE OBJECT INTO A STRING USING - JSON.stringify(obj)

// IF YOU WANT TO ACCESS ANY OBJECT THEN FIRSTLY CONVERT THE STRING INTO OBJECT USING - JSON.parse(localStorage.getItem())
let userData = JSON.parse(localStorage.getItem('userInfo'))

//Then Print it in console 
console.log(userData)

//Other methods .clear(), .remove()

// Other situations Like if you want to delete any specific element from the object then user this 

//Delete the element from obj 
delete userData.age

//Then set again the remaining elements in obj with the same name 'userInfo'
localStorage.setItem('userInfo', JSON.stringify(userData))



  return (
    <div>App</div>
  )
}

export default App