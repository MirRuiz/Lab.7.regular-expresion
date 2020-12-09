const pattern = /^(ES\d{2})\d{20}$/
const values = ["ES6600190020961234567890"]
values.forEach(value => {
    console.log(pattern.exec(value))
})