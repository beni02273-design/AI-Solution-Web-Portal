### Implementation Plan:
AI-Solutions Web Portal Implementation Plan
AI-Solutions is a Sunderland-based startup specializing in software solutions that enhance the digital employee experience, featuring a floating AI virtual assistant that handles customer inquiries and generates prototyping solutions. This plan outlines the technical design, database schemas, API routes, frontend architecture, and verification steps.

User Review Required
IMPORTANT

The default credentials for testing the portal will be:

Admin: admin@ai-solutions.co.uk (Password: AdminPass123!)
User: user@ai-solutions.co.uk (Password: UserPass123!)
TIP

To provide a seamless experience where the floating AI Virtual Assistant remains active and retains chat history across pages, the frontend will be built as a Single Page Application (SPA) using a vanilla JavaScript hash router (#home, #services, #dashboard, etc.). This avoids page reload flashes and yields a highly polished user experience.

Proposed Changes
Database & Backend Model Schemas
We will use MongoDB (via Mongoose) to manage the data.

User.js
Stores information about registered users and administrators.

name (String, required)
email (String, required, unique)
password (String, required, hashed)
role (String: 'user' or 'admin', default: 'user')
createdAt (Date, default: Date.now)
Service.js
Stores service offerings.

title (String, required)
description (String, required)
icon (String, required) - Lucide icon class name
image (String, required) - Image URL (supports uploaded/placeholder images)
details (String) - Expanded information/markdown
price (Number) - Pricing estimate
deliveryTime (String) - Estimated turnaround time
Blog.js
Stores blog posts.

title (String, required)
content (String, required)
image (String, required)
category (String, required)
author (String, required)
createdAt (Date, default: Date.now)
Event.js
Stores upcoming events.

title (String, required)
description (String, required)
image (String, required)
date (Date, required)
time (String, required)
location (String, required)
attendees (Array of Refs to User)
Gallery.js
Stores gallery images.

title (String)
description (String)
imageUrl (String, required)
category (String)
createdAt (Date, default: Date.now)
Inquiry.js
Stores contact inquiries and AI-Assistant prototype requests.

user (Ref to User, optional for guest/anonymous inquiries)
name (String, required)
email (String, required)
phone (String)
subject (String)
message (String, required)
status (String: 'Pending', 'In Progress', 'Resolved', default: 'Pending')
prototypeDetails (Object) - AI assistant-generated blueprint/tech-stack/pricing if applicable
replies (Array of { sender: String, text: String, createdAt: Date })
createdAt (Date, default: Date.now)
SiteSettings.js
Stores site-wide variables customizable by the admin.

companyName (String)
mission (String)
officeAddress (String)
officePhone (String)
officeEmail (String)
heroTitle (String)
heroSubtitle (String)
Notification.js
System notifications for users/admins.

user (Ref to User, required)
title (String, required)
message (String, required)
read (Boolean, default: false)
createdAt (Date, default: Date.now)
Backend API Routes (backend/src/routes/)
We will implement the following REST endpoints:

/api/auth

POST /register: Registers a new user account.
POST /login: Log in to user/admin accounts (returns a JWT token and user info).
POST /change-password (Authenticated): Updates password.
GET /me (Authenticated): Returns current user details.
/api/services

GET /: Lists all services.
POST /, PUT /:id, DELETE /:id (Admin only): CRUD operations.
/api/blogs

GET /: Lists all blogs.
POST /, PUT /:id, DELETE /:id (Admin only): CRUD operations.
/api/events

GET /: Lists all events.
POST /:id/register (Authenticated): Register user for an event.
POST /, PUT /:id, DELETE /:id (Admin only): CRUD operations.
/api/gallery

GET /: Lists gallery images.
POST /, DELETE /:id (Admin only): CRUD operations.
/api/inquiries

GET / (Admin only): Lists all inquiries.
GET /my (Authenticated): Lists inquiries for the logged-in user.
POST /: Submits a contact inquiry.
POST /chat-assistant: Chatbot endpoint that interacts with visitors, answers FAQs, and generates tailored prototyping blueprints (tech stack, wireframe layout, estimate).
POST /:id/reply (Admin only): Replies to an inquiry and generates notifications.
/api/settings

GET /: Returns site settings and contact info.
PUT / (Admin only): Updates site settings.
GET /analytics (Admin only): Compiles stats (user count, inquiry categories, event attendance).
Frontend Design & UI System (frontend/)
[MODIFY] 
index.html
The page shell containing:

Dynamic Navigation Header: Logo + Spark Icon, responsive links, and an Auth/Dashboard button that alters depending on user session.
Main Router Wrapper (<main id="app-viewport"></main>): Vanilla routing logic binds views to render sections dynamically:
Home: Hero section with explore buttons, stats section, client grid, testimonial, and secondary CTA.
About: Intro section and detailed mission statements.
Services: High-quality cards with icons, price estimate badges, benefits list, and detail drawers.
Events: Calendar/cards list with interactive "Register" buttons.
Blogs: Categorized card grids with hover zoom effects.
Gallery: Visual showcase with categories.
Contact Us: Side-by-side details panel and messaging form.
Auth (Sign In & Sign Up): Clean dual-tabbed input card.
Admin/User Dashboards: High-performance sidebar layout offering tabs for profile, notifications, system management, analytics graphics, and settings.
Global Floating AI Assistant Panel: Floating action button expanding to a full chat overlay. It features automated typing state, pre-filled chips (e.g., "Estimate Project Cost", "Sunderland Location", "Explore AI Assistant"), and custom interactive blueprints.
[MODIFY] 
style.css
Will implement a premium UI mirroring https://kindred-ai-vision.lovable.app/:

Color Variables: Indigo brand colors (#6366F1), dark deep-blue slate backgrounds (#0B132B / #0F172A), card colors (#FFFFFF / #F8FAFC).
Typography: Custom imported Google Font (Outfit or Inter) with clean sizes and weights.
Animations: Floating chatbot widget transitions, hover translation transforms (hover:-translate-y-2), soft glow shadow states.
Glassmorphism: Navigation bar and panels with backdrop-blur overlays.
[MODIFY] 
script.js
Contains routing rules, API calls (using fetch), chatbot state management, inquiry submission, authentication workflows, registration triggers, and dashboard updates.

Verification Plan
Automated Setup & Tests
Initialization Command: Run npm install inside the backend folder to ensure all dependencies (express, mongoose, cors, dotenv, bcryptjs, jsonwebtoken) are clean.
Seed Script: Implement a seed script npm run seed in the backend to pre-populate default services, events, blogs, settings, user, and admin profiles in MongoDB.
Local Dev Execution: Start the server with npm run dev (via nodemon) and run a health verify request.
Manual Verification
Open the local port in the web browser.
Verify visual appearance: verify responsive cards, dark-indigo gradients, and grid spacing.
Open the floating AI Virtual Assistant, type a request (e.g., "Build me an e-commerce website"), and verify that it returns a prototype blueprint with tech stack, modules, and estimated pricing.
Sign in as Admin (admin@ai-solutions.co.uk / AdminPass123!), view the admin dashboard, create a new service and blog, verify they show up instantly in their respective pages.
Create a new user profile, register for an event, verify the user dashboard registration shows up, submit a contact inquiry, and view notifications.