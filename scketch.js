var pedra;
var jorge;
var fundo;
var mJorge = "CORRENDO"; 
var conta = 0;
var pontuacao = 0;

class Jorge{
    constructor(){
        this.image = jorge;
        this.largura= 170;
        this.altura= 130;
        this.posX= 50;
        this.posY= 460;
        this.velocidade= 5;
        this.yInicial = this.posY;
        this.yFinal = this.posY + this.altura;
        this.xInicial = this.posX;
        this.xFinal = this.posX + this.largura;
    }

    mova(){
        image(this.image, this.posX, this.posY, this.largura, this.altura);

        if(mJorge == "PULANDO" && this.posY > 210){
            this.posY -= this.velocidade
        }
      if(this.posY == 210){
        mJorge = "CORRENDO"
      }  
    
    if(mJorge == "CORRENDO" && this.posY < 400){
        this.posY += this.velocidade
        }
        this.yInicial = this.posY;
        this.yFinal = this.posY + this.altura;
        this.xInicial = this.posX;
        this.xFinal = this.posX + this.largura;
    }
}


function preload(){
    pedra = loadImage('./IMG_JOGO/pedra.png');
    jorge = loadImage('./IMG_JOGO/jorge.gif');

    fundo = new Fundo();
    jorge = new Jorge();
    pedra = new Pedra();
}

function keyPressed(){
    if(keyCode==32){
      mJorge = "PULANDO";
    }   
}

function setup(){
    createCanvas(800, 600).parent("jogo");
    frameRate(60);
}

function mousePressed(){
    mJorge = "PULANDO";
}

function draw(){

    background(0);
    fundo.mova();
    jorge.mova();
    pedra.mova();

conta++

if(conta == 30){
    pontuacao++
    conta=0
}

     if (
        //if que faz acontecer a colisao dos objetos
        jorge.xInicial < pedra.xFinal &&
        jorge.xFinal > pedra.xInicial &&
        jorge.yInicial < pedra.yFinal &&
        jorge.yFinal > pedra.yInicial) {

          pedra.posX = 800;
          pontuacao = 0;
      }

      fill(255,255,255);
      text("pontuação:" + pontuacao, 100, 20);
}