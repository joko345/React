import logo from './logo.svg';
import './App.css';
import Nama from './Nama';
import Badan from './Badan';
import Chat from './nestedProps';// Mengimpor Chat dari nestedProps.js
import Product from './propsFunction'; 
import { Football, Football1 } from './foot';//import dua komponen dari satu file js
import NewGoal from './MadeGoal';
const phoneData = [//Harus dua kalimat agar bisa dipanggil sebagai "phone"
  { name: "Oppo", price: "850000", discount: "20" },
  { name: "Xiaomi", price: "12500000", discount: "20" },
  { name: "Advan", price: "10500000", discount: "20" }
//perulangan
];

function Compon() {//ekspresi javascript pada jsx
  return (
    <div>
      <button>{1 + 2}</button><br/>
      <button>{Date.now()}</button><br/>
    </div>
  );
}

function App() {
  return (
    <div className="App">{/* karena product di className app maka akan ditampilkan di tengah */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Nama />
       
        <Badan />
        <Chat />
        <Compon />
        <Football />
        <Football1 />
        <NewGoal />
        {phoneData.map((phone, id) => (//map menentukan kata yang akan digunakan untuk pemanggilan
          <Product //id sebagai key/kunci bagi setiap element dalam array phoneData
            key={id}
            name={phone.name}
            price={phone.price}
            discount={phone.discount}>
          </Product>
         
          // bisa tutup tag product dengan hanya />
        ))}
      </header>
    </div>
  );
}

//Import nama adalah komponenen react dan harus kapital awal huruf file
export default App;
//produk tanpa perulangan bisa dipanggil seperti berikut
//<Product name="Xioami" price="125000000" discount="20"/>
//<Product name="Advan" price="105000000" discount="20"/>