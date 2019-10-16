import React from 'react'

interface NameLabelProps {
  name: number|string;
}

const NameLabel: React.FC<NameLabelProps> = ({ name }) => (
  <div>
    {name}
  </div>
)

export default NameLabel
