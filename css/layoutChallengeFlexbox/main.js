const $input = document.getElementsByTagName("input")[0];
const $i = document.createElement("i");
$input.addEventListener("keypress", function () {
  $input.insertBefore = $i;
  alert("Press");
});
