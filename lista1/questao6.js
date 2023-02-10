function peso_ideal(altura,sexo)
{
    const sex=sexo.toLowerCase();
    console.log(sex);
    if(sex==="f")
    {
        return (62.1*altura)-44.7;
    }
    else
    {
        return (72.7*altura)-58;
    }
}

console.log(peso_ideal(1.80,"f"));