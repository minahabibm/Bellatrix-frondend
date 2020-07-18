import React from "react";
import './skillBars.css';

import { connect } from 'react-redux';

import Skills from './skills'

function SkillBars(props) {
    
  return (
      <div>
          
          {props.data1.map((value,index) => {
            return (
                <Skills key={index} name={value.title} level= {getLevel(value.level)} score={value.level} color={getCol(value.level)}></Skills>
            )
          })}

      </div>      
  );
}

function getCol(x){
    if (x === 1){
        return "#0072CE"
    }else if(x === 2){
        return "#78C043"
    }else if(x === 3){
        return "#DA0C6F"
    }
}

function getLevel(x){
    if (x === 1){
        return "Beginner"
    }else if(x === 2){
        return "Intermediate"
    }else if(x === 3){
        return "Expert"
    }
}

function mapStateToProps(state/**, ownProps?*/) {
  return {
    data: state.user[0],
    data0: state.user[0].id,
    data1: state.user[0].skill,
    data2: state.skills[0],
  }
 // component receives additionally:
}


export default connect(mapStateToProps)(SkillBars);