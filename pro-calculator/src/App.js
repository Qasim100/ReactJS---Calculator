import { useState } from "react";
import "./App.css";
// import { backspace } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
function App() {
  const [result, setresult] = useState("");
  /*
  const keyHandler = (e) => {
    setresult(result.concat(e.value));
  };
*/
  const clickHandler = (e) => {
    setresult(result.concat(e.target.name));
    //console.log(e.target.name);
  };
  const Clear = () => {
    setresult("");
  };
  function parse(val) {
    return Function(`'use strict'; return (${val})`)();
  }

  const Backspace = () => {
    setresult(result.slice(0, result.length - 1)); // OR result.slice(0,-1) -> Both have  same result
  };

  // const Percent = () => {};
  const Smilee = () => {
    setresult("Project Done By M.Qasim.");
  };
  const Calculate = () => {
    try {
      //setresult(eval(result).toString());
      setresult(parse(result).toString());
    } catch {
      setresult("Error");
    }
  };
  return (
    <div className="App">
      <div className="BodySec">
        <form>
          <input type="text" value={result} />
        </form>

        <div className="Keypad">
          <button onClick={Clear} id="Clear" className="highlight">
            Clear
          </button>
          <button
            name="/"
            onClick={clickHandler}
            id="Divide"
            className="highlight"
          >
            /
          </button>
          <button
            name="*"
            onClick={clickHandler}
            id="Multiply"
            className="highlight"
          >
            X
          </button>
          <button onClick={Backspace} id="Backspace" className="highlight">
            <i class="bi bi-backspace"></i>
          </button>

          <button name="7" onClick={clickHandler}>
            7
          </button>
          <button name="8" onClick={clickHandler}>
            8
          </button>
          <button name="9" onClick={clickHandler}>
            9
          </button>
          <button
            name="-"
            onClick={clickHandler}
            id="Minus"
            className="highlight"
          >
            -
          </button>

          <button name="4" onClick={clickHandler}>
            4
          </button>
          <button name="5" onClick={clickHandler}>
            5
          </button>
          <button name="6" onClick={clickHandler}>
            6
          </button>
          <button
            name="+"
            onClick={clickHandler}
            id="Plus"
            className="highlight"
          >
            +
          </button>

          <button name="1" onClick={clickHandler}>
            1
          </button>
          <button name="2" onClick={clickHandler}>
            2
          </button>
          <button name="3" onClick={clickHandler}>
            3
          </button>
          <button onClick={Calculate} id="Equaltoo" className="highlight">
            =
          </button>

          <button onClick={clickHandler} id="Percent">
            %
          </button>
          <button name="0" onClick={clickHandler}>
            0
          </button>
          <button name="." onClick={clickHandler} id="Point">
            .
          </button>
          <button className="extraSmilee" onClick={Smilee}>
            <i class="bi bi-emoji-smile-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
