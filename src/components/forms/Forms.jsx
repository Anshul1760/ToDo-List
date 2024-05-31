import React from 'react';

const Forms = ({ title , todo , handleSubmit ,state, formhandle }) => {
    // console.log(state);
    // console.log(formhandle);
    return (
        <main id='formwrapper'>
             <h1>Todo-List</h1>

            <form>
                <div className='form-group'>
                    <label htmlFor="title">Title</label> <br />
                    <input
                        type="text"
                        placeholder='Enter title'
                        value={title} name='title'
                        onChange={formhandle} // Pass the event parameter
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor="todo">Todo</label> <br />
                    <input type="text" placeholder='Enter todo' value={todo} onChange={formhandle} name='todo' />
                </div>
                
                <div className='form-group'>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </main>
    );
};

export default Forms;
