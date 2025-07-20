import express from "express"
import employees from "#db/employees";

const app = express()

app.route("/").get(
    (req, res) => 
        {res.send("Hello employees!")}
)

app.route("/employees").get((req, res) => {
    res.json(employees);
});

app.route("/employees/random").get((req, res) => {
    const randomIndex = Math.floor(Math.random() * employees.length);
    res.json(employees[randomIndex]);
});

app.route("/employees/:id").get((req, res) => {
    const id = parseInt(req.params.id);
    const employee = employees.find(emp => emp.id === id);
    
    if (employee) {
        res.json(employee);
    } else {
        res.status(404).send("Employee not found");
    }
});

export default app;