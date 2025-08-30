# 🛍 LC Waikiki Cypress Testleri

Bu proje, LC Waikiki web sitesi için **Cypress** kullanılarak hazırlanmış örnek otomasyon testlerini içerir. Testler, site fonksiyonlarının doğru çalışıp çalışmadığını doğrulamak için hazırlanmıştır.

---

## 🚀 Test Senaryoları

### 1️⃣ Anasayfa Testi
- ✅ Sayfa yükleniyor mu?  
- ✅ Başlık doğru mu?

### 2️⃣ Kategori Navigasyonu
- ✅ Ana menüdeki kategoriler tıklanabiliyor mu?  
- ✅ Yönlendirme doğru sayfaya mı?

### 3️⃣ Arama Fonksiyonu
- ✅ Arama çubuğu çalışıyor mu?  
- ✅ Aranan ürün sonuçları listeleniyor mu?

### 4️⃣ Ürün Detay Sayfası
- ✅ Ürün listeden seçilip detay sayfasına gidilebiliyor mu?  
- ✅ “Sepete ekle” butonu görünür mü?

### 5️⃣ Register / Login Fonksiyonları
- ✅ Kayıt veya giriş sayfasına yönlendirme çalışıyor mu?

### 6️⃣ Sepet İşlemleri
- ✅ Ürün sepete eklenebiliyor mu?  
- ✅ Sepet sayfası açılıyor mu?

### 7️⃣ Register Input Kontrolleri / Sign Up Testi
- ✅ Kullanıcı LC Waikiki anasayfasından **Sign Up/Register** sayfasına yönlendirilir.  
- ✅ Email, telefon ve şifre input alanlarına veri girilir.  
- ✅ Bildirim tercihleri ve KVKK onayı işaretlenir.  
- ✅ Kayıt butonuna tıklanır.

> ⚠️ Canlı sitede gerçek kayıt yapılmamalıdır. Test sadece staging/mock ortamında çalıştırılmalıdır.

---

## 📌 Kullanılan Teknolojiler

- [Cypress](https://www.cypress.io/) – Test otomasyonu  
- JavaScript – Test ve POM yazımı  
- Page Object Model (POM) – Testlerin okunabilirliği ve bakımı için  

---

## ⚙️ Kurulum

1. Projeyi klonlayın:

```bash
git clone <repository-url>
cd lcw-cypress-tests
