let listaNomes = ['Carlos', 'Magnum', 'Thamyris', 'Camila']
let nomes = listaNomes.reduce(function(listaNomes, nomeAtual){
  let primeiraLetra = nomeAtual[0]
    if(listaNomes[primeiraLetra]) {
    listaNomes[primeiraLetra]++
  }
    else {
    listaNomes[primeiraLetra] = 1
  }
    return listaNomes
},{})
console.log(nomes)