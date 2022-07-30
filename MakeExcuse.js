import Axios from "axios";
import { useState } from "react";

export default function MakeExcuse() {
  const [generatedExcuse, setGeneratedExcuse] = useState("");
  const [randInt, setRandInt] = useState(0);

  const randomInteger = () => {
    return Math.floor(Math.random() * (4 - 0 + 1)) + 0;
  };

  function makeInteger() {
    setRandInt(randomInteger);
  }

  function fetchExcuse(excuse_param) {
    //randInt in this section is lagging behind the global value
    //can be shown by outputting on screen and logging comparison
    //one problematic phenomenon
    Axios.get(
      `https://my-json-server.typicode.com/AjmalSarwary/mockjson/${excuse_param}`
    ).then((res) => setGeneratedExcuse(res.data.excuses[randInt]));
  }

  return (
    <div className="App">
      <span className="d-block p-2 bg-dark text-white">
        <h3> Generate an Excuse</h3>
        <button
          onClick={() => {
            makeInteger();
            fetchExcuse("party");
          }}
        >
          {" "}
          Party{" "}
        </button>
        <button
          onClick={() => {
            makeInteger();
            fetchExcuse("family");
          }}
        >
          {" "}
          Family{" "}
        </button>
        <button
          onClick={() => {
            makeInteger();
            fetchExcuse("office");
          }}
        >
          {" "}
          Office{" "}
        </button>

        <p> </p>
        <div className="d-block p-5 bg-dark text-warning">
          {generatedExcuse}
        </div>
      </span>
    </div>
  );
}
