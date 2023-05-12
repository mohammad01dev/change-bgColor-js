let R = document.querySelector(".red")
let G = document.querySelector(".green")
let B = document.querySelector(".blue")
let rgb = document.querySelectorAll("input");

rgb.forEach(rang => {
    rang.addEventListener("input", (e) => {
        if (e.target.classList.contains("R")) {
            R.innerHTML = e.target.value;
        }
        if (e.target.classList.contains("G")) {
          G.innerHTML = e.target.value;
        }
        if (e.target.classList.contains("B")) {
          B.innerHTML = e.target.value;
        }

        localStorage.setItem("rang", e.target.value);
        localStorage.setItem("rgb", `${R.innerHTML},${G.innerHTML},${B.innerHTML}`);

        document.body.style.backgroundColor = `rgb(${R.innerHTML},${G.innerHTML},${B.innerHTML})`;
    })
})