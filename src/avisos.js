function getData() {
    return data = {
        1: {
            title: "links desta página não têm texto âncora",
            about: "Este problema ocorre se um link (seja externo ou interno) em seu site tiver uma âncora vazia ou pura ('naked anchor', ou seja, uma âncora que usa uma URL bruta), ou se o texto âncora tiver apenas símbolos. Embora uma âncora ausente não impeça que os usuários e rastreadores sigam um link, fica difícil entender o assunto da página para a qual o link aponta. Além disso, o Google leva em consideração o texto âncora ao indexar uma página. Portanto, uma âncora ausente representa uma oportunidade desperdiçada de otimizar o desempenho da página para a qual o link aponta nos resultados de pesquisa.",
            solve: "Use um texto âncora nos links onde for necessário. O texto do link precisa dar aos usuários e aos mecanismos de pesquisa pelo menos uma ideia básica do assunto da página-alvo. Além disso, use um texto curto porém descritivo.",
        },
        2: {
            title: "páginas possuem mais de um título h1",
            about: "Embora múltiplos títulos <h1> sejam permitidos no HTML5, ainda assim não recomendamos que você utilize mais de um título <h1> por página. A inclusão de múltiplos títulos <h1> pode confundir os usuários.",
            solve: "Use vários títulos <h2>-<h6> em vez do <h1>.",
        },
        3: {
            title: "subdomínios não suportam o HSTS",
            about: "O HSTS (HTTP Strict Transport Security) informa aos navegadores que eles podem se comunicar com servidores somente através de conexões HTTPS. Assim, para garantir que você não apresente conteúdo inseguro ao público, recomendamos que implemente o suporte a HSTS.",
            solve: "Use um servidor que suporte o HSTS.",
        },
        4: {
            title: "páginas têm apenas um link interno de entrada",
            about: "Ter poucos links internos de entrada significa poucas visitas, ou até mesmo nenhuma, e poucas chances de obter boas classificações nos resultados de pesquisa. É boa prática adicionar mais links internos de entrada a páginas com conteúdo útil. Desta forma, você pode ter a certeza de que usuários e mecanismos de pesquisa sempre a encontrarão.",
            solve: "Acrescente mais links internos de entrada a páginas com conteúdo importante.",
        },
        5: {
            title: "Robots.txt não encontrado",
            about: "O arquivo robots.txt é importante para o desempenho geral de SEO de um site. Ele ajuda os mecanismos de pesquisa a determinar qual conteúdo do site deve ser rastreado. Utilizar o arquivo robots.txt pode reduzir o tempo que os robôs dos mecanismos de pesquisa gastam rastreando e indexando o site.",
            solve: "Se você não deseja que determinado conteúdo do site seja rastreado, é recomendável criar o arquivo robots.txt.",
        },
        6: {
            title: "páginas bloquearam o rastreador Semrush",
            about: "A página nunca vai aparecer nos resultados de pesquisa se não puder ser acessada pelos mecanismos de pesquisa. Uma página pode ser bloqueada para rastreamento em um arquivo robots.txt ou com uma tag 'meta noindex'.",
            solve: "Garanta que as páginas com conteúdo útil não estejam bloqueadas para rastreamento por engano.",
        },
        7: {
            title: "URLs de páginas têm mais de 200 caracteres",
            about: "De acordo com o Google, URLs grandes não são favoráveis à SEO. URLs grandes demais intimidam os usuários e os desencorajam a clicar nelas ou compartilhá-las, prejudicando a taxa de cliques e a usabilidade da sua página.",
            solve: "Mantenha as URLs com um tamanho razoável.",
        },
        8: {
            title: "links externos de saída contêm atributos nofollow",
            about: "Um atributo nofollow é um elemento de uma tag <a> que determina que os rastreadores não devem seguir o link. Links nofollow não transmitem link juice ou textos âncora para as páginas referenciadas. O uso não intencional de atributos nofollow pode ter um impacto negativo no processo de rastreamento e nas suas classificações.",
            solve: "Lembre-se de não usar atributos nofollow por engano. Elimine-os de tags <a>, se necessário. ",
        },
        9: {
            title: "páginas com problemas de incompatibilidade de idiomas no hreflang",
            about: "Este problema ocorre se o valor especificado para um idioma em um atributo hreflang não corresponde ao idioma de sua página, que é determinado com base em uma análise semântica. Erros nos atributos hreflang podem confundir os mecanismos de pesquisa, e é provável que seus atributos hreflang sejam interpretados de forma incorreta. Portanto, vale a pena conferir se não há nenhum problema com os atributos hreflang.",
            solve: "Verifique todas as páginas nas quais esse problema foi identificado e corrija todos os atributos hreflang. Observe que nosso rastreador pode informar que sua página apresenta problema de “incompatibilidade de idiomas no hreflang” mesmo que o valor do hreflang mostre o idioma correto. Isso geralmente acontece se sua página for multilíngue ou tiver muito pouco conteúdo.",
        },
        10: {
            title: `páginas órfãs nos sitemaps`,
            about: `Uma página órfã é uma página para a qual não há nenhum link interno. Incluir páginas órfãs nos arquivos sitemap.xml é considerado uma prática ruim, pois essas páginas serão rastreadas pelos mecanismos de pesquisa. O rastreamento de páginas órfãs desatualizadas será um desperdício do seu crawl budget. Se uma página órfã no seu arquivo sitemap.xml tiver conteúdo importante, recomendamos que coloque um link interno para ela.`,
            solve: `Analise todas as páginas órfãs nos seus arquivos sitemap.xml e escolha uma das alternativas as seguir:
            - Se a página não for mais necessária, remova-a
            - Se a página possuir conteúdo importante e trouxer tráfego para o site, coloque um link para ela em outra página do seu site
            - Caso a página atenda a uma necessidade específica e não necessite de link interno para ela, deixe-a como está`,
        },
        11: {
            title: `páginas bloqueadas por X-Robots-Tag: cabeçalho HTTP com noindex`,
            about: `Recursos externos bloqueados são recursos (ex.: arquivos CSS, JavaScript, de imagem, etc.) que estão hospedados em um site externo e bloqueados para rastreamento por uma diretiva “Disallow” em um arquivo robots.txt externo. Ao não permitir esses arquivos, pode ser que os mecanismos de pesquisa não consigam acessá-los, impossibilitando a renderização e indexação corretas das suas páginas. Como consequência, isso pode levar a classificações mais baixas`,
            solve: `Se os recursos bloqueados que estão hospedados em um site externo tiverem grande impacto no seu site, entre em contato com o proprietário do site e peça-lhe que edite o arquivo robots.txt dele.
            Se os recursos bloqueados não forem necessários para o seu site, basta ignorá-los.`,
        },
        12: {
            title: `problemas com recursos externos bloqueados no robots.txt`,
            about: `Recursos externos bloqueados são recursos (ex.: arquivos CSS, JavaScript, de imagem, etc.) que estão hospedados em um site externo e bloqueados para rastreamento por uma diretiva “Disallow” em um arquivo robots.txt externo. Ao não permitir esses arquivos, pode ser que os mecanismos de pesquisa não consigam acessá-los, impossibilitando a renderização e indexação corretas das suas páginas. Como consequência, isso pode levar a classificações mais baixas.`,
            solve: `Se os recursos bloqueados que estão hospedados em um site externo tiverem grande impacto no seu site, entre em contato com o proprietário do site e peça-lhe que edite o arquivo robots.txt dele.
            Se os recursos bloqueados não forem necessários para o seu site, basta ignorá-los.`,
        },
        14: {
            title: `problemas com arquivos JavaScript e CSS externos quebrados`,
            about: `Caso seu site use arquivos JavaScript ou CSS hospedados em um site externo, é importante garantir que eles funcionem corretamente. Qualquer script que tenha deixado de funcionar no seu site coloca em risco suas classificações, já que os mecanismos de pesquisa não conseguirão renderizar e indexar corretamente suas páginas. Além disso, arquivos JavaScript e CSS quebrados podem causar erros no site, o que certamente prejudica a experiência do usuário.`,
            solve: `Entre em contato com o proprietário do site e peça-lhe que corrija os arquivos quebrados.`,
        },
        15: {
            title: `páginas requerem mais de 3 cliques para que sejam alcançadas`,
            about: `A profundidade de rastreamento de uma página é o número de cliques necessários para que usuários e rastreadores de mecanismos de pesquisa cheguem a ela a partir da página inicial correspondente. De uma perspectiva de SEO, uma profundidade de rastreamento excessiva representa grande ameaça aos seus esforços de otimização, já que há menor probabilidade de tanto os rastreadores quanto os usuários chegarem a páginas muito profundas.
            Por esta razão, páginas que apresentam conteúdo importante devem estar a no máximo 3 cliques da sua página inicial.`,
            solve: `Assegure-se de que páginas com conteúdo importante possam ser alcançadas com poucos cliques.
            Se alguma delas estiver muito distante em seu site, avalie a possibilidade de alterar sua arquitetura de links internos.`,
        },
        16: {
            title: `URLs com redirecionamento permanente`,
            about: `Embora o uso de redirecionamentos permanentes (redirecionamento 301 ou 308) seja adequado em muitas situações (por exemplo: ao mudar o site para um novo domínio, redirecionar usuários de uma página excluída para uma nova página ou lidar com problemas de conteúdo duplicado), recomendamos que faça isso o mínimo possível. Toda vez que você redireciona uma das páginas do seu site, isso diminui seu crawl budget, que pode acabar antes que os mecanismos de pesquisa consigam rastrear a página que você espera que seja indexada. Além do mais, se houver muitos redirecionamentos permanentes, os usuários podem ficar confusos.`,
            solve: `Revise todas as URLs com redirecionamento permanente. Quando possível, troque redirecionamentos permanentes pela URL da página de destino.`,
        },
        17: {
            title: `recursos estão formatados como link de página`,
            about: `Identificamos que alguns links para recursos estão formatados com um elemento HTML <a href>. Uma tag <a> com um atributo href é usada como link para outras páginas e deve conter apenas uma URL de página. Os mecanismos de pesquisa vão rastrear página por página do seu site, seguindo esses links de páginas HTML. Quando seguimos um link de página que contém um recurso, como uma imagem, por exemplo, a página retornada não tem nenhum conteúdo além da imagem. Isso pode confundir os mecanismos de pesquisa, indicando que a arquitetura do seu site é ruim.`,
            solve: `Analise seus links. Substitua links <a href> pelas tags necessárias para recursos específicos. Por exemplo: caso queira adicionar uma imagem, use uma tag <img> com um atributo alt que descreva o conteúdo da imagem.`,
        },
        18: {
            title: `links desta página apresentam texto âncora não descritivo`,
            about: `Este problema ocorre quando um texto âncora não descritivo é usado em um link (seja interno ou externo). Uma âncora é considerada não descritiva se ela não der nenhuma ideia de qual é o assunto da página para a qual o link aponta, por exemplo: "clique aqui", "bem aqui", etc. Esse tipo de âncora oferece pouco valor aos usuários e aos mecanismos de pesquisa, já que não apresenta nenhuma informação sobre a página de destino. Além disso, essas âncoras não ajudam muito na capacidade da página de destino de ser indexada por mecanismos de pesquisa e, como consequência, ser exibida nos rankings em solicitações de pesquisa relevantes`,
            solve: `Para permitir que os usuários e os mecanismos de pesquisa compreendam o significado da página para a qual o link aponta, use um texto âncora sucinto que descreva o conteúdo da página.`,
        },
        19: {
            title:`link para página ou recurso externo apresenta um código de status HTTP 403`,
            about: `Este problema ocorre quando um rastreador recebe um código 403 ao tentar acessar uma página ou recurso externo por meio de um link em seu site. Um código de status HTTP 403 é apresentado quando um usuário não tem permissão para acessar o recurso por algum motivo. No caso de rastreadores, isso geralmente significa que o rastreador está sendo impedido de acessar o conteúdo no nível do servidor.`,
            solve: `Confira se a página está disponível aos navegadores e mecanismos de pesquisa. Para isso, siga um link no seu navegador e verifique os dados do Google Search Console.
            - Se uma página ou recurso não estiver disponível, entre em contato com o proprietário do site externo para recuperar o conteúdo excluído ou alterar o link em sua página
            - Se uma página estiver disponível, mas nosso bot for impedido de acessá-la, você pode pedir ao responsável pelo site externo que desbloqueie a página, para que possamos verificar todos os recursos corretamente. Você também pode ocultar este problema na sua lista.`,
        },
        20: {
            title: `links para páginas ou recursos externos apresentam código de status HTTP 403`,
            about: `Este problema ocorre quando um rastreador recebe um código 403 ao tentar acessar uma página ou recurso externo por meio de um link em seu site. Um código de status HTTP 403 é apresentado quando um usuário não tem permissão para acessar o recurso por algum motivo. No caso de rastreadores, isso geralmente significa que o rastreador está sendo impedido de acessar o conteúdo no nível do servidor.`,
            solve: `Confira se a página está disponível aos navegadores e mecanismos de pesquisa. Para isso, siga um link no seu navegador e verifique os dados do Google Search Console.
            - Se uma página ou recurso não estiver disponível, entre em contato com o proprietário do site externo para recuperar o conteúdo excluído ou alterar o link em sua página
            - Se uma página estiver disponível, mas nosso bot for impedido de acessá-la, você pode pedir ao responsável pelo site externo que desbloqueie a página, para que possamos verificar todos os recursos corretamente. Você também pode ocultar este problema na sua lista.`,
        },
        21: {
            title:`página requer mais de 3 cliques para que seja alcançada`,
            about: `A profundidade de rastreamento de uma página é o número de cliques necessários para que usuários e rastreadores de mecanismos de pesquisa cheguem a ela a partir da página inicial correspondente. De uma perspectiva de SEO, uma profundidade de rastreamento excessiva representa grande ameaça aos seus esforços de otimização, já que há menor probabilidade de tanto os rastreadores quanto os usuários chegarem a páginas muito profundas.
            Por esta razão, páginas que apresentam conteúdo importante devem estar a no máximo 3 cliques da sua página inicial.`,
            solve: `Assegure-se de que páginas com conteúdo importante possam ser alcançadas com poucos cliques.
            Se alguma delas estiver muito distante em seu site, avalie a possibilidade de alterar sua arquitetura de links internos.`,
        },
        22: {
            title: `link desta página apresenta texto âncora não descritivo`,
            about: `Este problema ocorre quando um texto âncora não descritivo é usado em um link (seja interno ou externo). Uma âncora é considerada não descritiva se ela não der nenhuma ideia de qual é o assunto da página para a qual o link aponta, por exemplo: "clique aqui", "bem aqui", etc. Esse tipo de âncora oferece pouco valor aos usuários e aos mecanismos de pesquisa, já que não apresenta nenhuma informação sobre a página de destino. Além disso, essas âncoras não ajudam muito na capacidade da página de destino de ser indexada por mecanismos de pesquisa e, como consequência, ser exibida nos rankings em solicitações de pesquisa relevantes`,
            solve: `Para permitir que os usuários e os mecanismos de pesquisa compreendam o significado da página para a qual o link aponta, use um texto âncora sucinto que descreva o conteúdo da página.`,
        },
        23: {
            title: `subdomínio não suporta o HSTS`,
            about: `O HSTS (HTTP Strict Transport Security) informa aos navegadores que eles podem se comunicar com servidores somente através de conexões HTTPS. Assim, para garantir que você não apresente conteúdo inseguro ao público, recomendamos que implemente o suporte a HSTS.`,
            solve: `Use um servidor que suporte o HSTS.`,
        },
        24: {
            title: "link desta página não tem texto âncora",
            about: "Este problema ocorre se um link (seja externo ou interno) em seu site tiver uma âncora vazia ou pura ('naked anchor', ou seja, uma âncora que usa uma URL bruta), ou se o texto âncora tiver apenas símbolos. Embora uma âncora ausente não impeça que os usuários e rastreadores sigam um link, fica difícil entender o assunto da página para a qual o link aponta. Além disso, o Google leva em consideração o texto âncora ao indexar uma página. Portanto, uma âncora ausente representa uma oportunidade desperdiçada de otimizar o desempenho da página para a qual o link aponta nos resultados de pesquisa.",
            solve: "Use um texto âncora nos links onde for necessário. O texto do link precisa dar aos usuários e aos mecanismos de pesquisa pelo menos uma ideia básica do assunto da página-alvo. Além disso, use um texto curto porém descritivo.",
        },

    }
};