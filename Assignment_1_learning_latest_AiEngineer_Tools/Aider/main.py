from fastapi import FastAPI, Form, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
import datetime
import random
import os

app = FastAPI()

# Mount the static directory
app.mount("/static", StaticFiles(directory="static"), name="static")

# Make sure the templates directory exists
templates_dir = "templates"
if not os.path.exists(templates_dir):
    os.makedirs(templates_dir)

templates = Jinja2Templates(directory=templates_dir)

fortune_messages = [
    "A beautiful, smart, and loving person will be coming into your life.",
    "A good time to finish up old tasks.",
    "A lifetime of happiness lies ahead of you.",
    "A pleasant surprise is waiting for you.",
    "All your hard work will soon pay off.",
]


@app.get("/", response_class=HTMLResponse)
async def read_form(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.post("/fortune", response_class=HTMLResponse)
async def generate_fortune(
    request: Request, name: str = Form(...), date: str = Form(...)
):
    try:
        date_object = datetime.datetime.strptime(date, "%Y-%m-%d").date()
        day_of_year = date_object.timetuple().tm_yday
    except ValueError:
        return HTMLResponse(
            content="Invalid date format. Please use YYYY-MM-DD.", status_code=400
        )

    random.seed(day_of_year + hash(name))
    fortune = random.choice(fortune_messages)

    return templates.TemplateResponse(
        "fortune.html",
        {"request": request, "name": name, "date": date, "fortune": fortune},
    )


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8080)
