function getMealMetaData(meal, param) {
  return {
    title: meal.title,
    description: meal.summary,
    author: meal.author,
    openGraph: {
      title: meal.title,
      description: meal.summary,
      url: `${process.env.NEXT_PUBLIC_API_URL}/meals/${param}`,
      type: "article",
      images: [
        {
          url: meal.image,
          width: 800,
          height: 600,
          alt: meal.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meal.title,
      description: meal.summary,
      image: meal.image,
    },
  };
}

export default getMealMetaData;
