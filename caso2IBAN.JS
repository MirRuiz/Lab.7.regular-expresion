//CASO2

const pattern = /^ES\d{2}\s?(\d{4}\s?){4}\d{4}$/
const values = ["ES6600190020961234567890", "ES66 0019 0020 9612 3456 7890"]

values.forEach(value => {
    console.log(pattern.test(value))
})
