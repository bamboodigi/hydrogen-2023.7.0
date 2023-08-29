const builderData = {
  type: {
    "id panel": {
      name: "ID Panel",
      basePrice: 23,
      config: {
        "sizes": [
          {
            size: '3” x 2”',
            maxLength: 13,
            lines: 1,
            placeholder: 'Name',
            maxLength2: 12,
            lines2: 2,
            placeholder2: 'APOS\nNKDA',
            hasFlag: true,
            sizeUpsell: 0,
            glowInTheDark: 0,
            hiVis: 3,
            badge: 25,
          },
          {
            size: '3.5” x 2”',
            maxLength: 13,
            lines: 1,
            placeholder: 'Name',
            maxLength2: 12,
            lines2: 2,
            placeholder2: 'APOS\nNKDA',
            hasFlag: true,
            sizeUpsell: 1,
            glowInTheDark: 0,
            hiVis: 3,
            badge: 25,
          },
          {
            size: '4” x 2”',
            maxLength: 13,
            lines: 1,
            placeholder: 'Name',
            maxLength2: 12,
            lines2: 2,
            placeholder2: 'APOS\nNKDA',
            hasFlag: true,
            sizeUpsell: 0,
            glowInTheDark: 5,
          },
          {
            size: '5” x 3”',
            maxLength: 13,
            lines: 1,
            placeholder: 'Name',
            maxLength2: 12,
            lines2: 2,
            placeholder2: 'APOS\nNKDA',
            hasFlag: true,
            sizeUpsell: 8,
            glowInTheDark: 10,
            hiVis: 5,
            badge: 25,
          },
          {
            size: '6” x 2”',
            maxLength: 13,
            lines: 1,
            placeholder: 'Name',
            maxLength2: 12,
            lines2: 2,
            placeholder2: 'APOS\nNKDA',
            hasFlag: true,
            sizeUpsell: 3,
            hiVis: 5,
            glowInTheDark: 10,
            badge: 25,
          },
          {
            size: '6” x 3”',
            maxLength: 13,
            lines: 1,
            placeholder: 'Your Name',
            maxLength2: 12,
            lines2: 2,
            placeholder2: 'APOS\nNKDA',
            hasFlag: true,
            sizeUpsell: 8,
            hiVis: 5,
            glowInTheDark: 10,
            badge: 25,
            tRexArms: true,
            policeID: 19,
          }
        ],
        extra: [
          {
            name: "DeadBug DV2",
            size: '6” x 4”',
            maxLength: 13,
            lines: 1,
            placeholder: 'Name',
            maxLength2: 12,
            lines2: 2,
            placeholder2: 'APOS\nNKDA',
            hasFlag: true,
            sizeUpsell: 8,
            hiVis: 5,
            glowInTheDark: 10,
            badge: 25,
            tRexArms: true,
            policeID: 19,
          }
        ]
      },
      form: {
        intro: "Our ID panels come in various sizes. You will be able to custom your ID, blood type or allergy, font & background colors. You will be able to choose from a wide variety of flags or upload one yourself. Get through all the steps and see your patch come to life.",
        btnText: "Get Started",
        steps: [
          {
            name: "Patch Size",
            input: [
              {
                id: 'size',
                label: 'Size',
                type: 'select',
                placeholder: '3" x 2"',
              },
            ],
          },
          {
            name: "Text",
            input: [
              {
                id: 'text',
                label: 'Text',
                type: 'input',
                placeholder: 'Name',
              },
              {
                id: 'bloodType',
                label: 'Blood Type & Allergies',
                type: 'textarea',
                placeholder: 'APOS\nNKDA',
              },
            ],
          },
          {
            name: "Font & Background Colors",
            input: [
              {
                id: 'textColor',
                label: 'Text Color',
                type: 'advancedSelect',
                placeholder: 'Flat Spice Brown',
              },
              {
                id: 'backgroundColor',
                label: 'Background Color',
                type: 'advancedSelect',
                placeholder: 'Multicam Alpine',
              },
            ],
          },
          {
            name: "Flag",
            input: [
              // {
              //   flag: 'flagType',
              //   label: 'Flag Type',
              //   type: 'select',
              //   placeholder: 'Lazer Cut Flag',
              // },
              {
                id: 'flag',
                label: 'Flag',
                type: 'advancedSelect',
                placeholder: 'USA',
              },
              {
                id: 'flagReverse',
                label: 'Do you want to reverse the flag?',
                type: 'checkmark',
                placeholder: '',
              },
            ],
          },
          {
            name: "Almost There",
            input: [
              {
                id: 'glowInTheDark',
                label: 'Add a glow in the dark border? +$10 USD',
                type: 'checkmark',
                placeholder: '',
              },
              {
                id: "leadTime",
                label: 'I Agree to the Lead Time',
                type: 'checkmark',
                placeholder: '<strong>Lead Time:</strong>  - From your order, to design, production, QC, and shipping, takes roughly 10 business days. Don\'t worry, we\'ll keep you updated with what is going on the whole time. Check this box to confirm that you understand that your order will take roughly 10 business days to ship.',
              },
            ],
          },
        ]
      },
    },
    "name tape": {
      name: "Name Tape",
      basePrice: 13,
      config: {
        sizes: [
          { size: '3” x 1”', maxLength: 9, lines: 1, placeholder: 'Your Name', hasFlag: false, sizeUpsell: 0, glowInTheDark: 5 },
          { size: '4” x 1”', maxLength: 10, lines: 1, placeholder: 'Your Name', hasFlag: true, sizeUpsell: 1, glowInTheDark: 5 },
          { size: '4” x 1.5”', maxLength: 10, lines: 1, placeholder: 'Your Name', hasFlag: false, sizeUpsell: 3, glowInTheDark: 5 },
          { size: '5” x 1”', maxLength: 13, lines: 1, placeholder: 'Your Name', hasFlag: true, sizeUpsell: 2, glowInTheDark: 5, tacTecCarrier: 2, tacTecTrainer: 3, tRexArms: 0 },
          { size: '5” x 1.5”', maxLength: 13, lines: 1, placeholder: 'Your Name', hasFlag: false, sizeUpsell: 4, glowInTheDark: 5 },
          { size: '6” x 2”', maxLength: 10, lines: 1, placeholder: 'Your Name', hasFlag: false, sizeUpsell: 8, glowInTheDark: 10, policeBlueLine: 5, sheriffBlueLine: 5, },
          { size: '8” x 2”', maxLength: 30, lines: 2, placeholder: 'Up to \n2 Lines', hasFlag: false, sizeUpsell: 9, glowInTheDark: 10, tRexArms: 4 },
          { size: '8” x 3”', maxLength: 26, lines: 2, placeholder: 'Up to \n2 Lines', hasFlag: false, sizeUpsell: 14, glowInTheDark: 10 },
          { size: '8” x 4”', maxLength: 39, lines: 3, placeholder: 'Up to \n3 \nLines', hasFlag: false, sizeUpsell: 24, glowInTheDark: 10 },
          { size: '9” x 3”', maxLength: 26, lines: 2, placeholder: 'Up to 2\n Lines of Text', hasFlag: false, sizeUpsell: 15, glowInTheDark: 15 },
          { size: '10” x 2”', maxLength: 13, lines: 1, placeholder: 'Your Name', hasFlag: false, sizeUpsell: 14, glowInTheDark: 10 },
          { size: '11” x 3”', maxLength: 32, lines: 2, placeholder: 'Up to 2 \nLines of Text', hasFlag: false, sizeUpsell: 17, glowInTheDark: 15 },
          { size: '12” x 4”', maxLength: 54, lines: 3, placeholder: 'Up to \n3 \nLines of Text', hasFlag: false, sizeUpsell: 41, glowInTheDark: 20 },
        ],
        extra: [
          { size: '2.5” x 1”', maxLength: 7, lines: 1, placeholder: 'Your Nm', hasFlag: false, sizeUpsell: 1, glowInTheDark: 5, name: "Custom ID Tag" },
          { size: '5” x 1”', maxLength: 4, lines: 1, placeholder: 'Dad', hasFlag: false, sizeUpsell: 9, glowInTheDark: 7, name: "* As Fuck Name Tape" },
        ],
      },
      form: {
        intro: "Our Name Tape come in various sizes. For sizes 4 x 1, 5 x1 come with the option to add a flag.",
        btnText: "Get Started",
        steps: [
          {
            name: "Text & Size",
            status: 'current',
            input: [
              {
                id: 'text',
                label: 'Text',
                type: 'input',
                placeholder: '',
              },
              {
                id: 'size',
                label: 'Size',
                type: 'select',
                placeholder: '',
              },
            ],
          },
          {
            name: "Font & Background Colors",
            status: 'upcoming',
            input: [
              {
                id: 'textColor',
                label: 'Text Color',
                type: 'advancedSelect',
                placeholder: 'Flat Spice Brown',
              },
              {
                id: 'backgroundColor',
                label: 'Background Color',
                type: 'advancedSelect',
                placeholder: 'Multicam Alpine',
              },
            ],
          },
          {
            name: "Almost There",
            status: 'upcoming',
            input: [
              {
                id: 'glowInTheDark',
                label: 'Add a glow in the dark border? +$10 USD',
                type: 'checkmark',
                placeholder: '',
              },
              {
                id: 'leadTime',
                label: 'I Agree to the Lead Time',
                type: 'checkmark',
                placeholder: '<strong>Lead Time:</strong>  - From your order, to design, production, QC, and shipping, takes roughly 10 business days. Don\'t worry, we\'ll keep you updated with what is going on the whole time. Check this box to confirm that you understand that your order will take roughly 10 business days to ship.',
              },
            ],
          },
        ],
      }
    },
    "medical patch": {
      name: "Medical Patch",
      basePrice: 10,
      config: {
        sizes: [
          { size: '1” x 1”', maxLength: null, lines: null, placeholder: null, hasFlag: true, sizeUpsell: 0 },
          { size: '2” x 2”', maxLength: null, lines: null, placeholder: null, hasFlag: true, sizeUpsell: 3 },
          { size: '3.5” x 2”', maxLength: 12, lines: 2, placeholder: 'APOS\nNKDA', hasFlag: true, sizeUpsell: 9 },
        ],
        extra: [
          { name: "Hexagonal", size: '3.5” x 3.5”', maxLength: null, lines: null, placeholder: null, hasFlag: true, sizeUpsell: 9 },
        ]
      },
      form: {
        intro: "Our Medical Patches come in 3 various sizes. You will be able to add blood type or allergy if you choose the 3.5\" x 2\" size.",
        btnText: "Get Started",
        steps: [
          {
            name: "Symbol & Size",
            status: 'current',
            input: [
              {
                id: 'size',
                label: 'Size',
                type: 'select',
                placeholder: '',
              },
              {
                id: 'symbol',
                label: 'Symbol',
                type: 'advancedSelect',
              },
            ],
          },
          {
            name: "Symbol & Background Colors",
            status: 'upcoming',
            input: [
              {
                id: 'textColor',
                label: 'Symbol Color',
                type: 'advancedSelect',
                placeholder: 'Flat Spice Brown',
              },
              {
                id: 'backgroundColor',
                label: 'Background Color',
                type: 'advancedSelect',
                placeholder: 'Multicam Alpine',
              },
            ],
          },
          {
            name: "Almost There",
            status: 'upcoming',
            input: [
              {
                id: 'glowInTheDark',
                label: 'Add a glow in the dark border? +$10 USD',
                type: 'checkmark',
                placeholder: '',
              },
              {
                id: 'leadTime',
                label: 'I Agree to the Lead Time',
                type: 'checkmark',
                placeholder: '<strong>Lead Time:</strong>  - From your order, to design, production, QC, and shipping, takes roughly 10 business days. Don\'t worry, we\'ll keep you updated with what is going on the whole time. Check this box to confirm that you understand that your order will take roughly 10 business days to ship.',
              },
            ],
          },
        ],
      },
    },
    "flag": {
      name: "Flag",
      basePrice: 15,
      config: {
        sizes: [
          { size: '3” x 2”', maxLength: null, lines: null, placeholder: null, hasFlag: true, sizeUpsell: 0, hiVis: 5 },
          { size: '3.5” x 2”', maxLength: null, lines: null, placeholder: null, hasFlag: true, sizeUpsell: 1, thinLine: 4, hiVis: 5 },
          { size: '5” x 3”', maxLength: null, lines: null, placeholder: null, hasFlag: true, sizeUpsell: 5, tRexArms: 6, hiVis: 5 },
          { size: '6” x 2”', maxLength: null, lines: null, placeholder: null, hasFlag: true, sizeUpsell: 9, hiVis: 5 },
          { size: '6” x 3”', maxLength: null, lines: null, placeholder: null, hasFlag: true, sizeUpsell: 13, hiVis: 5 }
        ],
        extra: [
          { name: "Hexagonal", size: '3.5” x 3.5”', maxLength: null, lines: null, placeholder: null, hasFlag: true, sizeUpsell: 3 },
        ]
      },
      form: {
        intro: "Our Flag Patches come in Lazer Cut or Reflective Hi Vis.",
        btnText: "Get Started",
        steps: [
          {
            name: "Flag",
            input: [
              {
                flag: 'flagType',
                label: 'Flag Type',
                type: 'select',
                placeholder: 'Lazer Cut Flag',
              },
              {
                id: 'flag',
                label: 'Flag',
                type: 'advancedSelect',
                placeholder: 'USA',
              },
              {
                id: 'flagReverse',
                label: 'Do you want to reverse the flag?',
                type: 'checkmark',
                placeholder: '',
              },
            ],
          },
          {
            name: "Background Colors",
            status: 'upcoming',
            input: [
              {
                id: 'backgroundColor',
                label: 'Background Color',
                type: 'advancedSelect',
                placeholder: 'Multicam Alpine',
              },
            ],
          },
          {
            name: "Almost There",
            status: 'upcoming',
            input: [
              {
                id: 'glowInTheDark',
                label: 'Add a glow in the dark border? +$10 USD',
                type: 'checkmark',
                placeholder: '',
              },
              {
                id: 'leadTime',
                label: 'I Agree to the Lead Time',
                type: 'checkmark',
                placeholder: '<strong>Lead Time:</strong>  - From your order, to design, production, QC, and shipping, takes roughly 10 business days. Don\'t worry, we\'ll keep you updated with what is going on the whole time. Check this box to confirm that you understand that your order will take roughly 10 business days to ship.',
              },
            ],
          },
        ],
      },
    },
    "light sabers": {
      name: "Light Sabers",
      config: {
        "sizes": [
          { size: '5” x 1”', maxLength: null, lines: null, placeholder: null },
        ],
      },
      form: {
        intro: "Our Flag Patches come in Lazer Cut or Reflective Hi Vis.",
        btnText: "Get Started",
        steps: [
          {
            name: "Hilt, Saber, and Background Colors",
            status: 'current',
            input: [
              // {
              //   id: 'hiltColor',
              //   label: 'Hilt Color',
              //   type: 'advancedSelect',
              //   placeholder: 'Flat Spice Brown',
              // },
              // {
              //   id: 'bladeColor',
              //   label: 'Blade Color',
              //   type: 'advancedSelect',
              //   placeholder: 'Flat Spice Brown',
              // },
              {
                id: 'backgroundColor',
                label: 'Background Color',
                type: 'advancedSelect',
                placeholder: 'Multicam Alpine',
              },
            ],
          },
          {
            name: "Almost There",
            status: 'upcoming',
            input: [
              {
                flag: 'bladeType',
                label: 'Blade Type',
                type: 'select',
              },
              {
                id: 'leadTime',
                label: 'I Agree to the Lead Time',
                type: 'checkmark',
                placeholder: '<strong>Lead Time:</strong>  - From your order, to design, production, QC, and shipping, takes roughly 10 business days. Don\'t worry, we\'ll keep you updated with what is going on the whole time. Check this box to confirm that you understand that your order will take roughly 10 business days to ship.',
              },
            ],
          },
        ],
      },
    },
    "custom printed patch": {
      name: "Custom Printed Patch",
      config: {
        "sizes": [
          { size: '3.5” x 2”', maxLength: null, lines: null, placeholder: null },
        ],
      },
      form: {
        intro: "Our Signature printed patches are constructed with durable, fade resistant ink in either a reflective, or non-reflective format on a honeycomb textured material. This low cost, no minimum budget material is great choice for designs too complex for conventional patch materials.",
        btnText: "Get Started",
        steps: [
          {
            name: "Material Type + Upload",
            status: 'upcoming',
            input: [
              {
                id: 'materialType',
                label: 'Material Type',
                type: 'select',
                placeholder: 'Reflective',
              },
              {
                id: 'upload',
                label: 'Upload your image',
                type: 'upload',
              },
            ],
          },
          {
            name: "Almost There",
            status: 'upcoming',
            input: [
              {
                id: 'terms',
                label: 'Terms and Conditions',
                type: 'checkmark',
                placeholder: 'I  understand that Copyrighted images, or images determined to contain hateful material are subject to cancellation without notice. But that\'s not a problem, because I\'m not a jerk.',
              },
              {
                id: 'leadTime',
                label: 'I Agree to the Lead Time',
                type: 'checkmark',
                placeholder: '<strong>Lead Time:</strong>  - From your order, to design, production, QC, and shipping, takes roughly 10 business days. Don\'t worry, we\'ll keep you updated with what is going on the whole time. Check this box to confirm that you understand that your order will take roughly 10 business days to ship.',
              },
            ],
          },
        ],
      },
    },
    "jacket panel": {
      name: "Jacket Panel",
      config: {
        "sizes": [
          { size: '3.5” x 4”', maxLength: 13, lines: 1, placeholder: 'your name' },
          { size: '4.6” x 6.2”', maxLength: 13, lines: 1, placeholder: 'your name' },
          { size: '3.5” x 3.5”', maxLength: 13, lines: 1, placeholder: 'your name' },
          { size: '3.6” x 5”', maxLength: 13, lines: 1, placeholder: 'your name' },
          { size: '4” x 4.5”', maxLength: 13, lines: 1, placeholder: 'your name' }
        ]
      },
      form: {
        intro: "Our Jacket Panels come in various sizes. Choose from different.",
        btnText: "Get Started",
        steps: [
          {
            name: "Text",
            input: [
              {
                id: 'text',
                label: 'Text',
                type: 'input',
                placeholder: 'Name',
              },
              {
                id: 'bloodType',
                label: 'Blood Type & Allergies',
                type: 'textarea',
                placeholder: 'APOS\nNKDA',
              },
            ],
          },
          {
            name: "Patch Size",
            input: [
              {
                id: 'size',
                label: 'Size',
                type: 'select',
                placeholder: '3" x 2"',
              },
            ],
          },
          {
            name: "Font & Background Colors",
            input: [
              {
                id: 'textColor',
                label: 'Text Color',
                type: 'advancedSelect',
                placeholder: 'Flat Spice Brown',
              },
              {
                id: 'backgroundColor',
                label: 'Background Color',
                type: 'advancedSelect',
                placeholder: 'Multicam Alpine',
              },
            ],
          },
          {
            name: "Flag",
            input: [
              {
                flag: 'flagType',
                label: 'Flag Type',
                type: 'select',
                placeholder: 'Lazer Cut Flag',
              },
              {
                id: 'flag',
                label: 'Flag',
                type: 'advancedSelect',
                placeholder: 'USA',
              },
              {
                id: 'flagReverse',
                label: 'Do you want to reverse the flag?',
                type: 'checkmark',
                placeholder: '',
              },
            ],
          },
          {
            name: "Almost There",
            input: [
              {
                id: 'glowInTheDark',
                label: 'Add a glow in the dark border? +$10 USD',
                type: 'checkmark',
                placeholder: '',
              },
              {
                id: "leadTime",
                label: 'I Agree to the Lead Time',
                type: 'checkmark',
                placeholder: '<strong>Lead Time:</strong>  - From your order, to design, production, QC, and shipping, takes roughly 10 business days. Don\'t worry, we\'ll keep you updated with what is going on the whole time. Check this box to confirm that you understand that your order will take roughly 10 business days to ship.',
              },
            ],
          },
        ]
      },
    }
  },
  colors: {
    bgColors: [
      {
        name: 'Black',
        img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/black.jpg?v=1678555191'
      },
      {
        name: 'Coyote Brown',
        img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/Coyote-7x7-V3.jpg?v=1678555924'
      },
      {
        name: 'Tan 499',
        img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/tan499.jpg?v=1678555191'
      },
      {
        name: 'OD Green',
        img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/od-green.jpg?v=1678555191'
      },
      {
        name: 'Ranger Green',
        img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/ranger-green.jpg?v=1678555191'
      },
      {
        name: 'Wolf Grey',
        img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/wolf-grey.jpg?v=1678555191'
      },
      {
        name: 'Navy Blue',
        img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/navy-blue.jpg?v=1678555191'
      },
      {
        name: 'Black Blue',
        img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/blue-black.jpg?v=1678555190'
      },
      {
        name: 'Blaze Orange',
        img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/blaze-orange.jpg?v=1678555191'
      },
      {
        name: 'Red',
        img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/red.jpg?v=1678555191'
      },
      {
        name: 'Lime Green',
        img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/lime-green.jpg?v=1678555191'
      },
      {
        name: 'Flourescent Pink',
        img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/pink.jpg?v=1678555191'
      },
      {
        name: 'Safety Yellow',
        img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/saftey-yellow.jpg?v=1678555190'
      },
      {
        name: 'Purple',
        img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/purple.jpg?v=1678555191'
      },
      { name: 'Multicam', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/multicam.jpg?v=1678555191' },
      { name: 'Multicam Black', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/multicam-black.jpg?v=1678555191' },
      { name: 'Multicam Tropic', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/multicam-tropic.jpg?v=1678555191' },
      { name: 'Multicam Arid', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/multicam-arid.jpg?v=1678555191' },
      { name: 'Multicam Alpine', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/multicam-alpine.jpg?v=1678555191' },
      { name: 'Desert MARPAT', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/desert-marpat.jpg?v=1678555191' },
      { name: 'MARPAT', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/marpat.jpg?v=1678555191' },
      { name: 'M05 Woodland', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/marpat.jpg?v=1678555191' },
      { name: 'M81 Woodland', img: 'https://cdn-zeptoapps.com/product-personalizer/images/patchpanel.myshopify.com/Small-RF-M81-Woodland.jpg?v=12330' },
      { name: 'Kryptek Typhon', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/typhon.jpg?v=1678555191' },
      { name: 'Kryptek Mandrake', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/mandrake.jpg?v=1678555191' },
      { name: 'Flourescent Splatter with Hot Pink thread', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/splatter.jpg?v=1678555191' },
      { name: 'Flecktarn', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/flactarn.jpg?v=1678555191' },
      { name: 'WZ93 PANTERA', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/wz93.jpg?v=1678555191' },
      { name: 'U.S. Desert Night Camo', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/desert-night.jpg?v=1678555191' },
      { name: 'CADPAT AR', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/cadpat-ar.jpg?v=1678555191' },
      { name: 'CADPAT TW', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/cadpat-tw.jpg?v=1678555191' },
      { name: 'AOR1', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/aor1.jpg?v=1678555191' },
      { name: 'AOR2', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/aor2.jpg?v=1678555191' },
      { name: 'A-TACS IX', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/a-tacs-ix.jpg?v=1678555191' },
      { name: 'A-TACS UCON', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/a-tacs-ucon.jpg?v=1678555191' },
      { name: 'A-TACS LE', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/a-tacs-le.jpg?v=1678555191' },
      { name: 'A-TACS GHOST', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/a-tacs-ghost.jpg?v=1678555191' },
      { name: 'A-TACS FG', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/a-tacs-fg.jpg?v=1678555191' },
      { name: 'PenCott GreenZone', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/pencott-greenzone.jpg?v=1678555191' },
      { name: 'PenCott BadLands', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/pencott-badlands.jpg?v=1678555191' },
      { name: 'PenCott Sandstorm', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/pencott-sandstorm.jpg?v=1678555191' },
      { name: 'PenCott SnowDrift', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/pencott-snowdrift.jpg?v=1678555191' },
      { name: 'Blue Plaid', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/blue-plaid.jpg?v=1678555191' },
      { name: 'FlockCam with Orange thread', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/flockam-with-orange-thread.jpg?v=1678555191' },
      {
        name: 'Tadpole Tigerstripe',
        img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/tadpole-tigerstripe.jpg?v=1678555191'
      },
      {
        name: '6 Colour - Chocolate Chip',
        img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/chocolate-chip.jpg?v=1678555191'
      },
      {
        name: 'WWII FrogSkin Brownside',
        img: 'https://cdn-zeptoapps.com/product-personalizer/images/patchpanel.myshopify.com/Small-RF-WWII-FrogSkin-Brownside.jpg?v=12330'
      },
      {
        name: 'WWII FrogSkin Greenside',
        img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/wwii-frogskin.jpg?v=1678555191'
      },
      {
        name: 'Tie Dye (Limited Time)',
        img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/tie-dye.jpg?v=1678555191'
      },
      {
        name: 'Tropical (Limited Time)',
        img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/tropical.jpg?v=1678555191'
      }
    ],
    fontColors: [
      { name: 'Basic IR', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/basic-ir.jpg?v=1692905056' },
      { name: 'Pro IR - +$7 (USD)', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/pro-ir.jpg?v=1692905056' },
      { name: 'Reflective + Glow-in-the-Dark - +$7 (USD)', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/reflective-glow-in-the-dark.jpg?v=1692905056' },
      { name: 'Glow in the Dark', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/glow-in-the-dark.jpg?v=1692905056' },
      { name: 'Flat Black', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/flat-black.jpg?v=1692905056' },
      { name: 'Flat White', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/flat-white.jpg?v=1692905056' },
      { name: 'Flat Yellow', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/flat-yellow.jpg?v=1692905056' },
      { name: 'Flat Grey', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/flat-grey.jpg?v=1692905056' },
      { name: 'Flat Spice Brown', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/flat-spice-brown.jpg?v=1692905056' },
      { name: 'Yellow Reflective', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/yellow-reflective.jpg?v=1692905056' },
      { name: 'Orange Reflective', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/orange-reflective.jpg?v=1692905056' },
      { name: 'Red Reflective', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/red-reflective.jpg?v=1692905056' },
      { name: 'Lime Green Reflective', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/lime-green-reflective.jpg?v=1692905056' },
      { name: 'Blue Reflective', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/blue-reflective.jpg?v=1692905056' },
      { name: 'Silver Reflective', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/silver-reflective.jpg?v=1692905056' },
      { name: 'Purple Reflective', img: 'https://cdn.shopify.com/s/files/1/2242/5805/files/purple-reflective.jpg?v=1692905056' },
    ]
  },
  imgs: {
    "hi-vis": [
      {
        name: "USA",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa.png?v=1678643329",
        variants: [
          {
            name: "USA Thin Red Line",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-trl.png?v=1678643329"
          },
          {
            name: "USA Thin Blue Line",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-tbl.png?v=1678643329"
          },
          {
            name: "USA Thin Green Line",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-tgl.png?v=1678643329"
          },
          {
            name: "USA Black and White",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-black-and-white.png?v=1678643329"
          },
          {
            name: "USA Black and White Thin Red Line",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-black-and-white-trl.png?v=1678643329"
          },
          {
            name: "USA Black and White Thin Blue Line",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-black-and-white-tbl.png?v=1678643329"
          },
          {
            name: "USA Black and White Thin Green Line",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-black-and-white-tgl.png?v=1678643329"
          },
        ]
      },
      {
        name: "Canada",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-canada.png?v=1678643213",
        variants: [
          {
            name: "Canada Thin Red Line",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-canada-trl.png?v=1678643213"
          },
          {
            name: "Canada Thin Blue Line",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-canada-tbl.png?v=1678643213"
          },
          {
            name: "Canada Thin Green Line",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-canada-tgl.png?v=1678643213"
          },
          {
            name: "Canada Black and White",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-canada-black-and-white.png?v=1678643213"
          },
          {
            name: "Canada Thin Red Line",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-canada-black-and-white-trl.png?v=1678643213"
          },
          {
            name: "Canada Thin Blue Line",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-canada-black-and-white-tbl.png?v=1678643213"
          },
          {
            name: "Canada Thin Green Line",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-canada-black-and-white-tgl.png?v=1678643213"
          }
        ]
      },
      {
        name: "USA State Flags",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-usa-state-flags.png?v=1678643184",
        variants: [
          {
            name: "Texas",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-texas.png?v=1678643184"
          },
          {
            name: "California",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-california.png?v=1678643184"
          },
          {
            name: "New York",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-new-york.png?v=1678643184"
          },
          {
            name: "Florida",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-florida.png?v=1678643184"
          },
          {
            name: "Hawaii",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-hawaii.png?v=1678643184"
          },
          {
            name: "Alaska",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-alaska.png?v=1678643184"
          },
          {
            name: "Washington",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-washington.png?v=1678643184"
          },
          {
            name: "Oregon",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-oregon.png?v=1678643184"
          },
          {
            name: "Nevada",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-nevada.png?v=1678643184"
          },
          {
            name: "Idaho",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-idaho.png?v=1678643184"
          },
          {
            name: "Utah",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-utah.png?v=1678643184"
          },
          {
            name: "Arizona",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-arizona.png?v=1678643184"
          },
          {
            name: "Montana",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-montana.png?v=1678643184"
          },
          {
            name: "Wyoming",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-wyoming.png?v=1678643184"
          },
          {
            name: "Colorado",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-colorado.png?v=1678643184"
          },
          {
            name: "New Mexico",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-new-mexico.png?v=1678643184"
          },
          {
            name: "North Dakota",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-north-dakota.png?v=1678643184"
          },
          {
            name: "South Dakota",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-south-dakota.png?v=1678643184"
          },
          {
            name: "Nebraska",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-nebraska.png?v=1678643184"
          },
          {
            name: "Kansas",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-kansas.png?v=1678643184"
          },
          {
            name: "Oklahoma",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-oklahoma.png?v=1678643184"
          },
          {
            name: "Texas",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-texas.png?v=1678643184"
          },
          {
            name: "Minnesota",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-minnesota.png?v=1678643184"
          },
          {
            name: "Iowa",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-iowa.png?v=1678643184"
          },
          {
            name: "Missouri",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-missouri.png?v=1678643184"
          },
          {
            name: "Arkansas",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-arkansas.png?v=1678643184"
          },
          {
            name: "Louisiana",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-louisiana.png?v=1678643184"
          },
          {
            name: "Mississippi",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-mississippi.png?v=1678643184"
          },
          {
            name: "Alabama",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-alabama.png?v=1678643184"
          },
          {
            name: "Georgia",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-georgia.png?v=1678643184"
          },
          {
            name: "Florida",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-florida.png?v=1678643184"
          },
          {
            name: "South Carolina",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-south-carolina.png?v=1678643184"
          },
          {
            name: "North Carolina",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-north-carolina.png?v=1678643184"
          },
          {
            name: "Virginia",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-virgina.png?v=1678643183"
          },
          {
            name: "West Virginia",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-west-virgina.png?v=1678643183"
          },
          {
            name: "Maryland",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-maryland.png?v=1678643184"
          },
          {
            name: "Delaware",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-delaware.png?v=1678643184"
          },
          {
            name: "New Jersey",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-new-jersey.png?v=1678643184"
          },
          {
            name: "New York",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-new-york.png?v=1678643184"
          },
          {
            name: "Connecticut",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-connecticut.png?v=1678643184"
          },
          {
            name: "Rhode Island",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-rhode-island.png?v=1678643184"
          },
          {
            name: "Massachusetts",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-massachusetts.png?v=1678643184"
          },
          {
            name: "Maine",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-maine.png?v=1678643184"
          },
          {
            name: "Puerto Rico",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-puerto-rico.png?v=1678643184"
          },
          {
            name: "Guam",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-guam.png?v=1678643184"
          },
          {
            name: "Northern Mariana Islands",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-northern-mariana.png?v=1678643183 "
          },
          {
            name: "U.S. Virgin Islands",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-states-u.s-virgin-islands.png?v=1678643184"
          }
        ]
      },
      {
        name: "USA Service Branches",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-usa-service-branches.png?v=1678643183",
        variants: [
          { name: "United States Coast Guard", img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-united-states-coast-guard.png?v=1678643225" },
          { name: "United States Army", img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-united-states-army.png?v=1678643225" },
          { name: "United States Navy", img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-united-states-navy.png?v=1678643225" },
          { name: "United States Marine Corps", img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-united-states-marine-corps.png?v=1678643226" },
          { name: "United States Air Force", img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-united-states-air-force.png?v=1678643226" }
        ]
      },
      {
        name: "Argentina",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-argentina.png?v=1678643213"
      },
      {
        name: "Armenia",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-armenia.png?v=1678643206"
      },
      {
        name: "Australia",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-australia.png?v=1678643206"
      },
      {
        name: "Austria",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-austria.png?v=1678643207"
      },
      {
        name: "Belarus",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-belarus.png?v=1678643207"
      },
      {
        name: "Belgium",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-belgium.png?v=1678643207"
      },
      {
        name: "Brazil",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-brazil.png?v=1678643207"
      },
      {
        name: "Cambodia",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-cambodia.png?v=1678643208"
      },
      {
        name: "Cayman Islands",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-cayman-islands.png?v=1678643208"
      },
      {
        name: "Chile",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-chile.png?v=1678643208"
      },
      {
        name: "China",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-china.png?v=1678643208"
      },
      {
        name: "Columbia",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-columbia.png?v=1678643209"
      },
      {
        name: "Croatia",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-croatia.png?v=1678643209"
      },
      {
        name: "Cuba",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-cuba.png?v=1678643209"
      },
      {
        name: "Czech Republic",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-czech-republic.png?v=1678643209"
      },
      {
        name: "Denmark",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-denmark.png?v=1678643210"
      },
      {
        name: "Dominican Republic",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-dominican.png?v=1678643210"
      },
      {
        name: "Egypt",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-egypt.png?v=1678643210"
      },
      {
        name: "Estonia",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-estonia.png?v=1678643210"
      },
      {
        name: "Finland",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-finland.png?v=1678643211"
      },
      {
        name: "France",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-france.png?v=1678643211"
      },
      {
        name: "Gadsden",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-gadsdenfc.png?v=1678643183"
      },
      {
        name: "Germany",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-germany.png?v=1678643211"
      },
      {
        name: "Greece",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-greece.png?v=1678643212"
      },
      {
        name: "Guatemala",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-guatemala.png?v=1678643212"
      },
      {
        name: "Guernsey Channel Islands",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-guernsey-channel-islands.png?v=1678643212"
      },
      {
        name: "Hong Kong",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-hong-kong.png?v=1678643212"
      },
      {
        name: "Hong Kong 1959-1997",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-hong-kong-1959-1997.png?v=1678643212"
      },
      {
        name: "Hungary",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-hungary.png?v=1678643212"
      },
      {
        name: "Iceland",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-iceland.png?v=1678643213"
      },
      {
        name: "Indonesia",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-indonesia.png?v=1678643213"
      },
      {
        name: "Iraq",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-iraq.png?v=1678643213"
      },
      {
        name: "Ireland",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-ireland.png?v=1678643213"
      },
      {
        name: "Israel",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-israel.png?v=1678643214"
      },
      {
        name: "Italy",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-italy.png?v=1678643214"
      },
      {
        name: "Jamaica",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-jamaica.png?v=1678643214"
      },
      {
        name: "Japan",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-japan.png?v=1678643214"
      },
      {
        name: "Kosovo",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-kosovo.png?v=1678643215"
      },
      {
        name: "Kurdistan",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-kurdistan.png?v=1678643215"
      },
      {
        name: "Kuwait",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-kuwait.png?v=1678643215"
      },
      {
        name: "Laos",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-laos.png?v=1678643215"
      },
      {
        name: "Latvia",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-latvia.png?v=1678643216"
      },
      {
        name: "Malaysia",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-malaysia.png?v=1678643216"
      },
      {
        name: "Mexico",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-mexico.png?v=1678643216"
      },
      {
        name: "Moldova",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-moldova.png?v=1678643216"
      },
      {
        name: "Netherlands",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-netherlands.png?v=1678643217"
      },
      {
        name: "New Zealand",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-new-zealand.png?v=1678643217"
      },
      {
        name: "Norway",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-norway.png?v=1678643217"
      },
      {
        name: "Pakistan",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-pakistan.png?v=1678643218"
      },
      {
        name: "Philippines",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-philippines.png?v=1678643218"
      },
      {
        name: "Poland",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-poland.png?v=1678643218"
      },
      {
        name: "Portugal",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-portugal.png?v=1678643218"
      },
      {
        name: "Rhodesia",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-rhodesia.png?v=1678643219"
      },
      {
        name: "Romania",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-romania.png?v=1678643219"
      },
      {
        name: "Russia",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-russia.png?v=1678643220"
      },
      {
        name: "Scotland",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-scotland.png?v=1678643220"
      },
      {
        name: "Serbia",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-serbia.png?v=1678643220"
      },
      {
        name: "Singapore",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-singapore.png?v=1678643220"
      },
      {
        name: "Slovakia",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-slovakia.png?v=1678643221"
      },
      {
        name: "South Africa",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-south-africa.png?v=1678643221"
      },
      {
        name: "South Korea",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-south-korea.png?v=1678643221"
      },
      {
        name: "Spain",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-spain.png?v=1678643222"
      },
      {
        name: "Star of Life",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-star-of-life.png?v=1678643371 "
      },
      {
        name: "Sweden",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-sweden.png?v=1678643222"
      },
      {
        name: "Switzerland",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-switzerland.png?v=1678643222"
      },
      { name: "Taiwan", img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-taiwan.png?v=1678643223" },
      { name: "Thailand", img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-thailand.png?v=1678643223" },
      { name: "Ukraine", img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-ukraine.png?v=1678643224" },
      { name: "United Kingdom", img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-united-kingdom.png?v=1678643224" },
      { name: "United Nations", img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-united-nations.png?v=1678643224" },
      { name: "Venezuela", img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-venezuela.png?v=1678643225" },
      { name: "Vietnam", img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-vietnam.png?v=1678643225" },
      {
        name: "Pirate Jolly Roger",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-jolly-roger.png?v=1678643183"
      },
      {
        name: "Pirate Calico Jack",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-calico-jack.png?v=1678643183"
      },
      {
        name: "Fallout New California Republic",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-fallout-new-california-republic.png?v=1678643329"
      },
      {
        name: "Fallout Brotherhood of Steel",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-fallout-brotherhood-of-steel.png?v=1678643329"
      },
      {
        name: "Guernsey Channel Islands",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-guernsey-channel-islands.png?v=1678643329"
      },
      {
        name: "Fallout Minute Men",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-fallout-minute-men.png?v=1678643329"
      },
      {
        name: "Fallout Enclave",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-fallout-enclave.png?v=1678643329"
      },
      {
        name: "Black Beard",
        img: "https://cdn.shopify.com/s/files/1/2242/5805/files/flags-black-beard.png?v=1678643329"
      }
    ],
    "lazer-cut": initLazerCutFlags(),
    "badge": [

    ],
    symbols: {
      "medical patch": {
        "1 x 1": [
          {
            name: "TQ",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-tq.png?v=1678643371",
            glow: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-tq-glow-border.png?v=1678643371",
            icon: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-tq-icon.png?v=1678643371"
          },
          {
            name: "K9",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-k9.png?v=1678643371",
            glow: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-k9-glow-border.png?v=1678643371",
            icon: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-k9-icon.png?v=1678643371",
          },
          {
            name: "Maple Leaf Icon",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-maple-leaf.png?v=1678643371",
            glow: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-maple-leaf-glow-border.png?v=1678643371",
            icon: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-maple-leaf-icon.png?v=1678643371",
          },
          {
            name: "Med Cross Icon",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-med-cross-cats.png?v=1678643371",
            glow: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-med-cross-cats-glow-border.png?v=1678643371",
            icon: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-med-cross-cats-icon.png?v=1678643371",
          },
          {
            name: "Star",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-star-icon.png?v=1678643371",
            glow: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-star-glow-border.png?v=1678643371",
            icon: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-star-icon.png?v=1678643371",
          }
        ],
        "2 x 2": [
          {
            name: "Star of Life",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-2x2-star-of-life.png?v=1678643371",
            glow: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-2x2-star-of-life-glow-border.png?v=1678643371",
            icon: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-2x2-star-of-life-icon.png?v=1678643371",
          },
          {
            name: "Med Cross",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-2x2-med-cross.png?v=1678643371",
            glow: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-2x2-med-cross-glow-border.png?v=1678643371",
            icon: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-2x2-med-cross-icon.png?v=1678643371",
          },
          {
            name: "A Positive",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-2-a-pos.png?v=1678643370",
            glow: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-2-a-pos-glow-border.png?v=1678643370",
            icon: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-2-a-pos-icon.png?v=1678643370",
          },
          {
            name: "A Negative",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-2-a-neg.png?v=1678643370",
            glow: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-2-a-neg-glow-border.png?v=1678643370",
            icon: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-2-a-neg-icon.png?v=1678643370",
          },
          {
            name: "AB Positive",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-2-ab-pos.png?v=1678643370",
            glow: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-2-ab-pos-glow-border.png?v=1678643370",
            icon: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-2-ab-pos-icon.png?v=1678643370",
          },
          {
            name: "AB Negative",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-2-ab-neg.png?v=1678643370",
            glow: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-2-ab-neg-glow-border.png?v=1678643370",
            icon: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-2-ab-neg-icon.png?v=1678643370",
          },
          {
            name: "B Positive",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-2-b-pos.png?v=1678643370",
            glow: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-2-b-pos-glow-border.png?v=1678643370",
            icon: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-2-b-pos-icon.png?v=1678643370",
          },
          {
            name: "B Negative",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-2-b-neg.png?v=1678643370",
            glow: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-2-b-neg-glow-border.png?v=1678643370",
            icon: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-2-b-neg-icon.png?v=1678643370",
          },
          {
            name: "O Positive",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-2-o-pos.png?v=1678643370",
            glow: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-2-o-pos-glow-border.png?v=1678643370",
            icon: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-2-o-pos-icon.png?v=1678643370",
          },
          {
            name: "O Negative",
            img: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-2-o-neg.png?v=1678643370",
            glow: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-2-o-neg-glow-border.png?v=1678643370",
            icon: "https://cdn.shopify.com/s/files/1/2242/5805/files/symbols-2-o-neg-icon.png?v=1678643370",
          }
        ],
      }
    }
  },
};



function initLazerCutFlags() {
  const folder = "https://cdn.shopify.com/s/files/1/2242/5805/files/";  // If you have a common folder path, you can add it here
  const end = "?v=1678643370";
  const sizes = [
    "3 x 2",
    "3.5 x 2",
    "5 x 3",
    "6 x 3",
    "3.5 Hex"
  ];    // If there's a common file extension, you can add it here

  const imageList = [
    "-lc-acadia.png",
    "-lc-alabama.png",
    "-lc-alaska.png",
    "-lc-antartica.png",
    "-lc-aquila.png",
    "-lc-argentina.png",
    "-lc-arizona.png",
    "-lc-arkansas.png",
    "-lc-armenia.png",
    "-lc-australia.png",
    "-lc-austria.png",
    "-lc-belgium.png",
    "-lc-betsy-ross.png",
    "-lc-british-columbia.png",
    "-lc-calico-jack.png",
    "-lc-california-republic.png",
    "-lc-canada-philippines.png",
    "-lc-canada-south-korea.png",
    "-lc-canada-swiss.png",
    "-lc-canada-uk.png",
    "-lc-canada.png",
    "-lc-chicago.png",
    "-lc-chile.png",
    "-lc-china.png",
    "-lc-coast-guard.png",
    "-lc-colorado.png",
    "-lc-columbia.png",
    "-lc-croatia.png",
    "-lc-cuba.png",
    "-lc-czech-republic.png",
    "-lc-denmark.png",
    "-lc-egypt.png",
    "-lc-finland.png",
    "-lc-florida.png",
    "-lc-france.png",
    "-lc-gadsden.png",
    "-lc-galactic-empire.png",
    "-lc-galactic-republic.png",
    "-lc-gaorgia-state.png",
    "-lc-georgia-country.png",
    "-lc-germany.png",
    "-lc-greece.png",
    "-lc-hawaii.png",
    "-lc-hong-kong.png",
    "-lc-hungary.png",
    "-lc-iceland.png",
    "-lc-imperial-japan.png",
    "-lc-indiana.png",
    "-lc-indianapolis.png",
    "-lc-indonesia.png",
    "-lc-iraq.png",
    "-lc-ireland.png",
    "-lc-israel.png",
    "-lc-italy.png",
    "-lc-japan.png",
    "-lc-jedi-order.png",
    "-lc-jolly-roger.png",
    "-lc-jordan.png",
    "-lc-kurdistan.png",
    "-lc-kyrgyzstan.png",
    "-lc-latvia.png",
    "-lc-macau.png",
    "-lc-mandalorian.png",
    "-lc-maryland.png",
    "-lc-mexico.png",
    "-lc-mississippi.png",
    "-lc-navy-jack.png",
    "-lc-netherlands.png",
    "-lc-new-england.png",
    "-lc-new-mexico.png",
    "-lc-new-orleans.png",
    "-lc-new-zeland.png",
    "-lc-north-carolina.png",
    "-lc-norway.png",
    "-lc-ohio.png",
    "-lc-pakistan.png",
    "-lc-philippines.png",
    "-lc-poland.png",
    "-lc-portugal.png",
    "-lc-puerto-rico.png",
    "-lc-quebec.png",
    "-lc-rebel-alliance.png",
    "-lc-russia.png",
    "-lc-scotland.png",
    "-lc-signapore.png",
    "-lc-sons-of-liberty.png",
    "-lc-south-africa.png",
    "-lc-south-carolina.png",
    "-lc-south-korea.png",
    "-lc-spain.png",
    "-lc-sweden.png",
    "-lc-switzerland.png",
    "-lc-taiwan.png",
    "-lc-tennessee.png",
    "-lc-texas.png",
    "-lc-thailand.png",
    "-lc-tonga.png",
    "-lc-trinidad-and-tobago.png",
    "-lc-turkey.png",
    "-lc-ukraine-standard.png",
    "-lc-united-kingdom.png",
    "-lc-usa-canada.png",
    "-lc-usa-hong-kong.png",
    "-lc-usa-new-zealand.png",
    "-lc-usa-philippines.png",
    "-lc-usa-south-korea.png",
    "-lc-usa-uk-split.png",
    "-lc-usa.png",
    "-lc-usmc-ega.png",
    "-lc-utah.png",
    "-lc-vader-wants-you.png",
    "-lc-venezuela.png"
  ];

  let lazerObj = {};
  sizes.forEach(size => {
    let key = size.replace(/ /g, "");
    const formattedArray = imageList.map(image => {
      const name = image.replace(".png", "");
      const titleCaseName = name.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
      const formattedName = titleCaseName.replace(" Lc ", "").replace("Uk", "UK").replace("Usa", "USA");
      return {
        name: formattedName,
        img: `${folder}${key}${name}.png${end}`,
        glow: `${folder}${key}${name}-glow-border.png${end}`,
        icon: `${folder}${key}${name}-icon.png${end}`
      };
    });
    lazerObj[key] = formattedArray;
  });

  return lazerObj;
}

// console.log(builderData);
export default builderData;