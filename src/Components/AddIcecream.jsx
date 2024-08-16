import React from 'react'
import Navbar from './Navbar'

const AddIcecream = () => {
  return (
    <div>
      <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Company name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Place for production</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                           <label htmlFor="" className="form-label">Celebrates for Add</label>
                          <select name="Select" id="" className="form-control">
                            <option value="Select">Select</option>
                            <option value="Kalyani">Kalyani</option>
                            <option value="DQ">DQ</option>
                            <option value="Mohanlal">Mohanlal</option>
                          </select>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">No: of flavours included</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          <label htmlFor="" className="form-label">First launch of the product</label>
                          <input type="date" name="" id="" className="form-control" />
                        </div>
                        
                        
                    </div>                </div>
            </div>
        </div>
    </div>
  )
}

export default AddIcecream