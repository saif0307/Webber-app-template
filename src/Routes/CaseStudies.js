import Case from "../components/Case";
import Hamburger from "../components/Hamburger";

const CaseStudies = () => {
  return (
    <>
    <div style={{zIndex:'-50',height:'1000px'}} className="absolute top-0 w-full bg-grd-2 filter blur-3xl opacity-30"></div>

    <Hamburger/>
    <div>
      <section className="flex flex-col gap-24">
        <div className="mt-24 flex flex-col items-center gap-12 mt">
          <div className="flex flex-col gap-3">
            <h1 className="text-8xl text-h-color text-center font-black">CASE STUDIES</h1>
            <p className="max-w-3xl text-xl font-normal text-lit-grey text-center">
              See how leading organizations and freelance developers have used
              Webber to tackle different use cases and get ahead of the
              competition
            </p>
          </div>
          <div className="flex border items-center justify-evenly border-border-grey rounded-sm w-96 h-16 text-base">
            <label className="text-ft-grey">
              Region
              <select className="w-10 bg-transparent font-medium text-lit-grey">
                <option>All</option>
                <option>Alpha</option>
                <option>Beta</option>
              </select>
            </label>
            <label className="text-ft-grey">
              Industry
              <select className="w-10 bg-transparent font-medium text-lit-grey">
                <option>All</option>
                <option>Alpha</option>
                <option>Beta</option>
              </select>
            </label>
            <label className="text-ft-grey">
              Type
              <select className="w-10 font-medium bg-transparent text-lit-grey">
                <option>All</option>
                <option>Alpha</option>
                <option>Beta</option>
              </select>
            </label>
          </div>
        </div>
        <div className="flex justify-evenly w-full gap-8 flex-wrap">
          <div className="flex flex-col mt-32 gap-20">
            <Case
              path="./images/adobe.jpg"
              heading="Adobe Systems Inc"
              text="Learn how Adobe has leveraged Webber to consolidate it’s diverse range of services software"
              caption="Technology - SaaS"
            />
            <Case
              path="./images/gutko.jpg"
              heading="Gutkowski, Schuppe and Pagac"
              text="Learn how Adobe has leveraged Webber to consolidate it’s diverse range of services software"
              caption="Technology - SaaS"
            />
            <Case
              path="./images/adobes.jpg"
              heading="Adobe Systems Inc"
              text="Learn how Adobe has leveraged Webber to consolidate it’s diverse range of services software"
              caption="Technology - SaaS"
            />
          </div>
          <div className="flex flex-col gap-20">
            <Case
              path="./images/trello.jpg"
              heading="Trello"
              text="Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software"
              caption="Kanban Software"
            />
            <Case
              path="./images/swiss.jpg"
              heading="Swiss Airline"
              text="Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software"
              caption="Airline"
            />
            <Case
              path="./images/mann.jpg"
              heading="Mann and Sons"
              text="Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software"
              caption="Kanban Software"
            />
          </div>
        </div>
      </section>
      <br/>
      <br/>
      <br/>
    </div>
    </>
  );
};

export default CaseStudies;
