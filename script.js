// script.js

// 1. Simple alert when someone visits the website
window.addEventListener('load', () => {
  console.log("Welcome to Loxley, Alabama!");
});

// 2. Smooth scrolling for internal links (Home → History → Stories)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// 3. Example interactive feature for the Stories page
function submitStory() {
  const storyInput = document.getElementById('storyInput');
  const storyList = document.getElementById('storyList');
  
  if(storyInput && storyList && storyInput.value.trim() !== "") {
    const li = document.createElement('li');
    li.textContent = storyInput.value;
    storyList.appendChild(li);
    storyInput.value = "";
  }
}

// Optional: connect this function to a button in your stories.html
// <button onclick="submitStory()">Post Story</button>
