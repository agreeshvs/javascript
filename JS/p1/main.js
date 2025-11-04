const courses = [{
    title: "javaScript",
    price: 1000,
    rating: 4.57,
    availableLanguages: ["Malayalam", "English"],
    instructor: "avs",
    contact: "9874521036"
},{
    title: "python",
    price: 1200,
    rating: 4.65,
    availableLanguages: ["Hindi", "English"],
    instructor: "ravi",
    contact: "9874521037"
},{
    title: "java",
    price: 1500,
    rating: 4.45,
    availableLanguages: ["Tamil", "English"],
    instructor: "kumar",
    contact: "9874521038"
},{
    title: "c++",
    price: 1300,
    rating: 4.35,
    availableLanguages: ["Kannada", "English"],
    instructor: "manu",
    contact: "9874521039"
}]
const formatName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
}
function displayCourse(courses){
    const courseContainer = document.querySelector('#course-container');
    courseContainer.innerHTML = ""; // Clear previous content
    courses.length === 0 && (courseContainer.innerHTML = "<p class='text-center text-xl mx-8'>No courses found</p>");
    courses.forEach( course => {
        renderCourse(course, courseContainer);
    } );
}
function renderCourse(course, courseContainer){
    
    const courseUi = `<div class="course-card p-8 border m-4">
            <h3 class="course-title font-extrabold text-2xl">
            ${formatName(course.title)}
            </h3>
            <p class="text-base">Price: ${course.price}</p>
            <p class="text-base">Rating: ${course.rating.toFixed(1)}</p>
            <p class="text-base">Available Languages: ${course.availableLanguages}</p>
            <p class="text-base">Instructor: ${formatName(course.instructor)}</p>
            <p class="text-base">Contact: ${course.contact}</p>
        </div>`
    courseContainer.innerHTML += courseUi;
}

function fetchTopRatedCourse(courses){
    const topRatedCourse = courses.reduce( (topCourse, course) => {
        if( course.rating > topCourse.rating ){
            return course;
        }
        else{
            return topCourse;
        }
    })
    return topRatedCourse;
}

function displayTopRatedCourses(){
    const topCourseContainer = document.querySelector('#top-course-container');
    const topCourse = fetchTopRatedCourse(courses);
    const topRatedCourses = `<div class="course-card p-8 border m-4 bg-yellow-100">
            <h3 class="course-title font-extrabold text-2xl">
            ${formatName(topCourse.title)}
            </h3>
            <p class="text-base">Price: ${topCourse.price}</p>
            <p class="text-base">Rating: ${topCourse.rating.toFixed(1)}</p>
            <p class="text-base">Available Languages: ${topCourse.availableLanguages}</p>
            <p class="text-base">Instructor: ${formatName(topCourse.instructor)}</p>
            <p class="text-base">Contact: ${topCourse.contact}</p>
        </div>`;
    topCourseContainer.innerHTML = topRatedCourses;
}
function displayCourseCount(filteredCourse){
    const countContainer = document.getElementById('course-count');
    countContainer.innerText = `Courses Count: ${filteredCourse.length}`; 
}

function getSearchResult(arr, searchText){
    const result =  searchText !== '' ? arr.filter( course => {
        return course.title.toLowerCase().includes(searchText);
    }) : arr;
    console.log(result);
    return result;
}

function initPage(){       
    displayTopRatedCourses();
    displayCourse(courses);
    const searchInput = document.querySelector('#search-bar');
    searchInput.addEventListener('input', (event) => {
        const filteredCourse = getSearchResult(courses, event.target.value);
        displayCourse(filteredCourse);
        displayCourseCount(filteredCourse);
    });
    

}


initPage();



