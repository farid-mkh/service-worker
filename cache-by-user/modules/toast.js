export const addToast = (msg) => {
    let container = document.querySelector(".toast");
    if (!container) {
        container = document.createElement("div");
        container.classList.add("toast");
        document.body.appendChild(container);
    }
    const containerChild = document.createElement("div");
    containerChild.classList.add("toast-card");
    containerChild.innerHTML = msg;
    container.appendChild(containerChild);
    const timer = document.createElement("span");
    containerChild.appendChild(timer);
    timer.classList.add("timer");
    timer.style.width = "100%";
    let width = 300;
    const time = 2000;
    const t = setInterval(() => {
        width -= 300 / time;
        timer.style.width = `${width}px`;
        if (width < 0) {
            setTimeout(() => {
                container.removeChild(containerChild);
            }, 100);
            containerChild.classList.add("fadeout");
            clearInterval(t);
        }
    }, 1);
};
