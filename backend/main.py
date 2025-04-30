from fastapi import FastAPI, UploadFile, File, Query
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from sklearn.ensemble import RandomForestClassifier
import pandas as pd
import pickle

app = FastAPI()

# CORS middleware allow frontend to communicate with backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Or specify your frontend URL for security
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = None  # Global variable to store trained model

@app.post("/learn")
async def learn(file: UploadFile = File(...)):
    global model
    df = pd.read_csv(file.file)
    X = df.iloc[:, :-1]
    y = df.iloc[:, -1]

    model = RandomForestClassifier()
    model.fit(X, y)

    with open("trained_model.pkl", "wb") as f:
        pickle.dump(model, f)

    return {"message": "Model trained successfully!"}

@app.get("/ask")
async def ask(q: str = Query(...)):
    global model
    if model is None:
        try:
            with open("trained_model.pkl", "rb") as f:
                model = pickle.load(f)
        except:
            return JSONResponse(content={"error": "Model not trained yet"}, status_code=400)

    try:
        values = [float(i) for i in q.split(",")]
        prediction = model.predict([values])
        return {"prediction": prediction[0]}
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=400)
