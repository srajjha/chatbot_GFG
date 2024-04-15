# Chatbot for Course Inquiry

This project implements a chatbot using Dialogflow and Express.js for handling course inquiries. The chatbot can provide information about available courses, course details, pricing, and handle various queries related to course offerings.

## Features

- **Welcome Message**: Greets users when they initiate a conversation.
- **Course Variety**: Provides information about the courses offered.
- **Course Details**: Gives detailed information about specific courses.
- **Payment Inquiry**: Handles queries related to course pricing.
- **Fallback Handling**: Responds appropriately when it doesn't understand the user query.
- **Order Details**: Saves user's email and course ID to MongoDB when they inquire about ordering a course.

## Intents

### Welcome
- Triggers: Greetings like "Hi", "Hello", etc.
- Responses: Provides a welcoming message to the user.

### Course Variety
- Triggers: Queries like "Tell me about the courses you offer".
- Responses: Lists the available courses offered.

### DSA Course Detail
- Triggers: Queries related to the DSA course.
- Responses: Provides detailed information about the DSA course structure, topics covered, etc.

### Payment
- Triggers: Queries about course pricing.
- Responses: Mentions that pricing information is available on the website or through the assistant.

### Default Fallback
- Triggers: When the chatbot doesn't understand the user query.
- Responses: Asks the user to specify their query or offers to forward the call to an assistant.

### Order Details
- Triggers: When the user asks for details to order a course.
- Actions: Saves the user's email and course ID to MongoDB.

## Setup Instructions

1. Clone the repository:


git clone <repository_url>


2. Install dependencies:


cd <project_directory>
npm install


3. Set up MongoDB:

   - Replace `<password>` and `<user>` in the MongoDB connection URL in `app.js` with your actual MongoDB Atlas password.
   - Ensure that your MongoDB Atlas cluster allows connections from your application's server.

4. Start the server:


npm start


5. Incorporate the HTML code provided:


<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <iframe class="chat-bot" width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/d71d818a-96c4-41c5-bac7-4c2381db87d2"></iframe>
    </div>
</body>
</html>


6. Expose your server to the internet using ngrok or a similar tool.
7. Set the webhook URL in Dialogflow to point to your server's endpoint.
8. Interact with the chatbot using your preferred messaging platform.
9. whenever someone want to buy the course the email and course id will be saved on mongodb which then access by the salesteam

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Dialogflow
- HTML/CSS

## Contributors

- Sushant Raj (https://github.com/srajjha)



