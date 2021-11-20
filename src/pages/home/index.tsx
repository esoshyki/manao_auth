import Layout from "../../components/Layout";
import bg from './bg.jpg';
import classes from './home.module.sass';

const Home = () => {

  return (
    <Layout pageTitle="Home">
      <div className="page-content" style={{backgroundImage: `url(${bg})`}}>
        <div className={classes.page_container}>
          <h1>HOME</h1>
        </div>
      </div>
    </Layout>
  )
};

export default Home;