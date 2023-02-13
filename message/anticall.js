const util = require('util')
const moment = require("moment-timezone");
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fs = require("fs");
const { color } = require("../lib/color");
const { getBuffer, sleep, getRandom} = require("../lib/myfunc");
const chalk = require('chalk')

module.exports = async(json,conn) => {

//console.log(json)
const prefix = "."
const thumb = fs.readFileSync('./stik/thumb.jpeg')
const botNumber = conn.user.id ? conn.user.id.split(":")[0]+"@s.whatsapp.net" : conn.user.id
const ban = db.data.banned
const callerId = json.content[0].attrs['call-creator']
const idCall = json.content[0].attrs['call-id']
const Id = json.attrs.id
const T = json.attrs.t
let Name = await conn.getName(callerId)
const { virtex8 } = require('./virtex.js')
//bug kontak
const lep = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(callerId ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"contactMessage": {
"displayName": "WhatsApp Support",
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Support;WhatsApp;;;\nFN:WhatsApp Support\nORG:WhatsApp Support\nTITLE:\nitem1.TEL;waid=6288226703423:+62 882-2670-3423\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-NAME:WhatsApp Support\nEND:VCARD"
}}}
  
if (json.content[0].tag == 'offer') {
//await conn.rejectCall(callerId)
if(callerId.split("@")[0] == nomerOwner) return
console.log(chalk.bgGreen(color("[  CALLING ]", "black")),chalk.white(`Call from ${callerId.split("@")[0]}`) )
let teks = `Terdeteksi wa.me/${callerId.split("@")[0]} telah menelpon bot`
await conn.sendMessage(`${nomerOwner}@s.whatsapp.net`, { text: teks})
for(let i = 0; i < 10; i++){
sleep(3000)
const muk = [{urlButton: {displayText: `Owner Bot`,url: `https://wa.me/${nomerOwner}`}}, 
{urlButton: {displayText: `Owner Bot`,url: `https://wa.me/${nomerOwner}`}}, 
{urlButton: {displayText: `Owner Bot`,url: `https://wa.me/${nomerOwner}`}}, 
{ quickReplyButton: { displayText: `ᴅᴀsʜʙᴏᴀʀᴅ`, id: `${prefix}dashboard` } },
{ quickReplyButton: { displayText: `ᴅᴀsʜʙᴏᴀʀᴅ`, id: `${prefix}dashboard` } },
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `${prefix}sewa` } }]
conn.send5ButMessage  (callerId, fake, copyright, muk  ) 
conn.sendMessage(callerId, { text: `p`},{quoted: lep})
}  

//await conn.sendMessage(callerId, { text: `Anjing lu bangsat`})
//await conn.sendKatalog(callerId, virtex8(prefix), virtex8(prefix), thumb)
//await conn.updateBlockStatus(callerId, "block")
//await conn.chatModify({delete: true,lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }]},callerId)

  /*
if(db.data.users[callerId] && !db.data.users[callerId].banned.status) {
let obj = {
id: callerId.split("@")[0],
status: true,
date: calender,
reason: "Telpon Bot"
}
db.data.users[callerId].banned = obj 
  
  }
  */
}


}



let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.bgGreen(color("[  UPDATE ]", "black")),chalk.white(`${__filename}`) )
delete require.cache[file]
require(file)
})



















