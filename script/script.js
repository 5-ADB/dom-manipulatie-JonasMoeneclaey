const gebruikers = [
  { id: 1, login: "karel.kleintjes", leeftijd: 14 },
  { id: 2, login: "els.dotjes", leeftijd: 30 },
  { id: 3, login: "piet.pieters", leeftijd: 20 },
  { id: 4, login: "jos.teugels", leeftijd: 13 },
  { id: 5, login: "piet.pollekes", leeftijd: 27 },
];
const login = document.querySelector("#login")
const leeftijd = document.querySelector("#leeftijd")
const toevoegbtn = document.querySelector("#toevoegen")
toevoegbtn.addEventListener("click", () => {
  const idNummer = gebruikers.length + 1
  gebruikers.push({id: idNummer, login: login.value, leeftijd: parseInt(leeftijd.value)})
})

const filterLeeftijd = document.querySelector("#filterLeeftijd")
const ouder = document.querySelector("#ouder")
const jonger = docuement.querySelector("#jonger")
const lijstNamen = document.querySelector("#lijstNamen")

ouder.addEventListener("click", () => {
  gebruikers.forEach((namen) => {
    lijstNamen.innerHTML = namen.login
  })
})
jonger.addEventListener("click", () => {
    gebruikers.forEach((namen) => {
    lijstNamen.innerHTML = namen.login
  })
})

