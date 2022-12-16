import React, {useState, useEffect} from 'react'
import axios from 'axios';
import ReposrtsCard from '../Components/Cards/reportsCard';
import "../Components/css/adminsReportsPage.css"

export default function AdminReportsPage() {

    const [unseenIssues,setUnseenIssues] = useState([]);
    const [pendingIssues,setPendingIssues] = useState([]);
    const [resolvedIssues,setResolvedIssues] = useState([]);
    
    const [unseenBool, setUnseenBool] = useState(false);
    const [pendingBool, setPendingBool] = useState(false);
    const [resolvedBool ,setResolvedBool] = useState(false);

    const getunseenissues = async () => {
        const res = await axios.get("http://localhost:3000/admin/unseenIssues")
        .catch((err) => console.log(err));
        const data = await res.data;
        
        return data;
        
      };

      useEffect(() =>{
        getunseenissues().then((data) => setUnseenIssues(data.issues))
      },[])



      const getpendingissues = async () => {
        const res = await axios.get("http://localhost:3000/admin/pendingIssues")
        .catch((err) => console.log(err));
        const data = await res.data;
        
        return data;
        
      };

      useEffect(() =>{
        getpendingissues().then((data) => setPendingIssues(data.issues))
      },[])


      const getresolvedissues = async () => {
        const res = await axios.get("http://localhost:3000/admin/resolvedIssues")
        .catch((err) => console.log(err));
        const data = await res.data;
        
        return data;
        
      };

      useEffect(() =>{
        getresolvedissues().then((data) => setResolvedIssues(data.issues))
      },[])



      

      const handleunseen=(e)=>{
        e.preventDefault()

        setUnseenBool(true)
        setPendingBool(false)
        setResolvedBool(false)
     
    }

    const handlePending=(e)=>{
        e.preventDefault()

        setPendingBool(true)
        setUnseenBool(false)
        setResolvedBool(false)
     
    }

    const handleResolved=(e)=>{
        e.preventDefault()

        setResolvedBool(true)
        setPendingBool(false)
        setUnseenBool(false)
     
    }

    console.log(unseenBool)
    console.log(unseenIssues)



  return (
    <div>
        <ul className="view-issues-button-list">
            <li><button onClick={handleunseen}> View Unseen Issues </button></li>
            <li><button onClick={handlePending}> View Pending Issues </button></li>
            <li><button onClick={handleResolved}> View Resolved Issues </button></li>
        </ul>
        
        
        {unseenBool && unseenIssues && unseenIssues.map((issue) => (
            <ReposrtsCard issue={issue}/>
        ))} 

        
        
        {pendingBool && pendingIssues && pendingIssues.map((issue) => (
            <ReposrtsCard issue={issue}/>
        ))} 

        
        
        {resolvedBool && resolvedIssues && resolvedIssues.map((issue) => (
            <p>{issue.issue}</p>,
            <ReposrtsCard issue={issue}/>
        ))}
        


    </div>
  )
}
