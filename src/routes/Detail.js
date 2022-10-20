import { useEffect, useState } from "react";
import{useParams} from "react-router-dom";

function Detail() {
    const [loading ,setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const {id} = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setLoading(false);
        setMovie(json.data.movie);
    };

    useEffect(()=>{
        getMovie();
    },[])
    return (
        <div>
            {loading ? <h1>Loading...</h1> : 
            <div>
                <img src={movie.background_image}/>
                <div>
                    <div>
                        <img src={movie.medium_cover_image}/>
                        <div>
                            <h1>{movie.title}</h1>
                            <div>
                                <span>{movie.year}년</span>
                                <span>{movie.runtime}분</span>
                            </div>
                            <div>
                                {movie.genres.map((m,key) => 
                                    <span key={key}>{m}</span>
                                )}
                            </div>

                        </div>
                    </div>

                    <div>
                        <span>Rate: {movie.rating}점</span>
                        <span>Download: {movie.download_count}회</span>
                        <span>Like: {movie.like_count}개</span>
                    </div>
                </div>
                           
                <div>{movie.description_full}</div>
            </div>}
        </div>    
    );
}

export default Detail;