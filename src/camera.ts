import {Context, Label, Scene, Sprite} from 'dkwdpil';
import {BackButton} from "./back-button";
import {Arrow} from "./arrow";
import {NavButton} from "./nav-button";

export class Camera extends Scene {
    _backButton = new BackButton(-29, 15);
    title: Label = new Label("Kamera bewegen", 0, 16, {fontsize: 2.5, horizAlign: 'center'});

    uiImage: Sprite = new Sprite("menu.png", 0, -2, {size: 28.0});

    navButtonLeft: NavButton = new NavButton('left', 'gettingStarted');
    navButtonRight: NavButton = new NavButton('right', 'placePart');

    explanation1: Label = new Label("Kamera drehen: Rechts-Klick + Maus bewegen.", -26, -2, {fontsize: 1.2});
    explanation2: Label = new Label("Kamera bewegen: WASD", -26, -4, {fontsize: 1.2});
    explanation3: Label = new Label("Nach unten / oben: Q / E", -26, -6, {fontsize: 1.2});
    explanation4: Label = new Label("Schnell bewegen: Mausrad scrollen", -26, -8, {fontsize: 1.2});

    init(c: Context) {
        c.textAlign(c.CENTER, c.CENTER);
        this.navButtonLeft.init(c);
        this.navButtonRight.init(c);
    }

    update(context: Context) {
        context.background(235);
    }
}
