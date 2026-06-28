import React from 'react';

// {user}: App.jsx'ten "user" adıyla gönderilen PROP'U yakalıyor (isim App.jsx'teki user= ile birebir eşleşmek zorunda)
const UserCard = ({user}) => {
  const avatar = user.name.charAt(0).toUpperCase(); // kullanıcı adının ilk harfini alıp büyük harfe çevir
  return (
    <div>
      <div>{avatar}</div>
      <h2>{user.name}</h2>
      <p>@{user.username}</p>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
      <p>Company: {user.company.name}</p>
      <p>Phone: {user.phone}</p>
    </div>
  )
}

export default UserCard
