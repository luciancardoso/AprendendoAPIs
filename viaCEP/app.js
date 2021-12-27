const cep = document.getElementById("cep")

cep.addEventListener("change", buscaCep)

async function buscaCep(){
    var url = "https://viacep.com.br/ws/"+cep.value+"/json/"

    const busca = await fetch(url)

    const respostaTexto = await busca.json()

    document.getElementById("rua").value = respostaTexto.logradouro
    document.getElementById("bairro").value = respostaTexto.bairro
    document.getElementById("cidade").value = respostaTexto.localidade
}