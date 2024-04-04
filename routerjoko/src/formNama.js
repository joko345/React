import { useState } from 'react';

function FormName() {
  const [name, setName] = useState(""); // Membuat state name dan fungsi setter setName untuk menyimpan dan mengubah nilai

  // Fungsi untuk menangani pengiriman formulir
  const handleSubmit = (event) => {
    event.preventDefault(); // Mencegah pengiriman formulir default
    alert(`Nama yang dimasukkan adalah: ${name}`); // Menampilkan alert dengan nama yang dimasukkan
    console.log(name); // Menampilkan nilai name ke dalam console
  };

  // Fungsi untuk menangani perubahan pada input
  const handleChange = (event) => {
    setName(event.target.value); // Mengubah nilai name saat input berubah
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Masukkan nama Anda:
        <input
          type="text"
          value={name}
          onChange={handleChange} // Menangani perubahan pada input
        />
      </label>
      <input type="submit" />
    </form>
  );
}


export default FormName;
