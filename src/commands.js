import React from 'react';
import moment from 'moment';

const commands = {
  "loadprofile": (profileId) => profileId === "ER28-0653" ? ["Done"] : ["Error: Profile not found!"],
  "name": () => ["Ilya Peshekhonov"],
  "contacts": () => [
    <a href={"https://github.com/thepeshka"}>Github</a>,
    <a href={"https://t.me/thepeshka"}>Telegram</a>,
    <a href={"mailto://ilya@thepeshka.ru"}>ilya@thepeshka.ru</a>
  ],
  "location": () => ["Russia, Veliky Novgorod"],
  "position": () => ["Web-developer @ ZenCat"],
  "bday": () => [`02.06.1997 (${moment("19970602", "YYYYMMDD").fromNow().split(" ")[0]} y.o.)`],
  "career": () => [
    "\u00a007/17\u00a0@",
    "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0|",
    "\u00a0\u00a0\u00a0SPL\u00a0|\u00a0Jun\u00a0QA",
    "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0|",
    "\u00a007/18\u00a0@",
    "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0|",
    "\u00a0\u00a0\u00a0SPL\u00a0|\u00a0Jun\u00a0Dev",
    "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0|",
    "\u00a007/19\u00a0@",
    "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0|",
    "\u00a0\u00a0\u00a0SPL\u00a0|\u00a0Mid\u00a0Dev",
    "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0|",
    "\u00a012/18\u00a0@",
    "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0|",
    "ZenCat\u00a0|\u00a0Mid\u00a0Web-dev",
    "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0|",
    "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0..."
  ],
  "exit": () => window.close()
};
commands["help"] = () => ["Command list: " + Object.keys(commands).join(", ")];
export default commands;
