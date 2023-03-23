import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/joy'
import { Container, Stack, TextField } from '@mui/material'
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Nav from './Nav';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useNavigate } from "react-router-dom";
import getSubmissions from './utility/getSubmissions';
import getItem from './utility/getItem';


function Add({toEdit}) {
    let navigate = useNavigate();
    
    const [startdatevalue, setstartdatevalue] = useState(null);
    const [enddatevalue, setenddatevalue] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [summary, setSummary] = useState("");
    const [git, setGit] = useState("");
    const [other, setOther] = useState("");
    const [selectedImage, setSelectedImage] = useState(null)

    console.log(startdatevalue)

    useEffect(()=>{

        if(toEdit){
            let item = getItem(toEdit)
            if(item){
                console.log( new Date(item.startdatevalue) )
                setstartdatevalue(dayjs(item.startdatevalue))
                setenddatevalue(dayjs(item.enddatevalue))
                setTitle(item.title)
                setDescription(item.description)
                setSummary(item.summary)
                setGit(item.git)
                setOther(item.other)
                setSelectedImage(item.image)
            }
        }

        
    },[])

    let selectedImageStyle = {    
        height: "50px",
        width: "50px",
        objectFit: "cover"
    }

    const uploadButtonContent = selectedImage? <Stack width={"100%"} padding="0px 15px" alignItems="center" direction="row" justifyContent={"space-between"}>

        <Stack direction="row" spacing={2} alignItems="center">
            <img style={selectedImageStyle} src={selectedImage.url}/>
            <Typography >{selectedImage.name}  </Typography>
        </Stack>
        <Stack direction="row" spacing={2}>
            <CloudUploadIcon/>
            <Typography >Reupload </Typography>
        </Stack>
         </Stack> : <Typography >Click to upload image here</Typography>

    return (
        <Stack 	>
            <Nav />

            <Container sx={{ bgcolor: "#f8f9fd" }} maxWidth="xl" style={{ width: "100vw", paddingLeft: 0, paddingRight: 0 }}>

            <Stack width={"800px"} spacing={5} p={"50px"} ml={"50px"} mt={"50px"} direction="column" bgcolor={"#fff"}>
     

                    <Typography variant="h1" sx={{ color: 'black', marginBottom: '2rem', fontFamily: 'Poppins', fontSize: 30 }}>New Hackathon Submission</Typography>


                    <Stack bgcolor={"#fff"} spacing={1}>
                        <Typography>Title</Typography>  
                        <TextField id="outlined-basic" label="Title of your submission" variant="outlined" value={title} onChange={(e) => {setTitle(e.target.value);}} />
                    </Stack>

                    <Stack bgcolor={"#fff"} spacing={1}>
                        <Typography>Summary</Typography>  
                        <TextField id="outlined-basic" label="A short summary of your submission (this will be visible with your submission" variant="outlined" value={summary} onChange={(e) => {setSummary(e.target.value);}} />
                    </Stack>

                    <Stack bgcolor={"#fff"} spacing={1}>
                        <Typography>Description</Typography>  
                        <TextField id="outlined-basic" label="Write a long description of your project. You can describe your idea and approach here." variant="outlined" value={description} onChange={(e) => {setDescription(e.target.value);}} />
                    </Stack>

     
                    <Stack bgcolor={"#fff"} spacing={1}>
                        <Typography>Cover Image</Typography>  
                        <Button variant="contained"  component="label" sx={{":hover": {bgcolor: "#555", color: "#fff"}, padding:"20px 0",  backgroundColor: '#f5f5f5', color:"#888" }}>
                            {uploadButtonContent}
                            <input onChange={selectImage} hidden accept="image/*" multiple type="file" />
                        </Button>
                    </Stack>
            

                    <Stack bgcolor={"#fff"} spacing={1} direction="row" justifyContent={"space-between"}>
                    <Stack bgcolor={"#fff"} spacing={1} >
                                <Typography>Hackathon Start Date</Typography>  
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker sx={{ marginTop: '1rem' }}
                                        value={startdatevalue}
                                        onChange={(newValue) => setstartdatevalue(newValue)}

                                        renderInput={(props) => <TextField{...props} />}
                                    />
                                </LocalizationProvider>
                            </Stack>
                            <Stack bgcolor={"#fff"} spacing={1} >
                                 <Typography>Hackathon End Date</Typography>  
                                <LocalizationProvider dateAdapter={AdapterDayjs}>

                                    <DatePicker sx={{ marginTop: '1rem' }}
                                        value={enddatevalue}
                                        onChange={(newValue) => setenddatevalue(newValue)}

                                        renderInput={(props) => <TextField{...props} />}
                                    />
                                </LocalizationProvider>
                            </Stack>
                  

                        </Stack>


                        <Stack bgcolor={"#fff"} spacing={1}>
                        <Typography>Github Repository</Typography>  
                        <TextField id="outlined-basic" label="Enter your submissions public GitHub repository link" variant="outlined" value={git} onChange={(e) => {setGit(e.target.value);}} />
                    </Stack>

                    <Stack bgcolor={"#fff"} spacing={1}>
                        <Typography>Other Links</Typography>  
                        <TextField id="outlined-basic" label="You can upload a video demo or URL of you demo app here" variant="outlined" value={other} onChange={(e) => {setOther(e.target.value);}} />
                    </Stack>
                        
               

              
                <Stack mt={"100px"} justifyContent={"center"}  alignItems={"center"}>
                    <Button variant={"contained"} sx={{":hover": {bgcolor: "#44924c", color: "#fff"}, padding:"10px 20px", borderRadius:"25px", backgroundColor: '#44924c', color:"#fff" }}
                    onClick={makeUpload}>Upload Submission</Button>
                </Stack>

                </Stack>

            </Container>
        </Stack>

    )

    function convertBase64 (file)  {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
    
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
    
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    async function selectImage(e){
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        console.log(base64)
        setSelectedImage({url: base64, name:file.name})
    }

    function makeUpload(){  
        let submissions = getSubmissions()

        if(toEdit){
            for(let itm of submissions){
                if(itm.id == toEdit){
                    itm.title = title
                    itm.description = description
                    itm.summary = summary
                    itm.git = git
                    itm.startdatevalue = startdatevalue
                    itm.enddatevalue = enddatevalue
                    itm.image = selectedImage
                    itm.other = other
                }
            }
        }else{
            let now = new Date()
            let newSubmission = {id:Math.round(Math.random()*1000000), uploadTime: now.valueOf(), title, description, summary, git, startdatevalue,enddatevalue, image: selectedImage,other }
            submissions.push(newSubmission)
        }


        localStorage.setItem("submissions", JSON.stringify(submissions))
        if(toEdit){
            navigate("/submission/"+toEdit); 
        }else{
            navigate("/submission/"+submissions[submissions.length-1].id); 
        }
        
        
    }
}

export default Add