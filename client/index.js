document.getElementById("complimentButton").onclick = function () {
  axios.get("http://localhost:4000/api/compliment/").then(function (response) {
    const data = response.data
    alert(data)
  })
}

const fortune = document.getElementById("fortuneButton")
const inspireButton = document.getElementById("inspirationButton")
const motivationButton = document.getElementById("motivationButton")

const addCompliment = document.getElementById("addCompliment")
const addFortune = document.getElementById("addFortune")
const addInspiration = document.getElementById("addInspiration")
const addMotivation = document.getElementById("addMotivation")

const boredBtn = document.getElementById('bored')

const text = document.getElementById("submitText")

fortune.addEventListener("click", () => {
  axios.get("http://localhost:4000/api/fortune").then((res) => alert(res.data))
})

inspireButton.addEventListener("click", () => {
  axios
    .get("http://localhost:4000/api/inspiration")
    .then((res) => alert(res.data))
})

motivationButton.addEventListener("click", () => {
  axios
    .get("http://localhost:4000/api/motivation")
    .then((res) => alert(res.data))
})

addCompliment.addEventListener("click", () => {
  axios
    .post("http://localhost:4000/api/compliment/", 
    {
      compliment: text.value,
    }
    )
    .then((res) => alert(`${res.data} has been added to compliments!`))
})

addFortune.addEventListener("click", () => {
  axios
    .post("http://localhost:4000/api/fortune", {
      fortune: text.value,
    })
    .then((res) => alert(`${res.data} added to Fortunes!`))
})

addInspiration.addEventListener("click", () => {
  axios
    .post("http://localhost:4000/api/inspiration", {
      inspiration: text.value,
    })
    .then((res) => alert(`${res.data} added to inspirational quotes!`))
})

addMotivation.addEventListener("click", () => {
  axios
    .post("http://localhost:4000/api/motivation", {
      motivation: text.value,
    })
    .then((res) =>
      alert(`${res.data[res.data.length - 1]} added to motivational quotes`)
    )
})

boredBtn.addEventListener('click', () => {
    axios.get('https://www.boredapi.com/api/activity').then((res) => {
        const activityContainer = document.createElement('div')
        const activity = document.createElement('h1')
        activity.textContent = res.data.activity
        activityContainer.appendChild(activity)
        document.body.appendChild(activityContainer)
    })}

)