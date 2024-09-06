// Each widget will be an independent component that receives configurable props.

import React from 'react';
import './Widget.css';

interface WidgetProps {
  title: string;
  content: string;
}

const Widget: React.FC<WidgetProps> = ({ title, content }) => (
  <div className="widget">
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
);

export default Widget;
