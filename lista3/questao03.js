function email(array)
{
    let texto="";
    array.forEach(aluno => {
        texto+=aluno.email+";";
    });
    const textoFiltrado=texto.substring(0,texto.length-1);
    return textoFiltrado;
}