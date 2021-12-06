const emailInput = document.getElementById('email');
const passInput = document.getElementById('password');
const loginBtn = document.getElementById('login-button');
const submitBtn = document.getElementById('submit-btn');
const agreementCheck = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const counterChar = document.getElementById('counter');
const maxLength = textArea.getAttribute('maxlength');
const infoRecebidas = document.getElementById('info-recebidas');
// req 21
const inputFirstName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const selectedHouse = document.getElementById('house');
const families = document.getElementsByClassName('families');
const form = document.getElementById('form');

function checkPassword(event) {
  event.preventDefault();
  if (emailInput.value === 'tryber@teste.com' && passInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

loginBtn.addEventListener('click', checkPassword);

// https://www.w3schools.com/jsref/prop_pushbutton_disabled.asp
// https://www.w3schools.com/jsref/prop_checkbox_checked.asp
// https://www.w3schools.com/jsref/dom_obj_checkbox.asp

// Iniatilize button disabled.
submitBtn.disabled = true;

function enableDisabeSubmitBtn() {
  if (agreementCheck.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

agreementCheck.addEventListener('click', enableDisabeSubmitBtn);

// Adicionando contador.
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement

// Iniciando o contador em 500;
counterChar.innerHTML = maxLength;

// Atualizando o contador
function countRemainingChars() {
  const currentLength = maxLength - textArea.value.length;
  counterChar.innerHTML = currentLength;
}

// Os dois aparentemente funcionam, qual a diferença?
textArea.addEventListener('input', countRemainingChars);
// textArea.addEventListener('keyup', countRemainingChars);

// Req 21
// Agradecimento especial a dupla Polyana Sousa e Lilian Azevedo, a Poly em especial que nos explicou pelo zoom o código delas e como decifraram o enunciado do requisito 21.

function getSelectedContents() {
  const contents = document.getElementsByClassName('subject');
  const selectedContents = [];
  // console.log(contents);
  for (let index = 0; index < contents.length; index += 1) {
    if (contents[index].checked === true) {
      console.log(contents[index].value);
      selectedContents.push(contents[index].value);
    }
  }
  return selectedContents.join(', ');
}

function getFamily() {
  for (let index = 0; index < families.length; index += 1) {
    if (families[index].checked === true) {
      return families[index].value;
    }
  }
}

const rates = document.getElementsByClassName('rate');
function getRate() {
  for (let index = 0; index < rates.length; index += 1) {
    if (rates[index].checked === true) {
      return rates[index].value;
    }
  }
}
function hideDivs() {
  // estilizando:
  const divFirstLastName = document.getElementById('first-last-name');
  const divEmail = document.getElementById('div-input-email');
  const divFamilies = document.getElementById('div-families');
  const divLabelContent = document.getElementById('div-label-content');
  const divLabelRate = document.getElementById('div-label-rate');
  const divTextArea = document.getElementById('div-textarea');
  const divLabelInfos = document.getElementById('div-label-infos');
  const tagHr1 = document.getElementById('hr1');
  divFirstLastName.style.display = 'none';
  divEmail.style.display = 'none';
  divFamilies.style.display = 'none';
  divLabelContent.style.display = 'none';
  divLabelRate.style.display = 'none';
  divTextArea.style.display = 'none';
  divLabelInfos.style.display = 'none';
  submitBtn.style.display = 'none';
  tagHr1.style.display = 'none';
}

function generateLi() {
  const listItemsSaved = document.getElementById('info-recebidas');
  listItemsSaved.innerHTML = '';
  infoRecebidas.innerHTML = `
  <li>Nome: ${inputFirstName.value} ${inputLastName.value}</li>
  <li>Email: ${inputEmail.value}</li>
  <li>Casa: ${selectedHouse.value}</li>
  <li>Família: ${getFamily()}</li>
  <li>Matérias: ${getSelectedContents()}</li>
  <li>Avaliação: ${getRate()}</li>
  <li>Observações: ${textArea.value}</li>
  `;
}

function sendForm(event) {
  event.preventDefault();
  const pRec = document.createElement('p');
  pRec.innerHTML = `Recebemos seus dados ${inputFirstName.value}! Tudo certo, pode fechar a janela`;
  form.appendChild(pRec);
  hideDivs();
  generateLi();
}

submitBtn.addEventListener('click', sendForm);
