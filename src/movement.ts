import {Context, Label, Scene, Sprite} from 'dkwdpil';
import {BackButton} from "./back-button";
import {Arrow} from "./arrow";
import {NavButton} from "./nav-button";

export class Movement extends Scene {
    _backButton = new BackButton(-29, 15);
    title: Label;

    uiImage: Sprite = new Sprite("menu.png", 0, -2, {size: 28.0});
    arrow: Arrow = new Arrow(-23, 5, -Math.PI / 2);

    navButton: NavButton = new NavButton('right', 'anker');

    explanation1: Label = new Label("Mit diesen Werkzeugen können Blöcke verändert werden.", -26, 0, {fontsize: 1.2});
    explanation2: Label = new Label("Move: Blöcke bewegen", -24, -2, {fontsize: 1.2});
    explanation3: Label = new Label("Scale: Blöcke größer / kleiner machen", -24, -4, {fontsize: 1.2});
    explanation4: Label = new Label("Rotate: Blöcke drehen", -24, -6, {fontsize: 1.2});
    explanation5: Label = new Label("Transform: Alles zusammen", -24, -8, {fontsize: 1.2});

    constructor() {
        super();
        this.title = new Label("Blöcke platzieren", 0, 16, {fontsize: 2.5, horizAlign: 'center'});
    }

    init(c: Context) {
        c.textAlign(c.CENTER, c.CENTER);
        this.navButton.init(c);
    }

    update(context: Context) {
        context.background(235);
    }
}
