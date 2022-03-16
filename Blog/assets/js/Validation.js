// PAGE: Edit Profile
// input forms ids
const form = document.getElementById("form");
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("email");
const tagline = document.getElementById("tagline");
const aboutMe = document.getElementById("about_me");
const facebook = document.getElementById("facebook");
const twitter = document.getElementById("twitter");
const instagram = document.getElementById("instagram");
const youtube = document.getElementById("youtube");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkInputs();
});

// Check inputs
function checkInputs() {
  // Get all values and trim
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const taglineValue = tagline.value.trim();
  const aboutMeValue = aboutMe.value.trim();
  const facebookValue = facebook.value.trim();
  const twitterValue = twitter.value.trim();
  const instagramValue = instagram.value.trim();
  const youtubeValue = youtube.value.trim();

  // Check input length
  if (firstNameValue === "") {
    setErrorFor(firstName, "First name cannot be blank");
  } else {
    setSuccessFor(firstName);
  }

  if (lastNameValue === "") {
    setErrorFor(lastName, "Last name cannot be blank");
  } else {
    setSuccessFor(lastName);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccessFor(email);
  }

  if (taglineValue === "") {
    setErrorFor(tagline, "Tagline cannot be blank");
  } else {
    setSuccessFor(tagline);
  }

  if (aboutMeValue === "") {
    setErrorFor(aboutMe, "About me cannot be blank");
  } else {
    setSuccessFor(aboutMe);
  }

  if (facebookValue === "") {
    setErrorFor(facebook, "Facebook cannot be blank");
  } else {
    setSuccessFor(facebook);
  }

  if (twitterValue === "") {
    setErrorFor(twitter, "Twitter cannot be blank");
  } else {
    setSuccessFor(twitter);
  }

  if (instagramValue === "") {
    setErrorFor(instagram, "Instagram cannot be blank");
  } else {
    setSuccessFor(instagram);
  }

  if (youtubeValue === "") {
    setErrorFor(youtube, "Youtube cannot be blank");
  } else {
    setSuccessFor(youtube);
  }
}

// Set error message
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control form_error";
  small.innerText = message;
}

// Set success message
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control form_success";
}

// Check if email is valid
function isEmail(email) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@northsouth.edu$/.test(email);
}
