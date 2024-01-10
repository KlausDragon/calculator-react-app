import React, { useState } from 'react';

function App() {
  
  const [total, setTotal] = useState('');
  
  function getCurrentYear() {
    const currentYear = new Date().getFullYear();
    return currentYear;
  }
  
  const handleClick = (e) => {
    const value = e.target.name;
    if (total === 'Error' || total === '0') {
      setTotal(value);
    } else {
      setTotal(total.concat(value));
    }
  }

  const clear = () => {
    setTotal('0');
  }

  const handleDelete = () => {
    setTotal(total.slice(0, -1));
  }

  const signNum = () => {
    if (total !== '0') {
      if (total[0] === '-') {
        setTotal(total.slice(1));
      } else {
        setTotal('-'.concat(total));
      }
    }
  }

  
  const calculate = () => {
    try{
      setTotal(eval(total).toString());
    } catch(e) {
      setTotal('Error');
    }
  }

  return (
    <div className="App">
      <h1>KlausDragon Calculator</h1>
      <div className="container">
        <form>
          <input type="text" value={total}/>
        </form>
        <div className="keypad">
          <button onClick={clear} id="clear" className="highlight">AC</button>
          <button onClick={handleDelete} className="highlight">DEL</button>
          <button name='/' onClick={handleClick} className="highlight">&divide;</button>
          <button name='7' onClick={handleClick}>7</button>
          <button name='8' onClick={handleClick}>8</button>
          <button name='9' onClick={handleClick}>9</button>
          <button name='*' onClick={handleClick} className="highlight">&times;</button>
          <button name='4' onClick={handleClick}>4</button>
          <button name='5' onClick={handleClick}>5</button>
          <button name='6' onClick={handleClick}>6</button>
          <button name='-' onClick={handleClick} className="highlight">&minus;</button>
          <button name='1' onClick={handleClick}>1</button>
          <button name='2' onClick={handleClick}>2</button>
          <button name='3' onClick={handleClick}>3</button>
          <button name='+' onClick={handleClick} className="highlight">+</button>
          <button name='0' onClick={handleClick}>0</button>
          <button name='.' onClick={handleClick}>.</button>
          <button onClick={calculate} name='=' id="equal">=</button>
          <button name='MS' className='lowlight'>MS</button>
          <button name='MC' className='lowlight'>MC</button>
          <button name='MR'className='lowlight'>MR</button>
          <button className='lowlight' onClick={signNum}>+/-</button>
          <button name='M+' className='lowlight'>M+</button>
          <button name='M-' className='lowlight'>M-</button>
          <button name='(' onClick={handleClick} className="para">(</button>
          <button name=')' onClick={handleClick} className="para">)</button>
        </div>
      </div>
      <div className="footer">
        <p>Created by Ali Abbasi © {getCurrentYear()}</p>
      </div>
    </div>
  );
}

export default App;
