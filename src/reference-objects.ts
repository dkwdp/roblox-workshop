import {AutoDrawScene, Sprite, Label} from 'dkwdpil';
import {NavButton} from "./nav-button";
import {BackButton} from "./back-button";

export class ReferenceObjects extends AutoDrawScene {
    _backButton = new BackButton(-29, 15, "startScripting");
    title: Label = new Label("title", "Objekte verwenden", 0, 16, {fontsize: 2.5, horizAlign: 'center'});

    navButtonRight: NavButton = new NavButton('right', 'changeProperties');

    sprite: Sprite = new Sprite("sprite", "referenceObjectExample.png", 13, -2, {size: 26.0});

    explanation1: Label = new Label("explanation1", "Wir können auch Objekte aus der Welt", -26, 8, {fontsize: 1.2});
    explanation2: Label = new Label("explanation2", "verwenden.", -26, 6, {fontsize: 1.2});
    explanation3: Label = new Label("explanation3", "Klick auf die Ausgabe, um ", -26, 4, {fontsize: 1.2});
    explanation4: Label = new Label("explanation4", "das Objekt zu fokussieren.", -26, 2, {fontsize: 1.2});
    explanation7: Label = new Label("explanation5", "Damit dieses Beispiel funktioniert", -26, -2, {fontsize: 1.2});
    explanation8: Label = new Label("explanation6", "musst du ein Objekt mit Namen \"Part\"", -26, -4, {fontsize: 1.2});
    explanation9: Label = new Label("explanation7", "eingefügt haben.", -26, -6, {fontsize: 1.2});
    explanation5: Label = new Label("explanation8", "Tipp: Rechts im Explorer siehst du", -26, -11, {fontsize: 1.2});
    explanation6: Label = new Label("explanation9", "wie deine Objekte heißen.", -26, -13, {fontsize: 1.2});
}
