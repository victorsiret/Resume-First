[].forEach.call(document.querySelectorAll('.hideme'), function (el) {
    el.style.display = 'none';
  });
[].forEach.call(document.querySelectorAll('.hideme2'), function (el) {
    el.style.display = 'none';
  });

//EXPAND ALL

var XA = 1;
function expandAll() {
  if (XA === 1) {
    [].forEach.call(document.querySelectorAll('.hideme'), function (el) {
      el.style.display = 'initial';
    });
  [].forEach.call(document.querySelectorAll('.hideme2'), function (el) {
      el.style.display = 'initial';
    });
    document.getElementsByClassName('contact')[0].textContent = '-';
    document.getElementsByClassName('lang')[0].textContent = '-';
    document.getElementsByClassName('edu')[0].textContent = '-';
    document.getElementsByClassName('msof')[0].textContent = '-';
    document.getElementsByClassName('prg')[0].textContent = '-';
    document.getElementsByClassName('adobe')[0].textContent = '-';
    document.getElementsByClassName('expand')[0].textContent = 'Minimize All';
    SC = 0; SL = 0; SE = 0; MSOF = 0; ADOBE = 0; PRG = 0; XA = 0;
  }
  else {
    [].forEach.call(document.querySelectorAll('.hideme'), function (el) {
      el.style.display = 'none';
    });
  [].forEach.call(document.querySelectorAll('.hideme2'), function (el) {
      el.style.display = 'none';
    });
    document.getElementsByClassName('contact')[0].textContent = '+';
    document.getElementsByClassName('lang')[0].textContent = '+';
    document.getElementsByClassName('edu')[0].textContent = '+';
    document.getElementsByClassName('msof')[0].textContent = '+';
    document.getElementsByClassName('prg')[0].textContent = '+';
    document.getElementsByClassName('adobe')[0].textContent = '+';
    document.getElementsByClassName('expand')[0].textContent = 'Expand All';
    SC = 1; SL = 1; SE = 1; MSOF = 1; ADOBE = 1; PRG = 1; XA = 1;
  }
}

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

var SL = 1;

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

var SE = 1;

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

//SMALLPLUS

//SKILLS
//MS Office

var MSOF = 1;

function msof() {
  if (MSOF === 1) {
  document.getElementsByClassName('hideme2')[0].style.display = 'initial';
  document.getElementsByClassName('msof')[0].textContent = '-';
  MSOF = 0;}
  else {
  document.getElementsByClassName('hideme2')[0].style.display = 'none';
  document.getElementsByClassName('msof')[0].textContent = '+';
  MSOF = 1;
  }
}

//Adobe

var ADOBE = 1;

function adobe() {
  if (ADOBE === 1) {
  document.getElementsByClassName('hideme2')[1].style.display = 'initial';
  document.getElementsByClassName('adobe')[0].textContent = '-';
  ADOBE = 0;}
  else {
  document.getElementsByClassName('hideme2')[1].style.display = 'none';
  document.getElementsByClassName('adobe')[0].textContent = '+';
  ADOBE = 1;
  }
}

//Programming

var PRG = 1;

function prg() {
  if (PRG === 1) {
  document.getElementsByClassName('hideme2')[2].style.display = 'initial';
  document.getElementsByClassName('prg')[0].textContent = '-';
  PRG = 0;}
  else {
  document.getElementsByClassName('hideme2')[2].style.display = 'none';
  document.getElementsByClassName('prg')[0].textContent = '+';
  PRG = 1;
  }
}
