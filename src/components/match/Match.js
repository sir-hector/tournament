import { useForm } from 'react-hook-form';

const Match = ({match, updateMatch}) => {
    const { handleSubmit, register, errors, unregister } = useForm();

    const onSubmit = (e) => {
        updateMatch(e);
    }

    console.log(match)
    return(
        <div>
            {match.team1.name}
            {match.result1}
            {match.team2.name}
            {match.result2}
            <form onSubmit={handleSubmit(onSubmit)} className="tournament-form">
                <input  {...register(`match`, {shouldUnregister: true})}></input>
                <input type='submit'></input>
            </form>
        </div>
    )
}

export default Match