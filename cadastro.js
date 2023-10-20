//######################
//Código de validação de formulário de Cadastro
function verificar() {
  let CPF = document.getElementById('CEP').value;
  let Nome = document.getElementById('Nome').value;
  let Email = document.getElementById('Email').value;
  let Senha = document.getElementById('Senha').value;
  let Rua = document.getElementById('Rua').value;
  let Numero = document.getElementById('Numero').value;
  let Bairro = document.getElementById('Bairro').value;
  let Cidade = document.getElementById('Cidade').value;
 
  if (!CEP || !Nome || !Email || !Senha || !Rua || !Numero || !Bairro || !Estado || !Cidade  ) {
    alert("Campo de preenchimento obrigatório");

  }else{
     alert("Campos preenchidos com sucesso!")
  }
}