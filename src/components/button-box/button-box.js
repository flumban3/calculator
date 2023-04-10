function ButtonBox({ clear, updateDisplay, calculate, delLast }) {
  return (
    <div className='button-box'>
      <button className='AC' onClick={() => clear("")}>
        AC
      </button>
      <button className='DEL' onClick={delLast}>
        DEL
      </button>
      <button className='absolute-value'></button>
      <button className='operators' onClick={() => updateDisplay("/")}>
        ÷
      </button>
      <button className='button' onClick={() => updateDisplay("7")}>
        7
      </button>
      <button className='button' onClick={() => updateDisplay("8")}>
        8
      </button>
      <button className='button' onClick={() => updateDisplay("9")}>
        9
      </button>
      <button className='operators' onClick={() => updateDisplay("*")}>
        *
      </button>
      <button className='button' onClick={() => updateDisplay("4")}>
        4
      </button>
      <button className='button' onClick={() => updateDisplay("5")}>
        5
      </button>
      <button className='button' onClick={() => updateDisplay("6")}>
        6
      </button>
      <button className='operators' onClick={() => updateDisplay("-")}>
        -
      </button>
      <button className='button' onClick={() => updateDisplay("1")}>
        1
      </button>
      <button className='button' onClick={() => updateDisplay("2")}>
        2
      </button>
      <button className='button' onClick={() => updateDisplay("3")}>
        3
      </button>
      <button className='operators' onClick={() => updateDisplay("+")}>
        +
      </button>
      <button className='zero' onClick={() => updateDisplay("0")}>
        0
      </button>
      <button className='button' onClick={() => updateDisplay(".")}>
        .
      </button>

      <button className='equals' onClick={() => calculate("")}>
        =
      </button>
    </div>
  );
}

export default ButtonBox;
