/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DeckgoSlideVideo {
        "afterSwipe": () => Promise<void>;
        "autoplay": boolean;
        "beforeSwipe": (_enter: boolean, _reveal: boolean) => Promise<boolean>;
        "customActions": boolean;
        "customBackground": boolean;
        "getVideo": () => Promise<HTMLMediaElement>;
        "height": number;
        "hideContent": () => Promise<void>;
        "lazyLoadContent": () => Promise<void>;
        "loop": boolean;
        "muted": boolean;
        "pause": () => Promise<void>;
        "play": () => Promise<void>;
        "playsinline": boolean;
        "resizeContent": () => Promise<void>;
        "revealContent": () => Promise<void>;
        "src": string;
        "toggle": () => Promise<void>;
        "type": string;
        "width": number;
    }
}
declare global {
    interface HTMLDeckgoSlideVideoElement extends Components.DeckgoSlideVideo, HTMLStencilElement {
    }
    var HTMLDeckgoSlideVideoElement: {
        prototype: HTMLDeckgoSlideVideoElement;
        new (): HTMLDeckgoSlideVideoElement;
    };
    interface HTMLElementTagNameMap {
        "deckgo-slide-video": HTMLDeckgoSlideVideoElement;
    }
}
declare namespace LocalJSX {
    interface DeckgoSlideVideo {
        "autoplay"?: boolean;
        "customActions"?: boolean;
        "customBackground"?: boolean;
        "height"?: number;
        "loop"?: boolean;
        "muted"?: boolean;
        "onSlideDidLoad"?: (event: CustomEvent<void>) => void;
        "playsinline"?: boolean;
        "src"?: string;
        "type"?: string;
        "width"?: number;
    }
    interface IntrinsicElements {
        "deckgo-slide-video": DeckgoSlideVideo;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "deckgo-slide-video": LocalJSX.DeckgoSlideVideo & JSXBase.HTMLAttributes<HTMLDeckgoSlideVideoElement>;
        }
    }
}
