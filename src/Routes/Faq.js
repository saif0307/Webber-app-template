import Hamburger from "../components/Hamburger";
import Question from "../components/Question";
const Faq = (props) => {
  return (
    <>
    <Hamburger hidden={props.hidden}/>
    <div className={`mx-auto ${props.margin || "mt-14"} flex flex-col flex-wrap  bg-footer-grey w-full gap-28 p-10 md:p-20 justify-evenly items-center`}>
        <h1 className="md:text-6xl text-5xl font-bold  md:font-black text-plan-color text-center">Frequently asked questions</h1>
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center">
      <div className="flex flex-col gap-16">
        <Question
          heading="How do I use the webber for 3+ members?"
          text="Magnam reprehenderit quisquam corporis sunt ratione. Non magnam et. Suscipit quia et aspernatur officiis quo. Officia sed eaque enim doloribus quisquam mollitia nihil."
        />
        <Question
          heading="Whats the best way to make the most out of it?"
          text="Magnam reprehenderit quisquam corporis sunt ratione. Non magnam et. Suscipit quia et aspernatur officiis quo. Officia sed eaque enim doloribus quisquam mollitia nihil."
        />
        <Question
          heading="How do I use the webber for 3+ members"
          text="Magnam reprehenderit quisquam corporis sunt ratione. Non magnam et. Suscipit quia et aspernatur officiis quo. Officia sed eaque enim doloribus quisquam mollitia nihil."
        />
      </div>
      <div className="flex flex-col gap-16">
        <Question
          heading="What does early access mean"
          text="Magnam reprehenderit quisquam corporis sunt ratione. Non magnam et. Suscipit quia et aspernatur officiis quo. Officia sed eaque enim doloribus quisquam mollitia nihil."
        />
        <Question
          heading="How are enterprise package customers accomodated?"
          text="Magnam reprehenderit quisquam corporis sunt ratione. Non magnam et. Suscipit quia et aspernatur officiis quo. Officia sed eaque enim doloribus quisquam mollitia nihil."
        />
        <Question
          heading="How do I use the webber for 3+ members"
          text="Magnam reprehenderit quisquam corporis sunt ratione. Non magnam et. Suscipit quia et aspernatur officiis quo. Officia sed eaque enim doloribus quisquam mollitia nihil."
        />
      </div>
      </div>
    </div>
    </>
  );
};

export default Faq;
