const emailInput = document.querySelector('.form__input_email');
const phoneInput = document.querySelector('.form__input_tel');
const emailValue = document.querySelector('.form__info-email');
const phoneValue = document.querySelector('.form__info-tel');
const form = document.querySelector('.form_type_enter');
const confirmWindow = document.querySelector('.form_type_confirm');
const closeBtn = document.querySelector('.form__close');
const confirmBtn = document.querySelector('.form__button_submit');
const cancelBtn = document.querySelector('.form__button_cancel');

//маска для номера телефона
let element = document.getElementById('phone');
let maskOptions = {
    mask: '+{7}(000) 000-00-00'
};
IMask(element, maskOptions);



function openForm(popup) {
    popup.classList.add('form_opened');
}

function closeForm(popup) {
    popup.classList.remove('form_opened');
}

//сабмит формы
function handleSubmitForm (evt) {
    evt.preventDefault(); 

    emailValue.textContent = emailInput.value;
    phoneValue.textContent = phoneInput.value;  

    closeForm(form);
    openForm(confirmWindow);
}

//если пользователь хочет что-то поменять в введенных данных 
function handleCancel (evt) {
    evt.preventDefault();
    openForm(form);
    closeForm(confirmWindow);

    emailValue.textContent = emailInput.value;
    phoneValue.textContent = phoneInput.value;  
}

form.addEventListener('submit', handleSubmitForm);
closeBtn.addEventListener('click', closeForm(confirmWindow));
cancelBtn.addEventListener('click', handleCancel);



