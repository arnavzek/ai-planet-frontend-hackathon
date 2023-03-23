import { Box, Stack, Tab, Tabs } from '@mui/material'
import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ContentGrid from './ContentGrid';

const data = [
  {
    Id: "Dsc",
    Ad: "Newest First"
  },
  {
    Id: "Asc",
    Ad: "Oldest First"
  }
];
function TabBar() {
  const [tab, setTab] = useState(0);
  const [rankType, setRankType] = useState(data[0].Id);
  const [search, setSearch] = useState("")

  const handleTab = (e, newVal) => {
    setTab(newVal);
  };

  function onChange(event) {
    setRankType(event.target.value);
  }


  return (
  <Stack bgcolor={"#f8f9fd"} pt={"30px"} pl={"100px"} pr={"100px"} direction="column" spacing={2} >
      
    <Stack justifyContent="space-between" direction="row" spacing={2} >

      <Tabs value={tab}
        onChange={handleTab}
        TabIndicatorProps={{
          style: {
            backgroundColor: '#0fd850',
            height: 5
          }
        }}
        textColor="black"
        fontweight="bold"
        indicatorColor="secondary"
      >
        <Tab label="All Submissions" />
        <Tab label="Favourites Submissions" />
      </Tabs>
    

      <Stack direction="row" spacing={2} >
        {/* searchicon */}
        <span style={{ border: '1px solid black', padding: '15px 12px', borderRadius: '200px', display: 'flex', maxWidth: '400px' }}>
          <SearchIcon style={{ color: "gray" }}></SearchIcon> <input value={search} onChange={(e)=>{ setSearch(e.target.value) }} type="text" placeholder='Search' style={{ border: 'none', color: 'gray', outline: 'none', marginBottom: '2px', background:"transparent" }} />
        </span>

        {/* Sorting select */}
        <Box sx={{ maxWidth: 150, marginLeft: '1rem' }}>
          <FormControl fullWidth>
            <Select sx={{
              color: 'gray',
              borderRadius: '200px',
              ".MuiOutlinedInput-notchedOutline": { border: '1px solid black' },
              "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
              {
                border: '1px solid black',
              },
              "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                border: '1px solid black',
              },
              
            }}
              value={rankType} onChange={onChange}
            >
              {data.map((item) => (
                <MenuItem key={item.Id} value={item.Id}>
                  {item.Ad}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Stack>
    </Stack>

    <TabPanel1 value={tab} index={0}> <ContentGrid rankType={rankType} search={search} onlyFavs={false}/> </TabPanel1>
    <TabPanel1 value={tab} index={1}> <ContentGrid rankType={rankType} search={search} onlyFavs={true}/> </TabPanel1>

</Stack>
      
  )
}
function TabPanel1(props) {
  const { children, value, index } = props;
  return (<div>
    {value === index && children}
  </div>
  )
}
export default TabBar