
var element_to_watch = document.querySelectorAll(".watch");
var callback = function (items){
    items.forEach((item => {
        if(item.isIntersecting){
            item.target.classList.add("in-page");
        }else{
            item.target.classList.remove("in-page");
        }
    }));
}

var observer = new IntersectionObserver(callback,{threshold:0.5});
element_to_watch.forEach((element => {
    observer.observe(element);
}));


const balloons = document.querySelectorAll('.palloncino');

// Ascolta l'evento di fine animazione per ciascun palloncino
balloons.forEach((balloon) => {
  balloon.addEventListener('animationend', () => {
    // Aggiungi la classe "d-none" al completamento dell'animazione
    balloon.classList.add('d-none');
  });
});