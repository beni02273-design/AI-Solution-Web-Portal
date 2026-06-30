// Default Static Fallbacks for Instant Offline-First Rendering
const defaultSettings = {
  companyName: 'AI-Solutions',
  mission: 'To innovate, promote, and deliver the future of the digital employee experience, with a strong focus on supporting people at work.',
  officeAddress: 'Sunderland Software Centre, Tavistock Place, Sunderland, UK',
  officePhone: '+44 191 000 0000',
  officeEmail: 'hello@ai-solutions.co.uk',
  heroPreheading: 'AI · SUNDERLAND · UK',
  heroTitle: 'Empowering Ideas with AI Excellence',
  heroSubtitle: 'AI-Solutions builds intelligent virtual assistants and affordable AI prototypes that accelerate design, engineering and innovation — so your people can do their best work.',
  heroImage: 'https://kindred-ai-vision.lovable.app/assets/hero-person-D8M9l6CF.jpg',
  aboutTitle: 'We provide truly prominent AI solutions for your success',
  aboutText: 'AI-Solutions is the partner of choice for leading enterprises and growing businesses. From our headquarters in Sunderland we deliver AI software, prototypes and consultancy that put people first.',
  aboutImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  aboutGlobalReach: 'Trusted by teams across the UK, EU and beyond.',
  aboutAwardWinning: 'Recognised for AI innovation in employee experience.',
  aboutClientsPct: '98%',
  aboutProjectsCount: '590+',
  whyChooseUsTitle: 'Trusted by teams that ship at scale',
  whyChooseUsText: 'From Sunderland to Singapore, leading brands choose AI-Solutions as their AI partner.',
  bottomCtaTitle: 'Ready to bring AI into your business?',
  bottomCtaText: 'Talk to our team in Sunderland about an AI virtual assistant, a rapid prototype or a full custom build.'
};

const defaultServices = [
  {
    _id: 's1',
    title: 'AI Virtual Assistant',
    description: 'An always-on assistant that answers inquiries, supports staff and qualifies leads — 24/7.',
    icon: 'cpu',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd772?auto=format&fit=crop&w=600&q=80',
    details: 'Our Conversational AI leverages LLMs tailored to your company documentation. Supports lead routing, instant ticket triage, and conversational user registration.',
    price: 750,
    deliveryTime: '3-5 days'
  },
  {
    _id: 's2',
    title: 'Custom Software Development',
    description: 'Tailored applications engineered around your workflow, integrated with your stack.',
    icon: 'code',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
    details: 'From requirements mapping through deployment, we build robust backend architectures and clean modern frontends tailored to your operations.',
    price: 4500,
    deliveryTime: '4-6 weeks'
  },
  {
    _id: 's3',
    title: 'Web & Mobile Apps',
    description: 'Responsive web and native mobile experiences built with modern frameworks and AI baked-in.',
    icon: 'smartphone',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80',
    details: 'Build cross-platform applications with React Native and responsive layouts using Tailwind CSS. Fluid animations and beautiful interactions included.',
    price: 3000,
    deliveryTime: '3-4 weeks'
  },
  {
    _id: 's4',
    title: 'Business & IT Consultancy',
    description: 'Strategic guidance to modernise your digital employee experience and operations.',
    icon: 'briefcase',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
    details: 'Our enterprise architects run technical assessments to identify bottlenecks, automate workflows, and plan migration strategies.',
    price: 1500,
    deliveryTime: 'On demand'
  },
  {
    _id: 's5',
    title: 'Rapid AI Prototyping',
    description: 'Validate ideas in days, not months, with affordable AI-driven prototypes.',
    icon: 'edit-3',
    image: 'https://images.unsplash.com/photo-1581291518655-9523c932dedf?auto=format&fit=crop&w=600&q=80',
    details: 'Skip months of specification and coding. We create functional interactive prototypes using generative frameworks in a fraction of the time and cost.',
    price: 1200,
    deliveryTime: '1-2 weeks'
  },
  {
    _id: 's6',
    title: 'Digital Employee Experience',
    description: 'Proactively detect and resolve issues that impact the people doing the work.',
    icon: 'globe',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    details: 'Streamline the onboarding, collaboration, and training operations of your digital workplace. Monitor metrics and resolve support tickets automatically.',
    price: 2500,
    deliveryTime: '3 weeks'
  }
];

