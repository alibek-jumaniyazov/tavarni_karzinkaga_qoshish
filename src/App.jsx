import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Lists from "./Lists";

function App() {

  const [karzinka, setKorazinka] = useState(JSON.parse(localStorage.getItem('add')) || [])


  localStorage.setItem('add', JSON.stringify(karzinka))


  const [state, setState] = useState([
    {
      card:[],
      id: 1,
      name: "alibek",
      familiya: "Jumaniyazov",
      yosh: 18
    },
    {
      card:[],
      id: 2,
      name: "amirbek",
      familiya: "Jumaniyazov",
      yosh: 19
    },
    {
      card:[],
      id: 3,
      name: "akbar",
      familiya: "Jumaniyazov",
      yosh: 20
    },
    {
      card:[],
      id: 4,
      name: "Javohir",
      familiya: "Jumaniyazov",
      yosh: 17
    }
  ])
  function add(id, name, familiya, yosh) {
    setKorazinka(value => [...value, {
      id: id,
      name: name,
      familiya: familiya,
      yosh: yosh,
    }])


  }

// useEffect(() =>{

// }
 
//   ,[state.card])

  return (
    <div className="App">



      <div className="">
        {

          state.map((item) => (
            <Lists item={item} add={add} />

          ))
        }

      </div>


      <div className="jad">
        {
          karzinka.map((item) => (
            <div className="jad">
              <p>{item.name}</p>
              <p>{item.familiya}</p>
              <p>{item.yosh}</p>
            </div>
          ))
        }
      </div>


    </div>
  );
}

export default App;

