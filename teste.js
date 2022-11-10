let arr = [1,2,3,4]
let soma = arr.reduce(function(acumulador, atual, i, arre){
  console.log(arre)
  return acumulador + atual
})
console.log(soma)
//outro exemplo

let lista = ['Carlos', 'Magnum', 'Adilma', 'Camila', 'Thamyris']
  let letras = lista.reduce(function(acumulador, nomeAtual){
    let primeiraLetra = nomeAtual[0]
      if(acumulador[primeiraLetra]){
        acumulador[primeiraLetra]++
}
      else {
        acumulador[primeiraLetra] = 1
}
      return acumulador
}, {})
console.log(letras)

//outro exemplo

let nomes = ['Carlos', 'Magnum', 'Adilma', 'Camila', 'Thamyris', 'Magnum', 'Camila']
  let contagem = nomes.reduce(function(acumulador, nomeAtual){
      if(acumulador[nomeAtual]){
        acumulador[nomeAtual]++
}
      else {
        acumulador[nomeAtual] = 1
}
      return acumulador
}, {})
console.log(contagem) 