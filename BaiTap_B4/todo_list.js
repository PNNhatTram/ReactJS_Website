
// Xử lý sự kiện khi nhập task
document.getElementById("formTask").onsubmit=function(event){
    event.preventDefault(); //tránh load lại trang
    const inputNode=document.getElementById("inputTask");
    const taskText = inputNode.value.trim(); //Lấy giá trị từ ô nhập và loại bỏ khoảng trắng thừa ở đầu và cuối
    if(taskText!==""){
        const task = {
            text: taskText,
            completed: false
        };
        addTask(task);
    }
}

function addTask(task){
    const taskList = document.getElementById("tasks");
    const taskItem = document.createElement("li");
    taskItem.textContent = task.text;

    //Nếu task đã hoàn thành, thêm lớp "completed" vào phần tử
    if(task.completed) taskItem.classList.toggle("completed");

    /*//Thêm sự kiện click để đánh dấu task hoàn thành hoặc chưa hoàn thành.
    taskItem.addEventListener("click", function(){
        taskItem.classList.toggle("completed");
    })*/

    const statusSelect = document.createElement("select");
    const options = [
        {value: "pending", text: "Pending"},
        {value: "inProgress", text: "In Progress"},
        {value: "completed", text: "Completed"}
    ];
    for(let i = 0; i<options.length; i++)
    {
        const option = document.createElement("option");
        option.value = options[i].value;
        option.textContent = options[i].text;
        statusSelect.appendChild(option);
    }

    const removeButton = document.createElement("button");
    removeButton.textContent="Remove";
    removeButton.addEventListener("click", function(){
        taskList.removeChild(taskItem);
    })

    taskItem.appendChild(statusSelect);
    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);
}

// Lưu danh sách task vào Local Storage
document.getElementById("saveBtn").addEventListener("click", function(event){
    event.preventDefault();
    const taskList = document.getElementById("tasks");
    const tasks = [];
    for(let taskItem of taskList.getElementsByTagName("li")){
        const task = {
            text: taskItem.childNodes[0].textContent,
            //Kiểm tra xem phần tử có lớp "completed" không
            completed: taskItem.classList.contains("completed")
        };
        tasks.push(task);
    }
    localStorage.setItem("tasks",JSON.stringify(tasks));
})

//Tải danh sách task từ Local Storage khi trang được tải
const tasks = JSON.parse(localStorage.getItem("tasks"));
if(tasks){
    for(let task of tasks){
        addTask(task);
    }
}

//Thêm trường status cho mỗi task để đánh giá tiến độ của task theo 3 cấp độ: Pending, In Progress, Completed.
/*function selectStatus(){
    const select = document.createElement("select");
    //tạo mảng các status
    const options = [
        {value: "pending", text: "Pending"},
        {value: "inProgress", text: "In Progress"},
        {value: "completed", text: "Completed"}
    ];
    //Thêm các option vào phần tử select
    for(let i = 0; i<options.length; i++)
    {
        const optionElement = document.createElement("option");
        optionElement.value = options[i].value;
        optionElement.textContent = options[i].text;
        selectElement.appendChild(optionElement);
    }
    return select
}*/