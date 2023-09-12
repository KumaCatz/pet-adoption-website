const fs = require('fs')

class DB {
  constructor(name) {
    this.name = name
    this.path = `src/server/db/${name}.json`
  }

  getData = () => {
    const json = fs.readFileSync(this.path)
    const parsed = JSON.parse(json)
    return parsed
  }

  add = (body) => {
    const arr = this.getData()
    arr.push({...body})
    fs.writeFileSync(this.path, JSON.stringify(arr))
  }
}

module.exports = DB