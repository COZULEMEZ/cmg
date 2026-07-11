import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const faqs = [
  // Spotify & Streaming
  {
    question: "How long does it take to get my music on Spotify and Apple Music?",
    answer: "With CMG's premium global music distribution infrastructure, your release can be delivered to Spotify, Apple Music, and over 150 digital service providers (DSPs) in as little as 24 to 48 hours. However, to ensure optimal playlist pitching and algorithm optimization, we recommend scheduling your release at least 2-3 weeks in advance. Fast music distribution is a core feature of the Cozulemez Music Group ecosystem."
  },
  {
    question: "How do I claim my Spotify for Artists and Apple Music for Artists profiles?",
    answer: "Once your music is approved for digital music distribution via CMG, we provide your Spotify URI and Apple Music ID. You can use these unique identifiers to instantly claim and verify your artist profiles before your release date, giving you full access to music analytics, audience demographics, and pre-save campaigns."
  },
  {
    question: "What is an Official Artist Channel (OAC) on YouTube and how do I get one?",
    answer: "An Official Artist Channel (OAC) merges your standard YouTube channel, VEVO channel, and Topic channel into one unified verified artist profile. CMG automatically requests an OAC for our distributed artists, ensuring your music catalog is organized, your subscribers are consolidated, and you unlock advanced YouTube Music analytics and monetization features."
  },
  {
    question: "Do you distribute music to TikTok, Instagram Reels, and Facebook?",
    answer: "Yes. CMG ensures global distribution to all major social media platforms, including TikTok, Instagram, Facebook, Snapchat, and YouTube Shorts. When you publish your music through Cozulemez, your tracks are added to their respective audio libraries, allowing creators worldwide to use your music, generating additional social media royalties."
  },
  {
    question: "How does Spotify algorithm placement work?",
    answer: "Spotify's algorithm heavily relies on early engagement metrics (save rate, low skip rate, playlist adds). By utilizing CMG's artist services and music marketing tools, and pitching your upcoming release via Spotify for Artists at least two weeks prior to launch, you maximize your chances of triggering algorithmic playlists like Discover Weekly and Release Radar."
  },

  // Royalties & Payments
  {
    question: "How much of my music royalties do I keep?",
    answer: "Unlike traditional record companies, CMG empowers independent artists by offering transparent, artist-first agreements. Depending on your tier—from standard distribution to full artist development—you keep up to 100% of your digital distribution royalties. There are no hidden fees in our royalty management system."
  },
  {
    question: "How and when do I get paid for my music streams?",
    answer: "Music royalties are generated every time your track is streamed or downloaded. DSPs report earnings on a 2-3 month delay. CMG consolidates these reports into a seamless analytics dashboard. Once your balance reaches the minimum threshold, you can request a payout directly to your bank account via wire transfer or digital payment methods."
  },
  {
    question: "Does CMG handle mechanical and performance royalties?",
    answer: "CMG's core service focuses on digital music distribution (sound recording royalties). However, through our comprehensive Music Publishing division, we also administer and collect your mechanical royalties and public performance royalties globally, registering your works with PROs (Performing Rights Organizations) to ensure you collect every cent owed to you."
  },
  {
    question: "How do royalty splits work for collaborations?",
    answer: "If you collaborate with producers or featured artists, CMG's advanced royalty split feature allows you to automate revenue sharing. You simply input the percentage splits and their email addresses. Our system automatically routes the correct portion of streaming revenue to each collaborator, eliminating accounting headaches."
  },
  {
    question: "What is YouTube Content ID and how does it monetize my music?",
    answer: "YouTube Content ID is a digital fingerprinting system that scans YouTube for user-generated videos utilizing your music. When a match is found, CMG places advertisements on that video on your behalf. This ensures that even if someone else uploads your song, you collect the monetization revenue for your copyright."
  },

  // Copyright, ISRC, UPC & Metadata
  {
    question: "What is an ISRC and does CMG provide it?",
    answer: "An ISRC (International Standard Recording Code) is a unique 12-character alphanumeric code used to track sound recordings globally for sales and royalty collection. CMG automatically generates and assigns free, legitimate ISRCs for every track you upload, ensuring accurate streaming analytics and royalty tracking."
  },
  {
    question: "What is a UPC / EAN code?",
    answer: "A UPC (Universal Product Code) or EAN (European Article Number) represents your entire album, EP, or single as a commercial product. CMG provides free UPCs for all your releases. This barcode is essential for tracking sales across digital storefronts like iTunes and Amazon Music."
  },
  {
    question: "Do I retain the copyright to my music?",
    answer: "Absolutely. As an independent music distributor and artist services agency, CMG Records does not take ownership of your master recordings or publishing copyrights. You maintain 100% creative control and copyright ownership over your intellectual property."
  },
  {
    question: "How important is metadata in music distribution?",
    answer: "Metadata (track title, artist name, songwriters, explicit tags, genre, ISRC) is the backbone of the digital music business. Inaccurate metadata can lead to rejected releases or lost royalties. CMG's rigorous quality assurance process verifies all metadata to ensure compliance with strict Apple Music and Spotify metadata guidelines."
  },
  {
    question: "Can I release a cover song through CMG?",
    answer: "Yes, you can release cover songs globally. However, to distribute a cover song to download stores (like iTunes) and certain streaming platforms, you must obtain a mechanical license. CMG provides guidance on securing mechanical licenses to ensure your cover song release is legally compliant."
  },

  // Record Label & Artist Services
  {
    question: "Is CMG a record label or a music distributor?",
    answer: "Cozulemez Music Group operates as a hybrid. We provide enterprise-grade digital music distribution for independent artists, but we also operate an exclusive boutique record label offering extensive A&R, artist branding, music marketing, and funding for artists who demonstrate exceptional growth."
  },
  {
    question: "How do I apply to the Cozulemez Label?",
    answer: "Independent artists can submit their music through our Artist Application portal. Our A&R team reviews every submission. We look for streaming momentum, a dedicated fanbase, and high-quality production. If selected, CMG provides bespoke artist development and marketing budgets."
  },
  {
    question: "What music marketing services do you offer?",
    answer: "CMG's marketing division executes comprehensive campaigns including digital PR, algorithmic playlist triggering, social media advertising (TikTok/Meta ads), influencer seeding, and strategic DSP pitching. We build long-term artist branding strategies, not just short-term algorithmic spikes."
  },
  {
    question: "Do you offer sync licensing opportunities?",
    answer: "Yes. Our sync licensing department actively pitches the CMG catalog to music supervisors for placements in film, television, video games, and commercial advertising. Sync placements provide immense exposure and substantial upfront licensing fees for independent artists."
  },
  {
    question: "Can I transfer my catalog from another distributor to CMG?",
    answer: "Yes. Migrating your catalog from DistroKid, TuneCore, or CD Baby to CMG is seamless. By using the exact same audio files, ISRCs, and UPCs during the upload process, you retain all your existing Spotify play counts, playlist placements, and algorithm history while upgrading your distribution infrastructure."
  },

  // Advanced Technical & Platform Specifics
  {
    question: "What audio formats are accepted for upload?",
    answer: "For premium digital distribution, CMG requires lossless audio formats: 16-bit/44.1 kHz or 24-bit/48 kHz WAV or FLAC files. We also support High-Resolution Audio and Dolby Atmos spatial audio distribution for Apple Music and Tidal."
  },
  {
    question: "Do you distribute Dolby Atmos and Spatial Audio?",
    answer: "Yes. The future of music is immersive. CMG fully supports the distribution of Dolby Atmos and Spatial Audio mixes to compatible platforms like Apple Music, Amazon Music Unlimited, and Tidal, giving your listeners a three-dimensional acoustic experience."
  },
  {
    question: "What are the cover art requirements?",
    answer: "DSP guidelines strictly require artwork to be a minimum of 3000x3000px, square, RGB color mode, and in JPG or PNG format. The artwork cannot contain social media handles, website URLs, blurry images, or copyright-infringing material. CMG's automated QC system checks this instantly."
  },
  {
    question: "Can I choose a specific release time across different time zones?",
    answer: "Yes. CMG's advanced release scheduler allows for 'Simultaneous Global Release' (the track goes live at the exact same moment worldwide, e.g., midnight EST) or 'Local Timezone Release' (the track goes live at midnight in each respective country as the globe turns)."
  },
  {
    question: "What is pre-save and why is it important?",
    answer: "A pre-save campaign allows fans to add your upcoming track to their Spotify or Apple Music library before the release date. On release day, the track automatically appears in their library. High pre-save numbers signal strong demand to Spotify's algorithm, significantly increasing the likelihood of editorial playlist placement."
  },

  // Global & Localized Questions (Turkish Focus)
  {
    question: "Türkiye'de dijital müzik dağıtımı yapıyor musunuz?",
    answer: "Evet, CMG (Çözülemez Music Group) Türkiye merkezli sanatçılara global standartlarda dijital müzik dağıtımı sunar. Fizy, Muud, ve yerel telekom operatörü müzik servisleri de dahil olmak üzere Türkiye pazarındaki tüm DSP'lere doğrudan entegrasyonumuz bulunmaktadır."
  },
  {
    question: "Spotify müzik yayınlama süreci nasıl işliyor?",
    answer: "Sistemimize kaydolup parçanızı, kapak görselinizi ve meta verilerinizi yüklediğinizde, ekibimiz kalite kontrol (QC) testlerini yapar. Onaylanan şarkılar doğrudan Spotify'ın veri tabanına iletilir. Saniyeler içinde ISRC kodunuz oluşturulur ve eseriniz seçtiğiniz tarihte Spotify'da yayına girer."
  },
  {
    question: "Şarkı yayınlamak için vergi mükellefi veya şirket olmam gerekiyor mu?",
    answer: "Hayır. Bağımsız sanatçı (independent artist) olarak bireysel başvuruda bulunabilir ve eserlerinizi tüm dünyaya dağıtabilirsiniz. Kazançlarınız doğrudan belirteceğiniz banka hesabına yatırılır. Vergilendirme, bulunduğunuz ülkenin yerel yasalarına tabidir."
  },
  {
    question: "Plak şirketleri (Record Labels) için toplu dağıtım altyapınız var mı?",
    answer: "Evet. Sadece bağımsız sanatçılara değil, bünyesinde birden fazla sanatçı barındıran müzik şirketleri (Record Labels) için de 'White-label' veya toplu dağıtım altyapısı (B2B) sunuyoruz. Alt sanatçı hesapları, gelişmiş analitik ve detaylı gelir raporlaması sağlar."
  },
  {
    question: "TikTok müzik dağıtımı gelir getirir mi?",
    answer: "Kesinlikle. TikTok müzik dağıtımı sadece viral pazarlama için değil, aynı zamanda gelir kapısıdır. Eseriniz TikTok videolarında kullanıldıkça, kullanım oranına bağlı olarak telif geliri (micro-sync royalties) elde edersiniz. CMG, bu gelirleri eksiksiz olarak raporlar."
  },

  // Deep Semantic Queries (EEAT Focus)
  {
    question: "Why is a transparent royalty accounting system crucial for independent artists?",
    answer: "Historically, the music business has been plagued by opaque accounting (black box royalties). CMG employs an enterprise-grade digital ledger system that tracks fractions of a cent per stream across 180+ countries. Transparency ensures trust, allowing creators to accurately forecast their music monetization and reinvest in their careers."
  },
  {
    question: "How do explicit lyrics affect music distribution and playlisting?",
    answer: "Tracks containing profanity or explicit themes must be tagged with an 'Explicit' flag in the metadata. Failure to do so violates DSP terms of service and can result in your catalog being taken down. Additionally, many editorial playlists on Apple Music and Spotify have clean-only policies, making clean radio edits a smart strategy for global reach."
  },
  {
    question: "What is the difference between Sound Recording (Master) and Musical Composition?",
    answer: "A song has two distinct copyrights. The 'Master' (Sound Recording) is the actual audio file you hear, typically owned by the record label or the independent artist who paid for the recording. The 'Musical Composition' is the underlying melody and lyrics, owned by the songwriter and publisher. CMG Distribution handles the Master, while CMG Publishing handles the Composition."
  },
  {
    question: "How does algorithmic playlisting differ from editorial playlisting?",
    answer: "Editorial playlists (like RapCaviar or Today's Top Hits) are curated by human editors employed by Spotify or Apple. Algorithmic playlists (like Discover Weekly or Spotify Radio) are generated by machine learning models based on listening habits, skip rates, and user data. CMG optimizes your metadata and marketing to trigger both."
  },
  {
    question: "What are DSPs (Digital Service Providers)?",
    answer: "DSP stands for Digital Service Provider. In the modern music industry, it refers to streaming platforms and online stores like Spotify, Apple Music, Tidal, Amazon Music, and Deezer. A music distribution company acts as the technical bridge between the artist's audio files and the DSP's complex ingest servers."
  },
  {
    question: "Can I distribute a remix of an existing song?",
    answer: "Distributing a remix requires explicit legal permission (a master use license) from the original copyright holder of the sound recording, as well as the publisher. Without these clearances, uploading a remix violates copyright law and will result in immediate DMCA takedowns and possible account termination."
  },
  {
    question: "How do pre-saves impact first-week streaming numbers?",
    answer: "A robust pre-save campaign consolidates fan engagement into day-one streaming velocity. When a pre-saved track drops, it generates an immediate surge in listeners, signaling high engagement to Spotify's algorithmic triggers, greatly improving the chances of secondary algorithmic boosts in week two."
  },
  {
    question: "What is an artist's digital footprint and why does it matter?",
    answer: "Your digital footprint encompasses your verified DSP profiles, social media presence, Wikipedia page, Google Knowledge Graph, and press coverage. A unified digital footprint is critical for Music SEO and algorithm recognition. CMG's artist development team ensures your digital presence is highly optimized for semantic search."
  },
  {
    question: "How does CMG prevent artificial streaming (streaming fraud)?",
    answer: "Streaming fraud (using bots to inflate play counts) harms the entire creator economy. CMG utilizes proprietary AI-driven analytics to detect anomalous streaming patterns before they are flagged by Spotify or Apple Music. We strictly enforce compliance to protect our catalog's integrity and ensure legitimate artists are paid fairly."
  },
  {
    question: "What is 'Waterfall Strategy' in music releasing?",
    answer: "The Waterfall Strategy is a release tactic where an artist releases an EP or album one single at a time. With each new single release, the previous singles are attached to the package. This compounds streaming numbers on Spotify, maximizes pitch opportunities to editors, and keeps the artist continually active in the algorithm."
  },

  // 10 More for 40+ Coverage
  {
    question: "How often does CMG update streaming analytics?",
    answer: "CMG's dashboard provides daily trend data from major platforms like Spotify for Artists and Apple Music. However, official financial reports and royalty statements are processed monthly, based on the accounting cycles of the global DSPs."
  },
  {
    question: "Do I need a barcode for my physical CD or Vinyl release?",
    answer: "While CMG provides free digital UPCs for your online music distribution, physical formats (Vinyl, CD, Cassette) typically require a separate, physically scannable retail barcode for inventory tracking in brick-and-mortar record stores."
  },
  {
    question: "What is the role of an A&R at CMG?",
    answer: "A&R (Artists and Repertoire) is the division responsible for talent scouting and the artistic development of recording artists. At Cozulemez Label, our A&R directors work directly with signed artists to select the right producers, refine track sequencing, and shape the overarching creative vision."
  },
  {
    question: "Can I release a podcast through CMG?",
    answer: "CMG focuses exclusively on the distribution of musical content, comedy albums, and spoken word poetry that qualify as sound recordings. For standard episodic podcasts, we recommend dedicated podcast hosting platforms that utilize RSS feed distribution."
  },
  {
    question: "How does YouTube Music differ from standard YouTube?",
    answer: "Standard YouTube relies on user-generated video content and music videos. YouTube Music is a dedicated DSP (like Spotify) that streams 'Art Tracks'—high-quality audio paired with your cover art, automatically generated by your music distributor. CMG delivers your catalog to both."
  },
  {
    question: "What happens to my music if I decide to leave CMG?",
    answer: "You maintain full copyright ownership. If you choose to migrate to another distributor, you can simply issue a takedown request through our platform. We recommend uploading your tracks to your new distributor using the exact same ISRCs *before* taking them down from CMG to ensure no streaming data is lost."
  },
  {
    question: "Does CMG offer mastering services?",
    answer: "Through our network of industry partners, CMG can connect you with elite audio engineers for mastering. Proper mastering ensures your track meets the strict LUFS (Loudness Units relative to Full Scale) requirements of Spotify and Apple Music, preventing volume normalization penalties."
  },
  {
    question: "What is a 'Pitching Lead Time'?",
    answer: "Lead time is the window between when your music is delivered to the DSPs and its actual release date. For effective editorial playlist pitching via Spotify for Artists, a minimum lead time of 3 weeks is required by industry standards to allow editors to review the submissions."
  },
  {
    question: "How do I update my artist bio on streaming platforms?",
    answer: "Your artist bio, press photos, and social links are managed directly through the respective platform portals (e.g., Spotify for Artists, Amazon Music for Artists). CMG facilitates the verification of these profiles so you can take immediate control of your brand narrative."
  },
  {
    question: "Why should I choose Cozulemez Music Group over competitors?",
    answer: "While automated aggregators like DistroKid or TuneCore treat artists as data points, CMG operates with a boutique, artist-first ethos. We combine enterprise-grade technical infrastructure—ensuring fast, flawless global music distribution—with the personalized artist development, marketing expertise, and transparent royalty management of a dedicated record label."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  // Structured Data (JSON-LD) for FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="section" style={{ padding: '6rem 0', background: 'var(--bg-secondary)' }} id="faq">
      {/* Injecting Semantic FAQ Schema directly into the DOM */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <div className="section-inner">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Sıkça Sorulan Sorular (SSS) & Music Distribution FAQ</h2>
          <p style={{ color: '#888', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
            Learn everything about global digital music distribution, Spotify royalties, copyright, and how Cozulemez Music Group empowers independent artists worldwide.
          </p>
        </motion.div>

        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, i) => (
            <GlassCard 
              key={i} 
              padding="default" 
              style={{ cursor: 'pointer', overflow: 'hidden' }}
            >
              <div 
                onClick={() => toggle(i)}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                aria-expanded={openIndex === i}
                role="button"
                tabIndex={0}
              >
                <h3 style={{ fontSize: '1.1rem', margin: 0, fontWeight: 500, color: openIndex === i ? '#fff' : '#ccc', transition: 'color 0.3s ease' }}>
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  style={{ color: '#888', flexShrink: 0, marginLeft: '1rem' }}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </div>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: 'auto', opacity: 1, marginTop: '1rem' }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <p style={{ color: '#aaa', margin: 0, lineHeight: 1.6 }}>
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
