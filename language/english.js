//saya hanya menggunakan google translate, so if there is an error please correct it 

exports.noAbsen = () =>{
return `*❗There Are No Absences In This Group*`
}
exports.StartAbsen = () =>{
	return`*▶️ Absent Starts*`
	}
exports.DahAbsen = () =>{
	return`*✅ You Are Absent*`
	}
exports.DelAbsen = () =>{
	return`*✅ Successfully Removed Absence In This Group*`
	}
exports.adaAbsen = () =>{
	return`*❗There Are Still Sessions Absent In This Group*`
	}
exports.SAbsen = () =>{
	return`*▶️ Absent Starts*`
	}
//
exports.SetCmd = (prefix, command) =>{
	return`*❗Reply Sticker*\nExample : ${prefix + command} menu\n\n\n*Note: Cannot Be Accompanied By Prefix!*`
	}
exports.CmdApa = () =>{
	return`*❓For What Command?*`
	}
exports.UCmd = () =>{
	return`*❗You Dont Have Permission To Change The Command Of This Sticker*`
	}
exports.HashCmd = () =>{
	return`*🔍No Hash*`
	}
exports.DelCmd = () =>{
	return`*✅ The Cmd Sticker Has Been Removed*`
	}
exports.LockCmd = () =>{
	return`*❗Reply Message*`
	}
exports.NoCmd = () =>{
	return`*🔍Hash Not Found In Database*`
	}
exports.ReplyMsg = () =>{
	return`*❗Reply Message You Want To Save In Database*`
	}
exports.NoMsg = (prefix, command) =>{
	return`*❗Example: ${prefix + command} filename*`
	}
exports.AdMsg = (text) => {
    return `'${text}' *Has Been Registered In The Message List🔎*`
}
exports.DoneMsg = (prefix, text) => {
    return `*✅ Successfully Added Message In Message List As* '${text}'
    
• Access With ${prefix}getmsg ${text}
• View List Of Messages With ${prefix}listmsg`
}
exports.GetMsg = (prefix, command) => {
    return `*❗Example : ${prefix + command} file name*\n\nView Message List With ${prefix}listmsg`
}
exports.NoInMsg = (text) => {
    return `'${text}' *Not Listed In The Message List*`
}
exports.DelMsg = (text) => {
    return `*✅ Delete Successfully '${text}' From The Message List`
}

exports.OnBef = () => {
    return `*❗Previously Activated*`
}
exports.OffYaBef = () => {
    return `*❗Its Been Deactivated Before*`
}
exports.OkOn = (command) => {
    return `*${command} Successfully Activated ✅*`
}
exports.OffBef = (command) => {
    return `*${command} Successfully Deactivated ✅*`
}
exports.OkMute = () => {
    return `*🔇 The Bot Has Been Muted In This Group*`
}
exports.OkUnMute = () => {
    return `*🔊 Bot Successfully Not Muted In This Group*`
}
exports.OkUnBanC = () => {
    return `*✅ Bot Successfully Not Banned In This Chat*`
}
exports.NoMute = () => {
    return `*⛔ Bots Are Not Banned In This Group*`
}

exports.NoMsgBot = () => {
    return `*⛔ The Message Was Not Sent By A Bot*`
}
exports.ToimgErr = () => {
    return `*❗Sorry Bot Currently Doesnt Support GIF Stickers*`
}
exports.NoToImg = (prefix, command) => {
    return `*Reply Sticker With Caption ${prefix + command}*`
}
exports.BotPublic = () => {
    return `*Success Change To Public Mode*`
}
exports.BotSelf = () => {
    return `*Successfully Change To Self Mode\n\nTo Change To Public Mode, Please Use The Bot Number*`
}
exports.NoToStik = (prefix, command) => {
    return `*❗Send/Reply Image/Video With Caption ${prefix + command}*\n\nMaximum 10 Seconds Videos`
}
exports.NoPpBot = (prefix, command) => {
    return `*❗Send/Reply Image With Caption ${prefix + command}*`
}
exports.ToAud = (prefix, command) => {
    return `*❗Send/Reply Video You Want To Convert To Audio With Caption ${prefix + command}*`
}
exports.ToMp3 = (prefix, command) => {
    return `*❗Send/Reply Video You Want To Convert Into MP3 With Caption ${prefix + command}*`
}
exports.ToVn= (prefix, command) => {
    return `*❗Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}*`
}
exports.NoQouted = () => {
    return `*❗The Message You Reply Does Not Contain A Reply*`
}
exports.SetGcName = (prefix, command) => {
    return `*❗Send Command ${prefix + command} text*`
}
exports.SetPpGc = (prefix, command) => {
    return `*❗Send/Reply Image With Caption ${prefix + command}*`
}
exports.JoinGc = () => {
    return `*Enter Group Link After Command**`
}
exports.MauKick = () => {
    return `*❗Send The Target Number/Tag/Reply You Want To Kick*`
}
exports.MauAdd = () => {
    return `*❗Send The Target Number/Tag/Reply You Want To Add*`
}
exports.NakPm= () => {
    return `*❗Send The Target Number/Tag/Reply You Want To Promote*`
}
exports.NakDm = () => {
    return `*❗Send The Target Number/Tag/Reply You Want To Demote*`
}
exports.Family = () => {
    return `*❗There Are Still Uncompleted Sessions*`
}
exports.NoWm = (prefix, command) => {
    return `*❗Send Command ${prefix + command} packname|author*`
}
exports.DoneExif = (packname, author) => {
    return `*Exif Successfully Converted To\n\nPackname : ${packname}\nAuthor : ${author}*`
}
exports.NoTeksOne = (prefix, command) => {
    return `*❗Send Command ${prefix + command} *teks*\n\nExample : ${prefix + command} WhatsApp Bot*`
}
exports.NoTeksTwo = (prefix, command) => {
    return `*❗Send Command ${prefix + command} *teks 1|teks 2*\n\nExample : ${prefix + command} WhatsApp|Bot*`
}
exports.OffNsfw = () => {
    return `*❗NSFW Feature Is Not Activated In This Chat*\n\nPlease Ask The Group Admin To Activate It`
}
exports.CoverBanLol = (prefix, command) => {
    return `*Example : ${prefix + command} nama|heroes*\nUsage: ${prefix + command} felicia|jinx7`
}
exports.coverbannerlol = (style) => {
    return `*The Heroes You Entered Are Wrong*\n\n_Heres The List Of True Heroes, Total_ *${style}* _heroes_\n\n`
}
exports.pubglogomaker = (prefix, command) => {
    return `*Example : ${prefix + command} nama|style\nUsage: ${prefix + command} felicia|bot`
}
exports.pubglogomaker_ = (style) => {
    return `*The Style You Entered Is Wrong*\n\n_Heres A List Of The Correct Styles, Total_ *${style}* _style_\n\n`
}
exports.colorfulpubg = (prefix, command) => {
    return `*Example : ${prefix + command} nama|color*\nUsage: ${prefix + command} felicia|gold`
}
exports.colorfulpubg_ = (style) => {
    return `*The Color You Entered Is Wrong*\n\n_Heres A List Of The Correct Colors, Total_ *${style}* _color_\n\n`
}
exports.astronotspace = (prefix, command) => {
    return `*Example: ${prefix + command} nama|style*\nUsage: ${prefix + command} felicia|anubis`
}
exports.wallpaperaov = (prefix, command) => {
    return `*Example: ${prefix + command} nama|heroes*\nUsage: ${prefix + command} felicia|allain`
}
exports.maketeamlogo = (style, style2, prefix, command) => {
    return `*Example: ${prefix + command} nama|${style}*\nUsage: ${prefix + command} zeeone|${style2}`
}

exports.MaketeamlogoT = (a, b, c, d, e, f, g, h) => {
    return `*Exapmle: ${g + h} ${a}|${b}|${c}*\nUsage: ${g + h} ${e}|${f}|${d}`
}
exports.maketeamlogo_ = (style, style2) => {
    return `*${style2} What You Entered Is Wrong*\n\n_Heres A List ${style2} Correct, Total_ *${style}* _${style2}_\n\n`
}

exports.KisahNabi = (prefix, command, style) => {
    return `*Example : ${prefix + command} ${style}*`
}
exports.quran2 = (prefix, command, juz , brp) => {
    return `*Example : ${prefix + command} ${juz}*\nUsage: ${prefix + command} ${brp}`
}

exports.quran3 = (prefix, command, surah , ayat, brp, brp2) => {
return`*Example : ${prefix + command} ${surah}|${ayat}*\nUsage: ${prefix + command} ${brp}|${brp2}`
}

exports.JwbErr = () => {
    return `*❎ WRONG ANSWER*`
}

exports.JwbTrue = (tebak) => {
return`*「 ${tebak} 」*\n\n✅ CORRECT ANSWER\n\nWant To Play Again? Press The Button Below*`
}
exports.TbGam = () => {
    return `*Guess The Picture*`
}
exports.TbKa = () => {
    return `*Guess The Word*`
}
exports.TbBe = () => {
    return `*Guess The Flag*`
}
exports.TbCak = () => {
    return `*Cak Lontong*`
}
exports.TbSu = () => {
    return `*Arrange Words*`
}
exports.TbAt = () => {
    return `*Guess The Sentence*`
}
exports.TbSi = () => {
    return `*Guess Who*`
}
exports.Tbte = () => {
    return `*Puzzles*`
}
exports.TbEn = () => {
    return `*Guess The District*`
}
exports.TbKi = () => {
    return `*Guess Chemistry*`
}
exports.TbLi = () => {
    return `*Guess The Lyrics*`
}
exports.TbKan = () => {
    return `*Riddles*`
}

exports.TbFamily = (soal, jawaban, find) => {
    return `*Answer This Question*\n${soal}\n\nThere Is *${jawaban}* Answer ${find(v => v.includes(' ')) ? '(Some Answers Have Spaces)' : ''}`
}

exports.TbAfk = (nama, afk) => {
    return `*${nama} Being AFK With Reason ${afk ? ': ' + afk : 'Nothing'}*`
}

exports.TbGambar = (desk, time) => {
    return `*Please Answer The Questions Above*\n\n📑Description : ${desk}\n⏱️Time : ${time}*`
}
exports.TbGambar_ = (jawaban) => {
    return `*⏱️Time Has Run Out*\n • Answer:  ${jawaban}`
}
exports.TbGambar__ = (jawaban, desk) => {
    return `*Time Has Run Out*\nAnswer:  ${jawaban}}\n📑Description : ${desk}`
}
exports.TbKata = (soal, time) => {
    return `*Please Answer The Following Questions*\n\n${soal}\n⏱️Time : ${time}`
}
exports.TbBendera = (time) => {
    return `*Please Answer The Question Above*\n\n⏱️Time : ${time}`
}
exports.TbKabupaten = (time) => {
    return `*The Picture Above Is A Picture Of The District?*\n⏱️Time : ${time}`
}
exports.TbKimia = (soal, time) => {
    return `What Does The Symbol Mean? : *${soal}*?\n⏱️Waktu : ${time}`
}
exports.TbLirik = (soal, time) => {
    return `These Are The Lyrics Of The Song? : *${soal}*?\n⏱️Time : ${time}*`
}
exports.TbSusun = (soal, tipe, time) => {
    return `*Answer The Following Questions :*\n📖Question : ${soal}\n🔣Type : ${tipe}\n⏱️Time : ${time}`
}
exports.TbMath = (modes, prefix, command) => {
    return `*Mode: ${modes}*\nUsage Example: ${prefix + command} medium`
}
exports.TbMath_ = (soal, time) => {
    return `What Is The Result Of :\n*${soal}*?\n\n⏱️Time: ${time} Second`
}
exports.TbJail = (prefix, command) => {
    return `*❗Send/Reply Photo/Sticker With Caption ${prefix + command}*`
}
exports.TbRepo = (prefix, command) => {
    return `*Send Command ${prefix + command} user repo branch*\n\nExample ${prefix + command} clara-official feliciabot-md v6*`
}
exports.StalkIg = () => {
    return `*❗Enter Username*`
}
exports.Tomp4 = (prefix, command) => {
    return `*❗Reply Gif Sticker With Caption ${prefix + command}*`
}
exports.Tourl = (prefix, command) => {
    return `*❗Send/Reply Media With Caption ${prefix + command}*`
}
exports.Smeme = (prefix, command) => {
    return `*❗Send/Reply Photo With Caption ${prefix + command} *teks**`
}
exports.Smeme_ = (prefix, command) => {
    return `*Send/Reply Photo With Caption ${prefix + command} *teks|tesk2**`
}
exports.Bcall = (anu, time, chat) => {
    return `*🛰️Send Broadcast To ${anu} ${chat}*\n*Times Up ${time * 1.5} detik*`
}
exports.Stag = (prefix, command) => {
    return `*❗Reply Sticker With Caption ${prefix + command}*`
}
exports.Vtag = (prefix, command, video) => {
    return `❗*Send/Reply ${video} With Caption ${prefix + command}*`
}
exports.TrLate = (prefix, command) => {
    return `Example :

1. Send Command ${prefix + command} *language code* *teks*
	• Example : ${prefix + command} id hi
2. Reply chat with caption ${prefix + command} *language code*
	• Exp : ${prefix + command} id hi
List Of Supported Languages : https://cloud.google.com/translate/docs/languages`
}
exports.Addlist = () => {
    return `*Key Cannot Be The Same As Feature/Command Bot*`
}
exports.Addlist_ = (prefix, command) => {
    return `*Use It In A Way ${prefix + command} key|response*\n\n_Example_\n\n${prefix + command} Hi|Halo`
}
exports.Addlist__ = (arg) => {
    return `*List Of Responses With Key : ${arg} Already In This Group.*`
}
exports.AddlistDone = (arg) => {
    return `*✅ Successfully Set List Message With Key : ${arg}*`
}
exports.Dellist = () => {
    return `*❗There Is No Message List In The Database*`
}
exports.Dellist_  = (prefix, command) => {
    return `*Use It In A Way ${prefix + command} key*\n\n_Example_\n\n${prefix + command} Hi`
}
exports.Dellist__ = (key) => {
    return `*❗List Response With Key ${key} Not In Database!*`
}
exports.DellistDone = (key) => {
    return `*✅ Successfully Delete List Message With Key ${key}*`
}
exports.ListUp = (key) => {
    return `*Sorry, The Key ${key} Is Not Yet Registered In This Group*`
}
exports.UpList = (key) => {
    return `*Successfully Update List Message With Key : ${args1}*`
}
exports.Anonymous = (pushname, prefix) => {
    return `*Hi👋 ${pushname} Welcome To Anonymous Chat*\n\nType ${prefix}start To Find Your Chat Friend, Or You Can Press The Search Button Below`
}
exports.Anon = () => {
    return `*🔍Find Friends Chat*`
}
exports.StopAnon = () => {
    return `*❗You Are Not In An Anonymous Session, Press The Button To Find A Partner*`
}
exports.AnonNew = () => {
    return `*🔍Find New Friends*`
}
exports.AnonDahStop = () => {
    return `*✅ Successfully Stopped Chat*`
}
exports.StopAnonByFren = () => {
    return `*⚠️ This Chat Session Has Been Terminated By Your Chat Friend*`
}
exports.AnonOn = () => {
    return `*❗You Are Still In A Chat Session With A Partner*`
}
exports.AnonFind = (prefix) => {
    return `_Partner Found🎯_\n\n${prefix}skip -- Find A New Partner\n${prefix}stop -- Stop This Dialog`
}
exports.AnonSearch = () => {
    return `*🔎 Please Wait Looking For Chat Friends*`
}
exports.NoAnon = () => {
    return `*⚠️ Youve Never Started A Chat*`
}

