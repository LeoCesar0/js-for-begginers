# 🔀 Aula 6: Switch-Case

## 📖 O que você vai aprender

Nesta aula, você aprenderá como usar switch-case para múltiplas condições, uma habilidade essencial para:

- Substituir if-else com muitas condições
- Criar menus e sistemas de navegação
- Implementar máquinas de estado
- Organizar código com múltiplas opções

## 🧠 Conceito

O `switch-case` é uma estrutura condicional que compara uma variável com múltiplos valores possíveis. É mais limpo que vários `if-else if` quando você tem muitas opções para a mesma variável.

### Sintaxe

```javascript
switch (variavel) {
  case valor1:
    // código para valor1
    break;
  case valor2:
    // código para valor2
    break;
  default:
    // código se nenhum case for atendido
    break;
}
```

### Características Importantes

- `break` é necessário para evitar "fall-through"
- `default` é opcional mas recomendado
- Compara com `===` (igualdade estrita)
- Pode agrupar cases para o mesmo resultado

### Quando Usar

- Múltiplas condições para a mesma variável
- Valores específicos e conhecidos
- Substituir if-else longos e repetitivos
