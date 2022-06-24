import { useForm } from 'react-hook-form';
import './css/match.css'

const Match = ({match, updateMatch}) => {
    const { handleSubmit, register, errors, unregister } = useForm();

    const onSubmit = (e) => {
        updateMatch(e);
    }

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="match-form">
                <input  {...register(`id`, {shouldUnregister: true})} value={match.id} hidden={true}></input>
                <div className='match-form_result'>
                {match.team1.name} {match.result1} - {match.result2} {match.team2.name} 
                </div>
                <div className='inputs'>
                <input  {...register(`result1`, {shouldUnregister: true})} className="score_input" ></input>
                <input  {...register(`result2`, {shouldUnregister: true})} className="score_input"></input>
                </div>
                <input type='submit' value="set score"></input>
            </form>
        </div>
    )
}

export default Match