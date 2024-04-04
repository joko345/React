import React, { useState } from 'react';

function MultipleForm() {
    // State untuk menyimpan nilai input
    const [inputs, setInputs] = useState({ username: '', age: '' });

    // Fungsi untuk menangani perubahan nilai input
    const handleChange = (event) => {
        // Mendapatkan nama dan nilai dari input yang berubah
        const { name, value } = event.target;
        // Mengupdate state inputs dengan nilai baru menggunakan spread operator
        setInputs({ ...inputs, [name]: value });
    };

    // Fungsi untuk menangani pengiriman formulir
    const handleSubmit = (event) => {
        event.preventDefault(); // Mencegah perilaku default pengiriman formulir
        console.log(inputs); // Menampilkan nilai inputs ke dalam console
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Masukkan nama Anda:
                {/* Input untuk nama */}
                <input
                    type="text"
                    name="username"
                    value={inputs.username}
                    onChange={handleChange} // Memanggil fungsi handleChange saat nilai input berubah
                />
            </label>
            <label>Masukkan usia:</label>
            {/* Input untuk usia */}
            <input
                type="number"
                name="age"
                value={inputs.age}
                onChange={handleChange} // Memanggil fungsi handleChange saat nilai input berubah
            />
            <input type="submit" />
        </form>
    );
}

export default MultipleForm;
