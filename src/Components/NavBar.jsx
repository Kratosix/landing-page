import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link"
import { useEffect, useState } from "react";
import './Holder.css'

const products = [{title:'Home'}, {title:'About us'}, {title:'Services'}, {title:'Pricing'}, {title:'Work'}, {title:'Blog'}, {title:'Contact us'}]

const listItems = products.map(product=><a key={products.id} style={{color:"black", marginLeft:20, marginRight:20}}>{product.title}</a>)

export default function Navbar(){
    const [scrolled, setScrolled] = useState(false)

    useEffect(()=>{
        const handle = ()=>{
            if (window.scrollY>200){
                setScrolled(true)
                console.log("Hello")
            }
            else{
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handle)

        return ()=>{
            window.removeEventListener('scroll', handle)
        }
    }, [])

    return(
        <AppBar position="relative" style={{backgroundColor:"inherit"}} variant="elevation" elevation={0} className="Mainly">
            <Toolbar>
                <Button variant="text" color="secondary" style={{marginTop:20, marginLeft:10, color:"cyan"}}>Unbrew.</Button>
                <Stack className={scrolled?"scrolled":"none"} direction="row" flexDirection="row" style={{marginLeft:"auto", marginTop:20}} sx={{ml:3}}>
                    <Link underline="none" href="#">{listItems}</Link>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}