import { useCallback, useEffect, useState , useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [isNumber , setNumber] = useState(false)
  const [isSpecial , setSpecial] = useState(false)
  const [password , setPassword] = useState("")

  const passwordRef = useRef(null)

  const copyPasswordToClip = useCallback(() => {

    passwordRef.current?.select();  // to select all the text 
    passwordRef.current?.setSelectionRange(0 , length) // to select the some part of the you can give any value instead of length
    window.navigator.clipboard.writeText(password)

  
  }, [password])

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"  

    if(isNumber) str += "0123456789"
    if(isSpecial) str += "#@{}[]_-%$&^!`~"

    for(let i = 1; i < length; i++){
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }

    setPassword(pass)

  }  , [length , isNumber , isSpecial, setPassword])


  useEffect( () => passwordGenerator , [length , isSpecial , isNumber, setPassword])

  return (
    <>
      <div
      className='w-full h-screen bg-gray-700 flex items-center flex-col '
      >
        <div
        className=' text-center align-center w-full max-w-2xl h-60 gap-20 rounded-3xl border-gray-200 bg-slate-300 p-5 mt-4 box-border flex items-center flex-col'
        >
          <div className='w-full flex overflow-hidden outline-none'>

                
          <input className='w-full h-10 bg-white text-black rounded-l-xl px-2 outline-none'
          value={password}
          placeholder='password'
          ref={passwordRef}
          readOnly
          />
          <button className='w-20 h-10 rounded-r-xl bg-blue-700 text-white font-semibold shrink-0 outline-none cursor-pointer'
          onClick={copyPasswordToClip}
          > COPY</button>

          </div>

          <div className='flex items-center justify-evenly gap-6'>

            <div className='w-full flex gap-x-2'>
              <input type='range' min={8} max={100} 
              value={length}
              onChange={ (e) => { setLength(e.target.value) } }
              />
            <label className='text-orange-400 font-medium' >Length : {length} </label>
            </div>
            
            <div className=' flex gap-x-2'>

              <input 
              type="checkbox" id='cheackbox'
         
              defaultChecked = {isNumber}
              onChange={ () => setNumber( (prev) => !prev)}
              /> 
              <label htmlFor="cheackbox" className='text-orange-400 font-medium'>Numbers</label>

            </div>

            <div className=' flex gap-x-2'>

              <input 
              type="checkbox" id='cheackbox'
              defaultChecked = {isSpecial}
              onChange={() => setSpecial( (prev) => !prev) }
              /> 
              <label htmlFor="cheackbox" className='text-orange-400 font-medium'>Special</label>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default App
