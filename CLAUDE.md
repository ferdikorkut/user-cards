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
- Veri gelene kadar "Yükleniyor..." mesajı gösterir

## Stack

- Vite + React (JavaScript, TypeScript değil)
- Düz CSS (CSS Modules / styled-components yok)
- ESLint

## Durum

- İskelet (scaffold) commit edildi (`0577403`), ardından ESLint/config güncellemeleri (`be03f41`).
- `src/App.jsx`: `useState` ile `users`/`search`/`loading` state'leri; `useEffect` içinde `API_URL`'den fetch + `.finally()` ile `loading` kapatılıyor. `loading` true iken erken `return` ile sadece "Yükleniyor..." gösteriliyor. Sonrasında arama kutusu (`search-bar`), kullanıcı sayısı (`app__count`), boş sonuç mesajı (`durum`) ve `user-grid` içinde `UserCard` listesi render ediliyor.
- `src/components/UserCard.jsx`: `user` prop'unu alıyor; avatar, `name`, `username` ve `user-card__info` listesinde (`email`, `address.city`, `company.name`, `phone`) gösteriyor.
- `src/App.css`: genel reset, `.app`/`.app__header` düzeni, `.search-bar`, `.user-grid` (flexbox + `flex-wrap`, sabit 308px genişlikli `.user-card`'lar; son satırdaki eksik kartlar da `justify-content: center` ile satır bazında ortalanıyor), `.durum` ve `.loading-text` (başlıkla aynı boyut/kalınlık, gri renk).
- Kalan: arama/sayım/loading/kart tasarımı tamamlandı; ileride ek özellik istenirse buradan devam edilecek.
