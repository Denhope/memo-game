export const checkCards = (evt) => {
  const clickedCard = evt.target;
  clickedCard.classList.add("active");
  const activeCards = document.querySelectorAll(".active");
  console.log(clickedCard);

  if (activeCards.length === 2) {
    if (
      activeCards[0].getAttribute("data-name") ===
      activeCards[1].getAttribute("data-name")
    ) {
      activeCards.forEach((item) => {
        item.style.pointerEvents = "none";
        item.classList.remove("active");
      });

      console.log("Good");
    } else {
      activeCards.forEach((item) => {
        item.classList.remove("active");
        setTimeout(() => item.classList.remove("card__toggle"), 900);
      });

      console.log("bad");
    }
  }
};
