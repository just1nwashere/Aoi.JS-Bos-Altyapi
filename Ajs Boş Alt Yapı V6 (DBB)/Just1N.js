//JUST1N#0 & MADE BY 💖 JUST1N
const { AoiClient, LoadCommands } = require("aoi.js");
//Main.js
const bot = new AoiClient({
    token: "token-gir",
    prefix: ["!"],
    intents: ["MessageContent", "Guilds", "GuildMessages", "GuildVoiceStates", "GuildMessageReactions", "GuildInvites", "GuildEmojisAndStickers", "GuildBans", "GuildWebhooks", "GuildMembers", "GuildPresences", "GuildMessageTyping"],
    events: ["onMessage", "onInteractionCreate", "onMessageDelete", "onMessageUpdate", "onMessageDeleteBulk", "onReactionRemove", "onReactionRemoveAll", "onInviteCreate", "onInviteDelete", "onGuildJoin", "onGuildLeave", "onGuildUpdate", "onGuildUnavailable", "onRoleCreate", "onRoleUpdate", "onRoleDelete", "onChannelCreate", "onChannelUpdate", "onChannelDelete", "onChannelPinsUpdate", "onStageInstanceCreate", "onStageInstanceUpdate", "onStageInstanceDelete", "onThreadCreate", "onThreadUpdate", "onThreadDelete", "onThreadListSync", "onThreadMemberUpdate", "onThreadMembersUpdate", "onEmojiCreate", "onEmojiDelete", "onEmojiUpdate", "onStickerCreate", "onStickerDelete", "onStickerUpdate", "onBanAdd", "onBanRemove", "onVoiceStateUpdate", "onWebhookUpdate", "onJoin", "onLeave", "onMemberUpdate", "onMemberAvailable", "onMembersChunk", "onPresenceUpdate", "onTypingStart", "onUserUpdate"],
    database: {
        type: "aoi.db",
        db: require("aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});
//SoundCloud & Youtube
const voice = new AoiVoice(bot, {
    searchOptions: {
        youtubegl: "TR",
    },
    requestOptions: {
        offsetTimeout: 0,
        soundcloudLikeTrackLimit: 200,
    },
});
// Memory & Disk
voice.addPlugin(PluginName.Cacher, new Cacher("memory"));
voice.addPlugin(PluginName.Filter, new Filter({
    filterFromStart: false,
}));

voice.bindExecutor(bot.functionManager.interpreter);
bot.status({
    text: "DBB AltYapısı",
    type: "PLAYİNG",
    time: 12
});
setup(Util);
const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./Komutlar/");
