
"use strict";
//process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
require("./settings.js")
const {
Browsers,
DisconnectReason,
makeInMemoryStore,
useSingleFileAuthState,
useMultiFileAuthState,
makeCacheableSignalKeyStore,
fetchLatestBaileysVersion,
  generateMessageTag
} = require("@adiwajshing/baileys")
const fs = require("fs");
const logg = require('pino')
const simple = require('./lib/simple') 
//const yargs = require('yargs/yargs')
const CFonts = require('cfonts')
const path = require('path')
const { Boom } = require('@hapi/boom')
const _ = require('lodash')
const { color} = require("./lib/color");
const spin = require('spinnies')
const {getRandom, getBuffer,sleep} = require("./lib/myfunc");
let session = `./database/${sessionName}.json`
if(runWith.includes("eplit")){
//const {app} = require("./src/keepalive.js") 
}
const connect = require("./server.js")
const PORT = process.env.PORT || 3000   

 process.on('uncaughtException', console.error)



 
const spinner = { 
  "interval": 120,
  "frames": [
"✖ [░░░░░░░░░░░░░░░]",
"✖ [■░░░░░░░░░░░░░░]",
"✖ [■■░░░░░░░░░░░░░]",
"✖ [■■■░░░░░░░░░░░░]",
"✖ [■■■■░░░░░░░░░░░]",
"✖ [■■■■■░░░░░░░░░░]",
"✖ [■■■■■■░░░░░░░░░]",
"✖ [■■■■■■■░░░░░░░░]",
"✖ [■■■■■■■■░░░░░░░]",
"✖ [■■■■■■■■■░░░░░░]",
"✖ [■■■■■■■■■■░░░░░]",
"✖ [■■■■■■■■■■■░░░░]",
"✖ [■■■■■■■■■■■■░░░]",
"✖ [■■■■■■■■■■■■■░░]",
"✖ [■■■■■■■■■■■■■■░]",
"✖ [■■■■■■■■■■■■■■■]"
  ]}
let globalSpinner;
const getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'green', spinner, disableSpins});
return globalSpinner;
}
let spins = getGlobalSpinner(false)
const start = (id, text) => {
spins.add(id, {text: text})
}
const success = (id, text) => {
spins.succeed(id, {text: text})

}



CFonts.say('fearless', {
  font: 'chrome',
  align: 'left',
  gradient: ['red', 'magenta']
})





const msgRetryCounterMap = {}
const useStore = !process.argv.includes('--no-store')
const doReplies = !process.argv.includes('--no-reply')
const connectToWhatsApp = async () => {
  
const {Low} = (await import("lowdb"))
const got = (await import("got"))
const chalk =  (await import("chalk"))

const { JSONFile } = (await import("lowdb/node"))
global.db = new Low( new JSONFile(`database/database.json`))
//global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())

global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(conn), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read()
global.db.READ = false
global.db.data = {
allcommand: [],
anonymous: [],
blockcmd: [],
banned: [],
premium: [],
claim: [],
data: [],
sewa: [],
antispam: [],
dashboard: [],
listerror: [],
sticker: [],
audio: [],
hittoday: [],
clearchat: [],
users: {},
chats: {},
settings : {},
others: {},
...(global.db.data || {})
}
global.db.chain = _.chain(global.db.data)
}
loadDatabase()


  
//const { state, saveCreds } = await useSingleFileAuthState('session')

const { state, saveCreds } = await useMultiFileAuthState("session")
   

const store = useStore? makeInMemoryStore({ logger: logg().child({ level: 'fatal', stream: 'store' }) }) : undefined
const { version, isLatest } = await fetchLatestBaileysVersion()

if (global.db.data) await global.db.write() 

