# Dynamic Toolbar Assignment

## 🧩 Overview
This React project demonstrates dynamic rendering using the JavaScript `.map()` function.  
It builds a reusable **Toolbar** component that displays multiple **AlertButton** components, each with its own message and label.

## 🎯 Objectives
- Render multiple components dynamically from an array of data  
- Pass object properties as props to child components  
- Use the `key` prop correctly when rendering lists  
- Trigger alerts with unique messages for each button  

## 🧠 Components
### `AlertButton.jsx`
- Accepts `message` and `children` props  
- Displays a button that triggers an alert with the given message  

### `Toolbar.jsx`
- Defines an array of button objects  
- Uses `.map()` to render each `AlertButton` dynamically  
- Ensures each button has a unique `key`  

## 🧪 Test Cases
Six tests using **Vitest** and **React Testing Library**:
| Type | Description |
|------|--------------|
| Normal 1 | Renders the toolbar heading |
| Normal 2 | Renders a specific button |
| Normal 3 | Alerts the correct message when clicked |
| Edge 1 | Renders all buttons from the array |
| Edge 2 | Does not render undefined text |
| Edge 3 | No React key warnings |

All tests pass successfully.

## 🚀 How to Run
```bash
npm install
npm run dev
npm run test

📹 Demonstration
Video link: (add your YouTube link here)

🗂 Repository
GitHub link: (add your repo link here)

