# 📋 Task and Team Management System

A comprehensive MERN Stack application for managing tasks, teams, projects, employees, timesheets, and attendance tracking. This system provides a complete solution for organizations to streamline their workflow management and team coordination.

## 🎥 Project Demo
![task-management](https://github.com/user-attachments/assets/9722fce1-1941-4669-b753-5ff16d84de75)

https://github.com/user-attachments/assets/3373c67f-7230-44d4-9aec-17568af49c32

## ✨ Features

### 🔐 Authentication & Authorization
- User registration and login system
- JWT-based authentication
- Secure password encryption with bcrypt
- Protected routes with middleware

### 👥 Employee Management
- Add, view, and manage employee records
- Track employee details (ID, contact info, CNIC, role, status)
- Employee profile management
- Gender and date of birth tracking
- Employment status monitoring (Active, On Leave, etc.)

### 📊 Project Management
- Create and manage multiple projects
- Project status tracking (On Hold, In Progress, Testing, Completed)
- Priority levels (Most Important, Important, Least Important)
- Client name and project description management
- Project start date tracking

### ✅ Task Management
- Create and assign tasks to employees
- Link tasks to specific projects
- Set task priorities
- Task description and tracking
- View all tasks in one place
- Real-time task status updates

### ⏰ Timesheet Management
- Log work hours for specific tasks
- Track time spent on projects
- Progress monitoring
- Timesheet statistics (Development, Testing, Other)
- Date and notes tracking
- Multiple timesheet types support

### 📅 Attendance System
- Mark time in and time out
- Automatic working hours calculation
- Day-wise attendance tracking
- Employee attendance history
- Time duration calculation in hours and minutes

### 📈 Dashboard
- Overview of all system users
- Quick access to key metrics
- Centralized management interface

## 🛠️ Technologies Used

### Backend
- **Node.js** (v16.16.0+) - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** (jsonwebtoken) - Authentication
- **bcrypt** - Password hashing
- **dotenv** - Environment variable management
- **cors** - Cross-origin resource sharing
- **body-parser** - Request body parsing

### Frontend
- **React.js** (v18.3.1) - UI library
- **React Router DOM** (v6.23.0) - Client-side routing
- **Chakra UI** (v2.8.2) - Component library
- **Axios** - HTTP client
- **React Icons** - Icon library
- **Framer Motion** - Animation library
- **Bootstrap** (v5.3.3) - CSS framework

### Development Tools
- **nodemon** - Auto-restart server
- **react-scripts** - Create React App scripts
- **Docker** - MongoDB containerization (optional)

## 📁 Project Structure

```
task-management-using-mern-stack/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection
│   ├── middleware/
│   │   └── auth.js               # JWT authentication middleware
│   ├── models/
│   │   ├── users.js              # User schema
│   │   ├── employees.js          # Employee schema
│   │   ├── projects.js           # Project schema
│   │   ├── tasks.js              # Task schema
│   │   ├── timesheets.js         # Timesheet schema
│   │   └── attendances.js        # Attendance schema
│   ├── routes/
│   │   ├── auth.js               # Authentication routes
│   │   ├── dashboard.js          # Dashboard routes
│   │   ├── employee.js           # Employee CRUD operations
│   │   ├── project.js            # Project CRUD operations
│   │   ├── task.js               # Task CRUD operations
│   │   ├── timesheet.js          # Timesheet operations
│   │   └── attendance.js         # Attendance tracking
│   ├── .env                      # Environment variables
│   ├── app.js                    # Express server setup
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── manifest.json
│   ├── src/
│   │   ├── assets/               # Images and static files
│   │   ├── components/
│   │   │   ├── navbar/           # Navigation bar component
│   │   │   └── sidenav/          # Side navigation component
│   │   ├── layouts/
│   │   │   ├── auth/             # Login & Register pages
│   │   │   ├── dashboard/        # Dashboard page
│   │   │   ├── employees/        # Employee management
│   │   │   ├── projects/         # Project management
│   │   │   ├── tasks/            # Task management
│   │   │   ├── timesheets/       # Timesheet management
│   │   │   └── attendance/       # Attendance tracking
│   │   ├── App.js                # Main app component
│   │   ├── index.js              # React entry point
│   │   └── index.css             # Global styles
│   ├── .env                      # Frontend environment variables
│   └── package.json
│
└── README.md
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16.16.0 or higher)
- npm (v8.11.0 or higher)
- MongoDB (local installation or Docker)
- Git

### Step 1: Clone the Repository
```bash
git clone https://github.com/anish-dev09/TASK-AND-TEAM-MANAGEMENT-SYSTEM.git
cd TASK-AND-TEAM-MANAGEMENT-SYSTEM
```

### Step 2: Setup MongoDB

#### Option A: Using Docker (Recommended)
```bash
docker run -d --name mongodb-task-management -p 27017:27017 mongo:latest
```

#### Option B: Local MongoDB Installation
- Download and install MongoDB Community Edition from [MongoDB Official Website](https://www.mongodb.com/try/download/community)
- Start MongoDB service

### Step 3: Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Configure environment variables
# Create .env file with the following content:
# MONGODB_URI=mongodb://127.0.0.1:27017/task-management
# JWT_SECRET_KEY=your_jwt_secret_key_here
# PORT=8000

# Start the backend server
node app.js
```

The backend server will start on **http://localhost:8000**

### Step 4: Frontend Setup
```bash
# Navigate to frontend directory (from root)
cd frontend

# Install dependencies
npm install

# Configure environment variables
# Create .env file with the following content:
# REACT_APP_API_URL=http://localhost:8000

# Start the frontend development server
npm start
```

The frontend application will start on **http://localhost:3000**

## 🔧 Environment Variables

### Backend (.env)
```env
MONGODB_URI=mongodb://127.0.0.1:27017/task-management
JWT_SECRET_KEY=thisisrandomsecretkeyfortaskmang
PORT=8000
```

### Frontend (.env)
```env
REACT_APP_API_URL=http://localhost:8000
```

## 📡 API Endpoints

### Authentication
- `POST /api/register` - Register new user
- `POST /api/login` - User login

### Dashboard
- `GET /api/dashboard` - Get dashboard data

### Employees
- `POST /api/employee` - Add new employee
- `GET /api/employees` - Get all employees

### Projects
- `POST /api/project` - Create new project
- `GET /api/projects` - Get all projects

### Tasks
- `POST /api/task` - Create new task
- `GET /api/tasks` - Get all tasks

### Timesheets
- `POST /api/timesheet` - Add timesheet entry
- `GET /api/timesheets` - Get all timesheets
- `GET /api/timesheets-stats` - Get timesheet statistics

### Attendance
- `POST /api/attendance` - Mark attendance (Time In/Out)
- `GET /api/attendances` - Get attendance records

## 🎨 UI Features

- **Responsive Design** - Works on desktop, tablet, and mobile devices
- **Modern UI** - Built with Chakra UI and Bootstrap
- **Smooth Animations** - Powered by Framer Motion
- **Intuitive Navigation** - Side navigation and top navbar
- **Modal Dialogs** - For adding and viewing records
- **Form Validation** - Client-side validation for all forms

## 👤 Default Users

After setting up, you can register a new account through the registration page.

## 🔒 Security Features

- Password hashing with bcrypt (10 salt rounds)
- JWT token-based authentication
- Token expiration (1 hour)
- Protected API routes
- CORS enabled
- Environment variable protection

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running on port 27017
- Check the connection string in backend/.env
- If using Docker, verify the container is running: `docker ps`

### Port Already in Use
- Backend: Change PORT in backend/.env
- Frontend: Set PORT environment variable before starting

### npm Installation Errors
- Delete node_modules and package-lock.json
- Run `npm install` again
- Try `npm install --legacy-peer-deps` if peer dependency issues occur

## 📝 Future Enhancements

- [ ] Role-based access control (Admin, Manager, Employee)
- [ ] Email notifications
- [ ] Report generation (PDF/Excel)
- [ ] Advanced analytics dashboard
- [ ] File attachments for tasks
- [ ] Calendar integration
- [ ] Real-time notifications
- [ ] Task comments and discussions
- [ ] Performance reviews module
- [ ] Leave management system

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Anish Dev**
- GitHub: [@anish-dev09](https://github.com/anish-dev09)

## 🙏 Acknowledgments

- Original concept by [Gos Hurarah](https://github.com/goshurarah)
- Thanks to all contributors and the open-source community

## 📞 Support

For support, email your-email@example.com or create an issue in the repository.

---

⭐ If you found this project helpful, please give it a star!

**Happy Coding! 🚀**

