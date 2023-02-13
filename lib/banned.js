const fs = require('fs')
const { color } = require("./color");
const chalk = require('chalk')
const toMs = require('ms')



    /**
 * Add user to bannedList database
 * @param {String} userId
 * @param {String} expired
 * @param {Object} _data
 */
 const addBanned = (nama, tanggal, userId, info, _dir ) => {

const obj = { name: nama, id: userId, date: tanggal, reason: info }
   _dir.push(obj)
   //fs.writeFileSync('./database/banned.json', JSON.stringify(_dir))

 }


   
/**
 * Unbanned someone.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Number}
 */
 const unBanned = (userId, _data) => {
    let position = null
    Object.keys(_data).forEach((i) => {
        if (_data[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        _data.splice(position, 1)
       // fs.writeFileSync('./database/banned.json', JSON.stringify(_data))
    }
    return true
}






/**
 * Check user is premium.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Boolean}
 */
 const cekBannedUser = (userId, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            status = true
        }
    })
    
    return status
}


const clearAllBan = (_dir) => {
    Object.keys(_dir).forEach((i) => {
        _dir.splice(_dir[i], 1)
       // fs.writeFileSync('./database/banned.json', JSON.stringify(_dir))
    })
console.log("Sukses clear all ban")
}

module.exports = {
    addBanned,
    unBanned,
    cekBannedUser,
    clearAllBan
    
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.bgGreen(color("[  UPDATE ]", "black")),chalk.white(`${__filename}`) )
delete require.cache[file]
require(file)
})
