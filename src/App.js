import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {Cursor, UserInput} from "./components";
import commands from "./commands";
import Typed from "typed.js";

function App() {
  const [buffer, setBuffer] = useState([]);
  const [text, setText] = useState("");
  const [commandsCount, setCommandsCount] = useState(7);
  const [animationInProgress, setAnimationInProgress] = useState(true);
  const scrollRef = useRef();
  const animationLineRef = useRef();
  const typedjsRef = useRef();
  const scrollToBottom = () => {
    if (scrollRef.current) {
      const el = scrollRef.current;
      el.scrollTop = el.scrollHeight - el.clientHeight;
    }
  };
  const commandSubmit = () => {
    const commandsCount_ = commandsCount + 1;
    let buffer_ = buffer;
    const command_parts = text.split(" ");
    setText("");
    buffer_.push("$ " + text);
    const command = command_parts[0];
    const command_args = command_parts.slice(1);
    if (Object.keys(commands).includes(command)) {
      buffer_ = [...buffer_, ...commands[command](...command_args)];
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
  const animate = () => {
    const strings = [
      "loadprofile ER28-0653",
      "name",
      "contacts",
      "location",
      "position",
      "career",
      "help"
    ];
    typedjsRef.current = new Typed(
      animationLineRef.current,
      {
        strings,
        typeSpeed: 10,
        backSpeed: 0,
        smartBackspace: false,
        showCursor: false,
        onStringTyped(arrayPos, self) {
          if (!self.buffer) {
            self.buffer = [];
          }
          const text_ = strings[arrayPos];
          const command_parts = text_.split(" ");
          self.buffer.push("$ " + text_);
          const command = command_parts[0];
          const command_args = command_parts.slice(1);
          if (Object.keys(commands).includes(command)) {
            self.buffer = [...self.buffer, ...commands[command](...command_args)];
          }
          setBuffer(self.buffer);
        },
        onComplete(self) {
          self.destroy();
          setAnimationInProgress(false);
        }
      }
    )
  };
  useEffect(() => {
    scrollToBottom();
  });
  useEffect(() => {
    animate();
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
      <UserInput onTextChange={txt => setText(txt)} onSubmit={commandSubmit} allowed={!animationInProgress}/>
    </div>
  );
}

export default App;
