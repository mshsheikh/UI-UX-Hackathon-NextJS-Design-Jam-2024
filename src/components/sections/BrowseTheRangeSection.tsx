import React from "react";

function BrowseTheRangeSection() {
  const data = [
    {
      imageUrl: "/images/btr_1.png",
      title: "Dining",
    },
    {
      imageUrl: "/images/btr_2.png",
      title: "Living",
    },
    {
      imageUrl: "/images/btr_3.png",
      title: "Bedroom",
    },
  ];
  return (
    <section>
      <div>
        <p className="mt-16 text-[32px] font-bold text-center">Browse The Range</p>
        <p className="text-20 text-customGray text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="mx-auto grid justify-center grid-cols-1 lg:flex lg:justify-center sm:flex sm:justify-center sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-10 mt-8 sm:mt-12 md:mt-[62px]">
        {data.map((item, index) => (
          <div key={index}>
            <div>
              <img
                src={item.imageUrl}
                alt="category image"
                className="h-[480px] rounded-[10px] object-cover"
              />
            </div>
            <p className="text-[19px] text-customBlack font-semibold mt-[30px] text-center">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BrowseTheRangeSection;
