import { Navigate, useNavigate } from "react-router-dom";

function AccessFalseComponent() {
    let navigate = useNavigate();
  return (
    <div>
     You don't have authority, please click button to go back homepage
     <button onClick={()=>{
        navigate('/homepage');
     }}>Homepage</button>
    </div>
  );
}

export default AccessFalseComponent;
