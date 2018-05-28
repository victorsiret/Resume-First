[].forEach.call(document.querySelectorAll('.hideme'), function (el) {
    el.style.display = 'none';
  });
  [].forEach.call(document.querySelectorAll('.hideme2'), function (el) {
    el.style.display = 'none';
  });


//CONTACT
//Show extra contact info

var SC = 1;

function showContact() {
  if (SC === 1) {
  document.getElementsByClassName('hideme')[0].style.display = 'initial';
  document.getElementsByClassName('contact')[0].textContent = '-';
  SC = 0;}
  else {
  document.getElementsByClassName('hideme')[0].style.display = 'none';
  document.getElementsByClassName('contact')[0].textContent = '+';
  SC = 1;
  }
}

//LANGUAGES
//Show language text

var SL = 1

function showLang() {
  if (SL === 1) {
  document.getElementsByClassName('hideme')[1].style.display = 'initial';
  document.getElementsByClassName('lang')[0].textContent = '-';
  SL = 0;}
  else {
  document.getElementsByClassName('hideme')[1].style.display = 'none';
  document.getElementsByClassName('lang')[0].textContent = '+';
  SL = 1;
  }
}

//EDUCATION
//Show extra education

var SE = 1

function showEdu() {
  if (SE === 1) {
  document.getElementsByClassName('hideme')[2].style.display = 'initial';
  document.getElementsByClassName('edu')[0].textContent = '-';
  SE = 0;}
  else {
  document.getElementsByClassName('hideme')[2].style.display = 'none';
  document.getElementsByClassName('edu')[0].textContent = '+';
  SE = 1;
  }
}
