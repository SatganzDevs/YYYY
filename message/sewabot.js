

exports.dada = (prefix, pushname, ucapanWaktu) => {
return `${ucapanWaktu} kak ${pushname}
Berikut adalah list harga untuk sewa botz

*Paket Goceng*
*Harga*
- Pengguna baru Rp. 5000 
- Perpanjang Rp. 3000
- Masa aktif 15 Hari

*Paket Ceban*
*Harga*
- Pengguna baru Rp. 10.000
- Perpanjang Rp. 5000
- Masa aktif 30 Hari

*User Premium*
*Harga*
- Pengguna baru Rp. 5.000 
- Perpanjang Rp. 3.000
- Masa aktif  30 Hari / 1 Bulan

*Fitur Premium*
• Limit tanpa batas
• Klaim lebih banyak EXP Harian
• Hidetag, mentionAll member
• Bisa membuat/mengubah watermark stiker
• 
• Dan masih banyak lagi

𝗡𝗢𝗧𝗘 : 

Bot on 24 jam tapi kadang 
juga mati klo lgi ada error 
atau lgi perbaikan bug.

Kalo mau sewa bisa chat
owner Bot, khusus untuk free 
sewa 1 hari bisa pake fitur
${prefix}freeoneday <Link Gc>
tanpa harus chat owner
`
}

const fs = require("fs");
const { color } = require("../lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})




















