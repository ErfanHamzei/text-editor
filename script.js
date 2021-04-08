//variables and html nodes
const options = document.querySelectorAll(".option");
const textBox = document.querySelector("#text-box");

// loop into options and add click event
options.forEach((opt) => {
  opt.addEventListener("click", () => {
    const className = opt.classList[1];
    switch (className) {
      case "fa-plus":
        increaseSize();
        break;
      case "fa-minus":
        decreaseSize();
        break;
      case "fa-bold":
        boldText(opt);
        break;
      case "fa-italic":
        ItalicText(opt);
        break;
      case "align":
        setAlign(opt);
        break;
      case "color-box":
        setColor(opt);
        break;
      default:
        console.error("It is not valid !");
        break;
    }
  });
});

// this function will increase text font-size --> font-size + 2
function increaseSize() {
  let fontSize = parseInt(
    getComputedStyle(textBox).getPropertyValue("font-size")
  );
  if (fontSize < 36) {
    fontSize += 2;
  }
  textBox.style.fontSize = `${fontSize}px`;
}

// this function will decrease text font-size --> font-size - 2
function decreaseSize() {
  let fontSize = parseInt(
    getComputedStyle(textBox).getPropertyValue("font-size")
  );
  if (fontSize > 10) {
    fontSize -= 2;
  }
  textBox.style.fontSize = `${fontSize}px`;
}

// this function bold the text
function boldText(boldIcon) {
  textBox.classList.toggle("bold");
  if (textBox.className.includes("bold")) {
    boldIcon.classList.add("active-icon");
  } else {
    boldIcon.classList.remove("active-icon");
  }
}

// this function italic the text
function ItalicText(italicIcon) {
  textBox.classList.toggle("italic");
  if (textBox.className.includes("italic")) {
    italicIcon.classList.add("active-icon");
  } else {
    italicIcon.classList.remove("active-icon");
  }
}

// this function set the text align
function setAlign(align) {
  const className = align.classList[2].substring(3);
  const textBoxclasses = [...textBox.classList];
  const textBoxAlignClass = textBoxclasses.find((cls) => cls.includes("align"));
  textBox.classList.remove(textBoxAlignClass);
  textBox.classList.add(`${className}`);
  document.querySelector(".active-align").classList.remove("active-align");
  align.classList.add("active-align");
}

//this function set the selected color to the text
function setColor(colorPicker) {
  colorPicker.addEventListener("input", () => {
    textBox.style.color = `${colorPicker.value}`;
  });
}
