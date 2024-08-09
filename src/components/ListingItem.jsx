import { formatDistanceToNow } from 'date-fns';
import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';

function ListingItem({ listing, id }) {
  // Ensure the timestamp is valid and can be converted to a Date object
  const date = listing.timestamp ? listing.timestamp.toDate() : null;

  // Custom formatter to remove the 'about' prefix
  const customFormatDistanceToNow = (date) => {
    const formattedDate = formatDistanceToNow(date, { addSuffix: true });
    return formattedDate.replace('about ', '');
  };

  // Get the distance to now using date-fns
  const fromNow = date ? customFormatDistanceToNow(date) : 'Date not available';

  return (
    <li className="bg-white relative flex flex-col justify-between items-center shadow-md hover:shadow-xl rounded-md overflow-hidden transition-shadow duration-150 m-[10px]">
      <Link className='contents' to={`/category/${listing.type}/${id}`}>
        <img
          src={listing.imgUrls[0]}
          alt={listing.name}
          className="h-[170px] w-full object-cover hover:scale-105 transition-scale duration-200 ease-in"
          loading='lazy'
        />
        <p className='absolute top-2 left-2 bg-[#3377cc] shadow-lg font-semibold uppercase text-white text-sm px-2 py-1 rounded z-10'>{fromNow}</p>
        <div className='w-full p-10 mb-2'>
          <div className='flex items-center space-x-1'>
            <MdLocationOn className='h-4 w-4 text-green-600' />
            <p className='font-semibold text-sm text-gray-600 truncate'>{listing.address}</p>
          </div>
          <p className='font-semibold mt-2 text-lg truncate'>{listing.name}</p>
          <p className='text-[#457b9d] mt-2 font-semibold'>
            $
            {listing.offer
              ? listing.discountedPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              : listing.regularPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            {listing.type === 'rent' && ' / Month'}
          </p>
          <div className='flex items-center mt-2 space-x-3'>
            <div className='flex items-center space-x-1'>
              <p className='font-bold text-xs'>
                {listing.bedrooms > 1 ? `${listing.bedrooms} Beds` : '1 Bed'}
              </p>
            </div>
            <div className='flex items-center space-x-1'>
              <p className='font-bold text-xs'>
                {listing.bathrooms > 1
                  ? `${listing.bathrooms} Baths`
                  : '1 Bath'}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default ListingItem;
