export type Lang = 'hu' | 'en';

export interface Step {
  time: string;
  title: string;
  body: string;
}

export interface Pack {
  id: string;
  name: string;
  price: string;
  hours: string;
  summary: string;
  includes: string[];
}

export interface Content {
  meta: { title: string; description: string };
  nav: { show: string; languages: string; packages: string; faq: string; contact: string };
  switchLabel: string;
  hero: {
    greeting: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    datesTitle: string;
    datesHint: string;
    dateAction: string;
  };
  show: { title: string; intro: string; steps: Step[] };
  languages: {
    title: string;
    intro: string;
    sampleCaption: string;
    sampleHu: string;
    sampleEn: string;
    points: { title: string; body: string }[];
  };
  packages: { title: string; intro: string; recommended: string; from: string; choose: string; items: Pack[] };
  reviews: { title: string; items: { quote: string; who: string; where: string }[] };
  faq: { title: string; items: { q: string; a: string }[] };
  form: {
    title: string;
    intro: string;
    names: string;
    email: string;
    date: string;
    venue: string;
    guests: string;
    language: string;
    languageOptions: { hu: string; en: string; both: string };
    message: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    sent: string;
    sentBody: string;
    sendAnother: string;
    errors: { required: string; invalid: string; network: string };
  };
  footer: { line: string; rights: string };
}

