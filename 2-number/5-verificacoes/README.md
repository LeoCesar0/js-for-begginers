# ✅ Aula 5: Verificações

## 📖 O que você vai aprender

Nesta aula, você aprenderá como verificar se valores são números válidos, uma habilidade essencial para:

- Validar entrada de dados do usuário
- Evitar erros em cálculos
- Tratar dados vindos de formulários
- Garantir a integridade de operações matemáticas

## 🧠 Conceito

JavaScript oferece funções para verificar se um valor é um número válido e que tipo de número ele é.

### Funções de Verificação

```javascript
isNaN(valor); // Verifica se NÃO é um número (Not a Number)
Number.isNaN(valor); // Versão mais precisa de isNaN
Number.isInteger(valor); // Verifica se é um número inteiro
Number.isFinite(valor); // Verifica se é um número finito
```

### Diferenças Importantes

- `isNaN()` tenta converter o valor antes de testar
- `Number.isNaN()` é mais rigoroso e não faz conversão
- `Number.isInteger()` retorna false para decimais e strings
