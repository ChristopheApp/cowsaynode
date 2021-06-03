var cowsay = require("cowsay");
const information = require('./information.js')

console.log(cowsay.say({
    text : `hello i am ${information.name} from ${information.campus} campus`,
    e : "oO",
    T : "U "
}));