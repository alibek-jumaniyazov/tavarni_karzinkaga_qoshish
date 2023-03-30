import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Lists from "./Lists";

function App() {
  const [state ,setState] = useState([

    {
      id:1,
      name:"alibek",
      familiya:"Jumaniyazov",
      yosh:18
    },
    {
      id:2,
      name:"amirbek",
      familiya:"Jumaniyazov",
      yosh:19
    },
        {
          id:3,
      name:"akbar",
      familiya:"Jumaniyazov",
      yosh:20
    },
        {
          id:4,
      name:"Javohir",
      familiya:"Jumaniyazov",
      yosh:17
    }
  ])
  function add(ee){
    console.log(ee
      );
}

  return (
    <div className="App"> 

    <div className="jad">
      <p></p>
      <p></p>
      <p></p>
    </div>

    <div className="">
      {

        state.map((item) => (
          <Lists item={item}/>
          
        ))
      }

    </div>
    </div>
  );
}

export default App;

