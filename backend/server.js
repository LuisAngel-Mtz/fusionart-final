import express from "express";
import mysql from 'mysql';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import multer from "multer";
import path from "path";

const app = express();

app.use(cors(
    {
        origin: ["http://localhost:5173"],
        methods: ["POST", "GET", "PUT","DELETE"],
        credentials: true
    }
));


app.use(cookieParser());
app.use(express.json());
app.use(express.static('public'));

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fusionart2',
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/img')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    },
})

const upload = multer({
    storage: storage,
})

con.connect(function (err) {
    if (err) {
        console.log('Error al conectar a la base de datos')
    } else {
        console.log('Conectado a la base de datos')
    }
})


app.post('/logvendedor', (req, res) => {
    const sql = "SELECT * FROM  vendedor where email = ?";
    con.query(sql, [req.body.email], (err, result) => {
        if (err) return res.json({ Status: 'Error', Error: "Error en el servidor", });
        if (result.length > 0) {
            bcrypt.compare(req.body.password.toString(), result[0].password, (err, response) => {
                if (err) return res.json({ Status: 'Error', Error: "Error en la contraseña", });
                    if (response) {
                        const token = jwt.sign({ role: "vendedor", id: result[0].id }, "jwt-secret-key", { expiresIn: '1d' });
                        res.cookie('token', token);
                        return res.json({ Status: "Correcto", id: result[0].id })
                    } else {
                        return res.json({ Status: "Error", Error: "Los datos no son correctos" });
                    }
            });
        } else  { 
            return res.json({ Status: "Error", Error: "Los datos no son correctos" });
        }
    })
})


app.get('/obtenervendedor', (req, res) => {
    const sql = "SELECT * FROM vendedor";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Error: "No se pudo obtener los vendedores" });
        return res.json({ Status: "Correcto", Result: result })
    })
})

app.get('/get/:id', (req, res) => {
    console.log('entro al back')
    const id = req.params.id;
    const sql = "SELECT * FROM vendedor where id = ? "
    con.query(sql, [id], (err, result) => {
        console.log(result)
        if (err) return res.json({ Error: "No se pudo obtener los datos del vendedor" });
        return res.json({ Status: "Correcto", Result: result })
        
    })
})

app.put('/actualizar/:id', (req, res) => {
    const id = req.params.id;
    const salary = req.body.salary;
    const name = req.body.name;
    const address = req.body.address;
    const email = req.body.email;

    const sql = "UPDATE vendedor set name = ?, email = ?, address = ?, salary = ? WHERE id = ?";
    con.query(sql, [name, email, address, salary, id], (err, result) => {
        if (err) return res.json({ Error: "No se pudo actualizar el vendedor" });
        return res.json({ Status: "Correcto" })
    })
})

app.delete('/eliminarvendedor/:id', (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM vendedor WHERE id = ?";
    con.query(sql, [id], (err, result) => {
        if (err) return res.json({ Error: "No se pudo eliminar el vendedor" });
        return res.json({ Status: "Correcto" })
    })
})

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json({ Error: "Tu no estas autenticado" });
    } else {
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if (err) return res.json({ Error: "Token wrong" });
           req.role = decoded.role;
           req.id = decoded.id;
            next();
        })
    }
}

app.get('/dashboard', verifyUser, (req, res) => {
    return res.json({ Status: "Correcto", role: req.role, id: res.id})
})

app.get('/adminCount', (req, res) => {
    const sql = "SELECT count(id) as admin from usuarios";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: 'Error', Error: "Error en el servidor", });
        return res.json(result);
    })
})

app.get('/vendedorCount', (req, res) => {
    const sql = "SELECT count(id) as vendedor from vendedor";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: 'Error', Error: "Error en el servidor", });
        return res.json(result);
    })
})


