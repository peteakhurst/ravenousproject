import React from 'react';
import BusinessList from './BusinessList.css';

import Business from '../Business/Business';


class BusinessList extends React.Component{
  render() {
    return (
    <div className={BusinessList}>
    <Business />
    <Business />
    <Business />
    <Business />
    <Business />
    <Business />
      <BusinessList />
    </div>
    );
  };
};

export default BusinessList;