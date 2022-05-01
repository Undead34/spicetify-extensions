const removeFriendsActivity = () => {
  document.querySelector(".Root__top-container aside").style.display = "none";
  document.getElementById("4D3C2B1AA").style.display = "block";
}

const showFriendsActivity = () => {
  document.querySelector(".Root__top-container aside").style.display = "block";
  document.getElementById("4D3C2B1AA").style.display = "none";
}

const removeFriendsActivityInit = () => {
  const { Platform } = Spicetify;
  if (!(Platform)) {
    setTimeout(removeFriendsActivityInit, 2000);
    return
  }

  if (!document.querySelector(".Root__top-container aside")) {
    setTimeout(removeFriendsActivityInit, 4000);
    return
  }

  // BTN TO REMOVE FRIENDS ACTIVITY
  let quitBtn = document.createElement("button");

  let style_quitBtn = document.createAttribute("style");
  style_quitBtn.value = "background: var(--background-alt);border: 1px solid var(--background-elevated-base);width: 32px;right: 10px;position: absolute;top: 0;";
  quitBtn.attributes.setNamedItem(style_quitBtn);

  let class_ = document.createAttribute("class");
  class_.value = "A1B2C3D4";
  quitBtn.attributes.setNamedItem(class_);
  quitBtn.innerHTML = "X";

  document.querySelector(".MObmOrMxbQpO10ebAtZA").parentElement.appendChild(quitBtn);
  document.querySelector(".A1B2C3D4").addEventListener("click", removeFriendsActivity)
  document.querySelector(".main-userWidget-box").style.marginRight = "10em";

  // BTO TO SHOW FRIENDS ACTIVITY
  let openBtn = document.createElement("button");
  let style_openBtn = document.createAttribute("style");
  style_openBtn.value = "display:none; width: 20px;height: 35px;bottom: -3em;position: relative;background: var(--background-base);border: 1px solid var(--background-elevated-highlight);";
  openBtn.attributes.setNamedItem(style_openBtn);

  let class_openBtn = document.createAttribute("id");
  class_openBtn.value = "4D3C2B1AA";
  openBtn.attributes.setNamedItem(class_openBtn);

  openBtn.innerHTML = '<svg role="img" height="24" width="24" class="Svg-sc-1bi12j5-0 jgfuCe main-topBar-icon" viewBox="0 0 24 24"><path d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z"></path></svg>';
  document.querySelector(".Root__top-container").append(openBtn);
  document.getElementById("4D3C2B1AA").addEventListener("click", showFriendsActivity);
};

window.onload = function() {
  setTimeout(removeFriendsActivityInit, 4000);
};

// spicetify-extensions
// A couple of extensions that I develop when I have free time