const hu: Content = {
  meta: {
    title: 'Modern CM — ceremóniamester magyarul és angolul',
    description:
      'Esküvői ceremóniamester magyar és nemzetközi párok számára. Két nyelven vezetem az estét a vendégfogadástól az utolsó táncig.',
  },
  nav: { show: 'Az este menete', languages: 'Két nyelven', packages: 'Csomagok', faq: 'Kérdések', contact: 'Ajánlatkérés' },
  switchLabel: 'Nyelv',
  hero: {
    greeting: 'Kedves vendégek!',
    lead: 'Ceremóniamester magyar és nemzetközi esküvőkre. Úgy vezetem az estét két nyelven, hogy a nagymama és a külföldi barátok is minden szót értsenek, és senki ne érezze, hogy fordítást hallgat.',
    primaryCta: 'Kérek ajánlatot',
    secondaryCta: 'Csomagok és árak',
    datesTitle: 'Szabad szombatok 2027-ben',
    datesHint: 'Válasszon egy dátumot, és előtöltöm az ajánlatkérőt.',
    dateAction: 'Dátum kiválasztása:',
  },
  show: {
    title: 'Az este menete',
    intro: 'Egy átlagos esküvői nap, ahogy én vezetem. Minden pontot előre egyeztetünk, a helyszínen pedig én tartom a kapcsolatot a zenekarral, a fotóssal és a konyhával.',
    steps: [
      { time: '14:30', title: 'Vendégfogadás', body: 'Fogadom a vendégeket, eligazítom őket, és időben a helyükre kísérem a családot.' },
      { time: '15:00', title: 'Szertartás', body: 'Összehangolom a bevonulást a zenével, és gondoskodom róla, hogy a gyűrűk a megfelelő pillanatban a megfelelő kézben legyenek.' },
      { time: '16:00', title: 'Gratulációk, csoportkép', body: 'Sorba szervezem a gratulálókat, és összeterelem a családot a fotóshoz, hogy a csoportkép tíz perc alatt meglegyen.' },
      { time: '18:00', title: 'Bevonulás, köszöntő', body: 'Bemutatom az ifjú párt, köszöntöm a vendégeket, és elmondom, mire számíthatnak az este folyamán.' },
      { time: '18:30', title: 'Vacsora és beszédek', body: 'Felkonferálom a szülők és a tanúk beszédeit, és úgy osztom be őket, hogy a leves ne hűljön ki közben.' },
      { time: '21:00', title: 'Nyitótánc', body: 'Jelzek a zenekarnak és a fotósnak, majd a tánc végén a táncparkettre hívom a vendégeket.' },
      { time: '23:00', title: 'Torta', body: 'Bejelentem a tortát, és összehangolom a felszolgálással, a fényekkel és a zenével.' },
      { time: '00:00', title: 'Menyecsketánc', body: 'Levezetem a menyecsketáncot, a külföldi vendégeknek pedig röviden elmagyarázom, mi ez a hagyomány és hogyan vehetnek részt benne.' },
      { time: '02:00', title: 'Búcsú', body: 'Elköszönök a vendégektől, és megszervezem az utolsó táncot, ha a pár szeretné.' },
    ],
  },
  languages: {
    title: 'Egy este, két nyelv',
    intro: 'Nem szóról szóra fordítok. Minden bejelentést mindkét nyelven megfogalmazok, a vendégkörhöz igazítva, hogy egyik oldal se unatkozzon, amíg a másik hallgat.',
    sampleCaption: 'Így hangzik egy felkonferálás a nyitótánc előtt:',
    sampleHu: 'Kérem, emeljék poharukat, és fordítsák figyelmüket a táncparkett felé. Most először táncolnak férj és feleségként.',
    sampleEn: 'Glasses up, everyone, and eyes on the dance floor. For the very first time, as husband and wife.',
    points: [
      { title: 'Arányos kétnyelvűség', body: 'Ha a vendégek nagyobb része magyar, a magyar szöveg a hosszabb, az angol pedig rövid, lényegre törő. Ezt előre megbeszéljük.' },
      { title: 'Kétnyelvű menetrend', body: 'Az asztalokra kétnyelvű programot készítek, így senkinek nem kell találgatnia, mikor jön a torta.' },
      { title: 'Hagyományok magyarázattal', body: 'A menyecsketáncot, a hajnali töltött káposztát és a vőfélyrigmusokat a külföldi vendégeknek is érthetővé teszem.' },
    ],
  },
  packages: {
    title: 'Csomagok',
    intro: 'Minden csomagban benne van egy személyes egyeztetés, a teljes menetrend megírása és az egyeztetés a szolgáltatókkal.',
    recommended: 'Ezt választják a legtöbben',
    from: '',
    choose: 'Ezt kérem',
    items: [
      {
        id: 'ceremony',
        name: 'Szertartás',
        price: '120 000 Ft',
        hours: 'kb. 3 óra',
        summary: 'Ha a szertartást és a vendégfogadást szeretnék gördülékenyen levezetni.',
        includes: ['Vendégfogadás és szertartás', 'Gratulációk, csoportkép', 'Egy nyelven'],
      },
      {
        id: 'evening',
        name: 'Teljes este',
        price: '290 000 Ft',
        hours: 'a vendégfogadástól éjfél utánig',
        summary: 'Az egész napot én vezetem, a bevonulástól a menyecsketáncig.',
        includes: ['Minden a Szertartás csomagból', 'Köszöntők, beszédek, nyitótánc, torta', 'Menyecsketánc levezetése', 'Egy nyelven'],
      },
      {
        id: 'bilingual',
        name: 'Két nyelven',
        price: '360 000 Ft',
        hours: 'a vendégfogadástól éjfél utánig',
        summary: 'Nemzetközi esküvőkre: minden bejelentés magyarul és angolul.',
        includes: ['Minden a Teljes este csomagból', 'Kétnyelvű forgatókönyv', 'Kétnyelvű asztali menetrend', 'Hagyományok magyarázata a külföldi vendégeknek'],
      },
    ],
  },
  reviews: {
    // Placeholder testimonials: replace with real, attributed reviews before going live.
    title: 'Akik már nálam ünnepeltek',
    items: [
      { quote: 'A skót családom végig nevetett, a nagymamám végig sírt, és mindketten pontosan értették, mi történik.', who: 'Dóra és Callum', where: 'Tihany, 2026' },
      { quote: 'Fél órával a vacsora előtt kiderült, hogy a zenekar késik. Erről csak másnap értesültünk.', who: 'Réka és Bálint', where: 'Budapest, 2025' },
    ],
  },
  faq: {
    title: 'Gyakori kérdések',
    items: [
      { q: 'Mennyivel előre érdemes foglalni?', a: 'A nyári szombatok általában 9–12 hónappal előre beteltek. Péntekre és vasárnapra rövidebb idő is elég.' },
      { q: 'Vállal vidéki vagy külföldi esküvőt?', a: 'Igen. Budapesttől 100 km-en túl útiköltséget számolok, külföldön pedig szállást is kérek.' },
      { q: 'Hányszor találkozunk az esküvő előtt?', a: 'Egy hosszabb személyes vagy online egyeztetés után a forgatókönyvet közösen véglegesítjük, az esküvő előtti héten pedig még egyszer átbeszéljük.' },
      { q: 'Lehet vőfélyrigmusokat is kérni?', a: 'Igen, ha a családnak fontos. Rövid, mai hangvételű verseket írok, nem a teljes hagyományos repertoárt.' },
    ],
  },
  form: {
    title: 'Ajánlatkérés',
    intro: 'Írják meg a dátumot és a helyszínt, és két munkanapon belül válaszolok, hogy szabad vagyok-e.',
    names: 'Az önök neve',
    email: 'E-mail cím',
    date: 'Az esküvő dátuma',
    venue: 'Helyszín',
    guests: 'Vendégek száma',
    language: 'Milyen nyelven vezessem az estét?',
    languageOptions: { hu: 'Magyarul', en: 'Angolul', both: 'Mindkét nyelven' },
    message: 'Üzenet',
    messagePlaceholder: 'Bármi, amit érdemes tudnom: a vendégkör, a hagyományok, a zenekar…',
    submit: 'Ajánlatkérés küldése',
    sending: 'Küldés…',
    sent: 'Megkaptam az ajánlatkérést.',
    sentBody: 'Két munkanapon belül válaszolok a megadott e-mail címre.',
    sendAnother: 'Új ajánlatkérés',
    errors: {
      required: 'Ezt a mezőt ki kell tölteni.',
      invalid: 'Ellenőrizze ezt a mezőt.',
      network: 'Az ajánlatkérés nem ment el. Ellenőrizze az internetkapcsolatot, és próbálja újra.',
    },
  },
  footer: { line: 'Ceremóniamester magyarul és angolul, Budapestről.', rights: 'Minden jog fenntartva.' },
};

