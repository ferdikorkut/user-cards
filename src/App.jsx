import React, { useEffect, useState } from 'react';
import './App.css';
import UserCard from './components/UserCard.jsx';

const API_URL = 'https://jsonplaceholder.typicode.com/users';


const App = () => {

// users: API'den gelen kullanıcı listesini tutan state, başlangıçta boş dizi
const [users, setUsers] = useState([]);

// [] bağımlılık dizisi: bu effect sadece component ilk açıldığında BİR KERE çalışır
useEffect(() => {
  fetch(API_URL)
    .then(response => response.json()) // ham cevabı JSON'a çevir
    .then(data => setUsers(data)) // gelen veriyi users state'ine kaydet, bu da re-render tetikler
    .catch(error => console.error('Error fetching data:', error)); // istek başarısız olursa hatayı konsola yaz
}, []);

console.log(users); // state'in her render'daki anlık değerini görmek için (debug amaçlı)

  return (
<>
<h1>User Cards</h1>
{users.map(user => (
  // user: users dizisindeki TEK BİR ELEMAN (geçici isim, sadece bu .map() içinde geçerli, UserCard tarafı bunu görmez)
  // key: React'in listedeki her elemanı ayırt etmek için kullandığı ÖZEL prop, UserCard'a normal prop olarak gitmez
  // user=: UserCard'a gönderilen PROP'UN ADI (sol taraf) — UserCard.jsx'teki {user} ile birebir eşleşmek zorunda
  <UserCard key={user.id} user={user} />
))}
</>
  )
}

export default App