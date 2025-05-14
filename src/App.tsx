import './App.css'
import Header from './Header'
import Inputbox from './Inputbox';

function App() {
  
  const fields = [1, 2, 3];

  return (
    <>
        <div className='grid-cols-1 w-96 h-96 bg-fuchsia-50 m-auto mt-12 p-4'>
        <Header />
        {fields.map(f => <Inputbox f={f} />)}
        </div>
    </>
  )
}

export default App
