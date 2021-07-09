const quotes = require("./db.json")

let { fortunes, inspirations, motivations } = quotes

let compliments = [
  "Gee, you're a smart cookie!",
  "Cool shirt!",
  "Your Javascript skills are stellar.",
]

module.exports = {
  getCompliment: (req, res) => {

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length)
    let randomCompliment = compliments[randomIndex]

    res.status(200).send(randomCompliment)
  },

  getFortune: (req, res) => {
    let randomIndex = Math.floor(Math.random() * fortunes.length)
    let randomFortune = fortunes[randomIndex]

    res.status(200).send(randomFortune)
  },

  getInspiration: (req, res) => {
    let randomIndex = Math.floor(Math.random() * inspirations.length)
    let randomInspiration = inspirations[randomIndex]

    res.status(200).send(randomInspiration)
  },

  getMotivation: (req, res) => {
    let randomIndex = Math.floor(Math.random() * motivations.length)
    let randomMotivation = motivations[randomIndex]

    res.status(200).send(randomMotivation)
  },

  addCompliment: (req, res) => {
      const {compliment} = req.body
      compliments.push(compliment)

      res.status(200).send(compliments[compliments.length - 1])
  },

  addFortune: (req, res) => {
    const {fortune} = req.body
    fortunes.push(fortune)

    res.status(200).send(fortunes[fortunes.length -1])
  },

  addInspiration: (req, res) => {
    const {inspiration} = req.body
    inspirations.push(inspiration)

    res.status(200).send(inspirations[inspirations.length - 1])
  },

  addMotivation: (req, res) => {
    const {motivation} = req.body
    motivations.push(motivation)

    res.status(200).send(motivations)
  }





}
