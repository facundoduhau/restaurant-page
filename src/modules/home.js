function makeHome() {
  const wrapper = document.querySelector(".wrapper");

  const header = document.createElement("div");
  header.className = "header";

  const name = document.createElement("div");
  name.className = "name";
  name.textContent = "Espresso Oasis";
  header.appendChild(name);

  const buttons = document.createElement("div");
  buttons.className = "buttons";

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

  const message = document.createElement("div");
  message.className = "message";

  const welcome = document.createElement("h1");
  welcome.className = "welcome";
  welcome.textContent =
    "Welcome to Espresso Oasis, your safe place to get a coffee!";
  message.appendChild(welcome);

  const text = document.createElement("p");
  text.className = "text";
  text.textContent =
    "Choose an item from the menu, learn more about us, or just have a good time!";
  message.appendChild(text);
  main.appendChild(message);

  const footer = document.createElement("footer");
  footer.className = "footer";

  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/facundoduhau";
  githubLink.target = "_blank";

  const copyright = document.createElement("p");
  copyright.className = "copyright";
  copyright.textContent = "Copyright © facundoduhau";
  githubLink.appendChild(copyright);
  footer.appendChild(githubLink);

  // Append all sections to the existing wrapper
  wrapper.appendChild(header);
  wrapper.appendChild(main);
  wrapper.appendChild(footer);
}

export { makeHome };