function calcularFatorial(a:number){
let resultado = 1;
for(let i =1; i <=a; i++){
    resultado *=i;
    }
return resultado;

}
export{calcularFatorial}