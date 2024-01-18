import React, { useState } from 'react';
import Tree from 'react-d3-tree';
import familyTreeData from './familyTreeData.json';

const FamilyTree = () => {
  const [orientation, setOrientation] = useState('vertical');

  const changeOrientation = () => {
    setOrientation(orientation === 'vertical' ? 'horizontal' : 'vertical');
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '20%', padding: '10px' }}>
        <button onClick={changeOrientation}>Toggle Orientation</button>
      </div>
      <div style={{ width: '80%' }} id="treeWrapper">
        <Tree data={familyTreeData} orientation={orientation} />
      </div>
    </div>
  );
};

export default FamilyTree;
