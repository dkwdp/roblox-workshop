import {Sprite, Label, AutoDrawScene} from 'dkwdpil';
import {NavButton} from "./nav-button";
import {BackButton} from "./back-button";

export class Events extends AutoDrawScene {
    _backButton = new BackButton(-29, 15, "startScripting");
    title: Label = new Label("title", "Ereignisse", 0, 16, {fontsize: 2.5, horizAlign: 'center'});

    navButtonRight: NavButton = new NavButton('right', 'disappearingPlattformEvents');

    sprite: Sprite = new Sprite("sprite", "exampleEvent.png", 13, -2, {size: 14.0});

    explanation1: Label = new Label("explanation1", "Events sind Teile deines Scripts,", -26, 8, {fontsize: 1.2});
    explanation2: Label = new Label("explanation2", "die nur zu bestimmten Zeitpunkten", -26, 6, {fontsize: 1.2});
    explanation3: Label = new Label("explanation3", "gemacht werden.", -26, 4, {fontsize: 1.2});
    explanation4: Label = new Label("explanation4", "Der Code in Zeile 2 wird nur ausgeführt,", -26, 0, {fontsize: 1.2});
    explanation5: Label = new Label("explanation5", "wenn etwas die SpawnLocation berührt.", -26, -2, {fontsize: 1.2});
    explanation6: Label = new Label("explanation6", "Außerdem sehen wir, was diese berührt.", -26, -4, {fontsize: 1.2});
}
