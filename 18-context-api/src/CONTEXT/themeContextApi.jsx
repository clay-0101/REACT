import { createContext } from "react"

 export const ThemeDataContext = createContext()

const themeContextApi = (props) => {
  return (
    <div>
      <ThemeDataContext.Provider value='hello Carry'>
        {props.children}
      </ThemeDataContext.Provider>
    </div>
  )
}

export default themeContextApi