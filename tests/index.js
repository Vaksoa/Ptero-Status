const Status = require('../index');

const Panel = new Status.Panel(4000, {
    token: "BOT-TOKEN",
    guildID: '704423873415741510',
    channelID: '803751582830821396',
    color: '#06cce2', // Embed color
    interval: 15000
});

const Daemon1 = new Status.Daemon("Node1", 15000, {
    ip: "0.0.0.0",
    port: "4000"
});

const Daemon2 = new Status.Daemon("Node2", 15000, {
    ip: "0.0.0.0",
    port: "4000"
});