import TaskForm from '../../components/taskForm'
import TaskColumn from '../../components/taskColumn'
import AssignedTasksColumn from '../../components/assignedTaskColumn';

const Dashboard = () => {
    
    return ( 
        <section className="text-center">
            <div className="bg-primary text-white p-3 text-large mb-2">Hotel Task Website</div>

            <TaskForm/>
            <TaskColumn/>
            <AssignedTasksColumn/>
        </section>
     );
}
 
export default Dashboard;