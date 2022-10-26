import QuoteList from "../components/quotes/QuoteList";

export const DummyData = [
  { id: "q1", author: "Max", text: "Learning React is Fun" },
  { id: "q2", author: "Ram", text: "What an epic is Ramayana!" },
  { id: "q3", author: "John", text: "Wake Up in the Morning" },
  { id: "q4", author: "Samual", text: "Play Everyday" },
];

const AllQuotes = () => {
  return (
    <section>
      <QuoteList quotes={DummyData}></QuoteList>
    </section>
  );
};

export default AllQuotes;
