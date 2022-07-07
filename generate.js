var fs = require('fs')
var random = require('randomstring')

fs.readFile('src/data.json', (err, data) => {
    if (err) throw err
    let metadata = JSON.parse(data)
    for (let i = 0; i < 20000; i++) {
        metadata.push(random.generate(
            {
                length: 12,
                charset: 'alphabetic'
            }
        ))
    }
    fs.writeFile('src/data.json', JSON.stringify(metadata), (err) => {
        if (err) throw err;
    })
})