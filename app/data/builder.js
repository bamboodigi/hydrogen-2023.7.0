const builderData = {
  type: {
    "id panel": {
      name: "ID Panel",
      config: {
        "sizes": [
          {
            size: '3” x 2”', maxLength: 13, lines: 1, placeholder: 'Name',
            maxLength2: null, lines2: null, placeholder2: null
          },
          {
            size: '3.5” x 2”', maxLength: 13, lines: 1, placeholder: 'Name',
            maxLength2: null, lines2: null, placeholder2: null
          },
          {
            size: '4” x 2”', maxLength: 13, lines: 1, placeholder: 'Name',
            maxLength2: null, lines2: null, placeholder2: null
          },
          {
            size: '6” x 2”', maxLength: 13, lines: 1, placeholder: 'Name',
            maxLength2: null, lines2: null, placeholder2: null
          },
          {
            size: '5” x 3”', maxLength: 13, lines: 1, placeholder: 'Name',
            maxLength2: null, lines2: null, placeholder2: null
          },
          {
            size: '6” x 3”', maxLength: 13, lines: 1, placeholder: 'Name',
            maxLength2: null, lines2: null, placeholder2: null
          }
        ],
      },
      form: {
        intro: "Our ID panels come in various sizes. You will be able to custom your ID, blood type or allergy, font & background colors. You will be able to choose from a wide variety of flags or upload one yourself. Get through all the steps and see your patch come to life.",
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
    },
    "name tape": {
      name: "Name Tape",
      config: {
        "sizes": [
          { size: '3” x 1”', maxLength: 9, lines: 1, placeholder: 'Your Name', hasFlag: false, priceUpsell: 0 },
          { size: '4” x 1”', maxLength: 10, lines: 1, placeholder: 'Your Name', hasFlag: true, sizeUpsell: 1 },
          { size: '4” x 1.5”', maxLength: 10, lines: 1, placeholder: 'Your Name', hasFlag: false, priceUpsell: 3 },
          { size: '5” x 1”', maxLength: 13, lines: 1, placeholder: 'Your Name', hasFlag: true, priceUpsell: 2 },
          { size: '5” x 1.5”', maxLength: 13, lines: 1, placeholder: 'Your Name', hasFlag: false, priceUpsell: 4 },
          { size: '6” x 2”', maxLength: 10, lines: 1, placeholder: 'Your Name', hasFlag: false, priceUpsell: 8 },
          { size: '8” x 2”', maxLength: 10, lines: 1, placeholder: 'Your Name', hasFlag: false, priceUpsell: 9 },
          { size: '8” x 3”', maxLength: 13, lines: 2, placeholder: 'Up to 2 Lines', hasFlag: false, priceUpsell: 14 },
          { size: '8” x 4”', maxLength: 13, lines: 3, placeholder: 'Up to 3 Lines', hasFlag: false, priceUpsell: 24 },
          { size: '9” x 3”', maxLength: 13, lines: 2, placeholder: 'Up to 2 Lines of Text', hasFlag: false, priceUpsell: 15, glowInTheDark: 15 },
          { size: '10” x 2”', maxLength: 13, lines: 1, placeholder: 'Your Name', hasFlag: false, priceUpsell: 14, glowInTheDark: 10 },
          { size: '11” x 3”', maxLength: 16, lines: 2, placeholder: 'Up to 2 Lines', hasFlag: false, priceUpsell: 25 },
          { size: '12” x 4”', maxLength: 18, lines: 3, placeholder: 'Up to 3 Lines of Text', hasFlag: false, priceUpsell: 41, glowInTheDark: 20 },
        ]
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
      config: {
        "sizes": [
          { size: '1” x 1”', maxLength: null, lines: null, placeholder: null, hasFlag: false, priceUpsell: 0 },
          { size: '2” x 2”', maxLength: null, lines: null, placeholder: null, hasFlag: false, priceUpsell: 3 },
          { size: '3.5” x 2”', maxLength: 12, lines: 1, placeholder: 'nkda', hasFlag: false, priceUpsell: 9 },
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
                id: 'symbol',
                label: 'Symbol',
                type: 'advancedSelect',
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
    "flag" : {
      name: "Flag",
      config: {
        "sizes": [
          { size: '1” x 1”', maxLength: null, lines: null, placeholder: null },
          { size: '3” x 1”', maxLength: null, lines: null, placeholder: null },
          { size: '4” x 1”', maxLength: null, lines: null, placeholder: null },
          { size: '5” x 1”', maxLength: null, lines: null, placeholder: null },
          { size: '2” x 2”', maxLength: null, lines: null, placeholder: null },
          { size: '3” x 2”', maxLength: null, lines: null, placeholder: null },
          { size: '3.5” x 2”', maxLength: null, lines: null, placeholder: null },
          { size: '4” x 2”', maxLength: null, lines: null, placeholder: null },
          { size: '6” x 2”', maxLength: null, lines: null, placeholder: null },
          { size: '5” x 3”', maxLength: null, lines: null, placeholder: null },
          { size: '6” x 3”', maxLength: null, lines: null, placeholder: null }
        ],
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
    "light saber" : {
      name: "Flag",
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
            status: 'upcoming',
            input: [
              {
                id: 'hiltColor',
                label: 'Hilt Color',
                type: 'advancedSelect',
                placeholder: 'Flat Spice Brown',
              },
              {
                id: 'bladeColor',
                label: 'Blade Color',
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
    "custom printed patch" : {
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
};

export default builderData;