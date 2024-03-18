import logo from './logo.svg';
import './App.css';
import Nama from './Nama';
import Badan from './Badan';
import Chat from './nestedProps'; // Mengimpor Chat dari nestedProps.js

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Nama/>
        <Badan/>
        <Chat/>
        <chat />
      </header>
    </div>
  );
}
//Import nama adalah komponenen react dan harus kapital awal huruf file
export default App;
