function fatorial(num)
{
    let texto=num+"! = ";
    let soma=1;
    for(let i=num;i>0;i--)
    {
        soma*=i;
        if(i===1)
        {
            texto+=i+" = "+soma; 
        }
        else
        {
            texto+=i+" X ";
        }
    }
    return texto;
}