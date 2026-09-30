const axios = require("axios")
const chalk = require("chalk")
const fs = require("fs")
const human = require('human-readable')
const Jimp = require("jimp")
const moment = require("moment-timezone")
const baileys = require('@whiskeysockets/baileys')
const util = require("util")
const { sizeFormatter } = human

const unixTimestampSeconds = (date = new Date()) => Math.floor(date.getTime() / 1000)

exports.unixTimestampSeconds = unixTimestampSeconds

exports.generateMessageTag = (epoch) => {
    let tag = (0, exports.unixTimestampSeconds)().toString();
    if (epoch)
        tag += '.--' + epoch;
    return tag;
}

exports.processTime = (timestamp, now) => {
    return moment.duration(now - moment(timestamp * 1000)).asSeconds()
}

exports.getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}

exports.getBuffer = async (url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: "get",
            url,
            headers: {
                'DNT': 1,
                'Upgrade-Insecure-Request': 1
            },
            ...options,
            responseType: 'arraybuffer'
        })
        return res.data
    } catch (err) {
        return err
    }
}

exports.fetchJson = async (url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        })
        return res.data
    } catch (err) {
        return err
    }
}

exports.runtime = function(seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor(seconds % (3600 * 24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);
    var dDisplay = d > 0 ? d + (d == 1 ? " يوم, " : " يوم, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " ساعة, " : " ساعة, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " دقيقة, " : " دقيقة, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " ثانية" : " ثانية") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
}

exports.clockString = (ms) => {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

exports.sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

exports.isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}

exports.getTime = (format, date) => {
    if (date) {
        return moment(date).locale('ar').format(format)
    } else {
        return moment.tz('Africa/Cairo').locale('ar').format(format)
    }
}

exports.formatDate = (n, locale = 'ar') => {
    let d = new Date(n)
    return d.toLocaleDateString(locale, {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    })
}

// دالة الحصول على الوقت المصري مزخرفة
exports.getEgyptTime = (options = {}) => {
    const {
        showSeconds = true,
        showDate = true,
        showDay = true,
        decorationLevel = "high",
        borderType = "fancy",
        includeHijri = false
    } = options;
    
    const now = moment().tz("Africa/Cairo");
    
    // البيانات الأساسية
    const time = showSeconds ? now.format("HH:mm:ss") : now.format("HH:mm");
    const date = now.format("DD/MM/YYYY");
    const dayNumber = now.format("DD");
    const month = now.format("MM");
    const year = now.format("YYYY");
    const day = now.format("dddd");
    const hijriDate = exports.getHijriDate();
    
    // الأيام والشهور بالعربية
    const arabicDays = {
        "Sunday": "الأحد",
        "Monday": "الإثنين", 
        "Tuesday": "الثلاثاء",
        "Wednesday": "الأربعاء",
        "Thursday": "الخميس",
        "Friday": "الجمعة",
        "Saturday": "السبت"
    };
    
    const arabicMonths = {
        "01": "يناير", "02": "فبراير", "03": "مارس",
        "04": "أبريل", "05": "مايو", "06": "يونيو",
        "07": "يوليو", "08": "أغسطس", "09": "سبتمبر",
        "10": "أكتوبر", "11": "نوفمبر", "12": "ديسمبر"
    };
    
    const arabicDay = arabicDays[day] || day;
    const arabicMonth = arabicMonths[month] || month;
    
    // بناء النص الأساسي
    let lines = [];
    lines.push(`⏰  الـسـاعـة : ${time}`);
    if (showDate) lines.push(`📅  الـتـاريـخ : ${dayNumber} ${arabicMonth} ${year}`);
    if (showDay) lines.push(`🗓️  الـيـوم : ${arabicDay}`);
    if (includeHijri) lines.push(`🌙  الـهـجـري : ${hijriDate}`);
    
    // الزخارف والرموز
    const decorations = {
        star: "✦",
        circle: "◉",
        diamond: "◈",
        heart: "❤️",
        moon: "🌙",
        sun: "☀️",
        pyramid: "🔺",
        pharaoh: "👑",
        lotus: "🌸"
    };
    
    // إضافة الزخارف حسب المستوى
    let decoratedLines = lines;
    if (decorationLevel === "high") {
        decoratedLines = lines.map(line => `${decorations.diamond} ${line} ${decorations.diamond}`);
    } else if (decorationLevel === "medium") {
        decoratedLines = lines.map(line => `${decorations.star} ${line}`);
    }
    
    // بناء النتيجة مع الإطار
    const maxLength = Math.max(...decoratedLines.map(l => l.length));
    let result = "";
    
    switch(borderType) {
        case "double":
            const doubleBorder = "═".repeat(maxLength + 4);
            result = `╔${doubleBorder}╗\n${decoratedLines.map(line => `║  ${line.padEnd(maxLength)}  ║`).join('\n')}\n╚${doubleBorder}╝`;
            break;
            
        case "single":
            const singleBorder = "─".repeat(maxLength + 4);
            result = `┌${singleBorder}┐\n${decoratedLines.map(line => `│  ${line.padEnd(maxLength)}  │`).join('\n')}\n└${singleBorder}┘`;
            break;
            
        case "fancy":
            const fancyTop = `✧${"─".repeat(maxLength + 6)}✧`;
            const fancyBottom = `✧${"─".repeat(maxLength + 6)}✧`;
            const header = `${decorations.pyramid} وَقْتُ مِصْرَ الْعَرَبِيَّة ${decorations.pyramid}`;
            const headerLength = header.length;
            const padding = Math.floor((maxLength - headerLength + 10) / 2);
            const headerLine = `│${" ".repeat(padding)}${header}${" ".repeat(padding)}│`;
            result = `${fancyTop}\n${headerLine}\n│${" ".repeat(maxLength + 6)}│\n${decoratedLines.map(line => `│  ${line.padEnd(maxLength)}  │`).join('\n')}\n${fancyBottom}`;
            break;
            
        case "pharaoh":
            const pharaohBorder = "𓃭".repeat(Math.ceil((maxLength + 8) / 2));
            const pharaohHeader = `𓋹𓂀𓂋𓎡𓅓𓎛𓏏𓊖 𓆎𓅓𓏏𓊖`;
            result = `${pharaohBorder}\n${pharaohHeader}\n${decoratedLines.map(line => `𓆣  ${line}`).join('\n')}\n${pharaohBorder}`;
            break;
            
        default:
            result = decoratedLines.join('\n');
    }
    
    // إضافة تذييل
    if (decorationLevel === "high") {
        const footer = `${decorations.heart} مِصْرُ أُمُّ الدُّنْيَا ${decorations.heart}`;
        result += `\n${footer}`;
    }
    
    return result;
}

// دالة زخرفة النصوص العربية
exports.decorateArabicText = (text, style = 1) => {
    const styles = {
        1: (t) => `✦ ${t} ✦`,
        2: (t) => `『 ${t} 』`,
        3: (t) => `【 ${t} 】`,
        4: (t) => `≪ ${t} ≫`,
        5: (t) => `❖ ${t} ❖`,
        6: (t) => `◈ ${t} ◈`,
        7: (t) => `𓄿 ${t} 𓂀`,
        8: (t) => `⧽ ${t} ⧼`,
        9: (t) => `◊ ${t} ◊`,
        10: (t) => {
            const length = t.length + 6;
            const border = "━".repeat(length);
            return `┏${border}┓\n┃   ${t}   ┃\n┗${border}┛`;
        }
    };
    
    return styles[style] ? styles[style](text) : text;
}

// دالة الحصول على التاريخ الهجري
exports.getHijriDate = () => {
    const now = new Date();
    const hijri = new Intl.DateTimeFormat('ar-TN-u-ca-islamic', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(now);
    
    return hijri;
}

// دالة التوقيت المصري القديمة (للتوافق)
exports.tanggal = (numer) => {
    const now = moment().tz("Africa/Cairo");
    const arabicMonths = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", 
                         "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
    const arabicDays = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
    
    const tgl = new Date(numer || Date.now());
    const day = tgl.getDate();
    const bulan = tgl.getMonth();
    const thisDay = arabicDays[tgl.getDay()];
    const year = tgl.getFullYear();
    
    const timeEgypt = moment().tz("Africa/Cairo").format('HH : mm : ss');
    const timeMekkah = moment().tz("Asia/Riyadh").format('HH : mm : ss');
    const timeEmirates = moment().tz("Asia/Dubai").format('HH : mm : ss');
    
    const decoration = exports.decorateArabicText("توقيت مصر والعواصم العربية", 4);
    
    return `${decoration}
    
🕌 توقيت مكة: ${timeMekkah}
🏙️ توقيت دبي: ${timeEmirates}
🏛️ توقيت القاهرة: ${timeEgypt}

📅 اليوم: ${thisDay}
🗓️ التاريخ: ${day}
🌙 الشهر: ${arabicMonths[bulan]}
☀️ السنة: ${year}

${exports.decorateArabicText("مصر أم الدنيا", 5)}`;
}

exports.formatp = sizeFormatter({
    std: 'JEDEC',
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`,
})

exports.jsonformat = (string) => {
    return JSON.stringify(string, null, 2)
}

function format(...args) {
    return util.format(...args)
}

exports.logic = (check, inp, out) => {
    if (inp.length !== out.length) throw new Error('Input and Output must have same length')
    for (let i in inp)
        if (util.isDeepStrictEqual(check, inp[i])) return out[i]
    return null
}

exports.generateProfilePicturee = async (buffer) => {
    const jimp = await Jimp.read(buffer)
    const min = Jimp.getWidth()
    const max = Jimp.getHeight()
    const cropped = Jimp.crop(0, 0, min, max)
    return {
        img: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG),
        preview: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG)
    }
}

exports.generateProfilePicture = async(buffer) => {
    const jimp_1 = await Jimp.read(buffer);
    const resz = jimp_1.getWidth() > jimp_1.getHeight() ? jimp_1.resize(550, Jimp.AUTO) : jimp_1.resize(Jimp.AUTO, 650)
    const jimp_2 = await Jimp.read(await resz.getBufferAsync(Jimp.MIME_JPEG));
    return {
        img: await resz.getBufferAsync(Jimp.MIME_JPEG)
    }
}

exports.bytesToSize = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

exports.getSizeMedia = (path) => {
    return new Promise((resolve, reject) => {
        if (/http/.test(path)) {
            axios.get(path)
            .then((res) => {
                let length = parseInt(res.headers['content-length'])
                let size = exports.bytesToSize(length, 3)
                if(!isNaN(length)) resolve(size)
            })
        } else if (Buffer.isBuffer(path)) {
            let length = Buffer.byteLength(path)
            let size = exports.bytesToSize(length, 3)
            if(!isNaN(length)) resolve(size)
        } else {
            reject('error I dont know')
        }
    })
}

exports.parseMention = (text = '') => {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

// دالة إنشاء توقيع مصري مزخرف
exports.createEgyptianSignature = (name = "") => {
    const decorations = {
        ankh: "☥",
        eye: "𓂀",
        scarab: "𓆣",
        pyramid: "△",
        sphinx: "𓃭",
        lotus: "𓆸",
        crook: "𓋾",
        flail: "𓋿"
    };
    
    const signature = `
${decorations.pyramid.repeat(10)}
${decorations.ankh}  تـوقـيـع مـصـري  ${decorations.ankh}
${name ? `${decorations.eye}  ${name}  ${decorations.eye}\n` : ''}
${decorations.scarab}  مـن أهـل مـصـر  ${decorations.scarab}
${decorations.pyramid.repeat(10)}
    `.trim();
    
    return signature;
}

// دالة التحويل إلى نص هيروغليفي مزخرف
exports.toHieroglyphicStyle = (text) => {
    const hieroglyphMap = {
        'ا': '𓄿', 'ب': '𓃀', 'ت': '𓏏', 'ث': '𓍘', 'ج': '𓎡',
        'ح': '𓎛', 'خ': '𓐍', 'د': '𓂧', 'ذ': '𓆓', 'ر': '𓂋',
        'ز': '𓊃', 'س': '𓋴', 'ش': '𓌳', 'ص': '𓊮', 'ض': '𓎼',
        'ط': '𓏤', 'ظ': '𓏠', 'ع': '𓂝', 'غ': '𓎼', 'ف': '𓆑',
        'ق': '𓏘', 'ك': '𓎡', 'ل': '𓃭', 'م': '𓅓', 'ن': '𓈖',
        'ه': '𓎛', 'و': '𓅱', 'ي': '𓇋', ' ': '𓏤'
    };
    
    let result = "";
    for (let char of text) {
        result += hieroglyphMap[char] || char;
    }
    
    return `𓂀 ${result} 𓂀`;
}

// دالة إضافية: توقيت الصلوات (تقريبي)
exports.getPrayerTimes = () => {
    const now = moment().tz("Africa/Cairo");
    const hijriDate = exports.getHijriDate();
    
    // أوقات الصلاة التقريبية (يمكن استبدالها بAPI حقيقي)
    const prayers = {
        الفجر: "04:30",
        الشروق: "06:00",
        الظهر: "12:00",
        العصر: "15:30",
        المغرب: "18:00",
        العشاء: "19:30"
    };
    
    let prayerText = `🕌 أوقات الصلاة في القاهرة\n📅 ${hijriDate}\n\n`;
    
    for (const [prayer, time] of Object.entries(prayers)) {
        prayerText += `🕋 ${prayer}: ${time}\n`;
    }
    
    return exports.decorateArabicText(prayerText, 3);
}

exports.smsg = (conn, m, store) => {
    if (!m) return m
    let M = baileys.proto.WebMessageInfo
    if (m.key) {
        m.id = m.key.id
        m.isBaileys = m.id.startsWith('BAE5') && m.id.length === 16
        m.chat = m.key.remoteJid
        m.fromMe = m.key.fromMe
        m.isGroup = m.chat.endsWith('@g.us')
        m.sender = conn.decodeJid(m.fromMe && conn.user.id || m.participant || m.key.participant || m.chat || '')
        if (m.isGroup) m.participant = conn.decodeJid(m.key.participant) || ''
    }
    if (m.message) {
        m.mtype = getContentType(m.message)
        m.msg = (m.mtype == 'viewOnceMessage' ? m.message[m.mtype].message[getContentType(m.message[m.mtype].message)] : m.message[m.mtype])
        m.body = m.message.conversation || m.msg.caption || m.msg.text || (m.mtype == 'listResponseMessage') && m.msg.singleSelectReply.selectedRowId || (m.mtype == 'buttonsResponseMessage') && m.msg.selectedButtonId || (m.mtype == 'viewOnceMessage') && m.msg.caption || m.text
        let quoted = m.quoted = m.msg.contextInfo ? m.msg.contextInfo.quotedMessage : null
        m.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
        if (m.quoted) {
            let type = getContentType(quoted)
            m.quoted = m.quoted[type]
            if (['productMessage'].includes(type)) {
                type = getContentType(m.quoted)
                m.quoted = m.quoted[type]
            }
            if (typeof m.quoted === 'string') m.quoted = {
                text: m.quoted
            }
            m.quoted.mtype = type
            m.quoted.id = m.msg.contextInfo.stanzaId
            m.quoted.chat = m.msg.contextInfo.remoteJid || m.chat
            m.quoted.isBaileys = m.quoted.id ? m.quoted.id.startsWith('BAE5') && m.quoted.id.length === 16 : false
            m.quoted.sender = conn.decodeJid(m.msg.contextInfo.participant)
            m.quoted.fromMe = m.quoted.sender === (conn.user && conn.user.id)
            m.quoted.text = m.quoted.text || m.quoted.caption || m.quoted.conversation || m.quoted.contentText || m.quoted.selectedDisplayText || m.quoted.title || ''
            m.quoted.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
            m.getQuotedObj = m.getQuotedMessage = async () => {
                if (!m.quoted.id) return false
                let q = await store.loadMessage(m.chat, m.quoted.id, conn)
                return exports.smsg(conn, q, store)
            }
            let vM = m.quoted.fakeObj = M.fromObject({
                key: {
                    remoteJid: m.quoted.chat,
                    fromMe: m.quoted.fromMe,
                    id: m.quoted.id
                },
                message: quoted,
                ...(m.isGroup ? { participant: m.quoted.sender } : {})
            })

            m.quoted.delete = () => conn.sendMessage(m.quoted.chat, { delete: vM.key })

            m.quoted.copyNForward = (jid, forceForward = false, options = {}) => conn.copyNForward(jid, vM, forceForward, options)

            m.quoted.download = () => conn.downloadMediaMessage(m.quoted)
        }
    }
    if (m.msg.url) m.download = () => conn.downloadMediaMessage(m.msg)
    m.text = m.msg.text || m.msg.caption || m.message.conversation || m.msg.contentText || m.msg.selectedDisplayText || m.msg.title || ''

    m.reply = (text, chatId = m.chat, options = {}) => Buffer.isBuffer(text) ? conn.sendMedia(chatId, text, 'file', '', m, { ...options }) : conn.sendText(chatId, text, m, { ...options })

    m.copy = () => exports.smsg(conn, M.fromObject(M.toObject(m)))

    m.copyNForward = (jid = m.chat, forceForward = false, options = {}) => conn.copyNForward(jid, m, forceForward, options)

    return m
}

exports.reSize = (buffer, ukur1, ukur2) => {
    return new Promise(async(resolve, reject) => {
        var baper = await Jimp.read(buffer);
        var ab = await baper.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
        resolve(ab)
    })
}

// دالة مساعدة
function getContentType(message) {
    const type = Object.keys(message)[0]
    return type
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`تم تحديث ${__filename}`))
    delete require.cache[file]
    require(file)
})