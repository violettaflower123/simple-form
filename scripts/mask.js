import IMask from 'imask';

const inputElement = document.getElementById('phone');

const maskOptions = {
    mask: '+{7}(000)000-00-00'
  };
  const mask = IMask(inputElement, maskOptions);
