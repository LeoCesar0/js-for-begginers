# 🔍 Aula 8: Validações Integradas

## 📖 O que você vai aprender

Nesta aula, você aprenderá como combinar if-else com conhecimentos de strings e numbers para criar validações robustas, uma habilidade essencial para:

- Validar formulários e entrada de dados
- Integrar conhecimentos de módulos anteriores
- Criar sistemas de validação completos
- Implementar feedback detalhado para usuários

## 🧠 Conceito

As validações integradas combinam técnicas de manipulação de strings, operações numéricas e estruturas condicionais para verificar se os dados estão corretos e seguros.

### Integração com Módulos Anteriores

```javascript
// Strings: limpar e validar formato
const email = entrada.trim().toLowerCase();
if (email.includes("@") && email.length > 5) {
  // válido
}

// Numbers: converter e validar faixas
const idade = Number(entradaIdade);
if (!Number.isNaN(idade) && idade >= 18 && idade <= 120) {
  // válido
}

// Combinação: template literals com condições
const resultado = `Status: ${valido ? "Aprovado" : "Rejeitado"}`;
```

### Padrões de Validação

- **Sanitização**: Limpar dados antes de validar
- **Verificação de Tipo**: Garantir que é string/number
- **Validação de Formato**: Estrutura correta
- **Validação de Regra de Negócio**: Lógica específica
- **Feedback Detalhado**: Mensagens claras de erro
