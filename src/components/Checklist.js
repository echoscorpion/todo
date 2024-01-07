import React, { useState } from 'react'


export default function Checklist() {

    const [taskList, settaskList] = useState([]);
    
    const addTask = (e)=>{

        e.preventDefault();

        let tasks = document.getElementById("taskInput").value;
        
        if(tasks){
            settaskList(oldArray => [...oldArray,tasks] );
        }
        else{
            
            alert("add Task")

            
        }

        setTimeout(() => {

        document.getElementById("taskInput").value=null;

        }, 200);
    }

    const handleCheckClick = (e)=>{
        e.preventDefault();
    }

    const addClassChecked =(event)=>{
        // let checkedElement = event.target.checked;
        let checkedElementId = event.target.id;
        let CheckedElement = document.getElementById(checkedElementId);
        CheckedElement.parentElement.classList.add('taskComplete');

    }

    const startTask = (event)=>{

        event.preventDefault();

        let clickedButtonData = event.target.getAttribute('datachecked');
        
        let clickedButtonForInput = document.querySelector("input#"+clickedButtonData);

        clickedButtonForInput.parentElement.classList.add('taskCompleted');

    }


  return (
    <>
        <div className="container taskListMain p-5">
            <div className="row">
                <div className="col-12">
                <h1>
                    Custom Task List
                </h1>
                </div>
                <div className="col-md-8 col-12 mx-auto">

                    <div className="tasksAdder">
                        <form onSubmit={addTask} className="mb-3">
                            {/* <label htmlFor="exampleFormControlInput1" >Add your tasks</label> */}
                            <input type="text" className="form-control" id="taskInput" placeholder="Add your tasks here"/>
                            <button className="btn btn-success" onClick={addTask}>
                                Add
                            </button>
                        </form>
                        <div className='taskscollection'>
                        {
                        taskList.map((taskList) =>
                        <div key={taskList} className="indtask">
                            <label htmlFor={`customId${taskList.replace(/\s+/g, "")}`} className="taskListName">
                            <p>{taskList}</p>
                                <input type="checkbox" className='d-none' onChange={handleCheckClick} onClick={addClassChecked} id={`customId${taskList.replace(/\s+/g, "")}`} name={taskList} value={taskList}  />
                            </label>
                            <button className="startTask" onClick={startTask} datachecked={`customId${taskList.replace(/\s+/g, "")}`}>
                                Finish Task
                            </button>
                            {/* <p className="finishTask">
                                {new Date().getHours()}:{new Date().getMinutes()}
                            </p> */}

                        </div>
                        )
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
