import * as PIXI from 'pixi.js'
export class GAMECARD extends PIXI.Graphics{
    
    speed: number
    

    constructor() {
       super();


       this.interactive = true
        this.buttonMode = true
        this.on('pointerdown', () => this.cardClicked())

       

        this.beginFill(0xFFB706);

        console.log("Ik werk ")



        this.drawRoundedRect(300, 130, 200, 210, 20);

        // (x, y, width, height, radius)

        
        this.endFill()


        


    }



    update(delta:number) {

        this.rotation += 0.01
        
        
    

    }


    cardClicked() {
        console.log("click!")
        this.rotation = 0


    }
   
}
