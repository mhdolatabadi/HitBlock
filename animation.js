const getNumber = (string) => {
  return string.slice(0, string.indexOf("p"));
};
const getPix = (number) => {
  return `${number}px`;
};

export const animation = () => {
    initialize("navigator", 100)
    initialize("ball", 20)
}

export const initialize = (element, width) => {
    const navigator = document.getElementById(element);
  document.addEventListener("mousemove", (mouse) => {
    navigator.style.left = getPix(mouse.clientX - width/2);
    console.log(navigator.style.width);
  });
}
