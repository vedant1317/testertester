// Theme Management
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn.querySelector('.theme-icon');
const htmlElement = document.documentElement;

// Initialize Theme
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    // Respect OS preference if no manual setting
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    applyTheme(prefersLight ? 'light' : 'dark');
  }
}

function applyTheme(theme) {
  htmlElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  if (theme === 'light') {
    themeIcon.textContent = '☀️';
    themeToggleBtn.setAttribute('title', 'Switch to dark theme');
  } else {
    themeIcon.textContent = '🌙';
    themeToggleBtn.setAttribute('title', 'Switch to light theme');
  }
}

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
});

initTheme();

// Toast Notification Utility
function showToast(message, icon = '✨', duration = 3000) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('fade-out');
    toast.addEventListener('animationend', () => {
      toast.remove();
    });
  }, duration);
}

// Copy Command Button
const copyBtn = document.getElementById('copy-clone-btn');
if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    const textToCopy = 'npx vercel';
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      showToast('Copied "npx vercel" to clipboard!', '📋');
      const badge = copyBtn.querySelector('.copy-badge');
      if (badge) {
        const originalText = badge.textContent;
        badge.textContent = 'Copied!';
        setTimeout(() => {
          badge.textContent = originalText;
        }, 2000);
      }
    } catch (err) {
      showToast('Failed to copy to clipboard', '⚠️');
    }
  });
}

// Interactive Counter
let count = 0;
const counterDisplay = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');

function updateCounterDisplay() {
  if (counterDisplay) {
    counterDisplay.textContent = count;
  }
}

if (incrementBtn) {
  incrementBtn.addEventListener('click', () => {
    count++;
    updateCounterDisplay();
  });
}

if (decrementBtn) {
  decrementBtn.addEventListener('click', () => {
    count--;
    updateCounterDisplay();
  });
}

if (resetBtn) {
  resetBtn.addEventListener('click', () => {
    count = 0;
    updateCounterDisplay();
    showToast('Counter reset to 0', '🔄');
  });
}

// Message Box Form
const demoForm = document.getElementById('demo-form');
const demoInput = document.getElementById('demo-input');

if (demoForm && demoInput) {
  demoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = demoInput.value.trim();
    if (value) {
      showToast(`Message received: "${value}"`, '💬');
      demoInput.value = '';
    }
  });
}

// Dynamic Footer Year
const currentYearSpan = document.getElementById('current-year');
if (currentYearSpan) {
  currentYearSpan.textContent = new Date().getFullYear();
}

