import Section1 from "./COMPONENTS/section-1/section1"
const App = () => {
  let DATA = [
    {
      adr: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1c2luZXNzJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
      about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet. Earum, maxime?",
      situ: "Satisfied"
    },
    {
      adr: "https://plus.unsplash.com/premium_photo-1723618936097-f78940fb26eb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet. Earum, maxime?",
      situ: "Underserved"
    },
    {
      adr: "https://plus.unsplash.com/premium_photo-1664300797179-7c17bb0db671?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet. Earum, maxime?",
      situ: "underbanked"
    },
    {
      adr: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet. Earum, maxime?",
      situ: "Underserved"
    },
    {
      adr: "https://plus.unsplash.com/premium_photo-1661546527475-6663e10549f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
      about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet. Earum, maxime?",
      situ: "Underbanked"
    },
  ]
  return (

    <div>
      <Section1 users={DATA}/>
    </div>
  )
}

export default App