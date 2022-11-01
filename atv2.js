const precoEtanol = 3.37;
const precoGasolina = 5.90;
const kmPorLitros = 15;
const distanciaKm = 200;
const tipoCombustivel = 'Etanol';


const litrosConsumidos = distanciaKm / kmPorLitros;

if (tipoCombustivel === 'Etanol') {

    const valorGasto = litrosConsumidos * precoEtanol;

    console.log(valorGasto.toFixed(2));

} else {

const valorGasto = litrosConsumidos * precoGasolina;

console.log(valorGasto.toFixed(2));
}





























/*const numero = 28;

const numeroPar = (numero % 2) === 0 ;

if(numero === 0){

console.log('Este número é inválido! Por favor, tente novamente');

}
else if (numeroPar ){
        console.log('Este número é par. Programa finalizado com sucesso!  Parabéns!');
}
else{
    console.log('Este número é impar. Por favor, tente novamente.');
}

Teste numero par ou impar
*/









