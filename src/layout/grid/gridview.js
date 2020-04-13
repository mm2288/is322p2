import React from 'react';

import GridCard from '../grid/gridcard';

const COLUMN_NAMES = ['todo', 'in-progress', 'review', 'done'];

class GridView extends React.Component {

    constructor(props) {
        super(props);

        this.onPrevClick = this.onPrevClick.bind(this);
        this.onNextClick = this.onNextClick.bind(this);
    }

    findTask(taskId, columnName) {
        const columnTasks = (columnName === 'in-progress') ? this.props.tasks.inProgress : this.props.tasks[columnName];
        return columnTasks.find(task => task.id === taskId);
    }

    onPrevClick(taskId, columnName) {
        let task = this.findTask(taskId, columnName);
        let columnIndex = COLUMN_NAMES.findIndex(name => task.column === name);

        if (columnIndex > 0) {
            columnIndex--
            task.column = COLUMN_NAMES[columnIndex];
            this.props.onUpdateTask(task);
        }
    }

    onNextClick(taskId, columnName) {
        let task = this.findTask(taskId, columnName);
        let columnIndex = COLUMN_NAMES.findIndex(name => task.column === name);

        if (columnIndex < COLUMN_NAMES.length) {
            columnIndex++
            task.column = COLUMN_NAMES[columnIndex];
            this.props.onUpdateTask(task);
        }
    }

    renderCardColumn(post, prevTxt, nextTxt) {
        return (
            <GridCard id={post.id}
                      key={post.id}
                      title={post.title}
                      type={post.type}
                      column={post.column}
                      prevTxt={prevTxt}
                      onPrevClick={this.onPrevClick}
                      nextTxt={nextTxt}
                      onNextClick={this.onNextClick}/>
        );
    }

    render() {
        const todoCards = this.props.tasks.todo
            .map(post => this.renderCardColumn(post, null, 'Start Work >'));
        const inProgressCards = this.props.tasks.inProgress
            .map(post => this.renderCardColumn(post, '< Send Back', 'Request Review >'));
        const reviewCards = this.props.tasks.review
            .map(post => this.renderCardColumn(post, '< More Work Required', 'Mark Done >'));
        const doneCards = this.props.tasks.done
            .map(post => this.renderCardColumn(post, '< Request Re-Review'));

        return (
            <div className="row">
                <div className="col bg-light rounded m-2 shadow">
                    <h2>
                        To Do
                    </h2>

                    <div className="">
                        { todoCards }
                    </div>
                </div>
                <div className="col border rounded m-2 shadow">
                    <h2>
                        In Progress
                    </h2>

                    <div className="">
                        { inProgressCards }
                    </div>
                </div>
                <div className="col bg-light rounded m-2 shadow">
                    <h2>
                        Review
                    </h2>

                    <div className="">
                        { reviewCards }
                    </div>
                </div>
                <div className="col border rounded m-2 shadow">
                    <h2>
                        Done
                    </h2>

                    <div className="">
                        { doneCards }
                    </div>
                </div>
            </div>
        );
    }

}

export default GridView;
