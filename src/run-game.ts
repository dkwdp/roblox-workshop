import {Context, Label, Scene, Sprite} from 'dkwdpil';
import {BackButton} from "./back-button";
import {Arrow} from "./arrow";
import {NavButton} from "./nav-button";

export class RunGame extends Scene {
    _backButton = new BackButton(-29, 15);
    title: Label;

    uiImage: Sprite = new Sprite("menu.png", 0, -2, {size: 28.0});
    arrow: Arrow = new Arrow(-14, 0);

    navButton: NavButton = new NavButton('left', 'gettingStarted');

    constructor() {
        super();
        this.title = new Label("Spiel Starten", 0, 16, {fontsize: 2.5, horizAlign: 'center'});
        this.arrow.sprite.rotation = Math.PI * 3 / 4;
    }

    init(c: Context) {
        c.textAlign(c.CENTER, c.CENTER);
        this.navButton.init(c);
    }

    update(context: Context) {
        context.background(235);
    }
}
