

function Square({ value, onSquareClick }) {
    // const [value,setValue]=useState(null);
  
    return (
        <div className='square_container'>
      <button onClick={onSquareClick} className='square'>{value}</button>
      </div>
    )
  }


  export default Square