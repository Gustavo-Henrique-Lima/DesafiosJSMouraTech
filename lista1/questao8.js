function preco_final(preco,tipoPagamento)
{
    let valor=0;
    switch(tipoPagamento)
    {
    case 1:
        valor=(preco*(1-0.15)).toLocaleString('pt-br', {minimumFractionDigits: 2});
        return "R$ "+valor;
        break;
    case 2:
        valor=(preco*(1-0.10)).toLocaleString('pt-br', {minimumFractionDigits: 2});
        return "R$ "+valor;
        break;
    case 3:
        valor=(preco*(1-0.05)).toLocaleString('pt-br', {minimumFractionDigits: 2});
        return "R$ "+valor;
        break;
    case 4:
        valor=(preco*(1-0)).toLocaleString('pt-br', {minimumFractionDigits: 2});
        return "R$ "+valor;
        break;
    }
}