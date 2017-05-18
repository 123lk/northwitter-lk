import React from 'react';
import ProfileCard from './ProfileCard';
import TrendsFeed from './TrendsFeed';
import '../css/DashboardLeft.css';

class DashboardLeft extends React.Component {
  render () {
    return (
      <div className='col-sm-3'>
        <ProfileCard />
        <TrendsFeed />
      </div>
    );
  }
}

export default DashboardLeft;