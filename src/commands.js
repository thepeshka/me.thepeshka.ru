import React from 'react';
import moment from 'moment';

const getYearsOld = m => moment(moment() - m).year() - 1970;

const commands = {
  "name": (profile) => [profile.name],
  "contacts": (profile) => profile.contacts.map(({link, label}, i) => <a href={link} key={i}>{label}</a>),
  "location": (profile) => [profile.location],
  "bday": ({dob, showAge}) => [`${moment(dob, "YYYYMMDD").format("DD.MM.YYYY")}${showAge ? ` (${getYearsOld(moment(dob, "YYYYMMDD"))} y.o.)` : ''}`],
  "career": (profile) => profile.career,
  "specialty": (profile) => profile.specialty
};
commands["help"] = () => ["Available commands: " + Object.keys(commands).join(", ") + ", loadprofile"];
export default commands;
