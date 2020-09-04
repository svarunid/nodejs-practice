const reqHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/" && method === "GET") {
    res.write("<html><body><h1>Hello User!</h1>");
    res.write(
      '<form action="/create-user" method="post"><input name="username"><button type="submit">Submit</button></form>'
    );
    return res.end();
  }
  if (url === "/users" && method === "GET") {
    res.write("<ul><li><h1>User 1</h1></li></ul>");
    res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedData = Buffer.concat(body).toString();
      console.log(parsedData.split("=")[1]);
    });
  }
};

module.exports = { reqHandler: reqHandler };
