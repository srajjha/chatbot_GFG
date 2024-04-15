const express = require('express');
const mongoose = require('mongoose');

// Create Express application
const app = express();
app.use(express.json());

// Connect to MongoDB

const mongo_url='mongodb+srv://srjha:srjha@cluster0.xjxmncf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;

// Define MongoDB schema
const buyingCourseSchema = new mongoose.Schema({
    email: String,
    courseId: Number
});
const BuyingCourse = mongoose.model('BuyingCourse', buyingCourseSchema);

// Route to handle incoming requests
app.post('/', async (req, res) => {
    try {
        const payload = req.body;
        const intent = payload.queryResult.intent.displayName;
        const parameters = payload.queryResult.parameters;
        console.log(intent);
        console.log(parameters);

         if(intent === 'orderdetails') {
            // Extract parameters and save to MongoDB
            const buyingCourseData = new BuyingCourse({
                email: parameters.email1,
                courseId: parameters.number
            });
            await buyingCourseData.save();
            console.log('Data saved to MongoDB:', buyingCourseData);
        }

        // Handle other intents or respond as needed
        res.send('Webhook received and processed successfully.');
    } catch (error) {
        console.error('Error processing webhook:', error);
        res.status(500).send('Internal server error.');
    }
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
