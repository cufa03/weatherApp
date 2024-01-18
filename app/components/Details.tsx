import { BsSunrise, BsSunset } from 'react-icons/bs';
import { GiWindSlap, GiCompass } from 'react-icons/gi';
import { WiHumidity } from 'react-icons/wi';
import { MdAir } from 'react-icons/md';
import { CiTempHigh } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';

interface WeatherDetailsProps {
  data: {
    current: {
      wind_kph: number;
      humidity: number;
      wind_dir: string;
      pressure_mb: number;
      feelslike_c: number;
      vis_km: number;
    };
    forecast: {
      forecastday: {
        astro: {
          sunrise: string;
          sunset: string;
        };
      }[];
    };
  };
}

const Details = ({ data }: WeatherDetailsProps) => {
  return (
    <>
      <div className='p-12'>
        <h1 className='mb-4 text-2xl text-white italic font-bold'>
          {' '}
          Weather Details
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center italic'>
          <div className='bg-white/50 flex items-center justify-center gap-6 p-4 rounded-xl'>
            <div className='text-2xl'>
              <h3>Wind Speed : </h3>
              <h3 className=''>{data.current.wind_kph} km/h</h3>
            </div>
            <div className='text-5xl'>
              <GiWindSlap font />
            </div>
          </div>
          <div className='flex items-center justify-center p-4 rounded-xl gap-6 bg-white/50'>
            <div className='text-2xl'>
              <h3>Humidity : </h3>
              <h3 className=''>{data.current.humidity} %</h3>
            </div>
            <div className='text-5xl'>
              <WiHumidity />
            </div>
          </div>
          <div className='flex items-center justify-center p-4 rounded-xl gap-6 bg-white/50'>
            <div className='text-2xl'>
              <h3>Wind Direction : </h3>
              <h3 className=''>{data.current.wind_dir} </h3>
            </div>
            <div className='text-5xl'>
              <GiCompass />
            </div>
          </div>
          <div className='flex items-center justify-center p-4 rounded-xl gap-6 bg-white/50'>
            <div className='text-2xl'>
              <h3>Sunrise : </h3>
              <h3 className=''>
                {data.forecast.forecastday[0].astro.sunrise}{' '}
              </h3>
            </div>
            <div className='text-5xl'>
              <BsSunrise />
            </div>
          </div>
          <div className='flex items-center justify-center p-4 rounded-xl gap-6 bg-white/50'>
            <div className='text-2xl'>
              <h3>Sunset : </h3>
              <h3 className=''>{data.forecast.forecastday[0].astro.sunset}</h3>
            </div>
            <div className='text-5xl'>
              <BsSunset />
            </div>
          </div>
          <div className='flex items-center justify-center p-4 rounded-xl gap-6 bg-white/50'>
            <div className='text-2xl'>
              <h3>Air Pressure: </h3>
              <h3 className=''>{data.current.pressure_mb} hPa</h3>
            </div>
            <div className='text-5xl'>
              <MdAir />
            </div>
          </div>
          <div className='flex items-center justify-center p-4 rounded-xl gap-6 bg-white/50'>
            <div className='text-2xl'>
              <h3>Feel Like : </h3>
              <h3 className=''>{data.current.feelslike_c} °</h3>
            </div>
            <div className='text-5xl'>
              <CiTempHigh />
            </div>
          </div>
          <div className='flex items-center justify-center p-4 rounded-xl gap-6 bg-white/50'>
            <div className='text-2xl'>
              <h3>Visibility : </h3>
              <h3 className=''>{data.current.vis_km} km</h3>
            </div>
            <div className='text-5xl'>
              <FaEye />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
