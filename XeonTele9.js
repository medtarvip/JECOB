process.on('uncaughtException', console.error);
require("./settings");
const {
    Telegraf,
    Context,
    Markup
} = require('telegraf');
const {
    message,
    editedMessage,
    channelPost,
    editedChannelPost,
    callbackQuery
} = require("telegraf/filters");
const {
    toFirstCase,
    isNumber,
    formatp,
    parseMention,
    resize,
    getRandom,
    generateProfilePicture,
    getCase,
    runtime,
    FileSize,
    h2k,
    makeid,
    kyun,
    randomNomor,
    jsonformat,
    isUrl,
    fetchJson,
    sleep,
    getBuffer
} = require("./lib/myfunc2");
const {
    formatSize
} = require("./lib/myfunc3");
const chalk = require('chalk');
const fs = require('fs');
const fetch = require('node-fetch');
const os = require('os');
const speed = require('performance-now');
const util = require('util');
const yts = require('yt-search');
const axios = require('axios');
const path = require('path');
const cooldowns = new Map();
const {
    simple
} = require('./lib/myfunc');
const adminfile = 'lib/premium.json';

// قراءة ملف المميزين إذا وجد، أو إنشاء واحد جديد
let premiumUsers = [];
try {
    if (fs.existsSync(adminfile)) {
        const data = fs.readFileSync(adminfile, 'utf8');
        premiumUsers = JSON.parse(data);
        console.log(chalk.green(`✅ تم تحميل ${premiumUsers.length} مستخدم مميز`));
    } else {
        // إنشاء الملف إذا لم يكن موجوداً
        fs.writeFileSync(adminfile, JSON.stringify([], null, 2));
        console.log(chalk.yellow('⚠️ تم إنشاء ملف المميزين الجديد'));
    }
} catch (err) {
    console.error(chalk.red('❌ خطأ في قراءة ملف المميزين:'), err);
    premiumUsers = [];
}

// دالة لحفظ البيانات تلقائياً
const savePremiumData = () => {
    try {
        fs.writeFileSync(adminfile, JSON.stringify(premiumUsers, null, 2));
        console.log(chalk.green('💾 تم حفظ بيانات المميزين'));
    } catch (err) {
        console.error(chalk.red('❌ خطأ في حفظ بيانات المميزين:'), err);
    }
};

// إضافة دالة للتحقق من صلاحية المستخدم
const isUserPremium = (userId) => {
    return premiumUsers.includes(userId.toString());
};

// إضافة دالة للتحقق من صاحب البوت أو المطور
const isBotOwner = (ctx) => {
    const userID = ctx.message.from.id.toString();
    const isDev = global.DEVELOPER && global.DEVELOPER.includes(userID);
    const isOwner = OWNER[0].replace("https://t.me/", '') == ctx.update.message.from.username;
    return isDev || isOwner;
};

