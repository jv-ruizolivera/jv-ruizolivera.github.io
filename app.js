var btns = document.querySelectorAll(".btn");

Array.from(btns).map((btn) => {
    const nameBtn = btn.dataset.name;
    btn.addEventListener("click", () => {
        play(nameBtn);
    });
});

function play(name) {
  const audio = document.querySelector('audio.' + name);
  audio.play();
}
