import { useDispatch, useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import {genres} from '../assets/constants';
import { selectGenreListId } from '../redux/features/playerSlice';
import {useGetSongsByGenreQuery} from '../redux/services/shazamCore';


const Discover = () => {
 const dispatch = useDispatch();
 const {activeSong, isPlaying, genreListId} = useSelector((state) => state.player);

const {data, isFetching, error} = useGetSongsByGenreQuery(
    genreListId || 'POP'
);

if(isFetching) return <Loader title= 'Loading songs'/>;

if(error) return <Error/>;

const genreTitle = genres.find(({ value }) => value ===
genreListId)?.title;

return (
    <div className='flex flex-col'>
        <div className="w-full flex flex-col justify-between 
        items-center mt-4 mb-10 sm:flex-row">
            <h2 className='font-bold text-3xl text-white text-left'>
            Discover {genreTitle}
            </h2>
            <select
            onChange={(e) => dispatch(selectGenreListId(e.target.
                value))}
            value= {genreListId || 'pop'}
            className='rounded-lg bg-black text-gray-300 p-3
            text-sm outline-none mt-5 sm:mt-0'>

                {genres.map((genre) => <option 
                    key={genre.value} value={genre.value} >
                    {genre.title}
                    </option>)}

            </select>
        </div>

        <div className="flex flex-wrap justify-center gap-8 sm:justify-start">
            {data?.map((song, i) => (
                <SongCard 
                key={song.key}
                song={song}
                activeSong={activeSong}
                data={data}
                isPlaying={isPlaying}
                i={i}
                />
            ))}
        </div>
    </div>
)


};

export default Discover;
