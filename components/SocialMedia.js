import {
  FaFacebookSquare,
  FaDiscord,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';
// import { IconContext } from 'react-icons';

const SocialMedia = ({
  fb, ig, disc, linkin, className, color, size,
}) => {
  const style = { color: `${color}`, fontSize: `${size}` };
  return (
    <div
      className={`flex flex-row justify-between w-7/12 sm:w-6/12 mx-auto ${className}`}
    >
      {fb && (
        <a href={`${fb}` || '#'} target="_blank" rel="noreferrer">
          <FaFacebookSquare style={style} />
        </a>

      )}
      {ig && (
        <a href={`${ig}` || '#'} target="_blank" rel="noreferrer">
          <FaInstagram style={style} />
        </a>

      )}

      {disc && (

        <a href={`${disc}` || '#'} target="_blank" rel="noreferrer">
          <FaDiscord style={style} />
        </a>
      )}

      {linkin && (

        <a href={`${linkin}` || '#'} target="_blank" rel="noreferrer">
          <FaLinkedin style={style} />
        </a>
      )}
    </div>
  );
};

export default SocialMedia;