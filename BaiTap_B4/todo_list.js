
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
    
    //Thêm select status
    const statusSelect = document.createElement("select");
    statusSelect.id = "statusSelect";
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
    removeButton.id="removeBtn";
    removeButton.addEventListener("click", function(){
        taskList.removeChild(taskItem);
    })

    // Thiết lập giá trị của select từ task.status đảm bảo khi tải lại, trạng thái task được thiết lập đúng trên select
    statusSelect.value = task.status;
    taskItem.classList.add(task.status);
    // Thêm sự kiện để cập nhật trạng thái khi thay đổi
    statusSelect.addEventListener("change", function() {
        taskItem.classList.remove(task.status);
        task.status = statusSelect.value;
        taskItem.classList.add(task.status);
    });

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
    saveCategory();
})

/*TẢI DANH SÁCH TASK TỪ LOCAL STORAGE KHI TRANG ĐƯỢC TẢI*/
const tasks = JSON.parse(localStorage.getItem("tasks"));
if(tasks){
    for(let task of tasks){
        addTask(task);
    }
}

/*XỬ LÝ SỰ KIỆN NÚT THÊM DANH MỤC*/
document.getElementById("formCategory").onsubmit=function(event){
    event.preventDefault();
    const inputNode = document.getElementById("inputCategory");
    const textCategory = inputNode.value.trim();
    if(textCategory!=="")
    {
        const option = document.createElement("option");
        const select = document.getElementById("categorySelect");
        option.value = textCategory;
        option.textContent = textCategory;
        select.appendChild(option);
    }
}

/*HÀM LƯU CÁC DANH MỤC VÀO STORAGE */
function saveCategory(){
    const categorys = document.getElementById("categorySelect");
    // chuyển tất cả các tùy chọn của phần tử <select> thành một mảng
    const options = Array.from(categorys.options);
    const optionsData = [];
    for (const option of options) {
        optionsData.push({
            value: option.value,
            text: option.text,
            selected: option.selected
        });
    }
    localStorage.setItem('category', JSON.stringify(optionsData));
}

/*TẢI DANH SÁCH DANH MỤC KHI TRANG ĐƯỢC TẢI */
const category = JSON.parse(localStorage.getItem("category"));
if(category){
    for(let i of category){
        const option = document.createElement("option");
        const select = document.getElementById("categorySelect");
        option.value = i.value;
        option.textContent = i.text;
        select.appendChild(option);
    }
}