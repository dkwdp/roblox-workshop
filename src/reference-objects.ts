import {Scene, Context, Sprite, Label} from 'dkwdpil';
import {NavButton} from "./nav-button";
import {BackButton} from "./back-button";

export class ReferenceObjects extends Scene {
    _backButton = new BackButton(-29, 15, "startScripting");
    title: Label = new Label("Objekte verwenden", 0, 16, {fontsize: 2.5, horizAlign: 'center'});

    navButtonRight: NavButton = new NavButton('right', 'changeProperties');

    sprite: Sprite = new Sprite("referenceObjectExample.png", 13, -2, {size: 26.0});

    explanation1: Label = new Label("Wir können auch Objekte aus der Welt", -26, 8, {fontsize: 1.2});
    explanation2: Label = new Label("verwenden.", -26, 6, {fontsize: 1.2});
    explanation3: Label = new Label("Klick auf die Ausgabe, um ", -26, 4, {fontsize: 1.2});
    explanation4: Label = new Label("das Objekt zu fokussieren.", -26, 2, {fontsize: 1.2});
    explanation7: Label = new Label("Damit dieses Beispiel funktioniert", -26, -2, {fontsize: 1.2});
    explanation8: Label = new Label("musst du ein Objekt mit Namen \"Part\"", -26, -4, {fontsize: 1.2});
    explanation9: Label = new Label("eingefügt haben.", -26, -6, {fontsize: 1.2});
    explanation5: Label = new Label("Tipp: Rechts im Explorer siehst du", -26, -11, {fontsize: 1.2});
    explanation6: Label = new Label("wie deine Objekte heißen.", -26, -13, {fontsize: 1.2});

    init(context: Context): void {
        this.navButtonRight.init(context);
    }

    update(c: Context) {
        c.background(235);
    }
}
