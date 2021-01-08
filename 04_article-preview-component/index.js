const shareButton = document.querySelector(".btn__share-icon");

shareButton.addEventListener("click", () => {
    const shareBox = document.querySelector(".share-box");
    const authorBlock = document.querySelector(".author");

    shareBox.classList.toggle("share-box--hidden");
    shareButton.classList.toggle("btn__share-icon--open");
    shareButton.classList.toggle("btn__share-icon--static");
    authorBlock.classList.toggle("author--hidden");
});