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

  addData = (body) => {
    const arr = this.getData()
    const newId = arr.length + 1
    arr.push({
      id: newId,
      ...body
    })
    fs.writeFileSync(this.path, JSON.stringify(arr, null, 2))
    return newId
  }
  
  compareData = (body, par) => {
    const arr = this.getData()

    return arr.some(ele => ele[par] === body[par])
  }

  getDataByPar = (body, par) => {
    const arr = this.getData()

    return arr.find(ele => ele[par] === body[par])
  }
}

module.exports = DB