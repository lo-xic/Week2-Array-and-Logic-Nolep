/*
## Soal 1
```js

Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen.
Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:

let input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]


output yang diharapkan

Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar

Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak

Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun
*/

function dataHandling(input){ //deklarasi function
    for (i = 0; i < input.length; i++){ //looping pertama untuk mengakses index array dimensi 1
        let TTL = ""; //deklarasi variabel TTL untuk menyimpan nilai pada loopingan dalam agar tidak terhapus dan bisa dipanggil di loopingan dalam
        for (j = 0; j < input[i].length; j++){ //looping kedua untuk mengakses index array dimensi 2
            if (j === 0){ //pengkondisian 1 untuk mengeluarkan output yang sesuai dengan data di array
                console.log(`Nomor ID: ${input[i][j]}`);
            } else if (j === 1){ //pengkondisian 2 untuk mengeluarkan output yang sesuai dengan data di array
                console.log(`Nama Lengkap: ${input[i][j]}`);
            } else if (j === 2){ //pengkondisian 3 untuk mengambil nilai pada looping dan dimasukan ke variabel TTL yang ada di luar looping agar bisa dipanggil saat pengkondisian 4
                TTL = input[i][j]; 
            } else if (j === 3){ //pengkondisian 4 untuk mengeluarkan output dengan mengambil nilai TTL dan nilai yang sesuai dengan data di array
                console.log(`TTL: ${TTL + " " + input[i][j]}`);
            } else { //pengkondisian 5 untuk mengeluarkan output yang selain kondisi sebelumnya, otomatis mengambil nilai data terakhir
                console.log(`Hobi: ${input[i][j]}`);
            }
        }
        console.log(""); //melakukan output spasi kosong si baris setiap looping dalam yang berisi 5 kondisi telah tereksekusi
    }
    return "Selesai"; //mengembalikan nilai ke function agar operasi function selesai
}

let input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

console.log(dataHandling(input)); //memanggil function dengan variabel input yang sudah dideklarasikan