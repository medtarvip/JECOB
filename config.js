

//contact details
global.ownernomer = "01096937730"
global.dev = ["01096937730","01096937730"]
global.ownername = "𝗠𝗜𝗗𝗢 𝗕𝗜𝗡 𝗔𝗦𝗬𝗨𝗧"
global.ytname = "𝗠𝗜𝗗𝗢 𝗕𝗜𝗡 𝗔𝗦𝗬𝗨𝗧"
global.socialm = "GitHub: 𝗠𝗜𝗗𝗢 𝗕𝗜𝗡 𝗔𝗦𝗬𝗨𝗧"
global.location = "Egypt, cairo, shopra"

global.ownernumber = '01096937730'  //creator number
global.ownername = '𝗠𝗜𝗗𝗢 𝗕𝗜𝗡 𝗔𝗦𝗬𝗨𝗧' //owner name
global.botname = 'Bot Crash  𝐕9 🌴' //name of the bot

//sticker details
global.packname = '\n\n\n\n\n\n\nSticker By'
global.author = '𝗠𝗜𝗗𝗢 𝗕𝗜𝗡 𝗔𝗦𝗬𝗨𝗧⚉\n\nContact: 01096937730'

//console view/theme
global.themeemoji = '🪀'
global.wm = "محمد"

//theme link
global.link = 'https://t.me/MIDO_x12'
global.idch = '120363422217202244@newsletter'

global.baileysDB = 'baileysDB.json'
global.botDb = 'database.json'

//prefix
global.prefa = ['','!','.',',','🐤','🗿'] 

global.limitawal = {
    premium: "Infinity",
    free: 20
}

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v1'

// Global Respon
global.mess = {
    success: 'Done✓',
    admin: `\`[ # ]\` This Command Can Only Be Used By Group Admins !`,
    botAdmin: `\`[ # ]\` This Command Can Only Be Used When Bot Becomes Group Admin !`,
    OnlyOwner: `\`[ # ]\` This Command Can Only Be Used By Premium User ! \n\nWant Premium? Chat Developer.\nTelegram: @VIP_X1B\nWhatsApp: +201096937730`,
    OnlyGrup: `\`[ # ]\` This Command Can Only Be Used In Group Chat !`,
    private: `\`[ # ]\` This Command Can Only Be Used In Private Chat !`,
    wait: `\`[ # ]\` Wait Wait a minute`,
    notregist: `\`[ # ]\` You are not registered in the Bot Database. Please register first.`,
    premium: `\`[ # ]\` This Command Can Only Be Used By Premium User ! \n\nWant Premium? Chat Developer.\nYouTube: @VIP_X1B\nTelegram:@VIP_X1B \nWhatsApp: +201096937730`,
}

// ملف config.js
module.exports = {
    banner: [
        "01096937730@s.whatsapp.net",
        "20@s.whatsapp.net",
        "01096937730@s.whatsapp.net",
        "20@s.whatsapp.net",
        "20@s.whatsapp.net",
        "20@s.whatsapp.net"
    ]
};

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})