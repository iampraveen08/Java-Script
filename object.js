let lecture = 10;
let section = 3;
let title = 'JavaScript'

const course = {
    lecture: 10,
    section: 3,
    title: 'Javascript',
    notes: {
        introduction: "Welcome to JS Course"
    
    },
    enroll() {
        console.log('you are sucessfully enrolled');
    }
}

function enroll() {
    console.log('you are sucessfuly enrolled');
}

course.enroll()
console.log(course)

course.price = 999

//