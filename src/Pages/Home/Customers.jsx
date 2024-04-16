import React from "react";
import customersImages from "../../img/new/customers";

function Customers() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:justify-items-start justify-items-center gap-7">
      {customersImages.map((item, index) => (
        <img
          key={index}
          loading="lazy"
          className="h-auto max-w-[236px] w-full rounded-lg"
          src={item}
          alt=""
        />
      ))}
    </div>
  );
}

export default Customers;
