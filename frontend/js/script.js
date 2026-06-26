// Global Application State
const state = {
  token: localStorage.getItem('token') || null,
  user: null,
  settings: null,
  services: [],
  blogs: [],
  events: [],
  galleryItems: [],
  notifications: [],
  inquiries: [],
  chatHistory: [
    { sender: 'assistant', text: 'Hi! I am the AI-Solutions Virtual Assistant. 🤖 How can I assist you with digital employee experience systems or workspace strategy today?', time: new Date() }
  ],
  activeDashboardTab: 'profile',
  currentEditingItem: null // Used for CRUD modals
};

// API Base Endpoint
const API_URL = '/api';

// Toast Notification Manager
function showToast(title, message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const bgClasses = {
    success: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    error: 'bg-rose-500/10 border-rose-500/20 text-rose-400',
    info: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400',
    warning: 'bg-amber-500/10 border-amber-500/20 text-amber-400'
  };

  const icons = {
    success: 'check-circle',
    error: 'alert-triangle',
    info: 'info',
    warning: 'alert-circle'
  };

  const toastId = 'toast-' + Math.random().toString(36).substr(2, 9);
  const toastHtml = `
    <div id="${toastId}" class="flex items-start gap-3 p-4 rounded-xl border glass-panel ${bgClasses[type]} shadow-xl pointer-events-auto transition-all duration-300 translate-y-2 opacity-0">
      <i data-lucide="${icons[type]}" class="w-5 h-5 shrink-0"></i>
      <div>
        <h5 class="text-sm font-bold text-white">${title}</h5>
        <p class="text-xs mt-1 text-slate-300">${message}</p>
      </div>
      <button onclick="document.getElementById('${toastId}').remove()" class="p-1 text-slate-400 hover:text-white shrink-0 ml-auto">
        <i data-lucide="x" class="w-4 h-4"></i>
      </button>
    </div>
  `;

  container.insertAdjacentHTML('beforeend', toastHtml);
  lucide.createIcons();

  const toastEl = document.getElementById(toastId);
  setTimeout(() => {
    toastEl.classList.remove('translate-y-2', 'opacity-0');
  }, 10);

  setTimeout(() => {
    if (document.getElementById(toastId)) {
      toastEl.classList.add('opacity-0', 'translate-y-[-10px]');
      setTimeout(() => toastEl.remove(), 300);
    }
  }, 5000);
}

// Global Headers Helper
function getHeaders() {
  const headers = { 'Content-Type': 'application/json' };
  if (state.token) {
    headers['Authorization'] = `Bearer ${state.token}`;
  }
  return headers;
}

// Load Authenticated User Profile
async function fetchMe() {
  if (!state.token) return null;
  try {
    const res = await fetch(`${API_URL}/auth/me`, { headers: getHeaders() });
    const data = await res.json();
    if (data.success) {
      state.user = data.user;
      return data.user;
    } else {
      logout();
      return null;
    }
  } catch (error) {
    console.error('Failed to load user profile:', error);
    return null;
  }
}

// Load Global Settings
async function fetchSettings() {
  try {
    const res = await fetch(`${API_URL}/settings`);
    const data = await res.json();
    if (data.success) {
      state.settings = data.data;
      updateSettingsUI();
    }
  } catch (error) {
    console.error('Failed to fetch settings:', error);
  }
}

// Update settings values globally
function updateSettingsUI() {
  if (!state.settings) return;
  
  // Footer
  const missionText = document.getElementById('footer-mission-text');
  if (missionText) missionText.textContent = state.settings.mission;
  
  const addressText = document.getElementById('footer-address');
  if (addressText) addressText.textContent = state.settings.officeAddress;
  
  const phoneText = document.getElementById('footer-phone');
  if (phoneText) phoneText.textContent = state.settings.officePhone;
  
  const emailText = document.getElementById('footer-email');
  if (emailText) emailText.textContent = state.settings.officeEmail;
}

// Authentication handlers
function logout() {
  state.token = null;
  state.user = null;
  localStorage.removeItem('token');
  showToast('Logged Out', 'You have been successfully signed out of the web portal.', 'info');
  updateNavUI();
  window.location.hash = '#home';
}

// Update Navigation visual state depending on user role
function updateNavUI() {
  const navContainer = document.getElementById('nav-auth-container');
  const mobileNavContainer = document.getElementById('mobile-nav-auth-container');
  
  if (!navContainer || !mobileNavContainer) return;

  if (state.token && state.user) {
    const dashboardLabel = state.user.role === 'admin' ? 'Admin Panel' : 'Dashboard';
    const authBtnHtml = `
      <div class="flex items-center space-x-3">
        <a href="#dashboard" class="px-5 py-2.5 rounded-xl border border-brand-indigo/20 bg-brand-dark/50 hover:bg-brand-dark text-slate-100 font-medium text-sm transition-all flex items-center gap-2">
          <i data-lucide="layout-dashboard" class="w-4 h-4 text-brand-indigo"></i> ${dashboardLabel}
        </a>
        <button id="logout-btn" class="p-2.5 rounded-xl border border-rose-500/10 hover:border-rose-500/30 hover:bg-rose-500/5 text-rose-400 transition-all flex items-center justify-center">
          <i data-lucide="log-out" class="w-4 h-4"></i>
        </button>
      </div>
    `;
    navContainer.innerHTML = authBtnHtml;
    mobileNavContainer.innerHTML = `
      <div class="flex flex-col gap-2">
        <a href="#dashboard" class="block px-3 py-2.5 rounded-lg text-center bg-brand-dark/50 border border-brand-indigo/10 text-white font-medium text-sm">${dashboardLabel}</a>
        <button id="logout-btn-mobile" class="block w-full px-3 py-2.5 rounded-lg text-center bg-rose-500/10 text-rose-400 border border-rose-500/20 font-medium text-sm">Sign Out</button>
      </div>
    `;
    
    // Bind click events
    document.getElementById('logout-btn')?.addEventListener('click', logout);
    document.getElementById('logout-btn-mobile')?.addEventListener('click', logout);
  } else {
    const guestBtnHtml = `
      <a href="#auth" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-indigo to-brand-violet hover:opacity-90 text-white font-medium text-sm transition-all shadow-md shadow-brand-indigo/10 flex items-center gap-2">
        <i data-lucide="user" class="w-4 h-4"></i> Sign In
      </a>
    `;
    navContainer.innerHTML = guestBtnHtml;
    mobileNavContainer.innerHTML = guestBtnHtml;
  }
  lucide.createIcons();
}

// Floating Chatbot UI & Logic
const chatToggleBtn = document.getElementById('chat-toggle');
const chatDrawer = document.getElementById('chat-drawer');
const chatCloseBtn = document.getElementById('chat-close');
const chatMessages = document.getElementById('chat-messages');
const chatInputForm = document.getElementById('chat-input-form');
const chatInputField = document.getElementById('chat-input-field');

if (chatToggleBtn && chatDrawer && chatCloseBtn) {
  chatToggleBtn.addEventListener('click', () => {
    chatDrawer.classList.toggle('hidden');
    document.getElementById('chat-icon-bot').classList.toggle('hidden');
    document.getElementById('chat-icon-close').classList.toggle('hidden');
    chatInputField.focus();
    scrollChatToBottom();
  });

  chatCloseBtn.addEventListener('click', () => {
    chatDrawer.classList.add('hidden');
    document.getElementById('chat-icon-bot').classList.remove('hidden');
    document.getElementById('chat-icon-close').classList.add('hidden');
  });

  // Render initial history
  renderChatHistory();
}

function scrollChatToBottom() {
  if (chatMessages) {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

function renderChatHistory() {
  if (!chatMessages) return;
  chatMessages.innerHTML = '';
  state.chatHistory.forEach(msg => {
    appendChatBubble(msg.sender, msg.text, msg.prototypeDetails);
  });
  scrollChatToBottom();
}

function appendChatBubble(sender, text, prototypeDetails = null) {
  if (!chatMessages) return;

  const isAssistant = sender === 'assistant';
  const bubbleHtml = `
    <div class="flex items-start gap-2 ${isAssistant ? '' : 'justify-end'}">
      ${isAssistant ? `
        <div class="w-8 h-8 rounded-lg bg-brand-indigo/10 flex items-center justify-center text-brand-indigo shrink-0">
          <i data-lucide="bot" class="w-4 h-4"></i>
        </div>
      ` : ''}
      <div class="chat-bubble ${isAssistant ? 'bg-brand-dark border border-brand-indigo/5 text-slate-300 rounded-r-xl rounded-bl-xl' : 'bg-brand-indigo text-white rounded-l-xl rounded-br-xl'} p-3 max-w-[80%] flex flex-col gap-2">
        <p class="leading-relaxed whitespace-pre-wrap">${text}</p>
        ${prototypeDetails ? renderChatBlueprintCard(prototypeDetails) : ''}
        <div class="text-[9px] ${isAssistant ? 'text-slate-500' : 'text-indigo-200'} mt-1 self-start">
          ${isAssistant ? 'AI Assistant' : 'You'}
        </div>
      </div>
    </div>
  `;
  
  chatMessages.insertAdjacentHTML('beforeend', bubbleHtml);
  lucide.createIcons();
  scrollChatToBottom();
}

// Generate styled prototype Blueprint card inside chatbot
function renderChatBlueprintCard(details) {
  // Convert object data to base64 or string safely to use in click handler
  const dataString = encodeURIComponent(JSON.stringify(details));
  return `
    <div class="mt-3 p-3 rounded-lg bg-brand-darker border border-brand-indigo/20 space-y-2 text-slate-200 text-xs shadow-md">
      <div class="flex items-center gap-1.5 text-brand-cyan font-bold border-b border-brand-indigo/10 pb-1.5 mb-1.5">
        <i data-lucide="cpu" class="w-4 h-4"></i>
        <span>PROTOTYPE BLUEPRINT</span>
      </div>
      <div><strong>Project:</strong> ${details.projectName}</div>
      <div><strong>Tech Stack:</strong> <span class="text-slate-300 font-mono text-[10px] bg-brand-dark px-1.5 py-0.5 rounded border border-brand-indigo/5">${details.techStack}</span></div>
      <div><strong>Key Features:</strong>
        <ul class="list-disc pl-4 mt-1 text-[11px] text-slate-300 space-y-0.5">
          ${details.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
      </div>
      <div><strong>Schema Overview:</strong> <span class="text-slate-400 font-mono text-[9px] block bg-brand-dark p-1 rounded border border-brand-indigo/5 mt-1 overflow-x-auto">${details.databaseSchema}</span></div>
      <div class="flex items-center justify-between pt-2 border-t border-brand-indigo/10 mt-2 text-[11px]">
        <div>Cost: <span class="text-emerald-400 font-bold font-mono">${details.pricing}</span></div>
        <div>Time: <span class="text-brand-cyan font-bold font-mono">${details.timeframe}</span></div>
      </div>
      <button onclick="saveChatBlueprint('${dataString}')" class="w-full mt-2 py-1.5 rounded bg-brand-indigo hover:bg-brand-indigo-hover text-[10px] text-white font-bold transition-colors flex items-center justify-center gap-1">
        <i data-lucide="save" class="w-3.5 h-3.5"></i> Save Prototype to Inquiries
      </button>
    </div>
  `;
}

// Save Chat Bot Generated Blueprint
async function saveChatBlueprint(blueprintEncoded) {
  const details = JSON.parse(decodeURIComponent(blueprintEncoded));
  
  if (!state.token) {
    showToast('Sign In Required', 'Please register or sign in to save blueprints to your dashboard profile.', 'warning');
    window.location.hash = '#auth';
    chatDrawer.classList.add('hidden');
    return;
  }

  try {
    const inquiryPayload = {
      name: state.user.name,
      email: state.user.email,
      phone: '',
      subject: `AI Blueprint: ${details.projectName}`,
      message: `AI virtual assistant generated blueprint containing:\nTech Stack: ${details.techStack}\nCost: ${details.pricing}\nTimeframe: ${details.timeframe}`,
      prototypeDetails: details
    };

    const res = await fetch(`${API_URL}/inquiries`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(inquiryPayload)
    });
    
    const data = await res.json();
    if (data.success) {
      showToast('Blueprint Saved!', 'Your prototype has been logged as an active inquiry. Track details on your dashboard.', 'success');
      // Append chatbot system notification
      appendChatBubble('assistant', 'Awesome! I saved that prototype plan directly to your inquiries database. Check your profile dashboard to review feedback!');
    } else {
      showToast('Save Failed', data.message || 'Error occurred.', 'error');
    }
  } catch (error) {
    console.error(error);
    showToast('Connection Error', 'Failed to connect to the backend server.', 'error');
  }
}

// Chat Prompt Submission
if (chatInputForm) {
  chatInputForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = chatInputField.value.trim();
    if (!query) return;

    chatInputField.value = '';
    
    // 1. Append user message
    appendChatBubble('user', query);
    state.chatHistory.push({ sender: 'user', text: query, time: new Date() });

    // 2. Append typing loader indicator
    const loaderId = 'chat-loader-bubble';
    const loaderHtml = `
      <div id="${loaderId}" class="flex items-start gap-2">
        <div class="w-8 h-8 rounded-lg bg-brand-indigo/10 flex items-center justify-center text-brand-indigo shrink-0">
          <i data-lucide="bot" class="w-4 h-4"></i>
        </div>
        <div class="chat-bubble bg-brand-dark border border-brand-indigo/5 text-slate-300 rounded-r-xl rounded-bl-xl p-3 flex items-center gap-1">
          <span class="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></span>
          <span class="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></span>
          <span class="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></span>
        </div>
      </div>
    `;
    chatMessages.insertAdjacentHTML('beforeend', loaderHtml);
    lucide.createIcons();
    scrollChatToBottom();

    // 3. Make API request
    try {
      const res = await fetch(`${API_URL}/inquiries/chat-assistant`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query })
      });
      const data = await res.json();
      
      // Remove loader
      document.getElementById(loaderId)?.remove();

      if (data.success) {
        appendChatBubble('assistant', data.replyText, data.prototypeDetails);
        state.chatHistory.push({
          sender: 'assistant',
          text: data.replyText,
          prototypeDetails: data.prototypeDetails,
          time: new Date()
        });
      } else {
        appendChatBubble('assistant', 'Oops, I encountered a communication hitch. Could you repeat that inquiry?');
      }
    } catch (error) {
      console.error(error);
      document.getElementById(loaderId)?.remove();
      appendChatBubble('assistant', 'Network offline. Please verify you can reach the Sunderland database node.');
    }
  });

  // Bind Quick Chips
  document.querySelectorAll('.chat-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const prompt = chip.getAttribute('data-prompt');
      chatInputField.value = prompt;
      chatInputForm.dispatchEvent(new Event('submit'));
    });
  });
}


// ROUTER SYSTEM
const viewport = document.getElementById('app-viewport');

const routes = {
  'home': renderHome,
  'about': renderAbout,
  'services': renderServices,
  'service-details': renderServiceDetails,
  'events': renderEvents,
  'blogs': renderBlogs,
  'blog-details': renderBlogDetails,
  'gallery': renderGallery,
  'contact': renderContact,
  'auth': renderAuth,
  'dashboard': renderDashboard
};

async function handleRouting() {
  const hash = window.location.hash || '#home';
  const hashParts = hash.split('/');
  const baseHash = hashParts[0].replace('#', '');
  const paramId = hashParts[1] || null;

  // Collapse mobile navigation menu if open
  const mobileMenu = document.getElementById('mobile-navigation-drawer');
  if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
    document.getElementById('menu-icon-open').classList.remove('hidden');
    document.getElementById('menu-icon-close').classList.add('hidden');
  }

  // Find routing template
  const renderer = routes[baseHash] || renderHome;
  
  // Set viewport to loader state briefly
  viewport.innerHTML = `
    <div class="flex items-center justify-center min-h-[60vh]">
      <div class="flex flex-col items-center space-y-4">
        <div class="w-10 h-10 rounded-full border-4 border-brand-indigo border-t-transparent animate-spin"></div>
        <p class="text-slate-400 text-sm animate-pulse">Loading Viewport Module...</p>
      </div>
    </div>
  `;

  // Render view
  try {
    await renderer(paramId);
  } catch (error) {
    console.error(error);
    viewport.innerHTML = `
      <div class="max-w-md mx-auto py-20 px-4 text-center">
        <i data-lucide="alert-octagon" class="w-16 h-16 text-rose-500 mx-auto mb-4 animate-bounce"></i>
        <h2 class="text-2xl font-bold mb-2">View Render Failure</h2>
        <p class="text-slate-400 mb-6 text-sm">A pipeline breakdown occurred during template generation. Check the debugger console.</p>
        <a href="#home" class="px-5 py-2.5 bg-brand-indigo rounded-xl text-white text-sm font-semibold">Return Home</a>
      </div>
    `;
    lucide.createIcons();
  }
}

