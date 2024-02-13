import lankaNic from "lanka-nic-2019";

const formEl = document.querySelector("form");
const nicEl = document.querySelector("input");
const avatarEl = document.querySelector("#avatar");
const nicNoEl = document.querySelector("#nicNo");
const newNicNoEl = document.querySelector("#newNicNo");
const genderEl = document.querySelector("#gender");
const dobEl = document.querySelector("#dob");
const nicInfoEl = document.querySelector("#nicInfo");

const male = "./assets/img/male.jpg";
const female = "./assets/img/female.jpg";

let getNIC = () => {
  if (nicEl.value == "") {
    alert("Please enter your NIC number");
    nicEl.focus();
  } else {
    if (lankaNic.validateNic(nicEl.value)) {
      const nicInfo = lankaNic.infoNic(nicEl.value);
      nicInfoEl.classList.remove("hidden");
      nicNoEl.textContent = nicInfo.input.toUpperCase();
      if (nicInfo.format == "new") {
        newNicNoEl.textContent = nicInfo.input;
      } else {
        newNicNoEl.textContent = nicInfo.newFormat;
      }

      let gender = nicInfo.gender;
      genderEl.textContent = gender;
      if (gender == "Male") {
        avatarEl.setAttribute("src", male);
      } else {
        avatarEl.setAttribute("src", female);
      }
      dobEl.textContent = nicInfo.birthday;
    } else {
      alert("Invalid NIC number! please enter your valid NIC number");
    }
  }
};

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  getNIC();
});
