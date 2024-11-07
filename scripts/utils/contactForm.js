const $main = document.querySelector('#main');
const $body = document.querySelector('body');
const $header = document.querySelector('header');

const $firstname = document.querySelector('#firstname');
const $lastname = document.querySelector('#lastname');
const $email = document.querySelector('#mail');
const $textarea = document.querySelector('#message');
const $form = document.querySelector('form');
const $send = document.querySelector('#send_button');

const $openModal = document.querySelector('.contact_button');
const $closeModal = document.querySelector('.close_button');

function displayModal() {
    const $modal = document.getElementById("contact_modal");

    $modal.style.display = "block";
    $main.style.display = "none";
    $header.style.display = "none";

    $body.setAttribute('aria-hidden', 'true');
    $modal.setAttribute('aria-hidden', 'false');
    $modal.setAttribute('aria-describedby', 'Contact me');
    $modal.setAttribute('role', 'dialog'); // indiquer l'attribut role="" rend la modale compréhensible par les technologies d'assistance 
    $closeModal.focus();
    $firstname.setAttribute('aria-describedby', 'First name');
    $lastname.setAttribute('aria-describedby', 'Last name');
    $email.setAttribute('aria-describedby', 'Email');
    $textarea.setAttribute('aria-describedby', 'Your message');
    $send.setAttribute('aria-describedby', 'Send');
    $closeModal.setAttribute('aria-describedby', 'Close Contact form');
}

function closeModal() {
    const $modal = document.getElementById("contact_modal");

    $modal.style.display = "none";
    $main.style.display = "block";
    $header.style.display = "block";

    $body.setAttribute('aria-hidden', 'false');
    $modal.setAttribute('aria-hidden', 'true');
    $openModal.focus();
}

function closeOnKeybord() {

    document.addEventListener('keydown', function (e) {
        const key = e.key; // const {key} = event; in ES6+
        if (key === "Escape") {
            closeModal(e);
        }
    });
}

function modalSubmit() {
    $form.addEventListener('submit', (e) => {
        e.preventDefault();
        const firstNameValue = $firstname.value;
        const lastNameValue = $lastname.value;
        const emailValue = $email.value;
        const textareaValue = $textarea.value;
        console.log(firstNameValue);
        console.log(lastNameValue);
        console.log(emailValue);
        console.log(textareaValue);
        resetModal()
    })
}

function resetModal() {
    $form.reset()
}

modalSubmit();
closeOnKeybord();