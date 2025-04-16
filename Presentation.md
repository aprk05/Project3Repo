
# 📚 **AcadVault2.0: Empowering Academic Excellence**

> **Repository**: [AcadVault/AcadVault2.0](https://github.com/AcadVault/AcadVault2.0)  
> **Live Site**: [acadvault.vercel.app](https://acadvault.vercel.app)  
> **License**: MIT  
> **Initiated by**: *Tikam Singh Alma*

---

## 🌟 **1. Project Overview**

**AcadVault2.0** is an open-source platform built to foster academic excellence at **DA-IICT**.  
It acts as a collaborative vault where students can:

- 📂 **Browse** academic resources
- 📤 **Contribute** to the community
- 💬 **Engage** through active discussions

Our aim is to enhance collective learning and knowledge sharing.

---

## 🧠 **2. Breadth-wise Understanding**

This section provides a general overview of the platform's features, technologies, and user value.

### 🔧 Core Features

#### 📚 Browse Academic Resources  
Explore a wide variety of resources including:
- Lecture notes
- Previous year question papers
- Lab manuals
- Project reports

Organized via course codes, semesters, and faculty names for easy access.

#### 📤 Upload New Materials  
Users can upload materials with descriptions and tags. This promotes:
- Knowledge sharing
- Peer-to-peer learning
- Community-driven content curation

#### 📣 Community Engagement  
Join our [Discord Community](#) to:
- Discuss doubts and academic queries
- Get advice from seniors
- Stay informed about updates or events

### 🛠 Tech Stack Overview

| Technology     | Purpose & Reason for Use                                                                 |
|----------------|-------------------------------------------------------------------------------------------|
| **Next.js**     | Enables server-side rendering (SSR) and static site generation (SSG)                    |
| **React (via Next.js)** | Provides modular, component-based architecture                                       |
| **Tailwind CSS**| Utility-first CSS for fast and consistent UI design                                      |
| **JavaScript**  | Core programming language for both frontend and backend logic                            |
| **Vercel**      | Deploys and hosts the project with built-in CI/CD capabilities                          |
| **GitHub**      | Hosts codebase, handles issue tracking and collaboration                                |

---

Absolutely! Here's a **refined version of the "How It Works" and "Implementation Details" sections** — now seamlessly integrated and organized just like in your original README style:

---

## 🔍 **3. Depth-wise Analysis**

This section explains the architectural decisions, internal logic, and technical structuring behind **AcadVault2.0**.

---

### 🧩 **How It Works**

AcadVault2.0 runs as a **serverless static web application** powered by **Next.js** using **Static Site Generation (SSG)**. It does not rely on a database or backend; instead, it uses structured `.json` files to simulate a lightweight data layer.

Key functional workflows:

- **Homepage** fetches resource data from JSON and renders it using dynamic React components
- **Upload page** simulates file submission, allowing users to input metadata (mock functionality for now)
- **Course-specific pages** are statically generated from course codes and render only relevant materials
- **Filtering & Searching** allow users to refine resources by tags, course, and title
- **LocalStorage** is used for features like recent views or bookmarks (fully client-side)

---

### 🛠 **Implementation Details**

#### ⚙️ **Architecture & Design**

- **Component-Based Architecture**  
  Modular components like `Navbar`, `UploadForm`, and `ResourceCard` ensure reusability and maintainability

- **Responsive & Accessible Design**  
  Built with Tailwind CSS, responsive across devices, and follows accessibility guidelines (semantic HTML, ARIA roles, color contrast)

- **Folder Structure for Scalability**  
  Clear separation into `components/`, `pages/`, `utils/`, and `data/` helps organize logic and scale the app

- **Static Site Generation (SSG)**  
  Next.js builds the app statically for performance, SEO, and low hosting costs

- **Open Contribution Workflow**  
  Easy to contribute via GitHub issues and PRs, with CI tools (GitHub Actions) integrated

---

### 🧠 **Data Structures and Storage**

#### 1. **JSON-Based Storage**
Used to store:
- Resources (`resourceData.json`)
- Courses (`courses.json`)
- Tags (`tags.json`)

Easily extendable and ideal for static generation.

#### 2. **Object-Oriented Modeling**

- **Resource Object**: Contains title, description, course code, file URL, tags, uploader, date, etc.
- **Course Object**: Maps course codes to descriptive names
- **Tag Object**: Standardizes tag-based filtering

#### 3. **Array Structures**
Resources, tags, and courses are stored as arrays of objects, allowing:
- Easy mapping in React
- Filtering, sorting, and pagination using native JS

#### 4. **Client-Side LocalStorage**
Stores:
- Recently viewed resources
- Bookmarks
- (In future) Preferences like theme mode or user history

Lightweight, persistent, and works without backend storage.

---

### 🧠 Summary of Design Rationale

| Design Element     | Reasoning                                                                 |
|--------------------|--------------------------------------------------------------------------|
| JSON files         | Lightweight, version-controlled, ideal for static frontend builds        |
| Object arrays      | Easy integration with JavaScript and React components                    |
| Tag & Course maps  | Enhance organization and enable filterable UI                            |
| LocalStorage       | Offers a minimal client-side state layer for better UX                   |

---

### ⚖️ Design & Technical Trade-offs

**✅ Pros:**
- Fast and simple user interface
- Encourages community engagement
- Low barrier to contribution

**❌ Cons:**
- Relies on community moderation
- No backend limits features like authentication or personalized dashboards

---

## 🛠️ **4. How to Run the Software**

Follow these steps to set up and run AcadVault2.0 locally:

### 📥 Install `fnm` (Fast Node Manager)

```bash
winget install Schniz.fnm
```

> *For non-Windows OS, see [fnm GitHub](https://github.com/Schniz/fnm).*

---

### 📦 Install Node.js (v22)

```bash
fnm install 22
```

> Ensures compatibility with all project dependencies.

---

### 🔍 Verify Installation

Check Node.js and npm versions:

```bash
node -v    # Should print: v22.14.0
npm -v     # Should print: 10.9.2
```

---

### 🚀 Run the Project Locally

```bash
git clone https://github.com/AcadVault/AcadVault2.0.git
cd AcadVault2.0
npm install
npm run dev
```

- ✅ **Local Development URL**: [http://localhost:3000](http://localhost:3000)  
  > View the app running on your local machine.

- 🌐 **Live Production Site**: [https://acadvault.vercel.app](https://acadvault.vercel.app)  
  > Visit the deployed version online.

---

## 🚀 **5. Suggested Improvements**

- 🔍 **Advanced Search** with filters and tags  
- 🔐 **User Authentication** for profiles and upload tracking  
- ⭐ **Rating and Review System** for resources  
- 📱 **Mobile Optimization** for better responsiveness  
- ❓ **Quiz Format Support** for practice and self-assessment  
- 🏷️ **Question Tagging System** to categorize questions by topics, difficulty, and exam patterns  

---

## 👥 **6. Team Members**

- **[Your Name]**
- **[Collaborator 1]**
- **[Collaborator 2]**

---

## 📚 **7. References**

- [AcadVault2.0 GitHub Repository](https://github.com/AcadVault/AcadVault2.0)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---
