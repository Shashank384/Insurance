import React, {useState, useEffect} from 'react';
import axios from "axios";

function LandingPage() {

    const [inputData, setInputData] = useState("")
    const [policyData, setPolicyData] = useState({});
    useEffect(() => {

    }, [policyData])

    const searchHandler =  (e) => {
        e.preventDefault();
        if(inputData !== ""){
            axios.get(`https://jsonplaceholder.typicode.com/posts/${inputData}`)
            .then((res) => setPolicyData(res.data))
            .catch((err) => console.log(err))
        }   
    }

    console.log(policyData)

    return (
        <div>
        <h1 style={{display:"flex", justifyContent:"center", margin:"25px"}}>Insurance</h1>
        <form>
            <div className="form-row">
            <label htmlFor="custId" style={{marginTop: "5px"}}>Cust Id / Policy Id : </label>
                <div className="form-group col-md-6">
                    <input type="text" 
                        className="form-control"
                        value={inputData} 
                        onChange={(e)=> setInputData(e.target.value)}
                        id="custId" 
                        aria-describedby="custId" 
                        placeholder="Enter Cust Id / Policy Id"/>
                </div> 
            <div>
                <button 
                    type="submit"
                    className="btn btn-primary"
                    onClick={searchHandler}
                    >Search
                </button>
            </div> 
            </div>
        </form>
  
        <table className="table table-responsive-md">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Cust Id</th>
              <th scope="col">Policy Id</th>
              <th scope="col">Date of Purchase</th>
              <th scope="col">Premium </th>
              <th scope="col">Fuel</th>
              <th scope="col">Vehicle Segment</th>
              <th scope="col">Customer Gender </th>
              <th scope="col">Customer Income Group </th>
              <th scope="col">Customer region </th>
              <th scope="col">Actions </th>
            </tr>
          </thead>
          <tbody>
          {
                <tr>
                    <th scope="row">{policyData.id}</th>
                    <td>{policyData.title}</td>
                    <td>{policyData.body}</td>
                    <td>24/01/2020</td>
                    <td>250000</td>
                    <td>PETROL</td>
                    <td>SEDAN</td>
                    <td>Male</td>
                    <td> 500$ - 600$</td>
                    <td>North</td>
                    <td><button type="button" className="btn btn-secondary">Edit</button></td>
              </tr>   
          }           
          </tbody>
        </table>
        </div>
    )
}

export default LandingPage
