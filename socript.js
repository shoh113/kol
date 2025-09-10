

let  nub1 =document.getElementById("shoh")
let  olma =document.getElementById("islom")
let   chust=document.getElementById("bunyot")
let  shah =document.getElementById("sevinch")
let  btn =document.getElementById("shahruh")

let btnText = prompt("1-soni kiritin ");

let amal = prompt("amalni kiriyin \n1) + \n2) - \n3 * \n4 /");

let btnText2  = prompt("2-soni kiritin ");


nub1.textContent = btnText;
if (amal === "1") {
  olma.textContent = "+";
} else if (amal === "2") {
  olma.textContent = "-";
} else if (amal === "3") {
  olma.textContent = "*";
} else if (amal === "4") {
  olma.textContent = "/";
} else {
  alert("Mavjud bo'lmagan operator kiritdingiz");
}


  chust.textContent = btnText2;

shah.onclick = () => {
  if (amal === "1") {
    btn.textContent = Number(btnText2) + Number( btnText);
  } else if (amal === "2") {
    btn.textContent = Number(btnText2) - Number( btnText);
  } else if (amal === "3") {
    btn.textContent = Number(btnText2) * Number( btnText);
  } else if (amal === "4") {
    btn.textContent = Number(btnText2) / Number( btnText);
  }
};

