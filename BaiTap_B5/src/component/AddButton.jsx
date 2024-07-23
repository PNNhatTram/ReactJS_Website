import './AddButton.css'

function AddButton({ onClick }) {
  return (
    <button className="addbtn" onClick={onClick}>ADD TASK</button>
  );
}

export default AddButton;
