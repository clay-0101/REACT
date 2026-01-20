import Card1 from "./COMPONENTS/card1"
const App = () => {
  return (
    <div id="parent">
      <Card1 user ="Tony Stark" img="https://plus.unsplash.com/premium_vector-1732007139773-310e9b0cf273?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" about="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, doloremque?"/>
      <Card1 user ="James Bond" img="https://plus.unsplash.com/premium_vector-1733506636710-06148c0fe6d2?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" about="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, doloremque?"/>
      <Card1 user ="Bruce Wayne" img="https://plus.unsplash.com/premium_vector-1733552580912-c9161d2a3707?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" about="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, doloremque?"/>
    </div>
  )
}

export default App
