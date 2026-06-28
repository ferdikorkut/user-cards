import React from 'react';

// {user}: App.jsx'ten "user" adıyla gönderilen PROP'U yakalıyor (isim App.jsx'teki user= ile birebir eşleşmek zorunda)
const UserCard = ({user}) => {
  const avatar = user.name.charAt(0).toUpperCase(); // kullanıcı adının ilk harfini alıp büyük harfe çevir
  return (
    <div className="user-card">
      <div className="user-card__avatar">{avatar}</div>
      <h2 className="user-card__name">{user.name}</h2>
      <p className="user-card__username">@{user.username}</p>
      <ul className="user-card__info">
        <li><span className="user-card__label">E-Posta</span>{user.email}</li>
        <li><span className="user-card__label">Şehir</span>{user.address.city}</li>
        <li><span className="user-card__label">Şirket</span>{user.company.name}</li>
        <li><span className="user-card__label">Telefon</span>{user.phone}</li>
      </ul>
    </div>
  )
}

export default UserCard
