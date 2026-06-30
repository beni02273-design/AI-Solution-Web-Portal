# AI-Solutions Web Portal — User & Administrator Guide

Welcome to the **AI-Solutions Web Portal**. This is a completely dynamic, responsive Single Page Application (SPA) with a Node.js/Express backend and MongoDB. It features a ChatGPT-style AI assistant widget, light/dark mode theme support, testimonial carousel, and a full-featured admin content dashboard.

---

## 🚀 Getting Started (How to Run the System)

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+)
- [MongoDB](https://www.mongodb.com/) (Local installation or MongoDB Atlas cluster connection)

### 1. Installation
Clone or navigate to the workspace, then install the dependencies for both frontend and backend:

```bash
# Install backend dependencies
cd backend
npm install
```

### 2. Environment Configuration
Create a `.env` file in the `backend/` directory with the following variables:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_uri
JWT_SECRET=your_jwt_signature_secret_key
NODE_ENV=development
```

*(Note: A pre-configured remote database cluster URI is supplied in the workspace `.env` by default).*

### 3. Database Seeding
To populate the database with default services, team members, blog posts, testimonials, and administrative accounts, run the seed command inside the `backend` folder:

```bash
npm run seed
```

This clears existing entries and creates:
- **Admin Account**: `admin@ai-solutions.co.uk` (Password: `AdminPass123!`)
- **Standard User**: `user@ai-solutions.co.uk` (Password: `UserPass123!`)
- Initial portfolio of 6 Services, 3 Events, 3 Blogs, 6 Gallery items, 10 Partners, and 2 Testimonials.

### 4. Running the Development Server
Run the dev task inside the `backend` folder:

```bash
npm run dev
```
The application will launch on **http://localhost:5000**.

---

## 👤 Normal User Guide

### 1. Account Registration
1. Click **Sign In** in the top navigation bar.
2. Under the auth form card, select the **Sign Up** tab.
3. Fill in your **Name**, **Email Address**, and a **Secure Password**, and submit.
4. You will be logged in automatically and redirected to the Home page.

### 2. Signing In & Using Dashboard
1. Click **Sign In**, fill in your registered email and password.
2. Once authenticated, the header button switches to **Dashboard**. Click it to view:
   - **Profile Settings**: View account information and system inbox notifications.
   - **My Inquiries**: Track custom quotes, feedback, and AI-generated prototype blueprints you've saved.
   - **Registered Events**: View upcoming workshops in Sunderland you've signed up for.
   - **Change Password**: Safely update your security credentials.

### 3. Creating Prototyping Blueprints (AI Chatbot)
1. Open the floating **AI Assistant** bubble in the bottom right.
2. Ask questions naturally in plain English (e.g., *"How much to build an e-commerce shop app?"* or *"Give me a blueprint for a saas dashboard"*).
3. The chatbot will reply in conversational, ChatGPT-like language and generate an interactive **Prototype Blueprint** card.
4. Click **Save Prototype to Inquiries** on the card to log it in your dashboard profile.

---

## 🔑 Administrator Guide

### 1. Administrative Login
1. Click **Sign In** in the navigation header.
2. Use the seeded credentials:
   - **Email**: `admin@ai-solutions.co.uk`
   - **Password**: `AdminPass123!`
3. Once authenticated, the navigation button changes to **Admin Panel**. Click it to access system tools.

> [!NOTE]
> Since standard register requests (`/api/auth/register`) default to the `user` security level, new administrative accounts must be created either by updating the Mongoose `role` field to `'admin'` directly in your database collection or by editing the seed script.

### 2. Updating Website Content
Under the **Admin Panel**, administrators can manage every page dynamically without editing code:

- **Site Settings**: Customize the company name, support phone line, email inbox, office address, mission statement, homepage hero copy, hero side image, and section details.
- **Manage Services**: View, edit, add, or delete digital offerings. You can change titles, pricing, delivery speed, and detailed descriptions.
- **Manage Blogs**: Create new tech insights and articles with custom image links and categories.
- **Manage Events**: Publish new Sunderland workshops, edit dates/locations, or delete events.
- **Manage Gallery**: Keep the workspace design showcase updated by adding fresh project mockups.
- **Manage Team**: Add or remove members of the leadership team.
- **Manage Testimonials**: Create and edit client testimonials (these are instantly rendered on the Home page carousel).
- **Manage Partners**: Update logos for regional tech partners.
- **Manage Inquiries**: Review and reply to client requests. An automatic notification is sent to the client when you reply.

---

## 🎨 Theme & Responsiveness Features

- **Light/Dark Mode**: Click the **Moon / Sun** icon in the header navigation (or mobile menu) to toggle the theme instantly. The site uses CSS variables (`var(--bg-deep)`) to swap styles smoothly without flashing.
- **Responsiveness**: Flex-grids, relative sizing, collapsible navigation drawers, and snap-scrolling testimonials ensure the portal works perfectly on smartphones, tablets, laptops, and ultra-wide screens.