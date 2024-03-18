import React from 'react';

// Menggunakan arrow function
const Football = () => {
//const shoot = () => { kode jika tidak pakai argumen (a) 
  const shoot = (a) => {
    alert(a);
  }

  return (
    <button onClick={() => shoot("GOAL")}>take the shot!</button>//argumen pada event
    //<button onClick={shoot("GOAL")}>take the shot!</button> kode jika tidak pakai argumen
  );
  
}
const Football1 = () => {
    const shoot = (b, event) => {
      alert(b,event.type);
    }
  
    return (
      <button onClick={(event) => shoot("GOAL", event)}>take the shot!</button>//saat di klik memberitahu event yang dipakai "click"
    );
  }


  export { Football, Football1 };
