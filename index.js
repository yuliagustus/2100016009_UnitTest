// ! Dont change this code
const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// @ Try to check and change the filterOddNumber function
// Ex: given param = [1, 2, 3, 4, 5], then return must [2, 4] not "1,3,5"
const filterOddNumber = (arr) => {
  return arr.filter((num) => num % 2 === 0);
};
/**
 * Write your description here, why the function is not working?
 * Sebelumnya, fungsi filterOddNumber mengembalikan hasil dalam bentuk string menggunakan toString(). Seharusnya, kita ingin hasilnya berupa array yang hanya berisi bilangan ganjil dari array input.Fungsi filterOddNumber tidak berfungsi dengan benar karena menggunakan operator modulus yang salah. Seharusnya menggunakan === 0 untuk memeriksa apakah angka tersebut genap. 
 */

// ! Dont change this code
const epochDateToUTC = (epochDate) => {
  const d = new Date(0);
  d.setUTCSeconds(epochDate);
  return d.toUTCString();
};

// ! Dont change this code
module.exports = {
  capitalize,
  filterOddNumber,
  epochDateToUTC,
};
