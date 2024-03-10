var words = ["acknowledgements"];

button.addEventListener("click", donE);

function squaaaa() {
    if (words.indexOf(document.getElementById("word").value) === -1) {
        console.log("boooooo");
    } else {
        console.log(":grin::+1:");
    }
}

function donE() {
  if (button.value === " ! ") {
    squaaaa()
  }
}
