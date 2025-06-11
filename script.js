const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.onclick = function () {
    if (mobileMenu.classList.contains("active")) {
        mobileMenu.classList.remove("active");
        hamburger.innerHTML = "&#9776;";
    } else {
        mobileMenu.classList.add("active");
        hamburger.innerHTML = "&times;";
    }
};

/*
       <script>
            const hamburger = document.getElementById("hamburger");
            const mobileMenu = document.getElementById("mobileMenu");

            hamburger.onclick = function () {
                // if menu is open, close it
                if (mobileMenu.classList.contains("active")) {
                    mobileMenu.classList.remove("active");
                    hamburger.innerHTML = "&#9776;"; // ☰
                }
                // if menu is closed, open it
                else {
                    mobileMenu.classList.add("active");
                    hamburger.innerHTML = "&times;"; //  ✖
                }
            };
        </script>

        */
