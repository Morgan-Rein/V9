global.prefa = ['','!','.',',','🐤','🗿']

global.chalk = require("chalk")
global.fs = require("fs")

const {
smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize
} = require("./lib/myfunction")

/// CREDIT © rxhl © VarelTzy
global.owner = ['6285655649546'] // masukin nomer lu ( nomer utama )
global.botname = ' ᤪᤣ᪰𝐕͢𝐑ᤠ𝐋ᤡ 𝐕͢ᤡ𝟗' // masukin nama lu
global.namabot = " ᤪᤣ᪰𝐕͢𝐑ᤠ𝐋ᤡ 𝐕͢ᤡ𝟗" //Masukin Nama Lu
global.imageurl = 'https://telegra.ph/file/759b57d9703fc2b1c56f9.jpg' //GANTI PP MU MENGGUNAKAN LINK TELEGRA PH
global.isLink = 'https://chat.whatsapp.com/K1uO3AjjRclGnf77eXv3s8' ///GANTI MENGGUNAKAN LINK GRUBMU YA
global.namaowner = "ᤪᤣ᪰𝐕͢𝐚ᤡ𝐫𝐓͢ᤡ𝐱ᤡ𝐒ᤳ"
global.namaCreator = "VarelTzy" //ganti nama lu
global.baileys1 = require('@whiskeysockets/baileys') // gausah di ubah
global.sticker1 = "VarelTzy" // Ganti nama lu
global.packname = "VarelTzy"
global.apitokendo = '' // API AKUN DIGITAL OCEAN ANDA
global.sticker2 = "🌜"
global.gcbuyer = 'https://whatsapp.com/channel/0029Vahy9422ER6b9rNI5Q3v' // ganti grub lu
//////CPANEL////////
global.domain = "" // GANTI DOMAIN PANEL LU
global.apikey = "" // PLTA
global.capikey = "" // PLTC
global.egg = "15"
global.loc = "1"
//========== Api Domain 1 ===========//
global.zone1 = "2d45a678eab00687ebcb1111beffaf2b" // API ZONE 
global.apitoken1 = "Uder60PYuELJi_XrXnE7fPrT6zU-5hs7vG3GWAfZ" // API DOMAIN
global.tld1 = "varrtzy.xyz" /// DOMAIN MU
//========== Api Domain 2 ==========//
global.zone2 = "15b54c77603a62760adc460e595b40a9";
global.apitoken2 = "VokeL_QKoAbU_v1GGCY167keUgd71NZGHZz1bn4s";
global.tld2 = "indovrl.me";
//========== Api Domain 3 ==========//
global.zone3 = "18945bc019c074715f0fc51912fca3fb";
global.apitoken3 = "rjJc75NJnzyie49isUQp_GttFC1jqs-LY8a0yOfM";
global.tld3 = "zteam.site";
//========== Api Domain 4 ==========//
global.zone4 = "796915b986d2d36638d6c1883e52c254";
global.apitoken4 = "njBUt1yBmYgvSZMxkdvN3r_A7UEUB0cAdloLTOY-";
global.tld4 = "vrelxz.online";
//========== Api Domain 5 ==========//
global.zone5 = "00f2e0849ff8b8011c8b1b8f69f629e0";
global.apitoken5 = "as6rOur3jdUTJmLXMBPwe5mX1fjt7o3qvgY1Sala";
global.tld5 = "vrelxz.me";
//========== Api Domain 6 ==========//
global.zone6 = "-";
global.apitoken6 = "-";
global.tld6 = "-";
///////SETTING/////////////////////////////////
global.xchannel = {
	jid: '120363298524333143@newsletter'
	}
	
	global.nick = {
aaa: "‏𝔍𝔄𝔑𝔊𝔄𝔑 𝔅𝔈ℜ𝔄𝔑ℑ 𝔖𝔄𝔐𝔄 𝔖𝔈𝔓𝔘ℌ",
sss: "𝐕𝐚𝐫𝐞𝐥𝐓𝐳𝐲"
}

global.foter1 = '𝐕𝐑𝐋 𝐕𝟖'
global.foter2 = '𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐁𝐲 𝐕𝐚𝐫𝐞𝐥𝐓𝐳𝐲 𝐎𝐟𝐟𝐜'
global.foter3 = '𝐕𝐚𝐫𝐞𝐥𝐓𝐳𝐲 - 𝐁𝐨𝐭 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐓𝐞𝐫𝐯𝐞𝐫𝐢𝐟𝐢𝐤𝐚𝐬𝐢 𝐎𝐥𝐞𝐡 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩'

global.thumbnail = 'https://telegra.ph/file/297c13de0fc1cd2e34338.jpg'

global.idcennel = '120363295175318728@newsletter'
global.namacennel = `「 𝐕𝐑𝐋 𝐕𝟖 」`

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

/////////////// END /////////////////////