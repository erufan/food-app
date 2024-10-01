import classes from "./page.module.css";

const SecurePage = () => {
  return (
    <div className={classes.main}>
      For security reasons, I have disabled this feature because my site does
      not yet have authentication and authorization. Although I can implement
      this feature using NextAuth (Authjs), I currently have more important
      improvements to focus on. Since I am currently looking for a job, if you
      are an employer and would like to see my sample, please inform me, and I
      will enable this feature temporarily for you. Thank you for your
      understanding and consideration!
    </div>
  );
};

export default SecurePage;
