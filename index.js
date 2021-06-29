const tmi = require('tmi.js');

const options = {
    options: {
        debug: true,
    },
    connection: {
        cluster: 'aws',
        reconnect: true,
    },
    identity: {
        username: 'frascino',
        password: 'oauth:HERE',
    },
    channels: ['channels_here']
};

const onMessageHandler = (channel, user, msg, self) => {
    if(self) return;

    const command = msg.trim();



    switch(command){
        case '!test':
            client.action(channel, `BOT: ${user['display-name']} you have been tested`);
            return;
        case '!discord':
            client.action(channel, `BOT: Entre no nosso discord!`);
            return;
        case '!squid':
            client.action(channel, `BOT: Squid1 Squid2 Squid3 Squid4`);
            return;
        case '!help':
            client.action(channel, `BOT: !discord \n!squid\n!morreu`);
            return;
    }
}

const onConnectedHandler = (address, port) => {
    client.action('channel_here', 'BOT: Entre em nossa comunidade no Discord!');
}

const client = new tmi.client(options);

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

client.connect();