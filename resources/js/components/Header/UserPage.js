import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@mui/material/Avatar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const useStyles = makeStyles({
   box: {
      paddingTop: 30,
      paddingBottom: 30,
      background: '#EBEFF3',
      marginBottom: 0,
   },
   userbox:{
      textAlign: 'center',
      margin: '0 auto',
      padding: 30,
      backgroundColor: '#fff',
      borderRadius: '10px',
   },
   user: {
      marginBottom: 0,
   },
   result: {
      
   }
})


export default function UserPage({ users, id, name, picture, email, display}){
   const classes = useStyles();
   const [user, setUser] = useState([]);
   const [image, setImage] = useState();
   const [token, setToken] = useState();
   
//    const handleChange=(e)=>{
//       const files = e.target.value;
//     if(files.length > 0) {
//        var file = files[0];
//        var reader = new FileReader();
//        reader.onload = (e) => {
//             setPost([e.target.result]);
//        };
//           reader.readAsDataURL(file);
//    } else {
//        setPost(null);
//     }
//  };

 const handleChange=(e)=>{
    setImage(e.target.files[0].name);
 };
 
 const handleSubmit=(e)=>{
    const form = new FormData();
    form.append('image', image);
    form.append('csrf', token);
   //console.log(form.getAll('csrf')); // ["karabiner", "peter"]

    axios({
       method: "post",
       data: form,
       url: "/user/image/",
       headers: { "Content-Type": "multipart/form-data" },
    }).then(res=>{
       console.log(res.data);
    }).catch(error=>{
       console.log(error);
    });
};

    useEffect(()=>{
        let csrf = document.head.querySelector('meta[name="csrf-token"]').content;
        setToken(csrf);
    },[]);
  //  let url = `/user/image/`;
   

   return (
      <div className={classes.box}>
       <div className={classes.userbox}>
        <img src="https://cdn.pixabay.com/photo/2017/05/09/10/59/mount-fuji-2297961_1280.jpg&w=1000&q=80" style={{width: '100%', marginBottom: '-20px', height: '200px'}}/>
          <Avatar sx={{ width: 65, height: 65, margin: '0 auto', fontSize: 30}} >{name[0]}</Avatar>
          <h3 style={{marginBottom: 0}}>{name}</h3>
          <p style={{color: 'gray'}}>{email}</p>
        <Box
               sx={{
                 width: 400,
                 height: 30,
                 maxWidth: '100%',
                 margin: '0 auto',
               }}
            >
          <hr />
         <div className={classes.result}>
         </div>
         </Box>
           <TableContainer component={Paper} sx={{ marginTop: 10, overFlow:'scroll', height: 500}}>
            <Table sx={{ minWidth: 700 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Quiz Name</TableCell>
                  <TableCell align="right">Number of Quizzes</TableCell>
                  <TableCell align="right">Your number of correct answer</TableCell>
                </TableRow>
              </TableHead>
              {display.map((i)=>{
              return(
              <TableBody>
                  <TableRow
                    key={i.number}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                     {i.number}: {i.name}
                    </TableCell>
                    <TableCell align="right">{i.wholeNumber}</TableCell>
                    <TableCell align="right">{i.solvedNumber}</TableCell>
                  </TableRow>
              </TableBody>
              )
              })}
            </Table>
          </TableContainer>
       </div>
      </div>
      );
};

         // <form id="send" style={{display: 'flex'}} >
         //     　<input className={classes.inputPicture} name="image" onChange={(e)=>handleChange(e)}  placeholder="Set placeholder"  type="file" accept="image/*"/>
         //        <input type="hidden" name="token" value={token} />
         //    </form>
         //     <button onClick={()=>handleSubmit()}>Set up</button>