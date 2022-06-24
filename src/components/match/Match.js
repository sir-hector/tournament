import { useForm } from 'react-hook-form';

const Match = ({match, updateMatch}) => {
    const { handleSubmit, register, errors, unregister } = useForm();

    const onSubmit = (e) => {
        updateMatch(e);
    }

    return(
        <div>
            {match.team1.name}
            {match.result1}
            {match.team2.name}
            {match.result2}
            <form onSubmit={handleSubmit(onSubmit)} className="tournament-form">
                <input  {...register(`id`, {shouldUnregister: true})} value={match.id} hidden="true"></input>
                <input  {...register(`result1`, {shouldUnregister: true})}></input>
                <input  {...register(`result2`, {shouldUnregister: true})}></input>
                <input type='submit'></input>
            </form>
        </div>
    )
}

export default Match