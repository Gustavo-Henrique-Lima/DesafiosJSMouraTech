function sexo(array)
{
    const total=array.length;
    let masculino=0;
    let feminino=0;
    array.forEach(aluno => 
    {
        if(aluno.sexo==="Masculino")
        {
            masculino++;
        }
        else
        {
            feminino++;
        }
    });
    return [total,masculino,feminino];
}