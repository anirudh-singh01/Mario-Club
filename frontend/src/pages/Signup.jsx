import '../pages/Signup.css'

function Signup() {
  return (
    <main className="signup-page">
      <form className="signup-card">
        <h2>Create Your Account</h2>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="you@example.com" required />
        </div>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input id="username" type="text" placeholder="Your username" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" required />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input id="confirmPassword" type="password" required />
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input id="dob" type="date" required />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="gender" value="male" /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" /> Female
            </label>
            <label>
              <input type="radio" name="gender" value="other" /> Other
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select id="country">
            <option value="">Select country</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="timezone">Timezone</label>
          <select id="timezone">
            <option value="">Select timezone</option>
            <option value="ist">IST</option>
            <option value="est">EST</option>
            <option value="gmt">GMT</option>
          </select>
        </div>

        <button type="submit" className="signup-btn">
          Sign Up
        </button>
      </form>
    </main>
  );
}

export default Signup;
