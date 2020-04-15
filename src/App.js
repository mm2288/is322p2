
import React from 'react';
import axios from 'axios';

import PageTabs from './layout/PageTabs';
import GridView from './layout/grid/gridview';
import AddTask from './layout/addtask';
/*import NavBar from './layout/navbar';*/

const mobileWidth = 768;

class App extends React.Component {
  state = {
    view: 'grid',
    allTasks: [],
    sortedTasks: {
      todo: [],
      inProgress: [],
      review: [],
      done: []
    },
    errorText: ''
  }

  componentDidMount() {
    this.getTasks();
  }

  handleResize = () => {
    const browserWidth = window.innerWidth;
    let breakpoint = 'computer';

    if (browserWidth < mobileWidth) {
      breakpoint = 'mobile';
    }

    this.setState({ breakpoint, browserWidth });
  }

  getTasks() {
    axios.get('https://my-json-server.typicode.com/ae324/ReactApp_IS322/posts')
        .then(response => {
          this.setState({ allTasks: response.data, sortedTasks: this.sortTasks(response.data) });
        }).catch (error => {
      this.setState({ errorMessage: error.message });
    });
  }

  sortTasks(tasks) {
    return {
      todo: tasks.filter(post => post.column === 'todo'),
      inProgress: tasks.filter(post => post.column === 'in-progress'),
      review: tasks.filter(post => post.column === 'review'),
      done: tasks.filter(post => post.column === 'done'),
    }
  }

  onUpdateTask(_task) {
    let allTasks = this.state.allTasks;
    const index = allTasks.findIndex(task => task.id === _task.id);
    allTasks[index] = _task;

    const sortedTasks = this.sortTasks(allTasks);
    this.setState({ allTasks, sortedTasks })
  }

  onViewChange(view) {
    this.setState({ view });
  }

  onAddTask(task) {
    let tasks = this.state.allTasks;

    task.column = 'todo';
    task.id = this.state.tasks.length + 1;

    tasks.push(task);
    let sortedTasks = this.sortTasks(tasks);
    this.setState({ tasks, sortedTasks, view: 'grid' });
  }

  wrapPage(jsx) {
    const { view } = this.state;
    return (
        <div className="container">
          <PageTabs currentView={view}
                    onViewChange={this.onViewChange.bind(this)}/>
          {jsx}
        </div>
    );
  }




/*determinePage(event){
  if (this.state.view === 'grid') {
    return (this.wrapPage(
        <GridView tasks={this.state.sortedTasks} onUpdateTask={(task)=> this.onUpdateTask(task)} />
    ));
  } else if (this.state.view === 'add') {
    return (this.wrapPage(
      <AddTask tasks={this.state.sortedTasks} onSubmit={this.onAddTask.bind(this)} />
    ));
  } else {
    return (this.wrapPage(
      <h2>Invalid Tab, choose another</h2>
    ));
  }
}*/







  render() {
    if (this.state.breakpoint === 'mobile'){
        if (this.state.option === 'todo') {
          <
        }
      )
    } else {
    if (this.state.view === 'grid') {
      return (this.wrapPage(
          <GridView tasks={this.state.sortedTasks} onUpdateTask={(task)=> this.onUpdateTask(task)} />
      ));
    } else if (this.state.view === 'add') {
      return (this.wrapPage(
        <AddTask tasks={this.state.sortedTasks} onSubmit={this.onAddTask.bind(this)} />
      ));
    } else {
      return (this.wrapPage(
        <h2>Invalid Tab, choose another</h2>
      ));
    }
  }

}

export default App;
