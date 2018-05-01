const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
            <li>Phone: ${req.body.phone}</li>
            <li>Zip Code: ${req.body.zipCode}</li>
            <li>Address: ${req.body.streetAddress}</li>
            <li>Service: ${req.body.service}</li>
        <ul>

        <h3>Message</h3>
        <p>${req.body.message}</p>
        `
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
                user: '<YOUR_EMAIL>',
                pass: '<YOUR_PASSWORD>'
            }
        })

        let mailOptions = {
            from: 'test@gmail.com',
            to: '<YOUR_EMAIL>',
            replyTo: req.body.email,
            subject: 'New Message',
            text: req.body.message,
            html: htmlEmail

        }

        transporter.sendMail(mailOptions, (err, info) => {
            if(err){
                res.json({ msg: 'fail' })
            }else{
                res.json({ msg: 'success' })
            }
        })
    })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
