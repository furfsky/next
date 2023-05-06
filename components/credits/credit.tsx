import React from 'react';
import { brightness } from '../../util/color';

export interface Role {
  name: string; // Does not need to match up with the roles on discord
  color: string;
}

export type Roles = {
  [key: string]: Role;
};

export interface Credit {
  id: string;
  name: string;
  role: string;
  quote: string;
  link: string;
  pfp: string;
}
export interface CreditProps {
  id: string;
  name: string;
  role: {
    color: string;
    name: string;
  };
  quote: string;
  link: string;
  pfp: string;
}
// add color
const CreditComponent = ({ id, name, role, quote }: CreditProps) => (
  <div
    key={id}
    className="inline-block max-w-md p-8 text-white align-middle"
    style={{ color: role.color, textShadow: `2px 2px 0 ${brightness(role.color, 0.35)}` }}
  >
    <div className="text-xl">
      <h3
        className="mb-4 text-4xl font-semibold"
        style={{ textShadow: `4px 4px 0 ${brightness(role.color, 0.35)}` }}
      >
        {name}
      </h3>
      <p>{role.name}</p>
      <p className="italic">{quote}</p>
    </div>
  </div>
);

export default CreditComponent;
