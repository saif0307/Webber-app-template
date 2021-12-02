import Button from "../components/Button";
import Feature from "../components/Feature";
import Brand from "../components/Brand";
import Number from "../components/Number";
import Footer from "../components/Footer";

const Overview = () => {
  return (
    //   HERO
    <div className="mt-24 flex flex-col justify-center items-center gap-24">
      <div>
        <span
          style={{ display: "block" }}
          className="font-sans font-black text-8xl text-center"
        >
          Deploy your
        </span>
        <span
          style={{ display: "block" }}
          className="text-8xl text-center font-black"
        >
          Front-end
        </span>
      </div>
      <div className="flex gap-5">
        <Button
          color={"bg-gradient-to-b from-gd-blue1 via-gd-blue2  to-gd-blue3"}
          textColor="text-white"
          name="Get Started"
          width="w-40"
          height="h-12"
        />
        <Button
          name="Learn more"
          width="w-40"
          height="h-12"
          color="bg-lt-blue"
          textColor="text-ft-blue"
          hover="bg-hr-blue"
        />
      </div>
      <section className="max-w-7xl mx-auto flex flex-col gap-28">
        <div className="relative w-full max-w-7xl h-64 bg-gradient-to-b from-gd-blue3 via-gd-blue2  to-gd-blue1">
          <img
            style={{ margin: "0 auto" }}
            className="relative top-28"
            src="./images/browser.png"
          />
        </div>
        <div className="h-96"></div>
        {/* FEATURES */}
        <div className=" flex items-center flex-col gap-24">
          <h1 className="text-6xl text-center ">Tailor-made features</h1>
          <div className="w-full justify-between flex flex-wrap gap-7">
            <Feature
              source="./images/icon-1.png"
              heading="Robust Workflow"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique. "
            />
            <Feature
              source="./images/icon-1.png"
              heading="Flexibility"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique. "
            />
            <Feature
              source="./images/icon-1.png"
              heading="User friendly"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique. "
            />
          </div>
          <div className="flex w-full justify-between flex-wrap gap-7">
            <Feature
              source="./images/icon-1.png"
              heading="Multiple laoyuts"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique. "
            />
            <Feature
              source="./images/icon-1.png"
              heading="Better components"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique. "
            />
            <Feature
              source="./images/icon-1.png"
              heading="Well organised"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique. "
            />
          </div>
        </div>
        <h1 className="text-6xl text-center">How it Works</h1>
        {/* HOW IT WORKS */}
        <div className="flex flex-row flex-wrap w-full justify-between items-center">
          <div className="w-1/2 flex gap-9 flex-col items-start">
            <h1 className="text-5xl text-center">Sign Up</h1>
            <p className="text-xl ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
              vitae a consectetur dolor.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Erat vitae a consectetur dolor.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Erat vitae a consectetur
              dolor.
            </p>
            <Button
              color={"bg-gradient-to-b from-gd-blue1 via-gd-blue2  to-gd-blue3"}
              textColor="text-white"
              name="Learn more"
              width="w-36"
              height="h-11"
            />
          </div>
          <div>
            <img src="./images/iphone.png" />
          </div>
        </div>
      </section>
      <div className="flex justify-evenly items-center h-72 w-full bg-gradient-to-b from-gd-blue3 via-gd-blue2  to-gd-blue1 text-white ">
        <div className="flex gap-3 mt-24">
          <img alt="profile" src="./images/picture.png" />
          <div>
            <h1 className="text-lg">Jenny Wilson</h1>
            <h4 className="text-sm">Vice president</h4>
          </div>
        </div>
        <div className="flex items-start w-1/2 gap-3">
          <span className="text-7xl font-bold">“</span>
          <p className="text-lg">
            Eos enim quo est necessitatibus nobis consectetur rerum qui dolores.
            Quia commodi similique est sed aut. Aspernatur voluptas nisi tenetur
            voluptates iusto debitis ex voluptatem odit. Repudiandae et et quod
            et. Enim sit delectus numquam. Molestiae aut voluptatem. Quia
            commodi similique est sed aut. Aspernatur voluptas nisi tenetur
            voluptates iusto debitis.
          </p>
        </div>
      </div>
      {/* PLACEBO dIVS */}
      <div></div>
      {/* PLACEBO dIVS */}
      <div className="flex flex-col items-center gap-20">
        <h1 className="text-6xl font-black">Brands using our services</h1>
        <div className="flex flex-col gap-8">
          <div className="flex gap-5">
            <Brand path="./images/logo-1.png" />
            <Brand path="./images/logo-2.png" />
            <Brand path="./images/logo-3.png" />
            <Brand path="./images/logo-4.png" />
          </div>
          <div className="flex gap-5">
            <Brand path="./images/logo-5.png" />
            <Brand path="./images/logo-6.png" />
            <Brand path="./images/logo-7.png" />
            <Brand path="./images/logo-8.png" />
          </div>
        </div>
      </div>
      {/* PLACEBO dIVS */}
      <div></div>
      {/* PLACEBO dIVS */}
      <div className="w-full flex flex-col justify-center items-center">
        <div className="h-96 w-full bg-gradient-to-b from-gd-blue3 via-gd-blue2  to-gd-blue1 text-white">
          <h1 className="text-center text-6xl mt-20 font-black">
            By the numbers
          </h1>
          <p className="text-center text-lg mt-6">
            5 years, consistent quality and you get results. No matter what
          </p>
        </div>
        <div className="flex gap-8 relative -top-32">
          <Number heading="40+" text="Happy Clients" />
          <Number heading="540+" text="Projects Completed" />
          <Number heading="300" text="Dedicated Members" />
          <Number heading="25+" text="Awards Won" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-16">
        <h1 className="text-5xl font-black max-w-3xl text-center">
          Build the next big thing and ship to market faster
        </h1>
        <Button
          name="Download Now"
          width="w-48"
          height="h-12"
          color={"bg-gradient-to-b from-gd-blue1 via-gd-blue2  to-gd-blue3 text-lg"}
          textColor="text-white"
        />
      </div>
      <Footer/>
    </div>
  );
};

export default Overview;
