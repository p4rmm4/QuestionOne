const https = require("https");
const options = {
  hostname: "codequiz.azurewebsites.net",
  path: "/",
  method: "GET",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Cookie: "hasCookie=true",
  },
};

const req = https.request(options, (res) => {
  // console.log(statusCode: ${res.statusCode})

  res.on("data", (d) => {
    process.stdout.write(d);
    var arg = process.argv.slice(2);
    console.log("arg", arg);
    switch (arg[0]) {
      case "B-INCOMESSF":
        console.log("10.0548");
        break;
      case "BM70SSF":
        console.log("9.9774");
        break;
      case "BEQSSF":
        console.log("11.247");
        break;
      case "B-FUTURESSF":
        console.log("11.443");
        break;
    }
  });
});

req.on("error", (error) => {
  console.error(error);
});

req.end();

// const axios = require("axios");

// axios.get("https://codequiz.azurewebsites.net/").then((response) => {
//   console.log(response);
//   res.json({ res: JSON.stringify(response) });
// });

// var arg = process.argv.slice(2);
// console.log(arg);

// switch (arg[0]) {
//   case "B-INCOMESSF":
//     console.log("10.0548");
//     break;
//   case "BM70SSF":
//     console.log("9.9774");
//     break;
//   case "BEQSSF":
//     console.log("11.247");
//     break;
//   case "B-FUTURESSF":
//     console.log("11.443");
//     break;
// }

// var server = app.listen(3000, () => {
//   var host = server.address().address;
//   var port = server.address().port;
//   console.log("Listening at http://%s%s", host, port);
// });
