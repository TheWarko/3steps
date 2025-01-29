# 🚀 3 Steps to Fly - Registration Form 🎉

Welcome to **3 Steps to Fly**, a sleek, responsive, and fully interactive **multi-step registration form** built with cutting-edge technology. Watch the magic happen as you fill in your details! ✨

![Preview of the form in action](https://github.com/TheWarko/3steps/blob/main/public/preview.gif)

---

## 🛠 Technologies Used

- **Next.js 15** - Modern React framework for performance & scalability
- **TypeScript** - Type safety for a robust codebase
- **CSS Modules** - Custom styling without external libraries
- **Jest & React Testing Library** - Unit testing
- **Cypress** - End-to-end testing
- **Docker** - Containerized for seamless deployment

---

## 🚀 Getting Started

### 🔧 Run Locally

1️⃣ **Install dependencies**  
 npm install

2️⃣ **Start the development server**  
 npm run dev

#### App available at: http://localhost:3000

3️⃣ **Build for production**  
 npm run build

4️⃣ **Run tests locally**

**Unit tests**

npm run test

**E2E tests**

npx cypress run

---

## 🐳 Run with Docker

1️⃣ **Build the Docker image**  
 docker build -t mytest .

2️⃣ **Run tests inside Docker**  
 docker run -v \$(pwd):/mnt -p 9090:9090 -w /mnt mytest ./scripts/tests.sh

3️⃣ **Run the application in Docker**  
 docker run -v \$(pwd):/mnt -p 9090:9090 -w /mnt mytest ./scripts/run.sh

#### App available at: http://localhost:9090
