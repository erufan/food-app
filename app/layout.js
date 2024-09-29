import MainHeader from "@/components/main-header/main-header";
import openGraphImage from "@/assets/icons/community.png";
import "./globals.css";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
  author: "erfan taheri",
  keywords: "food, recipes, meals, cooking, cuisine, eating",
  openGraph: {
    title: "NextLevel Food",
    description: "Delicious meals, shared by a food-loving community.",
    url: `${process.env.NEXT_PUBLIC_API_URL}`,
    type: "article",
    images: [
      {
        url: openGraphImage,
        width: 800,
        height: 600,
        alt: "people are cooking and talking",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
