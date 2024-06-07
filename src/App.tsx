import reactLogo from './assets/react.svg'
import { UseState } from './components/useState'
import { UseEffect } from './components/useEffect'
import { UseRef } from './components/useRef'
import { RederizacaoCondicional } from './components/renderizacaoCondicional'
import './App.css'

function App() {
  return (
    <div className='vh-100 d-flex align-items-center justify-content-center'>

      <div>

        <div className='d-flex justify-content-center align-items-center mb-3'>

          <h1 className='display-3 me-3'>Hooks do React</h1>

          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>

        </div>

        <div className='d-flex'>

          <div className='col-4'>
            <UseState />
          </div>

          <div className='col-4'>
            <UseEffect />
          </div>

          <div className='col-2'>
            <UseRef />
          </div>

          <div className='col-2'>
            <RederizacaoCondicional />
          </div>

        </div>
      </div>
    </div>
  )
}

export default App