const defaultTeam = [
  { name: 'Sarah Mitchell', role: 'Project Manager', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=700&fit=crop' },
  { name: 'Daniel Okafor', role: 'Operations Manager', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop' },
  { name: 'James Patel', role: 'Business Head', image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&h=700&fit=crop' },
  { name: 'Liam Chen', role: 'IT Manager', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=700&fit=crop' }
];

const defaultTestimonials = [
  { quote: 'AI-Solutions transformed how our staff interact with our internal systems. The virtual assistant alone saved us hundreds of hours a month.', author: 'William Jackson', role: 'Product Manager', stars: 5, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&q=80' },
  { quote: 'Their rapid prototyping process turned a vague idea into a working AI tool we could show to investors in just two weeks.', author: 'Emma Williams', role: 'CTO, Northcoast', stars: 5, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&q=80' }
];

const defaultPartners = [
  { name: 'Boosterio' }, { name: 'SEO Mind' }, { name: 'Prelude' }, { name: 'Logoipsum' }, { name: 'JPSN' }
];

const defaultBlogs = [
  {
    _id: 'b1',
    title: 'How AI and ChatGPT Are Transforming Modern Web Development in 2026',
    content: 'Generative AI is completely reshaping how software is designed and shipped. Today, developer workflows are moving from manual coding to specification formulation, prompt engineering, and interactive code verification. In this post, we discuss the core advantages of adopting code-generation assistants and how they are speeding up shipping timelines by up to 80%...',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
    category: 'Web Development',
    author: 'Sarah Jenkins (Tech Lead)'
  },
  {
    _id: 'b2',
    title: 'Next-Gen Technology Trends Shaping the Future of Web Design',
    content: 'The canvas of web design is no longer static. In 2026, we are witnessing the rise of Edge-computing rendering, fully personalized dynamic user interfaces that restructure layouts depending on user behaviors, and dark-indigo micro-animations. Glassmorphism overlays are returning with backdrop filters to provide tactile and premium depth feeling...',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
    category: 'Web Design',
    author: 'David Vance (Lead Designer)'
  }
];

const defaultEvents = [
  {
    _id: 'e1',
    title: 'AI for Workplace Productivity — Sunderland Meetup',
    description: 'A free evening of talks and demos on using AI assistants to support frontline teams at work.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
    date: '2026-07-10T18:00:00Z',
    time: '6:00 PM',
    location: 'Sunderland Software Centre, Sunderland',
    attendees: []
  },
  {
    _id: 'e2',
    title: 'Rapid Prototyping with Generative AI — Workshop',
    description: 'Hands-on intensive workshop showing how to design, prompt, build, and deploy functional prototypes in a single afternoon.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80',
    date: '2026-07-26T10:00:00Z',
    time: '10:00 AM',
    location: 'Online Workshop (Zoom)',
    attendees: []
  }
];

const defaultGallery = [
  { title: 'Collaborative Workspace', description: 'Our open engineering studio at Sunderland Software Centre.', imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80', category: 'Workplace' },
  { title: 'Prototyping Session', description: 'Mapping out user journeys with interactive prototypes.', imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80', category: 'Engineering' },
  { title: 'Annual Team Meetup', description: 'Gathering together in Sunderland to discuss our expansion goals.', imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80', category: 'Team' }
];

// Global Application State
const state = {
  token: localStorage.getItem('token') || null,
  user: null,
  settings: defaultSettings,
  services: defaultServices,
  blogs: defaultBlogs,
  events: defaultEvents,
  galleryItems: defaultGallery,
  teamMembers: defaultTeam,
  testimonials: defaultTestimonials,
  partners: defaultPartners,
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

// Load Team Members
async function fetchTeam() {
  try {
    const res = await fetch(`${API_URL}/team`);
    const data = await res.json();
    if (data.success) {
      state.teamMembers = data.data;
    }
  } catch (error) {
    console.error('Failed to fetch team:', error);
  }
}

// Load Testimonials
async function fetchTestimonials() {
  try {
    const res = await fetch(`${API_URL}/testimonials`);
    const data = await res.json();
    if (data.success) {
      state.testimonials = data.data;
    }
  } catch (error) {
    console.error('Failed to fetch testimonials:', error);
  }
}

// Load Partners
async function fetchPartners() {
  try {
    const res = await fetch(`${API_URL}/partners`);
    const data = await res.json();
    if (data.success) {
      state.partners = data.data;
    }
  } catch (error) {
    console.error('Failed to fetch partners:', error);
  }
}

// Load Services
async function fetchServices() {
  try {
    const res = await fetch(`${API_URL}/services`);
    const data = await res.json();
    if (data.success) {
      state.services = data.data;
    }
  } catch (error) {
    console.error('Failed to fetch services:', error);
  }
}

// Load Blogs
async function fetchBlogs() {
  try {
    const res = await fetch(`${API_URL}/blogs`);
    const data = await res.json();
    if (data.success) {
      state.blogs = data.data;
    }
  } catch (error) {
    console.error('Failed to fetch blogs:', error);
  }
}

// Load Events
async function fetchEvents() {
  try {
    const res = await fetch(`${API_URL}/events`);
    const data = await res.json();
    if (data.success) {
      state.events = data.data;
    }
  } catch (error) {
    console.error('Failed to fetch events:', error);
  }
}

// Load Gallery
async function fetchGallery() {
  try {
    const res = await fetch(`${API_URL}/gallery`);
    const data = await res.json();
    if (data.success) {
      state.galleryItems = data.data;
    }
  } catch (error) {
    console.error('Failed to fetch gallery:', error);
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
      <div class="flex items-center space-x-4">
        <a href="#dashboard" class="text-slate-700 hover:text-brand-indigo transition-colors text-sm font-semibold flex items-center gap-1.5">
          <i data-lucide="layout-dashboard" class="w-4 h-4 text-brand-indigo"></i> ${dashboardLabel}
        </a>
        <a href="#contact" class="px-5 py-2.5 rounded-xl bg-brand-indigo hover:bg-brand-indigoHover text-white font-semibold text-sm transition-all shadow-md shadow-brand-indigo/10">
          Get A Quote
        </a>
        <button id="logout-btn" class="p-2.5 rounded-xl border border-rose-500/10 hover:border-rose-500/30 hover:bg-rose-500/5 text-rose-400 transition-all flex items-center justify-center" title="Sign Out">
          <i data-lucide="log-out" class="w-4 h-4"></i>
        </button>
      </div>
    `;
    navContainer.innerHTML = authBtnHtml;
    mobileNavContainer.innerHTML = `
      <div class="flex flex-col gap-2">
        <a href="#dashboard" class="block px-3 py-2.5 rounded-lg text-center bg-brand-dark/50 border border-brand-indigo/10 text-white font-medium text-sm">${dashboardLabel}</a>
        <a href="#contact" class="block px-3 py-2.5 rounded-lg text-center bg-brand-indigo text-white font-medium text-sm">Get A Quote</a>
        <button id="logout-btn-mobile" class="block w-full px-3 py-2.5 rounded-lg text-center bg-rose-500/10 text-rose-400 border border-rose-500/20 font-medium text-sm">Sign Out</button>
      </div>
    `;
    
    // Bind click events
    document.getElementById('logout-btn')?.addEventListener('click', logout);
    document.getElementById('logout-btn-mobile')?.addEventListener('click', logout);
  } else {
    const guestBtnHtml = `
      <div class="flex items-center space-x-4">
        <a href="#auth" class="text-slate-600 hover:text-brand-indigo transition-colors text-sm font-semibold">
          Sign In
        </a>
        <a href="#contact" class="px-5 py-2.5 rounded-xl bg-brand-indigo hover:bg-brand-indigoHover text-white font-semibold text-sm transition-all shadow-md shadow-brand-indigo/10">
          Get A Quote
        </a>
      </div>
    `;
    navContainer.innerHTML = guestBtnHtml;
    mobileNavContainer.innerHTML = `
      <div class="flex flex-col gap-2">
        <a href="#auth" class="block px-3 py-2.5 rounded-lg text-center bg-brand-dark/50 border border-brand-indigo/10 text-white font-medium text-sm">Sign In</a>
        <a href="#contact" class="block px-3 py-2.5 rounded-lg text-center bg-brand-indigo text-white font-medium text-sm">Get A Quote</a>
      </div>
    `;
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
  
  // Render view directly using available state (instantly displays static data)

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

// Startup Concurrent Data Loading Pipeline

// Global fetching promise to prevent duplicate concurrent queries
let startupDataPromise = null;

function loadStartupData() {
  if (startupDataPromise) return startupDataPromise;

  startupDataPromise = Promise.all([
    fetchSettings(),
    fetchTeam(),
    fetchTestimonials(),
    fetchPartners(),
    fetchServices(),
    fetchBlogs(),
    fetchEvents(),
    fetchGallery(),
    fetchMe()
  ]);
  return startupDataPromise;
}

// Listen to hash routes
window.addEventListener('hashchange', handleRouting);
window.addEventListener('load', () => {
  // Immediately render the skeleton page (non-blocking)
  handleRouting();

  // Load backend data concurrently in the background
  loadStartupData().then(() => {
    updateNavUI();
    // Refresh page components with the loaded dataset
    handleRouting();
  }).catch(error => {
    console.error("Initialization fetch error:", error);
  });
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


// TEMPLATE R// View: HOME
async function renderHome() {
  const servicesHtml = state.services.map(s => `
    <div class="interactive-card-light p-8 rounded-3xl flex flex-col justify-between h-full text-left">
      <div>
        <div class="w-12 h-12 rounded-xl bg-blue-50 text-brand-indigo flex items-center justify-center mb-5">
          <i data-lucide="${s.icon || 'cpu'}" class="w-6 h-6"></i>
        </div>
        <h3 class="text-xl font-bold text-slate-900 mb-2">${s.title}</h3>
        <p class="text-sm text-slate-500 leading-relaxed mb-4">${s.description}</p>
      </div>
      <div class="pt-4">
        <a href="#services/${s._id}" class="text-brand-indigo hover:text-brand-indigoHover transition-colors flex items-center gap-1.5 font-bold text-sm">
          Learn more <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </a>
      </div>
    </div>
  `).join('');

  const blogPreviewHtml = state.blogs.slice(0, 3).map(b => `
    <div class="interactive-card-light rounded-3xl overflow-hidden group flex flex-col h-full">
      <div class="h-48 overflow-hidden relative border-b border-slate-100">
        <img src="${b.image}" alt="${b.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        <span class="absolute top-4 left-4 bg-brand-indigo text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-white/10 shadow-lg">${b.category}</span>
      </div>
      <div class="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 class="text-lg font-bold text-slate-900 group-hover:text-brand-indigo transition-colors line-clamp-2 mb-3 leading-snug">${b.title}</h3>
          <p class="text-xs text-slate-500 line-clamp-3 leading-relaxed mb-4">${b.content}</p>
        </div>
        <div class="flex items-center justify-between pt-4 border-t border-slate-100 mt-4 text-[11px] text-slate-400">
          <span>By ${b.author}</span>
          <a href="#blog-details/${b._id}" class="text-brand-indigo hover:underline flex items-center gap-0.5 font-semibold">Read <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i></a>
        </div>
      </div>
    </div>
  `).join('');

  const s = state.settings || {};
  const heroPre = s.heroPreheading || "AI · SUNDERLAND · UK";
  const heroTitle = s.heroTitle || "Empowering Ideas with AI Excellence";
  const heroSub = s.heroSubtitle || "AI-Solutions builds intelligent virtual assistants and affordable AI prototypes...";
  const heroImg = s.heroImage || "https://kindred-ai-vision.lovable.app/assets/hero-person-D8M9l6CF.jpg";
  const aboutTitle = s.aboutTitle || "We provide truly prominent AI solutions for your success";
  const aboutText = s.aboutText || "AI-Solutions is the partner of choice for leading enterprises and growing businesses...";
  const aboutImg = s.aboutImage || "https://kindred-ai-vision.lovable.app/assets/why-choose-C6MgmLi8.jpg";
  const reach = s.aboutGlobalReach || "Trusted by teams across the UK, EU and beyond.";
  const award = s.aboutAwardWinning || "Recognised for AI innovation in employee experience.";
  const clientsPct = s.aboutClientsPct || "98%";
  const projectsCount = s.aboutProjectsCount || "590+";
  const chooseTitle = s.whyChooseUsTitle || "Trusted by teams that ship at scale";
  const chooseText = s.whyChooseUsText || "From Sunderland to Singapore, leading brands choose AI-Solutions as their AI partner.";
  const bottomTitle = s.bottomCtaTitle || "Ready to bring AI into your business?";
  const bottomText = s.bottomCtaText || "Talk to our team in Sunderland about an AI virtual assistant, a rapid prototype or a full custom build.";

  // Render Partners marquee (doubled for smooth loop)
  const doublePartners = [...state.partners, ...state.partners];
  const partnersHtml = doublePartners.map(p => `
    <div class="flex items-center gap-3 px-6 py-3 bg-white border border-slate-100 rounded-2xl shadow-sm text-left select-none shrink-0 min-w-[185px]">
      <div class="w-10 h-10 rounded-lg bg-blue-50 text-brand-indigo flex items-center justify-center font-extrabold text-sm shrink-0 uppercase">
        <i data-lucide="activity" class="w-5 h-5"></i>
      </div>
      <div>
        <div class="text-sm font-bold text-slate-800 leading-tight">${p.name}</div>
        <div class="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Partner</div>
      </div>
    </div>
  `).join('');

  // Render Team Members
  const teamHtml = state.teamMembers.map(m => `
    <div class="flex flex-col items-center text-center group">
      <div class="w-full h-[320px] rounded-3xl overflow-hidden shadow-md mb-4 border border-slate-100 shrink-0">
        <img src="${m.image}" alt="${m.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
      </div>
      <h4 class="text-base font-bold text-brand-indigo mt-2 leading-snug">${m.role}</h4>
      <span class="text-xs text-slate-500 mt-1 block">${m.name}</span>
    </div>
  `).join('');

  // Render Testimonials
  const testimonialsHtml = state.testimonials.map(t => {
    const starHtml = Array(t.stars || 5).fill(0).map(() => `<i data-lucide="star" class="w-3.5 h-3.5 fill-brand-indigo text-brand-indigo"></i>`).join('');
    return `
      <div class="snap-start shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] testimonial-card-replicated p-6 flex flex-col justify-between h-full text-left relative overflow-hidden bg-white">
        <div class="space-y-4">
          <div class="flex justify-between items-start">
            <div class="flex items-center gap-0.5">${starHtml}</div>
            <span class="text-sky-200/80 text-5xl font-serif leading-none mt-[-10px] select-none">”</span>
          </div>
          <blockquote class="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            "${t.quote}"
          </blockquote>
        </div>
        <div class="pt-4 border-t border-slate-100 mt-4 flex items-center gap-3">
          <img src="${t.image || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&q=80'}" alt="${t.author}" class="w-10 h-10 rounded-full object-cover shadow-sm shrink-0 border border-slate-100">
          <div>
            <cite class="text-xs font-bold text-slate-900 block not-italic">${t.author}</cite>
            <span class="text-[10px] text-slate-500 block mt-0.5">${t.role}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  viewport.innerHTML = `
    <!-- Hero Section -->
    <section class="bg-brand-deep py-16 sm:py-24 relative overflow-hidden">
      <!-- Glow Background blobs for atmospheric depth -->
      <div class="glow-bg top-0 left-1/4"></div>
      <div class="glow-bg bottom-0 right-1/4"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Hero Left Column -->
          <div class="space-y-6 text-left">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-indigo/10 border border-brand-indigo/20 text-xs font-bold uppercase tracking-wider text-brand-indigo mb-2">
              <span>${heroPre}</span>
            </div>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
              <span>Empowering Ideas with <span class="text-brand-indigo">AI Excellence</span></span>
            </h1>
            <p class="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
              ${heroSub}
            </p>
            <div class="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <a href="#services" class="w-full sm:w-auto px-6 py-3 bg-brand-indigo hover:bg-brand-indigoHover text-white font-bold rounded-xl shadow-lg shadow-brand-indigo/20 transition-all flex items-center justify-center gap-2 text-sm">
                Explore Services <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
              <a href="#contact" class="w-full sm:w-auto px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-sm">
                Get A Quote
              </a>
            </div>
            
            <!-- Rating Stats -->
            <div class="flex items-center gap-12 pt-8 border-t border-slate-800/40">
              <div>
                <div class="text-2xl font-bold text-white leading-none">4.9 / 5</div>
                <div class="text-xs text-slate-400 mt-2 font-medium">From 200+ client reviews</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-white leading-none">590+</div>
                <div class="text-xs text-slate-400 mt-2 font-medium">Successful AI projects</div>
              </div>
            </div>
          </div>

          <!-- Hero Right Column -->
          <div class="relative w-full max-w-lg mx-auto lg:max-w-none flex justify-center">
            <div class="w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl relative">
              <img src="${heroImg}" alt="AI solutions workspace" class="w-full h-full object-cover">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us / About Our Company Section -->
    <section class="bg-white py-20 border-t border-slate-100 relative z-10 text-left">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <!-- About Left Column (Tablet User Image) -->
          <div class="relative w-full max-w-lg mx-auto lg:max-w-none flex justify-center">
            <div class="w-full h-[450px] rounded-3xl overflow-hidden shadow-md relative border border-slate-100">
              <img src="${aboutImg}" alt="Why choose AI-Solutions" class="w-full h-full object-cover">
            </div>
          </div>

          <!-- About Right Column (Badge, Text, Grid and Horizontal Stats Box) -->
          <div class="space-y-6">
            <span class="inline-flex items-center px-3.5 py-1.5 rounded-full bg-blue-50 text-brand-indigo text-xs font-bold uppercase tracking-wider">Why Choose Us</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              We provide truly prominent <span class="text-brand-indigo">AI solutions</span> for your success
            </h2>
            <p class="text-sm text-slate-500 leading-relaxed max-w-xl">
              ${aboutText}
            </p>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div class="flex gap-3">
                <div class="w-10 h-10 rounded-full border border-blue-100 text-brand-indigo flex items-center justify-center shrink-0">
                  <i data-lucide="globe" class="w-5 h-5"></i>
                </div>
                <div>
                  <h4 class="text-sm font-bold text-slate-900">Global Reach</h4>
                  <p class="text-xs text-slate-500 mt-1 leading-normal">${reach}</p>
                </div>
              </div>
              <div class="flex gap-3">
                <div class="w-10 h-10 rounded-full border border-blue-100 text-brand-indigo flex items-center justify-center shrink-0">
                  <i data-lucide="award" class="w-5 h-5"></i>
                </div>
                <div>
                  <h4 class="text-sm font-bold text-slate-900">Award Winning</h4>
                  <p class="text-xs text-slate-500 mt-1 leading-normal">${award}</p>
                </div>
              </div>
            </div>

            <!-- Single Horizontal Stats Box -->
            <div class="bg-[#f0f7ff] border border-blue-50/50 p-6 rounded-2xl flex items-center justify-around text-center shadow-sm pt-5 pb-5">
              <div>
                <div class="text-3xl sm:text-4xl font-extrabold text-brand-indigo font-mono">${clientsPct}</div>
                <div class="text-[10px] text-slate-500 uppercase tracking-widest mt-1 font-bold">Successful Clients</div>
              </div>
              <div class="h-12 border-l border-blue-100"></div>
              <div>
                <div class="text-3xl sm:text-4xl font-extrabold text-brand-indigo font-mono">${projectsCount}</div>
                <div class="text-[10px] text-slate-500 uppercase tracking-widest mt-1 font-bold">Completed Projects</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Services Overview Section -->
    <section id="homepage-services" class="bg-slate-50 py-20 border-t border-slate-100 relative z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center space-y-4 mb-12">
          <span class="inline-flex items-center px-3.5 py-1.5 rounded-full bg-blue-50 text-brand-indigo text-xs font-bold uppercase tracking-wider">Our Services</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-none">AI Solutions Tailored to You</h2>
          <p class="text-slate-500 text-sm max-w-xl mx-auto">From virtual assistants to rapid prototyping, we deliver the AI capabilities your business needs to thrive.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          ${servicesHtml || `
            <div class="col-span-full text-center text-slate-500 py-12">No services available. Seeding required.</div>
          `}
        </div>
      </div>
    </section>

    <!-- Partners Section -->
    <section class="bg-white border-y border-slate-100 py-12 relative z-10 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div>
          <span class="inline-flex items-center px-3.5 py-1.5 rounded-full bg-blue-50 text-brand-indigo text-xs font-bold uppercase tracking-wider mb-2">Our Global Partners</span>
          <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900">Trusted by teams that <span class="text-brand-indigo">ship at scale</span></h3>
          <p class="text-xs text-slate-500 mt-1">${chooseText}</p>
        </div>
        
        <!-- Scrolling Partner Bar -->
        <div class="w-full overflow-hidden relative mt-4">
          <div class="animate-marquee space-x-6 flex py-2">
            ${partnersHtml || '<div class="text-slate-600 text-xs">Partners empty.</div>'}
          </div>
        </div>
      </div>
    </section>

    <!-- Meet with Our Experts Section -->
    <section class="bg-[#F8FAFC] py-20 border-b border-slate-100 relative z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center space-y-4 mb-12">
          <span class="inline-flex items-center px-3.5 py-1.5 rounded-full bg-blue-50 text-brand-indigo text-xs font-bold uppercase tracking-wider">Our Team Member</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-none">Meet with Our Experts</h2>
          <p class="text-slate-500 text-sm max-w-xl mx-auto">World-class AI engineers, designers and strategists working side by side with your team.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          ${teamHtml || `
            <div class="col-span-full text-center text-slate-500 py-8">No leadership team members seeded.</div>
          `}
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="bg-[#f0f7ff] py-20 border-b border-slate-100 relative z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center space-y-4 mb-12">
          <span class="text-xs font-bold text-brand-indigo uppercase tracking-widest bg-[#e0f2fe] text-brand-indigo px-3 py-1.5 rounded-full border border-brand-indigo/25">Our Testimonial</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-none">What our clients say about us</h2>
          <p class="text-slate-605 text-sm max-w-xl mx-auto font-medium">Discover how we enhance the digital experience for employee teams worldwide.</p>
        </div>
        
        <!-- Responsive Testimonial Slider Wrapper -->
        <div class="relative max-w-5xl mx-auto px-6 group">
          <!-- Prev Button -->
          <button id="testimonial-prev" class="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-brand-indigo hover:border-brand-indigo hover:scale-105 transition-all shadow-md" title="Previous Testimonials">
            <i data-lucide="chevron-left" class="w-5 h-5"></i>
          </button>
          
          <!-- Slider Container -->
          <div id="testimonial-slider" class="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth snap-x snap-mandatory pb-4">
            ${testimonialsHtml || `
              <div class="w-full text-center text-slate-500 py-8">No testimonials available.</div>
            `}
          </div>

          <!-- Next Button -->
          <button id="testimonial-next" class="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-brand-indigo hover:border-brand-indigo hover:scale-105 transition-all shadow-md" title="Next Testimonials">
            <i data-lucide="chevron-right" class="w-5 h-5"></i>
          </button>
        </div>
      </div>
    </section>

    <!-- Blogs Preview Section -->
    <section class="bg-white py-20 relative z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div class="space-y-3">
            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-none">Latest Insights</h2>
            <p class="text-slate-650 text-sm max-w-xl">Deep-dives into prompt-engineering, workspace software design trends, and next-generation employee automation.</p>
          </div>
          <a href="#blogs" class="mt-4 md:mt-0 text-sm font-semibold text-brand-indigo hover:text-brand-indigoHover flex items-center gap-1 transition-colors">
            Browse All Articles <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </a>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          ${blogPreviewHtml || `
            <div class="col-span-full text-center text-slate-505 py-8">
              Check back soon for new publications.
            </div>
          `}
        </div>
      </div>
    </section>

    <!-- Bottom CTA Card Section -->
    <section class="bg-slate-50 py-20 relative z-10 border-t border-slate-100">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-brand-deep p-8 sm:p-12 rounded-3xl border border-brand-indigo/15 text-center space-y-6 relative overflow-hidden bg-gradient-to-tr from-brand-deep to-brand-dark/40 shadow-xl">
          <div class="absolute inset-0 bg-gradient-to-r from-brand-indigo/5 to-brand-cyan/5 pointer-events-none"></div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            ${bottomTitle}
          </h2>
          <p class="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            ${bottomText}
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a href="#contact" class="w-full sm:w-auto px-8 py-3.5 bg-brand-indigo hover:bg-brand-indigoHover text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider">
              Start a Project <i data-lucide="message-square" class="w-4 h-4"></i>
            </a>
            <a href="#services" class="w-full sm:w-auto px-8 py-3.5 bg-brand-dark border border-brand-indigo/15 text-slate-300 hover:text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-semibold">
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
  lucide.createIcons();

  // Testimonial slider navigation logic
  setTimeout(() => {
    const slider = document.getElementById('testimonial-slider');
    const prevBtn = document.getElementById('testimonial-prev');
    const nextBtn = document.getElementById('testimonial-next');
    
    if (slider && prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => {
        const itemWidth = slider.firstElementChild ? slider.firstElementChild.offsetWidth + 24 : 320;
        slider.scrollBy({ left: -itemWidth, behavior: 'smooth' });
      });
      nextBtn.addEventListener('click', () => {
        const itemWidth = slider.firstElementChild ? slider.firstElementChild.offsetWidth + 24 : 320;
        slider.scrollBy({ left: itemWidth, behavior: 'smooth' });
      });
    }
  }, 100);
}

// View: ABOUT US
async function renderAbout() {

  const teamHtml = state.teamMembers.map(m => `
    <div class="flex flex-col items-center text-center group">
      <div class="w-full h-[320px] rounded-3xl overflow-hidden shadow-md mb-4 border border-slate-100 shrink-0">
        <img src="${m.image}" alt="${m.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
      </div>
      <h4 class="text-base font-bold text-brand-indigo mt-2 leading-snug">${m.role}</h4>
      <span class="text-xs text-slate-500 mt-1 block">${m.name}</span>
    </div>
  `).join('');

  viewport.innerHTML = `
    <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 space-y-12 text-left bg-white rounded-3xl border border-slate-100 shadow-sm mt-12 mb-12">
      <!-- Title -->
      <div class="text-center space-y-4">
        <span class="inline-flex items-center px-3.5 py-1.5 rounded-full bg-blue-50 text-brand-indigo text-xs font-bold uppercase tracking-wider">Who We Are</span>
        <h1 class="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">Empowering Teams Near & Far</h1>
        <p class="text-slate-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          From our base in Sunderland Software Centre, we help companies design, test, and ship automation tools that make the workplace feel human.
        </p>
      </div>

      <!-- Showcase Image -->
      <div class="h-64 sm:h-96 rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" alt="AI-Solutions Workspace" class="w-full h-full object-cover">
      </div>

      <!-- Two Column Detail -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 pt-6">
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-slate-900 border-l-4 border-brand-indigo pl-4">Our Mission</h2>
          <p class="text-sm text-slate-500 leading-relaxed font-semibold">
            ${state.settings?.mission || 'To innovate, promote, and deliver the future of the digital employee experience, with a strong focus on supporting people at work.'}
          </p>
          <p class="text-sm text-slate-500 leading-relaxed">
            By embedding AI early in software design cycles through instant mockups, we minimize project risk. This is the cornerstone of our strategy to make an impact globally.
          </p>
        </div>
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-slate-900 border-l-4 border-brand-cyan pl-4">The Sunderland Advantage</h2>
          <p class="text-sm text-slate-500 leading-relaxed">
            We are proud to operate in the Northeast tech hub. Sunderland Software Centre provides state-of-the-art server infrastructure and connecting links to local research universities.
          </p>
          <p class="text-sm text-slate-500 leading-relaxed">
            Whether you are a startup in the City of Sunderland or a global workforce team searching for automation pipelines, we serve client modules with equal precision.
          </p>
        </div>
      </div>

      <!-- Core Values -->
      <div class="pt-8">
        <h3 class="text-xl font-bold text-center text-slate-900 mb-8">Guided by Three Principles</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-100 space-y-3 shadow-sm">
            <div class="w-10 h-10 rounded-lg bg-blue-50 text-brand-indigo flex items-center justify-center"><i data-lucide="zap" class="w-5 h-5"></i></div>
            <h4 class="text-base font-bold text-slate-900">Velocity Over Red-Tape</h4>
            <p class="text-xs text-slate-500 leading-relaxed">Validate code architectures with visual prototypes in days rather than writing documentation for months.</p>
          </div>
          <div class="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-100 space-y-3 shadow-sm">
            <div class="w-10 h-10 rounded-lg bg-blue-50 text-brand-indigo flex items-center justify-center"><i data-lucide="shield-check" class="w-5 h-5"></i></div>
            <h4 class="text-base font-bold text-slate-900">Ethical AI Integrations</h4>
            <p class="text-xs text-slate-500 leading-relaxed">Ensure employee telemetry and chat datasets are securely stored, compliant, and hashed locally.</p>
          </div>
          <div class="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-100 space-y-3 shadow-sm">
            <div class="w-10 h-10 rounded-lg bg-blue-50 text-brand-indigo flex items-center justify-center"><i data-lucide="users" class="w-5 h-5"></i></div>
            <h4 class="text-base font-bold text-slate-900">Supportive Workspace</h4>
            <p class="text-xs text-slate-500 leading-relaxed">Build software that reduces cognitive overload, automates ticket routing, and eases workplace strain.</p>
          </div>
        </div>
      </div>

      <!-- Experts/Team Section -->
      <div class="pt-12 border-t border-slate-100">
        <h3 class="text-xl font-bold text-center text-slate-900 mb-8">Our Leadership Team</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          ${teamHtml || `
            <div class="col-span-full text-center text-slate-500 py-8">No leadership team members seeded.</div>
          `}
        </div>
      </div>
    </section>
  `;
  lucide.createIcons();
}

// View: SERVICES
async function renderServices() {
  // Trigger background updates asynchronously
  fetchServices().then(() => {
    const container = document.getElementById('services-grid-container');
    if (container) {
      container.innerHTML = state.services.map(s => `
        <div class="interactive-card-light p-6 rounded-2xl flex flex-col justify-between h-full text-left">
          <div>
            <div class="w-12 h-12 rounded-xl bg-blue-50 text-brand-indigo flex items-center justify-center mb-5">
              <i data-lucide="${s.icon || 'cpu'}" class="w-6 h-6"></i>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-2">${s.title}</h3>
            <p class="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-3">${s.description}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="text-[10px] font-bold text-brand-indigo bg-brand-indigo/5 border border-brand-indigo/10 px-2 py-0.5 rounded-md flex items-center gap-1"><i data-lucide="clock" class="w-3 h-3"></i> ${s.deliveryTime || 'Varies'}</span>
              <span class="text-[10px] font-bold text-brand-cyan bg-[#e0f2fe] text-brand-cyan border border-brand-cyan/10 px-2 py-0.5 rounded-md flex items-center gap-1"><i data-lucide="tag" class="w-3 h-3"></i> Est. from £${s.price || 'Free'}</span>
            </div>
          </div>
          <div class="pt-4 border-t border-slate-100 mt-4 flex gap-3">
            <button onclick="openServiceDetailDrawer('${s._id}')" class="flex-1 py-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-xs text-slate-700 font-semibold transition-all text-center flex items-center justify-center gap-1.5 shadow-sm">
              <i data-lucide="info" class="w-3.5 h-3.5"></i> Read Details
            </button>
            <button onclick="requestServiceEstimate('${s.title}')" class="py-2 px-4 rounded-lg bg-brand-indigo hover:bg-brand-indigoHover text-xs text-white font-bold transition-all flex items-center justify-center gap-1 shadow-sm">
              <i data-lucide="calculator" class="w-3.5 h-3.5"></i> Build
            </button>
          </div>
        </div>
      `).join('');
      lucide.createIcons();
    }
  });

  const servicesHtml = state.services.map(s => `
    <div class="interactive-card-light p-6 rounded-2xl flex flex-col justify-between h-full text-left">
      <div>
        <div class="w-12 h-12 rounded-xl bg-blue-50 text-brand-indigo flex items-center justify-center mb-5">
          <i data-lucide="${s.icon || 'cpu'}" class="w-6 h-6"></i>
        </div>
        <h3 class="text-xl font-bold text-slate-900 mb-2">${s.title}</h3>
        <p class="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-3">${s.description}</p>
        <div class="flex flex-wrap gap-2 mb-4">
          <span class="text-[10px] font-bold text-brand-indigo bg-brand-indigo/5 border border-brand-indigo/10 px-2 py-0.5 rounded-md flex items-center gap-1"><i data-lucide="clock" class="w-3 h-3"></i> ${s.deliveryTime || 'Varies'}</span>
          <span class="text-[10px] font-bold text-brand-cyan bg-[#e0f2fe] text-[#0284c7] border border-[#bae6fd] px-2 py-0.5 rounded-md flex items-center gap-1"><i data-lucide="tag" class="w-3 h-3"></i> Est. from £${s.price || 'Free'}</span>
        </div>
      </div>
      <div class="pt-4 border-t border-slate-100 mt-4 flex gap-3">
        <button onclick="openServiceDetailDrawer('${s._id}')" class="flex-1 py-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-xs text-slate-700 font-semibold transition-all text-center flex items-center justify-center gap-1.5 shadow-sm">
          <i data-lucide="info" class="w-3.5 h-3.5"></i> Read Details
        </button>
        <button onclick="requestServiceEstimate('${s.title}')" class="py-2 px-4 rounded-lg bg-brand-indigo hover:bg-brand-indigoHover text-xs text-white font-bold transition-all flex items-center justify-center gap-1 shadow-sm">
          <i data-lucide="calculator" class="w-3.5 h-3.5"></i> Build
        </button>
      </div>
    </div>
  `).join('');

  viewport.innerHTML = `
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 space-y-12 bg-white border border-slate-100 shadow-sm rounded-3xl mt-12 mb-12">
      <!-- Title -->
      <div class="text-center space-y-4">
        <span class="inline-flex items-center px-3.5 py-1.5 rounded-full bg-blue-50 text-brand-indigo text-xs font-bold uppercase tracking-wider">Services Portfolio</span>
        <h1 class="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">Software Architectures We Deploy</h1>
        <p class="text-slate-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          From LLM virtual support agents to rapid layout prototyping pipelines, discover our engineering offerings.
        </p>
      </div>

      <!-- Cards Grid -->
      <div id="services-grid-container" class="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        <h2 class="text-xl font-bold text-slate-900 mb-2">Service Not Found</h2>
        <a href="#services" class="text-brand-indigo hover:underline text-sm">Back to Services</a>
      </div>
    `;
    return;
  }

  viewport.innerHTML = `
    <section class="max-w-3xl mx-auto px-4 py-16 relative z-10 space-y-8 bg-white border border-slate-100 shadow-sm rounded-3xl mt-12 mb-12 text-left">
      <a href="#services" class="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-brand-indigo transition-colors">
        <i data-lucide="arrow-left" class="w-3.5 h-3.5"></i> Back to All Services
      </a>
      <div class="h-64 sm:h-[400px] rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
        <img src="${service.image}" alt="${service.title}" class="w-full h-full object-cover">
      </div>
      <div class="space-y-6">
        <div class="flex items-center justify-between">
          <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">${service.title}</h1>
          <span class="text-xs font-bold text-brand-cyan bg-[#e0f2fe] text-[#0284c7] border border-[#bae6fd] px-3 py-1 rounded-full font-mono">From £${service.price}</span>
        </div>
        <p class="text-slate-500 leading-relaxed text-base">${service.description}</p>
        
        <div class="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-100 space-y-4">
          <h3 class="text-lg font-bold text-slate-900">Full Specifications</h3>
          <div class="text-sm text-slate-500 leading-relaxed whitespace-pre-wrap">${service.details || 'Contact our Sunderland development desk for detailed blueprint mappings and SLA contracts.'}</div>
        </div>

        <div class="grid grid-cols-2 gap-6 pt-4 text-center">
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-100 shadow-sm">
            <span class="text-xs text-slate-400 block font-bold">DELIVERY ESTIMATE</span>
            <span class="text-lg font-bold text-slate-900 mt-1 block font-mono">${service.deliveryTime}</span>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-100 shadow-sm">
            <span class="text-xs text-slate-400 block font-bold">MAPPED STACK</span>
            <span class="text-lg font-bold text-brand-indigo mt-1 block font-mono">Tailored API Node</span>
          </div>
        </div>

        <div class="flex gap-4 pt-6">
          <button onclick="requestServiceEstimate('${service.title}')" class="flex-1 py-4 bg-brand-indigo hover:bg-brand-indigoHover text-white text-sm font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2">
            <i data-lucide="bot" class="w-4 h-4 animate-bounce"></i> Run AI Estimate Check
          </button>
          <a href="#contact" class="px-6 py-4 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl transition-all flex items-center justify-center shadow-sm">
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
  const renderList = () => {
    return state.events.map((e, index) => {
      const formattedDate = new Date(e.date).toLocaleDateString('en-GB', {
        day: 'numeric', month: 'short', year: 'numeric'
      });
      
      const isRegistered = state.user && e.attendees.some(att => att._id === state.user.id || att === state.user.id);
      
      return `
        <div class="relative timeline-item pl-10 pb-12 text-left">
          <!-- Badge icon node -->
          <div class="absolute left-0 top-1.5 w-10 h-10 rounded-xl bg-blue-50 text-brand-indigo flex items-center justify-center z-10 shadow-sm border border-slate-100">
            <i data-lucide="calendar" class="w-5 h-5"></i>
          </div>

          <!-- Card content -->
          <div class="bg-white p-6 rounded-2xl border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-6 items-start">
            <div class="w-full md:w-48 h-32 rounded-xl overflow-hidden border border-slate-100 shrink-0">
              <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover">
            </div>
            <div class="flex-grow space-y-3">
              <div class="flex flex-wrap gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest items-center">
                <span class="text-brand-indigo bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-md flex items-center gap-1"><i data-lucide="calendar" class="w-3 h-3"></i> ${formattedDate}</span>
                <span class="text-brand-cyan bg-[#e0f2fe] text-[#0284c7] border border-[#bae6fd] px-2 py-0.5 rounded-md flex items-center gap-1"><i data-lucide="clock" class="w-3 h-3"></i> ${e.time}</span>
                <span class="text-slate-500 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-200 flex items-center gap-1"><i data-lucide="map-pin" class="w-3 h-3"></i> ${e.location}</span>
              </div>
              <h3 class="text-xl font-bold text-slate-900">${e.title}</h3>
              <p class="text-xs text-slate-500 leading-relaxed">${e.description}</p>
              <div class="pt-4 border-t border-slate-100 flex justify-between items-center text-xs">
                <span class="text-slate-500 font-medium"><i data-lucide="users" class="w-4 h-4 inline mr-1 text-brand-indigo"></i> ${(e.attendees || []).length} Registered Attendees</span>
                
                ${isRegistered ? `
                  <span class="px-4 py-2 bg-emerald-50 text-emerald-600 border border-emerald-100 font-bold rounded-lg flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5"></i> Registered</span>
                ` : `
                  <button onclick="registerEvent('${e._id}')" class="px-4 py-2 bg-brand-indigo hover:bg-brand-indigoHover text-white font-bold rounded-lg transition-all flex items-center gap-1.5 shadow-sm">
                    <i data-lucide="user-plus" class="w-3.5 h-3.5"></i> Register Seats
                  </button>
                `}
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  };

  // Trigger background updates asynchronously
  fetchEvents().then(() => {
    const listContainer = document.getElementById('events-timeline-list');
    if (listContainer) {
      listContainer.innerHTML = renderList() || `
        <div class="text-center text-slate-500 py-12 font-medium">No workplace meetups currently scheduled. Check back shortly.</div>
      `;
      lucide.createIcons();
    }
  });

  viewport.innerHTML = `
    <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 space-y-12 bg-white border border-slate-100 shadow-sm rounded-3xl mt-12 mb-12 text-left">
      <!-- Title -->
      <div class="text-center space-y-4">
        <span class="inline-flex items-center px-3.5 py-1.5 rounded-full bg-blue-50 text-brand-indigo text-xs font-bold uppercase tracking-wider">Events Schedule</span>
        <h1 class="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">Digital Workplace Timelines</h1>
        <p class="text-slate-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          Join our Sunderland engineering meetups, virtual prototype workshops, and automation summits.
        </p>
      </div>

      <!-- Timeline wrapper -->
      <div class="relative max-w-4xl mx-auto pl-2 sm:pl-0 pt-6">
        <div class="absolute left-[19px] top-6 bottom-6 w-[2px] bg-slate-100"></div>
        <div id="events-timeline-list" class="space-y-1">
          ${renderList() || `
            <div class="text-center text-slate-500 py-12 font-medium">No workplace meetups currently scheduled. Check back shortly.</div>
          `}
        </div>
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
  // Trigger background updates asynchronously
  fetchBlogs().then(() => {
    const filterContainer = document.getElementById('blog-category-filters');
    if (filterContainer) {
      const categories = ['All', ...new Set(state.blogs.map(b => b.category))];
      filterContainer.innerHTML = categories.map(cat => `
        <button onclick="filterBlogGrid('${cat}')" class="blog-filter-btn px-4 py-2 text-xs font-bold rounded-xl border border-slate-100 bg-slate-50 hover:bg-slate-100 text-slate-600 transition-all shadow-sm">
          ${cat}
        </button>
      `).join('');
    }
    filterBlogGrid('All');
  });

  // Get categories for filtering from current state
  const categories = ['All', ...new Set(state.blogs.map(b => b.category))];

  viewport.innerHTML = `
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 space-y-12 bg-white border border-slate-100 shadow-sm rounded-3xl mt-12 mb-12 text-left">
      <!-- Title -->
      <div class="text-center space-y-4">
        <span class="inline-flex items-center px-3.5 py-1.5 rounded-full bg-blue-50 text-brand-indigo text-xs font-bold uppercase tracking-wider">Blogs & Articles</span>
        <h1 class="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">Software Design and AI Insights</h1>
        <p class="text-slate-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          Read latest technical guides, workspace automation workflows, and code optimization checklists.
        </p>
      </div>

      <!-- Categories Filter bar -->
      <div class="flex flex-wrap justify-center gap-3" id="blog-category-filters">
        ${categories.map(cat => `
          <button onclick="filterBlogGrid('${cat}')" class="blog-filter-btn px-4 py-2 text-xs font-bold rounded-xl border border-slate-100 bg-slate-50 hover:bg-slate-100 text-slate-600 transition-all shadow-sm">
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
      btn.classList.add('bg-blue-50', 'border-brand-indigo/30', 'text-brand-indigo');
      btn.classList.remove('bg-slate-50', 'border-slate-100', 'text-slate-600');
    } else {
      btn.classList.remove('bg-blue-50', 'border-brand-indigo/30', 'text-brand-indigo');
      btn.classList.add('bg-slate-50', 'border-slate-100', 'text-slate-600');
    }
  });

  const grid = document.getElementById('blog-cards-grid');
  if (!grid) return;

  const filtered = category === 'All' ? state.blogs : state.blogs.filter(b => b.category === category);

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="col-span-full text-center text-slate-500 py-12 font-medium">No articles found in this category.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(b => `
    <div class="interactive-card-light rounded-2xl overflow-hidden group flex flex-col h-full animate-fade-in border border-slate-100 shadow-sm text-left">
      <div class="h-48 overflow-hidden relative border-b border-slate-100">
        <img src="${b.image}" alt="${b.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        <span class="absolute top-4 left-4 bg-brand-indigo text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">${b.category}</span>
      </div>
      <div class="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 class="text-lg font-bold text-slate-900 group-hover:text-brand-indigo transition-colors line-clamp-2 mb-3 leading-snug">${b.title}</h3>
          <p class="text-xs text-slate-500 line-clamp-3 leading-relaxed mb-4">${b.content}</p>
        </div>
        <div class="flex items-center justify-between pt-4 border-t border-slate-100 mt-4 text-[11px] text-slate-500 font-medium">
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
        <h2 class="text-xl font-bold text-slate-900 mb-2">Article Not Found</h2>
        <a href="#blogs" class="text-brand-indigo hover:underline text-sm">Back to Blogs</a>
      </div>
    `;
    return;
  }

  const formattedDate = new Date(blog.createdAt).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

  viewport.innerHTML = `
    <section class="max-w-3xl mx-auto px-4 py-16 relative z-10 space-y-8 bg-white border border-slate-100 shadow-sm rounded-3xl mt-12 mb-12 text-left">
      <a href="#blogs" class="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-brand-indigo transition-colors">
        <i data-lucide="arrow-left" class="w-3.5 h-3.5"></i> Back to All Articles
      </a>
      
      <!-- Article Header -->
      <div class="space-y-4">
        <div class="flex items-center gap-3 text-xs text-slate-450 font-bold uppercase tracking-wider">
          <span class="text-brand-indigo">${blog.category}</span>
          <span>•</span>
          <span>${formattedDate}</span>
        </div>
        <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight">${blog.title}</h1>
        <div class="flex items-center gap-3 text-sm text-slate-500">
          <div class="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-brand-indigo border border-slate-100">
            <i data-lucide="user" class="w-4 h-4"></i>
          </div>
          <span>Published by: <strong class="text-slate-700">${blog.author}</strong></span>
        </div>
      </div>

      <!-- Feature Image -->
      <div class="h-64 sm:h-[400px] rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
        <img src="${blog.image}" alt="${blog.title}" class="w-full h-full object-cover">
      </div>

      <!-- Article Content -->
      <article class="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-100 text-slate-650 leading-relaxed text-sm sm:text-base space-y-6">
        <p class="whitespace-pre-line leading-loose text-slate-600">${blog.content}</p>
        
        <!-- Sunderland startup wrap note -->
        <div class="mt-8 p-4 rounded-xl bg-blue-50/50 border border-blue-100/60 text-xs text-slate-500 leading-relaxed flex gap-3">
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
  // Trigger background updates asynchronously
  fetchGallery().then(() => {
    const filterContainer = document.getElementById('gallery-category-filters');
    if (filterContainer) {
      const categories = ['All', ...new Set(state.galleryItems.map(i => i.category))];
      filterContainer.innerHTML = categories.map(cat => `
        <button onclick="filterGalleryGrid('${cat}')" class="gallery-filter-btn px-4 py-2 text-xs font-bold rounded-xl border border-slate-100 bg-slate-50 hover:bg-slate-100 text-slate-600 transition-all shadow-sm">
          ${cat}
        </button>
      `).join('');
    }
    filterGalleryGrid('All');
  });

  // Get categories from current state
  const categories = ['All', ...new Set(state.galleryItems.map(i => i.category))];

  viewport.innerHTML = `
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 space-y-12 bg-white border border-slate-100 shadow-sm rounded-3xl mt-12 mb-12 text-left">
      <!-- Title -->
      <div class="text-center space-y-4">
        <span class="inline-flex items-center px-3.5 py-1.5 rounded-full bg-blue-50 text-brand-indigo text-xs font-bold uppercase tracking-wider">Design Showcase</span>
        <h1 class="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">Visual Design & Engineering Studio</h1>
        <p class="text-slate-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          A showcase of our Sunderland office workspace, rapid wireframe layouts, team meetups, and artificial intelligence lab setups.
        </p>
      </div>

      <!-- Filter Categories -->
      <div id="gallery-category-filters" class="flex flex-wrap justify-center gap-3">
        ${categories.map(cat => `
          <button onclick="filterGalleryGrid('${cat}')" class="gallery-filter-btn px-4 py-2 text-xs font-bold rounded-xl border border-slate-100 bg-slate-50 hover:bg-slate-100 text-slate-600 transition-all shadow-sm">
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
      btn.classList.add('bg-blue-50', 'border-brand-indigo/30', 'text-brand-indigo');
      btn.classList.remove('bg-slate-50', 'border-slate-100', 'text-slate-600');
    } else {
      btn.classList.remove('bg-blue-50', 'border-brand-indigo/30', 'text-brand-indigo');
      btn.classList.add('bg-slate-50', 'border-slate-100', 'text-slate-600');
    }
  });

  const grid = document.getElementById('gallery-items-grid');
  if (!grid) return;

  const filtered = category === 'All' ? state.galleryItems : state.galleryItems.filter(i => i.category === category);

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="col-span-full text-center text-slate-500 py-12 font-medium">No showcase items found in this section.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(i => `
    <div class="interactive-card-light rounded-2xl overflow-hidden group border border-slate-100 shadow-sm flex flex-col h-full animate-fade-in text-left">
      <div class="h-60 overflow-hidden relative">
        <img src="${i.imageUrl}" alt="${i.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        <span class="absolute top-4 left-4 bg-brand-indigo text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-md uppercase tracking-wider">${i.category || 'Workspace'}</span>
      </div>
      <div class="p-4 bg-slate-50 flex-grow border-t border-slate-100">
        <h3 class="text-base font-bold text-slate-900 mb-1.5 leading-snug">${i.title || 'Studio Asset'}</h3>
        <p class="text-xs text-slate-500 leading-normal">${i.description || 'Sunderland team operations.'}</p>
      </div>
    </div>
  `).join('');
}


// View: CONTACT US & CUSTOMER FEEDBACK
async function renderContact() {
  viewport.innerHTML = `
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 space-y-12 bg-white border border-slate-100 shadow-sm rounded-3xl mt-12 mb-12 text-left">
      <!-- Title -->
      <div class="text-center space-y-4">
        <span class="inline-flex items-center px-3.5 py-1.5 rounded-full bg-blue-50 text-brand-indigo text-xs font-bold uppercase tracking-wider">Contact Hub</span>
        <h1 class="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">Get in Touch with Sunderland HQ</h1>
        <p class="text-slate-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          Submit custom software inquiries, SLA service issues, or provide feedback regarding your workspace digital experience.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
        
        <!-- Details Column -->
        <div class="space-y-8">
          <div class="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-6 shadow-sm">
            <h3 class="text-xl font-bold text-slate-900 border-b border-slate-200 pb-4">Headquarters Coordinates</h3>
            
            <div class="space-y-4 text-sm">
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 rounded-xl bg-blue-50 text-brand-indigo flex items-center justify-center shrink-0 border border-slate-100">
                  <i data-lucide="map-pin" class="w-5 h-5"></i>
                </div>
                <div>
                  <strong class="text-slate-900 block">Office Address</strong>
                  <span class="text-slate-500 block mt-1" id="contact-address">${state.settings?.officeAddress || 'Sunderland Software Centre, Tavistock Place, Sunderland, UK'}</span>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="w-10 h-10 rounded-xl bg-blue-50 text-brand-indigo flex items-center justify-center shrink-0 border border-slate-100">
                  <i data-lucide="phone" class="w-5 h-5"></i>
                </div>
                <div>
                  <strong class="text-slate-900 block">Phone Line</strong>
                  <span class="text-slate-500 block mt-1" id="contact-phone">${state.settings?.officePhone || '+44 191 000 0000'}</span>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="w-10 h-10 rounded-xl bg-blue-50 text-brand-indigo flex items-center justify-center shrink-0 border border-slate-100">
                  <i data-lucide="mail" class="w-5 h-5"></i>
                </div>
                <div>
                  <strong class="text-slate-900 block">Email Inbox</strong>
                  <span class="text-slate-500 block mt-1" id="contact-email">${state.settings?.officeEmail || 'hello@ai-solutions.co.uk'}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Live Sunderland Google Map -->
          <div class="rounded-3xl border border-slate-100 overflow-hidden h-64 bg-slate-50 relative shadow-sm">
            <iframe class="w-full h-full border-0 opacity-90" 
              src="https://maps.google.com/maps?q=Sunderland%20Software%20Centre,%20Tavistock%20Place,%20Sunderland,%20UK&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              allowfullscreen 
              loading="lazy">
            </iframe>
          </div>
        </div>

        <!-- Contact Form / Feedback Column -->
        <div class="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
          <h3 class="text-xl font-bold text-slate-900 border-b border-slate-200 pb-4 mb-6">Log Message / Feedback</h3>
          <form id="contact-us-form" class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-1.5 text-left">
                <label class="text-xs font-bold text-slate-500 uppercase">Your Name</label>
                <input type="text" id="contact-name" class="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-brand-indigo shadow-sm" required>
              </div>
              <div class="space-y-1.5 text-left">
                <label class="text-xs font-bold text-slate-500 uppercase">Your Email</label>
                <input type="email" id="contact-email-input" class="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-brand-indigo shadow-sm" required>
              </div>
            </div>
            
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-1.5 text-left">
                <label class="text-xs font-bold text-slate-500 uppercase">Phone (Optional)</label>
                <input type="text" id="contact-phone-input" class="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-brand-indigo shadow-sm">
              </div>
              <div class="space-y-1.5 text-left">
                <label class="text-xs font-bold text-slate-500 uppercase">Subject Topic</label>
                <input type="text" id="contact-subject" class="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-brand-indigo shadow-sm" required>
              </div>
            </div>

            <div class="space-y-1.5 text-left">
              <label class="text-xs font-bold text-slate-500 uppercase">Inquiry / Message text</label>
              <textarea id="contact-message" rows="5" class="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-brand-indigo shadow-sm" required></textarea>
            </div>

            <button type="submit" class="w-full py-4 bg-brand-indigo hover:bg-brand-indigoHover text-white font-bold rounded-xl text-xs transition-all shadow-md flex items-center justify-center gap-1.5">
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
    <section class="max-w-4xl mx-auto px-4 py-16 relative z-10 flex items-center justify-center min-h-[75vh]">
      <!-- Split container -->
      <div class="auth-container-replicated w-full flex flex-col md:flex-row min-h-[500px]">
        
        <!-- Left Side: Dark Branding Block -->
        <div class="w-full md:w-1/2 bg-brand-deep p-8 sm:p-12 flex flex-col justify-between text-left relative overflow-hidden">
          <div class="glow-bg top-0 left-0 opacity-40"></div>
          
          <!-- Top: Logo -->
          <div class="flex items-center space-x-2 relative z-10">
            <div class="w-9 h-9 rounded-xl bg-brand-indigo flex items-center justify-center shadow-lg shadow-brand-indigo/20">
              <i data-lucide="sparkles" class="w-5 h-5 text-white"></i>
            </div>
            <span class="text-xl font-bold text-white">AI-Solutions</span>
          </div>
          
          <!-- Center: Slogans -->
          <div class="my-auto space-y-4 pt-12 pb-8 relative z-10">
            <h2 class="text-3xl sm:text-4xl font-extrabold text-white leading-tight">Welcome to the future of work.</h2>
            <p class="text-sm text-slate-300 leading-relaxed">
              Sign in to access your dashboard, manage event registrations, and track projects with AI-Solutions.
            </p>
          </div>
          
          <!-- Bottom metadata text or status -->
          <div class="text-xs text-slate-500 relative z-10">
            Sunderland Database Node Active
          </div>
        </div>

        <!-- Right Side: Forms (White pane) -->
        <div class="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center bg-white text-slate-900">
          
          <!-- Tab Header Toggle (Pills) -->
          <div class="auth-toggle-pill mb-8">
            <button onclick="toggleAuthTab('signin')" id="tab-btn-signin" class="auth-toggle-btn active">Sign In</button>
            <button onclick="toggleAuthTab('signup')" id="tab-btn-signup" class="auth-toggle-btn inactive">Sign Up</button>
          </div>

          <!-- Form container viewport -->
          <div id="auth-forms-viewport" class="text-left">
            <!-- Injected via helper -->
          </div>

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
    btnSignin.className = 'auth-toggle-btn active';
    btnSignup.className = 'auth-toggle-btn inactive';

    formsViewport.innerHTML = `
      <form id="signin-form" class="space-y-5 animate-fade-in text-left">
        <div class="space-y-1.5">
          <label class="text-xs font-bold text-slate-700 uppercase">Email</label>
          <input type="email" id="signin-email" class="input-field-replicated" placeholder="admin@ai-solutions.co.uk" required>
        </div>
        
        <div class="space-y-1.5">
          <label class="text-xs font-bold text-slate-700 uppercase">Password</label>
          <input type="password" id="signin-password" class="input-field-replicated" placeholder="••••••••" required>
        </div>

        <button type="submit" class="w-full py-3 bg-[#0070F3] hover:bg-blue-600 text-white font-bold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-1.5 mt-2">
          Sign In
        </button>

        <div class="relative flex py-2 items-center">
          <div class="flex-grow border-t border-slate-200"></div>
          <span class="flex-shrink mx-4 text-slate-400 text-[10px] font-bold font-mono">OR</span>
          <div class="flex-grow border-t border-slate-200"></div>
        </div>

        <button type="button" class="w-full py-3 border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl text-xs transition-all flex items-center justify-center gap-2">
          <svg class="w-4 h-4" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.77c-.98.66-2.23 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22-.85-.63z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
          </svg>
          Continue with Google
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
    btnSignin.className = 'auth-toggle-btn inactive';
    btnSignup.className = 'auth-toggle-btn active';

    formsViewport.innerHTML = `
      <form id="signup-form" class="space-y-4 animate-fade-in text-left">
        <div class="space-y-1.5">
          <label class="text-xs font-bold text-slate-700 uppercase">Full Name</label>
          <input type="text" id="signup-name" class="input-field-replicated" placeholder="E.g. Jane Smith" required>
        </div>

        <div class="space-y-1.5">
          <label class="text-xs font-bold text-slate-700 uppercase">Email Address</label>
          <input type="email" id="signup-email" class="input-field-replicated" placeholder="jane@example.com" required>
        </div>

        <div class="space-y-1.5">
          <label class="text-xs font-bold text-slate-700 uppercase">Password (Min 6 chars)</label>
          <input type="password" id="signup-password" class="input-field-replicated" placeholder="••••••••" required>
        </div>

        <button type="submit" class="w-full py-3 bg-[#0070F3] hover:bg-blue-600 text-white font-bold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-1.5 mt-4">
          Sign Up
        </button>

        <div class="relative flex py-2 items-center">
          <div class="flex-grow border-t border-slate-200"></div>
          <span class="flex-shrink mx-4 text-slate-400 text-[10px] font-bold font-mono">OR</span>
          <div class="flex-grow border-t border-slate-200"></div>
        </div>

        <button type="button" class="w-full py-3 border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl text-xs transition-all flex items-center justify-center gap-2">
          <svg class="w-4 h-4" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.77c-.98.66-2.23 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22-.85-.63z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
          </svg>
          Continue with Google
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
      { id: 'manage-team', label: 'Manage Team', icon: 'users' },
      { id: 'manage-testimonials', label: 'Manage Testimonials', icon: 'message-square' },
      { id: 'manage-partners', label: 'Manage Partners', icon: 'link' },
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
    'manage-team': renderDashManageTeam,
    'manage-testimonials': renderDashManageTestimonials,
    'manage-partners': renderDashManagePartners,
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
              labels: { color: '#94A3B8', font: { family: 'Plus Jakarta Sans', size: 10 } }
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

  const s = state.settings || {};

  contentEl.innerHTML = `
    <div class="space-y-6 animate-fade-in max-h-[75vh] overflow-y-auto pr-2">
      <div class="border-b border-brand-indigo/10 pb-4">
        <h3 class="text-2xl font-extrabold text-white">Site Settings</h3>
        <p class="text-xs text-slate-400 mt-1">Admin configuration control panel: Edit branding metadata, homepage hero, about company text, and bottom CTAs.</p>
      </div>

      <form id="site-settings-form" class="space-y-4 text-xs">
        <!-- Section: General Company Info -->
        <div class="bg-brand-dark/20 p-4 rounded-xl border border-brand-indigo/5 space-y-4">
          <h4 class="text-xs font-bold text-brand-indigo uppercase tracking-wider">General Information</h4>
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-1.5">
              <label class="text-slate-405 font-bold uppercase">Company Identity</label>
              <input type="text" id="set-company" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-indigo" value="${s.companyName || 'AI-Solutions'}" required>
            </div>
            <div class="space-y-1.5">
              <label class="text-slate-405 font-bold uppercase">Support Email Address</label>
              <input type="email" id="set-email" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-indigo" value="${s.officeEmail || 'hello@ai-solutions.co.uk'}" required>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-1.5">
              <label class="text-slate-405 font-bold uppercase">Office Phone Line</label>
              <input type="text" id="set-phone" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-indigo" value="${s.officePhone || '+44 191 000 0000'}" required>
            </div>
            <div class="space-y-1.5">
              <label class="text-slate-405 font-bold uppercase">HQ Office Physical Address</label>
              <input type="text" id="set-address" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-indigo" value="${s.officeAddress || 'Sunderland Software Centre'}" required>
            </div>
          </div>
          <div class="space-y-1.5">
            <label class="text-slate-405 font-bold uppercase">Company Mission Statement</label>
            <textarea id="set-mission" rows="2" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-indigo" required>${s.mission || ''}</textarea>
          </div>
        </div>

        <!-- Section: Hero Showcase Editor -->
        <div class="bg-brand-dark/20 p-4 rounded-xl border border-brand-indigo/5 space-y-4">
          <h4 class="text-xs font-bold text-brand-indigo uppercase tracking-wider">Hero Section</h4>
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-1.5">
              <label class="text-slate-405 font-bold uppercase">Hero Pre-Heading</label>
              <input type="text" id="set-heropre" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-indigo" value="${s.heroPreheading || 'AI · SUNDERLAND · UK'}" required>
            </div>
            <div class="space-y-1.5">
              <label class="text-slate-405 font-bold uppercase">Hero Title</label>
              <input type="text" id="set-herotitle" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-indigo" value="${s.heroTitle || ''}" required>
            </div>
          </div>
          <div class="space-y-1.5">
            <label class="text-slate-405 font-bold uppercase">Hero Description Subtitle</label>
            <input type="text" id="set-herosub" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-indigo" value="${s.heroSubtitle || ''}" required>
          </div>
          <div class="space-y-1.5">
            <label class="text-slate-405 font-bold uppercase">Hero Side Image URL</label>
            <input type="url" id="set-heroimage" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-indigo" value="${s.heroImage || ''}" required>
          </div>
        </div>

        <!-- Section: About Our Company Editor -->
        <div class="bg-brand-dark/20 p-4 rounded-xl border border-brand-indigo/5 space-y-4">
          <h4 class="text-xs font-bold text-brand-indigo uppercase tracking-wider">About Company Section</h4>
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-1.5">
              <label class="text-slate-405 font-bold uppercase">About Header Title</label>
              <input type="text" id="set-abouttitle" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-indigo" value="${s.aboutTitle || ''}" required>
            </div>
            <div class="space-y-1.5">
              <label class="text-slate-405 font-bold uppercase">About Side Image URL</label>
              <input type="url" id="set-aboutimage" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-indigo" value="${s.aboutImage || ''}" required>
            </div>
          </div>
          <div class="space-y-1.5">
            <label class="text-slate-405 font-bold uppercase">About Main Text</label>
            <textarea id="set-abouttext" rows="3" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-indigo" required>${s.aboutText || ''}</textarea>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-1.5">
              <label class="text-slate-405 font-bold uppercase">Global Reach Feature text</label>
              <input type="text" id="set-aboutreach" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-indigo" value="${s.aboutGlobalReach || ''}" required>
            </div>
            <div class="space-y-1.5">
              <label class="text-slate-405 font-bold uppercase">Award Winning Feature text</label>
              <input type="text" id="set-aboutaward" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-indigo" value="${s.aboutAwardWinning || ''}" required>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-1.5">
              <label class="text-slate-405 font-bold uppercase">Successful Clients %</label>
              <input type="text" id="set-aboutclients" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-indigo" value="${s.aboutClientsPct || ''}" required>
            </div>
            <div class="space-y-1.5">
              <label class="text-slate-405 font-bold uppercase">Completed Projects Count</label>
              <input type="text" id="set-aboutprojects" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-indigo" value="${s.aboutProjectsCount || ''}" required>
            </div>
          </div>
        </div>

        <!-- Section: Why Choose Us & Bottom CTA -->
        <div class="bg-brand-dark/20 p-4 rounded-xl border border-brand-indigo/5 space-y-4">
          <h4 class="text-xs font-bold text-brand-indigo uppercase tracking-wider">Why Choose Us & CTA</h4>
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-1.5">
              <label class="text-slate-405 font-bold uppercase">Choose Us Banner Title</label>
              <input type="text" id="set-choosetitle" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-indigo" value="${s.whyChooseUsTitle || ''}" required>
            </div>
            <div class="space-y-1.5">
              <label class="text-slate-405 font-bold uppercase">Choose Us Banner Description</label>
              <input type="text" id="set-choosetext" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-indigo" value="${s.whyChooseUsText || ''}" required>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-1.5">
              <label class="text-slate-405 font-bold uppercase">Bottom CTA Card Title</label>
              <input type="text" id="set-ctatitle" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-indigo" value="${s.bottomCtaTitle || ''}" required>
            </div>
            <div class="space-y-1.5">
              <label class="text-slate-405 font-bold uppercase">Bottom CTA Card Subtext</label>
              <input type="text" id="set-ctatext" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-indigo" value="${s.bottomCtaText || ''}" required>
            </div>
          </div>
        </div>

        <button type="submit" class="w-full py-4 bg-brand-indigo hover:bg-brand-indigo-hover text-white font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 sticky bottom-0 z-10">
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
      mission: document.getElementById('set-mission').value.trim(),
      heroPreheading: document.getElementById('set-heropre').value.trim(),
      heroTitle: document.getElementById('set-herotitle').value.trim(),
      heroSubtitle: document.getElementById('set-herosub').value.trim(),
      heroImage: document.getElementById('set-heroimage').value.trim(),
      aboutTitle: document.getElementById('set-abouttitle').value.trim(),
      aboutText: document.getElementById('set-abouttext').value.trim(),
      aboutImage: document.getElementById('set-aboutimage').value.trim(),
      aboutGlobalReach: document.getElementById('set-aboutreach').value.trim(),
      aboutAwardWinning: document.getElementById('set-aboutaward').value.trim(),
      aboutClientsPct: document.getElementById('set-aboutclients').value.trim(),
      aboutProjectsCount: document.getElementById('set-aboutprojects').value.trim(),
      whyChooseUsTitle: document.getElementById('set-choosetitle').value.trim(),
      whyChooseUsText: document.getElementById('set-choosetext').value.trim(),
      bottomCtaTitle: document.getElementById('set-ctatitle').value.trim(),
      bottomCtaText: document.getElementById('set-ctatext').value.trim(),
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

// Tab: MANAGE TEAM (Admin Only CRUD)
async function renderDashManageTeam() {
  const contentEl = document.getElementById('dash-content-viewport');
  if (!contentEl) return;

  try {
    const res = await fetch(`${API_URL}/team`);
    const data = await res.json();
    if (data.success) state.teamMembers = data.data;
  } catch (e) {}

  const rows = state.teamMembers.map(m => `
    <tr class="border-b border-brand-indigo/5 text-xs hover:bg-brand-dark/20">
      <td class="px-6 py-4 flex items-center gap-3">
        <img src="${m.image}" alt="${m.name}" class="w-8 h-8 rounded-full object-cover border border-brand-indigo/25 shadow-sm">
        <span class="font-bold text-white">${m.name}</span>
      </td>
      <td class="px-6 py-4 text-slate-400 font-medium">${m.role}</td>
      <td class="px-6 py-4 flex gap-2">
        <button onclick="editTeamModal('${m._id}')" class="px-2.5 py-1.5 bg-brand-indigo/10 border border-brand-indigo/20 rounded-md hover:bg-brand-indigo text-slate-200 hover:text-white transition-all">Edit</button>
        <button onclick="deleteTeamTrigger('${m._id}')" class="px-2.5 py-1.5 bg-rose-500/10 border border-rose-500/20 rounded-md hover:bg-rose-500 text-slate-200 hover:text-white transition-all">Delete</button>
      </td>
    </tr>
  `).join('');

  contentEl.innerHTML = `
    <div class="space-y-6 animate-fade-in">
      <div class="flex items-center justify-between border-b border-brand-indigo/10 pb-4">
        <div>
          <h3 class="text-2xl font-extrabold text-white">Manage Team</h3>
          <p class="text-xs text-slate-400 mt-1">Admin dashboard to manage leadership team members.</p>
        </div>
        <button onclick="openTeamCreateModal()" class="px-4 py-2.5 bg-brand-indigo hover:bg-brand-indigo-hover text-white text-xs font-bold rounded-xl shadow transition-all flex items-center gap-1.5">
          <i data-lucide="plus-circle" class="w-4 h-4"></i> Add Team Member
        </button>
      </div>

      <div class="overflow-x-auto border border-brand-indigo/10 rounded-2xl bg-brand-darker/30">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-brand-dark/40 border-b border-brand-indigo/10 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <th class="px-6 py-4">Name</th>
              <th class="px-6 py-4">Role</th>
              <th class="px-6 py-4">Controls</th>
            </tr>
          </thead>
          <tbody>
            ${rows || '<tr><td colspan="3" class="px-6 py-8 text-center text-slate-500">No records found. Add a team member.</td></tr>'}
          </tbody>
        </table>
      </div>

      <div id="crud-modal-container"></div>
    </div>
  `;
  lucide.createIcons();
}

function openTeamCreateModal() {
  state.currentEditingItem = null;
  renderTeamFormModal();
}

function editTeamModal(id) {
  const item = state.teamMembers.find(t => t._id === id);
  if (!item) return;
  state.currentEditingItem = item;
  renderTeamFormModal(item);
}

async function deleteTeamTrigger(id) {
  if (!confirm('Are you sure you want to delete this team member?')) return;
  try {
    const res = await fetch(`${API_URL}/team/${id}`, {
      method: 'DELETE',
      headers: getHeaders()
    });
    const data = await res.json();
    if (data.success) {
      showToast('Deleted', 'Team member removed successfully.', 'info');
      await fetchTeam();
      renderDashManageTeam();
    }
  } catch (e) {
    console.error(e);
  }
}

function renderTeamFormModal(item = null) {
  const container = document.getElementById('crud-modal-container');
  if (!container) return;

  const isEdit = !!item;
  
  container.innerHTML = `
    <div class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div class="glass-panel p-6 sm:p-8 rounded-3xl border border-brand-indigo/15 max-w-md w-full bg-brand-darker space-y-4">
        <div class="flex items-center justify-between border-b border-brand-indigo/10 pb-3">
          <h4 class="text-sm font-bold text-white">${isEdit ? 'Update Team Member' : 'Add Team Member'}</h4>
          <button onclick="closeCrudModal()" class="p-1 rounded-lg hover:bg-brand-dark text-slate-400 hover:text-white transition-colors"><i data-lucide="x" class="w-4 h-4"></i></button>
        </div>

        <form id="team-crud-form" class="space-y-4 text-xs">
          <div class="space-y-1.5">
            <label class="text-slate-400 font-bold uppercase">Name</label>
            <input type="text" id="mt-name" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-lg px-3 py-2 text-white" value="${item ? item.name : ''}" required>
          </div>

          <div class="space-y-1.5">
            <label class="text-slate-400 font-bold uppercase">Role</label>
            <input type="text" id="mt-role" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-lg px-3 py-2 text-white" value="${item ? item.role : ''}" required>
          </div>

          <div class="space-y-1.5">
            <label class="text-slate-400 font-bold uppercase">Image URL</label>
            <input type="url" id="mt-image" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-lg px-3 py-2 text-white" value="${item ? item.image : ''}" required>
          </div>

          <button type="submit" class="w-full py-3 bg-brand-indigo hover:bg-brand-indigo-hover text-white font-bold rounded-xl transition-all shadow-md mt-2 flex items-center justify-center gap-1.5">
            <i data-lucide="check" class="w-4 h-4"></i> ${isEdit ? 'Save Changes' : 'Add Member'}
          </button>
        </form>
      </div>
    </div>
  `;
  lucide.createIcons();

  document.getElementById('team-crud-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const payload = {
      name: document.getElementById('mt-name').value.trim(),
      role: document.getElementById('mt-role').value.trim(),
      image: document.getElementById('mt-image').value.trim()
    };

    const url = isEdit ? `${API_URL}/team/${item._id}` : `${API_URL}/team`;
    const method = isEdit ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: getHeaders(),
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      
      if (data.success) {
        showToast(isEdit ? 'Team Member Updated' : 'Team Member Added', `"${payload.name}" has been updated.`, 'success');
        closeCrudModal();
        await fetchTeam();
        renderDashManageTeam();
      } else {
        showToast('Error', data.message || 'Saving failed.', 'error');
      }
    } catch (err) {
      console.error(err);
      showToast('Network Error', 'Cannot link to database servers.', 'error');
    }
  });
}

// Tab: MANAGE TESTIMONIALS (Admin Only CRUD)
async function renderDashManageTestimonials() {
  const contentEl = document.getElementById('dash-content-viewport');
  if (!contentEl) return;

  try {
    const res = await fetch(`${API_URL}/testimonials`);
    const data = await res.json();
    if (data.success) state.testimonials = data.data;
  } catch (e) {}

  const rows = state.testimonials.map(t => `
    <tr class="border-b border-brand-indigo/5 text-xs hover:bg-brand-dark/20">
      <td class="px-6 py-4 font-bold text-white max-w-[200px] truncate">${t.quote}</td>
      <td class="px-6 py-4 text-slate-400 font-medium">${t.author} (${t.role})</td>
      <td class="px-6 py-4 font-bold text-amber-400 font-mono">${t.stars || 5} ★</td>
      <td class="px-6 py-4 flex gap-2">
        <button onclick="editTestimonialModal('${t._id}')" class="px-2.5 py-1.5 bg-brand-indigo/10 border border-brand-indigo/20 rounded-md hover:bg-brand-indigo text-slate-200 hover:text-white transition-all">Edit</button>
        <button onclick="deleteTestimonialTrigger('${t._id}')" class="px-2.5 py-1.5 bg-rose-500/10 border border-rose-500/20 rounded-md hover:bg-rose-500 text-slate-200 hover:text-white transition-all">Delete</button>
      </td>
    </tr>
  `).join('');

  contentEl.innerHTML = `
    <div class="space-y-6 animate-fade-in">
      <div class="flex items-center justify-between border-b border-brand-indigo/10 pb-4">
        <div>
          <h3 class="text-2xl font-extrabold text-white">Manage Testimonials</h3>
          <p class="text-xs text-slate-400 mt-1">Admin dashboard to manage client testimonials.</p>
        </div>
        <button onclick="openTestimonialCreateModal()" class="px-4 py-2.5 bg-brand-indigo hover:bg-brand-indigo-hover text-white text-xs font-bold rounded-xl shadow transition-all flex items-center gap-1.5">
          <i data-lucide="plus-circle" class="w-4 h-4"></i> Add Testimonial
        </button>
      </div>

      <div class="overflow-x-auto border border-brand-indigo/10 rounded-2xl bg-brand-darker/30">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-brand-dark/40 border-b border-brand-indigo/10 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <th class="px-6 py-4">Quote</th>
              <th class="px-6 py-4">Author</th>
              <th class="px-6 py-4">Stars</th>
              <th class="px-6 py-4">Controls</th>
            </tr>
          </thead>
          <tbody>
            ${rows || '<tr><td colspan="4" class="px-6 py-8 text-center text-slate-500">No testimonials found. Add one.</td></tr>'}
          </tbody>
        </table>
      </div>

      <div id="crud-modal-container"></div>
    </div>
  `;
  lucide.createIcons();
}

function openTestimonialCreateModal() {
  state.currentEditingItem = null;
  renderTestimonialFormModal();
}

function editTestimonialModal(id) {
  const item = state.testimonials.find(t => t._id === id);
  if (!item) return;
  state.currentEditingItem = item;
  renderTestimonialFormModal(item);
}

async function deleteTestimonialTrigger(id) {
  if (!confirm('Are you sure you want to delete this testimonial?')) return;
  try {
    const res = await fetch(`${API_URL}/testimonials/${id}`, {
      method: 'DELETE',
      headers: getHeaders()
    });
    const data = await res.json();
    if (data.success) {
      showToast('Deleted', 'Testimonial removed successfully.', 'info');
      await fetchTestimonials();
      renderDashManageTestimonials();
    }
  } catch (e) {
    console.error(e);
  }
}

function renderTestimonialFormModal(item = null) {
  const container = document.getElementById('crud-modal-container');
  if (!container) return;

  const isEdit = !!item;
  
  container.innerHTML = `
    <div class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div class="glass-panel p-6 sm:p-8 rounded-3xl border border-brand-indigo/15 max-w-md w-full bg-brand-darker space-y-4">
        <div class="flex items-center justify-between border-b border-brand-indigo/10 pb-3">
          <h4 class="text-sm font-bold text-white">${isEdit ? 'Update Testimonial' : 'Add Testimonial'}</h4>
          <button onclick="closeCrudModal()" class="p-1 rounded-lg hover:bg-brand-dark text-slate-400 hover:text-white transition-colors"><i data-lucide="x" class="w-4 h-4"></i></button>
        </div>

        <form id="testimonial-crud-form" class="space-y-4 text-xs">
          <div class="space-y-1.5">
            <label class="text-slate-400 font-bold uppercase">Quote Text</label>
            <textarea id="mt-quote" rows="4" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-lg px-3 py-2 text-white" required>${item ? item.quote : ''}</textarea>
          </div>

          <div class="space-y-1.5">
            <label class="text-slate-400 font-bold uppercase">Author Name</label>
            <input type="text" id="mt-author" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-lg px-3 py-2 text-white" value="${item ? item.author : ''}" required>
          </div>

          <div class="space-y-1.5">
            <label class="text-slate-400 font-bold uppercase">Role / Company</label>
            <input type="text" id="mt-role-company" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-lg px-3 py-2 text-white" value="${item ? item.role : ''}" required>
          </div>

          <div class="space-y-1.5">
            <label class="text-slate-400 font-bold uppercase">Rating Stars (1-5)</label>
            <input type="number" id="mt-stars" min="1" max="5" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-lg px-3 py-2 text-white" value="${item ? item.stars : 5}" required>
          </div>

          <button type="submit" class="w-full py-3 bg-brand-indigo hover:bg-brand-indigo-hover text-white font-bold rounded-xl transition-all shadow-md mt-2 flex items-center justify-center gap-1.5">
            <i data-lucide="check" class="w-4 h-4"></i> ${isEdit ? 'Save Changes' : 'Add Testimonial'}
          </button>
        </form>
      </div>
    </div>
  `;
  lucide.createIcons();

  document.getElementById('testimonial-crud-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const payload = {
      quote: document.getElementById('mt-quote').value.trim(),
      author: document.getElementById('mt-author').value.trim(),
      role: document.getElementById('mt-role-company').value.trim(),
      stars: Number(document.getElementById('mt-stars').value)
    };

    const url = isEdit ? `${API_URL}/testimonials/${item._id}` : `${API_URL}/testimonials`;
    const method = isEdit ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: getHeaders(),
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      
      if (data.success) {
        showToast(isEdit ? 'Testimonial Updated' : 'Testimonial Added', `Testimonial from "${payload.author}" updated.`, 'success');
        closeCrudModal();
        await fetchTestimonials();
        renderDashManageTestimonials();
      } else {
        showToast('Error', data.message || 'Saving failed.', 'error');
      }
    } catch (err) {
      console.error(err);
      showToast('Network Error', 'Cannot link to database servers.', 'error');
    }
  });
}

// Tab: MANAGE PARTNERS (Admin Only CRUD)
async function renderDashManagePartners() {
  const contentEl = document.getElementById('dash-content-viewport');
  if (!contentEl) return;

  try {
    const res = await fetch(`${API_URL}/partners`);
    const data = await res.json();
    if (data.success) state.partners = data.data;
  } catch (e) {}

  const rows = state.partners.map(p => `
    <tr class="border-b border-brand-indigo/5 text-xs hover:bg-brand-dark/20">
      <td class="px-6 py-4 font-bold text-white">${p.name}</td>
      <td class="px-6 py-4 flex gap-2">
        <button onclick="editPartnerModal('${p._id}')" class="px-2.5 py-1.5 bg-brand-indigo/10 border border-brand-indigo/20 rounded-md hover:bg-brand-indigo text-slate-200 hover:text-white transition-all">Edit</button>
        <button onclick="deletePartnerTrigger('${p._id}')" class="px-2.5 py-1.5 bg-rose-500/10 border border-rose-500/20 rounded-md hover:bg-rose-500 text-slate-200 hover:text-white transition-all">Delete</button>
      </td>
    </tr>
  `).join('');

  contentEl.innerHTML = `
    <div class="space-y-6 animate-fade-in">
      <div class="flex items-center justify-between border-b border-brand-indigo/10 pb-4">
        <div>
          <h3 class="text-2xl font-extrabold text-white">Manage Partners</h3>
          <p class="text-xs text-slate-400 mt-1">Admin dashboard to manage partner brand names displayed in the homepage slider.</p>
        </div>
        <button onclick="openPartnerCreateModal()" class="px-4 py-2.5 bg-brand-indigo hover:bg-brand-indigo-hover text-white text-xs font-bold rounded-xl shadow transition-all flex items-center gap-1.5">
          <i data-lucide="plus-circle" class="w-4 h-4"></i> Add Partner
        </button>
      </div>

      <div class="overflow-x-auto border border-brand-indigo/10 rounded-2xl bg-brand-darker/30">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-brand-dark/40 border-b border-brand-indigo/10 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <th class="px-6 py-4">Brand Name</th>
              <th class="px-6 py-4">Controls</th>
            </tr>
          </thead>
          <tbody>
            ${rows || '<tr><td colspan="2" class="px-6 py-8 text-center text-slate-500">No partners found. Add one.</td></tr>'}
          </tbody>
        </table>
      </div>

      <div id="crud-modal-container"></div>
    </div>
  `;
  lucide.createIcons();
}

function openPartnerCreateModal() {
  state.currentEditingItem = null;
  renderPartnerFormModal();
}

function editPartnerModal(id) {
  const item = state.partners.find(p => p._id === id);
  if (!item) return;
  state.currentEditingItem = item;
  renderPartnerFormModal(item);
}

async function deletePartnerTrigger(id) {
  if (!confirm('Are you sure you want to delete this partner?')) return;
  try {
    const res = await fetch(`${API_URL}/partners/${id}`, {
      method: 'DELETE',
      headers: getHeaders()
    });
    const data = await res.json();
    if (data.success) {
      showToast('Deleted', 'Partner removed successfully.', 'info');
      await fetchPartners();
      renderDashManagePartners();
    }
  } catch (e) {
    console.error(e);
  }
}

function renderPartnerFormModal(item = null) {
  const container = document.getElementById('crud-modal-container');
  if (!container) return;

  const isEdit = !!item;
  
  container.innerHTML = `
    <div class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div class="glass-panel p-6 sm:p-8 rounded-3xl border border-brand-indigo/15 max-w-sm w-full bg-brand-darker space-y-4">
        <div class="flex items-center justify-between border-b border-brand-indigo/10 pb-3">
          <h4 class="text-sm font-bold text-white">${isEdit ? 'Update Partner Brand' : 'Add Partner Brand'}</h4>
          <button onclick="closeCrudModal()" class="p-1 rounded-lg hover:bg-brand-dark text-slate-400 hover:text-white transition-colors"><i data-lucide="x" class="w-4 h-4"></i></button>
        </div>

        <form id="partner-crud-form" class="space-y-4 text-xs">
          <div class="space-y-1.5">
            <label class="text-slate-400 font-bold uppercase">Partner Brand Name</label>
            <input type="text" id="mt-brand-name" class="w-full bg-brand-dark border border-brand-indigo/10 rounded-lg px-3 py-2 text-white" value="${item ? item.name : ''}" required>
          </div>

          <button type="submit" class="w-full py-3 bg-brand-indigo hover:bg-brand-indigo-hover text-white font-bold rounded-xl transition-all shadow-md mt-2 flex items-center justify-center gap-1.5">
            <i data-lucide="check" class="w-4 h-4"></i> ${isEdit ? 'Save Changes' : 'Add Partner'}
          </button>
        </form>
      </div>
    </div>
  `;
  lucide.createIcons();

  document.getElementById('partner-crud-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const payload = {
      name: document.getElementById('mt-brand-name').value.trim()
    };

    const url = isEdit ? `${API_URL}/partners/${item._id}` : `${API_URL}/partners`;
    const method = isEdit ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: getHeaders(),
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      
      if (data.success) {
        showToast(isEdit ? 'Partner Updated' : 'Partner Added', `Partner brand "${payload.name}" updated.`, 'success');
        closeCrudModal();
        await fetchPartners();
        renderDashManagePartners();
      } else {
        showToast('Error', data.message || 'Saving failed.', 'error');
      }
    } catch (err) {
      console.error(err);
      showToast('Network Error', 'Cannot link to database servers.', 'error');
    }
  });
}
