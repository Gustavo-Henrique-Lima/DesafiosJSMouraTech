function pa(num1,num2,num3)
{
    let texto=String(num1)+", ";
    let i=1;
    let valor=num1;
    while(i<num3)
    {
        valor+=num2;
        if(i===num3-1)
        {
            texto+=String(valor)+"...";
        }
        else
        {
            texto+=String(valor)+", ";
        }
        i++;
    }
    return texto;
}
console.log(pa(100, -2, 4));