/* ===== EASY EDIT SETTINGS =====
   HOW TO CHANGE A PICTURE: copy the new photo into the "images" folder and write its path
   like  "images/team/name.jpg"  (always use FORWARD slashes /, never C:\ paths, and ONE pair of quotes).
   Keep photos under ~500 KB. Every line in a list must end with a comma, except the last one. */
const CONFIG={
  /* Home page hero slideshow */
  hero:[
    {src:"images/hero/hero-1.jpg",pos:"center 35%",alt:"Students and volunteers planting a tree together at a school in Borij"},
    {src:"images/hero/hero-2.jpg",pos:"center 40%",alt:"ARC volunteers and team at the Shilp Marathon"},
    {src:"images/hero/hero-3.jpg",pos:"center",alt:"Students and teachers gathered at an ARC debating programme"},
    {src:"images/hero/hero-4.jpg",pos:"center",alt:"Women of the village Self Help Group at the flour mill funded by ARC"}
  ],
  heroSeconds:6,
  /* "Worked with" logos - add only with each partner's permission */
  partners:[],
  /* Founder photo */
  founder:"img/Wg-Cdr-Dharmendra-Sharma-Veteran-Managing-Trustee-.jpg",
  /* Team members. The home page shows the first 3 (homeTeam); the About page shows everyone.
     TO ADD A MEMBER: copy a line, paste it before the last "]", and edit name, role and photo.
     (Put a comma at the end of the line above it.) */
  homeTeam:3,
  team:[
    {name:"Abhilaksh Sharma",     role:"Co-Founder",           photo:"img/abhilaksh-sharma.jpg"},
    {name:"Bhrigu Kapur",         role:"Director, Operations", photo:"img/bhrigu-kapur.jpg"},
    {name:"Nivedita Mantha",      role:"Core Team",            photo:"img/nivedita-mantha.jpg"},
    {name:"Achintya Murali",      role:"Core Team",            photo:"img/achintya-murali.jpg"},
    {name:"Yash Vardhan Thirani", role:"Core Team",            photo:"img/yash-vardhan-thirani.jpg"},
    {name:"Salonee Gupta",        role:"Core Team",            photo:"img/salonee-gupta.jpg"},
    {name:"Naveen Goyal",         role:"Core Team",            photo:"img/naveen-goyal.jpg"},
    {name:"Siddharth Paliwal",    role:"Core Team",            photo:"img/siddharth-paliwal.jpg"},
    {name:"Jignesh Patel",        role:"Accountant",           photo:"img/jignesh-patel.jpg"},
    {name:"Muskan Singh",         role:"Volunteer",            photo:"img/muskan-singh.jpg"},
    {name:"Manasija Das",         role:"Volunteer",            photo:"img/manasija-das.jpg"},
    {name:"Bhrigu Kapoor",        role:"Volunteer",            photo:"img/bhrigu-kapoor.jpg"}
  ]
};