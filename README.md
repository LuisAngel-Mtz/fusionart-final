# fusionart-final
An ecommerce project built with React.js + Vite.js featuring a dashboard for admins, sellers, and salaries.
In the following project, I will present to you the development of Fusion Art, which has been built using React.js and Vite.js technologies. This project focuses on creating an e-commerce website with distinct sections, including: Home, Shop, Blog, About Us, Contact Us, Vendor Login, and Administrator Login.

Each of these sections plays a specific role in the site's functionality. In the "Shop" section, for instance, users have the ability to browse and add clothing products to their shopping cart. The shopping cart conveniently displays the selected items, and during the checkout process, users can input their payment information. Upon completion, they are provided with a notice of the purchased products.
Access to the site is managed through a login system, which has two distinct approaches: one for vendors and one for administrators. Access to the administrator login is established using the following credentials:
Email: admin@gmail.com
Password: admin123
Once inside, a dashboard is accessible which offers the following sections:
Dashboard
Vendors
Production
The "Vendors" section is presented as a CRUD (Create, Read, Update, Delete) functionality, enabling the management of vendor data. You can add new vendors and modify the following fields (it's important to note that existing vendors can also be edited and deleted):
Name
Image
Email
Address
Salary
From the dashboard, you have the capability to add vendors. Once added, these vendors can log in using their own credentials. For instance:
Email: pelon@outlook.com
Password: 12345
Upon logging in, vendors can view their individual profiles. It's worth mentioning that only administrators can register new vendors through the dashboard.
The "Production" section also employs a CRUD approach, this time focusing on managing information about batches and production. The data you can register, edit, and delete in this section includes:
Batch Number
Responsible's First Name
Responsible's Last Name
Start Date
End Date
Piece Type
Number of Pieces
Number of Defective Pieces
Action
To run the project:

Front-end:

Open the terminal or command prompt.

Navigate to the "frontend" directory:

arduino
Copy code
PS C:\xampp\htdocs\fusionart-final> cd frontend
Run the following command to start the development server:

arduino
Copy code
PS C:\xampp\htdocs\fusionart-final\frontend> npm run dev
This will initiate the Vite development server. It will provide you with URLs to access the project locally, such as:

Local: http://localhost:5173/
Network: Use the --host flag to expose it externally.
Press 'h' to show help.
Back-end:

Open another terminal or command prompt window.

Navigate to the "backend" directory:

Copy code
PS C:\xampp\htdocs\fusionart-final> cd backend
Run the following command to start the back-end server:

PS C:\xampp\htdocs\fusionart-final\backend> npm run start
This will initiate the server using nodemon, which will automatically restart the server upon changes. You'll see messages like:

[nodemon] watching path(s): .
[nodemon] watching extensions: js,mjs,json
[nodemon] starting node server.js
Inicio de conexion
Conectado a la base de datos
Keep both the front-end and back-end servers running simultaneously to access and interact with the Fusion Art project.
