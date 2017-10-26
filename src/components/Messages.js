import React from 'react'
import { Member } from './Members'
import { getMember, fDate } from '../Utils/'

const DateComponent = (props) => (<div className="message-date">{fDate(props.timestamp)}</div>)

const Messages = (props) => (<div>
  <h1>Messages:</h1>
  {
    Object.keys(props.messages)
      .sort((a,b) => {
        let aDate = new Date(props.messages[a].timestamp)
        let bDate = new Date(props.messages[b].timestamp)
        return aDate.getTime() - bDate.getTime()
      })
      .map((m, i) => {
        return (<div className="message-container" key={i}>
          <Member member={getMember(props.messages[m].userId, props.members)} />
          <div className="message-box">
            <DateComponent timestamp={props.messages[m].timestamp} />
            {props.messages[m].message}
          </div>
        </div>)
      })
    }
  </div>)

export { Messages }