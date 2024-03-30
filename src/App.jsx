
import Index from './components/Index';
import { BrowserRouter } from "react-router-dom";

const App = () => {
  

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-blue-100/50 bg-cover bg-no-repeat bg-center'>
         <Index />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
