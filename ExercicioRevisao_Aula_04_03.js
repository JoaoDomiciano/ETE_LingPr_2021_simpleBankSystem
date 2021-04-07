var clientes = [
/*Clientes registrados no banco*/
    [nome = "Bruno", código = "123", senha = "123", saldo = 100], 
    [nome = "Joaozinho", código = "456", senha = "456", saldo = 10]
]

var codigo = window.prompt("Digite o seu código");
var senha = window.prompt("Digite sua senha");

/*Login em alguma conta bancaria*/
function procura_cliente(cliente){
return cliente[1] == codigo && cliente[2] == senha
}

var cliente_localizado = (clientes.find(procura_cliente)); /*Cliente atual*/

if (cliente_localizado == null){
  alert("Cliente não localizado");
}

else{
  do{
    var operacao = Number(window.prompt("Qual operação você gostaria de fazer? \n\ 1-Saque \n\ 2-Deposito \n\ 3-Transferencia"));  
    var valor_operacao = Number(window.prompt('Qual o valor da operação?'));

    switch (true){
      case (operacao == 1):
      /*Operação de Saque*/
        if(cliente_localizado[3] >= valor_operacao){
        cliente_localizado[3] = cliente_localizado[3] - valor_operacao;
        console.log("Dinheiro liberado! Seu saldo atual é R$" + cliente_localizado[3] + ",00.");
      }else{
        alert("Saldo insuficiente");
      }
      break;

      case (operacao == 2):
      /*Operação de Deposito*/
        var conta_destino = window.prompt("Qual o codigo da conta destinataria?");
        switch(true){
          case (conta_destino == 123):
            clientes[0][3] = clientes[0][3] + valor_operacao;
            console.log("Dinheiro despositado! O saldo do destinatario é R$" + clientes[0][3] + ",00.");
            break;

          case (conta_destino == 456):
            clientes[1][3] = clientes[1][3] + valor_operacao;
            console.log("Dinheiro despositado! O saldo do destinatario é R$" + clientes[1][3] + ",00.");
            break
          default:
          console.log("Destinatario não encontrado");
        }
      break;

      case (operacao == 3):
      /*Operação de Transferencia*/
        if (cliente_localizado[3] >= valor_operacao){
          cliente_localizado[3] = cliente_localizado[3] - valor_operacao; 
          console.log("Seu saldo atual é R$" + cliente_localizado[3] + ",00.");
          var conta_destino = window.prompt("Qual o codigo da conta destinataria?");
          switch(true){
            case (conta_destino == 123):
              clientes[0][3] = clientes[0][3] + valor_operacao;
              console.log("Dinheiro despositado! O saldo do destinatario é R$" + clientes[0][3] + ",00.");
              break;

            case (conta_destino == 456):
              clientes[1][3] = clientes[1][3] + valor_operacao;
              console.log("Dinheiro despositado! O saldo do destinatario é R$" + clientes[1][3] + ",00.");
              break
            default:
            console.log("Destinatario não encontrado!");
          }
        }else{
            alert("Saldo insuficiente");
        }
        break;
      }
      var loop_operacao = Number(window.prompt("Gostaria de fazer outra operação?  \n\ 1-Sim \n\ 2-Não"));
  }while(loop_operacao == 1);
  console.log("Obrigado, tenha um bom dia!")
}

