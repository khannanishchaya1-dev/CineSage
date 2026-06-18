# 🎬 CineSage

**CineSage** is an AI-powered movie intelligence platform that transforms raw movie summaries into structured cinematic insights using **LangChain** and **Mistral AI**.

Simply paste a movie summary, plot description, or Wikipedia overview, and CineSage generates a detailed analysis including genres, cast, themes, conflicts, tone, notable facts, and much more.

---

## ✨ Features

* 🎥 Movie Metadata Extraction
* 🤖 AI-Powered Analysis using Mistral AI
* 📚 Genre & Sub-Genre Detection
* 👥 Cast & Character Identification
* 📖 Plot Summary Generation
* ⚔️ Central Conflict Extraction
* 🎭 Theme & Mood Analysis
* 🎯 Target Audience Detection
* 🏆 Awards & Recognition Discovery
* 🔍 Franchise & Similar Movie Suggestions
* 📋 Professional Structured Output
* 📱 Responsive Modern UI

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* Vanilla JavaScript

### Backend

* Node.js
* Express.js

### AI & LLM

* LangChain
* Mistral AI
* Prompt Engineering

### Environment Management

* dotenv

---

## 🚀 How It Works

1. User pastes a movie summary.
2. Frontend sends the summary to the backend.
3. LangChain formats the prompt.
4. Mistral AI analyzes the movie content.
5. AI extracts structured information.
6. Results are displayed in an elegant cinematic interface.

---

## 📂 Project Structure

```bash
CineSage/
│
├── public/
│   └── index.html
│
├── server.js
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/cinesage.git
cd cinesage
```

### Install Dependencies

```bash
npm install
```

### Create Environment Variables

Create a `.env` file:

```env
MISTRAL_API_KEY=your_api_key
PORT=3000
```

### Start Application

```bash
npm start
```

or

```bash
node server.js
```

---

## 🔑 AI Extraction Categories

CineSage extracts:

* Movie Name
* Release Year
* Genre(s)
* Sub-Genre(s)
* Director
* Writers
* Producers
* Main Cast
* Main Characters
* Setting / Location
* Plot Summary
* Central Conflict
* Major Themes
* Mood / Tone
* Target Audience
* Important Keywords
* Notable Facts
* Awards / Recognition
* Franchise Information
* Unique Selling Points
* Similar Movies
* Overall Analysis

---

## 💡 Example Use Cases

### Example Input

```text
PK is an alien who lands on Earth and loses the device needed to return home. While searching for it, he questions religious beliefs, traditions, and blind faith, leading to unexpected discoveries about humanity.
```

### Example Output

```text
Movie Name: PK

Genre:
Comedy Drama

Major Themes:
- Religion
- Blind Faith
- Humanity
- Social Satire

Central Conflict:
PK struggles to understand human religious practices while searching for a way back home.
```

---

## 🎯 Learning Outcomes

This project demonstrates:

* Prompt Engineering
* LangChain Chains
* LLM Integration
* REST API Development
* Express.js Backend
* AI-Powered Information Extraction
* Frontend-Backend Communication

---

## 🔮 Future Enhancements

* Movie Poster Integration
* TMDB API Support
* User Authentication
* Analysis History
* Export as PDF
* Movie Recommendation Engine
* Multi-LLM Support
* Streaming AI Responses

---

## 👨‍💻 Author

**Nishchaya**

B.Tech Computer Science Student | Backend Developer | AI Enthusiast

If you found this project useful, give it a ⭐ on GitHub.
