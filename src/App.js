import { useState } from "react";

const list = [
  {
    name: "Albar",
    url: "https://64.media.tumblr.com/1d2f7ea92e9302e5484a83eea3cc89f9/2f6156f671a74ded-c1/s1280x1920/ed5c1e084905191e9161210aa5fb3e9172a0776f.jpg",
    selected: false,
    balance: 0,
    id: 1,
  },
  {
    name: "Masood",
    url: "https://i.pinimg.com/originals/bb/da/3a/bbda3a77f175371a90274697c7c79baf.jpg",
    selected: false,
    balance: 0,
    id: 2,
  },

  {
    name: "Tausif",
    url: "https://64.media.tumblr.com/1d2f7ea92e9302e5484a83eea3cc89f9/2f6156f671a74ded-c1/s1280x1920/ed5c1e084905191e9161210aa5fb3e9172a0776f.jpg",
    selected: false,
    balance: 0,
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
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleAddFriend(item) {
    setFriendList((friendList) => [...friendList, item]);
  }

  function handleSelectedFriend(friend) {
    setSelectedFriend(friend);
  }
  function handleSplit(value) {
    console.log(value);
  }
  return (
    <div className="eatsplit">
      <FriendList
        data={friendList}
        onAdd={handleAddFriend}
        onSelect={handleSelectedFriend}
        selectedFriend={selectedFriend}
      />
      {selectedFriend === null ? (
        ""
      ) : (
        <SplitBillForm selectedFriend={selectedFriend} onSplit={handleSplit} />
      )}
    </div>
  );
}

function FriendList({ data, onAdd, onSelect, selectedFriend }) {
  return (
    <div className="section1">
      <div className="list">
        {data.map((l) => (
          <p
            className="list-item"
            key={l.id}
            style={
              l === selectedFriend
                ? { backgroundColor: "bisque" }
                : { backgroundColor: "none" }
            }
          >
            <img src={l.url} alt="friendimg"></img>
            <p className="list-text">
              <div>{l.name}</div>
              <div>Owes</div>
            </p>
            <button className="select-btn" onClick={() => onSelect(l)}>
              Select
            </button>
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

function SplitBillForm({ selectedFriend }) {
  const [totalBill, setTotalBill] = useState("");
  const [own, setOwn] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="bill">
      <h2 className="bill-title">Split Bill With {selectedFriend.name}</h2>
      <form className="bill-form" onSubmit={handleSubmit}>
        <p>
          {" "}
          <label>💰 Bill Value: </label>
          <input
            type="Number"
            value={totalBill}
            onChange={(e) => setTotalBill(Number(e.target.value))}
          ></input>
        </p>
        <p>
          {" "}
          <label>🕴️ Your Expense: </label>
          <input
            type="Number"
            value={own}
            onChange={(e) =>
              setOwn(
                Number(e.target.value) > totalBill
                  ? own
                  : Number(e.target.value)
              )
            }
          ></input>
        </p>

        <p>
          {" "}
          <label>🧑‍🤝‍🧑 {selectedFriend.name} Expense</label>
          <input type="text" value={totalBill - own} disabled></input>
        </p>
        <p>
          {" "}
          <label>🤑 Who is Paying the bill</label>
          <select
            value={whoIsPaying}
            onChange={(e) => setWhoIsPaying(e.target.value)}
          >
            <option>You</option>
            <option>{selectedFriend.name}</option>
          </select>
        </p>
        <br></br>
        <button className="split-btn" type="submit">
          Split Bill
        </button>
      </form>
    </div>
  );
}
