# ML FastAPI Project - Flower Classifier 🌸

A simple Machine Learning based Question-Answer system using **FastAPI** (backend) and **Next.js** (frontend).  
This project trains a model using a CSV file and lets users ask questions to get predictions.

---

## 🔧 Technologies Used
- **Backend:** FastAPI, scikit-learn, pandas
- **Frontend:** Next.js, React
- **Model:** RandomForestClassifier

---

## 🚀 Features

### ✅ /learn (POST)
- Upload a CSV file (like flower data)
- Trains a RandomForestClassifier model

### ✅ /ask (GET)
- Send a query (comma-separated feature values)
- Returns prediction using trained model

---

## 📁 Project Structure

ml-fastapi-project/ ├── backend/ # FastAPI backend │ └── main.py ├── frontend/ # Next.js frontend │ └── pages/ │ ├── upload.js │ └── ask.js

---

## ⚙️ Setup Instructions

### Backend (FastAPI)
```bash
cd backend
python -m venv venv
venv\Scripts\activate  # On Windows
pip install fastapi uvicorn scikit-learn pandas python-multipart
uvicorn main:app --reload

### Frontend (Next.js)
cd frontend
npm install
npm run dev

Now visit:

http://localhost:3000/upload to upload a CSV

http://localhost:3000/ask to make a prediction

🧪 Endpoints
POST /learn
Upload a CSV file to train the model.

Format: Last column should be the target label.

GET /ask?q=val1,val2,...
Get prediction by passing comma-separated values as query string.

📷 Example CSV (flower_data.csv)
sepal_length,sepal_width,petal_length,petal_width,species
5.1,3.5,1.4,0.2,setosa
6.2,2.9,4.3,1.3,versicolor
6.3,3.3,6.0,2.5,virginica
...

🛠 Tech Stack
Backend: FastAPI, scikit-learn, pandas, pickle

Frontend: Next.js, React

Deployment: GitHub

🧾 Author
Farhana Rahman Adiba
GitHub: @farhanarahaman976