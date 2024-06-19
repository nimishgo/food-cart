export function ShimmerBlock() {
  return (
    <div className="shimmer-cards">
      <div className="image_container"></div>
    </div>
  );
}

export default function Shimmer() {
  return (
    <>
      <ShimmerBlock></ShimmerBlock>
      <ShimmerBlock></ShimmerBlock>
      <ShimmerBlock></ShimmerBlock>
      <ShimmerBlock></ShimmerBlock>
      <ShimmerBlock></ShimmerBlock>
      <ShimmerBlock></ShimmerBlock>
      <ShimmerBlock></ShimmerBlock>
      <ShimmerBlock></ShimmerBlock>
      <ShimmerBlock></ShimmerBlock>
    </>
  );
}
