import Layout from "../../components/Layout";
import bg from './bg.jpg';
import classes from './forbidden.module.sass';

const Forbidden = () => {

  return (
    <Layout pageTitle="Forbidden">
      <div className="page-content" style={{backgroundImage: `url(${bg})`}}>
        <div className={classes.page_container}>
          <h1>Sorry, you have no rights to see this page.</h1>
        </div>
      </div>
    </Layout>
  )
};

export default Forbidden;