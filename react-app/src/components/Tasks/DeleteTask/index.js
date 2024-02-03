import React from 'react'
import { useModal } from '../../../context/Modal'
import { useDispatch } from 'react-redux';
import { deleteTask, getProjectTasks } from '../../../store/tasks';


function DeleteTask({curr_task, project}) {
	const { closeModal } = useModal();
	const dispatch = useDispatch();
	
	const handleOnClickDelete = async (taskId, projectId) => {
		await dispatch(deleteTask(taskId, projectId))
		await dispatch(getProjectTasks(projectId))
		closeModal()
	
	}
	
	return (<div>
		<p>Do you want to delete this task?</p>
		<div>
		<button onClick={() => handleOnClickDelete(curr_task.id, project.id)}>Delete</button>
		<button>Cancel</button>

		</div>
	</div>)
}

export default DeleteTask