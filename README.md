# Holidaze Project

## 📸 Screenshots & Mockups

<img width="1749" height="840" alt="image" src="https://github.com/user-attachments/assets/7e95b14c-7522-4240-bd86-ce01a5d46778" />


### 🌐 Visit the live site: [DevSquare](https://thedevsquare.netlify.app/?page=1)

# The Dev Square

## 📌 About the Project

🔐 **Authentication & Security**

- Registration and login system for students.
- AuthGuard protects all routes, ensuring only registered users can access the platform.
- Private, student-only environment for safe interaction.

📸 **Post & Share**

- Users can create posts with an image and description.
- Edit or delete your own posts.
- Other users can comment on posts to engage in discussions.
- Posts are displayed with pagination for smooth browsing.

👥 **Social Interaction**

- Follow and unfollow other students.
- View your followers and the list of people you follow.
- Engage through comments and social connections.

🖼️ **Profile Customization**

- Update avatar, profile banner, and bio.
- Personalized profile page to showcase yourself.

📱 **User Experience**
- Clean, student-friendly interface.
- Browsing and interaction optimized with pagination and profile controls.
---

<p  align="right"><a href="#top">⬆️ Back to Top</a></p>

## 🚀 Getting Started

### 🔹 Clone or Download

To get a copy of this project, you can **clone** or **fork** the repository:

```bash
git clone https://github.com/tomive01888/DevSquare-JS2/
```

Alternatively, download the ZIP file and extract it.

### 🔹 Install Dependencies

```bash
npm install
```
### 🔹 Run the Development Server

```bash
npm run dev
```
**Installed dependencies:**

<details style="margin-bottom: 10px, color: #ff00ff;">
  <summary style="color: #ff00ff; user-select: none; cursor: pointer;"><strong>Click to view dependencies</strong></summary>

- **Tailwind CSS** – Utility-first CSS framework
- **@tailwindcss/vite** – Tailwind integration for Vite
- **Vite** – Build tool and development server
- **ESLint** – Linting for clean code

</details>

<p  align="right"><a href="#top">⬆️ Back to Top</a></p>

---
## Other available scripts
| Command           | Description                                                                 |
|-------------------|-----------------------------------------------------------------------------|
| `npm run build`   | Builds the project for production                                            |
| `npm run preview` | Runs a locally hosted preview of the built production (must run build first) |
| `npm run test`    | Runs the unit tests with Vitest                                              |
| `npm run lint`    | Checks the code for style and formatting issues                             |


---

## 🔑 Environment Variables

This project requires an **API key** for restricted actions.

1. Get your API key from [Noroff API Key Tool](https://docs.noroff.dev/docs/v2/auth/api-key#api-key-tool).
2. Create a `.env` file in the root directory.
3. Add the following line:

```bash
VITE_API_KEY=<your_api_key>
```

Replace `<your_api_key>` with the actual API key.

4. Add `.env` in `.gitignore` to stop it from being pushed publicly.

---

<p  align="right"><a href="#top">⬆️ Back to Top</a></p>

## API Reference

This project interacts with the **Noroff Social API**, which provides endpoints for social post, profiles and other interactions.
For detailed documentation, visit: [Noroff Social](https://docs.noroff.dev/docs/v2/social/posts)

### Base URL:

```
https://api.noroff.dev/api/v2
```

⚠️ Some of the endpoints requires authenticated keys to use.
Read more in the link above about which requires authentication and more on url parameters.

---

## 🛠 Built With

<div style="display: flex; gap: 10px;">
  <a href="https://developer.mozilla.org/docs/Web/HTML">
    <img title="HTML" height="48px" width="48px" src="https://skillicons.dev/icons?i=html"/>
  </a>  
  <a href="https://developer.mozilla.org/docs/Web/JavaScript">
    <img title="JavaScript" height="48px" width="48px" src="https://skillicons.dev/icons?i=js"/>
  </a>  
  <a href="https://tailwindcss.com/">
    <img title="Tailwind CSS" height="48px" width="48px" src="https://skillicons.dev/icons?i=tailwind"/>
  </a>   
  <a href="https://vite.dev/">
    <img title="Vite" height="48px" width="48px" src="https://skillicons.dev/icons?i=vite"/>
  </a>
</div>


---

## Resources

- **Noroff Social API** – Used for fetching post, profile and other social interactions.
- **AI Assistance** – Coding support and logic ideas, verify code structure, suggest optimizations and ensure accessibility compliance (WCAG).
- **Tailwind CSS Docs** – Reference for styling and utilities


---

## 📩 Contact

🔗 **GitHub:** [tomive01888](https://github.com/tomive01888)

---

<p  align="right"><a href="#top">⬆️ Back to Top</a></p>
