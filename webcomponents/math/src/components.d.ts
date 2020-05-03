/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { DeckDeckGoMathOptions, } from "./components/declarations/deckdeckgo-math-options";
export namespace Components {
    interface DeckgoMath {
        "editable": boolean;
        "options": DeckDeckGoMathOptions;
    }
}
declare global {
    interface HTMLDeckgoMathElement extends Components.DeckgoMath, HTMLStencilElement {
    }
    var HTMLDeckgoMathElement: {
        prototype: HTMLDeckgoMathElement;
        new (): HTMLDeckgoMathElement;
    };
    interface HTMLElementTagNameMap {
        "deckgo-math": HTMLDeckgoMathElement;
    }
}
declare namespace LocalJSX {
    interface DeckgoMath {
        "editable"?: boolean;
        "onMathDidChange"?: (event: CustomEvent<HTMLElement>) => void;
        "onMathError"?: (event: CustomEvent<any>) => void;
        "options"?: DeckDeckGoMathOptions;
    }
    interface IntrinsicElements {
        "deckgo-math": DeckgoMath;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "deckgo-math": LocalJSX.DeckgoMath & JSXBase.HTMLAttributes<HTMLDeckgoMathElement>;
        }
    }
}