const en: Content = {
  meta: {
    title: 'Modern CM — wedding MC in Hungarian and English',
    description:
      'Wedding master of ceremonies for Hungarian and international couples. I host the whole day in both languages, from the welcome to the last dance.',
  },
  nav: { show: 'The day', languages: 'Two languages', packages: 'Packages', faq: 'Questions', contact: 'Enquire' },
  switchLabel: 'Language',
  hero: {
    greeting: 'Dear guests!',
    lead: 'A master of ceremonies for Hungarian and international weddings. I host the day in both languages, so your grandmother and your friends from abroad catch every word, and nobody feels like they are listening to a translation.',
    primaryCta: 'Request a quote',
    secondaryCta: 'Packages and prices',
    datesTitle: 'Saturdays still free in 2027',
    datesHint: 'Pick a date and I will fill it into the enquiry form.',
    dateAction: 'Choose date:',
  },
  show: {
    title: 'How the day runs',
    intro: 'A typical wedding day as I host it. We agree every moment in advance, and on the day I am the one talking to the band, the photographer and the kitchen.',
    steps: [
      { time: '14:30', title: 'Welcome', body: 'I greet guests, point them in the right direction and get the family seated on time.' },
      { time: '15:00', title: 'Ceremony', body: 'I cue the processional with the music and make sure the rings are in the right hands at the right moment.' },
      { time: '16:00', title: 'Congratulations, group photo', body: 'I line up the well-wishers and gather the family for the photographer, so the group photo takes ten minutes, not forty.' },
      { time: '18:00', title: 'Grand entrance, welcome', body: 'I introduce the couple, welcome everyone and tell guests what to expect from the evening.' },
      { time: '18:30', title: 'Dinner and toasts', body: 'I introduce the parents and the witnesses, and pace the speeches so the soup is still warm.' },
      { time: '21:00', title: 'First dance', body: 'I cue the band and the photographer, then invite everyone onto the floor when the song ends.' },
      { time: '23:00', title: 'Cake', body: 'I announce the cake and time it with the service, the lights and the music.' },
      { time: '00:00', title: 'Bride’s dance', body: 'I lead the menyecsketánc, the Hungarian midnight dance with the bride, and explain to international guests what it is and how to join in.' },
      { time: '02:00', title: 'Farewell', body: 'I say goodbye to the guests and set up a last dance if the couple wants one.' },
    ],
  },
  languages: {
    title: 'One evening, two languages',
    intro: 'I don’t translate word for word. Every announcement is written for both audiences, so neither side sits through a long speech it can’t follow.',
    sampleCaption: 'Here is how the cue before the first dance sounds:',
    sampleHu: 'Kérem, emeljék poharukat, és fordítsák figyelmüket a táncparkett felé. Most először táncolnak férj és feleségként.',
    sampleEn: 'Glasses up, everyone, and eyes on the dance floor. For the very first time, as husband and wife.',
    points: [
      { title: 'Balanced to your guest list', body: 'If most guests are Hungarian, the Hungarian is fuller and the English short and to the point. We decide the balance together.' },
      { title: 'Bilingual programme', body: 'I prepare a two-language running order for the tables, so nobody has to guess when the cake is coming.' },
      { title: 'Traditions, explained', body: 'The bride’s dance, the stuffed cabbage at dawn and the old rhyming toasts all make sense to your guests from abroad.' },
    ],
  },
  packages: {
    title: 'Packages',
    intro: 'Every package includes a planning meeting, a written running order and coordination with your other suppliers.',
    recommended: 'Most couples choose this',
    from: '',
    choose: 'Choose this package',
    items: [
      {
        id: 'ceremony',
        name: 'Ceremony',
        price: '€320',
        hours: 'about 3 hours',
        summary: 'For a smooth welcome and ceremony.',
        includes: ['Welcome and ceremony', 'Congratulations, group photo', 'One language'],
      },
      {
        id: 'evening',
        name: 'Full evening',
        price: '€760',
        hours: 'from welcome until after midnight',
        summary: 'I host the whole day, from the entrance to the bride’s dance.',
        includes: ['Everything in Ceremony', 'Toasts, speeches, first dance, cake', 'Bride’s dance at midnight', 'One language'],
      },
      {
        id: 'bilingual',
        name: 'Bilingual',
        price: '€940',
        hours: 'from welcome until after midnight',
        summary: 'For international weddings: every announcement in Hungarian and English.',
        includes: ['Everything in Full evening', 'Bilingual script', 'Bilingual table programme', 'Hungarian traditions explained for guests from abroad'],
      },
    ],
  },
  reviews: {
    title: 'From couples I’ve hosted',
    items: [
      { quote: 'My Scottish family laughed the whole night, my grandmother cried the whole night, and both knew exactly what was going on.', who: 'Dóra & Callum', where: 'Tihany, 2026' },
      { quote: 'Half an hour before dinner the band was running late. We only found out the next day.', who: 'Réka & Bálint', where: 'Budapest, 2025' },
    ],
  },
  faq: {
    title: 'Common questions',
    items: [
      { q: 'How far ahead should we book?', a: 'Summer Saturdays usually go 9–12 months in advance. Fridays and Sundays need less notice.' },
      { q: 'Do you travel outside Budapest or abroad?', a: 'Yes. Beyond 100 km from Budapest I charge travel costs, and abroad I also ask for accommodation.' },
      { q: 'How often do we meet before the wedding?', a: 'One longer meeting in person or online, then we finalise the running order together and go through it once more in the week before.' },
      { q: 'Can you do traditional Hungarian rhymes?', a: 'Yes, if they matter to your family. I write short, modern verses rather than the full traditional repertoire.' },
    ],
  },
  form: {
    title: 'Request a quote',
    intro: 'Send me your date and venue, and I will reply within two working days to say whether I’m free.',
    names: 'Your names',
    email: 'Email',
    date: 'Wedding date',
    venue: 'Venue',
    guests: 'Number of guests',
    language: 'Which language should I host in?',
    languageOptions: { hu: 'Hungarian', en: 'English', both: 'Both' },
    message: 'Message',
    messagePlaceholder: 'Anything useful to know: your guests, traditions, the band…',
    submit: 'Send request',
    sending: 'Sending…',
    sent: 'Your request is in.',
    sentBody: 'I will reply to the email address you gave within two working days.',
    sendAnother: 'Send another request',
    errors: {
      required: 'Please fill in this field.',
      invalid: 'Please check this field.',
      network: 'The request didn’t send. Check your connection and try again.',
    },
  },
  footer: { line: 'Wedding MC in Hungarian and English, based in Budapest.', rights: 'All rights reserved.' },
};

export const content: Record<Lang, Content> = { hu, en };

/** Placeholder availability: replace with real data from the API when it exists. */
export const freeSaturdays = ['2027-05-15', '2027-05-29', '2027-06-19', '2027-07-03', '2027-08-28', '2027-09-11'];
