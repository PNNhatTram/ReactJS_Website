import {useState} from 'react'
import './App.css'
import Task from './component/Task'
import Modal from './component/Modal'
import AddButton from './component/AddButton'
import './component/AddButton.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDetails, setNewTaskDetails] = useState('');

  const addTask = () => {
    setTasks([...tasks, { title: newTaskTitle, details: newTaskDetails }]);
    setNewTaskTitle('');
    setNewTaskDetails('');
  };

  const openModal = (task) => {
    setCurrentTask(task);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentTask(null);
  };

  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <form className="InputTask" onSubmit={(e) => { e.preventDefault(); addTask(); }}>
        <input 
          type="text" 
          id="input_task_title" 
          value={newTaskTitle} 
          onChange={(e) => setNewTaskTitle(e.target.value)} 
          placeholder="Task Title"
        />
        <input 
          type="text" 
          id="input_task_details" 
          value={newTaskDetails} 
          onChange={(e) => setNewTaskDetails(e.target.value)} 
          placeholder="Task Details"
        />
        <AddButton onClick={addTask} />
      </form>
      <div className="task-list">
        {tasks.map((task, index) => (
          <Task key={index} task={task} onClick={openModal} />
        ))}
      </div>
      {showModal && <Modal task={currentTask} onClose={closeModal} />}
    </div>
  );
}

export default App;
