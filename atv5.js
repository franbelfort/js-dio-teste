const precoEtiqueta = 100;
const formaPagamento = 4; /*os numeros da const formaPagamento estao de acordo com a tabela de atividades*/

if(formaPagamento === 1){
    console.log(precoEtiqueta - (precoEtiqueta * 0.1)
);
}
else if(formaPagamento === 2){
    
    console.log(precoEtiqueta - (precoEtiqueta * 0.15)
    );  
}
else if(formaPagamento === 3){
    
    console.log(precoEtiqueta);
}
else{
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}