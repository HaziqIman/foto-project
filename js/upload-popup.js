function PopUp() {
    var blur = document.getElementById("blur");
    blur.classList.toggle('active');
}

const uploadBtn = document.getElementById("upload-btn");
uploadBtn.addEventListener("click", PopUp);

