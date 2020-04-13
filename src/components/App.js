
import React from 'react';
import axios from 'axios';

import PageTabs from './PageTabs';
import GridView from './GridView';

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

  getTasks() {
    axios.get(' https://my-json-server.typicode.com/ae324/ReactApp_IS322/posts')
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

  render() {
    const { view } = this.state;

    if (view === 'grid') {
      return (this.wrapPage(
          <GridView tasks={this.state.sortedTasks} onUpdateTask={(task)=> this.onUpdateTask(task)} />
      ));
    }

  }
}

export default App;
