const coursesData = [
  {
    grade:"الصف الأول الثانوي",
    subject:"عربي",
    price:50,
    teacher:"الاستاذ:  محمد صلاح",
    img:"Courses/arabic.png",
    link:"project/صفحه العربي/arabic.html"
  },
  {
    grade:"الصف الثاني الثانوي",
    subject:"فرنساوي",
    price:40,
    teacher:"الاستاذ:  رضا الفاروق",
    img:"Courses/French.png",
    link:"project/صفحه الفرنساوي/F.html"
  },
  {
    grade:"الصف الثالث الثانوي",
    subject:"إنجليزي",
    price:60,
    teacher:"الاستاذ:   محمد رضوان",
    img:"Courses/English.png",
    link:"project/صفحه الانجليزي/E.html"
  },
{
  grade:"الصف الأول الثانوي",
  subject:"فلسفة",
  price:45,
  teacher:"الاستاذ:   محمد رضوان",
  img:"Courses/2.jpg" ,
  link:"project/صفحه الفلسفه/ph.html"
},
  {
    grade:"الصف الثاني الثانوي",
    subject:"رياضيات",
    price:70,
    teacher:"الاستاذ:  لطفي زهران",
    img:"Courses/math.jpg",
    link:"project/صفحه الرياضه/math.html"
  },
  {
    grade:"الصف الثالث الثانوي",
    subject:"فيزياء",
    price:80,
    teacher:"الاستاذ:  لطفي زهران",
    img:"Courses/physics.png"  ,
    link:"project/صفحه الفيزياء/p.html"
  },
  {
    grade:"الصف الثالث الثانوي",
    subject:"كيمياء",
    price:70,
    teacher:"الاستاذ:  محمد عبدالجواد",
    img:"Courses/Chemistry.png",
    link:"project/صفحه الكيمياء/c.html"
  },
  {
    grade:"الصف الثاني الثانوي",
    subject:"أحياء",
    price:55,
    teacher:"الاستاذ:  محمد أيمن",
    img:"Courses/Biology.png",
    link:"project/صفحه الاحياء/b.html"
  },
  
{
  grade:" الصف الأول الثانوي",
  subject:"تاريخ",
  price:50,
  teacher:"الاستاذ:محمد خليل",
  img:"Courses/History.png"  ,
  link:"project/صفحه التاريخ/h.html"
},

{
  grade:"الصف الثالث الثانوي",
  subject:"جيولوجيا",
  price:65,
  teacher:"الاستاذ:  محمد صالح",
  img:"Courses/Geology.png",
  link:"project/صفحه الجيولوجيا/ge.html"
},
{
  grade:"الصف الأول الثانوي",
  subject:"جغرافيا",
  price:40,
  teacher:"الاستاذ:  محمد خليل",
  img:"Courses/Geography.png"  ,
  link:"project/صفحه الجغرافيا/g.html"
}, 
];

let currentPage = 1;
const perPage = 6;

function displayCourses(data){
  const container = document.getElementById("courses");
  container.innerHTML = "";

  const start = (currentPage-1)*perPage;
  const paginated = data.slice(start, start+perPage);

  paginated.forEach(course=>{
container.innerHTML += `
  <div class="card">
    
    <div class="img-box">
      <img src="${course.img}" />
      <span class="badge">${course.grade}</span>
      <span class="price-tag">${course.price} ج.م</span>
    </div>
    <div class="info">
      <span class="subject">${course.subject}</span>
      <p class="teacher">${course.teacher}</p>
      <a href="${course.link}" class="view-btn">عرض التفاصيل</a>
    </div>

  </div>
`;
  });

  setupPagination(data);
}

function setupPagination(data){
  const pages = Math.ceil(data.length/perPage);
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  for(let i=1;i<=pages;i++){
    pagination.innerHTML += `
      <button onclick="changePage(${i})" class="${i===currentPage?'active':''}">
        ${i}
      </button>
    `;
  }
}

function changePage(page){
  currentPage = page;
  applyFilters();
}
function applyFilters() {
  let filtered = [...coursesData];
    
  const search = document.getElementById("search").value.toLowerCase();
  if (search) {
    filtered = filtered.filter(c =>
      c.grade.toLowerCase().includes(search) ||
      c.subject.toLowerCase().includes(search)
    );
  }   
  const selectedSubjects = [...document.querySelectorAll('#filters input:checked')]
    .map(cb => cb.value);

  if (selectedSubjects.length) {
    filtered = filtered.filter(c => selectedSubjects.includes(c.subject));
  }
    
  const selectedGrades = [...document.querySelectorAll('#grades input:checked')]
    .map(cb => cb.value);

  if (selectedGrades.length) {
    filtered = filtered.filter(c => selectedGrades.includes(c.grade));
  }

  displayCourses(filtered);
}
document.getElementById("search").addEventListener("input", applyFilters);
document.querySelectorAll("#filters input").forEach(cb=>{
  cb.addEventListener("change", applyFilters);
});
document.querySelectorAll("#grades input").forEach(cb=>{
  cb.addEventListener("change", applyFilters);
});
displayCourses(coursesData);
