import {Context, InteractiveElement, Sprite} from "dkwdpil";

export class Arrow implements InteractiveElement {
    _interactiveElementMarker: "interactiveElement" = "interactiveElement";

    x: number;
    y: number;

    visible: boolean = true;

    sprite: Sprite;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.sprite = new Sprite("arrow.png", this.x, this.y, {size: 2});
    }


    draw(c: Context) {
        this.sprite.draw(c);
    }

    update(c: Context) {
        this.sprite.size = 2 + Math.sin(c.globalTime * Math.PI * 2 * 0.6) * 0.1;
    }
}
