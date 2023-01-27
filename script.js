// function to check for white-space
function containsWhitespace(str) {
  return /\s/.test(str);
}

// function to check if string contains digit
function containsNumber(str) {
  return /\d/.test(str);
}

// function to check for marital-status and set active/inactive spouse textfield

function disAbled() {
  document.getElementById("spouse-name").disabled = true;
  document.forms["empform"]["spousename"].value = "";
  document.getElementById("spouse-name").style.backgroundColor =
    "rgba(255, 255, 255, 0.45)";
  document.getElementById("spouse-name").style.border =
    "1px solid rgba(255, 255, 255, 0.45)";
}

function clearError() {
  document.getElementById("f-er").style.display = "none";
  document.getElementById("l-er").style.display = "none";
  document.getElementById("s-er").style.display = "none";
  document.getElementById("f-req").style.display = "none";
  document.getElementById("l-req").style.display = "none";
  document.getElementById("s-req").style.display = "none";
  document.getElementById("d-req").style.display = "none";
  document.getElementById("g-req").style.display = "none";
  document.getElementById("m-req").style.display = "none";
  document.getElementById("c-req").style.display = "none";
  document.getElementById("first-name").style.border =
    "1px solid rgba(216, 191, 216, 0.45)";
  document.getElementById("second-name").style.border =
    "1px solid rgba(216, 191, 216, 0.45)";
  document.getElementById("spouse-name").style.border =
    "1px solid rgba(216, 191, 216, 0.45)";
  document.getElementById("description").style.border =
    "1px solid rgba(216, 191, 216, 0.45)";
}

function maritalStatus() {
  let marital = document.forms["empform"]["marital"];
  if (marital[0].checked == true) {
    document.getElementById("spouse-name").disabled = false;
    document.getElementById("spouse-name").style.backgroundColor =
      "rgba(216, 191, 216, 0.45)";
    document.getElementById("spouse-name").style.border =
      "1px solid rgba(216, 191, 216, 0.45)";
  } else {
    disAbled();
  }
}

function resetForm() {
  document.forms["empform"].reset();
  disAbled();
  clearError();
}

//function to validate form
function validateForm() {
  console.log(1);
  clearError();
  let firstName = document.forms["empform"]["firstname"].value;
  let lastName = document.forms["empform"]["secondname"].value;
  let gender = document.forms["empform"]["gender"];
  let marital = document.forms["empform"]["marital"];
  let description = document.forms["empform"]["description"].value;
  let spouseName = document.forms["empform"]["spousename"].value;

  // checks for empty fields
  if (firstName == null || firstName == "") {
    document.getElementById("f-req").style.display = "inline";
    document.getElementById("first-name").style.border = "2px solid #ed4040";
    return 0;
  }
  if (
    containsWhitespace(firstName) == true ||
    containsNumber(firstName) == true
  ) {
    document.getElementById("f-er").style.display = "inline";
    document.getElementById("first-name").style.border = "2px solid #ed4040";
    return 0;
  }
  
  if (lastName == null || lastName == "") {
    document.getElementById("l-req").style.display = "inline";
    document.getElementById("second-name").style.border = "2px solid #ed4040";
    return 0;
  }
  
  if (
    containsWhitespace(lastName) == true ||
    containsNumber(lastName) == true
  ) {
    document.getElementById("l-er").style.display = "inline";
    document.getElementById("second-name").style.border = "2px solid #ed4040";
    return 0;
  }
  
  if (gender[0].checked == false && gender[1].checked == false) {
    document.getElementById("g-req").style.display = "inline";
    return 0;
  }
  if (marital[0].checked == false && marital[1].checked == false) {
    document.getElementById("m-req").style.display = "inline";
    return 0;
  }
  if (marital[0].checked == true) {
    if (spouseName == null || spouseName == "") {
      document.getElementById("s-req").style.display = "inline";
      document.getElementById("spouse-name").style.border = "2px solid #ed4040";
      return 0;
    }
    if (
      containsWhitespace(spouseName) == true ||
      containsNumber(spouseName) == true
    ) {
      document.getElementById("s-er").style.display = "inline";
      document.getElementById("spouse-name").style.border = "2px solid #ed4040";
      return 0;
    }
  }
  if (description == null || description == "") {
    document.getElementById("d-req").style.display = "inline";
    document.getElementById("description").style.border = "2px solid #ed4040";
    return 0;
  }
  if (document.getElementById("check").checked == false) {
    document.getElementById("c-req").style.display = "inline";
    return 0;
  }

  //thankyou alert if everything works fine
  alert(
    "Employee input has been saved, to input other record press reset button. Thankyou!"
  );
  resetForm();
}
