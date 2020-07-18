import React, { useState , useEffect } from "react";
import './skillAddButton.css';

import { connect } from 'react-redux';

import IconButton from '@material-ui/core/IconButton';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import InputAdornment from '@material-ui/core/InputAdornment';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

import Buttons from '../UI/button'
import { ReactComponent as SearchIcon } from '../../images/Search.svg'


/**
 * {props.data2.some(ele =>ele.title === value.title )} 
 * {props.data.slice(0, showMoreCount).map((value,index) => {}
 */


const UsesStyles = makeStyles(() => ({
  
  iconMain: {
    color:'#000000',
    boxShadow: 'none',
    width: '20px',
    padding: '0px',
    marginTop: '3%',
    marginLeft: '93%',
    '&:hover': {
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
    },
    '&:focus': {
      boxShadow: 'none',
    },
  },
  dialog: {
    width: '450px',
    margin: 'auto'
  },
  dialogIconCancel: {
    fontSize: '18px',
    padding: '0px',
    margin: '0px',
  },
  dialogtitle: {
    paddingBottom: '0px',
    paddingTop: '0px'
  },
  dialogContent: {
    paddingTop: '0px',
    paddingBottom: '24px',
  },
  textField: {
    margin: '0px',
    '& label.Mui-focused': {
      color: '#000000',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#000000',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#000000',
    },
  },
  list: {
    paddingBottom: '0px',
  },
  listItemIcon: {
    width: '30px',
    minWidth: '30px',
  },
  listItemIconCheck: {
    paddingRight: '0px',
    paddingBottom: '5px',
    paddingTop: '5px',
    color: '#000000',
    '&:hover': {
      backgroundColor: "transparent",
    },
    '&:active': {
      backgroundColor: "transparent",
    },
    '&:focus': {
      backgroundColor: "transparent",
    },
  },
  listItemIconChecked: {
    '&:hover': {
      color: '#000000',
      backgroundColor: "transparent",
    },
    '&:active': {
      color: '#000000',
      backgroundColor: "transparent",
    },
    '&:focus': {
      color: '#000000',
      backgroundColor: "transparent",
    },
  },
  listItemShowMore: {
    padding: '0px',
    display: ' '
  },
  listItemShowLess: {
    padding: '0px',
    display: 'none'
  },
  
}));

function SkillsAddButton(props) {

  var classes = UsesStyles();
  var skills = {}
  props.data2.forEach(element => {
    skills[element.title] = true
  })

  const [open, setOpen] = useState(false);
  const [showMore, setShowMore] = useState(2);
  const [showButton, setShowButton] = useState('Show all');
  const [showMoreCount, setShowMoreCount] = useState(8);
  const [skill, setSkill] = useState(()=> Object.assign( {}, skills ));
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleUpdate = () => {
    setOpen(false);
  };
  const showMoreItems = () => () => {
    if( (showMore * 8 ) < searchResults.length ){
      setShowMore(showMore + 1 );
      setShowMoreCount(showMore * 8)
      console.log(showMore)
    }else if( (showMore * 8 ) >= searchResults.length ){
      setShowMoreCount(searchResults.length-1)
      setShowButton('Show less')
    }
  };
  const showLessItems = () => () => {
    setShowMore(2);
    setShowMoreCount(8);
    setShowButton('Show all')    
  }
  const handleSetUserSkills = name => event => {
    setSkill({ ...skill, [name]: event.target.checked });
    console.log(skill)
  };
  const handleSearchByTitle = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = props.data.filter(autoComplete => autoComplete.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(results);
  }, [searchTerm]);

  return (

      <div>
        <IconButton
          edge= 'end'
          onClick={
            handleClickOpen
          }
        >                          
            <AddCircleOutlineOutlinedIcon className={"iconButton"}></AddCircleOutlineOutlinedIcon>
        </IconButton>

        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} fullWidth className={classes.dialog}>

          <IconButton
            onClick={handleClose}
            disableRipple
            classes={{
              root: classes.iconMain
            }}
          >
            <CancelOutlinedIcon 
              classes={{
                root: classes.dialogIconCancel,
              }}

            >
            </CancelOutlinedIcon>
          </IconButton>
          
          <DialogTitle id="customized-dialog-title" onClose={handleClose} className={classes.dialogtitle}> 
            <p className='titleContent'> Skills </p>
          </DialogTitle>

          <DialogContent
            classes = {{
              root: classes.dialogContent,
            }}
          >
            <TextField
              classes={{root: classes.textField}}
              value={searchTerm}
              onChange={handleSearchByTitle}
              id="standard-basic" 
              label=""
              placeholder="Search skills by name"
              margin="normal"
              InputProps={{ 
                type: 'search',
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon></SearchIcon>
                  </InputAdornment> 
                ),
              }}
                  
            ></TextField>
            
            <List
              classes = {{
                root: classes.list
              }}
            > 
              {searchResults.slice(0, showMoreCount).map((value,index) => {
                const labelId = `checkbox-list-label-${value}`;
              
              return (

                <ListItem
                  key={index}
                  classes = {{
                    root: classes.listItemShowMore
                  }}
                  role={undefined} 
                  dense 
                  button  
                >

                    <ListItemIcon
                      classes = {{
                        root: classes.listItemIcon,
                      }}
                    >
                      <Checkbox
                        edge="start"
                        color = 'default'
                        classes = {{
                          root: classes.listItemIconCheck,
                          checked: classes.listItemIconChecked,
                        }}
                        checked={skill[value.title]}
                        onChange={handleSetUserSkills(value.title)}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </ListItemIcon>

                    <ListItemText
                      id={labelId} 
                      primary={`${value.title}`}
                    >
                    </ListItemText>

                  </ListItem>
                );
              })}
            </List>

            <button
              className= 'linkButton' 
              onClick={ showButton === "Show less" ? showLessItems() : showMoreItems() }
            > {showButton} </button>

          </DialogContent>

          <DialogActions>
            <Buttons rank='secondry' onClick={handleClose} name='Cancel'></Buttons>
            <Buttons rank='primary' onClick={handleUpdate} name='Update'></Buttons>
          </DialogActions>

        </Dialog>
        
      </div>

  );
}


function mapStateToProps(state/**, ownProps?*/) {
  return {
    data: state.skills,
    data0: state.user[0], 
    data1: state.user[0].id,
    data2: state.user[0].skill,
  }
 // component receives additionally:
}


export default connect(mapStateToProps)(SkillsAddButton);