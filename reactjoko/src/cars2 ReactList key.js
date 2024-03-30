// cars2.js
import React from 'react';

function Mobil(props) {
  return <li>Mobil {props.brand}</li>;
}

function Garage() {
  const mob = ['Daisuki', 'Mexico', 'Honda'];
  return (
    <>
      <h1 style={{color:'green'}}>Merk mobil yang ada di garasi</h1>
      {/* bisa memakai styling*/}
      <ul>
        {mob.map(mo => (<Mobil brand={mo} />
        ))}
      </ul>
    </>
  )
}
//Fungsi dengan memakai kunci
function KeyMobil(props) {
  return <li>Mobil {props.brand}</li>;
}

function KeyGarage() {
  const kunci = [
    { id: 1, brand: 'Mustang' },
    { id: 2, brand: 'Jaguar' },
    { id: 3, brand: 'Benzimo' }//id akan menjadi kunci unik
  ];
  return (
    <>
      <h1>Merk mobil yang ada di garasi</h1>
      <ul>
        {kunci.map(kunc => (<KeyMobil key={kunc.id} brand={kunc.brand} />
        //setiap id menjadi kunci dari tiap brand yang terpasang
        ))}
      </ul>
    </>
  );
}

export { Mobil, Garage, KeyMobil, KeyGarage };
