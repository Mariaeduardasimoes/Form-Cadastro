//Código de validação de formulário de Cadastro

function verificar()

    let nome = document.getElementById('nome').value;
    let DatadeNascimento = document.getElementById('data').value;
    let CPF = document.getElementById('cpf').value;
    let Email = document.getElementById('email').value;
    let Senha = document.getElementById('senha').value;
    let Endereco = document.getElementById('adress').value;
    let Numero = document.getElementById('numero').value;
    let CEP = document.getElementById('cep').value;
    let Bairro = document.getElementById('bairro').value;
    let Cidade = document.getElementById('cidade').value;
    let Estado = document.getElementById('estado').value;
    let Telefone0 = document.getElementById('telefone').value;

    if (!nome ||  !DatadeNascimento || !CPF || !Email || !Senha  || !Telefone || !Endereco || !Numero || !CEP  || !Bairro || !Cidade || !Estado ) {
        alert("Por favor preencher todos os campos corretamente");
    }
    else{
        alert("Campos preenchidos com sucesso!");
    }
'use restrict';//Modo restrito

//Limpar formulário
const limparFormulario = (endereco) =>{
    document.getElementById('rua').value ='';
    document.getElementById('bairro').value ='';
    document.getElementById('cidade').value ='';
    document.getElementById('estado').value ='';
}

//verifica se o CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

//Preenche campos do formulário
const preencherFormulario = (endereco) =>{
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value =endereco.uf;
}
/*
Função para consumo de API
ultilizando a função do tipo assincrona
*/
const pesquisarcep = async() =>{
    limparFormulario();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;
    
    if(cepValido(cep.value)){
        const dados = await fetch(url);
        const addres = await dados.json(); 

        if(addres.hasOwnProperty('erro')){
            alert('CEP não encontrado');
        }else{
            preencherFormulario(addres);
        }
    }else{
        alert('CEP incorreto')
    
    }
}

//Adiciona um evento DOM, no input CEP 
document.getElementById('cep').addEventListener('focusout', pesquisarcep);


