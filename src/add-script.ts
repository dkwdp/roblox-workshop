import {Scene, Context, Sprite, Label} from 'dkwdpil';
import {NavButton} from "./nav-button";
import {BackButton} from "./back-button";

export class AddScript extends Scene {
    _backButton = new BackButton(-29, 15, "startScripting");
    title: Label = new Label("Script hinzufügen", 0, 16, {fontsize: 2.5, horizAlign: 'center'});

    navButtonRight: NavButton = new NavButton('right', 'printing');

    sprite: Sprite = new Sprite("addScript.png", 13, -2, {size: 26.0});

    explanation1: Label = new Label("Um ein Script hinzuzufügen:", -28, -2, {fontsize: 1.2});
    explanation2: Label = new Label("Im Explorer neben \"Workspace\" auf + drücken.", -28, -4, {fontsize: 1.2});
    explanation3: Label = new Label("Dann \"Script\" auswählen.", -28, -6, {fontsize: 1.2});

    init(context: Context): void {
        this.navButtonRight.init(context);
    }

    update(c: Context) {
        c.background(235);
    }
}
