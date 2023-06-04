app.get("/trng", (req, res) => {
  let cities = [
    "bangkok",
    "chandigarh",
    "india",
    "newyork",
    "delhi",
    "london",
    "singapore",
    "paris",
    "dubai",
  ];
  let que = cities[Date.now() % 9];
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    que +
    "&unit=metric&appid=44c9a010fc226d7fe3f5823247fada87";
  https.get(url, (response) => {
    if (response.statusCode == 200) {
      response.on("data", function (data) {
        let objapi = JSON.parse(data);

        // var clientIp = requestIp.getClientIp(req);
        // console.log(clientIp);
        // //  var ip = "42.105.9.136";
        //  var ip = String(clientIp);
        // var geo = geoip.lookup(ip);
        let n1 = Number(req.query.num1);
        let n2 = Number(req.query.num2);
        a = n1;
        b = n2;
        let loc = objapi.main;
        let k = parseInt(
          Number(loc.temp_max) *
            Number(loc.pressure) *
            Number(loc.humidity) *
            Number(loc.temp_min) *
            Number(loc.temp_max)
        );
        // console.log();

        if (a > b) {
          [a, b] = [b, a];
        }
        var ans;
        for (i = 0; i <= t; i++) {
          ans = BigInt(k * k);
          ans = ans.toString();
          k = Number(ans.slice(1, 14));
        }
        t *= 5;
        if (t === 0) {
          t = 17;
        }
        t = t % 100000;
        let p = k.toString();
        p = "0." + p;
        p = Number(p);

        let ret = a + Math.floor(p * (b - a + 1));

        var obj = {
          f_no: n1,
          s_no: n2,
          r_no: ret,
        };
        res.json(obj);
        // res.send(geo);
      });
    } else {
      res.send(
        "Not Able to fetch location Environmental condition may be inernet issue as this algorithum work on environmental condition by fetching environmental data from an api."
      );
    }
  });
});
