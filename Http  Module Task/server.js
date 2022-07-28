const http = require("http");

const server = http.createServer((req, res) => {
  // res.writeHead(200, {'content-type': 'text/plain'})
  //   res.writeHead(200, { "content-type": "text/json" });
  res.writeHead(200, { "content-type": "text/html" });

  if (req.url === "/") {
    res.write(`
         <html>
         <body>
        <h2>This is My Portfolio</h2>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about" >About</a></li>
            <li><a href = "/contact">Contact Me</a></li>
        </ul>

        <section>
        <p>Name: Okunola Timilehin</p>
    <p>Course: Medicine and Surgery</p>
    <p>School: Obafemi Awolowo University</p>
    <p>Track: Backend development (Part time)</p>
        </section>
    </body>
         </html>
        `);
    res.end();
  }
  if (req.url === "/about") {
    res.write(`
    <html>
    <body>
   <h2>About Me</h2>
   <ul>
       <li><a href="/">Home</a></li>
       <li><a href="/about">About</a></li>
       <li><a href = "/contact">Contact Me</a></li>
   </ul>

   <section>
   <p> Timilehin is a 400 level medical student at Obafemi Awolowo University with a passion for Technology. This passion has driven him to pursue a career in software development. Timilehin is a front end engineer who is skilled at using HTML, CSS, CSS frameworks like Bootstrap, Tailwind css, Bulma, Javascript, ReactJS, UI libraries like Material UI and NextJs. He is currently learning Node js to become a full stack developer before the end of this year which is one of his year goals. While Timmy isn't coding, he is in his scrubs and labcoat in the ward or you find him with his books or hanging out with friends. Timmy appreciates nature and loves to travel too.. </p>
   </section>
</body>
    </html>
   `);
    res.end();
  }

  if (req.url === "/contact") {
    res.write(`
    <html>
    <body>
   <h2>Contact Me</h2>
   <ul>
       <li><a href="/" >Home</a></li>
       <li><a href="/about">About</a></li>
       <li><a href = "/contact">Contact Me</a></li>
   </ul>

   <section> 
   <h1>Contact Me</h1>
   <p>You Can contact me on via the following</p>
   <a href="mailto:oktimmy45@gmail.com">Email</a>
   <a href="https://www.twitter.com/ok_timmy">Twitter</a>
   <a href="https://www.github.com/ok-timmy">Github</a>
   </section>
</body>
    </html>
   `);
    res.end();
  }
});

server.listen(8080, "127.0.0.1");

console.log("Yes You have created a server!!");
