const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237680541809";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_16_08_09_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTkyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDQwLFxuICAgICAgICAxODcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTkwLFxuICAgICAgICA1MixcbiAgICAgICAgMTI2LFxuICAgICAgICAzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDc0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDU0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTgzLFxuICAgICAgICA1MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzksXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDMxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTMwLFxuICAgICAgICA0NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE3LFxuICAgICAgICA1NixcbiAgICAgICAgMTYzLFxuICAgICAgICAzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgODUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMwLFxuICAgICAgICA2MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA4LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzksXG4gICAgICAgIDMzLFxuICAgICAgICA0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDQxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAxLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjA2LFxuICAgICAgICA2NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTksXG4gICAgICAgIDUwLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNixcbiAgICAgICAgNzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA5LFxuICAgICAgICAyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjEzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTY0LFxuICAgICAgICA0MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1LFxuICAgICAgICAxODUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDk2LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzksXG4gICAgICAgIDUyLFxuICAgICAgICA5NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDcyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQwLFxuICAgICAgICA0MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRS2ZFR3hpR0k5Q1NRNmNEOGtsOGlnS1pGNjRhZGxOS3hBMEdLblppZ1NrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI1RXBiUlhRUVQtR1NxYTc1N3M3SmRRXCIsXG4gIFwicGhvbmVJZFwiOiBcImE2ZWMwMjViLTg1NzEtNGE2ZS05YzgwLTdkOTk0OGNjNjYwYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzEsXG4gICAgICAyMjgsXG4gICAgICAxODcsXG4gICAgICA1NixcbiAgICAgIDE3NyxcbiAgICAgIDgyLFxuICAgICAgMjE4LFxuICAgICAgMTA1LFxuICAgICAgNTcsXG4gICAgICAyMjUsXG4gICAgICAxNTMsXG4gICAgICAxMjcsXG4gICAgICAyMTYsXG4gICAgICAyMjYsXG4gICAgICAyMzgsXG4gICAgICAxODYsXG4gICAgICAxMzgsXG4gICAgICAxMzAsXG4gICAgICAxNzgsXG4gICAgICAxMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg3LFxuICAgICAgMzcsXG4gICAgICAxNjksXG4gICAgICAyMzksXG4gICAgICAyMDEsXG4gICAgICA4MixcbiAgICAgIDcxLFxuICAgICAgMyxcbiAgICAgIDY3LFxuICAgICAgMTMxLFxuICAgICAgMTIxLFxuICAgICAgMjksXG4gICAgICAxNDksXG4gICAgICAxMzAsXG4gICAgICAxMjAsXG4gICAgICA3OCxcbiAgICAgIDY5LFxuICAgICAgMjI2LFxuICAgICAgMTI0LFxuICAgICAgMTE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNUSzEyMzJWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2ODA1NDE4MDk6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJDaGVmIEJyYWluemVcIixcbiAgICBcImxpZFwiOiBcIjI2NzExMjc5MDY1OTEwODoxN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPaVQ1S01DRVBpdzI3Y0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImdLTXo3dHBkR2IweUJzYUUrR0t4L2RnT1YvZ3dFcFpVOCtTdHV1N095eUk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiakYzTHpGRXlxenlwTWVidUFBWW9iV0l6YllaelpUZk95VisvclpUNDlKb2h3UlhyMzV0UGxmNkd3M1RGUTZFbzUwWVZ6NG16TWgrWE1mcTVrQTVpQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwia0NnV3NwYjhIWkZUUnJhOGxvNW9qRXNlTndHT1NBKzhwUFYydzhmbHNOczhIS1VEYm1zRXZuNkRYcm94WHQzOWRDK0p6c1R1Kzl0aE9rWWhkVk5oZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3NjgwNTQxODA5OjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDM0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjc0NTMzMDhcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
