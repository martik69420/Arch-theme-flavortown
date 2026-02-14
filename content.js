function replaceHat() {
  const hat = document.querySelector('.sidebar__user-avatar-hat-bg');
  if (hat) {
    hat.src = chrome.runtime.getURL("hat-flavortown.png");
  }
}

replaceHat();

const observer = new MutationObserver(() => {
  replaceHat();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
