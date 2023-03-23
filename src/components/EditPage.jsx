import React from 'react'
import { Box, Stack} from "@mui/material";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import Add from './Add';

function EditPage() {
  let { id } = useParams();

  return (
  <Add toEdit={id}/>
  )
}

export default EditPage