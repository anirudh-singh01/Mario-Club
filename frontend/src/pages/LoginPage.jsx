import { Link } from 'react-router-dom'
import '../pages/Home.css'
import img from '../utils/images'

function LoginPage() {

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
      <main>
        
      </main>
      
      <section className='join' id='join'>
        <h2>
          Join today!
        </h2>
        <p>
          A power up your fandom and become part of the Mario Club. Get updates, share
    your thoughts, and connect with fans who love Mario as much as you do.
        </p>
        <form>
          <input type="email" name='email' placeholder='Type email & hit enter' required/>
        </form>
      </section>
      <footer>
        <p className='copyright'>
          © {new Date().getFullYear()} Mario Club. Fan-made project. Not affiliated with Nintendo.
        </p>
      </footer>
    </div>
  )
}

export default LoginPage
