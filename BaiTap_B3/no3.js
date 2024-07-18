// Viết hàm kiểm tra xem một chuỗi có phải là palindrome hay không.
function reverse(str){
    var new_str = "";
    for(let i = str.length - 1; i >= 0; i--)
    {
        new_str += str[i];
    } 
    return new_str
}
var arr = ["hiohi", "ihohi", "i", "hh", "ohho", "hello"];
for(let i of arr)
{
    if(i === reverse(i))
        console.log("yes");
    else
        console.log("no");
}

