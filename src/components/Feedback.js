import '../feedback.css'
export default function Feedback(){
    return <container>
    <h2 style={{padding:'20px'}}>SMART Summary</h2>
    <details>
        <summary class="success">Pacing</summary>
        <ul>
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
            <li>
                <div class="failure">Journalism 1<span class="status">Maybe take a little more time and look through each question carefully. You rushed a little.</span></div>
            </li>

        </ul>
    </details>
</container>
}