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
  main.className = "main main-about";

  const mapWrapper = document.createElement("div");
  mapWrapper.classList = "map-wrapper";
  main.appendChild(mapWrapper);

  const contactMessage = document.createElement("div");
  contactMessage.innerHTML = "You can contact us through this options:";

  const contactPhone = document.createElement("div");
  contactPhone.classList = "phone-number";
  contactPhone.innerHTML = "+12 3456-7891";

  const contactLink = document.createElement("a");
  contactLink.classList = "contact-link";
  contactLink.target = "_blank";
  contactLink.href = "https://github.com/facundoduhau";

  const contactGithub = document.createElement("div");
  contactGithub.innerHTML = "facundoduhau";

  const githubIcon = document.createElement("i");
  githubIcon.classList = "fa-brands fa-github";

  const githubDiv = document.createElement("div");
  githubDiv.classList = "github-div";

  const contactMap = document.createElement("iframe");
  contactMap.classList = "contact-map";
  contactMap.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1644.7646525956234!2d-58.49997399732249!3d-34.464094451552185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb1c5819e3893%3A0xbee01b9d20e4fcb1!2sEl%20Catalejo!5e0!3m2!1sen!2sar!4v1730138871512!5m2!1sen!2sar";
  contactMap.width = "1000px"; // Correctly set the width
  contactMap.height = "450px";
  contactMap.style.border = "0";
  contactMap.allowFullscreen = true;
  contactMap.referrerPolicy = "no-referrer-when-downgrade"; // Use referrerPolicy instead of width

  mapWrapper.appendChild(contactMessage);
  mapWrapper.appendChild(contactPhone);
  mapWrapper.appendChild(githubDiv);
  githubDiv.appendChild(contactLink);
  contactLink.appendChild(githubIcon);
  contactLink.appendChild(contactGithub);
  mapWrapper.appendChild(contactMap);

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
