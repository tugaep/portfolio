
import React, { createContext, useContext, useState } from 'react';

interface LanguageContextType {
  language: 'tr' | 'en';
  setLanguage: (lang: 'tr' | 'en') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  tr: {
    // Navigation
    'nav.home': 'ana sayfa',
    'nav.about': 'hakkımda',
    'nav.work': 'çalışmalar',
    'nav.experience': 'deneyim',
    'nav.writings': 'yazılar',
    'nav.contact': 'iletişim',
    'nav.needWebsite': 'website mi lazım?',
    
    // Site Services
    'site.title': 'website mi lazım?',
    'site.description': 'modern, hızlı ve kullanıcı dostu web siteleri tasarlıyorum',
    'site.services.design.title': 'modern tasarım',
    'site.services.design.description': 'kullanıcı deneyimini ön planda tutan tasarımlar',
    'site.services.development.title': 'güçlü geliştirme',
    'site.services.development.description': 'performanslı ve ölçeklenebilir web uygulamaları',
    'site.services.ux.title': 'kullanıcı deneyimi',
    'site.services.ux.description': 'sezgisel ve etkileyici kullanıcı arayüzleri',
    'site.previousWork.title': 'önceki çalışmalarım',
    'site.previousWork.viewSite': 'siteyi görüntüle',
    'site.cta.title': 'projenizi hayata geçirelim',
    'site.cta.contact': 'iletişime geç',
    'site.cta.learnMore': 'daha fazla bilgi',
    'site.email.subject': 'Website Teklifi',
    'site.email.body': 'Merhaba,\n\nWebsite yaptırmak istiyorum bilgi alabilir miyim?.',
    
    // Hero Section
    'hero.greeting': 'merhaba, ben',
    'hero.name': 'tuğrap efe dikpınar',
    'hero.age_location': '21 · istanbul, türkiye',
    'hero.tagline': 'yaratıcı ve teknik kıvılcımlar etrafında inşa eden biri.',
    'hero.status': 'bilgisayar mühendisliği son sınıf öğrencisi',
    'hero.roles': 'ÜNOG direktörü · orbit\'in kurucusu',
    'hero.cta': 'çalışmalarımı gör',
    'hero.contact': 'iletişime geç',
    'hero.getintouch': '→ iletişime geç',
    'hero.seework': '→ ne üzerinde çalışıyorum',
    'hero.writings': '→ yazılarım',
    
    // About Section
    'about.title': 'kim olduğum',
    'about.description.part1': 'yaratıcı ve teknik unsurlar etrafında inşa etmekte gelişen biriyim. kendi tarzımda yaratmaktan keyif alıyorum.',
    'about.description.part2': 'bunun dışında, her şeyden biraz var; adventure time\'a bayılıyorum. iskambil destesi koleksiyonum var, rahatlamak için lego setleri yapıyorum ve hala bir kaykaycının ruhunu taşıyorum. sıfır yeteneğim olduğunu düşüsem etsem de çizim yapmayı seviyorum ve piksel sanat deniyorum. daha önce game jam\'lere katıldım ve her seferinde, aklındaki bir fikri insanların gerçekten hissedebileceği ve deneyimleyebileceği bir şeye dönüştürme fikrine daha da bağımlı hale geliyorum.',
    'about.description.part3': 'ayrıca ömür boyu spiderman\'ci oldum, muhtemelen gerektiğinden daha fazla şekersiz redbull içiyorum ve oyun teorisi hakkında gereğincen çok heyecanlanıyorum. favori grubum the strokes, ancaj favori albümüm frank ocean\'ın blonde\'u ve o albümdeki self control de her zaman favorim olacak tür olarak ise hyperpop dinlemeye bayılıyorum. favori filmim? şimdilik muhtemelen napoleon dynamite. enchiridion da tekrar tekrar okuduğum bir kitap. ayrıca güncelleme ben10\'daki en havalı uzaylı.',
    'about.description.part4': 'insanların birbirinden öğrenebileceği ortamları desteklemekten keyif alıyorum. bu github\'ın özelliklerini öğretmekten ve insanların paylaşabileceği platformlar yaratmaktan, karmaşıklığı basitleştirmeyi ve bilgiyi işbirlikçi ve kullanışlı bir şeye dönüştürmeye kadar uzanıyor.',
    'about.description.part5': 'bununla birlikte, gereksiz bürokrasi, performatif iş veya katılımı zorlaştıran sistemlerin karşısındayım diyebilirim. ayrıca yavaş yürüyenler, turuncudan ve ketçaptan nefret ediyorum.',

    'about.quote': '"kupa dediğin boş bir kasedir" — doc hudson',
    'about.downloadCV': 'cv\'mi indir',
    
    
    // Experience
    'experience.section.title': 'deneyimlerim',
    'experience.present': 'şu an',
    
    // Professional Experience
    'experience.title': 'profesyonel deneyim',
    'experience.firefly.title': 'firefly — operasyon & strateji stajyeri',
    'experience.firefly.description': 'taksi üstü dijital ekranlara odaklanan akıllı reklam girişimi',
    'experience.firefly.period': 'mayıs 2025 - şu an',
    'experience.firefly.achievement1': 'operasyonel süreçlerin iyileştirilmesi ve stratejik analiz',
    'experience.firefly.achievement2': 'dijital reklam kampanyalarının performans takibi',
    'experience.firefly.achievement3': 'iç operasyonlar için model eğitimi',
    'experience.dogus.title': 'doğuş hospitality & retail — it stajyeri',
    'experience.dogus.description': 'türkiye\'nin önde gelen turizm markalarından birinde it operasyonları',
    'experience.dogus.period': 'aralık 2024 - mart 2025',
    'experience.dogus.achievement1': 'veri temizliği ve microsoft 365 altyapısına geçişte yardım',
    'experience.dogus.achievement2': 'veritabanı yönetimi ve raporlama süreçleri',
    'experience.dogus.achievement3': 'kategori için dil modelleri eğitimi',
    'experience.unog.title': 'ÜNOG oyun geliştirici topluluğu — direktör',
    'experience.unog.description': 'türkiye\'nin en büyük oyun geliştirici topluluğu',
    'experience.unog.period': 'ocak 2025 - şu an',
    'experience.unog.achievement1': 'toplum etkinlikleri ve organizasyonlarının yönetimi',
    'experience.unog.achievement2': 'stratejik ortaklıkların kurulması ve sürdürülmesi',
    'experience.unog.achievement3': '6,000+ üyeli toplulukta gönüllü sistemlerinin geliştirilmesi',
    
    // Work
    'work.title': 'öne çıkan çalışmalar',
    'work.subtitle': 'yaratıcı ve teknik projelerim',
    'work.otherProjects': 'diğer projeler',
    'work.visitSite': '→',
    'work.seeMore': 'daha fazla gör',
    'work.allProjects': 'tüm projeler',
    'work.viewProject': 'projeyi gör',
    'work.viewCode': 'kodu gör',
    'work.orbit.title': 'orbit',
    'work.orbit.description': 'akıllı günlük planlama uygulaması',
    'work.orbit.role': 'kurucu — uygulama şu an geliştirme ve erken yatırım aşamasında',
    'work.orbit.url': 'orbitapp.tech',
    'work.unog.title': 'ÜNOG',
    'work.unog.description': 'türkiye\'nin en büyük oyun geliştirici topluluğu',
    'work.unog.role': 'direktör rolü — etkinlikler, operasyonlar ve ortaklıkları yönetme',
    'work.unog.tools': 'özel discord araçları ve gönüllü sistemleri geliştirdim',
    'work.unog.scale': 'discord yasağına rağmen türkiye genelinde 6,000+ üyeye ulaştık',
    'work.unog.url': 'unog.dev',
    'work.cmp2204.title': 'cmp2204 p2p sohbet',
    'work.cmp2204.description': 'peer-to-peer sohbet uygulaması - bilgisayar ağları dersi projesi',
    'work.educationalapp.title': 'eğitici çocuk uygulaması',
    'work.educationalapp.description': 'çocuklar için eğitici android uygulaması - ileri programlama dersi',
    'work.jambot.title': 'online game jam bot',
    'work.jambot.description': 'game jam etkinlikleri için discord botu - otomatik ekip eşleştirme',
    // Writings
    'writings.title': 'yazılarım',
    'writings.readMore': 'devamını oku',
    
    // Contact
    'contact.title': 'iletişime geçelim',
    'contact.email': 'bana bir e-posta gönder',
    'contact.linkedin': 'linkedin',
    'contact.github': 'github',
    'contact.connect': 'bağlantı kur',
    'contact.cta.title': 'konuşalım!',
    'contact.cta.description': 'yeni projeler, yaratıcı fikirler hakkında ya da canınız sıkılırsa bana ulaşabilirsiniz.',
    'contact.cta.button': 'bana bir e-posta gönder',
    
    // Writings
    
    'writings.comingSoon': 'yakında',
    
    'writings.motivationalMessage': 'farklı konular hakkında kendi görüşlerimi paylaşacağım ufak bir alan',
    
    // Footer
    'footer.made': 'made with',
    'footer.summary': 'yaratıcı ve teknik kıvılcımlar etrafında inşa eden biri.',
  },
  en: {
    // Navigation
    'nav.home': 'home',
    'nav.about': 'about',
    'nav.work': 'work',
    'nav.experience': 'experience',
    'nav.writings': 'writings',
    'nav.contact': 'contact',
    'nav.needWebsite': 'need a website?',
    
    // Site Services
    'site.title': 'need a website?',
    'site.description': 'i design modern, fast, and user-friendly websites.',
    'site.services.design.title': 'modern design',
    'site.services.design.description': 'designs focused on user experience',
    'site.services.development.title': 'strong development',
    'site.services.development.description': 'performant and scalable web applications',
    'site.services.ux.title': 'user experience',
    'site.services.ux.description': 'intuitive and engaging user interfaces',
    'site.previousWork.title': 'my previous work',
    'site.previousWork.viewSite': 'view site',
    'site.cta.title': 'bring your project to life',
    'site.cta.description': 'let\'s create something amazing together.',
    'site.cta.contact': 'get in touch',
    'site.email.subject': 'Website Offer',
    'site.email.body': 'Hello,\n\nI would like to get information about having a website made.',
    
    
    // Hero Section
    'hero.greeting': 'hello, i\'m',
    'hero.name': 'tuğrap efe dikpınar',
    'hero.age_location': '21 · istanbul, türkiye',
    'hero.tagline': 'someone who builds around creative and technical sparks.',
    'hero.status': 'senior computer engineering student',
    'hero.roles': 'director @ ÜNOG · founder of orbit',
    'hero.cta': 'view my work',
    'hero.contact': 'get in touch',
    'hero.getintouch': '→ get in touch',
    'hero.seework': '→ see what i\'m working on',
    'hero.writings': '→ my writings',
    
    // About Section
    'about.title': 'who i am',
    'about.description.part1': 'i\'m someone who thrives on building around creative and technical stuff. i find joy in creating in my own way.',
    'about.description.part2': 'outside of that, i\'m into a little bit of everything: i love adventure time. i have a collection of playing card decks, build lego sets to relax, and still carry a skater\'s spirit. i love sketching even if i claim to have zero talent, and i\'ve been slowly getting the hang of pixel art. i\'ve participated in game jams and every time, i get more hooked on the process of turning an idea from your mind into something people can actually feel and experience.',
    'about.description.part3': 'i\'m also a life-long spiderman fan, i drink more sugar-free redbull than i probably should, and i get way too excited about discussions on game theory. my favorite band is the strokes, but my favorite album is blonde by frank ocean and self control from that album will be always my favorite. my fav movie? probably napoleon dynamite for now. enchiridion is still the book i come back to the most. also update is the coolest alien in ben10.',
    'about.description.part4': 'i enjoy fostering environments where people can learn from each other. this spans from teaching github workflows and creating platforms that people can share, i love simplifying complexity and turning knowledge into something collaborative and useful.',
    'about.description.part5': 'that said, i\'m not a fan of unnecessary bureaucracy, performative work or systems that make participation harder. i also hate slow walkers, colour orange or ketchup.',
 
    'about.quote': '"just promise to plant me there." — fern mertens',
    'about.downloadCV': 'download my resume',

    
    // Experience
    'experience.section.title': 'my experience',
    'experience.present': 'present',
    
    // Professional Experience
    'experience.title': 'professional experience',
    'experience.firefly.title': 'firefly — operations & strategy intern',
    'experience.firefly.description': 'a smart advertising startup focused on taxi-top digital screens',
    'experience.firefly.period': 'may 2025 - present',
    'experience.firefly.achievement1': 'operational process improvement and strategic analysis',
    'experience.firefly.achievement2': 'performance tracking of digital advertising campaigns',
    'experience.firefly.achievement3': 'model training for internal operations',
    'experience.dogus.title': 'doğuş hospitality & retail — it intern',
    'experience.dogus.description': 'it operations at one of türkiye\'s top hospitality brands',
    'experience.dogus.period': 'dec 2024 - mar 2025',
    'experience.dogus.achievement1': 'data cleaning and migration to microsoft 365 infrastructure',
    'experience.dogus.achievement2': 'database management and reporting processes',
    'experience.dogus.achievement3': 'model training for category-specific language models',
    'experience.unog.title': 'ÜNOG game developer community — director',
    'experience.unog.description': 'biggest game dev community in türkiye',
    'experience.unog.period': 'jan 2025 - present',
    'experience.unog.achievement1': 'management of community events and organizations',
    'experience.unog.achievement2': 'establishment and maintenance of strategic partnerships',
    'experience.unog.achievement3': 'development of volunteer systems for 6,000+ members',
    
    // Work
    'work.title': 'featured work',
    'work.subtitle': 'my creative and technical projects',
    'work.otherProjects': 'other projects',
    'work.visitSite': '→',
    'work.seeMore': 'see more',
    'work.allProjects': 'all projects',
    'work.viewProject': 'view project',
    'work.viewCode': 'view code',
    'work.orbit.title': 'orbit',
    'work.orbit.description': 'a smart daily planning app',
    'work.orbit.role': 'founder — app is currently in development and early investment stage',
    'work.orbit.url': 'orbitapp.tech',
    'work.unog.title': 'ÜNOG',
    'work.unog.description': 'biggest game dev community in türkiye',
    'work.unog.role': 'director role — leading events, operations, and partnerships',
    'work.unog.tools': 'built custom discord tools & volunteer systems',
    'work.unog.scale': 'scaled to 6,000+ members nationwide, despite the discord ban',
    'work.unog.url': 'unog.dev',
    'work.cmp2204.title': 'cmp2204 p2p chat',
    'work.cmp2204.description': 'peer-to-peer chat application - computer networks course project',
    'work.educationalapp.title': 'educational kid app',
    'work.educationalapp.description': 'educational android app for children - advanced programming course',
    'work.jambot.title': 'online game jam bot',
    'work.jambot.description': 'discord bot for game jam events - automated team matching',
    'work.jambot.tech': 'Python, Discord.py, SQLite',
    'work.pricedm.title': 'price detection model',
    'work.pricedm.description': 'machine learning price detection model - ITU project',
    'work.pricedm.tech': 'Python, Machine Learning, Data Analysis',
    
    // Writings
    'writings.title': 'my writings',
   
    'writings.motivationalMessage': 'a little space for my thoughts on different topics',
    
    // Contact
    'contact.title': 'let\'s connect',
    'contact.email': 'send email',
    'contact.linkedin': 'linkedin',
    'contact.github': 'github',
    'contact.connect': 'connect',
    'contact.cta.title': 'let\'s start a conversation',
    'contact.cta.description': 'i\'m always excited to talk about new projects, creative ideas, or if you just want to chat.',
    'contact.cta.button': 'send me an email',
    
    // Footer
    'footer.made': 'made with',
    'footer.summary': 'someone who builds around creative and technical sparks.',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<'tr' | 'en'>('en');
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['tr']] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
