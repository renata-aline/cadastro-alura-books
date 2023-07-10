
async function buscaEndereco(){
var consultaCEP = await fetch('https://viacep.com.br/ws/05788300/json/')
var consultaCEPConvertida = await consultaCEP.json();

console.log(consultaCEPConvertida);

}
buscaEndereco();