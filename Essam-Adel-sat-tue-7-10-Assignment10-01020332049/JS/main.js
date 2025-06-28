
// Sign Up Function
function signUp() {
    const name = document.getElementById("nameInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();
    const password = document.getElementById("passInput").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !password) {
        alert("All fields are required.");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    const user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem("users", JSON.stringify(user));

    alert("Account created successfully!");

    document.getElementById("nameInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("passInput").value = "";
}

// Sign In Function
function signIn(){
    const email = document.getElementById("emailInput").value.trim();
    const password = document.getElementById("passInput").value.trim();
    const name = document.getElementById("username")

    if (!email || !password) {
    alert("Please fill in both email and password.");
    return;
    }

    const storedUser = localStorage.getItem("users");
    console.log(storedUser);

    if (!storedUser) {
    alert("No account found.");
    return;
    }

    const user = JSON.parse(storedUser);

    if(user.email != email){
        alert("Incorrect email or not found.");
    }
    if(user.password != password ){
        alert("Incorrect password.");
    }
    
    // alert(`Welcome, ${user.name}!`);
    window.location.href = "home.html";
}

function logout(){
    window.location.href = "index.html";
}

window.addEventListener("DOMContentLoaded", () => {
    const users = JSON.parse(localStorage.getItem("users"));

    if (users.name) {
        document.getElementById("username").innerText = `Welcome, ${users.name}`;
    }
});
