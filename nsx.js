const pkg = require('./package.json')
const neo = require('@neohelden/node')
const fs = require('fs')

neo.log.info(`[NSX] Initializing ${pkg.name} v${pkg.version}`)

neo.task.process(`${pkg.name}.example`, async function (payload) {
  return payload
})

// neo.task.create(`${pkg.name}.example`, particle)

neo.task.process(`${pkg.name}.documentation`, async () => {
  return { response: { data: fs.readFileSync('README.md', 'utf8') } }
})
