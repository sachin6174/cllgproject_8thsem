const express = require('express');
const https = require('https');

const app = express();
const port = 3000;
//https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.71131414857127&lng=76.73191398382187&page_type=DESKTOP_WEB_LISTING
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.71131414857127&lng=76.73191398382187&page_type=DESKTOP_WEB_LISTING

app.get('/', (req, res) => {
  const swiggyUrl = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.71131414857127&lng=76.73191398382187&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING';

  https.get(swiggyUrl, (response) => {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      // Log the data in the console
      console.log(data);

      res.send('Data logged in console!');
    });
  }).on('error', (error) => {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
