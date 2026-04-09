import {Context, Label, Scene, Sprite} from 'dkwdpil';
import {BackButton} from "./back-button";
import {Arrow} from "./arrow";
import {NavButton} from "./nav-button";

export class Tasks2 extends Scene {
    _backButton = new BackButton(-29, 15);
    title: Label = new Label("Zeit zum Arbeiten", 0, 16, {fontsize: 2.5, horizAlign: 'center'});

    workTime: Sprite = new Sprite("worktime.png", 20, 0, {size: 14});

    navButton: NavButton = new NavButton('left', 'attributes');

    explanation1: Label = new Label("Ein paar Ideen:", -22, 4, {fontsize: 1.5});
    explanation2: Label = new Label("- Blöcke einfärben", -22, 1, {fontsize: 1.5});
    explanation3: Label = new Label("- Blöcke erstellen, durch die man durchfällt", -22, -2, {fontsize: 1.5});
    explanation4: Label = new Label("- Unsichtbare Blöcke verstecken", -22, -5, {fontsize: 1.5});

    init(c: Context) {
        c.textAlign(c.CENTER, c.CENTER);
        this.navButton.init(c);
    }

    update(context: Context) {
        context.background(235);
    }
}
