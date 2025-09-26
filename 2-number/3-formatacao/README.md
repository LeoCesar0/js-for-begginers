# 🎨 Aula 3: Métodos de Formatação

## 📖 O que você vai aprender

Nesta aula, você aprenderá como formatar números para exibição, uma habilidade essencial para:

- Controlar casas decimais em preços
- Formatar dados para relatórios
- Melhorar a apresentação de números
- Padronizar exibição de valores

## 🧠 Conceito

JavaScript oferece métodos para controlar como os números são exibidos, especialmente úteis para valores monetários e precisão científica.

### Sintaxe

```javascript
numero.toFixed(casasDecimais); // Fixa número de casas decimais
numero.toPrecision(digitos); // Controla total de dígitos significativos
numero.toString(); // Converte número para string
```

### Casos de Uso

- `toFixed()` - Ideal para valores monetários e medidas
- `toPrecision()` - Usado em cálculos científicos
- `toString()` - Para conversões simples
