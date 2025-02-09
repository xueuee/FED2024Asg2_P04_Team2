/* jshint esversion: 8 */
document.addEventListener("DOMContentLoaded", function () {
    const API_URL = "https://fedassg2-7280.restdb.io/rest/mokesell-user";
    const API_KEY = "6795cbad2e42649902d2397f";

    // [Sign-Up Functionality] - Only for signup.html
    if (document.getElementById("user-submit")) {
        document.getElementById("user-submit").addEventListener("click", async function (e) {
            e.preventDefault();

            // Get form values
            const username = document.getElementById("username").value.trim();
            const email = document.getElementById("user-email").value.trim();
            const password = document.getElementById("user-password").value.trim();

            if (!username || !email || !password) {
                alert("Please fill in all required fields.");
                return;
            }

            // Prepare data for API
            const userData = {
                username: username,
                email: email,
                password: password,
            };

            try {
                // Make POST request to RestDB
                const response = await fetch(API_URL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "x-apikey": API_KEY,
                    },
                    body: JSON.stringify(userData),
                });

                if (!response.ok) throw new Error("Failed to create user. Try again.");

                // Success: Store user info in localStorage and redirect
                localStorage.setItem("loggedInUser", JSON.stringify({ username, email }));
                window.location.href = "index.html"; // Redirect to home page
            } catch (error) {
                console.error(error.message);
                alert("Error: Could not create account.");
            }
        });
    }

    // [Login Functionality] - Only for login.html
    if (document.getElementById("login-submit")) {
        document.getElementById("login-submit").addEventListener("click", async function (e) {
            e.preventDefault();

            // Get login form values
            const username = document.getElementById("login-username").value.trim();
            const password = document.getElementById("login-password").value.trim();

            if (!username || !password) {
                alert("Please fill in all required fields.");
                return;
            }

            try {
                // Fetch all users from RestDB
                const response = await fetch(`${API_URL}?q={"username":"${username}"}`, {
                    method: "GET",
                    headers: {
                        "x-apikey": API_KEY,
                    },
                });

                if (!response.ok) throw new Error("Failed to fetch user data.");

                const users = await response.json();
                const user = users.find((u) => u.username === username && u.password === password);

                if (!user) {
                    alert("Invalid username or password.");
                    return;
                }

                // Success: Store logged-in user in localStorage and redirect
                localStorage.setItem("loggedInUser", JSON.stringify({ username }));
                window.location.href = "index.html"; // Redirect to home page
            } catch (error) {
                console.error(error.message);
                alert("Error: Unable to log in.");
            }
        });
    }

    // [Logged In User Session]
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser) {
        const welcomeElements = document.querySelectorAll(".loggedInUser");
    
        welcomeElements.forEach((element) => {
            if (window.location.pathname.includes("account.html")) {
                element.textContent = loggedInUser.username;
            } else if (window.location.pathname.includes("index.html")) {
                element.textContent = `Ad Astra Abyssosque, ${loggedInUser.username}!`;
            }
        });
    }

    // [Logout Functionality]
    window.logout = function () {
        localStorage.removeItem("loggedInUser");
        alert("You have been logged out.");
        window.location.href = "login.html"; // Redirect to login page
    };
});

  