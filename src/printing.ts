import {AutoDrawScene, Context, Sprite, Label} from 'dkwdpil';
import {NavButton} from "./nav-button";
import {BackButton} from "./back-button";

export class Printing extends AutoDrawScene {
    _backButton = new BackButton(-29, 15, "startScripting");
    title: Label = new Label("title", "Text anzeigen", 0, 16, {fontsize: 2.5, horizAlign: 'center'});

    navButtonLeft: NavButton = new NavButton('left', 'addScript');
    navButtonRight: NavButton = new NavButton('right', 'outputWindow');

    sprite: Sprite = new Sprite("sprite", "printingExample.png", 13, -2, {size: 26.0});

    explanation1: Label = new Label("explanation1", "Das einfachste was man machen kann", -26, 2, {fontsize: 1.2});
    explanation2: Label = new Label("explanation2", "ist einen Text auszugeben.", -26, 0, {fontsize: 1.2});
    explanation3: Label = new Label("explanation3", "Dafür verwenden wir die print() Funktion.", -26, -2, {fontsize: 1.2});
    explanation4: Label = new Label("explanation4", "Aber wo kann man den Text jetzt sehen?", -26, -4, {fontsize: 1.2});
    explanation5: Label = new Label("explanation5", "Tipp: Klicke auf das Bild, um", -26, -8, {fontsize: 1.2});
    explanation6: Label = new Label("explanation6", "den Quelltext zu kopieren.", -26, -10, {fontsize: 1.2});

    copiedTimepoint: number | null = null;

    update(c: Context) {
        if (this.sprite.clicked) {
            copyToClipboard("print(\"Dein Text\")").then(() => {
                this.explanation5.text = "Kopiert!";
                this.explanation6.visible = false;
                this.copiedTimepoint = c.globalTime;
            })
        }

        if (this.copiedTimepoint !== null && c.globalTime - this.copiedTimepoint > 1) {
            this.copiedTimepoint = null;
            this.explanation5.text = "Tipp: Klicke auf das Bild, um";
            this.explanation6.visible = true;
        }
    }
}

export async function copyToClipboard(text: string): Promise<void> {
    try {
        await navigator.clipboard.writeText(text);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}