// Listen to hash routes
window.addEventListener('hashchange', handleRouting);
window.addEventListener('load', async () => {
  await fetchSettings();
  await fetchMe();
  updateNavUI();
  handleRouting();
});

// Mobile navbar menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    const drawer = document.getElementById('mobile-navigation-drawer');
    const menuOpen = document.getElementById('menu-icon-open');
    const menuClose = document.getElementById('menu-icon-close');
    drawer.classList.toggle('hidden');
    menuOpen.classList.toggle('hidden');
    menuClose.classList.toggle('hidden');
  });
}


// TEMPLATE RENDERERS

// View: HOME
async function renderHome() {
  // Fetch services and blogs preview from backend
  let servicePreviewHtml = '';
  let blogPreviewHtml = '';
  
  try {
    const sRes = await fetch(`${API_URL}/services`);
    const sData = await sRes.json();
    if (sData.success) {
      state.services = sData.data;
      servicePreviewHtml = sData.data.slice(0, 3).map(s => `
        <div class="interactive-card p-6 rounded-2xl border border-brand-indigo/10 flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-xl bg-brand-indigo/10 text-brand-indigo flex items-center justify-center mb-5 border border-brand-indigo/15">
              <i data-lucide="${s.icon || 'cpu'}" class="w-6 h-6"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">${s.title}</h3>
            <p class="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-3">${s.description}</p>
          </div>
          <div class="flex items-center justify-between pt-4 border-t border-brand-indigo/5 mt-4">
            <span class="text-xs font-bold text-brand-cyan uppercase tracking-wider bg-brand-cyan/10 px-2.5 py-1 rounded-full border border-brand-cyan/10">Est. From £${s.price}</span>
            <button onclick="openServiceDetailDrawer('${s._id}')" class="text-sm font-semibold text-brand-indigo hover:text-white flex items-center gap-1 transition-colors">
              Details <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
            </button>
          </div>
        </div>
      `).join('');
    }
    
    const bRes = await fetch(`${API_URL}/blogs`);
    const bData = await bRes.json();
    if (bData.success) {
      state.blogs = bData.data;
      blogPreviewHtml = bData.data.slice(0, 3).map(b => `
        <div class="interactive-card rounded-2xl overflow-hidden group flex flex-col h-full">
          <div class="h-48 overflow-hidden relative border-b border-brand-indigo/10">
            <img src="${b.image}" alt="${b.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <span class="absolute top-4 left-4 bg-brand-indigo text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-white/10 shadow-lg">${b.category}</span>
          </div>
          <div class="p-6 flex-grow flex flex-col justify-between">
            <div>
              <h3 class="text-lg font-bold text-white group-hover:text-brand-indigo transition-colors line-clamp-2 mb-3 leading-snug">${b.title}</h3>
              <p class="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4">${b.content}</p>
            </div>
            <div class="flex items-center justify-between pt-4 border-t border-brand-indigo/5 mt-4 text-[11px] text-slate-400">
              <span>By ${b.author}</span>
              <a href="#blog-details/${b._id}" class="text-brand-indigo hover:underline flex items-center gap-0.5">Read <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i></a>
            </div>
          </div>
        </div>
      `).join('');
    }
  } catch (error) {
    console.error(error);
  }

  const heroTitle = state.settings?.heroTitle || "Let's build something intelligent";
  const heroSubtitle = state.settings?.heroSubtitle || "Tell us about your project — we'll respond within one working day.";

  viewport.innerHTML = `
    <!-- Hero Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10 text-center space-y-8">
      <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-indigo/10 border border-brand-indigo/20 text-xs font-semibold text-brand-indigo mb-2">
        <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
        <span>Sunderland Software Innovation Node</span>
      </div>
      <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-[1.1] text-white">
        <span class="gradient-text">${heroTitle}</span>
      </h1>
      <p class="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
        ${heroSubtitle} Improve workplace velocity, automate employee workflows, and deploy rapid prototype wireframes in days.
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="#services" class="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-indigo via-brand-violet to-brand-cyan hover:opacity-95 text-white font-bold rounded-xl shadow-lg shadow-brand-indigo/20 transition-all flex items-center justify-center gap-2">
          Explore AI Services <i data-lucide="arrow-right" class="w-5 h-5"></i>
        </a>
        <button onclick="document.getElementById('chat-toggle').click()" class="w-full sm:w-auto px-8 py-4 bg-brand-dark/80 hover:bg-brand-dark border border-brand-indigo/25 hover:border-brand-indigo/50 text-slate-200 hover:text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2">
          <i data-lucide="bot" class="w-5 h-5 text-brand-indigo animate-bounce"></i> Run AI Virtual Assistant
        </button>
      </div>

      <!-- Live Statistics Grid -->
      <div class="pt-16 max-w-5xl mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div class="glass-panel p-6 rounded-2xl text-center border border-brand-indigo/10">
            <div class="text-3xl sm:text-4xl font-extrabold text-white font-mono">10x</div>
            <div class="text-xs text-slate-400 mt-1 uppercase tracking-wider">Onboarding Velocity</div>
          </div>
          <div class="glass-panel p-6 rounded-2xl text-center border border-brand-indigo/10">
            <div class="text-3xl sm:text-4xl font-extrabold text-white font-mono">£1.2M+</div>
            <div class="text-xs text-slate-400 mt-1 uppercase tracking-wider">Client Savings Saved</div>
          </div>
          <div class="glass-panel p-6 rounded-2xl text-center border border-brand-indigo/10">
            <div class="text-3xl sm:text-4xl font-extrabold text-white font-mono">82+</div>
            <div class="text-xs text-slate-400 mt-1 uppercase tracking-wider">Sunderland Prototypes</div>
          </div>
          <div class="glass-panel p-6 rounded-2xl text-center border border-brand-indigo/10">
            <div class="text-3xl sm:text-4xl font-extrabold text-white font-mono">24/7</div>
            <div class="text-xs text-slate-400 mt-1 uppercase tracking-wider">AI Assistant Triage</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Preview Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div class="space-y-3">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white leading-none">Our Core Services</h2>
          <p class="text-slate-400 text-sm max-w-xl">Rapid, affordable, and production-ready digital workflows built specifically for modern workforce teams.</p>
        </div>
        <a href="#services" class="mt-4 md:mt-0 text-sm font-semibold text-brand-indigo hover:text-white flex items-center gap-1 transition-colors">
          Browse All Services <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </a>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        ${servicePreviewHtml || `
          <div class="col-span-full text-center text-slate-500 py-8">
            Database empty or seeding incomplete. Please run seed.js.
          </div>
        `}
      </div>
    </section>

    <!-- Mid CTA Showcase -->
    <section class="bg-brand-darker/60 border-y border-brand-indigo/10 py-16 sm:py-24 relative z-10 overflow-hidden">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 justify-between">
        <div class="space-y-4 text-left">
          <h3 class="text-2xl sm:text-3xl font-extrabold text-white leading-tight">Need a customized prototype in days?</h3>
          <p class="text-sm text-slate-400 max-w-xl leading-relaxed">
            Click the floating bot icon in the bottom-right corner to interact with our virtual assistant. Tell it what you are building to generate a complete visual blueprint with pricing and database schemas.
          </p>
        </div>
        <button onclick="document.getElementById('chat-toggle').click()" class="shrink-0 px-6 py-3.5 rounded-xl bg-brand-indigo hover:bg-brand-indigo-hover text-white text-sm font-bold shadow-md shadow-brand-indigo/10 flex items-center gap-2">
          <i data-lucide="message-square" class="w-4 h-4"></i> Start Blueprint Chat
        </button>
      </div>
    </section>

    <!-- Blogs Preview Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div class="space-y-3">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white leading-none">Latest Insights</h2>
          <p class="text-slate-400 text-sm max-w-xl">Deep-dives into prompt-engineering, workspace software design trends, and next-generation employee automation.</p>
        </div>
        <a href="#blogs" class="mt-4 md:mt-0 text-sm font-semibold text-brand-indigo hover:text-white flex items-center gap-1 transition-colors">
          Browse All Articles <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </a>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        ${blogPreviewHtml || `
          <div class="col-span-full text-center text-slate-500 py-8">
            Check back soon for new publications.
          </div>
        `}
      </div>
    </section>

    <!-- Sunderland Spotlight Testimonial -->
    <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
      <div class="glass-panel p-8 rounded-3xl border border-brand-indigo/15 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
        <div class="w-24 h-24 rounded-2xl overflow-hidden shrink-0 border border-brand-indigo/25 shadow-lg shadow-brand-indigo/10">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80" alt="Sarah O'Connor" class="w-full h-full object-cover">
        </div>
        <div class="space-y-4">
          <div class="flex items-center gap-1 text-amber-400">
            <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
            <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
            <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
            <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
            <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
          </div>
          <blockquote class="text-base sm:text-lg italic text-slate-200 leading-relaxed font-medium">
            "AI-Solutions built our digital HR portal and integrated conversational bots in a matter of two weeks. Their prototyping module saved us thousands in upfront design specifications. Being Sunderland local made communication seamless!"
          </blockquote>
          <div>
            <cite class="text-sm font-bold text-white block not-italic">Sarah O'Connor</cite>
            <span class="text-xs text-slate-400 block mt-0.5">Director of Operations, Wearside Logistics Ltd.</span>
          </div>
        </div>
      </div>
    </section>
  `;
  lucide.createIcons();
}

// View: ABOUT US
async function renderAbout() {
  viewport.innerHTML = `
    <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 space-y-12">
      <!-- Title -->
      <div class="text-center space-y-4">
        <span class="text-xs font-bold text-brand-indigo uppercase tracking-widest bg-brand-indigo/10 px-3 py-1.5 rounded-full border border-brand-indigo/25">Who We Are</span>
        <h1 class="text-4xl sm:text-5xl font-extrabold text-white leading-tight">Empowering Teams Near & Far</h1>
        <p class="text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          From our base in Sunderland Software Centre, we help companies design, test, and ship automation tools that make the workplace feel human.
        </p>
      </div>

      <!-- Showcase Image -->
      <div class="h-64 sm:h-96 rounded-3xl overflow-hidden border border-brand-indigo/15 shadow-xl">
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" alt="AI-Solutions Workspace" class="w-full h-full object-cover">
      </div>

      <!-- Two Column Detail -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 pt-6">
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-white border-l-4 border-brand-indigo pl-4">Our Mission</h2>
          <p class="text-sm text-slate-400 leading-relaxed font-medium">
            ${state.settings?.mission || 'To innovate, promote, and deliver the future of the digital employee experience, with a strong focus on supporting people at work.'}
          </p>
          <p class="text-sm text-slate-400 leading-relaxed">
            By embedding AI early in software design cycles through instant mockups, we minimize project risk. This is the cornerstone of our strategy to make an impact globally.
          </p>
        </div>
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-white border-l-4 border-brand-cyan pl-4">The Sunderland Advantage</h2>
          <p class="text-sm text-slate-400 leading-relaxed">
            We are proud to operate in the Northeast tech hub. Sunderland Software Centre provides state-of-the-art server infrastructure and connecting links to local research universities.
          </p>
          <p class="text-sm text-slate-400 leading-relaxed">
            Whether you are a startup in the City of Sunderland or a global workforce team searching for automation pipelines, we serve client modules with equal precision.
          </p>
        </div>
      </div>

      <!-- Core Values -->
      <div class="pt-8">
        <h3 class="text-xl font-bold text-center text-white mb-8">Guided by Three Principles</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="glass-panel p-6 rounded-2xl border border-brand-indigo/10 space-y-3">
            <div class="w-10 h-10 rounded-lg bg-brand-indigo/10 text-brand-indigo flex items-center justify-center"><i data-lucide="zap" class="w-5 h-5"></i></div>
            <h4 class="text-base font-bold text-white">Velocity Over Red-Tape</h4>
            <p class="text-xs text-slate-400 leading-relaxed">Validate code architectures with visual prototypes in days rather than writing documentation for months.</p>
          </div>
          <div class="glass-panel p-6 rounded-2xl border border-brand-indigo/10 space-y-3">
            <div class="w-10 h-10 rounded-lg bg-brand-indigo/10 text-brand-indigo flex items-center justify-center"><i data-lucide="shield-check" class="w-5 h-5"></i></div>
            <h4 class="text-base font-bold text-white">Ethical AI Integrations</h4>
            <p class="text-xs text-slate-400 leading-relaxed">Ensure employee telemetry and chat datasets are securely stored, compliant, and hashed locally.</p>
          </div>
          <div class="glass-panel p-6 rounded-2xl border border-brand-indigo/10 space-y-3">
            <div class="w-10 h-10 rounded-lg bg-brand-indigo/10 text-brand-indigo flex items-center justify-center"><i data-lucide="users" class="w-5 h-5"></i></div>
            <h4 class="text-base font-bold text-white">Supportive Workspace</h4>
            <p class="text-xs text-slate-400 leading-relaxed">Build software that reduces cognitive overload, automates ticket routing, and eases workplace strain.</p>
          </div>
        </div>
      </div>
    </section>
  `;
  lucide.createIcons();
}

// View: SERVICES
async function renderServices() {
  try {
    const res = await fetch(`${API_URL}/services`);
    const data = await res.json();
    if (data.success) state.services = data.data;
  } catch (error) {
    console.error(error);
  }

  const servicesHtml = state.services.map(s => `
    <div class="interactive-card p-6 rounded-2xl border border-brand-indigo/10 flex flex-col justify-between h-full">
      <div>
        <div class="w-12 h-12 rounded-xl bg-brand-indigo/10 text-brand-indigo flex items-center justify-center mb-5 border border-brand-indigo/15 shadow-sm">
          <i data-lucide="${s.icon || 'cpu'}" class="w-6 h-6"></i>
        </div>
        <h3 class="text-xl font-bold text-white mb-2">${s.title}</h3>
        <p class="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-3">${s.description}</p>
        <div class="flex flex-wrap gap-2 mb-4">
          <span class="text-[10px] font-bold text-brand-indigo bg-brand-indigo/5 border border-brand-indigo/10 px-2 py-0.5 rounded-md flex items-center gap-1"><i data-lucide="clock" class="w-3 h-3"></i> ${s.deliveryTime || 'Varies'}</span>
          <span class="text-[10px] font-bold text-brand-cyan bg-brand-cyan/5 border border-brand-cyan/10 px-2 py-0.5 rounded-md flex items-center gap-1"><i data-lucide="tag" class="w-3 h-3"></i> Est. from £${s.price || 'Free'}</span>
        </div>
      </div>
      <div class="pt-4 border-t border-brand-indigo/5 mt-4 flex gap-3">
        <button onclick="openServiceDetailDrawer('${s._id}')" class="flex-1 py-2 rounded-lg bg-brand-dark hover:bg-brand-dark/80 border border-brand-indigo/15 text-xs text-slate-200 font-semibold transition-all text-center flex items-center justify-center gap-1.5">
          <i data-lucide="info" class="w-3.5 h-3.5"></i> Read Details
        </button>
        <button onclick="requestServiceEstimate('${s.title}')" class="py-2 px-4 rounded-lg bg-brand-indigo hover:bg-brand-indigo-hover text-xs text-white font-bold transition-all flex items-center justify-center gap-1">
          <i data-lucide="calculator" class="w-3.5 h-3.5"></i> Build
        </button>
      </div>
    </div>
  `).join('');

  viewport.innerHTML = `
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 space-y-12">
      <!-- Title -->
      <div class="text-center space-y-4">
        <span class="text-xs font-bold text-brand-indigo uppercase tracking-widest bg-brand-indigo/10 px-3 py-1.5 rounded-full border border-brand-indigo/25">Services Portfolio</span>
        <h1 class="text-4xl sm:text-5xl font-extrabold text-white leading-tight">Software Architectures We Deploy</h1>
        <p class="text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          From LLM virtual support agents to rapid layout prototyping pipelines, discover our engineering offerings.
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        ${servicesHtml || `
          <div class="col-span-full text-center text-slate-500 py-12">No services available. Seeding required.</div>
        `}
      </div>
    </section>
  `;
  lucide.createIcons();
}

