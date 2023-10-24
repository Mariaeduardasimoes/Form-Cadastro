//Código de validação de formulário de Cadastro

function verificar()

    let nome = document.getElementById('nome').value;
    let fone = document.getElementById('fone').value;
    let DatadeNascimento = document.getElementById('data').value;
    let CPF = document.getElementById('cpf').value;
    let Email = document.getElementById('email').value;
    let Senha = document.getElementById('senha').value;
    let Endereco = document.getElementById('adress').value;
    let Numero = document.getElementById('numero').value;
    let CEP = document.getElementById('cep').value;
    let Complemento = document.getElementById('complement').value;
    let Bairro = document.getElementById('adress2').value;
    let Cidade = document.getElementById('city').value;
    let Estado = document.getElementById('state').value;
    let Telefone0 = document.getElementById('telefone').value;

    if (!nome || !fone|| !DatadeNascimento || !CPF || !Email || !Senha  || !Telefone || !Endereco || !Numero || !CEP  || !Complemento || !Bairro || !Cidade || !Estado ) {
        alert("Por favor preencher todos os campos corretamente");
    }
    else{
        alert("Campos preenchidos com sucesso!");
    }
    else{
        preencherFormulario(addres);
    }
    else{
    alert('CEP incorreto');
    }
