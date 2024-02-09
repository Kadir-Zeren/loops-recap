// for (let i = 0; i < 100; i++) {
//   console.log(`${i}-2024`);
// }

// const n = prompt(`enter your number`);

// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum = sum + i;
//   console.log(sum);
// }
// console.log(`sum: ${sum}`);

// const number = prompt(`how many numbers:?`);

// for (let sayac = 1; sayac <= number; sayac++) {
//   const rasgeleSayi = Math.round(Math.random() * 100);
//   console.log(`${sayac}. sayiniz : ${rasgeleSayi} `);
// }
// let i = 1;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// console.log(`bye`);

// let not = prompt(`lutfen 0-100 arasinda bir not giriniz:`);

// if (not < 0 || not > 100) {
//   console.log(`not 0'dan kucuk veya 100'den kucuk olamaz`);
// }

// while (not < 0 || not > 100) {
//   console.log(`not 0'dan kucuk veya 100'den kucuk olamaz`);
//   not = prompt(`lutfen 0-100 arainda bir not giriniz`);
// }

// console.log(`Noutunu: ${not}`);
let not;

do {
  not = prompt(`lutfen 0-100 arasinda bir not giriniz:`);
} while (not < 0 || not > 100);

console.log(`Notunuz: ${not}`);
