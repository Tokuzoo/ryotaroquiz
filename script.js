const $confirm = document.getElementById('confirm');

const $main = document.getElementById('main');

const $attention = document.getElementById('attention');

const $quizform = document.getElementById('quizform');

const $question = document.getElementById('question');

const $result = document.getElementById('result');

const $resultdisplay = document.getElementById('resultdisplay');

const quizset = [
    {
        statement: '涼太郎の年齢はいくつか。',
        choices: ['12','13','14','4637'],
        correct: '13'
    },
    {
        statement: '涼太郎の好きな食べ物はどれか。',
        choices: ['シチュー','焼肉','サンドウィッチ','マグロ'],
        correct: '焼肉'
    },
    {
        statement: '涼太郎の得意な楽器はどれか。',
        choices: ['太鼓','ピアノ','木琴','アコーディオン'],
        correct: '太鼓'
    },
    {
        statement: '涼太郎が人生で一番きつかったことはどれか。',
        choices: ['骨折','フラれた','やけど','捻挫'],
        correct: 'やけど'
    },
    {
        statement: '涼太郎が一番好きな学校で習った音楽はどれか。',
        choices: ['かっこう','エーデルワイス','プパポ','魔王'],
        correct: 'プパポ'
    },
    {
        statement: '涼太郎が好きな季節はどれか。',
        choices: ['春','夏','秋','冬'],
        correct: '冬'
    },
    {
        statement: '涼太郎の好きなNCS楽曲はどれか。',
        choices: ['Cloud 9','My heart','Hope','Cladles'],
        correct: 'Cladles'
    },
    {
        statement: '涼太郎の好きな教科はどれか。',
        choices: ['数学','社会','音楽','技術'],
        correct: '技術'
    },
    {
        statement: '涼太郎の睡眠時間はどれか。',
        choices: ['7時間','8時間','3時間','9時間'],
        correct: '7時間'
    },
    {
        statement: '涼太郎はマックでどれを飲むか。',
        choices: ['メロンソーダ','コーヒー','コーラ','紅茶'],
        correct: 'メロンソーダ'
    },
    {
        statement: '涼太郎はどの色が好きか。',
        choices: ['赤','青','緑','Rainbow'],
        correct: 'Rainbow'
    }
];

$attention.textContent = '数は' + (quizset.length - 1) + '以下でお願いします。';

let selectproblem;
const quizsetup = (b,bl) => {
    selectproblem = Math.floor(Math.random() * quizset.length);
    $question.textContent = quizset[selectproblem].statement;
    for(let i=0; i<bl; i++){
        b[i].textContent = quizset[selectproblem].choices[i];
    }
}


const createbuttons = () => {
    const $button = document.createElement('button');
    $button.classList.add('quizbuttons');
    $quizform.appendChild($button);
    $quizform.style.textAlign = 'center';
}

let correctans = 0;
$confirm.addEventListener('click',() => {
    const $input = document.getElementById('input').value;
    let remain = $input;
    if($input > 0){
        $main.classList.add('hide');
        for(let i=0; i<4; i++){
            createbuttons();
        }
        $confirm.remove();
        const $button = document.getElementsByTagName('button');
        quizsetup($button,$button.length);
        // buttoncilcked

        let buttonindex = 0;
        while(buttonindex < $button.length){
            $button[buttonindex].addEventListener('click',(e) => {
                if(e.target.textContent === quizset[selectproblem].correct){
                    alert('正解！');
                    quizset.splice(selectproblem,1);
                    quizsetup($button,$button.length);
                    remain--;
                    correctans++;
                    if(remain === 0){
                        alert('Finish!');
                        $quizform.classList.add('hide');
                        $result.classList.toggle('hide');
                        $resultdisplay.textContent = correctans + '/' + $input + '問です！';
                    }
                } else{
                    alert('不正解！');
                    quizset.splice(selectproblem,1);
                    quizsetup($button,$button.length);
                    remain--;
                    if(remain === 0){
                        alert('Finish!');
                        $quizform.classList.add('hide');
                        $result.classList.toggle('hide');
                        $resultdisplay.textContent = correctans + '/' + $input + '問です！';
                    }
                }
            })
            buttonindex++;
        }

        // end
    } else{
        alert('無効な値です。');
    }
})
