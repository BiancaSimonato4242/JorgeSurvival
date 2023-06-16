class Fundo{
    constructor(){
        this.image = loadImage('./IMG_JOGO/fundo2.png');
        this.largura= 1600;
        this.altura= 600;
        this.posX= 0;
        this.posY= 0;
        this.velocidade= 9;
    }
    mova(){
        image(this.image, this.posX, this.posY, this.largura, this.altura);

        if(fundo.posX > -800){
            this.posX = this.posX - this.velocidade;
        }
        else{
            this.posX = 0;
        }
    }
} 