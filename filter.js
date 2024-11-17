const decorFilter = document.getElementById("filter-decor");
const toolsFilter = document.getElementById("filter-tools");
const toysFilter = document.getElementById("filter-toys");

decorFilter.addEventListener("click", () => {
  if (toolsFilter.checked || toysFilter.checked) {
    return;
  }
  if (decorFilter.checked) {
    console.log("Yo");
    document.getElementById("astronaut").classList.remove("showProduct");
    document.getElementById("astronaut").classList.add("hideProduct");
    document.getElementById("robot").classList.remove("showProduct");
    document.getElementById("robot").classList.add("hideProduct");
    document.getElementById("battery-holder").classList.remove("showProduct");
    document.getElementById("battery-holder").classList.add("hideProduct");
    document.getElementById("hex-coaster").classList.remove("hideProduct");
    document.getElementById("hex-coaster").classList.add("showProduct");
  } else {
    console.log("Sup");
    document.getElementById("astronaut").classList.remove("hideProduct");
    document.getElementById("astronaut").classList.add("showProduct");
    document.getElementById("robot").classList.remove("hideProduct");
    document.getElementById("robot").classList.add("showProduct");
    document.getElementById("battery-holder").classList.remove("hideProduct");
    document.getElementById("battery-holder").classList.add("showProduct");
    document.getElementById("hex-coaster").classList.remove("hideProduct");
    document.getElementById("hex-coaster").classList.add("showProduct");
  }
});

toolsFilter.addEventListener("click", () => {
  if (decorFilter.checked || toysFilter.checked) {
    return;
  }
  if (toolsFilter.checked) {
    document.getElementById("astronaut").classList.remove("showProduct");
    document.getElementById("astronaut").classList.add("hideProduct");
    document.getElementById("robot").classList.remove("showProduct");
    document.getElementById("robot").classList.add("hideProduct");
    document.getElementById("battery-holder").classList.add("showProduct");
    document.getElementById("battery-holder").classList.remove("hideProduct");
    document.getElementById("hex-coaster").classList.remove("showProduct");
    document.getElementById("hex-coaster").classList.add("hideProduct");
  } else {
    document.getElementById("astronaut").classList.remove("hideProduct");
    document.getElementById("astronaut").classList.add("showProduct");
    document.getElementById("robot").classList.remove("hideProduct");
    document.getElementById("robot").classList.add("showProduct");
    document.getElementById("battery-holder").classList.remove("hideProduct");
    document.getElementById("battery-holder").classList.add("showProduct");
    document.getElementById("hex-coaster").classList.remove("hideProduct");
    document.getElementById("hex-coaster").classList.add("showProduct");
  }
});

toysFilter.addEventListener("click", () => {
  if (decorFilter.checked || toolsFilter.checked) {
    return;
  }
  if (toysFilter.checked) {
    document.getElementById("astronaut").classList.add("showProduct");
    document.getElementById("astronaut").classList.remove("hideProduct");
    document.getElementById("robot").classList.add("showProduct");
    document.getElementById("robot").classList.remove("hideProduct");
    document.getElementById("battery-holder").classList.remove("showProduct");
    document.getElementById("battery-holder").classList.add("hideProduct");
    document.getElementById("hex-coaster").classList.remove("showProduct");
    document.getElementById("hex-coaster").classList.add("hideProduct");
  } else {
    document.getElementById("astronaut").classList.remove("hideProduct");
    document.getElementById("astronaut").classList.add("showProduct");
    document.getElementById("robot").classList.remove("hideProduct");
    document.getElementById("robot").classList.add("showProduct");
    document.getElementById("battery-holder").classList.remove("hideProduct");
    document.getElementById("battery-holder").classList.add("showProduct");
    document.getElementById("hex-coaster").classList.remove("hideProduct");
    document.getElementById("hex-coaster").classList.add("showProduct");
  }
});
