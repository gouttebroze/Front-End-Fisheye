const $main = document.querySelector('#main');
const $body = document.querySelector('body');
const $btnSubmit = document.querySelector('.contact_button');
const $firstname = document.querySelector('#firstname');
const $lastname = document.querySelector('#lastname');
const $email = document.querySelector('#mail');
const $textarea = document.querySelector('#message');
const $form = document.querySelector('form');

function displayModal() {
    const $modal = document.getElementById("contact_modal");
    
	$modal.style.display = "block";
    $main.style.display = "none"; // mettre 1 propriété filter à la place du display="none"
    $body.setAttribute('aria-hidden', 'true');
    $modal.setAttribute('aria-hidden', 'false');
    $modal.setAttribute('aria-describedby', 'contact');
    $modal.setAttribute('role', 'dialog'); // indiquer l'attribut role="" rend la modale compréhensible par les technologies d'assistance 
    //$body.classList.add('no-scroll');

    console.log('La boîte de dialogue destinée aux contacts est ouverte');
    
}

function closeModal() {
    const $modal = document.getElementById("contact_modal");

    $modal.style.display = "none";
    $main.style.display= "block";
    $body.setAttribute('aria-hidden', 'false');
    $modal.setAttribute('aria-hidden', 'true');
    console.log('La boîte de dialogue destinée aux contacts est désormais fermée.');
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
    })
}

modalSubmit();