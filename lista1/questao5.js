function ordenar_3_numeros(num1,num2,num3)
{
    let array=[num1,num2,num3].sort(sortfunction);
    return array.reverse();
}
function sortfunction(a, b)
{
    return (a - b) //faz com que o array seja ordenado numericamente e de ordem crescente.
}
console.log(ordenar_3_numeros(12,7,1));