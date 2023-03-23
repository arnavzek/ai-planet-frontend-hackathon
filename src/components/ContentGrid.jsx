import { Box, Grid, Stack, Tab, Tabs } from '@mui/material'
import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ContentItem from './utility/getContentItem';
import getContentItem from './utility/getContentItem';
import getFavs from './utility/getFavs';
import getSearch from './utility/getSearch';
import rankItems from './utility/rankItems';
import getSubmissions from './utility/getSubmissions';

export default function ContentGrid({rankType, onlyFavs, search}){
  return <Grid mt={3} container spacing={5}>
    {renderItems()}
  </Grid>


function renderItems(){
  let submissions = getSubmissions()

  if(onlyFavs) submissions = getFavs(submissions)
  if(search) submissions = getSearch(submissions, search)
  submissions = rankItems(submissions, rankType)

  return submissions.map((item,key)=>{
    return getContentItem({item,key})
  })


}
}