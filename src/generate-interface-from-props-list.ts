import * as fs from 'fs'

const args = process.argv
if (args.length !== 3) {
  throw new Error('input file required as first arg')
}
const inputFile = args[2]

interface Generated {
  readonly interface: string
  readonly reactProps: string
}

read()
  .then(generated => {
    console.log(generated.interface)
    console.log(generated.reactProps)
  })
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err)
    process.exit(1)
  })

function read() {
  return new Promise<Generated>((resolve, reject) => {
    fs.readFile(inputFile, (err, content) => {
      if (err) {
        return reject(err)
      }
      const rawString = content.toString()
      const props = rawString.split(',')

      resolve({
        interface: generateInterface(props),
        reactProps: generateReactProps(props)
      })
    })
  })
}

function generateInterface(props: string[]) {
  return (
    props.reduce((prev, curr) => {
      return prev + ` readonly ${curr.trim()}: any\n`
    }, 'interface FooBar {\n') + '}'
  )
}

function generateReactProps(props: string[]) {
  let output = ''
  props.forEach(prop => {
    output += `${prop.trim()}={${prop.trim()}}\n`
  })
  return output
}
