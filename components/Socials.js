// links 
import Link from 'next/link';

// icons 
import { 
  RiYoutubeLine, 
  RiInstagramLine, 
  RiFacebookLine, 
  RiDribbleLine, 
  RiBehanceLine, 
  RiPinterestLine, 
} from 'react-icons/hi2';

const Socials = () => {
  return (
    <div>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiYoutubeLine />
      </Link>
    </div>
  );
};

export default Socials;
