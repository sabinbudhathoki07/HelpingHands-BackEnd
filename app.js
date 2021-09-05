const express = require('express'); //Third Party
const bodyParser = require('body-parser'); // Core Module
const connectDB = require("./db/db");
const app = express();
const path = require('path');
const static_path = path.join(__dirname,'');
const cors = require('cors');
app.use(cors());

// Connect to mongoDB database
const  env = require('dotenv');
env.config({
     path:"./env"
}  
);

connectDB();

const userRoutes = require('./routes/user');
const contactRoutes = require('./routes/contact');
const adminRoutes = require('./routes/admin');
const volunteerRoutes = require('./routes/volunteer');
const blogRoutes = require('./routes/blog');
const teamRoutes = require('./routes/team');
const campaignRoutes = require('./routes/campaign');
const eventRoutes = require('./routes/event');
const donationRoutes = require('./routes/donation');
const laterRoutes = require('./routes/later');

app.use(express.static(static_path))
app.use(express.json())
app.use(userRoutes);
app.use(adminRoutes);
app.use(contactRoutes);
app.use(volunteerRoutes);
app.use(blogRoutes);
app.use(teamRoutes);
app.use(eventRoutes);
app.use(campaignRoutes);
app.use(donationRoutes);
app.use(laterRoutes);
app.use(bodyParser.urlencoded({extended:false}));

//enable CORS without external module
app.use(function (req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     next();
});

app.get("/", (req, res)=>{
     res.send("Welcome to helping hands");
})

const PORT = process.env.PORT || 3000;
app.listen(PORT);

