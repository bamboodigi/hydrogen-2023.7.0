
import {
  GlobeAltIcon,
  InformationCircleIcon,
  NewspaperIcon,
  ShieldCheckIcon,
  UsersIcon,
  TruckIcon,
  CameraIcon,
  ChatBubbleLeftIcon,
  ArrowPathIcon,
  CalculatorIcon,
  CalendarDaysIcon,
  BuildingOffice2Icon,
  FilmIcon,
  GiftIcon,
} from '@heroicons/react/24/outline'


const config = {
  logo: "Patch Panel",
  favicon: "favicon.ico",
  title: "PatchPanel",
  features: {
    alerts: {
      id: "alerts",
      enabled: true,
      message: "Free Tracked Shipping on Orders Over $50",
    },
  },
  webpage: {
    home: {
      id: "home",
      layout: [
        {
          id: "hero-tiles",
          enabled: true,
          heading: "Bold Designs, Made In Seconds!",
          description: "Craft your ideal patch in less than a minute.",
          cta: {
            id: "cta",
            enabled: true,
            text: "Start Now",
            link: "/collections/create-your-patch"
          },
          images: [
            {
              id: "img1",
              src: "https://cdn.shopify.com/s/files/1/2242/5805/files/best-sellers.jpg",
              alt: "placeholder"
            },
            {
              id: "img2",
              src: "https://cdn.shopify.com/s/files/1/2242/5805/files/create-your-patch.jpg",
              alt: "placeholder"
            },
            {
              id: "img3",
              src: "https://cdn.shopify.com/s/files/1/2242/5805/files/patch-perks.jpg",
              alt: "placeholder"
            },
            {
              id: "img4",
              src: "https://cdn.shopify.com/s/files/1/2242/5805/files/create-your-patch-2.jpg",
              alt: "placeholder"
            },
            {
              id: "img5",
              src: "https://cdn.shopify.com/s/files/1/2242/5805/files/patch-perks-2.jpg",
              alt: "placeholder"
            }
          ]
        },
        {
          id: "stats",
          enabled: true,
          heading: "Trusted by Our Customers",
          description: "Find out why they stay loyal.",
          facts: [
            {
              stat: "10,000+",
              variable: "Patch Combinations"
            },
            {
              stat: "24hrs",
              variable: "Initial Response Time"
            },
            {
              stat: "50,000+",
              variable: "5 Star Reviews"
            },
            {
              stat: "60,000+",
              variable: "Custom Patches Created"
            }
          ]
        },
        {
          id: "featured-products",
          enabled: true,
          heading: "Each Patch Style Can Be Customized by",
          description: "Size, Shape, Text, Background & Font Color.",
          link: "/collections/create-your-patch",
          text: "See everything"
        },
        {
          id: "reviews",
          enabled: true,
          heading: "Our Work Says It All",
          description: "Quality Patchs Makes Happy Customers",
          link: "/pages/our-customers",
          text: "",
          reviews: [
            {
              title: 'It really works.',
              body: 'I downloaded Pocket today and turned $5000 into $25,000 in half an hour.',
              author: 'CrazyInvestor',
              rating: 5,
            },
            {
              title: 'You need this app.',
              body: 'I didn’t understand the stock market at all before Pocket. I still don’t, but at least I’m rich now.',
              author: 'CluelessButRich',
              rating: 5,
            },
            {
              title: 'This shouldn’t be legal.',
              body: 'Pocket makes it so easy to win big in the stock market that I can’t believe it’s actually legal.',
              author: 'LivingDaDream',
              rating: 5,
            },
            {
              title: 'Screw financial advisors.',
              body: 'I barely made any money investing in mutual funds. With Pocket, I’m doubling my net-worth every single month.',
              author: 'JordanBelfort1962',
              rating: 5,
            },
            {
              title: 'I love it!',
              body: 'I started providing insider information myself and now I get new insider tips every 5 minutes. I don’t even have time to act on all of them. New Lamborghini is being delivered next week!',
              author: 'MrBurns',
              rating: 5,
            },
            {
              title: 'Too good to be true.',
              body: 'I was making money so fast with Pocket that it felt like a scam. But I sold my shares and withdrew the money and it’s really there, right in my bank account. This app is crazy!',
              author: 'LazyRich99',
              rating: 5,
            },
            {
              title: 'Wish I could give 6 stars',
              body: 'This is literally the most important app you will ever download in your life. Get on this before it’s so popular that everyone else is getting these tips too.',
              author: 'SarahLuvzCash',
              rating: 5,
            },
            {
              title: 'Bought an island.',
              body: 'Yeah, you read that right. Want your own island too? Get Pocket.',
              author: 'ScroogeMcduck',
              rating: 5,
            },
            {
              title: 'No more debt!',
              body: 'After 2 weeks of trading on Pocket I was debt-free. Why did I even go to school at all when Pocket exists?',
              author: 'BruceWayne',
              rating: 5,
            },
            {
              title: 'I’m 13 and I’m rich.',
              body: 'I love that with Pocket’s transaction anonymization I could sign up and start trading when I was 12 years old. I had a million dollars before I had armpit hair!',
              author: 'RichieRich',
              rating: 5,
            },
            {
              title: 'Started an investment firm.',
              body: 'I charge clients a 3% management fee and just throw all their investments into Pocket. Easy money!',
              author: 'TheCountOfMonteChristo',
              rating: 5,
            },
            {
              title: 'It’s like a superpower.',
              body: 'Every tip Pocket has sent me has paid off. It’s like playing Blackjack but knowing exactly what card is coming next!',
              author: 'ClarkKent',
              rating: 5,
            },
            {
              title: 'Quit my job.',
              body: 'I downloaded Pocket three days ago and quit my job today. I can’t believe no one else thought to build a stock trading app that works this way!',
              author: 'GeorgeCostanza',
              rating: 5,
            },
            {
              title: 'Don’t download this app',
              body: 'Unless you want to have the best life ever! I am literally writing this from a yacht.',
              author: 'JeffBezos',
              rating: 5,
            },
          ],
        },
        {
          id: "featured-collections",
          enabled: true,
          heading: "Our Most Popular Collections",
          description: "Find the perfect patch for your needs.",
          collections: [
            {
              id: "collection1",
              enabled: true,
              heading: "Create Your Patch",
              description: "Design your own patch in minutes.",
              link: "/collections/create-your-patch",
            },
            {
              id: "collection2",
              enabled: true,
              heading: "Flags",
              description: "We have over 100 options.",
              link: "/collections/flags",
            },
            {
              id: "collection3",
              enabled: true,
              heading: "Memes",
              description: "Trending Patches and Memes",
              link: "/collections/memes",
            },
          ]
        }

      ]
    },
    collection: {
      id: "collection",
      stars: false,
      stickers: {
        filters: [
          {
            title: "Flags",
            link: "/collections/stickers/flags"
          },
          {
            title: "Memes",
            link: "/collections/stickers/memes",
          },
          {
            title: "Chicken",
            link: "/collections/stickers/chicken",
          },
          {
            title: "Scifi",
            link: "/collections/stickers/scifi"
          },
          {
            title: "Quotes",
            link: "/collections/stickers/quotes"
          }
        ]
      }
    },
    product : {
      id: "product",
      stars: false,
      addToCartText : "Add to Cart",
      relatedProductsText : "You should checkout:",
      patchBuilder : {
        startingText : "Starting at",
      }
    },
  },
  header: {
    id: "navigation",
    copyright: "© 2023 PatchPanel. All Rights Reserved.",
    enabled: true,
    navigation: {
      categories: [
        {
          id: 'shop',
          name: 'Shop',
          type: 'featured',
          featured: [
            {
              name: 'Create Your Patch',
              description: 'Build Out Your Patch, with many different styles, flags, and textures.',
              href: '/collections/create-your-patch',
              imageSrc: 'https://cdn.shopify.com/s/files/1/2242/5805/files/create-a-patch.jpg?v=1681944116',
              imageAlt:
                'A customized ID Panel from vertibage to flags to materials.',
            },
            {
              name: 'Best Sellers',
              description: 'Our Community has shared these are their favorites.',
              href: '/collections/best-sellers',
              imageSrc: 'https://cdn.shopify.com/s/files/1/2242/5805/files/best-sellers.jpg?v=1681944116',
              imageAlt:
                'K9 Unit with PatchPanel America Flag on the chest.',
            },
            {
              name: 'Stickers',
              description: 'Our Favorite Stickers',
              href: '/collections/stickers',
              imageSrc: 'https://cdn.shopify.com/s/files/1/2242/5805/files/bulk-order.jpg?v=1681944116',
              imageAlt: 'Two men dressed in tactical gear, wearing Patch Panel ID Panels.',
            },
          ],
          sections: [
            [{
              id: 'create', name: 'Create Your Patch', items: [
                { name: 'ID Panel', href: '/products/id-panel' },
                { name: 'Medical Patch', href: '/products/medical-patch' },
                { name: 'Flag', href: '/products/flag' },
                { name: 'Jacket Panel', href: '/products/jacket-panel' },
                { name: 'Division Jacket Panel', href: '/products/division-jacket-panel' },
                { name: 'Custom Print Patch', href: '/products/custom-print-patch' },
                { name: 'Name Tape', href: '/products/name-tape' },
                { name: 'Call Signs', href: '/products/call-signs' },
                { name: 'Light Sabers', href: '/products/light-sabers' },
                { name: 'Custom Quotes', href: '/products/custom-quotes' },
              ]
            },
            ],
            [
              {
                id: 'patches',
                name: 'Patches',
                items: [
                  { name: 'Flags', href: '/collections/flags' },
                  { name: 'Memes', href: '/collections/memes' },
                  { name: 'Morale', href: '/collections/morale' },
                  { name: 'Accessories', href: '/collections/accessories' },
                  { name: 'Leather Patches', href: '/collections/leather-patches' },
                  { name: 'Prototypes / Blemished', href: '/collections/prototypes-blemished' },


                ],
              },
            ],
            [
              {
                id: 'stickers',
                name: 'Stickers',
                items: [
                  { name: 'Chicken Stickers', href: '/collections/chicken-stickers' },
                  { name: 'Hi Vis Stickers', href: '/collections/hivis-stickers' },

                ],
              },
            ],
          ],
        },
        {
          id: 'learn',
          name: 'Learn',
          type: 'learn',
          featured: [
            {
              name: 'Our Story',
              description: 'From the bottom to the top, this is our story.',
              href: '/pages/our-story',
              imageSrc: 'https://cdn.shopify.com/s/files/1/2242/5805/files/our-story.jpg?v=1681947585',
              imageAlt: 'Close up of a man in police tactical gear with PatchPanel Patches.',
            },
            // {
            //   name: 'Our Process',
            //   description: 'How we make it, how it gets to you, how we do our jobs.',
            //   href: '/pages/our-process',
            //   imageSrc: 'https://cdn.shopify.com/s/files/1/2242/5805/files/our-process.jpg?v=1681947585ecommerce-images/mega-menu-category-02.jpg',
            //   imageAlt: 'A close up of a main looking at a camera.',
            // },
            // {
            //   name: 'Our Customers',
            //   description: 'Our customers are just as apart of our identity as our story.',
            //   href: '/pages/our-customers',
            //   imageSrc: 'https://cdn.shopify.com/s/files/1/2242/5805/files/our-customers.jpg?v=1681944116',
            //   imageAlt: 'Customer wearing Police gear and PatchPanel Id Panel.',
            // },
          ],
          sections: [
            [
              {
                id: 'information',
                name: 'Information',
                items: [
                  { name: 'Our Story', href: '/pages/our-story', icon: FilmIcon },
                  // { name: 'Our Process', href: '/pages/our-process', icon: BuildingOffice2Icon },
                  // { name: 'Our Customers', href: '/pages/our-customers', icon: UsersIcon },
                  // { name: 'Press', href: '/pages/press', icon: NewspaperIcon },
                  // { name: 'Blog', href: '/blogs/blog', icon: CalendarDaysIcon },
                ],
              }, ,
            ],
            [
              {
                id: 'programs',
                name: 'Programs',
                items: [
                  // { name: 'Bulk Orders', href: '/pages/bulk-orders', icon: InformationCircleIcon },
                  // { name: 'Wholesale', href: '/pages/wholesale', icon: CalculatorIcon },
                  { name: 'PatchPerks', href: '/pages/patchperks', icon: GiftIcon },
                  // { name: 'Partner Program', href: '/pages/partner-program', icon: GlobeAltIcon },
                  // { name: 'UGC Creator Program', href: '/pages/ugc-creator-program', icon: CameraIcon },

                ],
              },
            ],
            [
              {
                id: 'policies',
                name: 'Policies & Procedures',
                items: [
                  // { name: 'Your Privacy', href: '/pages/your-privacy', icon: ShieldCheckIcon },
                  { name: 'Returns & Exchanges', href: '/pages/returns-and-exchanges', icon: ArrowPathIcon },
                  { name: 'Shipping Policy', href: '/pages/free-shipping-and-delivery-information', icon: TruckIcon },
                  // { name: 'Freedom of Speech', href: '/pages/freedom-of-speech', icon: ChatBubbleLeftIcon },
                ],
              },
            ],
          ],
        },
      ],
      pages: [
        // { name: 'Bundle & Save', href: '#' },
      ],
    },
  },
  footer: {
    id: "footer",
    copyright: "© 2023 PatchPanel. All Rights Reserved.",
    enabled: true,
    navigation: {
      information: [
        { name: 'Our Story', href: '/pages/our-story', icon: FilmIcon },
        // { name: 'Our Process', href: '/pages/our-process', icon: BuildingOffice2Icon },
        // { name: 'Our Customers', href: '/pages/our-customers', icon: UsersIcon },
        // { name: 'Press', href: '/pages/press', icon: NewspaperIcon },
        // { name: 'Blog', href: '/blogs/blog', icon: CalendarDaysIcon },
      ],
      support: [
        { name: 'Contact Us', href: 'https://wmisports.reamaze.com/chat-with-us/' },
        { name: 'Track Order', href: '#' },
      ],
      programs: [
        // { name: 'Bulk Orders', href: '/pages/bulk-orders', icon: InformationCircleIcon },
        // { name: 'Wholesale', href: '/pages/wholesale', icon: CalculatorIcon },
        { name: 'PatchPerks', href: '/pages/patchperks', icon: GiftIcon },
        // { name: 'Partner Program', href: '/pages/partner-program', icon: GlobeAltIcon },
        // { name: 'UGC Creator Program', href: '/pages/ugc-creator-program', icon: CameraIcon },
      ],
      policies: [
        // { name: 'Your Privacy', href: '/pages/your-privacy', icon: ShieldCheckIcon },
        { name: 'Returns & Exchanges', href: '/pages/returns-and-exchanges', icon: ArrowPathIcon },
        { name: 'Shipping Policy', href: '/pages/free-shipping-and-delivery-information', icon: TruckIcon },
        // { name: 'Freedom of Speech', href: '/pages/freedom-of-speech', icon: ChatBubbleLeftIcon },
      ],
      social: [
        {
          name: 'Facebook',
          href: 'https://www.facebook.com/thepatchpanel',
          icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          ),
        },
        {
          name: 'Instagram',
          href: 'https://www.instagram.com/patchpanel/',
          icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
          ),
        },
        // {
        //   name: 'Twitter',
        //   href: '#',
        //   icon: (props) => (
        //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        //       <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        //     </svg>
        //   ),
        // },
        // {
        //   name: 'GitHub',
        //   href: '#',
        //   icon: (props) => (
        //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        //       <path
        //         fillRule="evenodd"
        //         d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        //         clipRule="evenodd"
        //       />
        //     </svg>
        //   ),
        // },
        // {
        //   name: 'YouTube',
        //   href: '#',
        //   icon: (props) => (
        //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        //       <path
        //         fillRule="evenodd"
        //         d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
        //         clipRule="evenodd"
        //       />
        //     </svg>
        //   ),
        // },
      ],
    },
    newsletter: {
      id: "newsletter",
      enabled: true,
      heading: "Email List",
      description: "Sign up to get early access, special promotions, and insider information.",
      form: {
        id: "newsletter-form",
        placeholder: "Email Address",
        button: "Join",
      }
    }
  }

};

export default config;