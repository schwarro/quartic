let kebab = document.getElementById('kebab');
let bubble = document.getElementById('speechBubble');

kebab.onclick = function () {
  if(bubble.style.display === 'none') {
    bubble.style.display = 'block';
  } else {
    bubble.style.display = 'none';
  }
}