exports.AllFitur = () => {
    return `\nAll Felicia Bot Features`
}
exports.InfoMenu = () => {
    return `\nLooking For Any Information From This Bot`
}
exports.KhususOwn = () => {
    return `\nMenu Only For Owner`
}
exports.DataBor = () => {
    return `\nSaving Files In Database`
}
exports.MenuGc = () => {
    return `\nMenu Only For Groups`
}
exports.MenuAni = () => {
    return `\nLooking For Random Or Not Random Anime Images`
}
exports.TagMem = () => {
    return `\nGroup Member Tags`
}
exports.StalkOrk = () => {
    return `\nStalking Peoples Social Media`
}
exports.Hoja = () => {
    return `\nLooking For Something That Doesnt Matter`
}
exports.CovertWi = () => {
    return `\nChanging File Format`
}
exports.AnuFoto = () => {
    return `\nMaking Pictures Better`
}
exports.HajuStik = () => {
    return `\nMaking Unique Stickers`
}
exports.EloDown= () => {
    return `\nDownloading Files Via Bot`
}
exports.StikerWibu = () => {
    return `\nGet Random Anime Stickers`
}
exports.ImageDewasa = () => {
    return `\nGet NSFW Anime Images Or 18+`
}
exports.MakeLogo = () => {
    return `\nTo Create A Logo Using A Bot`
}
exports.oterMenu = () => {
    return `\nMenu Without Clear Categories`
}
exports.GameBot = () => {
    return `\nPlay Bot Games`
}
exports.RandRik = () => {
    return `\nRandom Tik Tok Video`
}
exports.RandCew = () => {
    return `\nGet Random Beautiful Girl Photos`
}
exports.RamalOi = () => {
    return `\nBots Can Predict You`
}
exports.TeleStik= () => {
    return `\nRandom Sticker From Telegram`
}
exports.BuatLogoLagi = () => {
    return `\nCreating A Second Version Of The Logo`
}
exports.SoundNih= () => {
    return `\nRandom Sound`
}
exports.KanLogoLagi = () => {
    return `\nMake An Attractive Logo`
}
exports.TobatBro = () => {
    return `\nIslamic Features`
}
exports.MauJualan = () => {
    return `\nFeatures For Selling`
}
exports.GadaChat = () => {
    return `\nFeatures For Random Chat`
}
exports.SumberBot = () => {
    return `\nSource Of This Bot Script`
}
exports.Tqnya = () => {
    return `\nWho Contributed To This Bot`
}
exports.SetAh = () => {
    return `Do You Want A Set Menu?`
}
exports.KickAh = (gc) => {
    return `*「 ANTILINK GROUP DETECTED 」*\n\nYou Will Be Expelled From The Group:\n${gc}`
    }
    exports.GjdKick = () => {
    return `*This Group Link Is Detected, You Will Not Be Kicked Out*`
    }
/////////

/////////
exports.private = () =>{
	return`*❗Use This Feature Only In Private Chat*`
	}
exports.wait = () => {
    return `*⏳ Processing Your Request*`
}
exports.ok = () => {
    return `*✅ Finish Processing*`
}

exports.err = () => {
    return `*⚠️ Broken Features*`
}
exports.erorLink = () => {
    return `*⚠️ The Link You Entered Is Broken*`
}
exports.media = () => {
    return `Please Select The Media You Want To Download`
}
exports.replyImg = (prefix, command) => {
    return `*❗Send/Reply Photo With Caption ${prefix + command}*`
}

exports.wrongFormat = (prefix) => {
    return `❎ Incorrect Format Please Check How To Use At *${prefix}menu*.`
}

exports.emptyMess = () => {
    return `*❗Please Enter The Message You Want To Convey*`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `*❎ Command *${cmd}* Not Registered In *${prefix}menu*`
}

exports.ownerOnly = () => {
    return `*❎ Sorry, This Command Is Only For The Owner*`
}

exports.doneOwner = () => {
    return `*✅ ️Its Done, Owner*`
}

exports.groupOnly = () => {
    return `*❗Use This Command Only For Groups*`
}

exports.adminOnly = () => {
    return `*❗This Command Can Only Be Used By The Admin Of This Group*`
}

exports.nhFalse = () => {
    return `*Invalid Code*`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 HALL OF SHAME 」 ──*
    
Totally Blocked: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `*❎ User Not Admin*`
}

exports.adminAlready = () => {
    return `*❎ He Was Already Admin Before*`
}

exports.botNotAdmin = () => {
    return `*❗Make Bot Admin To Use This Feature*`
}

exports.received = (pushname) => {
    return `
Hello ${pushname}!
Thank You For Reporting, We Will Receive Your Report Soon.`
}

exports.videoLimit = () => {
    return `*❗File Size Too Big*`
}

