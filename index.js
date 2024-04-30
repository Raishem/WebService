const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;


    const profile =
    {
        personal_info:
            {
                name: "Shem John Juevesano",
                Address: "Sitio Sereas, Lorega, San Miguel, Cebu City",
                ContactNo: "09651634871",
                Email: "sjjuevesano@gmail.com",
                Birthdate: "April 20, 2001",
                Age: "23",
                Gender: "Male"
            },
        
        about_me: 
        
            {
                Description: "Hello! I'm Shem, and for now, I am still a 2nd year College of Computer Studies student. I am aiming to enhance my coding skills especially in HTML, CSS, Javascript, and more! That's because I'm dreaming of becoming a full-stack developer."
            },
        

        skills: 
        [
            {
                SkillName: "HTML/CSS",
                SkillName: "Javascript",
                SkillName: "PHP",
                SkillName: "Gaming",
                SkillName: "Rizzz"
            }
        ],

        education:
        [
            {
                level: "Elementary",
                school: "Busogon Integrated School",
                year: "2008-2014",
                schooladdress: "Busogon, San Remigio, Cebu"
            },
            {
                level: "Junior High School",
                school: "Busogon Integrated School",
                year: "2014-2018",
                schooladdress: "Busogon, San Remigio, Cebu"
            },
            {
                level: "Senior High School",
                school: "Busogon Integrated School",
                year: "2018-2020",
                schooladdress: "Busogon, San Remigio, Cebu"
            },
            {
                level: "College",
                course: "Bachelor of Science in Information Technology",
                school: "University of Southern Philippines Foundation",
                year: "2022-2024",
                schooladdress: "Salinas Drive, Lahug, Cebu City"
            }
        ],

        work_experience: 
            {
                jobtitle: "Non-Voice Call Center Agent",
                company_name: "Fiercecom",
            },
        

        references: 
        
            {
                description: "No references yet"
            }
        }


    
app.get('/', (req,res) => { 
    res.json(profile);
});
    app.get('/', (req, res) => {
        res.json(profile);
    });
    

app.listen(port, () => {
    console.log(`Server running on port link ${3000}`);
});