function getData() {
    return data = {
        300: {
            title: `imagens externas estão quebradas`,
            about: `Uma imagem externa quebrada não pode ser exibida porque não existe mais ou sua URL foi digitada incorretamente. Imagens externas quebradas em excesso podem afetar negativamente a experiência do usuário e podem sinalizar aos mecanismos de pesquisa que seu site não é bem mantido ou codificado.`,
            solve: `Para corrigir uma imagem externa quebrada, realize uma das seguintes ações:
            - Caso a imagem tenha sido excluída ou corrompida, substitua-a por uma nova
            - Caso a imagem não seja mais necessária, remova-a do código da página
            - Caso a imagem tenha sido movida para um local diferente e você saiba o novo endereço, mude a URL dela`,
        },
        301: {
            title: `páginas não possuem texto suficiente dentro da tag de título`,
            about: `Em geral, a utilização de títulos curtos em páginas da Web é uma prática recomendada. Entretanto, fique ciente de que títulos com 10 caracteres ou menos não fornecem informações suficientes sobre a sua página e limitam o potencial de ela aparecer nos resultados de pesquisa para diferentes palavras-chave.`,
            solve: `Adicione mais texto descritivo dentro da tag <title> da página.`,
        },
        302: {
            title: `páginas possuem links em excesso`,
            about: `O problema é causado se a página contiver mais de 3.000 links. Como regra, os mecanismos de pesquisa processam a quantidade de links da página que eles consideram necessária para determinado site. Entretanto, colocar mais de 3.000 links em uma página pode fazer com que ela pareça de baixa qualidade e pode até ser considerada SPAM pelos mecanismos de pesquisa, o que talvez ocasione a perda de posições nas classificações ou até o desaparecimento nos resultados de pesquisa. A presença de links em excesso também é uma experiência ruim para o usuário.`,
            solve: `Verifique todas as páginas que contenham mais de 3.000 links e exclua os links desnecessários.
            Você também pode usar o relatório Links internos para verificar seus links internos.`,
        },
        303: {
            title: `URLs com redirecionamento temporário`,
            about: `Redirecionamentos temporários (p.ex., redirecionamento 302 ou 307) significam que uma página foi temporariamente movida para outro local. Os mecanismos de pesquisa continuarão a indexar a página redirecionada, e nenhum link juice ou tráfego é passado à nova página. É por isso que redirecionamentos temporários podem prejudicar as classificações de pesquisa se usadas por engano.`,
            solve: `Verifique todas as URLs para garantir que o uso dos redirecionamentos 302 e 307 seja legítimo. Caso afirmativo, não se esqueça de removê-los quando não forem mais necessários. Entretanto, se você mover qualquer página de forma permanente, substitua o redirecionamento 302/307 pelo 301/308.`,
        },
        304: {
            title: `páginas possuem parâmetros em excesso na URL`,
            about: `Usar parâmetros de URL em excesso não é uma boa prática de SEO. Múltiplos parâmetros deixam as URLs menos atraentes aos usuários e podem fazer com que os mecanismos de pesquisa não consigam indexar algumas das suas páginas mais importantes.`,
            solve: `Tente usar até, no máximo, quatro parâmetros nas suas URLs.`,
        },
        305: {
            title: `páginas não informaram a codificação de caracteres`,
            about: `Fornecer a codificação de caracteres informa aos navegadores qual conjunto de caracteres deve ser usado para exibir o conteúdo da página. Se ela não for informada, os navegadores talvez não renderizem o conteúdo da página de forma adequada, o que pode afetar negativamente a experiência do usuário. Além disso, os mecanismos de pesquisa podem considerar que páginas sem a codificação de caracteres sejam de pouca utilidade para os usuários e, portanto, podem deixá-las em posições inferiores nos resultados de pesquisa do que aquelas que especificaram a codificação.`,
            solve: `Informe a codificação de caracteres usando o parâmetro charset do cabeçalho Content-Type do HTTP (Content-Type: text/html; charset=utf-8) ou usando o atributo "meta charset" na sua página HTML (<meta charset="utf-8"/>).`,
        },
        306: {
            title: `páginas não informaram o tipo de documento`,
            about: `O tipo de documento (doctype) de uma página informa aos navegadores qual versão de HTML ou XHTML está sendo usada. Informar o tipo de documento é muito importante para que o conteúdo da página seja carregado de forma apropriada. Se o tipo de documento não for especificado, podem ocorrer vários problemas, como conteúdo da página bagunçado ou tempo de carregamento alto e, como resultado, a experiência do usuário é afetada negativamente.`,
            solve: `Informe o tipo de documento de cada página adicionando o elemento <!Doctype> (p.ex., "<!Doctype html>") à parte superior do código fonte de cada página, imediatamente antes da tag <html>.`,
        },
        307: {
            title: `páginas têm conteúdo de plug-ins incompatíveis`,
            about: `Este problema ocorre se sua página tiver conteúdo baseado em plug-ins Flash, JavaApplet ou Silverlight.
            Esses tipos de plug-in não funcionam corretamente em dispositivos móveis, deixando os usuários frustrados.
            Além disso, eles não podem ser rastreados nem indexados corretamente, prejudicando seu site nos rankings de dispositivos móveis.`,
            solve: `Converta conteúdos de plug-ins não compatíveis em HTML5.`,
        },
        308: {
            title: `páginas contêm quadros`,
            about: `Tags <frame> são consideradas um dos problemas mais importantes na otimização de mecanismos de pesquisa. É difícil para os mecanismos de pesquisa indexar e rastrear conteúdo dentro de tags <frame>, o que, por sua vez, faz com que sua página seja excluída dos resultados de pesquisa. Além disso, usar essas tags também afeta negativamente a experiência do usuário.`,
            solve: `Tente evitar o uso de tags <frame> sempre que possível.`,
        },
        309: {
            title: `páginas possuem o caractere de sublinhado na URL`,
            about: `Quando se trata de estrutura da URL, o uso do caractere de sublinhado como separador de palavras não é recomendado porque os mecanismos de pesquisa talvez não o interpretem corretamente e podem considerá-lo como parte da palavra. O uso de hifens no lugar de caracteres de sublinhado faz com que os mecanismos de pesquisa entendam mais facilmente do que se trata a sua página.
            Apesar de o uso de caracteres de sublinhado não ter grande impacto na visibilidade do site, diminuem as chances de a página aparecer nos resultados de pesquisa, ao contrário de páginas que usam hifens.`,
            solve: `Substitua caracteres de sublinhado por hifens. Entretanto, se sua página já estiver bem classificada, não recomendamos que você faça isso.`,
        },
        310: {
            title: `O sitemap.xml não está especificado no robots.txt`,
            about: `Se você tiver tanto um arquivo sitemap.xml como um robots.txt no seu site, é boa prática colocar no robots.txt um link para o sitemap.xml, o que fará com que os mecanismos de pesquisa entendam qual conteúdo devem rastrear.`,
            solve: `Especifique o local do sitemap.xml no arquivo robots.txt. `,
        },
        311: {
            title: `Sitemap.xml não encontrado`,
            about: `O arquivo sitemap.xml é usado para listar todas as URLs disponíveis para rastreamento. Ele também pode incluir informações adicionais sobre cada URL.
            Usar o arquivo sitemap.xml traz muitos benefícios. Além de fornecer fácil navegação e melhor visibilidade aos mecanismos de pesquisa, também os informa rapidamente qualquer conteúdo novo ou atualizado no seu site. Portanto, o site será rastreado de forma mais rápida e inteligente.`,
            solve: `Considere criar um arquivo sitemap.xml se você ainda não o tiver feito.
            Depois, você deve especificar o local dos arquivos sitemap.xml no seu robots.txt e verificar se o GoogleBot consegue indexar seu arquivo sitemap.xml com o relatório Sitemaps no Google Search Console`,
        },
        312: {
            title: `A página inicial não usa criptografia HTTPS`,
            about: `O Google considera a segurança do site um fator para a classificação. Os sites que não suportam conexões HTTPS podem ter classificações piores nos resultados de pesquisa do Google, enquanto sites com criptografia HTTPS obterão melhores classificações nos algoritmos de pesquisa.`,
            solve: `Adicione HTTPS ao seu site.`,
        },
        313: {
            title: `subdomínios não suportam a SNI`,
            about: `Um dos problemas mais comuns que você pode enfrentar ao usar HTTPS é quando o servidor web não suporta a SNI (Server Name Indication). O uso da SNI lhe permite operar com vários servidores e hospedar vários certificados no mesmo endereço IP, o que pode melhorar a segurança e a confiabilidade.`,
            solve: `Garanta que seu servidor web suporte a SNI. Lembre-se de que a SNI não é suportada por alguns navegadores antigos, e é por isso que você precisa garantir que seu público utilize navegadores que suportem a SNI.`,
        },
        314: {
            title: `URLs HTTP no sitemap.xml para site HTTPS`,
            about: `Seu sitemap.xml deve incluir os links que você deseja que os mecanismos de pesquisa encontrem e indexem. A utilização de diferentes versões de URL no sitemap pode induzir os mecanismos de pesquisa a erros e resultar em um rastreamento incompleto do site.`,
            solve: `Substitua todas as URLs HTTP no seu sitemap.xml por URLs HTTPS.`,
        },
        315: {
            title: `problemas com arquivos JavaScript e CSS não compactados`,
            about: `Este problema ocorre quando a compactação não está ativada na resposta HTTP.
            A compactação dos arquivos JavaScript e CSS reduz consideravelmente seu tamanho e o tamanho total da página, melhorando, assim, o tempo de carregamento da página.
            Arquivos JavaScript e CSS não compactados retardam o carregamento da página, o que afeta negativamente a experiência do usuário e pode piorar suas classificações nos mecanismos de pesquisa.
            Se sua página usar arquivos CSS e JS não compactados que estejam hospedados em um site externo, verifique se eles não afetam o tempo de carregamento da página.`,
            solve: `Ative a compactação para seus arquivos CSS e JavaScript no seu servidor.
            Se sua página usar arquivos CSS e JS não compactados que estejam hospedados em um site externo, entre em contato com o proprietário do site e peça-lhe que ative a compactação no servidor dele.
            Caso esse problema não afete o tempo de carregamento da sua página, basta ignorá-lo.`,
        },
        316: {
            title: `páginas com tamanho total de JavaScript e CSS muito grande`,
            about: `Este problema ocorre se o tamanho total de transferência dos arquivos JavaScript e CSS usados na sua página exceder 2 MB.
            O tamanho dos arquivos JavaScript e CSS usados em uma página é um fator importante no tempo de carregamento da página. A presença de muitos arquivos JavaScript e CSS grandes torna a página mais pesada, aumentando seu tempo de carregamento. Isso, por sua vez, piora a experiência do usuário e as classificações nos mecanismos de pesquisa.`,
            solve: `Analise suas páginas para conferir se elas contêm apenas os arquivos CSS e JavaScript necessários. Se todos os recursos forem importantes para sua página, veja se é possível reduzir o tamanho de transferência deles.`,
        },
        317: {
            title: `páginas estão usando muitos arquivos JavaScript e CSS`,
            about: `Este problema ocorre se uma página usar mais de 100 arquivos JavaScript e CSS.
            Toda vez que um visitante navega para uma página, primeiro o navegador começa a carregar arquivos de suporte, como JavaScript e CSS. Para cada arquivo usado pela sua página, o navegador envia uma solicitação HTTP diferente. Cada solicitação aumenta o tempo de carregamento da sua página e influencia sua renderização, o que afeta diretamente a experiência do usuário, a taxa de rejeição e, por fim, as classificações nos mecanismos de pesquisa.`,
            solve: `Analise suas páginas para conferir se elas contêm apenas os arquivos CSS e JavaScript necessários.
            Se todos os recursos forem importantes para sua página, sugerimos que você os combine.`,
        },
        318: {
            title: `URLs dos links são grandes demais`,
            about: `Este problema é desencadeado quando a URL do link contém mais de 2.000 caracteres. Embora teoricamente não haja limite de caracteres nas URLs, ainda é recomendável restringi-las a menos de 2.000 caracteres. Isso é importante porque alguns navegadores não conseguem processar URLs acima desse limite. Além do mais, ao manter as URLs com um tamanho razoável, o rastreamento delas fica muito mais fácil, ao passo que URLs muito grandes podem ser ignoradas pelos mecanismos de pesquisa.`,
            solve: `Como resolver: tente limitar o tamanho das URLs dos links a menos de 2.000 caracteres.`,
        },
        319: {
            title: `problemas com arquivos JavaScript e CSS não minificados`,
            about: `A minificação é o processo de remover linhas, comentários e espaços em branco desnecessários do código-fonte.
            A minificação dos arquivos JavaScript e CSS reduz seu tamanho, diminuindo o tempo de carregamento da página, aprimorando a experiência do usuário e melhorando suas classificações nos mecanismos de pesquisa.`,
            solve: `Minifique seus arquivos CSS e JavaScript.
            Se sua página usar arquivos CSS e JS que estejam hospedados em um site externo, entre em contato com o proprietário do site e peça-lhe que minifique os arquivos dele.
            Caso esse problema não afete o tempo de carregamento da sua página, basta ignorá-lo.`,
        },
        320: {
            title: `páginas possuem baixa proporção texto/HTML`,
            about: `A proporção texto/HTML indica a quantidade de texto que a página tem em relação à quantidade de código. Este problema é causado quando a proporção texto/HTML é inferior ou igual a 10%.
            Os mecanismos de pesquisa começaram a se concentrar nas páginas que possuem mais conteúdo. É por isso que uma proporção texto/HTML maior significa que sua página tem mais chances de obter uma boa posição nos resultados de pesquisa.
            Menos código aumenta o tempo de carregamento da página e também ajuda nas classificações. Ajuda ainda os robôs dos mecanismos de pesquisa a rastrear seu site mais rapidamente.`,
            solve: `Separe o conteúdo de texto da página e o código em arquivos diferentes e compare os tamanhos. Se o tamanho do arquivo de código for maior que o do arquivo de texto, verifique o código da página HTML e considere otimizar a estrutura e remover scripts e estilos internos.`,
        },
        321: {
            title: `problemas com recursos internos bloqueados no robots.txt`,
            about: `Recursos bloqueados são recursos (ex.: arquivos CSS, JavaScript, de imagem, etc.) que estão bloqueados para rastreamento por uma diretiva “Disallow” no seu arquivo robots.txt. Ao não permitir esses arquivos, você está impedindo que os mecanismos de pesquisa os acessem, impossibilitando a renderização e indexação corretas das suas páginas. Como consequência, isso pode levar a classificações mais baixas`,
            solve: `Para desbloquear um recurso, basta atualizar seu arquivo robots.txt.`,
        },
        322: {
            title: `problemas com arquivos JavaScript e CSS não armazenados em cache`,
            about: `Este problema ocorre se o armazenamento em cache do navegador não estiver especificado no cabeçalho da resposta.
            A ativação do armazenamento em cache do navegador para arquivos JavaScript e CSS permite que os navegadores armazenem e reutilizem esses recursos sem ter que baixá-los novamente ao solicitar sua página. Assim, o navegador fará download de menos dados, diminuindo o tempo de carregamento da sua página. Quanto menos tempo sua página demora para carregar, mais satisfeitos ficam seus visitantes.`,
            solve: `Se os arquivos CSS e JavaScript estiverem hospedados no seu site, ative o armazenamento em cache do navegador para eles.
            Se os arquivos CSS e JavaScript estiverem hospedados em um site que não é seu, entre em contato com o proprietário do site e peça-lhe que ative o armazenamento em cache do navegador para os arquivos.
            Caso esse problema não afete o tempo de carregamento da sua página, basta ignorá-lo.`,
        },
        323: {
            title: `links internos de saída contêm o atributo nofollow`,
            about: `O atributo rel="nofollow" é um elemento de uma tag <a> que determina que os rastreadores não devem seguir o link (ex.: "<a href="http://example.com/link" rel="nofollow">Exemplo de link nofollow</a>"). Links "nofollow" não passam link juice para as páginas referenciadas. É por isso que não recomendamos a utilização de atributos nofollow em links internos. Você deve permitir que o link juice flua livremente pelo seu site. Além disso, o uso não intencional do atributo nofollow pode fazer com que sua página seja ignorada pelos rastreadores de mecanismos de pesquisa mesmo que possua conteúdo útil.`,
            solve: `Lembre-se de não usar atributos nofollow por engano. Elimine-os de tags <a>, se necessário.`,
        },
        324: {
            title: `páginas não têm descrição meta`,
            about: `Embora as descrições meta não tenham influência direta nas classificações, elas são usadas pelos mecanismos de pesquisa para exibir a descrição da sua página nos resultados de pesquisa. Uma boa descrição ajuda os usuários a saber do que se trata sua página e os incentiva a clicar nela. Se a tag de descrição meta da página estiver ausente, os mecanismos de pesquisa exibirão, em geral, a primeira frase, que pode ser irrelevante e não atrativa para os usuários.`,
            solve: `Para obter uma taxa de cliques maior, você deve garantir que todas as suas páginas tenham descrições meta que contenham palavras-chave relevantes.`,
        },
        325: {
            title: `páginas não possuem o título h1`,
            about: `Embora menos importantes que as tags <title>, os títulos h1 ainda ajudam a definir o assunto da sua página para mecanismos de pesquisa e usuários. Se um título <h1> estiver vazio ou ausente, os mecanismos de pesquisa podem dar uma classificação inferior à página. Além disso, a ausência do título <h1> quebra a hierarquia de títulos da página, o que não é boa prática de SEO.`,
            solve: `Forneça um título h1 conciso e relevante para cada página.`,
        },
        326: {
            title: `links em páginas HTTPS levam a páginas HTTP`,
            about: `Se qualquer link do site apontar para a versão antiga em HTTP, os mecanismos de pesquisa podem ficar confusos em relação a que versão da página devem classificar.`,
            solve: `Substitua todos os links HTTP com as novas versões HTTPS.`,
        },
        327: {
            title: `páginas possuem tags h1 e de título duplicadas`,
            about: `Duplicar o conteúdo das tags título e h1 é uma péssima ideia. Se as tags <title> e <h1> da página forem iguais, a h1 pode parecer otimizada demais para os mecanismos de pesquisa.
            Além disso, usar o mesmo conteúdo nas tags de título e h1 significa perder a oportunidade de incorporar outras palavras-chave relevantes na sua página.`,
            solve: `Tente criar conteúdo diferente para as tags <title> e <h1>.`,
        },
        328: {
            title: `páginas possuem baixa quantidade de palavras`,
            about: `Este problema é causado se o número de palavras na sua página for inferior a 200.
            A quantidade de texto colocado na página é sinal de qualidade para os mecanismos de pesquisa.
            Eles preferem fornecer a maior quantidade possível de informações aos usuários; assim, páginas com mais conteúdo tendem a ser melhor classificadas nos resultados de pesquisa, ao contrário das páginas com menor quantidade de palavras.`,
            solve: `Melhore o conteúdo da página e não se esqueça de incluir mais de 200 palavras relevantes.`,
        },
        329: {
            title: `páginas não compactadas`,
            about: `Este problema ocorre se a entidade Content-Encoding não estiver presente no cabeçalho da resposta. A compactação da página é essencial para o processo de otimização do site. Páginas não compactadas ocasionam um tempo de carregamento maior, o que resulta em uma experiência ruim do usuário e classificação mais baixa nos mecanismos de pesquisa.`,
            solve: `Habilite a compactação nas suas páginas para que o carregamento seja mais rápido.`,
        },
        330: {
            title: `páginas possuem texto demais dentro da tag de título`,
            about: `A maioria dos mecanismos de pesquisa truncam títulos com mais de 70 caracteres. Títulos incompletos ou reduzidos não são atrativos para os usuários e não os incentivarão a clicar na sua página.`,
            solve: `Tente reescrever os títulos da página para que fiquem com menos de 70 caracteres.`,
        },
        331: {
            title: `imagens não possuem atributo alt`,
            about: `Atributos alt dentro das tags <img> são usados pelos mecanismos de pesquisa para entender o conteúdo das suas imagens. Se você ignorar atributos alt, pode perder a chance de obter uma melhor classificação nos resultados de pesquisa porque eles permitem que você apareça nas classificações de resultados de pesquisa de imagens.
            Não usar atributos alt também afeta negativamente a experiência de usuários com deficiência visual e de usuários que desabilitaram imagens nos navegadores.`,
            solve: `Especifique um atributo alt relevante dentro da tag <img> para cada imagem do seu site, como, por exemplo, "<img src="mylogo.png" alt="Este é o logotipo da minha empresa">”.`,
        },
        332: {
            title: `páginas não têm atributos hreflang e lang`,
            about: `Faça o seguinte:
            - Adicione um atributo de idioma à tag <html>, p.ex., "<html lang="pt">"
            - Adicione um atributo hreflang à tag <head> da sua página, p.ex., <link rel="alternate" href="http://exemplo.com/" hreflang="pt"/>`,
            solve: `Faça o seguinte:
            - Adicione um atributo de idioma à tag <html>, p.ex., "<html lang="pt">"
            - Adicione um atributo hreflang à tag <head> da sua página, p.ex., <link rel="alternate" href="http://exemplo.com/" hreflang="pt"/>`,
        },
        333: {
            title: `link externo está quebrado`,
            about: `Links externos quebrados levam usuários de um site a outro, que pode ter páginas não existentes. Links quebrados em excesso podem afetar negativamente a experiência do usuário e diminuir a classificação do seu site em mecanismos de pesquisa porque os rastreadores podem achar que o site não é bem mantido ou codificado.
            Observe que o nosso rastreador pode detectar um link funcional como quebrado. Em geral, isso ocorre se o servidor que armazena o site do link externo bloquear o acesso do nosso rastreador.`,
            solve: `Acesse todos os links relatados como quebrados. Se uma página externa retornar um erro, remova o link que leva à página com problema ou substitua-a por outro recurso.
            Se os links relatados como quebrados funcionam quando acessados por um navegador, você deve entrar em contato com o proprietário do site e informá-lo do problema`,
        },
        334: {
            title: `página não possui texto suficiente dentro da tag de título`,
            about: `Em geral, a utilização de títulos curtos em páginas da Web é uma prática recomendada. Entretanto, fique ciente de que títulos com 10 caracteres ou menos não fornecem informações suficientes sobre a sua página e limitam o potencial de ela aparecer nos resultados de pesquisa para diferentes palavras-chave.`,
            solve: `Adicione mais texto descritivo dentro da tag <title> da página.`,
        },
    }
};