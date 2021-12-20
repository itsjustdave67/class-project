import TaskForm from '../../components/taskForm'
import TaskColumn from '../../components/taskColumn'
import RolesColumn from '../../components/rolesColumn';
import RolesForm from '../../components/rolesForm';
import AssignedTasksForm from '../../components/assignedTasksForm';
import AssignedTasksFromColumn from '../../components/assignedTaskFromColumn';
import AssignedTasksToColumn from '../../components/assignedTaskToColumn';
import UserRoles from '../../components/userRoles';

const Dashboard = () => {
    
    return ( 
        <section className="text-center">
            <div className="bg-primary text-white p-3 text-large mb-2">Hotel Task Website</div>
            <div>Admin area</div>
            <div className="my-5 mx-4 shadow rounded">
                <h1 className="pt-4">Personal tasks Management</h1>
                <TaskForm/>
                <TaskColumn/>  
            </div>
            
            <div className="my-5 mx-4 shadow rounded">
                <h1 className="pt-4">Assigned tasks Management</h1>
               <AssignedTasksForm/>
               <div className="my-5 mx-3 shadow rounded">
                <AssignedTasksFromColumn/>
                </div>
               <div className="my-5 mx-3 shadow rounded">

                <AssignedTasksToColumn/> 
                </div>

            </div>
            
            <div className="my-5 mx-4 shadow rounded">
                <h1 className="pt-4">User and Role Management</h1>
               <UserRoles />

                <RolesForm/>
                <div className="my-5 mx-3 shadow rounded">
                    <p className="fw-bold pt-4">Roles</p>
                <RolesColumn/> 
            </div>]

            </div>
            
        </section>
     );
}
 
export default Dashboard;