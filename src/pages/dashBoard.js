import React, { useState , useEffect } from "react";
import './dashBoard.css'

import { connect } from 'react-redux';

import * as dateFns from "date-fns";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { makeStyles } from '@material-ui/core/styles';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Pagination from '@material-ui/lab/Pagination';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import Calender from '../components/UI/calender'
import CardsAlert from '../components/UI/alertCard'
import DashBoardCards from '../components/UI/dashboardCard'

import { ReactComponent as ListViewIcon } from '../images/ListView.svg'
import { ReactComponent as GridViewIcon } from '../images/GridView.svg'
import { ReactComponent as CalenderViewIcon } from '../images/CalenderView.svg'
import { ReactComponent as ListViewIconChecked } from '../images/ListViewChecked.svg'
import { ReactComponent as GridViewIconChecked } from '../images/GridViewChecked.svg'
import { ReactComponent as CalenderViewIconChecked } from '../images/CalenderViewChecked.svg'
import { ReactComponent as SearchIcon } from '../images/Search.svg'
import { ReactComponent as FilterIcon } from '../images/Filter.svg'
import { ReactComponent as SortIcon } from '../images/Sort.svg'
import { ReactComponent as Diamond } from '../images/diamond.svg'
import { ReactComponent as DueDate } from '../images/dueDate.svg'



/**
 * Modifiying Nested Dictionaries by keeping the Array immutable.
 * setfilterDashboardCards({ ...filterDashboardCards, [group]: { ... filterDashboardCards[group], [filter]: !filterDashboardCards[group][filter] }})
 */

