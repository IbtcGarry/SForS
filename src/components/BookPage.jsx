import { forwardRef } from "react";

/**
 * Thin wrapper every flipbook page renders as its outermost element.
 *
 * Why this exists: internally, react-pageflip calls React.cloneElement
 * on every direct child of <HTMLFlipBook> to attach its own `ref` to
 * each one, so it can grab the real DOM node and animate it. A plain
 * function component CAN'T receive a ref (React errors or silently
 * drops it) -- only a class component, or one wrapped in
 * React.forwardRef, can. This component is that wrapper: forwardRef
 * gives us (props, ref), and we pass `ref` straight through to the root
 * <div>. Skip this and the library has no DOM node to flip.
 */
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
