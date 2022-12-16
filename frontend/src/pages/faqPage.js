import React, {useState, useEffect} from 'react'
import axios from 'axios';
import "../Components/css/adminsReportsPage.css"
import Navbar from '../Components/General/Navbar/navbar';
import ReportsCard2 from '../Components/Cards/reportsCard2';

export default function FaqPage() {

    const [unseenIssues,setUnseenIssues] = useState([]);
    const [pendingIssues,setPendingIssues] = useState([]);
    const [resolvedIssues,setResolvedIssues] = useState([]);

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

    console.log(unseenIssues)



  return (
    <div>
        <Navbar/>
        <h1>&nbsp;&nbsp;FAQ</h1>

        {unseenIssues && unseenIssues.map((issue) => (
            <ReportsCard2 issue={issue}/>
        ))} 

        
        
        {pendingIssues && pendingIssues.map((issue) => (
            <ReportsCard2 issue={issue}/>
        ))} 

        
        
        {resolvedIssues && resolvedIssues.map((issue) => (
            <ReportsCard2 issue={issue}/>
        ))}
        


    </div>
  )
}
