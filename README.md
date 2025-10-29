💬 AI Chatbot Web Application

This project is an AI-driven chatbot web app built using FastAPI for the backend and React for the frontend. It leverages Google Gemini (gemini-2.5-flash) to generate human-like, context-aware responses to user queries. The chatbot delivers real-time interaction through a clean and responsive React UI while the FastAPI backend handles message routing and communication with Gemini. With CORS middleware enabled, the app ensures smooth integration between the backend and frontend across different origins.

The application showcases how LLM integration can enhance web-based chat experiences by connecting FastAPI endpoints to generative AI models. It includes a simple /chat POST route that accepts user input, processes it via the Gemini model, and returns an AI-generated response. The system demonstrates modern AI + web integration, making it suitable for virtual assistant prototypes or interactive AI services.

⚙️ How to Run
🔹 Backend (FastAPI)

Clone the repository and navigate to the backend folder.

Install dependencies:

pip install fastapi uvicorn google-generativeai python-dotenv


Add your Gemini API key to a .env file:

GEMINI_API_KEY=your_api_key_here


Run the FastAPI server:

uvicorn main:app --reload


(Make sure your file name matches, e.g., main.py.)

🔹 Frontend (React)

Navigate to the React project folder.

Install dependencies:

npm install


Start the development server:

npm start


Open your browser at http://localhost:3000
 to chat with the AI bot.
