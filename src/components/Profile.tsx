import * as React from 'react';

export interface Props {
  name: string;
  experienceLevel?: number; //optional
}

const Profile = ({ name, experienceLevel = 0 }: Props) => {
  return (
    <div>
      <div>{name} has {experienceLevel} years of job experience.</div>
    </div>
  )
}

export default Profile;