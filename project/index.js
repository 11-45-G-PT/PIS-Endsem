const { Configuration, OpenAIApi } = require("openai");

const express = require('express');
const bodyParser = require('body-parser');
const say = require('say');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/assets/css', express.static('assets/css', { type: 'text/css' }));
app.use('/assets/js', express.static(__dirname + '/assets/js'));
app.use('/assets/img', express.static(__dirname + '/assets/img'));



const configuration = new Configuration({
 apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);

const headHTML = '<head><title>Global</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="description" content="HTML5 website template"><meta name="keywords" content="global, template, html, sass, jquery"><meta name="author" content="Bucky Maler"><link rel="stylesheet" href="/assets/css/main.css"></head>'
// const headHTML = '<head><title>Global</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="description" content="HTML5 website template"><meta name="keywords" content="global, template, html, sass, jquery"><meta name="author" content="Bucky Maler"><link rel="stylesheet" href="assets/css/main.css"></head>'
const getResponse = async(genres, authors) => {
 const response = await openai.createChatCompletion({
 model: "gpt-3.5-turbo",
 max_tokens: 150,
 

//  messages: [{role: "user", content: `recommend some books for someone who loves the following genres: "${genres}" and the following authors: "${authors}"`}]
//  }).catch((err)=>console.log(err.response));
 
 messages: [{role: "user", content: ` "${genres}" `}]
 }).catch((err)=>console.log(err.response));
 return response
}

app.get('/', (req, res) => {
 res.send(`
 <html>
${headHTML}
<body>

<!-- notification for small viewports and landscape oriented smartphones -->
<div class="device-notification">
  <a class="device-notification--logo" href="#0">
    <img src="assets/img/logo1.png" alt="11-45-G(PT)">
    <p>11-45-G(PT)</p>
  </a>
  <p class="device-notification--message">Global has so much to offer that we must request you orient your device to portrait or find a larger screen. You won't be disappointed.</p>
</div>

<div class="perspective effect-rotate-left">
  <div class="container"><div class="outer-nav--return"></div>
    <div id="viewport" class="l-viewport">
      <div class="l-wrapper">
        <header class="header">
          <a class="header--logo" href="#0">
            <img src="assets/img/logo.png" alt="Global">
            <p>11-45-G(PT)</p>
          </a>
          <button class="header--cta cta">Hire Us</button>
          <div class="header--nav-toggle">
            <span></span>
          </div>
        </header>
        <nav class="l-side-nav">
          <ul class="side-nav">
            <li class="is-active"><span>Home</span></li>
            <li><span>Works</span></li>
            <li><span>About</span></li>
            <li><span>Contact</span></li>
            
          </ul>
        </nav>
        <ul class="l-main-content main-content">
          <li class="l-section section section--is-active">
            <div class="intro">
              <div class="intro--banner">
                <h1>11-45-G(PT) <br>A GPT Based Voice Assistant<br></h1>
                <button class="cta">Contact Us
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 118" style="enable-background:new 0 0 150 118;" xml:space="preserve">
                  <g transform="translate(0.000000,118.000000) scale(1.00000,-1.00000)">
                    <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z"/>
                  </g>
                  </svg>
                  <span class="btn-background"></span>
                </button>
                <img src="assets/img/introduction-visual.png" alt="Welcome">
              </div>
              <head>
                <title>Input and Output Boxes</title>
                <style>
                  input[type="text"], output {
                    background-color: #000000;
                    border: none;
                    border-radius: 10px;
                    padding: 10px;
                    font-size: 16px;
                    width: 100%;
                  }
                  button[type="submit"] {
                    background-color: #000000;
                    border: none;
                    border-radius: 10px;
                    color: #333;
                    cursor: pointer;
                    font-size: 16px;
                    padding: 10px;
                  }
                </style>
              </head>
              <body>
                <form method="POST" action="/recommendations">
                  <input type="text" id="genres" name="genres" placeholder="Enter your input here">
                  <br><br>
                  
                  <input type="text" placeholder="Output" id="outputBox" readonly>
                  <br><br>

                  <button type="submit">Submit</button>  
                  <output></output>          
                </form>
              </body>
            </div>
          </li>
          <li class="l-section section">
            <div class="work">
              <h2>Our Team</h2>
              <div class="work--lockup">
                <ul class="slider">
                  <li class="slider--item slider--item-left">
                    <a href="#0">
                      <div class="slider--item-image">
                        <img src="assets/img/Harsh.jpg" alt="Harsh">
                      </div>
                      <p class="slider--item-title">Harsh Bhardwaj</p>
                      <p class="slider--item-description"></p>
                    </a>
                  </li>
                  <li class="slider--item slider--item-center">
                    <a href="#0">
                      <div class="slider--item-image">
                        <img src="assets/img/Dharani.jpg" alt="Dharani">
                      </div>
                      <p class="slider--item-title">Dharani Kumar S</p>
                      <p class="slider--item-description"></p>
                    </a>
                  </li>
                  <li class="slider--item slider--item-right">
                    <a href="#0">
                      <div class="slider--item-image">
                        <img src="assets/img/Milind.jpg" alt="Milind">
                      </div>
                      <p class="slider--item-title">Milind Jain</p>
                      <p class="slider--item-description"></p>
                    </a>
                  </li>
                  <li class="slider--item slider--item-center">
                    <a href="#0">
                      <div class="slider--item-image">
                        <img src="assets/img/Kanishk.jpg" alt="Kanishk">
                      </div>
                      <p class="slider--item-title">Kanishk Goel</p>
                      <p class="slider--item-description"></p>
                    </a>
                  </li>
                </ul>
                <div class="slider--prev">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 150 118" style="enable-background:new 0 0 150 118;" xml:space="preserve">
                  <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                    <path d="M561,1169C525,1155,10,640,3,612c-3-13,1-36,8-52c8-15,134-145,281-289C527,41,562,10,590,10c22,0,41,9,61,29
                    c55,55,49,64-163,278L296,510h575c564,0,576,0,597,20c46,43,37,109-18,137c-19,10-159,13-590,13l-565,1l182,180
                    c101,99,187,188,193,199c16,30,12,57-12,84C631,1174,595,1183,561,1169z"/>
                  </g>
                  </svg>
                </div>
                <div class="slider--next">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 118" style="enable-background:new 0 0 150 118;" xml:space="preserve">
                  <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                    <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z"/>
                  </g>
                  </svg>
                </div>
              </div>
            </div>
          </li>
          <li class="l-section section">
            <div class="about">
              <div class="about--banner">
                <h2><br>A GPT-Based<br>assistant with a<br>Voice Interface<br></h2>
                <a href="#0">Career
                  <span>
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 118" style="enable-background:new 0 0 150 118;" xml:space="preserve">
                    <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                      <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z"/>
                    </g>
                    </svg>
                  </span>
                </a>
                <img src="assets/img/about-visual.png" alt="About Us">
              </div>
              <div class="about--options">
                <a href="#0">
                  <h3>Video</h3>
                </a>
                <a href="#0">
                  <h3>Our Project</h3>
                </a>
                
              </div>
            </div>
          </li>
          <li class="l-section section">
            <div class="contact">
              <div class="contact--lockup">
                <div class="modal">
                  <div class="modal--information">
                    <p>Okhla Industrial Estate, <br>Phase III, near Govind Puri Metro Station, <br>New Delhi, Delhi 110020</p>
                    <a href="mailto:ouremail@gmail.com">harsh21322@iiitd.ac.in<br> dharani21039@iiitd.ac.in</a>
                    <a href="tel:+148126287560"></a>
                  </div>
                  <ul class="modal--options">
                    <li><a href="#0">Instagram</a></li>
                    <li><a href="#0">LinkedIn</a></li>
                    <li><a href="mailto:ouremail@gmail.com">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          
        </ul>
      </div>
    </div>
  </div>
  <ul class="outer-nav">
    <li class="is-active">Home</li>
    <li>Works</li>
    <li>About</li>
    <li>Contact</li>
    
  </ul>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>

<script>window.jQuery || document.write('<script src="assets/js/vendor/jquery-2.2.4.min.js"><\/script>')</script>
<script src="assets/js/functions-min.js"></script>
</body>
 </html>
 `);
});

app.post('/recommendations', async (req, res) => {
 const genres = req.body.genres;

 const response = await getResponse(genres);
 console.log(response.data.choices[0].message.content)
 
 
 const formattedResponse = formatResponse(response, genres)
 res.send(formattedResponse);
});

const formatResponse = (response, genres) => {
 if(!response || !response.data || !response.data.choices || response.data.choices.length === 0){
 return `<html>${headHTML}<body><h1>No response, please try again...</h1></body></html>`
 }
 const message = response.data.choices[0].message.content.replace(/\n/g,'</p><p>')
 say.speak(message);


//  document.getElementById('outputBox').value= response.data.choices[0].message.content;
 return `<html>
 ${headHTML}
 <body>
 
 <!-- notification for small viewports and landscape oriented smartphones -->
 <div class="device-notification">
   <a class="device-notification--logo" href="#0">
     <img src="assets/img/logo1.png" alt="11-45-G(PT)">
     <p>11-45-G(PT)</p>
   </a>
   <p class="device-notification--message">Global has so much to offer that we must request you orient your device to portrait or find a larger screen. You won't be disappointed.</p>
 </div>
 
 <div class="perspective effect-rotate-left">
   <div class="container"><div class="outer-nav--return"></div>
     <div id="viewport" class="l-viewport">
       <div class="l-wrapper">
         <header class="header">
           <a class="header--logo" href="#0">
             <img src="assets/img/logo.png" alt="Global">
             <p>11-45-G(PT)</p>
           </a>
           <button class="header--cta cta">Hire Us</button>
           <div class="header--nav-toggle">
             <span></span>
           </div>
         </header>
         <nav class="l-side-nav">
           <ul class="side-nav">
             <li class="is-active"><span>Home</span></li>
             <li><span>Works</span></li>
             <li><span>About</span></li>
             <li><span>Contact</span></li>
             
           </ul>
         </nav>
         <ul class="l-main-content main-content">
           <li class="l-section section section--is-active">
             <div class="intro">
               <div class="intro--banner">
                 <h1>11-45-G(PT) <br>A GPT Based Voice Assistant<br></h1>
                 <button class="cta">Contact Us
                   <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 118" style="enable-background:new 0 0 150 118;" xml:space="preserve">
                   <g transform="translate(0.000000,118.000000) scale(1.00000,-1.00000)">
                     <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z"/>
                   </g>
                   </svg>
                   <span class="btn-background"></span>
                 </button>
                 <img src="assets/img/introduction-visual.png" alt="Welcome">
               </div>
               <head>
                 <title>Input and Output Boxes</title>
                 <style>
                   input[type="text"], output {
                     background-color: #000000;
                     border: none;
                     border-radius: 10px;
                     padding: 10px;
                     font-size: 16px;
                     width: 100%;
                   }
                   button[type="submit"] {
                     background-color: #000000;
                     border: none;
                     border-radius: 10px;
                     color: #333;
                     cursor: pointer;
                     font-size: 16px;
                     padding: 10px;
                   }
                 </style>
               </head>
               <body>
                 <form method="POST" action="/recommendations">
                   <input type="text" id="genres" name="genres" placeholder="Enter your input here">
                   <br><br>
                   <input type="text" id="outputBox" name="Output" placeholder="${message}" >

                   <button type="submit">Submit</button> 
                   <output></output>
              
                   
                   <br><br>
                   
                 </form>
               </body>
             </div>
           </li>
           <li class="l-section section">
             <div class="work">
               <h2>Our Team</h2>
               <div class="work--lockup">
                 <ul class="slider">
                   <li class="slider--item slider--item-left">
                     <a href="#0">
                       <div class="slider--item-image">
                         <img src="assets/img/Harsh.jpg" alt="Harsh">
                       </div>
                       <p class="slider--item-title">Harsh Bhardwaj</p>
                       <p class="slider--item-description"></p>
                     </a>
                   </li>
                   <li class="slider--item slider--item-center">
                     <a href="#0">
                       <div class="slider--item-image">
                         <img src="assets/img/Dharani.jpg" alt="Dharani">
                       </div>
                       <p class="slider--item-title">Dharani Kumar S</p>
                       <p class="slider--item-description"></p>
                     </a>
                   </li>
                   <li class="slider--item slider--item-right">
                     <a href="#0">
                       <div class="slider--item-image">
                         <img src="assets/img/Milind.jpg" alt="Milind">
                       </div>
                       <p class="slider--item-title">Milind Jain</p>
                       <p class="slider--item-description"></p>
                     </a>
                   </li>
                   <li class="slider--item slider--item-center">
                     <a href="#0">
                       <div class="slider--item-image">
                         <img src="assets/img/Kanishk.jpg" alt="Kanishk">
                       </div>
                       <p class="slider--item-title">Kanishk Goel</p>
                       <p class="slider--item-description"></p>
                     </a>
                   </li>
                 </ul>
                 <div class="slider--prev">
                   <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 150 118" style="enable-background:new 0 0 150 118;" xml:space="preserve">
                   <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                     <path d="M561,1169C525,1155,10,640,3,612c-3-13,1-36,8-52c8-15,134-145,281-289C527,41,562,10,590,10c22,0,41,9,61,29
                     c55,55,49,64-163,278L296,510h575c564,0,576,0,597,20c46,43,37,109-18,137c-19,10-159,13-590,13l-565,1l182,180
                     c101,99,187,188,193,199c16,30,12,57-12,84C631,1174,595,1183,561,1169z"/>
                   </g>
                   </svg>
                 </div>
                 <div class="slider--next">
                   <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 118" style="enable-background:new 0 0 150 118;" xml:space="preserve">
                   <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                     <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z"/>
                   </g>
                   </svg>
                 </div>
               </div>
             </div>
           </li>
           <li class="l-section section">
             <div class="about">
               <div class="about--banner">
                 <h2><br>A GPT-Based<br>assistant with a<br>Voice Interface<br></h2>
                 <a href="#0">Career
                   <span>
                     <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 118" style="enable-background:new 0 0 150 118;" xml:space="preserve">
                     <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                       <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z"/>
                     </g>
                     </svg>
                   </span>
                 </a>
                 <img src="assets/img/about-visual.png" alt="About Us">
               </div>
               <div class="about--options">
                 <a href="#0">
                   <h3>Video</h3>
                 </a>
                 <a href="#0">
                   <h3>Our Project</h3>
                 </a>
                 
               </div>
             </div>
           </li>
           <li class="l-section section">
             <div class="contact">
               <div class="contact--lockup">
                 <div class="modal">
                   <div class="modal--information">
                     <p>Okhla Industrial Estate, <br>Phase III, near Govind Puri Metro Station, <br>New Delhi, Delhi 110020</p>
                     <a href="mailto:ouremail@gmail.com">harsh21322@iiitd.ac.in<br> dharani21039@iiitd.ac.in</a>
                     <a href="tel:+148126287560"></a>
                   </div>
                   <ul class="modal--options">
                     <li><a href="#0">Instagram</a></li>
                     <li><a href="#0">LinkedIn</a></li>
                     <li><a href="mailto:ouremail@gmail.com">Contact Us</a></li>
                   </ul>
                 </div>
               </div>
             </div>
           </li>
           
         </ul>
       </div>
     </div>
   </div>
   <ul class="outer-nav">
     <li class="is-active">Home</li>
     <li>Works</li>
     <li>About</li>
     <li>Contact</li>
     
   </ul>
 </div>
 
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
 
 <script>window.jQuery || document.write('<script src="assets/js/vendor/jquery-2.2.4.min.js"><\/script>')</script>
 <script src="assets/js/functions-min.js"></script>
 </body>
  </html>`
}

app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});





