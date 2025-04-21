import React,{useState,useEffect} from "react";
import Nav from "./Nav";
import axios from 'axios'

export default function Home() {
    const [task,setTask]=useState([])
    const [editing,setEditing]=useState([])
    const [currenetTask,setcurrenetTask]=useState({id:null,title:'',description:'',completed:false})
    // console.log(task);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/tasks/')
         .then(response => setTask(response.data))
         .catch(error => console.log(error));
    }, []);
    console.log(task)

    const editTask = (task)=>{
        
    }

    return (
        <div>
            <Nav />
            <h1>Todos</h1>
            {editing ? <editTaskfrom currenetTask = {currenetTask}/> : null }
            <table className="table">
                <thead><tr>
                <th>id</th>
                <th>title</th>
                <th>description</th>
                <th>status</th>
                </tr>
                </thead>
                <tbody>
                    {task.map((todo)=>(
                        <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.title}</td>
                            <td>{todo.description}</td>
                            <td>{todo.completed ? 'Completed' : 'Not completed'}</td>
                            <td><button> onClick={()=>editTask(todo)}Edit</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const EditTaskfrom = (currenetTask) =>{
    const [task,setTask] = useState(currenetTask)
    console.log(task);

    return(
        <div>
            <form action="">
                Title<input type="text" id='' className='form-control'/>
                Description<input type="text" id='' className='form-control'/>
                
            </form>
        </div>
    )
    
}