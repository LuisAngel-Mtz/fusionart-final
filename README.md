# Fusion Art Ecommerce Project

An ecommerce project built with React.js + Vite.js featuring a dashboard for admins, sellers, and salaries.

In this project, I will present the development of Fusion Art, which has been built using React.js and Vite.js technologies. The project focuses on creating an e-commerce website with distinct sections, including: Home, Shop, Blog, About Us, Contact Us, Vendor Login, and Administrator Login.

Each of these sections plays a specific role in the site's functionality. For example, in the "Shop" section, users can browse and add clothing products to their shopping cart. The shopping cart conveniently displays the selected items, and during the checkout process, users can input their payment information. Upon completion, they receive a notice of the purchased products.

Access to the site is managed through a login system, which has two distinct approaches: one for vendors and one for administrators. Access to the administrator login is established using the following credentials:
- Email: admin@gmail.com
- Password: admin123

Once logged in, a dashboard is accessible which offers the following sections:
- Dashboard
- Vendors
- Production

The "Vendors" section is presented as a CRUD (Create, Read, Update, Delete) functionality, enabling the management of vendor data. New vendors can be added, and existing vendors can also be edited and deleted. Fields that can be modified include:
- Name
- Image
- Email
- Address
- Salary

From the dashboard, vendors can log in using their own credentials. For instance:
- Email: pelon@outlook.com
- Password: 12345

Upon logging in, vendors can view their individual profiles. It's important to note that only administrators can register new vendors through the dashboard.

The "Production" section also employs a CRUD approach, this time focusing on managing information about batches and production. The data you can manage includes:
- Batch Number
- Responsible's First Name
- Responsible's Last Name
- Start Date
- End Date
- Piece Type
- Number of Pieces
- Number of Defective Pieces
- Action

## Running the Project:

### Front-end

1. Open the terminal or command prompt.
2. Navigate to the "frontend" directory:

Example: PS D:\xampp\htdocs\fusionart-final> cd frontend
Example: PS D:\xampp\htdocs\fusionart-final\frontend> npm run dev
  ➜  Local:   http://localhost:5173/
### Back-end

1. Open another terminal or command prompt window.
2. Navigate to the "backend" directory:
Running the project in the backend:
Example: PS D:\xampp\htdocs\fusionart-final> cd backend
Example: PS D:\xampp\htdocs\fusionart-final\backend> npm run start
Conect or database 
This will initiate the server using nodemon, which automatically restarts the server upon changes. You'll see messages like:

[nodemon] watching path(s): .
[nodemon] watching extensions: js,mjs,json
[nodemon] starting node server.js
Inicio de conexion
Conectado a la base de datos

It's important to note that when you open the project at Local: http://localhost:5173/, the entire website will appear in Spanish. You can edit the data to customize it to your original language.
Please make sure to adjust the content according to your preferred language by modifying the relevant data within the project.
It's essential to read the Project Download Guide to understand the project installation and ensure its proper functioning.
Thank you for reading!



