import {Component, EventEmitter, h, Host, Prop, Event} from '@stencil/core';

import {DeckdeckgoInlineEditorUtils} from '../../../utils/utils';

@Component({
  tag: 'deckgo-ie-style-actions',
  styleUrl: 'style-actions.scss',
  shadow: true,
})
export class StyleActions {
  @Prop()
  disabledTitle: boolean = false;

  @Prop()
  selection: Selection;

  @Prop()
  mobile: boolean;

  @Prop()
  bold: boolean;

  @Prop()
  italic: boolean;

  @Prop()
  underline: boolean;

  @Prop()
  strikethrough: boolean;

  @Event()
  private initStyle: EventEmitter;

  private async styleBold($event: UIEvent): Promise<void> {
    $event.stopPropagation();

    await DeckdeckgoInlineEditorUtils.execCommand(this.selection, 'bold');

    this.initStyle.emit();
  }

  private async styleItalic($event: UIEvent): Promise<void> {
    $event.stopPropagation();

    await DeckdeckgoInlineEditorUtils.execCommand(this.selection, 'italic');

    this.initStyle.emit();
  }

  private async styleUnderline($event: UIEvent): Promise<void> {
    $event.stopPropagation();

    await DeckdeckgoInlineEditorUtils.execCommand(this.selection, 'underline');

    this.initStyle.emit();
  }

  private async styleStrikeThrough($event: UIEvent): Promise<void> {
    $event.stopPropagation();

    await DeckdeckgoInlineEditorUtils.execCommand(this.selection, 'strikeThrough');

    this.initStyle.emit();
  }

  render() {
    const cssClass = this.mobile ? 'deckgo-tools-mobile' : undefined;

    return (
      <Host class={cssClass}>
        <deckgo-ie-action-button
          mobile={this.mobile}
          onAction={($event: CustomEvent<UIEvent>) => this.styleBold($event.detail)}
          disableAction={this.disabledTitle}
          cssClass={this.bold ? 'active' : undefined}
          class="bold">
          <span>B</span>
        </deckgo-ie-action-button>
        <deckgo-ie-action-button
          mobile={this.mobile}
          onAction={($event: CustomEvent<UIEvent>) => this.styleItalic($event.detail)}
          cssClass={this.italic ? 'active' : undefined}
          class="italic">
          <span>I</span>
        </deckgo-ie-action-button>
        <deckgo-ie-action-button
          mobile={this.mobile}
          onAction={($event: CustomEvent<UIEvent>) => this.styleUnderline($event.detail)}
          cssClass={this.underline ? 'active' : undefined}
          class={this.underline ? 'active underline' : 'underline'}>
          <span>U</span>
        </deckgo-ie-action-button>
        <deckgo-ie-action-button
          mobile={this.mobile}
          onAction={($event: CustomEvent<UIEvent>) => this.styleStrikeThrough($event.detail)}
          cssClass={this.strikethrough ? 'active' : undefined}
          class="strikethrough">
          <span style={{'text-decoration': 'line-through'}}>S</span>
        </deckgo-ie-action-button>
      </Host>
    );
  }
}
