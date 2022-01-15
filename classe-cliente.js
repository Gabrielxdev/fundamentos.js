class Cliente {
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor) {
        this.saldo += valor
    }

    exibirSaldo() {
        console.log(this.saldo)
    }
}
  
 class ClientePoupanca extends Cliente {
     constructor(nome,email,cpf,saldo,saldoPoupanca){
         super(nome,email,cpf,saldo)
         this.saldoPoupanca = saldoPoupanca
     }

     depositarPoupanca(valor){
         this.saldoPoupanca += valor
     }
 }

   const andre = new ClientePoupanca('Andre', 'a@email.com', '234343244', 100, 300)

   console.log(andre)

   andre.depositar(100)
   andre.depositarPoupanca(100)

   console.log(andre)