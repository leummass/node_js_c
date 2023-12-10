const fs = require('fs')

// fs = file system

const data = fs.readFileSync('readme.md', 'utf-8');

const newData = data.replace(/React/ig, 'Angular');

fs.writeFileSync('README-Angular.md', newData);