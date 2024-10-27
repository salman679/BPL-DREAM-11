Here’s the simplified `README.md` in Markdown format:

```markdown
# BPL-DREAM 11

**BPL-DREAM 11** is a React app where users can select and manage their dream cricket team for the Bangladesh Premier League. With a focus on budget management and validation, users can add and remove players, manage coins, and get real-time alerts.

## Features

- **Player Selection**: Choose players based on available coins, with alerts if coins are insufficient or if a player is already chosen.
- **Team Management**: View selected players separately with an option to remove them.
- **Newsletter**: Users can subscribe, with emails stored in `localStorage` for a personalized experience.

## Tech Stack

- **React** for UI
- **React-Toastify** for alerts
- **CSS** for styling
- **LocalStorage** for saving newsletter subscriptions

## Project Structure
```

src
├── components/
│ ├── Navbar.js
│ ├── PlayerCard.js
│ ├── SelectedPlayers.js
│ ├── Newsletter.js
├── data/
│ └── playersData.json
├── App.js
└── index.js

````

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/BPL-DREAM-11.git
   cd BPL-DREAM-11
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the app:
   ```bash
   npm start
   ```

The app will run at `http://localhost:3000`.

## Extra

- **Persistent Newsletter**: Stores email data in `localStorage` for returning users.

```

Just copy and paste this into your `README.md` file. Let me know if you need any more help!
```
