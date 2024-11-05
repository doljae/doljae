const WEATHER_API_KEY = process.env.WEATHER_API_KEY

let fs = require('fs')
let weather = require('openweather-apis')
let qty = require('js-quantities')

const today2 = new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' })
const todayDay = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date(today2))

fs.readFile('template.svg', 'utf-8', (error, data) => {
    if (error) {
        console.error(error)
        return
    }

    data = data.replace('{todayDay}', todayDay)

    data = fs.writeFile('chat.svg', data, (err) => {
        if (err) {
            console.error(err)
            return
        }
    })
})
