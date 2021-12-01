import Button from "../components/Button";
import Feature from "../components/Feature";

const Overview = () => {
  return (
    //   HERO
    <div className="mt-24 flex flex-col justify-center items-center gap-24">
      <div>
        <span style={{ display: "block" }} className="text-8xl text-center">
          Deploy your
        </span>
        <span style={{ display: "block" }} className="text-8xl text-center">
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
              <img src="./images/iphone.png"/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
