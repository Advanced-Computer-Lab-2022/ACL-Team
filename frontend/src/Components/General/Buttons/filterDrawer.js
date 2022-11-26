import React from 'react'
import "../../css/filterDrawer.css"
export default function FilterDrawer () {
  return (
    <div className='boda'>
      <div>
      <div className="radio">
      <div className="radio-checkbox">
      <div className="gray" />
      <div className="white" />
    </div>
      <p className="text-1">Filter Courses</p>
    </div>
          <div className="radiogroup">
      <div className="label-container">
        <p className="text-1">Subject</p>
        <p className="text-2">*</p>
      </div>
      <div className="radio">
        <div className="radio-checkbox">
          <div className="gray" />
          <div className="white" />
        </div>
        <p className="text-3">One</p>
      </div>
      <div className="radio">
        <div className="radio-checkbox">
          <div className="blue" />
          <div className="white" />
        </div>
        <p className="text-5">Two</p>
      </div>
      <div className="radio">
        <div className="radio-checkbox">
          <div className="blue" />
          <div className="white" />
        </div>
        <p className="text-5">Three</p>
      </div>
    </div>
    <div className="radiogroup">
      <div className="label-container">
        <p className="text-1">Skill</p>
        <p className="text-2">*</p>
      </div>
      <div className="radio">
        <div className="radio-checkbox">
          <div className="gray" />
          <div className="white" />
        </div>
        <p className="text-3">One</p>
      </div>
      <div className="radio">
        <div className="radio-checkbox">
          <div className="blue" />
          <div className="white" />
        </div>
        <p className="text-5">Two</p>
      </div>
      <div className="radio">
        <div className="radio-checkbox">
          <div className="blue" />
          <div className="white" />
        </div>
        <p className="text-5">Three</p>
      </div>
    </div>
    <div className="radiogroup">
      <div className="label-container">
        <p className="text-1">Duration</p>
        <p className="text-2">*</p>
      </div>
      <div className="radio">
        <div className="radio-checkbox">
          <div className="gray" />
          <div className="white" />
        </div>
        <p className="text-3">One</p>
      </div>
      <div className="radio">
        <div className="radio-checkbox">
          <div className="blue" />
          <div className="white" />
        </div>
        <p className="text-5">Two</p>
      </div>
      <div className="radio">
        <div className="radio-checkbox">
          <div className="blue" />
          <div className="white" />
        </div>
        <p className="text-5">Three</p>
      </div>
    </div>

      </div>

    </div>
   
  )
}
