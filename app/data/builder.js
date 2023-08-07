const builderData = {
  type: {
    "id panel": {
      name: "ID Panel",
      config : {
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
      form : {
        intro: "Our ID panels come in various sizes. You will be able to custom your ID, blood type or allergy, font & background colors. You will be able to choose from a wide variety of flags or upload one yourself. Get through all the steps and see your patch come to life.",
        btnText: "Get Started",
        steps: [
          {
            name: "Text",
            input: [
              {
                label: 'Text',
                type: 'input',
                placeholder: 'Name',
              },
              {
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
                label: 'Text Color',
                type: 'advancedSelect',
                placeholder: 'Flat Spice Brown',
              },
              {
                label: 'Backgroun Color',
                type: 'advancedSelect',
                placeholder: 'Multicam Alpine',
              },
            ],
          },
          {
            name: "Flag",
            input: [
              {
                label: 'Flag Type',
                type: 'select',
                placeholder: 'Lazer Cut Flag',
              },
              {
                label: 'Flag',
                type: 'advancedSelect',
                placeholder: 'USA',
              },
              {
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
                label: 'Add a glow in the dark border? +$10 USD',
                type: 'checkmark',
                placeholder: '',
              },
              {
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
          { size: '4” x 1”', maxLength: 10, lines: 1, placeholder: 'Your Name', hasFlag: true, sizeUpsell: 1, priceUpsell: 1 },
          { size: '4” x 1.5”', maxLength: 10, lines: 1, placeholder: 'Your Name', hasFlag: false, priceUpsell: 3 },
          { size: '5” x 1”', maxLength: 13, lines: 1, placeholder: 'Your Name', hasFlag: true, priceUpsell: 2 },
          { size: '5” x 1.5”', maxLength: 13, lines: 1, placeholder: 'Your Name', hasFlag: false, priceUpsell: 4 },
          { size: '6” x 2”', maxLength: 10, lines: 1, placeholder: 'Your Name', hasFlag: false, priceUpsell: 8 },
          { size: '8” x 2”', maxLength: 10, lines: 1, placeholder: 'Your Name', hasFlag: false, priceUpsell: 9 },
          { size: '8” x 3”', maxLength: 13, lines: 2, placeholder: 'Up to 2 Lines', hasFlag: false, priceUpsell: 14 },
          { size: '8” x 4”', maxLength: 13, lines: 3, placeholder: 'Up to 3 Lines', hasFlag: false, priceUpsell: 24 },
          { size: '9” x 3”', maxLength: 13, lines: 2, placeholder: 'Up to 2 Lines', hasFlag: false, priceUpsell: 15 },
          { size: '10” x 2”', maxLength: 11, lines: 1, placeholder: 'Your Name', hasFlag: false, priceUpsell: 14 },
          { size: '11” x 3”', maxLength: 16, lines: 2, placeholder: 'Up to 2 Lines', hasFlag: false, priceUpsell: 25 },
          { size: '12” x 4”', maxLength: 18, lines: 3, placeholder: 'Up to 3 Lines of Texts', hasFlag: false, priceUpsell: 41 }
        ]
      },
      form : {
        intro: "Our ID panels come in various sizes. You will be able to custom your ID, blood type or allergy, font & background colors. You will be able to choose from a wide variety of flags or upload one yourself. Get through all the steps and see your patch come to life.",
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
  }
};

export default builderData;