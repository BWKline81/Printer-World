const uploadFilesBtn = document.getElementById("file");
const submitFilesBtn = document.getElementById("submit-files");
let fileColor = "None";
let fileMaterial = "None";
let filesUploaded = [];

file.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const fileName = file.name;
  filesUploaded.push(fileName);
  console.log(filesUploaded);
  let numberOfFiles = filesUploaded.length;
  document.getElementById("uploaded-files").style.fontSize = "0.8em";
  document.getElementById(
    "uploaded-files"
  ).textContent = `Uploaded Files (${numberOfFiles}): ${filesUploaded}`;
});

submitFilesBtn.addEventListener("click", () => {
  if (filesUploaded.length === 0) {
    window.alert("Please upload at least one file before submitting.");
    return;
  }
  if (fileColor === "None") {
    window.alert("Please select a color before submitting.");
    return;
  }
  if (fileMaterial === "None") {
    window.alert("Please select a material before submitting.");
    return;
  } else {
    window.alert(
      "Files uploaded successfully! Order has been made and a quote will soon be sent to you for confirmation and payment."
    );
  }
  window.location.href = "upload.html";
});

document.getElementById("blue").addEventListener("click", () => {
  setColor("Blue");
});

document.getElementById("red").addEventListener("click", () => {
  setColor("Red");
});

document.getElementById("yellow").addEventListener("click", () => {
  setColor("Yellow");
});

document.getElementById("green").addEventListener("click", () => {
  setColor("Green");
});

document.getElementById("orange").addEventListener("click", () => {
  setColor("Orange");
});

document.getElementById("purple").addEventListener("click", () => {
  setColor("Purple");
});

document.getElementById("grey").addEventListener("click", () => {
  setColor("Grey");
});

document.getElementById("black").addEventListener("click", () => {
  setColor("Black");
});

document.getElementById("white").addEventListener("click", () => {
  setColor("White");
});

document.getElementById("pink").addEventListener("click", () => {
  setColor("Pink");
});

document.getElementById("rainbow").addEventListener("click", () => {
  setColor("Rainbow");
});

document.getElementById("gold").addEventListener("click", () => {
  setColor("Gold");
});

document.getElementById("pla").addEventListener("click", () => {
  setMaterial("PLA");
});

document.getElementById("wood-pla").addEventListener("click", () => {
  setMaterial("Wood PLA");
});

document.getElementById("petg").addEventListener("click", () => {
  setMaterial("PETG");
});

document.getElementById("tpu").addEventListener("click", () => {
  setMaterial("TPU");
});

document.getElementById("carbon-fiber").addEventListener("click", () => {
  setMaterial("Carbon Fiber");
});

document.getElementById("metal").addEventListener("click", () => {
  setMaterial("Metal");
});

function setColor(color) {
  fileColor = color;
  document.getElementById(
    "colors-heading"
  ).textContent = `Colors: ${fileColor}`;
}

function setMaterial(material) {
  fileMaterial = material;
  document.getElementById(
    "materials-heading"
  ).textContent = `Materials: ${fileMaterial}`;
}
