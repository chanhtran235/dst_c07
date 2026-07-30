
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