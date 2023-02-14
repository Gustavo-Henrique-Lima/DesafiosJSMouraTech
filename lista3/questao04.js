function aniversariantes(dia,array)
{
    const alun=[];
    let meses="";
    if(dia<10)
    {
      meses+="0"+dia.toString();
    }
    else
    {
      meses+=dia.toString();
    }
    array.forEach(aluno => 
    {
      let mes=aluno.nascimento[3]+aluno.nascimento[4].toString();
      if(meses===mes)
      {
        let student=new Object();
        student.data=aluno.nascimento.substr(0,5);
        student.nome=aluno.nome;
        alun.push(student);
      }    
    });
    return alun.sort(function(a, b) 
    {
        if(a.data < b.data) {
          return -1;
        } else {
          return true;
        };
    });
}