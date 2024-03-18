import { useState } from 'react'

function App() {
  let [bgColor, setBgColor] = useState('orange')
  return (
    <div className="w-full h-screen duration-500" style={{ backgroundColor: bgColor }}>

      <div className='fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2'>
        <div className='flex m-1 flex-wrap justify-center gap-3 shadow-2xl bg-white px-3 py-2 rounded-xl'>
          <button className='outline-none px-4 bg-red-500 text-white rounded-lg'
            onClick={() => setBgColor('red')}
          >Red</button>
        </div>
        <div className='flex m-1  flex-wrap justify-center gap-3 shadow-2xl bg-white px-3 py-2 rounded-xl'>
          <button className='outline-none px-4 bg-green-500 text-white rounded-lg'
            onClick={() => setBgColor('green')}
          >Green</button>
        </div>
        <div className='flex m-1 flex-wrap justify-center gap-3 shadow-2xl bg-white px-3 py-2 rounded-xl'>
          <button className='outline-none px-4 bg-blue-500 text-white rounded-lg'
            onClick={() => setBgColor('blue')}
          >Blue</button>
        </div>
        <div className='flex m-1 flex-wrap justify-center gap-3 shadow-2xl bg-white px-3 py-2 rounded-xl'>
          <button className='outline-none px-4 bg-gray-500 text-white rounded-lg'
            onClick={() => setBgColor('gray')}
          >Grey</button>
        </div>
      </div>
    </div>
  )
}

export default App
