//######################
//Código de validação de formulário de Cadastro
function verificar() {
  let Nome = document.getElementById('nome').value;
  let DatadeNascimento = document.getElementById('dtnasc').value;
  let CPF = document.getElementById('CPF').value;
  let Nome = document.getElementById('Nome').value;
  let Email = document.getElementById('Email').value;
  let senha = document.getElementById('Senha').value;
  let Rua = document.getElementById('Rua').value;
  let Numero = document.getElementById('Numero').value;
  let Bairro = document.getElementById('Bairro').value;
  let Estado = document.getElementById('Cidade').value;
 
  if (!CPF || !Nome || !Email || !Senha || !Rua || !Numero || !Bairro|| !Estado || !Cidade  ) {
    alert("Campo de preenchimento obrigatório");

  }else{
     alert("Campos preenchidos com sucesso!")
  }
}