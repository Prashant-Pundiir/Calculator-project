import "./styles.css";

const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = ""; //clear the display box
    } else if (item.id == "backspace") {
      //make delete one item
      let string = display.innerText.toString();
      display.innerText = string.substring(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      //calculation part logic is here
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Wrong Click!";
      // after 2sec display box became empty bcz u make display empty after 2 sec
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      //button clicked part done here
      display.innerText += item.id;
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggle-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = false;
};
