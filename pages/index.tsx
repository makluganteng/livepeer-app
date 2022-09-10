import type { NextPage } from 'next'


const styles = {
  container: "text-7xl"
}



const Home: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        hello
        <button>
          <a href="#">Create Stream</a>
        </button>
      </div>
    </>
  )
}

export default Home
