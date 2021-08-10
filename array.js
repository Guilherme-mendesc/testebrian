
let Array = [1,[2, 3],4, [5, 6]].reduce(
    function(acumulador, valorAtual) {
      return acumulador.concat(valorAtual)
    },
    []
  )
  console.log(Array)
  