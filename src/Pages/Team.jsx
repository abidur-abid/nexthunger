import React from 'react';
import TeamlBanner from '../Components/TeamBanner';
import SectionTitle from '../Components/SectionTitle';
import TeamMembers from '../Components/TeamMembers';

const Team = () => {
    return (
       <>
        <TeamlBanner></TeamlBanner>
        <SectionTitle title='Meet With Our Team '></SectionTitle>
        <TeamMembers></TeamMembers>
       </>
    );
};

export default Team;