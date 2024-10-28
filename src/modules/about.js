import { makeHome } from "./home";
import { makeMenu } from "./menu";

function makeAbout() {
  // Clear the wrapper
  const wrapper = document.querySelector(".wrapper");
  wrapper.innerHTML = "";

  // Create header
  const header = document.createElement("div");
  header.className = "header";

  // Create name div
  const name = document.createElement("div");
  name.className = "name";
  name.textContent = "Espresso Oasis";
  header.appendChild(name);

  // Create buttons container
  const buttons = document.createElement("div");
  buttons.className = "buttons";

  // Create individual buttons
  const buttonNames = ["Home", "Menu", "About"];
  buttonNames.forEach((btnName) => {
    const button = document.createElement("button");
    button.className = `button ${btnName.toLowerCase()}`;
    button.textContent = btnName;
    buttons.appendChild(button);
  });
  header.appendChild(buttons);

  const main = document.createElement("main");
  main.className = "main";

  const footer = document.createElement("footer");
  footer.className = "footer";
  // Create github link
  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/facundoduhau";
  githubLink.target = "_blank";

  // Create copyright paragraph
  const copyright = document.createElement("p");
  copyright.className = "copyright";
  copyright.textContent = "Copyright © facundoduhau";
  githubLink.appendChild(copyright);
  footer.appendChild(githubLink);

  // Append all sections to the existing wrapper
  wrapper.appendChild(header);
  wrapper.appendChild(main);
  wrapper.appendChild(footer);

  const homeButton = document.querySelector(".home");
  homeButton.addEventListener("click", makeHome);

  const menuButton = document.querySelector(".menu");
  menuButton.addEventListener("click", makeMenu);
}

export { makeAbout };
