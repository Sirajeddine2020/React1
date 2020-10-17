import React from "react";
import './Form.css';
function Form() {

  return (<>


<h3>Signup</h3>
<form className="form_inline" action="/action_page.php">


<label for="username" className ="control_label col_sm_3" prepend="true" text="@" >Username</label>
    <input type="name" className="form_control" id="name"  placeholder="Enter username"
    text =   "only letters and digits accepted"/>
    
    
  <label for="email">Email:</label>
  <input type="email" id="email" placeholder="Enter email" name="email" text = " We'll never share your email with anyone else."></input> 
    <label for="pwd">Password:</label>
  <input type="password" id="pwd" placeholder="Enter password" name="pswd" text=" Password is case sensitive. Your password must be 8_20 characters long, contain letters and numbers, and
    must not contain spaces, special characters, or emoji."/>
   
  <button type="submit" className="btn btn_default">Register</button>
</form>
<br></br>

<h3>Fill in</h3>
<form className="form_group">

<label for="name">First name</label>
<br></br>
<input type="name" className="form_control" id="fname" placeholder="Enter name"/>
<br></br>
<label for="second">Second name</label>
<br></br>
<input type="second" className="form_control" id="sname" placeholder="Enter surname"/>
<br></br>
<label>Phone Number </label>
<br></br>
<input type="number"/>
<label>Birth date </label>
<input type="date"/>
<br></br>
<label for="address">full address</label>
<input type="address" className="form_control" id="adress" placeholder="Enter your complete address"/>
<br></br>
          <label>City</label>
          <input type="text" placeholder="City" required />
          <feedback type="invalid">
            Please provide a valid city.
          </feedback>
          <br></br>
          <label>State</label>
          <input type="text" placeholder="State" required />
          <feedback type="invalid">
            Please provide a valid state.
          </feedback>
          <br></br>
          <label>Zip</label>
          <input type="text" placeholder="Zip" required />
          <feedback type="invalid">
            Please provide a valid zip.
          </feedback>
          <br></br>
<select>
  <option>Tunis</option>
  <option>Ben Arous</option>
  <option>Ariana</option>
  <option>Manouba</option>
  <option>Nabeul</option>
  <option>Bizerte</option>
  <option>Sousse</option>
  <option>Monastir</option>
  <option>Mahdia</option>
  <option>Sfax</option>
  <option>Gabes</option>
  <option>Mednine</option>
  <option>Tataouine</option>
  <option>Kebili</option>
  <option>Touzeur</option>
  <option>Gafsa</option>
  <option>Sidi Bouzid</option>
  <option>Kasserine</option>
  <option>Kairouan</option>
  <option>Siliana</option>
  <option>Zaghouan</option>
  <option>Beja</option>
  <option>Jendouba</option>
  <option>Kef</option>
</select>
<textarea>additional information</textarea>

<label>Confirm : I confirm that I am over legal age and that all the data submitted is correct </label>
<input type="radio"/>
<br></br>
<label>I am satistied with your services and I agree on your terms and conditions</label>
<input type="checkbox"/>
<br></br>
<button type="submit" className="btn btn_default">Submit</button>
<input type="reset" text="Reset"/>
</form>
<br></br>

<h3>Login</h3>
<form className="form_horizontal" action="/action_page.php">

  <div className="form_group2">
    <label className="control_label col_sm_2" for="email">Email:</label>
    <div className="col_sm_10">
      <input type="email" className="form_control" id="email" placeholder="Enter email"/>
    </div>
  </div>
  <div className="form_group2">
    <label className="control_label col_sm_2" for="pwd">Password:</label>
    <div className="col_sm_10"> 
      <input type="password" className="form_control" id="pwd" placeholder="Enter password"/>
    </div>
  </div>
  <div className="form_group2"> 
    <div className="col_sm_offset_2 col_sm_10">
      <div className="checkbox">
        <label><input type="checkbox"/> Remember me</label>
      </div>
    </div>
  </div>
  <div className="form_group2"> 
    <div className="col_sm_offset_2 col_sm_10">
      <button type="submit" className="btn btn_default">Login</button>
    </div>
  </div>
  
</form>


</>
 );

}

export default Form;