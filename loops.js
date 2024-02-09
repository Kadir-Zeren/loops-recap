for (let i = 0; i < 100; i++) {
  console.log(`${i}-2024`);
}

const n = prompt(`enter your number`);

let sum = 0;
for (let i = 1; i <= n; i++) {
  sum = sum + i;
  console.log(sum);
}
console.log(`sum: ${sum}`);

const number = prompt(`how many numbers:?`);

for (let sayac = 1; sayac <= number; sayac++) {
  const rasgeleSayi = Math.random();
  console.log(rasgeleSayi);
}
