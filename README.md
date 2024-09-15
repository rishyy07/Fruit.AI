Overview
Fruit.ai is a health management web application featuring a login page, home page, chatbot, translator, FAQ section, and an about page. This README provides a step-by-step guide to set up and run both the frontend and backend parts of the project.

Frontend Setup
Prerequisites
Node.js (v18.17.0 or later)
Setup
Clone the Repository

bash
Copy code
git clone <your-repository-url>
cd fruit-ai-frontend
Install Dependencies

bash
Copy code
npm install
Create .env File

Create a .env file in the root of the fruit-ai-frontend directory with the following content:

env
Copy code
REACT_APP_BACKEND_URL=http://localhost:5000
Start the Development Server

bash
Copy code
npm start
Dummy Credentials for Login:
Username: admin
Password: password
Open in Browser

Visit http://localhost:3000 to view the application.

Frontend Structure
src/components/
LoginPage.js
HomePage.js
ChatbotPage.js
TranslatorPage.js
FaqPage.js
AboutPage.js
src/styles/: Contains CSS files for styling.
Backend Setup
Prerequisites
Python (v3.8 or later)
Pip (Python package installer)
Setup
Navigate to the Backend Directory

bash
Copy code
cd fruit-ai-backend
Create and Activate Virtual Environment

bash
Copy code
python -m venv venv
On Windows:

bash
Copy code
venv\Scripts\activate
On macOS/Linux:

bash
Copy code
source venv/bin/activate
Install Dependencies

bash
Copy code
pip install -r requirements.txt
Run the Backend Server

bash
Copy code
python app.py
Open in Browser

Visit http://localhost:5000 to ensure the backend is running.

Backend Structure
app.py: Main application file with API endpoints.
requirements.txt: Lists Python dependencies.
faqs.json: Contains initial FAQ data.
Deployment
Frontend: Deploy on Vercel or Netlify. Live Link: [Insert Live Link Here]
Backend: Deploy on Heroku or AWS. Live Link: [Insert Live Link Here]
Additional Notes
Ensure that your frontend's .env file points to the correct backend URL.
Update the faqs.json file with your FAQ data as needed.
For any issues or questions, refer to the documentation or contact the project maintainers.
