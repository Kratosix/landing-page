
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";


import Button from "@mui/material/Button"
import Tooltip from "@mui/material/Tooltip";

import Container from "@mui/material/Container";

import Stack from "@mui/material/Stack"

// Importing the icons.

import { AcUnit } from "@mui/icons-material";
import { Search } from "@mui/icons-material";
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import BusinessIcon from '@mui/icons-material/Business';


const title = [{product:"Marketing"}, {product:"SEO"}, {product:"UI/UX Design"}, {product:"Creative"}, {product:"Optimization"}, {product:"Business Strategy"}]

const solution = title.map(sol=><a key={title.id}>{sol.product}</a>)


export default function Provision(){
    return(
        <>
            <hr style={{marginTop:100}}/>
            <Container style={{maxWidth:"inherit"}}>
                <Card style={{maxWidth:350, maxHeight:500, marginTop:200, marginLeft:0}} variant="elevation" elevation={0}>
                    <CardContent>
                        <Link href="#" underline="none"><Typography variant="p">Our services</Typography></Link>
                        <Typography variant="h4">We make cool products</Typography>
                        <Typography variant="p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint aperiam ad perferendis nemo magnam pariatur. Cumque quasi, odio eum iste officiis maiores ipsa pariatur quis accusantium quo eius excepturi sapiente.</Typography>
                    </CardContent>
                    <CardActions>
                        <Tooltip title="US constitution"><Chip label="Our services" variant="contained" color="secondary"/></Tooltip>
                    </CardActions>
                </Card>
            </Container>


            <Stack style={{maxWidth:"inherit"}} direction="row">
                <Card style={{maxWidth:400, maxHeight:500, marginTop:45, marginLeft:45}}>
                    <CardContent>
                        <a>
                            <AcUnit/>
                        </a>
                        <Typography variant="h5">{solution[0]}</Typography>
                        <Typography variant="p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore praesentium sed recusandae ea, ipsam aliquam optio laudantium provident neque sequi illum voluptates, molestiae quas consectetur labore commodi repellat modi at?</Typography>
                    </CardContent>
                    <CardActions>
                        <a>
                            <Button variant="outlined" color="warning">Learn more </Button>
                        </a>
                    </CardActions>
                </Card>
                <Card style={{maxWidth:400, maxHeight:500, marginTop:45, marginLeft:45}}>
                    <CardContent>
                        <a>
                            <Search/>
                        </a>
                        <Typography variant="h5">{solution[1]}</Typography>
                        <Typography variant="p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore praesentium sed recusandae ea, ipsam aliquam optio laudantium provident neque sequi illum voluptates, molestiae quas consectetur labore commodi repellat modi at?</Typography>
                    </CardContent>
                    <CardActions>
                        <a>
                            <Button variant="outlined" color="warning">Learn more </Button>
                        </a>
                    </CardActions>
                </Card>
                <Card style={{maxWidth:400, maxHeight:500, marginTop:45, marginLeft:45}}>
                    <CardContent>
                        <a>
                            <DesignServicesIcon/>
                        </a>
                        <Typography variant="h5">{solution[2]}</Typography>
                        <Typography variant="p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore praesentium sed recusandae ea, ipsam aliquam optio laudantium provident neque sequi illum voluptates, molestiae quas consectetur labore commodi repellat modi at?</Typography>
                    </CardContent>
                    <CardActions>
                        <a>
                            <Button variant="outlined" color="warning">Learn more </Button>
                        </a>
                    </CardActions>
                </Card>
            </Stack>
            <Stack direction="row">
                <Card style={{maxWidth:400, maxHeight:500, marginTop:45, marginLeft:45}}>
                    <CardContent>
                        <a>
                            <TipsAndUpdatesIcon/>
                        </a>
                        <Typography variant="h5">{solution[3]}</Typography>
                        <Typography variant="p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore praesentium sed recusandae ea, ipsam aliquam optio laudantium provident neque sequi illum voluptates, molestiae quas consectetur labore commodi repellat modi at?</Typography>
                    </CardContent>
                    <CardActions>
                        <a>
                            <Button variant="outlined" color="warning">Learn more </Button>
                        </a>
                    </CardActions>
                </Card>
                <Card style={{maxWidth:400, maxHeight:500, marginTop:45, marginLeft:45}}>
                    <CardContent>
                        <a>
                            <AutoGraphIcon/>
                        </a>
                        <Typography variant="h5">{solution[4]}</Typography>
                        <Typography variant="p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore praesentium sed recusandae ea, ipsam aliquam optio laudantium provident neque sequi illum voluptates, molestiae quas consectetur labore commodi repellat modi at?</Typography>
                    </CardContent>
                    <CardActions>
                        <a>
                            <Button variant="outlined" color="warning">Learn more </Button>
                        </a>
                    </CardActions>
                </Card>
                <Card style={{maxWidth:400, maxHeight:500, marginTop:45, marginLeft:45}}>
                    <CardContent>
                        <a>
                            <BusinessIcon/>
                        </a>
                        <Typography variant="h5">{solution[5]}</Typography>
                        <Typography variant="p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore praesentium sed recusandae ea, ipsam aliquam optio laudantium provident neque sequi illum voluptates, molestiae quas consectetur labore commodi repellat modi at?</Typography>
                    </CardContent>
                    <CardActions>
                        <a>
                            <Button variant="outlined" color="warning">Learn more </Button>
                        </a>
                    </CardActions>
                </Card>
                <Card style={{maxWidth:400, maxHeight:500, marginTop:45, marginLeft:45}}>
                </Card>
            </Stack>
        </>
    )
}