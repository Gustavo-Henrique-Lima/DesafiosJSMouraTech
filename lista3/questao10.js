function removerAcento(nome)
{       
    nome = nome.toLowerCase();                                                         
    nome = nome.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
    nome = nome.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
    nome = nome.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
    nome = nome.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
    nome = nome.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
    nome = nome.replace(new RegExp('[Ç]','gi'), 'c');
    return nome;                 
}


function pesquisar_nome(nome,array)
{
    let newNome = [];
    for(let i = 0; i < array.length; i++)
    {
        let temp = removerAcento(array[i].nome);
        if(temp.indexOf(nome) !== -1)
        {
            newNome.push(array[i]);
        }
    }
    return newNome;
}