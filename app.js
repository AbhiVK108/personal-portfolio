const filterItems = document.querySelectorAll(".filter a");
const filterableCards = document.querySelectorAll(".filterable_cards .cardd");

console.log(filterItems,filterableCards);

const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    filterableCards.forEach(cardd => {
        cardd.classList.add("hide");
        if (cardd.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {

        cardd.classList.remove("hide");
            
        }
    });
};


filterItems.forEach(a => a.addEventListener("click", filterCards));


// fade effect....
  document.addEventListener('DOMContentLoaded', function () {
    const elementsToAnimate = document.querySelectorAll('.imgg, .aboutText, .header_block, .headerAbout_block');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });
  });

  
