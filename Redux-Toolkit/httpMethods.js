// // get
// fetch("http://localhost:8080/api/students/get?id=1").then((response) => {
//     return response.json()
// }).then((data) => {
//     console.log(data);
    
// }).catch((error) => {
//     console.error(error);    
// })

// const student = {
//     name: "Jhanvi",
//     age: 20,
//     subject: "love",
//     email: "jhanvi@ritesh.com",
//     rollNo: 60
// }

// // post
// fetch("http://localhost:8080/api/students/create", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(student)
    
// }).then((response) => {
//     return response.json()
// }).then((data) => {
//     console.log(data);
    
// }).catch((error) => {
//     console.error(error);
    
// })

fetch("http://localhost:8080/api/students/getAll", {
    method: "GET"
}).then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
    
}).catch((error) => {
    console.error(error);
})