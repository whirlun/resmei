import Editor from "@toast-ui/editor";
import '@toast-ui/editor/dist/toastui-editor.css'; 
import { LitElement, PropertyValueMap, html } from "lit";
import { customElement, property } from "lit/decorators";

@customElement("markdown-editor")
export class MarkdownEditorElement extends LitElement {
    @property({type: String})
    initValue = ""

    private editor?: Editor

    getMarkdown() {
        return this.editor.getMarkdown();
    }

    protected createRenderRoot(): HTMLElement | DocumentFragment {
        return this;
    }

    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
        this.editor = new Editor({
            el: document.querySelector("#editor"),
            initialEditType: "markdown",
            previewStyle: "tab",
            height: "500px",
            initialValue: this.initValue,
        })
    }

    protected render() {
        return html`
            <div id="editor"></div>
        `
    }
}