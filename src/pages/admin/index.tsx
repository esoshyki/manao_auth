import Layout from "../../components/Layout";
import bg from './bg.jpg';
import classes from './admin.module.sass';

const Admin = () => {

  return (
    <Layout pageTitle="Admin">
      <div className="page-content" style={{backgroundImage: `url(${bg})`}}>
        <div className={classes.page_container}>
          <h1>Admin</h1>
        </div>
      </div>
    </Layout>
  )
};

export default Admin;