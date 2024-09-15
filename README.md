**OVERVIEW** 

Fruit.ai is a health management web application featuring a login page, home page, chatbot, translator, FAQ section, and an about page. This README provides a step-by-step guide to set up and run both the frontend and backend parts of the project.

**Frontend Setup**

Prerequisites:

Node.js (v18.17.0 or later)
Setup:

Clone the Repository

**Run the commands:**

git clone <your-repository-url>

cd fruit-ai-frontend

**Install Dependencies:**

npm install

Create .env File

Create a .env file in the root of the fruit-ai-frontend directory with the following content:

REACT_APP_BACKEND_URL=http://localhost:5000

Start the Development Server:

npm start


**Dummy Credentials for Login:**

**Username: admin**
**Password: password**

Open in Browser:
Visit http://localhost:3000 to view the application.


**Backend Setup**

**Prerequisites**

Python (v3.8 or later)

Pip (Python package installer)

**Setup**

Navigate to the Backend Directory


cd fruit-ai-backend

**Create and Activate Virtual Environment:**:
python -m venv venv

**On Windows:**

venv\Scripts\activate


**On macOS/Linux:**

source venv/bin/activate


**Install Dependencies**

pip install -r requirements.txt

**Run the Backend Server**:

python app.py

Open in Browser:

**Visit http://localhost:5000 to ensure the backend is running.**


**Deployment**
Frontend: Deploy on Vercel or Netlify. Live Link: [Insert Live Link Here]

Backend: Deploy on Heroku or AWS. Live Link: [Insert Live Link Here]

**Additional Notes**

Ensure that your frontend's .env file points to the correct backend URL.

Update the faqs.json file with your FAQ data as needed.

For any issues or questions, refer to the documentation or contact the project maintainers.

