// ==========================================
// 🍽️ QR MENU TEMPLATE - Restaurant Config
// ==========================================

import type {
  RestaurantInfo,
  Review,
  Offer,
  HeroContent,
  AboutContent,
  VideoConfig,
  CtaContent,
  SeoConfig,
  MapConfig,
} from "@/types"

// ─── Restaurant Identity (الهوية الأساسية) ─────────────
export const defaultInfo: RestaurantInfo = {
  name: "Ciğerci Mustafa Kemal",
  slogan: "🔥 Gaziantep'in En Lezzetli Ciğeri | 🥩 Ciğer Kavurma • Kebap Çeşitleri • Küşleme",
  description:
    "Tarihi atmosferimizde, geleneksel yöntemlerle hazırlanan eşsiz ciğer kavurma ve kebap çeşitlerimizi deneyimleyin. Şehitkamil'de, gece geç saatlere kadar hizmetinizdeyiz.",
  phone: "(0342) 232 25 35",
  whatsapp: "903422322535",
  address: "Yaprak, Kep Kep Sk. No:23, Eski stadyum karşısı Netgöz hastanesi yanı, 27080 Şehitkamil/Gaziantep",
  city: "Gaziantep",
  rating: 4.0,
  reviewCount: 1600,
  avgPrice: "$$",
  hours: "11:00 - 01:00",
  googleMapsUrl: "https://maps.google.com/?q=399H%2B5P+%C5%9Eehitkamil%2C+Gaziantep",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3183.5630764940706!2d37.379352460558415!3d37.06789392820896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e5c7c3e04fb9%3A0x371d18030a36300!2sCigerci%20Mustafa!5e0!3m2!1sar!2str!4v1774928899503!5m2!1sar!2str",
  services: ["İçeride servis", "Açık havada oturma", "Paket servisi", "Teslimat", "Temassız teslimat"],
  socialMedia: {
    instagram: "https://instagram.com/cigercimustafakemal",
    facebook: "",
    tiktok: "",
    youtube: "",
    email: "",
  },
  isOrderingEnabled: true,
}

// ─── Hero Section ────────────────────────────────────────
export const defaultHero: HeroContent = {
  badge: "4.0 Yıldız - 1600+ Değerlendirme",
  headline: "Gaziantep'in En Lezzetli Ciğeri",
  subheadline:
    "Geleneksel tarifler ve taze malzemelerle hazırlanan eşsiz kuzu şiş, pirzola ve ızgara ciğer lezzetlerini tarihi atmosferimizde keşfedin.",
}

// ─── About Section ───────────────────────────────────────
export const defaultAbout: AboutContent = {
  sectionTitle: "Hakkımızda",
  title: "Tarihi Atmosferde Üst Düzey Lezzetler",
  description:
    "Mekanımız eski ve tarihi yapısıyla hem iç hem de dış mekan oturma alanına sahiptir. Aileler ve gruplar için ideal bir ortam sunuyoruz. Çocuklara uygun alanlarımız, geniş menü seçeneklerimiz ve üst düzey hizmet anlayışımızla sizleri ağırlamaktan gurur duyuyoruz.",
  badge: "ciğerci mustafa kemal",
  features: [
    "Gece geç saate kadar hizmet",
    "Teras / Çatı katı oturma alanı",
    "Öğle ve Akşam yemeği servisi",
    "Ücretsiz otopark",
    "Tekerlekli sandalyeye uygun",
    "Çocuklara uygun ve aile dostu",
  ],
}

// ─── Video Section ───────────────────────────────────────
export const defaultVideo: VideoConfig = {
  videoSrc: "/video.mp4",
  title: "Ciğerci Mustafa Kemal'i Keşfedin",
  subtitle: "Lezzet Yolculuğumuz",
}

// ─── CTA Texts ───────────────────────────────────────────
export const defaultCta: CtaContent = {
  menuSectionTitle: "Eşsiz Lezzetlerimiz",
  menuSectionSubtitle: "Izgara ciğer, kalkan kebabı, kuzu şiş ve çok daha fazlası",
  ctaBannerTitle: "Gaziantep'in Gerçek Lezzetini Tatmaya Ne Dersiniz?",
  ctaBannerSubtitle:
    "mutlu müşterimiz arasına katılın. Sizleri de ağırlamaktan memnuniyet duyarız.",
  menuCtaTitle: "Tam Menümüzü Keşfedin",
  menuCtaSubtitle:
    "Özenle hazırlanan ızgara çeşitlerimizi ve Antep spesiyallerimizi incelemek için hemen menümüze göz atın.",
}

