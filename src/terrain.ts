import {Context, Label, Scene, Sprite} from 'dkwdpil';
import {BackButton} from "./back-button";
import {Arrow} from "./arrow";
import {NavButton} from "./nav-button";

const ELEMENTS = [
    [
        new Arrow(-6, 6.8, -Math.PI / 2),
        new Arrow(-10.1, 5.6, -Math.PI / 2),
        new Label("Um Terrain zu erzeugen, erst auf \"Home\" dann auf \"Terrain\" klicken.", -25, -16, {fontsize: 1.2}),
    ],
    [
        new Arrow(-17.8, 2.8, -Math.PI / 2),
        new Arrow(-18.6, -8.6, -Math.PI / 2),
        new Label("Zu Beginn eignet sich das \"Fill\"-Werkzeug. Dann kann man ein Material wählen.", -25, -16, {fontsize: 1.2}),
    ],
    [
        new Label("Jetzt kann in der Szene die Position des Terrains gewählt werden.", -25, -16, {fontsize: 1.2}),
    ],
    [
        new Arrow(-18, -11.6, -Math.PI / 2),
        new Label("Zum Schluss auf \"Fill\" drücken.", -25, -16, {fontsize: 1.2}),
    ],
    [
        new Arrow(-19.8, 1.0, -Math.PI / 2),
        new Label("Danach kann auch das \"Sculpt\" Werkzeug verwendet werden.", -25, -16, {fontsize: 1.2}),
    ],
]

export class Terrain extends Scene {
    [key: string]: any;

    _backButton = new BackButton(-29, 15);
    title: Label = new Label("Terrain", 0, 16, {fontsize: 2.5, horizAlign: 'center'});

    uiImage: Sprite = new Sprite("terrainUi.png", 0, -2, {size: 25.0});

    navButtonLeft: NavButton | null = null;
    navButtonRight: NavButton | null = null;

    constructor(index: number) {
        super();
        if (index > 1) {
            this.navButtonLeft = new NavButton('left', 'terrain' + (index - 1));
        }
        if (index < 5) {
            this.navButtonRight = new NavButton('right', 'terrain' + (index + 1));
        }
        if (index === 5) {
            this.navButtonRight = new NavButton('right', 'tasks3');
        }
        this.title.text = "Terrain " + index;

        const elements = ELEMENTS[index - 1];
        if (elements)
            for (const elemIndex in elements)
                this["elem" + elemIndex] = elements[elemIndex];
    }

    init(c: Context) {
        c.textAlign(c.CENTER, c.CENTER);
        if (this.navButtonLeft)
            this.navButtonLeft.init(c);
        if (this.navButtonRight)
            this.navButtonRight.init(c);
    }

    update(context: Context) {
        context.background(235);
    }
}
