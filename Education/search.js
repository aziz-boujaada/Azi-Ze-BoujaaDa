/*search about course */


function CourseSearch() {

    const courses_list = [
        { name: "HTML", category: "web_development", description: "learn the basics of HTML" },
        { name: "CSS", category: "web_design", description: "learn advanced  CSS" },
        { name: "JavaScript", category: "Programming", description: "Introduction to javaScript" },
        { name: "front-end", category: "front-end", description: "build a website" },
        { name: "back-end", category: "back-end", description: "Introduction to back-end" },
        { name: "python", category: "Programming", description: "learn python" },
        { name: "php", category: "Programming", description: "Introduction to php" },
        { name: "react JS", category: "framework", description: "Introduction to react js" },
        { name: "laravel", category: "framework", description: "Introduction to laravel" },
        { name: "UI-UX", category: "design", description: "be creative with UI-UX course" }

    ];

    const user_search = document.querySelector("#search_bar").value.toLowerCase();
    const result = [];

    for (let i = 0; i < courses_list.length; i++) {
        const course = courses_list[i];

        if (
            course.name.toLowerCase().includes(user_search) ||
            course.category.toLowerCase().includes(user_search) ||
            course.description.toLowerCase().includes(user_search)


        ) {
            result.push(course);
        }

    }


    const search_result = document.querySelector(".search_result");

    search_result.innerHTML = '';
    if (result.length > 0) {
        result.forEach(course => {
            search_result.innerHTML += `<a href="courses-destails.html"> ${course.name}  - ${course.category} - ${course.description}<br></a> `
        });
    } else {
        search_result.innerHTML = "<p>No courses found</p>";
    }

    search_result.classList.toggle("hide");

}

document.getElementById("icon_search").addEventListener("click", CourseSearch);