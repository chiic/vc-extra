import { h, render, DefineComponent } from 'vue';
import { Overlay } from './overlay';
import type { OverlayConfig } from './overlay';
import Container from './container.vue';
import { EmitType } from './enum';

interface ModalOption {
    className?: string;
    title: string;
    width?: number;
    content: DefineComponent;
}

interface EmitData {
    type: EmitType;
}

export class ModalService {
    private root!: Element;
    constructor(options: ModalOption) {
        this.create(options);
    }
    public createOverlay(opts: OverlayConfig): Element {
        const instance = new Overlay(opts);
        return instance.target;
    }


    private create(options: ModalOption) {
        this.root = this.createOverlay({className: options.className});
        const vm = h(Container, {
            ...options,
            emitHandler: (data: EmitData) => this.emitHandler(data),
            onVnodeMounted: (vnode: any) => this.onMoutedHandler(vnode)
        });
        render(vm, this.root);
    }

    private emitHandler(data: EmitData) {
        if (data.type === EmitType.CLOSE) {
            const parent = this.root.parentNode;
            parent!.removeChild(this.root);
        }
    }

    private onMoutedHandler (vnode: any) {
        console.log(vnode);
    }
}

export type { ModalOption, EmitData };

