
const studentList = [
    {
        id:1,
        name:"chánh1"
    },
    {
        id:2,
        name:"chánh2"
    },
    {
        id:3,
        name:"chánh3"
    }
]

// hàm call API một danh sách sinh viên;
export function getAll(){
    // call API của BE
    return [...studentList]
}
export function addNew(student){
    studentList.push(student);
}
export function deleteById(id){
    for (let i = 0; i <studentList.length ; i++) {
        if (id==studentList[i].id){
            studentList.splice(i,1);
            break;
        }
    }
}
export function findById(id){
    for (let i = 0; i <studentList.length ; i++) {
        if (id==studentList[i].id){
           return studentList[i];
        }
    }
    return null;
}