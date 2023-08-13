// function to create elements
let creater = (el) => document.createElement(`${el}`);

// create elements
let header = creater("header");
let logo = creater("h1");
let menu = creater("ul");
let content = creater("div");
let footer = creater("footer");

// add classes
header.className = "header";
logo.className = "logo";
menu.className = "menu";
content.className = "content";
footer.className = "footer";

// add elements to page
document.body.append(header);
header.append(logo);
header.append(menu);
document.body.append(content);
document.body.append(footer);

// loop for navbar
for (let index = 0; index <= 4; index++) {
  if (index < 4) {
    let navlist = creater("li");
    navlist.className = `navlist-${index + 1}`;
    menu.append(navlist);
    navlist.style.cssText = "cursor: pointer;";
  }
}

// header content
logo.textContent = "DOM CHALLENGE";
document.querySelector(".navlist-1").textContent = "Home";
document.querySelector(".navlist-2").textContent = "Service";
document.querySelector(".navlist-3").textContent = "About";
document.querySelector(".navlist-4").textContent = "Contact";

// body style
document.body.style.cssText =
  "margin: 0; font-family: Tahoma, Arial; background-color: rgb(236, 236, 236);";

//header style
header.style.cssText =
  "display: flex; justify-content: space-between; align-items: center; background-color: white; padding: 20px";
menu.style.cssText =
  "display: flex; justify-content: space-between; align-items: center; list-style-type : none; gap: 15px; font-size: 20px; ";
logo.style.cssText = "color: rgb(35, 169, 110); font-size: 50px;";

// create content divs
for (let j = 1; j <= 15; j++) {
  let box = creater("div");
  let boxNum = creater("span");
  box.className = "product";
  box.textContent = "product";
  boxNum.textContent = `${j}`;
  box.prepend(boxNum);
  content.append(box);

  // prod style
  box.style.cssText =
    "color: rgb(136, 136, 136); padding: 20px; background-color: white; border: 1px solid rgb(221, 221, 221); width: calc((100% - 40px) / 3); box-sizing: border-box; border-radius: .5rem; text-align: center";
  boxNum.style.cssText =
    "display: block; color: black; font-size: 40px; margin-bottom: 20px;";
}
// content style
content.style.cssText =
  "display: flex; flex-wrap: wrap; gap: 20px; padding: 20px; justify-content: center; min-height: (100vh - 142px); box-sizing: border-box";

// footer text
footer.textContent = "Copyright 2021";

// footer style
footer.style.cssText =
  "background-color: rgb(35, 169, 110); color: white; font-size: 40px; font-wight: bold; text-align: center; padding: 20px";
