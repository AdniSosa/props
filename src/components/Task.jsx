import styles from './Task.module.css';

const Task = (props) => {
    const taskTitle = props.task.completed;
    console.log(taskTitle)
    return (
        <>   
            <div className={styles.Task}>  
                <li key={props.task.id} >  
                    <p 
                        onClick={()=>{props.completedTask(props.task.id)}}
                        style={{textDecoration: taskTitle ? 'line-through' : 'none'}}
                    >
                        {props.task.text}
                    </p>
                    <button onClick={() => props.deleteTask(props.task.id)}>Eliminar</button>  
                </li>
            </div> 
        </>
    )
}

export default Task;