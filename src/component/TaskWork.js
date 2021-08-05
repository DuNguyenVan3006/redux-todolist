import React,{Component} from "react";
import ControlSearchSort from './ControlSearchSort'
import TaskList from './TaskList'


class  TaskWork extends Component  {
    render(){
        var {tasks} = this.props;
        console.log("nay la :", tasks)
  return (
        <div>
                
                <div className="row mt-15">
                      <ControlSearchSort/> 
                 </div>
                <div className="row mt-15">
                    <TaskList tasks ={tasks}/>
                </div>
      
        </div>

     );
  }
}
export default TaskWork;
