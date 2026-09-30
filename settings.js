
const fs = require("fs");
const chalk = require("chalk")

global.BOT_TOKEN = "8968164820:AAEiq4O9i7TBqicxvsEflbEDrIzN__b0ITQ" // create bot here https://t.me/Botfather and get bot token
global.BOT_NAME = "محـ👨‍💻꙰᭄ــمد يـحـي 𝑀͎𝒐͎𝒽͎𝒶͎𝓂͎𝓂͎𝑒͎𝒹" //your bot name
global.OWNER_NAME = "https://t.me/med_tar" //your name with sign @
global.OWNER = ["https://t.me/med_tar", "https://t.me/med_tar"] // Make sure the username is correct so that the special owner features can be used.
global.DEVELOPER = ["7224688457"] //developer telegram id to operate addprem delprem and listprem
global.pp = 'https://pin.it/5W3wbURdm' //your bot pp


//approval
global.GROUP_ID = -1004410548051; // Replace with your group ID
global.CHANNEL_ID =  -1004431517325; // Replace with your channel ID
global.GROUP_LINK = "https://t.me/+bFTSoauBathiNjA0"; // Replace with your group link
global.CHANNEL_INVITE_LINK = "https://t.me/MY_CRASHBUG"; // Replace with your private channel invite link
global.WHATSAPP_LINK = "https://wa.me/22242203253"; // Replace with your group link
global.YOUTUBE_LINK = "https://youtube.com/@mido_king_assiut?si=kN2CmqEqyohdj-fq"; // Replace with your youtube link
global.INSTAGRAM_LINK = "https://whatsapp.com/channel/0029VazbCte0bIdtiH7R4E35"; // Replace with your ig link

global.owner = global.owner = ['+22242203253'] //owner whatsapp

const {
   english
} = require("./lib");
global.language = english
global.lang = language

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})