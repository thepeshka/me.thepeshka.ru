import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {Cursor, TextAnimation, UserInput} from "./components";
import commands from "./commands";
import profilesEncoded from "./profiles.js";

const profiles = JSON.parse(atob(profilesEncoded));

function App() {
  const [buffer, setBuffer] = useState([]);
  const [text, setText] = useState("");
  const [commandsCount, setCommandsCount] = useState(7);
  const [animationInProgress, setAnimationInProgress] = useState(false);
  const [profile, setProfile] = useState(profiles["ER28-0653"])
  const scrollRef = useRef();
  const animationLineRef = useRef();
  const scrollToBottom = () => {
    if (scrollRef.current) {
      const el = scrollRef.current;
      el.scrollTop = el.scrollHeight - el.clientHeight;
    }
  };
  const commandSubmit = (text_) => {
    const currentText = text_ || text;
    const commandsCount_ = commandsCount + 1;
    let buffer_ = buffer;
    const command_parts = currentText.split(" ");
    setText("");
    buffer_.push("$ " + currentText);
    const command = command_parts[0];
    const command_args = command_parts.slice(1);
    if (command === "loadprofile") {
      if (command_args.length > 0 && Object.keys(profiles).includes(command_args[0])) {
        setProfile(profiles[command_args[0]]);
        buffer_ = [`$ loadprofile ${command_args[0]}`];
        setAnimationInProgress(true);
      } else {
        buffer_ = [...buffer_, "Error: Profile not found!"];
      }
    } else if (Object.keys(commands).includes(command)) {
      buffer_ = [...buffer_, ...commands[command](profile, ...command_args)];
    } else {
      if (command === "clear") {
        buffer_ = [];
      } else {
        buffer_ = [...buffer_, `sh: ${commandsCount_}: ${command}: not found`];
      }
    }
    setBuffer(buffer_);
    setCommandsCount(commandsCount_);
  };
  useEffect(() => {
    scrollToBottom();
  });
  useEffect(() => {
    commandSubmit(`loadprofile ${profile.id}`)
  }, []);
  return (
    <div className="App">
      <div ref={scrollRef} className="scrollArea">
        <div className="inputArea">
          {
            buffer.map((l, k) => <div key={k}>{l}</div>)
          }
          $ {text}<span ref={animationLineRef}/><Cursor />
        </div>
      </div>
      <UserInput onTextChange={txt => setText(txt)} value={text} onSubmit={commandSubmit} allowed={!animationInProgress}/>
      {animationInProgress && <TextAnimation rows={[
        "name",
        "bday",
        "contacts",
        "location",
        "position",
        "career",
        "help"
      ]} onSubmit={commandSubmit} setText={setText} onFinish={() => setAnimationInProgress(false)} />}
    </div>
  );
}

export default App;
