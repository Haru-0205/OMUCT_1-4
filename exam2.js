const fs = require("fs"); // モジュールの読み込み

const json = fs.readFileSync(exam2.json);
const data = JSON.parse(json);

console.log(data[subject]);
