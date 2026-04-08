import {Context, Label, Scene, Sprite} from 'dkwdpil';
import {BackButton} from "./back-button";
import {Arrow} from "./arrow";
import {NavButton} from "./nav-button";

export class PlacePart extends Scene {
    _backButton = new BackButton(-29, 15);
    title: Label;

    uiImage: Sprite = new Sprite("menu.png", 0, -2, {size: 28.0});
    arrow: Arrow = new Arrow(-9.8, 6.8, -Math.PI / 4);

    navButtonLeft: NavButton = new NavButton('left', 'gettingStarted');
    navButtonRight: NavButton = new NavButton('right', 'runGame');

    constructor() {
        super();
        this.title = new Label("Teile platzieren", 0, 16, {fontsize: 2.5, horizAlign: 'center'});
    }

    init(c: Context) {
        c.textAlign(c.CENTER, c.CENTER);
        this.navButtonLeft.init(c);
        this.navButtonRight.init(c);
    }

    update(context: Context) {
        context.background(235);
    }
}
