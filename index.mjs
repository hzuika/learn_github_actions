import { writeFileText, writeFileJson, Youtube } from "hzkl";
const url = "https://www.youtube.com/c/BlenderFoundation";

const channelId = await Youtube.getChannelIdFromCustomUrl(url);
writeFileText("./output/channelId.txt", channelId);

import dotenv from "dotenv";
dotenv.config();

const yt = new Youtube(process.env.YOUTUBE_API_KEY);
const channels = await yt.getChannels([channelId])
writeFileJson("./output/channels.json", channels);
