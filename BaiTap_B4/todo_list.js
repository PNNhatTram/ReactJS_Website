
/* XỬ LÝ SỰ KIỆN KHI NHẬP TASK */
document.getElementById("formTask").onsubmit=function(event){
    event.preventDefault(); //tránh load lại trang
    const inputNode=document.getElementById("inputTask");
    //Lấy giá trị từ ô nhập và loại bỏ khoảng trắng thừa ở đầu và cuối
    const taskText = inputNode.value.trim();
    if(taskText!==""){
        const task = {
            text: taskText,
            status: "pending"
        };
        addTask(task);
    }
}

function addTask(task){
    const taskList = document.getElementById("tasks");
    const taskItem = document.createElement("li");
    taskItem.textContent = task.text;

    /*//Nếu task đã hoàn thành, thêm lớp "completed" vào phần tử
    if(task.status) taskItem.classList.toggle("completed");

    //Thêm sự kiện click để đánh dấu task hoàn thành hoặc chưa hoàn thành.
    taskItem.addEventListener("click", function(){
        taskItem.classList.toggle("completed");
    })*/
    
    //Thêm select status
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

    //Thêm button remove
    const removeButton = document.createElement("button");
    removeButton.textContent="Remove";
    removeButton.addEventListener("click", function(){
        taskList.removeChild(taskItem);
    })

    //Thêm lớp trạng thái
    statusSelect.addEventListener("onchange", function(){
        task.status = statusSelect.value;
    })
    taskItem.classList.toggle(task.status);

    taskItem.appendChild(statusSelect);
    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);
}

/*LƯU DANH SÁCH TASK VÀO LOCAL STORAGE*/
document.getElementById("saveBtn").addEventListener("click", function(event){
    event.preventDefault();
    const taskList = document.getElementById("tasks");
    const tasks = [];
    for(let taskItem of taskList.getElementsByTagName("li")){
        const task = {
            text: taskItem.childNodes[0].textContent,
            //Kiểm tra xem phần tử có lớp "completed" không
            status: taskItem.querySelector("select").value
        };
        tasks.push(task);
    }
    localStorage.setItem("tasks",JSON.stringify(tasks));
})

/*TẢI DANH SÁCH TASK TỪ LOCAL STORAGE KHI TRANG ĐƯỢC TẢI*/
const tasks = JSON.parse(localStorage.getItem("tasks"));
if(tasks){
    for(let task of tasks){
        addTask(task);
    }
}