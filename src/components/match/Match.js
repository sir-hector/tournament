import { useForm } from 'react-hook-form';
import './css/match.css'

const Match = ({match, updateMatch}) => {
    const { handleSubmit, register, formState: {errors}, unregister } = useForm();

    const onSubmit = (e) => {
        updateMatch(e);
    }

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="match-form">
                <input  {...register(`id`, {shouldUnregister: true})} value={match.id} hidden={true}></input>
                <input  {...register(`team1`, {shouldUnregister: true})} value={match.team1.id} hidden={true}></input>
                <input  {...register(`team2`, {shouldUnregister: true})} value={match.team2.id} hidden={true}></input>
                <div className='match-form_result'>
                {match.team1.name} {match.result1} - {match.result2} {match.team2.name} 
                </div>
                <div className='inputs'>
                <input  {...register(`result1`, {shouldUnregister: true, pattern: /^[0-9]/i, required: true})} className="score_input" ></input>
                <input  {...register(`result2`, {shouldUnregister: true, pattern: /^[0-9]/i, required: true})} className="score_input"></input>
                </div>
                {errors.result1 && <p className='error-input'>Please provide score for first team</p>}
                {errors.result2 && <p className='error-input'>Please provide score for second team</p>}
                {match.winner && <div>FINISHED</div>}
                <input type='submit' value="set score" disabled={match.winner}></input>
            </form>
        </div>
    )
}

export default Match