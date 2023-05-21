let main = document.querySelector(".main_div");

function colorButton() {
  let circles = document.querySelectorAll(".circle");

  let colors = ["blue", "yellow", "red", "pink", "gray"];
  for (let i = 0; i < colors.length; i++) {
    let main = document.querySelector(".btns");
    let Color_buttons = document.createElement("button");

    Color_buttons.style.backgroundColor = colors[i];

    Color_buttons.addEventListener("click", () => {
      circles.forEach((circle) => {
        circle.style.borderBottomColor = colors[i];
      });
    });
    main.appendChild(Color_buttons);
  }

  const fileInput = document.createElement("input");
  fileInput.setAttribute("type", "file");
  fileInput.id = "file";
  fileInput.setAttribute("hidden", true);
  main.appendChild(fileInput);
  const fileInputBtn = document.createElement("label");
  fileInputBtn.innerHTML = "upload file";
  fileInputBtn.style.width = "100px";
  fileInputBtn.style.padding = "15px";
  fileInputBtn.style.backgroundColor = "cyan";
  fileInputBtn.setAttribute("for", fileInput.id);

  const fileUploaderDiv = document.querySelector(".file_uploader");
  fileInput.addEventListener("change", (event) => {
    console.log(event);
    const files = event.target.files;
    const fileName = files.length > 0 ? files[0].name : "";
    if (fileName) {
      const fileNode = document.createElement("label");
      fileNode.style.color = "black";
      fileNode.style.zIndex = 9;
      fileNode.innerHTML = fileName;
      const cirles = document.getElementsByClassName("circle");
      const _5circle = circles[5];
      _5circle.appendChild(fileNode);
    }
  });
  fileUploaderDiv.appendChild(fileInputBtn);
}
colorButton();
