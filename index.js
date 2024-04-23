const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const resume =
    {
        Personal_Information:
        [
            {
                name: "Shem John Juevesano",
                Address: "Sitio Sereas, Lorega, San Miguel, Cebu City",
                ContactNo: "09651634871",
                Email: "sjjuevesano@gmail.com",
                Birthdate: "April 20, 2001",
                Age: "23",
                Gender: "Male"
            }
        ],

        About_Me: 
        [
            {
                Description: "Hello! I'm Shem, and for now, I am still a 2nd year College of Computer Studies student. I am aiming to enhance my coding skills especially in HTML, CSS, Javascript, and more! That's because I'm dreaming of becoming a full-stack developer."
            }
        ],

        Skills: 
        [
            {
                SkillName: "HTML/CSS",
                SkillName: "Javascript",
                SkillName: "PHP",
                SkillName: "Gaming",
                SkillName: "Rizzz"
            }
        ],

        Education:
        [
            {
                Level: "College",
                Degree: "Bachelor of Science in Information Technology",
                School: "University of Southern Philippines Foundation",
                Year: "2023-2024"
            }
        ],

        References: 
        [
            {
                Description: "No references yet"
            }
        ],

    };
    


    res.json(resume);
});

app.listen(port, () => {
    console.log(`Server running on port ${3000}`);
});