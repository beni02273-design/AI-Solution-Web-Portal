const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
// dns.setServers removed

// Load models
const User = require('../models/User');
const Service = require('../models/Service');
const Blog = require('../models/Blog');
const Event = require('../models/Event');
const Gallery = require('../models/Gallery');
const SiteSettings = require('../models/SiteSettings');
const Inquiry = require('../models/Inquiry');
const Notification = require('../models/Notification');
const TeamMember = require('../models/TeamMember');
const Testimonial = require('../models/Testimonial');
const Partner = require('../models/Partner');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const seedDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ai_solutions';
    console.log('Connecting to primary database for seeding...');
    try {
      await mongoose.connect(mongoUri);
      console.log('MongoDB Connected for seeding (Primary)...');
    } catch (primaryErr) {
      console.error(`Primary database connection failed for seeding: ${primaryErr.message}`);
      console.log('Attempting local database connection fallback for seeding...');
      const localUri = 'mongodb://127.0.0.1:27017/ai_solutions';
      await mongoose.connect(localUri);
      console.log('MongoDB Connected for seeding (Local Fallback)...');
    }

    // Clear existing data
    await User.deleteMany();
    await Service.deleteMany();
    await Blog.deleteMany();
    await Event.deleteMany();
    await Gallery.deleteMany();
    await SiteSettings.deleteMany();
    await Inquiry.deleteMany();
    await Notification.deleteMany();
    await TeamMember.deleteMany();
    await Testimonial.deleteMany();
    await Partner.deleteMany();

    console.log('Cleared existing collections...');

    // Create Site Settings
    const settings = await SiteSettings.create({
      companyName: 'AI-Solutions',
      mission: 'Innovating, promoting, and delivering the future of the digital employee experience from Sunderland to the world.',
      officeAddress: 'Sunderland, United Kingdom',
      officePhone: '+44 191 000 0000',
      officeEmail: 'hello@ai-solutions.co.uk',
      heroPreheading: 'AI · SUNDERLAND · UK',
      heroTitle: 'Empowering Ideas with AI Excellence',
      heroSubtitle: 'AI-Solutions builds intelligent virtual assistants and affordable AI prototypes that accelerate design, engineering and innovation — so your people can do their best work.',
      heroImage: 'https://kindred-ai-vision.lovable.app/assets/hero-person-D8M9l6CF.jpg',
      aboutTitle: 'We provide truly prominent AI solutions for your success',
      aboutText: 'AI-Solutions is the partner of choice for leading enterprises and growing businesses. From our headquarters in Sunderland we deliver AI software, prototypes and consultancy that put people first.',
      aboutImage: 'https://kindred-ai-vision.lovable.app/assets/why-choose-C6MgmLi8.jpg',
      aboutGlobalReach: 'Trusted by teams across the UK, EU and beyond.',
      aboutAwardWinning: 'Recognised for AI innovation in employee experience.',
      aboutClientsPct: '98%',
      aboutProjectsCount: '590+',
      whyChooseUsTitle: 'Trusted by teams that ship at scale',
      whyChooseUsText: 'From Sunderland to Singapore, leading brands choose AI-Solutions as their AI partner.',
      bottomCtaTitle: 'Ready to bring AI into your business?',
      bottomCtaText: 'Talk to our team in Sunderland about an AI virtual assistant, a rapid prototype or a full custom build.',
      googleClientId: '1008059048244-ij0rj8pqla7374ca5v7g19vt9g7742SG.apps.googleusercontent.com',
    });
    console.log('Site settings created.');

    // Create Users (password hashing happens inside User pre-save hook)
    const adminUser = await User.create({
      name: 'Site Administrator',
      email: 'admin@ai-solutions.co.uk',
      password: 'AdminPass123!',
      role: 'admin',
    });

    const standardUser = await User.create({
      name: 'Jane Doe',
      email: 'user@ai-solutions.co.uk',
      password: 'UserPass123!',
      role: 'user',
    });
    console.log('Seed users created (Admin and Standard).');

    // Create Services
    const services = await Service.create([
      {
        title: 'AI Virtual Assistant',
        description: 'Always-on conversational AI that answers inquiries, qualifies leads, and supports employees in real time.',
        icon: 'cpu',
        image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd772?auto=format&fit=crop&w=600&q=80',
        details: 'Our Conversational AI leverages LLMs tailored to your company documentation. Supports lead routing, instant ticket triage, and conversational user registration.',
        price: 750,
        deliveryTime: '3-5 days',
      },
      {
        title: 'Custom Software Development',
        description: 'End-to-end engineering of business applications integrated with your existing tech stack.',
        icon: 'code',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
        details: 'From requirements mapping through deployment, we build robust backend architectures and clean modern frontends tailored to your operations.',
        price: 4505,
        deliveryTime: '4-6 weeks',
      },
      {
        title: 'Web & Mobile Apps',
        description: 'Responsive web and native iOS/Android applications built for scale and premium performance.',
        icon: 'smartphone',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80',
        details: 'Build cross-platform applications with React Native and responsive layouts using Tailwind CSS. Fluid animations and beautiful interactions included.',
        price: 3000,
        deliveryTime: '3-4 weeks',
      },
      {
        title: 'Business & IT Consultancy',
        description: 'Transformative technical strategy advising to optimize software architecture and maximize efficiency.',
        icon: 'briefcase',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
        details: 'Our enterprise architects run technical assessments to identify bottlenecks, automate workflows, and plan migration strategies.',
        price: 1500,
        deliveryTime: 'On demand',
      },
      {
        title: 'Rapid AI Prototyping',
        description: 'Validate ideas in days with affordable AI-powered prototypes ready to test with real users.',
        icon: 'edit-3',
        image: 'https://images.unsplash.com/photo-1581291518655-9523c932dedf?auto=format&fit=crop&w=600&q=80',
        details: 'Skip months of specification and coding. We create functional interactive prototypes using generative frameworks in a fraction of the time and cost.',
        price: 1200,
        deliveryTime: '1-2 weeks',
      },
      {
        title: 'Digital Employee Experience',
        description: 'Proactive monitoring and automation tools to optimize digital workflows and support remote teams.',
        icon: 'globe',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
        details: 'Streamline the onboarding, collaboration, and training operations of your digital workplace. Monitor metrics and resolve support tickets automatically.',
        price: 2500,
        deliveryTime: '3 weeks',
      },
    ]);
    console.log('Services seeded.');

    // Create Events
    const events = await Event.create([
      {
        title: 'AI for Workplace Productivity — Sunderland Meetup',
        description: 'A free evening of talks and demos on using AI assistants to support frontline teams at work.',
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
        date: new Date('2026-07-10T18:00:00Z'),
        time: '6:00 PM',
        location: 'Sunderland Software Centre, Sunderland',
        attendees: [standardUser._id],
      },
      {
        title: 'Rapid Prototyping with Generative AI — Workshop',
        description: 'Hands-on intensive workshop showing how to design, prompt, build, and deploy functional prototypes in a single afternoon.',
        image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80',
        date: new Date('2026-07-26T10:00:00Z'),
        time: '10:00 AM',
        location: 'Online Workshop (Zoom)',
        attendees: [],
      },
      {
        title: 'Digital Employee Experience Summit',
        description: 'Annual conference bringing together HR, IT, and software engineering leaders to discuss remote workspaces and automation.',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80',
        date: new Date('2026-08-25T09:00:00Z'),
        time: '9:00 AM',
        location: 'Newcastle Civic Centre, Newcastle, UK',
        attendees: [standardUser._id],
      },
    ]);
    console.log('Events seeded.');

    // Create Blogs
    const blogs = await Blog.create([
      {
        title: 'How AI and ChatGPT Are Transforming Modern Web Development in 2026',
        content: 'Generative AI is completely reshaping how software is designed and shipped. Today, developer workflows are moving from manual coding to specification formulation, prompt engineering, and interactive code verification. In this post, we discuss the core advantages of adopting code-generation assistants and how they are speeding up shipping timelines by up to 80%...',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
        category: 'Web Development',
        author: 'Sarah Jenkins (Tech Lead)',
      },
      {
        title: 'Next-Gen Technology Trends Shaping the Future of Web Design',
        content: 'The canvas of web design is no longer static. In 2026, we are witnessing the rise of Edge-computing rendering, fully personalized dynamic user interfaces that restructure layouts depending on user behaviors, and dark-indigo micro-animations. Glassmorphism overlays are returning with backdrop filters to provide tactile and premium depth feeling...',
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
        category: 'Web Design',
        author: 'David Vance (Lead Designer)',
      },
      {
        title: 'Why Web Developers Need to Learn AI and Automation in the Next 5 Years',
        content: 'The landscape of engineering is evolving. Coding is no longer just writing syntax; it is architectural orchestration. Developers who learn to collaborate with agentic models, build secure LLM pipelines, and automate structural configurations will dominate the software space. We outline the key skills and libraries every engineer should master...',
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80',
        category: 'Technology',
        author: 'Marcus Cole (CTO)',
      },
    ]);
    console.log('Blogs seeded.');

    // Create Gallery Items
    const galleryItems = await Gallery.create([
      {
        title: 'Collaborative Workspace',
        description: 'Our open engineering studio at Sunderland Software Centre.',
        imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
        category: 'Workplace',
      },
      {
        title: 'Prototyping Session',
        description: 'Mapping out user journeys with interactive prototypes.',
        imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80',
        category: 'Engineering',
      },
      {
        title: 'Annual Team Meetup',
        description: 'Gathering together in Sunderland to discuss our expansion goals.',
        imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
        category: 'Team',
      },
      {
        title: 'AI Lab Testing',
        description: 'Our deep learning and virtual assistant tuning setups.',
        imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
        category: 'Research',
      },
      {
        title: 'Client Workshop',
        description: 'Deploying digital employee tools with regional partners.',
        imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
        category: 'Workplace',
      },
      {
        title: 'Sunderland Software Centre',
        description: 'Our main office hub supporting local tech advancement.',
        imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
        category: 'Office',
      },
    ]);
    console.log('Gallery items seeded.');

    // Create Initial Inquiries
    const inquiries = await Inquiry.create([
      {
        user: standardUser._id,
        name: 'Jane Doe',
        email: 'user@ai-solutions.co.uk',
        phone: '+44 7700 900077',
        subject: 'Custom Employee Portal Quote',
        message: 'Hello, we would like to get a more precise quote for building a custom employee onboarding dashboard integrating with Slack. Looking forward to your response.',
        status: 'Pending',
      },
      {
        user: standardUser._id,
        name: 'Jane Doe',
        email: 'user@ai-solutions.co.uk',
        phone: '+44 7700 900077',
        subject: 'AI Prototype - Mobile Inventory',
        message: 'Created a prototype blueprint using the AI Assistant chat widget for our mobile warehouse tracker.',
        status: 'Resolved',
        prototypeDetails: {
          projectName: 'AI-Driven Mobile Inventory Tracker',
          techStack: 'React Native, Node.js, Express, MongoDB, Firebase Push Notifications',
          features: ['Barcode Scanner integration', 'Offline data sync', 'Automatic restock alerts', 'AI vendor recommendation module'],
          databaseSchema: 'Inventory: { itemCode, qty, minStock, warehouseId }; AuditLog: { timestamp, action, userId }',
          pricing: '£3,000 - £4,500',
          timeframe: '3 weeks',
        },
        replies: [
          {
            sender: 'Admin (AI-Solutions)',
            text: 'Hello Jane, I reviewed your inventory tracker prototype blueprint. The tech stack React Native fits this perfectly. We can set up a kick-off meeting next Tuesday to start production.',
            createdAt: new Date(),
          }
        ]
      }
    ]);
    console.log('Seed inquiries created.');

    // Create Initial Notifications
    await Notification.create([
      {
        user: standardUser._id,
        title: 'Welcome to AI-Solutions!',
        message: 'Thank you for registering. Open the AI Assistant chatbot in the bottom right to start drafting your project blueprints.',
        read: false,
      },
      {
        user: standardUser._id,
        title: 'Project Blueprint Approved',
        message: 'Your inventory tracker blueprint inquiry has a new reply from the engineering team.',
        read: true,
      }
    ]);
    console.log('Notifications seeded.');

    // Create Default Team Members
    await TeamMember.create([
      {
        name: 'Sarah Mitchell',
        role: 'Project Manager',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=700&fit=crop'
      },
      {
        name: 'Daniel Okafor',
        role: 'Operations Manager',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop'
      },
      {
        name: 'James Patel',
        role: 'Business Head',
        image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&h=700&fit=crop'
      },
      {
        name: 'Liam Chen',
        role: 'IT Manager',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=700&fit=crop'
      }
    ]);
    console.log('Team members seeded.');

    // Create Default Testimonials
    await Testimonial.create([
      {
        quote: 'AI-Solutions transformed how our staff interact with our internal systems. The virtual assistant alone saved us hundreds of hours a month.',
        author: 'William Jackson',
        role: 'Product Manager',
        stars: 5,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&q=80'
      },
      {
        quote: 'Their rapid prototyping process turned a vague idea into a working AI tool we could show to investors in just two weeks.',
        author: 'Emma Williams',
        role: 'CTO, Northcoast',
        stars: 5,
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&q=80'
      }
    ]);
    console.log('Testimonials seeded.');

    // Create Default Partners
    await Partner.create([
      { name: 'Boosterio' },
      { name: 'SEO Mind' },
      { name: 'Prelude' },
      { name: 'Logoipsum' },
      { name: 'JPSN' },
      { name: 'CircleTech' },
      { name: 'Northcoast' },
      { name: 'Stackly' },
      { name: 'Boxhub' },
      { name: 'Glowlab' }
    ]);
    console.log('Partners seeded.');

    console.log('Database Seeding Complete!');
    process.exit(0);
  } catch (error) {
    console.error(`Error during seeding: ${error.message}`);
    process.exit(1);
  }
};

seedDB();
