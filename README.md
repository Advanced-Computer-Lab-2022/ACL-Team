# ACL-Team

# Project description:

A user friendly website that serves as an online learning system where instructors can upload their lectures and post quizzes on the system that students are automatically graded for. This website supports two types of users individual user and coroporate users where they can track all the progress they had done in the course as well as recieve course certificate upon completion. This project was done using agile methodology on 3 sprints where each sprint spans a month.

# Motivation:

Our vision was to create user-friendly E-learning website using MERN stack. Its also aimed at creating a website for the canadian Chamber of commerce.
They wanted to build their own streaming courses website insted of using a previously established websiet such as UDEMY. 

# Build status

1.The project is currently under development.  
2.Design for error should be imporoved.  
3.Need to implemetn unit testing .  
4.The website is still not deployed. 

# Code Style
-Standard Code style that is easy for anyone to understand .

# Technologies:

*Node Js *React *Express *Mongo DB *REST API *Bootstrap *Axios *bcrypt 

# Features .
1.Search and filter with high accuracy.  
2.Sending emails automatically for trainees and instructors.  
3. currency exchange according rto country selected.  
4. Paying with credit card or visa. 
5.Refunding money to wallet for further use .  
6. Reporting issues and following up on their status.  

# Code Example. 
1-sign up

```
export const SignupUser = () => {
        const[email,setEmail] =useState('')
        const[username,setUsername] =useState('')
        const[password,setPass] =useState('')
        const[firstname,setFirstname] =useState('')
        const[lastname,setLastname] =useState('')
        const[gender,setGender] =useState('')
        const[corprate,setIsCorprate] =useState('')

    const handleUserSignup = async () => {
      console.log("boodaa")
      const res = await axios
        .post("http://localhost:3000/signup", {
          email:email,username:username,password:password,firstname:firstname,lastname:lastname,gender:gender,corprate:corprate
        })
        .catch((err) => console.log(err));
      const data = await res.data;
      return data;
      };
      const handleSubmit =(e)=>{
        e.preventDefault()
        console.log("boodaa")

        handleUserSignup().then((data) => console.log(data))
      }. 
 ```
 2-Instructor add course.  
 ```  
 export default function InstructorAddCourseComponent({instructorID}) {
 const[name,setName] =useState('')
const[title,setTitle] =useState('')
const[price,setPrice] =useState('')
const[coursePreviewUrl,SetVideo] =useState('')
const[summary,setSummary] =useState('')
 const[category,setCategory] =useState('')
 const[instructor_id,setinstructor_id] =useState('')

const instructorAddCourse = async () => {
  // console.log("boodaa")
  const res = await axios
    .post("http://localhost:3000/instructor/addCourse", {
      title:title,price:price,category:category,instructor_id:instructorID,summary:summary,coursePreviewUrl:coursePreviewUrl,
    })
    .catch((err) => console.log(err));
    const data = await res.data;
  return data;
};
const handleSubmitt=(e)=>{
  e.preventDefault()
  console.log("yarab")


  

  instructorAddCourse().then((data) => console.log(data))
  console.log("hiiii")

}

  return (
    <div>
      
      <div className="instructor-addCourse">
        <div className="instructor-icon1">
          <img src={img1} alt="icon"/>
        </div>
        <div className="instructor-title">
          <h1>Create Course </h1>
        </div>

        <form onSubmit={handleSubmitt}>

         <div className="instructor_name">
          <input 
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="textbox" placeholder='Course Instructor Name'/>
        </div> 
        <div className="instructor_LastName">
          <input 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          type="textbox" placeholder='Course Title'/>
        </div>
        <div className="line1">
          <hr></hr>
        </div>
        <div className="instructor_price">
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price} 
          type="textbox" placeholder='Price'/>
        </div>
        <div className="instructor_URL">
          <input
            onChange={(e) => SetVideo(e.target.value)}
            value={coursePreviewUrl}
           type="textbox" placeholder='Course Preview Video Url'/>
        </div>
         <div className="instructor_category">
          <input
            onChange={(e) => setCategory(e.target.value)}
            value={category} 
          type="textbox" placeholder='category'/>
        </div> 

        
        <div className="line2">
          <hr></hr>
        </div>

        <div className="line3">
          <hr></hr>
        </div>
        <div className="instructor_Summary">
          <input 
            onChange={(e) => setSummary(e.target.value)}
            value={summary}
          type="textbox" placeholder='Course Summary'/>
        </div>
        <div className="instructor_Button">
          <button className="Navy_Button" type="submit"> Create Course </button>

        </div>

        </form>
        

      </div>
     
    </div>
  )
}  
```
3-Request Refund (backend)
```
const requestRefund = async (req,res) => {
    const {
        _id,
        course_id
    } = req.body
    
    try{
        if(!_id)
            throw Error('userId not Entered')
        if(!course_id)
            throw Error('courseId not Entered')

        const course = await Course.findOne({
            _id: course_id
        })
        var trainee = await Trainee.findOne({
            _id
        })
        const sectionProgress = await CourseSectionProgress.findOne({
            user_id:_id,
            course_id:course_id
        })
        if (!course)
            throw Error('Course Does not Exist')
        if (!trainee)
            throw Error('Trainee Does not Exist')
        if (!sectionProgress)
            throw Error('Section Progress Does not Exist')    
        const percentage = sectionProgress.finishedPercentage;

        var ownedCourses = trainee.ownedCourses

        for (let i = 0; i < ownedCourses.length; i++) {
                console.log(ownedCourses[i].course_id)
                if(ownedCourses[i].course_id == course_id)
                {
                    ownedCourses.splice(i, 1);
                    
                }
          }
        trainee = await Trainee.findByIdAndUpdate({
            _id
        },{
            ownedCourses
        })

        await CourseSectionProgress.deleteOne({
            user_id:_id,
            course_id:course_id
        })

        if(percentage < 50) 
        {
            res.status(200).json({
                ownedCourses
            })
        }
        else{
            res.status(200).json({
                message: "Sorry you can't refund this course you Exceeded 50% of the materials"
            })
        }



    }catch(error){
        console.log(error)
        res.status(400).json({
            error: error.message
        })
    }
}
```


