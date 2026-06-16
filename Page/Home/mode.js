// =========================
// SIMPLE DARK MODE (LIKE RECEIPT)
// =========================

function toggleDark() {
    const body = document.getElementById("body");
    const btn = document.getElementById("modeBtn");

    const isDark = body.classList.contains("bg-black");

    if (isDark) {
        // switch to light
        body.classList.remove("bg-black", "text-white");
        body.classList.add("bg-white", "text-black");

        localStorage.setItem("theme", "light");

        if (btn) btn.innerText = "Dark 🌙";

    } else {
        // switch to dark
        body.classList.remove("bg-white", "text-black");
        body.classList.add("bg-black", "text-white");

        localStorage.setItem("theme", "dark");

        if (btn) btn.innerText = "Light ☀️";
    }
}


// =========================
// LOAD SAVE MODE
// =========================
window.addEventListener("DOMContentLoaded", () => {
    const body = document.getElementById("body");
    const btn = document.getElementById("modeBtn");

    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
        body.classList.add("bg-black", "text-white");
        body.classList.remove("bg-white", "text-black");
        if (btn) btn.innerText = "Light ☀️";
    } else {
        body.classList.add("bg-white", "text-black");
        body.classList.remove("bg-black", "text-white");
        if (btn) btn.innerText = "Dark 🌙";
    }
});