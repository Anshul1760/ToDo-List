import React, { useState } from 'react';

const Todo = ({ items, handleUpdate, handleDelete }) => {
  const [editableItemId, setEditableItemId] = useState(null);
  const [updatedTask, setUpdatedTask] = useState({ title: '', todo: '' });

  const handleUpdateTask = (id) => {
    setEditableItemId(id);
    
    const taskToUpdate = items.find(item => item.id === id);
    setUpdatedTask({ title: taskToUpdate.title, todo: taskToUpdate.todo });
  };

  const handleCancelUpdate = () => {
    setEditableItemId(null);
    setUpdatedTask({ title: '', todo: '' });
  };

  const handleSaveUpdate = (id) => {
    handleUpdate(id, updatedTask);
    setEditableItemId(null);
    setUpdatedTask({ title: '', todo: '' });
  };

  return (
    <div>
      {items.map(item => (
        <div key={item.id} className={`todowrap ${editableItemId === item.id ? 'editing' : ''}`}>
          {editableItemId === item.id ? (
            <div>
              <input className='updateinputone'
                type="text" placeholder='Enter Title'
                value={updatedTask.title}
                onChange={(e) => setUpdatedTask({ ...updatedTask, title: e.target.value })}
              /><br/>  <br/>
              <input className='updateinputtwo'
                type="text" placeholder='Enter todo'
                value={updatedTask.todo}
                onChange={(e) => setUpdatedTask({ ...updatedTask, todo: e.target.value })}
              /> <br/> <br/>
              <button className='updatebutton1' onClick={() => handleSaveUpdate(item.id)}>Update</button>
              <button className='updatebutton2' onClick={handleCancelUpdate}>Cancel</button>
            </div>
          ) : (
            <div>
              <p>Title: {item.title}</p><br />
              <p>Todo: {item.todo}</p><br />
              <button className='todobutton1' onClick={() => handleUpdateTask(item.id)}>Edit</button>
              <button className='todobutton2' onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Todo;
