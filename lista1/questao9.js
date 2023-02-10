function media_ponderada(nota1,nota2)
{
    const media=((nota1*4)+(nota2*6))/10;
    if(media>90)    
    {
        return "A";
    }
    else if(media<90 && media>=75)
    {
        return "B";
    }
    else if(media<75 && media>=60)
    {
        return "C";
    }
    else if(media<60 && media>=40)
    {
        return "D";
    }
    else
    {
        return "E";
    }
}