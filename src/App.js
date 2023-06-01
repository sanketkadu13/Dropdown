import React from 'react';
import Select from './components/select/Select';

const App = () => {
  const options = [
    { value: 'Css', label: 'CSS' },
    { value: 'JS', label: 'JS' },
    { value: 'React JS', label: 'REACT JS' },
    { value: 'Java', label: 'JAVA' },
    { value: 'Python', label: 'PYTHON' },
    { value: 'DS', label: 'DATA-SCIENCE' },
    { value: 'JS', label: 'JS' },
  ];

  const handleSelectChange = (selectedValues) => {
    console.log('Selected options:', selectedValues);
  };

  return (
    <div className="app">
      <h1>Select Component</h1>
      <Select
        options={options}
        placeholder="Select options"
        onChange={handleSelectChange}
      />
    </div>
  );
};

export default App;
