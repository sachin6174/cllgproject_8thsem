// Configuration File
const config = {
  title: "Config Based UI",
  elements: [
    {
      type: "heading",
      text: "Welcome to Config Based UI Program",
      size: "large",
    },
    {
      type: "paragraph",
      text: "This is a demo of a Config Based UI implemented in JavaScript.",
    },
    {
      type: "button",
      text: "Click Me!",
      onClick: "handleButtonClick",
    },
  ],
};

// UI Renderer
function renderUI(config) {
  const container = document.getElementById("app");

  config.elements.forEach((element) => {
    let el;

    switch (element.type) {
      case "heading":
        el = document.createElement("h1");
        el.textContent = element.text;
        el.style.fontSize = element.size;
        break;

      case "paragraph":
        el = document.createElement("p");
        el.textContent = element.text;
        break;

      case "button":
        el = document.createElement("button");
        el.textContent = element.text;
        el.addEventListener("click", window[element.onClick]);
        break;

      default:
        console.error("Unknown element type:", element.type);
    }

    if (el) {
      container.appendChild(el);
    }
  });
}

// Event Handler for the button click
function handleButtonClick() {
  alert("Button clicked!");
}

// Render UI based on the configuration
renderUI(config);
