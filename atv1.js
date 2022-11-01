const precoCombustivel = 6.90;
const kmPorLitros = 15; 
const distanciaEmKm = 200;


const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;


console.log(valorGasto.toFixed(2)); /* .toFixed arredonda o numero, o valor entre parenteses é sobre quantas casas apos a virgula me interessam. */