import Footer from "./Footer";
import User from "./User";
import UserClass from "./UserClass";

export default function About() {
  return (
    <>
      <div className="about__page">
        <User name={"nimish"} userName={"nimishgo"} />
        <div>About</div>
        <div>
          We are the number one food delivery app delivering across all over
          india
        </div>
        <UserClass name={"nimish"} userName={"nimishgo"} />
      </div>
      <Footer />
    </>
  );
}
