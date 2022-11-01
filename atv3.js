const nota1 = 7;
const nota2 = 5;
const nota3 = 7;
const media = (nota1 + nota2 + nota3) / 3;

console.log(media.toFixed(1));

if(media < 5 ){
console.log('Sinto muito, voce esta reprovado!' );
}

else if(media >= 5 && media <= 7 ){
console.log('Sinto muito, voce esta na recuperação!' );
}

else{
    console.log('Parabens! Voce foi aprovado!' )
}
