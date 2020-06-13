var session = pl.create();
import { rules } from './rules.mjs';
String.prototype.replaceAt = function(index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

const btn_submit = document.querySelector('#btn_submit');
const questions = [
  { 
    question_name: "age",
    question_describe: "Độ tuổi của bé?",
    options: [
      {
        option_name: "six_months",
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
        option_name: "newzealand",
        option_describe: "New Zealand"
      },
      {
        option_name: "thailand",
        option_describe: "Thái Lan"
      },
      {
        option_name: "germany",
        option_describe: "Đức"
      },
      {
        option_name: "holland",
        option_describe: "Hà Lan"
      },
      {
        option_name: "denmark",
        option_describe: "Đan Mạch"
      },
      {
        option_name: "canada",
        option_describe: "Canada"
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
        option_name: "australia",
        option_describe: "Úc"
      },
      {
        option_name: "france",
        option_describe: "Pháp"
      },
      {
        option_name: "switzerland",
        option_describe: "Switzerland"
      },
      {
        option_name: "don't_care",
        option_describe: "Không quan trọng"
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
        option_describe: "Không quan trọng"
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
        option_describe: "Không quan trọng"
      },
    ]
  },
  { 
    question_name: "functionality",
    question_describe: "Chức năng?(có thể chọn 1 hoặc nhiều)",
    options: [
      {
        option_name: "gain_weight",
        option_describe: "Hỗ trợ tăng cân"
      },
      {
        option_name: "growth_height",
        option_describe: "Phát triển chiều cao"
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
        option_name: "increasing_resistance",
        option_describe: "Tăng sức đề kháng"
      },
      {
        option_name: "increase_immune_system",
        option_describe: "Tăng cường hệ miễn dịch"
      },
      {
        option_name: "support_digestive_system",
        option_describe: "Hỗ trợ hệ tiêu hóa"
      },
      {
        option_name: "growth_vision",
        option_describe: "Phát triển thị giác"
      },
      {
        option_name: "don't_care",
        option_describe: "Không quan trọng"
      },
    ]
  },
];
let user_answers = "";
let step = 0;

function loadSituation(step){
  let qs = document.querySelector('#qs');
  let sel = document.querySelector('#sel');
  qs.innerHTML = questions[step]["question_describe"];
  if(questions[step]['question_name'] === 'functionality'){
    sel['multiple'] = true;
  }
  else{
    sel['multiple'] = false;
  }
  let list_options = document.querySelector('#list-options');
  list_options.innerHTML = "";
  for (const option of questions[step]['options']) {
    list_options.innerHTML += `<li class="option">${option['option_describe']}</li>`
  }
  sel.innerHTML = "";
  for (const [i, option] of questions[step]['options'].entries()) {
    sel.innerHTML += `<option value="${option['option_name']}">${i+1}</option>`
  }
}

function showResult(){
  let knowledge = user_answers + rules;
  session.consult(knowledge);
  session.query("milk(X).");

  let obj = {
    stop : false,
    items: {}
  }

  let callback = function(Substitution){
    if(Substitution && Substitution.hasOwnProperty('links')){
      this.items[Substitution['links']['X']['id']] = 1;
    }
    else this.stop = true;
  }
  while(!obj.stop){
    session.answer(callback.bind(obj));
  }

  if(Object.keys(obj.items).length > 0){
    let results = document.querySelector('#list-results');
    results.innerHTML = "";
    for (const key in obj.items) {
      let nameItem = key.replace(/_/g," ");
      nameItem = nameItem.replace("so","số ")
      nameItem = nameItem.replaceAt(0,nameItem.charAt(0).toUpperCase());
      results.innerHTML += `<li class="option">${nameItem} <img src="/images/Vinlac.jpg"></img></li>`;
    }
  }
  else{
    let results = document.querySelector('#list-results');
    results.innerHTML = "Không tìm thấy sản phẩm tương ứng"
  }

}

btn_submit.addEventListener("click", () => {
  if(step < questions['length']){
    let knowledge = "";
    var values = $('#sel').val();
    if(questions[step]['question_name'] === 'functionality'){
      if(Array.isArray(values)){
        let check = values.indexOf("don't_care");
        if(check > -1){
          for (const option of questions[step]['options']) {
            if(option['option_name'] !== "don't_care")
            knowledge += questions[step]['question_name'] + '(' + option['option_name'] +').' + '\n';
          }
          knowledge += "functionality(fail,fail)."+"\n" + "functionality(fail,fail,fail)." 
        }
        else{
          let temp = '(';
          for (const value of values) {
            temp = temp + value + ',';
          }
          knowledge = questions[step]['question_name'] + temp.slice(0,temp.length-1) + ').';
          if(values.length === 1){
            knowledge += "\n"+ "functionality(fail,fail)."+"\n" + "functionality(fail,fail,fail)." 
          }
          else if(values.length === 2){
            knowledge += "\n" + "functionality(fail)."+"\n" + "functionality(fail,fail,fail)." 
          }
          else{
            knowledge += "\n" + "functionality(fail)."+"\n" + "functionality(fail,fail)." 
          }
        }
      }
      else{
        if(values === "don't_care"){
          for (const option of questions[step]['options']) {
            if(option['option_name'] !== "don't_care")
            knowledge += questions[step]['question_name'] + '(' + option['option_name'] +').' + '\n';
          }
          knowledge += "functionality(fail,fail)."+"\n" + "functionality(fail,fail,fail)." 
        }
        else{
          knowledge = questions[step]['question_name'] + '(' + values +').';
          knowledge += "\n" + "functionality(fail,fail)."+"\n" + "functionality(fail,fail,fail)." 
        }
      }
    }
    else{
      if(values === "don't_care"){
        for (const option of questions[step]['options']) {
          if(option['option_name'] !== "don't_care")
          knowledge += questions[step]['question_name'] + '(' + option['option_name'] +').' + '\n';
        }
      }
      else{
        knowledge = questions[step]['question_name'] + '(' + values +').';
      }
    }
    user_answers = user_answers + knowledge + '\n';
  }
  else{
    user_answers = "";
    step = -1;
    document.querySelector('#list-results').innerHTML = "";
    btn_submit.value = "Tiếp theo";
  }
  step++;
  if(step < questions['length']){
    loadSituation(step);
  }
  else{
    btn_submit.value = "Tư vấn lại";
    showResult();
  }
})

// start app
loadSituation(step);










