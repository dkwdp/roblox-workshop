import {Scene, Context, Sprite, Label} from 'dkwdpil';
import {NavButton} from "./nav-button";
import {BackButton} from "./back-button";

export class OutputWindow extends Scene {
    _backButton = new BackButton(-29, 15, "startScripting");
    title: Label = new Label("Ausgabe Fenster", 0, 16, {fontsize: 2.5, horizAlign: 'center'});

    navButtonLeft: NavButton = new NavButton('left', 'printing');

    sprite: Sprite = new Sprite("outputWindow.png", 13, -2, {size: 26.0});

    explanation1: Label = new Label("Unter \"Fenster\" können wir das", -26, -2, {fontsize: 1.2});
    explanation2: Label = new Label("Ausgabefenster öffnen.", -26, -4, {fontsize: 1.2});
    explanation3: Label = new Label("Jetzt solltest du unten deine", -26, -6, {fontsize: 1.2});
    explanation4: Label = new Label("Nachrichten sehen.", -26, -8, {fontsize: 1.2});
    // explanation3: Label = new Label("Dafür verwenden wir die print() Funktion.", -26, -6, {fontsize: 1.2});
    // explanation4: Label = new Label("Aber wo kann man den Text jetzt sehen?", -26, -8, {fontsize: 1.2});

    init(context: Context): void {
        this.navButtonLeft.init(context);
    }

    update(c: Context) {
        c.background(235);
    }
}
