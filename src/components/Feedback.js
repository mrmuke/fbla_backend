import '../feedback.css'
export default function Feedback(){
    return <container>
    <h2 style={{padding:'20px'}}>SMART Summary</h2>
    <details>
        <summary class="success">Pacing</summary>
        <ul>
            <li>
                Timing
                <p>You have about 36 seconds per question because the test is 60 minutes long with 100 questions, so come back later if you get stuck. </p>
                Double Check
                <p>Double check your answers because the score is based on the number of correct answers...</p>
            </li>
            <li>
                <div class="success">Journalism 1<span class="status">Just Right</span></div>
            </li>
            <li>
                <div class="warning">Journalism 2<span class="status">A Little Too Slow</span></div>
            </li>
        </ul>
    </details>
    <details open="open">
        <summary class="warning">Vocabulary</summary>
        <ul>
            Repetition
            <p>Repetition Repetition Repetition Repetition Repetition Repetition Repetition</p>
            <li>
                <div class="success">Journalism - Vocab 1<span class="status">High Percentage</span></div>
            </li>
            <li>
                <div class="warning">Journalism - Vocab 2<span class="status">Average</span><span class="info">Learning vocab is important and try a few more times so that you can truly master your objective tests.</span></div>
            </li>
            <li>
                <div class="success">Journalism - Vocab 3<span class="status">High Percentage</span></div>
            </li>
        </ul>
    </details>
    <details>
        <summary class="failure">Multiple Choice</summary>
        <ul>
            Instincts
            <p>Trust your instincts, because your first pick is often the right answer. Eliminate answers you know are not right.
</p>
            Choosing answers
            <p>A positive choice is more likely to be true than a negative choice. Beware of extreme words like "never". Usually the correct answer is the choice with the most information.
</p>
            <li>
                <div class="failure">Journalism 1<span class="status">Maybe take a little more time and look through each question carefully. You rushed a little.</span></div>
            </li>

        </ul>
    </details>
</container>
}