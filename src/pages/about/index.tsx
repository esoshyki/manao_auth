import Layout from "../../components/Layout";
import bg from './bg.jpg';
import classes from './about.module.sass';

const Admin = () => {

  return (
    <Layout pageTitle="About">
      <div className="page-content" style={{backgroundImage: `url(${bg})`}}>
        <div className={classes.page_container}>
          <h1>About</h1>
        </div>
      </div>
    </Layout>
  )
};

export default Admin;