if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/vite-react/sw.js', { scope: '/vite-react/' })})}