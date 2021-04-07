import React, { Fragment } from 'react';
import ChampTile from '../MiniComponents/ChampTile';
import Box from '@material-ui/core/Box';


function ChampionsListComponent({ campeones }) {
    return (
        <div style={{ width: '100%' }}>
            <Box
                display="flex"
                flexWrap="wrap"
                bgcolor="background.paper"
                justifyContent="center"
            >
                {campeones.map((campeon, index) => {
                    return <Box key={index}><ChampTile champInfo={campeon} /></Box>
                })}
            </Box>
        </div>
    )
}

export default ChampionsListComponent;