// ─── Map Config ──────────────────────────────────────────
export const defaultMap: MapConfig = {
  address: "Yaprak, Kep Kep Sk. No:23 (veya 27), Eski stadyum karşısı Netgöz hastanesi yanı, 27080 Şehitkamil/Gaziantep",
  googleMapsUrl: "https://maps.google.com/?q=399H%2B5P+%C5%9Eehitkamil%2C+Gaziantep",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3183.5630764940706!2d37.379352460558415!3d37.06789392820896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e5c7c3e04fb9%3A0x371d18030a36300!2sCigerci%20Mustafa!5e0!3m2!1sar!2str!4v1774928899503!5m2!1sar!2str",
  services: ["Ücretsiz otopark", "Tekerlekli sandalyeye uygun", "Paket Servisi", "Teslimat"],
}

// ─── SEO Config ──────────────────────────────────────────
export const defaultSeo: SeoConfig = {
  websiteUrl: "https://cigerci-mustafa-kemal.web.app",
  titleDefault: "Ciğerci Mustafa Kemal | Gaziantep'in En Lezzetli Ciğeri",
  titleTemplate: "%s | Ciğerci Mustafa Kemal",
  description:
    "Gaziantep'in en lezzetli ciğeri ve ızgara çeşitleri. Tarihi atmosferde, kuzu şiş, pirzola ve benzersiz ciğer kavurma keyfi.",
  keywords: ["ciğer", "gaziantep ciğerci", "kebap", "küşleme", "mustafa kemal ciğerci", "gaziantep restoran"],
  ogImage: "/yemek.png",
  locale: "tr_TR",
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Ciğerci Mustafa Kemal",
    servesCuisine: ["Türk Mutfağı", "Kebap"],
    priceRange: "$$",
  },
}

// ─── Reviews (Gerçek Yorumlar) ───────────────────────────
export const reviews: Review[] = [
  {
    id: "1",
    name: "Muhammed Al-Şairi",
    rating: 4,
    text: "Gaziantep'te birçok şubesi bulunan, tanınmış ve temiz bir restoran. Tavuk, kebap ve ciğer gibi ızgara yemekler sunuyor. Özellikle eşsiz ciğer tarifiyle ünlü.",
    date: "1 yıl önce",
    reviewCount: "Yerel Rehber",
  },
  {
    id: "2",
    name: "Diaa El-Din Ahmed Farhan",
    rating: 5,
    text: "Mükemmel hizmet sunan, üst düzey bir restoran.",
    date: "7 ay önce",
    reviewCount: "Misafir",
  },
  {
    id: "3",
    name: "Azez Fhd",
    rating: 5,
    text: "Mekan eski ve hem iç hem de dış mekan oturma alanına sahip. Yemekler çok lezzetli. Izgara ciğer ve kuzu pirzola denedim, fiyat da mükemmeldi.",
    date: "1 yıl önce",
    reviewCount: "Misafir",
  },
  {
    id: "4",
    name: "İbrahim Halife Halife",
    rating: 5,
    text: "Genel temizlik ve sunulan yemekler açısından mükemmel; et çok kaliteli ve fiyatlar oldukça makul.",
    date: "4 yıl önce",
    reviewCount: "Misafir",
  },
  {
    id: "5",
    name: "moonamoor 262",
    rating: 5,
    text: "Lezzetli yemekler... eşsiz, geleneksel bir atmosfer.",
    date: "3 yıl önce",
    reviewCount: "Yerel Rehber",
  },
  {
    id: "6",
    name: "cihan turgut",
    rating: 5,
    text: "Birçok yere kıyasla porsiyonlar oldukça büyük ve hatta ücretsiz yan yemekler bile sunuyorlar. Fiyatlar da aşırı pahalı değil. Yemeklere gelince, gerçekten çok lezzetliydi.",
    date: "3 ay önce",
    reviewCount: "Misafir",
  },
]

// ─── Offers (Varsayılan) ─────────────────────────────────
export const offers: Offer[] = [
  // {
  //   id: "1",
  //   title: "Akşam Ziyafeti",
  //   description: "4 kişilik karışık ızgara ve içecekler",
  //   discount: "%10 İndirim",
  // },
  // {
  //   id: "2",
  //   title: "Paket Servis",
  //   description: "Tüm paket siparişlerde geçerli",
  //   discount: "Ücretsiz İçecek",
  // },
]

// ─── Navigation Links ────────────────────────────────────
export const navLinks = [
  { href: "/menu", label: "Menü" },
  { href: "/", label: "Ana Sayfa" },
]
