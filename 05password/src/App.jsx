import { useState, useCallback, useEffect,useRef} from 'react'
import './App.css'

function App() {
  const [length, setlength]=useState(8)
  const [numberallowed, setnumberallowed]=useState(false)
  const [charallowed, setcharallowed]=useState(false)
  const [password, setpassword]=useState("")
  // useref hook
  const passwordref=useRef(null)
  const copytokeyboard=useCallback(()=>{
    passwordref.current?.select()
    
    window.navigator.clipboard.writeText(password)
  },[password])
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberallowed) str+="0123456789"
    if(charallowed) str+="!@#$&*+-/=-"
    for (let i = 1; i <= length; i++) {
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
      
    }
    setpassword(pass)
  }, [length,numberallowed,charallowed,setpassword])
  useEffect(()=>{
    passwordGenerator()
  },[length,numberallowed,charallowed,passwordGenerator])
  return (
    <>
      <div className="w-full max-w-md mx-auto
      bg-gray-700 shadow-md px-4 my-8 text-orange-500">
        <h1 className='text-white text-center my-3'>
          Password Generator
        </h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
          <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordref}
          />
          <button onClick={copytokeyboard}
           className='outline-none bg-blue text-yellow px-3 py-0.5 shrink-0' >
            <p>copy</p>
          </button>
          
        </div>
        <div className='flex text-sm gap-x-2'>
          <div>
            <input type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}
            />
            <label>length: {length}</label>

          </div>
          <div className='flex items-center gap-x-l'>
            <input type="checkbox"
            defaultChecked={numberallowed}
            id="numberinput"
            onChange={()=>{
              setnumberallowed((prev)=>!prev)
            }}
            />
            <label htmlFor="numberinput">numbers</label>
          </div>
          <div className='flex items-center gap-x-l'>
            <input type="checkbox"
            defaultChecked={charallowed}
            id="charinput"
            onChange={()=>{
              setcharallowed((prev)=>!prev)
            }}
            />
            <label htmlFor="charinput">character</label>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
