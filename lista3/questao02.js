function filtro_naturalidade(cidade,array)
{
    const filtrado=array.filter((aluno)=>{
        return aluno.naturalidade===cidade;
    })
    return filtrado;
}