// It will be the container for the widgets, allowing them to be added and rearranged.

import React, { useState } from 'react';
import Widget from './Widget';

const Dashboard: React.FC = () => {
  const [widgets, setWidgets] = useState([{ title: 'Weather', content: 'Sunny 22°C' }]);

  const addWidget = () => {
    setWidgets([...widgets, { title: 'New Widget', content: 'Content goes here' }]);
  };

  return (
    <div className="dashboard">
      {widgets.map((widget, idx) => (
        <Widget key={idx} title={widget.title} content={widget.content} />
      ))}
      <button onClick={addWidget}>Add Widget</button>
    </div>
  );
};

export default Dashboard;