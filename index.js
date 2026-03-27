let bancoNoticias = [

    {
        titulo: "Vacina contra covid altera DNA humano",
        tipo: "fake",
        fonte: "GOV.BR",
        url: "https://www.gov.br/saude/pt-br/assuntos/saude-com-ciencia/noticias/2025/julho/dna-humano-nao-e-alterado-pela-vacina-contra-covid-19"
    },

    {
        titulo: "Brasil registrou queda no desmatamento em 2023",
        tipo: "verdadeira",
        fonte: "GOV.BR",
        url: "https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/noticias/2024/05/desmatamento-na-amazonia-cai-21-8-em-2023"
    },

    {
        titulo: "Casca de limão cura o câncer?",
        tipo: "fake",
        fonte: "G1.GLOBO",
        url: "https://g1.globo.com/fato-ou-fake/noticia/2021/08/19/e-fake-que-casca-do-limao-seja-mais-eficaz-contra-o-cancer-que-quimioterapia.ghtml"
    },

    {
        
        titulo:"O preço da memória RAM aumentou o preço?",
        tipo: "verdadeira",
        fonte: "G1.GLOBO",
        url: "https://g1.globo.com/tecnologia/noticia/2025/12/30/crise-da-memoria-ram-pode-deixar-celulares-notebooks-e-ate-carros-mais-caros-no-brasil-vila-e-a-ia.ghtml"
    }

];

function verificarNoticia() {

    let texto = document.getElementById("noticia").value;

    // 🔹 validação melhorada (remove espaços)
    if (!texto.trim()) {
        alert("Por favor, digite algo no campo...");
        return;
    }

    alert("Vamos analisar a notícia...");

    setTimeout(() => {

        const tituloNoticia = texto.toLowerCase();

        // 🔹 agora aceita título OU URL
        const noticiaPesquisa = bancoNoticias.find(noticia => 
            tituloNoticia.includes(noticia.titulo.toLowerCase()) ||
            tituloNoticia.includes(noticia.url.toLowerCase())
        );

        if (!noticiaPesquisa) {
            alert("Não foi possível confirmar essa notícia. Procure fontes confiáveis.");
            return;
        }

        if (noticiaPesquisa.tipo === "fake") {

            alert(
                "⚠️ Resultado da verificação:\n\nEssa notícia é falsa.\n\nFonte confiável:\n" 
                + noticiaPesquisa.fonte + 
                "\n\nLeia mais:\n" 
                + noticiaPesquisa.url
            );

        } else {

            alert(
                "✅ Resultado da verificação:\n\nEssa notícia é verdadeira.\n\nFonte:\n" 
                + noticiaPesquisa.fonte + 
                "\n\nLeia mais:\n" 
                + noticiaPesquisa.url
            );

        }

    }, 3000);
}
