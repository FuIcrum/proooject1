import React, { Component } from "react";


class TaskPage extends Component {
    

    
    
    render() {
        return (
            <React.Fragment>
            <div id="accordion">
                {this.getElement()}  
            </div>
            </React.Fragment>
        );

        }
    getElement(){ //creating task`s elements
        let numberOfTasks=30, taskText = 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS'
        let item=[] // this text upper must be taken from somewhere else 
        var colapseid, headingid, collapsehach;

        for (let i=1; i<numberOfTasks; i++){ // here numberOfTasks is the number of labels that will be created in the loop 
            colapseid = 'collapse' + i
            headingid = 'heading'+i
            collapsehach = '#collapse'+i
            item.push(
            <div class="card">
            <div class="card-header" id={headingid}>
            <h5 class="mb-0">
                <button class="btn btn-link collapsed" data-toggle="collapse" data-target={collapsehach} aria-expanded="false" aria-controls={colapseid}>
                  Kinda name of the task #{i}
                </button>

            </h5>
            </div>
            <div id={colapseid} class="collapse" aria-labelledby={headingid} data-parent="#accordion">
            <div class="card-body">
                {taskText}
            </div>
            <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text h5" style={{height:40, marginBottom:-10}}>Write your code here</span>
               
                <select class="form-control form-control" style={{marginLeft:60, height:40}}>
                  <option>Select language</option>
                  <option>Programming language</option>
                  <option>Programming language</option>
                  <option>Programming language</option>
                  <option>Programming language</option>
                  <option>Igor compiler</option>
                </select>
                <button class="btn btn-light" style={{marginLeft:60, borderRadius: 12, marginBottom:0}}>
                      Send your code for the task #{i}
                </button>
            </div>
              <textarea class="form-control" aria-label="With textarea"></textarea>
            </div>
            </div>
          </div>);
        }
        return item
    }
}



export default TaskPage;


