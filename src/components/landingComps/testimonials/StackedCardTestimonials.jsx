"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";

const StackedCardTestimonials = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="bg-cw-secondary px-4 grid items-center grid-cols-1 gap-8 overflow-hidden">
      <div className="p-4">
        <h3 className="text-[100px] text-cw-background font-cookWiz">
          What our customers think
        </h3>
        <SelectBtns
          numTracks={testimonials.length}
          setSelected={setSelected}
          selected={selected}
        />
      </div>
      <Cards
        testimonials={testimonials}
        setSelected={setSelected}
        selected={selected}
      />
    </section>
  );
};

const SelectBtns = ({ numTracks, setSelected, selected }) => {
  return (
    <div className="flex gap-1 mt-8">
      {Array.from(Array(numTracks).keys()).map((n) => {
        return (
          <button
            key={n}
            onClick={() => setSelected(n)}
            className="h-1.5 w-full bg-white relative"
          >
            {selected === n ? (
              <motion.span
                className="absolute top-0 left-0 bottom-0 bg-cw-background"
                initial={{
                  width: "0%",
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  duration: 5,
                }}
                onAnimationComplete={() => {
                  setSelected(selected === numTracks - 1 ? 0 : selected + 1);
                }}
              />
            ) : (
              <span
                className="absolute top-0 left-0 bottom-0 bg-cw-background"
                style={{
                  width: selected > n ? "100%" : "0%",
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

const Cards = ({ testimonials, selected, setSelected }) => {
  return (
    <div className="p-4 relative h-[450px] lg:h-[500px] shadow-xl">
      {testimonials.map((t, i) => {
        return (
          <Card
            {...t}
            key={i}
            position={i}
            selected={selected}
            setSelected={setSelected}
          />
        );
      })}
    </div>
  );
};

const Card = ({
  description,
  name,
  title,
  position,
  selected,
  setSelected,
}) => {
  const scale = position <= selected ? 1 : 1 + 0.015 * (position - selected);
  const offset = position <= selected ? 0 : 95 + (position - selected) * 3;
  const background = position % 2 ? "#261F1D" : "white";
  const color = position % 2 ? "white" : "#261F1D";

  return (
    <motion.div
      initial={false}
      style={{
        zIndex: position,
        transformOrigin: "left bottom",
        background,
        color,
      }}
      animate={{
        x: `${offset}%`,
        scale,
      }}
      whileHover={{
        translateX: position === selected ? 0 : -3,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      onClick={() => setSelected(position)}
      className="absolute top-0 left-0 w-full min-h-full p-8 lg:p-12 cursor-pointer flex flex-col justify-between"
    >
      <p className="text-lg lg:text-xl font-light italic my-8">
        "{description}"
      </p>
      <div>
        <span className="block font-semibold text-lg">{name}</span>
        <span className="block text-sm">{title}</span>
      </div>
    </motion.div>
  );
};

export default StackedCardTestimonials;

const testimonials = [
  {
    description:
      "Wah, web ini benar-benar bikin hidupku lebih gampang! Dulu suka bingung mau masak apa dengan bahan yang ada di kulkas, tapi sekarang tinggal klik-klik aja di web ini, udah dapet resep keren banget! Mantap deh!",
    name: "Dhio Dhafin",
    title: "Senior Software Engineer, Iwak Kalen Industry",
  },
  {
    description:
      "Sumpah, web ini beneran jadi penyelamat hidup gue! Gak pernah kepikiran sebelumnya bisa masak apa dari bahan seadanya, tapi ternyata web ini bisa kasih solusi yang enak-enak banget! Udah gak pernah pusing lagi milih menu makan, makasih banyak, CookWizard!",
    name: "Hanandra",
    title: "Takmir Musholla, Musholla Birahmah",
  },
  {
    description:
      "Website ini luar biasa dengan resep AI-nya yang kreatif dan mudah diikuti. Fitur pencarian berdasarkan bahan yang ada sangat praktis. Memasak menjadi lebih menyenangkan berkat inovasi ini!",
    name: "Fajri Farid",
    title: "Mahasiswa",
  },
  {
    description:
      "Resep AI di website ini benar-benar membantu! Fitur pencarian berdasarkan bahan yang ada membuat memasak jadi lebih praktis dan menyenangkan.",
    name: "Agatha Ita",
    title: "Ibu Rumah Tangga",
  },
  {
    description:
      "Web ini keren banget, resep-resep AI-nya gampang banget diikutin. Cari resep pakai bahan yang ada di dapur? No problem! Jadi makin asik nih masak-masaknya.",
    name: "Getha Paulina",
    title: "Mahasiswa",
  },
  {
    description:
      "Web resep AI ini top! Cari resep dari bahan seadanya jadi gampang banget. Masak jadi lebih seru deh!",
    name: "Ana Soviyana",
    title: "Ibu Rumah Tangga",
  },
];
