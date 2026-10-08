# Pezhvak | Canvas of Sound

> Where sound becomes color.

An interactive online music player built with pure HTML, CSS and JavaScript. Every track paints the interface with its own color palette while a live visualizer, powered by the Web Audio API, dances to the beat.

![Status](https://img.shields.io/badge/status-active-success?style=flat-square)
![Made with](https://img.shields.io/badge/made%20with-HTML%20%7C%20CSS%20%7C%20JS-blue?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)
![No Framework](https://img.shields.io/badge/framework-none-important?style=flat-square)

---

## Features

| Feature | Description |
|---|---|
| Full Player | Play, pause, next, previous, shuffle, and three repeat modes |
| Artist Discovery | Browse 8 Iranian artists with bios, genres, and their songs |
| Interactive Visualizer | Colored wave rings pulsing with bass, mid, and high frequencies |
| Dynamic Palette | The entire UI recolors itself based on the currently playing track |
| Live Search | Filter tracks in real-time as you type |
| Favorites | Mark tracks and persist them across sessions with `localStorage` |
| Responsive | Optimized for mobile, tablet, and desktop |
| Keyboard Shortcuts | Full keyboard navigation for playback |

---

## Tech Stack

- **HTML5** — semantic structure
- **CSS3** — Grid, Flexbox, custom properties, keyframe animations, backdrop-filter
- **Vanilla JavaScript** — no frameworks, no build step
- **Web Audio API** — real-time frequency analysis via `AnalyserNode`
- **Canvas API** — 60 FPS visualizer rendering with `requestAnimationFrame`
- **LocalStorage** — persistent favorites

---

## Important — Before You Run the App

This repository does **not** include any audio files due to copyright concerns.

Before opening the app, you **must create a folder named `songs`** in the project root and place your MP3 files inside it. Without this folder, the player will load but no audio will play.

### Step-by-step

1. Create a folder named `songs` in the same directory as `index.html`
2. Place 16 MP3 files inside it, named `1.mp3` through `16.mp3`
3. Follow the mapping table below to know which file corresponds to which track

Your final structure should look like this:
