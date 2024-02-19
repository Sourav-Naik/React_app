// import React, { useState } from "react";
// import Items0 from "./Items0/Items0";
// import Items1 from "./Items1/Items1";
// import Items2 from "./Items2/Items2";
// import Items3 from "./Items3/Items3";
// import Items4 from "./Items4/Items4";
// import Items5 from "./Items5/Items5";
// import Items6 from "./Items6/Items6";
// import Items7 from "./Items7/Items7";
// export default function Main1() {
//   let arr = [
//     <Items0 />,
//     <Items1 />,
//     <Items2 />,
//     <Items3 />,
//     <Items4 />,
//     <Items5 />,
//     <Items6 />,
//     <Items7 />,
//   ];
//   const [count, setCount] = useState(arr[0]);

//   let next = () => {
//     for (let a in arr) {
//       if (count.type.name === arr[a].type.name) {
//         let b = ++a;
//         setCount(arr[b]);
//       }

//       if (a === 8) {
//         setCount(arr[0]);
//       }
//     }
//   };

//   let previous = () => {
//     arr.reverse();
//     for (let a in arr) {
//       if (count.type.name === arr[a].type.name) {
//         let b = ++a;
//         setCount(arr[b]);
//       }
//       if (a === 8) {
//         setCount(arr[0]);
//       }
//     }
//   };

//   return (
//     <div className="container-xxl d-flex justify-content-center bg-info p-0 mt-3">
//       <button
//         className="previous border-0 rounded-end me-4 my-5 px-2 Left"
//         onClick={previous}
//       >
//         <i className="fa-solid fa-chevron-left fs-5 text-secondary"></i>
//       </button>

//       <div className="container">{count}</div>

//       <button
//         className="next border-0 rounded-start ms-4 my-5 px-2 Right"
//         onClick={next}
//       >
//         <i className="fa-solid fa-chevron-right fs-5 text-secondary"></i>
//       </button>
//     </div>
//   );
// }
