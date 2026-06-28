import React from 'react';

// {user}: App.jsx'ten "user" adıyla gönderilen PROP'U yakalıyor (isim App.jsx'teki user= ile birebir eşleşmek zorunda)
const UserCard = ({user}) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default UserCard
