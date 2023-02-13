const util = require('util')
const moment = require("moment-timezone");
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fs = require("fs");
const { color } = require("../lib/color");
const { getBuffer, getRandom, getGroupAdmins,sleep} = require("../lib/myfunc");
const chalk = require('chalk')
const bg = "https://tinyurl.com/y23xrfhu"
//require("../settings.js")

module.exports = async(client, anu) => {
try{
//
let jeda = false
if(jeda) return Log('anti spam welcome aktif')
jeda = true
  
if(anu.action == "remove" && anu.participants[0].split("@")[0].includes(client.user.id.split(":")[0]) ) return
const from = anu.id
const botNumber = client.user.id 
const groupMet = await client.groupMetadata(from)
const groupName = groupMet.subject  
const allmem = groupMet.participants.length
const mem = anu.participants[0];
const memNumber = mem.split("@")[0];
const timeWib = moment.tz("Asia/Jakarta").format("HH:mm");
const groupMembers = groupMet.participants;
const groupAdmins = getGroupAdmins(groupMembers);                
const pushname =  await client.getName(mem)
  
  
const Add = anu.action == "add" 
const Remove = anu.action == "remove"
const OneMem = anu.participants.length === 1
const NotMe = !mem.includes(botNumber) 
const intro = `
Halo @${memNumber}
Welcome in Gc ${groupName} 
jangan lupa baca dan following rules group
semoga Betah yak `;
const outro = `@${memNumber}\nTelah keluar dari group ${groupName}`

try {
if(mem.includes(botNumber)) { return }
var pp_user = await client.profilePictureUrl(mem, 'image')
} catch (e) {
var pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
};    
try {
var pp_grup = await client.profilePictureUrl(from, 'image')
} catch (e) {
var pp_grup = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
}





                   
//Button In    
let butIn = [
{ buttonId: `y`, 
buttonText: { 
displayText: "Oke siap" }, 
type: 1 },
{ buttonId: `bullyuk `, 
buttonText: { 
displayText: "Intro dulu" }, 
type: 1 } 
 ];         
 
//Button out
let butOut= [{ 
buttonId: `y`, 
buttonText: { 
displayText: "Nitip gorengan" },
type: 1 }
];   

 

 
  
 
 
 
//Group Update Console
if (Remove&& OneMem){
console.log(color("[GRUP UPDATE]", "magenta"), color(`${pushname} telah keluar dari gc`,`green`), color(`${groupName}`,`magenta`))
} else  if (Add && OneMem){ 
console.log(color("[GRUP UPDATE]", "magenta"), color(`${pushname} telah bergabung di gc`,`green`), color(`${groupName}`,`magenta`))
}


//Welcome Type1
if(Add && OneMem && NotMe){ 
let ppUser = await getBuffer(pp_user)
let ppGc = await getBuffer(pp_grup)
let butwel = {
image: ppUser,
caption: intro,
footer: 'Update Group',
buttons: butIn,
mentions: [mem],
headerType: 4,
}
client.sendMessage(from, butwel)
} else if(Remove && NotMe){      
let ppUser = await getBuffer(pp_user)
let ppGc = await getBuffer(pp_grup)
let butleav = {
image: ppUser,
caption: outro,
footer: 'Update Group',
buttons: butOut,
mentions: [mem],
headerType: 4,
}
client.sendMessage(from, butleav)
}

await sleep(5000)  
jeda = false

  
} catch (err) {
jeda = false
console.log(err)
let e = String(err) 
if (e.includes("this.isZero")) {return}
if (e.includes("rate-overlimit")) {return}
if (e.includes('Connection Closed')){ return }
if (e.includes('Timed Out')){ return }
console.log(color('GROUP : %s', 'white'), color(e, 'green'))
}   
}



let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})


















