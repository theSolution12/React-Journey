import { useState } from 'react';

function Tabs() {
  const tabs = ['Home', 'Profile', 'Settings'];
  const [activeTab, setActiveTab] = useState('Home');

  const content = {
    Home: 'Welcome to the homepage!',
    Profile: 'Here is your profile.',
    Settings: 'Adjust your preferences here.'
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px' }}>
        {tabs.map(tab => (
          <button 
            key={tab} 
            onClick={() => setActiveTab(tab)} 
            style={{ fontWeight: activeTab === tab ? 'bold' : 'normal' }}
          >
            {tab}
          </button>
        ))}
      </div>
      <p>{content[activeTab]}</p>
    </div>
  );
}


export default Tabs;