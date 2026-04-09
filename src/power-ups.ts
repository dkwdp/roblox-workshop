import {Scene, Context, Sprite, Label} from 'dkwdpil';
import {NavButton} from "./nav-button";
import {BackButton} from "./back-button";
import {copyToClipboard} from "./printing";

const COPY_TEXT = `game.Workspace.Part.Touched:Connect(function(p)
\tlocal character = p.Parent
\tlocal humanoid = character:FindFirstChild("Humanoid")

\tif humanoid then
\t\thumanoid.WalkSpeed = 50
\tend
end)
`

export class PowerUps extends Scene {
    _backButton = new BackButton(-29, 15, "startScripting");
    title: Label = new Label("Power Ups", 0, 16, {fontsize: 2.5, horizAlign: 'center'});

    navButtonLeft: NavButton = new NavButton('left', 'disappearingPlattformEvents');

    sprite: Sprite = new Sprite("powerUp.png", 11, -2, {size: 16.0});

    explanation1: Label = new Label("Wir können auch ganz andere.", -26, 8, {fontsize: 1.2});
    explanation2: Label = new Label("Dinge tun.", -26, 6, {fontsize: 1.2});
    explanation3: Label = new Label("Hier wird der Spieler schnell,", -26, 4, {fontsize: 1.2});
    explanation4: Label = new Label("sobald er einen bestimmten", -26, 2, {fontsize: 1.2});
    explanation5: Label = new Label("Block berührt.", -26, 0, {fontsize: 1.2});

    explanation6: Label = new Label("Du kannst wieder auf das Bild klicken,", -26, -4, {fontsize: 1.2});
    explanation7: Label = new Label("um den Quelltext zu kopieren.", -26, -6, {fontsize: 1.2});

    copiedTimepoint: number | null = null;

    init(context: Context): void {
        this.navButtonLeft.init(context);
    }

    update(c: Context) {
        c.background(235);

        if (this.sprite.clicked) {
            copyToClipboard(COPY_TEXT).then(() => {
                this.explanation6.text = "Kopiert!";
                this.explanation7.visible = false;
                this.copiedTimepoint = c.globalTime;
            })
        }

        if (this.copiedTimepoint !== null && c.globalTime - this.copiedTimepoint > 1) {
            this.copiedTimepoint = null;
            this.explanation6.text = "Du kannst wieder auf das Bild klicken,";
            this.explanation7.visible = true;
        }
    }
}
