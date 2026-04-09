import {Context, Label, Scene, Sprite} from 'dkwdpil';
import {BackButton} from "./back-button";
import {Arrow} from "./arrow";
import {NavButton} from "./nav-button";

export class GettingStarted extends Scene {
    _backButton = new BackButton(-29, 15);
    title: Label;

    uiImage: Sprite = new Sprite("home.png", 0, -2, {size: 28.0});
    arrow: Arrow = new Arrow(-14, 0, Math.PI * 3 / 4);

    navButton: NavButton = new NavButton('right', 'camera');

    constructor() {
        super();
        this.title = new Label("Loslegen!", 0, 16, {fontsize: 2.5, horizAlign: 'center'});
    }

    init(c: Context) {
        c.textAlign(c.CENTER, c.CENTER);
        this.navButton.init(c);
    }

    update(context: Context) {
        context.background(235);
    }
}
