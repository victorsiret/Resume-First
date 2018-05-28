[].forEach.call(document.querySelectorAll('.hideme'), function (el) {
    el.style.display = 'none';
  });
[].forEach.call(document.querySelectorAll('.hideme2'), function (el) {
    el.style.display = 'none';
  });
[].forEach.call(document.querySelectorAll('.hideme3'), function (el) {
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
    [].forEach.call(document.querySelectorAll('.hideme3'), function (el) {
      el.style.display = 'grid';
    });
    document.getElementsByClassName('contact')[0].textContent = '-';
    document.getElementsByClassName('lang')[0].textContent = '-';
    document.getElementsByClassName('edu')[0].textContent = '-';
    document.getElementsByClassName('msof')[0].textContent = 'Microsoft Office -';
    document.getElementsByClassName('prg')[0].textContent = 'Programming -';
    document.getElementsByClassName('adobe')[0].textContent = 'Adobe Creative Suite -';
    document.getElementsByClassName('education')[2].innerHTML = 
    '- Baccalaur&eacute;at Scientifique (OIB) 2012 - Lyc&eacute;e International de Saint Germain-en-Laye';
    document.getElementsByClassName('education')[1].textContent = 
    '- Bachelor of Commerce (BComm) 2015 - Concordia University';
    document.getElementsByClassName('education')[0].textContent = 
    '- Master in Management (MSc) 2019 - ESSEC Business School';
    document.getElementsByClassName('expand')[0].textContent = 'Minimize All';
    XA = 0; SC = 0; SL = 0; SE = 0; MSOF = 0; ADOBE = 0; PRG = 0; NOTE = 0; lycee = 0; ESSEC = 0; conU = 0 
  }
  else {
    [].forEach.call(document.querySelectorAll('.hideme'), function (el) {
      el.style.display = 'none';
    });
    [].forEach.call(document.querySelectorAll('.hideme2'), function (el) {
      el.style.display = 'none';
    });
    [].forEach.call(document.querySelectorAll('.hideme3'), function (el) {
      el.style.display = 'none';
    });
    document.getElementsByClassName('contact')[0].textContent = '+';
    document.getElementsByClassName('lang')[0].textContent = '+';
    document.getElementsByClassName('edu')[0].textContent = '+';
    document.getElementsByClassName('msof')[0].textContent = 'Microsoft Office +';
    document.getElementsByClassName('prg')[0].textContent = 'Programming +';
    document.getElementsByClassName('adobe')[0].textContent = 'Adobe +';
    document.getElementsByClassName('education')[2].innerHTML = 
    '+ Baccalaur&eacute;at Scientifique (OIB) 2012 - Lyc&eacute;e International de Saint Germain-en-Laye';
    document.getElementsByClassName('education')[1].textContent = 
    '+ Bachelor of Commerce (BComm) 2015 - Concordia University';
    document.getElementsByClassName('education')[0].textContent = 
    '+ Master in Management (MSc) 2019 - ESSEC Business School';
    document.getElementsByClassName('expand')[0].textContent = 'Expand All';
    XA = 1; SC = 1; SL = 1; SE = 1; MSOF = 1; ADOBE = 1; PRG = 1; NOTE = 1; lycee = 1; ESSEC = 1; conU = 1;
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
  document.getElementsByClassName('msof')[0].textContent = 'Microsoft Office -';
  MSOF = 0;}
  else {
  document.getElementsByClassName('hideme2')[0].style.display = 'none';
  document.getElementsByClassName('msof')[0].textContent = 'Microsoft Office +';
  MSOF = 1;
  }
}

//Adobe

var ADOBE = 1;

function adobe() {
  if (ADOBE === 1) {
  document.getElementsByClassName('hideme2')[1].style.display = 'initial';
  document.getElementsByClassName('adobe')[0].textContent = 'Adobe Creative Suite -';
  ADOBE = 0;}
  else {
  document.getElementsByClassName('hideme2')[1].style.display = 'none';
  document.getElementsByClassName('adobe')[0].textContent = 'Adobe Creative Suite +';
  ADOBE = 1;
  }
}

//Programming

var PRG = 1;

function prg() {
  if (PRG === 1) {
  document.getElementsByClassName('hideme2')[2].style.display = 'initial';
  document.getElementsByClassName('prg')[0].textContent = 'Programming -';
  PRG = 0;}
  else {
  document.getElementsByClassName('hideme2')[2].style.display = 'none';
  document.getElementsByClassName('prg')[0].textContent = 'Programming +';
  PRG = 1;
  }
}

var NOTE = 1;

function showNote() {
  if (NOTE === 1) {
  document.getElementsByClassName('hideme2')[3].style.display = 'initial';
  NOTE = 0;}
  else {
  document.getElementsByClassName('hideme2')[3].style.display = 'none';
  NOTE = 1;
  }
}

//EDUCATION
//Expand ESSEC

var ESSEC = 1;

function showESSEC() {
  if (ESSEC === 1) {
  document.getElementsByClassName('hideme3')[0].style.display = 'grid';
  document.getElementsByClassName('education')[0].textContent = 
  '- Master in Management (MSc) 2019 - ESSEC Business School';
  ESSEC = 0;}
  else {
  document.getElementsByClassName('hideme3')[0].style.display = 'none';
  document.getElementsByClassName('education')[0].textContent = 
  '+ Master in Management (MSc) 2019 - ESSEC Business School';
  ESSEC = 1;
  }
}

//Expand Concordia

var conU = 1;

function showConU() {
  if (conU === 1) {
  document.getElementsByClassName('hideme3')[1].style.display = 'grid';
  document.getElementsByClassName('education')[1].textContent = 
  '- Bachelor of Commerce (BComm) 2015 - Concordia University';
  conU = 0;}
  else {
  document.getElementsByClassName('hideme3')[1].style.display = 'none';
  document.getElementsByClassName('education')[1].textContent = 
  '+ Bachelor of Commerce (BComm) 2015 - Concordia University';
  conU = 1;
  }
}

//Expand Lycee

var lycee = 1;

function showOIB() {
  if (lycee === 1) {
  document.getElementsByClassName('hideme3')[2].style.display = 'grid';
  document.getElementsByClassName('education')[2].innerHTML = 
  '- Baccalaur&eacute;at Scientifique (OIB) 2012 - Lyc&eacute;e International de Saint Germain-en-Laye';
  lycee = 0;}
  else {
  document.getElementsByClassName('hideme3')[2].style.display = 'none';
  document.getElementsByClassName('education')[2].innerHTML = 
  '+ Baccalaur&eacute;at Scientifique (OIB) 2012 - Lyc&eacute;e International de Saint Germain-en-Laye';
  lycee = 1;
  }
}