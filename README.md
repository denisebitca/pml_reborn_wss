# This is the companion websocket server for https://github.com/denisebitca/pml_reborn.

You need to set process.env.PASSWORD and process.env.PORT.

Post to DOMAIN/PASSWORD a plain text URL.

i.e if ``process.env.PASSWORD === password`` and ``domain === 42-lockscreen-websocket.glitch.me`` then POST a URL to ``42-lockscreen-websocket.glitch.me/password``
