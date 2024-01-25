import { useState } from "react";

const list = [
  {
    name: "Albar",
    url: "https://64.media.tumblr.com/1d2f7ea92e9302e5484a83eea3cc89f9/2f6156f671a74ded-c1/s1280x1920/ed5c1e084905191e9161210aa5fb3e9172a0776f.jpg",
    selected: false,
    id: 1,
  },
  {
    name: "Masood",
    url: "https://64.media.tumblr.com/1d2f7ea92e9302e5484a83eea3cc89f9/2f6156f671a74ded-c1/s1280x1920/ed5c1e084905191e9161210aa5fb3e9172a0776f.jpg",
    selected: false,
    id: 2,
  },
  // { name: "Habib", url: "jkkjkjkj" },
  {
    name: "Tausif",
    url: "https://64.media.tumblr.com/1d2f7ea92e9302e5484a83eea3cc89f9/2f6156f671a74ded-c1/s1280x1920/ed5c1e084905191e9161210aa5fb3e9172a0776f.jpg",
    selected: false,
    id: 3,
  },
];

export default function App() {
  return (
    <div className="app">
      <EatNSplit />
    </div>
  );
}

function EatNSplit() {
  const [friendList, setFriendList] = useState(list);

  function handleAddFriend(item) {
    setFriendList((friendList) => [...friendList, item]);
  }
  return (
    <div className="eatsplit">
      <FriendList data={friendList} onAdd={handleAddFriend} />
      <SplitBillForm />
    </div>
  );
}

function FriendList({ data, onAdd }) {
  return (
    <div className="section1">
      <div className="list">
        {data.map((l) => (
          <p className="list-item" key={l.id}>
            <img src={l.url} alt="friendimg"></img>
            <p className="list-text">
              <div>{l.name}</div>
              <div>Owes</div>
            </p>
            <button className="select-btn">Select</button>
          </p>
        ))}
      </div>
      <FriendAddForm onAdd={onAdd} />
    </div>
  );
}

function FriendAddForm({ onAdd }) {
  const [isadd, setIsadd] = useState(false);
  const [name, setFriendName] = useState("");
  const [url, setImageurl] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) {
      alert("NAme Required");
      return;
    } else if (!url) {
      alert("url Required");
      return;
    }

    const newObj = { name, url, selected: false, id: Date.now() };
    onAdd(newObj);
    return;
  }
  return (
    <div className="addfriend">
      {isadd ? (
        <form>
          <p>
            {" "}
            <label>🧑‍🤝‍🧑 Friend Name </label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setFriendName(e.target.value)}
            ></input>
          </p>
          <p>
            {" "}
            <label>🎥 Image url: </label>
            <input
              type="text"
              placeholder="url"
              value={url}
              onChange={(e) => setImageurl(e.target.value)}
            ></input>
          </p>
          <button onClick={handleSubmit}>Add</button>
        </form>
      ) : (
        ""
      )}
      <button className="add-btn" onClick={() => setIsadd(!isadd)}>
        {isadd ? "Close" : "Add Friend"}
      </button>
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
