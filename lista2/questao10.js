function febre(array)
{
    let dados=[];
    for(let i=0;i<array.length;i++)
    {
        if(array[i]<35)
        {
            dados.push("Hipotermia");
        }
        else if(array[i]<=37.7)
        {
            dados.push("Normal");
        }
        else if(array[i]<=39.6)
        {
            dados.push("Febre");
        }
        else if(array[i]<=41)
        {
            dados.push("Febre Alta");
        }
        else
        {
            dados.push("Hipertermia");
        }
    }
    return dados;
}