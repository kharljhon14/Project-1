const infos = [
    "In Sky, we arrive as the Children of the Light, spreading hope through the desolate kingdom to return fallen Stars to their constellations."
    , "Welcome to the enchanting world of Sky, a beautifully-animated kingdom waiting to be explored by you and your loved ones."
    , "From the award-winning creators behind Journey (2013 Game of The Year) and the highly-acclaimed Flower, comes a ground-breaking social adventure that is set to warm your hearts."
]

const info = document.getElementById("game-info");
let currentIndex = 0;

window.addEventListener("DOMContentLoaded", function(){
    setInterval(function(){
        if(currentIndex < infos.length -1){
            currentIndex++;
            info.textContent = infos[currentIndex];
        }else{
            currentIndex = 0;
            info.textContent = infos[currentIndex];
        }
    }, 8000);
});

