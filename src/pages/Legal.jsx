import React from 'react';

const LegalContainer = ({ title, children }) => (
  <div style={{ padding: '10rem 5% 6rem', maxWidth: '900px', margin: '0 auto' }}>
    <h1 style={{ color: '#fff', fontSize: '3rem', fontWeight: 800, marginBottom: '2rem', letterSpacing: '-0.04em' }}>
      {title}
    </h1>
    <div style={{
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid rgba(255,255,255,0.05)',
      borderRadius: '24px',
      padding: '3rem',
      color: '#bbb',
      lineHeight: 1.8,
      fontSize: '1.05rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    }}>
      {children}
      <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        İletişim: <a href="mailto:cozulemezmusicgroup@gmail.com" style={{ color: '#fff', textDecoration: 'none' }}>cozulemezmusicgroup@gmail.com</a>
      </div>
    </div>
  </div>
);

const H = ({ children }) => <h3 style={{ color: '#fff', fontSize: '1.4rem', marginTop: '1.5rem', marginBottom: '0.5rem', fontWeight: 600 }}>{children}</h3>;
const P = ({ children }) => <p style={{ margin: 0 }}>{children}</p>;
const UL = ({ children }) => <ul style={{ margin: 0, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>{children}</ul>;

export const PrivacyPolicy = () => (
  <LegalContainer title="Gizlilik Politikası">
    <P><strong>Son Güncelleme:</strong> 3 Temmuz 2026</P>
    <P>Cozulemez Music Group A.Ş. ("Şirket", "Biz", "Bizi" veya "Bizim") olarak, gizliliğinize büyük önem veriyoruz. Bu Gizlilik Politikası, hizmetlerimizi kullanırken kişisel verilerinizin nasıl toplandığını, kullanıldığını, paylaşıldığını ve korunduğunu açıklar.</P>
    
    <H>1. Topladığımız Bilgiler</H>
    <UL>
      <li><strong>Kişisel Tanımlayıcı Bilgiler:</strong> Adınız, soyadınız, e-posta adresiniz, telefon numaranız, adresiniz vb.</li>
      <li><strong>Sanatçı Bilgileri:</strong> Sahne adı, biyografi, sosyal medya hesapları (Spotify, YouTube, Instagram vb.) ve dinleyici istatistikleri.</li>
      <li><strong>Teknik Veriler:</strong> IP adresi, tarayıcı türü, cihaz bilgileri, çerezler ve kullanım istatistikleri.</li>
    </UL>

    <H>2. Bilgilerin Kullanım Amacı</H>
    <P>Topladığımız bilgileri aşağıdaki amaçlarla kullanmaktayız:</P>
    <UL>
      <li>Müzik dağıtım hizmetlerimizi sağlamak ve geliştirmek.</li>
      <li>Sanatçı başvurularını değerlendirmek ve onay süreçlerini yönetmek.</li>
      <li>Sizinle iletişim kurmak ve destek taleplerinize yanıt vermek.</li>
      <li>Yasal yükümlülüklerimizi yerine getirmek.</li>
    </UL>

    <H>3. Bilgi Paylaşımı ve İfşa</H>
    <P>Kişisel verileriniz, yasal zorunluluklar veya hizmet gereklilikleri dışında üçüncü şahıslarla paylaşılmaz. Müziğinizin dağıtımı amacıyla gerekli olduğu ölçüde dijital platformlarla (Spotify, Apple Music vb.) gerekli bilgileriniz paylaşılır.</P>

    <H>4. Veri Güvenliği</H>
    <P>Bilgilerinizin güvenliği bizim için önemlidir. Verilerinizi yetkisiz erişime, değiştirilmeye veya ifşa edilmeye karşı korumak için endüstri standardı güvenlik önlemleri almaktayız.</P>
  </LegalContainer>
);

export const TermsOfUse = () => (
  <LegalContainer title="Kullanım Şartları">
    <P><strong>Son Güncelleme:</strong> 3 Temmuz 2026</P>
    <P>Bu Kullanım Şartları, Cozulemez Music Group A.Ş. tarafından sunulan hizmetlerin kullanımını düzenler. Web sitemizi veya hizmetlerimizi kullanarak bu şartları kabul etmiş sayılırsınız.</P>
    
    <H>1. Hizmetlerin Kullanımı</H>
    <P>Hizmetlerimiz yalnızca yasal amaçlar için kullanılabilir. Kullanıcılar, hizmetlerimizi kullanırken yürürlükteki tüm yerel, ulusal ve uluslararası yasalara uymayı kabul eder.</P>

    <H>2. Fikri Mülkiyet Hakları</H>
    <P>Platformumuza yüklenen müzik eserlerinin telif hakları sanatçıya veya lisans sahibine aittir. Kullanıcı, yüklediği içeriklerin tüm haklarına sahip olduğunu veya gerekli izinleri aldığını garanti eder.</P>

    <H>3. Kullanıcı Yükümlülükleri</H>
    <UL>
      <li>Yanlış, yanıltıcı veya başkalarının haklarını ihlal eden bilgiler sağlamamak.</li>
      <li>Sistemin işleyişini bozacak kötü niyetli yazılımlar kullanmamak.</li>
      <li>Üçüncü şahısların telif haklarını ihlal eden içerikler yüklememek.</li>
    </UL>

    <H>4. Sorumluluğun Sınırlandırılması</H>
    <P>Cozulemez Music Group A.Ş., hizmetlerin kesintisiz veya hatasız olacağını garanti etmez. Platformun kullanımından doğabilecek doğrudan veya dolaylı zararlardan sorumlu tutulamaz.</P>

    <H>5. Şartlarda Değişiklik</H>
    <P>Şirket, bu Kullanım Şartları'nı önceden haber vermeksizin dilediği zaman güncelleme hakkını saklı tutar.</P>
  </LegalContainer>
);

export const CopyrightNotice = () => (
  <LegalContainer title="Telif Bildirimi">
    <P>Cozulemez Music Group A.Ş., telif haklarına ve fikri mülkiyet haklarına büyük saygı duymakta ve kullanıcılarından da aynı özeni göstermelerini beklemektedir.</P>

    <H>Telif Hakkı İhlali Bildirimi</H>
    <P>Eğer size ait olan veya yetkili olduğunuz bir eserin, platformumuzda telif hakkınızı ihlal edecek şekilde kullanıldığını düşünüyorsanız, lütfen aşağıdaki bilgileri içeren bir bildirimde bulunun:</P>
    <UL>
      <li>İhlal edildiği iddia edilen telif hakkı sahibinin veya yetkili temsilcisinin elektronik veya fiziksel imzası.</li>
      <li>İhlal edildiği iddia edilen eserin tanımı ve platformdaki konumu (URL veya ekran görüntüsü).</li>
      <li>Adınız, adresiniz, telefon numaranız ve e-posta adresiniz.</li>
      <li>Söz konusu kullanımın telif hakkı sahibi veya yasa tarafından izin verilmediğine dair iyi niyetli bir inancınız olduğuna dair beyan.</li>
    </UL>

    <H>Yaptırımlar</H>
    <P>Tekrar eden telif ihlallerinde bulunan kullanıcıların hesapları sonlandırılabilir ve yükledikleri içerikler platformdan kalıcı olarak kaldırılır.</P>
  </LegalContainer>
);

export const CookiePolicy = () => (
  <LegalContainer title="Çerez Politikası">
    <P><strong>Son Güncelleme:</strong> 3 Temmuz 2026</P>
    <P>Cozulemez Music Group A.Ş. olarak, web sitemizin performansını artırmak ve size daha iyi bir kullanıcı deneyimi sunmak için çerezler (cookies) kullanmaktayız.</P>

    <H>Çerez Nedir?</H>
    <P>Çerezler, ziyaret ettiğiniz web siteleri tarafından cihazınıza (bilgisayar, tablet veya telefon) kaydedilen küçük metin dosyalarıdır.</P>

    <H>Kullandığımız Çerez Türleri</H>
    <UL>
      <li><strong>Zorunlu Çerezler:</strong> Web sitemizin temel işlevlerinin çalışması için kesinlikle gerekli olan çerezlerdir.</li>
      <li><strong>Performans ve Analiz Çerezleri:</strong> Sitemizin nasıl kullanıldığını analiz ederek, performansımızı artırmamıza yardımcı olan çerezlerdir.</li>
      <li><strong>İşlevsellik Çerezleri:</strong> Sitedeki tercihlerinizin hatırlanmasını sağlar (dil seçimi, tema vb.).</li>
    </UL>

    <H>Çerez Yönetimi</H>
    <P>Tarayıcınızın ayarlarını değiştirerek çerezleri reddedebilir veya silebilirsiniz. Ancak, çerezleri reddetmeniz durumunda sitemizin bazı özelliklerinden tam olarak faydalanamayabilirsiniz.</P>
  </LegalContainer>
);

export const KvkkPolicy = () => (
  <LegalContainer title="KVKK Aydınlatma Metni">
    <P><strong>Veri Sorumlusu:</strong> Cozulemez Music Group A.Ş.</P>
    <P>6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz veri sorumlusu sıfatıyla Cozulemez Music Group A.Ş. tarafından aşağıda açıklanan amaçlar kapsamında işlenebilecektir.</P>

    <H>1. Kişisel Verilerin İşlenme Amacı</H>
    <P>Kişisel verileriniz; hizmetlerimizin sunulması, sözleşme süreçlerinin yürütülmesi, müşteri ilişkileri yönetimi, yasal yükümlülüklerin yerine getirilmesi ve müzik dağıtım operasyonlarının gerçekleştirilmesi amacıyla işlenmektedir.</P>

    <H>2. İşlenen Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği</H>
    <P>Kişisel verileriniz, Kanun'un 8. ve 9. maddelerinde belirtilen şartlara uygun olarak; dijital müzik platformları (Spotify, Apple vb.), iş ortaklarımız, yetkili kamu kurum ve kuruluşları ve yasal yükümlülükler gereği yetkili mercilere aktarılabilir.</P>

    <H>3. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</H>
    <P>Verileriniz, web sitemiz, başvuru formları ve e-posta kanallarıyla otomatik veya otomatik olmayan yöntemlerle toplanmaktadır. Bu veriler, sözleşmenin kurulması, yasal yükümlülüklerin yerine getirilmesi ve meşru menfaatlerimiz hukuki sebeplerine dayanarak işlenmektedir.</P>

    <H>4. İlgili Kişinin Hakları (KVKK Madde 11)</H>
    <P>KVKK uyarınca; verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, amacına uygun kullanılıp kullanılmadığını öğrenme, düzeltilmesini veya silinmesini talep etme haklarına sahipsiniz.</P>
  </LegalContainer>
);
