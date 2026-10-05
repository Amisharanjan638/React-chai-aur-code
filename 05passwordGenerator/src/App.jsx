import { useState, useCallback ,useEffect ,useRef} from "react";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
   const [pass, setPass] = useState("");

   //useRef hook
   const passRef = useRef(null);          


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";

    if (char) str += "!@#$%^&*()_-+=[]{}~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length +1);

      pass += str.charAt(char);
    }

    setPass(pass);
  }, [length, number, char ,setPass]);


useEffect(() =>{

  passwordGenerator();
} , [length ,number,char ,passwordGenerator]);

const copyPassword = useCallback(() => {
  passRef.current?.select();
  passRef.current?.setSelectionRange(0, 101);
   window.navigator.clipboard.writeText(pass)
},[pass]);






  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md
    rounded-lg px-4 pb-2 my-8 text-orange-500 bg-gray-700"
      >
        <h1 className="text-white text-center my-3 pt-7">Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={pass}
            className="outline-none w-full py-1 px-3 bg-white text-gray-500 placeholder-gray-400"
            placeholder="Password"
            readOnly
            ref ={passRef}
          />

          <button onClick ={copyPassword}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length : {length}</label>
          <div className="flex items-center gap-x-1 ml-2">
            <input
              type="checkbox"
              defaultChecked={number}
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1 ml-2">
            <input
              type="checkbox"
              defaultChecked={char}
              id="charInput"
              onChange={() => {
                setChar((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
