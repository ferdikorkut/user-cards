import React, { useEffect, useState } from 'react';
import './App.css';
import UserCard from './components/UserCard.jsx';

const API_URL = 'https://jsonplaceholder.typicode.com/users';


const App = () => {

// users: API'den gelen kullanıcı listesini tutan state, başlangıçta boş dizi
const [users, setUsers] = useState([]);
const [search, setSearch] = useState(''); // search: arama kutusunun değerini tutan state, başlangıçta boş string
// loading: fetch henüz bitmediyse true, internet yavaşken kullanıcıya geri bildirim vermek için
const [loading, setLoading] = useState(true);
// [] bağımlılık dizisi: bu effect sadece component ilk açıldığında BİR KERE çalışır
useEffect(() => {
  fetch(API_URL)
    .then(response => response.json()) // ham cevabı JSON'a çevir
    .then(data => setUsers(data)) // gelen veriyi users state'ine kaydet, bu da re-render tetikler
    .catch(error => console.error('Error fetching data:', error)) // istek başarısız olursa hatayı konsola yaz
    .finally(() => setLoading(false)); // başarılı da olsa hatalı da olsa, sonunda yükleme bitti say
}, []);

// loading true iken diğer hook'lardan (useState/useEffect) sonra, ama JSX'ten önce
// erken çıkış yapılıyor — arama kutusu ve kartlar veri gelmeden hiç render edilmiyor
if (loading) {
  return <h1 className="loading-text">Yükleniyor...</h1>;
}

// console.log(users); // state'in her render'daki anlık değerini görmek için (debug amaçlı)
const filteredUsers = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase())); // search kutusuna yazılan değeri küçük harfe çevirip, kullanıcı adlarında ve e-posta adreslerinde arama yap

// console.log(filteredUsers); // filtrelenmiş kullanıcı listesini görmek için (debug amaçlı)



  return (
// className değerleri App.css'teki seçicilerle eşleşiyor: .app, .app__header,
// .app__count, .search-bar, .durum, .user-grid (isimler birebir aynı olmak zorunda)
<div className="app">
<div className="app__header">
  <h1>Kullanıcı Rehberi</h1>
  <p className="app__count">{filteredUsers.length} kullanıcı listeleniyor</p>
  <input
    className="search-bar"
    type="text"
    placeholder="İsim veya E-Posta ile ara..."
    value={search} // input'un değeri search state'ine bağlı
    onChange={e => setSearch(e.target.value)} // input değiştiğinde search state'ini güncelle
  />
</div>

{/* durum: liste boşken gösterilen mesaj, App.css'te ortalanmış/boşluklu stil verilmiş */}
{filteredUsers.length === 0 && <p className="durum">Aradığınız kriterlere uygun kullanıcı bulunamadı.</p>}

{/* user-grid: App.css'te sabit 308px genişlikli, ortalanmış grid düzeni tanımlı */}
<div className="user-grid">
  {filteredUsers.map(user => (
    // user: filteredUsers dizisindeki TEK BİR ELEMAN (geçici isim, sadece bu .map() içinde geçerli, UserCard tarafı bunu görmez)
    // key: React'in listedeki her elemanı ayırt etmek için kullandığı ÖZEL prop, UserCard'a normal prop olarak gitmez
    // user=: UserCard'a gönderilen PROP'UN ADI (sol taraf) — UserCard.jsx'teki {user} ile birebir eşleşmek zorunda
    <UserCard key={user.id} user={user} />
  ))}
</div>
</div>
  )
}

export default App