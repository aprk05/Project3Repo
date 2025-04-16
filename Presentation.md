
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

## 🔍 **3. Depth-wise Analysis**

This section explains the architectural decisions and internal workings of the system.

### 🧩 Architectural & Design Approaches

- **Component-Based Architecture**  
  Every UI feature is modular and reusable (e.g., `Navbar`, `UploadForm`, `ResourceCard`).

- **Responsive & Accessible Design**  
  Optimized for all screen sizes. Ensures accessibility with semantic HTML, ARIA roles, and proper contrast.

- **Scalable Folder Structure**  
  Code is organized into `pages/`, `components/`, `utils/`, and `data/` for ease of scaling and collaboration.

- **Static Site Generation (SSG)**  
  Improves performance and SEO by pre-rendering pages at build time.

- **Open Contribution Workflow**  
  Clear `CONTRIBUTING.md`, beginner-friendly issues, and GitHub Actions for CI ensure a smooth dev experience.

### 🗂️ Data Structures and Storage

- **Objects**  
  For resource metadata like titles, tags, contributors, etc.

- **Arrays**  
  To store lists of courses, uploads, and categories.

- **JSON Files**  
  Used for config-like data such as tag presets or course mappings.

- **LocalStorage (Client-side)**  
  Supports optional features like recent views or bookmarks without backend storage.

### ⚖️ Design & Technical Trade-offs

**✅ Pros:**
- Fast and simple user interface
- Encourages community engagement
- Low barrier to contribution

**❌ Cons:**
- Relies on community moderation
- No backend limits features like authentication or personalized dashboards

---


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
