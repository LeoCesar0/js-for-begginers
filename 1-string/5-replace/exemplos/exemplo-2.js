console.log("=== REMOVER CARACTERES ===\n");

// Usando regex para remover caracteres não numéricos
// A regex /\D/g significa:
// \D - qualquer caractere que NÃO seja um dígito
// /g - flag global para substituir todas as ocorrências
const numeroDigitado = "(88) 99999-9999";
const numeroCorrigido = numeroDigitado.replace(/\D/g, "");

console.log(`Original: ${numeroDigitado}`);
console.log(`Corrigida: ${numeroCorrigido}`);
