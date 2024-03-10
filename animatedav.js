const Discord = require('discord.js');
const fs = require('fs');

// Initialize a Discord client
const client = new Discord.Client();

// Replace 'YOUR_BOT_TOKEN' with your bot's token
const token = 'YOUR_BOT_TOKEN';

// Replace 'path/to/your/animated/avatar.gif' with the actual path to your animated avatar GIF file
const avatarPath = 'path/to/your/animated/avatar.gif';

// Event emitted when the bot is ready
client.once('ready', () => {
    console.log('Bot is ready!');
    
    // Fetch the bot user
    const botUser = client.user;

    // Read the animated avatar file
    fs.readFile(avatarPath, (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        // Set the bot's avatar to the read data
        botUser.setAvatar(data)
            .then(() => {
                console.log('Avatar updated successfully!');
                client.destroy(); // Destroy the client after updating the avatar
            })
            .catch(error => {
                console.error('Error updating avatar:', error);
                client.destroy(); // Destroy the client if there's an error
            });
    });
});

// Log in to Discord with the bot token
client.login(token);
