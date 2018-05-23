[].forEach.call(document.querySelectorAll('.hideme'), function (el) {
    el.style.display = 'none';
  });
  [].forEach.call(document.querySelectorAll('.hideme2'), function (el) {
    el.style.display = 'none';
  });

//Show overview text
var SO = 1;

function showOverview() {
  if (SO === 1) {
  document.getElementsByClassName('hideme')[0].style.display = 'initial';
  document.getElementsByClassName('overview')[0].textContent = '-';
  SO = 0;}
  else {
  document.getElementsByClassName('hideme')[0].style.display = 'none';
  document.getElementsByClassName('overview')[0].textContent = '+';
  SO = 1;
  }
}