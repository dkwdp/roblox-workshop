import {Scene, Context, Sprite, Label} from 'dkwdpil';
import {NavButton} from "./nav-button";
import {BackButton} from "./back-button";

export class AddScript extends Scene {
    _backButton = new BackButton(-29, 15, "startScripting");
    title: Label = new Label("Script hinzufügen", 0, 16, {fontsize: 2.5, horizAlign: 'center'});

    navButtonRight: NavButton = new NavButton('right', 'printing');

    init(context: Context): void {
        this.navButtonRight.init(context);
    }

    update(c: Context) {
        c.background(235);
    }
}