const useStyles = makeStyles((theme) => ({
  RadioGroup: {
    float: 'right',
  },
  iconMain: {
    paddingLeft: 5,
    paddingRight:0,
    paddingTop: 0,
    paddingBottom: 0,
    boxShadow: 'none',
    '&&:hover': {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
  },
  textField: {
    width: '57%',
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
  rowCells: {
    padding: '12px',
    paddingRight: '20px',
  },
  rowCellsTasks: {
    padding: '12px',
    paddingRight: '25px',
  },
  rowCellsSkills: {
    maxWidth: '155px',
    padding: '12px',
    paddingRight: '20px',
  },
  headerRowCells: {
    paddingBottom: '12px',
    paddingLeft: '12px',
    paddingRight: '12px',
    borderColor: '#000000',
  },
}));

const headCells = [
  { id: 'Task', numeric: false, disablePadding: false, label: 'Task' },
  { id: 'Skills', numeric: false, disablePadding: false, label: 'Skills' },
  { id: 'Registered Worker', numeric: false, disablePadding: false, label: 'Registered Worker' },
  { id: 'Deadline', numeric: true, disablePadding: false, label: 'Deadline' },
  { id: 'Points', numeric: true, disablePadding: false, label: 'Points' },
  { id: 'Status', numeric: false, disablePadding: false, label: 'Status' },
];


function DashBoard(props) {
  const classes = useStyles();    

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(props.data);
  const [filterDashboardCards, setfilterDashboardCards] = useState( props.filters.TasksCards );
  const [searchAndFiltersResults, setSearchAndFiltersResults] = useState(props.data);
  const [listingType, setlistingType] = useState('List');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);


  const handleFilterDashboardCards = (index) => {
    setfilterDashboardCards({ ...props.filters.TasksCards, [index]:!filterDashboardCards[index]})
  };
  const handleListing = (event, Listing) => {
    setlistingType(Listing);
  };
  const handleSearchByTitle = event => {
    setSearchTerm(event.target.value);
  };
  const getDaysDiff = (dueDate) => {
    var deadline = dueDate ? dateFns.differenceInDays( new Date(dueDate), new Date()) : null
    if(deadline < 0){
      return `${deadline} past due`
    }else if(deadline === 1){
      return `${deadline} day left`
    }else if(deadline > 1){
      return `${deadline} days left`
    }
    return deadline
  }
  const handleChangePage = (event, newPage) => {
    setPage(newPage-1);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    const results = searchResults.filter(autoComplete => autoComplete.Task.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchAndFiltersResults(results);
  }, [searchTerm,searchResults]);
  useEffect(() => {
    const results = searchResults.filter(autoComplete => autoComplete.Task.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchAndFiltersResults(results);
  }, [searchResults,searchTerm]);
  useEffect(() => {
    let isFiltered= false;
    for (const [key, filter] of Object.entries(filterDashboardCards)) {
      let taskscard;
      let taskscard0;
      
      if(key === "RegisterdClicked"){
        taskscard = ("Pending" || "Completed")
        taskscard0 = ("Completed")
      }else if(key === "CompletedClicked"){
        taskscard = ("Completed" )
      }else if(key === "pendingClicked"){
        taskscard = ("Pending")
      }else if(key === "failedClicked"){
        taskscard = ("Failed")
      }

      if (filter === true){
        var results = props.data.filter(tasks => ((tasks.Status === taskscard || tasks.Status === taskscard0 ) && tasks.WorkerId === 0));
        //results = results.concat(res)
        setSearchResults(results);
        isFiltered= true;
      }

      if (isFiltered === false){
        setSearchResults(props.data);
      }
    }
  }, [filterDashboardCards, props.data]);

  return (
   
    <Container fluid >

      <Row>

        <Col className={"pr-4 pl-4"}>

          <Row > 

            <Col className="dashboardTittle">
              DashBoard
            </Col>
          
          </Row>

          <Row className={'dashBoardcardsRow'}>

            <Col
              onClick={() => handleFilterDashboardCards("RegisterdClicked")}>
              <DashBoardCards
                selected= {filterDashboardCards.RegisterdClicked}
                name= 'Registered Tasks'
                data= {props.data.filter((tasks)=>{ return ((tasks.Status === "Pending" || tasks.Status === "Completed" ) && tasks.WorkerId === 0)}).length }
              ></DashBoardCards>
            </Col>

            <Col 
              className={"pl-1"}
              onClick={() => handleFilterDashboardCards("CompletedClicked")}>
              <DashBoardCards
                selected= {filterDashboardCards.CompletedClicked}
                name= 'Completed Tasks'
                data= {props.data.filter((tasks)=>{ return (tasks.Status === "Completed" && tasks.WorkerId === 0)}).length }
              ></DashBoardCards>
            </Col>

            <Col 
              className={"pl-1"}
              onClick={() => handleFilterDashboardCards("pendingClicked")}>
              <DashBoardCards
                selected= {filterDashboardCards.pendingClicked}
                name= 'Pending Tasks'
                data= {props.data.filter((tasks)=>{ return (tasks.Status === "Pending"  && tasks.WorkerId === 0)}).length }
            ></DashBoardCards>
            </Col>

            <Col 
              className={"pl-1"}
              onClick={() => handleFilterDashboardCards("failedClicked")}>
              <DashBoardCards
                selected= {filterDashboardCards.failedClicked} 
                name= 'Failed Tasks'
                data= {props.data.filter((tasks)=>{ return (tasks.Status === "Failed" && tasks.WorkerId === 0)}).length }
              ></DashBoardCards>
            </Col>
          
          </Row>

          <Row className={'pt-2'}>

            <Col>
              <TextField
                classes={{root: classes.textField}}
                value={searchTerm}
                onChange={handleSearchByTitle}
                id="standard-basic" 
                label=""
                placeholder="Search tasks by tittle"
                margin="normal"
                InputProps={{ 
                  type: 'search',
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon></SearchIcon>
                    </InputAdornment> 
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <FilterIcon className={'mr-2'}></FilterIcon>
                      <SortIcon></SortIcon>
                    </InputAdornment>
                  )
                }}
              ></TextField>           
            </Col>

            <Col className="dashBoardViewDiv" >
              <RadioGroup
                row
                classes={{root: classes.RadioGroup}}
                name="list_type"
                defaultselected="List"
                value={listingType}
                onChange={handleListing}
              >
                <Radio
                  classes={{root: classes.iconMain}}
                  value="List"
                  label="List view"
                  icon= {<ListViewIcon></ListViewIcon>}
                  disableRipple
                  checkedIcon={ <ListViewIconChecked></ListViewIconChecked> }
                ></Radio>

                <Radio
                  classes={{root: classes.iconMain}}
                  value="Grid"
                  label="Grid view"
                  disableRipple
                  icon= {<GridViewIcon></GridViewIcon>}
                  checkedIcon={ <GridViewIconChecked></GridViewIconChecked> }
                ></Radio>
                
                <Radio
                  classes={{root: classes.iconMain}}
                  value="Calender"
                  label="Calender view"
                  disableRipple
                  icon= {<CalenderViewIcon></CalenderViewIcon>}
                  checkedIcon={ <CalenderViewIconChecked></CalenderViewIconChecked> }
                ></Radio>
              </RadioGroup>
            </Col>

          </Row>

          <Row>

            <Col> {/**Table View */}

              <TableContainer>
                <Table >
                  <TableHead>
                    <TableRow>
                      {headCells.map((headCell) => (
                      <TableCell 
                        classes={{root: classes.headerRowCells}}
                        key={headCell.id}
                        //align={headCell.numeric ? 'right' : 'left'}
                        //padding={headCell.disablePadding ? 'none' : 'default'}
                        //sortDirection={orderBy === headCell.id ? order : false}
                      >
                        <TableSortLabel
                          //active={orderBy === headCell.id}
                          //direction={orderBy === headCell.id ? order : 'asc'}
                          //onClick={createSortHandler(headCell.id)}
                        >
                          {headCell.label}
                          {/**orderBy === headCell.id ? (
                            <span className={classes.visuallyHidden}>
                              {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                            </span>
                          ) : null*/}
                          </TableSortLabel>
                      </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {searchAndFiltersResults.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row,index) => (
                      <TableRow 
                        key={index}
                      >
                        <TableCell component="th" scope="row" 
                          className={row.Deadline?"taskRow taskFont": "taskRow"} 
                          classes={{root: classes.rowCellsTasks}} 
                        >
                          {row.Task}
                        </TableCell>

                        <TableCell className={"skillsRow"} classes={{root: classes.rowCellsSkills}}>
                          {row.Skills.join(", ")}
                        </TableCell>

                        <TableCell classes={{root: classes.rowCells}}>
                          {row.WorkerId ? props.users.filter((item) => { return item.id === row.WorkerId})[0].name : row.WorkerId === 0 ? 'You' : '--'}
                        </TableCell>

                        <TableCell classes={{root: classes.rowCells}}>
                          {row.Deadline? row.Deadline +' - '+ row.DeadlineTime : '--' }
                          <div className="duedate">
                            {getDaysDiff(row.Deadline)? <DueDate className="duedateIcon"></DueDate> : null}
                            {getDaysDiff(row.Deadline)}
                          </div>
                        </TableCell>

                        <TableCell classes={{root: classes.rowCells}}>
                          <Diamond className={"diamondDashboard"} ></Diamond>
                          {row.Points}
                        </TableCell>

                        <TableCell classes={{root: classes.rowCells}}>
                          <span className={"dot"+row.Status} ></span>
                          {row.Status}
                        </TableCell>

                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <Row className="pt-2 pb-3">

                <Col>
                  <Select
                    defaultValue={10}
                    onChange={handleChangeRowsPerPage}
                  >
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={25}>25</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                  </Select>
                  <span> per page</span>
                </Col>

                <Col >
                  <div className="paginationDiv">    
                    <Pagination 
                        count={Math.ceil(props.data.length / rowsPerPage) } 
                        shape="rounded" 
                        size="small"
                        onChange={handleChangePage}
                      >
                    </Pagination>
                  </div>
                </Col>

              </Row>

            </Col>

          </Row>
           
        </Col>

        <Col lg={"auto"}  className="divColumnStyle">

          <div className="dBcontactus">
            <h5 className="dBtitlestyle">Upcoming Deadlines</h5>
          </div>

          <div>
            <Calender></Calender>
          </div>

          <div className="dbCalenderCards">
            {
              props.data.slice(0,10).filter((task) => {return task.WorkerId === 0}).map((filteredName,index) => (
                <CardsAlert
                  key={index}
                  date={dateFns.format(new Date(filteredName.Deadline), 'MMMMMM eo, yyyy')}
                  task={filteredName.Task}
                >
                </CardsAlert>
              ))
            }
          </div>

        </Col>
      
      </Row>

    </Container>
    
  );
}

function mapStateToProps(state/**, ownProps?*/) {
  return {
    data: state.tasks,
    filters: state.filters,
    users: state.user
  }
 // component receives additionally:
}

export default connect(mapStateToProps)(DashBoard);