# Task Manager Frontend — Setup Notes

## 1. Install dependencies

```bash
npm install axios react-router-dom bootstrap
```

## 2. Copy files into your project

Drop these files into your existing `frontend/src` folder, matching the
structure you already have (overwrite `App.jsx` and `main.jsx`):

```
src/
├── api/
│   └── axios.js
├── components/
│   ├── Navbar.jsx
│   └── TaskCard.jsx
├── pages/
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Dashboard.jsx
│   └── Admin.jsx
├── App.jsx
├── main.jsx
└── index.css
```

Your `main.jsx` currently does `import 'boot'` — replace it with the new
`main.jsx` provided here, which imports Bootstrap's CSS and JS bundle
correctly (`bootstrap/dist/css/bootstrap.min.css` and
`bootstrap/dist/js/bootstrap.bundle.min.js`), plus the custom `index.css`
theme file.

## 3. Set your API URL

Your `.env` file needs:

```
VITE_API_URL=http://localhost:5000/api
```

Adjust the port/path to match your backend. Every request in `api/axios.js`
uses this as the base URL — nothing is hardcoded.

## 4. Expected backend responses (for reference)

- `POST /auth/login` → `{ token, user: { name, email, ... } }`
- `POST /auth/register` → success message
- `GET /tasks` → array of task objects `{ _id, title, description, status }`
- `POST /tasks` → the created task object
- `PUT /tasks/:id` → the updated task object
- `DELETE /tasks/:id` → success message
- `GET /admin/stats` → `{ totalUsers, totalTasks }`
- `GET /admin/tasks` → array of tasks, each with a populated `user: { name, email }`

If your backend's field names differ slightly, adjust the `.data` access
points in the pages — everything else will keep working as-is.

## 5. Run it

```bash
npm run dev
```

Visit `/login` or `/register` to get a token, then `/dashboard` and `/admin`.