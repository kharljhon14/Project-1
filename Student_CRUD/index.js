//Express Js
const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid } = require("uuid");
const methodOverrider = require("method-override");

app.use(methodOverrider("_method"));

let students = [
   {
      id: uuid(),
      firstname: "Karl",
      lastname: "Enriquez",
      course: "Computer Science",
      contact: "09456543438",
   },
   {
      id: uuid(),
      firstname: "Princess Mae",
      lastname: "Anabeza",
      course: "Information Technology",
      contact: "09064607529",
   },
   {
      id: uuid(),
      firstname: "Jay R",
      lastname: "LLamzon",
      course: "Information Technology",
      contact: "09456875421",
   },
];

//Parsers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs"); //Find Ejs in Directory
app.set("views", path.join(__dirname, "views")); //Set path for views folder

//Home Route
//Render home page when GET request is made
app.get("/", (req, res) => {
   res.render("school/home");
});

//Student Route
//Render  student page when get request is made in home route
app.get("/students", (req, res) => {
   res.render("school/students", { students });
});

// //Show Route
// //Render detailed information page when get request is made in student route
// app.get("/students/:id", (req, res) => {
//    const { id } = req.params;
//    const student = students.find((s) => s.id === id);
//    res.render("school/show", { student });
// });

//New Route
//Render Enroll page when get request is made
app.get("/students/new", (req, res) => {
   res.render("school/new");
});

//Create Route
//Redirect to student page when POST request is made in enrollment form
app.post("/students", (req, res) => {
   const { lastname, firstname, course, contact } = req.body; //deconstruct data
   students.push({ lastname, firstname, course, contact, id: uuid() }); //Add to the array
   res.redirect("/students");
});

//Edit Route
//Render Edit page when GET request is made in student route
app.get("/students/:id/edit", (req, res) => {
   const { id } = req.params;
   const student = students.find((s) => s.id === id);
   res.render("school/edit", { student });
});

//Update Route
//Redirect to Student page when patch request is made in edit form
app.patch("/students/:id", (req, res) => { // needs id to work
   const { id } = req.params;
   const newLastname = req.body.lastname;
   const newFirstname = req.body.firstname;
   const newCourse = req.body.course;
   const newContact = req.body.contact;
   const studentData = students.find((s) => s.id === id);
   studentData.lastname = newLastname;
   studentData.firstname = newFirstname;
   studentData.course = newCourse;
   studentData.contact = newContact;
   res.redirect("/students");
});

//Delete Route
//Redirect to student page when delete request is made in student route
app.delete("/students/:id", (req, res) =>{
   const {id} = req.params;
   students = students.filter(s => s.id !== id);
   res.redirect("/students");
})

//Create Port
const PORT = process.env.PORT || 3000;

//Listen For PORT
app.listen(PORT, () => {
   console.log(`Listening for port ${PORT}`);
});
