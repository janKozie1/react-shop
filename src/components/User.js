import React from 'react';

const User = ({ match = "" }) => {
    console.log(match)
    return (
        <div>
            {match.params.username}
        </div>
    );
};

export default User;