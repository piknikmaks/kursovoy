function changeItem() {
  document.getElementById('changeElement1').style.visibility = 'visible';
  document.getElementById('changeElement2').style.top = '151px';
  document.getElementById('changeElement2').style.left = '924px';
  document.getElementById('changeElement3').style.zIndex = '108';
}

function rechangeItem() {
  document.getElementById('changeElement1').style.visibility = 'hidden';
  document.getElementById('changeElement2').style.top = '0px';
  document.getElementById('changeElement2').style.left = '618px';
  document.getElementById('changeElement3').style.zIndex = '100';
}