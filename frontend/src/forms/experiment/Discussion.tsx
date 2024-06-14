import { useFormContext } from "../../hooks/useFormContext";

export function Discussion() {
    const { register, prevForm, errors } = useFormContext()

    return (
        <div className="flex flex-col">
            <p className="font-bold text-2xl mb-6">DISCUSSION</p>

            <label htmlFor="discussion-evaluationOfResultsAndImplications">Evaluation of Results and Implications: </label>
            <input id="discussion-evaluationOfResultsAndImplications" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('discussion.evaluationOfResultsAndImplications')} />
            {errors.discussion?.evaluationOfResultsAndImplications && <span>{errors.discussion.evaluationOfResultsAndImplications.message}</span>}

            <label htmlFor="discussion-threatsValidity">Threats to Validity: </label>
            <input id="discussion-threatsValidity" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('discussion.threatsValidity')} />
            {errors.discussion?.threatsValidity && <span>{errors.discussion.threatsValidity.message}</span>}

            <label htmlFor="discussion-isFollowThreatsByWohlin">Follow threats by Wohlin? </label>
            <input id="discussion-isFollowThreatsByWohlin" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('discussion.isFollowThreatsByWohlin')} />
            {errors.discussion?.isFollowThreatsByWohlin && <span>{errors.discussion.isFollowThreatsByWohlin.message}</span>}

            <label htmlFor="discussion-inferences">Inferences: </label>
            <input id="discussion-inferences" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('discussion.inferences')} />
            {errors.discussion?.inferences && <span>{errors.discussion.inferences.message}</span>}

            <label htmlFor="discussion-lessonsLearned">Lessons Learned: </label>
            <input id="discussion-lessonsLearned" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('discussion.lessonsLearned')} />
            {errors.discussion?.lessonsLearned && <span>{errors.discussion.lessonsLearned.message}</span>}

            <button type="submit" className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                NEXT
            </button>

            <button type="button" onClick={prevForm} className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                PREV
            </button>
        </div>
    )
}