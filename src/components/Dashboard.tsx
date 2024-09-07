// It will be the container for the widgets, allowing them to be added and rearranged.

import React from 'react';
import Widget from './Widget';
import { useLocalStorage } from '../hooks/useLocalStorage';
import './Dashboard.css';

interface WidgetData {
  id: number;
  title: string;
  content: string;
}

const Dashboard: React.FC = () => {
  const [widgets, setWidgets] = useLocalStorage<WidgetData[]>('dashboard-widgets', [
    { id: 1, title: 'Weather', content: 'Sunny 22°C' },
    { id: 2, title: 'Tasks', content: '3 tasks pending' },
  ]);

  const addWidget = () => {
    const newWidget: WidgetData = {
      id: Date.now(),
      title: 'New Widget',
      content: 'Add your content here',
    };
    setWidgets([...widgets, newWidget]);
  };

  const deleteWidget = (id: number) => {
    setWidgets(widgets.filter(widget => widget.id !== id));
  };

  const moveWidget = (index: number, direction: 'up' | 'down') => {
    const newWidgets = [...widgets];
    const newIndex = direction === 'up'
      ? (index === 0 ? widgets.length - 1 : index - 1)
      : (index === widgets.length - 1 ? 0 : index + 1);
    const [removed] = newWidgets.splice(index, 1);
    newWidgets.splice(newIndex, 0, removed);
    setWidgets(newWidgets);
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>My Dashboard</h1>
        <p>Customize your personal dashboard</p>
      </header>
      
      <div className="widget-container">
        {widgets.map((widget, index) => (
          <div key={widget.id} className="widget-wrapper">
            <Widget title={widget.title} content={widget.content} />
            <div className="widget-controls">
              <button onClick={() => moveWidget(index, 'up')}>↑</button>
              <button onClick={() => moveWidget(index, 'down')}>↓</button>
              <button onClick={() => deleteWidget(widget.id)}>×</button>
            </div>
          </div>
        ))}
      </div>
      
      <button className="add-widget" onClick={addWidget}>Add Widget</button>
    </div>
  );
};

export default Dashboard;