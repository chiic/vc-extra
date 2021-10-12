interface OverlayConfig {
    className?: string;
}

export class Overlay {
    public target: Element = document.createElement('div');
    constructor(options: OverlayConfig) {
        this.createEle(options);
    }

    private createEle(options: OverlayConfig) {
        if (options.className) {
            this.target.setAttribute('class', options.className);
        }
        document.body.appendChild(this.target);
    }
}

export type { OverlayConfig };
