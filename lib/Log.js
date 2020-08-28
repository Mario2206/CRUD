const chalk = require("chalk")

module.exports = {

    connection : (msg)=> {
        console.log(chalk.grey(msg));
    },

    request : (msg) => {
        console.log(chalk.green(msg));
    },

    route : (msg) => {
        console.log(chalk.yellow(msg));
    },

    error : (msg)=> {
        console.error(chalk.red(msg));
    }
}