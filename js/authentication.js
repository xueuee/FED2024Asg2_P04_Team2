/* OMITTED */

// Import Firebase Auth
const { initializeApp } = require("firebase/app");
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } = require("firebase/auth");

// Initialize Firebase (replace this with your environment variables setup)
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};
initializeApp(firebaseConfig);

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
    switch (error.code) {
      case "auth/email-already-in-use":
        console.error("This email is already in use.");
        break;
      case "auth/weak-password":
        console.error("The password is too weak.");
        break;
      case "auth/invalid-email":
        console.error("The email address is invalid.");
        break;
      default:
        console.error(`Error: ${error.message}`);
    }
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

// Export functions for use in other parts of the app
module.exports = {
  signUpWithDisplayName,
  signInAndGetDisplayName,
};


