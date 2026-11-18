// ---------------------------------------------------------------------------
// Single place to edit the outlet's real details.
// This copy is set up for the Miyapur outlet (Syed Anwar Manzil).
// Mirror any change here in the JSON-LD block inside index.html.
// ---------------------------------------------------------------------------

export const site = {
  name: "Uncle Peter's Pancakes",
  area: 'Miyapur',
  city: 'Hyderabad',
  // Shown as the outlet subtitle / location badge
  outletLabel: 'Miyapur • Syed Anwar Manzil',

  phoneDisplay: '+91 72888 47515',
  // Local form, as Google lists it
  phoneDisplayLocal: '072888 47515',
  phoneHref: 'tel:+917288847515',

  // WhatsApp number, country code, no +
  whatsappNumber: '917288847515',
  whatsappText: "Hi Uncle Peter's Pancakes Miyapur! I'd like to place a direct order:",

  rating: 4.9,
  // TODO: confirm the live review count on the Google listing
  reviewCount: 134,

  // Opening hours in 24h, half hours allowed (23.5 = 11:30 PM)
  opensHour: 9,
  closesHour: 23.5,
  hoursLabel: 'Open Daily • Closes 11:30 PM',
  closingLabel: 'Closes 11:30 PM',
  lastOrdersLabel: '11:15 PM',

  addressLines: [
    'H.No: 1-59/7/3/A, Ground Floor, Shop No. 1',
    'Syed Anwar Manzil, Miyapur',
    'Serilingampalle (M), Hyderabad, Telangana 500049',
  ],
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Uncle+Peters+Pancakes+Miyapur+Hyderabad',
  reviewsUrl:
    'https://www.google.com/maps/search/?api=1&query=Uncle+Peters+Pancakes+Miyapur+Hyderabad',
}

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappText,
)}`

export const pancakes = [
  {
    name: 'Nutella and Mango Pancake Box',
    detail: 'Warm Nutella pour, fresh Alphonso mango, pancake bites to share',
    price: 349,
    tags: ['Bestseller'],
  },
  {
    name: 'Classic Buttermilk Stack',
    detail: 'Five pancakes, salted butter, warm maple syrup',
    price: 269,
  },
  {
    name: 'Dark Chocolate Lava Stack',
    detail: 'Cocoa pancakes, molten centre, cacao nibs',
    price: 329,
  },
  {
    name: 'Gluten-Free Oat Stack',
    detail: 'Oat and almond flour, banana, honey, toasted seeds',
    price: 339,
    tags: ['Gluten-free'],
  },
  {
    name: 'Biscoff Cheesecake Stack',
    detail: 'Speculoos crumb, baked cheesecake cream, caramel drizzle',
    price: 349,
  },
  {
    name: 'Red Velvet Stack',
    detail: 'Beetroot-cocoa batter, cream cheese frosting, white chocolate',
    price: 319,
    tags: ['Eggless'],
  },
]

export const waffles = [
  {
    name: 'Liège Sugar Waffle',
    detail: 'Pearl-sugar dough, caramelised crust, vanilla cream',
    price: 299,
  },
  {
    name: 'Tiramisu Waffle',
    detail: 'Espresso-soaked waffle, mascarpone, cocoa dust',
    price: 359,
  },
  {
    name: 'Nutella Hazelnut Waffle',
    detail: 'Warm Nutella pour, roasted hazelnuts, sea salt',
    price: 329,
  },
  {
    name: 'Gluten-Free Buckwheat Waffle',
    detail: 'Buckwheat batter, blueberry compote, maple butter',
    price: 349,
    tags: ['Gluten-free'],
  },
]

export const sides = [
  { name: 'Filter Coffee Cold Brew', detail: 'Chicory cold brew, 14-hour steep', price: 189 },
  { name: 'Belgian Hot Chocolate', detail: '58% dark chocolate, steamed milk', price: 219 },
  { name: 'Banana Date Shake', detail: 'No refined sugar, toasted walnut', price: 229 },
]

export const reviews = [
  {
    quote:
      'Taste, quantity, and quality is top notch and the service is also good. Definitely coming back!',
    author: 'Local Foodie',
    context: 'Verified Google review',
    stars: 5,
  },
  {
    quote:
      'Good vibe, good customer handling, and nice ambience—cute chit-chat spot with friends in Miyapur.',
    author: 'Cafe Lover',
    context: 'Verified Google review',
    stars: 5,
  },
  {
    quote:
      'Food taste is good and services are excellent! Loved the Nutella and Mango Pancake Box.',
    author: 'Regular Guest',
    context: 'Verified Google review',
    stars: 5,
  },
]

// The hero showcase card pulls straight from the board above, so prices never drift.
const byName = (list, needle) => list.find((item) => item.name.includes(needle))

export const showcase = {
  featured: byName(pancakes, 'Nutella and Mango'),
  alsoTonight: [byName(pancakes, 'Dark Chocolate Lava'), byName(pancakes, 'Gluten-Free Oat')],
}

// Photograph behind the hero showcase card.
// Swap for a shot of the real counter when you have one: drop it in public/ and
// set src to '/hero-stack.jpg'. Current image is free under the Unsplash License
// (Chad Montano) — attribution is not required but is appreciated.
export const heroPhoto = {
  src: 'https://images.unsplash.com/photo-1565299543923-37dd37887442?auto=format&fit=crop&w=900&q=80',
  credit: {
    name: 'Chad Montano',
    url: 'https://unsplash.com/photos/person-pouring-syrup-on-pancake-gf9777gaYjs',
  },
}
