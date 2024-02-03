export default function MyTitle({span1, span2, shadow}) {
  return (
    <header className="flex justify-center relative uppercase">
      <h1 className=" my-20 text-xl sm:text-3xl md:text-[2.8rem]">
        <span>{span1} </span>
        <span className="ml-2 text-[#bba06b]">{span2} </span>
      </h1>
      <span className="absolute top-1/2 left-1/2 text-5xl font-bold opacity-20 -z-10 -translate-x-2/4 -translate-y-2/4 sm:text-7xl md:text-[6rem]">
        {shadow}
      </span>
    </header>
  );
}

//     <header className="flex justify-center relative uppercase">
//       <h1 className=" my-20">
//         <span>{span1} </span>
//         <span className="ml-2 text-[#bba06b]">{span2} </span>
//       </h1>
//       <span className="shadowTitle absolute top-1/2 left-1/2 text-[100px] font-bold opacity-20 -z-10 -translate-x-2/4 -translate-y-2/4 ">
//         {shadow}
//       </span>
//     </header>
//   );
// }
