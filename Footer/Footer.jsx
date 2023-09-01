import './Footer.scss';
import logo from './iiitbh_logo.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import HomeIcon from '@mui/icons-material/Home';


/*const useStyles=makeStyles({
    links:{
        fontSize: 12,
    },
});*/
function Footer()
{
    return(
        <div className="footer">
            <div className="wrapper">
                <div className="logo">
                    <img className="logo" src={logo} alt ="logo.png"/>
                </div>
                <div className="text">
                    <p className="head">Indian Institute of Information Technonlogy , Bhagalpur</p>
                    <div className="link-div"> 
                        <p  className="links" ><a href="https://www.linkedin.com/company/technical-iiitbh/"><LinkedInIcon  sx={{color:"#fff"}}/> </a></p>
                        <p className="links"><a  href="https://www.instagram.com/technical_iiitbh/"><InstagramIcon sx={{color:"#fff"}} /> </a></p>
                        <p className="links"> <a href="mailto: gs.technical@iiitbh.ac.in"><EmailIcon sx={{color:"#fff"}}  /></a></p>
                        <p className="links"> <a href="#"><HomeIcon sx={{color:"#fff"}}/></a> </p>
                    </div>
                    <p className="about">It is one of the IIITs set by MHRD , Govt of India in PUBLIC-PRIVATE-PARTNERSHIP(PPP) mode.</p>
                    <p className="about">It started functioning from the year 2017</p>
                    <p className="copyright">All rights reserved by Technical Board , Indian Institute of Information Technonlogy , Bhagalpur , 2023</p>
                </div>
            </div>
        </div>
    );
    }
    
export default Footer;