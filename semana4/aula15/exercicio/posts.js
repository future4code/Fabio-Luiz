postsArray = JSON.parse(sessionStorage.getItem("posts"));

const postagem = document.getElementById("container-de-posts")
let id = postsArray.length-1

for (let i=id; i>-1; i--) {
    if (postsArray[i].imagem.includes('.jpg') || postsArray[i].imagem.includes('.jpeg') || postsArray[i].imagem.includes('.gif') || postsArray[i].imagem.includes('.png')) {
        postagem.innerHTML +=
            `<section id="post-${id}" class="post">\n
            <h1>${postsArray[i].titulo}</h1>\n
            <h2>Escrito por ${postsArray[i].autor}</h2>\n
            <img src="${postsArray[i].imagem}"/>\n
            <p>${postsArray[i].texto}</p>\n
            </section>`
    }
    else {
        postagem.innerHTML +=
            `<section id="post-${id}" class="post">\n
            <h1>${postsArray[i].titulo}</h1>\n
            <h2>Escrito por ${postsArray[i].autor}</h2>\n
            <p>${postsArray[i].texto}</p>\n
            </section>`
    }
}