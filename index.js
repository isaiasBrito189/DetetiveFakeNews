let bancoNoticias = [

    {
        titulo: "Vacina contra covid altera DNA humano",
        tipo: "fake",
        fonte: "Agência Lupa",
        url: "https://lupa.uol.com.br"
    },

    {
        titulo: "Brasil registrou queda no desmatamento em 2023",
        tipo: "verdadeira",
        fonte: "BBC Brasil",
        url: "https://www.bbc.com/portuguese"
    },

    {
        titulo: "Beber água com limão cura câncer",
        tipo: "fake",
        fonte: "Aos Fatos",
        url: "https://www.aosfatos.org"
    }

];

function verificarNoticia() {

    let texto = document.getElementById("noticia").value;

    if (!texto) {
        alert("Por favor, digite uma notícia.");
        return;

    } 

    alert("Vamos analisar a notícia...");

    setTimeout(() => {
        const tituloNoticia = texto.toLowerCase();
        const noticiaPesquisa = bancoNoticias.find(noticia => tituloNoticia.includes(noticia.titulo.toLowerCase()));

        if(!noticiaPesquisa){
            alert("A notícia não foi identificada, por favor tente novamente.");
            return;
        }

        if(noticiaPesquisa.tipo === "fake"){
            alert(
                "⚠️ Resultado da verificação:\n\nEssa notícia é falsa.\n\nFonte confiável:\n" + noticiaPesquisa.fonte + "\n\nLeia Mais:\n" + noticiaPesquisa.url
            );
            return;
        }else{
            alert(
                "✅ Resultado da verificação:\n\nEssa notícia é verdadeira.\n\nFonte:\n" + noticiaPesquisa.fonte + "\n\nLeia Mais:\n" + noticiaPesquisa.url
            );
            return;
        }

    }, 3000);

    return;
}