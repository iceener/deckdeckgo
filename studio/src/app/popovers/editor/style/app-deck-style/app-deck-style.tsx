import {Component, Element, EventEmitter, h, Prop, State} from '@stencil/core';

import {isIPad} from '@deckdeckgo/utils';

import {TargetElement} from '../../../../utils/editor/target-element';
import {ImageAction} from '../../../../utils/editor/image-action';
import {ImageHelper} from '../../../../helpers/editor/image.helper';

@Component({
  tag: 'app-deck-style',
  styleUrl: 'app-deck-style.scss',
})
export class AppDeck {
  @Element() el: HTMLElement;

  @Prop()
  signIn: EventEmitter<void>;

  @Prop()
  blockSlide: EventEmitter<boolean>;

  @Prop()
  deckDidChange: EventEmitter<HTMLElement>;

  @State()
  private applyToTargetElement: TargetElement = TargetElement.TEXT;

  @State()
  private moreColors: boolean = true;

  @State()
  private deckElement: HTMLElement;

  private imageHelper: ImageHelper;

  async componentWillLoad() {
    this.moreColors = !isIPad();

    this.deckElement = document ? document.querySelector('deckgo-deck') : undefined;

    this.imageHelper = new ImageHelper(this.deckDidChange, this.blockSlide, this.signIn);
  }

  private async closePopover() {
    await (this.el.closest('ion-popover') as HTMLIonPopoverElement).dismiss();
  }

  private async selectApplyToTargetElement($event: CustomEvent<TargetElement>) {
    if ($event && $event.detail) {
      this.applyToTargetElement = $event.detail;
    }
  }

  private onDeckChange() {
    this.deckDidChange.emit(this.deckElement);
  }

  private async onDeckChangeAndClose() {
    this.deckDidChange.emit(this.deckElement);

    const popover = this.el.closest('ion-popover') as HTMLIonPopoverElement;

    await popover.dismiss();
  }

  private async onImageAction($event: CustomEvent<ImageAction>) {
    if ($event && $event.detail) {
      const popover = this.el.closest('ion-popover') as HTMLIonPopoverElement;

      popover.onWillDismiss().then(async () => {
        await this.imageHelper.imageAction(this.deckElement, false, true, $event.detail);
      });

      await popover.dismiss();
    }
  }

  render() {
    return [
      <ion-toolbar>
        <h2>Deck style</h2>
        <ion-router-link slot="end" onClick={() => this.closePopover()}>
          <ion-icon aria-label="Close" src="/assets/icons/ionicons/close.svg"></ion-icon>
        </ion-router-link>
      </ion-toolbar>,
      <app-select-target-element
        textTarget={true}
        background={true}
        transition={true}
        fonts={true}
        onApplyTo={($event: CustomEvent<TargetElement>) => this.selectApplyToTargetElement($event)}></app-select-target-element>,

      this.renderOptions(),
    ];
  }

  private renderOptions() {
    if (this.applyToTargetElement === TargetElement.TEXT) {
      return <app-deck-fonts deckElement={this.deckElement} moreColors={this.moreColors} onFontsChange={() => this.onDeckChange()}></app-deck-fonts>;
    } else if (this.applyToTargetElement === TargetElement.BACKGROUND) {
      return [
        <app-color-text-background
          expander={true}
          colorType={'background'}
          selectedElement={this.deckElement}
          moreColors={this.moreColors}
          deck={true}
          onColorChange={() => this.onDeckChange()}></app-color-text-background>,
        <app-image selectedElement={this.deckElement} deck={true} onAction={($event: CustomEvent<ImageAction>) => this.onImageAction($event)}></app-image>,
      ];
    } else if (this.applyToTargetElement === TargetElement.TRANSITION) {
      return <app-deck-transition deckElement={this.deckElement} onTransitionChange={() => this.onDeckChangeAndClose()}></app-deck-transition>;
    } else {
      return undefined;
    }
  }
}
