import { useState, useEffect } from 'react';

function Depend() {
  const [count, setCount] = useState(0); // Membuat state count dan fungsi setter setCount untuk menyimpan nilai dan mengubahnya
  const [hitung, setHitung] = useState(0); // Membuat state hitung dan fungsi setter setHitung untuk menyimpan nilai dan mengubahnya

  // Menggunakan useEffect untuk menjalankan efek setiap kali nilai count berubah
  useEffect(() => {
    // Mengupdate nilai hitung dengan mengalikan nilai count dengan 2
    setHitung(count * 2);
  }, [count]); // Menggunakan count sebagai array dependencies agar efek dijalankan saat count berubah
  
  return (
    <>
      {/* Menampilkan nilai count */}
      <p>Count: {count}</p>
      {/* Tombol untuk menambah nilai count */}
      <button onClick={() => setCount(count + 1)}>+</button>
      {/* Menampilkan nilai hitung */}
      <p>Hitung: {hitung}</p>
    </>
  );
}

export default Depend;
