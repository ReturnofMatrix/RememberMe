import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'

import Score from './components/score.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
      <Score />
  </StrictMode>,

)
