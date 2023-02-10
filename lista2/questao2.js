function tabuada(num)
{
    let texto="";
    for(let i=0;i<=10;i++)
    {
        if(i===10)
        {
            texto+=num+" x "+i+" = "+num*i;
        }
        else
        {
            texto+=num+" x "+i+" = "+num*i+", ";
        }
    }
    return texto;
}

console.log(tabuada(5));