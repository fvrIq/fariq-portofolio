import Image from "next/image";
import { ScrollView } from "./scroll-view";

export default function PortfolioCard({
  card,
}: {
  card: {
    name: string;
    description: string;
    img: string;
    url: string;
  };
}) {
  // Komponen konten gambar agar tidak duplikat kode
  const ImageContent = (
    <Image
      className="w-full grayscale-25 hover:grayscale-0 rounded-md object-cover object-top transition-all duration-500"
      height="480"
      width="720"
      src={card.img}
      alt={card.name}
    />
  );

  return (
    <div>
      <ScrollView>
        <div className="group transition-all duration-500">
          {/* Cek apakah URL valid dan tidak kosong */}
          {card.url && card.url !== "#" ? (
            <a 
              href={card.url} 
              target="_blank" 
              rel="noreferrer"
              className="block hover:scale-105 transition-all duration-500"
            >
              {ImageContent}
              <div className="mt-4">
                <h3 className="text-title text-2xl font-medium">{card.name}</h3>
                <p className="text-muted-foreground">{card.description}</p>
              </div>
            </a>
          ) : (
            // Jika tidak ada URL, tampilkan tanpa link (tidak bisa diklik)
            <div className="cursor-default">
              {ImageContent}
              <div className="mt-4">
                <h3 className="text-title text-2xl font-medium">{card.name}</h3>
                <p className="text-muted-foreground">{card.description}</p>
              </div>
            </div>
          )}
        </div>
      </ScrollView>
    </div>
  );
}