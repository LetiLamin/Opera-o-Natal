
var arvorizinha, arvorizinha2, pinheiro, pedra, monstrinho;
var imgArvorizinha, imgArvorizinha2, imgPinheiro, imgPedra, imgMonstrinho;
var ski, skiCaido;
var imgSki, imgSkiCaido;

var grupoArvorizinha, grupoArvorizinha2, grupoPinheiro, grupoPedra, grupoMonstrinho; 

var estadoJogo = "JOGAR";


function preload(){
  imgSki = loadImage("ski.PNG");
  imgSkiCaido= loadImage("skiCaido.PNG");
  
  imgArvorizinha = loadImage("arvorizinha.PNG");
  imgArvorizinha2 = loadImage("arvorizinha2.PNG");
  imgPedra = loadImage("pedra.PNG");
  imgPinheiro = loadImage("pinheiro.PNG");
  imgMonstrinho = loadImage("monstrinho.PNG");
  
}

function setup(){
  
  createCanvas(1200,300);


  ski = createSprite(200,150,15,15);
  ski.addImage(imgSki);
  ski.scale = 0.15;
  


  grupoArvorizinha = new Group();
  grupoArvorizinha2 = new Group();
  grupoPinheiro = new Group();
  grupoPedra = new Group();
  grupoMonstrinho = new Group();
  
}

function draw() {
  background("white");
  
  drawSprites();
  
  if(estadoJogo === "JOGAR"){
    
  
   ski.y = World.mouseY;
  
   edges= createEdgeSprites();
    ski.collide(edges);
  
  
  //criando oponentes continuos
  var selecionar_obstaculo = Math.round(random(1,5));
  
  if (World.frameCount % 150 == 0) {
    if (selecionar_obstaculo == 1) {
      obsArvorizinha();
    } else if (selecionar_obstaculo == 2) {
      obsArvorizinha2();
    } else if (selecionar_obstaculo == 3) {
      obsPedra();
    } else if (selecionar_obstaculo == 4) {
      obsPinheiro();
    } else {
      obsMonstrinho();
    }
  }
  
   if(grupoArvorizinha.isTouching(ski)){
     estadoJogo = "ENCERRAMENTO";
     arvorizinha.velocityY = 0;
     skiCaido = createSprite(arvorizinha.x - 45,arvorizinha.y,15,15);
     ski.visible = false;
      skiCaido.addImage(imgSkiCaido);
      skiCaido.scale = 1;
    }
    
    if(grupoArvorizinha2.isTouching(ski)){
      estadoJogo = "ENCERRAMENTO";
      arvorizinha2.velocityY = 0;
      skiCaido = createSprite(arvorizinha2.x - 45,arvorizinha2.y,15,15);
     ski.visible = false;
      skiCaido.addImage(imgSkiCaido);
      skiCaido.scale = 1;
    }
    
    if(grupoPedra.isTouching(ski)){
      estadoJogo = "ENCERRAMENTO";
      pedra.velocityY = 0;
      skiCaido = createSprite(pedra.x - 45,pedra.y,15,15);
     ski.visible = false;
      skiCaido.addImage(imgSkiCaido);
      skiCaido.scale = 1;
    }
    if(grupoPinheiro.isTouching(ski)){
      estadoJogo = "ENCERRAMENTO";
      pinheiro.velocityY = 0;
      skiCaido = createSprite(pinheiro.x - 45,pinheiro.y,15,15);
     ski.visible = false;
      skiCaido.addImage(imgSkiCaido);
      skiCaido.scale = 1;
    }
    if(grupoMonstrinho.isTouching(ski)){
      estadoJogo = "ENCERRAMENTO";
      monstrinho.velocityY = 0;
      skiCaido = createSprite(monstrinho.x - 45,monstrinho.y,15,15);
     ski.visible = false;
      skiCaido.addImage(imgSkiCaido);
      skiCaido.scale = 1;
    }

} if (estadoJogo === "ENCERRAMENTO") {
    //instruções de reinicialização do jogo em texto aqui

  fill("black");
  textFont("Copperplate Gothic Bold");
  textSize(100);
  text("Game Over!",600,150);
  
  
    grupoArvorizinha.setVelocityXEach(0);
    grupoArvorizinha.setLifetimeEach(-1);
  
    grupoArvorizinha2.setVelocityXEach(0);
    grupoArvorizinha2.setLifetimeEach(-1);
  
    grupoPinheiro.setVelocityXEach(0);
    grupoPinheiro.setLifetimeEach(-1);

    grupoPedra.setVelocityXEach(0);
    grupoPedra.setLifetimeEach(-1);

    grupoMonstrinho.setVelocityXEach(0);
    grupoMonstrinho.setLifetimeEach(-1);



    //condição de gravação para chamada de reset()
  if (keyDown("up")){
    recomecar();
  }
}
}

function obsArvorizinha(){
        arvorizinha =createSprite(1100,Math.round(random(50, 250)));
        arvorizinha.velocityX = -6;
        arvorizinha.addImage(imgArvorizinha);
        arvorizinha.setLifetime=170;
        grupoArvorizinha.add(arvorizinha2);
}

function obsArvorizinha2(){
        arvorizinha2 =createSprite(1100,Math.round(random(50, 250)));
        arvorizinha2.velocityX = -6;
        arvorizinha2.addImage(imgArvorizinha2);
        arvorizinha2.setLifetime=170;
        grupoArvorizinha2.add(arvorizinha2);
}

function obsPedra(){
        pedra =createSprite(1100,Math.round(random(50, 250)));
        pedra.velocityX = -6;
        pedra.addImage(imgPedra);
        pedra.setLifetime=170;
        grupoPedra.add(pedra);
}

function obsPinheiro(){
  pinheiro = createSprite(1100,Math.round(random(50,250)));
  pinheiro.velocityX = -6;
  pinheiro.addImage(imgPinheiro);
  pinheiro.setLifetime = 170;
  grupoPinheiro.add(pinheiro);
}

function obsMonstrinho(){
  monstrinho = createSprite(1100,Math.round(random(50,250)));
  monstrinho.velocityX = -6;
  monstrinho.addImage(imgMonstrinho);
  monstrinho.setLifetime = 170;
  grupoMonstrinho.add(monstrinho);
  monstrinho.scale = 2;
}

// criar função de redefinição aqui
function recomecar(){
  estadoJogo = JOGAR;
  
  ski.addImage(imgSki);
  
  grupoArvorizinha.destroyEach();
  grupoArvorizinha2.destroyEach();
  grupoPedra.destroyEach();
  grupoPinheiro.destroyEach();
  grupoMonstrinho.destroyEach();
   
  distancia = 0;
}


