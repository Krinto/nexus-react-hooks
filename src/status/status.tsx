import React from 'react'
import './status.scss';

type ServiceItem = {
  id: number;
  title: string;
  url: string;
  icon: string;
  status?: Status[];
}

type Status = {
  time: Date;
  online: boolean;
}

const ServiceStatus = () => {

  return (
    <div>
        <h1>Status</h1>
    </div>
  );
};

export default ServiceStatus;
