import React from 'react'

export const InstructorAddCourse = () => {
  return (
    <div>
        <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Course Title</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Please enter the course title"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your data without your consent.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Subtitles</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">Price</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="A reasonable price is better"/>
    <small id="emailHelp" class="form-text text-muted">Can always be changed later.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Short summary </label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Minumum 20 words"/>

  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
