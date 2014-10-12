function ADD_EYEBALL() {
  var e_radius = document.getElementById('e_radius').value;
  var p_radius = document.getElementById('p_radius').value;

  if (parseInt(e_radius) < parseInt(p_radius)) {
    alert('ERROR: Eye must be bigger than pupil! eye size: ' + e_radius.toString() + ', pupil size: ' + p_radius.toString());
  } else {
    chrome.tabs.executeScript({
      code: 'EYEBALL(' + e_radius + ', ' + p_radius + ')'
    });
  }
}

var btn = document.getElementById('btn');
btn.onclick = ADD_EYEBALL;
