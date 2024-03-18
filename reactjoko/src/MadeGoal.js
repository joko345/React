import React from 'react';

const NewGoal = () => {
  const MissedGoal = () => {
    return <h1></h1>;
  }

  const MadeGoal = () => {
    return <h1></h1>;
  }

  const Goal = (props) => {
    const isGoal = props.isGoal;
    if (isGoal) {
      return <MadeGoal />;
    }
    return <MissedGoal />;
  }

  // Fungsi untuk menangani saat tombol ditekan
  const shoot = () => {
    // Menentukan apakah gol berhasil atau tidak
    const isGoal = Math.random() < 0.5; // Menentukan secara acak apakah gol berhasil atau tidak
    alert(isGoal ? 'GOAL!' : 'MISSED!'); // Menampilkan notifikasi sesuai dengan hasil gol
  }

  return (
    <div>
      <button onClick={shoot}>Goal / Missed</button>
      <Goal isGoal={false} />
    </div>
  );
}
export default NewGoal;
