import { readFileSync } from "fs";
import draw from "./draw";

// users
const rawUserData: { language: string }[] = JSON.parse(readFileSync("./data/users.json", "utf8"));
const usersData = rawUserData.reduce((acc, cur) => {
  if (acc[cur.language]) {
    acc[cur.language]++;
  } else {
    acc[cur.language] = 1;
  }
  return acc;
}, {} as { [key: string]: number });

draw(usersData, "users");

// channels
const rawChannelData: { guild: string }[] = JSON.parse(readFileSync("./data/channels.json", "utf8"));
const channelData = rawChannelData.reduce((acc, cur) => {
  if (acc[cur.guild]) {
    acc[cur.guild]++;
  } else {
    acc[cur.guild] = 1;
  }
  return acc;
}, {} as { [key: string]: number });

const channelStats = Object.values(channelData).reduce((acc, cur) => {
  if (acc[cur]) {
    acc[cur]++;
  } else {
    acc[cur] = 1;
  }
  return acc;
}, {} as { [key: string]: number });

draw(channelStats, "channels");
