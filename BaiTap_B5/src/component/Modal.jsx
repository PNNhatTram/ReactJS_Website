
function Modal({ task, onClose }) {
  if (!task) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{task.title}</h2>
        <p>{task.details}</p>
      </div>
    </div>
  );
}

export default Modal;
