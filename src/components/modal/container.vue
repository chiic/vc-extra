<template>
    <div class="overlay-root-index__10000">
        <div class="overlay-root-mask"></div>
        <div class="overlay-modal-wrap">
            <div class="overlay-modal-content" :style="{ width: width ? width + 'px' : '400px' }">
                <button type="button" aria-label="Close" class="ant-modal-close" @click="close">×</button>
                <div class="overlay-modal-header">{{ title }}</div>
                <div class="overlay-modal-body">
                    <component :is="content"></component>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { defineProps, DefineComponent } from 'vue';
import { EmitType } from './enum';
import type { EmitData } from './modal.service';
const props = defineProps<{
    title: string;
    width?: number;
    content: DefineComponent,
    emitHandler: (data: EmitData) => any;
}>();

const close = () => {
    props.emitHandler({type: EmitType.CLOSE})
}

</script>

<style lang="less">
.overlay-root-index__10000 {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    overflow: auto;
    outline: 0;
    .overlay-root-mask {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1000;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.45);
    }
    .overlay-modal-wrap {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1000;
        overflow: auto;
        outline: 0;
        .overlay-modal-content {
            position: relative;
            background-color: #fff;
            background-clip: padding-box;
            border: 0;
            border-radius: 2px;
            box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
            pointer-events: auto;
            margin: auto;
            margin-top: 100px;
            button {
                position: absolute;
                top: 0;
                right: 0;
                z-index: 10;
                padding: 0;
                color: rgba(0, 0, 0, 0.45);
                font-weight: 700;
                line-height: 1;
                text-decoration: none;
                background: transparent;
                border: 0;
                outline: 0;
                width: 56px;
                height: 56px;
                cursor: pointer;
                transition: color 0.3s;
                font-size: 20px;
            }
            .overlay-modal-header {
                padding: 16px 24px;
                color: rgba(0, 0, 0, 0.85);
                background: #fff;
                border-bottom: 1px solid #f0f0f0;
                border-radius: 2px 2px 0 0;
            }
            .overlay-modal-body {
                padding: 24px;
                font-size: 14px;
                line-height: 1.5715;
                word-wrap: break-word;
            }
        }
    }
}
</style>