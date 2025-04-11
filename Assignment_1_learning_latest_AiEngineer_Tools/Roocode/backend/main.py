from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)


@app.get("/")
async def read_root():
    return {"message": "Hello World"}


@app.get("/quotes")
async def get_quotes(mood: str = Query(...)):
    # Placeholder for quote retrieval logic
    quotes = get_mood_quotes(mood)
    return quotes


def get_mood_quotes(mood: str):
    # Placeholder for mood-based quote retrieval
    if mood == "happy":
        return ["Every day is a new beginning.", "Happiness is a choice."]
    elif mood == "sad":
        return ["This too shall pass.", "The sun will shine again."]
    elif mood == "energetic":
        return [
            "Believe you can and you're halfway there.",
            "The only way to do great work is to love what you do.",
        ]
    else:
        return [
            "Keep your face always toward the sunshine, and shadows will fall behind you.",
            "You are never too old to set another goal or to dream a new dream.",
        ]
