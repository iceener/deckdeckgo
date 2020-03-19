/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DeckgoSlideYoutube {
        "afterSwipe": () => Promise<void>;
        "allowFullscreen": boolean;
        "beforeSwipe": (_enter: boolean, _reveal: boolean) => Promise<boolean>;
        "customActions": boolean;
        "customBackground": boolean;
        "height": number;
        "hideContent": () => Promise<void>;
        "lazyLoadContent": () => Promise<void>;
        "pause": () => Promise<void>;
        "play": () => Promise<void>;
        "resizeContent": () => Promise<void>;
        "revealContent": () => Promise<void>;
        "src": string;
        "toggle": () => Promise<void>;
        "width": number;
    }
}
declare global {
    interface HTMLDeckgoSlideYoutubeElement extends Components.DeckgoSlideYoutube, HTMLStencilElement {
    }
    var HTMLDeckgoSlideYoutubeElement: {
        prototype: HTMLDeckgoSlideYoutubeElement;
        new (): HTMLDeckgoSlideYoutubeElement;
    };
    interface HTMLElementTagNameMap {
        "deckgo-slide-youtube": HTMLDeckgoSlideYoutubeElement;
    }
}
declare namespace LocalJSX {
    interface DeckgoSlideYoutube {
        "allowFullscreen"?: boolean;
        "customActions"?: boolean;
        "customBackground"?: boolean;
        "height"?: number;
        "onSlideDidLoad"?: (event: CustomEvent<void>) => void;
        "src"?: string;
        "width"?: number;
    }
    interface IntrinsicElements {
        "deckgo-slide-youtube": DeckgoSlideYoutube;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "deckgo-slide-youtube": LocalJSX.DeckgoSlideYoutube & JSXBase.HTMLAttributes<HTMLDeckgoSlideYoutubeElement>;
        }
    }
}
