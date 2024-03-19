// 1) Числа от 2 до 12
console.log("Чётные числа от 2 до 12:")
for (let i = 2; i <= 12; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 2) Числа от 10 до 1
console.log("Числа от 10 до 1 в обратном порядке")
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// 3.1) Четные числа от 2 до 12 с while
console.log("Четные числа от 2 до 12 (используя цикл while):");
let j = 2;
while (j <= 12) {
  if (j % 2 === 0) {
    console.log(j);
  }
  j++;
}

// 3.2) Числа от 10 до 1 в обратном порядке с while
console.log("Числа от 10 до 1 в обратном порядке (используя цикл while):");
let k = 10;
while (k >= 1) {
  console.log(k);
  k--;
}