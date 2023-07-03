
import React, { useState } from "react";
import "./ToDo.css";

function ToDo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") return;
    setTodos([...todos, input]);
    setInput("");
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  return (
    <div className='app'>
      <h1>To-Do App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Enter a task'
        />
        <button type='submit'>Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;



/*
import React, { useState } from "react";
import "./ToDo.css"

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState("");
  const [operator, setOperator] = useState("");

  const handleNumberClick = (event) => {
    const { value } = event.target;
    if (operator === "") {
      setFirstNumber(firstNumber + value);
    } else {
      setSecondNumber(secondNumber + value);
    }
  };

  const handleOperatorClick = (event) => {
    const { value } = event.target;
    setOperator(value);
  };

  const calculate = () => {
    let finalResult;
    switch (operator) {
      case "+":
        finalResult = parseFloat(firstNumber) + parseFloat(secondNumber);
        break;
      case "-":
        finalResult = parseFloat(firstNumber) - parseFloat(secondNumber);
        break;
      case "*":
        finalResult = parseFloat(firstNumber) * parseFloat(secondNumber);
        break;
      case "/":
        finalResult = parseFloat(firstNumber) / parseFloat(secondNumber);
        break;
      default:
        finalResult = "Invalid operator";
    }
    setResult(finalResult);
  };

  return (
    <div className="calculator">
      <input type="text" value={firstNumber} readOnly />
      <input type="text" value={operator} readOnly />
      <input type="text" value={secondNumber} readOnly />
      <br />
      <button value="1" onClick={handleNumberClick}>
        1
      </button>
      <button value="2" onClick={handleNumberClick}>
        2
      </button>
      <button value="3" onClick={handleNumberClick}>
        3
      </button>
      <button value="+" onClick={handleOperatorClick}>
        +
      </button>
      <br />
      <button value="4" onClick={handleNumberClick}>
        4
      </button>
      <button value="5" onClick={handleNumberClick}>
        5
      </button>
      <button value="6" onClick={handleNumberClick}>
        6
      </button>
      <button value="-" onClick={handleOperatorClick}>
        -
      </button>
      <br />
      <button value="7" onClick={handleNumberClick}>
        7
      </button>
      <button value="8" onClick={handleNumberClick}>
        8
      </button>
      <button value="9" onClick={handleNumberClick}>
        9
      </button>
      <button value="*" onClick={handleOperatorClick}>
        *
      </button>
      <br />
      <button value="." onClick={handleNumberClick}>
        .
      </button>
      <button value="0" onClick={handleNumberClick}>
        0
      </button>
      <button onClick={calculate}>=</button>
      <br />
      <input type="text" value={result} readOnly />
    </div>
  );
};

export default Calculator;

*/