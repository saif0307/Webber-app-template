import Button from "../components/Button";
import Plan from "../components/Plan";
import Footer from "../components/Footer";
import Faq from '../Routes/Faq'
import Hamburger from "../components/Hamburger";

const Pricing = () => {
  return (
    <>
    <div style={{zIndex:'-50',height:'1000px'}} className="absolute top-0 w-full bg-grd-2 filter blur-3xl opacity-30"></div>
    <Hamburger/>
      <div className="p-6 md:p-0">
        <section className="mt-24 flex flex-col justify-center items-center gap-24">
          <div className="flex flex-col items-center gap-14">
            <div className="flex flex-col gap-3">
              <h1 className="md:text-8xl md:font-black text-7xl font-bold text-h-color text-center">SIMPLE PRICING</h1>
              <p className="max-w-3xl text-center text-xl text-lit-grey">
                No contracts. No surprise fees. Register now or try out the
                Webbber free trial so you’re absolutely sure that it’s the right
                fit for your frontend team
              </p>
            </div>
            <div>
              <Button
                name="MONTHLY"
                width="w-28"
                height="h-11"
                color={
                  "bg-gradient-to-b from-gd-blue1 via-gd-blue2  to-gd-blue3"
                }
                textColor="text-white"
              />
              <Button
                name="YEARLY"
                width="w-28"
                height="h-11"
                color="bg-lt-blue"
                textColor="text-ft-blue"
                hover="bg-hr-blue"
              />
            </div>
          </div>
          <div className="flex md:gap-28 lg:gap-64 p-2">
            <div className="self-center">
              <ul className="flex flex-col gap-12">
                <li className="text-plan-color text-xs md:text-base">All limited links</li>
                <li className="text-plan-color text-xs md:text-base">Own analytics platform</li>
                <li className="md:-plan-color text-xs md:text-base">Chat support</li>
                <li className="text-plan-color text-xs md:text-base">Number of users</li>
                <li className="text-plan-color text-xs md:text-base">Optimize hashtags</li>
                <li className="text-plan-color text-xs md:text-base">Account manager</li>
                <li className="text-plan-color text-xs md:text-base">Number of articles</li>
                <li className="text-plan-color text-xs md:text-base">Satisfaction guaranteed</li>
              </ul>
            </div>
            <div className="flex">
              <Plan
                users="1 user"
                planName="Starter"
                planPrice="$20"
                sixth="true"
                seventh="true"
                color="bg-lt-blue"
                textColor="text-ft-blue"
                hover="bg-hr-blue"
              />
              <Plan
                users="3 users"
                planName="Pro"
                planPrice="$100"
                sixth="true"
                classes="bg-white"
                seventh="true"
                color={
                  "bg-gradient-to-b from-gd-blue1 via-gd-blue2  to-gd-blue3"
                }
                textColor="text-white"
                gradient={{
                  background:
                    "linear-gradient(274.03deg, #06B6D4 0%, #0284C7 100%)",
                  webkitBackgroundClip: "text",
                  webkitTextFillColor: "transparent",
                }}
                custom={{
                  boxShadow: "20px 22px 24px rgba(23, 18, 63, 0.120028)",
                  borderRadius: "2px",
                }}
              />
              <Plan
                users="Unlimited"
                planName="Enterprise"
                planPrice="$200"
                color="bg-lt-blue"
                textColor="text-ft-blue"
                hover="bg-hr-blue"
              />
            </div>
          </div>
          <div className="w-full bg-gradient-to-b from-gd-blue3 via-gd-blue2  to-gd-blue1">
          <Faq margin="a" hidden="hidden"/>
          <div className="flex flex-col md:p-0 p-4 items-center justify-evenly md:h-80 text-white w-full bg-gradient-to-r from-pri-color1 via-pri-color2 to-pri-color3">
            <h1 className="text-5xl font-extrabold text-center">Get results, no matter what</h1>
            <p className="text-base max-w-xl text-center font-medium">
              Start your free trial today, you get all the pro features for 1
              month for you and your team. If you think its not for you can
              easily unsubscribe
            </p>
            <Button
              width="w-40"
              height="h-12"
              color="bg-white"
              textColor="text-cycan"
              name="Start free trial"
              hover="bg-lt-blue"
            />
          </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Pricing;
