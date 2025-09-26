// 🧮 EXEMPLO 1: Math Object
// =========================

console.log("=== MÉTODOS DE ARREDONDAMENTO ===\n");

const numero = 4.7;
const numero2 = 4.3;
const numero3 = -4.7;

console.log(`Número: ${numero}`);
console.log(`Math.round(${numero}) = ${Math.round(numero)}`); // 5
console.log(`Math.ceil(${numero}) = ${Math.ceil(numero)}`); // 5
console.log(`Math.floor(${numero}) = ${Math.floor(numero)}`); // 4

console.log(`\nNúmero: ${numero2}`);
console.log(`Math.round(${numero2}) = ${Math.round(numero2)}`); // 4
console.log(`Math.ceil(${numero2}) = ${Math.ceil(numero2)}`); // 5
console.log(`Math.floor(${numero2}) = ${Math.floor(numero2)}`); // 4

console.log("\n=== MÁXIMO E MÍNIMO ===");
const notas = [8.5, 7.2, 9.1, 6.8, 8.9];

console.log(`Notas: ${notas.join(", ")}`);
console.log(`Maior nota: ${Math.max(...notas)}`);
console.log(`Menor nota: ${Math.min(...notas)}`);

console.log("\n=== NÚMEROS ALEATÓRIOS ===");
console.log(`Math.random(): ${Math.random()}`);
console.log(`Número entre 1 e 10: ${Math.floor(Math.random() * 10) + 1}`);
console.log(`Número entre 1 e 100: ${Math.floor(Math.random() * 100) + 1}`);

console.log("\n=== CONSTANTES MATEMÁTICAS ===");
console.log(`PI: ${Math.PI}`);
console.log(`E: ${Math.E}`);

// Exemplo prático: área do círculo
const raio = 5;
const area = Math.PI * raio ** 2;
console.log(`\nÁrea do círculo (raio ${raio}): ${area.toFixed(2)}`);
