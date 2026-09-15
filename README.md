# Gegebaskı — 3B Baskı Hizmetleri

Gegebaskı’nın özel 3D baskı hizmetini ve kurucusunun 10 yıllık deneyimini tanıtan, müşteriyi model paylaşmaya ve fiyat teklifi almaya yönlendiren tek sayfalık web sitesi.

## 🔗 Canlı Site

[site.ggbaski.com](https://site.ggbaski.com)

## Teknoloji

- Vanilla HTML / CSS / JavaScript
- GitHub Pages ile barındırma
- Frameworksüz, hızlı yükleme
- Sistem yazı tipleri; harici font veya JavaScript bağımlılığı yok
- Mobil gezinme, teknik ayrıntılar ve SSS için JavaScript olmadan da çalışan yerel HTML bileşenleri
- Sistem tercihine göre açık/koyu görünüm ve azaltılmış hareket desteği
- Masaüstü fare kaydırmasında kısa yavaşlama; dokunma, klavye, yakınlaştırma ve iç kaydırma alanları için doğal tarayıcı davranışı

## Dosyalar

- `index.html` — Tek sayfalık ana (ve tek) sayfa
- `styles.css` — Tasarım sistemi ve stiller
- `script.js` — Mobil menü, masaüstü yumuşak kaydırma ve telif yılı
- `CNAME` — Özel alan adı ayarı
- `assets/` — Site simgesi, marka paylaşım görseli, topluluk logosu ve arşiv ekipman görselleri
- `webpage sources/` — Önceki görseller ve Masaüstü Ekibi logosu
- `docs/equipment-sources.md` — X2D, AMS 2 Pro ve tek makaralı Space Pi için doğrulanan bilgiler ve görsel kaynakları
- `docs/design-notes.md` — Tasarım kararları, renk kontrastları ve erişilebilirlik yaklaşımı
- `docs/hafta-sonu-buyume-plani.md` — Sıfırdan müşteri bulmak için pazar günü uygulanacak dört başlangıç görevi

## Yerel önizleme

Proje klasöründe:

```sh
python -m http.server 4173 --bind 127.0.0.1
```

Tarayıcıda `http://127.0.0.1:4173` adresini açın. Derleme adımı gerekmez.

## İçerik notları

- Kişisel 10 yıllık 3B baskı deneyimi, girişte ve ayrı bir deneyim bölümünde anlatılır.
- Makine mühendisliği arka planı, CAD ve mekanizma bilgisi; polimerler ve eklemeli imalat üzerine proje/tez araştırmaları, müşterinin parçasına sağladığı katkıyla anlatılır. Resmî uzmanlık veya sertifika iddiası yapılmaz.
- Türkiye’nin her yerine kargoyla gönderim yapılır. Sipariş başına en az 50 gram malzeme şartı ve alıcı ödemeli kargo bilgisi korunur.
- Masaüstü Ekibi’nin mevcut logosu, topluluk bölümünde adıyla birlikte gösterilir.
- Ekipman: **Bambu Lab X2D**, **AMS 2 Pro**, **Creality Space Pi (tek makara)**.
- Yazıcı, deneyim bölümünün ardından üretici görseli ve kısa bir müşteri faydası anlatımıyla gösterilir. Çift nozul, AMS 2 Pro ile renk geçişleri ve Space Pi ile filament hazırlığı özetlenir; baskı boyutları açılır ayrıntı alanındadır. Üretici mağazalarına yönlendirme yoktur.
- İlk ekranda hizmet, deneyim ve teklif alma seçenekleri bulunur. Hizmet bağlantıları müşterinin ihtiyacına göre hazırlanmış WhatsApp mesajlarını açar; mesajı müşteri gönderir.
- Sosyal paylaşım görseli Gegebaskı’yı ve 3D baskı hizmetini tanıtır. Düzenlenebilir kaynak `assets/gegebaski-social.svg`, kullanılan PNG ise `assets/images/gegebaski-social.png` dosyasıdır.
- İletişim bağlantıları harici uygulamalara gider. Bu depoda ödeme, dosya yükleme veya otomatik fiyat hesaplama sistemi bulunmaz.
- GitHub Pages yayını için mevcut alan adı yapılandırması korunur; yerel dosya değişiklikleri tek başına canlı yayını güncellemez.
