import React, {Component} from 'react';

//Import CSS style sheet:
import './App.css';

//Import user components:
import User from '../components/User.js';
import UserList from '../components/UserList.js';

//Import SearchBox component:
import SearchBox from '../components/SearchBox.js';

// Import logo image component:
import LogoImage from '../components/LogoImage.js';

// import the actions:
import {setSearchField,requestStudents} from '../actions.js';

// Import the 'connect' method from Redux:
import {connect} from 'react-redux';



// Define 'connect' parameter methods:

// *** mapStateToProps ***
const mapStateToProps = state =>{
  return{
    searchField: state.searchStudents.searchField,
    students: state.requestStudents.students,
    isPending: state.requestStudents.isPending,
    error: state.requestStudents.error    
  }
}


// *** mapDispatchToProps ***
const mapDispatchToProps = (dispatch) => {
    return {
      onchangeSearch: (event) => dispatch(setSearchField(event.target.value)),
      onRequestStudents: () => dispatch(requestStudents())
    }
}


class App extends Component{

  componentDidMount(){
    this.props.onRequestStudents();
  }

    render(){

      {/** */}

      const {students,onchangeSearch,searchField,isPending} = this.props;

      // now filtering the users as per the search expression:
      const allUsersList = students;

      const usersArray = allUsersList.filter( (user)=>{
        return user.name.toLowerCase().includes(searchField.toLowerCase());
      } );

      console.log('usersArray',usersArray)

      return(
        <div className='App'>
          <LogoImage/>
          <SearchBox onchangeSearch={onchangeSearch}/>
          <UserList usersList={usersArray} />
        </div>
      );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);