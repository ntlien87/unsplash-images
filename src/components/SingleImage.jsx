const SingleImage = ({ preview_photos }) => {
  const image = preview_photos?.[2]?.urls?.regular

  return (
    <div>
      <img
        src={image}
        alt="images"
        className="w-full h-[300px] object-cover rounded-sm"
      />
    </div>
  )
}
export default SingleImage
