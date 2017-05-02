/**
 * BetterDiscord Discrd Api
 * Copyright (c) 2015-present Jiiks - https://jiiks.net
 * All rights reserved.
 * https://github.com/Jiiks/BetterDiscordApp - https://betterdiscord.net
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree. 
*/

'use strict';

const { $ } = require('../vendor');

const apiUrl = "https://discordapp.com/api/v6";
const endPoints = {
    channels: `${apiUrl}/channels`
};

class Discord {

    constructor() {

    }

    sendMessage(channel, content, token, cb) {
        channel = channel === "active" ? $(".channel.selected a").attr("href").split("/").splice(-1) : channel;
        this.post(`${endPoints.channels}/${channel}?token=${token}`, content, data => cb(data));
    }

    post(url, content, cb) {
        $.ajax({
            type: 'POST',
            url: url,
            content: content,
            success: data => cb(data)
        });
    }

}


module.exports = new Discord();