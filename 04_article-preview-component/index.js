const shareButton = document.querySelector(".btn__share-icon");

shareButton.addEventListener("click", () => {
    const shareBox = document.querySelector(".share-box");
    const authorBlock = document.querySelector(".author");

    shareBox.classList.toggle("share-box--hidden");

    authorBlock.classList.toggle("author--hidden");

    shareButton.classList.toggle("btn__share-icon--open");
    shareButton.classList.toggle("btn__share-icon--static");

   let ariaAttrButton = shareButton.getAttribute("aria-expanded");

   if (ariaAttrButton == "false") {
       shareButton.setAttribute("aria-expanded", "true");
       shareButton.setAttribute("aria-label", "Close share options");
   } else {
       shareButton.setAttribute("aria-expanded", "false");
       shareButton.setAttribute("aria-label", "Open share options");
   }
});