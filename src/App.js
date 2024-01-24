const list = [
  { name: "Albar", url: "jkkjkjkj" },
  { name: "Masood", url: "jkkjkjkj" },
  { name: "Habib", url: "jkkjkjkj" },
  { name: "Tausif", url: "jkkjkjkj" },
];

export default function App() {
  return (
    <div className="app">
      <EatNSplit />
    </div>
  );
}

function EatNSplit() {
  return (
    <div className="eatsplit">
      <FriendList data={list} />
      <SplitBillForm />
    </div>
  );
}

function FriendList({ data }) {
  return (
    <div className="section1">
      <div className="list">
        {data.map((l) => (
          <p className="list-item">
            <span>{l.name}</span>
            <button className="select-btn">Select</button>
          </p>
        ))}
      </div>
      <FriendAddForm />
    </div>
  );
}

function FriendAddForm() {
  return (
    <div className="addfriend">
      <button className="add-btn">Add Friend</button>
      <form>
        <label>Friend Name </label>
        <input type="text" placeholder="Name"></input>
        <br></br>
        <label>url: </label>
        <input type="text"></input>
      </form>
    </div>
  );
}

function SplitBillForm() {
  return (
    <div className="bill">
      <h2 className="bill-title">Split Bill With Friend</h2>
      <form className="bill-form">
        <p>
          {" "}
          <label>💰 Bill Value: </label>
          <input type="Number"></input>
        </p>
        <p>
          {" "}
          <label>🕴️ Your Expense: </label>
          <input type="Number"></input>
        </p>

        <p>
          {" "}
          <label>🧑‍🤝‍🧑 Friend Expense</label>
          <input type="text"></input>
        </p>
        <p>
          {" "}
          <label>🤑 Who is Paying the bill</label>
          <select>
            <option>You</option>
            <option>Friend</option>
          </select>
        </p>
        <br></br>
        <button className="split-btn">Split Bill</button>
      </form>
    </div>
  );
}
