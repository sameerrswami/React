import {useState} from "react";
function Skills(){
    const [skills,setSkills] = useState([]);
    const handleChange = (e) => {
        if(event.target.checked){
            setSkills([...skills,event.target.value])
        }else{
            setSkills([...skills.filter((skill) => skill !== event.target.value)])
        }
    }
  return (
    <div>
        <h3>Select yout Skills</h3>
        <input type="checkbox" id="html" name="html" value="HTML" onChange={handleChange}/>
        <label htmlFor="html"> HTML</label><br/>
        <input type="checkbox" id="css" name="css" value="CSS" onChange={handleChange}/>
        <label htmlFor="css"> CSS</label><br/> 
        <input type="checkbox" id="js" name="js" value="JS" onChange={handleChange}/>
        <label htmlFor="js"> JS</label><br/> 
        <div>
            {skills.toString()}
        </div>
    </div>
  );
}
export default Skills;