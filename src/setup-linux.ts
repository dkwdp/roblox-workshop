import {Context, Label, AutoDrawScene, Sprite} from 'dkwdpil';
import {BackButton} from "./back-button";

export class SetupLinux extends AutoDrawScene {
    _icon: Sprite = new Sprite("setupLinux", "linux.png", 10, 15, {size: 3.0, imageMode: 'center'});
    _backButton = new BackButton(-29, 15);
    title: Label = new Label("title", "Setup Linux", 0, 16, {fontsize: 2.5, horizAlign: 'center'});

    instruction1: Label = new Label("instruction1", "Terminal öffnen (Windows-Taste drücken + “Terminal” suchen)", -28, 11, {fontsize: 1.5});
    instruction2: Label = new Label("instruction2", "Folgende Befehle eingeben (Anklicken, um Befehl zu kopieren):", -28, 9, {fontsize: 1.5});
    instruction3: Label = new Label("instruction3", "sudo apt install flatpak", -25, 6, {fontsize: 1.2, color: [220, 220, 220]});
    instruction4: Label = new Label("instruction4", "flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo", -25, 4, {fontsize: 1.2, color: [220, 220, 220]});
    instruction5: Label = new Label("instruction5", "flatpak install flathub org.vinegarhq.Vinegar", -25, 2, {fontsize: 1.2, color: [220, 220, 220]});
    instruction6: Label = new Label("instruction6", "Bei Fragen Enter drücken", -22, 0, {fontsize: 1.2});
    instruction7: Label = new Label("instruction7", "flatpak run org.vinegarhq.Vinegar", -25, -2, {fontsize: 1.2, color: [220, 220, 220]});
    instruction8: Label = new Label("instruction8", "Fenster öffnet sich -> Auf Configure drücken", -22, -4, {fontsize: 1.2});
    instruction9: Label = new Label("instruction9", "Renderer auf \"Vulkan\" stellen", -22, -6, {fontsize: 1.2});
    instruction10: Label = new Label("instruction10", "Klicken auf Initialize, kurz warten, dann Starten", -22, -8, {fontsize: 1.2});

    instructionLogin: Label = new Label("instruction11", "Die Login-Daten findest du in der Präsentation.", -26, -12, {fontsize: 1.2});

    copyInstructionText: string | null = null;
    copyInstruction: Label | null = null;
    copyTimepoint: number = 0;

    update(context: Context) {
        super.update(context);

        context.fill(20);
        context.rectMode(context.CORNER);
        context.rect(-25.5, 6.5, 54, 1.8);
        context.rect(-25.5, 4.5, 54, 1.8);
        context.rect(-25.5, 2.5, 54, 1.8);
        context.rect(-25.5, -1.5, 54, 1.8);

        let cursor = "default";
        for (const instruction of [this.instruction3, this.instruction4, this.instruction5, this.instruction7]) {
            if (instruction.hovered)
                cursor = "pointer";
            if (instruction.clicked)
                copyToClipboard(instruction.text).then(() => {
                    if (this.copyInstruction === null) {
                        this.copyInstructionText = instruction.text;
                        this.copyInstruction = instruction;
                        this.copyTimepoint = context.globalTime;
                        instruction.text = "Kopiert!";
                    }
                });
        }
        context.cursor(cursor);

        if (this.copyInstruction && context.globalTime - this.copyTimepoint > 1) {
            this.copyInstruction.text = this.copyInstructionText!;
            this.copyInstructionText = null;
            this.copyInstruction = null;
        }
    }
}

async function copyToClipboard(text: string): Promise<void> {
    try {
        await navigator.clipboard.writeText(text);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}
