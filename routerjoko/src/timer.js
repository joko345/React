import { useState, useEffect } from 'react';

function Timers() {
  const [count, setCount] = useState(0); // useState untuk menyimpan nilai count

  useEffect(() => {
     setTimeout(() => {
     setCount((count) => count + 0.5); //menghasilkan count 1
     }, 100);
    }, []);//agar count hanya berjalan sekali

  
  return <h1>Sudah merender {count} kali</h1>;
}

export default Timers;