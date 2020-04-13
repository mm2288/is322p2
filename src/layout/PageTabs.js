import React from 'react';

class PageTabs extends React.Component {

    isActiveTab(tabName) {
        return (tabName === this.props.currentView) ? 'nav-link active' : 'nav-link';
    }

    onTabClick(event, tabName) {
        event.preventDefault();
        this.props.onViewChange(tabName);
    }

    render () {
        return (
            <ul className='nav'>
                <li className='nav-item'>
                    <label className={this.isActiveTab('grid')}
                           onClick={(e) => this.onTabClick(e, 'grid')}>
                        Grid View
                    </label>
                </li>
            </ul>
        )
    }

};

export default PageTabs;
