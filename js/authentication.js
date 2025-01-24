/* IN PROGRESS, PLS CHECK IF CORRECT */

// Import Firebase Auth
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } = require("firebase/auth");

// Function to handle user sign-up with displayName
async function signUpWithDisplayName(email, password, displayName) {
  try {
    const auth = getAuth();

    // Create the user
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Update the user's profile with the displayName
    await updateProfile(user, { displayName });

    console.log(`User signed up successfully. Display Name: ${displayName}`);
  } catch (error) {
    console.error(`Error during sign-up: ${error.message}`);
  }
}

// Function to handle user sign-in and retrieve displayName
async function signInAndGetDisplayName(email, password) {
  try {
    const auth = getAuth();

    // Sign in the user
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Retrieve the display name
    console.log(`User signed in. Display Name: ${user.displayName}`);
  } catch (error) {
    console.error(`Error during sign-in: ${error.message}`);
  }
}

// Example Usage of Sign-Up
signUpWithDisplayName("example@example.com", "examplePassword", "JohnDoe");

// Example Usage of Sign-In
signInAndGetDisplayName("example@example.com", "examplePassword");


