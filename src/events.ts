import {Scene, Context, Sprite, Label} from 'dkwdpil';
import {NavButton} from "./nav-button";
import {BackButton} from "./back-button";

export class Events extends Scene {
    _backButton = new BackButton(-29, 15, "startScripting");
    title: Label = new Label("Ereignisse", 0, 16, {fontsize: 2.5, horizAlign: 'center'});

    navButtonRight: NavButton = new NavButton('right', 'disappearingPlattformEvents');

    sprite: Sprite = new Sprite("exampleEvent.png", 13, -2, {size: 14.0});

    explanation1: Label = new Label("Events sind Teile deines Scripts,", -26, 8, {fontsize: 1.2});
    explanation2: Label = new Label("die nur zu bestimmten Zeitpunkten", -26, 6, {fontsize: 1.2});
    explanation3: Label = new Label("gemacht werden.", -26, 4, {fontsize: 1.2});
    explanation4: Label = new Label("Der Code in Zeile 2 wird nur ausgeführt,", -26, 0, {fontsize: 1.2});
    explanation5: Label = new Label("wenn etwas die SpawnLocation berührt.", -26, -2, {fontsize: 1.2});
    explanation6: Label = new Label("Außerdem sehen wir, was diese berührt.", -26, -4, {fontsize: 1.2});

    init(context: Context): void {
        this.navButtonRight.init(context);
    }

    update(c: Context) {
        c.background(235);
    }
}
