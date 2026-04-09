import {Context, Label, Scene, Sprite} from 'dkwdpil';
import {BackButton} from "./back-button";
import {Arrow} from "./arrow";
import {NavButton} from "./nav-button";

export class Anker extends Scene {
    _backButton = new BackButton(-29, 15);
    title: Label = new Label("Blöcke verankern", 0, 16, {fontsize: 2.5, horizAlign: 'center'});

    uiImage: Sprite = new Sprite("menu.png", 0, -2, {size: 28.0});
    arrow: Arrow = new Arrow(13.9, 5.2, -Math.PI / 2);

    navButtonLeft: NavButton = new NavButton('left', 'movement');
    navButtonRight: NavButton = new NavButton('right', 'tasks1');

    explanation1: Label = new Label("Normalerweise fallen Blöcke automatisch runter.", -26, 0, {fontsize: 1.2});
    explanation2: Label = new Label("Um das zu verhindern, können wir Blöcke verankern.", -24, -2, {fontsize: 1.2});

    init(c: Context) {
        c.textAlign(c.CENTER, c.CENTER);
        this.navButtonLeft.init(c);
        this.navButtonRight.init(c);
    }

    update(context: Context) {
        context.background(235);
    }
}
