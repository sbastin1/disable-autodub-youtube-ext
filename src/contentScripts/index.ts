function onNavigate() {
  const settingsButton: HTMLElement | null = document?.querySelector(".ytp-settings-button")

  if (settingsButton) {
    settingsButton.click()

    const audioMenuItem: HTMLElement | null = document.querySelector(".ytp-audio-menu-item")

    if (!audioMenuItem) {
      settingsButton.click()
      return;
    }

    const audioMenuContent = audioMenuItem.querySelector(".ytp-menuitem-content")
    const isAlreadyOriginal = audioMenuContent?.textContent?.includes("original")

    if (isAlreadyOriginal) {
      settingsButton.click()
      return;
    }

    audioMenuItem.click()

    const menuItems = document.querySelectorAll<HTMLElement>(".ytp-menuitem")
    menuItems.forEach((item) => {
      const label = item?.firstChild?.textContent
      if (label?.includes("original")) {
        item.click()

        // Race condition: Youtube needs time to switch tracks
        // TODO: Check if youtube fires any event on audio track switch
        setTimeout(() => {
          settingsButton.click()
        }, 1000)
      }
    })
  }
}

window.addEventListener("yt-navigate-finish", onNavigate);

(function() {
  const pushState = history.pushState;
  history.pushState = function(...args) {
    pushState.apply(this, args);
    onNavigate();
  };
  const replaceState = history.replaceState;
  history.replaceState = function(...args) {
    replaceState.apply(this, args);
    onNavigate();
  };
  window.addEventListener("popstate", onNavigate);
})();
