export const indexQuery = `
{
  home {
    mainText
    aboutText1
    aboutText2
    servicesText
    gallery {
      responsiveImage(imgixParams: {fit: max, w: "375"}) {
        src
        srcSet
        sizes
        width
        height
        base64
      }
      url
    }
  }
  contact {
    monday
    tuesday
    wednesday
    thursday
    friday
    saturday
    sunday
  }
}
`;

export const aboutQuery = `
{
  about {
    text1
    text2
    gallery {
      responsiveImage(imgixParams: {fit: max, w: "375"}) {
        src
        srcSet
        sizes
        width
        height
        base64
      }
      url
    }
  }
}
`;

export const galleryQuery = `
{
  galleryPage {
    gallery {
      responsiveImage(imgixParams: {fit: max, w: "375"}) {
        src
        srcSet
        sizes
        width
        height
        base64
      }
      url
    }
  }
}
`; 

export const reviewsQuery = `
{
  allReviews {
    text
    author
  }
}
`;

export const servicesQuery = `
{
  allServices(filter: {price: {eq: ""}}) {
    title
    order
    children {
      title
      description
      price
    }
  }
}
`;

export const contactQuery = `
{
  contact {
    phone
    email
    adres1
    adres2
    monday
    tuesday
    wednesday
    thursday
    friday
    saturday
    sunday
  }
}
`;