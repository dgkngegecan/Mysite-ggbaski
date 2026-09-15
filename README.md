# Gegebaskı — 3B Baskı Hizmetleri

Eskişehir merkezli özel 3B baskı hizmeti. WhatsApp ve e-posta üzerinden model paylaşımı ve fiyat teklifi için tek sayfalık web sitesi.

## 🔗 Canlı Site

[site.ggbaski.com](https://site.ggbaski.com)

## Teknoloji

- Vanilla HTML / CSS / JavaScript
- GitHub Pages ile barındırma
- Frameworksüz, hızlı yükleme
- Sistem yazı tipleri; harici font veya JavaScript bağımlılığı yok
- Mobil gezinme, teknik ayrıntılar ve SSS için JavaScript olmadan da çalışan yerel HTML bileşenleri
- Sistem tercihine göre açık/koyu görünüm ve azaltılmış hareket desteği

## Dosyalar

- `index.html` — Tek sayfalık ana (ve tek) sayfa
- `styles.css` — Tasarım sistemi ve stiller
- `script.js` — Mobil menü klavye davranışları ve telif yılı
- `CNAME` — Özel alan adı ayarı
- `assets/` — Site simgesi ve güncel ekipman görselleri
- `webpage sources/` — Önceki görseller ve Masaüstü Ekibi logosu
- `docs/equipment-sources.md` — X2D, AMS 2 Pro ve tek makaralı Space Pi için doğrulanan bilgiler ve görsel kaynakları
- `docs/design-notes.md` — Tasarım kararları, renk kontrastları ve erişilebilirlik yaklaşımı

## Yerel önizleme

Proje klasöründe:

```sh
python -m http.server 4173 --bind 127.0.0.1
```

Tarayıcıda `http://127.0.0.1:4173` adresini açın. Derleme adımı gerekmez.

## İçerik notları

- Kişisel 8 yıllık 3B baskı deneyimi, girişte ve ayrı bir deneyim bölümünde anlatılır.
- Tüm siparişler, Eskişehir dahil, yalnızca kargoyla gönderilir. Sipariş başına en az 50 gram malzeme şartı ve alıcı ödemeli kargo bilgisi korunur.
- Masaüstü Ekibi’nin mevcut logosu, topluluk bölümünde adıyla birlikte gösterilir.
- Ekipman: **Bambu Lab X2D**, **AMS 2 Pro**, **Creality Space Pi (tek makara)**.
- Üretici görselleri gerçek Gegebaskı baskı örnekleri veya atölye fotoğrafları olarak sunulmaz.
- Teknik özellikler açılır ayrıntılarda; ana metin müşteriye sağlanan faydaya odaklanır.
- İletişim bağlantıları harici uygulamalara gider. Bu depoda ödeme, dosya yükleme veya otomatik fiyat hesaplama sistemi bulunmaz.
- GitHub Pages yayını için mevcut alan adı yapılandırması korunur; yerel dosya değişiklikleri tek başına canlı yayını güncellemez.
