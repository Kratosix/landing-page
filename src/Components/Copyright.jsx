import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack"

export default function Copyright(){
    return(
        <>
            <Stack direction="row" style={{marginLeft:650, marginTop:30, color:"grey"}}>
                <Typography>Copyright 2023</Typography>
            </Stack>
        </>
    )
}