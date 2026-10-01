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

const isBotOwner = (ctx) => {
    const userID = ctx.message.from.id.toString();
    const isDev = global.DEVELOPER && global.DEVELOPER.includes(userID);
    const isOwner =
        OWNER[0].replace("https://t.me/", '') ==
        ctx.update.message.from.username;

    return isDev || isOwner;
};

module.exports = XeonBotInc = async (XeonBotInc, bot) => {
    try {

        const body =
            XeonBotInc.message.text ||
            XeonBotInc.message.caption ||
            '';

        const budy =
            (typeof XeonBotInc.message.text == 'string'
                ? XeonBotInc.message.text
                : '');

        const {
            isUrl
        } = simple;

        const isCmd =
            /^[°•π÷×¶∆£¢€¥®™�✓_=|~!?#/$%^&.+-,\\\©^]/
                .test(body);

        const args = body.trim().split(/ +/).slice(1);

        const text = q = args.join(" ");

        const user =
            simple.getUserName(XeonBotInc.message.from);

        const pushname = user.full_name;

        const user_id =
            XeonBotInc.message.from.id + " ";

        const userId =
            XeonBotInc.message.from.id.toString();

        const username =
            XeonBotInc.message.from.username
                ? XeonBotInc.message.from.username
                : "VIP_X1B";

        const isCreator =
            OWNER[0].replace("https://t.me/", '') ==
            XeonBotInc.update.message.from.username;

        const from =
            XeonBotInc.message.chat.id;

        const prefix =
            isCmd ? body[0] : '';

        const command =
            isCreator
                ? body.replace(prefix, '')
                    .trim()
                    .split(/ +/)
                    .shift()
                    .toLowerCase()
                : isCmd
                    ? body.replace(prefix, '')
                        .trim()
                        .split(/ +/)
                        .shift()
                        .toLowerCase()
                    : '';

        const isGroup =
            XeonBotInc.chat.type.includes('group');

        const groupName =
            isGroup ? XeonBotInc.chat.title : '';

        const isImage =
            XeonBotInc.message.hasOwnProperty('photo');

        const isVideo =
            XeonBotInc.message.hasOwnProperty('video');

        const isAudio =
            XeonBotInc.message.hasOwnProperty('audio');

        const isSticker =
            XeonBotInc.message.hasOwnProperty('sticker');

        const isContact =
            XeonBotInc.message.hasOwnProperty('contact');

        const isLocation =
            XeonBotInc.message.hasOwnProperty('location');

        const isDocument =
            XeonBotInc.message.hasOwnProperty('document');

        const isAnimation =
            XeonBotInc.message.hasOwnProperty('animation');

        const isMedia =
            isImage ||
            isVideo ||
            isAudio ||
            isSticker ||
            isContact ||
            isLocation ||
            isDocument ||
            isAnimation;

        const quotedMessage =
            XeonBotInc.message.reply_to_message || {};

        const isQuotedImage =
            quotedMessage.hasOwnProperty('photo');

        const isQuotedVideo =
            quotedMessage.hasOwnProperty('video');

        const isQuotedAudio =
            quotedMessage.hasOwnProperty('audio');

        const isQuotedSticker =
            quotedMessage.hasOwnProperty('sticker');

        const isQuotedContact =
            quotedMessage.hasOwnProperty('contact');

        const isQuotedLocation =
            quotedMessage.hasOwnProperty('location');

        const isQuotedDocument =
            quotedMessage.hasOwnProperty('document');

        const isQuotedAnimation =
            quotedMessage.hasOwnProperty('animation');

        const isQuoted =
            XeonBotInc.message.hasOwnProperty(
                'reply_to_message'
            );

        const timestampi = speed();

        const latensii =
            speed() - timestampi;

        const reply = async (text) => {
            for (
                var x of simple.range(0, text.length, 4096)
            ) {
                return await XeonBotInc.replyWithMarkdown(
                    text.substr(x, 4096),
                    {
                        disable_web_page_preview: true
                    }
                );
            }
        };

        const getStyle = (style_, style, style2) => {
            let listt =
                `${lang.getStyle(style, style2)}`;

            for (var i = 0; i < 300; i++) {
                listt +=
                    '» `' + style_[i] + '`\n';
            }

            reply(listt);
        };

        var typeMessage =
            body.substr(0, 50).replace(/\n/g, '');

        if (isImage)
            typeMessage = 'Image';
        else if (isVideo)
            typeMessage = 'Video';
        else if (isAudio)
            typeMessage = 'Audio';
        else if (isSticker)
            typeMessage = 'Sticker';
        else if (isContact)
            typeMessage = 'Contact';
        else if (isLocation)
            typeMessage = 'Location';
        else if (isDocument)
            typeMessage = 'Document';
        else if (isAnimation)
            typeMessage = 'Animation';

        if (XeonBotInc.message) {

            console.log(
                chalk.black(
                    chalk.bgWhite('[ CMD ]')
                ),
                chalk.black(
                    chalk.bgGreen(new Date)
                ),
                chalk.black(
                    chalk.bgBlue(
                        body || typeMessage
                    )
                ) +
                '\n' +
                chalk.magenta('=> From'),
                chalk.green(pushname) +
                '\n' +
                chalk.blueBright('=> In'),
                chalk.green(
                    isGroup
                        ? groupName
                        : 'Private Chat',
                    XeonBotInc.message.chat.id
                )
            );
        }

        const sendMessage =
            (chatId, text) =>
                bot.sendMessage(chatId, text);

        switch (command) {

            // ==================================================
            // قائمة الأجهزة المقترنة
            // ==================================================

            case 'listpair': {

                if (!isBotOwner(XeonBotInc)) {
                    return XeonBotInc.reply(
                        '❌ هذا الأمر متاح للمالك فقط.'
                    );
                }

                const pairingPath =
                    './lib2/pairing';

                try {

                    if (!fs.existsSync(pairingPath)) {
                        return XeonBotInc.reply(
                            '📭 لا توجد أجهزة مقترنة.'
                        );
                    }

                    const entries =
                        fs.readdirSync(
                            pairingPath,
                            {
                                withFileTypes: true
                            }
                        );

                    const pairedDevices =
                        entries
                            .filter(
                                entry =>
                                    entry.isDirectory()
                            )
                            .map(
                                entry =>
                                    entry.name.replace(
                                        '@s.whatsapp.net',
                                        ''
                                    )
                            );

                    if (
                        pairedDevices.length === 0
                    ) {
                        return XeonBotInc.reply(
                            '📭 لا توجد أجهزة مقترنة.'
                        );
                    }

                    const totalUsers =
                        pairedDevices.length;

                    const deviceList =
                        pairedDevices
                            .map(
                                (device, index) =>
                                    `${index + 1}. ${device}`
                            )
                            .join('\n');

                    XeonBotInc.reply(
                        `📊 إجمالي المستخدمين: ${totalUsers}\n\n` +
                        `📱 الأجهزة المقترنة:\n${deviceList}`
                    );

                } catch (err) {

                    console.error(
                        'Error reading paired devices directory:',
                        err
                    );

                    return XeonBotInc.reply(
                        '❌ فشل في تحميل بيانات الأجهزة المقترنة.'
                    );
                }

                break;
            }

            // ==================================================
            // حذف الربط
            // ==================================================

            case 'delconnect': {

                if (!text) {
                    return XeonBotInc.reply(
                        `📝 مثال:\n${prefix + command} 201234567890`
                    );
                }

                const target =
                    text.split("|")[0];

                const Xreturn =
                    XeonBotInc.message.reply_to_message
                        ? XeonBotInc.message.reply_to_message.from.id
                        : target.replace(
                            /[^0-9]/g,
                            ''
                        ) + "@s.whatsapp.net";

                const contactInfo1 =
                    Xreturn;

                if (contactInfo1.length == 0) {
                    return reply(
                        "❌ الرقم غير مسجل على واتساب"
                    );
                }

                const targetID =
                    Xreturn.trim();

                const pairingPath =
                    './lib2/pairing';

                const targetPath =
                    `${pairingPath}/${targetID}`;

                try {

                    if (!fs.existsSync(targetPath)) {
                        return XeonBotInc.reply(
                            `❌ الجهاز المقترن بالرقم "${targetID}" غير موجود.`
                        );
                    }

                    fs.rmSync(
                        targetPath,
                        {
                            recursive: true,
                            force: true
                        }
                    );

                    XeonBotInc.reply(
                        `✅ تم حذف الجهاز المقترن بالرقم "${targetID}" بنجاح.`
                    );

                } catch (err) {

                    console.error(
                        'Error deleting paired device:',
                        err
                    );

                    return XeonBotInc.reply(
                        '❌ حدث خطأ أثناء محاولة حذف الجهاز المقترن.'
                    );
                }

                break;
            }

            // ==================================================
            // ربط رقم واتساب
            // ==================================================

            case 'connect': {

                const libphonenumber =
                    require('libphonenumber-js');

                const freeStorage =
                    os.freemem() /
                    (1024 * 1024);

                const freeDiskSpace =
                    fs.statSync('/').available /
                    (1024 * 1024);

                if (
                    freeStorage < 300 ||
                    freeDiskSpace < 300
                ) {
                    return XeonBotInc.reply(
                        '❌ السعة ممتلئة، يرجى المحاولة لاحقًا.'
                    );
                }

                // منع تكرار الطلبات بسرعة
                if (cooldowns.has(userId)) {

                    const lastUsed =
                        cooldowns.get(userId);

                    const now =
                        Date.now();

                    const timeLeft =
                        30000 -
                        (now - lastUsed);

                    if (timeLeft > 0) {
                        return XeonBotInc.reply(
                            `⏳ يرجى الانتظار ${Math.ceil(
                                timeLeft / 1000
                            )} ثانية قبل استخدام الأمر مرة أخرى.`
                        );
                    }
                }

                if (!text) {
                    return XeonBotInc.reply(
                        '📝 يرجى إدخال الرقم للربط.\n\n' +
                        '📌 طريقة الاستخدام:\n' +
                        `/${command} 201234567890\n\n` +
                        '📌 مثال:\n' +
                        `/${command} 201234567890`
                    );
                }

                const sanitizedNumber =
                    text.replace(/\D/g, '');

                function isValidWhatsAppNumber(phone) {

                    try {

                        const number =
                            libphonenumber.parsePhoneNumber(
                                '+' + phone
                            );

                        if (
                            !number ||
                            !number.isValid()
                        ) {
                            return false;
                        }

                        const localNumberLength =
                            number.nationalNumber.length;

                        return (
                            localNumberLength >= 6 &&
                            localNumberLength <= 15
                        );

                    } catch (error) {
                        return false;
                    }
                }

                if (
                    !isValidWhatsAppNumber(
                        sanitizedNumber
                    )
                ) {
                    return XeonBotInc.reply(
                        '❌ رقم واتساب غير صالح. يرجى إدخال رقم صحيح.'
                    );
                }

                const Xreturn =
                    XeonBotInc.message.reply_to_message
                        ? XeonBotInc.message.reply_to_message.from.id
                        : sanitizedNumber +
                          "@s.whatsapp.net";

                const contactInfo =
                    Xreturn;

                if (contactInfo.length == 0) {
                    return XeonBotInc.reply(
                        "❌ الرقم غير مسجل في واتساب."
                    );
                }

                try {

                    const startpairing =
                        require('./rentbot.js');

                    await startpairing(Xreturn);

                    // انتظار كتابة الكود
                    await sleep(4000);

                    const pairingFile =
                        './lib2/pairing/pairing.json';

                    if (
                        !fs.existsSync(pairingFile)
                    ) {
                        throw new Error(
                            'ملف pairing.json غير موجود'
                        );
                    }

                    const cu =
                        fs.readFileSync(
                            pairingFile,
                            'utf-8'
                        );

                    const cuObj =
                        JSON.parse(cu);

                    const pairingCode =
                        String(
                            cuObj.code || ''
                        ).trim();

                    if (!pairingCode) {
                        throw new Error(
                            'كود الربط فارغ'
                        );
                    }

                    // إرسال الكود مع زر النسخ
                    await bot.telegram.sendMessage(
                        XeonBotInc.chat.id,

                        `✅ تم إنشاء كود الربط بنجاح\n\n` +

                        `📱 الرقم: ${sanitizedNumber}\n\n` +

                        `🔑 كود الربط:\n` +

                        `<code>${pairingCode}</code>\n\n` +

                        `⚠️ أدخل هذا الكود في واتساب لإتمام الربط.`,

                        {
                            parse_mode: 'HTML',

                            reply_markup: {
                                inline_keyboard: [
                                    [
                                        {
                                            text: '📋 نسخ الكود',
                                            copy_text: {
                                                text: pairingCode
                                            }
                                        }
                                    ]
                                ]
                            }
                        }
                    );

                    // تفعيل الانتظار
                    cooldowns.set(
                        userId,
                        Date.now()
                    );

                    setTimeout(
                        () =>
                            cooldowns.delete(
                                userId
                            ),
                        30000
                    );

                } catch (error) {

                    console.error(
                        'PAIRING ERROR:',
                        error
                    );

                    return XeonBotInc.reply(
                        '❌ حدث خطأ أثناء إنشاء كود الربط.\n\n' +
                        '🔧 حاول مرة أخرى بعد قليل.'
                    );
                }

                break;
            }

            // ==================================================
            // وقت التشغيل
            // ==================================================

            case 'runtime': {

                XeonBotInc
                    .deleteMessage()
                    .catch(() => {});

                reply(
                    `🤖 𝗝𝗢𝗞𝗘𝗥 Bot\n\n` +
                    `⏰ وقت التشغيل: ${runtime(
                        process.uptime()
                    )}`
                );

                break;
            }

            // ==================================================
            // القائمة
            // ==================================================

            case 'menu':
            case 'help':
            case 'start':
            case 'mora1!': {

                const totalMem =
                    os.totalmem();

                const freeMem =
                    os.freemem();

                const usedMem =
                    totalMem - freeMem;

                const formattedUsedMem =
                    formatSize(usedMem);

                const formattedTotalMem =
                    formatSize(totalMem);

                const more =
                    String.fromCharCode(8206);

                const readmore =
                    more.repeat(4001);

                const menuText =

`╔═══ ✦ ━━━━━━━━━ ═══╗
        محـ👨‍💻꙰᭄ــمد يـحـي 𝑀͎𝒐͎𝒽͎𝒂͎𝓂͎𝓂͎𝑒͎𝒅 🫀
╚═══ ✦ ━━━━━━━━━ ═══╝

📊 معلومات النظام:
┣━━━━━━━━✦━━━━━━━━┫
┃ 🤖 اسم البوت: ${BOT_NAME}
┃ 👑 المطور: @med_tar
┃ 📅 التاريخ: ${new Date().toLocaleString()}
┃ ⚡ السرعة: ${latensii.toFixed(4)} ثانية
┃ 🆓 النظام: مجاني بالكامل
┗━━━━━━━━✦━━━━━━━━┫

📋 قائمة الأوامر:
┣━━━━━━━━✦━━━━━━━━┫
┃ 🔗 /connect - ربط البوت برقمك ✅
┃ 🗑️ /delconnect - إزالة الربط ✅
┃ 📊 /runtime - وقت تشغيل البوت
┗━━━━━━━━✦━━━━━━━━┫

📌 طريقة الربط:

1️⃣ أرسل:
 /connect رقمك

2️⃣ سيظهر لك كود الربط.

3️⃣ اضغط زر:
 📋 نسخ الكود

4️⃣ أدخل الكود داخل واتساب.

╔════━━━━✦━━━━━════╗
••• محـ👨‍💻꙰᭄ــمد يـحـي 𝑀͎𝒐͎𝒽͎𝒂͎𝓂͎𝓂͎𝑒͎𝒅🫀•••
╚════━━━━✦━━━━━════╝`;

                try {

                    await XeonBotInc.replyWithPhoto(

                        global.pp ||
                        'https://files.catbox.moe/7a9nnf.png',

                        {
                            caption: menuText,

                            parse_mode: 'HTML',

                            reply_markup: {

                                inline_keyboard: [

                                    [
                                        {
                                            text:
                                                "📢 قناة التليجرام",

                                            url:
                                                "https://t.me/MY_CRASHBUG"
                                        }
                                    ],

                                    [
                                        {
                                            text:
                                                "👤 المطور",

                                            url:
                                                "https://t.me/med_tar"
                                        }
                                    ]

                                ]
                            }
                        }
                    );

                } catch (error) {

                    XeonBotInc.reply(
                        menuText
                    );
                }

                break;
            }

            // ==================================================
            // أمر غير معروف
            // ==================================================

            default: {

                if (
                    isCmd &&
                    command
                ) {

                    XeonBotInc.reply(
                        `❌ الأمر *${prefix}${command}* غير معروف.\n\n` +
                        `📋 استخدم /menu لرؤية الأوامر المتاحة.`
                    );
                }

                break;
            }
        }

    } catch (e) {

        console.error(
            '[ ERROR ]',
            e
        );

        try {

            XeonBotInc.reply(
                `❌ حدث خطأ غير متوقع:\n\`${util
                    .format(e)
                    .substring(0, 2000)}\``
            );

        } catch (err) {

            console.error(
                'Failed to send error message:',
                err
            );
        }
    }
};

// ==================================================
// مراقبة الملف وإعادة تحميله
// ==================================================

let file =
    require.resolve(__filename);

fs.watchFile(
    file,
    () => {

        fs.unwatchFile(file);

        console.log(
            chalk.redBright(
                `🔄 تحديث ${__filename}`
            )
        );

        delete require.cache[file];

        require(file);
    }
);