# Installation 

Locally:

* Clone the link of repository from github.
* Open new terminal.
* Cd backend
* Npm run dev “wait until MongoDB connected and the server is listening”.
* Open new terminal.
* Cd frontend
* Npm start “wait until your browser open automatically”.

# API Reference

Login 
``` 
http://localhost:3000/signin
```
Signup
``` 
http://localhost:3000/Signup/
```

Review Instructor
``` 
localhost:3000/trainee/reviewInstructor. 
```


Admin view Unseen Reports.
``` 
http://localhost:3000/admin/unseenIssues
```

Change Password
``` 
http://localhost:3000/login/forgetPassword
```


Instructor Add Course
``` 
http://localhost:3000/instructor/addCourse
```

Instructor Add Quiz
``` 
http://localhost:3000/instructor/addQuiz
```
resetPassword 
``` 
http://localhost:3000/login/resetPassword/${userID}/${token}
```
denyCourseAccess 
``` 
http://localhost:3000/admin/denyCourse
``` 
grantCourseAccess 
```
http://localhost:3000/admin/grantCourse
``` 
answerQuestion 
```
http://localhost:3000/trainee/answerQuestion
``` 
rateCourse 
```
http://localhost:3000/trainee/rateCourse
``` 
ReviewInstructor 
```
http://localhost:3000/trainee/reviewInstructor
``` 
reportIssue 
```
http://localhost:3000/user/addCourseIssue
``` 
courseSearch 
```
http://localhost:3000/course/search
``` 
changeBio 
```
http://localhost:3000/instructor/changeBiography
``` 
changePassword 
```
http://localhost:3000/login/changePassword
``` 
instructorAddDiscount 
```
http://localhost:3000/instructor/addDiscount
``` 
instructorAddCoursePreview 
```
http://localhost:3000/instructor/setCoursePreview
``` 
getQuizResult 
```
http://localhost:3000/trainee/quizGrade
``` 
payCourse 
```
http://localhost:3000/lib/payCourse
``` 




# ScreenShots

[Project Deliverables.xlsx](https://github.com/Advanced-Computer-Lab-2022/ACL-Team/files/10310567/Project.Deliverables.xlsx)

<img width="1440" alt="User Register" src="https://user-images.githubusercontent.com/96923712/210185428-dfec6a24-7194-48a5-acd9-c6b15b0e6a3a.png">

<img width="1440" alt="Admin Issue Page" src="https://user-images.githubusercontent.com/96923712/210185502-2bd6e324-8a49-4a0b-a04d-3e4b8331d14f.png">

<img width="1440" alt="Instructor HomePage" src="https://user-images.githubusercontent.com/96923712/210185565-a78641c0-3618-4538-bc4f-9f6f4afe4fa5.png">

<img width="1440" alt="FAQ" src="https://user-images.githubusercontent.com/96923712/210185601-af321a1a-ab68-490c-b87e-dc84b0ebe797.png">

<img width="1440" alt="Course Search" src="https://user-images.githubusercontent.com/96923712/210185611-6ca05d5d-840b-4e0a-88bf-a61dd4195a1a.png">


# Tests

1. As a trainee ,Try Buying a course and see if you granted access.

2. As a trainee ,Try refunding a course before 50% course progress.

3. As a trainee ,Try reporting an instructor and reviewing their Course. 

4. As a trainee , Try solving a quizz from the list of your courses, check you grades, and view the model answer. 

5. As a trainee , Try finishing the course and grand a certificate to download and recieve on. your email .  
6. Try Signing in as an instructor.  
7. Try to creat a course as an instructor.
8. Try Creating new section for a course and make them quizzes.  
9. Try viewing course reviews as an instructor.
10. As an admin , try granting access fro coroprate trainee course requests.
11. As an admin, you should be able to view repors and change their staues from unseen , pending , and resolved .
12. As an admin , you should be able to signup for other admns and instructor.  
13. Try changing your password and email .  
14. Forget password and recieve email to change it.  


# How to use ? 

If you want to login as a trainee use these Credentials.  
Email:Youssef@gmail.com.  
Password:1234

If you want to login as a Instructor use these Credentials.  
Email:meza@gmail.com.  
Password:1234

If you want to login as a Admin use these Credentials.  
Email:safrsas@gamal.com.  
Password:1234


# Contributions
Any Contributiona are welcomed to imporove the website.  
1.Clone the repository.  
2.Install dependancies.  
3.Create branch and do your work.  
4.Provide messages for the creaters to view.  
5.commit and push your work.  
6.wait for the creater to view your work and to be merged if master approved upon.

# Credits
The project is created with the contribution of 4 members.

1- https://github.com/MGhazouly

2- https://github.com/Mazen317

3- https://github.com/AbdullahShoeib1

4- https://github.com/marwanashraf56

