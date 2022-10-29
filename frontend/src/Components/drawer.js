import React from 'react'

export default function Sidebar() {
  return (
    <div>
      <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">Filer</span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <div>
                          <input type="radio" name="price"/> &nbsp;Free<br/>
                          <input type="radio" name="price"/> &nbsp;$100<br/>
                          <input type="radio" name="price"/> &nbsp;$30<br/>
                        </div><hr/>
                        <div>
                          <label>Subject</label><br></br>
                          <input type="radio" name="subject"/> &nbsp;Math<br/>
                          <input type="radio" name="subject"/> &nbsp;English<br/>
                          <input type="radio" name="subject"/> &nbsp;Programming
                        </div><hr/>
                        <div>
                          <label>Rating</label><br></br>
                          <input type="radio" name="rating"/> &nbsp;5<br/>
                          <input type="radio" name="rating"/> &nbsp;3<br/>
                          <input type="radio" name="rating"/> &nbsp;1
                        </div><hr/>
                        <div>
                          <label>Duration</label><br></br>
                          <input type="radio" name="duration"/> &nbsp;60<br/>
                          <input type="radio" name="duration"/> &nbsp;30<br/>
                          <input type="radio" name="duration"/> &nbsp;15
                        </div>
                        
                    </li>
                </ul>
                <hr/>
            
            </div>
        </div>
        <div class="col py-3">
            Content area...
        </div>
    </div>
</div>
    </div>
  )
}


  
 
  
  
