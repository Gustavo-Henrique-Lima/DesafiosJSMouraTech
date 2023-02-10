function fibonacci(num)
{
    let array=[0,1];
    let texto="0, 1, ";
    if(num===1)
    {
        return "0..."
    }
    else
    {
        for(let i=2;i<num;i++)
        {
            let soma=array[array.length-1]+array[array.length-2];
            array.push(soma);
            if(i===num-1)
            {
                texto+=String(soma)+"..."
            }
            else
            {
                texto+=String(soma)+", "
            }
        }
        return texto;
    }
}

console.log(fibonacci(1))