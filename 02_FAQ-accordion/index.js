const question = document.querySelectorAll(".faq-question"); 

for (i = 0; i < question.length; i++) {
  question[i].addEventListener("click", toggleAnswer);
};

function toggleAnswer() {
  let isHidden = this.nextElementSibling.classList.contains("hidden");
  const answer = document.querySelectorAll(".faq-answer");

  if (isHidden) {
    for (i = 0; i < answer.length; i++) {
      answer[i].classList.add("hidden");
    }
    this.nextElementSibling.classList.remove("hidden");
    for (i = 0; i < question.length; i++) {
      question[i].classList.remove("emphasis");
    }
    this.classList.add("emphasis");
  } else {
    this.nextElementSibling.classList.add("hidden");
    this.classList.remove("emphasis");
  }
}; 