module.exports = XeonBotInc = async (XeonBotInc, bot) => {
    try {
        const body = XeonBotInc.message.text || XeonBotInc.message.caption || '';
        const budy = (typeof XeonBotInc.message.text == 'string' ? XeonBotInc.message.text : '');
        const {
            isUrl
        } = simple;
        const isCmd = /^[°•π÷×¶∆£¢€¥®™�✓_=|~!?#/$%^&.+-,\\\©^]/.test(body);
        const args = body.trim().split(/ +/).slice(1);
        const text = q = args.join(" ");
        const user = simple.getUserName(XeonBotInc.message.from);
        const pushname = user.full_name;
        const user_id = XeonBotInc.message.from.id + " ";
        const userId = XeonBotInc.message.from.id.toString();
        const username = XeonBotInc.message.from.username ? XeonBotInc.message.from.username : "VIP_X1B";
        const isCreator = OWNER[0].replace("https://t.me/", '') == XeonBotInc.update.message.from.username;
        const from = XeonBotInc.message.chat.id;
        const prefix = isCmd ? body[0] : '';
        const command = isCreator ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : '';
        const isGroup = XeonBotInc.chat.type.includes('group');
        const groupName = isGroup ? XeonBotInc.chat.title : '';

        const isImage = XeonBotInc.message.hasOwnProperty('photo');
        const isVideo = XeonBotInc.message.hasOwnProperty('video');
        const isAudio = XeonBotInc.message.hasOwnProperty('audio');
        const isSticker = XeonBotInc.message.hasOwnProperty('sticker');
        const isContact = XeonBotInc.message.hasOwnProperty('contact');
        const isLocation = XeonBotInc.message.hasOwnProperty('location');
        const isDocument = XeonBotInc.message.hasOwnProperty('document');
        const isAnimation = XeonBotInc.message.hasOwnProperty('animation');
        const isMedia = isImage || isVideo || isAudio || isSticker || isContact || isLocation || isDocument || isAnimation;
        const quotedMessage = XeonBotInc.message.reply_to_message || {};
        const isQuotedImage = quotedMessage.hasOwnProperty('photo');
        const isQuotedVideo = quotedMessage.hasOwnProperty('video');
        const isQuotedAudio = quotedMessage.hasOwnProperty('audio');
        const isQuotedSticker = quotedMessage.hasOwnProperty('sticker');
        const isQuotedContact = quotedMessage.hasOwnProperty('contact');
        const isQuotedLocation = quotedMessage.hasOwnProperty('location');
        const isQuotedDocument = quotedMessage.hasOwnProperty('document');
        const isQuotedAnimation = quotedMessage.hasOwnProperty('animation');
        const isQuoted = XeonBotInc.message.hasOwnProperty('reply_to_message');
        const timestampi = speed();
        const latensii = speed() - timestampi;

        const reply = async (text) => {
            for (var x of simple.range(0, text.length, 4096)) {
                return await XeonBotInc.replyWithMarkdown(text.substr(x, 4096), {
                    disable_web_page_preview: true
                });
            }
        };

        const getStyle = (style_, style, style2) => {
            let listt = `${lang.getStyle(style, style2)}`;
            for (var i = 0; i < 300; i++) {
                listt += '» `' + style_[i] + '`\n';
            }
            reply(listt);
        };

        var typeMessage = body.substr(0, 50).replace(/\n/g, '');
        if (isImage) typeMessage = 'Image';
        else if (isVideo) typeMessage = 'Video';
        else if (isAudio) typeMessage = 'Audio';
        else if (isSticker) typeMessage = 'Sticker';
        else if (isContact) typeMessage = 'Contact';
        else if (isLocation) typeMessage = 'Location';
        else if (isDocument) typeMessage = 'Document';
        else if (isAnimation) typeMessage = 'Animation';

        if (XeonBotInc.message) {
            console.log(chalk.black(chalk.bgWhite('[ CMD ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(body || typeMessage)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname) + '\n' + chalk.blueBright('=> In'), chalk.green(isGroup ? groupName : 'Private Chat', XeonBotInc.message.chat.id));
        }

        const sendMessage = (chatId, text) => bot.sendMessage(chatId, text);

        switch (command) {
            // ==================== أوامر إدارة المميزين ====================
            case 'addpremium': {
                // التحقق من أن المستخدم هو مالك البوت
                if (!isBotOwner(XeonBotInc)) {
                    return XeonBotInc.reply('❌ هذا الأمر متاح فقط لمالك البوت.');
                }

                if (!text) {
                    return XeonBotInc.reply('📝 يرجى تحديد المستخدم لإضافته كمميز.\n\n' +
                        '📌 طرق الاستخدام:\n' +
                        `1. ${prefix}addpremium [ID المستخدم]\n` +
                        `2. ${prefix}addpremium (عن طريق الرد على رسالة المستخدم)`);
                }

                let targetUserId;
                
                // الحصول على ID المستخدم المستهدف
                if (XeonBotInc.message.reply_to_message) {
                    // إذا تم الرد على رسالة
                    targetUserId = XeonBotInc.message.reply_to_message.from.id.toString();
                } else {
                    // إذا تم إدخال ID مباشرة
                    targetUserId = text.trim();
                    
                    // التحقق من أن ID صحيح (أرقام فقط)
                    if (!/^\d+$/.test(targetUserId)) {
                        return XeonBotInc.reply('❌ ID المستخدم يجب أن يكون أرقاماً فقط.');
                    }
                }

                // التحقق إذا كان المستخدم موجوداً بالفعل
                if (premiumUsers.includes(targetUserId)) {
                    return XeonBotInc.reply(`❌ المستخدم ${targetUserId} مضاف بالفعل كمميز.`);
                }

                // إضافة المستخدم إلى القائمة
                premiumUsers.push(targetUserId);
                savePremiumData();

                XeonBotInc.reply(`✅ تم إضافة المستخدم ${targetUserId} كمميز بنجاح.\n\n` +
                    `📊 العدد الإجمالي للمميزين: ${premiumUsers.length}`);
                break;
            }

            case 'removepremium': {
                // التحقق من أن المستخدم هو مالك البوت
                if (!isBotOwner(XeonBotInc)) {
                    return XeonBotInc.reply('❌ هذا الأمر متاح فقط لمالك البوت.');
                }

                if (!text) {
                    return XeonBotInc.reply('📝 يرجى تحديد المستخدم لإزالته من المميزين.\n\n' +
                        '📌 طرق الاستخدام:\n' +
                        `1. ${prefix}removepremium [ID المستخدم]\n` +
                        `2. ${prefix}removepremium (عن طريق الرد على رسالة المستخدم)`);
                }

                let targetUserId;
                
                // الحصول على ID المستخدم المستهدف
                if (XeonBotInc.message.reply_to_message) {
                    // إذا تم الرد على رسالة
                    targetUserId = XeonBotInc.message.reply_to_message.from.id.toString();
                } else {
                    // إذا تم إدخال ID مباشرة
                    targetUserId = text.trim();
                    
                    // التحقق من أن ID صحيح
                    if (!/^\d+$/.test(targetUserId)) {
                        return XeonBotInc.reply('❌ ID المستخدم يجب أن يكون أرقاماً فقط.');
                    }
                }

                // التحقق إذا كان المستخدم موجوداً في القائمة
                if (!premiumUsers.includes(targetUserId)) {
                    return XeonBotInc.reply(`❌ المستخدم ${targetUserId} غير موجود في قائمة المميزين.`);
                }

                // إزالة المستخدم من القائمة
                premiumUsers = premiumUsers.filter(id => id !== targetUserId);
                savePremiumData();

                XeonBotInc.reply(`✅ تم إزالة المستخدم ${targetUserId} من المميزين.\n\n` +
                    `📊 العدد الإجمالي للمميزين: ${premiumUsers.length}`);
                break;
            }

            case 'listpremium': {
                // التحقق من أن المستخدم هو مالك البوت
                if (!isBotOwner(XeonBotInc)) {
                    return XeonBotInc.reply('❌ هذا الأمر متاح فقط لمالك البوت.');
                }

                if (premiumUsers.length === 0) {
                    return XeonBotInc.reply('📭 قائمة المميزين فارغة.');
                }

                // عرض قائمة المميزين مع ترقيم
                let listText = `📋 قائمة المستخدمين المميزين:\n` +
                    `📊 العدد الإجمالي: ${premiumUsers.length}\n\n`;

                premiumUsers.forEach((userId, index) => {
                    listText += `${index + 1}. ${userId}\n`;
                });

                XeonBotInc.reply(listText);
                break;
            }

            case 'checkpremium': {
                let targetUserId;
                
                // الحصول على ID المستخدم المستهدف
                if (XeonBotInc.message.reply_to_message) {
                    // إذا تم الرد على رسالة
                    targetUserId = XeonBotInc.message.reply_to_message.from.id.toString();
                } else if (text) {
                    // إذا تم إدخال ID
                    targetUserId = text.trim();
                } else {
                    // إذا لم يتم تحديد ID، فحص المستخدم الحالي
                    targetUserId = userId;
                }

                // التحقق من صلاحية ID
                if (!/^\d+$/.test(targetUserId)) {
                    return XeonBotInc.reply('❌ ID المستخدم يجب أن يكون أرقاماً فقط.');
                }

                const isPremium = isUserPremium(targetUserId);
                
                if (isPremium) {
                    XeonBotInc.reply(`✅ المستخدم ${targetUserId} هو مستخدم مميز.`);
                } else {
                    XeonBotInc.reply(`❌ المستخدم ${targetUserId} ليس مستخدمًا مميزًا.`);
                }
                break;
            }

            // ==================== الأوامر الأصلية معدلة ====================
            case 'listpair': {
                // التحقق إذا كان المستخدم مميزاً أو مالكاً
                if (!isBotOwner(XeonBotInc)) {
                    return XeonBotInc.reply('❌ هذا الأمر متاح فقط للمستخدمين المميزين.');
                }

                const pairingPath = './lib2/pairing';

                try {
                    if (!fs.existsSync(pairingPath)) {
                        return XeonBotInc.reply('📭 لا توجد أجهزة مقترنة.');
                    }

                    const entries = fs.readdirSync(pairingPath, {
                        withFileTypes: true
                    });

                    const pairedDevices = entries
                        .filter(entry => entry.isDirectory())
                        .map(entry => entry.name.replace('@s.whatsapp.net', ''));

                    if (pairedDevices.length === 0) {
                        return XeonBotInc.reply('📭 لا توجد أجهزة مقترنة.');
                    }

                    const totalUsers = pairedDevices.length;
                    const deviceList = pairedDevices
                        .map((device, index) => `${index + 1}. ${device}`)
                        .join('\n');

                    XeonBotInc.reply(`📊 إجمالي المستخدمين: ${totalUsers}\n\n📱 الأجهزة المقترنة:\n${deviceList}`);
                } catch (err) {
                    console.error('Error reading paired devices directory:', err);
                    return XeonBotInc.reply('❌ فشل في تحميل بيانات الأجهزة المقترنة.');
                }
                break;
            }

            case 'delconnect': {
                // التحقق إذا كان المستخدم مميزاً أو مالكاً
                if (!isUserPremium(userId) && !isBotOwner(XeonBotInc)) {
                    return XeonBotInc.reply('❌ هذا الأمر متاح فقط للمستخدمين المميزين.');
                }

                if (!text) return XeonBotInc.reply(`📝 مثال:\n ${prefix + command} 201234567890`);
                const target = text.split("|")[0];
                const Xreturn = XeonBotInc.message.reply_to_message ? XeonBotInc.message.reply_to_message.from.id :
                    target.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
                var contactInfo1 = Xreturn;
                if (contactInfo1.length == 0) {
                    return reply("❌ الرقم غير مسجل على واتساب");
                }

                const targetID = Xreturn.trim();
                const pairingPath = './lib2/pairing';
                const targetPath = `${pairingPath}/${targetID}`;

                try {
                    if (!fs.existsSync(targetPath)) {
                        return XeonBotInc.reply(`❌ الجهاز المقترن بالرقم "${targetID}" غير موجود.`);
                    }

                    fs.rmSync(targetPath, {
                        recursive: true,
                        force: true
                    });

                    XeonBotInc.reply(`✅ تم حذف الجهاز المقترن بالرقم "${targetID}" بنجاح.`);
                } catch (err) {
                    console.error('Error deleting paired device:', err);
                    return XeonBotInc.reply('❌ حدث خطأ أثناء محاولة حذف الجهاز المقترن.');
                }
                break;
            }

            case 'connect': {
                const libphonenumber = require('libphonenumber-js');
                
                // التحقق إذا كان المستخدم مميزاً
                /*if (!isUserPremium(userId) && !isBotOwner(XeonBotInc)) {
                    return XeonBotInc.telegram.sendMessage(
                        XeonBotInc.chat.id,
                        `💳 أنت غير مصرح لك باستخدام هذا الأمر\n\n` +
                        `📌 هذا الأمر متاح فقط للمستخدمين المميزين\n\n` +
                        `📞 للاستفسارات حول الاشتراك المميز: @lo_tus_19`,
                        {
                            reply_markup: {
                                inline_keyboard: [
                                    [{
                                        text: "👤 المطور",
                                        url: "https://t.me/mora_330"
                                    }]
                                ]
                            },
                            parse_mode: "HTML"
                        }
                    );
                }*/

                const freeStorage = os.freemem() / (1024 * 1024);
                const freeDiskSpace = fs.statSync('/').available / (1024 * 1024);

                if (freeStorage < 300 || freeDiskSpace < 300) {
                    return XeonBotInc.reply('❌ السعة ممتلئة، يرجى المحاولة لاحقًا.');
                }

                // Cooldown للمستخدمين العاديين فقط (ليس المالك)
                if (!isBotOwner(XeonBotInc) && cooldowns.has(userId)) {
                    const lastUsed = cooldowns.get(userId);
                    const now = Date.now();
                    const timeLeft = 30000 - (now - lastUsed);

                    if (timeLeft > 0) {
                        return XeonBotInc.reply(`⏳ يرجى الانتظار ${Math.ceil(timeLeft / 1000)} ثانية قبل استخدام الأمر مرة أخرى.`);
                    }
                }

                if (!text) {
                    return XeonBotInc.reply('📝 يرجى إدخال الرقم للربط.\n\n' +
                        '📌 طريقة الاستخدام:\n' +
                        `/${command} 201234567890\n` +
                        '📌 مثال:\n' +
                        `/${command} 201234567890`);
                }

                const sanitizedNumber = text.replace(/\D/g, '');

                function isValidWhatsAppNumber(phone) {
                    try {
                        const number = libphonenumber.parsePhoneNumber('+' + phone);
                        if (!number || !number.isValid()) {
                            return false;
                        }
                        const localNumberLength = number.nationalNumber.length;
                        return localNumberLength >= 6 && localNumberLength <= 15;
                    } catch (error) {
                        return false;
                    }
                }

                if (!isValidWhatsAppNumber(sanitizedNumber)) {
                    return XeonBotInc.reply('❌ رقم واتساب غير صالح. يرجى إدخال رقم صحيح.');
                }

                const Xreturn = XeonBotInc.message.reply_to_message ? XeonBotInc.message.reply_to_message.from.id :
                    sanitizedNumber + "@s.whatsapp.net";

                var contactInfo = Xreturn;

                if (contactInfo.length == 0) {
                    return XeonBotInc.reply("❌ الرقم غير مسجل في واتساب.");
                }

                const startpairing = require('./rentbot.js');
                await startpairing(Xreturn);
                await sleep(4000);

                try {
                    const cu = fs.readFileSync('./lib2/pairing/pairing.json', 'utf-8');
                    const cuObj = JSON.parse(cu);

                    XeonBotInc.reply(`✅ تم إنشاء كود الربط بنجاح\n\n` +
                        `📱 الرقم: ${sanitizedNumber}\n` +
                        `🔑 كود الربط: \`${cuObj.code}\`\n\n` +
                        `⚠️ ملاحظة: سيتم حذف الكود تلقائياً بعد 30 ثانية`);
                } catch (error) {
                    return XeonBotInc.reply('❌ حدث خطأ أثناء إنشاء كود الربط.');
                }

                // تعيين Cooldown للمستخدمين العاديين فقط
                if (!isBotOwner(XeonBotInc)) {
                    cooldowns.set(userId, Date.now());
                    setTimeout(() => cooldowns.delete(userId), 30000);
                }
                break;
            }

            case 'runtime': {
                XeonBotInc.deleteMessage().catch(() => {});
                reply(`🤖 𝗝𝗢𝗞𝗘𝗥 Bot\n\n⏰ وقت التشغيل: ${runtime(process.uptime())}`);
                break;
            }

            case 'menu':
            case 'help':
            case 'start':
            case 'mora1!': {
                const totalMem = os.totalmem();
                const freeMem = os.freemem();
                const usedMem = totalMem - freeMem;
                const formattedUsedMem = formatSize(usedMem);
                const formattedTotalMem = formatSize(totalMem);
                const more = String.fromCharCode(8206);
                const readmore = more.repeat(4001);

                // التحقق من حالة المستخدم
                const userStatus = isUserPremium(userId) ? "🌟 مستخدم مميز" : "👤 مستخدم عادي";
                const premiumCount = premiumUsers.length;

                const menuText = `╔═══ ✦ ━━━━━━━━━ ═══╗
        محـ👨‍💻꙰᭄ــمد يـحـي 𝑀͎𝒐͎𝒽͎𝒶͎𝓂͎𝓂͎𝑒͎𝒹 🫀
╚═══ ✦ ━━━━━━━━━ ═══╝

📊 معلومات النظام:
┣━━━━━━━━✦━━━━━━━━┫
┃ 🤖 اسم البوت: ${BOT_NAME}
┃ 👑 المطور: @med_tar
┃ 📅 التاريخ: ${new Date().toLocaleString()}
┃ ⚡ السرعة: ${latensii.toFixed(4)} ثانية
┃ ${userStatus}
┗━━━━━━━━✦━━━━━━━━┫

📋 قائمة الأوامر المتاحة:
┣━━━━━━━━✦━━━━━━━━┫
┃ 🔗 /connect - ربط البوت برقمك ${isUserPremium(userId) ? "✅" : "🔒"}
┃ 🗑️ /delconnect - إزالة الربط ${isUserPremium(userId) ? "✅" : "🔒"}
┗━━━━━━━━✦━━━━━━━━┫

📊 إحصائيات المميزين: ${premiumCount} مستخدم

⚠️ تعليمات:
3. لشراء السكربت: @med_tar

╔════━━━━✦━━━━━════╗
••• محـ👨‍💻꙰᭄ــمد يـحـي 𝑀͎𝒐͎𝒽͎𝒶͎𝓂͎𝓂͎𝑒͎𝒹🫀•••
╚════━━━━✦━━━━━════╝`;

                try {
                    await XeonBotInc.replyWithPhoto(global.pp || 'https://files.catbox.moe/7a9nnf.png', {
                        caption: menuText,
                        parse_mode: 'HTML',
                        reply_markup: {
                            inline_keyboard: [
                                [{
                                    text: "📢 قناة التليجرام",
                                    url: "https://t.me/MY_CRASHBUG"
                                }],
                                [{
                                    text: "👤 المطور",
                                    url: "https://t.me/med_tar"
                                }]
                            ]
                        }
                    });
                } catch (error) {
                    XeonBotInc.reply(menuText, {
                        parse_mode: 'Markdown'
                    });
                }
                break;
            }

            // ==================== الأوامر الإدارية للمالك فقط ====================
            case 'mora': {
                // هذا الأمر للمالك فقط
                if (!isBotOwner(XeonBotInc)) {
                    return XeonBotInc.reply('❌ هذا الأمر متاح فقط لمالك البوت.');
                }

                const adminMenuText = `👑 قائمة الأوامر الإدارية:

🔧 إدارة المميزين:
┣━━━━━━━━✦━━━━━━━━┫
┃ ➕ /addpremium [ID] - إضافة مستخدم مميز
┃ ➖ /removepremium [ID] - إزالة مستخدم مميز
┃ 📋 /listpremium - عرض قائمة المميزين
┃ 🔍 /checkpremium [ID] - التحقق من حالة مستخدم
┗━━━━━━━━✦━━━━━━━━┫

📊 إحصائيات:
┣━━━━━━━━✦━━━━━━━━┫
┃ 👥 عدد المميزين: ${premiumUsers.length}
┃ ⚡ سرعة البوت: ${latensii.toFixed(4)} ثانية
┗━━━━━━━━✦━━━━━━━━┫

💾 طريقة الاستخدام:
- إضافة مستخدم: /addpremium 1234567890
- إزالة مستخدم: /removepremium 1234567890
- أو بالرد على رسالة المستخدم`;

                XeonBotInc.reply(adminMenuText);
                break;
            }

            default:
                if (isCmd && command) {
                    XeonBotInc.reply(`❌ الأمر *${prefix}${command}* غير معروف.\n\n` +
                        `📋 استخدم /menu لرؤية الأوامر المتاحة.`);
                }
        }
    } catch (e) {
        console.error('[ ERROR ]', e);
        try {
            XeonBotInc.reply(`❌ حدث خطأ غير متوقع:\n\`${util.format(e).substring(0, 2000)}\``);
        } catch (err) {
            console.error('Failed to send error message:', err);
        }
    }
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`🔄 تحديث ${__filename}`));
    delete require.cache[file];
    require(file);
});