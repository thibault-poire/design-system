import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { Type } from "./button.type";


@customElement("ds-button")
export class Button extends LitElement {
  @property()
  label: string = "";

  @property()
  type?: Type = "button";

  render() {
    return html`<button type=${this.type}>${this.label}</button>`
  }
}