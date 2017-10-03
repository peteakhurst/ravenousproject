import React from 'react';
import './BusinessList.css';

import Business from '../Business/Business';


class BusinessList extends React.Component{
  render() {
    return (
    <div className="BusinessList">
    <Business />
    <BusinessList />
    <Business />
    <BusinessList />
    <Business />
    <BusinessList />
    <Business />
    <BusinessList />
    <Business />
    <Business />
      <BusinessList />
    </div>
    );
  };
};

export default BusinessList;
