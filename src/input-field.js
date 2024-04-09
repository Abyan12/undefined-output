// Custom element: Input Field
class InputField extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const label = this.getAttribute("label");
    const inputId = this.getAttribute("id");
    shadow.innerHTML = `
      <style>
        label {
          display: block;
          margin-bottom: 5px;
        }
        input {
          padding: 5px;
          width: 100%;
          box-sizing: border-box;
        }
      </style>
      <label for="${inputId}">${label}</label>
      <input type="text" id="${inputId}" />
    `;
  }
}

customElements.define("input-field", InputField);
