/*
Các thẻ việc làm
chỉ gồm tiêu đề việc làm
khi click vào thẻ sẽ hiển thị nội dung bằng modal
*/
function Task({ task, onClick }) {
  return (
    <div className="task-card" onClick={() => onClick(task)}>
      {task.title}
    </div>
  );
}

export default Task;




