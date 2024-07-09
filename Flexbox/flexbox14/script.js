

// -------- global elements 
let cssOutput = document.getElementById("css-text-output");
let flexContainer = document.getElementById("flex-container");
let boxNumber = document.getElementById("number-of-boxes");
let parentPropertyInputs = document.getElementsByClassName("parent-property");
let codeMode = "css"; // or bootstrap
let codeChoices = document.querySelectorAll("input[name='code']")

let bootstrapReference = 
  {"display": 
      {
        "flex": "d-flex"
      },
   "justify-content":
      {
        "flex-start": "justify-content-start",
        "flex-end": "justify-content-end",
        "center": "justify-content-center",
        "space-between": "justify-content-between",
        "space-around": "justify-content-around",
        "space-evenly": ""
      },
   "flex-direction":
      {
        "row": "flex-row",
        "row-reverse": "flex-row-reverse",
        "column": "flex-column",
        "column-reverse": "flex-column-reverse"
      },
   "flex-wrap":
      {
        "nowrap": "flex-nowrap",
        "wrap": "flex-wrap",
        "wrap-reverse": "flex-wrap-reverse"
      },
   "align-items":
      {
        "flex-start": "align-items-start",
        "flex-end": "align-items-end",
        "center": "align-items-center",
        "baseline": "align-items-baseline",
        "stretch": "align-items-stretch"
      },
   "align-content":
      {
        "flex-start": "align-content-start",
        "flex-end": "align-content-end",
        "center": "align-content-center",
        "space-between": "",
        "space-around": "align-content-around",
        "stretch": "align-content-stretch",
      }
};



// --------- adding event listeners
for (let element of parentPropertyInputs) {
  // apply css that is selected once any button is clicked
  element.addEventListener("click", function(){
    applyCSS();
  })
}

// --------- following two are to set the code mode
document.getElementById("bootstrap-code-button").addEventListener("click", function(){
  codeMode = "bootstrap";
  applyCSS();
});


document.getElementById("css-code-button").addEventListener("click", function(){
  codeMode = "css";
  applyCSS();
});

['change','keyup'].forEach( function(event) {
  // event listener when user changes number of boxes for example output
    boxNumber.addEventListener(event, addOrRemoveBoxes)
});


// ------- utility functions
function cssToBootstrap(property, value) {
  // receive css property and value and return bootstrap equivalent
}



//TODO: split the applycss into two functions to separate the css and bootstrap
function applyCSS(property, value) {
  let inputList = document.querySelectorAll("input:checked")
  let newStyleText = "";
  let bootstrapCode = "";
  for (let input of inputList){
    // cycle through all selected radio buttons and create CSS rules for them
    // or make the bootstrap class names if codeMode == bootstrap
    let property = input.getAttribute("css-property");
    let value = input.getAttribute("css-value");
    if (property && value) {
      newStyleText += `${property}: ${value};` 
      if (codeMode == "bootstrap") {
        bootstrapCode += bootstrapReference[property][value] + " ";
      }
      }
    }
  flexContainer.style.cssText = newStyleText; // apply the styles to the flex example container
  if (codeMode == "css") {
    // output the css code (CSS)
    cssOutput.innerHTML = `/*---CSS---*/<br><br>.container {
  ${newStyleText.split(';').join(';<br>  ')}}`// formatCode(newStyleText);  
  } else if (codeMode == "bootstrap") {
    // output the bootstrap code (HTML)
    cssOutput.innerHTML = `&lt;-- Bootstrap / HTML --&gt;<br><br>&lt;div class="container ${bootstrapCode.trim()}"&gt;&lt;/div&gt;`
  }
  
}

function addOrRemoveBoxes() {
  // called from event listener to add or remove boxes in example output
  let newHTML = '';
      for (let i = 0; i < boxNumber.value; i++) {
        newHTML += `<div class="flex-example-box">${i+1}</div>`
      }
      flexContainer.innerHTML = newHTML;
}


