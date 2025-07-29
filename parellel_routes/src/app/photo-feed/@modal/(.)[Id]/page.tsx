import Image from "next/image";
import wondersImages, { WonderImage } from "@/app/photo-feed/wonders";
import Modal from "@/components/Modal";
import { notFound } from "next/navigation";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ Id: string }>;
}) {
  const resolvedParams = await params;
  console.log("Modal params:", resolvedParams);
  const { Id } = resolvedParams;
  const photo: WonderImage | undefined = wondersImages.find((p) => p.id === Id);
  console.log("Looking for ID:", Id, "Found photo:", photo);

  if (!photo) {
    notFound();
  }

  return (
    <Modal>
      <Image
        alt={photo.name}
        src={photo.src}
        className="w-full object-cover aspect-square"
      />

      <div className="bg-white p-4">
        <h2 className="text-xl font-semibold">{photo.name}</h2>
        <h3>{photo.photographer}</h3>
        <h3>{photo.location}</h3>
      </div>
    </Modal>
  );
}