function getName(id) {
  var el = document.getElementById(id);
  var fullPath = el.href;
  var filename = fullPath.replace(/^.*[\\\/]/, '');
  // or, try this,
  // var filename = fullPath.split("/").pop();

  el.innerHTML = filename;
}
