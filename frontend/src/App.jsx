import './App.css'
import img from './utils/images'

function App() {

  return (
    <div>
      <header>
      <h1>
        MarioClub
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
          <li><a href="#" className='join'>Join the club</a></li>
          <li><a href="#">Latest news</a></li>
          <li><a href="#">New games</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <main>
        <article>
          <h2>It's a me, Mario</h2>
          <p>
            Welcome to Mario Club — a fan-made space for everyone who grew up jumping on
    Goombas, collecting coins, and racing through the Mushroom Kingdom. Share
    your memories, post your thoughts, and connect with fellow Mario fans from
    around the world.
          </p>
        </article>
        <div className='trailer-container'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/TnGl01FkMMo?si=CTpjodIdXgFxyAJT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          <iframe width="560" height="315" src="https://www.youtube.com/embed/FdL2GorGdKc?si=d7YX-KSaoC7ofkOj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <ul className='images'>
          <li><img src={img.thumb1} alt="mario thumb 1" /></li>
          <li><img src={img.thumb2} alt="mario thumb 2" /></li>
        </ul>
      </main>
      <section className='join'>
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

export default App
