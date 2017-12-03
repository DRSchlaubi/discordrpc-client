const {Client} = require('discord-rpc'),
  log = require('fancy-log'),
  config = require('./config.json');

const rpc = new Client({ transport: config.rpcTransportType}),
  app = config.appClientID,
  largeImage = config.imageKeys.large,
  smallImage = config.imageKeys.small;

  rpc.on('ready', () =>{
    log('Connected to Discord! Client id:' + app)
    let startTimestamp = undefined,
    endTimestamp = undefined
    rpc.setActivity({
      details: config.details,
      state: config.state,
      startTimestamp,
      endTimestamp,
      largeImage,
      smallImage,
      largeImageText: config.imageTexts.large,
      smallImageText: config.imageTexts.small,
      instance: false,

    });
  });

  rpc.login(app).catch(log.error);
