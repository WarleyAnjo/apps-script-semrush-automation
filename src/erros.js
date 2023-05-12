function getData() {
    return data = {
        201: {
            title: `links internos estão quebrados`,
            about: `Links internos quebrados levam usuários de um site a outro, que pode ter páginas não existentes. Links quebrados em excesso podem afetar negativamente a experiência do usuário e diminuir a classificação do seu site em mecanismos de pesquisa porque os rastreadores podem achar que o site não é bem mantido ou codificado.
            Observe que o nosso rastreador pode detectar um link funcional como quebrado. Em geral, isso ocorre se o servidor que armazena o site do link externo bloquear o acesso do nosso rastreador.`,
            solve: `Acesse todos os links relatados como quebrados. Se uma página externa retornar um erro, remova o link que leva à página com problema ou substitua-a por outro recurso.
            Se os links relatados como quebrados funcionam quando acessados por um navegador, você deve entrar em contato com o proprietário do site e informá-lo do problema.`,
        },
        202: {
            title: `problemas de conteúdo misto`,
            about: `Se o seu site contiver algum elemento que não esteja protegido por HTTPS, pode haver problemas de segurança. Além disso, os navegadores avisam aos usuários sobre o carregamento de conteúdo inseguro, o que pode afetar negativamente a experiência de usuário e reduzir a confiança deles no seu site.`,
            solve: `Coloque apenas conteúdo HTTPS em páginas HTTPS.
            Substitua todos os links HTTP pelas novas versões HTTPS. Caso haja links externos que levam à página sem versão HTTPS, remova-os.`,
        },
        203: {
            title: `imagens internas estão quebradas`,
            about: `Uma imagem interna quebrada não pode ser exibida porque não existe mais, sua URL foi digitada incorretamente ou o caminho do arquivo não é válido. Imagens quebradas podem prejudicar a classificação do site porque elas fornecem uma experiência ruim ao usuário e sinalizam aos mecanismos de pesquisa que sua página é de baixa qualidade.`,
            solve: `Para corrigir uma imagem interna quebrada, realize uma das seguintes ações:
            - Caso a imagem não esteja mais no mesmo local, mude a URL dela
            - Caso a imagem tenha sido excluída ou corrompida, substitua-a por uma nova
            - Caso a imagem não seja mais necessária, remova-a do código da página`,
        },
        204: {
            title: `páginas não puderam ser rastreadas`,
            about: `O problema indica que nosso rastreador não conseguiu acessar a página. Há duas possíveis razões:
            - O tempo de resposta do servidor do seu site é superior a 5 segundos
            - Seu servidor recusou acesso às páginas`,
            solve: `Por favor, contate a equipe de suporte técnico da sua hospedagem Web e peça que eles corrijam o problema.`,
        },
        205: {
            title: `páginas retornaram código de status 4XX`,
            about: `Um erro 4XX significa que a página não pode ser acessada. Em geral, isso ocorre devido a links quebrados. Esses erros impedem que usuários e robôs de mecanismos de pesquisa acessem suas páginas e podem afetar negativamente a experiência do usuário e a capacidade de rastreamento dos mecanismos de pesquisa. Consequentemente, haverá diminuição de tráfego direcionado ao seu site. Esteja ciente de que o rastreador pode detectar um link funcional como quebrado se o seu site bloquear o acesso do nosso rastreador. Em geral, isso ocorre devido às seguintes razões:
            - Sistema de proteção contra DDoS.
            - Servidor sobrecarregado ou mal configurado.`,
            solve: `Se uma página retornar um erro, remova todos os links que levam à página com problema ou substitua-os por outro recurso.
            Para identificar todas as páginas do seu site que contêm links para uma página 4xx, clique em “Ver links quebrados” próximo à página de erro.
            Se os links relatados como 4xx funcionam quando acessados por um navegador, você pode tentar uma das seguintes ações:
            - Entrar em contato com a equipe de suporte da sua hospedagem Web
            - Dar instruções aos robôs de mecanismos de pesquisa para que não rastreiem seu site com muita frequência, especificando a diretiva "crawl-delay" no seu robots.txt`,
        },
        206: {
            title: `páginas não possuem a tag de título`,
            about: `Uma tag <title> é um elemento essencial para SEO na página. Ela aparece em navegadores e resultados de pesquisa e ajuda tanto os mecanismos de pesquisa quanto os usuários a entender do que sua página se trata.
            Caso uma página não tenha um título ou a tag <title> esteja vazia, o Google pode considerá-la de baixa qualidade. Caso você promova essa página nos resultados de pesquisa, perderá chances de obter uma classificação maior e uma taxa de cliques mais alta.`,
            solve: `Garanta que toda página do seu site tenha um título conciso e exclusivo com as palavras-chave mais importantes.`,
        },
        207: {
            title: `páginas retornaram código de status 5XX`,
            about: `Os erros “5xx” referem-se a problemas de servidor não conseguir realizar a solicitação de um usuário ou rastreador. Eles impedem que usuários e robôs de mecanismos de pesquisa acessem suas páginas e podem afetar negativamente a experiência do usuário e a capacidade de rastreamento dos mecanismos de pesquisa. Consequentemente, haverá diminuição de tráfego direcionado ao seu site.`,
            solve: `Investigue as causas desses erros e corrija-os.`,
        },
        208: {
            title: `problemas de tag de título duplicada`,
            about: `Nosso rastreador relata páginas que possuem tags de título duplicadas apenas se forem idênticas.
            Tags <title> duplicadas tornam difícil para os mecanismos de pesquisa determinar qual página do site é relevante para uma consulta de pesquisa específica e qual deveria ter prioridade nos resultados de pesquisa. Páginas com títulos duplicados possuem chances mais baixas de serem bem classificadas e têm risco de ser banidas.
            Além disso, tags <title> idênticas deixam os usuários confusos em relação a qual página deveriam acessar.`,
            solve: `Forneça um título conciso e exclusivo para cada página com as palavras-chave mais importantes.`,
        },
        209: {
            title: `páginas estão com problema de conteúdo duplicado`,
            about: `Páginas da Web são consideradas duplicadas se o conteúdo delas for 85% idêntico.
            A presença de conteúdo duplicado pode comprometer seu desempenho no SEO de maneira considerável.
            Em primeiro lugar, o Google costuma mostrar apenas uma página duplicada, filtrando os demais casos e deixando-os de fora de seu índice e resultados de pesquisa, e esta página talvez não seja a que você deseja que consiga classificação.
            Em alguns casos, os mecanismos de pesquisa podem considerar páginas duplicadas uma tentativa de manipular as classificações dos mecanismos de pesquisa e, consequentemente, seu site pode ser rebaixado ou até banido dos resultados de pesquisa.
            Além do mais, páginas duplicadas podem diluir o seu perfil de links.`,
            solve: `Aqui vão algumas maneiras de resolver problemas de conteúdo duplicado:
            - Acrescente um link com rel="canonical" a uma das suas páginas duplicadas, para informar aos mecanismos de pesquisa qual página exibir nos resultados de pesquisa
            - Use um redirecionamento 301 de uma página duplicada para a original
            - Use um atributo de link rel="next" e um rel="prev" para corrigir duplicados de paginação
            - Oriente o GoogleBot a tratar parâmetros de URL de forma diferente usando o Google Search Console
            - Disponibilize um pouco de conteúdo exclusivo na página`,
        },
        210: {
            title: `páginas não puderam ser rastreadas (problema de resolução DNS)`,
            about: `Um erro de resolução DNS é relatado quando nosso rastreador não consegue resolver o nome do host ao tentar acessar sua página.`,
            solve: `Por favor, contate a equipe de suporte técnico da sua hospedagem Web e peça que eles corrijam o problema.`,
        },
        211: {
            title: `páginas não puderam ser rastreadas (formato de URL incorreto)`,
            about: `Este problema é relatado quando o SemrushBot não consegue acessar uma página devido a uma URL inválida. Seguem alguns erros comuns:
            - Sintaxe de URL inválida (p.ex., nenhum protocolo ou um incorreto é especificado, barras invertidas () são usadas).
            - Erros de ortografia.
            - Caracteres adicionais desnecessários.`,
            solve: `Certifique-se de que a URL da página esteja em conformidade com o padrão e não tenha caracteres desnecessários ou erros de digitação.`,
        },
        212: {
            title: `páginas possuem descrição meta duplicada`,
            about: `Nosso rastreador relata páginas com descrições meta duplicadas apenas se forem idênticas.
            Uma tag <meta description> é um resumo do conteúdo da página que ajuda os mecanismos de pesquisa a entender do que sua página se trata. Ela pode ser exibida aos usuários nos resultados de pesquisa.
            Ter descrições meta duplicadas em páginas diferentes significa perder a oportunidade de usar palavras-chave mais relevantes. Além disso, elas tornam difícil para os mecanismos de pesquisa e os usuários diferenciarem páginas diferentes. É melhor não ter nenhuma descrição meta a ter uma duplicada.`,
            solve: `Forneça uma descrição meta exclusiva e relevante para cada página.`,
        },
        213: {
            title: `arquivo robots.txt está com erros no formato`,
            about: `Se o arquivo robots.txt estiver mal configurado, você poderá ter diversos problemas.
            As páginas que você deseja que sejam promovidas nos resultados de pesquisa talvez não sejam indexadas pelos mecanismos de pesquisa, enquanto parte de seu conteúdo privado pode ser exposto aos usuários.
            Portanto, um erro de configuração pode prejudicar suas classificações de pesquisa, arruinando todos os esforços de otimização dos mecanismos de pesquisa.`,
            solve: `Verifique seu arquivo robots.txt e corrija todos os problemas, caso existam.`,
        },
        214: {
            title: `arquivos sitemap.xml estão com erros no formato`,
            about: `Se o seu arquivo sitemap.xml estiver com erros, os mecanismos de pesquisa não conseguirão processar os dados nele contidos e o ignorarão.`,
            solve: `Verifique seu arquivo sitemap.xml e corrija todos os problemas.`,
        },
        215: {
            title: `páginas incorretas encontradas no sitemap.xml`,
            about: `Um arquivo sitemap.xml facilita a descoberta de páginas no seu site pelos rastreadores. Apenas boas páginas destinadas aos visitantes devem ser incluídas no arquivo sitemap.xml.
            Este erro é causado se o sitemap.xml contiver URLs que:
            - levam a páginas com o mesmo conteúdo
            - redirecionam para uma página diferente
            - retornam um código de status diferente de 200
            Popular seu arquivo com URLs com esses problemas vai confundir os mecanismos de pesquisa, causando rastreamentos desnecessários ou até mesmo fazendo seu sitemap ser recusado.`,
            solve: `Verifique se há URLs redirecionadas, não canônicas ou com status diferente de 200 no seu sitemap.xml. Forneça as URLs de destino final que sejam canônicas e retornem o código de status 200.`,
        },
        216: {
            title: `páginas estão com problema de resolução www`,
            about: `Normalmente, uma página pode ser acessada com ou sem o www no nome do domínio. Se você não tiver especificado qual versão deve ter prioridade, os mecanismos de pesquisa rastrearão as duas versões e o link juice será dividido entre elas. Portanto, nenhuma das versões da sua página obterá posições mais altas nos resultados de pesquisa.`,
            solve: `Especifique qual versão da sua página você quer que seja a principal. Use os dados do Google Search Console para definir páginas que são indexadas. Recomendamos que redirecione uma versão alternativa da sua página para a versão preferida por meio de um redirecionamento 301`,
        },
        217: {
            title: `páginas não têm a tag viewport`,
            about: `A tag "meta viewport" é uma tag HTML que permite a você controlar o tamanho do visor da página e dimensioná-lo em dispositivos móveis. Esta tag é indispensável se você quer deixar seu site acessível e otimizado para dispositivos móveis.`,
            solve: `Defina a tag "meta viewport" em todas as páginas e teste seu site em um dispositivo móvel para garantir que tudo esteja funcionando corretamente.`,
        
        },
        218: {
            title: `páginas HTML são grandes demais`,
            about: `O tamanho de uma página HTML é o tamanho de todo o código HTML contido nela. Uma página grande demais (p.ex., maior que 2 MB) ocasiona um tempo de carregamento maior, o que resulta em uma experiência ruim do usuário e uma classificação mais baixa nos mecanismos de pesquisa.`,
            solve: `Verifique o código da página HTML e considere otimizar a estrutura e/ou remover scripts e estilos internos.`,
        },
        219: {
            title: `páginas AMP não possuem a tag canônica`,
            about: `Este problema é causado se a página AMP não tem tag canônica.
            Ao criar páginas AMP, vários requisitos devem ser cumpridos:
            - Se você tiver tanto uma versão AMP quanto uma não AMP da mesma página, deve colocar as tags canônicas nas duas versões para evitar problemas de conteúdo duplicado
            - Se você tiver apenas uma versão AMP da página, ela deve ter uma tag canônica de autorreferência`,
            solve: `Adicione a tag rel="canonical" na seção <head> de cada página AMP.`,
        },
        220: {
            title: `páginas estão com problema de implementação hreflang`,
            about: `Este problema é causado se:
            - O código de país não estiver no formato ISO_3166-1_alpha-2.
            - O código de idioma não estiver no formato ISO 639-1.
            
            Um atributo hreflang (rel="alternate" hreflang="x") ajuda os mecanismos de pesquisa a entender qual página deve ser exibida aos visitantes com base na localização. O uso deste atributo é necessário se você tiver um site multilíngue e se quiser ajudar os usuários de outros países a encontrar o conteúdo no idioma mais apropriado a eles.
            É muito importante implementar corretamente os atributos hreflang; do contrário, os mecanismos de pesquisa não conseguirão mostrar a versão da sua página com o idioma correto ao público relevante.`,
            solve: `Garanta que seus atributos hreflang sejam usados corretamente. Veja algumas maneiras de evitar problemas de implementação do hreflang:
            - Especifique corretamente o código de idioma de acordo com o formato ISO 639-1. Para variações de alfabetos, use o formato do padrão ISO 15924.
            - Especifique corretamente o código de país de acordo com o formato ISO_3166-1_alpha-2.`,
        },
        221: {
            title: `conflitos de hreflang no código-fonte da página`,
            about: `Se você tiver um site multilíngue, é necessário ajudar os usuários de outros países a encontrar o conteúdo no idioma mais apropriado a eles. É neste caso que o atributo hreflang (rel="alternate" hreflang="x") torna-se útil. O uso deste atributo nas páginas do seu site informa aos mecanismos de pesquisa quais páginas devem ser exibidas a visitantes com base na localização. É muito importante sincronizar corretamente seus atributos hreflang no código-fonte de sua página. Caso contrário, os mecanismos de pesquisa podem apresentar comportamento inesperado.`,
            solve: `Garanta que seus atributos hreflang sejam usados corretamente. Veja algumas maneiras de evitar problemas de implementação do hreflang:
            - Especifique corretamente o código de idioma de acordo com o formato ISO 639-1. Para variações de alfabetos, use o formato do padrão ISO 15924.
            - Especifique corretamente o código de país de acordo com o formato ISO_3166-1_alpha-2.`,
        },
        222: {
            title: `problemas com links incorretos em hreflangs`,
            about: `Um atributo hreflang (rel="alternate" hreflang="x") ajuda os mecanismos de pesquisa a entender qual página deve ser exibida aos visitantes com base na localização. O uso deste atributo é necessário se você tiver um site multilíngue e se quiser ajudar os usuários de outros países a encontrar o conteúdo no idioma mais apropriado a eles.
            É muito importante garantir seus links hreflang sempre remetam a URLs absolutas com códigos de status HTTP 200. Caso contrário, os mecanismos de pesquisa não serão capazes de interpretá-los corretamente e, como resultado, não exibirão a versão das suas páginas com o idioma correto ao público relevante.`,
            solve: `Para evitar problemas com links em hreflangs, recomendamos que você revise seus atributos hreflang e faça o seguinte:
            - Corrija as URLs quebradas em hreflangs
            - Corrija os redirecionamentos de hreflangs
            - Substitua URLs relativas por absolutas`,
        },
        223: {
            title: `páginas não seguras`,
            about: `Este problema é causado quando o nosso rastreador identifica uma página HTTP com um campo de <input type="password">.
            Usar um campo de <input type="password"> em sua página HTTP prejudica a segurança do usuário, pois há alto risco de que as credenciais de acesso do usuário sejam roubadas. Para evitar que as informações confidenciais dos usuários sejam comprometidas, o Google Chrome começará a informar os usuários dos perigos de enviar senhas em páginas HTTP, classificando-as como “não seguras” a partir de janeiro de 2017. Isso pode ter um impacto negativo na sua taxa de rejeição, pois os usuários provavelmente ficarão incomodados e sairão da página o mais rápido possível.`,
            solve: `Migre suas páginas HTTP que contenham um campo de senha para HTTPS`,
        },
        224: {
            title: `problemas de certificado expirado ou a expirar`,
            about: `Este problema é causado se seu certificado expirou ou vai expirar em breve.
            Se o certificado expirar, será exibida aos usuários uma mensagem de aviso, o que geralmente faz com que desistam de acessar a página e pode levar a uma queda no tráfego de pesquisa orgânica.`,
            solve: `Peça ao administrador do seu site que renove o certificado e execute verificações periódicas para evitar problemas futuros.`,
        },
        225: {
            title: `problemas de protocolo de segurança antigo`,
            about: `Utilizar os protocolos SSL ou TLS antigo (versão 1.0) é um risco de segurança, e é por isso que recomendamos que você implemente as versões mais recentes do protocolo.`,
            solve: `Atualize o protocolo de segurança para a última versão.`,
        },
        226: {
            title: `problemas de nome incorreto de certificado`,
            about: `Se o nome do domínio ou subdomínio com o qual seu certificado SSL está registrado não corresponder ao nome exibido na barra de endereço, os navegadores bloquearão a visita dos usuários ao seu site, exibindo para eles um erro de nome inválido, o que afetará negativamente seu tráfego de pesquisa orgânica.`,
            solve: `Entre em contato com o administrador do seu site e peça que ele instale o certificado correto.
            Como subdomínios também exigem seus próprios certificados, você pode usar um certificado curinga ou um certificado SSL multi-domínio que permite a você proteger múltiplos domínios.`,
        },
        227: {
            title: `Sem redirecionamentos ou canônicos para páginas iniciais HTTPS de versões HTTP`,
            about: `Caso esteja executando versões HTTP e HTTPS de sua página inicial, é muito importante garantir que a coexistência delas não atrapalhe seus esforços de SEO. Os mecanismos de pesquisa não conseguem descobrir qual página deve ser indexada e qual deve ter prioridade nos resultados de pesquisa. Dessa forma, pode haver diversos problemas, incluindo páginas que competem uma com a outra, perda de tráfego e posicionamento ruim nos resultados de pesquisa. Para evitar esses problemas, você deve dar instruções para que os mecanismos de pesquisa indexem apenas a versão HTTPS.`,
            solve: `Faça um desses passos:
            - Redirecione sua página HTTP à versão HTTPS usando um redirecionamento 301
            - Marque a versão HTTPS como a preferida adicionando rel="canonical" às suas páginas HTTP`,
        },
        228: {
            title: `cadeias e loops de redirecionamento`,
            about: `Redirecionar uma URL para outra é adequado em várias situações. Entretanto, se os redirecionamentos forem feitos incorretamente, resultados desastrosos podem ocorrer. Dois exemplos comuns de uso impróprio são cadeias e loops de redirecionamento.

            Longas cadeias de redirecionamento e loops infinitos levam a diversos problemas que podem atrapalhar seus esforços de SEO. Eles tornam difícil o rastreamento do seu site pelos mecanismos de pesquisa, o que afeta o uso do crawl budget e a indexação correta das suas páginas, diminui a velocidade de carregamento do site e, dessa forma, podem ter impacto negativo nas classificações e na experiência do usuário.
            
            Note que, se você não conseguir visualizar uma cadeia de redirecionamento com seu navegador, mas ele for reportado no relatório de Auditoria do site, seu site provavelmente responde de forma diferente às solicitações de rastreadores e navegadores, e você ainda assim precisa resolver o problema.`,
            solve: `A melhor forma de evitar problemas é seguir uma regra geral: não use mais que três redirecionamentos em uma cadeia.

            Se você já estiver com problemas de longas cadeias de redirecionamento ou loops, recomendamos que redirecione cada URL da cadeia à página final de destino.
            
            Não recomendamos que você apenas remova os redirecionamentos para páginas intermediárias, pois pode haver outros links que apontam para as URLs removidas e, dessa forma, podem ser ocasionados erros 404.`,
        },
        229: {
            title: `páginas com link canônico quebrado`,
            about: `Ao configurar um elemento rel="canonical" em sua página, é possível informar aos mecanismos de pesquisa qual versão de uma página você deseja mostrar nos resultados de pesquisa. Ao usar tags canônicas, é importante conferir se a URL que você incluiu no elemento rel="canonical" leva a uma página que realmente exista. Os links canônicos que levam a páginas inexistentes complicam o processo de rastreamento e indexação do seu conteúdo e, como resultado, diminuem a eficiência do rastreamento e geram desperdício do crawl budget.`,
            solve: `Revise todos os links canônicos quebrados. Se uma URL canônica se aplica a uma página inexistente, remova-a ou substitua-a por outro recurso.`,
        },
        230: {
            title: `páginas com várias URLs canônicas`,
            about: `Várias tags rel="canonical" com diferentes URLs especificadas para a mesma página confundem os mecanismos de pesquisa, tornando quase impossível identificar qual URL se refere à verdadeira página canônica. Como resultado, os mecanismos de pesquisa provavelmente vão ignorar todos os elementos canônicos ou selecionar o errado. Por isso, é recomendável que você especifique no máximo uma rel="canonical" para uma página.`,
            solve: `Remova todas as URLs canônicas, exceto a que você gostaria que servisse como a verdadeira página canônica.`,
        },
        231: {
            title: `páginas com tag meta refresh`,
            about: `Uma tag meta refresh orienta um navegador da web a redirecionar o usuário a uma página diferente após um dado intervalo. Normalmente, a recomendação é evitar usar uma tag meta refresh, já que é considerada uma técnica ruim, lenta e ultrapassada que pode causar problemas de SEO e usabilidade.`,
            solve: `Analise todas as páginas com tags meta refresh. Se a tag for usada para redirecionar uma página antiga para uma nova, substitua-a por um redirecionamento 301.`,
        },
        232: {
            title: `problemas com arquivos JavaScript e CSS internos quebrados`,
            about: `Um arquivo JavaScript ou CSS quebrado é um problema que merece atenção em seu site. Qualquer script que tenha deixado de funcionar no seu site coloca em risco suas classificações, já que os mecanismos de pesquisa não conseguirão renderizar e indexar corretamente suas páginas. Além disso, arquivos JS e CSS quebrados podem causar erros no site, o que certamente prejudica a experiência do usuário.`,
            solve: `Analise todos os arquivos JavaScript e CSS quebrados hospedados no seu site e corrija quaisquer problemas.`,
        },
        233: {
            title: `subdomínios não são compatíveis com algoritmos de criptografia seguros`,
            about: `Este problema é desencadeado quando nos conectamos com seu servidor web e detectamos que ele usa algoritmos de criptografia antigos ou obsoletos. O uso de algoritmos de criptografia desatualizados é um risco à segurança que pode ter impacto negativo na experiência do usuário e no tráfego de pesquisa. Alguns navegadores podem alertar usuários que acessam seu site sobre o carregamento de conteúdo inseguro. Isso geralmente prejudica a confiança em seu site, impedindo que eles continuem e, como consequência, talvez você perceba uma queda no tráfego de pesquisa orgânica.`,
            solve: `Entre em contato com o administrador do seu site e peça-lhe que atualize os algoritmos de criptografia.`,
        },
        234: {
            title: `arquivos sitemap.xml são grandes demais`,
            about: `Este problema é desencadeado quando o tamanho do seu arquivo sitemap.xml (não compactado) passa de 50 MB ou quando ele contém mais de 50.000 URLs. Quando os arquivos sitemap são grandes demais, existe o risco de que seu site seja rastreado de maneira ineficaz ou até seja ignorado pelos mecanismos de pesquisa.`,
            solve: `Divida seu sitemap em arquivos menores. Você também precisará criar um arquivo de índice de sitemaps e enviá-lo ao Google.
            Não se esqueça de especificar o local dos novos arquivos sitemap.xml no robots.txt.`,
        },
        235: {
            title: `links não puderam ser rastreados (formato de URL incorreto)`,
            about: `Este problema é relatado quando o SiteAuditBot não consegue rastrear um link devido a uma URL inválida.
            Seguem alguns erros comuns:
            - Sintaxe de URL inválida (p.ex.: falta de especificação de um protocolo, especificação de um protocolo inválido, ou uso de barras invertidas (\))
            - Erros de ortografia
            - Caracteres adicionais desnecessários`,
            solve: `Verifique se a URL do link está em conformidade com o padrão e não contém caracteres desnecessários ou erros de digitação.`,
        },
        236: {
            title: `elementos de dados estruturados são inválidos`,
            about: `Este problema ocorre quando elementos de dados estruturados contêm campos que não atendem às diretrizes do Google .
            .A implementação e manutenção corretas dos dados estruturados é importante para ganhar vantagem sobre os concorrentes nos resultados de pesquisa.
            Se a marcação do seu site tiver erros, os rastreadores não conseguirão interpretá-lo corretamente, e você corre o risco de perder a oportunidade de ganhar rich snippets e conquistar rankings mais favoráveis.`,
            solve: `Verifique os dados estruturados das suas páginas com uma ferramenta de validação. Observe que diferentes ferramentas de teste de marcação podem apresentar resultados diferentes.`,
        },
        237: {
            title: `páginas estão sem o valor da largura da viewport`,
            about: `Este problema ocorre se o valor da largura ou escala inicial não estiver presente na metatag viewport usada na sua página.
            A metatag viewport é uma tag HTML que lhe permite controlar o tamanho da janela de visualização (viewport) de uma página e dimensioná-la em dispositivos móveis. Essa tag é indispensável se você quer deixar seu site acessível e otimizado para dispositivos móveis.`,
            solve: `Especifique os valores da largura e escala inicial. Recomendamos que entre em contato com seus desenvolvedores para obter assistência.`,
        },
        238: {
            title: `páginas estão com tempo de carregamento alto`,
            about: `O tempo de carregamento da página é um dos fatores mais importantes de classificação. Quanto mais rápido sua página é carregada, melhor é a classificação que ela pode receber. Além disso, páginas com carregamento rápido influenciam positivamente a experiência do usuário e podem aumentar as suas taxas de conversão.
            Por favor, observe que "tempo de carregamento da página" geralmente se refere à quantidade de tempo que uma página demora para ser totalmente renderizada pelo navegador. Entretanto, o SemrushBot mede apenas o tempo que demora para carregar o código HTML da página  os tempos de carregamento de imagens, JavaScript e CSS não são levados em conta.`,
            solve: `Os principais fatores que afetam negativamente o tempo de carregamento da página HTML são o desempenho do servidor e a densidade do código HTML da página.
            Assim, tente limpar o código HTML da sua página. Se o problema é com o seu servidor Web, você deve considerar mover o site para um serviço de hospedagem com mais recursos.`,
        },
        239: {
            title: `página não pôde ser rastreada`,
            about: `O problema indica que nosso rastreador não conseguiu acessar a página. Há duas possíveis razões:
            - O tempo de resposta do servidor do seu site é superior a 5 segundos
            - Seu servidor recusou acesso às páginas`,
            solve: `Por favor, contate a equipe de suporte técnico da sua hospedagem Web e peça que eles corrijam o problema.`,
        },

    }
};