import React from 'react'

const noImage = 'https://dummyimage.com/100x100/000000/FFFFFF.gif&text=No+image+'

const Member = (props) => {
  return (
    <div className="member-container">
      <img className="memeber-avatar"
        width="100px"
        height="100px"
        src={ (props.member.avatar) ? props.member.avatar : noImage }
        alt={props.member.email} />
      <span className="member-name">{props.member.firstName} {props.member.lastName}</span>
      <div className="member-email">{props.member.email}</div>
    </div>)
}

export { Member }