class Pedra{
    constructor(){
        this.image = pedra;
        this.largura= 130;
        this.altura= 100;
        this.posX= 800;
        this.posY= 470;
        this.velocidade= 9;
        this.yInicial = this.posY;
        this.yFinal = this.posY + this.altura;
        this.xInicial = this.posX;
        this.xFinal = this.posX + this.largura;
    }
    mova(){
        image(this.image, this.posX, this.posY, this.largura, this.altura);

        if(pedra.posX > 0){
            this.posX = this.posX - this.velocidade;
        }
        else{
            this.posX = 800;
        }
        this.yInicial = this.posY;
        this.yFinal = this.posY + this.altura;
        this.xInicial = this.posX;
        this.xFinal = this.posX + this.largura;
    }
}