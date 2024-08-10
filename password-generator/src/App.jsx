import { useState, useCallback, useEffect, useRef } from "react";

const App = () => {
  const [length, setlength] = useState(8);
  const [NumbAllow, setNumbAllow] = useState(false);
  const [CharAllow, setCharAllow] = useState(false);
  const [Password, setPassword] = useState("");

  const passwordref = useRef(null);
  const CopyPasswordToclipBoard = useCallback(() => {
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0, 20); // for selecting the range how much copy ?
    window.navigator.clipboard.writeText(Password);
  }, [Password]);

  const GeneratePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (NumbAllow) {
      str += "0123456789";
    }

    if (CharAllow) {
      str += "~!@#$%^&*()_+{}[]`";
    }
    

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, NumbAllow, CharAllow, setPassword]);

  useEffect(() => {
    GeneratePassword();
  }, [length, NumbAllow, CharAllow, GeneratePassword]);

  return (
    <>
      <div className="w-full mt-9 p-8 pr-0 rounded-lg bg-gray-700 max-w-md mx-auto shadow-md">
        <div className="flex shadow rounded-lg justify-center overflow-hidden mb-3">
          <input
            className="text-black w-full pl-3"
            type="text"
            value={Password}
            placeholder="Password"
            readOnly
            ref={passwordref}
          />
          <button
            onClick={CopyPasswordToclipBoard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 "
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={37}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <input
            type="checkbox"
            defaultChecked={NumbAllow}
            onChange={() => {
              setNumbAllow((prev) => !prev);
            }}
            name=""
            id="NumInput"
          />
          <label>Number</label>
          <input
            type="checkbox"
            defaultChecked={CharAllow}
            onChange={() => {
              setCharAllow((prev) => !prev);
            }}
            name=""
            id="CharInput"
          />
          <label>Charecter</label>
        </div>
      </div>
    </>
  );
};

export default App;
