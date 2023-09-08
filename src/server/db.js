const fs = require('fs')

class DB {
  constructor(name) {
    this.name = name
    this.path = `src/server/db/${name}.json`
  }

  GET = () => {
    return fs.readFileSync(this.path)
  }
}

module.exports = DB