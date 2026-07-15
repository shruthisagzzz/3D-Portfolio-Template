# 🚗 Porsche Evolution | Interactive 3D Portfolio

<div align="center">

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-black?logo=three.js)
![React Three Fiber](https://img.shields.io/badge/React--Three--Fiber-orange)
![Framer Motion](https://img.shields.io/badge/Framer-Motion-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)

An immersive 3D web experience demonstrating the transformation between two legendary Porsche models using scroll-driven animations.

</div>

---

# 📖 Overview

Porsche Evolution is an interactive web experience built with **React**, **Three.js**, and **React Three Fiber**. Instead of simply displaying a 3D model, the project creates a cinematic transition where one Porsche model disassembles while another assembles as the user scrolls through the page.

The application combines modern frontend technologies with smooth animations to create an engaging storytelling experience.

---

# ✨ Features

- 🚗 Interactive 3D Porsche Models
- 🎯 Scroll-controlled animation
- 💥 Model disassembly effect
- 🔧 Reverse assembly animation
- 🎨 Modern UI with gradients
- ⚡ Framer Motion animations
- 📊 Scroll progress indicator
- 🌌 Dynamic lighting
- 🎥 Auto rotating camera
- 📱 Responsive Layout

---

# 📸 Screenshots

> Replace these images with your own screenshots.

## Home

```
README-assets/home.png
```

![](README-assets/home.png)

---

## 3D Model

```
README-assets/car-view.png
```

![](README-assets/car-view.png)

---

## Scroll Animation

```
README-assets/animation.png
```

![](README-assets/animation.png)

---

## Final Section

```
README-assets/final-page.png
```

![](README-assets/final-page.png)

---

# 🎥 Project Demo

Add your GIF here

```
<img width="1900" height="976" alt="Recording 2026-07-15 123917" src="https://github.com/user-attachments/assets/aadbc25e-859c-44fd-b3b9-5fbc325766e6" />

```

---

# 🛠 Tech Stack

| Technology | Purpose |
|------------|----------|
| React 19 | Frontend |
| TypeScript | Type Safety |
| Vite | Build Tool |
| Three.js | 3D Rendering |
| React Three Fiber | React renderer for Three.js |
| Drei | Helpers for Three.js |
| Framer Motion | Animations |
| Tailwind CSS | Styling |

---

# 📂 Folder Structure

```
src
│
├── components
│   ├── App.tsx
│   └── CarCanvas.tsx
│
├── assets
│
├── index.css
├── App.css
├── main.tsx
│
public
│
├── free_porsche_911_carrera_4s
├── free_1975_porsche_911_930_turbo
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/shruthisagzzz/3D-Portfolio-Template
```

Move inside the project

```bash
cd src/app.tsx
```

Install dependencies

```bash
npm install
```

Run locally

```bash
npm run dev
```

---

# 🚀 How It Works

### Step 1

The first Porsche model loads.

↓

### Step 2

User scrolls.

↓

### Step 3

Each mesh moves in a random direction creating a controlled explosion.

↓

### Step 4

The first model disappears.

↓

### Step 5

The second Porsche model begins assembling.

↓

### Step 6

Animation completes.

---

# 💻 Code Highlights

## Loading 3D Models

```tsx
const { scene } = useGLTF("/free_porsche_911_carrera_4s/scene.gltf");
```

---

## Scroll Progress

```tsx
const { scrollYProgress } = useScroll();
```

---

## Animated Mesh Movement

```tsx
child.position.lerp(target, 0.1);
```

---

## Three.js Canvas

```tsx
<Canvas camera={{ position: [0,35,0], fov:13 }}>
```

---

## Orbit Controls

```tsx
<OrbitControls
autoRotate
enableZoom
/>
```

---

# 🌟 UI Features

- Fixed background canvas
- Animated navigation bar
- Gradient typography
- Progress bar
- Dynamic colors
- Scroll sections
- Responsive layout
- Custom scrollbar
- Radial vignette
- Noise overlay

---

# 🚗 Models Used

- Porsche 911 Carrera 4S
- Porsche 911 Turbo (1975)

---

# 📈 Future Improvements

- Environment HDRI
- Sound effects
- Dark/Light themes
- Mobile gestures
- Multiple vehicle transitions
- Camera cinematic paths
- Performance optimization
- Loading screen

---

# 📦 Dependencies

```
React
TypeScript
Three.js
React Three Fiber
Drei
Framer Motion
Tailwind CSS
Emotion
```

---

# 👨‍💻 Author

**Shruthi Sagar**

Computer Science (Data Science)

React Developer • Three.js Enthusiast • Frontend Developer

---

# ⭐ Support

If you like this project,

⭐ Star the repository

🍴 Fork it

🛠 Contribute

---

## License

MIT License
