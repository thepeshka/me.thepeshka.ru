import React from 'react';
import moment from 'moment';

const commands = {
  "name": (profile) => [profile.name],
  "contacts": (profile) => profile.contacts.map(({link, label}, i) => <a href={link} key={i}>{label}</a>),
  "location": (profile) => [profile.location],
  "position": (profile) => [profile.position],
  "bday": ({dob}) => [`${moment(dob, "YYYYMMDD").format("DD.MM.YYYY")} (${moment(dob, "YYYYMMDD").fromNow().split(" ")[0]} y.o.)`],
  "career": (profile) => profile.career
};
commands["help"] = () => ["Command list: " + Object.keys(commands).join(", ")];
export default commands;
