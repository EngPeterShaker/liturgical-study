
const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const regex = /class="[^"]*reveal[^"]*"|class='[^']*reveal[^']*'/g;
let match;
const lines = html.split('\n');

// Simplified check: if an element with reveal has a child with reveal
// We can use a basic stack approach or just search for patterns.

// Better yet, let's just look at the code.
// I suspect Principle slides have nested reveals.
