import Layout from "../../components/Layout";
import bg from './bg.jpg';
import classes from './profile.module.sass';

const Profile = () => {

  return (
    <Layout pageTitle="Profile">
      <div className="page-content" style={{backgroundImage: `url(${bg})`}}>
        <div className={classes.page_container}>
          <h1>PROFILE</h1>
        </div>
      </div>
    </Layout>
  )
};

export default Profile;