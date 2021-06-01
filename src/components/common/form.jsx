import React, {Component} from 'react';






class Form extends Component {
    state = {}
    render() {
    
       
        return (
            
           <div className="wrapper bg-white">
                <div className="h2 text-center">Reservation</div>
                <div className="h2 text-center">form</div>
                <div className="h5 font-weight-bold">Registration</div>
                <div className="text-muted">Enter your registration details</div>
    <form>
        <div className="d-sm-flex align-items-sm-center justify-content-sm-between pt-1">
            <div className="form-group"> <label className="text-muted mandatory">Name</label> <input type="text" required className="form-control"/> </div>
            <div className="form-group"> <label className="text-muted mandatory">Email Address</label> <input type="email" required className="form-control"/> </div>
        </div>
        <div className="d-sm-flex align-items-sm-center justify-content-sm-between pt-1">
          
            </div>
            <div classNameName="form-group"> <label className="text-muted  mandatory"></label> Phone NO <input type="text" className="form-control"/> </div>
     
        <div className="d-sm-flex align-items-sm-center justify-content-sm-between pt-1">
            <div className="form-group"> <label className="text-muted mandatory">Booking Date</label> <input type="tel" required className="form-control"/> </div>
            <div className="form-group"> <label className="text-muted mandatory">Time (Hours)</label> <input type="text" className="form-control"/> </div>
        </div>
        <div className="form-group"> <label className="text-muted mandatory">No of guests</label> <input  required className="form-control"/> </div>
        <div className="d-flex align-items-center justify-content-center button-section mt-4"> <button className="btn btn-primary mx-4" type="submit">Submit</button> <button  className="btn  " type="reset">Cancel</button> </div>
    </form>
</div>



       
           
        );
    }
}

export default Form;