import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeContextApi from './CONTEXT/themeContextApi.jsx'

createRoot(document.getElementById('root')).render(
<ThemeContextApi>
    <App/>
</ThemeContextApi>
)
