//your JS code here. If required.
// get the DOM elements
const status = document.getElementById("status");
const enterBtn = document.getElementById("enterBtn");

// add a click event listener to the button
enterBtn.addEventListener("click", () => {
  // create a new h1 element
  const heading = document.createElement("h1");
  // set the text of the heading
  heading.textContent = "Entered Metaverse";
  // replace the existing p element with the new heading element
  status.parentNode.replaceChild(heading, status);
});
