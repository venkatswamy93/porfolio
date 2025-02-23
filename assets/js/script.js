'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

// Initialize EmailJS with your public key
document.addEventListener("DOMContentLoaded", function() {
  (function() {
    emailjs.init("U8CNGTSUjI8JfAhLG"); // Replace with your actual public key from EmailJS
  })();

  const formElement = document.getElementById("contact-form");
  console.log(formElement); // Check if the form element is found

  if (formElement) {
    formElement.addEventListener("submit", function(event) {
      console.log(event);
      event.preventDefault(); // Prevent default form submission behavior

      // Collect form data
      const name = document.getElementById("name").value;
      const emailAddress = document.getElementById("email_address").value;
      const message = document.getElementById("message").value;
      console.log("add");

      // Send the email using EmailJS
      emailjs.send("service_spdi3bg", "template_647w0ih", {
        user_name: name,
        user_email: emailAddress,
        user_message: message
      })
      .then(function(response) {
        alert("Email sent successfully!");
        console.log("Success:", response);
      }, function(error) {
        alert("Failed to send email.");
        console.log("Error:", error);
      });
    });
  } else {
    console.log("Form element not found!");
  }
});




/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});