import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
const salt = 10;

const app = express();
app.use(express.json());
app.use(express.json());
app.use(cors({
    origin: "http://188.213.25.184:3000",
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
}));
app.use(cookieParser());

// Connexion à la base de données
const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: "",
    database: 'signup'
})

// Vérification du token utilisateur
const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json({ Error: "You are not authenticated" });
    } else {
        jwt.verify(token, "secret", (err, decoded) => {
            if (err) {
                return res.json({ Error: "Token is not valid" });
            } else {
                const name = decoded.name;
                const sql = 'SELECT id, name, email, balance, balance_pending, xp, role, banned, register_ip, join_date, level, lifetime_earnings, lifetime_withdrawn, completed_offers, users_refered FROM login WHERE name = ?';
                db.query(sql, [name], (err, data) => {
                    if (err) {
                        return res.json({ Error: "Error fetching user info" });
                    } else if (data.length === 0) {
                        return res.json({ Error: "User not found" });
                    } else {
                        req.user = {
                            id: data[0].id,
                            name: data[0].name,
                            email: data[0].email,
                            balance: data[0].balance,
                            balance_pending: data[0].balance_pending,
                            xp: data[0].xp,
                            role: data[0].role,
                            banned: data[0].banned,
                            register_ip: data[0].register_ip,
                            join_date: data[0].join_date,
                            lifetime_earnings: data[0].lifetime_earnings,
                            lifetime_withdrawn: data[0].lifetime_withdrawn,
                            completed_offers: data[0].completed_offers,
                            users_refered: data[0].users_refered,
                            level: data[0].level
                        };
                        next();
                    }
                });
            }
        });
    }
};

//script pour le register
app.post('/register', (req, res) => {
    const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES ?";
    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if (err) return res.json({ Error: "Error for hashing password" });
        const values = [
            [req.body.name, req.body.email, hash] // Notez l'utilisation d'un tableau pour les valeurs
        ];
        db.query(sql, [values], (err, result) => {
            if (err) return res.json({ Error: "Inserting data error" });
            return res.json({ Status: "Success" });
        })
    })
})

//script pour le login
app.post('/login', (req, res) => {
    const sql = 'SELECT * FROM login WHERE email = ?';
    db.query(sql, [req.body.email], (err, data) => {
        if(err) return res.json({ Error: "Login error in server" });
        if(data.length > 0) {
            bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
                if(err) return res.json({ Error: "Password compare error" });
                if(response) {
                    const name = data[0].name;
                    const token = jwt.sign({name}, "secret", {expiresIn: '1d'});
                    res.cookie('token', token);
                    return res.json({ Status: "Success" });
                } else {
                    return res.json({ Error: "Password not matched" });
                }
            })
        } else {
            return res.json({ Error: "No email existed" });
        }
    })
})

//script pour le logout
app.get('/logout', (req, res) => {
    res.clearCookie('token');
    return res.json({Status: "Success"})
})

// endpoint à appeler pour vérifier l'auth
app.get('/', verifyUser, (req, res) => {
    return res.json({Status: "Success", name: req.name});
})

// endpoint à appeler pour récuérer les infos utilisateur
app.get('/api/userInfo', verifyUser, (req, res) => {
    return res.json(req.user);
});

// endpoint à appeler pour récuérer les données CRUD
app.get('/api/crudInfo', verifyUser, (req, res) => {
    if (req.user.role === 'owner') {
        const sql = 'SELECT * FROM login ORDER BY id ASC';
        db.query(sql, (err, data) => {
            if (err) return res.json("Error");
            return res.json(data);
        });
    } else {
        return res.json({ Error: "Access denied. Only 'owner' role can access this endpoint." });
    }
});

app.post('/api/adduser', (req, res) => {
    const { name, email, password, balance, pending, xp, level, role, banned, ip, join, earnings, withdrawn, offers, referals } = req.body;

    const fields = {
        name,
        email,
        password,
        balance,
        pending,
        xp,
        level,
        role,
        banned,
        ip,
        join,
        earnings,
        withdrawn,
        offers,
        referals,
    }

    const nonEmptyFields = Object.entries(fields)
        .filter(([_, value]) => value !== '') // Exclut les champs vides

    const columns = nonEmptyFields.map(([column, _]) => column); // Récupère les noms des colonnes non vides
    let values = nonEmptyFields.map(([column, value]) => value); // Récupère les valeurs des champs non vides

    // Hachage du mot de passe
    bcrypt.hash(password, salt, (err, hash) => {
        if (err) return res.json("Error hashing password");

        // Remplace la valeur du mot de passe avec le hachage généré
        values = values.map((value, index) => {
            if (columns[index] === 'password') {
                return hash;
            }
            return value;
        });

        const sql = `INSERT INTO login (${columns.join(', ')}) VALUES (${values.map(() => '?').join(', ')})`;

        db.query(sql, values, (err, data) => {
            if (err) return res.json("Error");
            return res.json(data);
        });
    });
});


app.put('/api/updateuser/:id', (req, res) => {
    const sql = "UPDATE login set `name` = ?, `email` = ?, `balance` = ?, `balance_pending` = ?, `xp` = ?, `role` = ?, `banned` = ?, `register_ip` = ?, `level` = ?, `lifetime_earnings` = ?, `lifetime_withdrawn` = ?, `completed_offers` = ?, `users_refered` = ? where ID = ?";

    const values = [
        req.body.name,
        req.body.email,
        req.body.balance,
        req.body.balance_pending,
        req.body.xp,
        req.body.role,
        req.body.banned,
        req.body.register_ip,
        req.body.level,
        req.body.lifetime_earnings,
        req.body.lifetime_withdrawn,
        req.body.completed_offers,
        req.body.users_refered,
    ]

    const id = req.params.id;

    db.query(sql, [...values, id], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
});

app.delete('/api/deleteuser/:id', (req, res) => {
    const sql = "DELETE FROM login WHERE ID = ?";
    const id = req.params.id;

    db.query(sql, [id], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
});



app.listen(8081, () => {
    console.log("Running...");
})
