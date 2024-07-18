// Tạo một object đại diện cho một học sinh, với các thuộc tính như 
// tên, tuổi, điểm trung bình, sau đó viết hàm để in ra thông tin của học sinh.
var student = {
    name: "Claire",
    age: 20,
    avg_score: 8.74
};
for(i in student)
    console.log(i + ": " + student[i]);