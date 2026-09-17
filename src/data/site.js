export const site = {
  name: 'Velora Gold & Diamonds',
  shortName: 'Velora',
  location: 'Uppinangady, Karnataka',
  instagram: 'https://www.instagram.com/veloragoldanddiamonds/',
  // Replace this with Velora's verified WhatsApp number before launch.
  whatsappNumber: '919999999999',
  siteUrl: import.meta.env.VITE_SITE_URL?.replace(/\/$/, '') || '',
}

export const whatsappUrl = (message) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`

export const faqItems = [
  {
    question: 'Where is Velora Gold & Diamonds located?',
    answer: 'Velora Gold & Diamonds welcomes you in Uppinangady, Karnataka. Use the directions link on this site to plan your visit.',
  },
  {
    question: 'What jewellery can I discover at Velora?',
    answer: 'Explore gold and diamond jewellery for bridal celebrations, daily wear, solitaires, and thoughtful gold gifts.',
  },
  {
    question: 'Can I enquire about a piece before visiting?',
    answer: 'Yes. Use the WhatsApp button to share the piece you are interested in and begin a personal conversation with Velora.',
  },
]
