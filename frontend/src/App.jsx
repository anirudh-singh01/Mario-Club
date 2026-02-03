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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit commodi sunt fugit optio asperiores quae dignissimos quas deleniti quam. Laudantium vel debitis maiores doloribus commodi explicabo esse minima laborum ad.
          </p>
        </article>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, libero? Aut labore veritatis, at rem beatae quae quaerat cupiditate cum soluta, maiores omnis dignissimos obcaecati perferendis voluptatem sunt minus velit?
        </p>
        <form>
          <input type="email" name='email' placeholder='Type email & hit enter' required/>
        </form>
      </section>
      <footer>
        <p className='copyright'>
          Copyright 2019 Marioclub
        </p>
      </footer>
    </div>
  )
}

export default App
