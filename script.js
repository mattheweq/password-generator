const btn = document.querySelector('.btn');
const root = document.getElementById('root');
const info = document.getElementById('info');

info.innerText = "Random strings are never stored or saved.";

btn.addEventListener('click', () => {
  const randomValue = generateRandom(20);
  root.innerText = randomValue;
  
  info.innerText = "Click above to copy to clipboard";
  info.classList.add("copy-msg");
  root.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(randomValue);
      root.textContent = 'Copied to clipboard!';
      setTimeout(() => {
        root.textContent = randomValue;
        info.innerText = "Random strings are never stored or saved.";
        info.classList.remove("copy-msg");
      }, 1500); // Display the original value after 1.5 seconds
    } catch (error) {
      // console.error('Failed to copy:', error);
    }
  });
});

function generateRandom(length) {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
}
