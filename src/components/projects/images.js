const images = [
    [
      {
        href: 'https://premium-gadgets.vercel.app/',
        src: "/images/premium.png", 
      },
      {
        href: 'https://premium-gadgets.vercel.app/',
        src:
          "/images/tania.png"
      },
      {
        url: 'https://premium-gadgets.vercel.app/',
        src:
          "/images/andey.png"
      },
      {
        src: "/images/expenditure.png"
      },
      {
        src:
          "/images/crypto.png"
      },
      {
        src:
          "/images/family.png"
      },
     
    ],
    [
      {
        src: "/images/premium.png"
      },
      {
        src: "/images/tania.png"
      },
      {
        src: "/images/andey.png"
      }
    ],
    [
      ...[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => ({
        src: "/images/tania.png"
      }))
    ],
    [
      ...[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => ({
        src: "/images/family.png"
      }))
    ],
    [
      ...[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => ({
        src: "/images/expenditure.png"
      }))
    ],
    [
      ...[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => ({
        src: "/images/andey.png"
      }))
    ]
  ];
  
  export default images;
  