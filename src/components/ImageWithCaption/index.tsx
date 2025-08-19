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
          border: "1px solid gray",
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

