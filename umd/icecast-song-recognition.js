!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";const e=require("interstice"),t=require("acrcloud"),i=require("fs"),{uid:n}=require("uid"),r=require("rimraf"),s=require("shelljs");module.exports={identifySong:async({acrConfig:o,streamURL:u,recordingDuration:a,tempPath:c})=>(c=c||"./temp",new Promise(((d,m)=>{const f=n(16),l=`${c||"./temp"}/${f}`,p=new e({output:l}),y=new t(o);let g="";i.existsSync(c)||s.mkdir("-p",c),i.existsSync(l)||i.mkdirSync(l),p.start(u),p.on("song:start",(e=>{g=e.filePath})),setTimeout((()=>{if(p.stop(),!g)return m("No audio was saved. Check stream URL.");const e=i.readFileSync(g);y.identify(e).then((e=>{r(l,(e=>{if(e)throw e})),e.metadata?.music[0]?.title?d(e.metadata.music[0]):m("Could not recognize song.")}))}),a||3e3)})))}}));
