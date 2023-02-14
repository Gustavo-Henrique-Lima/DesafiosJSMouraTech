function mudar_email(array)
{
    const newAlunos=[];
    array.forEach(aluno => 
    {
      let email=aluno.email;
      let newEmail=email.replace("discente.ifpe.edu.br","gmail.com");
      aluno.email=newEmail;
      newAlunos.push(aluno);
    });
    return newAlunos;
}
