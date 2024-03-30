import React from 'react';
//logical operator &&
function Garasi(props) {
    const cars = props.cars;
{/* props mengambil elemen cars (bmw,ford,limo) dan menyimpannya di const cars agar bisa digunakan untuk kode didalam sini */}
    return (
        <>{/* mirip seperti <div> untuk membungkus elemen */}
            <h1>Garasi</h1>
{/* jika jumlah cars lebih dari 0, kode setelah && di eksekusi */}            
            {cars.length > 0 && 
                <h2>You have {cars.length} cars in garage</h2>
            }
        </>
    );
}

const cars = ['BMW', 'FORD', 'LIMO'];

// Memanggil dan menampilkan komponen Garasi dengan properti cars
const GarasiComponent = () => <Garasi cars={cars} />;
//membuat komponen baru dan menyimpan hasil kompile


export default GarasiComponent;
