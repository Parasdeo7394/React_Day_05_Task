import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap';

const CreateTaskPopup = ({modal,toggle , save }) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
       const {name , value} = e.target

       if(name === "taskName"){
            setTaskName(value)
       }else{
            setDescription(value)
       }
    }

    const handleSave = (e) => {
        e.preventDefault()
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        save(taskObj)

    }
  return (
    
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>My Todo</ModalHeader>
            <ModalBody>
                <form>
                    <div className='form-group'>
                        <input type='text' className='form-control' value={taskName} onChange={handleChange} name='taskName' placeholder='Todo Name'/>
                    </div>
                    <div className='form-group'>
                        <textarea rows="5" className='form-control mt-3' value={description} onChange={handleChange} name='description' placeholder='Todo Description'></textarea>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="success" onClick={handleSave}>
                    Add Todo
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    
  );
}

export default CreateTaskPopup;