app.get('/salary', (req, res) => {
    const sql = "SELECT sum(salary) as sumOfSalary from vendedor";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: 'Error', Error: "Error en el servidor", });
        return res.json(result);
    })
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM  usuarios where email = ? AND password = ?";
    con.query(sql, [req.body.email, req.body.password], (err, result) => {
        if (err) return res.json({ Status: 'Error', Error: "Error en el servidor", });
        if (result.length > 0) {
            const id = result[0].id;
            const token = jwt.sign({role: "admin" }, "jwt-secret-key", { expiresIn: '1d' });
            res.cookie('token', token);
            return res.json({ Status: "Correcto" })
        } else {
            return res.json({ Status: "Error", Error: "Los datos no son correctos" });
        }
    })
})




// app.get('vendedorin/:id', (req, res) => { 
//     const id = req.params.id; 
//     const sql = "SELECT * FROM vendedor where id = ?";
//     con.query(sql, [id], (err, result) => { 
//         if (err) return res.json({ Error: "Obtener vendedor query" });
//         return res.json({ Status: "Correcto", Result: result })
//     })
// })


app.get('/logout', (req, res) => {
    res.clearCookie('token');
    return res.json({ Status: "Correcto" });
})

app.post('/insertar', upload.single('image'), (req, res) => {
    // console.log(req.body);
    const sql = "INSERT INTO vendedor (`name`, `email`, `password`,`salary`, `address`, `image`) VALUES (?)";
    bcrypt.hash(req.body.password.toString(), 10, (err, hash) => {
        if (err) return res.json({ Error: "Error en la creacion del hash password" });
        const values = [
            req.body.name,
            req.body.email,
            hash,
            req.body.salary,
            req.body.address,
            req.file.filename
        ]
        con.query(sql, [values], (err, result) => {
            if (err) return res.json({ Error: "Insertar vendedor query" });
            return res.json({ Status: "Correcto" })
        })
    })

})

app.post('/insertar-produccion', (req, res) => {
    console.log("entre al back")
    const sql = `
        INSERT INTO produccion
        (num_lote, nombre_responsable, apellido_responsable, fecha_inicio, fecha_terminacion, tipo_piezas, no_piezas, no_piezas_defectuosas)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    console.log("estoy en el back")
    const values = [
        req.body.num_lote,
        req.body.nombre_responsable,
        req.body.apellido_responsable,
        req.body.fecha_inicio,
        req.body.fecha_terminacion,
        req.body.tipo_piezas,
        req.body.no_piezas,
        req.body.no_piezas_defectuosas
    ];

    con.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Error al insertar en la tabla de producción" });
        }
        return res.json({ status: "Correcto" });
    });
});

app.get('/obtenerproduccion', (req, res) => {
    const sql = "SELECT * FROM produccion";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Error: "No se pudo obtener los lotes de producción" });
        return res.json({ Status: "Correcto", Result: result })
    })
})

app.delete('/eliminarproduccion/:id', (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM produccion WHERE id = ?";
    
    con.query(sql, [id], (err, result) => {
        if (err) return res.json({ Error: "No se pudo eliminar el lote de producción" });
        return res.json({ Status: "Correcto" });
    });
});

app.get('/getProd/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM produccion WHERE id = ?";
    con.query(sql, [id], (err, result) => {
        if (err) return res.json({ Status: "Error", Error: "No se pudo obtener los datos de producción" });
        return res.json({ Status: "Correcto", Result: result });
    });
});

app.put('/actualizarProduccion/:id', (req, res) => {
    const id = req.params.id;
    const {
        num_lote,
        nombre_responsable,
        apellido_responsable,
        fecha_inicio,
        fecha_terminacion,
        tipo_piezas,
        no_piezas,
        no_piezas_defectuosas
    } = req.body;

    const sql = "UPDATE produccion SET num_lote = ?, nombre_responsable = ?, apellido_responsable = ?, fecha_inicio = ?, fecha_terminacion = ?, tipo_piezas = ?, no_piezas = ?, no_piezas_defectuosas = ? WHERE id = ?";
    con.query(
        sql,
        [num_lote, nombre_responsable, apellido_responsable, fecha_inicio, fecha_terminacion, tipo_piezas, no_piezas, no_piezas_defectuosas, id],
        (err, result) => {
            if (err) return res.json({ Status: "Error", Error: "No se pudo actualizar la producción" });
            return res.json({ Status: "Correcto" });
        }
    );
});



app.listen(8081, () => {
    console.log('Inicio de conexion');
})