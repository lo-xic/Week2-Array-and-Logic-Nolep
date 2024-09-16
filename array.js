// let array = [1,2,3,4,5,6];

// console.log(array);

// // pada array kalian bisa mnampung banyak data dan tipe data yang berbeda

// let array1 = [1,"abc", [1,2,3], null, false];

// cuma ini contoh yang ga mungkin ada, namun array bisa menampung kaya di atas

// array itu terbagi ada 2 jenis
// array 1 dimensi dan array 2 dimensi

// let dimensi1 = [1,2,3,4,5,6];
// let dimensi2 = [[1,2,3],[4,5,6]];

// // cara mengakses array
// // gunakan index

// console.log(dimensi1[2]); //akses index di array dimensi 1
// console.log(dimensi1[4]); //akses index di array dimensi 1

// console.log(dimensi2[0]); //[1,2,3]
// console.log(dimensi2[1]); //[4,5,6]
// console.log(dimensi2[2]); //undifined

// // untuk mengakses index array di array pakai index lagi
// console.log(dimensi2[0][0]); //1
// console.log(dimensi2[1][2]); //6

// // cara untuk looping pada array 2 dimensi

// console.log('looping dimensi ada di bawah');
// for (let i = 0; i < dimensi2.length; i++){
//     for (let j = 0; j < dimensi2[i].length; j++){
//         console.log(dimensi2[i][j]);
//     }
// }

// normalnya array dimensi 2 sering digunakan pada kasus tabel
/*
[
    ["LoXic", "Indonesia", "x tahun"]
    ["Ire Secrvyiv", "Inggris", "19 tahun"]
]
*/
let orang = [
    ["LoXic", "Indonesia", "20 tahun"],
    ["Ire Secrvyiv", "Inggris", "19 tahun"]
];

console.log('looping dimensi ada di bawah');
console.log("");

for (let i = 0; i < orang.length; i++){
    for (let j = 0; j < orang[i].length; j++){
        if (j === 0){
            console.log(`nama: ${orang[i][j]}`);
        } else if (j === 1){
            console.log(`lokasi: ${orang[i][j]}`); 
        } else {
            console.log(`umur: ${orang[i][j]}`);
        }
    }
    console.log("");
}
