const employees = [
  {
    id: 1,
    email: "john.doe@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create a responsive login page using React and Tailwind.",
        taskDate: "2026-07-14",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Resolve alignment issues in the navigation bar.",
        taskDate: "2026-07-10",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Connect login form with backend API.",
        taskDate: "2026-07-12",
        category: "Backend"
      }
    ]
  },
  {
    id: 2,
    email: "jane.smith@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard",
        taskDescription: "Develop employee dashboard UI.",
        taskDate: "2026-07-15",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Write Documentation",
        taskDescription: "Document REST API endpoints.",
        taskDate: "2026-07-11",
        category: "Documentation"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Bug Fixing",
        taskDescription: "Resolve reported UI bugs.",
        taskDate: "2026-07-16",
        category: "Maintenance"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy App",
        taskDescription: "Deploy frontend to production.",
        taskDate: "2026-07-09",
        category: "Deployment"
      }
    ]
  },
  {
    id: 3,
    email: "michael.brown@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Schema",
        taskDescription: "Design MongoDB collections.",
        taskDate: "2026-07-14",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "JWT Authentication",
        taskDescription: "Implement JWT authentication.",
        taskDate: "2026-07-08",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Redis Cache",
        taskDescription: "Cache frequently requested APIs.",
        taskDate: "2026-07-18",
        category: "Backend"
      }
    ]
  },
  {
    id: 4,
    email: "emily.johnson@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review pull requests from the team.",
        taskDate: "2026-07-10",
        category: "Review"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Profile Page",
        taskDescription: "Develop employee profile page.",
        taskDate: "2026-07-15",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Payment Module",
        taskDescription: "Integrate payment gateway.",
        taskDate: "2026-07-07",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Testing",
        taskDescription: "Write unit tests for services.",
        taskDate: "2026-07-19",
        category: "Testing"
      }
    ]
  },
  {
    id: 5,
    email: "david.wilson@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Landing Page",
        taskDescription: "Build landing page UI.",
        taskDate: "2026-07-14",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "SEO Optimization",
        taskDescription: "Improve website SEO.",
        taskDate: "2026-07-06",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Email Service",
        taskDescription: "Configure email notifications.",
        taskDate: "2026-07-09",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Performance Testing",
        taskDescription: "Optimize page loading speed.",
        taskDate: "2026-07-20",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Accessibility",
        taskDescription: "Improve accessibility compliance.",
        taskDate: "2026-07-21",
        category: "Frontend"
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "123" 
  }
];

export const setLocalStorage = () => {
   localStorage.setItem('employees', JSON.stringify(employees))
   localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
   const employeesData = localStorage.getItem('employees')
   JSON.parse(employeesData)
  //  console.log(JSON.parse(employeesData));
   
   const adminData = localStorage.getItem('admin')
   JSON.parse(adminData)
  //  console.log(JSON.parse(adminData));

   return {employees, admin}
   
}