const peso = 63;
const altura = 1.66;

const mediaImc = peso / Math.pow(altura, 2);
        console.log(mediaImc.toFixed(2));

if        (mediaImc < 18.5){

            console.log('Voce esta a baixo do peso');

}else if  (mediaImc >= 18.5 && mediaImc < 25){

            console.log('Voce esta no peso normal');

}else if  (mediaImc >= 25 && mediaImc < 30){

            console.log('Voce esta acima do peso');

}else if  (mediaImc >= 30 && mediaImc < 40){

            console.log('Voce esta obeso');

}else{

            console.log('Voce esta num nivel alto de obesidade');

}