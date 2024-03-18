import { useCallback, useEffect, useRef, useState } from 'react'

function App() {

  let [length, setLength] = useState(8);
  let [numberAllowed, setNumberAllowed] = useState(false);
  let [charAllowed, setCharAllowed] = useState(false);
  let [password, setPassword] = useState('');
  let passwordRef = useRef(null);

  // const pwdGenerator = useCallback(() => {
  //   passwordGenerator();
  // }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed]);

  function copyToClipboard() {
    let copiedValue = passwordRef.current.value;
    passwordRef.current.select();
    window.navigator.clipboard.writeText(copiedValue);
    //todo: show a message that the password is copied
    // e.target.textContent = 'Copied!';
  }

  function passwordGenerator() {
    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numbers = '0123456789';
    let specialChars = '!@#$%^&*()_+';
    let charSet = charset;
    let pwd = ''
    if (numberAllowed) {
      charSet += numbers;
    }
    if (charAllowed) {
      charSet += specialChars;
    }
    for (let i = 0; i < length; i++) {
      let randomPos = Math.floor(Math.random() * charSet.length);
      pwd += charSet[randomPos];
    }
    setPassword(pwd);
  }

  return (
    <>


      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-300 bg-gray-700">
        <h1 className="text-4xl text-center text-white font-serif p-3">Password Generator</h1>
        <div className="flex w-full items-center space-x-2">
          <input
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 bg-white"
            type="text"
            readOnly
            placeholder="Generate Password"
            value={password}
            ref={passwordRef}
          />
          <button
            type="button"
            className="rounded-md bg-blue-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={copyToClipboard}
          >
            Copy
          </button>

        </div>
        <div className='flex text-sm mr-3'>
          <input
            className="w-1/3 cursor-pointer"
            type="range"
            min={7}
            max={20}
            onChange={(e) => setLength(e.target.value)}
            value={length}
          />
          <label htmlFor="length" className='p-4'>Length : {length}</label>
        </div>
        <div className='flex items-center space-x-3'>
          <input
            type="checkbox"
            id="number"
            onChange={(e) => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className='flex items-center space-x-3'>
          <input
            type="checkbox"
            id="char"
            onChange={(e) => setCharAllowed((prev) => !prev)}
            onClick={passwordGenerator}
          />
          <label htmlFor="char">Special Characters</label>
        </div>
      </div>
    </>
  )
}

export default App
