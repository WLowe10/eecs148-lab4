const box = document.getElementById("box");
const form = document.getElementById("style_form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const backgroundColorR = Number(formData.get("background_color_r")) || 0;
  const backgroundColorG = Number(formData.get("background_color_g")) || 0;
  const backgroundColorB = Number(formData.get("background_color_b")) || 0;

  const borderColorR = Number(formData.get("border_color_r")) || 0;
  const borderColorG = Number(formData.get("border_color_g")) || 0;
  const borderColorB = Number(formData.get("border_color_b")) || 0;

  const borderWidth = Number(formData.get("border_width")) || 0;

  box.style.borderWidth = borderWidth;
  box.style.borderStyle = "solid";
  box.style.backgroundColor = `rgb(${backgroundColorR}, ${backgroundColorG}, ${backgroundColorB})`;
  box.style.borderColor = `rgb(${borderColorR}, ${borderColorG}, ${borderColorB})`;
});
