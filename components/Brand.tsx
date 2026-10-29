import Link from "next/link";

export default function Brand() {
  return (
    <Link href={"/home"}>
        <span className="font-bold text-2xl text-white">
          Foot<span className="text-neon-green">Stream</span>
        </span>
    </Link>
  );
}