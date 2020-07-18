import React from "react";
import './dashboardCard.css';

import { ReactComponent as Register } from '../../images/RegisteredTasks.svg'
import { ReactComponent as Completed } from '../../images/CompletedTasks.svg'
import { ReactComponent as Pending } from '../../images/PendingTasks.svg'
import { ReactComponent as Failed } from '../../images/FailedTasks.svg'



function DashboardCard(props) {
  
  return (
        <button 
          className = {props.selected? "dashboardStylingSelected" : "dashboardStyling" }
        >
          <div className={"dashboardCardIcon"}> 
            {props.name === 'Registered Tasks' ? <Register></Register> : 
             props.name === 'Completed Tasks' ? <Completed></Completed>: 
             props.name === 'Pending Tasks' ? <Pending></Pending> : 
             props.name === 'Failed Tasks' ? <Failed></Failed>: "" } 
          </div>
          <div className={"dashboardCardSty"}> 
            {props.name}
            <p
              className = { props.selected ? "dashboardStylingSelectedPar" : "" ||
              props.name === 'Registered Tasks' ? "dashboardReg" : 
              props.name === 'Completed Tasks' ? "dashboardCom" : 
              props.name === 'Pending Tasks' ? "dashboardPen" : 
              props.name === 'Failed Tasks' ? "dashboardFai" : "" }
              >
              {props.data}
            </p>
          </div>
        </button>
  );
}

export default DashboardCard;