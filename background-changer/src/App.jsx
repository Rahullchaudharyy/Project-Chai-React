import  { useState } from "react";
import { Plus } from 'lucide-react'

const App = () => {
  const [Colour, setColour] = useState("gray");
  const [Colorsdata, setColorsdata] = useState([
    "Red",
    "Blue",
    "Green",
    "Olive",
    "Purple",
    "Orange",
    "Pink",
    "Brown",
    "Black"
  ]);

 const AddCol = (NewCol)=>{
    setColorsdata([...Colorsdata,NewCol])
 }
  return (
    <>
      <div
        className="h-screen w-screen ease-in	 transition-colors"
        style={{ backgroundColor: Colour }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
          <div className="flex flex-wrap gap-6 md:gap-11 justify-center bg-slate-700 shadow-xl rounded-xl p-3">
            {Colorsdata.map((Items, index) => (
              <button
                key={index}
                className="p-2 z-10 rounded-full text-white"
                style={{ backgroundColor: Items }}
                onClick={() => setColour(Items)}
              >
                {Items}
              </button>
            ))}
          </div>
        </div>
        <div className="fixed bottom-20 inset-x-0 flex justify-center">
          <button  onClick={() => {
              const newColor = prompt("Enter a new color:");
              if (newColor) {
                AddCol(newColor);
              }
            }} type="button"className="fixed top-10 rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><Plus className="h-4 w-4" /></button>
        </div>
      </div>
    </>
  );
};

export default App;
