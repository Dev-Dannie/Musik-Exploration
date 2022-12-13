import SongBar from './SongBar'

const RelatedSongs = ({data,isPlaying,activeSong,handlePauseClick, artistId,handlePlayClick}) => (
  <div className='flex flex-col'>
    <h1 className="font-bold text-3xl text-white">
      Related Songs:
    </h1>

    <div className="w-full flex flex-col mt-6">
      {data?.map((song, i) => (
        <SongBar
        key={`${song.key}-${artistId}-${i}`}
        song={song}
        i={i}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePause={handlePauseClick}
        handlePlay={handlePlayClick}/>
      ))}
    </div>
  </div>
);

export default RelatedSongs;
