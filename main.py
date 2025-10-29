from fastapi import FastAPI
from pydantic import BaseModel
import google.generativeai as genai
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace "*" with specific frontend URL in production  
    allow_credentials=True,
    allow_methods=["*"],  # Allows GET, POST, OPTIONS, DELETE, etc.
    allow_headers=["*"],
)

# ✅ Root route to avoid 404
@app.get("/")
def home():
    return {"message": "Chatbot API is running!"}

# ✅ Chat request structure
class ChatRequest(BaseModel):
    message: str

# ✅ Configure Gemini
genai.configure(api_key="AIzaSyA-cNhADhdhzBcImJYWp6wb9pmexi0TgWY")
model = genai.GenerativeModel("gemini-2.5-flash")

@app.post("/chat")
def chat_endpoint(request: ChatRequest):
    response = model.generate_content(request.message)
    return {"response": response.text}
