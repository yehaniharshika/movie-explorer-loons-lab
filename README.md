# 🎬 MovieHunt - Movie Explorer

**Live Demo:** [moviehunt](https://moviehunt-eight.vercel.app/)  
**GitHub Repo:** [github link](https://github.com/yehaniharshika/movie-explorer-loons-lab.git)

---

## 📖 Project Description

**MovieHunt - Movie Explorer** is a modern web application built with React that enables users to search, explore, and discover movies using real-time data from [The Movie Database (TMDb)](https://www.themoviedb.org/). Users can view trending films, search for specific titles, read detailed information, and save favorites locally. The app features a clean UI with light/dark mode and responsive design for mobile,tablet and desktop devices.

---

## 🚀 Features

### Authentication
- Simple login interface with username and password input (local/session-based handling).

### Movie Search
- Search bar connected to TMDb API for real-time movie suggestions.
- Search results displayed in a responsive grid layout.

### Movie Display
- Each movie card shows title, release year, and rating.
- Clicking a movie opens a detailed view: overview, genres, cast, and trailers.
- Movie trailers embedded using YouTube link from TMDb.

### Trending Section
- Shows currently trending movies using the TMDb trending endpoint.
- Filter options allow users to narrow down results by genre, release year, and rating.

### User Experience
- Light/Dark mode toggle for theme switching.
- Handles API errors and empty results with user-friendly messages.
- Mobile-first responsive UI.
- Smooth page navigation using React Router.
- Includes a "Load More" button to progressively display additional movies.

### Favorites & Local Storage
- Users can mark and store favorite movies locally.
- Last searched movie stored in local storage for session persistence.

---

## 🧰 Tech Stack

- **React** – UI and component logic  
- **React Router DOM** – Routing and page navigation  
- **Redux** – State management  
- **Axios** – For API communication  
- **Material UI (MUI)** – UI styling and components  
- **TMDb API** – Movie data, search, and trending  
- **Vercel** – App deployment  

---

## 📸 Screenshots


| ![Home Page](src/assets/screenshots/headerBlack.png) | ![Home Page](src/assets/screenshots/headerWhite.png) |
|-------------------------------------------------------|----------------------------------------------------------|


| ![Trending](src/assets/screenshots/loginNotData.png) | ![top rated](src/assets/screenshots/signup.png) |
|-------------------------------------------------------------|----------------------------------------------------------|


| ![Search](src/assets/screenshots/login.png) | ![logout show](src/assets/screenshots/logoutShow.png) |
|-------------------------------------------------------------|------------------------------------------------------------|


| ![Favorites](src/assets/screenshots/trendingWhite.png) | ![light mode](src/assets/screenshots/trendingBlack.png) |
|-------------------------------------------------------------|----------------------------------------------------------|


| ![Top rated black](src/assets/screenshots/topratedBlackMovie.png) | ![Top rated white](src/assets/screenshots/topRatedWhite.png) |
|-------------------------------------------------------------|----------------------------------------------------------|


| ![Filter title](src/assets/screenshots/filterTitle.png) | ![trending action](src/assets/screenshots/trendingAction.png) |
|-------------------------------------------------------------|----------------------------------------------------------|


| ![Filter vote](src/assets/screenshots/filterVote.png) | ![favorite black](src/assets/screenshots/favoriteBlack.png) |
|-------------------------------------------------------------|----------------------------------------------------------|


| ![Favorites white](src/assets/screenshots/favoriteWhite.png) | ![movie detail black](src/assets/screenshots/movieDetailsBlack.png) |
|-------------------------------------------------------------|----------------------------------------------------------|


| ![Movie detail white](src/assets/screenshots/movieDetailsWhite.png) | ![notification](src/assets/screenshots/notification.png) |
|-------------------------------------------------------------|----------------------------------------------------------|

---

## ⚙️ Installation & Setup Instructions

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yehaniharshika/movie-explorer-loons-lab.git
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run the project
```sh
npm run dev
```

---

## 🪪 License
© 2025 All Right Reserved Created By Yehani Harshika
<br/>
This project is licensed under the [MIT](License.txt) license
