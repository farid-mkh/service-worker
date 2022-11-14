import { addToast } from "./modules/toast.js";
//
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    if (!("caches" in window)) return;
    const imgUrl = document.getElementsByTagName("img")[0].src;
    caches.open(cacheName).then((cache) => {
        cache.match(imgUrl).then((cachedResponse) => {
            if (cachedResponse) addToast("Downloaded before!");
            else {
                return fetch(imgUrl).then((fetchedResponse) => {
                    cache.put(imgUrl, fetchedResponse);
                });
            }
        });
    });
});
// cached list
const mainList = document.getElementById("list");
const cachedList = document.getElementById("cached-list");
const showDownloadList = document.querySelector("#show-cached-list");
const back = document.getElementById("back");
const createCachedFileDiv = (req) => {
    const div = document.createElement("div");
    div.classList.add("cached-list__item");
    let child;
    if (req.url.match(/png|jpg|svg/)) {
        child = document.createElement("img");
        child.src = req.url;
    } else {
        child = document.createElement("video");
        const source = document.createElement("source");
        source.src = req.url;
        child.appendChild(source);
    }
    child.width = 200;
    child.height = 300;
    div.appendChild(child);
    cachedList.appendChild(div);
};

showDownloadList.addEventListener("click", (e) => {
    back.classList.remove("d-none");
    mainList.classList.add("d-none");
    cachedList.classList.remove("d-none");
    if (cachedList.children.length > 0) {
        return;
    }
    return caches.open(cacheName).then((cache) => {
        cache.keys().then((keys) => {
            if (keys?.length) {
                for (const req of keys) {
                    createCachedFileDiv(req);
                }
            } else {
                cachedList.innerText = "No File";
                addToast("There is no cached file");
            }
        });
        e.target.disabled = true;
    });
});
back.addEventListener("click", (e) => {
    back.classList.add("d-none");
    cachedList.classList.add("d-none");
    mainList.classList.remove("d-none");
    showDownloadList.disabled = false;
});
