/*Card displaying all the internal details of course like no.of people attended the course , fees collected ,cost incurred */

const AttendanceCard = (props) => {
    return (
      <body>
      <div className="row m-0 p-1 justify-content-center overflow-auto ">
        <div className="col-lg-10 col-md-10 col-12 p-2 rounded pb-3">
          <div className="d-flex flex-column p-3 rounded border shadow-sm">
            <h4 className="text-center">Course Records</h4>
            
            {props.ListOfCourses ? (
              < >
                <div className="row align-items-center">
                  {props.ListOfCourses.map((item, id) => {
                    return (
                      <div className="card w-100 mt-5 ml-5 mr-5 text-center">
                        <div className="card-title fw-bold fs-6">
                          Record #{id + 1}
                        </div>
                        <div className="card-body">
                          <div className="row m-0">
                            <h6 className="col-6 col-md-3 col-lg-2">Name</h6>
                            <span className="col">{item.name}</span>
                          </div>
                          <div className="row m-0">
                            <h6 className="col-6 col-md-3 col-lg-2">Cost Incurred</h6>
                            <span className="col">{item.department}</span>
                          </div>
                          <div className="row m-0">
                            <h6 className="col-6 col-md-3 col-lg-2"> No. of Participants</h6>
                            <span className="col">{item.participants}</span>
                          </div>
                          <div className="row m-0">
                            <h6 className="col-6 col-md-3 col-lg-2">Date of Commence</h6>
                            <span className="col">{item.commence}</span>
                          </div>
                          <div className="row m-0">
                            <h6 className="col-6 col-md-3 col-lg-2">Date of Completion</h6>
                            <span className="col">{item.completion}</span>
                          </div>
                          <div className="row m-0">
                            <h6 className="col-6 col-md-3 col-lg-2">Cost Incurred</h6>
                            <span className="col">{item.cost}</span>
                          </div>
                          <div className="row m-0">
                            <h6 className="col-6 col-md-3 col-lg-2">Fees Collected</h6>
                            <span className="col">{item.fees}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
      </body>
    );
  };
  
  export default AttendanceCard;
  