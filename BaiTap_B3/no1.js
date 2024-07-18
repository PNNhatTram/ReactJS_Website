//Viết hàm tính tổng các số từ 1 đến 100.
function sum(){
    var s = 0;
    for(let i = 0; i <= 100; i++)
        s += i;
    return s;
}
console.log("Tong la: " + sum());
