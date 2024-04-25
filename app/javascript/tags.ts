import { LitElement, PropertyValueMap, html } from "lit";
import { customElement } from "lit/decorators/custom-element";
import Tagify from "@yaireo/tagify";
import "@yaireo/tagify/dist/tagify.css"

@customElement("tag-input")
export class TagInput extends LitElement {
    private tagify?

    get value() {
        return this.tagify.value;
    }

    protected createRenderRoot(): HTMLElement | DocumentFragment {
        return this;
    }

    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
        const tagInput = <HTMLInputElement>document.querySelector("#editor-tag");
        this.tagify = new Tagify(tagInput);
    }

    protected render() {
        return html`<input id="editor-tag" type="text" class="input !items-center" placeholder="tags"/>`
    }
}