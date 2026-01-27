const App = () => {
  const mouseMove = (X, Y) => {
    console.log(`Mouse X-axis Position is ${X}`);
    console.log(`Mouse Y-axis Position is ${Y}`);
  }
  const mouseSpeed = (speed) => {
    console.log(`Scroling Speed : ${speed}`)
  }
  return (
    <div onWheel={(elem) => {
      mouseSpeed(elem.deltaY)
    }}>
      <div className="page">
        <div className="box" onMouseMove={(elem) => {
          mouseMove(elem.clientX, elem.clientY)
        }}></div>
      </div>
      <div className="page"></div>
      <div className="page"></div>
    </div>
  )
}

export default App