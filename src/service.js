import { getMessages, getMembers } from './data';

export function getChatLog() {
  return {
    type: 'MESSAGES_LOADING',
    payload: getMessages().then(messages => messages)
  }
}

export function getMemberList() {
  return {
    type: 'MEMBERS_LOADING',
    payload: getMembers().then(members => members)
  }
}
