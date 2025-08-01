import Image from "next/image";
import wondersImages, { WonderImage } from "../wonders";
import { notFound } from "next/navigation";

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ Id: string }>;
}) {
  const resolvedParams = await params;
  console.log("Page params:", resolvedParams);
  const { Id } = resolvedParams;
  const photo: WonderImage | undefined = wondersImages.find((p) => p.id === Id);
  console.log("Looking for ID:", Id, "Found photo:", photo);
  
  if (!photo) {
    notFound();
  }

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <div>
          <h1 className="text-center text-3xl font-bold my-4">{photo.name}</h1>
        </div>
        <Image
          alt={photo.name}
          src={photo.src}
          className="w-full object-cover aspect-square"
        />

        <div className="bg-white py-4">
          <h3>{photo.photographer}</h3>
          <h3>{photo.location}</h3>
        </div>
      </div>
    </div>
  );
}