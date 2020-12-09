let postsArray = []

function criarPost() {
    let post = {}
    const titulo = document.getElementById("titulo-post")
    const autor = document.getElementById("autor-post")
    const imagem = document.getElementById("imagem-post")
    const texto = document.getElementById("conteudo-post")

    if (titulo.value && autor.value && texto.value !== '') {
        post.titulo = titulo.value
        post.autor = autor.value
        post.imagem = imagem.value
        post.texto = texto.value
        postsArray.push(post)
        let id = postsArray.length-1
        titulo.value = ''
        autor.value = ''
        imagem.value = ''
        texto.value = ''
        sessionStorage.setItem("posts", JSON.stringify(postsArray))
        window.open('posts.html', '_blank')
        return postsArray
    }
    else {
        alert("Por favor, termine de preencher antes de postar!")
    }
}

const btnCriar = document.getElementById("btn-criar")
btnCriar.addEventListener('click', criarPost)

function apertouEnter(event) {
    if (event.key === 'Enter'){
        criarPost()
    }
}
const form = document.getElementById("formulario")
form.addEventListener('keydown', apertouEnter)

