import { Link } from 'react-router-dom'
import '../pages/LoginPage.css'
import img from '../utils/images'

function LoginPage() {
  
    function search(formData) {
      const email = formData.get('email')
      const password = formData.get('password')
      console.log(email, password)
  }

  return (
    <div>
      <header>
      <h1>
        <Link to="/">MarioClub</Link>
      </h1>
      </header>
      <section className='banner'>
        <img src={img.banner} alt="mario club welcome banner" />
        <div className='welcome'>
          <h2>
            Welcome to <br /><span>Marioclub</span>
          </h2>
        </div>
      </section>
      <nav className='main-nav'>
        <ul>
          <li><a href="#join" className='join'>Join the club</a></li>
          <li><Link to="/news">Latest news</Link></li>
          <li><Link to="/games">Games</Link></li>
          <li><Link to="/community">Community</Link></li>
        </ul>
      </nav>
      <div className='login-container'>
        <form id='login-form' action={search} method='post'>
          <div>
            <h2>Sign in with password</h2>
            <div>
              <label htmlFor="email">E-mail address/Sign-in ID</label>
              <input type="text" placeholder='Enter your email address' required autoCapitalize='off' autoComplete='off' autoCorrect='off'/>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" placeholder='Enter your password' required autoCapitalize='off' autoComplete='off' autoCorrect='off'/>
            </div>
          </div>
          <div className='buttons'>
            <button type='submit'>Sign in</button>
            <button type='submit'>Sign up</button>
          </div>
        </form>
      </div>
      
      <footer>
        <p className='copyright'>
          © {new Date().getFullYear()} Mario Club. Fan-made project. Not affiliated with Nintendo.
        </p>
      </footer>
    </div>
  )
}

export default LoginPage
