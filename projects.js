// Define an array of project objects with details
const ProjectsArray = [
    {
    "title": "Title: Medical Information Input an Output",
    "description":"Description: Register patients' medical information and give their personal medical information",
    "date":"Date: 2023-10-05",
    "technologies": "Technologies: Java Programing",
    "image":"lch/pic/Java.png"
    },
    {
    "title": "Title: Tool Rental App",
    "description":"Description: For management a tool rental database",
    "date":"Date: 2023-10-28",
    "technologies": "Technologies: Access, SQL Server",
    "image":"lch/pic/RentalTool.png"
    },
    {
    "title": "Title: Introduction Home City Webpage",
    "description":"Description: Introduction home city and collect feedback",
    "date":"Date: 2023-9-20",
    "technologies": "Technologies: HTML, CSS",
    "image":"lch/pic/Project1.png"
    },
    {
    "title": "Title: Prompt Jokes Webpage",
    "description":"Description: prompt jokes and browser jokes",
    "date":"Date: 2023-10-21",
    "technologies": "Technologies: HTML, CSS, Javascript",
    "image":"lch/pic/Project3.png"
    }
];
// Initialize the index with a ranom project from the array
let index=Math.floor(Math.random()*ProjectsArray.length);
//Get references to HTML elements where project details will be displayed 
const titleContainer = document.getElementById("title");
const descriptionContainer = document.getElementById("description");
const dateContainer = document.getElementById("date");
const technologiesContainer = document.getElementById("technologies");
const imageContainer = document.getElementById("image");
// Function to change the displayed project details
const changeProject = () => {titleContainer.innerText = ProjectsArray[index].title;
                             descriptionContainer.innerText = ProjectsArray[index].description;
                             dateContainer.innerText = ProjectsArray[index].date;
                             technologiesContainer.innerText =ProjectsArray[index].technologies;
                             imageContainer.src = ProjectsArray[index].image;
                            };
//Function to show the next project
const nextProject = () => {index = (index +1)%ProjectsArray.length;
                            titleContainer.innerText = ProjectsArray[index].title;
                            descriptionContainer.innerText = ProjectsArray[index].description;
                            dateContainer.innerText = ProjectsArray[index].date;
                            technologiesContainer.innerText =ProjectsArray[index].technologies;
                            imageContainer.src = ProjectsArray[index].image;
                            };
//Function to show the previous project
const previousProject = () => {index = (index -1+ProjectsArray.length)%ProjectsArray.length;
                               titleContainer.innerText = ProjectsArray[index].title;
                               descriptionContainer.innerText = ProjectsArray[index].description;
                               dateContainer.innerText = ProjectsArray[index].date;
                               technologiesContainer.innerText =ProjectsArray[index].technologies;
                               imageContainer.src = ProjectsArray[index].image;
                               };
//Add event listeners to HTML button elements
document.getElementById("clickme").addEventListener("click",nextProject);
document.getElementById("clickagain").addEventListener("click",previousProject);