// Open Service details inside Detail Drawer (Page-like SPA drawer experience)
async function openServiceDetailDrawer(id) {
  const service = state.services.find(s => s._id === id);
  if (!service) return;

  const drawer = document.getElementById('service-detail-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  
  if (!drawer || !backdrop) return;

  document.getElementById('drawer-title').textContent = service.title;
  document.getElementById('drawer-content').innerHTML = `
    <div class="rounded-xl overflow-hidden h-48 border border-brand-indigo/15 mb-6">
      <img src="${service.image}" alt="${service.title}" class="w-full h-full object-cover">
    </div>
    <div class="space-y-4">
      <div>
        <h4 class="text-xs uppercase tracking-wider text-slate-400 font-bold">Offer Description</h4>
        <p class="text-sm text-slate-200 mt-1 leading-relaxed">${service.description}</p>
      </div>
      <div>
        <h4 class="text-xs uppercase tracking-wider text-slate-400 font-bold">Detailed Capabilities</h4>
        <p class="text-sm text-slate-300 mt-2 leading-relaxed whitespace-pre-wrap bg-brand-dark/50 p-4 rounded-xl border border-brand-indigo/10 font-mono text-xs">${service.details || 'Standard custom service delivery parameters apply.'}</p>
      </div>
      <div class="grid grid-cols-2 gap-4 border-t border-brand-indigo/5 pt-4">
        <div>
          <span class="text-xs text-slate-400 block font-bold">Estimated Pricing</span>
          <span class="text-base font-extrabold text-emerald-400 mt-0.5 inline-block font-mono">From £${service.price}</span>
        </div>
        <div>
          <span class="text-xs text-slate-400 block font-bold">Turnaround Time</span>
          <span class="text-base font-extrabold text-brand-cyan mt-0.5 inline-block font-mono">${service.deliveryTime}</span>
        </div>
      </div>
      <div class="pt-6 border-t border-brand-indigo/10 flex gap-3">
        <button onclick="closeServiceDetailDrawer(); requestServiceEstimate('${service.title}')" class="flex-1 py-3 bg-brand-indigo hover:bg-brand-indigo-hover text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5">
          <i data-lucide="bot" class="w-4 h-4"></i> Query Prototype in AI Chat
        </button>
      </div>
    </div>
  `;

  drawer.classList.add('active');
  backdrop.classList.add('active');
  lucide.createIcons();

  // Close triggers
  backdrop.onclick = closeServiceDetailDrawer;
  document.getElementById('drawer-close').onclick = closeServiceDetailDrawer;
}

function closeServiceDetailDrawer() {
  document.getElementById('service-detail-drawer')?.classList.remove('active');
  document.getElementById('drawer-backdrop')?.classList.remove('active');
}

function requestServiceEstimate(serviceTitle) {
  const toggle = document.getElementById('chat-toggle');
  if (chatDrawer && chatDrawer.classList.contains('hidden') && toggle) {
    toggle.click();
  }
  chatInputField.value = `Estimate cost to build ${serviceTitle}`;
  chatInputForm.dispatchEvent(new Event('submit'));
}

// View: Service Details (Direct URL entry mapping)
async function renderServiceDetails(id) {
  if (state.services.length === 0) {
    try {
      const res = await fetch(`${API_URL}/services`);
      const data = await res.json();
      if (data.success) state.services = data.data;
    } catch (e) {}
  }
  
  const service = state.services.find(s => s._id === id);
  if (!service) {
    viewport.innerHTML = `
      <div class="text-center py-20">
        <h2 class="text-xl font-bold text-white mb-2">Service Not Found</h2>
        <a href="#services" class="text-brand-indigo hover:underline text-sm">Back to Services</a>
      </div>
    `;
    return;
  }

  viewport.innerHTML = `
    <section class="max-w-3xl mx-auto px-4 py-16 relative z-10 space-y-8">
      <a href="#services" class="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors">
        <i data-lucide="arrow-left" class="w-3.5 h-3.5"></i> Back to All Services
      </a>
      <div class="h-64 sm:h-96 rounded-3xl overflow-hidden border border-brand-indigo/15 shadow-xl">
        <img src="${service.image}" alt="${service.title}" class="w-full h-full object-cover">
      </div>
      <div class="space-y-6">
        <div class="flex items-center justify-between">
          <h1 class="text-3xl sm:text-4xl font-extrabold text-white">${service.title}</h1>
          <span class="text-xs font-bold text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full font-mono">From £${service.price}</span>
        </div>
        <p class="text-slate-300 leading-relaxed text-base">${service.description}</p>
        
        <div class="p-6 rounded-2xl glass-panel border border-brand-indigo/10 space-y-4">
          <h3 class="text-lg font-bold text-white">Full Specifications</h3>
          <div class="text-sm text-slate-400 leading-relaxed whitespace-pre-wrap">${service.details || 'Contact our Sunderland development desk for detailed blueprint mappings and SLA contracts.'}</div>
        </div>

        <div class="grid grid-cols-2 gap-6 pt-4 text-center">
          <div class="p-4 rounded-xl bg-brand-darker border border-brand-indigo/5">
            <span class="text-xs text-slate-400 block font-bold">DELIVERY ESTIMATE</span>
            <span class="text-lg font-bold text-white mt-1 block font-mono">${service.deliveryTime}</span>
          </div>
          <div class="p-4 rounded-xl bg-brand-darker border border-brand-indigo/5">
            <span class="text-xs text-slate-400 block font-bold">MAPPED STACK</span>
            <span class="text-lg font-bold text-brand-indigo mt-1 block font-mono">Tailored API Node</span>
          </div>
        </div>

        <div class="flex gap-4 pt-6">
          <button onclick="requestServiceEstimate('${service.title}')" class="flex-1 py-4 bg-brand-indigo hover:bg-brand-indigo-hover text-white text-sm font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2">
            <i data-lucide="bot" class="w-4 h-4 animate-bounce"></i> Run AI Estimate Check
          </button>
          <a href="#contact" class="px-6 py-4 bg-brand-dark border border-brand-indigo/20 hover:border-brand-indigo/40 text-slate-200 hover:text-white text-sm font-semibold rounded-xl transition-all flex items-center justify-center">
            Ask Sunderland Hub
          </a>
        </div>
      </div>
    </section>
  `;
  lucide.createIcons();
}


// View: EVENTS TIMELINE
async function renderEvents() {
  try {
    const res = await fetch(`${API_URL}/events`);
    const data = await res.json();
    if (data.success) state.events = data.data;
  } catch (error) {
    console.error(error);
  }

  const timelineHtml = state.events.map((e, index) => {
    const isEven = index % 2 === 0;
    const formattedDate = new Date(e.date).toLocaleDateString('en-GB', {
      day: 'numeric', month: 'short', year: 'numeric'
    });
    
    // Check registration status
    const isRegistered = state.user && e.attendees.some(att => att._id === state.user.id || att === state.user.id);
    
    return `
      <div class="relative timeline-item pl-10 pb-12">
        <!-- Badge icon node -->
        <div class="absolute left-0 top-1.5 w-10 h-10 rounded-xl bg-brand-indigo/10 border border-brand-indigo/25 text-brand-indigo flex items-center justify-center z-10 shadow-md">
          <i data-lucide="calendar" class="w-5 h-5"></i>
        </div>

        <!-- Card content -->
        <div class="glass-panel p-6 rounded-2xl border border-brand-indigo/10 hover:border-brand-indigo/20 transition-all flex flex-col md:flex-row gap-6 items-start">
          <div class="w-full md:w-48 h-32 rounded-xl overflow-hidden border border-brand-indigo/5 shrink-0">
            <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover">
          </div>
          <div class="flex-grow space-y-3">
            <div class="flex flex-wrap gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest items-center">
              <span class="text-brand-indigo bg-brand-indigo/5 border border-brand-indigo/10 px-2 py-0.5 rounded-md flex items-center gap-1"><i data-lucide="calendar" class="w-3 h-3"></i> ${formattedDate}</span>
              <span class="text-brand-cyan bg-brand-cyan/5 border border-brand-cyan/10 px-2 py-0.5 rounded-md flex items-center gap-1"><i data-lucide="clock" class="w-3 h-3"></i> ${e.time}</span>
              <span class="text-slate-400 bg-brand-dark px-2 py-0.5 rounded-md border border-brand-indigo/5 flex items-center gap-1"><i data-lucide="map-pin" class="w-3 h-3"></i> ${e.location}</span>
            </div>
            <h3 class="text-xl font-bold text-white">${e.title}</h3>
            <p class="text-xs text-slate-400 leading-relaxed">${e.description}</p>
            <div class="pt-4 border-t border-brand-indigo/5 flex justify-between items-center text-xs">
              <span class="text-slate-400"><i data-lucide="users" class="w-4 h-4 inline mr-1 text-brand-indigo"></i> ${e.attendees.length} Registered Attendees</span>
              
              ${isRegistered ? `
                <span class="px-4 py-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold rounded-lg flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5"></i> Registered</span>
              ` : `
                <button onclick="registerEvent('${e._id}')" class="px-4 py-2 bg-brand-indigo hover:bg-brand-indigo-hover text-white font-bold rounded-lg transition-all flex items-center gap-1.5 shadow-md shadow-brand-indigo/5">
                  <i data-lucide="user-plus" class="w-3.5 h-3.5"></i> Register Seats
                </button>
              `}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  viewport.innerHTML = `
    <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 space-y-12">
      <!-- Title -->
      <div class="text-center space-y-4">
        <span class="text-xs font-bold text-brand-indigo uppercase tracking-widest bg-brand-indigo/10 px-3 py-1.5 rounded-full border border-brand-indigo/25">Events Schedule</span>
        <h1 class="text-4xl sm:text-5xl font-extrabold text-white leading-tight">Digital Workplace Timelines</h1>
        <p class="text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          Join our Sunderland engineering meetups, virtual prototype workshops, and automation summits.
        </p>
      </div>

      <!-- Timeline wrapper -->
      <div class="relative max-w-4xl mx-auto pl-2 sm:pl-0 pt-6">
        <div class="absolute left-[19px] top-6 bottom-6 w-[2px] bg-brand-indigo/10"></div>
        ${timelineHtml || `
          <div class="text-center text-slate-500 py-12">No workplace meetups currently scheduled. Check back shortly.</div>
        `}
      </div>
    </section>
  `;
  lucide.createIcons();
}

// Register for event trigger
async function registerEvent(eventId) {
  if (!state.token) {
    showToast('Sign In Required', 'Please login to reserve seats at our Sunderland Software workshops.', 'warning');
    window.location.hash = '#auth';
    return;
  }

  try {
    const res = await fetch(`${API_URL}/events/${eventId}/register`, {
      method: 'POST',
      headers: getHeaders()
    });
    const data = await res.json();
    if (data.success) {
      showToast('Registration Successful!', 'Your seat is locked. Check notifications inside your dashboard.', 'success');
      renderEvents(); // Refresh event timeline status
    } else {
      showToast('Registration Failed', data.message || 'Error occurred.', 'error');
    }
  } catch (error) {
    console.error(error);
    showToast('Connection Failure', 'Cannot connect to database nodes.', 'error');
  }
}


// View: BLOGS
async function renderBlogs() {
  try {
    const res = await fetch(`${API_URL}/blogs`);
    const data = await res.json();
    if (data.success) state.blogs = data.data;
  } catch (error) {
    console.error(error);
  }

  // Get categories for filtering
  const categories = ['All', ...new Set(state.blogs.map(b => b.category))];

  viewport.innerHTML = `
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 space-y-12">
      <!-- Title -->
      <div class="text-center space-y-4">
        <span class="text-xs font-bold text-brand-indigo uppercase tracking-widest bg-brand-indigo/10 px-3 py-1.5 rounded-full border border-brand-indigo/25">Blogs & Articles</span>
        <h1 class="text-4xl sm:text-5xl font-extrabold text-white leading-tight">Software Design and AI Insights</h1>
        <p class="text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          Read latest technical guides, workspace automation workflows, and code optimization checklists.
        </p>
      </div>

      <!-- Categories Filter bar -->
      <div class="flex flex-wrap justify-center gap-3" id="blog-category-filters">
        ${categories.map(cat => `
          <button onclick="filterBlogGrid('${cat}')" class="blog-filter-btn px-4 py-2 text-xs font-bold rounded-xl border border-brand-indigo/10 bg-brand-dark/50 hover:bg-brand-dark text-slate-300 hover:text-white transition-all">
            ${cat}
          </button>
        `).join('')}
      </div>

      <!-- Blogs Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8" id="blog-cards-grid">
        <!-- Injected via helper -->
      </div>
    </section>
  `;
  lucide.createIcons();
  
  // Render grid initial
  filterBlogGrid('All');
}

function filterBlogGrid(category) {
  // Highlight active filter button
  document.querySelectorAll('.blog-filter-btn').forEach(btn => {
    if (btn.textContent.trim() === category) {
      btn.classList.add('bg-brand-indigo/10', 'border-brand-indigo/40', 'text-brand-indigo');
      btn.classList.remove('bg-brand-dark/50', 'border-brand-indigo/10', 'text-slate-300');
    } else {
      btn.classList.remove('bg-brand-indigo/10', 'border-brand-indigo/40', 'text-brand-indigo');
      btn.classList.add('bg-brand-dark/50', 'border-brand-indigo/10', 'text-slate-300');
    }
  });

  const grid = document.getElementById('blog-cards-grid');
  if (!grid) return;

  const filtered = category === 'All' ? state.blogs : state.blogs.filter(b => b.category === category);

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="col-span-full text-center text-slate-500 py-12">No articles found in this category.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(b => `
    <div class="interactive-card rounded-2xl overflow-hidden group flex flex-col h-full animate-fade-in">
      <div class="h-48 overflow-hidden relative border-b border-brand-indigo/10">
        <img src="${b.image}" alt="${b.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        <span class="absolute top-4 left-4 bg-brand-indigo text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-white/10 shadow-lg">${b.category}</span>
      </div>
      <div class="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 class="text-lg font-bold text-white group-hover:text-brand-indigo transition-colors line-clamp-2 mb-3 leading-snug">${b.title}</h3>
          <p class="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4">${b.content}</p>
        </div>
        <div class="flex items-center justify-between pt-4 border-t border-brand-indigo/5 mt-4 text-[11px] text-slate-400">
          <span>By ${b.author}</span>
          <a href="#blog-details/${b._id}" class="text-brand-indigo hover:underline flex items-center gap-0.5">Read Details <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i></a>
        </div>
      </div>
    </div>
  `).join('');
  lucide.createIcons();
}

// View: BLOG DETAILS
async function renderBlogDetails(id) {
  if (state.blogs.length === 0) {
    try {
      const res = await fetch(`${API_URL}/blogs`);
      const data = await res.json();
      if (data.success) state.blogs = data.data;
    } catch (e) {}
  }

  const blog = state.blogs.find(b => b._id === id);
  if (!blog) {
    viewport.innerHTML = `
      <div class="text-center py-20">
        <h2 class="text-xl font-bold text-white mb-2">Article Not Found</h2>
        <a href="#blogs" class="text-brand-indigo hover:underline text-sm">Back to Blogs</a>
      </div>
    `;
    return;
  }

  const formattedDate = new Date(blog.createdAt).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

  viewport.innerHTML = `
    <section class="max-w-3xl mx-auto px-4 py-16 relative z-10 space-y-8">
      <a href="#blogs" class="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors">
        <i data-lucide="arrow-left" class="w-3.5 h-3.5"></i> Back to All Articles
      </a>
      
      <!-- Article Header -->
      <div class="space-y-4">
        <div class="flex items-center gap-3 text-xs text-slate-400 font-bold uppercase tracking-wider">
          <span class="text-brand-indigo">${blog.category}</span>
          <span>•</span>
          <span>${formattedDate}</span>
        </div>
        <h1 class="text-3xl sm:text-5xl font-extrabold text-white leading-tight">${blog.title}</h1>
        <div class="flex items-center gap-3 text-sm text-slate-300">
          <div class="w-8 h-8 rounded-full bg-brand-indigo/10 flex items-center justify-center text-brand-indigo">
            <i data-lucide="user" class="w-4 h-4"></i>
          </div>
          <span>Published by: <strong>${blog.author}</strong></span>
        </div>
      </div>

      <!-- Feature Image -->
      <div class="h-64 sm:h-[400px] rounded-3xl overflow-hidden border border-brand-indigo/15 shadow-xl">
        <img src="${blog.image}" alt="${blog.title}" class="w-full h-full object-cover">
      </div>

      <!-- Article Content -->
      <article class="p-6 sm:p-8 rounded-3xl glass-panel border border-brand-indigo/10 text-slate-200 leading-relaxed text-sm sm:text-base space-y-6">
        <p class="whitespace-pre-line leading-loose">${blog.content}</p>
        
        <!-- Sunderland startup wrap note -->
        <div class="mt-8 p-4 rounded-xl bg-brand-indigo/5 border border-brand-indigo/15 text-xs text-slate-400 leading-relaxed flex gap-3">
          <i data-lucide="info" class="w-5 h-5 text-brand-indigo shrink-0 mt-0.5"></i>
          <div>
            AI-Solutions publishes code insights and workspace tutorials weekly. Subscribe to events timeline meetups or chat with our automated virtual bot widget in the bottom corner to test rapid blueprint specifications.
          </div>
        </div>
      </article>
    </section>
  `;
  lucide.createIcons();
}


// View: GALLERY
async function renderGallery() {
  try {
    const res = await fetch(`${API_URL}/gallery`);
    const data = await res.json();
    if (data.success) state.galleryItems = data.data;
  } catch (error) {
    console.error(error);
  }

  const categories = ['All', ...new Set(state.galleryItems.map(i => i.category))];

  viewport.innerHTML = `
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 space-y-12">
      <!-- Title -->
      <div class="text-center space-y-4">
        <span class="text-xs font-bold text-brand-indigo uppercase tracking-widest bg-brand-indigo/10 px-3 py-1.5 rounded-full border border-brand-indigo/25">Design Showcase</span>
        <h1 class="text-4xl sm:text-5xl font-extrabold text-white leading-tight">Visual Design & Engineering Studio</h1>
        <p class="text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          A showcase of our Sunderland office workspace, rapid wireframe layouts, team meetups, and artificial intelligence lab setups.
        </p>
      </div>

      <!-- Filter Categories -->
      <div class="flex flex-wrap justify-center gap-3">
        ${categories.map(cat => `
          <button onclick="filterGalleryGrid('${cat}')" class="gallery-filter-btn px-4 py-2 text-xs font-bold rounded-xl border border-brand-indigo/10 bg-brand-dark/50 hover:bg-brand-dark text-slate-300 hover:text-white transition-all">
            ${cat}
          </button>
        `).join('')}
      </div>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" id="gallery-items-grid">
        <!-- Injected via helper -->
      </div>
    </section>
  `;
  lucide.createIcons();
  
  // Render grid initial
  filterGalleryGrid('All');
}

function filterGalleryGrid(category) {
  // Highlight active
  document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
    if (btn.textContent.trim() === category) {
      btn.classList.add('bg-brand-indigo/10', 'border-brand-indigo/40', 'text-brand-indigo');
      btn.classList.remove('bg-brand-dark/50', 'border-brand-indigo/10', 'text-slate-300');
    } else {
      btn.classList.remove('bg-brand-indigo/10', 'border-brand-indigo/40', 'text-brand-indigo');
      btn.classList.add('bg-brand-dark/50', 'border-brand-indigo/10', 'text-slate-300');
    }
  });

  const grid = document.getElementById('gallery-items-grid');
  if (!grid) return;

  const filtered = category === 'All' ? state.galleryItems : state.galleryItems.filter(i => i.category === category);

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="col-span-full text-center text-slate-500 py-12">No showcase items found in this section.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(i => `
    <div class="interactive-card rounded-2xl overflow-hidden group border border-brand-indigo/10 shadow-md flex flex-col h-full animate-fade-in">
      <div class="h-60 overflow-hidden relative">
        <img src="${i.imageUrl}" alt="${i.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        <span class="absolute top-4 left-4 bg-brand-dark/85 backdrop-blur text-white text-[9px] font-bold px-2 py-0.5 rounded border border-brand-indigo/10 shadow-md uppercase tracking-wider">${i.category || 'Workspace'}</span>
      </div>
      <div class="p-4 bg-brand-darker/60 flex-grow">
        <h3 class="text-base font-bold text-white mb-1.5 leading-snug">${i.title || 'Studio Asset'}</h3>
        <p class="text-xs text-slate-400 leading-normal">${i.description || 'Sunderland team operations.'}</p>
      </div>
    </div>
  `).join('');
}


// View: CONTACT US & CUSTOMER FEEDBACK
async function renderContact() {
  viewport.innerHTML = `
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 space-y-12">
      <!-- Title -->
      <div class="text-center space-y-4">
        <span class="text-xs font-bold text-brand-indigo uppercase tracking-widest bg-brand-indigo/10 px-3 py-1.5 rounded-full border border-brand-indigo/25">Contact Hub</span>
        <h1 class="text-4xl sm:text-5xl font-extrabold text-white leading-tight">Get in Touch with Sunderland HQ</h1>
        <p class="text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          Submit custom software inquiries, SLA service issues, or provide feedback regarding your workspace digital experience.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
        
        <!-- Details Column -->
        <div class="space-y-8">
          <div class="glass-panel p-8 rounded-3xl border border-brand-indigo/10 space-y-6">
            <h3 class="text-xl font-bold text-white border-b border-brand-indigo/10 pb-4">Headquarters Coordinates</h3>
            
            <div class="space-y-4 text-sm">
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 rounded-xl bg-brand-indigo/10 border border-brand-indigo/25 text-brand-indigo flex items-center justify-center shrink-0">
                  <i data-lucide="map-pin" class="w-5 h-5"></i>
                </div>
                <div>
                  <strong class="text-white block">Office Address</strong>
                  <span class="text-slate-400 block mt-1" id="contact-address">${state.settings?.officeAddress || 'Sunderland Software Centre, Tavistock Place, Sunderland, UK'}</span>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="w-10 h-10 rounded-xl bg-brand-indigo/10 border border-brand-indigo/25 text-brand-indigo flex items-center justify-center shrink-0">
                  <i data-lucide="phone" class="w-5 h-5"></i>
                </div>
                <div>
                  <strong class="text-white block">Phone Line</strong>
                  <span class="text-slate-400 block mt-1" id="contact-phone">${state.settings?.officePhone || '+44 191 000 0000'}</span>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="w-10 h-10 rounded-xl bg-brand-indigo/10 border border-brand-indigo/25 text-brand-indigo flex items-center justify-center shrink-0">
                  <i data-lucide="mail" class="w-5 h-5"></i>
                </div>
                <div>
                  <strong class="text-white block">Email Inbox</strong>
                  <span class="text-slate-400 block mt-1" id="contact-email">${state.settings?.officeEmail || 'hello@ai-solutions.co.uk'}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Maps placeholder UI -->
          <div class="rounded-3xl border border-brand-indigo/10 overflow-hidden h-64 bg-brand-darker relative flex items-center justify-center p-6 text-center">
            <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div class="relative space-y-2 max-w-sm">
              <i data-lucide="map" class="w-10 h-10 text-brand-indigo mx-auto animate-pulse"></i>
              <h4 class="text-base font-bold text-white">Sunderland Tech Corridor Node</h4>
              <p class="text-xs text-slate-400 leading-normal">
                Located immediately adjacent to the Mowbray Park region, 3 minutes walk from Sunderland Central transit rail station.
              </p>
            </div>
          </div>
        </div>

        <!-- Contact Form / Feedback Column -->
        <div class="glass-panel p-8 rounded-3xl border border-brand-indigo/10">
          <h3 class="text-xl font-bold text-white border-b border-brand-indigo/10 pb-4 mb-6">Log Message / Feedback</h3>
          <form id="contact-us-form" class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-1.5">
                <label class="text-xs font-bold text-slate-400 uppercase">Your Name</label>
                <input type="text" id="contact-name" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-indigo" required>
              </div>
              <div class="space-y-1.5">
                <label class="text-xs font-bold text-slate-400 uppercase">Your Email</label>
                <input type="email" id="contact-email-input" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-indigo" required>
              </div>
            </div>
            
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-1.5">
                <label class="text-xs font-bold text-slate-400 uppercase">Phone (Optional)</label>
                <input type="text" id="contact-phone-input" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-indigo">
              </div>
              <div class="space-y-1.5">
                <label class="text-xs font-bold text-slate-400 uppercase">Subject Topic</label>
                <input type="text" id="contact-subject" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-indigo" required>
              </div>
            </div>

            <div class="space-y-1.5">
              <label class="text-xs font-bold text-slate-400 uppercase">Inquiry / Message text</label>
              <textarea id="contact-message" rows="5" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-indigo" required></textarea>
            </div>

            <button type="submit" class="w-full py-4 bg-gradient-to-r from-brand-indigo to-brand-violet hover:opacity-95 text-white font-bold rounded-xl text-xs transition-all shadow-md shadow-brand-indigo/10 flex items-center justify-center gap-1.5">
              <i data-lucide="send" class="w-4 h-4"></i> Submit Ticket Route
            </button>
          </form>
        </div>

      </div>
    </section>
  `;
  lucide.createIcons();

  // Populate logged in details automatically
  if (state.token && state.user) {
    document.getElementById('contact-name').value = state.user.name;
    document.getElementById('contact-email-input').value = state.user.email;
  }

  // Handle inquiry submission
  const contactForm = document.getElementById('contact-us-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const payload = {
        name: document.getElementById('contact-name').value.trim(),
        email: document.getElementById('contact-email-input').value.trim(),
        phone: document.getElementById('contact-phone-input').value.trim(),
        subject: document.getElementById('contact-subject').value.trim(),
        message: document.getElementById('contact-message').value.trim()
      };

      try {
        const res = await fetch(`${API_URL}/inquiries`, {
          method: 'POST',
          headers: getHeaders(),
          body: JSON.stringify(payload)
        });
        const data = await res.json();
        
        if (data.success) {
          showToast('Inquiry Submitted!', 'Our Sunderland technical consultants will reply within one business day.', 'success');
          contactForm.reset();
          if (state.token && state.user) {
            document.getElementById('contact-name').value = state.user.name;
            document.getElementById('contact-email-input').value = state.user.email;
          }
        } else {
          showToast('Submission Failed', data.message || 'Error logging message.', 'error');
        }
      } catch (error) {
        console.error(error);
        showToast('Network Error', 'Cannot establish pipeline to seed servers.', 'error');
      }
    });
  }
}


// View: SIGN IN & SIGN UP (Auth)
async function renderAuth() {
  viewport.innerHTML = `
    <section class="max-w-md mx-auto px-4 py-20 relative z-10 flex flex-col justify-center min-h-[75vh]">
      
      <!-- Tab card wrapper -->
      <div class="glass-panel p-8 rounded-3xl border border-brand-indigo/15 shadow-2xl">
        
        <!-- Toggle tabs headers -->
        <div class="flex border-b border-brand-indigo/10 pb-4 mb-6">
          <button onclick="toggleAuthTab('signin')" id="tab-btn-signin" class="flex-1 pb-2 text-center text-sm font-bold border-b-2 border-brand-indigo text-white transition-all">Sign In</button>
          <button onclick="toggleAuthTab('signup')" id="tab-btn-signup" class="flex-1 pb-2 text-center text-sm font-bold border-b-2 border-transparent text-slate-400 hover:text-white transition-all">Register</button>
        </div>

        <!-- Form container -->
        <div id="auth-forms-viewport">
          <!-- Injected via helper -->
        </div>

      </div>
    </section>
  `;
  lucide.createIcons();
  
  // Start with signin tab
  toggleAuthTab('signin');
}

function toggleAuthTab(tab) {
  const formsViewport = document.getElementById('auth-forms-viewport');
  const btnSignin = document.getElementById('tab-btn-signin');
  const btnSignup = document.getElementById('tab-btn-signup');

  if (!formsViewport || !btnSignin || !btnSignup) return;

  if (tab === 'signin') {
    btnSignin.classList.add('border-brand-indigo', 'text-white');
    btnSignin.classList.remove('border-transparent', 'text-slate-400');
    btnSignup.classList.remove('border-brand-indigo', 'text-white');
    btnSignup.classList.add('border-transparent', 'text-slate-400');

    formsViewport.innerHTML = `
      <form id="signin-form" class="space-y-4 animate-fade-in">
        <div class="space-y-1.5">
          <label class="text-[11px] font-bold text-slate-400 uppercase">Email Address</label>
          <input type="email" id="signin-email" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-indigo" placeholder="admin@ai-solutions.co.uk" required>
        </div>
        
        <div class="space-y-1.5">
          <div class="flex items-center justify-between">
            <label class="text-[11px] font-bold text-slate-400 uppercase">Account Password</label>
          </div>
          <input type="password" id="signin-password" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-indigo" placeholder="••••••••" required>
        </div>

        <button type="submit" class="w-full py-3.5 bg-gradient-to-r from-brand-indigo to-brand-violet hover:opacity-95 text-white font-bold rounded-xl text-xs transition-all shadow-md shadow-brand-indigo/10 flex items-center justify-center gap-1.5">
          <i data-lucide="log-in" class="w-4 h-4"></i> Authenticate Account
        </button>
      </form>
    `;
    lucide.createIcons();

    // Bind event
    document.getElementById('signin-form')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('signin-email').value.trim();
      const password = document.getElementById('signin-password').value;

      try {
        const res = await fetch(`${API_URL}/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
        const data = await res.json();
        
        if (data.success) {
          state.token = data.token;
          state.user = data.user;
          localStorage.setItem('token', data.token);
          
          showToast('Login Successful', `Welcome back, ${data.user.name}! Access modules logged in.`, 'success');
          updateNavUI();
          window.location.hash = '#dashboard';
        } else {
          showToast('Authentication Failed', data.message || 'Incorrect email or security pass.', 'error');
        }
      } catch (error) {
        console.error(error);
        showToast('Connection Error', 'Cannot link to authentication servers.', 'error');
      }
    });

  } else {
    btnSignup.classList.add('border-brand-indigo', 'text-white');
    btnSignup.classList.remove('border-transparent', 'text-slate-400');
    btnSignin.classList.remove('border-brand-indigo', 'text-white');
    btnSignin.classList.add('border-transparent', 'text-slate-400');

    formsViewport.innerHTML = `
      <form id="signup-form" class="space-y-4 animate-fade-in">
        <div class="space-y-1.5">
          <label class="text-[11px] font-bold text-slate-400 uppercase">Full Name</label>
          <input type="text" id="signup-name" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-indigo" placeholder="E.g. Jane Smith" required>
        </div>

        <div class="space-y-1.5">
          <label class="text-[11px] font-bold text-slate-400 uppercase">Email Address</label>
          <input type="email" id="signup-email" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-indigo" placeholder="jane@example.com" required>
        </div>

        <div class="space-y-1.5">
          <label class="text-[11px] font-bold text-slate-400 uppercase">Create Password (Min 6 chars)</label>
          <input type="password" id="signup-password" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-indigo" placeholder="••••••••" required>
        </div>

        <button type="submit" class="w-full py-3.5 bg-gradient-to-r from-brand-indigo to-brand-violet hover:opacity-95 text-white font-bold rounded-xl text-xs transition-all shadow-md shadow-brand-indigo/10 flex items-center justify-center gap-1.5">
          <i data-lucide="user-plus" class="w-4 h-4"></i> Create New Profile
        </button>
      </form>
    `;
    lucide.createIcons();

    // Bind event
    document.getElementById('signup-form')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('signup-name').value.trim();
      const email = document.getElementById('signup-email').value.trim();
      const password = document.getElementById('signup-password').value;

      try {
        const res = await fetch(`${API_URL}/auth/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password })
        });
        const data = await res.json();

        if (data.success) {
          state.token = data.token;
          state.user = data.user;
          localStorage.setItem('token', data.token);

          showToast('Registration Success!', `Profile registered. Welcome, ${data.user.name}!`, 'success');
          updateNavUI();
          window.location.hash = '#dashboard';
        } else {
          showToast('Registration Error', data.message || 'Validation constraints failed.', 'error');
        }
      } catch (error) {
        console.error(error);
        showToast('Connection Error', 'Cannot establish registry link.', 'error');
      }
    });
  }
}


// View: USER & ADMIN DASHBOARDS
async function renderDashboard() {
  if (!state.token || !state.user) {
    showToast('Session Expired', 'Please login to access your software dashboards.', 'warning');
    window.location.hash = '#auth';
    return;
  }

  // Double check me query
  await fetchMe();

  const isAdmin = state.user.role === 'admin';

  // Base Frame Structure: Dashboard layout uses sidebar navigation and app viewport grid
  viewport.innerHTML = `
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10 flex flex-col lg:flex-row gap-8">
      
      <!-- Sidebar Panel Navigation -->
      <aside class="w-full lg:w-64 shrink-0 rounded-2xl glass-panel border border-brand-indigo/10 overflow-hidden flex flex-col bg-brand-darker/40">
        <!-- Sidebar Header User Identity -->
        <div class="p-6 border-b border-brand-indigo/10 bg-brand-dark text-center">
          <div class="w-16 h-16 rounded-full bg-brand-indigo/10 border border-brand-indigo/25 text-brand-indigo flex items-center justify-center mx-auto mb-3 shadow-inner">
            <i data-lucide="${isAdmin ? 'shield' : 'user'}" class="w-8 h-8"></i>
          </div>
          <h4 class="text-sm font-bold text-white truncate">${state.user.name}</h4>
          <span class="text-[10px] font-bold text-brand-cyan uppercase tracking-widest bg-brand-cyan/10 px-2 py-0.5 rounded border border-brand-cyan/20 inline-block mt-1">${state.user.role} Account</span>
        </div>

        <!-- Sidebar Tab Navigation Links -->
        <nav class="flex-grow py-4 flex flex-col gap-0.5" id="dash-sidebar-nav">
          <!-- Injected via helper -->
        </nav>
      </aside>

      <!-- Dashboard Central Content Viewport -->
      <div class="flex-grow glass-panel p-6 sm:p-8 rounded-3xl border border-brand-indigo/10 min-h-[60vh] bg-brand-darker/20" id="dash-content-viewport">
        <!-- Tab Content dynamically loaded -->
      </div>

    </section>
  `;
  lucide.createIcons();

  // Populate sidebar tabs based on role
  renderDashboardSidebar();
  
  // Set tab initial
  switchDashboardTab(state.activeDashboardTab);
}

function renderDashboardSidebar() {
  const sidebarNav = document.getElementById('dash-sidebar-nav');
  if (!sidebarNav) return;

  const isAdmin = state.user.role === 'admin';
  let tabs = [];

  if (isAdmin) {
    tabs = [
      { id: 'profile', label: 'Admin Info', icon: 'shield' },
      { id: 'manage-services', label: 'Manage Services', icon: 'cpu' },
      { id: 'manage-blogs', label: 'Manage Blogs', icon: 'file-text' },
      { id: 'manage-events', label: 'Manage Events', icon: 'calendar' },
      { id: 'manage-gallery', label: 'Manage Gallery', icon: 'image' },
      { id: 'manage-contacts', label: 'Manage Inquiries', icon: 'mail' },
      { id: 'analytics', label: 'Analytics Board', icon: 'pie-chart' },
      { id: 'settings', label: 'Site Settings', icon: 'settings' },
      { id: 'password', label: 'Change Password', icon: 'key' }
    ];
  } else {
    tabs = [
      { id: 'profile', label: 'Profile Settings', icon: 'user' },
      { id: 'user-inquiries', label: 'My Inquiries', icon: 'message-square' },
      { id: 'user-events', label: 'Registered Events', icon: 'calendar' },
      { id: 'password', label: 'Change Password', icon: 'key' }
    ];
  }

  sidebarNav.innerHTML = tabs.map(t => `
    <button onclick="switchDashboardTab('${t.id}')" id="dash-tab-btn-${t.id}" class="w-full text-left px-6 py-3.5 text-xs font-semibold text-slate-400 hover:text-white hover:bg-brand-dark/20 transition-all flex items-center gap-3 border-l-4 border-transparent">
      <i data-lucide="${t.icon}" class="w-4 h-4 shrink-0"></i>
      <span>${t.label}</span>
    </button>
  `).join('');
  lucide.createIcons();
}

function switchDashboardTab(tabId) {
  state.activeDashboardTab = tabId;
  
  // Highlight active button in sidebar
  document.querySelectorAll('[id^="dash-tab-btn-"]').forEach(btn => {
    btn.classList.remove('dash-active-tab');
  });
  
  const activeBtn = document.getElementById(`dash-tab-btn-${tabId}`);
  if (activeBtn) activeBtn.classList.add('dash-active-tab');

  // Trigger tab content rendering
  const tabViewports = {
    'profile': renderDashProfile,
    'manage-services': renderDashManageServices,
    'manage-blogs': renderDashManageBlogs,
    'manage-events': renderDashManageEvents,
    'manage-gallery': renderDashManageGallery,
    'manage-contacts': renderDashManageContacts,
    'analytics': renderDashAnalytics,
    'settings': renderDashSettings,
    'password': renderDashPassword,
    // User specific tabs
    'user-inquiries': renderDashUserInquiries,
    'user-events': renderDashUserEvents
  };

  const renderer = tabViewports[tabId] || renderDashProfile;
  
  const contentEl = document.getElementById('dash-content-viewport');
  if (contentEl) {
    contentEl.innerHTML = `
      <div class="flex items-center justify-center min-h-[30vh]">
        <div class="w-8 h-8 rounded-full border-4 border-brand-indigo border-t-transparent animate-spin"></div>
      </div>
    `;
    renderer();
  }
}


// SUB-RENDERERS FOR DASHBOARD TABS

// Tab: PROFILE (Used by both admin and user)
async function renderDashProfile() {
  const contentEl = document.getElementById('dash-content-viewport');
  if (!contentEl) return;

  // Load user notifications
  let notificationHtml = '';
  try {
    const res = await fetch(`${API_URL}/notifications`, { headers: getHeaders() });
    const data = await res.json();
    if (data.success) {
      state.notifications = data.data;
      
      const unreadCount = data.data.filter(n => !n.read).length;
      const unreadBadge = unreadCount > 0 ? `<span class="bg-brand-indigo text-white font-bold text-[10px] px-2 py-0.5 rounded-full border border-white/15 shadow animate-pulse">${unreadCount} New</span>` : '';
      
      const notificationRows = data.data.map(n => `
        <div class="p-4 rounded-xl border border-brand-indigo/10 ${n.read ? 'bg-brand-darker/20 opacity-80' : 'bg-brand-indigo/5 border-brand-indigo/25'} text-xs flex justify-between gap-4 items-start">
          <div class="space-y-1">
            <h5 class="font-bold text-white flex items-center gap-1.5">
              ${!n.read ? `<span class="h-1.5 w-1.5 rounded-full bg-brand-indigo inline-block"></span>` : ''}
              ${n.title}
            </h5>
            <p class="text-slate-400 leading-relaxed">${n.message}</p>
            <span class="text-[9px] text-slate-500 block">${new Date(n.createdAt).toLocaleDateString()} at ${new Date(n.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
          </div>
          <div class="flex gap-2">
            ${!n.read ? `<button onclick="markNotificationRead('${n._id}')" class="p-1 rounded-md bg-brand-indigo/10 text-brand-indigo hover:text-white transition-colors" title="Mark Read"><i data-lucide="check" class="w-3.5 h-3.5"></i></button>` : ''}
            <button onclick="deleteNotification('${n._id}')" class="p-1 rounded-md bg-rose-500/10 text-rose-400 hover:text-white transition-colors" title="Delete"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
          </div>
        </div>
      `).join('');

      notificationHtml = `
        <div class="space-y-4">
          <div class="flex items-center justify-between border-b border-brand-indigo/10 pb-3">
            <h4 class="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
              <i data-lucide="bell" class="w-4 h-4 text-brand-indigo"></i> Inbox System Messages ${unreadBadge}
            </h4>
          </div>
          <div class="space-y-3 max-h-[300px] overflow-y-auto pr-1">
            ${notificationRows || '<div class="text-center text-slate-500 text-xs py-8">Inbox is empty.</div>'}
          </div>
        </div>
      `;
    }
  } catch (error) {
    console.error(error);
  }

  contentEl.innerHTML = `
    <div class="space-y-8 animate-fade-in">
      <div class="border-b border-brand-indigo/10 pb-4">
        <h3 class="text-2xl font-extrabold text-white">Security & Profile</h3>
        <p class="text-xs text-slate-400 mt-1">Review account profile credentials and check system notifications.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        <!-- Info details -->
        <div class="glass-panel p-6 rounded-2xl border border-brand-indigo/10 space-y-4">
          <h4 class="text-sm font-bold text-slate-200 uppercase tracking-wider border-b border-brand-indigo/10 pb-2">Profile Card</h4>
          <div class="text-xs space-y-3">
            <div>
              <span class="text-slate-450 block font-bold">ACCOUNT NAME</span>
              <span class="text-slate-200 font-medium text-sm mt-0.5 block">${state.user.name}</span>
            </div>
            <div>
              <span class="text-slate-450 block font-bold">SECURE EMAIL</span>
              <span class="text-slate-200 font-medium text-sm mt-0.5 block">${state.user.email}</span>
            </div>
            <div>
              <span class="text-slate-450 block font-bold">ROLE SECURITY LEVEL</span>
              <span class="text-brand-cyan font-bold text-xs mt-0.5 inline-block uppercase tracking-wider px-2 py-0.5 rounded bg-brand-cyan/10 border border-brand-cyan/20">${state.user.role}</span>
            </div>
            <div>
              <span class="text-slate-450 block font-bold">CREATION TIMESTAMP</span>
              <span class="text-slate-400 mt-0.5 block">${new Date(state.user.createdAt).toLocaleString()}</span>
            </div>
          </div>
        </div>

        <!-- Notifications -->
        <div>
          ${notificationHtml}
        </div>

      </div>
    </div>
  `;
  lucide.createIcons();
}

async function markNotificationRead(id) {
  try {
    const res = await fetch(`${API_URL}/notifications/${id}`, {
      method: 'PUT',
      headers: getHeaders()
    });
    const data = await res.json();
    if (data.success) {
      showToast('Notification Marked Read', 'Security notification read.', 'success');
      renderDashProfile();
    }
  } catch (e) {
    console.error(e);
  }
}

async function deleteNotification(id) {
  try {
    const res = await fetch(`${API_URL}/notifications/${id}`, {
      method: 'DELETE',
      headers: getHeaders()
    });
    const data = await res.json();
    if (data.success) {
      showToast('Notification Removed', 'System notification permanently removed.', 'info');
      renderDashProfile();
    }
  } catch (e) {
    console.error(e);
  }
}


// Tab: MANAGE SERVICES (Admin Only CRUD)
async function renderDashManageServices() {
  const contentEl = document.getElementById('dash-content-viewport');
  if (!contentEl) return;

  // Load current services list
  try {
    const res = await fetch(`${API_URL}/services`);
    const data = await res.json();
    if (data.success) state.services = data.data;
  } catch (e) {}

  const rows = state.services.map(s => `
    <tr class="border-b border-brand-indigo/5 text-xs hover:bg-brand-dark/20">
      <td class="px-6 py-4 font-bold text-white">${s.title}</td>
      <td class="px-6 py-4 text-slate-400 font-mono truncate max-w-[120px]">${s.deliveryTime}</td>
      <td class="px-6 py-4 font-bold text-emerald-400 font-mono">£${s.price}</td>
      <td class="px-6 py-4 flex gap-2">
        <button onclick="editServiceModal('${s._id}')" class="px-2.5 py-1.5 bg-brand-indigo/10 border border-brand-indigo/20 rounded-md hover:bg-brand-indigo text-slate-200 hover:text-white transition-all">Edit</button>
        <button onclick="deleteServiceTrigger('${s._id}')" class="px-2.5 py-1.5 bg-rose-500/10 border border-rose-500/20 rounded-md hover:bg-rose-500 text-slate-200 hover:text-white transition-all">Delete</button>
      </td>
    </tr>
  `).join('');

  contentEl.innerHTML = `
    <div class="space-y-6 animate-fade-in">
      <div class="flex items-center justify-between border-b border-brand-indigo/10 pb-4">
        <div>
          <h3 class="text-2xl font-extrabold text-white">Manage Services</h3>
          <p class="text-xs text-slate-400 mt-1">Admin database control dashboard: Create, read, update, and delete service modules.</p>
        </div>
        <button onclick="openServiceCreateModal()" class="px-4 py-2.5 bg-brand-indigo hover:bg-brand-indigo-hover text-white text-xs font-bold rounded-xl shadow transition-all flex items-center gap-1.5">
          <i data-lucide="plus-circle" class="w-4 h-4"></i> Add Service
        </button>
      </div>

      <!-- Services Table -->
      <div class="overflow-x-auto border border-brand-indigo/10 rounded-2xl bg-brand-darker/30">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-brand-dark/40 border-b border-brand-indigo/10 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <th class="px-6 py-4">Service Offer</th>
              <th class="px-6 py-4">Timeframe</th>
              <th class="px-6 py-4">Est. Price</th>
              <th class="px-6 py-4">Database Controls</th>
            </tr>
          </thead>
          <tbody>
            ${rows || '<tr><td colspan="4" class="px-6 py-8 text-center text-slate-500">No records found. Seeding required.</td></tr>'}
          </tbody>
        </table>
      </div>

      <!-- Service Form Modal Context Placeholder -->
      <div id="crud-modal-container"></div>
    </div>
  `;
  lucide.createIcons();
}

function openServiceCreateModal() {
  state.currentEditingItem = null;
  renderServiceFormModal();
}

function editServiceModal(id) {
  const service = state.services.find(s => s._id === id);
  if (!service) return;
  state.currentEditingItem = service;
  renderServiceFormModal(service);
}

function renderServiceFormModal(item = null) {
  const container = document.getElementById('crud-modal-container');
  if (!container) return;

  const isEdit = !!item;
  
  container.innerHTML = `
    <div class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div class="glass-panel p-6 sm:p-8 rounded-3xl border border-brand-indigo/15 max-w-lg w-full bg-brand-darker space-y-4">
        <div class="flex items-center justify-between border-b border-brand-indigo/10 pb-3">
          <h4 class="text-base font-bold text-white">${isEdit ? 'Update Service Offer' : 'Register New Service Offer'}</h4>
          <button onclick="closeCrudModal()" class="p-1 rounded-lg hover:bg-brand-dark text-slate-400 hover:text-white transition-colors"><i data-lucide="x" class="w-4 h-4"></i></button>
        </div>

        <form id="service-crud-form" class="space-y-3 text-xs">
          <div class="grid grid-cols-2 gap-3">
            <div class="space-y-1">
              <label class="text-slate-405 font-bold uppercase">Service Title</label>
              <input type="text" id="ms-title" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-lg px-3 py-2 text-white" value="${item ? item.title : ''}" required>
            </div>
            <div class="space-y-1">
              <label class="text-slate-405 font-bold uppercase">Lucide Icon Class</label>
              <input type="text" id="ms-icon" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-lg px-3 py-2 text-white" value="${item ? item.icon : 'cpu'}" required>
            </div>
          </div>

          <div class="space-y-1">
            <label class="text-slate-405 font-bold uppercase">Brief description</label>
            <input type="text" id="ms-description" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-lg px-3 py-2 text-white" value="${item ? item.description : ''}" required>
          </div>

          <div class="space-y-1">
            <label class="text-slate-405 font-bold uppercase">Image URL</label>
            <input type="url" id="ms-image" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-lg px-3 py-2 text-white" value="${item ? item.image : 'https://images.unsplash.com/photo-1531746790731-6c087fecd772?auto=format&fit=crop&w=600&q=80'}" required>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div class="space-y-1">
              <label class="text-slate-405 font-bold uppercase">Pricing estimate (£)</label>
              <input type="number" id="ms-price" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-lg px-3 py-2 text-white" value="${item ? item.price : 1000}" required>
            </div>
            <div class="space-y-1">
              <label class="text-slate-405 font-bold uppercase">Delivery turnaround</label>
              <input type="text" id="ms-delivery" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-lg px-3 py-2 text-white" value="${item ? item.deliveryTime : '3-5 days'}" required>
            </div>
          </div>

          <div class="space-y-1">
            <label class="text-slate-405 font-bold uppercase">Detailed Specs (Markdown / Text)</label>
            <textarea id="ms-details" rows="4" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-lg px-3 py-2 text-white">${item ? item.details || '' : ''}</textarea>
          </div>

          <button type="submit" class="w-full py-3 bg-brand-indigo hover:bg-brand-indigo-hover text-white font-bold rounded-xl transition-all shadow-md mt-2 flex items-center justify-center gap-1.5">
            <i data-lucide="check" class="w-4 h-4"></i> ${isEdit ? 'Save Changes' : 'Publish Offer'}
          </button>
        </form>
      </div>
    </div>
  `;
  lucide.createIcons();

  // Handle CRUD Form submit
  document.getElementById('service-crud-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const payload = {
      title: document.getElementById('ms-title').value.trim(),
      icon: document.getElementById('ms-icon').value.trim(),
      description: document.getElementById('ms-description').value.trim(),
      image: document.getElementById('ms-image').value.trim(),
      price: Number(document.getElementById('ms-price').value),
      deliveryTime: document.getElementById('ms-delivery').value.trim(),
      details: document.getElementById('ms-details').value.trim()
    };

    const url = isEdit ? `${API_URL}/services/${item._id}` : `${API_URL}/services`;
    const method = isEdit ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: getHeaders(),
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      
      if (data.success) {
        showToast(isEdit ? 'Service Updated' : 'Service Published', `"${payload.title}" has been synced to public catalog.`, 'success');
        closeCrudModal();
        renderDashManageServices();
      } else {
        showToast('CRUD Error', data.message || 'Validation failed.', 'error');
      }
    } catch (error) {
      console.error(error);
      showToast('Network Error', 'Cannot reach backend seed database.', 'error');
    }
  });
}

function closeCrudModal() {
  const container = document.getElementById('crud-modal-container');
  if (container) container.innerHTML = '';
}

async function deleteServiceTrigger(id) {
  if (!confirm('Are you sure you want to delete this service permanently?')) return;
  try {
    const res = await fetch(`${API_URL}/services/${id}`, {
      method: 'DELETE',
      headers: getHeaders()
    });
    const data = await res.json();
    if (data.success) {
      showToast('Service Deleted', 'Service record deleted from catalog.', 'info');
      renderDashManageServices();
    }
  } catch (error) {
    console.error(error);
  }
}


// Tab: MANAGE BLOGS (Admin Only CRUD)
async function renderDashManageBlogs() {
  const contentEl = document.getElementById('dash-content-viewport');
  if (!contentEl) return;

  try {
    const res = await fetch(`${API_URL}/blogs`);
    const data = await res.json();
    if (data.success) state.blogs = data.data;
  } catch (e) {}

  const rows = state.blogs.map(b => `
    <tr class="border-b border-brand-indigo/5 text-xs hover:bg-brand-dark/20">
      <td class="px-6 py-4 font-bold text-white truncate max-w-[150px]">${b.title}</td>
      <td class="px-6 py-4 text-slate-400">${b.category}</td>
      <td class="px-6 py-4 text-slate-400">${b.author}</td>
      <td class="px-6 py-4 flex gap-2">
        <button onclick="editBlogModal('${b._id}')" class="px-2.5 py-1.5 bg-brand-indigo/10 border border-brand-indigo/20 rounded-md hover:bg-brand-indigo text-slate-200 hover:text-white transition-all">Edit</button>
        <button onclick="deleteBlogTrigger('${b._id}')" class="px-2.5 py-1.5 bg-rose-500/10 border border-rose-500/20 rounded-md hover:bg-rose-500 text-slate-200 hover:text-white transition-all">Delete</button>
      </td>
    </tr>
  `).join('');

  contentEl.innerHTML = `
    <div class="space-y-6 animate-fade-in">
      <div class="flex items-center justify-between border-b border-brand-indigo/10 pb-4">
        <div>
          <h3 class="text-2xl font-extrabold text-white">Manage Blogs</h3>
          <p class="text-xs text-slate-400 mt-1">Admin database blog manager: Write guides and publish technical articles.</p>
        </div>
        <button onclick="openBlogCreateModal()" class="px-4 py-2.5 bg-brand-indigo hover:bg-brand-indigo-hover text-white text-xs font-bold rounded-xl shadow transition-all flex items-center gap-1.5">
          <i data-lucide="plus-circle" class="w-4 h-4"></i> Add Article
        </button>
      </div>

      <!-- Blogs Table -->
      <div class="overflow-x-auto border border-brand-indigo/10 rounded-2xl bg-brand-darker/30">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-brand-dark/40 border-b border-brand-indigo/10 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <th class="px-6 py-4">Title</th>
              <th class="px-6 py-4">Category</th>
              <th class="px-6 py-4">Author</th>
              <th class="px-6 py-4">Database Controls</th>
            </tr>
          </thead>
          <tbody>
            ${rows || '<tr><td colspan="4" class="px-6 py-8 text-center text-slate-500">No blog posts available.</td></tr>'}
          </tbody>
        </table>
      </div>

      <div id="crud-modal-container"></div>
    </div>
  `;
  lucide.createIcons();
}

function openBlogCreateModal() {
  state.currentEditingItem = null;
  renderBlogFormModal();
}

function editBlogModal(id) {
  const blog = state.blogs.find(b => b._id === id);
  if (!blog) return;
  state.currentEditingItem = blog;
  renderBlogFormModal(blog);
}

function renderBlogFormModal(item = null) {
  const container = document.getElementById('crud-modal-container');
  if (!container) return;

  const isEdit = !!item;

  container.innerHTML = `
    <div class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div class="glass-panel p-6 sm:p-8 rounded-3xl border border-brand-indigo/15 max-w-lg w-full bg-brand-darker space-y-4">
        <div class="flex items-center justify-between border-b border-brand-indigo/10 pb-3">
          <h4 class="text-base font-bold text-white">${isEdit ? 'Update Blog Post' : 'Draft New Blog Post'}</h4>
          <button onclick="closeCrudModal()" class="p-1 rounded-lg hover:bg-brand-dark text-slate-400 hover:text-white transition-colors"><i data-lucide="x" class="w-4 h-4"></i></button>
        </div>

        <form id="blog-crud-form" class="space-y-3 text-xs">
          <div class="space-y-1">
            <label class="text-slate-405 font-bold uppercase">Article Title</label>
            <input type="text" id="mb-title" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-lg px-3 py-2 text-white" value="${item ? item.title : ''}" required>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div class="space-y-1">
              <label class="text-slate-405 font-bold uppercase">Category Tag</label>
              <input type="text" id="mb-category" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-lg px-3 py-2 text-white" value="${item ? item.category : 'Web Development'}" required>
            </div>
            <div class="space-y-1">
              <label class="text-slate-405 font-bold uppercase">Author Name</label>
              <input type="text" id="mb-author" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-lg px-3 py-2 text-white" value="${item ? item.author : 'Marcus Cole (CTO)'}" required>
            </div>
          </div>

          <div class="space-y-1">
            <label class="text-slate-405 font-bold uppercase">Feature Image URL</label>
            <input type="url" id="mb-image" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-lg px-3 py-2 text-white" value="${item ? item.image : 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80'}" required>
          </div>

          <div class="space-y-1">
            <label class="text-slate-405 font-bold uppercase">Content Text (supports long paragraphs)</label>
            <textarea id="mb-content" rows="6" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-lg px-3 py-2 text-white" required>${item ? item.content : ''}</textarea>
          </div>

          <button type="submit" class="w-full py-3 bg-brand-indigo hover:bg-brand-indigo-hover text-white font-bold rounded-xl transition-all shadow-md mt-2 flex items-center justify-center gap-1.5">
            <i data-lucide="check" class="w-4 h-4"></i> ${isEdit ? 'Save Changes' : 'Publish Article'}
          </button>
        </form>
      </div>
    </div>
  `;
  lucide.createIcons();

  document.getElementById('blog-crud-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const payload = {
      title: document.getElementById('mb-title').value.trim(),
      category: document.getElementById('mb-category').value.trim(),
      author: document.getElementById('mb-author').value.trim(),
      image: document.getElementById('mb-image').value.trim(),
      content: document.getElementById('mb-content').value.trim()
    };

    const url = isEdit ? `${API_URL}/blogs/${item._id}` : `${API_URL}/blogs`;
    const method = isEdit ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: getHeaders(),
        body: JSON.stringify(payload)
      });
      const data = await res.json();

      if (data.success) {
        showToast(isEdit ? 'Article Saved' : 'Article Published', `"${payload.title}" has been synced online.`, 'success');
        closeCrudModal();
        renderDashManageBlogs();
      } else {
        showToast('CRUD Error', data.message || 'Write failed.', 'error');
      }
    } catch (error) {
      console.error(error);
      showToast('Network Error', 'Cannot reach database server.', 'error');
    }
  });
}

async function deleteBlogTrigger(id) {
  if (!confirm('Are you sure you want to delete this blog post permanently?')) return;
  try {
    const res = await fetch(`${API_URL}/blogs/${id}`, {
      method: 'DELETE',
      headers: getHeaders()
    });
    const data = await res.json();
    if (data.success) {
      showToast('Article Deleted', 'Article permanently deleted from system.', 'info');
      renderDashManageBlogs();
    }
  } catch (error) {
    console.error(error);
  }
}


// Tab: MANAGE EVENTS (Admin Only CRUD)
async function renderDashManageEvents() {
  const contentEl = document.getElementById('dash-content-viewport');
  if (!contentEl) return;

  try {
    const res = await fetch(`${API_URL}/events`);
    const data = await res.json();
    if (data.success) state.events = data.data;
  } catch (e) {}

  const rows = state.events.map(e => `
    <tr class="border-b border-brand-indigo/5 text-xs hover:bg-brand-dark/20">
      <td class="px-6 py-4 font-bold text-white truncate max-w-[150px]">${e.title}</td>
      <td class="px-6 py-4 text-slate-400 font-mono">${new Date(e.date).toLocaleDateString()}</td>
      <td class="px-6 py-4 text-slate-400 font-bold font-mono">${e.attendees.length} Attendees</td>
      <td class="px-6 py-4 flex gap-2">
        <button onclick="editEventModal('${e._id}')" class="px-2.5 py-1.5 bg-brand-indigo/10 border border-brand-indigo/20 rounded-md hover:bg-brand-indigo text-slate-200 hover:text-white transition-all">Edit</button>
        <button onclick="deleteEventTrigger('${e._id}')" class="px-2.5 py-1.5 bg-rose-500/10 border border-rose-500/20 rounded-md hover:bg-rose-500 text-slate-200 hover:text-white transition-all">Delete</button>
      </td>
    </tr>
  `).join('');

  contentEl.innerHTML = `
    <div class="space-y-6 animate-fade-in">
      <div class="flex items-center justify-between border-b border-brand-indigo/10 pb-4">
        <div>
          <h3 class="text-2xl font-extrabold text-white">Manage Events</h3>
          <p class="text-xs text-slate-400 mt-1">Admin meetup schedule controller: Host workshops and coordinate event attendees.</p>
        </div>
        <button onclick="openEventCreateModal()" class="px-4 py-2.5 bg-brand-indigo hover:bg-brand-indigo-hover text-white text-xs font-bold rounded-xl shadow transition-all flex items-center gap-1.5">
          <i data-lucide="plus-circle" class="w-4 h-4"></i> Add Event
        </button>
      </div>

      <!-- Events Table -->
      <div class="overflow-x-auto border border-brand-indigo/10 rounded-2xl bg-brand-darker/30">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-brand-dark/40 border-b border-brand-indigo/10 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <th class="px-6 py-4">Workplace Meetup Event</th>
              <th class="px-6 py-4">Scheduled Date</th>
              <th class="px-6 py-4">Registered Headcount</th>
              <th class="px-6 py-4">Database Controls</th>
            </tr>
          </thead>
          <tbody>
            ${rows || '<tr><td colspan="4" class="px-6 py-8 text-center text-slate-500">No scheduled meetups available.</td></tr>'}
          </tbody>
        </table>
      </div>

      <div id="crud-modal-container"></div>
    </div>
  `;
  lucide.createIcons();
}

function openEventCreateModal() {
  state.currentEditingItem = null;
  renderEventFormModal();
}

function editEventModal(id) {
  const event = state.events.find(e => e._id === id);
  if (!event) return;
  state.currentEditingItem = event;
  renderEventFormModal(event);
}

function renderEventFormModal(item = null) {
  const container = document.getElementById('crud-modal-container');
  if (!container) return;

  const isEdit = !!item;
  // Convert date format
  let dateVal = '';
  if (item && item.date) {
    dateVal = new Date(item.date).toISOString().substr(0, 10);
  }

  container.innerHTML = `
    <div class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div class="glass-panel p-6 sm:p-8 rounded-3xl border border-brand-indigo/15 max-w-lg w-full bg-brand-darker space-y-4">
        <div class="flex items-center justify-between border-b border-brand-indigo/10 pb-3">
          <h4 class="text-base font-bold text-white">${isEdit ? 'Update Event Schedule' : 'Schedule New Workplace Event'}</h4>
          <button onclick="closeCrudModal()" class="p-1 rounded-lg hover:bg-brand-dark text-slate-400 hover:text-white transition-colors"><i data-lucide="x" class="w-4 h-4"></i></button>
        </div>

        <form id="event-crud-form" class="space-y-3 text-xs">
          <div class="space-y-1">
            <label class="text-slate-405 font-bold uppercase">Meetup Event Title</label>
            <input type="text" id="me-title" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-lg px-3 py-2 text-white" value="${item ? item.title : ''}" required>
          </div>

          <div class="space-y-1">
            <label class="text-slate-405 font-bold uppercase">Brief description</label>
            <input type="text" id="me-description" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-lg px-3 py-2 text-white" value="${item ? item.description : ''}" required>
          </div>

          <div class="space-y-1">
            <label class="text-slate-405 font-bold uppercase">Cover Image URL</label>
            <input type="url" id="me-image" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-lg px-3 py-2 text-white" value="${item ? item.image : 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80'}" required>
          </div>

          <div class="grid grid-cols-3 gap-3">
            <div class="space-y-1">
              <label class="text-slate-405 font-bold uppercase">Date</label>
              <input type="date" id="me-date" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-lg px-3 py-2 text-white" value="${dateVal}" required>
            </div>
            <div class="space-y-1">
              <label class="text-slate-405 font-bold uppercase">Start Time</label>
              <input type="text" id="me-time" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-lg px-3 py-2 text-white" value="${item ? item.time : '6:00 PM'}" required>
            </div>
            <div class="space-y-1">
              <label class="text-slate-405 font-bold uppercase">HQ Location</label>
              <input type="text" id="me-location" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-lg px-3 py-2 text-white" value="${item ? item.location : 'Sunderland Software Centre'}" required>
            </div>
          </div>

          <button type="submit" class="w-full py-3 bg-brand-indigo hover:bg-brand-indigo-hover text-white font-bold rounded-xl transition-all shadow-md mt-2 flex items-center justify-center gap-1.5">
            <i data-lucide="check" class="w-4 h-4"></i> ${isEdit ? 'Save Changes' : 'Schedule Event'}
          </button>
        </form>
      </div>
    </div>
  `;
  lucide.createIcons();

  document.getElementById('event-crud-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const payload = {
      title: document.getElementById('me-title').value.trim(),
      description: document.getElementById('me-description').value.trim(),
      image: document.getElementById('me-image').value.trim(),
      date: new Date(document.getElementById('me-date').value).toISOString(),
      time: document.getElementById('me-time').value.trim(),
      location: document.getElementById('me-location').value.trim()
    };

    const url = isEdit ? `${API_URL}/events/${item._id}` : `${API_URL}/events`;
    const method = isEdit ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: getHeaders(),
        body: JSON.stringify(payload)
      });
      const data = await res.json();

      if (data.success) {
        showToast(isEdit ? 'Event Updated' : 'Event Scheduled', `"${payload.title}" is officially listed.`, 'success');
        closeCrudModal();
        renderDashManageEvents();
      } else {
        showToast('CRUD Error', data.message || 'Schedule failure.', 'error');
      }
    } catch (error) {
      console.error(error);
      showToast('Network Error', 'Cannot reach backend database nodes.', 'error');
    }
  });
}

async function deleteEventTrigger(id) {
  if (!confirm('Are you sure you want to cancel this event?')) return;
  try {
    const res = await fetch(`${API_URL}/events/${id}`, {
      method: 'DELETE',
      headers: getHeaders()
    });
    const data = await res.json();
    if (data.success) {
      showToast('Event Removed', 'Event cancelled and deleted from system.', 'info');
      renderDashManageEvents();
    }
  } catch (error) {
    console.error(error);
  }
}


// Tab: MANAGE GALLERY (Admin Only CRUD)
async function renderDashManageGallery() {
  const contentEl = document.getElementById('dash-content-viewport');
  if (!contentEl) return;

  try {
    const res = await fetch(`${API_URL}/gallery`);
    const data = await res.json();
    if (data.success) state.galleryItems = data.data;
  } catch (e) {}

  const rows = state.galleryItems.map(g => `
    <tr class="border-b border-brand-indigo/5 text-xs hover:bg-brand-dark/20">
      <td class="px-6 py-4 font-bold text-white">${g.title || 'Studio Asset'}</td>
      <td class="px-6 py-4 text-slate-400">${g.category || 'Workspace'}</td>
      <td class="px-6 py-4 font-mono truncate max-w-[120px] text-slate-500">${g.imageUrl}</td>
      <td class="px-6 py-4">
        <button onclick="deleteGalleryTrigger('${g._id}')" class="px-2.5 py-1.5 bg-rose-500/10 border border-rose-500/20 rounded-md hover:bg-rose-500 text-slate-200 hover:text-white transition-all">Remove</button>
      </td>
    </tr>
  `).join('');

  contentEl.innerHTML = `
    <div class="space-y-6 animate-fade-in">
      <div class="flex items-center justify-between border-b border-brand-indigo/10 pb-4">
        <div>
          <h3 class="text-2xl font-extrabold text-white">Manage Gallery</h3>
          <p class="text-xs text-slate-400 mt-1">Admin design studio showcase: Publish workplace assets and screenshot designs.</p>
        </div>
        <button onclick="openGalleryCreateModal()" class="px-4 py-2.5 bg-brand-indigo hover:bg-brand-indigo-hover text-white text-xs font-bold rounded-xl shadow transition-all flex items-center gap-1.5">
          <i data-lucide="plus-circle" class="w-4 h-4"></i> Add Image
        </button>
      </div>

      <!-- Gallery Table -->
      <div class="overflow-x-auto border border-brand-indigo/10 rounded-2xl bg-brand-darker/30">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-brand-dark/40 border-b border-brand-indigo/10 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <th class="px-6 py-4">Asset Title</th>
              <th class="px-6 py-4">Category</th>
              <th class="px-6 py-4">Image Source</th>
              <th class="px-6 py-4">Database Controls</th>
            </tr>
          </thead>
          <tbody>
            ${rows || '<tr><td colspan="4" class="px-6 py-8 text-center text-slate-500">No gallery items seeded.</td></tr>'}
          </tbody>
        </table>
      </div>

      <div id="crud-modal-container"></div>
    </div>
  `;
  lucide.createIcons();
}

function openGalleryCreateModal() {
  const container = document.getElementById('crud-modal-container');
  if (!container) return;

  container.innerHTML = `
    <div class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div class="glass-panel p-6 sm:p-8 rounded-3xl border border-brand-indigo/15 max-w-md w-full bg-brand-darker space-y-4">
        <div class="flex items-center justify-between border-b border-brand-indigo/10 pb-3">
          <h4 class="text-base font-bold text-white">Upload Gallery Image Asset</h4>
          <button onclick="closeCrudModal()" class="p-1 rounded-lg hover:bg-brand-dark text-slate-400 hover:text-white transition-colors"><i data-lucide="x" class="w-4 h-4"></i></button>
        </div>

        <form id="gallery-crud-form" class="space-y-3 text-xs">
          <div class="space-y-1">
            <label class="text-slate-405 font-bold uppercase">Asset Title</label>
            <input type="text" id="mg-title" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-lg px-3 py-2 text-white" placeholder="Collaborative Hub" required>
          </div>

          <div class="space-y-1">
            <label class="text-slate-405 font-bold uppercase">Category tag</label>
            <input type="text" id="mg-category" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-lg px-3 py-2 text-white" placeholder="Workplace" required>
          </div>

          <div class="space-y-1">
            <label class="text-slate-405 font-bold uppercase">Image URL (Unsplash or direct source)</label>
            <input type="url" id="mg-image" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-lg px-3 py-2 text-white" placeholder="https://images.unsplash.com/photo-..." required>
          </div>

          <div class="space-y-1">
            <label class="text-slate-405 font-bold uppercase">Caption / Description</label>
            <input type="text" id="mg-description" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-lg px-3 py-2 text-white" placeholder="Brief visual overview details.">
          </div>

          <button type="submit" class="w-full py-3 bg-brand-indigo hover:bg-brand-indigo-hover text-white font-bold rounded-xl transition-all shadow-md mt-2 flex items-center justify-center gap-1.5">
            <i data-lucide="check" class="w-4 h-4"></i> Publish Image Asset
          </button>
        </form>
      </div>
    </div>
  `;
  lucide.createIcons();

  document.getElementById('gallery-crud-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const payload = {
      title: document.getElementById('mg-title').value.trim(),
      category: document.getElementById('mg-category').value.trim(),
      imageUrl: document.getElementById('mg-image').value.trim(),
      description: document.getElementById('mg-description').value.trim()
    };

    try {
      const res = await fetch(`${API_URL}/gallery`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(payload)
      });
      const data = await res.json();

      if (data.success) {
        showToast('Image Asset Published', `"${payload.title}" has been appended to studio showcase.`, 'success');
        closeCrudModal();
        renderDashManageGallery();
      } else {
        showToast('CRUD Error', data.message || 'Write error.', 'error');
      }
    } catch (error) {
      console.error(error);
      showToast('Network Error', 'Cannot establish database upload connection.', 'error');
    }
  });
}

async function deleteGalleryTrigger(id) {
  if (!confirm('Are you sure you want to remove this gallery asset?')) return;
  try {
    const res = await fetch(`${API_URL}/gallery/${id}`, {
      method: 'DELETE',
      headers: getHeaders()
    });
    const data = await res.json();
    if (data.success) {
      showToast('Asset Removed', 'Image asset removed from showcase database.', 'info');
      renderDashManageGallery();
    }
  } catch (error) {
    console.error(error);
  }
}


// Tab: MANAGE CONTACT INQUIRIES & REPLIES (Admin Only)
async function renderDashManageContacts() {
  const contentEl = document.getElementById('dash-content-viewport');
  if (!contentEl) return;

  try {
    const res = await fetch(`${API_URL}/inquiries`, { headers: getHeaders() });
    const data = await res.json();
    if (data.success) state.inquiries = data.data;
  } catch (e) {}

  const rows = state.inquiries.map(inq => {
    const bgStatus = {
      'Pending': 'bg-amber-500/10 text-amber-400 border border-amber-500/25',
      'In Progress': 'bg-brand-indigo/10 text-brand-indigo border border-brand-indigo/25',
      'Resolved': 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/25'
    };

    const hasBlueprint = !!inq.prototypeDetails;

    return `
      <tr class="border-b border-brand-indigo/5 text-xs hover:bg-brand-dark/20">
        <td class="px-6 py-4 font-bold text-white">${inq.name}<span class="text-[10px] font-mono text-slate-500 block">${inq.email}</span></td>
        <td class="px-6 py-4 text-slate-350 truncate max-w-[150px]">
          ${inq.subject}
          ${hasBlueprint ? `<span class="bg-brand-cyan/15 text-brand-cyan text-[8px] font-bold px-1.5 py-0.5 rounded border border-brand-cyan/15 block w-max mt-1">AI Blueprint</span>` : ''}
        </td>
        <td class="px-6 py-4"><span class="px-2.5 py-1 text-[9px] font-bold rounded-full uppercase tracking-wider ${bgStatus[inq.status]}">${inq.status}</span></td>
        <td class="px-6 py-4 flex gap-2">
          <button onclick="viewReplyInquiryModal('${inq._id}')" class="px-2.5 py-1.5 bg-brand-indigo/10 border border-brand-indigo/20 rounded-md hover:bg-brand-indigo text-slate-200 hover:text-white transition-all">Reply</button>
        </td>
      </tr>
    `;
  }).join('');

  contentEl.innerHTML = `
    <div class="space-y-6 animate-fade-in">
      <div class="border-b border-brand-indigo/10 pb-4">
        <h3 class="text-2xl font-extrabold text-white">Manage Inquiries</h3>
        <p class="text-xs text-slate-400 mt-1">Admin ticketing triage desk: Address client queries and reply to assistant-generated prototypes.</p>
      </div>

      <!-- Inquiries Table -->
      <div class="overflow-x-auto border border-brand-indigo/10 rounded-2xl bg-brand-darker/30">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-brand-dark/40 border-b border-brand-indigo/10 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <th class="px-6 py-4">Sender Profile</th>
              <th class="px-6 py-4">Subject Matter</th>
              <th class="px-6 py-4">Triage Status</th>
              <th class="px-6 py-4">Database Controls</th>
            </tr>
          </thead>
          <tbody>
            ${rows || '<tr><td colspan="4" class="px-6 py-8 text-center text-slate-500">Inquiry logs are empty.</td></tr>'}
          </tbody>
        </table>
      </div>

      <div id="crud-modal-container"></div>
    </div>
  `;
  lucide.createIcons();
}

function viewReplyInquiryModal(id) {
  const inq = state.inquiries.find(i => i._id === id);
  if (!inq) return;

  const container = document.getElementById('crud-modal-container');
  if (!container) return;

  const hasBlueprint = !!inq.prototypeDetails;

  const repliesHtml = inq.replies.map(r => `
    <div class="p-3 rounded-lg bg-brand-dark/50 border border-brand-indigo/5 text-[11px] space-y-1">
      <div class="flex justify-between text-slate-400">
        <strong>${r.sender}</strong>
        <span>${new Date(r.createdAt).toLocaleString()}</span>
      </div>
      <p class="text-slate-200">${r.text}</p>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div class="glass-panel p-6 sm:p-8 rounded-3xl border border-brand-indigo/15 max-w-xl w-full bg-brand-darker space-y-4 max-h-[90vh] overflow-y-auto">
        <div class="flex items-center justify-between border-b border-brand-indigo/10 pb-3">
          <h4 class="text-base font-bold text-white">Reply Inquiry & Details</h4>
          <button onclick="closeCrudModal()" class="p-1 rounded-lg hover:bg-brand-dark text-slate-400 hover:text-white transition-colors"><i data-lucide="x" class="w-4 h-4"></i></button>
        </div>

        <div class="text-xs space-y-3">
          <div class="grid grid-cols-2 gap-4 border-b border-brand-indigo/5 pb-2">
            <div><strong>From:</strong> ${inq.name} (${inq.email})</div>
            <div><strong>Phone:</strong> ${inq.phone || 'N/A'}</div>
          </div>
          <div>
            <strong>Subject Topic:</strong> ${inq.subject}
          </div>
          <div class="p-3 rounded-lg bg-brand-dark border border-brand-indigo/10 text-slate-300">
            <strong>Client message:</strong><br>
            <p class="mt-1 leading-relaxed whitespace-pre-wrap">${inq.message}</p>
          </div>

          ${hasBlueprint ? `
            <div class="p-3 rounded-lg bg-brand-cyan/5 border border-brand-cyan/20 space-y-2">
              <strong class="text-brand-cyan flex items-center gap-1.5"><i data-lucide="cpu" class="w-4 h-4"></i> Attached AI Prototype Blueprint Details:</strong>
              <div class="grid grid-cols-2 gap-2 mt-1 text-[11px] text-slate-300">
                <div><strong>Project:</strong> ${inq.prototypeDetails.projectName}</div>
                <div><strong>Tech Stack:</strong> ${inq.prototypeDetails.techStack}</div>
                <div><strong>Cost range:</strong> ${inq.prototypeDetails.pricing}</div>
                <div><strong>Delivery turnaround:</strong> ${inq.prototypeDetails.timeframe}</div>
                <div class="col-span-2"><strong>Schema Details:</strong><br><span class="font-mono text-[9px] block bg-brand-dark border border-brand-indigo/5 p-1 rounded mt-1 overflow-x-auto">${inq.prototypeDetails.databaseSchema}</span></div>
              </div>
            </div>
          ` : ''}

          <div class="space-y-2">
            <strong>Discussion History:</strong>
            <div class="space-y-2 max-h-[150px] overflow-y-auto pr-1">
              ${repliesHtml || '<div class="text-[10px] text-slate-500 italic">No admin replies logged yet.</div>'}
            </div>
          </div>

          <form id="inquiry-reply-form" class="space-y-2 pt-2 border-t border-brand-indigo/10">
            <label class="text-[10px] font-bold text-slate-450 uppercase">Draft Reply text (Status will update to 'Resolved')</label>
            <textarea id="reply-text" rows="3" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-lg px-3 py-2 text-white" placeholder="Hello client, we have reviewed your blueprint..." required></textarea>
            <button type="submit" class="w-full py-2.5 bg-brand-indigo hover:bg-brand-indigo-hover text-white font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-1">
              <i data-lucide="corner-up-left" class="w-4 h-4"></i> Send Reply Ticket
            </button>
          </form>
        </div>
      </div>
    </div>
  `;
  lucide.createIcons();

  document.getElementById('inquiry-reply-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const text = document.getElementById('reply-text').value.trim();

    try {
      const res = await fetch(`${API_URL}/inquiries/${inq._id}/reply`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({ text })
      });
      const data = await res.json();
      
      if (data.success) {
        showToast('Reply Synced', 'Admin response logged and user notification generated.', 'success');
        closeCrudModal();
        renderDashManageContacts();
      } else {
        showToast('Submit Error', data.message || 'Write failure.', 'error');
      }
    } catch (error) {
      console.error(error);
      showToast('Network Error', 'Cannot link reply back to seed servers.', 'error');
    }
  });
}


// Tab: ANALYTICS (Admin Only Chart.js Graphics)
async function renderDashAnalytics() {
  const contentEl = document.getElementById('dash-content-viewport');
  if (!contentEl) return;

  contentEl.innerHTML = `
    <div class="space-y-8 animate-fade-in">
      <div class="border-b border-brand-indigo/10 pb-4">
        <h3 class="text-2xl font-extrabold text-white">Analytics Board</h3>
        <p class="text-xs text-slate-400 mt-1">Sunderland HQ live telemetry stats: User metrics, event attendance charts, and ticket classification logs.</p>
      </div>

      <!-- Quick Metrics Counters -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4" id="analytics-counters">
        <div class="p-4 rounded-xl border border-brand-indigo/10 bg-brand-dark/30 text-center space-y-1">
          <span class="text-slate-400 uppercase tracking-widest text-[9px] block">Global Accounts</span>
          <span class="text-2xl font-mono font-extrabold text-white" id="ac-users">-</span>
        </div>
        <div class="p-4 rounded-xl border border-brand-indigo/10 bg-brand-dark/30 text-center space-y-1">
          <span class="text-slate-400 uppercase tracking-widest text-[9px] block">Services Offered</span>
          <span class="text-2xl font-mono font-extrabold text-brand-indigo" id="ac-services">-</span>
        </div>
        <div class="p-4 rounded-xl border border-brand-indigo/10 bg-brand-dark/30 text-center space-y-1">
          <span class="text-slate-400 uppercase tracking-widest text-[9px] block">Logged Inquiries</span>
          <span class="text-2xl font-mono font-extrabold text-brand-cyan" id="ac-inquiries">-</span>
        </div>
        <div class="p-4 rounded-xl border border-brand-indigo/10 bg-brand-dark/30 text-center space-y-1">
          <span class="text-slate-400 uppercase tracking-widest text-[9px] block">Scheduled Events</span>
          <span class="text-2xl font-mono font-extrabold text-brand-violet" id="ac-events">-</span>
        </div>
      </div>

      <!-- Chart Graphics Row -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        <!-- Inquiry statuses breakdown -->
        <div class="p-6 rounded-2xl border border-brand-indigo/10 bg-brand-darker/40 space-y-4">
          <h4 class="text-xs font-bold text-slate-200 uppercase tracking-wider text-center border-b border-brand-indigo/10 pb-2">Ticket Status Allocation</h4>
          <div class="relative h-60 w-full flex items-center justify-center">
            <canvas id="chart-inquiry-status"></canvas>
          </div>
        </div>

        <!-- Event attendance breakdown -->
        <div class="p-6 rounded-2xl border border-brand-indigo/10 bg-brand-darker/40 space-y-4">
          <h4 class="text-xs font-bold text-slate-200 uppercase tracking-wider text-center border-b border-brand-indigo/10 pb-2">Event Registration Headcount</h4>
          <div class="relative h-60 w-full flex items-center justify-center">
            <canvas id="chart-event-attendance"></canvas>
          </div>
        </div>
      </div>
    </div>
  `;

  // Fetch telemetry payload
  try {
    const res = await fetch(`${API_URL}/settings/analytics`, { headers: getHeaders() });
    const payload = await res.json();
    
    if (payload.success) {
      const data = payload.data;
      
      // Counters
      document.getElementById('ac-users').textContent = data.users;
      document.getElementById('ac-services').textContent = data.services;
      document.getElementById('ac-inquiries').textContent = data.inquiries;
      document.getElementById('ac-events').textContent = data.events;

      // Draw Pie Chart
      new Chart(document.getElementById('chart-inquiry-status'), {
        type: 'doughnut',
        data: {
          labels: ['Pending', 'In Progress', 'Resolved'],
          datasets: [{
            data: [
              data.inquiriesBreakdown.pending,
              data.inquiriesBreakdown.inProgress,
              data.inquiriesBreakdown.resolved
            ],
            backgroundColor: ['#F59E0B', '#6366F1', '#10B981'],
            borderColor: '#0E131F',
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: { color: '#94A3B8', font: { family: 'Outfit', size: 10 } }
            }
          }
        }
      });

      // Draw Bar Chart
      new Chart(document.getElementById('chart-event-attendance'), {
        type: 'bar',
        data: {
          labels: data.eventAttendance.map(e => e.title.substr(0, 15) + '...'),
          datasets: [{
            label: 'Attendees Count',
            data: data.eventAttendance.map(e => e.attendeesCount),
            backgroundColor: '#06B6D4',
            borderColor: '#0891B2',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: { grid: { display: false }, ticks: { color: '#94A3B8', font: { size: 9 } } },
            y: { grid: { color: 'rgba(99, 102, 241, 0.05)' }, ticks: { color: '#94A3B8', stepSize: 1 } }
          },
          plugins: {
            legend: { display: false }
          }
        }
      });
    }
  } catch (error) {
    console.error(error);
  }
}


// Tab: SITE SETTINGS (Admin Only)
async function renderDashSettings() {
  const contentEl = document.getElementById('dash-content-viewport');
  if (!contentEl) return;

  if (!state.settings) {
    await fetchSettings();
  }

  contentEl.innerHTML = `
    <div class="space-y-6 animate-fade-in">
      <div class="border-b border-brand-indigo/10 pb-4">
        <h3 class="text-2xl font-extrabold text-white">Site Settings</h3>
        <p class="text-xs text-slate-400 mt-1">Admin configuration control panel: Edit branding metadata and offices location coordinates.</p>
      </div>

      <form id="site-settings-form" class="space-y-4 text-xs">
        <div class="grid grid-cols-2 gap-4">
          <div class="space-y-1.5">
            <label class="text-slate-405 font-bold uppercase">Company Identity</label>
            <input type="text" id="set-company" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-indigo" value="${state.settings ? state.settings.companyName : 'AI-Solutions'}" required>
          </div>
          <div class="space-y-1.5">
            <label class="text-slate-405 font-bold uppercase">Support Email Address</label>
            <input type="email" id="set-email" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-indigo" value="${state.settings ? state.settings.officeEmail : 'hello@ai-solutions.co.uk'}" required>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div class="space-y-1.5">
            <label class="text-slate-405 font-bold uppercase">Office Phone Line</label>
            <input type="text" id="set-phone" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-indigo" value="${state.settings ? state.settings.officePhone : '+44 191 000 0000'}" required>
          </div>
          <div class="space-y-1.5">
            <label class="text-slate-405 font-bold uppercase">HQ Office Physical Address</label>
            <input type="text" id="set-address" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-indigo" value="${state.settings ? state.settings.officeAddress : 'Sunderland Software Centre'}" required>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div class="space-y-1.5">
            <label class="text-slate-405 font-bold uppercase">Hero Core Title</label>
            <input type="text" id="set-herotitle" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-indigo" value="${state.settings ? state.settings.heroTitle : "Let's build something intelligent"}" required>
          </div>
          <div class="space-y-1.5">
            <label class="text-slate-405 font-bold uppercase">Hero Subtitle</label>
            <input type="text" id="set-herosub" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-indigo" value="${state.settings ? state.settings.heroSubtitle : ''}" required>
          </div>
        </div>

        <div class="space-y-1.5">
          <label class="text-slate-405 font-bold uppercase">Company Mission Statement Statement</label>
          <textarea id="set-mission" rows="4" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-indigo" required>${state.settings ? state.settings.mission : ''}</textarea>
        </div>

        <button type="submit" class="w-full py-4 bg-brand-indigo hover:bg-brand-indigo-hover text-white font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5">
          <i data-lucide="save" class="w-4 h-4"></i> Save Global Settings
        </button>
      </form>
    </div>
  `;
  lucide.createIcons();

  document.getElementById('site-settings-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const payload = {
      companyName: document.getElementById('set-company').value.trim(),
      officeEmail: document.getElementById('set-email').value.trim(),
      officePhone: document.getElementById('set-phone').value.trim(),
      officeAddress: document.getElementById('set-address').value.trim(),
      heroTitle: document.getElementById('set-herotitle').value.trim(),
      heroSubtitle: document.getElementById('set-herosub').value.trim(),
      mission: document.getElementById('set-mission').value.trim()
    };

    try {
      const res = await fetch(`${API_URL}/settings`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(payload)
      });
      const data = await res.json();

      if (data.success) {
        state.settings = data.data;
        showToast('Settings Saved', 'Site branding metadata has been refreshed.', 'success');
        updateSettingsUI();
        renderDashSettings();
      } else {
        showToast('Update Failed', data.message || 'Write error.', 'error');
      }
    } catch (error) {
      console.error(error);
      showToast('Network Error', 'Cannot establish connection to settings API.', 'error');
    }
  });
}


// Tab: CHANGE PASSWORD (Common)
async function renderDashPassword() {
  const contentEl = document.getElementById('dash-content-viewport');
  if (!contentEl) return;

  contentEl.innerHTML = `
    <div class="space-y-6 animate-fade-in">
      <div class="border-b border-brand-indigo/10 pb-4">
        <h3 class="text-2xl font-extrabold text-white">Change Password</h3>
        <p class="text-xs text-slate-400 mt-1">Account credentials security panel: Update your secret login passphrase.</p>
      </div>

      <form id="dash-pass-form" class="space-y-4 text-xs max-w-sm">
        <div class="space-y-1.5">
          <label class="text-slate-405 font-bold uppercase">Current Password</label>
          <input type="password" id="cp-current" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-indigo" placeholder="••••••••" required>
        </div>

        <div class="space-y-1.5">
          <label class="text-slate-405 font-bold uppercase">New Password (Min 6 chars)</label>
          <input type="password" id="cp-new" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-indigo" placeholder="••••••••" required>
        </div>

        <button type="submit" class="w-full py-4 bg-brand-indigo hover:bg-brand-indigo-hover text-white font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5">
          <i data-lucide="key" class="w-4 h-4"></i> Update Password
        </button>
      </form>
    </div>
  `;
  lucide.createIcons();

  document.getElementById('dash-pass-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const currentPassword = document.getElementById('cp-current').value;
    const newPassword = document.getElementById('cp-new').value;

    try {
      const res = await fetch(`${API_URL}/auth/change-password`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({ currentPassword, newPassword })
      });
      const data = await res.json();

      if (data.success) {
        showToast('Password Updated', 'Your secure login passphrase is now active.', 'success');
        document.getElementById('dash-pass-form').reset();
      } else {
        showToast('Security Error', data.message || 'Current password check failed.', 'error');
      }
    } catch (error) {
      console.error(error);
      showToast('Network Error', 'Cannot sync security credentials.', 'error');
    }
  });
}


// Tab: USER INQUIRIES & SAVED BLUEPRINTS (User Only)
async function renderDashUserInquiries() {
  const contentEl = document.getElementById('dash-content-viewport');
  if (!contentEl) return;

  try {
    const res = await fetch(`${API_URL}/inquiries/my`, { headers: getHeaders() });
    const data = await res.json();
    if (data.success) state.inquiries = data.data;
  } catch (e) {}

  const listHtml = state.inquiries.map(inq => {
    const isResolved = inq.status === 'Resolved';
    const bgStatus = {
      'Pending': 'bg-amber-500/10 text-amber-400 border border-amber-500/25',
      'In Progress': 'bg-brand-indigo/10 text-brand-indigo border border-brand-indigo/25',
      'Resolved': 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/25'
    };

    const inqReplies = inq.replies.map(r => `
      <div class="p-3 rounded-lg bg-brand-dark border border-brand-indigo/5 mt-2 space-y-1">
        <div class="flex justify-between text-[9px] text-slate-500">
          <strong>${r.sender}</strong>
          <span>${new Date(r.createdAt).toLocaleString()}</span>
        </div>
        <p class="text-xs text-slate-300 font-medium">${r.text}</p>
      </div>
    `).join('');

    return `
      <div class="p-6 rounded-2xl border border-brand-indigo/10 bg-brand-dark/30 space-y-4">
        <div class="flex justify-between items-start gap-4 flex-wrap">
          <div>
            <h4 class="text-base font-bold text-white">${inq.subject}</h4>
            <span class="text-[10px] text-slate-500 block mt-0.5">Submitted: ${new Date(inq.createdAt).toLocaleString()}</span>
          </div>
          <span class="px-2.5 py-1 text-[9px] font-bold rounded-full uppercase tracking-wider ${bgStatus[inq.status]}">${inq.status}</span>
        </div>

        <p class="text-xs text-slate-350 bg-brand-darker/60 p-3 rounded-xl border border-brand-indigo/5 leading-relaxed">${inq.message}</p>

        ${inq.prototypeDetails ? `
          <div class="p-3 rounded-xl bg-brand-cyan/5 border border-brand-cyan/20 space-y-2 text-xs">
            <div class="text-brand-cyan font-bold flex items-center gap-1.5"><i data-lucide="cpu" class="w-4 h-4"></i> Attachment: AI Prototype Blueprint</div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1.5 text-[11px] text-slate-300">
              <div><strong>Project Type:</strong> ${inq.prototypeDetails.projectName}</div>
              <div><strong>Tech Stack:</strong> ${inq.prototypeDetails.techStack}</div>
              <div><strong>Cost Estimate:</strong> <span class="text-emerald-400 font-bold">${inq.prototypeDetails.pricing}</span></div>
              <div><strong>Timeframe:</strong> ${inq.prototypeDetails.timeframe}</div>
              <div class="col-span-1 sm:col-span-2"><strong>Schema Blueprint:</strong><br><span class="font-mono text-[9px] block bg-brand-dark border border-brand-indigo/5 p-1.5 rounded mt-1 overflow-x-auto">${inq.prototypeDetails.databaseSchema}</span></div>
            </div>
          </div>
        ` : ''}

        ${inqReplies ? `
          <div class="space-y-1.5 border-t border-brand-indigo/5 pt-3">
            <h5 class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Responses Logs:</h5>
            ${inqReplies}
          </div>
        ` : `<div class="text-[10px] text-slate-500 italic border-t border-brand-indigo/5 pt-3">Awaiting review from our Sunderland engineering desk.</div>`}
      </div>
    `;
  }).join('');

  contentEl.innerHTML = `
    <div class="space-y-6 animate-fade-in">
      <div class="border-b border-brand-indigo/10 pb-4">
        <h3 class="text-2xl font-extrabold text-white">My Inquiries & Blueprints</h3>
        <p class="text-xs text-slate-400 mt-1">Review contact tickets logged with the office and examine bot prototype blueprints.</p>
      </div>

      <div class="space-y-6">
        ${listHtml || '<div class="text-center text-slate-500 text-xs py-12">No inquiries submitted. Submitting contacts will log them here.</div>'}
      </div>
    </div>
  `;
  lucide.createIcons();
}


// Tab: USER REGISTERED EVENTS (User Only)
async function renderDashUserEvents() {
  const contentEl = document.getElementById('dash-content-viewport');
  if (!contentEl) return;

  // Load events
  try {
    const res = await fetch(`${API_URL}/events`);
    const data = await res.json();
    if (data.success) state.events = data.data;
  } catch (e) {}

  // Filter events registered by current user
  const registered = state.events.filter(e => 
    e.attendees.some(att => att._id === state.user.id || att === state.user.id)
  );

  const cardsHtml = registered.map(e => `
    <div class="p-4 rounded-xl border border-brand-indigo/10 bg-brand-dark/30 flex gap-4 items-start">
      <div class="w-24 h-16 rounded-lg overflow-hidden border border-brand-indigo/5 shrink-0">
        <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover">
      </div>
      <div class="space-y-1.5 flex-grow">
        <h4 class="text-sm font-bold text-white">${e.title}</h4>
        <div class="flex flex-wrap gap-2 text-[9px] text-slate-450 font-bold uppercase tracking-wider items-center">
          <span class="text-brand-indigo"><i data-lucide="calendar" class="w-3 h-3 inline mr-0.5"></i> ${new Date(e.date).toLocaleDateString()}</span>
          <span>•</span>
          <span class="text-brand-cyan"><i data-lucide="clock" class="w-3 h-3 inline mr-0.5"></i> ${e.time}</span>
          <span>•</span>
          <span><i data-lucide="map-pin" class="w-3 h-3 inline mr-0.5"></i> ${e.location}</span>
        </div>
      </div>
    </div>
  `).join('');

  contentEl.innerHTML = `
    <div class="space-y-6 animate-fade-in">
      <div class="border-b border-brand-indigo/10 pb-4">
        <h3 class="text-2xl font-extrabold text-white">Registered Meetups</h3>
        <p class="text-xs text-slate-400 mt-1">Review event seats reserved. Sync locations to calendar coordinates.</p>
      </div>

      <div class="grid grid-cols-1 gap-4">
        ${cardsHtml || '<div class="text-center text-slate-500 text-xs py-12">No registered events. Browse timeline to book seats.</div>'}
      </div>
    </div>
  `;
  lucide.createIcons();
}
