import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Get from './Get';
import Send from './Send';
import MinningLink from './MinningLink';
function TabFormLink(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabFormLink.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Get" {...a11yProps(0)} />
          <Tab label="Send" {...a11yProps(1)} />
          <Tab label="Minning" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabFormLink value={value} index={0}>
        <Get />
      </TabFormLink>
      <TabFormLink value={value} index={1}>
        <Send />
      </TabFormLink>
      <TabFormLink value={value} index={2}>
        <MinningLink />
      </TabFormLink>
    </Box>
  );
}