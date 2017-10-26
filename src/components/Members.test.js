import React from 'react';
import ReactDOM from 'react-dom';

import { Member } from './Members';
import { getMember, fDate } from '../Utils/'

describe('Member', () => {

  const members = [{
    "id": "e837c9f5-247f-445f-bcc3-7d434348336b",
    "firstName": "Martin",
    "lastName": "Bradley",
    "email": "mbradley0@google.it",
    "avatar": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    "ip": "166.124.172.160"
  },
  {
    "id": "cae5d3af-9ac7-471e-9061-e2e9d75f00e4",
    "firstName": "Helen",
    "lastName": "Hawkins",
    "email": "hhawkins1@posterous.com",
    "avatar": "http://dummyimage.com/100x100.jpg/dddddd/000000",
    "ip": "179.239.189.173"
  }]

  const member = getMember('cae5d3af-9ac7-471e-9061-', members)

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Member member={member} />, div);    
  });

})
