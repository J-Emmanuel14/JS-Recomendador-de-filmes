// ação, família, super-herói

// Carros, livre, ação
// Rei Leão, livre, família
// Operação Big Hero, livre, todos

// Vingadores Ultimato, 12, ação/super-herói
// Tudo bem no Natal que vem, 12, família
// Top Gun: Maverick, 12, ação

let campoIdade;
let gostaAcao;
let gostaHeroi;
let gostaFamilia;
let infantil;
let finalizado;

function setup() {
  createCanvas(400, 400);
  createElement("h5")
  createSpan ('Sua idade: ')
  campoIdade = createInput();
  campoAcao = createCheckbox("Gosta de filmes de ação?")
  campoHeroi = createCheckbox('Gosta de filmes de Super-Herói?')
  campoFamilia = createCheckbox('Gosta de filmes de família?')
  campoFinalizado = createCheckbox('Você terminou suas preferências?')
  campoInfantil = createCheckbox('Prefere um filme infantil?')
}

function draw() {
  fill ('#00BCD4')
  background('white');
  let idade = campoIdade.value()
  let gostaAcao = campoAcao.checked()
  let gostaHeroi = campoHeroi.checked()
  let gostaFamilia = campoFamilia.checked()
  let gostaInfantil = campoInfantil.checked()
  let pesquisaFinal = campoFinalizado.checked()
  let recomendacao = geraRecomendacao(idade, gostaAcao, gostaHeroi, gostaFamilia, gostaInfantil, pesquisaFinal)
  textAlign(CENTER, CENTER)
  textSize(20)
  textFont('Poppins')
  text(recomendacao, width/2, height/2);
}

function geraRecomendacao(idade, gostaAcao, gostaHeroi, gostaFamilia, gostaInfantil, pesquisaFinal){
  campoInfantil.hide()
  campoAcao.show()
  campoHeroi.show()
  campoFamilia.show()
  if (pesquisaFinal){
    campoAcao.hide()
    campoHeroi.hide()
    campoFamilia.hide()
    if (idade >= 12) {
    campoInfantil.show()
      if (gostaInfantil && gostaHeroi && gostaFamilia){
        return "OPERAÇÃO BIG HERO"
        }
      if (gostaInfantil && gostaHeroi){
        return "HOMEM ARANHA: NO ARANHAVERSO"
        }
      if (gostaHeroi){
        return "VINGADORES: ULTIMATO"}
      if (gostaInfantil && gostaAcao){
        return "CARROS"
        }
      if (gostaInfantil){
        return "REI LEÃO"
        }
      if (gostaAcao){
        return "TOP GUN: MAVERICK";
        }
      if (gostaFamilia){
        return "TUDO BEM NO NATAL QUE VEM"
        }
        else {
          return "NENHUM FILME RECOMENDADO"
        }
    }
  else {
      if (gostaHeroi && gostaFamilia){
        return "OPERAÇÃO BIG HERO"
        }
      if (gostaAcao && gostaHeroi){
        return "HOMEM ARANHA NO ARANHAVERSO"
        }
      if (gostaAcao){
        return "CARROS"
        }
      if (gostaFamilia){
          return "REI LEÃO"
        }
      else{
        return "NENHUM FILME RECOMENDADO"
        }
    }
  }
  else {
    background('black')
    fill('white')
    return "RECOMENDADOR DE FILMES"
  }
}
