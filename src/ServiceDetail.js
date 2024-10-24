// src/components/ServiceDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
  const { serviceType } = useParams();

  return (
    <div>
      <h2>{serviceType.charAt(0).toUpperCase() + serviceType.slice(1)} Services</h2>
      <p>Details about our {serviceType} services.</p>
    </div>
  );
};

export default ServiceDetail;