const connectionOptions = {
  version,
  printQRInTerminal: true,
  logger: logg({ level: 'fatal' }),
  msgRetryCounterMap,
  auth: {
			creds: state.creds,
			/** caching makes the store faster to send/recv messages */
			keys: makeCacheableSignalKeyStore(state.keys, logg().child({ level: 'fatal', stream: 'store' })),
		},
  generateHighQualityLinkPreview: true,
  browser: Browsers.macOS('Desktop'),
  syncFullHistory: true,
  keepAliveIntervalMs: 60000,
  markOnlineOnConnect: true
}
global.conn = simple.makeWASocket(connectionOptions)
connect(conn, PORT)

store.bind(conn.ev)
conn.waVersion = version

conn.ev.on('call', async (node) => {
                const { from, id, status } = node[0]
Log(from)
                if (status == 'offer') {
                    const stanza = {
                        tag: 'call',
                        attrs: {
                            from: conn.user.id,
                            to: from,
                            id: conn.generateMessageTag(),
                        },
                        content: [
                            {
                                tag: 'reject',
                                attrs: {
                                    'call-id': id,
                                    'call-creator': from,
                                    count: '0',
                                },
                                content: undefined,
                            },
                        ],
                    }
                    await conn.query(stanza)
                }
            })




  
conn.ev.process(

async(events) => {

if(events['connection.update']) {
const update = events['connection.update']
const { connection, lastDisconnect } = update
const  reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (global.db.data == null) await loadDatabase() 
if (connection === 'close') {

console.log(color(lastDisconnect.error, 'deeppink'));

if(lastDisconnect.error == "Error: Stream Errored (unknown)"){
process.send('reset')

} else if (reason === DisconnectReason.badSession) { 
  
console.log(color(`Bad Session File, Please Delete Session and Scan Again`)); 
process.send('reset')
  
} else if (reason === DisconnectReason.connectionClosed) { 
  
console.log(color("[SYSTEM]", "white"), color('Connection closed, reconnecting...', 'deeppink')); 
process.send('reset')
  
} else if (reason === DisconnectReason.connectionLost) { 
  
console.log(color("[SYSTEM]", "white"), color('Connection lost, trying to reconnect', 'deeppink'));
process.send('reset')
  
} else if (reason === DisconnectReason.connectionReplaced) { 
  
console.log(color("Connection Replaced, Another New Session Opened, Please Close Current Session First"));
conn.logout(); 
  
} else if (reason === DisconnectReason.loggedOut) { 
  
console.log(color(`Device Logged Out, Please Scan Again And Run.`)); 
conn.logout(); 
  
} else if (reason === DisconnectReason.restartRequired) {
  
console.log(color("Restart Required, Restarting...")); 
connectToWhatsApp(); 
process.send('reset')
  
} else if (reason === DisconnectReason.timedOut) {
  
console.log(color("Connection TimedOut, Reconnecting..."));
connectToWhatsApp(); 

}

} else if (connection === 'connecting') {
console.log(`${color(`[`,`white`)+color(`1`,`red`)+color(`]`,`white`)}`,`WA v${version.join('.')}`)
//await sleep(400) 
console.log(`${color(`[`,`white`)+color(`2`,`red`)+color(`]`,`white`)}`,`${calender}`)
//await sleep(400) 
console.log(`${color(`[`,`white`)+color(`3`,`red`)+color(`]`,`white`)}`,`https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`)
//await sleep(400)  
console.log(`${color(`[`,`white`)+color(`4`,`red`)+color(`]`,`white`)}`,"data 5") 
//await sleep(400)  
console.log(color(`]─`,`magenta`),`「`,  color(`EXTREAM`,`red`), `」`,  color(`─[`,`magenta`))
//await sleep(400)  
start(`1`,`Connecting...`)
} else if (connection === 'open') { 
success(`1`,`[■■■■■■■■■■■■■■■] Connected`) 
}
}

// credentials updated -- save them
if(events['creds.update']) {
//await saveState()
await saveCreds()
}

if(events.call) {
//console.log('recv call event', events.call)
}

if(events['presence.update']) {
const json = events['presence.update']
if(json.id.endsWith("net")){
let sender = json.id
let status = Object.values(json.presences)
Log(json.id)
console.log(json.presences[json.id].lastKnownPresence)
}
  
}
  
  
 // received a new message
if(events['messages.upsert']) {
const chatUpdate = events['messages.upsert']
try{
if (global.db.data) await global.db.write() 
if (!chatUpdate.messages) return;
var m = chatUpdate.messages[0] || chatUpdate.messages[chatUpdate.messages.length - 1]
if (!m.message) return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
m = simple.smsg(conn, m, store)
 
require('./message/case')(conn, m, chatUpdate,store)
  
}catch (err){
Log("Error bro")
console.log(err)
}
}


if(events['group-participants.update']) {
const anu = events['group-participants.update']
require('./message/group.js')(conn, anu)
}



// history received
if(events['messaging-history.set']) {
const { chats, contacts, messages, isLatest } = events['messaging-history.set']
console.log(`recv ${chats.length} chats, ${contacts.length} contacts, ${messages.length} msgs (is latest: ${isLatest})`)
			}  
  

  
//------------------------------------[BATAS]--------------------------------\\

})


 /**
         * 
         * @param {*} jid 
         * @param {*} path 
         * @param {*} quoted 
         * @param {*} options 
         * @returns 
         */
    conn.sendImageAsSticker = async (jid, media, dev, options = {}) => {
    let { Sticker, StickerTypes } = require('wa-sticker-formatter')
    let jancok = new Sticker(media, {
        pack: packName, // The pack name
        author: authorName, // The author name
        type: StickerTypes.FULL, // The sticker type
        categories: ['🤩', '🎉'], // The sticker category
        id: '12345', // The sticker id
        quality: 50, // The quality of the output file
        background: '#FFFFFF00' // The sticker background color (only for full stickers)
    })
    let stok = getRandom(".webp")
    let nono = await jancok.toFile(stok)
    let nah = fs.readFileSync(nono)
    await conn.sendMessage(jid,{sticker: nah},{quoted: dev})
    return await fs.unlinkSync(stok)
     }


  
