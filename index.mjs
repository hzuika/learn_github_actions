import {writeFileText, Youtube} from "hzkl"
const url = "https://www.youtube.com/channel/UCSMOQeBJ2RAnuFungnQOxLg"

const channelId = await Youtube.getChannelIdFromCustomUrl(url);
writeFileText("./output/channelId.txt", channelId);