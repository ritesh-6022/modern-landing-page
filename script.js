const getStartedBtn = document.getElementById("start");
const startModalElement = document.querySelector(".get-started-modal");
const closeBtn = document.querySelector(".get-started-modal span");
const loginBtn = document.getElementById("loginBtn");
const mobileInput = document.getElementById("mobile");
const toggleForm = document.getElementById("toggleForm");
const extraFields = document.getElementById("extraFields");
const modalTitle = document.querySelector(".heading-modal h3");
const form = document.querySelector(".get-started-modal form");
const passwordLabel = document.getElementById("passwordLabel");
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.querySelector("nav ul");
const closeMenu = document.querySelector(".close-menu");
const overlay = document.getElementById("overlay");


let isLogin = true;

// Get Started Button Function
getStartedBtn.addEventListener("click", () => {
    startModalElement.classList.add('showModal');
    overlay.classList.add("showOverlay");
})

// Close Button Function
closeBtn.addEventListener("click", () => {
    startModalElement.classList.remove("showModal");
    overlay.classList.remove("showOverlay");
})

// Login Button Function
loginBtn.addEventListener("click", () => {
    const value = mobileInput.value.trim();

    if (value === "") {
        alert("Please enter mobile number");
    } else if (value.length < 10) {
        alert("Enter valid mobile number");
    } else {
        alert("Login Successful");
    }
});

// Toggle Form Logic
toggleForm.addEventListener("click", (e) => {
    e.preventDefault();

    if (isLogin) {
        // SHOW NAME FIELD
        extraFields.style.display = "block";

        // Move Name to TOP
        form.insertBefore(extraFields, form.firstChild);

        modalTitle.innerText = "Create Account";
        toggleForm.innerText = "Already have an account?";
        loginBtn.innerText = "Sign Up";
        passwordLabel.innerText = "Create Password *";

    } else {
        // HIDE NAME FIELD
        extraFields.style.display = "none";

        // Move back after mobile input
        const mobileInputField = mobileInput.parentElement;
        form.insertBefore(extraFields, mobileInput.nextSibling);

        modalTitle.innerText = "Login";
        toggleForm.innerText = "Create an account";
        loginBtn.innerText = "Login";
        passwordLabel.innerText = "Password *";
    }

    isLogin = !isLogin;
});

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");

});

closeMenu.addEventListener("click", () => {
    navMenu.classList.remove("active");
});

overlay.addEventListener("click", () => {
    startModalElement.classList.remove("showModal");
    overlay.classList.remove("showOverlay");
});

// Mobile UI Open Get-Started Modal
function openModal() {
    startModalElement.classList.add('showModal');
    navMenu.classList.remove("active");
}

document.querySelectorAll(".strt-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        startModalElement.classList.add('showModal');
    });
});

// CLOSE MENU WHEN CLICKING NAV LINKS (MOBILE FIX)
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

// Contact Function
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    alert('Thank you! Your message has been sent successfully.');
    this.reset();
});
