const fs = require('fs')
const path = require('path')

const madge = require('madge')

const DIAGRAM_PATH = path.join(__dirname, '../docs/depGraph.svg')
const ROOT_PATH = path.join(__dirname, '../src/main.js')

madge(
  ROOT_PATH,
  {
    fontSize: '10px',
    backgroundColor: '#FFFFFF',
    cyclicNodeColor: '#F00000',
    edgeColor: '#666666',
    graphVizOptions: {
      G: {
        rankdir: 'LR'
      }
    },
    includeNpm: true,
    nodeColor: '#000000',
    noDependencyColor: '#008000'
  }
).then((res) => res.svg())
  .then((output) => {
    fs.writeFileSync(DIAGRAM_PATH, output.toString())
    console.log('Diagram saved to ' + path.resolve(DIAGRAM_PATH))
  })