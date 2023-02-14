function media_idade(array)
{
    const hoje = new Date();
    const tamanho=array.length;
    const ano = hoje.getFullYear();
    let soma=0;
    array.forEach(aluno => 
    {
        let [DD, MM, YYYY] = aluno.nascimento.split('/');
        let birthDay=new Date(YYYY,MM,DD);
        if(hoje>=birthDay)
        {
            let difference= Math.floor(hoje-birthDay);
            let days = difference/(1000 * 3600 * 24);
            let dias=days/365;
            soma+=dias;
        }
        else
        {
            soma+=parseInt(parseInt(ano)-parseInt(YYYY));
        }
    });
    const media=Math.floor(soma/tamanho);
    return parseInt(media);
}