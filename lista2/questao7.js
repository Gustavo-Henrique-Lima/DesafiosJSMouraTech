function primo(num1)
{
    let qtd=0;
    for(let i=num1;i>0;i--)
    {
        if(num1%i===0)
        {
            qtd++;
        }
    }
    if(num1===1)
    {
        return false;
    }
    else
    {
        if(qtd>2)
        {
            return false;
        }
        else
        {
            return true;
        }
    }
}

console.log(primo(1))