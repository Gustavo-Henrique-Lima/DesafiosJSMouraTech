function email(array)
{
    let texto="";
    array.forEach(aluno => {
        texto+=aluno.email+";";
    });
    return texto;
}