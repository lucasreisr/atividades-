let programacao=['Heloa, Maria Rafaela, Maria Eduarda, Diego, João Victor, Gabriel, Luana, Thauanne, Aline e Lucas'];
let seguranca=['Leonardo, Miguel, João Paulo, Rafael'];

seguranca.pop ();
programacao.push("Rafael");

console.log("Time de programação:", programacao);
console.log("###########################")
console.log("Time de segurança:"), seguranca;

let funcionarios = programacao.concat(seguranca);

console.log(funcionarios);
