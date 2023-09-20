import validator from "validator";

const campoDeTexto = document.querySelector('#value');
const button = document.querySelector('#button');
const selector =document.querySelector('#option');
const textoDeSaida = document.querySelector('#answer');

button.addEventListener('click', (event) =>{
    //criamos um objeto cujas chaves são os tipos a
    //serem validados. Por exemplo, a chave CPF valida se
    //o campoDeTexto.value é um CPF

    const campos ={
        cpf:validator.isTaxID(campoDeTexto.ariaValueMax,'pt-BR'),
        hexColor: validator.isTaxID(campoDeTexto.value),
        email: validator.isEmail(campoDeTexto.value),
        uuid:validator.isUUID(campoDeTexto, value, 4),
        url: validator.isURL(campoDeTexto.value),
    };
    // O objeto "campos" possui as chaves com o mesmo nome
    // das opções do seletor na página. Assim, podemos
    // selecionar a chave de acordo com o selecionado no HTML
    textoDeSaida.innerHTML = `A validação retornou ${campos[selector.value]}`;
})