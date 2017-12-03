const {Client} = require('discord-rpc'),
  log = require('fancy-log'),
  config = require('./config.json');

const rpc = new Client({ transport: config.rpcTransportType}),
  //Read config
  app = config.appClientID,
  largeImageKey = config.imageKeys.large,
  smallImageKey = config.imageKeys.small,
  largeImageText = config.imageTexts.large,
  smallImageText = config.imageTexts.small,
  details = config.details,
  state = config.state;

  //Request Rich Presence
  rpc.on('ready', () =>{
    log('Connected to Discord! Client id:' + app)
    let startTimestamp = undefined,
    endTimestamp = startTimestamp
    rpc.setActivity({
    details,
    state,
    startTimestamp,
    endTimestamp,
    largeImageKey,
    smallImageKey,
    largeImageText,
    smallImageText,
    instance: false,
});
  });

  rpc.login(app).catch(log.error);
