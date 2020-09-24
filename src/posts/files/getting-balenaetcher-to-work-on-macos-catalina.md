
# Getting balenaEtcher to Work on macOS Catalina

I just recently upgraded to macOS Catalina, and needed to flash a microSD card for my Raspberry Pi. However, balenaEtcher was throwing an error when trying to flash the image.

![The error thrown by balenaEtcher](https://cdn-images-1.medium.com/max/3648/1*BBIgFjFdgiWAvFkTXWsHAA.png)*The error thrown by balenaEtcher*

After a little while, I realized that Catalina included some extra privacy protections. I went into System Preferences and turned on “Full Disk Access” for balenaEtcher. But lo and behold, the error still persisted.

## The Solution

After doing a bit of research, I found that balenaEtcher, and Etcher (the former name of balenaEtcher), had a command-line utility to launch the app.

    sudo /Applications/balenaEtcher.app/Contents/MacOS/balenaEtcher

![balenaEtcher after being opened with *sudo* from the command-line](https://cdn-images-1.medium.com/max/3648/1*xRyR7ulL5DQrqO88cWaEOQ.png)*balenaEtcher after being opened with *sudo* from the command-line*

The command booted up a graphical interface of balenaEtcher, the difference that, because of the “sudo” in the command, it ran under the root user. This bypassed the security/privacy restrictions placed (wisely) by Apple on Catalina.