const toFirstCase = (str) =>{
 let first = str.split(" ")              // Memenggal nama menggunakan spasi
.map(nama => 
nama.charAt(0).toUpperCase() + 
nama.slice(1))                 // Ganti huruf besar kata-kata pertama
.join(" ");

return first
 }


 const Log = (text) =>{
  console.log(text)
 }
  
const isNumber = x => typeof x === 'number' && !isNaN(x)

let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
const calender = d.toLocaleDateString("id", {
day: 'numeric',
month: 'long',
year: 'numeric'
})

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

global.got = got
global.chalk = chalk
global.clockString = clockString
global.week = week
global.calender = calender  
global.isNumber = isNumber 
global.Log = Log
global.toFirstCase = toFirstCase
global.anonymousUrl = db.data.settings["anonymousUrl"]? db.data.settings["anonymousUrl"].link : anonymousImg
global.botUrl =  db.data.settings["botUrl"]? db.data.settings["botUrl"].link : botImg
global.fakegifUrl = db.data.settings["fakegifUrl"]? db.data.settings["fakegifUrl"].link : fakegifImg
global.quotedUrl =  db.data.settings["quotedUrl"]? db.data.settings["quotedUrl"].link : quotedImg
global.replyUrl =  db.data.settings["replyUrl"]? db.data.settings["replyUrl"].link : replyImg
global.thumbUrl = db.data.settings["thumbUrl"]? db.data.settings["thumbUrl"].link : thumbImg
global.thumbnaildokumenUrl =  db.data.settings["thumbnaildokumenUrl"]? db.data.settings["thumbnaildokumenUrl"].link : thumbnaildokumenImg
global.videoUrl =  db.data.settings["videoUrl"]? db.data.settings["videoUrl"].link : videoMp4
global.webUrl =  db.data.settings["webUrl"]? db.data.settings["webUrl"].link : webImg
return conn
 }

connectToWhatsApp()
    


    
    