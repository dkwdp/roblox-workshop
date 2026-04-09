import {Scene, Context, Sprite, Label} from 'dkwdpil';
import {NavButton} from "./nav-button";
import {BackButton} from "./back-button";

export class DisappearingPlattformEvent extends Scene {
    _backButton = new BackButton(-29, 15, "startScripting");
    title: Label = new Label("Plattform verschwinden lassen", 0, 16, {fontsize: 2.5, horizAlign: 'center'});

    navButtonLeft: NavButton = new NavButton('left', 'events');
    navButtonRight: NavButton = new NavButton('right', 'powerUps');

    sprite: Sprite = new Sprite("exampleDisappearingPlattform.png", 11, -2, {size: 16.0});

    explanation1: Label = new Label("Was passiert hier?", -26, 8, {fontsize: 1.2});
    explanation2: Label = new Label("Hier verwenden wir einen kleinen", -26, 6, {fontsize: 1.2});
    explanation3: Label = new Label("Trick, um das Teil verschwinden", -26, 4, {fontsize: 1.2});
    explanation4: Label = new Label("und wieder auftauchen zu lassen.", -26, 2, {fontsize: 1.2});
    explanation5: Label = new Label("Frag gerne nach, wenn du wissen", -26, -2, {fontsize: 1.2});
    explanation6: Label = new Label("möchtest, wie das funktioniert.", -26, -4, {fontsize: 1.2});

    init(context: Context): void {
        this.navButtonLeft.init(context);
        this.navButtonRight.init(context);
    }

    update(c: Context) {
        c.background(235);
    }
}
