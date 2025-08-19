// // import React from "react";

// // type Props = {
// //   src: string;
// //   alt?: string;
// //   caption?: string;
// //   scale?: number; // e.g., 2 means 1/2 size
// // };

// // const ImageWithCaption: React.FC<Props> = ({
// //   src,
// //   alt = "",
// //   caption,
// //   scale = 1, // default: full size
// // }) => {
// //   const scaleFactor = 1 / scale;

// //   const scaledContainerStyle: React.CSSProperties = {
// //     transform: `scale(${scaleFactor})`,
// //     transformOrigin: "top center",
// //     display: "inline-block",
// //   };

// //   return (
// //     <div style={{ textAlign: "center", margin: "2rem 0" }}>
// //       <div style={scaledContainerStyle}>
// //         <div>
// //           <img
// //             src={src}
// //             alt={alt}
// //             style={{
// //               display: "block",
// //               maxWidth: "100%",
// //               height: "auto",
// //               borderRadius: "8px",
// //             }}
// //           />
// //           {caption && (
// //             <p
// //               style={{
// //                 marginTop: "0.5rem",
// //                 color: "#555",
// //                 fontSize: "1.5rem",
// //               }}
// //             >
// //               {caption}
// //             </p>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ImageWithCaption;

// import React from "react";

// type Props = {
//   src: string;
//   alt?: string;
//   caption?: string;
//   scale?: number; // e.g., 2 means 1/2 size
// };

// const ImageWithCaption: React.FC<Props> = ({
//   src,
//   alt = "",
//   caption,
//   scale = 1,
// }) => {
//   const zoomFactor = 1 / scale;

//   return (
//     <div style={{ textAlign: "center", margin: "1rem 0" }}>
//       <div style={{ zoom: zoomFactor }}>
//         <img
//           src={src}
//           alt={alt}
//           style={{
//             display: "block",
//             maxWidth: "100%",
//             height: "auto",
//             borderRadius: "8px",
//             margin: "0 auto",
//           }}
//         />
//         {caption && (
//           <p
//             style={{
//               marginTop: "0.5rem",
//               color: "#555",
//               fontSize: "1.5rem",
//               textAlign: "center",
//             }}
//           >
//             {caption}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ImageWithCaption;


import React from "react";

type Props = {
  src: string;
  alt?: string;
  caption?: string;
  scale?: number; // e.g., 2 means 50% width
};

const ImageWithCaption: React.FC<Props> = ({
  src,
  alt = "",
  caption,
  scale = 1, // 1 = full width
}) => {
  const percentWidth = `${100 / scale}%`; // e.g., scale=2 → 50%

  return (
    <div style={{ textAlign: "center", margin: "2rem 0" }}>
      <img
        src={src}
        alt={alt}
        style={{
          width: percentWidth,
          height: "auto",
          borderRadius: "8px",
          display: "block",
          margin: "0 auto",
        }}
      />
      {caption && (
        <p
          style={{
            marginTop: "0.5rem",
            color: "#555",
            fontSize: "0.95rem",
            textAlign: "center",
          }}
        >
          {caption}
        </p>
      )}
    </div>
  );
};

export default ImageWithCaption;

