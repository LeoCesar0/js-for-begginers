# ⚖️ Aula 3: Comparações Avançadas

## 📖 O que você vai aprender

Nesta aula, você aprenderá técnicas avançadas de comparação, uma habilidade essencial para:

- Validar diferentes tipos de dados
- Evitar erros de conversão de tipos
- Criar condições mais precisas
- Implementar validações robustas

## 🧠 Conceito

Além dos operadores básicos, JavaScript oferece formas mais precisas de comparar valores, especialmente importante quando trabalhamos com diferentes tipos de dados (strings, números, booleanos).

### Operadores de Comparação

```javascript
===  // Igual estrito (valor E tipo)
!==  // Diferente estrito (valor OU tipo)
==   // Igual com conversão (apenas valor)
!=   // Diferente com conversão (apenas valor)
```

### Comparações com Strings

```javascript
string.includes(substring); // Contém substring
string.startsWith(prefix); // Começa com
string.endsWith(suffix); // Termina com
string.toLowerCase() === "..."; // Comparação case-insensitive
```

### Verificações de Tipo

```javascript
typeof variavel === "string"; // É string?
typeof variavel === "number"; // É número?
Number.isNaN(valor); // É NaN?
```
