import {AutoDrawScene, Context, Sprite, Label} from 'dkwdpil';
import {NavButton} from "./nav-button";
import {BackButton} from "./back-button";

export class OutputWindow extends AutoDrawScene {
    _backButton = new BackButton(-29, 15, "startScripting");
    title: Label = new Label("title", "Ausgabe Fenster", 0, 16, {fontsize: 2.5, horizAlign: 'center'});

    navButtonLeft: NavButton = new NavButton('left', 'printing');

    sprite: Sprite = new Sprite("sprite", "outputWindow.png", 13, -2, {size: 26.0});

    explanation1: Label = new Label("explanation1", "Unter \"Fenster\" können wir das", -26, -2, {fontsize: 1.2});
    explanation2: Label = new Label("explanation2", "Ausgabefenster öffnen.", -26, -4, {fontsize: 1.2});
    explanation3: Label = new Label("explanation3", "Jetzt solltest du unten deine", -26, -6, {fontsize: 1.2});
    explanation4: Label = new Label("explanation4", "Nachrichten sehen.", -26, -8, {fontsize: 1.2});
    // explanation5: Label = new Label("explanation5", "Dafür verwenden wir die print() Funktion.", -26, -6, {fontsize: 1.2});
    // explanation6: Label = new Label("explanation6", "Aber wo kann man den Text jetzt sehen?", -26, -8, {fontsize: 1.2});
}
