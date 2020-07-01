import React from 'react';

export default {
  "loadprofile": (profileId) => profileId === "ER28-0653" ? ["Done"] : ["Error: Profile not found!"],
  "name": () => ["Ilya Peshekhonov"],
  "contacts": () => [
    <a href={"https://github.com/thepeshka"}>Github</a>,
    <a href={"https://t.me/thepeshka"}>Telegram</a>,
    <a href={"mailto://ilya@thepeshka.ru"}>ilya@thepeshka.ru</a>
  ],
  "location": () => ["Russia, Veliky Novgorod"],
  "position": () => ["Web-developer @ ZenCat"],
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
  "help": () => ["Command list: loadprofile, name, contacts, location, position, career, clear, exit."],
  "exit": () => window.close()
}
