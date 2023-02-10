function agrupamento(array)
{
    let intervalo1=0;
    let intervalo2=0;
    let intervalo3=0;
    let intervalo4=0;
    for(let i=0;i<array.length;i++)
    {
        if(array[i]>= 0 && array[i] <= 25)
        {
            intervalo1++;
        }
        else if(array[i]> 25 && array[i] <= 50)
        {
            intervalo2++;
        }
        else if(array[i] > 50 && array[i] <= 75)
        {
            intervalo3++;
        }
        else if(array[i]> 75 && array[i] <= 100)
        {
            intervalo4++;
        }
    }
    return [intervalo1,intervalo2,intervalo3,intervalo4];
}