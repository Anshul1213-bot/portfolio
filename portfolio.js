var layers = [
  ["MongoDB", "Stores products, users and orders for my e-commerce app. I also use MySQL when the data is highly relational, as in the school management system."],
  ["Express.js", "Powers the REST APIs and secure admin login that connect each frontend to its database."],
  ["React.js", "Builds the interfaces: responsive storefronts, dashboards and small tools, styled with Tailwind CSS."],
  ["Node.js", "Runs the server side in JavaScript, so one language covers the whole application."]
];
var buttons = document.querySelectorAll(".layers button");
var panel = document.getElementById("panel");

function showLayer(index) {
  buttons.forEach(function (button, buttonIndex) {
    button.setAttribute("aria-pressed", buttonIndex === index ? "true" : "false");
  });

  panel.innerHTML = "<h3></h3><p></p>";
  panel.querySelector("h3").textContent = layers[index][0];
  panel.querySelector("p").textContent = layers[index][1];
}

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    showLayer(Number(button.dataset.i));
  });
});

showLayer(0);
