const reference = [
    ["M", 1000],
    ["CM", 900],
    ["D",  500],
    ["CD", 400],
    ["C",  100],
    ["XC",  90],
    ["L",   50],
    ["XL",  40],
    ["X",   10],
    ["IX",   9],
    ["V",    5],
    ["IV",   4],
    ["I",    1]
    ];
    let conversion = [];
    const input = document.getElementById("number");
    const convertBtn = document.getElementById("convert-btn");
    const output = document.getElementById("output")
    
    convertBtn.addEventListener('click', ()=>{});
    
    const isInputValid = (str, int) => {
      let errorText = "";
    
      if (!str || str.match(/[e.]/g)) {
          errorText = "Please enter a valid number";
        } else if (int < 1) {
          errorText = "Please enter a number greater than or equal to 1";
        } else if (int >= 4000) {
          errorText = "Please enter a number less than or equal to 3999";
        } else {
          return true
        }
      output.classList.add("alert")
      output.innerText = errorText
      }
    
    const convertToRoman = (num) => {
      conversion = [];
      reference.forEach((pair) => {
        while (num >= pair[1]) {
          conversion += pair[0];
          num -= pair[1];
        }
      })
    }
    
    const clearOutput = () => {
      output.classList.remove("alert")
      output.innerText = ""
    }
    
    const updateUI = () => {
      const inputStr = input.value;
      const inputNum = parseInt(inputStr)
    
      clearOutput();
      
      if (isInputValid(inputStr, inputNum)) {
        convertToRoman(inputNum);
        output.classList.remove("hidden");
        output.innerText = conversion;
      }
    }
    
    convertBtn.addEventListener("click", ()=> {updateUI();})
    
    
    
    
    