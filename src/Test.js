import "./scss/App.scss";
import * as React from "react";
import Box from "@mui/material/Box";
import Diversity3SharpIcon from "@mui/icons-material/Diversity3Sharp";
import AccountBoxSharpIcon from "@mui/icons-material/AccountBoxSharp";
import ContactsSharpIcon from "@mui/icons-material/ContactsSharp";
import { Card, CardTitle, Icon } from "react-materialize";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { textAlign } from "@mui/system";

function Test() {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="App1">
      <div className="container">

        <div className="col s4">
          <Box className="b1">
            <Card
              closeIcon={<Icon>close</Icon>}
              header={
                <CardTitle
                  image={"assets/images/in.jpg"}
                  reveal
                  waves="light"
                />
              }
              title="About me"
              reveal={
                <div>
                  <h4>Huynh Thanh Vu</h4>
                  <p className="main"><b>Major:</b>Software Engineering at FPT HCM Universiry</p>
                  <p><b>Date of birth:</b>23/05/2001</p>
                  <p><b>Address:</b>Binh Duong, VietNam</p>
                  <p><b>Hobby:</b>Acting, everything related to Design</p>
                  <p><b>Slogan:</b>" Life is not always rosy🌹"</p>
                </div>
              }
              revealIcon={<Icon>more_vert</Icon>}
            ></Card>
          </Box>
          <Box className="b2">
            <div className="row1">
              <Diversity3SharpIcon sx={{ fontSize: 80 }}></Diversity3SharpIcon>
            </div>
            <div className="row2">
              <h4>Activities in Social</h4>
            </div>
            <div className="row3">
            <Button onClick={handleOpen} id='animated'><span>Click here</span></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
       
          
          </Typography>
          <Typography> 
            <video src="assets/videos/2.mp4"  id="myVideo" autoPlay></video>
            <div className="content">
  <h3>MY FIRST PROJECT IN COLLEGE </h3>
  <p>MV cover - "Da lau khong gap" Trinh Thang Binh</p>
 

</div>
            </Typography>
         
        </Box>
      </Modal>
            </div>
           
          </Box>
        </div>
        <div className="col s4">
          <Box className="b3">
          <div className="hero-image">
  <div className="hero-text">
    <h1>Introduction</h1>
    <p>Scarty Vu</p>
    <button>Let's start</button>
  </div>
</div>
          </Box>
          <Box className="b4">
            <Card
              closeIcon={<Icon>close</Icon>}
              header={
                <CardTitle
                  image={"assets/images/b8.jpg"}
                  reveal
                  waves="light"
                />
                
              }
              title="Work Goals" 
            
              reveal={
                <div>
                  <h5>Short-term goals:</h5>
                  <p>- Improve my knowledge of REACTJS technologies</p>
                  <p>- Improve teamwork ability</p>
                  <p>- Learn more Frameworks</p>
                  <h5>Long-term goals:</h5>
                  <p>
                    - Have the opportunity to become senior on Front-end after
                    3-5 years working at the company
                  </p>
                  <p>- Learn new technologies and frameworks</p>
                </div>
              }
              revealIcon={<Icon>more_vert</Icon>}
            >
              
            </Card>
          </Box>
        </div>
        <div className="col s4">
          <Box className="b5">
            <Card
              closeIcon={<Icon>close</Icon>}
              header={
                <CardTitle
                  image={"assets/images/b9.jpg"}
                  reveal
                  waves="light"
                />
              }
              title="Contact"
              reveal={
                <div>
                  <p ><b>Phone:</b> 09791718133</p>
                  <p ><b>Github:</b><a href="https://github.com/thanhvu023"> github.com/thanhvu023</a></p>
                  <p ><b>Linkedin:</b><a href="https://www.linkedin.com/in/thanhvu-huynh-351a231b9/"> linkedin.com/in/thanhvu-huynh-351a231b9/</a></p>
                  <p ><b>Email:<br></br></b>     vuhtse151222@fpt.edu.com</p>
                  <p ><b>Personal Email:</b> huynhthanhvu115@gmail.com</p>
                </div>
              }
              revealIcon={<Icon>more_vert</Icon>}
            ></Card>
          </Box>
          <Box className="b6">
            <div className="row1">
              <ContactsSharpIcon sx={{ fontSize: 80 }}></ContactsSharpIcon>
            </div>
            <div className="row2">
              <h4 style={{textAlign:"center"}}>Social Network</h4>
            </div>
            <div className="row3" id="contact">
            <a href="https://www.facebook.com/thanhvu.huynh.39904/" className="fa fa-facebook"></a>
            <a href="https://www.instagram.com/scarty_vv05/" class="fa fa-instagram"></a>
            <a href="#" class="fa fa-skype"></a>
            <a href="https://twitter.com/ThanhVuHuynh9?t=fCtnM-V7ga7s8arzKmRgAg&s=09" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-yahoo"></a>
            <a href="https://www.youtube.com/channel/UCGQdzLhg6rS_ZZY_FGTeeoQ" class="fa fa-youtube"></a>
            </div>
          </Box>
        </div>
      </div>
 
    </div>
  );
}

export default Test;
