
import { Container, Chip, Tooltip } from "@mui/material";
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import imgg from "./assets/imgg.jpeg"


export default function Banner(){

    return(
        <Grid spacing={3} sx={{paddingTop:10, marginTop:15, fontSize:23}} maxWidth={550}>
            <Container maxWidth="large">
                <h3 className="colored">Boost your productivity</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae inventore odit ab voluptatum non.
                     Facilis magnam illo deleniti, officia fugit laudantium minus. Sed corrupti esse vel quos, reiciendis 
                    illum maiores.</p>
                <img src={imgg} alt="kys lol" style={{width:700, position:"absolute", right:0, bottom:180}}/>
                <Link href="#"><Chip label="Start Project" variant="filled" color="secondary"/></Link>
                <Tooltip title="8769867478">
                    <Link href="#"><Chip label="Call us on ..." variant="filled" color="secondary" style={{marginLeft:30}}/></Link>
                </Tooltip>
            </Container>
        </Grid>
    )
}
