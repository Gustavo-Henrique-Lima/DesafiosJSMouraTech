function ordenar_nascimento(array)
{
    return array.sort(function(a, b) {
        if(parseInt(a.nascimento.substring(6)) < parseInt(b.nascimento.substring(6))) 
        {
          return -1;
        } else {
          return true;
        };
    });
}