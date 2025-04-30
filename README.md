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

- ml-fastapi-project/
- │
- ├── backend/                           # FastAPI backend
- │   ├── main.py                        # Main FastAPI app
- │   ├── requirements.txt              # Python dependencies
- │   ├── trained_model.pkl             # Saved ML model after training
- │   └── __init__.py                   # (optional) Python package marker
- │
- ├── frontend/                          # Next.js frontend
- │   ├── pages/                         # Frontend pages
- │   │   ├── upload.js                 # File upload page
- │   │   └── ask.js                    # Prediction input page
- │   ├── public/                       # Static files like favicon, images
- │   ├── styles/                       # CSS files (e.g., globals.css)
- │   ├── package.json                  # Node.js project metadata
- │   ├── next.config.js                # Next.js configuration
- │   └── ...                           # Other Next.js related files
- │
- ├── .gitignore                         # Files and folders to ignore by Git
- ├── README.md                          # Project description and usage guide
- └── LICENSE                            # (optional) License info


# 🌸 ML FastAPI + Next.js Project

## 🔧 Setup Instructions

### ⚙️ Backend (FastAPI)

```bash
cd backend
python -m venv venv
venv\Scripts\activate       # On Windows
pip install -r requirements.txt
uvicorn main:app --reload



🚀 Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev


## 🔗 Web Interface

- 🌼 **Upload CSV:** [http://localhost:3000/upload](http://localhost:3000/upload)  
- 🌼 **Make Prediction:** [http://localhost:3000/ask](http://localhost:3000/ask)

---

## 🧪 API Endpoints

### `POST /learn`
- 📤 Upload a CSV file to train the model  
- 📌 **Format:** Last column must be the target label (e.g., `species`)

### `GET /ask?q=val1,val2,...`
- 📥 Get prediction by passing comma-separated values as a query string  
- 📌 **Example:**
  ```http
  GET /ask?q=5.1,3.5,1.4,0.2

📂 Example CSV (flower_data.csv)
```bash
sepal_length,sepal_width,petal_length,petal_width,species
5.1,3.5,1.4,0.2,setosa
6.2,2.9,4.3,1.3,versicolor
6.3,3.3,6.0,2.5,virginica

🛠 Tech Stack
Backend: FastAPI, scikit-learn, pandas, pickle

Frontend: Next.js, React

Deployment: GitHub

🧾 Author
Farhana Rahman Adiba
GitHub: @farhanarahaman976
