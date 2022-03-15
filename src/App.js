
import React from 'react'
import './App.css';

function App() {
  const [resumedata, setResumeData] = React.useState([]);
  React.useEffect(()=>{setResumeData([
    {
    
      "name": "Setty Venkata Siva Naga Sai Prasanna",
      "edu": "MCA graduate",
      "hno": "178A1F0016",
    "skills": ["Java ", "Python", "Sql", "Html", "Css", "JavaScript"],
    "languages": ["English", "Telugu","Hindi"],
    "hobbies": ["Cooking","Listening Music","Gardening","Playing Carroms"],
    "achievements": ["Participated in workshop on phython for 3days conductted by NIT Nagaland","Participated Seminars"],
   
  "education": [
  {
    "qul": "Master of computer Applications",
    "clgname": "RISE Krishna Sai Prakasam Group of Institutions, Ongole",
    "yop": "2020"
  
  },
  {
    "qul": "B.Sc",
    "clgname": "S.R.K Degree college, Ongole",
    "yop": "2017"
  },
  {
    "qul":"Intermediate",
    "clgname": "Venus Junior college, Ongole",
    "yop": "2013"
  },
  {
    "qul": "S.S.C",
    "clgname": "D.R.R.M.M.High School, Ongole",
    "yop": "2011"
  
  },
  ],
 
   
}
  ]
  )},[])
  return (
    <div className="App">
      {resumedata.map((item)=>{return(<div>
     <section className="main">
  <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Prasu images" />


   <h3>{item.hno}</h3>
   <h3>{item.edu}</h3>
   <h1>Languages Known:</h1>
   <ul type="square">
     {item.languages.map((lang)=>{return(<li>{lang}</li>)})}

  </ul>
  <h2>Hobbies:</h2>
<ul type="square">

{item.hobbies.map((hob)=>{return(<li>{hob}</li>)})}
  
</ul>
</section>
   
<section className="main">
  <article className="content">
    <section>
      <h2>Carrer Objective:</h2>
      <p>To work in a simulating environment where I can apply and enchance my knowledge and skill to serve the firm to the best of my efforts.</p>
    </section>
    <hr/>
    <h2>Education:</h2>
  
    <table border="1">
    <tr>
        
        <th>Qualifications</th>
        <th>Name Of the Institutions</th>
        <th>Year of Passing</th>
        
      </tr>
     
      {item.education.map((edu)=>{
        return(
          <tr>
          <td>{edu.qul}</td>
          <td>{edu.clgname}</td>
          <td><center>{edu.yop}</center></td>      
        </tr>  
      )})}
      
     
      
    </table>
<section>
  <h2>Technical skills:</h2>
  <ul type="square">
  {item.skills.map((skill)=>{return(<li>{skill}</li>)})}
  </ul>
</section>
<section>
  <h2>Achievements:</h2>
  <ul type="square">
  {item.achievements.map((arc)=>{return(<li>{arc}</li>)})}
    </ul>
  
</section>

</article>

<footer>
    <a href="https://www.linkedin.com/in/setty-venkata-siva-naga-sai-prasanna-043bab187">linkedin</a>
</footer>
</section>
</div>)
 })}
    </div>
  );
}

export default App;
