import "./navbar.css"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import  MultipleSelectPlaceholder from "./multipleSelector"
function Navbar(){
  return(
    <>
    <div className="box">
      <div>
      <img
                style={{ width: "110px" }}
                src="https://st1.dineout-cdn.co.in/images/uploads/misc/2019/Jul/25/website-logo.png"
                alt="logo"
              />
      </div>
<div>
<MultipleSelectPlaceholder/>
</div>
<div>
<input class="search" placeholder="Search for Restaurants, Cuisines ,Location..." type="text"/>
<Button sx={{backgroundColor:" rgb(252, 97, 97)",width:"100px",textTransform:"lowercase",fontWeight:"700"}}  variant="contained" size="small" color="error">
Search
</Button>
</div>
<div>

<Button sx={{backgroundColor:" rgb(252, 97, 97)",width:"100px",textTransform:"lowercase",fontWeight:"700"}} variant="contained" size="small" color="error">
Login
</Button>
</div>
    </div>
      <div className="links">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/book">Book a table</Link>
      </div>
      <div>
        <Link to="/pay">Dineout Pay</Link>
      </div>
      <div>
        <Link to="/pass">Dineout Passport</Link>
      </div>
      <div>
        <Link to="/success">Booking Details</Link>
      </div>
    </div>
    </>
  )
}

export default Navbar;