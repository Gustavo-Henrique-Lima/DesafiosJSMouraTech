function semestres_entrada(array)
{
    const matriculas=[];
    array.forEach(aluno => 
    {
        matriculas.push(aluno.matricula.substring(0,4)+"."+aluno.matricula.substring(4,5));
    });
    const semestresDistintos=[...new Set(matriculas)];
    const final=[];
    let n = array.length;
    let q = semestresDistintos.length;
    let cont = 0;
    let results = [];
    for (let i=0; i<q; i++)
    {
        for (let j=0; j < n; j++)
        {
            if (semestresDistintos[i] ==  array[j].matricula.substring(0,4)+"."+array[j].matricula.substring(4,5)) 
            {
                cont++;
            }
        }
        results.push(cont);
        cont = 0;
    }
    for (let index = 0; index <semestresDistintos.length; index++) 
    {
        let res=new Object();
        res.semestre=semestresDistintos[index];
        res.quantidade=results[index];
        res.percentual=((results[index]/array.length)*100).toFixed(2)+" %";
        final.push(res);
    }
    return final.sort(function(a, b) 
    {
      if(parseInt(a.semestre.substring(0,4)) < parseInt(b.semestre.substring(0,4))) {
        return -1;
      } else {
        return true;
      };
    });
}