exports.notNum = (q) => {
    return `*"${q}", Not Numbers*`
}
exports.menunya = (salam, pushname, botname) =>{
	return`*Hi Bro ${pushname} 👋 good ${salam} , 
i'm ${botname}, this bot is Whatsapp Multi-Device Beta.
*`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Selamat ${salam} ${pushname}*
    
⎔┈────────────────┈⎔

 *💬Bot Name : ⌬ Felicia-Bot*
 *📎Version : 5.0*
 *🖌️Perfix : Multi*
 *🏷️Total Features : Countless*
 *🗃️Lib : Baileys-Md@4.0.0*
 *⌚Time Server : ${time}*

⎔┈────────────────┈⎔

     *📚All Felicia Bot Menu*


╭╼════〔 Bot Info 〕════╾
┢⎔ ${prefix}owner
┢⎔ ${prefix}rules
┢⎔ ${prefix}sc
┢⎔ ${prefix}ping
┢⎔ ${prefix}runtime
┢⎔ ${prefix}botstatus
┢⎔ ${prefix}donate
┢⎔ ${prefix}speed
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╾

╭╼════〔 New Feature 〕════╾
┢⎔ ${prefix}emojimix 😒+😔
┢⎔ ${prefix}animestory
┢⎔ ${prefix}speed
┢⎔ ${prefix}mcserver
┢⎔ ${prefix}mcserver
┢⎔ ${prefix}ppcouple
┢⎔ ${prefix}covid
┢⎔ ${prefix}tvschedule
┢⎔ ${prefix}truth
┢⎔ ${prefix}dare
┢⎔ ${prefix}gsmarena
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╾

╭╼════〔 Owner 〕════╾
┢⎔ < evaluate
┢⎔ > evaluate
┢⎔ $ exec
┢⎔ => exec
┢⎔ ${prefix}setmenu [query]
┢⎔ ${prefix}setmenu templateLocation
┢⎔ ${prefix}setmenu templateTenor
┢⎔ ${prefix}setmenu katalog
┢⎔ ${prefix}setmenu katalog2
┢⎔ ${prefix}setmenu list
┢⎔ ${prefix}setwm packname|author
┢⎔ ${prefix}sendsesi
┢⎔ ${prefix}listpc
┢⎔ ${prefix}listgc
┢⎔ ${prefix}broadcast [text]
┢⎔ ${prefix}bc [text]
┢⎔ ${prefix}bcgc [text]
┢⎔ ${prefix}nsfw [on/off]
┢⎔ ${prefix}mute [on/off]
┢⎔ ${prefix}banchat
┢⎔ ${prefix}unbanchat
┢⎔ ${prefix}autorespond [on/off]
┢⎔ ${prefix}antiviewonce [on/off]
┢⎔ ${prefix}autobio [on/off]
┢⎔ ${prefix}join [link]
┢⎔ ${prefix}self
┢⎔ ${prefix}public [only bot]
┢⎔ ${prefix}del [reply pesan bot]
┢⎔ ${prefix}setppbot [reply image]
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍

╭╼═══〔 Store Menu 〕════╾
┢⎔ ${prefix}list
┢⎔ ${prefix}addlist [key|respond]
┢⎔ ${prefix}dellist [key]
┢⎔ ${prefix}update [key|respond]
┢⎔ ${prefix}store
┢⎔ ${prefix}kali
┢⎔ ${prefix}bagi
┢⎔ ${prefix}tambah
┢⎔ ${prefix}kurang
┢⎔ ${prefix}kalkulator
┢⎔ ${prefix}proses
┢⎔ ${prefix}done [surah|ayat]
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍

╭╼═══〔 Anonymous 〕═══╾
┢⎔ ${prefix}anonymous 
┢⎔ ${prefix}start
┢⎔ ${prefix}skip [daerah]
┢⎔ ${prefix}stop [surah|ayat]
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍

╭╼═══〔 Database 〕════╾
┢⎔ ${prefix}setcmd [reply stiker]
┢⎔ ${prefix}delcmd [reply stiker]
┢⎔ ${prefix}listcmd
┢⎔ ${prefix}absen
┢⎔ ${prefix}cekabsen
┢⎔ ${prefix}deleteabsen
┢⎔ ${prefix}absenstart
┢⎔ ${prefix}addmsg [nama file]
┢⎔ ${prefix}getmsg [nama file]
┢⎔ ${prefix}listmsg
┢⎔ ${prefix}delmsg [nama file]
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍

╭╼════〔 Group 〕════╾
┢⎔ ${prefix}listonline
┢⎔ ${prefix}sider
┢⎔ ${prefix}wm packname|author
┢⎔ ${prefix}infochat
┢⎔ ${prefix}setdesk [text]
┢⎔ ${prefix}setppgrup [reply image]
┢⎔ ${prefix}antilink [on/off]
┢⎔ ${prefix}revoke
┢⎔ ${prefix}leave
┢⎔ ${prefix}add [62***]
┢⎔ ${prefix}kick @tag
┢⎔ ${prefix}leave
┢⎔ ${prefix}linkgc
┢⎔ ${prefix}take packname|author
┢⎔ ${prefix}group [open/close]
┢⎔ ${prefix}tagall [text]
┢⎔ ${prefix}hidetag [text]
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍

╭╼════〔 Anime 〕════╾
┢⎔ ${prefix}quotesanime
┢⎔ ${prefix}anime [query]
┢⎔ ${prefix}manga [query]
┢⎔ ${prefix}character [query]
┢⎔ ${prefix}animestory [query]
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍

╭╼════〔 Tag 〕════╾
┢⎔ ${prefix}stickertag
┢⎔ ${prefix}videotag [query]
┢⎔ ${prefix}vntag [query]
┢⎔ ${prefix}imagetag [query]
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍

╭╼═══〔 Stalking 〕═══╾
┢⎔ ${prefix}igstalk [username]
┢⎔ ${prefix}ghstalk [username]
┢⎔ ${prefix}ytstalk [channel]
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍

╭╼═══〔 Search 〕════╾
┢⎔ ${prefix}ytsearch [query]
┢⎔ ${prefix}wallpaper [query]
┢⎔ ${prefix}google [query]
┢⎔ ${prefix}wikimedia [query]
┢⎔ ${prefix}hentai
┢⎔ ${prefix}wattpad [query]
┢⎔ ${prefix}webtoons [query]
┢⎔ ${prefix}drakor [query]
┢⎔ ${prefix}pinterest [query]
┢⎔ ${prefix}lyrics [query]
┢⎔ ${prefix}mcserver [query]
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍

╭╼═══〔 Convert 〕════╾
┢⎔ ${prefix}toaudio [video]
┢⎔ ${prefix}tomp3 [video]
┢⎔ ${prefix}tovn [video]
┢⎔ ${prefix}stiker [reply image]
┢⎔ ${prefix}tourl [image/video/stiker]
┢⎔ ${prefix}togif [sticker]
┢⎔ ${prefix}tomp4 [sticker]
┢⎔${prefix}toimg [reply sticker]
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍

╭╼═══〔 Image Effecr 〕═══╾
┢⎔ ${prefix}wanted [reply image/stiker]
┢⎔ ${prefix}utatoo [reply image/stiker]
┢⎔ ${prefix}unsharpen [reply image/stiker]
┢⎔ ${prefix}thanos [reply image/stiker]
┢⎔ ${prefix}sniper [reply image/stiker]
┢⎔ ${prefix}sharpen [reply image/stiker]
┢⎔ ${prefix}sepia [reply image/stiker]
┢⎔ ${prefix}scary [reply image/stiker]
┢⎔ ${prefix}rip [reply image/stiker]
┢⎔ ${prefix}redple [reply image/stiker]
┢⎔ ${prefix}rejected [reply image/stiker]
┢⎔ ${prefix}posterize [reply image/stiker]
┢⎔ ${prefix}ps4 [reply image/stiker]
┢⎔ ${prefix}pixelize [reply image/stiker]
┢⎔ ${prefix}missionpassed [reply image/stiker]
┢⎔ ${prefix}moustache [reply image/stiker]
┢⎔ ${prefix}lookwhatkarenhave [reply image/stiker]
┢⎔ ${prefix}jail [reply image/stiker]
┢⎔ ${prefix}invert [reply image/stiker]
┢⎔ ${prefix}instagram [reply image/stiker]
┢⎔ ${prefix}greyscale [reply image/stiker]
┢⎔ ${prefix}glitch [reply image/stiker]
┢⎔ ${prefix}gay [reply image/stiker]
┢⎔ ${prefix}frame [reply image/stiker]
┢⎔ ${prefix}fire [reply image/stiker]
┢⎔ ${prefix}distort [reply image/stiker]
┢⎔ ${prefix}dictator [reply image/stiker]
┢⎔ ${prefix}deepfry [reply image/stiker]
┢⎔ ${prefix}ddungeon [reply image/stiker]
┢⎔ ${prefix}circle [reply image/stiker]
┢⎔ ${prefix}challenger [reply image/stiker]
┢⎔ ${prefix}burn [reply image/stiker]
┢⎔ ${prefix}brazzers [reply image/stiker]
┢⎔ ${prefix}beautiful [reply image/stiker]
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍

╭╼═══〔 Sticker Effect 〕═══╾
┢⎔ ${prefix}jail [reply image/stiker]
┢⎔ ${prefix}red [reply image/stiker]
┢⎔ ${prefix}gay [reply image/stiker]
┢⎔ ${prefix}bloo [reply image/stiker]
┢⎔ ${prefix}blue [reply image/stiker]
┢⎔ ${prefix}sepia [reply image/stiker]
┢⎔ ${prefix}green [reply image/stiker]
┢⎔ ${prefix}glass [reply image/stiker]
┢⎔ ${prefix}invert [reply image/stiker]
┢⎔ ${prefix}blurple [reply image/stiker]
┢⎔ ${prefix}blurple2 [reply image/stiker]
┢⎔ ${prefix}wasted [reply image/stiker]
┢⎔ ${prefix}passed [reply image/stiker]
┢⎔ ${prefix}triggered [reply image/stiker]
┢⎔ ${prefix}comrade [reply image/stiker]
┢⎔ ${prefix}greyscale [reply image/stiker]
┢⎔ ${prefix}threshold [reply image/stiker]
┢⎔ ${prefix}brightness [reply image/stiker]
┢⎔ ${prefix}invertgreyscale [reply image/stiker]
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍

╭╼═══〔 Download 〕═══╾
┢⎔ ${prefix}tiktok [link]
┢⎔ ${prefix}tiktoknowm [link]
┢⎔ ${prefix}tiktokwm [link]
┢⎔ ${prefix}tiktokaudio [link]
┢⎔ ${prefix}ytdl [link]
┢⎔ ${prefix}play [query]
┢⎔ ${prefix}ytmp3 [link]
┢⎔ ${prefix}ytshortmp3 [link]
┢⎔ ${prefix}ytmp4 [link]
┢⎔ ${prefix}ytshorts [link]
┢⎔ ${prefix}facebook [link]
┢⎔ ${prefix}facebooksd [link]
┢⎔ ${prefix}facebookhd [link]
┢⎔ ${prefix}fbaudio [link]
┢⎔ ${prefix}igstory [username]
┢⎔ ${prefix}igdl [link]
┢⎔ ${prefix}igphoto [link]
┢⎔ ${prefix}igvideo [link]
┢⎔ ${prefix}igreels [link]
┢⎔ ${prefix}igtv [link]
┢⎔ ${prefix}soundcloud [link]
┢⎔ ${prefix}gitclone [link repo]
┢⎔ ${prefix}gitrepo [username repo branch]
┢⎔ ${prefix}mediafire [link]
┢⎔ ${prefix}twitter link
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍

╭╼════〔 Primbon 〕════╾
┢⎔ ${prefix}nomorhoki 887435047326
┢⎔ ${prefix}artimimpi [query]
┢⎔ ${prefix}artinama [query]
┢⎔ ${prefix}ramaljodoh
┢⎔ ${prefix}ramaljodohbali
┢⎔ ${prefix}suamiistri
┢⎔ ${prefix}ramalcinta
┢⎔ ${prefix}cocoknama
┢⎔ ${prefix}pasangan
┢⎔ ${prefix}jadiannikah
┢⎔ ${prefix}sifatusaha
┢⎔ ${prefix}rezeki
┢⎔ ${prefix}pekerjaan
┢⎔ ${prefix}nasib
┢⎔ ${prefix}penyakit
┢⎔ ${prefix}tarot
┢⎔ ${prefix}fengshui
┢⎔ ${prefix}haribaik
┢⎔ ${prefix}harisangar
┢⎔ ${prefix}harisial
┢⎔ ${prefix}nagahari
┢⎔ ${prefix}arahrezeki
┢⎔ ${prefix}peruntungan
┢⎔ ${prefix}weton
┢⎔ ${prefix}karakter
┢⎔ ${prefix}keberuntungan
┢⎔ ${prefix}memancing
┢⎔ ${prefix}masasubur
┢⎔ ${prefix}zodiak 
┢⎔ ${prefix}shio [query]
┢⎔ ${prefix}is
┢⎔ ${prefix}can
┢⎔ ${prefix}how
┢⎔ ${prefix}rate
┢⎔ ${prefix}handsomecheck
┢⎔ ${prefix}beautifulcheck
┢⎔ ${prefix}awesomecheck
┢⎔ ${prefix}greatcheck
┢⎔ ${prefix}gaycheck
┢⎔ ${prefix}cutecheck
┢⎔ ${prefix}lesbicheck
┢⎔ ${prefix}lesbiancheck
┢⎔ ${prefix}hornycheck
┢⎔ ${prefix}prettycheck
┢⎔ ${prefix}lovelycheck
┢⎔ ${prefix}uglycheck 
┢⎔ ${prefix}charactercheck
┢⎔ ${prefix}stupid
┢⎔ ${prefix}foolish
┢⎔ ${prefix}smart
┢⎔ ${prefix}idiot
┢⎔ ${prefix}gay
┢⎔ ${prefix}lesbi
┢⎔ ${prefix}bastard
┢⎔ ${prefix}stubble
┢⎔ ${prefix}dog
┢⎔ ${prefix}fuck
┢⎔ ${prefix}ape
┢⎔ ${prefix}noob
┢⎔ ${prefix}great
┢⎔ ${prefix}horny
┢⎔ ${prefix}wibu
┢⎔ ${prefix}asshole
┢⎔ ${prefix}handsome
┢⎔ ${prefix}beautiful
┢⎔ ${prefix}cute
┢⎔ ${prefix}kind
┢⎔ ${prefix}ugly
┢⎔ ${prefix}pretty
┢⎔ ${prefix}lesbian
┢⎔ ${prefix}randi
┢⎔ ${prefix}gandu
┢⎔ ${prefix}madarchod
┢⎔ ${prefix}kala
┢⎔ ${prefix}gora
┢⎔ ${prefix}chutiya
┢⎔ ${prefix}nibba
┢⎔ ${prefix}nibbi
┢⎔ ${prefix}bhosdiwala
┢⎔ ${prefix}chutmarika
┢⎔ ${prefix}bokachoda
┢⎔ ${prefix}suarerbaccha
┢⎔ ${prefix}bolochoda
┢⎔ ${prefix}muthal
┢⎔ ${prefix}muthbaaz
┢⎔ ${prefix}randibaaz
┢⎔ ${prefix}topibaaz
┢⎔ ${prefix}cunt
┢⎔ ${prefix}nerd
┢⎔ ${prefix}behenchod
┢⎔ ${prefix}behnchoda
┢⎔ ${prefix}bhosdika
┢⎔ ${prefix}nerd
┢⎔ ${prefix}mc
┢⎔ ${prefix}bsdk
┢⎔ ${prefix}bhosdk
┢⎔ ${prefix}nigger
┢⎔ ${prefix}loda
┢⎔ ${prefix}laund
┢⎔ ${prefix}nigga
┢⎔ ${prefix}noobra
┢⎔ ${prefix}tharki
┢⎔ ${prefix}nibba
┢⎔ ${prefix}nibbi
┢⎔ ${prefix}mumu
┢⎔ ${prefix}rascal
┢⎔ ${prefix}scumbag
┢⎔ ${prefix}nuts
┢⎔ ${prefix}comrade
┢⎔ ${prefix}fagot
┢⎔ ${prefix}scoundrel
┢⎔ ${prefix}ditch
┢⎔ ${prefix}dope
┢⎔ ${prefix}gucci
┢⎔ ${prefix}lit
┢⎔ ${prefix}dumbass
┢⎔ ${prefix}sexy
┢⎔ ${prefix}crackhead
┢⎔ ${prefix}mf
┢⎔ ${prefix}motherfucker
┢⎔ ${prefix}dogla
┢⎔ ${prefix}bewda
┢⎔ ${prefix}boka
┢⎔ ${prefix}khanki
┢⎔ ${prefix}bal
┢⎔ ${prefix}sucker
┢⎔ ${prefix}fuckboy
┢⎔ ${prefix}playboy
┢⎔ ${prefix}fuckgirl
┢⎔ ${prefix}playgirl
┢⎔ ${prefix}bc
┢⎔ ${prefix}hot
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍

╭╼══〔 Random Anime 〕══╾
┢⎔ ${prefix}loli
┢⎔ ${prefix}neko
┢⎔ ${prefix}waifu
┢⎔ ${prefix}shinobu
┢⎔ ${prefix}megumin
┢⎔ ${prefix}bully
┢⎔ ${prefix}cuddle
┢⎔ ${prefix}cry
┢⎔ ${prefix}hug
┢⎔ ${prefix}awoo
┢⎔ ${prefix}kiss
┢⎔ ${prefix}lick
┢⎔ ${prefix}pat
┢⎔ ${prefix}smug
┢⎔ ${prefix}bonk
┢⎔ ${prefix}yeet
┢⎔ ${prefix}blush
┢⎔ ${prefix}smile
┢⎔ ${prefix}wave
┢⎔ ${prefix}highfive
┢⎔ ${prefix}handhold
┢⎔ ${prefix}nom
┢⎔ ${prefix}bite
┢⎔ ${prefix}glomp
┢⎔ ${prefix}slap
┢⎔ ${prefix}kill
┢⎔ ${prefix}happy
┢⎔ ${prefix}wink
┢⎔ ${prefix}poke
┢⎔ ${prefix}dance
┢⎔ ${prefix}cringe
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍

╭╼══〔 Nsfw & Sfw 〕══╾
┢⎔ ${prefix}ahegao
┢⎔ ${prefix}ass
┢⎔ ${prefix}bdsm
┢⎔ ${prefix}blowjob
┢⎔ ${prefix}cuckold
┢⎔ ${prefix}cum
┢⎔ ${prefix}ero
┢⎔ ${prefix}femdom
┢⎔ ${prefix}foot
┢⎔ ${prefix}gangbang
┢⎔ ${prefix}glasses
┢⎔ ${prefix}jahy
┢⎔ ${prefix}manga
┢⎔ ${prefix}masturbation
┢⎔ ${prefix}neko
┢⎔ ${prefix}orgy
┢⎔ ${prefix}panties
┢⎔ ${prefix}pussy
┢⎔ ${prefix}tentacles
┢⎔ ${prefix}thighs
┢⎔ ${prefix}yuri
┢⎔ ${prefix}feet
┢⎔ ${prefix}lewdkemo
┢⎔ ${prefix}woof
┢⎔ ${prefix}gasm
┢⎔ ${prefix}solo
┢⎔ ${prefix}8ball
┢⎔ ${prefix}goose
┢⎔ ${prefix}avatar
┢⎔ ${prefix}hololewd
┢⎔ ${prefix}gecg
┢⎔ ${prefix}holo
┢⎔ ${prefix}fox_girl
┢⎔ ${prefix}tits
┢⎔ ${prefix}eroyuri
┢⎔ ${prefix}holoyero
┢⎔ ${prefix}lizard
┢⎔ ${prefix}keta
┢⎔ ${prefix}eron
┢⎔ ${prefix}erok
┢⎔ ${prefix}kemonomimi
┢⎔ ${prefix}cum_jpg
┢⎔ ${prefix}nsfw_avatar
┢⎔ ${prefix}erofeet
┢⎔ ${prefix}meow
┢⎔ ${prefix}wallpaper
┢⎔ ${prefix}waifu
┢⎔ ${prefix}trap
┢⎔ ${prefix}lewd
┢⎔ ${prefix}pussy_jpg
┢⎔ ${prefix}futanari
┢⎔ ${prefix}lewdk
┢⎔ ${prefix}solog
┢⎔ ${prefix}smug
┢⎔ ${prefix}cum
┢⎔ ${prefix}slap
┢⎔ ${prefix}les
┢⎔ ${prefix}erokemo
┢⎔ ${prefix}bj
┢⎔ ${prefix}pwankg
┢⎔ ${prefix}pat
┢⎔ ${prefix}poke
┢⎔ ${prefix}feed
┢⎔ ${prefix}nsfw_neko_gif
┢⎔ ${prefix}pussy
┢⎔ ${prefix}feetg
┢⎔ ${prefix}baka
┢⎔ ${prefix}hug
┢⎔ ${prefix}kiss
┢⎔ ${prefix}tickle
┢⎔ ${prefix}spank
┢⎔ ${prefix}kuni
┢⎔ ${prefix}classic
┢⎔ ${prefix}boobs
┢⎔ ${prefix}anal
┢⎔ ${prefix}ngif
┢⎔ ${prefix}cuddle
┢⎔ ${prefix}zettai
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍

╭─❒ 「 Ephoto360 Menu 」
┢⎔ ${prefix}youtubegold
┢⎔ ${prefix}youtubesilver
┢⎔ ${prefix}facebookgold
┢⎔ ${prefix}facebooksilver
┢⎔ ${prefix}instagramgold
┢⎔ ${prefix}instagramsilver
┢⎔ ${prefix}twittergold
┢⎔ ${prefix}twittersilver
┢⎔ ${prefix}retrotext
┢⎔ ${prefix}halloweenbats
┢⎔ ${prefix}texthalloween
┢⎔ ${prefix}cardhalloween
┢⎔ ${prefix}birthdaycake
┢⎔ ${prefix}thundertext
┢⎔ ${prefix}icetext
┢⎔ ${prefix}milkcake
┢⎔ ${prefix}snowontext
┢⎔ ${prefix}metalstar
┢⎔ ${prefix}dragonfire
┢⎔ ${prefix}zombie3d
┢⎔ ${prefix}merrycard
┢⎔ ${prefix}generalexam 
┢⎔ ${prefix}viettel
┢⎔ ${prefix}embroider
┢⎔ ${prefix}graffititext
┢⎔ ${prefix}graffititext2
┢⎔ ${prefix}graffititext3
┢⎔ ${prefix}covergraffiti
┢⎔ ${prefix}moderngold
┢⎔ ${prefix}capercut
┢⎔ ${prefix}lovecard
┢⎔ ${prefix}heartflashlight
┢⎔ ${prefix}heartcup
┢⎔ ${prefix}sunglightshadow
┢⎔ ${prefix}graffiti3d
┢⎔ ${prefix}moderngoldsilver
┢⎔ ${prefix}moderngold2
┢⎔ ${prefix}moderngold3
┢⎔ ${prefix}fabrictext
┢⎔ ${prefix}masteryavatar
┢⎔ ${prefix}messagecoffee
┢⎔ ${prefix}announofwin
┢⎔ ${prefix}writeblood
┢⎔ ${prefix}horrorletter
┢⎔ ${prefix}writehorror
┢⎔ ${prefix}shirtclub
┢⎔ ${prefix}angelwing
┢⎔ ${prefix}christmasseason
┢⎔ ${prefix}projectyasuo
┢⎔ ${prefix}lovelycute
┢⎔ ${prefix}womansday
┢⎔ ${prefix}covergamepubg
┢⎔ ${prefix}nameonheart
┢⎔ ${prefix}funnyhalloween
┢⎔ ${prefix}lightningpubg
┢⎔ ${prefix}greetingcardvideo 
┢⎔ ${prefix}christmascard 
┢⎔ ${prefix}galaxybat
┢⎔ ${prefix}writegalaxy
┢⎔ ${prefix}starsnight
┢⎔ ${prefix}noeltext
┢⎔ ${prefix}textcakes
┢⎔ ${prefix}pubgbirthday
┢⎔ ${prefix}galaxywallpaper
┢⎔ ${prefix}pubgglicthvideo 
┢⎔ ${prefix}pubgmascotlogo
┢⎔ ${prefix}realembroidery
┢⎔ ${prefix}vintagetelevision
┢⎔ ${prefix}funnyanimations
┢⎔ ${prefix}glowingtext
┢⎔ ${prefix}textonglass
┢⎔ ${prefix}cartoonstyle
┢⎔ ${prefix}multicolor
┢⎔ ${prefix}watercolor2
┢⎔ ${prefix}textsky
┢⎔ ${prefix}summerbeach
┢⎔ ${prefix}1917text
┢⎔ ${prefix}puppycute
┢⎔ ${prefix}rosebirthday


╭╼══〔 Textpro Menu 〕══╾
┢⎔ ${prefix}halloween2 text|text2
┢⎔ ${prefix}horror text|text2
┢⎔ ${prefix}game8bit text|text2
┢⎔ ${prefix}layered text|text2
┢⎔ ${prefix}glitch2 text|text2
┢⎔ ${prefix}coolg text|text2
┢⎔ ${prefix}coolwg text|text2
┢⎔ ${prefix}realistic text|text2
┢⎔ ${prefix}space3d text|text2
┢⎔ ${prefix}gtiktok text|text2
┢⎔ ${prefix}stone text|text2
┢⎔ ${prefix}marvel text|text2
┢⎔ ${prefix}marvel2 text|text2
┢⎔ ${prefix}pornhub text|text2
┢⎔ ${prefix}avengers text|text2
┢⎔ ${prefix}metalr text|text2
┢⎔ ${prefix}metalg text|text2
┢⎔ ${prefix}metalg2 text|text2
┢⎔ ${prefix}halloween2 text|text2
┢⎔ ${prefix}lion text|text2
┢⎔ ${prefix}wolf_bw text|text2
┢⎔ ${prefix}wolf_g text|text2
┢⎔ ${prefix}ninja text|text2
┢⎔ ${prefix}3dsteel text|text2
┢⎔ ${prefix}horror2 text|text2
┢⎔ ${prefix}lava text|text2
┢⎔ ${prefix}bagel text|text2
┢⎔ ${prefix}blackpink text
┢⎔ ${prefix}rainbow2 text
┢⎔ ${prefix}water_pipe text
┢⎔ ${prefix}halloween text
┢⎔ ${prefix}sketch text
┢⎔ ${prefix}sircuit text
┢⎔ ${prefix}discovery text
┢⎔ ${prefix}metallic2 text
┢⎔ ${prefix}fiction text
┢⎔ ${prefix}demon text
┢⎔ ${prefix}transformer text
┢⎔ ${prefix}berry text
┢⎔ ${prefix}thunder text
┢⎔ ${prefix}magma text
┢⎔ ${prefix}3dstone text
┢⎔ ${prefix}neon text
┢⎔ ${prefix}glitch text
┢⎔ ${prefix}harry_potter text
┢⎔ ${prefix}embossed text
┢⎔ ${prefix}broken text
┢⎔ ${prefix}papercut text
┢⎔ ${prefix}gradient text
┢⎔ ${prefix}glossy text
┢⎔ ${prefix}watercolor text
┢⎔ ${prefix}multicolor text
┢⎔ ${prefix}neon_devil text
┢⎔ ${prefix}underwater text
┢⎔ ${prefix}bear text
┢⎔ ${prefix}wonderfulg text
┢⎔ ${prefix}christmas text
┢⎔ ${prefix}neon_light text
┢⎔ ${prefix}snow text
┢⎔ ${prefix}cloudsky text
┢⎔ ${prefix}luxury2 text
┢⎔ ${prefix}gradient2 text
┢⎔ ${prefix}summer text
┢⎔ ${prefix}writing text
┢⎔ ${prefix}engraved text
┢⎔ ${prefix}summery text
┢⎔ ${prefix}3dglue text
┢⎔ ${prefix}metaldark text
┢⎔ ${prefix}neonlight text
┢⎔ ${prefix}oscar text
┢⎔ ${prefix}minion text
┢⎔ ${prefix}holographic text
┢⎔ ${prefix}purple text
┢⎔ ${prefix}glossyb text
┢⎔ ${prefix}deluxe2 text
┢⎔ ${prefix}glossyc text
┢⎔ ${prefix}fabric text
┢⎔ ${prefix}neonc text
┢⎔ ${prefix}newyear text
┢⎔ ${prefix}newyear2 text
┢⎔ ${prefix}metals text
┢⎔ ${prefix}xmas text
┢⎔ ${prefix}blood text
┢⎔ ${prefix}darkg text
┢⎔ ${prefix}joker text
┢⎔ ${prefix}wicker text
┢⎔ ${prefix}natural text
┢⎔ ${prefix}firework text
┢⎔ ${prefix}skeleton text
┢⎔ ${prefix}balloon text
┢⎔ ${prefix}balloon2 text
┢⎔ ${prefix}balloon3 text
┢⎔ ${prefix}balloon4 text
┢⎔ ${prefix}balloon5 text
┢⎔ ${prefix}balloon6 text
┢⎔ ${prefix}balloon7 text
┢⎔ ${prefix}steel text
┢⎔ ${prefix}gloss text
┢⎔ ${prefix}denim text
┢⎔ ${prefix}decorate text
┢⎔ ${prefix}decorate2 text
┢⎔ ${prefix}peridot text
┢⎔ ${prefix}rock text
┢⎔ ${prefix}glass text
┢⎔ ${prefix}glass2 text
┢⎔ ${prefix}glass3 text
┢⎔ ${prefix}glass4 text
┢⎔ ${prefix}glass5 text
┢⎔ ${prefix}glass6 text
┢⎔ ${prefix}glass7 text
┢⎔ ${prefix}glass8 text
┢⎔ ${prefix}captain_as2 text
┢⎔ ${prefix}robot text
┢⎔ ${prefix}equalizer text
┢⎔ ${prefix}toxic text
┢⎔ ${prefix}sparkling text
┢⎔ ${prefix}sparkling2 text
┢⎔ ${prefix}sparkling3 text
┢⎔ ${prefix}sparkling4 text
┢⎔ ${prefix}sparkling5 text
┢⎔ ${prefix}sparkling6 text
┢⎔ ${prefix}sparkling7 text
┢⎔ ${prefix}decorative text
┢⎔ ${prefix}chocolate text
┢⎔ ${prefix}strawberry text
┢⎔ ${prefix}koifish text
┢⎔ ${prefix}bread text
┢⎔ ${prefix}matrix text
┢⎔ ${prefix}blood2 text
┢⎔ ${prefix}neonligth2 text
┢⎔ ${prefix}thunder2 text
┢⎔ ${prefix}3dbox text
┢⎔ ${prefix}neon2 text
┢⎔ ${prefix}roadw text
┢⎔ ${prefix}bokeh text
┢⎔ ${prefix}gneon text
┢⎔ ${prefix}advanced text
┢⎔ ${prefix}dropwater text
┢⎔ ${prefix}wall text
┢⎔ ${prefix}chrismast text
┢⎔ ${prefix}honey text
┢⎔ ${prefix}drug text
┢⎔ ${prefix}marble text
┢⎔ ${prefix}marble2 text
┢⎔ ${prefix}ice text
┢⎔ ${prefix}juice text
┢⎔ ${prefix}rusty text
┢⎔ ${prefix}abstra text
┢⎔ ${prefix}biscuit text
┢⎔ ${prefix}wood text
┢⎔ ${prefix}scifi text
┢⎔ ${prefix}metalr text
┢⎔ ${prefix}purpleg text
┢⎔ ${prefix}shiny text 
┢⎔ ${prefix}jewelry text
┢⎔ ${prefix}jewelry2 text
┢⎔ ${prefix}jewelry3 text
┢⎔ ${prefix}jewelry4 text
┢⎔ ${prefix}jewelry5 text
┢⎔ ${prefix}jewelry6 text
┢⎔ ${prefix}jewelry7 text
┢⎔ ${prefix}jewelry8 text
┢⎔ ${prefix}metalh text
┢⎔ ${prefix}golden text
┢⎔ ${prefix}glitter text
┢⎔ ${prefix}glitter2 text
┢⎔ ${prefix}glitter3 text
┢⎔ ${prefix}glitter4 text
┢⎔ ${prefix}glitter5 text
┢⎔ ${prefix}glitter6 text
┢⎔ ${prefix}glitter7 text
┢⎔ ${prefix}metale text
┢⎔ ${prefix}carbon text
┢⎔ ${prefix}candy text
┢⎔ ${prefix}metalb text
┢⎔ ${prefix}gemb text
┢⎔ ${prefix}3dchrome text
┢⎔ ${prefix}metalb2 text
┢⎔ ${prefix}metalg text
┢⎔ ${prefix}metalg text
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍

╭╼═══〔 Others 〕══╾
┢⎔ ${prefix}afk [reason]
┢⎔ ${prefix}translate kode_bahasa text
┢⎔ ${prefix}kalkulator [query]
┢⎔ ${prefix}smeme [text]
┢⎔ ${prefix}smeme2 [text|text]
┢⎔ ${prefix}memegen [text|text]
┢⎔ ${prefix}emojimix 😒+😅
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍

╭╼═══〔 Others 〕═══╾
┢⎔ ${prefix}kuismath
┢⎔ ${prefix}tebakkata
┢⎔ ${prefix}tebakgambar
┢⎔ ${prefix}tebakbendera
┢⎔ ${prefix}tebakkalimat
┢⎔ ${prefix}tebaksiapa
┢⎔ ${prefix}tebakkabupaten
┢⎔ ${prefix}tebakkimia
┢⎔ ${prefix}tebaklirik
┢⎔ ${prefix}tebaktebakan
┢⎔ ${prefix}tekateki
┢⎔ ${prefix}susunkata
┢⎔ ${prefix}caklontong
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍

╭╼═══〔 Asupan 〕═══╾
┢⎔ ${prefix}chika
┢⎔ ${prefix}delvira
┢⎔ ${prefix}ayu
┢⎔ ${prefix}bunga
┢⎔ ${prefix}aura
┢⎔ ${prefix}nisa
┢⎔ ${prefix}ziva
┢⎔ ${prefix}yana
┢⎔ ${prefix}viona
┢⎔ ${prefix}syania
┢⎔ ${prefix}riri
┢⎔ ${prefix}syifa
┢⎔ ${prefix}mama_gina
┢⎔ ${prefix}alcakenya
┢⎔ ${prefix}mangayutri
┢⎔ ${prefix}rikagusriani
┢⎔ ${prefix}asupan
┢⎔ ${prefix}bocil
┢⎔ ${prefix}geayubi
┢⎔ ${prefix}santuy
┢⎔ ${prefix}ukhty
┢⎔ ${prefix}syifa
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍

╭╼═══〔 TeleSticker 〕════╾
┢⎔ ${prefix}awoawo
┢⎔ ${prefix}benedict
┢⎔ ${prefix}chat
┢⎔ ${prefix}dbfly
┢⎔ ${prefix}dino_kuning
┢⎔ ${prefix}doge
┢⎔ ${prefix}gojosatoru
┢⎔ ${prefix}hope_boy
┢⎔ ${prefix}jisoo
┢⎔ ${prefix}kr_robot
┢⎔ ${prefix}kucing
┢⎔ ${prefix}lonte
┢⎔ ${prefix}manusia_lidi
┢⎔ ${prefix}menjamet
┢⎔ ${prefix}meow
┢⎔ ${prefix}nicholas
┢⎔ ${prefix}patrick
┢⎔ ${prefix}popoci
┢⎔ ${prefix}sponsbob
┢⎔ ${prefix}kawan_sponsbob
┢⎔ ${prefix}tyni
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍

╭╼══〔 Random Cewek 〕══╾
┢⎔ ${prefix}china 
┢⎔ ${prefix}indonesia 
┢⎔ ${prefix}malaysia 
┢⎔ ${prefix}thailand 
┢⎔ ${prefix}korea 
┢⎔ ${prefix}japan 
┢⎔ ${prefix}vietnam 
┢⎔ ${prefix}jenni 
┢⎔ ${prefix}jiso 
┢⎔ ${prefix}lisa  
┢⎔ ${prefix}rose
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍

╭╼═══〔 Logo Menu 〕════╾
┢⎔ ${prefix}coverbannerlol text|heroes
┢⎔ ${prefix}pubglogomaker text|style
┢⎔ ${prefix}colorfulpubg text|color
┢⎔ ${prefix}astronotspace text|style
┢⎔ ${prefix}wallpaperaov text|heroes
┢⎔ ${prefix}maketeamlogo text|style
┢⎔ ${prefix}circlemarcotteam text|logo
┢⎔ ${prefix}wallpaperml text|heroes
┢⎔ ${prefix}dragonballfb text|character
┢⎔ ${prefix}bannerofaov text|character
┢⎔ ${prefix}effect3donbeach text|background
┢⎔ ${prefix}cutegirlgamer text|logo
┢⎔ ${prefix}footballteam text|logo
┢⎔ ${prefix}beautifulshimmering text|champion
┢⎔ ${prefix}pubgcutelogo text|logo
┢⎔ ${prefix}elegantrotation text|logo
┢⎔ ${prefix}logogamingassasin text|logo
┢⎔ ${prefix}introvideomaker text|logo
┢⎔ ${prefix}gaminglogo4fvs text|logo
┢⎔ ${prefix}blueneon text|logo
┢⎔ ${prefix}metalmascot text|logo
┢⎔ ${prefix}anonymous2 text|style
┢⎔ ${prefix}lolpentakill text|style
┢⎔ ${prefix}avatarleagueofking text|style
┢⎔ ${prefix}avatarff text|character
┢⎔ ${prefix}overwatchwallpaper text|character
┢⎔ ${prefix}rovwallpaperhd text|hero
┢⎔ ${prefix}rovwallpaper text|avatar
┢⎔ ${prefix}beautifulgalaxylol text|style
┢⎔ ${prefix}crossfirecover text|character
┢⎔ ${prefix}lolwallpaper text|wallpaper
┢⎔ ${prefix}coverdota2 text|heroes
┢⎔ ${prefix}coverleagueofking text|character
┢⎔ ${prefix}avatar3q360 text|avatar
┢⎔ ${prefix}coverofwarface text|character
┢⎔ ${prefix}newlolavatar text|avatar
┢⎔ ${prefix}csgocover text|background
┢⎔ ${prefix}coverloknew text|hero
┢⎔ ${prefix}coverfblol text|letters
┢⎔ ${prefix}overwatchcover text|hero
┢⎔ ${prefix}crossfirestyle text|avatar
┢⎔ ${prefix}avatarlolbyname text|style
┢⎔ ${prefix}lolcoverbyname text|avatar
┢⎔ ${prefix}cyberhunterfb text|character
┢⎔ ${prefix}coverfreefirefb text|character
┢⎔ ${prefix}gamingmascot text|style
┢⎔ ${prefix}coveronepiecefb text|character
┢⎔ ${prefix}bannerytcsgo text|banner
┢⎔ ${prefix}fbgamepubgcover text|template
┢⎔ ${prefix}banneroflol text|text2|banner
┢⎔ ${prefix}bannerofaov2 text|text2|banner
┢⎔ ${prefix}teamlogo text|text2|background
┢⎔ ${prefix}companylogo2 text|text2|background
┢⎔ ${prefix}companylogo text|text2|background
┢⎔ ${prefix}gradientlogo text|text2|background
┢⎔ ${prefix}pencilsketch text|text2|icon
┢⎔ ${prefix}gunlogogaming text|text2|background
┢⎔ ${prefix}banneroffreefire text|text2|background
┢⎔ ${prefix}letterlogos text|text2|thumb
┢⎔ ${prefix}bannerofoverwatch text|text2|background
┢⎔ ${prefix}bannerofapex text|text2|background
┢⎔ ${prefix}bannerofpubg text|text2|background
┢⎔ ${prefix}mascotstyle text|text2|thumb
┢⎔ ${prefix}logoaccording text|text2|thumb
┢⎔ ${prefix}avataroverwatch text|text2|thumb
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍

╭╼═══〔 Islamic 〕════╾
┢⎔ ${prefix}asmaulhusna
┢⎔ ${prefix}kisahnabi [nabi]
┢⎔ ${prefix}jadwalshalat [daerah]
┢⎔ ${prefix}randomquran
┢⎔ ${prefix}randomquran2
┢⎔ ${prefix}listsurah
┢⎔ ${prefix}tafsirsurah [surah]
┢⎔ ${prefix}alquranaudio [surah|ayat]
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍

╭╼═══〔 Sound 〕════╾
┢⎔ ${prefix}sound1
┢⎔ ${prefix}sound2
┢⎔ ${prefix}sound3
┢⎔ ${prefix}sound4
┢⎔ ${prefix}sound5
┢⎔ ${prefix}sound6
┢⎔ ${prefix}sound7
┢⎔ ${prefix}sound8
┢⎔ ${prefix}sound9
┢⎔ ${prefix}sound10
┢⎔ ${prefix}sound11
┢⎔ ${prefix}sound12
┢⎔ ${prefix}sound13
┢⎔ ${prefix}sound14
┢⎔ ${prefix}sound15
┢⎔ ${prefix}sound16
┢⎔ ${prefix}sound17
┢⎔ ${prefix}sound18 
┢⎔ ${prefix}sound19
┢⎔ ${prefix}sound20
┢⎔ ${prefix}sound21
┢⎔ ${prefix}sound22
┢⎔ ${prefix}sound23
┢⎔ ${prefix}sound24
┢⎔ ${prefix}sound25
┢⎔ ${prefix}sound26
┢⎔ ${prefix}sound27
┢⎔ ${prefix}sound28
┢⎔ ${prefix}sound29
┢⎔ ${prefix}sound30
┢⎔ ${prefix}sound31
┢⎔ ${prefix}sound32
┢⎔ ${prefix}sound33
┢⎔ ${prefix}sound34
┢⎔ ${prefix}sound35
┢⎔ ${prefix}sound36
┢⎔ ${prefix}sound37
┢⎔ ${prefix}sound38
┢⎔ ${prefix}sound39
┢⎔ ${prefix}sound40
┢⎔ ${prefix}sound41
┢⎔ ${prefix}sound42
┢⎔ ${prefix}sound43
┢⎔ ${prefix}sound44
┢⎔ ${prefix}sound45
┢⎔ ${prefix}sound46
┢⎔ ${prefix}sound47
┢⎔ ${prefix}sound48
┢⎔ ${prefix}sound49
┢⎔ ${prefix}sound50
┢⎔ ${prefix}sound51
┢⎔ ${prefix}sound52
┢⎔ ${prefix}sound53
┢⎔ ${prefix}sound54
┢⎔ ${prefix}sound55
┢⎔ ${prefix}sound56
┢⎔ ${prefix}sound57
┢⎔ ${prefix}sound58
┢⎔ ${prefix}sound59
┢⎔ ${prefix}sound60
┢⎔ ${prefix}sound61
┢⎔ ${prefix}sound62
┢⎔ ${prefix}sound63
┢⎔ ${prefix}sound64
┢⎔ ${prefix}sound65
┢⎔ ${prefix}sound66
┢⎔ ${prefix}sound67
┢⎔ ${prefix}sound68
┢⎔ ${prefix}sound69
┢⎔ ${prefix}sound70
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍

Thank You For
• My God
• My Parents
• Fatih A.
• Ferdi
• DikaArdnt
• Mhankbarbar
• Nurutomo
• Rashid
• ZeeoneOfc
• Clara-DV
• Penyedia Module
• And All Support

©WhatsApp Bot 2022

    `
}

exports.rules = (prefix) => {
    return `
╍╍╍╍╍〔 Rules & Faq〕╍╍╍╍╍

Rules:
1. Don't Spam Bots
2. Don't Call & VC Bot
3. Don't Compare Bots
4. Don't Break Bots
5. Bots & Owners Are Not 
     Responsible For The Features 
     You Use

Faq:
❓ Bot Not Or Slow To Respond ?
❗ It Happens Because The Ramen Is On Demand Or The Bot Is Rebooting

❗ Why Do Bots Often Exit Alone?
❓ If You Dont Break The Rules The Bot Wont Get Out

❗ Can I Add To The Group?
❓ This Bot Is Free But Conditional

❗ Whats The Prefix?
❓ This Bot Is Multi Prefix And Can Also Be Without Prefix


*Thank You For Those Who Have Complied With The Rules Of This Bot And If You Have Any Other Questions About This Bot, You Can Contact The Owner*
`
}
exports.welcome = () =>{
	return`*Don't forget the introduction sis 🤗
	
╭ Name :
┢⎔ Age :
┢⎔ Gender :
┢⎔ From country :
┢⎔  Please obey the group rules, sis ~*`
}
exports.leave = () =>{
	return`*Well Why Out 😣 Mentally Safe, Right? >.<
Goodbye*`
}
exports.source = () =>{
return`*------「 SOURCE CODE 」 ------*

Base : https://github.com/DikaArdnt/Hisoka-Morou
Recode : https://www.instagram.com/katyushaclara/
`
}
exports.tos = (ownernomer) => {
    return `
*╍╼═══〔 Donation 〕═══╾╍*

Hai👋
Kalian Bisa Mendukung Bot Felicia Agar Lebih Baik Dengan Cara Melakukan Donasi, Hubungi Owner Jika Ingin Donasi.

Berapapun Donasi Kalian Akan Sangat Berarti

Thank You....

Contact Person Owner:
wa.me/${ownernomer}

    `
}

exports.info = (prefix) =>{
	return`╭╼═══〔 Bot Info 〕═══╾
┢⎔ ${prefix}owner
┢⎔ ${prefix}rules
┢⎔ ${prefix}sc
┢⎔ ${prefix}ping
┢⎔ ${prefix}runtime
┢⎔ ${prefix}botstatus
┢⎔ ${prefix}donate
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
`}

exports.ownermenu = (prefix) =>{
return`╭╼═══〔 Owner 〕═══╾
┢⎔ < evaluate
┢⎔ > evaluate
┢⎔ $ exec
┢⎔ => exec
┢⎔ ${prefix}setmenu [query]
┢⎔ ${prefix}setmenu templateLocation
┢⎔ ${prefix}setmenu templateTenor
┢⎔ ${prefix}setmenu katalog
┢⎔ ${prefix}setmenu katalog2
┢⎔ ${prefix}setmenu list
┢⎔ ${prefix}setwm packname|author
┢⎔ ${prefix}sendsesi
┢⎔ ${prefix}listpc
┢⎔ ${prefix}listgc
┢⎔ ${prefix}broadcast [text]
┢⎔ ${prefix}bc [text]
┢⎔ ${prefix}bcgc [text]
┢⎔ ${prefix}nsfw [on/off]
┢⎔ ${prefix}mute [on/off]
┢⎔ ${prefix}banchat
┢⎔ ${prefix}unbanchat
┢⎔ ${prefix}autorespond [on/off]
┢⎔ ${prefix}antiviewonce [on/off]
┢⎔ ${prefix}autobio [on/off]
┢⎔ ${prefix}join [link]
┢⎔ ${prefix}self
┢⎔ ${prefix}public [only bot]
┢⎔ ${prefix}del [pesan bot]
┢⎔ ${prefix}setppbot [reply image]
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
`}

exports.database = (prefix) =>{
	return`╭╼═══〔 Database 〕═══╾
┢⎔ ${prefix}setcmd [reply stiker]
┢⎔ ${prefix}delcmd [reply stiker]
┢⎔ ${prefix}listcmd
┢⎔ ${prefix}absen
┢⎔ ${prefix}cekabsen
┢⎔ ${prefix}deleteabsen
┢⎔ ${prefix}absenstart
┢⎔ ${prefix}addmsg [nama file]
┢⎔ ${prefix}getmsg [nama file]
┢⎔ ${prefix}listmsg
┢⎔ ${prefix}delmsg [nama file]
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
`}

exports.group = (prefix) =>{
	return`╭╼═══〔 Group 〕═══╾
┢⎔ ${prefix}sider
┢⎔ ${prefix}wm packname|author
┢⎔ ${prefix}infochat
┢⎔ ${prefix}setdesk [text]
┢⎔ ${prefix}setppgrup [reply image]
┢⎔ ${prefix}antilink [on/off]
┢⎔ ${prefix}revoke
┢⎔ ${prefix}leave
┢⎔ ${prefix}add [62***]
┢⎔ ${prefix}kick @tag
┢⎔ ${prefix}leave
┢⎔ ${prefix}linkgc
┢⎔ ${prefix}take packname|author
┢⎔ ${prefix}group [open/close]
┢⎔ ${prefix}tagall [text]
┢⎔ ${prefix}hidetag [text]
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
`}

exports.anime = (prefix) =>{
	return`╭╼═══〔 Anime 〕═══╾
┢⎔ ${prefix}quotesanime
┢⎔ ${prefix}anime [query]
┢⎔ ${prefix}manga [query]
┢⎔ ${prefix}character [query]
┢⎔ ${prefix}animestory [query]
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
`}

exports.tag = (prefix) =>{
	return`╭╼═══〔 Tag 〕═══╾
┢⎔ ${prefix}stickertag
┢⎔ ${prefix}videotag [query]
┢⎔ ${prefix}vntag [query]
┢⎔ ${prefix}imagetag [query]
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
`}

exports.stalk = (prefix) =>{
	return`╭╼═══〔 Stalking 〕═══╾
┢⎔ ${prefix}igstalk [username]
┢⎔ ${prefix}ghstalk [username]
┢⎔ ${prefix}ytstalk [channel]
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
`}

exports.search = (prefix) =>{
	return`╭╼═══〔 Search 〕═══╾
┢⎔ ${prefix}ytsearch [query]
┢⎔ ${prefix}wallpaper [query]
┢⎔ ${prefix}google [query]
┢⎔ ${prefix}wikimedia [query]
┢⎔ ${prefix}hentai
┢⎔ ${prefix}wattpad [query]
┢⎔ ${prefix}webtoons [query]
┢⎔ ${prefix}drakor [query]
┢⎔ ${prefix}pinterest [query]
┢⎔ ${prefix}lyrics [query]
┢⎔ ${prefix}lyrics [query]
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
`}

exports.converter = (prefix) =>{
	return`╭╼═══〔 Convert 〕═══╾
┢⎔ ${prefix}toaudio [video]
┢⎔ ${prefix}tomp3 [video]
┢⎔ ${prefix}tovn [video]
┢⎔ ${prefix}stiker [reply image]
┢⎔ ${prefix}tourl [image/video]
┢⎔ ${prefix}togif [sticker]
┢⎔ ${prefix}tomp4 [sticker]
┢⎔${prefix}toimg [reply sticker]
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
`}

exports.effect = (prefix) =>{
	return`╭╼══〔 Image Effecf 〕═══╾
┢⎔ ${prefix}wanted [reply image/stiker]
┢⎔ ${prefix}utatoo [reply image/stiker]
┢⎔ ${prefix}unsharpen [reply image/stiker]
┢⎔ ${prefix}thanos [reply image/stiker]
┢⎔ ${prefix}sniper [reply image/stiker]
┢⎔ ${prefix}sharpen [reply image/stiker]
┢⎔ ${prefix}sepia [reply image/stiker]
┢⎔ ${prefix}scary [reply image/stiker]
┢⎔ ${prefix}rip [reply image/stiker]
┢⎔ ${prefix}redple [reply image/stiker]
┢⎔ ${prefix}rejected [reply image/stiker]
┢⎔ ${prefix}posterize [reply image/stiker]
┢⎔ ${prefix}ps4 [reply image/stiker]
┢⎔ ${prefix}pixelize [reply image/stiker]
┢⎔ ${prefix}missionpassed [reply image/stiker]
┢⎔ ${prefix}moustache [reply image/stiker]
┢⎔ ${prefix}lookwhatkarenhave [reply image/stiker]
┢⎔ ${prefix}jail [reply image/stiker]
┢⎔ ${prefix}invert [reply image/stiker]
┢⎔ ${prefix}instagram [reply image/stiker]
┢⎔ ${prefix}greyscale [reply image/stiker]
┢⎔ ${prefix}glitch [reply image/stiker]
┢⎔ ${prefix}gay [reply image/stiker]
┢⎔ ${prefix}frame [reply image/stiker]
┢⎔ ${prefix}fire [reply image/stiker]
┢⎔ ${prefix}distort [reply image/stiker]
┢⎔ ${prefix}dictator [reply image/stiker]
┢⎔ ${prefix}deepfry [reply image/stiker]
┢⎔ ${prefix}ddungeon [reply image/stiker]
┢⎔ ${prefix}circle [reply image/stiker]
┢⎔ ${prefix}challenger [reply image/stiker]
┢⎔ ${prefix}burn [reply image/stiker]
┢⎔ ${prefix}brazzers [reply image/stiker]
┢⎔ ${prefix}beautiful [reply image/stiker]
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
`}

//
exports.effect2 = (prefix) =>{
	return`╭╼══〔 Sticker Effecr 〕══╾
┢⎔ ${prefix}jail [reply image/stiker]
┢⎔ ${prefix}red [reply image/stiker]
┢⎔ ${prefix}gay [reply image/stiker]
┢⎔ ${prefix}bloo [reply image/stiker]
┢⎔ ${prefix}blue [reply image/stiker]
┢⎔ ${prefix}sepia [reply image/stiker]
┢⎔ ${prefix}green [reply image/stiker]
┢⎔ ${prefix}glass [reply image/stiker]
┢⎔ ${prefix}invert [reply image/stiker]
┢⎔ ${prefix}blurple [reply image/stiker]
┢⎔ ${prefix}blurple2 [reply image/stiker]
┢⎔ ${prefix}wasted [reply image/stiker]
┢⎔ ${prefix}passed [reply image/stiker]
┢⎔ ${prefix}triggered [reply image/stiker]
┢⎔ ${prefix}comrade [reply image/stiker]
┢⎔ ${prefix}greyscale [reply image/stiker]
┢⎔ ${prefix}threshold [reply image/stiker]
┢⎔ ${prefix}brightness [reply image/stiker]
┢⎔ ${prefix}invertgreyscale [reply image/stiker]
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
`
}

exports.download = (prefix) =>{
return`╭╼══〔 Download 〕═══╾
┢⎔ ${prefix}tiktok [link]
┢⎔ ${prefix}tiktoknowm [link]
┢⎔ ${prefix}tiktokwm [link]
┢⎔ ${prefix}tiktokaudio [link]
┢⎔ ${prefix}ytdl [link]
┢⎔ ${prefix}play [query]
┢⎔ ${prefix}ytmp3 [link]
┢⎔ ${prefix}ytshortmp3 [link]
┢⎔ ${prefix}ytmp4 [link]
┢⎔ ${prefix}ytshorts [link]
┢⎔ ${prefix}facebook [link]
┢⎔ ${prefix}facebooksd [link]
┢⎔ ${prefix}facebookhd [link]
┢⎔ ${prefix}fbaudio [link]
┢⎔ ${prefix}igstory [username]
┢⎔ ${prefix}igdl [link]
┢⎔ ${prefix}igphoto [link]
┢⎔ ${prefix}igvideo [link]
┢⎔ ${prefix}igreels [link]
┢⎔ ${prefix}igtv [link]
┢⎔ ${prefix}soundcloud [link]
┢⎔ ${prefix}gitclone [link repo]
┢⎔ ${prefix}gitrepo [username repo branch]
┢⎔ ${prefix}mediafire [link]
┢⎔ ${prefix}twitter link
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
`
}

exports.ranime = (prefix) =>{
	return`╭╼══〔 Random Anime 〕══╾
┢⎔ ${prefix}loli
┢⎔ ${prefix}neko
┢⎔ ${prefix}waifu
┢⎔ ${prefix}shinobu
┢⎔ ${prefix}megumin
┢⎔ ${prefix}bully
┢⎔ ${prefix}cuddle
┢⎔ ${prefix}cry
┢⎔ ${prefix}hug
┢⎔ ${prefix}awoo
┢⎔ ${prefix}kiss
┢⎔ ${prefix}lick
┢⎔ ${prefix}pat
┢⎔ ${prefix}smug
┢⎔ ${prefix}bonk
┢⎔ ${prefix}yeet
┢⎔ ${prefix}blush
┢⎔ ${prefix}smile
┢⎔ ${prefix}wave
┢⎔ ${prefix}highfive
┢⎔ ${prefix}handhold
┢⎔ ${prefix}nom
┢⎔ ${prefix}bite
┢⎔ ${prefix}glomp
┢⎔ ${prefix}slap
┢⎔ ${prefix}kill
┢⎔ ${prefix}happy
┢⎔ ${prefix}wink
┢⎔ ${prefix}poke
┢⎔ ${prefix}dance
┢⎔ ${prefix}cringe
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
`
}

exports.nsfw = (prefix) =>{
	return`╭╼══〔 Nsfw & Sfw 〕══╾
┢⎔ ${prefix}ahegao
┢⎔ ${prefix}ass
┢⎔ ${prefix}bdsm
┢⎔ ${prefix}blowjob
┢⎔ ${prefix}cuckold
┢⎔ ${prefix}cum
┢⎔ ${prefix}ero
┢⎔ ${prefix}femdom
┢⎔ ${prefix}foot
┢⎔ ${prefix}gangbang
┢⎔ ${prefix}glasses
┢⎔ ${prefix}jahy
┢⎔ ${prefix}manga
┢⎔ ${prefix}masturbation
┢⎔ ${prefix}neko
┢⎔ ${prefix}orgy
┢⎔ ${prefix}panties
┢⎔ ${prefix}pussy
┢⎔ ${prefix}tentacles
┢⎔ ${prefix}thighs
┢⎔ ${prefix}yuri
┢⎔ ${prefix}feet
┢⎔ ${prefix}lewdkemo
┢⎔ ${prefix}woof
┢⎔ ${prefix}gasm
┢⎔ ${prefix}solo
┢⎔ ${prefix}8ball
┢⎔ ${prefix}goose
┢⎔ ${prefix}avatar
┢⎔ ${prefix}hololewd
┢⎔ ${prefix}gecg
┢⎔ ${prefix}holo
┢⎔ ${prefix}fox_girl
┢⎔ ${prefix}tits
┢⎔ ${prefix}eroyuri
┢⎔ ${prefix}holoyero
┢⎔ ${prefix}lizard
┢⎔ ${prefix}keta
┢⎔ ${prefix}eron
┢⎔ ${prefix}erok
┢⎔ ${prefix}kemonomimi
┢⎔ ${prefix}cum_jpg
┢⎔ ${prefix}nsfw_avatar
┢⎔ ${prefix}erofeet
┢⎔ ${prefix}meow
┢⎔ ${prefix}wallpaper
┢⎔ ${prefix}waifu
┢⎔ ${prefix}trap
┢⎔ ${prefix}lewd
┢⎔ ${prefix}pussy_jpg
┢⎔ ${prefix}futanari
┢⎔ ${prefix}lewdk
┢⎔ ${prefix}solog
┢⎔ ${prefix}smug
┢⎔ ${prefix}cum
┢⎔ ${prefix}slap
┢⎔ ${prefix}les
┢⎔ ${prefix}erokemo
┢⎔ ${prefix}bj
┢⎔ ${prefix}pwankg
┢⎔ ${prefix}pat
┢⎔ ${prefix}poke
┢⎔ ${prefix}feed
┢⎔ ${prefix}nsfw_neko_gif
┢⎔ ${prefix}pussy
┢⎔ ${prefix}feetg
┢⎔ ${prefix}baka
┢⎔ ${prefix}hug
┢⎔ ${prefix}kiss
┢⎔ ${prefix}tickle
┢⎔ ${prefix}spank
┢⎔ ${prefix}kuni
┢⎔ ${prefix}classic
┢⎔ ${prefix}boobs
┢⎔ ${prefix}anal
┢⎔ ${prefix}ngif
┢⎔ ${prefix}cuddle
┢⎔ ${prefix}zettai
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
`
}

exports.textpro = (prefix) =>{
	return`╭╼══〔 Textpro Menu 〕══╾
┢⎔ ${prefix}halloween2 text|text2
┢⎔ ${prefix}horror text|text2
┢⎔ ${prefix}game8bit text|text2
┢⎔ ${prefix}layered text|text2
┢⎔ ${prefix}glitch2 text|text2
┢⎔ ${prefix}coolg text|text2
┢⎔ ${prefix}coolwg text|text2
┢⎔ ${prefix}realistic text|text2
┢⎔ ${prefix}space3d text|text2
┢⎔ ${prefix}gtiktok text|text2
┢⎔ ${prefix}stone text|text2
┢⎔ ${prefix}marvel text|text2
┢⎔ ${prefix}marvel2 text|text2
┢⎔ ${prefix}pornhub text|text2
┢⎔ ${prefix}avengers text|text2
┢⎔ ${prefix}metalr text|text2
┢⎔ ${prefix}metalg text|text2
┢⎔ ${prefix}metalg2 text|text2
┢⎔ ${prefix}halloween2 text|text2
┢⎔ ${prefix}lion text|text2
┢⎔ ${prefix}wolf_bw text|text2
┢⎔ ${prefix}wolf_g text|text2
┢⎔ ${prefix}ninja text|text2
┢⎔ ${prefix}3dsteel text|text2
┢⎔ ${prefix}horror2 text|text2
┢⎔ ${prefix}lava text|text2
┢⎔ ${prefix}bagel text|text2
┢⎔ ${prefix}blackpink text
┢⎔ ${prefix}rainbow2 text
┢⎔ ${prefix}water_pipe text
┢⎔ ${prefix}halloween text
┢⎔ ${prefix}sketch text
┢⎔ ${prefix}sircuit text
┢⎔ ${prefix}discovery text
┢⎔ ${prefix}metallic2 text
┢⎔ ${prefix}fiction text
┢⎔ ${prefix}demon text
┢⎔ ${prefix}transformer text
┢⎔ ${prefix}berry text
┢⎔ ${prefix}thunder text
┢⎔ ${prefix}magma text
┢⎔ ${prefix}3dstone text
┢⎔ ${prefix}neon text
┢⎔ ${prefix}glitch text
┢⎔ ${prefix}harry_potter text
┢⎔ ${prefix}embossed text
┢⎔ ${prefix}broken text
┢⎔ ${prefix}papercut text
┢⎔ ${prefix}gradient text
┢⎔ ${prefix}glossy text
┢⎔ ${prefix}watercolor text
┢⎔ ${prefix}multicolor text
┢⎔ ${prefix}neon_devil text
┢⎔ ${prefix}underwater text
┢⎔ ${prefix}bear text
┢⎔ ${prefix}wonderfulg text
┢⎔ ${prefix}christmas text
┢⎔ ${prefix}neon_light text
┢⎔ ${prefix}snow text
┢⎔ ${prefix}cloudsky text
┢⎔ ${prefix}luxury2 text
┢⎔ ${prefix}gradient2 text
┢⎔ ${prefix}summer text
┢⎔ ${prefix}writing text
┢⎔ ${prefix}engraved text
┢⎔ ${prefix}summery text
┢⎔ ${prefix}3dglue text
┢⎔ ${prefix}metaldark text
┢⎔ ${prefix}neonlight text
┢⎔ ${prefix}oscar text
┢⎔ ${prefix}minion text
┢⎔ ${prefix}holographic text
┢⎔ ${prefix}purple text
┢⎔ ${prefix}glossyb text
┢⎔ ${prefix}deluxe2 text
┢⎔ ${prefix}glossyc text
┢⎔ ${prefix}fabric text
┢⎔ ${prefix}neonc text
┢⎔ ${prefix}newyear text
┢⎔ ${prefix}newyear2 text
┢⎔ ${prefix}metals text
┢⎔ ${prefix}xmas text
┢⎔ ${prefix}blood text
┢⎔ ${prefix}darkg text
┢⎔ ${prefix}joker text
┢⎔ ${prefix}wicker text
┢⎔ ${prefix}natural text
┢⎔ ${prefix}firework text
┢⎔ ${prefix}skeleton text
┢⎔ ${prefix}balloon text
┢⎔ ${prefix}balloon2 text
┢⎔ ${prefix}balloon3 text
┢⎔ ${prefix}balloon4 text
┢⎔ ${prefix}balloon5 text
┢⎔ ${prefix}balloon6 text
┢⎔ ${prefix}balloon7 text
┢⎔ ${prefix}steel text
┢⎔ ${prefix}gloss text
┢⎔ ${prefix}denim text
┢⎔ ${prefix}decorate text
┢⎔ ${prefix}decorate2 text
┢⎔ ${prefix}peridot text
┢⎔ ${prefix}rock text
┢⎔ ${prefix}glass text
┢⎔ ${prefix}glass2 text
┢⎔ ${prefix}glass3 text
┢⎔ ${prefix}glass4 text
┢⎔ ${prefix}glass5 text
┢⎔ ${prefix}glass6 text
┢⎔ ${prefix}glass7 text
┢⎔ ${prefix}glass8 text
┢⎔ ${prefix}captain_as2 text
┢⎔ ${prefix}robot text
┢⎔ ${prefix}equalizer text
┢⎔ ${prefix}toxic text
┢⎔ ${prefix}sparkling text
┢⎔ ${prefix}sparkling2 text
┢⎔ ${prefix}sparkling3 text
┢⎔ ${prefix}sparkling4 text
┢⎔ ${prefix}sparkling5 text
┢⎔ ${prefix}sparkling6 text
┢⎔ ${prefix}sparkling7 text
┢⎔ ${prefix}decorative text
┢⎔ ${prefix}chocolate text
┢⎔ ${prefix}strawberry text
┢⎔ ${prefix}koifish text
┢⎔ ${prefix}bread text
┢⎔ ${prefix}matrix text
┢⎔ ${prefix}blood2 text
┢⎔ ${prefix}neonligth2 text
┢⎔ ${prefix}thunder2 text
┢⎔ ${prefix}3dbox text
┢⎔ ${prefix}neon2 text
┢⎔ ${prefix}roadw text
┢⎔ ${prefix}bokeh text
┢⎔ ${prefix}gneon text
┢⎔ ${prefix}advanced text
┢⎔ ${prefix}dropwater text
┢⎔ ${prefix}wall text
┢⎔ ${prefix}chrismast text
┢⎔ ${prefix}honey text
┢⎔ ${prefix}drug text
┢⎔ ${prefix}marble text
┢⎔ ${prefix}marble2 text
┢⎔ ${prefix}ice text
┢⎔ ${prefix}juice text
┢⎔ ${prefix}rusty text
┢⎔ ${prefix}abstra text
┢⎔ ${prefix}biscuit text
┢⎔ ${prefix}wood text
┢⎔ ${prefix}scifi text
┢⎔ ${prefix}metalr text
┢⎔ ${prefix}purpleg text
┢⎔ ${prefix}shiny text 
┢⎔ ${prefix}jewelry text
┢⎔ ${prefix}jewelry2 text
┢⎔ ${prefix}jewelry3 text
┢⎔ ${prefix}jewelry4 text
┢⎔ ${prefix}jewelry5 text
┢⎔ ${prefix}jewelry6 text
┢⎔ ${prefix}jewelry7 text
┢⎔ ${prefix}jewelry8 text
┢⎔ ${prefix}metalh text
┢⎔ ${prefix}golden text
┢⎔ ${prefix}glitter text
┢⎔ ${prefix}glitter2 text
┢⎔ ${prefix}glitter3 text
┢⎔ ${prefix}glitter4 text
┢⎔ ${prefix}glitter5 text
┢⎔ ${prefix}glitter6 text
┢⎔ ${prefix}glitter7 text
┢⎔ ${prefix}metale text
┢⎔ ${prefix}carbon text
┢⎔ ${prefix}candy text
┢⎔ ${prefix}metalb text
┢⎔ ${prefix}gemb text
┢⎔ ${prefix}3dchrome text
┢⎔ ${prefix}metalb2 text
┢⎔ ${prefix}metalg text
┢⎔ ${prefix}metalg text
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
`
}


exports.other = (prefix) =>{
return`╭╼═══〔 Others 〕══╾
┢⎔ ${prefix}ttp [text]
┢⎔ ${prefix}attp [text]
┢⎔ ${prefix}afk [reason]
┢⎔ ${prefix}translate kode_bahasa text
┢⎔ ${prefix}kalkulator [query]
┢⎔ ${prefix}smeme [text]
┢⎔ ${prefix}smeme2 [text|text]
┢⎔ ${prefix}memegen [text|text]
┢⎔ ${prefix}emojimix 😒+😅
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
`
}
exports.game = (prefix) =>{
return`╭╼═══〔 Game Menu 〕═══╾
┢⎔ ${prefix}kuismath
┢⎔ ${prefix}tebakkata
┢⎔ ${prefix}tebakgambar
┢⎔ ${prefix}tebakbendera
┢⎔ ${prefix}tebakkalimat
┢⎔ ${prefix}tebaksiapa
┢⎔ ${prefix}tebakkabupaten
┢⎔ ${prefix}tebakkimia
┢⎔ ${prefix}tebaklirik
┢⎔ ${prefix}tebaktebakan
┢⎔ ${prefix}tekateki
┢⎔ ${prefix}susunkata
┢⎔ ${prefix}caklontong
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
`
}
exports.asupan = (prefix) =>{
return`╭╼═══〔 Asupan 〕═══╾
┢⎔ ${prefix}chika
┢⎔ ${prefix}delvira
┢⎔ ${prefix}ayu
┢⎔ ${prefix}bunga
┢⎔ ${prefix}aura
┢⎔ ${prefix}nisa
┢⎔ ${prefix}ziva
┢⎔ ${prefix}yana
┢⎔ ${prefix}viona
┢⎔ ${prefix}syania
┢⎔ ${prefix}riri
┢⎔ ${prefix}syifa
┢⎔ ${prefix}mama_gina
┢⎔ ${prefix}alcakenya
┢⎔ ${prefix}mangayutri
┢⎔ ${prefix}rikagusriani
┢⎔ ${prefix}asupan
┢⎔ ${prefix}bocil
┢⎔ ${prefix}geayubi
┢⎔ ${prefix}santuy
┢⎔ ${prefix}ukhty
┢⎔ ${prefix}syifa
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
`
}
exports.cecan = (prefix) =>{
return`╭╼══〔 Random Cewek 〕══╾
┢⎔ ${prefix}china 
┢⎔ ${prefix}indonesia 
┢⎔ ${prefix}malaysia 
┢⎔ ${prefix}thailand 
┢⎔ ${prefix}korea 
┢⎔ ${prefix}japan 
┢⎔ ${prefix}vietnam 
┢⎔ ${prefix}jenni 
┢⎔ ${prefix}jiso 
┢⎔ ${prefix}lisa  
┢⎔ ${prefix}rose
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
`
}

exports.tqto = () =>{
	return`I, From Owner Bot Felicia, Would Like To Thank:

• My God
• My Parents
• Fatih A.
• Ferdi
• DikaArdnt
• Mhankbarbar
• Nurutomo
• Rashid
• ZeeoneOfc
• Penyedia Module
• And All Support

Because It Has Helped This Bot.
`
}

exports.primbonmenu = (prefix) =>{
	return`╭╼═〔 Primbon Menu 〕══╾
┢⎔ ${prefix}nomorhoki 887435047326
┢⎔ ${prefix}artimimpi [query]
┢⎔ ${prefix}artinama [query]
┢⎔ ${prefix}ramaljodoh
┢⎔ ${prefix}ramaljodohbali
┢⎔ ${prefix}suamiistri
┢⎔ ${prefix}ramalcinta
┢⎔ ${prefix}cocoknama
┢⎔ ${prefix}pasangan
┢⎔ ${prefix}jadiannikah
┢⎔ ${prefix}sifatusaha
┢⎔ ${prefix}rezeki
┢⎔ ${prefix}pekerjaan
┢⎔ ${prefix}nasib
┢⎔ ${prefix}penyakit
┢⎔ ${prefix}tarot
┢⎔ ${prefix}fengshui
┢⎔ ${prefix}haribaik
┢⎔ ${prefix}harisangar
┢⎔ ${prefix}harisial
┢⎔ ${prefix}nagahari
┢⎔ ${prefix}arahrezeki
┢⎔ ${prefix}peruntungan
┢⎔ ${prefix}weton
┢⎔ ${prefix}karakter
┢⎔ ${prefix}keberuntungan
┢⎔ ${prefix}memancing
┢⎔ ${prefix}masasubur
┢⎔ ${prefix}zodiak 
┢⎔ ${prefix}shio [query]
┢⎔ ${prefix}is
┢⎔ ${prefix}can
┢⎔ ${prefix}how
┢⎔ ${prefix}rate
┢⎔ ${prefix}handsomecheck
┢⎔ ${prefix}beautifulcheck
┢⎔ ${prefix}awesomecheck
┢⎔ ${prefix}greatcheck
┢⎔ ${prefix}gaycheck
┢⎔ ${prefix}cutecheck
┢⎔ ${prefix}lesbicheck
┢⎔ ${prefix}lesbiancheck
┢⎔ ${prefix}hornycheck
┢⎔ ${prefix}prettycheck
┢⎔ ${prefix}lovelycheck
┢⎔ ${prefix}uglycheck 
┢⎔ ${prefix}charactercheck
┢⎔ ${prefix}stupid
┢⎔ ${prefix}foolish
┢⎔ ${prefix}smart
┢⎔ ${prefix}idiot
┢⎔ ${prefix}gay
┢⎔ ${prefix}lesbi
┢⎔ ${prefix}bastard
┢⎔ ${prefix}stubble
┢⎔ ${prefix}dog
┢⎔ ${prefix}fuck
┢⎔ ${prefix}ape
┢⎔ ${prefix}noob
┢⎔ ${prefix}great
┢⎔ ${prefix}horny
┢⎔ ${prefix}wibu
┢⎔ ${prefix}asshole
┢⎔ ${prefix}handsome
┢⎔ ${prefix}beautiful
┢⎔ ${prefix}cute
┢⎔ ${prefix}kind
┢⎔ ${prefix}ugly
┢⎔ ${prefix}pretty
┢⎔ ${prefix}lesbian
┢⎔ ${prefix}randi
┢⎔ ${prefix}gandu
┢⎔ ${prefix}madarchod
┢⎔ ${prefix}kala
┢⎔ ${prefix}gora
┢⎔ ${prefix}chutiya
┢⎔ ${prefix}nibba
┢⎔ ${prefix}nibbi
┢⎔ ${prefix}bhosdiwala
┢⎔ ${prefix}chutmarika
┢⎔ ${prefix}bokachoda
┢⎔ ${prefix}suarerbaccha
┢⎔ ${prefix}bolochoda
┢⎔ ${prefix}muthal
┢⎔ ${prefix}muthbaaz
┢⎔ ${prefix}randibaaz
┢⎔ ${prefix}topibaaz
┢⎔ ${prefix}cunt
┢⎔ ${prefix}nerd
┢⎔ ${prefix}behenchod
┢⎔ ${prefix}behnchoda
┢⎔ ${prefix}bhosdika
┢⎔ ${prefix}nerd
┢⎔ ${prefix}mc
┢⎔ ${prefix}bsdk
┢⎔ ${prefix}bhosdk
┢⎔ ${prefix}nigger
┢⎔ ${prefix}loda
┢⎔ ${prefix}laund
┢⎔ ${prefix}nigga
┢⎔ ${prefix}noobra
┢⎔ ${prefix}tharki
┢⎔ ${prefix}nibba
┢⎔ ${prefix}nibbi
┢⎔ ${prefix}mumu
┢⎔ ${prefix}rascal
┢⎔ ${prefix}scumbag
┢⎔ ${prefix}nuts
┢⎔ ${prefix}comrade
┢⎔ ${prefix}fagot
┢⎔ ${prefix}scoundrel
┢⎔ ${prefix}ditch
┢⎔ ${prefix}dope
┢⎔ ${prefix}gucci
┢⎔ ${prefix}lit
┢⎔ ${prefix}dumbass
┢⎔ ${prefix}sexy
┢⎔ ${prefix}crackhead
┢⎔ ${prefix}mf
┢⎔ ${prefix}motherfucker
┢⎔ ${prefix}dogla
┢⎔ ${prefix}bewda
┢⎔ ${prefix}boka
┢⎔ ${prefix}khanki
┢⎔ ${prefix}bal
┢⎔ ${prefix}sucker
┢⎔ ${prefix}fuckboy
┢⎔ ${prefix}playboy
┢⎔ ${prefix}fuckgirl
┢⎔ ${prefix}playgirl
┢⎔ ${prefix}bc
┢⎔ ${prefix}hot
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
`
}

exports.stcmenu = (prefix) =>{
	return`╭╼═〔 TeleStick Menu 〕══╾
┢⎔ ${prefix}awoawo
┢⎔ ${prefix}benedict
┢⎔ ${prefix}chat
┢⎔ ${prefix}dbfly
┢⎔ ${prefix}dino_kuning
┢⎔ ${prefix}doge
┢⎔ ${prefix}gojosatoru
┢⎔ ${prefix}hope_boy
┢⎔ ${prefix}jisoo
┢⎔ ${prefix}kr_robot
┢⎔ ${prefix}kucing
┢⎔ ${prefix}lonte
┢⎔ ${prefix}manusia_lidi
┢⎔ ${prefix}menjamet
┢⎔ ${prefix}meow
┢⎔ ${prefix}nicholas
┢⎔ ${prefix}patrick
┢⎔ ${prefix}popoci
┢⎔ ${prefix}sponsbob
┢⎔ ${prefix}kawan_sponsbob
┢⎔ ${prefix}tyni
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
`}

exports.ephotomenu = (prefix) =>{
	return`╭╼═〔 Ephoto360 Menu 〕══╾
┢⎔ ${prefix}youtubegold text
┢⎔ ${prefix}youtubesilver text
┢⎔ ${prefix}facebookgold text
┢⎔ ${prefix}facebooksilver text
┢⎔ ${prefix}instagramgold text
┢⎔ ${prefix}instagramsilver text
┢⎔ ${prefix}twittergold text
┢⎔ ${prefix}twittersilver text
┢⎔ ${prefix}retrotext text
┢⎔ ${prefix}halloweenbats text
┢⎔ ${prefix}texthalloween text
┢⎔ ${prefix}cardhalloween text
┢⎔ ${prefix}birthdaycake text
┢⎔ ${prefix}thundertext text
┢⎔ ${prefix}icetext text
┢⎔ ${prefix}milkcake text
┢⎔ ${prefix}snowontext text
┢⎔ ${prefix}metalstar text
┢⎔ ${prefix}dragonfire text
┢⎔ ${prefix}zombie3d text
┢⎔ ${prefix}merrycard text
┢⎔ ${prefix}generalexam text 
┢⎔ ${prefix}viettel text
┢⎔ ${prefix}embroider text
┢⎔ ${prefix}graffititext text
┢⎔ ${prefix}graffititext2 text
┢⎔ ${prefix}graffititext3 text
┢⎔ ${prefix}covergraffiti text
┢⎔ ${prefix}moderngold text
┢⎔ ${prefix}capercut text
┢⎔ ${prefix}lovecard text
┢⎔ ${prefix}heartflashlight text
┢⎔ ${prefix}heartcup text
┢⎔ ${prefix}sunglightshadow text
┢⎔ ${prefix}graffiti3d text
┢⎔ ${prefix}moderngoldsilver text
┢⎔ ${prefix}moderngold2 text
┢⎔ ${prefix}moderngold3 text
┢⎔ ${prefix}fabrictext text
┢⎔ ${prefix}masteryavatar text
┢⎔ ${prefix}messagecoffee text
┢⎔ ${prefix}announofwin text
┢⎔ ${prefix}writeblood text
┢⎔ ${prefix}horrorletter text
┢⎔ ${prefix}writehorror text
┢⎔ ${prefix}shirtclub text
┢⎔ ${prefix}angelwing text
┢⎔ ${prefix}christmasseason text
┢⎔ ${prefix}projectyasuo text
┢⎔ ${prefix}lovelycute text
┢⎔ ${prefix}womansday text
┢⎔ ${prefix}covergamepubg text
┢⎔ ${prefix}nameonheart text
┢⎔ ${prefix}funnyhalloween text
┢⎔ ${prefix}lightningpubg text
┢⎔ ${prefix}greetingcardvideo text 
┢⎔ ${prefix}christmascard text 
┢⎔ ${prefix}galaxybat text
┢⎔ ${prefix}writegalaxy text
┢⎔ ${prefix}starsnight text
┢⎔ ${prefix}noeltext text
┢⎔ ${prefix}textcakes text
┢⎔ ${prefix}pubgbirthday text
┢⎔ ${prefix}galaxywallpaper text
┢⎔ ${prefix}pubgglicthvideo text 
┢⎔ ${prefix}pubgmascotlogo text
┢⎔ ${prefix}realembroidery text
┢⎔ ${prefix}vintagetelevision text
┢⎔ ${prefix}funnyanimations text
┢⎔ ${prefix}glowingtext text
┢⎔ ${prefix}textonglass text
┢⎔ ${prefix}cartoonstyle text
┢⎔ ${prefix}multicolor text
┢⎔ ${prefix}watercolor2 text
┢⎔ ${prefix}textsky text
┢⎔ ${prefix}summerbeach text
┢⎔ ${prefix}1917text text
┢⎔ ${prefix}puppycute text
┢⎔ ${prefix}rosebirthday text
┢⎔ ${prefix}steellettering text|text2
┢⎔ ${prefix}letterstext text|text2
┢⎔ ${prefix}barcashirt text|text2
┢⎔ ${prefix}premiercup text|text2
┢⎔ ${prefix}stylepoligon text|text2
┢⎔ ${prefix}lifebuoys text|text2
┢⎔ ${prefix}juventusshirt text|text2
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
`
}

exports.logomenu = (prefix) =>{
	return`╭╼══〔 Logo Menu 〕══╾
┢⎔ ${prefix}coverbannerlol text|heroes
┢⎔ ${prefix}pubglogomaker text|style
┢⎔ ${prefix}colorfulpubg text|color
┢⎔ ${prefix}astronotspace text|style
┢⎔ ${prefix}wallpaperaov text|heroes
┢⎔ ${prefix}maketeamlogo text|style
┢⎔ ${prefix}circlemarcotteam text|logo
┢⎔ ${prefix}wallpaperml text|heroes
┢⎔ ${prefix}dragonballfb text|character
┢⎔ ${prefix}bannerofaov text|character
┢⎔ ${prefix}effect3donbeach text|background
┢⎔ ${prefix}cutegirlgamer text|logo
┢⎔ ${prefix}footballteam text|logo
┢⎔ ${prefix}beautifulshimmering text|champion
┢⎔ ${prefix}pubgcutelogo text|logo
┢⎔ ${prefix}elegantrotation text|logo
┢⎔ ${prefix}logogamingassasin text|logo
┢⎔ ${prefix}introvideomaker text|logo
┢⎔ ${prefix}gaminglogo4fvs text|logo
┢⎔ ${prefix}blueneon text|logo
┢⎔ ${prefix}metalmascot text|logo
┢⎔ ${prefix}anonymous2 text|style
┢⎔ ${prefix}lolpentakill text|style
┢⎔ ${prefix}avatarleagueofking text|style
┢⎔ ${prefix}avatarff text|character
┢⎔ ${prefix}overwatchwallpaper text|character
┢⎔ ${prefix}rovwallpaperhd text|hero
┢⎔ ${prefix}rovwallpaper text|avatar
┢⎔ ${prefix}beautifulgalaxylol text|style
┢⎔ ${prefix}crossfirecover text|character
┢⎔ ${prefix}lolwallpaper text|wallpaper
┢⎔ ${prefix}coverdota2 text|heroes
┢⎔ ${prefix}coverleagueofking text|character
┢⎔ ${prefix}avatar3q360 text|avatar
┢⎔ ${prefix}coverofwarface text|character
┢⎔ ${prefix}newlolavatar text|avatar
┢⎔ ${prefix}csgocover text|background
┢⎔ ${prefix}coverloknew text|hero
┢⎔ ${prefix}coverfblol text|letters
┢⎔ ${prefix}overwatchcover text|hero
┢⎔ ${prefix}crossfirestyle text|avatar
┢⎔ ${prefix}avatarlolbyname text|style
┢⎔ ${prefix}lolcoverbyname text|avatar
┢⎔ ${prefix}cyberhunterfb text|character
┢⎔ ${prefix}coverfreefirefb text|character
┢⎔ ${prefix}gamingmascot text|style
┢⎔ ${prefix}coveronepiecefb text|character
┢⎔ ${prefix}bannerytcsgo text|banner
┢⎔ ${prefix}fbgamepubgcover text|template
┢⎔ ${prefix}banneroflol text|text2|banner
┢⎔ ${prefix}bannerofaov2 text|text2|banner
┢⎔ ${prefix}teamlogo text|text2|background
┢⎔ ${prefix}companylogo2 text|text2|background
┢⎔ ${prefix}companylogo text|text2|background
┢⎔ ${prefix}gradientlogo text|text2|background
┢⎔ ${prefix}pencilsketch text|text2|icon
┢⎔ ${prefix}gunlogogaming text|text2|background
┢⎔ ${prefix}banneroffreefire text|text2|background
┢⎔ ${prefix}letterlogos text|text2|thumb
┢⎔ ${prefix}bannerofoverwatch text|text2|background
┢⎔ ${prefix}bannerofapex text|text2|background
┢⎔ ${prefix}bannerofpubg text|text2|background
┢⎔ ${prefix}mascotstyle text|text2|thumb
┢⎔ ${prefix}logoaccording text|text2|thumb
┢⎔ ${prefix}avataroverwatch text|text2|thumb
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
`
}

exports.islammenu = (prefix) =>{
	return`╭╼══〔 Islamic Menu 〕══╾
┢⎔ ${prefix}asmaulhusna
┢⎔ ${prefix}kisahnabi [nabi]
┢⎔ ${prefix}jadwalshalat [daerah]
┢⎔ ${prefix}randomquran
┢⎔ ${prefix}randomquran2
┢⎔ ${prefix}listsurah
┢⎔ ${prefix}tafsirsurah [surah]
┢⎔ ${prefix}alquranaudio [surah|ayat]
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
`
}
exports.anonchat = (prefix) =>{
	return`╭╼══〔 Anonymous 〕══╾
┢⎔ ${prefix}anonymous 
┢⎔ ${prefix}start
┢⎔ ${prefix}skip
┢⎔ ${prefix}stop
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
`
}

exports.storemenu = (prefix) =>{
	return`╭╼══〔 Store Menu 〕══╾
┢⎔ ${prefix}list
┢⎔ ${prefix}addlist [key|respond]
┢⎔ ${prefix}dellist [key]
┢⎔ ${prefix}update [key|respond]
┢⎔ ${prefix}store
┢⎔ ${prefix}kali
┢⎔ ${prefix}bagi
┢⎔ ${prefix}tambah
┢⎔ ${prefix}kurang
┢⎔ ${prefix}kalkulator
┢⎔ ${prefix}proses
┢⎔ ${prefix}done
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
`
}


exports.soundmenu = (prefix) =>{
return`╭╼══〔 Sound Menu 〕══╾
┢⎔ ${prefix}sound1
┢⎔ ${prefix}sound2
┢⎔ ${prefix}sound3
┢⎔ ${prefix}sound4
┢⎔ ${prefix}sound5
┢⎔ ${prefix}sound6
┢⎔ ${prefix}sound7
┢⎔ ${prefix}sound8
┢⎔ ${prefix}sound9
┢⎔ ${prefix}sound10
┢⎔ ${prefix}sound11
┢⎔ ${prefix}sound12
┢⎔ ${prefix}sound13
┢⎔ ${prefix}sound14
┢⎔ ${prefix}sound15
┢⎔ ${prefix}sound16
┢⎔ ${prefix}sound17
┢⎔ ${prefix}sound18 
┢⎔ ${prefix}sound19
┢⎔ ${prefix}sound20
┢⎔ ${prefix}sound21
┢⎔ ${prefix}sound22
┢⎔ ${prefix}sound23
┢⎔ ${prefix}sound24
┢⎔ ${prefix}sound25
┢⎔ ${prefix}sound26
┢⎔ ${prefix}sound27
┢⎔ ${prefix}sound28
┢⎔ ${prefix}sound29
┢⎔ ${prefix}sound30
┢⎔ ${prefix}sound31
┢⎔ ${prefix}sound32
┢⎔ ${prefix}sound33
┢⎔ ${prefix}sound34
┢⎔ ${prefix}sound35
┢⎔ ${prefix}sound36
┢⎔ ${prefix}sound37
┢⎔ ${prefix}sound38
┢⎔ ${prefix}sound39
┢⎔ ${prefix}sound40
┢⎔ ${prefix}sound41
┢⎔ ${prefix}sound42
┢⎔ ${prefix}sound43
┢⎔ ${prefix}sound44
┢⎔ ${prefix}sound45
┢⎔ ${prefix}sound46
┢⎔ ${prefix}sound47
┢⎔ ${prefix}sound48
┢⎔ ${prefix}sound49
┢⎔ ${prefix}sound50
┢⎔ ${prefix}sound51
┢⎔ ${prefix}sound52
┢⎔ ${prefix}sound53
┢⎔ ${prefix}sound54
┢⎔ ${prefix}sound55
┢⎔ ${prefix}sound56
┢⎔ ${prefix}sound57
┢⎔ ${prefix}sound58
┢⎔ ${prefix}sound59
┢⎔ ${prefix}sound60
┢⎔ ${prefix}sound61
┢⎔ ${prefix}sound62
┢⎔ ${prefix}sound63
┢⎔ ${prefix}sound64
┢⎔ ${prefix}sound65
┢⎔ ${prefix}sound66
┢⎔ ${prefix}sound67
┢⎔ ${prefix}sound68
┢⎔ ${prefix}sound69
┢⎔ ${prefix}sound70
┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
`
}
