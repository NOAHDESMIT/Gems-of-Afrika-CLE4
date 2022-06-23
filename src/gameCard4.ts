import * as PIXI from 'pixi.js'
export class GAMECARD4 extends PIXI.Graphics {

    speed: number

    constructor() {

        super();

        this.interactive = true
        this.buttonMode = true
        this.on('pointerdown', () => this.cardClicked())


        this.beginFill(0x86B240);

        // (x, y, width, height, radius) 
        this.drawRoundedRect(300, 400, 200, 210, 20);



        this.endFill()
    }

    update(delta: number) {

        this.rotation += 0.01
    }

    cardClicked() {
        console.log("click!")
        this.rotation = 0
        this.tint = 0x333333;
        // this.scale.x *= 1.25;
    }

}
