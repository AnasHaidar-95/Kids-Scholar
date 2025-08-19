# Kids-Scholar - Interactive Learning Platform

<p align="center">
  <img src="https://res.cloudinary.com/dos9zxky6/image/upload/v1753216648/logo_ydxler.png" alt="Kids-Scholar Logo" width="400">
</p>

<p align="center">
  An engaging and interactive educational web application designed to make learning fun for children.
  <br />
  <a href="#key-features"><strong>Explore Features »</strong></a>
  <br />
  <br />
  <a href="#getting-started">Getting Started</a>
  ·
  <a href="#api-endpoints">API Endpoints</a>
  ·
  <a href="#contributing">Contributing</a>
</p>

---

## About The Project

**Kids-Scholar** is a full-stack MERN application built to provide a rich, gamified learning experience for kids. The platform focuses on core subjects like Math, Science, and English, delivering educational content through interactive games, captivating stories, and challenging quizzes.

With a dedicated admin panel for content management and a student-facing interface for learning, Kids-Scholar aims to be a comprehensive tool for both educators and young learners.

---

## Key Features

-   **Interactive Learning Modules**:
    -   **📚 Stories**: A digital library of illustrated, page-turning storybooks.
    -   **🎮 Games**: Fun, educational games including memory challenges and arithmetic practice.
    -   **🧠 Quizzes**: Multiple-choice quizzes to test knowledge in various subjects.
    -   **📖 Lessons**: Structured lessons with video content and interactive elements.
-   **User & Progress Management**:
    -   **👤 Authentication**: Secure JWT-based authentication for `student` and `admin` roles.
    -   **📊 Progress Tracking**: Monitors user activity, scores, and content completion.
    -   **🏆 Badges & Gamification**: Awards badges for achievements to motivate learners.
-   **Administrative Control**:
    -   **⚙️ Admin Dashboard**: A comprehensive dashboard to view platform statistics (user counts, content counts, etc.).
    -   **📝 Full CRUD Functionality**: Admins can create, read, update, and delete all educational content (Users, Stories, Games, Quizzes, Lessons).
-   **Modern Tech**:
    -   **⚛️ Rich Frontend**: Built with React and Vite for a fast, responsive user experience.
    -   **🎨 Styled with Tailwind CSS**: A modern, clean, and fully responsive design.
    -   **🚀 3D Models**: Integrated 3D models using `@react-three/fiber` to enhance engagement.

---

## Tech Stack

This project is built with a modern and robust technology stack.

**Frontend:**

-   [React](https://reactjs.org/)
-   [Vite](https://vitejs.dev/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [React Router](https://reactrouter.com/)
-   [Axios](https://axios-http.com/)
-   [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) (for 3D)
-   [Chart.js](https://www.chartjs.org/) & [Recharts](https://recharts.org/) (for admin dashboard)

**Backend:**

-   [Node.js](https://nodejs.org/)
-   [Express.js](https://expressjs.com/)
-   [MongoDB](https://www.mongodb.com/)
-   [Mongoose](https://mongoosejs.com/)
-   [JSON Web Tokens (JWT)](https://jwt.io/)
-   [Bcrypt.js](https://github.com/dcodeIO/bcrypt.js)
-   [Cloudinary](https://cloudinary.com/) (for image storage)
-   [Multer](https://github.com/expressjs/multer) (for file uploads)

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js (v16 or later)
-   npm
-   MongoDB (local instance or a connection URI from MongoDB Atlas)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/AnasHaidar-95/Kids-Scholar.git
    cd Kids-Scholar
    ```

2.  **Setup Backend:**
    -   Navigate to the backend directory:
        ```sh
        cd Backend
        ```
    -   Install NPM packages:
        ```sh
        npm install
        ```
    -   Create a `.env` file in the `Backend` directory and add the following environment variables:
        ```env
        PORT=5300
        DBURL=YOUR_MONGODB_CONNECTION_URI
        JWT_SECRET=YOUR_SUPER_SECRET_KEY
        CLOUDINARY_CLOUD_NAME=YOUR_CLOUDINARY_CLOUD_NAME
        CLOUDINARY_API_KEY=YOUR_CLOUDINARY_API_KEY
        CLOUDINARY_API_SECRET=YOUR_CLOUDINARY_API_SECRET
        ```
    -   Start the backend server:
        ```sh
        npm run dev
        ```

3.  **Setup Frontend:**
    -   Navigate to the frontend directory from the root folder:
        ```sh
        cd Frontend
        ```
    -   Install NPM packages:
        ```sh
        npm install
        ```
    -   Start the frontend development server:
        ```sh
        npm run dev
        ```

The application should now be running on `http://localhost:5173` (or another port specified by Vite).

---

## API Endpoints

The backend provides a RESTful API to manage the platform's data. All admin-protected routes require a valid JWT.

| Method | Endpoint                  | Description                                       | Access   |
| :----- | :------------------------ | :------------------------------------------------ | :------- |
| POST   | `/api/auth/register`      | Register a new user.                              | Public   |
| POST   | `/api/auth/login`         | Login a user and get a token.                     | Public   |
| GET    | `/api/users/profile`      | Get the current user's profile.                   | Private  |
| GET    | `/api/users/all`          | Get all users (paginated).                        | Admin    |
| DELETE | `/api/users/delete/:id`   | Delete a user by ID.                              | Admin    |
| GET    | `/api/stories`            | Get all stories.                                  | Public   |
| POST   | `/api/stories`            | Add a new story.                                  | Admin    |
| GET    | `/api/stories/:id`        | Get a single story by ID.                         | Private  |
| PATCH  | `/api/stories/:id`        | Update a story.                                   | Admin    |
| DELETE | `/api/stories/:id`        | Delete a story.                                   | Admin    |
| GET    | `/api/lessons`            | Get all lessons.                                  | Public   |
| POST   | `/api/lessons`            | Add a new lesson.                                 | Admin    |
| GET    | `/api/games`              | Get all games.                                    | Public   |
| POST   | `/api/games`              | Add a new game.                                   | Admin    |
| GET    | `/api/quizzes`            | Get all quizzes.                                  | Admin    |
| POST   | `/api/quizzes`            | Add a new quiz.                                   | Admin    |
| GET    | `/api/progresses`         | Get the current user's progress.                  | Private  |
| POST   | `/api/progresses`         | Add new progress (for an admin).                  | Admin    |
| PATCH  | `/api/progresses`         | Update user's progress on a piece of content.     | Private  |
| POST   | `/api/upload`             | Upload an image to Cloudinary.                    | Private  |

---

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## License

Distributed under the ISC License. See `LICENSE` file for more information (note: a LICENSE file was not provided, but `package.json` specifies ISC).

---

## Contact

Project Link: [https://github.com/AnasHaidar-95/Kids-Scholar](https://github.com/AnasHaidar-95/Kids-Scholar)
