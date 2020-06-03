var session = pl.create();
import { rules } from './rules.mjs';
const btn_submit = document.querySelector('#btn_submit');
const questions = [
  { 
    question_name: "age",
    question_describe: "Độ tuổi của bé?",
    options: [
      {
        option_name: "less_six_months",
        option_describe: "Từ 0 đến 6 tháng tuổi"
      },
      {
        option_name: "six_months_to_one_year",
        option_describe: "Từ 6 tháng đến 1 tuổi"
      },
      {
        option_name: "one_year_to_two_years",
        option_describe: "Từ 1 tuổi đến 2 tuổi"
      },
      {
        option_name: "greater_two_years",
        option_describe: "Từ 2 tuổi trở lên"
      }
    ]
  },
  { 
    question_name: "origin",
    question_describe: "Xuất xứ?",
    options: [
      {
        option_name: "korean",
        option_describe: "Hàn Quốc"
      },
      {
        option_name: "spanish",
        option_describe: "Tây Ban Nha"
      },
      {
        option_name: "england",
        option_describe: "Anh"
      },
      {
        option_name: "usa",
        option_describe: "Mỹ"
      },
      {
        option_name: "japan",
        option_describe: "Nhật Bản"
      },
      {
        option_name: "vietnam",
        option_describe: "Việt Nam"
      },
      {
        option_name: "france",
        option_describe: "Pháp"
      },
      {
        option_name: "don't_care",
        option_describe: "Gì cũng được"
      },
    ]
  },
  { 
    question_name: "price",
    question_describe: "Tầm giá?",
    options: [
      {
        option_name: "two-hundred_to_three-hundred",
        option_describe: "Từ 200k đến 300k"
      },
      {
        option_name: "three-hundred_to_four-hundred",
        option_describe: "Từ 300k đến 400k"
      },
      {
        option_name: "four-hundred_to_five-hundred",
        option_describe: "Từ 400k đến 500k"
      },
      {
        option_name: "five-hundred_to_six-hundred",
        option_describe: "Từ 500k đến 600k"
      },
      {
        option_name: "six-hundred_to_seven-hundred",
        option_describe: "Từ 600k đến 700k"
      },
      {
        option_name: "don't_care",
        option_describe: "Gì cũng được"
      },
    ]
  },
  { 
    question_name: "kind_of_milk",
    question_describe: "Loại sữa?",
    options: [
      {
        option_name: "powdered_milk",
        option_describe: "Sữa bột"
      },
      {
        option_name: "water_milk",
        option_describe: "Sữa nước"
      },
      {
        option_name: "don't_care",
        option_describe: "Gì cũng được"
      },
    ]
  },
  { 
    question_name: "functionality",
    question_describe: "Chức năng?",
    options: [
      {
        option_name: "gain_weight",
        option_describe: "Hỗ trợ tăng cân"
      },
      {
        option_name: "growth_healthy",
        option_describe: "Giúp cơ thể bé phát triển khỏe mạnh"
      },
      {
        option_name: "building_healthy_bones",
        option_describe: "Phát triển hệ xương - răng và chiều cao"
      },
      {
        option_name: "growth_nerve_system",
        option_describe: "Phát triển hệ thần kinh"
      },
      {
        option_name: "anti_constipation",
        option_describe: "Ngăn ngừa táo bón"
      },
      {
        option_name: "growth_brain",
        option_describe: "Phát triển trí não"
      },
      {
        option_name: "don't_care",
        option_describe: "Gì cũng được"
      },
    ]
  },
];
let user_answers = "";
let step = 0;

function loadSituation(step){
  let qs = document.querySelector('#qs');
  qs.innerHTML = questions[step]["question_describe"];
  let list_options = document.querySelector('#list-options');
  list_options.innerHTML = "";
  for (const option of questions[step]['options']) {
    list_options.innerHTML += `<li class="option">${option['option_describe']}</li>`
  }
  let sel = document.querySelector('#sel');
  sel.innerHTML = "";
  for (const [i, option] of questions[step]['options'].entries()) {
    sel.innerHTML += `<option value="${option['option_name']}">${i+1}</option>`
  }
}

function showResult(){
  let knowledge = user_answers + rules;
  session.consult(knowledge);
  session.query("milk(X).");

  let callback = function(Substitution){
    if(Substitution['links']){
      let results = document.querySelector('#list-results');
      results.innerHTML += `<li class="option">${Substitution['links']['X']['id']}</li>`;
    }
  }
  session.answer(callback.bind());
}

btn_submit.addEventListener("click", () => {
  if(step < questions['length']){
    const sel = document.querySelector('#sel');
    let knowledge = "";
    if(sel['value'] === "don't_care"){
      for (const option of questions[step]['options']) {
        if(option['option_name'] !== "don't_care")
        knowledge += questions[step]['question_name'] + '(' + option['option_name'] +').' + '\n';
      }
    }
    else{
      knowledge = questions[step]['question_name'] + '(' + sel['value'] +').';
    }
    user_answers = user_answers + knowledge + '\n';
  }
  step++;
  if(step < questions['length']){
    loadSituation(step);
  }
  else{
    showResult();
  }
})

// start app
loadSituation(step);










