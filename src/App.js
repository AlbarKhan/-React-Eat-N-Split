const list = [
  { name: "Albar", url: "jkkjkjkj" },
  { name: "Masood", url: "jkkjkjkj" },
  { name: "Habib", url: "jkkjkjkj" },
  // { name: "Tausif", url: "jkkjkjkj" },
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
            <img src="https://64.media.tumblr.com/1d2f7ea92e9302e5484a83eea3cc89f9/2f6156f671a74ded-c1/s1280x1920/ed5c1e084905191e9161210aa5fb3e9172a0776f.jpg"></img>
            <p className="list-text">
              <div>{l.name}</div>
              <div>Owes</div>
            </p>
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
      <form>
        <p>
          {" "}
          <label>🧑‍🤝‍🧑 Friend Name </label>
          <input type="text" placeholder="Name"></input>
        </p>
        <p>
          {" "}
          <label>🎥 Image url: </label>
          <input type="text"></input>
        </p>
      </form>
      <button className="add-btn">Add Friend</button>
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
