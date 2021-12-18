import TaskForm from '../../components/taskForm'
import TaskColumn from '../../components/taskColumn'
import AssignedTasksColumn from '../../components/assignedTaskColumn';

const Dashboard = () => {
    
    return ( 
        <section>
            home page
            <TaskForm/>
            <TaskColumn/>
            <AssignedTasksColumn/>
        </section>
     );
}
 
export default Dashboard;