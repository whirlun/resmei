import { MarkdownEditorElement } from "./editor";
import { TagInput } from "./tags";

export {MarkdownEditorElement} from "./editor";
export {TagInput} from "./tags";

function logSubmit(event) {
    event.preventDefault();

  }
  window.addEventListener("load", (event) => {
    const form = <HTMLFormElement>document.getElementById("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const content = <HTMLInputElement>document.getElementById("editor-content");
        const editor= <MarkdownEditorElement>document.getElementsByTagName("markdown-editor")[0];
        content.value = editor.getMarkdown();
        const tag_input = <HTMLInputElement>document.getElementById("tag-input");
        const tags = <TagInput>document.getElementsByTagName("tag-input")[0];
        tag_input.value = JSON.stringify(tags.value);
        form.submit();
    });
  });
  