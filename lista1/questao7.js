function imc(altura,peso)
{
    const imc=peso/(altura*altura);
    if(imc<18.5)
    {
        return "Baixo peso";
    }
    else if(imc>=18.5 && imc<=24.9)
    {
        return "Peso normal";
    }
    else if(imc>=25 && imc<=29.9)
    {
        return "Excesso de peso";
    }
    else if(imc>=30 && imc<35)
    {
        return "Obesidade";
    }
    else
    {
        return "Obesidade extrema";
    }
}

console.log(imc(1.79,52))