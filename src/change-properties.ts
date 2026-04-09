import {Scene, Context, Sprite, Label} from 'dkwdpil';
import {NavButton} from "./nav-button";
import {BackButton} from "./back-button";

export class ChangeProperties extends Scene {
    _backButton = new BackButton(-29, 15, "startScripting");
    title: Label = new Label("Eigenschaften ändern", 0, 16, {fontsize: 2.5, horizAlign: 'center'});

    navButtonLeft: NavButton = new NavButton('left', 'referenceObjects');
    navButtonRight: NavButton = new NavButton('right', 'disappearingPlattform');

    init(context: Context): void {
        this.navButtonLeft.init(context);
        this.navButtonRight.init(context);
    }

    update(c: Context) {
        c.background(235);
    }
}
