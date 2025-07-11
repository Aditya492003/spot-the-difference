# 🕵️‍♂️ Spot the Difference Game (React + Vite + JSON)

A fun and interactive **Spot the Difference** game built with **React** and **Vite**. The game loads image data and difference locations dynamically from a simple `config.json` file, allowing easy level updates and reuse.

---

##  How to Run the Game

###  Run Locally (Development Mode)

 Clone the repository 
   
   **git clone https://github.com/Aditya492003/spot-the-difference.git**

   **cd spot-the-difference**

   **npm install**

   **npm run dev**

   link:- https://spot-the-difference-aditya492003s-projects.vercel.app/


####  Features

-  Click to find image differences
-  Timer to track gameplay
-  Score counter: "Found: X / Total"
-  Fully JSON-configured — no hardcoding!
-  Auto-reloads or switches levels on completion
-  Animations for dots, score, and success.
-  Clean UI with green background and white text

---

#####  How the Game Uses `config.json`

This JSON file tells the game:
- What images to display
- Where to find the clickable differences
- What the original image size was (for accurate scaling)
- How many levels exist (if using multiple)

---

###  Sample `config.json` (Single Level)

```json
{
  "gameTitle": "Spot the Difference - Animals",
  "originalSize": {
    "width": 600, 
    "height": 571
  },
  "images": {
    "image1": "/assets/image1.jpg",
    "image2": "/assets/image2.jpg"
  },
  "differences": [
    { "x": 100, "y": 200, "width": 50, "height": 50 },
    { "x": 300, "y": 150, "width": 40, "height": 40 },
    { "x": 500, "y": 300, "width": 30, "height": 30 }
  ]
}

//I also declared the original size of image in json code so if we change the size of image in game screen then the clickable areas will areas remain on same point where we declared

```

 The app reads this file and dynamically:

. Loads the level's images
. Places invisible boxes using (x, y, width, height)
. Detects correct clicks
. Marks found differences visually
. Triggers “Level Complete” state



