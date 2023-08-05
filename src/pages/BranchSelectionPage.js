import usnlogo from '../images/navylogo.png';
import usalogo from '../images/armylogo.png';
import usmclogo from '../images/marinelogo.png';
import uscglogo from '../images/coastguardlogo.png';
import usaflogo from '../images/airforcelogo.png';
import { Link } from "react-router-dom";
import "./Branch.css"
import React from "react";
import {Row} from "react-bootstrap"



import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


function BranchPage() {
  const Navystuff = (props) => (
    <Tooltip id="button-tooltip" {...props} className = "Navytip">
        The United States is a maritime nation, and the U.S. Navy protects America at sea. 
        Alongside our allies and partners, we defend freedom, preserve economic prosperity, 
        and keep the seas open and free. Our nation is engaged in long-term competition. 
        To defend American interests around the globe, 
        the U.S. Navy must remain prepared to execute our timeless role, as directed by Congress and the President. 
    </Tooltip>
  );
  const Marinestuff = (props) => (
    <Tooltip id="button-tooltip" {...props} className = "Marinetip">

The United States Marine Corps (USMC) is a highly versatile and elite branch of the U.S. military, providing rapid and effective expeditionary forces for combined arms warfare. As the premier amphibious force, the Marines conduct swift and decisive amphibious assaults, securing strategic beachheads and operating in diverse environments. With a commitment to readiness, adaptability, and toughness, the USMC defends the nation's interests, supports humanitarian missions, and projects military power worldwide for global security and peace.
    </Tooltip>
  );
  const Airforcestuff = (props) => (
    <Tooltip id="button-tooltip" {...props} className = "Airforcetip">

The United States Air Force (USAF) is the aerial and space warfare branch of the U.S. Armed Forces, providing air and space superiority, strategic airlift, intelligence, surveillance, reconnaissance, and global strike capabilities. As the world's largest and most technologically advanced air force, the USAF defends the nation, projects global power, and ensures freedom in air, space, and cyberspace. With a focus on flying, fighting, and winning, the USAF stands ready to respond to threats, support military operations, and safeguard national security for global peace and stability. </Tooltip>
  );
  const Armystuff = (props) => (
    <Tooltip id="button-tooltip" {...props} className = "Armytip">

The United States Army is the land-based branch of the U.S. Armed Forces, defending the nation's security and interests. Its primary purpose is to provide land warfare capabilities and support military operations. As the largest and oldest branch, the Army conducts diverse missions, including combat, peacekeeping, and humanitarian efforts. With readiness and adaptability, the U.S. Army deters aggression, defends the nation and allies, and preserves global peace. Committed to upholding U.S. values, it ensures security in a changing world.
    </Tooltip>
  );
  const Coastiestuff = (props) => (
    <Tooltip id="button-tooltip" {...props} className = "Coasttip">

The United States Coast Guard (USCG) is a unique and multifaceted branch of the U.S. military, focused on maritime safety, security, and environmental stewardship. It protects the nation's coastlines, waterways, and maritime interests, serving as maritime first responders. Conducting search and rescue, enforcing maritime laws, and combating illegal activities, the USCG safeguards the marine environment, supports defense efforts, and ensures safety and security on seas and inland waters. With a commitment to readiness, lifesaving, and protecting economic and environmental interests, the Coast Guard plays a vital role in national defense and public safety.
    </Tooltip>
  );

  const header1 = {
    padding: "30px 0",
    paddingLeft: "0px",
  };

  const h1Style = {
    paddingTop: "50px",
    paddingBottom: "90px",
    paddingLeft: "20px",
    textAlign: "center",
    color: "#ffffff",
    width: "44%",
    height: "70px",
    fontFamily: "Montserrat Subrayada",
    borderRadius: "10px",
  };
  return (
    <div class="BranchPage">
      <div>
        <h1 style={h1Style}>Select a Branch</h1>
      </div>

      <Link path to="/PhasePage">
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 100, hide: 100 }}
          overlay={Navystuff}
        >
          <img src={usnlogo} alt=" n" class="Navy"></img>
        </OverlayTrigger>
      </Link>

      <Link path to="/SorryPage">
        <OverlayTrigger
          placement="left"
          delay={{ show: 100, hide: 100 }}
          overlay={Armystuff}
        >
          <img src={usalogo} alt=" a" class="Army"></img>
        </OverlayTrigger>
      </Link>

      <Link path to="/SorryPage">
        <OverlayTrigger
          placement="left"
          delay={{ show: 100, hide: 100 }}
          overlay={Marinestuff}
        >
          <img src={usmclogo} alt=" mc" class="Marine"></img>
        </OverlayTrigger>
      </Link>

      <Link path to="/SorryPage">
        <OverlayTrigger
          placement="right"
          delay={{ show: 100, hide: 100 }}
          overlay={Coastiestuff}
        >
          <img src={uscglogo} alt=" cg" class="Coast"></img>
        </OverlayTrigger>
      </Link>

      <Link path to="/SorryPage">
        <OverlayTrigger
          placement="right"
          delay={{ show: 100, hide: 100 }}
          overlay={Airforcestuff}
        >
          <img src={usaflogo} alt=" af" class="Airforce"></img>
        </OverlayTrigger>
      </Link>
    </div>
  );
}

// function BranchPage(){

// return (
//   <div class = 'BranchPage'>
//       <h2> Select A Branch! </h2>


  

//       <Link path to ="/PhasePage">
        
//         <img src={usalogo} alt=" a"   class ="Army"></img>
        
//       </Link>

//       <Link path to ="/PhasePage">
//         <img src={usmclogo} alt=" mc" class ="Marine"></img>
//       </Link>

//       <Link path to ="/PhasePage">
//         <img src={usnlogo} alt=" n" class ="Navy"></img>

//       </Link>

//       <Link path to ="/PhasePage">
//         <img src={uscglogo} alt=" cg"  class ="Coast" ></img>
//       </Link>

//       <Link path to ="/PhasePage">
//         <img src={usaflogo} alt=" af"  class ="Airforce"></img>
//       </Link>

//   </div>



  

  

    
//   );

// }
export default BranchPage

