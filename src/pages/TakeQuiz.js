
import { useEffect, useState } from "react"
import QuizService from '../services/QuizService'
import Modal from 'react-modal';
const quizService = new QuizService()
export default function TakeQuiz(props) {
  const [quiz, setQuiz] = useState(null)
  const id = props.match.params.id
  const [answers, setAnswers] = useState([])
  const [index, setIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(-1)
  const [messages, setMessages] = useState([])
  const [confirmModal, setConfirmModal] = useState(false)
  const [leaderboard, setLeaderboard] = useState([])
  const [percentile, setPercentile] = useState(null)

  const [displayedLeaderboard,setDisplayedLeaderboard]=useState([])
  const [displayedPercentile,setDisplayedPercentile]=useState(null)

  useEffect(() => {
    quizService.getQuiz(id)
      .then(result => {
        initQuiz(result)
      })
  }, [])
  function initQuiz(result) {
    setQuiz(result.data.quiz)
    if (result.data.quiz.quiztakers_set.completed) {
      setMessages(result.data.quiz.quiztakers_set.usersanswer_set.map(answer => answer.message))
      let temp = getPercentile(result.data.quiz.all_quiz_takers.map(c => c.score), result.data.quiz.quiztakers_set.score)
      setScore(result.data.quiz.quiztakers_set.score)
      setLeaderboard(result.data.quiz.all_quiz_takers)
      setPercentile(temp)
      setDisplayedLeaderboard(result.data.quiz.all_quiz_takers)
      setDisplayedPercentile(temp)
      //quizService.getAnswers(result.data.quiz.id)
    }
    initAnswers(result.data.quiz)
  }
  const getPercentile = (arr, val) =>
    (100 *
      arr.reduce(
        (acc, v) => acc + (v < val ? 1 : 0) + (v === val ? 0.5 : 0),
        0
      )) /
    arr.length;

  function initAnswers(quiz) {
    const usersAnswers = quiz.quiztakers_set.usersanswer_set;
    let array = []
    var set = false
    for (let i = 0; i < usersAnswers.length; i++) {
      if (usersAnswers[i]['answer'].length > 0) {
        console.log(usersAnswers[i]['answer'])
        array.push(usersAnswers[i]['answer']);

      }
      else {

        if (!set) {
          set = true
          setIndex(i)
        }


      }

    }
    console.log(array)
    setAnswers(array)
  }
  function distance(lat1, lon1, lat2, lon2) {
    var radlat1 = Math.PI * lat1/180
    var radlat2 = Math.PI * lat2/180
    var theta = lon1-lon2
    var radtheta = Math.PI * theta/180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist)
    dist = dist * 180/Math.PI
    dist = dist * 60 * 1.1515 *1.609344
    return dist
  }
  function saveAnswer() {
    const body = {
      "quiztaker": quiz.quiztakers_set.id,
      "question": quiz.question_set[index].id,
      "answer": selectedAnswer
    }
    quizService.saveAnswer(body)
  }
  function getStateLeaderboard(){
    let userState=quiz.quiztakers_set.state
    setDisplayedLeaderboard(quiz.all_quiz_takers.filter(e=>e.state==userState))
    setDisplayedPercentile(getPercentile(quiz.all_quiz_takers.filter(e=>e.state==userState).map(c => c.score), quiz.quiztakers_set.score))
    
      
  }
  function getNationalLeaderboard(){
    setDisplayedLeaderboard(leaderboard)
    setDisplayedPercentile(percentile)
    
  }
  function submitQuiz() {


    navigator.geolocation.getCurrentPosition(function (position) {
      var state = "IL"
      let lat = position.coords.latitude
      let lng = position.coords.longitude
      let states = { "AK": [63.588753, -154.493062], "AL": [32.318231, -86.902298], "AR": [35.20105, -91.831833], "AZ": [34.048928, -111.093731], "CA": [36.778261, -119.417932], "CO": [39.550051, -105.782067], "CT": [41.603221, -73.087749], "DC": [38.905985, -77.033418], "DE": [38.910832, -75.52767], "FL": [27.664827, -81.515754], "GA": [32.157435, -82.907123], "HI": [19.898682, -155.665857], "IA": [41.878003, -93.097702], "ID": [44.068202, -114.742041], "IL": [40.633125, -89.398528], "IN": [40.551217, -85.602364], "KS": [39.011902, -98.484246], "KY": [37.839333, -84.270018], "LA": [31.244823, -92.145024], "MA": [42.407211, -71.382437], "MD": [39.045755, -76.641271], "ME": [45.253783, -69.445469], "MI": [44.314844, -85.602364], "MN": [46.729553, -94.6859], "MO": [37.964253, -91.831833], "MS": [32.354668, -89.398528], "MT": [46.879682, -110.362566], "NC": [35.759573, -79.0193], "ND": [47.551493, -101.002012], "NE": [41.492537, -99.901813], "NH": [43.193852, -71.572395], "NJ": [40.058324, -74.405661], "NM": [34.97273, -105.032363], "NV": [38.80261, -116.419389], "NY": [43.299428, -74.217933], "OH": [40.417287, -82.907123], "OK": [35.007752, -97.092877], "OR": [43.804133, -120.554201], "PA": [41.203322, -77.194525], "PR": [18.220833, -66.590149], "RI": [41.580095, -71.477429], "SC": [33.836081, -81.163725], "SD": [43.969515, -99.901813], "TN": [35.517491, -86.580447], "TX": [31.968599, -99.901813], "UT": [39.32098, -111.093731], "VA": [37.431573, -78.656894], "VT": [44.558803, -72.577841], "WA": [47.751074, -120.740139], "WI": [43.78444, -88.787868], "WV": [38.597626, -80.454903], "WY": [43.075968, -107.290284] }
      let minDistance= 1000000000000
      for (const [key, value] of Object.entries(states)) {
        let dist=distance(lat, lng, value[0], value[1])
        if (dist < minDistance) {
          state=key
          minDistance=dist
      }
      }
      const body = {
        "quiztaker": quiz.quiztakers_set.id,
        "question": quiz.question_set[index].id,
        "answer": selectedAnswer,
        "state":state
      }
      quizService.submitQuiz(body, id).then(result => {
        setScore(result.data.quiztakers_set.score)
        setMessages(result.data.quiztakers_set.usersanswer_set.map(answer => answer.message))
        let temp = getPercentile(result.data.all_quiz_takers.map(c => c.score), result.data.quiztakers_set.score)
        setLeaderboard(result.data.all_quiz_takers)
        setPercentile(temp)
        setDisplayedLeaderboard(result.data.all_quiz_takers)
        setDisplayedPercentile(temp)
      })
    });

  }
  function retakeQuiz() {
    quizService.retakeQuiz(id).then(result => {
      initQuiz(result)
      setScore(-1)
      setConfirmModal(false)
      setIndex(0)
    })
  }
  function next() {

    if (index == quiz.question_set.length - 1) {
      setConfirmModal(true)
      return;
    }
    if (selectedAnswer && selectedAnswer.length > 0) {
      saveAnswer()
    }



    if (index !== quiz.question_set.length - 1) {
      setIndex(index + 1)
      setSelectedAnswer(null)
    }
  }

  function selectAnswer(id) {
    setSelectedAnswer(id)
    var arr = answers
    arr[index] = id
    console.log(arr)
    setAnswers(arr)

  }


  function previous() {
    if (selectedAnswer) {
      saveAnswer()
    }

    if (index != 0) {
      setIndex(index - 1)
      setSelectedAnswer(null)
    }
  }
  if (!quiz) {
    return null
  }
  if (score != -1) {
    return (<div><div className="table-title">
      <h2 style={{
        border: 'none',
        background: '#1586CA',
        padding: '12px',
        color: 'white',
        borderRadius: '10px',
        margin: '20px',
        marginRight: '5rem',
        marginLeft: '5rem'
      }}>{quiz.name} </h2>

      <div className="top-score-container" style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ padding: '15px' }}>
          <Score score={score} /><p>{displayedPercentile}th percentile</p>        <button onClick={retakeQuiz} className="take-quiz">Retake</button>
        </div><div style={{display:'flex',flexDirection:'column'}}><div class="region-select-container">
  <label>
      <select onChange={e=>{if(e.target.value=="National"){
        getNationalLeaderboard()
      }else{
        getStateLeaderboard()
      }}}>
          <option value="National">National Level</option>
          <option value="State">State Level</option>
      </select>
  </label>
</div><Leaderboard leaderboard={displayedLeaderboard} /></div></div>
    </div>
      <table className="table-fill">
        <thead>
          <tr>
            <th className="text-left">Question</th>
            <th className="text-left">Answer</th>
          </tr>
        </thead>
        <tbody className="table-hover">

          {messages.map((message, index) => (
            <tr>
              <td className="text-left">{quiz.question_set[index] && quiz.question_set[index].label}</td>
              <td className="text-left">{message}</td>
            </tr>
          ))}

        </tbody>

      </table>
    </div>)
  }

  return <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center', background: '#1586CA' }}>
    <Modal
      isOpen={confirmModal}>
      <div className="buttons" style={{ diplay: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '10%' }}>
        <h2>Confirm Submission</h2>
        <p>{quiz.question_set.length - answers.filter(e => e.length > 0).length ? `You have ${quiz.question_set.length - answers.filter(e => e.length > 0).length} unanswered, are you sure you want to submit?` : "Check all of your answers"}</p>
        <button onClick={submitQuiz}>Submit</button><button onClick={() => setConfirmModal(false)}>Cancel</button>
      </div>
    </Modal>
    <div class="container mt-5">
      <div class="d-flex justify-content-center row">
        <div class="col-md-9 col-lg-9">
          <div class="border">
            <div class="question bg-white p-3 border-bottom">
              <div class="d-flex flex-row justify-content-between align-items-center mcq">
                <h4>MCQ Quiz</h4><span>QUESTION  {index + 1} OF {quiz.question_set.length}</span>
              </div>
            </div>
            <div class="question bg-white p-3 border-bottom">
              <Question selectedAnswer={answers[index]} question={quiz['question_set'][index]} selectAnswer={selectAnswer} />


            </div>
            <div class="d-flex flex-row justify-content-between align-items-center p-3 bg-white"><button class="btn btn-primary d-flex align-items-center" type="button" onClick={previous}><i class="fa fa-angle-left mt-1 mr-1" ></i>&nbsp;Previous</button><button onClick={next} class="btn btn-primary  align-items-center" type="button">{index == quiz.question_set.length - 1 ? 'Submit' : 'Next'}<i class="fa fa-angle-right ml-2"></i></button></div>
          </div>
        </div>
      </div>
    </div>
    {/* <div style={{maxWidth:'550px',background:'white',borderRadius:'10px',padding:'10px'}}>
    <div className="question-wrapper">
      <div className="question-number">
        QUESTION  {index + 1} OF {quiz.question_set.length}
      </div>
      <Question selectedAnswer={answers[index]} question={quiz['question_set'][index]} selectAnswer={selectAnswer} />


    </div>

    <div className="buttons">
      <button onClick={previous}>
        Previous
        </button>
      <button onClick={next}> {index == quiz.question_set.length - 1 ? 'Submit' : 'Next'}
      </button>
    </div>
  </div> */}</div>
}
function Question({ question, selectAnswer, selectedAnswer }) {
  return (
    <>
      <div class="d-flex flex-row align-items-center question-title">
        <h3 class="text-danger">Q.</h3>
        <h5 class="mt-1 ml-2">{question.label}</h5>
      </div>
      {question.question_type === "multiple" ? question['answer_set'].map((answer, index) => (
        <Answer key={answer.id} answer={answer} index={index} selectAnswer={selectAnswer} selectedAnswer={selectedAnswer} />
      )) :
        question.question_type === "dropdown" ?
          <select value={selectedAnswer} onChange={e => selectAnswer([+e.target.value])}>
            <option value={null} selected disabled hidden>Choose here</option>
            {question['answer_set'].map(c => (
              <option value={c.id} key={c.id}>{c.label}</option>

            ))}

          </select> :

          <div>
            {question['answer_set'].map(c => (
              <Checkbox selectedAnswer={selectedAnswer} selectAnswer={selectAnswer} key={c.id} answer={c} />

            ))}     </div>}
    </>
  )
}
function Checkbox({ answer, selectAnswer, selectedAnswer }) {
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    if (selectedAnswer && selectedAnswer.includes(answer.id)) {
      setChecked(true)
    }
  }, [selectedAnswer])
  function changeAnswer(e) {
    if (!checked) {
      if (!selectedAnswer) {
        selectedAnswer = []
      }
      selectedAnswer.push(+e.target.value);
      selectAnswer(selectedAnswer);
      setChecked(true)
    } else {
      selectedAnswer.splice(selectedAnswer.indexOf(+e.target.value), 1);
      selectAnswer(selectedAnswer);
      setChecked(false)
    }
  }
  return <div><input class="mr-2" checked={checked} type="checkbox" onChange={e => changeAnswer(e)} value={answer.id} />{answer.label}</div>
}
function Answer({ answer, selectAnswer, selectedAnswer }) {
  return <div class="ans ml-2">
    <label class="radio"> <input onChange={(event) => { if (event.currentTarget.checked) { selectAnswer([answer.id]) } }} checked={selectedAnswer == answer.id} type="radio" /> <span>{answer.label}</span>
    </label>
  </div>
}
function Score({ score }) {
  if (score <= 60) {
    return <div><h1 style={{ fontSize: '100px' }}>&#128546;{score}%</h1><h2 style={{ color: 'red', textDecorationLine: 'underline', border: 'none' }}>Uh oh. Better luck next time.</h2></div>
  }
  else if (score <= 80) {
    return <div><h1 style={{ fontSize: '100px' }}>&#128512;{score}%</h1><h2 style={{ color: 'orange', textDecorationLine: 'underline', border: 'none' }}>
      You can do it! Keep trying!</h2></div>
  }
  else {
    return <div><h1 style={{ fontSize: '100px' }}>&#x1F61C;{score}%</h1><h2 style={{ color: 'green', textDecorationLine: 'underline', border: 'none' }}>
      Congrats! You did it!</h2></div>
  }

}

function Leaderboard({ leaderboard }) {
  return (

    <div class="leaderboard-container">
      <div class="leaderboard">
        <div class="head">
          <i class="fas fa-crown"></i>
          <h3>Leaderboard</h3>
        </div>
        <div class="body">
          <ol>
            {leaderboard.map(taker => (
              <li key={taker.id}>
                <mark>{taker.user.username}</mark>
                <small>{taker.score}%</small>
              </li>
            ))}


          </ol>
        </div>
      </div>
    </div>

  )
}