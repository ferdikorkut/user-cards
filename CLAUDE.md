# User Cards

Öğrenim amaçlı bir React projesi. Kullanıcı (proje sahibi) React öğreniyor ve kodu **kendisi yazıyor**.

## Çalışma kuralları

- **Kod yazma/düzenleme yapma.** Kullanıcı açıkça "yap" demediği sürece dosyalara dokunma. Sadece açıklama yap, yön göster, soruları cevapla.
- Kullanıcı "commit et ve push et" dediğinde: önce son commit'ten beri yapılan değişiklikleri incele, değişen koda ne yapıldığını/neden yapıldığını açıklayan yorum satırları ekle, açıklayıcı bir commit mesajı yaz, sonra commit + push yap.

## Proje hedefi

Kullanıcı rehberi uygulaması:
- `https://jsonplaceholder.typicode.com/users` adresinden kullanıcıları çeker
- Her kullanıcıyı bir kart içinde gösterir
- Arama kutusuyla isme/e-postaya göre filtreler
- Listelenen kullanıcı sayısını gösterir

## Stack

- Vite + React (JavaScript, TypeScript değil)
- Düz CSS (CSS Modules / styled-components yok)
- ESLint

## Durum

- İskelet (scaffold) commit edildi (`0577403`), ardından ESLint/config güncellemeleri (`be03f41`).
- `src/App.jsx`: `useState` + `useEffect` ile `API_URL`'den kullanıcılar çekiliyor, `users` state'inde tutuluyor. `users.map()` ile her kullanıcı için bir `UserCard` render ediliyor (`key`/`user` prop'u geçiliyor). Başlık "Kullanıcı Rehberi".
- `src/components/UserCard.jsx`: `user` prop'unu alıyor; isim baş harfinden avatar, `name`, `username`, `email`, `address.city`, `company.name`, `phone` gösteriyor.
- `src/App.css` şu an boş.
- Arama kutusu ve kullanıcı sayısı henüz yok — sıradaki adım bu.
