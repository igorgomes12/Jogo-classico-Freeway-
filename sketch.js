
function setup() {
  createCanvas(500, 400);
  somTrilha.loop()
}

function draw() {
  background(imagemDaEstrada);
    mostraAtor()
    mostraCarro()
  movimentaCarro()
  movimentaAtor()
  voltaCompletadoCarro()
  verificaColisao()
  incluiPontos()
  marcaPonto()

}





