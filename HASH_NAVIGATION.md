# Hash Navigation Entegrasyonu

Bu portfolio sitesi artık hash navigation kullanmaktadır. Bu sayede:

## Özellikler

### 1. Hash Router
- `BrowserRouter` yerine `HashRouter` kullanılıyor
- URL'ler `#` ile başlıyor (örn: `/#about`, `/#work`)
- Sayfa yenilemede hash korunuyor

### 2. Otomatik Scroll
- Sayfa yüklendiğinde hash varsa otomatik olarak o bölüme scroll yapılıyor
- Hash değişikliklerinde smooth scroll ile bölüme gidiliyor
- Sadece ana sayfada (`/`) hash navigation çalışıyor

### 3. Navigation Güncellemeleri
- Navigation menüsündeki tüm linkler hash navigation kullanıyor
- Logo tıklaması ana sayfaya dönüp hero bölümüne scroll yapıyor
- Mobile menü hash navigation ile uyumlu

### 4. Analytics Entegrasyonu
- Hash navigation ile birlikte analytics tracking çalışıyor
- Sayfa görüntülemeleri hash dahil olarak takip ediliyor

## Kullanım

### Hash Navigation Hook
```tsx
import { useHashNavigation } from '@/hooks/useHashNavigation';

const { scrollToSection } = useHashNavigation();

// Bölüme scroll yap ve hash'i güncelle
scrollToSection('about');
```

### Utility Fonksiyonlar
```tsx
import { 
  scrollToHash, 
  updateHash, 
  getCurrentHash 
} from '@/lib/hashNavigation';

// Hash'e scroll yap
scrollToHash('work');

// Hash'i güncelle
updateHash('experience');

// Mevcut hash'i al
const currentHash = getCurrentHash();
```

## Navigation Yapısı

### Ana Sayfa Bölümleri (Normal Scroll, Hash Yok)
Bu bölümler ana sayfa içinde bulunur ve normal scroll yapılır:

- **Home** → Hero bölümüne smooth scroll
- **About** → About bölümüne smooth scroll  
- **Experience** → Experience bölümüne smooth scroll
- **Contact** → Contact bölümüne smooth scroll

### Pages Klasöründeki Sayfalar (Hash Routing)
Bu sayfalar ayrı route'lara sahiptir ve hash routing kullanır:

- **Work** → `/work` sayfasına git
- **Writings** → `/writings` sayfasına git
- **Need Website** → `/site` sayfasına git

## Teknik Detaylar

### Router Yapısı
- Ana sayfa: `/` (Home, About, Experience, Contact bölümleri)
- Work sayfası: `/work` (ayrı sayfa)
- Writings sayfası: `/writings` (ayrı sayfa)
- Site services: `/site` (ayrı sayfa)

### Navigation Davranışı
- **Ana sayfa bölümleri**: Sadece scroll yapılır, hash güncellenmez
- **Ayrı sayfalar**: Hash routing ile sayfa değişimi
- **Cross-page navigation**: Ayrı sayfalardan ana sayfa bölümüne gitme

### Scroll Davranışı
- Smooth scroll ile bölüme gidiliyor
- 300ms gecikme ile sayfa tamamen yüklendikten sonra scroll yapılıyor
- Hash değişikliklerinde otomatik scroll

### Browser Uyumluluğu
- Modern tarayıcılarda tam destek
- Hash değişikliklerinde `hashchange` event kullanılıyor
- Fallback olarak manuel scroll da mevcut
