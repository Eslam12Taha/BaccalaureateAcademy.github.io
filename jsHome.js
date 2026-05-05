/* by Eslam Taha*/
let darkmode = localStorage.getItem("darkmode");
const btn = document.getElementById("togglebtn");
if (btn) {
    btn.addEventListener("click", () => {
        document.body.classList.toggle("darkmode");
        if (document.body.classList.contains("darkmode")) {
            localStorage.setItem("darkmode", "enabled");
        } else {
            localStorage.setItem("darkmode", "disabled");
        }
    });
}

const curtMode = localStorage.getItem("darkmode");
if (curtMode === "enabled") {
    document.body.classList.add("darkmode");
} else {
    document.body.classList.remove("darkmode");
};

const nav = document.getElementById("navbr");
const menuBtn = document.getElementById("menu");

if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("menu");
        nav.classList.toggle("show");
    });
    
    document.addEventListener("click", (event) => {
        if (!nav.contains(event.target) && !menuBtn.contains(event.target)) {
            nav.classList.remove("show");
            menuBtn.classList.remove("menu");
        }
    });
}

let icon = document.getElementById("icon");
let login = document.querySelector(".login");
let up = document.querySelector(".signup");
let out = document.querySelector(".signout");

if (out) {
    out.addEventListener("click" , () => {
        localStorage.removeItem("loggedIn");
        window.location.href = "index.html";
    });
}

if (localStorage.getItem("loggedIn")) {
    icon.style.display = "block";
    login.style.display = "none";
    up.style.display = "none";
    out.style.display = "block";
} else {
    icon.style.display = "none";
    login.style.display = "block";
    up.style.display = "block";
    out.style.display = "none";
}
