// Tạo một mảng chứa 5 phần tử số, sau đó tính tổng và trung bình cộng của các phần tử trong mảng.
var a = [1, 2, 3, 4, 5];
function sum(){
    var s = 0;
    for(let i = 0; i < a.length; i++)
        s += a[i];
    return s;
}
let avg = sum() / a.length;
console.log("Tong la: " + sum());
console.log("Trung binh cong la: " + avg);