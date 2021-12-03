import Button from "../components/Button";
import Feature from "../components/Feature";
import Brand from "../components/Brand";
import Number from "../components/Number";
import Footer from "../components/Footer";
import Hamburger from "../components/Hamburger";

const Overview = () => {
  return (
    //   HERO
    <>
    <div style={{zIndex:'-50',height:'755px'}} className="absolute top-0 w-full bg-gradient-to-b from-grd-1 to-grd-2 opacity-10"></div>
    <Hamburger/>
    <div className="mt-24 p-7 md:p-0 mx-auto flex flex-col justify-center items-center gap-24">
      <div>
        <span
          style={{ display: "block" }}
          className="font-black text-h-color text-8xl text-center"
        >
         DEPLOY YOUR 
        </span>
        <span
          style={{ display: "block" }}
          className="text-8xl text-h-color text-center font-black"
        >
          FRONT-END
        </span>
      </div>
      <div className="flex gap-5">
        <Button
          color={"bg-gradient-to-r from-gd-blue1 via-gd-blue2  to-gd-blue3"}
          textColor="text-white"
          name="Get Started"
          width="w-40 text-lg"
          height="h-12"
          hover="text-lt-blue"
        />
        <Button
          name="Learn more"
          width="w-40 text-lg"
          height="h-12"
          color="bg-lt-blue"
          textColor="text-ft-blue"
          hover="bg-hr-blue"
        />
      </div>
      <section className="max-w-7xl mx-auto flex flex-col gap-28">
        <div className="relative w-full max-w-7xl h-64 bg-gradient-to-b from-gd-blue3 via-gd-blue2  to-gd-blue1">
          <img
            alt="browser"
            style={{ margin: "0 auto" }}
            className="relative top-28"
            src="./images/browser.png"
          />
        </div>
        <div className="h-96"></div>
        {/* FEATURES */}
        <div className=" flex items-center flex-col gap-24">
          <h1 className="text-6xl text-center text-h-color font-black ">Tailor-made features</h1>
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
        <h1 className="text-6xl text-center text-h-color font-black">How it Works</h1>
        {/* HOW IT WORKS */}
        <div className="flex mx-auto flex-row flex-wrap w-full gap-10 md:gap-0 justify-center md:justify-between items-center">
          <div className="w-1/2 flex gap-9 flex-col items-start">
            <h1 className="text-5xl font-extrabold text-h-color  text-center">Sign Up</h1>
            <p className="text-xl font-normal text-ft-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
              vitae a consectetur dolor.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Erat vitae a consectetur dolor.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Erat vitae a consectetur
              dolor.
            </p>
            <div className="flex justify-between w-full">
            <Button
              color={"bg-gradient-to-b from-gd-blue1 via-gd-blue2  to-gd-blue3"}
              textColor="text-white"
              name="Learn more"
              width="w-36 text-base"
              height="h-11"
              hover="text-lt-blue"
            />
            <div className="flex gap-6">
            <button><img alt="arr-btn" src="./images/left-arrow.png"/></button>
            <button className="rounded-full bg-sl-color hover:bg-ft-blue p-3" ><img alt="arr-btn" src="./images/right-arrow.png"/></button>
            </div>
            </div>
          </div>
          <div>
            <img alt="iphone" src="./images/iphone.png" />
          </div>
        </div>
      </section>
      <div className="flex p-6 flex-col md:flex-row gap-4 md:gap-0 justify-evenly items-center md:h-72 w-full bg-gradient-to-b from-gd-blue3 via-gd-blue2  to-gd-blue1 text-white ">
        <div className="flex content-start gap-3 mt-24">
          <img alt="profile" src="./images/picture.png" />
          <div>
            <h1 className="text-lg font-semibold">Jenny Wilson</h1>
            <h4 className="text-sm font-normal">Vice president</h4>
          </div>
        </div>
        <div className="flex items-start w-1/2 gap-3">
          <span className="text-7xl font-bold">“</span>
          <p className="text-lg font-medium">
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
        <h1 className="text-6xl text-center font-black text-h-color">Brands using our services</h1>
        <div className="flex gap-8 flex-row md:flex-col">
          <div className="flex flex-col md:flex-row flex-wrap gap-5">
            <Brand path="./images/logo-1.png" />
            <Brand path="./images/logo-2.png" />
            <Brand path="./images/logo-3.png" />
            <Brand path="./images/logo-4.png" />
          </div>
          <div className="flex flex-col md:flex-row flex-wrap gap-5">
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
          <p className="text-center text-lg font-normal mt-6">
            5 years, consistent quality and you get results. No matter what
          </p>
        </div>
        <div className="flex w-full p-6 md:p-0 items-center md:justify-evenly flex-col md:flex-row ms:flex-row gap-8 relative -top-32 flex-wrap md:flex-nowrap">
          <Number heading="40+" text="Happy Clients" />
          <Number heading="540+" text="Projects Completed" />
          <Number heading="300" text="Dedicated Members" />
          <Number heading="25+" text="Awards Won" />
        </div>
      </div>
      <div className="flex flex-col justify-center mb-32 items-center gap-16">
        <h1 className="text-5xl font-black text-h-color max-w-3xl text-center">
          Build the next big thing and ship to market faster
        </h1>
        <Button
          name="Download Now"
          width="w-48"
          height="h-12 font-normal text-lg"
          color={"bg-gradient-to-b from-gd-blue1 via-gd-blue2  to-gd-blue3 text-lg"}
          textColor="text-white"
          hover="text-lt-blue"
        />
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Overview;
