import {Context, InteractiveElement} from "dkwdpil";

const WIDTH = 4;
const HEIGHT = 8;

export class NavButton implements InteractiveElement {
    _interactiveElementMarker: "interactiveElement" = "interactiveElement";
    x: number;
    y: number;
    dir: 'left' | 'right';
    nextScene: string;

    visible: boolean = true;

    constructor(dir: 'left' | 'right', nextScene: string) {
        this.x = 0;
        this.y = 0;
        this.dir = dir;
        this.nextScene = nextScene;
    }

    init(_c: Context) {
        this.x = 29.5;
        if (this.dir === 'left')
            this.x *= -1;
    }

    draw(c: Context) {
        const p = c.p;

        // Draw gray rectangle
        c.fill(180);
        c.noStroke();
        c.rectMode(c.CENTER);
        c.rect(this.x, this.y, WIDTH, HEIGHT);

        // Draw a white arrow
        c.fill(255);
        c.noStroke();
        p.beginShape();
        const size = 1;
        if (this.dir === 'left') {
            p.vertex(this.x + size, this.y - size);
            p.vertex(this.x - size, this.y);
            p.vertex(this.x + size, this.y + size);
        } else {
            p.vertex(this.x - size, this.y - size);
            p.vertex(this.x + size, this.y);
            p.vertex(this.x - size, this.y + size);
        }
        p.endShape(p.CLOSE);
    }

    update(c: Context) {
        for (const evt of c.events) {
            if (evt.kind === 'mousedown') {
                if (evt.x > this.x - WIDTH / 2 && evt.x < this.x + WIDTH / 2 && evt.y > this.y - HEIGHT / 2 && evt.y < this.y + HEIGHT / 2) {
                    c.nextScene = this.nextScene;
                }
            }
        }
    }
}
