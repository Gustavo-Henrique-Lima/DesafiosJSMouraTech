function ipv4_bits(ip)
{
    let texto="";
    let valores = [128,64,32,16,8,4,2,1];
    array = ip.split('.');
    for(let i=0;i<array.length;i++)
    {
        for(let j=0;j<valores.length; j++)
        {
            if(array[i]>=valores[j])
            {
                texto+="1";
                array[i] -= valores[j];
            }else
            {
                texto+="0";
            }
        }
    }
    return texto;
}