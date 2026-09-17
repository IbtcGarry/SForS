import { forwardRef } from "react";

const BookPage = forwardRef(function BookPage(
  { className = "", children },
  ref
) {
  return (
    <div ref={ref} className={`h-full w-full select-none ${className}`}>
      {children}
    </div>
  );
});

export default BookPage;
