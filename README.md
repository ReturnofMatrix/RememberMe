# React + Vite

1) welcome Fist start button input name.
2) game with 15 images on one screen . 3 rows of 5 each.
if clicked double times display current score and best score and button to replay.
3) useEffect to call the api and store the images in array[15].
useEffect happens only once because all 15 images stay the same only their order is changed. that means only reshuffle them.
4) Think about (logic) how to reshuffle the array.
5) that each reshuffle is happening when user clicks an image.
6) store state if an image is clicked once or no.
7) if image is clicked twice display current score with best score.
8) if current score is greater than best score than change best score.
9) so i will make two components
10) first one will have game title, player name, best score and current score.
11) When a person clicks an image -> 
(i have to check if that image was clicked before) if yes then 
-> game over compare current score and best score and display.
-> if no then update the current score and shuffle the array.

How should i remember if the same image was clicked before ?















This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
