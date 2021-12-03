import Button from "../components/Button";
import Footer from "../components/Footer";
import Hamburger from "../components/Hamburger";
import SmCase from "../components/SmCase";

const innerCaseStudies = () => {
  return (
    <>
    <div style={{zIndex:'-50',height:'500px'}} className="absolute top-0 w-full bg-grd-2 filter blur-3xl opacity-30"></div>
    <Hamburger/>
      <div className="flex flex-col md:flex-row justify-evenly p-6 mt-20 gap-4">
        <div className="max-w-2xl flex flex-col items-center md:items-start gap-24 mt-32">
          <div className="flex flex-col">
            <p className="text-sm text-ft-grey">Kanban Software</p>
            <h1 className="text-4xl text-plan-color font-black">
              Trello x Webber
            </h1>
            <p className="max-w-lg text-base text-ft-grey mt-3">
              Learn how Trello has leveraged Webber to consolidate it’s diverse
              range of services software
            </p>
            <div className="flex gap-20 mt-8">
              <div className="flex flex-col ">
                <p className="text-plan-color">Industry: Technology</p>
                <p className="text-plan-color">Since: 2018</p>
              </div>
              <div className="flex flex-col">
                <p className="text-plan-color">
                  Use case: Developer operations
                </p>
                <p className="text-plan-color">Package: Enterprise+</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-start">
            <h1 className="text-3xl font-bold">The details</h1>
            <p className="text-base text-plan-color">
              It is a long established fact that a reader will be distracted by
              the readable. There are many variations of passages of Lorem Ipsum
              available, but the majority have suffered alteration in some form,
              by injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </p>
            <img alt="inner-1" src="./images/inner-1.jpg" />
            <h2 className="text-base text-plan-color">
              Breakdown of milestones
            </h2>
            <ul className="text-base text-plan-color">
              <li>
                - Mauris ullamcorper neque sed mauris gravida, vel mollis velit
                molestie.
              </li>
              <li>- Donec iaculis erat in vulputate venenatis.</li>
              <li>- Vestibulum et velit et metus commodo iaculis.</li>
              <li>- Sed et urna a felis accumsan commodo vel vel nibh.</li>
              <li>- Praesent sollicitudin nulla non sollicitudin varius.</li>
              <li>- Integer convallis orci sed diam volutpat feugiat.</li>
              <li>- Donec posuere arcu non semper maximus.</li>
            </ul>
            <img alt="inner-2" src="./images/inner-2.jpg" />
            <p className="text-plan-color text-base">
              It is a long established fact that a reader will be distracted by
              the readable. There are many variations of passages of Lorem Ipsum
              available, but the majority have suffered alteration in some form,
              by injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </p>
          </div>
        </div>
        <div className="flex flex-col text-white">
          <img alt="inner-3" src="./images/inner-3.jpg" />
          <div
            className="md:max-w-lg w-full pt-10 mt-8 pl-8 pb-10 pr-20 bg-gradient-to-r from-gd-blue3 via-gd-blue2  to-gd-blue1"
          >
            <h1>Get Webber for your organization</h1>
            <p className="mt-8 mb-8">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look.
            </p>
            <div className="flex gap-4">
              <Button
                name="Start trial"
                width="w-32 rounded-sm"
                height="h-12"
                color="bg-white"
                textColor="text-cycan"
              />
              <Button
                name="Contact sales"
                width="w-40"
                height="h-12 border-white border rounded-sm"
                color="bg-gradient-to-b from-gd-blue3 via-gd-blue2  to-gd-blue1"
                textColor="text-white"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full flex-start p-16 mt-16 gap-12 bg-footer-grey">
        <h1 className="text-3xl md:text-left text-center">More case studies</h1>
        <div className="flex md:flex-row flex-col justify-between gap-5 text-plan-color items-center w-full">
        <SmCase
          path="./images/smcase-1.png"
          caption="Kanban Software"
          heading="Swiss Airline"
          text="Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software"
        />
         <SmCase
          path="./images/smcase-2.png"
          caption="Kanban Software"
          heading="Kling and Sons"
          text="Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software"
        />
         <SmCase
          path="./images/smcase-3.png"
          caption="Cassin - Zemlak"
          heading="Swiss Airline"
          text="Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software"
        />
         <SmCase
          path="./images/smcase-4.png"
          caption="Russel - Kertzmann"
          heading="Swiss Airline"
          text="Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software"
        />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default innerCaseStudies;
